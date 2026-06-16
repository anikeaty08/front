import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Ultra dark background
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-950">
<iconify-icon height="20" icon="lucide:bar-chart-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">TRADESTACK</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total Margin</span>
<span className="text-xs text-emerald-400 tabular-nums">34.2%</span>
</div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon height="20" icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-700"></div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 pt-6 space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
<iconify-icon height="120" icon="lucide:pie-chart" width="120"></iconify-icon>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">

<div className="relative w-24 h-24 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-zinc-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="34, 100" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-medium text-zinc-100 tracking-tight tabular-nums">34%</span>
<span className="text-[10px] text-zinc-500 font-medium uppercase">Used</span>
</div>
</div>
<div className="flex-1 space-y-1">
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Margin Overview</h2>
<p className="text-sm text-zinc-500">Your current margin utilization is healthy. You have substantial buying power remaining for new positions.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-zinc-800/60 pt-6">
<div>
<div className="text-xs text-zinc-500 mb-1">Buying Power</div>
<div className="text-base text-zinc-100 font-medium tabular-nums tracking-tight">$142,500.00</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Loan Outstanding</div>
<div className="text-base text-zinc-100 font-medium tabular-nums tracking-tight">$12,450.25</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Collateral Value</div>
<div className="text-base text-zinc-100 font-medium tabular-nums tracking-tight">$285,100.00</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Credit Line</div>
<div className="text-base text-zinc-100 font-medium tabular-nums tracking-tight">$500,000.00</div>
</div>
</div>
</section>

<section className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-sm font-medium text-zinc-100">Risk Indicator</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            Low Risk
                        </span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Current Margin Level</span>
<span className="text-zinc-200 font-medium tabular-nums">1.45</span>
</div>

<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[50%]"></div>
<div className="h-full bg-amber-500 w-[25%]"></div>
<div className="h-full bg-orange-500 w-[15%]"></div>
<div className="h-full bg-rose-500 w-[10%]"></div>
</div>

<div className="relative w-full h-2 mt-1">
<div className="absolute left-[34%] -top-1 transform -translate-x-1/2 flex flex-col items-center">
<div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-zinc-100"></div>
</div>
</div>
</div>
<div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800/50 flex items-start gap-3">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" height="16" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
<div className="text-xs leading-relaxed">
<span className="text-zinc-300">Maintenance Requirement:</span>
<span className="text-zinc-100 font-medium tabular-nums">$85,200</span>
<p className="mt-1 text-zinc-500">Liquidation triggers at 90% usage.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-100">Margin Breakdown</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">View Report</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon height="16" icon="lucide:candlestick-chart" width="16"></iconify-icon>
<span className="text-sm font-medium">Equity</span>
</div>
<span className="text-xs text-zinc-500">Leverage 1:1</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Margin Used</span>
<span className="text-zinc-200 tabular-nums">$42,100</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[45%]"></div>
</div>
<div className="flex justify-between items-center text-xs pt-1 border-t border-zinc-800/50">
<span className="text-zinc-500">Unrealized P/L</span>
<span className="text-emerald-400 tabular-nums">+$3,240.50</span>
</div>
</div>
</div>

<div className="group bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon height="16" icon="lucide:activity" width="16"></iconify-icon>
<span className="text-sm font-medium">Futures</span>
</div>
<span className="text-xs text-amber-500/80 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">High Lev</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Margin Used</span>
<span className="text-zinc-200 tabular-nums">$18,500</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-purple-500 h-full w-[65%]"></div>
</div>
<div className="flex justify-between items-center text-xs pt-1 border-t border-zinc-800/50">
<span className="text-zinc-500">Unrealized P/L</span>
<span className="text-rose-400 tabular-nums">-$840.25</span>
</div>
</div>
</div>

<div className="group bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 transition-all rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon height="16" icon="lucide:sigma" width="16"></iconify-icon>
<span className="text-sm font-medium">Options</span>
</div>
<span className="text-xs text-zinc-500">Hedged</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-500">Margin Used</span>
<span className="text-zinc-200 tabular-nums">$5,200</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-indigo-500 h-full w-[20%]"></div>
</div>
<div className="flex justify-between items-center text-xs pt-1 border-t border-zinc-800/50">
<span className="text-zinc-500">Unrealized P/L</span>
<span className="text-emerald-400 tabular-nums">+$1,120.00</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-4">
<h3 className="text-sm font-medium text-zinc-100">Open Positions</h3>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">F&amp;O</span>
</div>

<div className="hidden lg:grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-zinc-500 border-b border-zinc-800">
<div className="col-span-3">Contract</div>
<div className="col-span-1 text-right">Side/Qty</div>
<div className="col-span-2 text-right">Entry / Mark</div>
<div className="col-span-2 text-right">Init Margin</div>
<div className="col-span-2 text-right">Maint Margin</div>
<div className="col-span-2 text-right">MTM P/L</div>
</div>
<div className="space-y-2">

<div className="group bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-all rounded-lg p-4 lg:py-3 lg:px-4 grid grid-cols-2 lg:grid-cols-12 gap-4 items-center">

<div className="col-span-2 lg:col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
<span className="text-[10px] font-bold text-zinc-300">ES</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100">E-Mini S&amp;P 500</div>
<div className="text-[10px] text-zinc-500 font-mono">SEP 24</div>
</div>
</div>

<div className="col-span-1 lg:col-span-1 text-left lg:text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Side</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">LONG</span>
<span className="text-xs text-zinc-300 ml-1">x2</span>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Price</div>
<div className="text-xs tabular-nums text-zinc-300">4,450.25</div>
<div className="text-[10px] tabular-nums text-zinc-500">4,455.00</div>
</div>
<div className="col-span-1 lg:col-span-2 text-left lg:text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Init Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$12,320</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Maint Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$11,100</div>
</div>
<div className="col-span-2 lg:col-span-2 flex justify-between lg:block text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<span className="text-[10px] text-zinc-500 lg:hidden">MTM P/L</span>
<div className="text-sm font-medium tabular-nums text-emerald-400">+$475.00</div>
</div>
</div>

<div className="group bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-all rounded-lg p-4 lg:py-3 lg:px-4 grid grid-cols-2 lg:grid-cols-12 gap-4 items-center">
<div className="col-span-2 lg:col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
<span className="text-[10px] font-bold text-zinc-300">NQ</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100">NASDAQ 100 Put</div>
<div className="text-[10px] text-zinc-500 font-mono">15200 Strike • OCT 20</div>
</div>
</div>
<div className="col-span-1 lg:col-span-1 text-left lg:text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Side</div>
<span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/10">SHORT</span>
<span className="text-xs text-zinc-300 ml-1">x1</span>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Prem / Mark</div>
<div className="text-xs tabular-nums text-zinc-300">125.50</div>
<div className="text-[10px] tabular-nums text-zinc-500">140.20</div>
</div>
<div className="col-span-1 lg:col-span-2 text-left lg:text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Init Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$18,500</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Maint Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$16,650</div>
</div>
<div className="col-span-2 lg:col-span-2 flex justify-between lg:block text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<span className="text-[10px] text-zinc-500 lg:hidden">MTM P/L</span>
<div className="text-sm font-medium tabular-nums text-rose-400">-$294.00</div>
</div>
</div>

<div className="group relative overflow-hidden bg-zinc-900/30 hover:bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700 transition-all rounded-lg p-4 lg:py-3 lg:px-4 grid grid-cols-2 lg:grid-cols-12 gap-4 items-center">

<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-500"></div>
<div className="col-span-2 lg:col-span-3 flex items-center gap-3 pl-2">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center shrink-0">
<span className="text-[10px] font-bold text-zinc-300">CL</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 flex items-center gap-2">
                                Crude Oil 
                                <iconify-icon className="text-amber-500" height="12" icon="lucide:alert-triangle" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-zinc-500 font-mono">NOV 24</div>
</div>
</div>
<div className="col-span-1 lg:col-span-1 text-left lg:text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Side</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">LONG</span>
<span className="text-xs text-zinc-300 ml-1">x5</span>
</div>
<div className="col-span-1 lg:col-span-2 text-right">
<div className="lg:hidden text-[10px] text-zinc-500 mb-0.5">Entry / Mark</div>
<div className="text-xs tabular-nums text-zinc-300">88.20</div>
<div className="text-[10px] tabular-nums text-zinc-500">86.10</div>
</div>
<div className="col-span-1 lg:col-span-2 text-left lg:text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Init Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$35,000</div>
</div>
<div className="col-span-1 lg:col-span-2 text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<div className="text-[10px] text-zinc-500 lg:hidden mb-0.5">Maint Margin</div>
<div className="text-xs tabular-nums text-zinc-300">$32,500</div>
</div>
<div className="col-span-2 lg:col-span-2 flex justify-between lg:block text-right border-t lg:border-none border-zinc-800/50 pt-2 lg:pt-0">
<span className="text-[10px] text-zinc-500 lg:hidden">MTM P/L</span>
<div className="text-sm font-medium tabular-nums text-rose-400">-$10,500.00</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-4 right-4 z-50 animate-bounce">
<div className="bg-zinc-900 border border-amber-500/30 shadow-lg shadow-black/50 text-zinc-200 px-4 py-3 rounded-lg flex items-center gap-3 max-w-sm">
<div className="p-2 bg-amber-500/10 rounded-full text-amber-500">
<iconify-icon height="16" icon="lucide:alert-circle" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-amber-500">Margin Alert</div>
<div className="text-xs text-zinc-400">Crude Oil position nearing maintenance threshold.</div>
</div>
</div>
</div>

    </>
  );
}
