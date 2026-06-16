import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-xl text-indigo-400" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h1 className="text-lg font-semibold leading-tight tracking-tight text-white">AI Signal Hub</h1>
<p className="text-xs text-zinc-500 font-medium">Options &amp; Stocks</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden items-center gap-2 rounded-full bg-emerald-500/5 px-2 py-1 text-xs text-emerald-500 sm:flex border border-emerald-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-mono tracking-wide">LIVE MARKET</span>
</div>
<button className="group relative rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-zinc-950"></span>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">

<div className="grid grid-cols-2 gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:grid-cols-4">
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Win Rate</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">78<span className="text-lg text-zinc-500">%</span></span>
<span className="mb-1 text-xs font-medium text-emerald-500">+2.4%</span>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Profit Factor</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">2.41</span>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Active Trades</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">4</span>
<span className="mb-1 text-xs font-medium text-zinc-500">Vol: High</span>
</div>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Net PnL (W)</p>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-emerald-400">+$4.2k</span>
</div>
</div>
</div>

<section>
<h2 className="mb-3 text-sm font-medium text-zinc-500">Market Watch</h2>
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

<button className="relative overflow-hidden rounded-xl border border-indigo-500/50 bg-indigo-500/10 p-4 text-left transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-white">SPY</span>
<div className="rounded bg-indigo-500/20 p-1 text-indigo-300">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between">
<span className="text-sm text-zinc-300">445.20</span>
<span className="text-xs font-medium text-emerald-400">+0.82%</span>
</div>
</button>

<button className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-left transition-all hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-zinc-300 group-hover:text-white">QQQ</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">372.15</span>
<span className="text-xs font-medium text-emerald-400">+1.15%</span>
</div>
</button>
<button className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-left transition-all hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-zinc-300 group-hover:text-white">IWM</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">185.40</span>
<span className="text-xs font-medium text-rose-400">-0.45%</span>
</div>
</button>
<button className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-left transition-all hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-zinc-300 group-hover:text-white">NVDA</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">460.10</span>
<span className="text-xs font-medium text-emerald-400">+2.30%</span>
</div>
</button>
<button className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-left transition-all hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-zinc-300 group-hover:text-white">TSLA</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm text-zinc-400 group-hover:text-zinc-300">245.50</span>
<span className="text-xs font-medium text-rose-400">-1.20%</span>
</div>
</button>
</div>
</section>

<div className="grid gap-6 lg:grid-cols-3">

<div className="space-y-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-500">Active Signals — SPY</h2>
<button className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">
                        Show All (4)
                    </button>
</div>

<div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:bg-zinc-900/50">
<div className="absolute left-0 top-0 h-full w-1 bg-emerald-500"></div>
<div className="mb-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white font-bold tracking-tight">
                                SPY
                            </div>
<div>
<div className="flex items-center gap-2">
<span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">CALL</span>
<span className="text-sm font-medium text-white">450 C 0DTE</span>
</div>
<span className="text-xs text-zinc-500">Valid break of 445.00 level</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-zinc-500">Confidence</span>
<span className="text-sm font-semibold text-emerald-400">92%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-zinc-800/50 pt-4">
<div>
<span className="block text-[10px] uppercase text-zinc-500">Entry Zone</span>
<span className="text-sm font-medium text-zinc-200">1.25 - 1.30</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase text-zinc-500">Stop Loss</span>
<span className="text-sm font-medium text-rose-400">1.10</span>
</div>
<div className="text-right">
<span className="block text-[10px] uppercase text-zinc-500">Target</span>
<span className="text-sm font-medium text-emerald-400">1.65+</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:bg-zinc-900/50">
<div className="absolute left-0 top-0 h-full w-1 bg-rose-500"></div>
<div className="mb-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white font-bold tracking-tight">
                                QQQ
                            </div>
<div>
<div className="flex items-center gap-2">
<span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-rose-400 border border-rose-500/20">PUT</span>
<span className="text-sm font-medium text-white">370 P 1DTE</span>
</div>
<span className="text-xs text-zinc-500">Rejection at VWAP</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-zinc-500">Confidence</span>
<span className="text-sm font-semibold text-emerald-400">85%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t border-zinc-800/50 pt-4">
<div>
<span className="block text-[10px] uppercase text-zinc-500">Entry Zone</span>
<span className="text-sm font-medium text-zinc-200">2.10 - 2.15</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase text-zinc-500">Stop Loss</span>
<span className="text-sm font-medium text-rose-400">1.90</span>
</div>
<div className="text-right">
<span className="block text-[10px] uppercase text-zinc-500">Target</span>
<span className="text-sm font-medium text-emerald-400">2.50+</span>
</div>
</div>
</div>


</div>

<div className="h-fit space-y-4">
<h2 className="text-sm font-medium text-zinc-500">Position Calculator</h2>
<div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm">
<div className="space-y-5">
<div className="space-y-2">
<div className="flex justify-between text-xs">
<label className="text-zinc-400">Account Balance</label>
</div>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 pl-7 pr-3 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" type="number" value="10000"/>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<label className="text-zinc-400">Risk per Trade</label>
<span className="font-medium text-indigo-400">2%</span>
</div>
<input className="w-full" max="5" min="0.5" step="0.5" type="range" value="2"/>
<div className="flex justify-between text-[10px] text-zinc-600 px-1">
<span>Conservative</span>
<span>Aggressive</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Entry</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 px-3 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" type="number" value="1.30"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Stop</label>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 px-3 text-sm text-white focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500" type="number" value="1.10"/>
</div>
</div>
<div className="mt-4 rounded-lg bg-zinc-950 border border-zinc-800/50 p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500">Position Size</span>
<span className="text-sm font-semibold text-white">1,086 Shares</span>
</div>
<div className="flex items-center justify-between border-t border-zinc-800/50 pt-2">
<span className="text-xs text-zinc-500">Risk Amount</span>
<span className="text-sm font-medium text-rose-400">-$200.00</span>
</div>
</div>
<button className="w-full rounded-lg bg-white py-2.5 text-sm font-semibold text-black transition-transform active:scale-[0.98] hover:bg-zinc-200">
                            Copy Parameters
                        </button>
</div>
</div>
</div>
</div>

<section>
<h2 className="mb-3 text-sm font-medium text-zinc-500">Recent Signals</h2>
<div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-500">
<th className="px-4 py-3 font-medium">Time</th>
<th className="px-4 py-3 font-medium">Ticker</th>
<th className="px-4 py-3 font-medium">Signal</th>
<th className="px-4 py-3 font-medium">Result</th>
<th className="px-4 py-3 font-medium text-right">PnL %</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-900/30">
<td className="px-4 py-3 text-zinc-400 whitespace-nowrap">10:45 AM</td>
<td className="px-4 py-3 font-medium text-white">NVDA</td>
<td className="px-4 py-3"><span className="text-emerald-400 text-xs bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">CALL</span></td>
<td className="px-4 py-3"><span className="flex items-center gap-1.5 text-zinc-300"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Win</span></td>
<td className="px-4 py-3 text-right font-medium text-emerald-400">+45%</td>
</tr>
<tr className="hover:bg-zinc-900/30">
<td className="px-4 py-3 text-zinc-400 whitespace-nowrap">09:30 AM</td>
<td className="px-4 py-3 font-medium text-white">TSLA</td>
<td className="px-4 py-3"><span className="text-rose-400 text-xs bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/10">PUT</span></td>
<td className="px-4 py-3"><span className="flex items-center gap-1.5 text-zinc-300"><iconify-icon className="text-rose-500" icon="solar:close-circle-linear"></iconify-icon> Loss</span></td>
<td className="px-4 py-3 text-right font-medium text-rose-400">-15%</td>
</tr>
<tr className="hover:bg-zinc-900/30">
<td className="px-4 py-3 text-zinc-400 whitespace-nowrap">Yesterday</td>
<td className="px-4 py-3 font-medium text-white">SPY</td>
<td className="px-4 py-3"><span className="text-rose-400 text-xs bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/10">PUT</span></td>
<td className="px-4 py-3"><span className="flex items-center gap-1.5 text-zinc-300"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Win</span></td>
<td className="px-4 py-3 text-right font-medium text-emerald-400">+22%</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 pt-8 pb-12">
<div className="rounded-lg bg-indigo-500/5 p-4 border border-indigo-500/10">
<div className="flex gap-3">
<iconify-icon className="text-indigo-400 shrink-0 text-lg mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<div className="space-y-1">
<p className="text-xs font-semibold text-zinc-300">Risk Disclosure</p>
<p className="text-[11px] leading-relaxed text-zinc-500">
                            Trading options and stocks involves significant risk and is not suitable for every investor. The signals provided by AI Signal Hub are for educational purposes only and should not be considered as financial advice. Past performance is not indicative of future results. Please trade responsibly and manage your risk accordingly.
                        </p>
</div>
</div>
</div>
<p className="mt-8 text-center text-xs text-zinc-600">
                © 2024 AI Signal Hub. All rights reserved.
            </p>
</footer>
</main>

    </>
  );
}
