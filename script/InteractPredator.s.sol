// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {PredatorVault} from "../src/PredatorVault.sol";
import {PredatorReactiveManager} from "../src/PredatorReactiveManager.sol";

interface IWETH {
    function deposit() external payable;
}

contract InteractPredator is Script {
    using SafeERC20 for IERC20;

    struct Params {
        uint256 privateKey;
        address caller;
        PredatorVault vault;
        PredatorReactiveManager manager;
        IERC20 asset;
        address receiver;
        address owner;
        bool doStatus;
        bool doEvaluate;
        uint256 depositAssets;
        uint256 depositEth;
        address weth;
        uint256 redeemShares;
    }

    function run() external {
        Params memory p;

        p.privateKey = vm.envOr("PRIVATE_KEY", uint256(0));
        p.caller = p.privateKey != 0 ? vm.addr(p.privateKey) : msg.sender;

        p.vault = PredatorVault(vm.envAddress("VAULT"));
        p.manager = PredatorReactiveManager(vm.envAddress("MANAGER"));
        p.asset = IERC20(vm.envOr("ASSET", address(p.vault.underlying())));

        p.receiver = vm.envOr("RECEIVER", p.caller);
        p.owner = vm.envOr("OWNER", p.caller);

        p.doStatus = vm.envOr("DO_STATUS", true);
        p.doEvaluate = vm.envOr("DO_EVALUATE", false);

        p.depositAssets = vm.envOr("DEPOSIT_ASSETS", uint256(0));
        p.depositEth = vm.envOr("DEPOSIT_ETH", uint256(0));
        p.weth = vm.envOr("WETH", address(p.asset));
        p.redeemShares = vm.envOr("REDEEM_SHARES", uint256(0));

        _execute(p);
    }

    function _execute(Params memory p) internal {
        if (p.privateKey != 0) {
            vm.startBroadcast(p.privateKey);
        } else {
            vm.startBroadcast();
        }

        if (p.doStatus) {
            _logStatus(p);
        }

        if (p.depositEth > 0) {
            require(address(p.asset) == p.weth, "ASSET_NOT_WETH");
            IWETH(p.weth).deposit{value: p.depositEth}();
            p.asset.forceApprove(address(p.vault), p.depositEth);
            uint256 shares = p.vault.deposit(p.depositEth, p.receiver);
            console2.log("depositEth", p.depositEth);
            console2.log("mintedShares", shares);
        }

        if (p.depositAssets > 0) {
            p.asset.forceApprove(address(p.vault), p.depositAssets);
            uint256 shares = p.vault.deposit(p.depositAssets, p.receiver);
            console2.log("depositAssets", p.depositAssets);
            console2.log("mintedShares", shares);
        }

        if (p.doEvaluate) {
            (bool moved, uint8 target) = p.manager.evaluateAndRebalance(address(0));
            console2.log("rebalanced", moved);
            console2.log("targetSource", target);
        }

        if (p.redeemShares > 0) {
            uint256 assetsOut = p.vault.redeem(p.redeemShares, p.receiver, p.owner);
            console2.log("redeemShares", p.redeemShares);
            console2.log("assetsOut", assetsOut);
        }

        if (p.doStatus) {
            _logStatus(p);
        }

        vm.stopBroadcast();
    }

    function _logStatus(Params memory p) internal view {
        console2.log("vault", address(p.vault));
        console2.log("manager", address(p.manager));
        console2.log("asset", address(p.asset));
        console2.log("activeSource", p.vault.activeSource());
        console2.log("totalSupply", p.vault.totalSupply());
        console2.log("totalAssets", p.vault.totalAssets());
        console2.log("idleAssets", p.vault.idleAssets());
        console2.log("callerAssetBalance", p.asset.balanceOf(p.caller));
        console2.log("callerShareBalance", p.vault.balanceOf(p.caller));
    }
}
