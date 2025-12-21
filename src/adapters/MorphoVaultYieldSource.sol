// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC4626} from "@openzeppelin/contracts/interfaces/IERC4626.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IYieldSource} from "../interfaces/IYieldSource.sol";

contract MorphoVaultYieldSource is IYieldSource {
    using SafeERC20 for IERC20;

    uint256 private constant RAY = 1e27;
    uint256 private constant SECONDS_PER_YEAR = 365 days;

    address public immutable vault;
    IERC20 public immutable underlying;
    IERC4626 public immutable morphoVault;

    uint256 public lastAssetsPerShareWad;
    uint256 public lastUpdate;
    uint256 public cachedRateRay;

    modifier onlyVault() {
        require(msg.sender == vault, "ONLY_VAULT");
        _;
    }

    constructor(address vault_, address asset_, address morphoVault_) {
        require(vault_ != address(0), "VAULT_ZERO");
        require(asset_ != address(0), "ASSET_ZERO");
        require(morphoVault_ != address(0), "MORPHO_ZERO");
        vault = vault_;
        underlying = IERC20(asset_);
        morphoVault = IERC4626(morphoVault_);
        require(morphoVault.asset() == asset_, "ASSET_MISMATCH");
        lastAssetsPerShareWad = 0;
        lastUpdate = block.timestamp;
        cachedRateRay = 0;
    }

    function assetsPerShareWad() public view returns (uint256) {
        return morphoVault.convertToAssets(1e18);
    }

    function asset() external view returns (address) {
        return address(underlying);
    }

    function positionShares() public view returns (uint256) {
        return IERC20(address(morphoVault)).balanceOf(address(this));
    }

    function totalAssets() public view returns (uint256) {
        uint256 shares = positionShares();
        if (shares == 0) return 0;
        return morphoVault.convertToAssets(shares);
    }

    function supplyRateRay() external view returns (uint256) {
        return cachedRateRay;
    }

    function stressBps() public view returns (uint256) {
        uint256 assets = totalAssets();
        if (assets == 0) return 0;

        uint256 maxW = morphoVault.maxWithdraw(address(this));
        if (maxW >= assets) return 0;
        return 10_000 - ((maxW * 10_000) / assets);
    }

    function deposit(uint256 assets) external onlyVault returns (uint256 deployedAssets) {
        if (assets == 0) return 0;
        uint256 maxD = morphoVault.maxDeposit(address(this));
        if (maxD == 0) return 0;
        uint256 toDeposit = assets > maxD ? maxD : assets;

        underlying.safeTransferFrom(vault, address(this), toDeposit);
        underlying.forceApprove(address(morphoVault), toDeposit);
        uint256 shares = morphoVault.deposit(toDeposit, address(this));
        require(shares > 0, "ZERO_SHARES");
        return toDeposit;
    }

    function withdraw(uint256 assets, address to) external onlyVault returns (uint256 withdrawnAssets) {
        if (assets == 0) return 0;
        uint256 maxW = morphoVault.maxWithdraw(address(this));
        if (maxW == 0) return 0;
        uint256 toWithdraw = assets > maxW ? maxW : assets;
        morphoVault.withdraw(toWithdraw, to, address(this));
        return toWithdraw;
    }

    function withdrawAll(address to) external onlyVault returns (uint256 withdrawnAssets) {
        uint256 assets = totalAssets();
        if (assets == 0) return 0;
        uint256 maxW = morphoVault.maxWithdraw(address(this));
        if (maxW == 0) return 0;
        uint256 toWithdraw = assets > maxW ? maxW : assets;
        morphoVault.withdraw(toWithdraw, to, address(this));
        return toWithdraw;
    }

    function poke() external {
        uint256 currentAssetsPerShareWad = assetsPerShareWad();
        uint256 previousAssetsPerShareWad = lastAssetsPerShareWad;
        uint256 previousUpdate = lastUpdate;

        lastAssetsPerShareWad = currentAssetsPerShareWad;
        lastUpdate = block.timestamp;

        if (previousAssetsPerShareWad == 0) {
            cachedRateRay = 0;
            return;
        }

        if (block.timestamp <= previousUpdate) {
            return;
        }

        uint256 dt = block.timestamp - previousUpdate;
        if (currentAssetsPerShareWad <= previousAssetsPerShareWad) {
            cachedRateRay = 0;
            return;
        }

        uint256 gainRay = ((currentAssetsPerShareWad - previousAssetsPerShareWad) * RAY) / previousAssetsPerShareWad;
        cachedRateRay = (gainRay * SECONDS_PER_YEAR) / dt;
    }
}
