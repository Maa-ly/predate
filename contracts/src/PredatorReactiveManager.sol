// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IYieldSource} from "./interfaces/IYieldSource.sol";
import {PredatorVault} from "./PredatorVault.sol";

contract PredatorReactiveManager {
    uint256 private constant RAY = 1e27;

    address public owner;
    address public reactiveCaller;
    PredatorVault public immutable vault;
    IYieldSource public immutable source0;
    IYieldSource public immutable source1;

    uint256 public rateDiffThresholdRay;
    uint256 public exitStressBps;
    uint256 public maxStressBps;
    uint256 public cooldown;
    uint256 public lastRebalanceAt;

    event ConfigSet(uint256 rateDiffThresholdRay, uint256 exitStressBps, uint256 maxStressBps, uint256 cooldown);
    event OwnerSet(address indexed owner);
    event ReactiveCallerSet(address indexed reactiveCaller);
    event Evaluate(uint256 rate0Ray, uint256 rate1Ray, uint256 stress0Bps, uint256 stress1Bps, uint8 target);

    modifier onlyOwner() {
        require(msg.sender == owner, "ONLY_OWNER");
        _;
    }

    modifier onlyReactiveCaller() {
        require(msg.sender == reactiveCaller, "ONLY_REACTIVE");
        _;
    }

    constructor(address vault_) {
        require(vault_ != address(0), "VAULT_ZERO");
        vault = PredatorVault(vault_);
        source0 = vault.source0();
        source1 = vault.source1();
        require(address(source0) != address(0), "S0_ZERO");
        require(address(source1) != address(0), "S1_ZERO");

        owner = msg.sender;
        reactiveCaller = msg.sender;
        rateDiffThresholdRay = 0.02e27;
        exitStressBps = 7500;
        maxStressBps = 9000;
        cooldown = 15 minutes;
        lastRebalanceAt = 0;
    }

    function setOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "OWNER_ZERO");
        owner = newOwner;
        emit OwnerSet(newOwner);
    }

    function setReactiveCaller(address newReactiveCaller) external onlyOwner {
        require(newReactiveCaller != address(0), "REACTIVE_ZERO");
        reactiveCaller = newReactiveCaller;
        emit ReactiveCallerSet(newReactiveCaller);
    }

    function setConfig(uint256 rateDiffThresholdRay_, uint256 exitStressBps_, uint256 maxStressBps_, uint256 cooldown_)
        external
        onlyOwner
    {
        require(rateDiffThresholdRay_ <= RAY, "BAD_RATE");
        require(exitStressBps_ <= 10_000, "BAD_EXIT");
        require(maxStressBps_ <= 10_000, "BAD_MAX");
        rateDiffThresholdRay = rateDiffThresholdRay_;
        exitStressBps = exitStressBps_;
        maxStressBps = maxStressBps_;
        cooldown = cooldown_;
        emit ConfigSet(rateDiffThresholdRay_, exitStressBps_, maxStressBps_, cooldown_);
    }

    function evaluateAndRebalance() external returns (bool rebalanced, uint8 targetSource) {
        return evaluateAndRebalance(address(0));
    }

    function evaluateAndRebalance(address) public returns (bool rebalanced, uint8 targetSource) {
        if (block.timestamp < lastRebalanceAt + cooldown) {
            targetSource = vault.activeSource();
            return (false, targetSource);
        }

        source0.poke();
        source1.poke();

        uint256 rate0 = source0.supplyRateRay();
        uint256 rate1 = source1.supplyRateRay();
        uint256 stress0 = source0.stressBps();
        uint256 stress1 = source1.stressBps();

        return _evaluateAndMaybeRebalance(rate0, rate1, stress0, stress1);
    }

    function handleSignal(uint256 rate0, uint256 rate1, uint256 stress0, uint256 stress1)
        external
        onlyReactiveCaller
        returns (bool rebalanced, uint8 targetSource)
    {
        if (block.timestamp < lastRebalanceAt + cooldown) {
            targetSource = vault.activeSource();
            return (false, targetSource);
        }

        return _evaluateAndMaybeRebalance(rate0, rate1, stress0, stress1);
    }

    function _evaluateAndMaybeRebalance(uint256 rate0, uint256 rate1, uint256 stress0, uint256 stress1)
        internal
        returns (bool rebalanced, uint8 targetSource)
    {
        uint8 current = vault.activeSource();
        targetSource = current;

        if (current == 0) {
            if (stress0 >= exitStressBps && stress1 < stress0) {
                targetSource = 1;
            } else if (stress1 <= maxStressBps && rate1 > rate0 + rateDiffThresholdRay) {
                targetSource = 1;
            }
        } else {
            if (stress1 >= exitStressBps && stress0 < stress1) {
                targetSource = 0;
            } else if (stress0 <= maxStressBps && rate0 > rate1 + rateDiffThresholdRay) {
                targetSource = 0;
            }
        }

        emit Evaluate(rate0, rate1, stress0, stress1, targetSource);

        if (targetSource != current) {
            vault.rebalanceTo(targetSource);
            lastRebalanceAt = block.timestamp;
            return (true, targetSource);
        }

        return (false, targetSource);
    }
}

