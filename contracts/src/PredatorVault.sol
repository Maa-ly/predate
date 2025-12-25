// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {IYieldSource} from "./interfaces/IYieldSource.sol";

contract PredatorVault is ERC20 {
    using SafeERC20 for IERC20;

    IERC20 public immutable underlying;

    address public owner;
    address public manager;

    IYieldSource public source0;
    IYieldSource public source1;
    bool public sourcesSet;

    uint8 public activeSource;

    event Deposit(address indexed caller, address indexed receiver, uint256 assets, uint256 shares);
    event Withdraw(
        address indexed caller, address indexed receiver, address indexed owner, uint256 assets, uint256 shares
    );
    event Rebalance(uint8 indexed fromSource, uint8 indexed toSource, uint256 movedAssets);
    event ManagerSet(address indexed manager);
    event OwnerSet(address indexed owner);
    event ActiveSourceSet(uint8 indexed activeSource);

    modifier onlyOwner() {
        require(msg.sender == owner, "ONLY_OWNER");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == manager, "ONLY_MANAGER");
        _;
    }

    constructor(address asset_, string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        require(asset_ != address(0), "ASSET_ZERO");

        underlying = IERC20(asset_);

        owner = msg.sender;
        manager = msg.sender;
        activeSource = 0;
        sourcesSet = false;
    }

    function setSources(address source0_, address source1_) external onlyOwner {
        require(!sourcesSet, "SOURCES_SET");
        require(source0_ != address(0), "S0_ZERO");
        require(source1_ != address(0), "S1_ZERO");

        IYieldSource s0 = IYieldSource(source0_);
        IYieldSource s1 = IYieldSource(source1_);
        require(s0.asset() == address(underlying), "S0_ASSET");
        require(s1.asset() == address(underlying), "S1_ASSET");

        source0 = s0;
        source1 = s1;
        sourcesSet = true;
    }

    function setOwner(address newOwner) external onlyOwner {
        require(newOwner != address(0), "OWNER_ZERO");
        owner = newOwner;
        emit OwnerSet(newOwner);
    }

    function setManager(address newManager) external onlyOwner {
        require(newManager != address(0), "MANAGER_ZERO");
        manager = newManager;
        emit ManagerSet(newManager);
    }

    function setActiveSource(uint8 newActiveSource) external onlyOwner {
        require(newActiveSource == 0 || newActiveSource == 1, "BAD_SOURCE");
        activeSource = newActiveSource;
        emit ActiveSourceSet(newActiveSource);
    }

    function totalAssets() public view returns (uint256) {
        if (!sourcesSet) return idleAssets();
        return idleAssets() + source0.totalAssets() + source1.totalAssets();
    }

    function idleAssets() public view returns (uint256) {
        return underlying.balanceOf(address(this));
    }

    function previewDeposit(uint256 assets) public view returns (uint256) {
        if (assets == 0) return 0;
        uint256 supply = totalSupply();
        if (supply == 0) return assets;
        return (assets * supply) / totalAssets();
    }

    function previewRedeem(uint256 shares) public view returns (uint256) {
        if (shares == 0) return 0;
        uint256 supply = totalSupply();
        if (supply == 0) return 0;
        return (shares * totalAssets()) / supply;
    }

    function deposit(uint256 assets, address receiver) external returns (uint256 shares) {
        require(receiver != address(0), "RECEIVER_ZERO");
        shares = previewDeposit(assets);
        require(shares > 0, "ZERO_SHARES");
        underlying.safeTransferFrom(msg.sender, address(this), assets);
        _mint(receiver, shares);
        _investIdle();
        emit Deposit(msg.sender, receiver, assets, shares);
    }

    function redeem(uint256 shares, address receiver, address owner_) external returns (uint256 assets) {
        require(receiver != address(0), "RECEIVER_ZERO");
        require(owner_ != address(0), "OWNER_ZERO");
        if (msg.sender != owner_) {
            _spendAllowance(owner_, msg.sender, shares);
        }

        assets = previewRedeem(shares);
        require(assets > 0, "ZERO_ASSETS");

        _burn(owner_, shares);
        _ensureLiquidity(assets);
        underlying.safeTransfer(receiver, assets);

        emit Withdraw(msg.sender, receiver, owner_, assets, shares);
    }

    function rebalanceTo(uint8 targetSource) external onlyManager returns (uint256 movedAssets) {
        require(sourcesSet, "SOURCES_NOT_SET");
        require(targetSource == 0 || targetSource == 1, "BAD_SOURCE");
        if (targetSource == activeSource) return 0;

        uint8 fromSource = activeSource;
        uint256 withdrawn0 = source0.withdrawAll(address(this));
        uint256 withdrawn1 = source1.withdrawAll(address(this));
        movedAssets = withdrawn0 + withdrawn1;

        activeSource = targetSource;
        _investIdle();

        emit Rebalance(fromSource, targetSource, movedAssets);
    }

    function investIdle() external onlyManager returns (uint256 deployedAssets) {
        require(sourcesSet, "SOURCES_NOT_SET");
        return _investIdle();
    }

    function _investIdle() internal returns (uint256 deployedAssets) {
        require(sourcesSet, "SOURCES_NOT_SET");
        uint256 idle = idleAssets();
        if (idle == 0) return 0;

        if (activeSource == 0) {
            SafeERC20.forceApprove(underlying, address(source0), idle);
            deployedAssets = source0.deposit(idle);
        } else {
            SafeERC20.forceApprove(underlying, address(source1), idle);
            deployedAssets = source1.deposit(idle);
        }
    }

    function _ensureLiquidity(uint256 neededAssets) internal {
        require(sourcesSet, "SOURCES_NOT_SET");
        uint256 idle = idleAssets();
        if (idle >= neededAssets) return;

        uint256 missing = neededAssets - idle;
        uint256 withdrawn;

        if (activeSource == 0) {
            withdrawn = source0.withdraw(missing, address(this));
            if (withdrawn < missing) {
                source1.withdraw(missing - withdrawn, address(this));
            }
        } else {
            withdrawn = source1.withdraw(missing, address(this));
            if (withdrawn < missing) {
                source0.withdraw(missing - withdrawn, address(this));
            }
        }
    }
}

