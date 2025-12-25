// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IAaveV3Pool} from "../interfaces/IAaveV3Pool.sol";
import {IAaveProtocolDataProvider} from "../interfaces/IAaveProtocolDataProvider.sol";
import {IYieldSource} from "../interfaces/IYieldSource.sol";

contract AaveV3YieldSource is IYieldSource {
    using SafeERC20 for IERC20;

    uint256 private constant RAY = 1e27;

    address public immutable vault;
    IERC20 public immutable underlying;
    IAaveV3Pool public immutable aavePool;
    IAaveProtocolDataProvider public immutable dataProvider;

    modifier onlyVault() {
        require(msg.sender == vault, "ONLY_VAULT");
        _;
    }

    constructor(address vault_, address asset_, address aavePool_, address dataProvider_) {
        require(vault_ != address(0), "VAULT_ZERO");
        require(asset_ != address(0), "ASSET_ZERO");
        require(aavePool_ != address(0), "POOL_ZERO");
        require(dataProvider_ != address(0), "DP_ZERO");
        vault = vault_;
        underlying = IERC20(asset_);
        aavePool = IAaveV3Pool(aavePool_);
        dataProvider = IAaveProtocolDataProvider(dataProvider_);
    }

    function asset() external view returns (address) {
        return address(underlying);
    }

    function _getReserveData() internal view returns (bool ok, IAaveV3Pool.ReserveData memory r) {
        try aavePool.getReserveData(address(underlying)) returns (IAaveV3Pool.ReserveData memory rr) {
            return (true, rr);
        } catch {
            return (false, r);
        }
    }

    function aToken() public view returns (address) {
        (bool ok, IAaveV3Pool.ReserveData memory r) = _getReserveData();
        if (!ok) return address(0);
        return r.aTokenAddress;
    }

    function totalAssets() public view returns (uint256) {
        address at = aToken();
        if (at == address(0) || at.code.length == 0) return 0;
        return IERC20(at).balanceOf(address(this));
    }

    function supplyRateRay() external view returns (uint256) {
        (bool ok, IAaveV3Pool.ReserveData memory r) = _getReserveData();
        if (!ok) return 0;
        return uint256(r.currentLiquidityRate);
    }

    function stressBps() public view returns (uint256) {
        (bool ok, bytes memory ret) = address(dataProvider)
            .staticcall(abi.encodeCall(IAaveProtocolDataProvider.getReserveData, (address(underlying))));
        if (!ok || ret.length < 32 * 12) return 0;

        uint256 totalAToken;
        uint256 totalStableDebt;
        uint256 totalVariableDebt;
        assembly {
            totalAToken := mload(add(ret, 0x60))
            totalStableDebt := mload(add(ret, 0x80))
            totalVariableDebt := mload(add(ret, 0xa0))
        }

        uint256 totalDebt = totalStableDebt + totalVariableDebt;
        if (totalAToken == 0) return 0;

        uint256 utilizationRay = (totalDebt * RAY) / totalAToken;
        if (utilizationRay >= RAY) return 10_000;
        return (utilizationRay * 10_000) / RAY;
    }

    function deposit(uint256 assets) external onlyVault returns (uint256 deployedAssets) {
        if (assets == 0) return 0;
        address at = aToken();
        if (at == address(0) || at.code.length == 0) return 0;
        if (address(aavePool).code.length == 0) return 0;
        underlying.safeTransferFrom(vault, address(this), assets);
        underlying.forceApprove(address(aavePool), assets);
        aavePool.supply(address(underlying), assets, address(this), 0);
        return assets;
    }

    function withdraw(uint256 assets, address to) external onlyVault returns (uint256 withdrawnAssets) {
        if (assets == 0) return 0;
        address at = aToken();
        if (at == address(0) || at.code.length == 0) return 0;
        return aavePool.withdraw(address(underlying), assets, to);
    }

    function withdrawAll(address to) external onlyVault returns (uint256 withdrawnAssets) {
        address at = aToken();
        if (at == address(0) || at.code.length == 0) return 0;
        uint256 assets = totalAssets();
        if (assets == 0) return 0;
        return aavePool.withdraw(address(underlying), assets, to);
    }

    function poke() external {}
}

