// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {AbstractPausableReactive} from "reactive-lib/abstract-base/AbstractPausableReactive.sol";
import {IReactive} from "reactive-lib/interfaces/IReactive.sol";

contract PredatorSentinel is AbstractPausableReactive {
    uint256 public immutable sourceChainId;
    address public immutable aavePool;
    address public immutable morphoVault;

    uint256 public immutable destinationChainId;
    address public immutable destinationManager;
    uint64 public immutable destinationGasLimit;

    uint256 internal immutable aaveReserveDataUpdatedTopic0;
    uint256 internal immutable erc4626DepositTopic0;
    uint256 internal immutable erc4626WithdrawTopic0;

    constructor(
        uint256 sourceChainId_,
        address aavePool_,
        address morphoVault_,
        uint256 destinationChainId_,
        address destinationManager_,
        uint64 destinationGasLimit_
    ) {
        require(aavePool_ != address(0), "AAVE_ZERO");
        require(morphoVault_ != address(0), "MORPHO_ZERO");
        require(destinationManager_ != address(0), "MANAGER_ZERO");

        sourceChainId = sourceChainId_;
        aavePool = aavePool_;
        morphoVault = morphoVault_;
        destinationChainId = destinationChainId_;
        destinationManager = destinationManager_;
        destinationGasLimit = destinationGasLimit_;

        aaveReserveDataUpdatedTopic0 =
            uint256(keccak256("ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"));
        erc4626DepositTopic0 = uint256(keccak256("Deposit(address,address,uint256,uint256)"));
        erc4626WithdrawTopic0 = uint256(keccak256("Withdraw(address,address,address,uint256,uint256)"));

        if (!vm) {
            service.subscribe(
                sourceChainId, aavePool, aaveReserveDataUpdatedTopic0, REACTIVE_IGNORE, REACTIVE_IGNORE, REACTIVE_IGNORE
            );
            service.subscribe(
                sourceChainId, morphoVault, erc4626DepositTopic0, REACTIVE_IGNORE, REACTIVE_IGNORE, REACTIVE_IGNORE
            );
            service.subscribe(
                sourceChainId, morphoVault, erc4626WithdrawTopic0, REACTIVE_IGNORE, REACTIVE_IGNORE, REACTIVE_IGNORE
            );
        }
    }

    function getPausableSubscriptions() internal view override returns (Subscription[] memory subs) {
        subs = new Subscription[](3);
        subs[0] = Subscription({
            chain_id: sourceChainId,
            _contract: aavePool,
            topic_0: aaveReserveDataUpdatedTopic0,
            topic_1: REACTIVE_IGNORE,
            topic_2: REACTIVE_IGNORE,
            topic_3: REACTIVE_IGNORE
        });
        subs[1] = Subscription({
            chain_id: sourceChainId,
            _contract: morphoVault,
            topic_0: erc4626DepositTopic0,
            topic_1: REACTIVE_IGNORE,
            topic_2: REACTIVE_IGNORE,
            topic_3: REACTIVE_IGNORE
        });
        subs[2] = Subscription({
            chain_id: sourceChainId,
            _contract: morphoVault,
            topic_0: erc4626WithdrawTopic0,
            topic_1: REACTIVE_IGNORE,
            topic_2: REACTIVE_IGNORE,
            topic_3: REACTIVE_IGNORE
        });
    }

    function react(IReactive.LogRecord calldata log) external authorizedSenderOnly {
        if (sourceChainId != 0 && log.chain_id != sourceChainId) return;

        if (log._contract == aavePool) {
            if (log.topic_0 != aaveReserveDataUpdatedTopic0) return;
        } else if (log._contract == morphoVault) {
            if (log.topic_0 != erc4626DepositTopic0 && log.topic_0 != erc4626WithdrawTopic0) return;
        } else {
            return;
        }

        bytes memory payload = abi.encodeWithSignature("evaluateAndRebalance()");
        emit Callback(destinationChainId, destinationManager, destinationGasLimit, payload);
    }
}

