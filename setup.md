## Setup

### Prerequisites

- Foundry installed (`forge`, `cast`, `anvil`)
- Git submodules initialized

### Install

```bash
git submodule update --init --recursive
```

Verify toolchain:

```bash
forge --version
```

### Configure Environment

Copy the example env file and fill values:

```bash
cp .env.example .env
```

This repo reads env vars via Foundry cheatcodes (`vm.env*`). If you use a tool like `direnv`, you can auto-load `.env`.

## Build & Test

```bash
make fmt
make build
make test
```

CI runs:

- `forge fmt --check`
- `forge build --sizes`
- `forge test -vvv`

## Local Deployment (Anvil)

Terminal 1:

```bash
make anvil
```

Terminal 2 (deploy using mocks + optional interactions):

```bash
make deploy-local
```

What `deploy-local` does:

- Deploys mock ERC20, mock Aave pool + data provider, and mock ERC4626
- Deploys `PredatorVault`, `AaveV3YieldSource`, `MorphoVaultYieldSource`, `PredatorReactiveManager`
- Optionally deposits and calls `evaluateAndRebalance()` based on env vars

Tune local behavior by setting env vars before running `make deploy-local`:

- `DEPOSIT_ASSETS` (e.g. `1000e18`)
- `DO_EVALUATE=true`
- `DEPLOY_SENTINEL=true`

## Live / Testnet Deployment

1) Set `.env` variables:

- `RPC_URL` (your network RPC)
- `PRIVATE_KEY` (deployer key)
- Protocol addresses:
  - `ASSET`
  - `AAVE_POOL`
  - `AAVE_DATA_PROVIDER`
  - `MORPHO_VAULT`

2) Deploy:

```bash
make deploy
```

You can override vault metadata:

- `VAULT_NAME`
- `VAULT_SYMBOL`

And strategy parameters (defaults match `PredatorReactiveManager` constructor):

- `RATE_DIFF_THRESHOLD_RAY`
- `EXIT_STRESS_BPS`
- `MAX_STRESS_BPS`
- `COOLDOWN`

## Interacting

### Deposit via the deploy script

Set a deposit amount and redeploy (or re-run the script):

```bash
DEPOSIT_ASSETS=1000e18 make deploy
```

This will approve the vault and call `PredatorVault.deposit(assets, deployer)`.

### Trigger evaluation

```bash
DO_EVALUATE=true make deploy
```

This calls `PredatorReactiveManager.evaluateAndRebalance()`.

### Deploy the Reactive Sentinel

```bash
DEPLOY_SENTINEL=true make deploy
```

Optional sentinel env overrides:

- `SENTINEL_SOURCE_CHAIN_ID`
- `SENTINEL_DESTINATION_CHAIN_ID`
- `SENTINEL_DESTINATION_GAS_LIMIT`

The sentinel subscribes to:

- Aave `ReserveDataUpdated`
- ERC4626 `Deposit` and `Withdraw` on the Morpho vault

And emits a `Callback(...)` payload targeting `evaluateAndRebalance()`.

## Notes

- The deploy script entrypoint is `script/DeployPredator.s.sol:DeployPredator`.
- The sentinel contract is `src/reactive/PredatorSentinel.sol`.
