// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Vm} from "forge-std/Vm.sol";

import {MockERC20} from "../src/mocks/MockERC20.sol";
import {MockAaveV3Pool} from "../src/mocks/MockAaveV3Pool.sol";
import {MockAaveProtocolDataProvider} from "../src/mocks/MockAaveProtocolDataProvider.sol";
import {MockERC4626} from "../src/mocks/MockERC4626.sol";

import {AaveV3YieldSource} from "../src/adapters/AaveV3YieldSource.sol";
import {MorphoVaultYieldSource} from "../src/adapters/MorphoVaultYieldSource.sol";
import {PredatorVault} from "../src/PredatorVault.sol";
import {PredatorReactiveManager} from "../src/PredatorReactiveManager.sol";
import {PredatorSentinel} from "../src/reactive/PredatorSentinel.sol";
import {IReactive} from "reactive-lib/interfaces/IReactive.sol";

contract PredatorVaultTest is Test {
    address internal alice = address(0xA11CE);

    MockERC20 internal asset;

    MockERC20 internal aToken;
    MockAaveV3Pool internal aavePool;
    MockAaveProtocolDataProvider internal dataProvider;

    MockERC4626 internal morphoVault;

    PredatorVault internal vault;
    PredatorReactiveManager internal manager;
    AaveV3YieldSource internal aaveSource;
    MorphoVaultYieldSource internal morphoSource;

    function setUp() public {
        asset = new MockERC20("Mock USD", "mUSD", 18);
        aToken = new MockERC20("Mock aToken", "aMUSD", 18);

        aavePool = new MockAaveV3Pool();
        dataProvider = new MockAaveProtocolDataProvider();

        aavePool.setReserve(address(asset), address(aToken));
        aavePool.setLiquidityRateRay(address(asset), uint128(0.03e27));
        dataProvider.setReserveState(address(asset), 0, 0, 0, 0.03e27);

        morphoVault = new MockERC4626(address(asset), "Mock Morpho Vault", "mmUSD");
        morphoVault.setAssetsPerShareWad(1e18);
        morphoVault.setMaxWithdrawBps(10_000);

        vault = new PredatorVault(address(asset), "Predator Vault", "pMUSD");
        aaveSource = new AaveV3YieldSource(address(vault), address(asset), address(aavePool), address(dataProvider));
        morphoSource = new MorphoVaultYieldSource(address(vault), address(asset), address(morphoVault));
        vault.setSources(address(aaveSource), address(morphoSource));
        manager = new PredatorReactiveManager(address(vault));
        vault.setManager(address(manager));

        asset.mint(alice, 1_000_000e18);
        vm.startPrank(alice);
        asset.approve(address(vault), type(uint256).max);
        vm.stopPrank();
    }

    function test_DepositInvestsIntoActiveSource0() public {
        vm.prank(alice);
        vault.deposit(1000e18, alice);

        assertEq(vault.totalSupply(), 1000e18);
        assertEq(asset.balanceOf(address(vault)), 0);
        assertEq(aToken.balanceOf(address(aaveSource)), 1000e18);
        assertEq(morphoVault.balanceOf(address(morphoSource)), 0);
    }

    function test_RebalanceToMorphoOnHigherRateAndLowStress() public {
        vm.prank(alice);
        vault.deposit(1000e18, alice);

        morphoSource.poke();
        morphoVault.setAssetsPerShareWad(1.02e18);
        asset.mint(address(morphoVault), 20e18);
        vm.warp(block.timestamp + 1 days);

        vm.warp(block.timestamp + 16 minutes);
        (bool moved, uint8 target) = manager.evaluateAndRebalance(address(0));
        assertTrue(moved);
        assertEq(target, 1);

        assertEq(aToken.balanceOf(address(aaveSource)), 0);
        assertGt(morphoVault.balanceOf(address(morphoSource)), 0);
    }

    function test_ExitMorphoWhenIlliquidEvenIfRateHigher() public {
        vm.prank(alice);
        vault.deposit(1000e18, alice);

        morphoSource.poke();
        morphoVault.setAssetsPerShareWad(1.05e18);
        asset.mint(address(morphoVault), 50e18);
        vm.warp(block.timestamp + 1 days);

        vm.warp(block.timestamp + 16 minutes);
        manager.evaluateAndRebalance(address(0));
        assertEq(vault.activeSource(), 1);

        morphoVault.setMaxWithdrawBps(1000);
        vm.warp(block.timestamp + 16 minutes);
        (bool moved, uint8 target) = manager.evaluateAndRebalance(address(0));
        assertTrue(moved);
        assertEq(target, 0);
        assertEq(vault.activeSource(), 0);
    }

    function test_RedeemWithdrawsLiquidityFromSources() public {
        vm.prank(alice);
        vault.deposit(1000e18, alice);

        morphoSource.poke();
        morphoVault.setAssetsPerShareWad(1.02e18);
        asset.mint(address(morphoVault), 20e18);
        vm.warp(block.timestamp + 1 days);
        vm.warp(block.timestamp + 16 minutes);
        manager.evaluateAndRebalance(address(0));
        assertEq(vault.activeSource(), 1);

        vm.prank(alice);
        uint256 assetsOut = vault.redeem(200e18, alice, alice);
        assertGt(assetsOut, 0);
        assertEq(asset.balanceOf(alice), 1_000_000e18 - 1000e18 + assetsOut);
    }
}

contract PredatorSentinelTest is Test {
    event Callback(uint256 indexed chain_id, address indexed _contract, uint64 indexed gas_limit, bytes payload);

    uint256 internal constant SERVICE_ADDR = uint256(uint160(0x0000000000000000000000000000000000fffFfF));

    function test_MorphoMintTransferTriggersCallback() public {
        uint256 chainId = 11155111;
        address aavePool = address(0x1111);
        address morphoVault = address(0x2222);
        address destinationManager = address(0x3333);
        uint64 destinationGasLimit = 500_000;

        PredatorSentinel sentinel =
            new PredatorSentinel(chainId, aavePool, morphoVault, chainId, destinationManager, destinationGasLimit);

        uint256 transferTopic0 = uint256(keccak256("Transfer(address,address,uint256)"));

        IReactive.LogRecord memory log = IReactive.LogRecord({
            chain_id: chainId,
            _contract: morphoVault,
            topic_0: transferTopic0,
            topic_1: 0,
            topic_2: uint256(uint160(address(0xBEEF))),
            topic_3: 0,
            data: "",
            block_number: 0,
            op_code: 0,
            block_hash: 0,
            tx_hash: 0,
            log_index: 0
        });

        bytes memory payload = abi.encodeWithSignature("evaluateAndRebalance(address)", address(0));

        vm.expectEmit(true, true, true, true, address(sentinel));
        emit Callback(chainId, destinationManager, destinationGasLimit, payload);

        vm.prank(address(uint160(SERVICE_ADDR)));
        sentinel.react(log);
    }

    function test_MorphoBurnTransferTriggersCallback() public {
        uint256 chainId = 11155111;
        address aavePool = address(0x1111);
        address morphoVault = address(0x2222);
        address destinationManager = address(0x3333);
        uint64 destinationGasLimit = 500_000;

        PredatorSentinel sentinel =
            new PredatorSentinel(chainId, aavePool, morphoVault, chainId, destinationManager, destinationGasLimit);

        uint256 transferTopic0 = uint256(keccak256("Transfer(address,address,uint256)"));

        IReactive.LogRecord memory log = IReactive.LogRecord({
            chain_id: chainId,
            _contract: morphoVault,
            topic_0: transferTopic0,
            topic_1: uint256(uint160(address(0xBEEF))),
            topic_2: 0,
            topic_3: 0,
            data: "",
            block_number: 0,
            op_code: 0,
            block_hash: 0,
            tx_hash: 0,
            log_index: 0
        });

        bytes memory payload = abi.encodeWithSignature("evaluateAndRebalance(address)", address(0));

        vm.expectEmit(true, true, true, true, address(sentinel));
        emit Callback(chainId, destinationManager, destinationGasLimit, payload);

        vm.prank(address(uint160(SERVICE_ADDR)));
        sentinel.react(log);
    }

    function test_MorphoRegularTransferDoesNotTriggerCallback() public {
        uint256 chainId = 11155111;
        address aavePool = address(0x1111);
        address morphoVault = address(0x2222);
        address destinationManager = address(0x3333);
        uint64 destinationGasLimit = 500_000;

        PredatorSentinel sentinel =
            new PredatorSentinel(chainId, aavePool, morphoVault, chainId, destinationManager, destinationGasLimit);

        uint256 transferTopic0 = uint256(keccak256("Transfer(address,address,uint256)"));

        IReactive.LogRecord memory log = IReactive.LogRecord({
            chain_id: chainId,
            _contract: morphoVault,
            topic_0: transferTopic0,
            topic_1: uint256(uint160(address(0xAAAA))),
            topic_2: uint256(uint160(address(0xBBBB))),
            topic_3: 0,
            data: "",
            block_number: 0,
            op_code: 0,
            block_hash: 0,
            tx_hash: 0,
            log_index: 0
        });

        vm.recordLogs();
        vm.prank(address(uint160(SERVICE_ADDR)));
        sentinel.react(log);
        Vm.Log[] memory logs = vm.getRecordedLogs();
        assertEq(logs.length, 0);
    }

    function test_OwnerCanCallReact() public {
        uint256 chainId = 11155111;
        address aavePool = address(0x1111);
        address morphoVault = address(0x2222);
        address destinationManager = address(0x3333);
        uint64 destinationGasLimit = 500_000;

        PredatorSentinel sentinel =
            new PredatorSentinel(chainId, aavePool, morphoVault, chainId, destinationManager, destinationGasLimit);

        uint256 transferTopic0 = uint256(keccak256("Transfer(address,address,uint256)"));

        IReactive.LogRecord memory log = IReactive.LogRecord({
            chain_id: chainId,
            _contract: morphoVault,
            topic_0: transferTopic0,
            topic_1: 0,
            topic_2: uint256(uint160(address(0xBEEF))),
            topic_3: 0,
            data: "",
            block_number: 0,
            op_code: 0,
            block_hash: 0,
            tx_hash: 0,
            log_index: 0
        });

        bytes memory payload = abi.encodeWithSignature("evaluateAndRebalance(address)", address(0));

        vm.expectEmit(true, true, true, true, address(sentinel));
        emit Callback(chainId, destinationManager, destinationGasLimit, payload);

        sentinel.react(log);
    }
}
