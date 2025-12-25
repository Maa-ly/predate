import Link from "next/link";

import { reactiveContracts, sepoliaContracts } from "@/lib/contracts";

export default function Home() {
  return (
    <main className="space-y-8">
      <section className="space-y-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Predator</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A cross-chain, event-driven vault that rebalances automatically using the
            Reactive Network.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/contract"
            className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
          >
            Open contract page
          </Link>
          <a
            href="https://wagmi.sh/react/api/hooks"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            wagmi hooks
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="font-medium">Vision</div>
          <div className="text-zinc-600 dark:text-zinc-400">
            Make yield routing feel like an autopilot: users deposit once, and the system
            reacts to market signals and strategy events without requiring a keeper to
            run constantly on the same chain.
          </div>
        </div>
        <div className="space-y-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="font-medium">Problem</div>
          <div className="text-zinc-600 dark:text-zinc-400">
            Rebalancing strategies often rely on off-chain bots and brittle scheduling.
            Predator moves this to an on-chain, event-driven model where a Reactive
            Sentinel can watch Sepolia activity and trigger a rebalance when it matters.
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
        <div className="font-medium">How it works</div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
            <div className="text-xs text-zinc-500">1) Deposit</div>
            <div className="text-zinc-700 dark:text-zinc-300">
              Users deposit the Sepolia asset into the vault and receive shares.
            </div>
          </div>
          <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
            <div className="text-xs text-zinc-500">2) Evaluate</div>
            <div className="text-zinc-700 dark:text-zinc-300">
              The manager evaluates the best yield source and can rebalance the vault.
            </div>
          </div>
          <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
            <div className="text-xs text-zinc-500">3) React</div>
            <div className="text-zinc-700 dark:text-zinc-300">
              A Reactive Sentinel (on Lasna) watches Sepolia events and triggers
              rebalances via callbacks.
            </div>
          </div>
        </div>
        <div className="text-zinc-600 dark:text-zinc-400">
          Reactive callbacks consume resources and accrue debt on Lasna; the Sentinel
          must be topped up with REACT and can call `coverDebt()` to pay down the system
          debt.
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="font-medium">Sepolia deployment</div>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Vault</div>
              <div className="truncate font-mono">{sepoliaContracts.vault}</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Manager</div>
              <div className="truncate font-mono">{sepoliaContracts.manager}</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Asset</div>
              <div className="truncate font-mono">{sepoliaContracts.asset}</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Chain</div>
              <div>Sepolia (11155111)</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="font-medium">Reactive deployment</div>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Sentinel</div>
              <div className="truncate font-mono">{reactiveContracts.sentinel}</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">System contract</div>
              <div className="truncate font-mono">{reactiveContracts.systemContract}</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Chain</div>
              <div>Lasna (5318007)</div>
            </div>
            <div className="rounded-md border border-zinc-200 p-3 dark:border-zinc-800">
              <div className="text-xs text-zinc-500">Token</div>
              <div>REACT</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
