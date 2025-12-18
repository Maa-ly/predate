// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IMorphoVaultMinimal {
    function asset() external view returns (address);
    function convertToAssets(uint256 shares) external view returns (uint256);
    function deposit(uint256 assets, address receiver) external returns (uint256 shares);
    function withdraw(uint256 assets, address receiver, address owner) external returns (uint256 shares);
    function maxWithdraw(address owner) external view returns (uint256);
}

