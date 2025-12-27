"use client";

import { defineChain } from "viem";
import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

export const reactiveLasna = defineChain({
  id: 5_318_007,
  name: "Reactive Network (Lasna)",
  nativeCurrency: { name: "REACT", symbol: "REACT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://lasna-rpc.rnk.dev/"] },
  },
  testnet: true,
});

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ??
  "a0d5718b83a240abf60c66a19d2359df";

const envAppUrl = process.env.NEXT_PUBLIC_APP_URL;
const resolvedAppUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : envAppUrl ?? "http://localhost:3000";

const sepoliaRpcUrl =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ??
  "https://ethereum-sepolia.publicnode.com";
const reactiveRpcUrl =
  process.env.NEXT_PUBLIC_REACTIVE_RPC_URL ?? `${resolvedAppUrl}/api/reactive-rpc`;

const connectors = (() => {
  const base = [injected()];
  if (typeof window === "undefined") return base;
  return [
    ...base,
    walletConnect({
      projectId: walletConnectProjectId,
      showQrModal: true,
      metadata: {
        name: "Predator",
        description: "Predator Vault Frontend",
        url: resolvedAppUrl,
        icons: [`${resolvedAppUrl}/favicon.ico`],
      },
    }),
  ];
})();

const globalWithWagmi = globalThis as typeof globalThis & {
  __predatorWagmiConfig?: ReturnType<typeof createConfig>;
};

export const wagmiConfig =
  globalWithWagmi.__predatorWagmiConfig ??
  (globalWithWagmi.__predatorWagmiConfig = createConfig({
    chains: [sepolia, reactiveLasna],
    ssr: false,
    connectors,
    transports: {
      [sepolia.id]: http(sepoliaRpcUrl),
      [reactiveLasna.id]: http(reactiveRpcUrl),
    },
  }));
