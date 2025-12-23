.PHONY: fmt fmt-check build build-sizes test clean anvil deploy deploy-local deploy-sepolia deploy-reactive deploy-crosschain reactive-subscribe reactive-cover-debt reactive-topup-subscribe reactive-reactivate interact interact-sepolia status-sepolia deposit-sepolia deposit-eth-sepolia evaluate-sepolia redeem-sepolia

ifneq (,$(wildcard .env))
include .env
export
endif

RPC_URL ?= http://localhost:8545
REACTIVE_RPC_URL ?= $(REACTIVE_RPC)
PRIVATE_KEY ?=
REACTIVE_PRIVATE_KEY ?=
ANVIL_DEFAULT_PRIVATE_KEY ?= 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
TOP_UP_WEI ?= 0
SENDER_ARGS := $(if $(strip $(PRIVATE_KEY)),--private-key $(PRIVATE_KEY),)
REACTIVE_SENDER_ARGS := $(if $(strip $(REACTIVE_PRIVATE_KEY)),--private-key $(REACTIVE_PRIVATE_KEY),$(SENDER_ARGS))
SEPOLIA_CHAIN_ID := 11155111

fmt:
	forge fmt

fmt-check:
	forge fmt --check

build:
	forge build

build-sizes:
	forge build --sizes

test:
	forge test -vvv

clean:
	forge clean

anvil:
	anvil

deploy:
	forge script script/DeployPredator.s.sol:DeployPredator --rpc-url $(RPC_URL) --broadcast $(SENDER_ARGS) -vvvv

deploy-local:
	USE_MOCKS=true DEPOSIT_ASSETS=1000e18 forge script script/DeployPredator.s.sol:DeployPredator --rpc-url $(RPC_URL) --broadcast --private-key $(if $(strip $(PRIVATE_KEY)),$(PRIVATE_KEY),$(ANVIL_DEFAULT_PRIVATE_KEY)) -vvvv

deploy-sepolia:
	forge script script/DeployPredator.s.sol:DeployPredator --sig "runSepolia()" --rpc-url $(RPC_URL) --broadcast $(SENDER_ARGS) -vvvv

deploy-reactive:
	@MANAGER=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); m=[t.get("contractAddress") for t in txs if t.get("contractAddress") and "PredatorReactiveManager" in (t.get("contractName") or "")]; print(m[-1] if m else "")' broadcast/DeployPredator.s.sol/$(SEPOLIA_CHAIN_ID)/runSepolia-latest.json); \
	test -n "$$MANAGER"; \
	forge script script/DeployPredator.s.sol:DeployPredator --sig "runReactive(address)" $$MANAGER --rpc-url $(REACTIVE_RPC_URL) --broadcast $(REACTIVE_SENDER_ARGS) -vvvv

deploy-crosschain: deploy-sepolia deploy-reactive

reactive-subscribe:
	@SENTINEL=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); a=[t.get("contractAddress") for t in txs if t.get("contractAddress")]; print(a[-1] if a else "")' broadcast/DeployPredator.s.sol/5318007/runReactive-latest.json); \
	test -n "$$SENTINEL"; \
	cast send $$SENTINEL "subscribe()" --rpc-url $(REACTIVE_RPC_URL) $(REACTIVE_SENDER_ARGS)

reactive-cover-debt:
	@SENTINEL=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); a=[t.get("contractAddress") for t in txs if t.get("contractAddress") and (t.get("contractName") or "") == "PredatorSentinel"]; print(a[-1] if a else "")' broadcast/DeployPredator.s.sol/5318007/runReactive-latest.json); \
	test -n "$$SENTINEL"; \
	if [ "$(TOP_UP_WEI)" != "0" ]; then cast send $$SENTINEL --value $(TOP_UP_WEI) --rpc-url $(REACTIVE_RPC_URL) $(REACTIVE_SENDER_ARGS) >/dev/null; fi; \
	cast send $$SENTINEL "coverDebt()" --rpc-url $(REACTIVE_RPC_URL) $(REACTIVE_SENDER_ARGS)

reactive-topup-subscribe:
	@SENTINEL=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); a=[t.get("contractAddress") for t in txs if t.get("contractAddress") and (t.get("contractName") or "") == "PredatorSentinel"]; print(a[-1] if a else "")' broadcast/DeployPredator.s.sol/5318007/runReactive-latest.json); \
	test -n "$$SENTINEL"; \
	if [ "$(TOP_UP_WEI)" != "0" ]; then cast send $$SENTINEL --value $(TOP_UP_WEI) --rpc-url $(REACTIVE_RPC_URL) $(REACTIVE_SENDER_ARGS) >/dev/null; fi; \
	cast send $$SENTINEL "subscribe()" --rpc-url $(REACTIVE_RPC_URL) $(REACTIVE_SENDER_ARGS)

reactive-reactivate: reactive-cover-debt reactive-topup-subscribe

interact:
	forge script script/InteractPredator.s.sol:InteractPredator --rpc-url $(RPC_URL) --broadcast $(SENDER_ARGS) -vvvv

interact-sepolia:
	@VAULT=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); a=[t.get("contractAddress") for t in txs if t.get("contractAddress") and "PredatorVault" in (t.get("contractName") or "")]; print(a[-1] if a else "")' broadcast/DeployPredator.s.sol/$(SEPOLIA_CHAIN_ID)/runSepolia-latest.json); \
	MANAGER=$$(python3 -c 'import json,sys; p=sys.argv[1]; d=json.load(open(p)); txs=d.get("transactions",[]); a=[t.get("contractAddress") for t in txs if t.get("contractAddress") and "PredatorReactiveManager" in (t.get("contractName") or "")]; print(a[-1] if a else "")' broadcast/DeployPredator.s.sol/$(SEPOLIA_CHAIN_ID)/runSepolia-latest.json); \
	test -n "$$VAULT"; \
	test -n "$$MANAGER"; \
	VAULT=$$VAULT MANAGER=$$MANAGER forge script script/InteractPredator.s.sol:InteractPredator --rpc-url $(RPC_URL) --broadcast $(SENDER_ARGS) -vvvv

status-sepolia:
	DO_STATUS=true DO_EVALUATE=false DEPOSIT_ASSETS=0 DEPOSIT_ETH=0 REDEEM_SHARES=0 $(MAKE) interact-sepolia

deposit-sepolia:
	DO_STATUS=true DO_EVALUATE=false DEPOSIT_ETH=0 REDEEM_SHARES=0 $(MAKE) interact-sepolia

deposit-eth-sepolia:
	DO_STATUS=true DO_EVALUATE=false DEPOSIT_ASSETS=0 REDEEM_SHARES=0 $(MAKE) interact-sepolia

evaluate-sepolia:
	DO_STATUS=true DO_EVALUATE=true DEPOSIT_ASSETS=0 DEPOSIT_ETH=0 REDEEM_SHARES=0 $(MAKE) interact-sepolia

redeem-sepolia:
	DO_STATUS=true DO_EVALUATE=false DEPOSIT_ASSETS=0 DEPOSIT_ETH=0 $(MAKE) interact-sepolia
