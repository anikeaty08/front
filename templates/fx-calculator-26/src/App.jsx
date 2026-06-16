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
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-white/10 flex items-center justify-center">
<span className="text-cyan-400 tracking-tighter text-sm font-semibold">FX</span>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">FX Calculator Pro</span>
<span className="text-[12px] text-neutral-400">Master your risk. Calculate every trade precisely.</span>
</div>
</div>

<div className="flex items-center gap-3">

<div className="hidden md:flex items-center gap-1 p-1 rounded-md border border-white/10 bg-white/5">
<button className="theme-btn px-2.5 py-1.5 rounded text-xs text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none" data-theme="light">Light</button>
<button className="theme-btn px-2.5 py-1.5 rounded text-xs text-neutral-100 bg-neutral-900 border border-white/5" data-theme="dark">Dark</button>
<button className="theme-btn px-2.5 py-1.5 rounded text-xs text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none" data-theme="system">System</button>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
<div className="grid grid-cols-12 gap-6">

<aside className="hidden lg:block col-span-3">
<nav className="sticky top-20 space-y-2">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#dashboard">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="layout-dashboard"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#quick">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="zap"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Quick Trade</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#position">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="ruler"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Position Size</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#margin">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="percent"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Margin</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#pl">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="line-chart"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Profit &amp; Loss</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition" href="#rr">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="scale"></i>
<span className="text-sm text-neutral-300 group-hover:text-white">Risk/Reward</span>
</a>
<div className="pt-4 border-t border-white/10"></div>

<div className="space-y-1">
<div className="text-xs uppercase tracking-wide text-neutral-500 px-2">Learn</div>
<div className="grid gap-2">
<button className="edu-btn group w-full flex items-center justify-between px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10" data-edu="pip">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="info"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">What is a Pip?</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</button>
<button className="edu-btn group w-full flex items-center justify-between px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10" data-edu="margin">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="info"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">Margin &amp; Leverage</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</button>
<button className="edu-btn group w-full flex items-center justify-between px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10" data-edu="lot">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400 group-hover:text-cyan-400" data-lucide="info"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">Lots &amp; Contracts</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</nav>
</aside>

<main className="col-span-12 lg:col-span-9 space-y-10">

<section className="space-y-6" id="dashboard">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-950/60 p-6 md:p-8 ring-1 ring-white/10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                      FX Calculator Pro
                    </h1>
<p className="mt-2 text-neutral-400">
                      Master your risk. Calculate every trade precisely.
                    </p>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition" href="#quick">
<i className="h-4 w-4 text-cyan-400" data-lucide="zap"></i><span className="text-sm">Quick Trade</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition" href="#position">
<i className="h-4 w-4 text-cyan-400" data-lucide="ruler"></i><span className="text-sm">Position Size</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition" href="#margin">
<i className="h-4 w-4 text-cyan-400" data-lucide="percent"></i><span className="text-sm">Margin</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition" href="#pl">
<i className="h-4 w-4 text-cyan-400" data-lucide="line-chart"></i><span className="text-sm">Profit &amp; Loss</span>
</a>
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition" href="#rr">
<i className="h-4 w-4 text-cyan-400" data-lucide="scale"></i><span className="text-sm">Risk/Reward</span>
</a>
</div>
</div>

<div className="w-full md:w-auto">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur relative overflow-hidden">
<div className="text-xs uppercase tracking-tight text-neutral-300/90">Account Settings</div>
<div className="mt-3 grid grid-cols-1 gap-3">

<div className="rounded-xl bg-neutral-900/40 border border-white/10 p-3">
<label className="text-[11px] text-neutral-400 block mb-1" htmlFor="accountBalance">Account Balance</label>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="wallet"></i>
<input className="flex-1 bg-transparent text-xl md:text-2xl font-semibold tracking-tight outline-none placeholder-neutral-600" id="accountBalance" inputmode="decimal" placeholder="0" type="text" value="10 000"/>
</div>
</div>

<div className="rounded-xl bg-neutral-900/40 border border-white/10 p-3 overflow-hidden">
<div className="flex items-center justify-between">
<label className="text-[11px] text-neutral-400">Leverage</label>
<span className="text-base font-semibold tracking-tight text-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis tabular-nums" id="accLevDisplay">1:30</span>
</div>

<div aria-label="Leverage" aria-orientation="vertical" className="mt-2" id="accLeverageGroup" role="radiogroup">
<div className="flex flex-col items-stretch gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5">
<button aria-checked="true" className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-lg text-xs tabular-nums font-medium text-white bg-cyan-500/10 border border-cyan-500/40 shadow-[0_0_0_1px_rgba(34,211,238,0.35)_inset] ring-1 ring-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50" data-lev="30" role="radio" type="button">1:30</button>
<div aria-hidden="true" className="h-[2px] w-full rounded-full bg-white/5 border border-white/10"></div>
<button aria-checked="false" className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-lg text-xs tabular-nums text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40" data-lev="50" role="radio" type="button">1:50</button>
<div aria-hidden="true" className="h-[2px] w-full rounded-full bg-white/5 border border-white/10"></div>
<button aria-checked="false" className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-lg text-xs tabular-nums text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40" data-lev="100" role="radio" type="button">1:100</button>
<div aria-hidden="true" className="h-[2px] w-full rounded-full bg-white/5 border border-white/10"></div>
<button aria-checked="false" className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-lg text-xs tabular-nums text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40" data-lev="200" role="radio" type="button">1:200</button>
<div aria-hidden="true" className="h-[2px] w-full rounded-full bg-white/5 border border-white/10"></div>
<button aria-checked="false" className="inline-flex items-center justify-center w-full px-3 py-1.5 rounded-lg text-xs tabular-nums text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40" data-lev="500" role="radio" type="button">1:500</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>

<img alt="" className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 object-cover rounded-full opacity-10 ring-1 ring-white/10" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

</section>

<section className="space-y-4" id="quick">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Quick Trade Calculator</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<i className="h-4 w-4 text-cyan-400" data-lucide="help-circle"></i> How it works
                  </button>
<div className="absolute right-0 mt-2 w-80 p-3 rounded-md bg-neutral-900 border border-white/10 shadow-lg hidden group-hover:block z-50">
<div className="text-xs text-neutral-300">Enter your trade setup, and get instant calculations for position size, required margin, pip value, and potential profit/loss. This tool combines all calculators into one quick workflow.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-6">

<div className="grid md:grid-cols-3 gap-4">
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtPair">Currency Pair</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtPair">
<option>EUR/USD</option>
<option>GBP/JPY</option>
<option>USD/CHF</option>
<option>XAU/USD</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtEntry">Entry Price</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtEntry" step="0.0001" type="number" value="1.0800"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtDir">Direction</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtDir">
<option value="buy">Buy (Long)</option>
<option value="sell">Sell (Short)</option>
</select>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtStop">Stop Loss</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtStop" step="0.0001" type="number" value="1.0780"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtTP">Take Profit</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtTP" step="0.0001" type="number" value="1.0860"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="qtRisk">Risk % per trade</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="qtRisk" step="0.1" type="number" value="1.0"/>
</div>
</div>

<div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/30 p-5">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-400" data-lucide="trending-up"></i>
<div className="text-sm font-medium text-cyan-300">Estimated Lot Size</div>
</div>
</div>
<div className="flex items-baseline gap-3">
<div aria-live="polite" className="text-5xl font-semibold tracking-tight text-white" id="qtLots">0.50</div>
<div className="text-xl text-neutral-400">lots</div>
</div>
</div>

<div className="border-t border-white/10 pt-5">
<div className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Calculated Results</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Required Margin</div>
<div aria-live="polite" className="text-xl font-semibold tracking-tight mt-1" id="qtMargin">$542.50</div>
<div className="text-[11px] text-neutral-500 mt-1">Capital locked</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Risk Amount</div>
<div aria-live="polite" className="text-xl font-semibold tracking-tight mt-1 text-rose-400" id="qtRiskAmt">$100.00</div>
<div className="text-[11px] text-neutral-500 mt-1">Max loss at SL</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Potential Profit</div>
<div aria-live="polite" className="text-xl font-semibold tracking-tight mt-1 text-emerald-400" id="qtProfit">$300.00</div>
<div className="text-[11px] text-neutral-500 mt-1">If TP is hit</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Risk (pips)</div>
<div className="text-lg font-semibold tracking-tight mt-1 text-rose-400" id="qtRiskPips">20.0</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Reward (pips)</div>
<div className="text-lg font-semibold tracking-tight mt-1 text-emerald-400" id="qtRewardPips">60.0</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4 relative">
<div className="text-xs text-neutral-400">Risk/Reward Ratio</div>
<div className="text-lg font-semibold tracking-tight mt-1" id="qtRR">1:3.00</div>
<div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" id="qtRRBadge">Good</div>
</div>
</div>

<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400 mb-3">Risk vs Reward Visualization</div>
<div className="h-3 rounded-full bg-neutral-800 overflow-hidden flex ring-1 ring-white/5">
<div className="bg-gradient-to-r from-rose-600 to-rose-400" id="qtBarRisk" style={{width: '25%'}}></div>
<div className="bg-gradient-to-r from-emerald-600 to-emerald-400" id="qtBarReward" style={{width: '75%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-neutral-400">
<span>← Risk</span>
<span>Reward →</span>
</div>
</div>

<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400 mb-2">Pip Value Information</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-300">1 pip = <span className="font-semibold" id="qtPipSize">0.0001</span></div>
<div className="text-[11px] text-neutral-500 mt-1">For this pair</div>
</div>
<div className="text-right">
<div className="text-sm text-neutral-300"><span className="font-semibold" id="qtPipValue">$5.00</span> per pip</div>
<div className="text-[11px] text-neutral-500 mt-1">For your position size</div>
</div>
</div>
</div>

<div className="flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-rose-500/40 transition" id="qtReset">
<i className="h-4 w-4 text-neutral-400" data-lucide="refresh-cw"></i>
<span className="text-sm">Reset</span>
</button>
</div>
</div>
</section>

<section className="space-y-4" id="position">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Position Size Calculator</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<i className="h-4 w-4 text-cyan-400" data-lucide="help-circle"></i> Learn
                  </button>
<div className="absolute right-0 mt-2 w-64 p-3 rounded-md bg-neutral-900 border border-white/10 shadow-lg hidden group-hover:block z-50">
<div className="text-xs text-neutral-300">Position Size = (Account Balance × Risk%) ÷ (Stop Loss in pips × Pip Value per lot). This ensures you only risk your desired percentage on each trade.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
<div className="grid md:grid-cols-4 gap-4">
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="posRiskPct">Risk % per trade</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="posRiskPct" inputmode="decimal" step="0.1" type="number" value="1.0"/>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="posStopPips">Stop Loss (pips)</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="posStopPips" inputmode="decimal" step="0.1" type="number" value="20"/>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="posPair">Pair</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="posPair">
<option>EUR/USD</option>
<option>GBP/JPY</option>
<option>USD/CHF</option>
<option>XAU/USD</option>
</select>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="posAccount">Account Currency</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="posAccount">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
<option>JPY</option>
</select>
</div>
</div>

<div className="mt-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/30 p-5">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-400" data-lucide="target"></i>
<div className="text-sm font-medium text-cyan-300">Estimated Lot Size</div>
</div>
</div>
<div className="flex items-baseline gap-3">
<div aria-live="polite" className="text-5xl font-semibold tracking-tight text-white" id="posLots">0.50</div>
<div className="text-xl text-neutral-400">lots</div>
</div>
</div>
<div className="mt-5 grid md:grid-cols-2 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Risk Amount</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="posRiskAmount">$100.00</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Notional Value</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="posValue">$54,250.00</div>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="margin">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Margin Requirement Calculator</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<i className="h-4 w-4 text-cyan-400" data-lucide="help-circle"></i> Formula
                  </button>
<div className="absolute right-0 mt-2 w-64 p-3 rounded-md bg-neutral-900 border border-white/10 shadow-lg hidden group-hover:block z-50">
<div className="text-xs text-neutral-300">Margin = Notional Value ÷ Leverage. Notional = Contract Size × Lots × Price (converted to your account currency).</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
<div className="grid md:grid-cols-4 gap-4">
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="marAccount">Account Currency</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="marAccount">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
<option>JPY</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="marPair">Pair</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="marPair">
<option>EUR/USD</option>
<option>GBP/JPY</option>
<option>USD/CHF</option>
<option>XAU/USD</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="marLots">Trade Size (lots)</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="marLots" inputmode="decimal" step="0.01" type="number" value="1.00"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="marLev">Leverage</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="marLev">
<option value="30">1:30</option>
<option value="50">1:50</option>
<option selected="" value="100">1:100</option>
<option value="200">1:200</option>
<option value="500">1:500</option>
</select>
</div>
</div>
<div className="mt-5 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Required Margin</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="marRequired">$1,085.00</div>
<div className="mt-1 text-[11px] text-neutral-500">Capital locked for this trade</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Notional Value</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="marNotional">$108,500</div>
<div className="mt-1 text-[11px] text-neutral-500">Total position exposure</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Current Price</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="marPrice">1.0850</div>
<div className="text-[11px] text-neutral-500 mt-1" id="marContract">100,000 units/lot</div>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="pl">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Profit &amp; Loss Calculator</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<i className="h-4 w-4 text-cyan-400" data-lucide="help-circle"></i> Guide
                  </button>
<div className="absolute right-0 mt-2 w-64 p-3 rounded-md bg-neutral-900 border border-white/10 shadow-lg hidden group-hover:block z-50">
<div className="text-xs text-neutral-300">P/L (pips) = (Exit - Entry) ÷ Pip Size × Direction. P/L (currency) = Pips × Pip Value × Lots.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-5">
<div className="grid md:grid-cols-6 gap-4">
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plPair">Pair</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plPair">
<option>EUR/USD</option>
<option>GBP/JPY</option>
<option>USD/CHF</option>
<option>XAU/USD</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plEntry">Entry</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plEntry" inputmode="decimal" step="0.0001" type="number" value="1.0800"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plExit">Exit</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plExit" inputmode="decimal" step="0.0001" type="number" value="1.0850"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plLots">Lots</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plLots" inputmode="decimal" step="0.01" type="number" value="1.00"/>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plDir">Direction</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plDir">
<option value="buy">Buy (Long)</option>
<option value="sell">Sell (Short)</option>
</select>
</div>
<div>
<label className="text-xs text-neutral-400 block mb-1" htmlFor="plAccount">Account Currency</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="plAccount">
<option>USD</option>
<option>EUR</option>
<option>GBP</option>
<option>JPY</option>
</select>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">P/L (Pips)</div>
<div className="text-2xl font-semibold tracking-tight mt-1 text-emerald-400" id="plPips">+50.0 pips</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">P/L (Currency)</div>
<div className="text-2xl font-semibold tracking-tight mt-1 text-emerald-400" id="plMoney">+$500.00</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Pip Value Info</div>
<div className="text-sm text-neutral-300 mt-1" id="plPipMeta">pip: 0.0001 • $10.00/lot</div>
</div>
</div>

<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400 mb-2">P/L Visualization</div>
<div className="relative">
<div className="h-36 md:h-44 rounded-md bg-neutral-950/80 ring-1 ring-white/5">
<div className="h-full p-2">
<canvas id="plChartCanvas"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="rr">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Risk/Reward Planner</h2>
<div className="relative group">
<button className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
<i className="h-4 w-4 text-cyan-400" data-lucide="help-circle"></i> Tips
                  </button>
<div className="absolute right-0 mt-2 w-72 p-3 rounded-md bg-neutral-900 border border-white/10 shadow-lg hidden group-hover:block z-50">
<div className="text-xs text-neutral-300">Set Entry, Stop, and Target to visualize risk and potential reward. Aim for R:R ≥ 1:2 for a balanced system.</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 space-y-6">
<div className="grid md:grid-cols-6 gap-4">
<div className="md:col-span-2">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrPair">Pair</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrPair">
<option>EUR/USD</option>
<option>GBP/JPY</option>
<option>USD/CHF</option>
<option>XAU/USD</option>
</select>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrDir">Direction</label>
<select className="fx-select w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrDir">
<option value="buy">Buy (Long)</option>
<option value="sell">Sell (Short)</option>
</select>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrLots">Lots</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrLots" inputmode="decimal" step="0.01" type="number" value="0.50"/>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrEntry">Entry</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrEntry" inputmode="decimal" step="0.0001" type="number" value="1.0800"/>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrStop">Stop</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrStop" inputmode="decimal" step="0.0001" type="number" value="1.0780"/>
</div>
<div className="md:col-span-1">
<label className="text-xs text-neutral-400 block mb-1" htmlFor="rrTarget">Target</label>
<input className="w-full px-3 py-2 rounded-md bg-neutral-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30" id="rrTarget" inputmode="decimal" step="0.0001" type="number" value="1.0860"/>
</div>
</div>

<div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Risk (pips)</div>
<div className="text-xl font-semibold tracking-tight mt-1 text-rose-400" id="rrRiskPips">20.0</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Reward (pips)</div>
<div className="text-xl font-semibold tracking-tight mt-1 text-emerald-400" id="rrRewardPips">60.0</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4 relative">
<div className="text-xs text-neutral-400">R:R Ratio</div>
<div className="text-xl font-semibold tracking-tight mt-1" id="rrRatio">1:3.00</div>
<div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" id="rrBadge">Good</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Pip value/lot</div>
<div className="text-xl font-semibold tracking-tight mt-1" id="rrPipValLot">$10.00</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Risk Amount</div>
<div className="text-xl font-semibold tracking-tight mt-1 text-rose-400" id="rrRiskAmt">$100.00</div>
</div>
<div className="rounded-lg bg-neutral-900/50 border border-white/10 p-4">
<div className="text-xs text-neutral-400">Potential Profit</div>
</div></div></div></section></main></div></div></div>
    </>
  );
}
