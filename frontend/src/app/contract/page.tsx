"use client";

import { formatUnits, parseUnits } from "viem";
import { useMemo, useState } from "react";
import {
  useAccount,
  useBalance,
  useReadContract,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import {
  erc20Abi,
  predatorManagerAbi,
  predatorSentinelAbi,
  predatorVaultAbi,
  reactiveContracts,
  reactiveSystemAbi,
  sepoliaContracts,
  yieldSourceAbi,
} from "@/lib/contracts";

function safeFormatUnits(value: bigint | undefined, decimals: number) {
  if (value === undefined) return "—";
  return formatUnits(value, decimals);
}

function isZeroAddress(address: string | undefined) {
  return (
    address?.toLowerCase() === "0x0000000000000000000000000000000000000000"
  );
}

function formatRayPercent(value: bigint | undefined) {
  if (value === undefined) return "—";
  return `${formatUnits(value, 25)}%`;
}

function formatBpsPercent(value: bigint | undefined) {
  if (value === undefined) return "—";
  return `${Number(value) / 100}%`;
}

export default function ContractPage() {
  const { address, chainId, isConnected } = useAccount();

  const [depositAmount, setDepositAmount] = useState("");
  const [redeemShares, setRedeemShares] = useState("");
  const [sentinelTopUpAmount, setSentinelTopUpAmount] = useState("");
  const [lastAction, setLastAction] = useState<
    | "approve"
    | "deposit"
    | "redeem"
    | "evaluate"
    | "topup"
    | "coverDebt"
    | "subscribe"
    | "resume"
    | "pause"
    | "unsubscribe"
    | null
  >(null);

  const { data: assetSymbol } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.asset,
    abi: erc20Abi,
    functionName: "symbol",
    query: { staleTime: 60_000 },
  });

  const { data: assetDecimals } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.asset,
    abi: erc20Abi,
    functionName: "decimals",
    query: { staleTime: 60_000 },
  });

  const assetDecimalsResolved = assetDecimals ?? 18;
  const shareDecimals = 18;

  const { data: assetBalance } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.asset,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });

  const { data: shareBalance } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });

  const { data: totalAssets } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "totalAssets",
    query: { refetchInterval: 10_000 },
  });

  const { data: totalSupply } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "totalSupply",
    query: { refetchInterval: 10_000 },
  });

  const { data: activeSource } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "activeSource",
    query: { refetchInterval: 10_000 },
  });

  const { data: source0Address } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "source0",
    query: { staleTime: 60_000, refetchInterval: 10_000 },
  });

  const { data: source1Address } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "source1",
    query: { staleTime: 60_000, refetchInterval: 10_000 },
  });

  const source0Ready = Boolean(source0Address && !isZeroAddress(source0Address));
  const source1Ready = Boolean(source1Address && !isZeroAddress(source1Address));

  const { data: source0RateRay } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source0Address,
    abi: yieldSourceAbi,
    functionName: "supplyRateRay",
    query: { enabled: source0Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: source1RateRay } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source1Address,
    abi: yieldSourceAbi,
    functionName: "supplyRateRay",
    query: { enabled: source1Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: source0StressBps } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source0Address,
    abi: yieldSourceAbi,
    functionName: "stressBps",
    query: { enabled: source0Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: source1StressBps } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source1Address,
    abi: yieldSourceAbi,
    functionName: "stressBps",
    query: { enabled: source1Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: source0Assets } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source0Address,
    abi: yieldSourceAbi,
    functionName: "totalAssets",
    query: { enabled: source0Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: source1Assets } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: source1Address,
    abi: yieldSourceAbi,
    functionName: "totalAssets",
    query: { enabled: source1Ready, staleTime: 10_000, refetchInterval: 10_000 },
  });

  const activeSourceNumber = useMemo(() => {
    if (activeSource === undefined) return undefined;
    return Number(activeSource);
  }, [activeSource]);

  const depositAssetsParsed = useMemo(() => {
    if (!depositAmount.trim()) return undefined;
    try {
      return parseUnits(depositAmount, assetDecimalsResolved);
    } catch {
      return undefined;
    }
  }, [depositAmount, assetDecimalsResolved]);

  const redeemSharesParsed = useMemo(() => {
    if (!redeemShares.trim()) return undefined;
    try {
      return parseUnits(redeemShares, shareDecimals);
    } catch {
      return undefined;
    }
  }, [redeemShares, shareDecimals]);

  const { data: previewDepositShares } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "previewDeposit",
    args: depositAssetsParsed ? [depositAssetsParsed] : undefined,
    query: { enabled: Boolean(depositAssetsParsed) },
  });

  const { data: previewRedeemAssets } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.vault,
    abi: predatorVaultAbi,
    functionName: "previewRedeem",
    args: redeemSharesParsed ? [redeemSharesParsed] : undefined,
    query: { enabled: Boolean(redeemSharesParsed) },
  });

  const { data: allowance } = useReadContract({
    chainId: sepoliaContracts.chainId,
    address: sepoliaContracts.asset,
    abi: erc20Abi,
    functionName: "allowance",
    args: address ? [address, sepoliaContracts.vault] : undefined,
    query: { enabled: Boolean(address) },
  });

  const { data: sentinelSourceChainId } = useReadContract({
    chainId: reactiveContracts.chainId,
    address: reactiveContracts.sentinel,
    abi: predatorSentinelAbi,
    functionName: "sourceChainId",
    query: { staleTime: 60_000, refetchInterval: 30_000 },
  });

  const { data: sentinelDestinationManager } = useReadContract({
    chainId: reactiveContracts.chainId,
    address: reactiveContracts.sentinel,
    abi: predatorSentinelAbi,
    functionName: "destinationManager",
    query: { staleTime: 60_000, refetchInterval: 30_000 },
  });

  const { data: sentinelDebt } = useReadContract({
    chainId: reactiveContracts.chainId,
    address: reactiveContracts.systemContract,
    abi: reactiveSystemAbi,
    functionName: "debt",
    args: [reactiveContracts.sentinel],
    query: { staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: sentinelBalance } = useBalance({
    chainId: reactiveContracts.chainId,
    address: reactiveContracts.sentinel,
    query: { staleTime: 10_000, refetchInterval: 10_000 },
  });

  const { data: userReactiveBalance } = useBalance({
    chainId: reactiveContracts.chainId,
    address: address,
    query: { enabled: Boolean(address), staleTime: 10_000, refetchInterval: 10_000 },
  });

  const needsApprove = useMemo(() => {
    if (!depositAssetsParsed) return false;
    if (allowance === undefined) return false;
    return allowance < depositAssetsParsed;
  }, [allowance, depositAssetsParsed]);

  const topUpValue = useMemo(() => {
    if (!sentinelTopUpAmount.trim()) return undefined;
    try {
      return parseUnits(sentinelTopUpAmount, 18);
    } catch {
      return undefined;
    }
  }, [sentinelTopUpAmount]);

  const {
    writeContract,
    data: txHash,
    error: writeError,
    isPending,
  } = useWriteContract();

  const {
    sendTransaction,
    data: topUpHash,
    error: topUpError,
    isPending: isTopUpPending,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: txHash,
    });

  const { isLoading: isTopUpConfirming, isSuccess: isTopUpConfirmed } =
    useWaitForTransactionReceipt({
      hash: topUpHash,
    });

  const isBusy = isPending || isConfirming || isTopUpPending || isTopUpConfirming;
  const canDeposit = Boolean(isConnected && address && depositAssetsParsed);
  const canRedeem = Boolean(isConnected && address && redeemSharesParsed);

  const canTopUp = Boolean(
    isConnected &&
      address &&
      chainId === reactiveContracts.chainId &&
      topUpValue !== undefined &&
      topUpValue > 0n,
  );

  const canCoverDebt = Boolean(
    isConnected &&
      chainId === reactiveContracts.chainId &&
      (sentinelDebt ?? 0n) > 0n &&
      (sentinelBalance?.value ?? 0n) >= (sentinelDebt ?? 0n),
  );

  const canManageSubscriptions = Boolean(
    isConnected && chainId === reactiveContracts.chainId,
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Contract</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Sepolia deployment addresses are wired in by default.
        </p>
        <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Vault</div>
            <div className="truncate font-mono">{sepoliaContracts.vault}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Manager</div>
            <div className="truncate font-mono">{sepoliaContracts.manager}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Asset</div>
            <div className="truncate font-mono">{sepoliaContracts.asset}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Status</div>
            <div className="flex items-center gap-2">
              <span>Active source:</span>
              <span className="font-medium">
                {activeSourceNumber === undefined ? "—" : activeSourceNumber}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Yield Sources</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Active source is an index: 0 or 1.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div
            className={`space-y-2 rounded-md border p-3 dark:bg-black ${
              activeSourceNumber === 0
                ? "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950"
                : "border-zinc-200 bg-white dark:border-zinc-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-500">Source 0</div>
              {activeSourceNumber === 0 ? (
                <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                  Active
                </span>
              ) : null}
            </div>
            <div className="truncate font-mono text-sm">
              {source0Address ? source0Address : "—"}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="space-y-1">
                <div className="text-zinc-500">Rate</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {formatRayPercent(source0RateRay)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">Stress</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {formatBpsPercent(source0StressBps)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">Assets</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {safeFormatUnits(source0Assets, assetDecimalsResolved)}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`space-y-2 rounded-md border p-3 dark:bg-black ${
              activeSourceNumber === 1
                ? "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950"
                : "border-zinc-200 bg-white dark:border-zinc-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-500">Source 1</div>
              {activeSourceNumber === 1 ? (
                <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white">
                  Active
                </span>
              ) : null}
            </div>
            <div className="truncate font-mono text-sm">
              {source1Address ? source1Address : "—"}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="space-y-1">
                <div className="text-zinc-500">Rate</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {formatRayPercent(source1RateRay)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">Stress</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {formatBpsPercent(source1StressBps)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-zinc-500">Assets</div>
                <div className="font-medium text-zinc-900 dark:text-zinc-50">
                  {safeFormatUnits(source1Assets, assetDecimalsResolved)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="text-xs text-zinc-500">TVL (totalAssets)</div>
          <div className="mt-1 text-xl font-semibold">
            {safeFormatUnits(totalAssets, assetDecimalsResolved)}{" "}
            {assetSymbol ?? ""}
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="text-xs text-zinc-500">totalSupply (shares)</div>
          <div className="mt-1 text-xl font-semibold">
            {safeFormatUnits(totalSupply, shareDecimals)}
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="text-xs text-zinc-500">Your asset balance</div>
          <div className="mt-1 text-xl font-semibold">
            {safeFormatUnits(assetBalance, assetDecimalsResolved)}{" "}
            {assetSymbol ?? ""}
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="text-xs text-zinc-500">Your share balance</div>
          <div className="mt-1 text-xl font-semibold">
            {safeFormatUnits(shareBalance, shareDecimals)}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Deposit</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Approves the vault (if needed) then calls `deposit(assets,
              receiver)`.
            </p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Amount</label>
            <input
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="0.0"
              inputMode="decimal"
              className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
            />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Estimated shares: {safeFormatUnits(previewDepositShares, shareDecimals)}
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Allowance:{" "}
              {safeFormatUnits(allowance, assetDecimalsResolved)} {assetSymbol ?? ""}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!canDeposit || !needsApprove || isBusy}
              onClick={() => {
                if (!address || !depositAssetsParsed) return;
                setLastAction("approve");
                writeContract({
                  chainId: sepoliaContracts.chainId,
                  address: sepoliaContracts.asset,
                  abi: erc20Abi,
                  functionName: "approve",
                  args: [sepoliaContracts.vault, depositAssetsParsed],
                });
              }}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {isBusy && lastAction === "approve" ? "Approving…" : "Approve"}
            </button>
            <button
              type="button"
              disabled={!canDeposit || needsApprove || isBusy}
              onClick={() => {
                if (!address || !depositAssetsParsed) return;
                setLastAction("deposit");
                writeContract({
                  chainId: sepoliaContracts.chainId,
                  address: sepoliaContracts.vault,
                  abi: predatorVaultAbi,
                  functionName: "deposit",
                  args: [depositAssetsParsed, address],
                });
              }}
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              {isBusy && lastAction === "deposit" ? "Depositing…" : "Deposit"}
            </button>
          </div>
        </div>

        <div className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Redeem</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Calls `redeem(shares, receiver, owner)`.
            </p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Shares</label>
            <input
              value={redeemShares}
              onChange={(e) => setRedeemShares(e.target.value)}
              placeholder="0.0"
              inputMode="decimal"
              className="w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
            />
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Estimated assets:{" "}
              {safeFormatUnits(previewRedeemAssets, assetDecimalsResolved)}{" "}
              {assetSymbol ?? ""}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!canRedeem || isBusy}
              onClick={() => {
                if (!address || !redeemSharesParsed) return;
                setLastAction("redeem");
                writeContract({
                  chainId: sepoliaContracts.chainId,
                  address: sepoliaContracts.vault,
                  abi: predatorVaultAbi,
                  functionName: "redeem",
                  args: [redeemSharesParsed, address, address],
                });
              }}
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              {isBusy && lastAction === "redeem" ? "Redeeming…" : "Redeem"}
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Manager</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Triggers `evaluateAndRebalance()` on the Sepolia manager.
          </p>
        </div>
        <button
          type="button"
          disabled={!isConnected || isBusy}
          onClick={() => {
            setLastAction("evaluate");
            writeContract({
              chainId: sepoliaContracts.chainId,
              address: sepoliaContracts.manager,
              abi: predatorManagerAbi,
              functionName: "evaluateAndRebalance",
              args: [],
            });
          }}
          className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          {isBusy && lastAction === "evaluate"
            ? "Evaluating…"
            : "Evaluate & Rebalance"}
        </button>
      </section>

      <section className="space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Reactive Sentinel</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            The Sentinel runs on Lasna (Reactive Network) and watches Sepolia events, then
            triggers manager rebalances via callback transactions.
          </p>
        </div>
        <div className="rounded-md border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="text-xs text-zinc-500">What the numbers mean</div>
          <div className="mt-1 text-zinc-600 dark:text-zinc-400">
            When the Sentinel executes reactive subscriptions/callbacks, it can accrue
            debt tracked by the Lasna system contract. Keep the Sentinel funded with
            REACT, then call `coverDebt()` to pay the system contract from the Sentinel
            balance.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Sentinel</div>
            <div className="truncate font-mono">{reactiveContracts.sentinel}</div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Debt</div>
            <div className="font-medium">
              {sentinelDebt === undefined
                ? "—"
                : `${formatUnits(sentinelDebt, 18)} REACT`}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Sentinel balance</div>
            <div className="font-medium">
              {sentinelBalance
                ? `${formatUnits(sentinelBalance.value, sentinelBalance.decimals)} ${sentinelBalance.symbol}`
                : "—"}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Your Lasna balance</div>
            <div className="font-medium">
              {userReactiveBalance
                ? `${formatUnits(userReactiveBalance.value, userReactiveBalance.decimals)} ${userReactiveBalance.symbol}`
                : address
                  ? "—"
                  : "Connect wallet"}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Source chainId</div>
            <div className="font-medium">
              {sentinelSourceChainId === undefined
                ? "—"
                : sentinelSourceChainId.toString()}
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black">
            <div className="text-xs text-zinc-500">Destination manager</div>
            <div className="truncate font-mono">
              {sentinelDestinationManager ?? "—"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <div className="text-sm font-medium">Top up Sentinel</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Switch to Lasna, then send REACT to the Sentinel so it can pay for callbacks.
            </div>
            <div className="flex flex-wrap gap-2">
              <input
                value={sentinelTopUpAmount}
                onChange={(e) => setSentinelTopUpAmount(e.target.value)}
                placeholder="0.05"
                inputMode="decimal"
                className="min-w-[180px] flex-1 rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
              />
              <button
                type="button"
                disabled={sentinelDebt === undefined || sentinelDebt === 0n}
                onClick={() => {
                  if (sentinelDebt === undefined) return;
                  setSentinelTopUpAmount(formatUnits(sentinelDebt, 18));
                }}
                className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                Set to debt
              </button>
              <button
                type="button"
                disabled={!canTopUp || isBusy}
                onClick={() => {
                  if (!topUpValue) return;
                  setLastAction("topup");
                  sendTransaction({
                    chainId: reactiveContracts.chainId,
                    to: reactiveContracts.sentinel,
                    value: topUpValue,
                  });
                }}
                className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
              >
                {isBusy && lastAction === "topup" ? "Sending…" : "Send"}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Pay debt</div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
              Calls `coverDebt()` on the Sentinel (it pays the system contract from its own balance).
            </div>
            <button
              type="button"
              disabled={!canCoverDebt || isBusy}
              onClick={() => {
                setLastAction("coverDebt");
                writeContract({
                  chainId: reactiveContracts.chainId,
                  address: reactiveContracts.sentinel,
                  abi: predatorSentinelAbi,
                  functionName: "coverDebt",
                  args: [],
                });
              }}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {isBusy && lastAction === "coverDebt" ? "Paying…" : "Cover debt"}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Activate subscriptions</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400">
            If Reactscan shows the Sentinel as inactive, connect with the deployer wallet on
            Lasna and call `subscribe()` (or `resume()` if it was paused).
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!canManageSubscriptions || isBusy}
              onClick={() => {
                setLastAction("subscribe");
                writeContract({
                  chainId: reactiveContracts.chainId,
                  address: reactiveContracts.sentinel,
                  abi: predatorSentinelAbi,
                  functionName: "subscribe",
                  args: [],
                });
              }}
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              {isBusy && lastAction === "subscribe" ? "Subscribing…" : "Subscribe"}
            </button>
            <button
              type="button"
              disabled={!canManageSubscriptions || isBusy}
              onClick={() => {
                setLastAction("resume");
                writeContract({
                  chainId: reactiveContracts.chainId,
                  address: reactiveContracts.sentinel,
                  abi: predatorSentinelAbi,
                  functionName: "resume",
                  args: [],
                });
              }}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {isBusy && lastAction === "resume" ? "Resuming…" : "Resume"}
            </button>
            <button
              type="button"
              disabled={!canManageSubscriptions || isBusy}
              onClick={() => {
                setLastAction("pause");
                writeContract({
                  chainId: reactiveContracts.chainId,
                  address: reactiveContracts.sentinel,
                  abi: predatorSentinelAbi,
                  functionName: "pause",
                  args: [],
                });
              }}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {isBusy && lastAction === "pause" ? "Pausing…" : "Pause"}
            </button>
            <button
              type="button"
              disabled={!canManageSubscriptions || isBusy}
              onClick={() => {
                setLastAction("unsubscribe");
                writeContract({
                  chainId: reactiveContracts.chainId,
                  address: reactiveContracts.sentinel,
                  abi: predatorSentinelAbi,
                  functionName: "unsubscribe",
                  args: [],
                });
              }}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {isBusy && lastAction === "unsubscribe" ? "Unsubscribing…" : "Unsubscribe"}
            </button>
          </div>
        </div>
      </section>

      {writeError ? (
        <section className="rounded-lg border border-red-200 bg-white p-4 text-sm text-red-700 dark:border-red-900 dark:bg-black dark:text-red-300">
          {writeError.message}
        </section>
      ) : null}

      {topUpError ? (
        <section className="rounded-lg border border-red-200 bg-white p-4 text-sm text-red-700 dark:border-red-900 dark:bg-black dark:text-red-300">
          {topUpError.message}
        </section>
      ) : null}

      {txHash ? (
        <section className="rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-zinc-500">
              {lastAction ?? "transaction"}
            </div>
            <div className="truncate font-mono">{txHash}</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              {isConfirming
                ? "Confirming…"
                : isConfirmed
                  ? "Confirmed"
                  : "Sent"}
            </div>
          </div>
        </section>
      ) : null}

      {topUpHash ? (
        <section className="rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black">
          <div className="flex flex-col gap-1">
            <div className="text-xs text-zinc-500">top up</div>
            <div className="truncate font-mono">{topUpHash}</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              {isTopUpConfirming
                ? "Confirming…"
                : isTopUpConfirmed
                  ? "Confirmed"
                  : "Sent"}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
