// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {MockERC20} from "./MockERC20.sol";
import {IAaveV3Pool} from "../interfaces/IAaveV3Pool.sol";

contract MockAaveV3Pool is IAaveV3Pool {
    using SafeERC20 for IERC20;

    mapping(address => address) public aTokenForAsset;
    mapping(address => uint128) public liquidityRateRay;

    function setReserve(address asset, address aToken) external {
        aTokenForAsset[asset] = aToken;
    }

    function setLiquidityRateRay(address asset, uint128 rateRay) external {
        liquidityRateRay[asset] = rateRay;
    }

    function getReserveData(address asset) external view returns (ReserveData memory data) {
        data.currentLiquidityRate = liquidityRateRay[asset];
        data.aTokenAddress = aTokenForAsset[asset];
    }

    function supply(address asset, uint256 amount, address onBehalfOf, uint16) external {
        IERC20(asset).safeTransferFrom(msg.sender, address(this), amount);
        MockERC20(aTokenForAsset[asset]).mint(onBehalfOf, amount);
    }

    function withdraw(address asset, uint256 amount, address to) external returns (uint256) {
        address aToken = aTokenForAsset[asset];
        uint256 bal = IERC20(aToken).balanceOf(msg.sender);
        uint256 toWithdraw = amount;
        if (amount == type(uint256).max || amount > bal) {
            toWithdraw = bal;
        }
        MockERC20(aToken).burn(msg.sender, toWithdraw);
        IERC20(asset).safeTransfer(to, toWithdraw);

        return toWithdraw;
    }
}

