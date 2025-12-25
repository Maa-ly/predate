.PHONY: fmt fmt-check build build-sizes test clean anvil deploy deploy-local deploy-sepolia deploy-reactive deploy-crosschain reactive-subscribe reactive-cover-debt reactive-topup-subscribe reactive-reactivate interact interact-sepolia status-sepolia deposit-sepolia deposit-eth-sepolia evaluate-sepolia redeem-sepolia

ifneq (,$(wildcard .env))
include .env
export
endif

CONTRACTS_DIR := contracts

fmt:
	$(MAKE) -C $(CONTRACTS_DIR) fmt

fmt-check:
	$(MAKE) -C $(CONTRACTS_DIR) fmt-check

build:
	$(MAKE) -C $(CONTRACTS_DIR) build

build-sizes:
	$(MAKE) -C $(CONTRACTS_DIR) build-sizes

test:
	$(MAKE) -C $(CONTRACTS_DIR) test

clean:
	$(MAKE) -C $(CONTRACTS_DIR) clean

anvil:
	$(MAKE) -C $(CONTRACTS_DIR) anvil

deploy:
	$(MAKE) -C $(CONTRACTS_DIR) deploy

deploy-local:
	$(MAKE) -C $(CONTRACTS_DIR) deploy-local

deploy-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) deploy-sepolia

deploy-reactive:
	$(MAKE) -C $(CONTRACTS_DIR) deploy-reactive

deploy-crosschain:
	$(MAKE) -C $(CONTRACTS_DIR) deploy-crosschain

reactive-subscribe:
	$(MAKE) -C $(CONTRACTS_DIR) reactive-subscribe

reactive-cover-debt:
	$(MAKE) -C $(CONTRACTS_DIR) reactive-cover-debt

reactive-topup-subscribe:
	$(MAKE) -C $(CONTRACTS_DIR) reactive-topup-subscribe

reactive-reactivate:
	$(MAKE) -C $(CONTRACTS_DIR) reactive-reactivate

interact:
	$(MAKE) -C $(CONTRACTS_DIR) interact

interact-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) interact-sepolia

status-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) status-sepolia

deposit-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) deposit-sepolia

deposit-eth-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) deposit-eth-sepolia

evaluate-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) evaluate-sepolia

redeem-sepolia:
	$(MAKE) -C $(CONTRACTS_DIR) redeem-sepolia
