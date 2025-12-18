.PHONY: fmt fmt-check build build-sizes test clean anvil deploy deploy-local

RPC_URL ?= http://localhost:8545
PRIVATE_KEY ?=
ANVIL_DEFAULT_PRIVATE_KEY ?= 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
SENDER_ARGS := $(if $(strip $(PRIVATE_KEY)),--private-key $(PRIVATE_KEY),)

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
