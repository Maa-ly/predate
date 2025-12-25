import { parseAbi } from "viem";

export const sepoliaContracts = {
  chainId: 11155111,
  vault: "0x91Df8Fb96D0C6db050cd215A6e883B8233F41f2B",
  manager: "0x9CC96a5AE38979fbC2831e2861F2cDACFBB54F8b",
  asset: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
} as const;

export const reactiveContracts = {
  chainId: 5318007,
  sentinel: "0x520832cD1dc4A1A4F4dE2303B8761906e4Aa7991",
  systemContract: "0x0000000000000000000000000000000000fffFfF",
} as const;

export const predatorVaultAbi = parseAbi([
  "function activeSource() view returns (uint8)",
  "function source0() view returns (address)",
  "function source1() view returns (address)",
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function totalAssets() view returns (uint256)",
  "function previewDeposit(uint256 assets) view returns (uint256 shares)",
  "function previewRedeem(uint256 shares) view returns (uint256 assets)",
  "function deposit(uint256 assets, address receiver) returns (uint256 shares)",
  "function redeem(uint256 shares, address receiver, address owner) returns (uint256 assets)",
]);

export const predatorManagerAbi = parseAbi([
  "function evaluateAndRebalance() returns (bool rebalanced, uint8 targetSource)",
]);

export const yieldSourceAbi = parseAbi([
  "function supplyRateRay() view returns (uint256)",
  "function stressBps() view returns (uint256)",
  "function totalAssets() view returns (uint256)",
]);

export const predatorSentinelAbi = parseAbi([
  "function sourceChainId() view returns (uint256)",
  "function aavePool() view returns (address)",
  "function morphoVault() view returns (address)",
  "function destinationChainId() view returns (uint256)",
  "function destinationManager() view returns (address)",
  "function destinationGasLimit() view returns (uint64)",
  "function coverDebt()",
  "function subscribe()",
  "function unsubscribe()",
  "function pause()",
  "function resume()",
]);

export const reactiveSystemAbi = parseAbi([
  "function debt(address _contract) view returns (uint256)",
]);

export const erc20Abi = parseAbi([
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 value) returns (bool)",
]);
