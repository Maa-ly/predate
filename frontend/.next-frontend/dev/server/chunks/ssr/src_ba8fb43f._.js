module.exports = [
"[project]/src/lib/contracts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "erc20Abi",
    ()=>erc20Abi,
    "predatorManagerAbi",
    ()=>predatorManagerAbi,
    "predatorSentinelAbi",
    ()=>predatorSentinelAbi,
    "predatorVaultAbi",
    ()=>predatorVaultAbi,
    "reactiveContracts",
    ()=>reactiveContracts,
    "reactiveSystemAbi",
    ()=>reactiveSystemAbi,
    "sepoliaContracts",
    ()=>sepoliaContracts,
    "yieldSourceAbi",
    ()=>yieldSourceAbi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/abitype@1.2.3_typescript@5.9.3_zod@4.2.1/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)");
;
const sepoliaContracts = {
    chainId: 11155111,
    vault: "0x91Df8Fb96D0C6db050cd215A6e883B8233F41f2B",
    manager: "0x9CC96a5AE38979fbC2831e2861F2cDACFBB54F8b",
    asset: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
};
const reactiveContracts = {
    chainId: 5318007,
    sentinel: "0x520832cD1dc4A1A4F4dE2303B8761906e4Aa7991",
    systemContract: "0x0000000000000000000000000000000000fffFfF"
};
const predatorVaultAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function activeSource() view returns (uint8)",
    "function source0() view returns (address)",
    "function source1() view returns (address)",
    "function balanceOf(address) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function totalAssets() view returns (uint256)",
    "function previewDeposit(uint256 assets) view returns (uint256 shares)",
    "function previewRedeem(uint256 shares) view returns (uint256 assets)",
    "function deposit(uint256 assets, address receiver) returns (uint256 shares)",
    "function redeem(uint256 shares, address receiver, address owner) returns (uint256 assets)"
]);
const predatorManagerAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function evaluateAndRebalance() returns (bool rebalanced, uint8 targetSource)"
]);
const yieldSourceAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function supplyRateRay() view returns (uint256)",
    "function stressBps() view returns (uint256)",
    "function totalAssets() view returns (uint256)"
]);
const predatorSentinelAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function sourceChainId() view returns (uint256)",
    "function aavePool() view returns (address)",
    "function morphoVault() view returns (address)",
    "function destinationChainId() view returns (uint256)",
    "function destinationManager() view returns (address)",
    "function destinationGasLimit() view returns (uint64)",
    "function coverDebt()",
    "function subscribe()",
    "function unsubscribe()",
    "function pause()",
    "function resume()"
]);
const reactiveSystemAbi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function debt(address _contract) view returns (uint256)"
]);
const erc20Abi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$abitype$40$1$2e$2$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbi"])([
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function balanceOf(address) view returns (uint256)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function approve(address spender, uint256 value) returns (bool)"
]);
}),
"[project]/src/app/contract/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContractPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_typescript@5.9.3_zod@4.2.1/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.43.3_typescript@5.9.3_zod@4.2.1/node_modules/viem/_esm/utils/unit/parseUnits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useSendTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/wagmi@3.1.3_@tanstack+query-core@5.90.12_@tanstack+react-query@5.90.12_react@19.2.3__@t_4f3ea404aae670c47bcbd7209369d194/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contracts.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function safeFormatUnits(value, decimals) {
    if (value === undefined) return "—";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(value, decimals);
}
function isZeroAddress(address) {
    return address?.toLowerCase() === "0x0000000000000000000000000000000000000000";
}
function formatRayPercent(value) {
    if (value === undefined) return "—";
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(value, 25)}%`;
}
function formatBpsPercent(value) {
    if (value === undefined) return "—";
    return `${Number(value) / 100}%`;
}
function ContractPage() {
    const { address, chainId, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const [depositAmount, setDepositAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [redeemShares, setRedeemShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sentinelTopUpAmount, setSentinelTopUpAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastAction, setLastAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: assetSymbol } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
        functionName: "symbol",
        query: {
            staleTime: 60_000
        }
    });
    const { data: assetDecimals } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
        functionName: "decimals",
        query: {
            staleTime: 60_000
        }
    });
    const assetDecimalsResolved = assetDecimals ?? 18;
    const shareDecimals = 18;
    const { data: assetBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
        functionName: "balanceOf",
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: Boolean(address)
        }
    });
    const { data: shareBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "balanceOf",
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: Boolean(address)
        }
    });
    const { data: totalAssets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "totalAssets",
        query: {
            refetchInterval: 10_000
        }
    });
    const { data: totalSupply } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "totalSupply",
        query: {
            refetchInterval: 10_000
        }
    });
    const { data: activeSource } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "activeSource",
        query: {
            refetchInterval: 10_000
        }
    });
    const { data: source0Address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "source0",
        query: {
            staleTime: 60_000,
            refetchInterval: 10_000
        }
    });
    const { data: source1Address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "source1",
        query: {
            staleTime: 60_000,
            refetchInterval: 10_000
        }
    });
    const source0Ready = Boolean(source0Address && !isZeroAddress(source0Address));
    const source1Ready = Boolean(source1Address && !isZeroAddress(source1Address));
    const { data: source0RateRay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source0Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "supplyRateRay",
        query: {
            enabled: source0Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: source1RateRay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source1Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "supplyRateRay",
        query: {
            enabled: source1Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: source0StressBps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source0Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "stressBps",
        query: {
            enabled: source0Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: source1StressBps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source1Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "stressBps",
        query: {
            enabled: source1Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: source0Assets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source0Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "totalAssets",
        query: {
            enabled: source0Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: source1Assets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: source1Address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["yieldSourceAbi"],
        functionName: "totalAssets",
        query: {
            enabled: source1Ready,
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const activeSourceNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeSource === undefined) return undefined;
        return Number(activeSource);
    }, [
        activeSource
    ]);
    const depositAssetsParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!depositAmount.trim()) return undefined;
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(depositAmount, assetDecimalsResolved);
        } catch  {
            return undefined;
        }
    }, [
        depositAmount,
        assetDecimalsResolved
    ]);
    const redeemSharesParsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!redeemShares.trim()) return undefined;
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(redeemShares, shareDecimals);
        } catch  {
            return undefined;
        }
    }, [
        redeemShares,
        shareDecimals
    ]);
    const { data: previewDepositShares } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "previewDeposit",
        args: depositAssetsParsed ? [
            depositAssetsParsed
        ] : undefined,
        query: {
            enabled: Boolean(depositAssetsParsed)
        }
    });
    const { data: previewRedeemAssets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
        functionName: "previewRedeem",
        args: redeemSharesParsed ? [
            redeemSharesParsed
        ] : undefined,
        query: {
            enabled: Boolean(redeemSharesParsed)
        }
    });
    const { data: allowance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
        functionName: "allowance",
        args: address ? [
            address,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault
        ] : undefined,
        query: {
            enabled: Boolean(address)
        }
    });
    const { data: sentinelSourceChainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
        functionName: "sourceChainId",
        query: {
            staleTime: 60_000,
            refetchInterval: 30_000
        }
    });
    const { data: sentinelDestinationManager } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
        functionName: "destinationManager",
        query: {
            staleTime: 60_000,
            refetchInterval: 30_000
        }
    });
    const { data: sentinelDebt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].systemContract,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveSystemAbi"],
        functionName: "debt",
        args: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel
        ],
        query: {
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: sentinelBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalance"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
        query: {
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const { data: userReactiveBalance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalance"])({
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
        address: address,
        query: {
            enabled: Boolean(address),
            staleTime: 10_000,
            refetchInterval: 10_000
        }
    });
    const needsApprove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!depositAssetsParsed) return false;
        if (allowance === undefined) return false;
        return allowance < depositAssetsParsed;
    }, [
        allowance,
        depositAssetsParsed
    ]);
    const topUpValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!sentinelTopUpAmount.trim()) return undefined;
        try {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseUnits"])(sentinelTopUpAmount, 18);
        } catch  {
            return undefined;
        }
    }, [
        sentinelTopUpAmount
    ]);
    const { writeContract, data: txHash, error: writeError, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { sendTransaction, data: topUpHash, error: topUpError, isPending: isTopUpPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSendTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSendTransaction"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash
    });
    const { isLoading: isTopUpConfirming, isSuccess: isTopUpConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$wagmi$40$3$2e$1$2e$3_$40$tanstack$2b$query$2d$core$40$5$2e$90$2e$12_$40$tanstack$2b$react$2d$query$40$5$2e$90$2e$12_react$40$19$2e$2$2e$3_$5f40$t_4f3ea404aae670c47bcbd7209369d194$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: topUpHash
    });
    const isBusy = isPending || isConfirming || isTopUpPending || isTopUpConfirming;
    const canDeposit = Boolean(isConnected && address && depositAssetsParsed);
    const canRedeem = Boolean(isConnected && address && redeemSharesParsed);
    const canTopUp = Boolean(isConnected && address && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId && topUpValue !== undefined && topUpValue > 0n);
    const canCoverDebt = Boolean(isConnected && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId && (sentinelDebt ?? 0n) > 0n && (sentinelBalance?.value ?? 0n) >= (sentinelDebt ?? 0n));
    const canManageSubscriptions = Boolean(isConnected && chainId === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold",
                        children: "Contract"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                        children: "Sepolia deployment addresses are wired in by default."
                    }, void 0, false, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2 text-sm sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Vault"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].manager
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Asset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Active source:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: activeSourceNumber === undefined ? "—" : activeSourceNumber
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Yield Sources"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-600 dark:text-zinc-400",
                                children: "Active source is an index: 0 or 1."
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `space-y-2 rounded-md border p-3 dark:bg-black ${activeSourceNumber === 0 ? "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950" : "border-zinc-200 bg-white dark:border-zinc-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-500",
                                                children: "Source 0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 15
                                            }, this),
                                            activeSourceNumber === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono text-sm",
                                        children: source0Address ? source0Address : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: formatRayPercent(source0RateRay)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Stress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: formatBpsPercent(source0StressBps)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Assets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: safeFormatUnits(source0Assets, assetDecimalsResolved)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `space-y-2 rounded-md border p-3 dark:bg-black ${activeSourceNumber === 1 ? "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950" : "border-zinc-200 bg-white dark:border-zinc-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-500",
                                                children: "Source 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            activeSourceNumber === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-medium text-white",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono text-sm",
                                        children: source1Address ? source1Address : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 438,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: formatRayPercent(source1RateRay)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Stress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: formatBpsPercent(source1StressBps)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 448,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-zinc-500",
                                                        children: "Assets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-medium text-zinc-900 dark:text-zinc-50",
                                                        children: safeFormatUnits(source1Assets, assetDecimalsResolved)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/contract/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: "TVL (totalAssets)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xl font-semibold",
                                children: [
                                    safeFormatUnits(totalAssets, assetDecimalsResolved),
                                    " ",
                                    assetSymbol ?? ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: "totalSupply (shares)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xl font-semibold",
                                children: safeFormatUnits(totalSupply, shareDecimals)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: "Your asset balance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xl font-semibold",
                                children: [
                                    safeFormatUnits(assetBalance, assetDecimalsResolved),
                                    " ",
                                    assetSymbol ?? ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: "Your share balance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xl font-semibold",
                                children: safeFormatUnits(shareBalance, shareDecimals)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 486,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Deposit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                        children: "Approves the vault (if needed) then calls `deposit(assets, receiver)`."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: depositAmount,
                                        onChange: (e)=>setDepositAmount(e.target.value),
                                        placeholder: "0.0",
                                        inputMode: "decimal",
                                        className: "w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: [
                                            "Estimated shares: ",
                                            safeFormatUnits(previewDepositShares, shareDecimals)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: [
                                            "Allowance:",
                                            " ",
                                            safeFormatUnits(allowance, assetDecimalsResolved),
                                            " ",
                                            assetSymbol ?? ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canDeposit || !needsApprove || isBusy,
                                        onClick: ()=>{
                                            if (!address || !depositAssetsParsed) return;
                                            setLastAction("approve");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].asset,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20Abi"],
                                                functionName: "approve",
                                                args: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
                                                    depositAssetsParsed
                                                ]
                                            });
                                        },
                                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                        children: isBusy && lastAction === "approve" ? "Approving…" : "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canDeposit || needsApprove || isBusy,
                                        onClick: ()=>{
                                            if (!address || !depositAssetsParsed) return;
                                            setLastAction("deposit");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
                                                functionName: "deposit",
                                                args: [
                                                    depositAssetsParsed,
                                                    address
                                                ]
                                            });
                                        },
                                        className: "rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200",
                                        children: isBusy && lastAction === "deposit" ? "Depositing…" : "Deposit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Redeem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-zinc-600 dark:text-zinc-400",
                                        children: "Calls `redeem(shares, receiver, owner)`."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 563,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium",
                                        children: "Shares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: redeemShares,
                                        onChange: (e)=>setRedeemShares(e.target.value),
                                        placeholder: "0.0",
                                        inputMode: "decimal",
                                        className: "w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: [
                                            "Estimated assets:",
                                            " ",
                                            safeFormatUnits(previewRedeemAssets, assetDecimalsResolved),
                                            " ",
                                            assetSymbol ?? ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !canRedeem || isBusy,
                                    onClick: ()=>{
                                        if (!address || !redeemSharesParsed) return;
                                        setLastAction("redeem");
                                        writeContract({
                                            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
                                            address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].vault,
                                            abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorVaultAbi"],
                                            functionName: "redeem",
                                            args: [
                                                redeemSharesParsed,
                                                address,
                                                address
                                            ]
                                        });
                                    },
                                    className: "rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200",
                                    children: isBusy && lastAction === "redeem" ? "Redeeming…" : "Redeem"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contract/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 560,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Manager"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-600 dark:text-zinc-400",
                                children: "Triggers `evaluateAndRebalance()` on the Sepolia manager."
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !isConnected || isBusy,
                        onClick: ()=>{
                            setLastAction("evaluate");
                            writeContract({
                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].chainId,
                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepoliaContracts"].manager,
                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorManagerAbi"],
                                functionName: "evaluateAndRebalance",
                                args: []
                            });
                        },
                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                        children: isBusy && lastAction === "evaluate" ? "Evaluating…" : "Evaluate & Rebalance"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-3 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Reactive Sentinel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-600 dark:text-zinc-400",
                                children: "The Sentinel runs on Lasna (Reactive Network) and watches Sepolia events, then triggers manager rebalances via callback transactions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border border-zinc-200 bg-white p-3 text-sm dark:border-zinc-800 dark:bg-black",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-500",
                                children: "What the numbers mean"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-zinc-600 dark:text-zinc-400",
                                children: "When the Sentinel executes reactive subscriptions/callbacks, it can accrue debt tracked by the Lasna system contract. Keep the Sentinel funded with REACT, then call `coverDebt()` to pay the system contract from the Sentinel balance."
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-2 text-sm sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Sentinel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Debt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: sentinelDebt === undefined ? "—" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(sentinelDebt, 18)} REACT`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Sentinel balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: sentinelBalance ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(sentinelBalance.value, sentinelBalance.decimals)} ${sentinelBalance.symbol}` : "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 663,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Your Lasna balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 672,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: userReactiveBalance ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(userReactiveBalance.value, userReactiveBalance.decimals)} ${userReactiveBalance.symbol}` : address ? "—" : "Connect wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Source chainId"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: sentinelSourceChainId === undefined ? "—" : sentinelSourceChainId.toString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 681,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: "Destination manager"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "truncate font-mono",
                                        children: sentinelDestinationManager ?? "—"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium",
                                        children: "Top up Sentinel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 699,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: "Switch to Lasna, then send REACT to the Sentinel so it can pay for callbacks."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 700,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: sentinelTopUpAmount,
                                                onChange: (e)=>setSentinelTopUpAmount(e.target.value),
                                                placeholder: "0.05",
                                                inputMode: "decimal",
                                                className: "min-w-[180px] flex-1 rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: sentinelDebt === undefined || sentinelDebt === 0n,
                                                onClick: ()=>{
                                                    if (sentinelDebt === undefined) return;
                                                    setSentinelTopUpAmount((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$43$2e$3_typescript$40$5$2e$9$2e$3_zod$40$4$2e$2$2e$1$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(sentinelDebt, 18));
                                                },
                                                className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                                children: "Set to debt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: !canTopUp || isBusy,
                                                onClick: ()=>{
                                                    if (!topUpValue) return;
                                                    setLastAction("topup");
                                                    sendTransaction({
                                                        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                        to: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                        value: topUpValue
                                                    });
                                                },
                                                className: "rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200",
                                                children: isBusy && lastAction === "topup" ? "Sending…" : "Send"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/contract/page.tsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 703,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium",
                                        children: "Pay debt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-600 dark:text-zinc-400",
                                        children: "Calls `coverDebt()` on the Sentinel (it pays the system contract from its own balance)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canCoverDebt || isBusy,
                                        onClick: ()=>{
                                            setLastAction("coverDebt");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
                                                functionName: "coverDebt",
                                                args: []
                                            });
                                        },
                                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                        children: isBusy && lastAction === "coverDebt" ? "Paying…" : "Cover debt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 697,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "Activate subscriptions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 767,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-600 dark:text-zinc-400",
                                children: "If Reactscan shows the Sentinel as inactive, connect with the deployer wallet on Lasna and call `subscribe()` (or `resume()` if it was paused)."
                            }, void 0, false, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 768,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canManageSubscriptions || isBusy,
                                        onClick: ()=>{
                                            setLastAction("subscribe");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
                                                functionName: "subscribe",
                                                args: []
                                            });
                                        },
                                        className: "rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200",
                                        children: isBusy && lastAction === "subscribe" ? "Subscribing…" : "Subscribe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 773,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canManageSubscriptions || isBusy,
                                        onClick: ()=>{
                                            setLastAction("resume");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
                                                functionName: "resume",
                                                args: []
                                            });
                                        },
                                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                        children: isBusy && lastAction === "resume" ? "Resuming…" : "Resume"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canManageSubscriptions || isBusy,
                                        onClick: ()=>{
                                            setLastAction("pause");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
                                                functionName: "pause",
                                                args: []
                                            });
                                        },
                                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                        children: isBusy && lastAction === "pause" ? "Pausing…" : "Pause"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: !canManageSubscriptions || isBusy,
                                        onClick: ()=>{
                                            setLastAction("unsubscribe");
                                            writeContract({
                                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].chainId,
                                                address: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactiveContracts"].sentinel,
                                                abi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["predatorSentinelAbi"],
                                                functionName: "unsubscribe",
                                                args: []
                                            });
                                        },
                                        className: "rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                                        children: isBusy && lastAction === "unsubscribe" ? "Unsubscribing…" : "Unsubscribe"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contract/page.tsx",
                                        lineNumber: 824,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contract/page.tsx",
                                lineNumber: 772,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contract/page.tsx",
                        lineNumber: 766,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            writeError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-red-200 bg-white p-4 text-sm text-red-700 dark:border-red-900 dark:bg-black dark:text-red-300",
                children: writeError.message
            }, void 0, false, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 846,
                columnNumber: 9
            }, this) : null,
            topUpError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-red-200 bg-white p-4 text-sm text-red-700 dark:border-red-900 dark:bg-black dark:text-red-300",
                children: topUpError.message
            }, void 0, false, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 852,
                columnNumber: 9
            }, this) : null,
            txHash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-zinc-500",
                            children: lastAction ?? "transaction"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 860,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "truncate font-mono",
                            children: txHash
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 863,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-zinc-600 dark:text-zinc-400",
                            children: isConfirming ? "Confirming…" : isConfirmed ? "Confirmed" : "Sent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 864,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contract/page.tsx",
                    lineNumber: 859,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 858,
                columnNumber: 9
            }, this) : null,
            topUpHash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-zinc-500",
                            children: "top up"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "truncate font-mono",
                            children: topUpHash
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 879,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-zinc-600 dark:text-zinc-400",
                            children: isTopUpConfirming ? "Confirming…" : isTopUpConfirmed ? "Confirmed" : "Sent"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contract/page.tsx",
                            lineNumber: 880,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contract/page.tsx",
                    lineNumber: 877,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contract/page.tsx",
                lineNumber: 876,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/contract/page.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_ba8fb43f._.js.map