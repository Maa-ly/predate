(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/WalletStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletStatus",
    ()=>WalletStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-client] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_typescript@5.9.3_zod@4.2.1/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wagmi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function shortAddress(address) {
    return `${address.slice(0, 6)}…${address.slice(-4)}`;
}
function WalletStatus() {
    _s();
    const { address, chainId, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const { connectors, connect, error, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"])();
    const { switchChain, isPending: isSwitchPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                connectors.map((connector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>connect({
                                connector
                            }),
                        disabled: isPending,
                        className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                        children: connector.name
                    }, connector.uid, false, {
                        fileName: "[project]/src/app/components/WalletStatus.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "max-w-[220px] truncate text-xs text-red-600",
                    children: error.message
                }, void 0, false, {
                    fileName: "[project]/src/app/components/WalletStatus.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/WalletStatus.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-md border border-zinc-200 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300",
                children: address ? shortAddress(address) : "Connected"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WalletStatus.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id && chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveLasna"].id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>switchChain({
                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id
                            }),
                        disabled: isSwitchPending,
                        className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                        children: "Switch to Sepolia"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WalletStatus.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>switchChain({
                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveLasna"].id
                            }),
                        disabled: isSwitchPending,
                        className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                        children: "Switch to Lasna"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WalletStatus.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>switchChain({
                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id
                    }),
                disabled: isSwitchPending,
                className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                children: "Switch to Sepolia"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WalletStatus.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>switchChain({
                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveLasna"].id
                    }),
                disabled: isSwitchPending,
                className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                children: "Switch to Lasna"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WalletStatus.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-emerald-700 dark:text-emerald-400",
                children: chainId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"].id ? "Sepolia" : chainId === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactiveLasna"].id ? "Lasna" : `Chain ${chainId ?? "—"}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/WalletStatus.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>disconnect(),
                className: "rounded-md border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900",
                children: "Disconnect"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WalletStatus.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WalletStatus.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(WalletStatus, "ET6sE8rh5DSSliPkmJWWV1dxvN4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"]
    ];
});
_c = WalletStatus;
var _c;
__turbopack_context__.k.register(_c, "WalletStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/WalletStatus.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/WalletStatus.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/getConnection */ __turbopack_context__.s([
    "getConnection",
    ()=>getConnection
]);
function getConnection(config) {
    const uid = config.state.current;
    const connection = config.state.connections.get(uid);
    const addresses = connection?.accounts;
    const address = addresses?.[0];
    const chain = config.chains.find((chain)=>chain.id === connection?.chainId);
    const status = config.state.status;
    switch(status){
        case 'connected':
            return {
                address: address,
                addresses: addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: true,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'reconnecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: !!address,
                isConnecting: false,
                isDisconnected: false,
                isReconnecting: true,
                status
            };
        case 'connecting':
            return {
                address,
                addresses,
                chain,
                chainId: connection?.chainId,
                connector: connection?.connector,
                isConnected: false,
                isConnecting: true,
                isDisconnected: false,
                isReconnecting: false,
                status
            };
        case 'disconnected':
            return {
                address: undefined,
                addresses: undefined,
                chain: undefined,
                chainId: undefined,
                connector: undefined,
                isConnected: false,
                isConnecting: false,
                isDisconnected: true,
                isReconnecting: false,
                status
            };
    }
} //# sourceMappingURL=getConnection.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Forked from https://github.com/epoberezkin/fast-deep-equal */ __turbopack_context__.s([
    "deepEqual",
    ()=>deepEqual
]);
function deepEqual(a, b) {
    if (a === b) return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor) return false;
        let length;
        let i;
        if (Array.isArray(a) && Array.isArray(b)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;)if (!deepEqual(a[i], b[i])) return false;
            return true;
        }
        if (typeof a.valueOf === 'function' && a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (typeof a.toString === 'function' && a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        const keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.hasOwn(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key && !deepEqual(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // biome-ignore lint/suspicious/noSelfCompare: using
    return a !== a && b !== b;
} //# sourceMappingURL=deepEqual.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchConnection",
    ()=>watchConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnection.js [app-client] (ecmascript)");
;
;
function watchConnection(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnection"])(config), onChange, {
        equalityFn (a, b) {
            const { connector: aConnector, ...aRest } = a;
            const { connector: bConnector, ...bRest } = b;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(aRest, bRest) && // check connector separately
            aConnector?.id === bConnector?.id && aConnector?.uid === bConnector?.uid;
        }
    });
} //# sourceMappingURL=watchConnection.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '3.1.3'; //# sourceMappingURL=version.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVersion",
    ()=>getVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/version.js [app-client] (ecmascript)");
;
const getVersion = ()=>`wagmi@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}`; //# sourceMappingURL=getVersion.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseError",
    ()=>BaseError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/utils/getVersion.js [app-client] (ecmascript)");
;
;
class BaseError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super(...arguments);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiError'
        });
    }
    get docsBaseUrl() {
        return 'https://wagmi.sh/react';
    }
    get version() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$utils$2f$getVersion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVersion"])();
    }
} //# sourceMappingURL=base.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WagmiProviderNotFoundError",
    ()=>WagmiProviderNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/errors/base.js [app-client] (ecmascript)");
;
class WagmiProviderNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('`useConfig` must be used within `WagmiProvider`.', {
            docsPath: '/api/WagmiProvider'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WagmiProviderNotFoundError'
        });
    }
} //# sourceMappingURL=context.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfig",
    ()=>useConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/errors/context.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConfig(parameters = {}) {
    // biome-ignore lint/correctness/useHookAtTopLevel: false alarm
    const config = parameters.config ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiContext"]);
    if (!config) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$errors$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProviderNotFoundError"]();
    return config;
} //# sourceMappingURL=useConfig.js.map
}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStoreWithTracked",
    ()=>useSyncExternalStoreWithTracked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/use-sync-external-store@1.4.0_react@19.2.3/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
'use client';
;
;
;
const isPlainObject = (obj)=>typeof obj === 'object' && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]) {
    const trackedKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$4$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscribe, getSnapshot, getServerSnapshot, {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (x)=>x
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"], {
        "useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]": (a, b)=>{
            if (isPlainObject(a) && isPlainObject(b) && trackedKeys.current.length) {
                for (const key of trackedKeys.current){
                    const equal = isEqual(a[key], b[key]);
                    if (!equal) return false;
                }
                return true;
            }
            return isEqual(a, b);
        }
    }["useSyncExternalStoreWithTracked.useSyncExternalStoreWithSelector[result]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSyncExternalStoreWithTracked.useMemo": ()=>{
            if (isPlainObject(result)) {
                const trackedResult = {
                    ...result
                };
                let properties = {};
                for (const [key, value] of Object.entries(trackedResult)){
                    properties = {
                        ...properties,
                        [key]: {
                            configurable: false,
                            enumerable: true,
                            get: ({
                                "useSyncExternalStoreWithTracked.useMemo": ()=>{
                                    if (!trackedKeys.current.includes(key)) {
                                        trackedKeys.current.push(key);
                                    }
                                    return value;
                                }
                            })["useSyncExternalStoreWithTracked.useMemo"]
                        }
                    };
                }
                Object.defineProperties(trackedResult, properties);
                return trackedResult;
            }
            return result;
        }
    }["useSyncExternalStoreWithTracked.useMemo"], [
        result
    ]);
} //# sourceMappingURL=useSyncExternalStoreWithTracked.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnection",
    ()=>useConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnection(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSyncExternalStoreWithTracked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithTracked"])({
        "useConnection.useSyncExternalStoreWithTracked": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnection"])(config, {
                onChange
            })
    }["useConnection.useSyncExternalStoreWithTracked"], {
        "useConnection.useSyncExternalStoreWithTracked": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnection"])(config)
    }["useConnection.useSyncExternalStoreWithTracked"]);
} //# sourceMappingURL=useConnection.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-client] (ecmascript) <export useConnection as useAccount>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnection"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
// src/mutationObserver.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                } else if (action?.type === "error") {
                    this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@5.90.12/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (variables, mutateOptions)=>{
            observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
;
async function connect(config, parameters) {
    // "Register" connector if not already created
    let connector;
    if (typeof parameters.connector === 'function') {
        connector = config._internal.connectors.setup(parameters.connector);
    } else connector = parameters.connector;
    // Check if connector is already connected
    if (connector.uid === config.state.current) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorAlreadyConnectedError"]();
    try {
        config.setState((x)=>({
                ...x,
                status: 'connecting'
            }));
        connector.emitter.emit('message', {
            type: 'connecting'
        });
        const { connector: _, ...rest } = parameters;
        const data = await connector.connect(rest);
        connector.emitter.off('connect', config._internal.events.connect);
        connector.emitter.on('change', config._internal.events.change);
        connector.emitter.on('disconnect', config._internal.events.disconnect);
        await config.storage?.setItem('recentConnectorId', connector.id);
        config.setState((x)=>({
                ...x,
                connections: new Map(x.connections).set(connector.uid, {
                    accounts: rest.withCapabilities ? data.accounts.map((account)=>typeof account === 'object' ? account.address : account) : data.accounts,
                    chainId: data.chainId,
                    connector: connector
                }),
                current: connector.uid,
                status: 'connected'
            }));
        return {
            // TODO(v3): Remove `withCapabilities: true` default behavior so remove compat marshalling
            // Workaround so downstream connectors work with `withCapabilities` without any changes required
            accounts: rest.withCapabilities ? data.accounts.map((address)=>typeof address === 'object' ? address : {
                    address,
                    capabilities: {}
                }) : data.accounts,
            chainId: data.chainId
        };
    } catch (error) {
        config.setState((x)=>({
                ...x,
                // Keep existing connector connected in case of error
                status: x.current ? 'connected' : 'disconnected'
            }));
        throw error;
    }
} //# sourceMappingURL=connect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectMutationOptions",
    ()=>connectMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/connect.js [app-client] (ecmascript)");
;
function connectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])(config, variables);
        },
        mutationKey: [
            'connect'
        ]
    };
} //# sourceMappingURL=connect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnectors",
    ()=>getConnectors
]);
let previousConnectors = [];
function getConnectors(config) {
    const connectors = config.connectors;
    if (previousConnectors.length === connectors.length && previousConnectors.every((connector, index)=>connector === connectors[index])) return previousConnectors;
    previousConnectors = connectors;
    return connectors;
} //# sourceMappingURL=getConnectors.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/watchConnectors */ __turbopack_context__.s([
    "watchConnectors",
    ()=>watchConnectors
]);
function watchConnectors(config, parameters) {
    const { onChange } = parameters;
    return config._internal.connectors.subscribe((connectors, prevConnectors)=>{
        onChange(Object.values(connectors), prevConnectors);
    });
} //# sourceMappingURL=watchConnectors.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectors",
    ()=>useConnectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnectors(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnectors.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnectors"])(config, {
                onChange
            })
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"], {
        "useConnectors.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectors"])(config)
    }["useConnectors.useSyncExternalStore"]);
} //# sourceMappingURL=useConnectors.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnect",
    ()=>useConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/connect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnectors.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function useConnect(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$connect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectMutationOptions"])(config);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...parameters.mutation,
        ...mutationOptions
    });
    // Reset mutation back to an idle state when the connector disconnects.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnect.useEffect": ()=>{
            return config.subscribe({
                "useConnect.useEffect": ({ status })=>status
            }["useConnect.useEffect"], {
                "useConnect.useEffect": (status, previousStatus)=>{
                    if (previousStatus === 'connected' && status === 'disconnected') mutation.reset();
                }
            }["useConnect.useEffect"]);
        }
    }["useConnect.useEffect"], [
        config,
        mutation.reset
    ]);
    return {
        ...mutation,
        connect: mutation.mutate,
        connectAsync: mutation.mutateAsync,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectors"])({
            config
        })
    };
} //# sourceMappingURL=useConnect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** https://wagmi.sh/core/api/actions/disconnect */ __turbopack_context__.s([
    "disconnect",
    ()=>disconnect
]);
async function disconnect(config, parameters = {}) {
    let connector;
    if (parameters.connector) connector = parameters.connector;
    else {
        const { connections, current } = config.state;
        const connection = connections.get(current);
        connector = connection?.connector;
    }
    const connections = config.state.connections;
    if (connector) {
        await connector.disconnect();
        connector.emitter.off('change', config._internal.events.change);
        connector.emitter.off('disconnect', config._internal.events.disconnect);
        connector.emitter.on('connect', config._internal.events.connect);
        connections.delete(connector.uid);
    }
    config.setState((x)=>{
        // if no connections exist, move to disconnected state
        if (connections.size === 0) return {
            ...x,
            connections: new Map(),
            current: null,
            status: 'disconnected'
        };
        // switch over to another connection
        const nextConnection = connections.values().next().value;
        return {
            ...x,
            connections: new Map(connections),
            current: nextConnection.connector.uid
        };
    });
    // Set recent connector if exists
    {
        const current = config.state.current;
        if (!current) return;
        const connector = config.state.connections.get(current)?.connector;
        if (!connector) return;
        await config.storage?.setItem('recentConnectorId', connector.id);
    }
} //# sourceMappingURL=disconnect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disconnectMutationOptions",
    ()=>disconnectMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/disconnect.js [app-client] (ecmascript)");
;
function disconnectMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnect"])(config, variables);
        },
        mutationKey: [
            'disconnect'
        ]
    };
} //# sourceMappingURL=disconnect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getConnections",
    ()=>getConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousConnections = [];
function getConnections(config) {
    const connections = [
        ...config.state.connections.values()
    ];
    if (config.state.status === 'reconnecting') return previousConnections;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousConnections, connections)) return previousConnections;
    previousConnections = connections;
    return connections;
} //# sourceMappingURL=getConnections.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "watchConnections",
    ()=>watchConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
;
;
function watchConnections(config, parameters) {
    const { onChange } = parameters;
    return config.subscribe(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config), onChange, {
        equalityFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]
    });
} //# sourceMappingURL=watchConnections.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnections",
    ()=>useConnections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchConnections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
function useConnections(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useConnections.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchConnections"])(config, {
                onChange
            })
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"], {
        "useConnections.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnections"])(config)
    }["useConnections.useSyncExternalStore"]);
} //# sourceMappingURL=useConnections.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDisconnect",
    ()=>useDisconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/disconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnections.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useDisconnect(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$disconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectMutationOptions"])(config);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...parameters.mutation,
        ...mutationOptions
    });
    return {
        ...mutation,
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnections"])({
            config
        }).map((connection)=>connection.connector),
        disconnect: mutation.mutate,
        disconnectAsync: mutation.mutateAsync
    };
} //# sourceMappingURL=useDisconnect.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "switchChain",
    ()=>switchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/errors/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/errors/connector.js [app-client] (ecmascript)");
;
;
async function switchChain(config, parameters) {
    const { addEthereumChainParameter, chainId } = parameters;
    const connection = config.state.connections.get(parameters.connector?.uid ?? config.state.current);
    if (connection) {
        const connector = connection.connector;
        if (!connector.switchChain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$connector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchChainNotSupportedError"]({
            connector
        });
        const chain = await connector.switchChain({
            addEthereumChainParameter,
            chainId
        });
        return chain;
    }
    const chain = config.chains.find((x)=>x.id === chainId);
    if (!chain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$errors$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainNotConfiguredError"]();
    config.setState((x)=>({
            ...x,
            chainId
        }));
    return chain;
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "switchChainMutationOptions",
    ()=>switchChainMutationOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/switchChain.js [app-client] (ecmascript)");
;
function switchChainMutationOptions(config) {
    return {
        mutationFn (variables) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChain"])(config, variables);
        },
        mutationKey: [
            'switchChain'
        ]
    };
} //# sourceMappingURL=switchChain.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChains",
    ()=>getChains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/utils/deepEqual.js [app-client] (ecmascript)");
;
let previousChains = [];
function getChains(config) {
    const chains = config.chains;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$deepEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(previousChains, chains)) return previousChains;
    previousChains = chains;
    return chains;
} //# sourceMappingURL=getChains.js.map
}),
"[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 * We don't expose this because as far as consumers know, you can't chainge (lol) `config.chains` at runtime.
 * Setting `config.chains` via `config._internal.chains.setState(...)` is an extremely advanced use case that's not worth documenting or supporting in the public API at this time.
 */ __turbopack_context__.s([
    "watchChains",
    ()=>watchChains
]);
function watchChains(config, parameters) {
    const { onChange } = parameters;
    return config._internal.chains.subscribe((chains, prevChains)=>{
        onChange(chains, prevChains);
    });
} //# sourceMappingURL=watchChains.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChains",
    ()=>useChains
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/getChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/actions/watchChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useChains(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "useChains.useSyncExternalStore": (onChange)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$watchChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchChains"])(config, {
                onChange
            })
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"], {
        "useChains.useSyncExternalStore": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$getChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChains"])(config)
    }["useChains.useSyncExternalStore"]);
} //# sourceMappingURL=useChains.js.map
}),
"[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSwitchChain",
    ()=>useSwitchChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.90.12_react@19.2.3/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@wagmi+core@3.0.1_@tanstack+query-core@5.90.12_@types+react@19.2.7_react@19.2.3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9/node_modules/@wagmi/core/dist/esm/query/switchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useChains.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConfig.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function useSwitchChain(parameters = {}) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConfig"])(parameters);
    const mutationOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$wagmi$2b$core$40$3$2e$0$2e$1_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$3_typescr_e41b0f67c56c1d51fee4b57cfa6655c9$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$query$2f$switchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["switchChainMutationOptions"])(config);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...parameters.mutation,
        ...mutationOptions
    });
    return {
        ...mutation,
        mutate: mutation.mutate,
        mutateAsync: mutation.mutateAsync,
        chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChains$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChains"])({
            config
        }),
        switchChain: mutation.mutate,
        switchChainAsync: mutation.mutateAsync
    };
} //# sourceMappingURL=useSwitchChain.js.map
}),
]);

//# sourceMappingURL=_e2434da3._.js.map