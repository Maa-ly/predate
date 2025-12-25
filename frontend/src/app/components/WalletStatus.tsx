"use client";

import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { sepolia } from "wagmi/chains";

import { reactiveLasna } from "@/lib/wagmi";

function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function WalletStatus() {
  const { address, chainId, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect, error, isPending } = useConnect();
  const { switchChain, isPending: isSwitchPending } = useSwitchChain();

  if (!isConnected) {
    return (
      <div className="flex items-center gap-2">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            type="button"
            onClick={() => connect({ connector })}
            disabled={isPending}
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            {connector.name}
          </button>
        ))}
        {error ? (
          <span className="max-w-[220px] truncate text-xs text-red-600">
            {error.message}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="rounded-md border border-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
        {address ? shortAddress(address) : "Connected"}
      </span>
      {chainId !== sepolia.id && chainId !== reactiveLasna.id ? (
        <>
          <button
            type="button"
            onClick={() => switchChain({ chainId: sepolia.id })}
            disabled={isSwitchPending}
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Switch to Sepolia
          </button>
          <button
            type="button"
            onClick={() => switchChain({ chainId: reactiveLasna.id })}
            disabled={isSwitchPending}
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Switch to Lasna
          </button>
        </>
      ) : chainId !== sepolia.id ? (
        <button
          type="button"
          onClick={() => switchChain({ chainId: sepolia.id })}
          disabled={isSwitchPending}
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Switch to Sepolia
        </button>
      ) : (
        <button
          type="button"
          onClick={() => switchChain({ chainId: reactiveLasna.id })}
          disabled={isSwitchPending}
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Switch to Lasna
        </button>
      )}
      <span className="text-xs text-emerald-700 dark:text-emerald-400">
        {chainId === sepolia.id
          ? "Sepolia"
          : chainId === reactiveLasna.id
            ? "Lasna"
            : `Chain ${chainId ?? "—"}`}
      </span>
      <button
        type="button"
        onClick={() => disconnect()}
        className="rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        Disconnect
      </button>
    </div>
  );
}
