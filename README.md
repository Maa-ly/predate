## Predate Vault

Predate Vault is a reactive, event-driven lending vault that routes deposits between Aave v3 and a Morpho ERC4626 vault. It monitors “yield vs. stress” on both venues and can rebalance liquidity when conditions change.

### Vision (Why Use This)

Most lending users are passive: they pick one market, deposit, and only notice problems after withdrawal liquidity dries up or yields collapse. Predate Vault’s goal is to make that behavior automatic:

- Chase yield only when it’s safe: move toward higher supply rates when liquidity is healthy.
- Escape stress early: rotate away from venues where withdrawals are getting constrained before you’re forced to exit at the worst time.
- React fast: use Reactive Network subscriptions so the strategy can be triggered by on-chain events, not manual monitoring.

In short: it’s a “stay compounding, don’t get trapped” vault. The upside is potentially better yield and fewer bad exits; the tradeoff is added contract/protocol complexity and the possibility the strategy underperforms in some market regimes.

This repository contains:

- An on-chain vault (`PredatorVault`) that mints shares on deposit and withdraws underlying on redeem
- Two yield-source adapters:
  - `AaveV3YieldSource` (Aave v3 supply via Pool + DataProvider)
  - `MorphoVaultYieldSource` (ERC4626 vault integration)
- A strategy/controller (`PredatorReactiveManager`) that evaluates signals and triggers rebalances
- A Reactive Network sentinel (`PredatorSentinel`) that subscribes to Sepolia events and emits cross-chain callbacks targeting the manager

### How It Works

1. Users deposit the underlying asset into `PredatorVault` and receive ERC20 shares.
2. The vault invests idle assets into the currently active yield source (Aave or Morpho).
3. `PredatorReactiveManager.evaluateAndRebalance()` compares:
   - Supply rates (in ray, \(1e27\))
   - Stress signals (in bps) from each source
4. If the rate advantage exceeds a threshold and stress constraints allow it, the manager rebalances:
   - Withdraws from sources
   - Switches the active source
   - Re-deploys idle assets into the new source
5. `PredatorSentinel` runs on Reactive Network (Lasna) and subscribes to events on Sepolia:
   - Aave v3 `ReserveDataUpdated`
   - Morpho ERC4626 `Deposit` and `Withdraw`
   When those events occur, it emits a Reactive callback targeting `evaluateAndRebalance()` on the Sepolia manager.

### Profit / Loss (What The User Gets)

This vault is designed to improve risk-adjusted returns versus passively supplying to a single venue, but it does not guarantee profit.

How a user “makes money”:

- Users deposit an underlying ERC20 and receive vault shares.
- Over time, the underlying earns yield in Aave or Morpho.
- When the vault’s underlying balance grows from yield, each share becomes redeemable for more underlying than before.

Why it can outperform:

- If one venue’s supply rate becomes meaningfully better, the manager can move capital to capture the higher yield.
- If stress rises (e.g., worse withdrawal liquidity) the manager can rotate away to reduce the chance of being stuck.

What can cause loss or underperformance:

- Both venues can have adverse conditions (low yield, liquidity constraints, protocol risk).
- Rebalances can happen “too late” relative to market changes, or miss yield if thresholds are too conservative.
- If liquidity is constrained on a venue, exits can be delayed and the vault may hold more idle liquidity to satisfy withdrawals.
- Smart contract risk exists in the vault and adapters, and in the underlying protocols (Aave/Morpho).


### Contracts

- `src/PredatorVault.sol`
  - Holds underlying and mints/burns shares
  - Owns the source adapters and delegates moves via the manager
- `src/adapters/AaveV3YieldSource.sol`
  - Supplies/withdraws to Aave v3 Pool
  - Reads yield/stress via Aave pool + data provider
- `src/adapters/MorphoVaultYieldSource.sol`
  - Deposits/withdraws to an ERC4626 vault
  - Reads yield/stress from the vault (e.g. maxWithdraw / share price dynamics)
- `src/PredatorReactiveManager.sol`
  - Evaluates the two sources and calls `PredatorVault.rebalanceTo(target)`
- `src/reactive/PredatorSentinel.sol`
  - Reactive Contract that subscribes to Sepolia logs and emits callbacks to the Sepolia manager

## Deployments

### Sepolia (Chain ID: `11155111`)

- `PredatorVault`: `0x91Df8Fb96D0C6db050cd215A6e883B8233F41f2B`
- `PredatorReactiveManager`: `0x9CC96a5AE38979fbC2831e2861F2cDACFBB54F8b`
- `AaveV3YieldSource`: `0xc37925524b1505f1487EF21699ccBf272D3226C4`
- `MorphoVaultYieldSource`: `0x4b6907795C906fCd9e8Bffc4e674dEd272febA3a`

Protocol addresses used by this deployment:

- `ASSET`: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
- `AAVE_POOL`: `0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951`
- `AAVE_DATA_PROVIDER`: `0x3e9708d80f7B3e43118013075F7e95CE3AB31F31`
- `MORPHO_VAULT`: `0x9A1Fc3ff25083f33373Bbf9617E12892FF19E07A`

### Reactive Network (Lasna) (Chain ID: `5318007`)

- `PredatorSentinel`: `0x520832cD1dc4A1A4F4dE2303B8761906e4Aa7991`
- Reactive system subscription service: `0x0000000000000000000000000000000000fffFfF`

## Deploy / Run

This repo uses Foundry scripts and a `Makefile`.

- Set `RPC_URL` and `PRIVATE_KEY` (or put them in `.env`).
- Deploy on Sepolia: `make deploy-sepolia`
- Interact with latest Sepolia deployment: `make interact-sepolia` (reads `broadcast/DeployPredator.s.sol/11155111/runSepolia-latest.json`)
- Deploy sentinel on Lasna: `make deploy-reactive`
- Register subscriptions on Lasna: `make reactive-subscribe`
- Full flow (Sepolia + Lasna): `make deploy-crosschain`

### Makefile Targets

- `make build`: Compile contracts
- `make test`: Run tests
- `make deploy-sepolia`: Deploy vault + adapters + manager to Sepolia using `.env` addresses
- `make deploy-reactive`: Deploy `PredatorSentinel` to Lasna targeting the latest Sepolia manager
- `make reactive-subscribe`: Register Reactive Network subscriptions for the latest sentinel
- `make interact-sepolia`: Run `script/InteractPredator.s.sol` against the latest Sepolia deployment

### Interact Script

The `InteractPredator` script can:

- Print status (`DO_STATUS=true`)
- Deposit ERC20 assets (`DEPOSIT_ASSETS=...`)
- Deposit ETH (wrap to WETH) (`DEPOSIT_ETH=...`, `WETH=...`)
- Run manager evaluation (`DO_EVALUATE=true`)
- Redeem shares (`REDEEM_SHARES=...`)

Examples:

```bash
# Deploy on Sepolia (requires RPC_URL + PRIVATE_KEY)
RPC_URL=https://ethereum-sepolia.publicnode.com PRIVATE_KEY=... make deploy-sepolia

# Deposit 10 USDC into the latest Sepolia deployment
RPC_URL=https://ethereum-sepolia.publicnode.com PRIVATE_KEY=... \
DEPOSIT_ASSETS=10000000 DO_EVALUATE=true DO_STATUS=true make interact-sepolia

# Just print status for the latest Sepolia deployment
RPC_URL=https://ethereum-sepolia.publicnode.com PRIVATE_KEY=... DO_STATUS=true make interact-sepolia
```

## Notes

- `ASSET` must match `MORPHO_VAULT.asset()` or deployment will revert with `ASSET_MISMATCH`.
- The sentinel registers subscriptions via an explicit `subscribe()` call (not in the constructor) to avoid subscription failures during deployment.
 
 Run this to top up the Lasna sentinel with a bigger buffer, clear any debt, and (re)subscribe:

- make reactive-reactivate TOP_UP_WEI=100000000000000000
That TOP_UP_WEI is in wei; 100000000000000000 = 0.1 REACT/ETH on Lasna. If you want even more, bump it (e.g. 0.5 = 500000000000000000 ).

To sanity-check you’re “safe” after topping up:

- cast balance 0x520832cD1dc4A1A4F4dE2303B8761906e4Aa7991 --rpc-url https://lasna-rpc.rnk.dev/
- cast call 0x0000000000000000000000000000000000fffFfF "debt(address)(uint256)" 0x520832cD1dc4A1A4F4dE2303B8761906e4Aa7991 --rpc-url https://lasna-rpc.rnk.dev/
Goal: sentinel balance comfortably > 0 and debt(...) = 0 .


he evaluateAndRebalance function (I assume that's what you meant by "exvute nand evalauet" - likely a typo for "evaluate and rebalance") assesses the supply rates and stress levels of two yield sources (e.g., Aave and Morpho vaults) and decides whether to rebalance the vault to the more favorable one based on configurable thresholds. It checks for rate differences exceeding a threshold or stress levels hitting exit/max limits, then calls the vault's rebalanceTo if needed, with a cooldown to prevent excessive actions.

The Reactive Network enables cross-chain reactivity: the PredatorSentinel contract subscribes to specific events (like rate updates or vault interactions) on a source chain and reacts by emitting a callback to trigger evaluateAndRebalance on a destination chain, allowing automated yield optimization across chains.

For safety, it uses pausing mechanisms, owner-only controls, cooldowns to limit rebalances, and validates reactive callers/senders to prevent unauthorized triggers.