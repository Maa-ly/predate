// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IYieldSource {
    function asset() external view returns (address);
    function totalAssets() external view returns (uint256);
    function supplyRateRay() external view returns (uint256);
    function stressBps() external view returns (uint256);
    function deposit(uint256 assets) external returns (uint256 deployedAssets);
    function withdraw(uint256 assets, address to) external returns (uint256 withdrawnAssets);
    function withdrawAll(address to) external returns (uint256 withdrawnAssets);
    function poke() external;
}

