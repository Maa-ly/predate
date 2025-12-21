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

The Reactive Network is an EVM-compatible execution layer that allows developers to create dApps using reactive contracts. These contracts differ from traditional smart contracts by using inversion-of-control for the transaction lifecycle, driven by data flows across blockchains rather than user input. Reactive contracts receive event logs from various chains, executing Solidity logic based on these events instead of user transactions. They can independently determine the need to transmit data to destination chains, enabling conditional state changes. The Reactive Network offers fast and cost-effective computation through a proprietary parallelized EVM implementation.


