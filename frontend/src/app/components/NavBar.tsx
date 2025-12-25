"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const WalletStatus = dynamic(
  () => import("@/app/components/WalletStatus").then((m) => m.WalletStatus),
  { ssr: false },
);

export function NavBar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
          >
            Predator
          </Link>
          <nav className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/contract" className="hover:underline">
              Contract
            </Link>
          </nav>
        </div>
        <WalletStatus />
      </div>
    </header>
  );
}
