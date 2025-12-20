// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {console2} from "forge-std/console2.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {PredatorVault} from "../src/PredatorVault.sol";
import {PredatorReactiveManager} from "../src/PredatorReactiveManager.sol";
import {AaveV3YieldSource} from "../src/adapters/AaveV3YieldSource.sol";
import {MorphoVaultYieldSource} from "../src/adapters/MorphoVaultYieldSource.sol";
import {PredatorSentinel} from "../src/reactive/PredatorSentinel.sol";

import {MockERC20} from "../src/mocks/MockERC20.sol";
import {MockAaveV3Pool} from "../src/mocks/MockAaveV3Pool.sol";
import {MockAaveProtocolDataProvider} from "../src/mocks/MockAaveProtocolDataProvider.sol";
import {MockERC4626} from "../src/mocks/MockERC4626.sol";

contract DeployPredator is Script {
    using SafeERC20 for IERC20;

    uint256 internal constant SEPOLIA_CHAIN_ID = 11_155_111;

    struct DeployResult {
        address asset;
        address vault;
        address manager;
        address aaveSource;
        address morphoSource;
        address aavePool;
        address aaveDataProvider;
        address morphoVault;
        address sentinel;
    }

    function run() external returns (DeployResult memory r) {
        return runSepolia();
    }

    function runSepolia() public returns (DeployResult memory r) {
        uint256 privateKey = vm.envOr("PRIVATE_KEY", uint256(0));
        address deployer = privateKey != 0 ? vm.addr(privateKey) : address(0);

        bool useMocks = vm.envOr("USE_MOCKS", false);

        if (privateKey != 0) {
            vm.startBroadcast(privateKey);
        } else {
            vm.startBroadcast();
            deployer = msg.sender;
        }

        if (useMocks) {
            r = _deployWithMocks();
        } else {
            r = _deployWithEnv();
        }

        uint256 depositAssets = vm.envOr("DEPOSIT_ASSETS", uint256(0));
        if (depositAssets > 0) {
            _deposit(r, deployer, depositAssets, useMocks);
        }

        bool doEvaluate = vm.envOr("DO_EVALUATE", false);
        if (doEvaluate) {
            PredatorReactiveManager(r.manager).evaluateAndRebalance();
        }

        bool deploySentinel = vm.envOr("DEPLOY_SENTINEL", false);
        if (deploySentinel) {
            r.sentinel = address(_deploySentinel(r.manager, r.aavePool, r.morphoVault));
        }

        vm.stopBroadcast();

        console2.log("asset", r.asset);
        console2.log("vault", r.vault);
        console2.log("manager", r.manager);
        console2.log("aaveSource", r.aaveSource);
        console2.log("morphoSource", r.morphoSource);
        console2.log("aavePool", r.aavePool);
        console2.log("aaveDataProvider", r.aaveDataProvider);
        console2.log("morphoVault", r.morphoVault);
        console2.log("sentinel", r.sentinel);

        return r;
    }

    function runReactive(address destinationManager) external returns (DeployResult memory r) {
        uint256 privateKey = vm.envOr("PRIVATE_KEY", uint256(0));
        if (privateKey != 0) {
            vm.startBroadcast(privateKey);
        } else {
            vm.startBroadcast();
        }

        address aavePool = vm.envAddress("AAVE_POOL");
        address morphoVault = vm.envAddress("MORPHO_VAULT");

        r.asset = vm.envOr("ASSET", address(0));
        r.manager = destinationManager;
        r.aavePool = aavePool;
        r.morphoVault = morphoVault;
        r.sentinel = address(_deploySepoliaSentinel(destinationManager, aavePool, morphoVault));

        vm.stopBroadcast();

        console2.log("manager", r.manager);
        console2.log("aavePool", r.aavePool);
        console2.log("morphoVault", r.morphoVault);
        console2.log("sentinel", r.sentinel);

        return r;
    }

    function _deployWithEnv() internal returns (DeployResult memory r) {
        address asset = vm.envAddress("ASSET");
        address aavePool = vm.envAddress("AAVE_POOL");
        address aaveDataProvider = vm.envAddress("AAVE_DATA_PROVIDER");
        address morphoVault = vm.envAddress("MORPHO_VAULT");

        string memory name = vm.envOr("VAULT_NAME", string("Predator Vault"));
        string memory symbol = vm.envOr("VAULT_SYMBOL", string("pVAULT"));

        r = _deployCore(asset, aavePool, aaveDataProvider, morphoVault, name, symbol);
    }

    function _deployWithMocks() internal returns (DeployResult memory r) {
        MockERC20 asset = new MockERC20("Mock USD", "mUSD", 18);
        MockERC20 aToken = new MockERC20("Mock aToken", "aMUSD", 18);

        MockAaveV3Pool aavePool = new MockAaveV3Pool();
        MockAaveProtocolDataProvider dataProvider = new MockAaveProtocolDataProvider();

        aavePool.setReserve(address(asset), address(aToken));
        aavePool.setLiquidityRateRay(address(asset), uint128(0.03e27));
        dataProvider.setReserveState(address(asset), 1_000_000e18, 0, 0, 0.03e27);

        MockERC4626 morphoVault = new MockERC4626(address(asset), "Mock Morpho Vault", "mmUSD");
        morphoVault.setAssetsPerShareWad(1e18);
        morphoVault.setMaxWithdrawBps(10_000);

        r = _deployCore(
            address(asset), address(aavePool), address(dataProvider), address(morphoVault), "Predator Vault", "pMUSD"
        );
    }

    function _deployCore(
        address asset,
        address aavePool,
        address aaveDataProvider,
        address morphoVault,
        string memory name,
        string memory symbol
    ) internal returns (DeployResult memory r) {
        PredatorVault vault = new PredatorVault(asset, name, symbol);

        AaveV3YieldSource aaveSource = new AaveV3YieldSource(address(vault), asset, aavePool, aaveDataProvider);
        MorphoVaultYieldSource morphoSource = new MorphoVaultYieldSource(address(vault), asset, morphoVault);

        vault.setSources(address(aaveSource), address(morphoSource));

        PredatorReactiveManager manager = new PredatorReactiveManager(address(vault));
        vault.setManager(address(manager));

        manager.setConfig(
            vm.envOr("RATE_DIFF_THRESHOLD_RAY", uint256(0.02e27)),
            vm.envOr("EXIT_STRESS_BPS", uint256(7500)),
            vm.envOr("MAX_STRESS_BPS", uint256(9000)),
            vm.envOr("COOLDOWN", uint256(15 minutes))
        );

        r.asset = asset;
        r.vault = address(vault);
        r.manager = address(manager);
        r.aaveSource = address(aaveSource);
        r.morphoSource = address(morphoSource);
        r.aavePool = aavePool;
        r.aaveDataProvider = aaveDataProvider;
        r.morphoVault = morphoVault;
        r.sentinel = address(0);
    }

    function _deposit(DeployResult memory r, address depositor, uint256 assets, bool useMocks) internal {
        if (useMocks) {
            MockERC20(r.asset).mint(depositor, assets);
        }

        IERC20(r.asset).forceApprove(r.vault, assets);
        PredatorVault(r.vault).deposit(assets, depositor);
    }

    function _deploySentinel(address destinationManager, address aavePool, address morphoVault)
        internal
        returns (PredatorSentinel sentinel)
    {
        uint256 sourceChainId = vm.envOr("SENTINEL_SOURCE_CHAIN_ID", block.chainid);
        uint256 destinationChainId = vm.envOr("SENTINEL_DESTINATION_CHAIN_ID", block.chainid);
        uint64 destinationGasLimit = uint64(vm.envOr("SENTINEL_DESTINATION_GAS_LIMIT", uint256(500_000)));

        sentinel = new PredatorSentinel(
            sourceChainId, aavePool, morphoVault, destinationChainId, destinationManager, destinationGasLimit
        );
    }

    function _deploySepoliaSentinel(address destinationManager, address aavePool, address morphoVault)
        internal
        returns (PredatorSentinel sentinel)
    {
        uint64 destinationGasLimit = uint64(vm.envOr("SENTINEL_DESTINATION_GAS_LIMIT", uint256(500_000)));
        sentinel = new PredatorSentinel(
            SEPOLIA_CHAIN_ID, aavePool, morphoVault, SEPOLIA_CHAIN_ID, destinationManager, destinationGasLimit
        );
    }
}
