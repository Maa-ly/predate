DETAILS
Design and implement a cross-chain lending automation vault using Reactive Smart Contracts. The vault should monitor at least two lending markets (e.g. two lending pools on Ethereum Sepolia) and automatically rebalance provided liquidity between them based on a configurable yield signal.



Core requirements:

Integrate with at least two lending pools (e.g. A and B) that expose deposit/withdraw and rate information on-chain.
Use Reactive Smart Contracts to:
Listen to on-chain events or periodically check state (supply/borrow rates, utilization, or another yield proxy).
Trigger rebalancing transactions that move funds from pool A → B or B → A when a configurable condition is met (e.g. yield difference above a threshold).
Provide a single “vault” interface for users:
Users deposit into the vault once.
The vault allocates and reallocates funds between pools automatically according to the strategy.





The Reactive Network is an EVM-compatible execution layer that allows developers to create dApps using reactive contracts. These contracts differ from traditional smart contracts by using inversion-of-control for the transaction lifecycle, driven by data flows across blockchains rather than user input. Reactive contracts receive event logs from various chains, executing Solidity logic based on these events instead of user transactions. They can independently determine the need to transmit data to destination chains, enabling conditional state changes. The Reactive Network offers fast and cost-effective computation through a proprietary parallelized EVM implementation.

