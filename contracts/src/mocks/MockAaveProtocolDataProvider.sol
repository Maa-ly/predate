// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IAaveProtocolDataProvider} from "../interfaces/IAaveProtocolDataProvider.sol";

contract MockAaveProtocolDataProvider is IAaveProtocolDataProvider {
    struct ReserveState {
        uint256 totalAToken;
        uint256 totalStableDebt;
        uint256 totalVariableDebt;
        uint256 liquidityRate;
    }

    mapping(address => ReserveState) public reserves;

    function setReserveState(
        address asset,
        uint256 totalAToken,
        uint256 totalStableDebt,
        uint256 totalVariableDebt,
        uint256 liquidityRate
    ) external {
        reserves[asset] = ReserveState({
            totalAToken: totalAToken,
            totalStableDebt: totalStableDebt,
            totalVariableDebt: totalVariableDebt,
            liquidityRate: liquidityRate
        });
    }

    function getReserveData(address asset)
        external
        view
        returns (
            uint256 unbacked,
            uint256 accruedToTreasuryScaled,
            uint256 totalAToken,
            uint256 totalStableDebt,
            uint256 totalVariableDebt,
            uint256 liquidityRate,
            uint256 variableBorrowRate,
            uint256 stableBorrowRate,
            uint256 averageStableBorrowRate,
            uint256 liquidityIndex,
            uint256 variableBorrowIndex,
            uint40 lastUpdateTimestamp
        )
    {
        ReserveState memory st = reserves[asset];
        return (0, 0, st.totalAToken, st.totalStableDebt, st.totalVariableDebt, st.liquidityRate, 0, 0, 0, 0, 0, 0);
    }
}

