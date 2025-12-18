// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {MinimalERC20} from "../utils/MinimalERC20.sol";

contract MockERC4626 is MinimalERC20 {
    using SafeERC20 for IERC20;

    IERC20 public immutable underlying;
    uint256 public assetsPerShareWad;
    uint256 public maxWithdrawBps;

    constructor(address asset_, string memory name_, string memory symbol_) MinimalERC20(name_, symbol_, 18) {
        underlying = IERC20(asset_);
        assetsPerShareWad = 1e18;
        maxWithdrawBps = 10_000;
    }

    function asset() external view returns (address) {
        return address(underlying);
    }

    function totalAssets() external view returns (uint256) {
        return underlying.balanceOf(address(this));
    }

    function convertToShares(uint256 assets) public view returns (uint256) {
        if (assets == 0) return 0;
        return (assets * 1e18) / assetsPerShareWad;
    }

    function convertToAssets(uint256 shares) external view returns (uint256) {
        if (shares == 0) return 0;
        return (shares * assetsPerShareWad) / 1e18;
    }

    function maxDeposit(address) external pure returns (uint256) {
        return type(uint256).max;
    }

    function maxMint(address) external pure returns (uint256) {
        return type(uint256).max;
    }

    function maxWithdraw(address owner) public view returns (uint256) {
        uint256 assets = (balanceOf[owner] * assetsPerShareWad) / 1e18;
        return (assets * maxWithdrawBps) / 10_000;
    }

    function maxRedeem(address owner) external view returns (uint256) {
        uint256 assets = maxWithdraw(owner);
        return convertToShares(assets);
    }

    function previewDeposit(uint256 assets) external view returns (uint256) {
        return convertToShares(assets);
    }

    function previewMint(uint256 shares) external view returns (uint256) {
        if (shares == 0) return 0;
        return (shares * assetsPerShareWad) / 1e18;
    }

    function previewWithdraw(uint256 assets) external view returns (uint256) {
        return convertToShares(assets);
    }

    function previewRedeem(uint256 shares) external view returns (uint256) {
        if (shares == 0) return 0;
        return (shares * assetsPerShareWad) / 1e18;
    }

    function deposit(uint256 assets, address receiver) external returns (uint256 shares) {
        require(receiver != address(0), "RECEIVER_ZERO");
        shares = convertToShares(assets);
        require(shares > 0, "ZERO_SHARES");
        underlying.safeTransferFrom(msg.sender, address(this), assets);
        _mint(receiver, shares);
        return shares;
    }

    function mint(uint256 shares, address receiver) external returns (uint256 assets) {
        require(receiver != address(0), "RECEIVER_ZERO");
        assets = (shares * assetsPerShareWad) / 1e18;
        require(assets > 0, "ZERO_ASSETS");
        underlying.safeTransferFrom(msg.sender, address(this), assets);
        _mint(receiver, shares);
        return assets;
    }

    function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares) {
        require(receiver != address(0), "RECEIVER_ZERO");
        require(owner != address(0), "OWNER_ZERO");
        require(assets <= maxWithdraw(owner), "MAX_WITHDRAW");
        shares = convertToShares(assets);
        if (msg.sender != owner) {
            uint256 allowed = allowance[owner][msg.sender];
            if (allowed != type(uint256).max) {
                require(allowed >= shares, "ALLOWANCE");
                allowance[owner][msg.sender] = allowed - shares;
                emit Approval(owner, msg.sender, allowance[owner][msg.sender]);
            }
        }
        _burn(owner, shares);
        underlying.safeTransfer(receiver, assets);
        return shares;
    }

    function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets) {
        require(receiver != address(0), "RECEIVER_ZERO");
        require(owner != address(0), "OWNER_ZERO");
        if (msg.sender != owner) {
            uint256 allowed = allowance[owner][msg.sender];
            if (allowed != type(uint256).max) {
                require(allowed >= shares, "ALLOWANCE");
                allowance[owner][msg.sender] = allowed - shares;
                emit Approval(owner, msg.sender, allowance[owner][msg.sender]);
            }
        }
        assets = (shares * assetsPerShareWad) / 1e18;
        require(assets <= maxWithdraw(owner), "MAX_WITHDRAW");
        _burn(owner, shares);
        underlying.safeTransfer(receiver, assets);
        return assets;
    }

    function setAssetsPerShareWad(uint256 newRateWad) external {
        require(newRateWad > 0, "RATE_ZERO");
        assetsPerShareWad = newRateWad;
    }

    function setMaxWithdrawBps(uint256 bps) external {
        require(bps <= 10_000, "BPS");
        maxWithdrawBps = bps;
    }
}
