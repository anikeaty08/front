import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Initial Data configuration
            const marketData = {
                'XAUUSD': { priceVal: 5180.50, changePct: 0.82 },
                'US100': { priceVal: 17850.25, changePct: 1.15 },
                'US500': { priceVal: 5085.40, changePct: -0.45 },
                'XAGUSD': { priceVal: 22.85, changePct: 2.30 }
            };

            const analysisPhrases = {
                LONG: [
                    "Breakout above major resistance detected", 
                    "Strong momentum above EMA50", 
                    "Bullish engulfing on 1H timeframe", 
                    "Bouncing off key demand zone",
                    "RSI oversold, volume increasing"
                ],
                SHORT: [
                    "Rejection at supply zone", 
                    "Bearish divergence detected on MACD", 
                    "Breaking below critical trendline", 
                    "Overbought RSI on 4H structure",
                    "Heavy selling volume entering the orderbook"
                ]
            };

            function formatTime() {
                const now = new Date();
                return `Updated: ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
            }

            // Function to simulate price fluctuation
            setInterval(() => {
                for (let asset in marketData) {
                    let data = marketData[asset];
                    let priceEl = document.getElementById(`ticker-${asset}-price`);
                    let changeEl = document.getElementById(`ticker-${asset}-change`);
                    
                    if(priceEl && changeEl) {
                        // Generate random tick (-0.05% to +0.05%)
                        let fluctuation = (Math.random() - 0.5) * (data.priceVal * 0.001);
                        data.priceVal += fluctuation;
                        data.changePct += (fluctuation / data.priceVal) * 100;

                        // Update DOM
                        priceEl.textContent = data.priceVal.toFixed(2);
                        const isPositive = data.changePct >= 0;
                        changeEl.textContent = (isPositive ? '+' : '') + data.changePct.toFixed(2) + '%';
                        changeEl.className = `text-xs font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`;
                        
                        // Add flash effect
                        priceEl.classList.remove('flash-up', 'flash-down');
                        void priceEl.offsetWidth; // Trigger reflow
                        priceEl.classList.add(fluctuation >= 0 ? 'flash-up' : 'flash-down');
                    }
                }
                document.getElementById('last-updated').textContent = formatTime();
            }, 3000); // Ticks every 3 seconds

            // Function to simulate dynamic daily analysis and trade direction updates
            setInterval(() => {
                const assets = ['XAUUSD', 'US100'];
                const targetAsset = assets[Math.floor(Math.random() * assets.length)];
                
                const borderEl = document.getElementById(`signal-${targetAsset}-border`);
                const badgeEl = document.getElementById(`signal-${targetAsset}-badge`);
                const analysisEl = document.getElementById(`signal-${targetAsset}-analysis`);
                const confidenceEl = document.getElementById(`signal-${targetAsset}-confidence`);

                if(borderEl && badgeEl && analysisEl && confidenceEl) {
                    // Randomly decide new direction & confidence
                    const isLong = Math.random() > 0.5;
                    const newConfidence = Math.floor(Math.random() * 20) + 75; // 75% to 95%
                    
                    // Fade out text temporarily for smooth transition
                    analysisEl.style.opacity = 0;
                    
                    setTimeout(() => {
                        if(isLong) {
                            badgeEl.textContent = 'LONG';
                            badgeEl.className = 'rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-emerald-500/20 text-emerald-400 transition-colors duration-500';
                            borderEl.className = 'absolute left-0 top-0 h-full w-1 bg-emerald-500 transition-colors duration-500';
                            analysisEl.textContent = analysisPhrases.LONG[Math.floor(Math.random() * analysisPhrases.LONG.length)];
                        } else {
                            badgeEl.textContent = 'SHORT';
                            badgeEl.className = 'rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-rose-500/20 text-rose-400 transition-colors duration-500';
                            borderEl.className = 'absolute left-0 top-0 h-full w-1 bg-rose-500 transition-colors duration-500';
                            analysisEl.textContent = analysisPhrases.SHORT[Math.floor(Math.random() * analysisPhrases.SHORT.length)];
                        }
                        
                        confidenceEl.textContent = newConfidence + '%';
                        analysisEl.style.opacity = 1;
                    }, 300);
                }
            }, 12000); // Analysis updates every 12 seconds to demonstrate the feature
            
            // Set initial time
            document.getElementById('last-updated').textContent = formatTime();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b backdrop-blur-md border-zinc-800 bg-zinc-950/80">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-xl text-indigo-400" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h1 className="text-lg font-semibold leading-tight tracking-tight text-white">AI Signal Hub</h1>
<p className="text-xs text-zinc-500 font-medium">Metals &amp; Indices</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden items-center gap-2 sm:flex">
<div className="flex items-center gap-2 rounded-full bg-emerald-500/5 px-2 py-1 text-xs text-emerald-500 border border-emerald-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-mono tracking-wide">LIVE MARKET</span>
</div>
<span className="text-[10px] font-medium text-zinc-500" id="last-updated">Updating...</span>
</div>
<button className="group relative rounded-lg p-2 transition-colors text-zinc-400 hover:bg-zinc-900 hover:text-white">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-zinc-950"></span>
</button>
</div>
</div>
</header>
<main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">

<div className="grid grid-cols-2 gap-4 rounded-xl border p-4 sm:grid-cols-4 border-zinc-800 bg-zinc-900/40">
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
<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

<button className="relative overflow-hidden rounded-xl border border-indigo-500/50 bg-indigo-500/10 p-4 text-left transition-all">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold text-white">XAUUSD</span>
<div className="rounded bg-indigo-500/20 p-1 text-indigo-300">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium text-zinc-300 transition-colors" id="ticker-XAUUSD-price">5180.50</span>
<span className="text-xs font-medium text-emerald-400" id="ticker-XAUUSD-change">+0.82%</span>
</div>
</button>

<button className="group rounded-xl border p-4 text-left transition-all border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold group-hover:text-white text-zinc-300">US100</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium group-hover:text-zinc-300 text-zinc-400 transition-colors" id="ticker-US100-price">17850.25</span>
<span className="text-xs font-medium text-emerald-400" id="ticker-US100-change">+1.15%</span>
</div>
</button>
<button className="group rounded-xl border p-4 text-left transition-all border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold group-hover:text-white text-zinc-300">US500</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium group-hover:text-zinc-300 text-zinc-400 transition-colors" id="ticker-US500-price">5085.40</span>
<span className="text-xs font-medium text-rose-400" id="ticker-US500-change">-0.45%</span>
</div>
</button>
<button className="group rounded-xl border p-4 text-left transition-all border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900">
<div className="flex items-center justify-between mb-2">
<span className="font-semibold group-hover:text-white text-zinc-300">XAGUSD</span>
</div>
<div className="flex items-end justify-between">
<span className="text-sm font-medium group-hover:text-zinc-300 text-zinc-400 transition-colors" id="ticker-XAGUSD-price">22.85</span>
<span className="text-xs font-medium text-emerald-400" id="ticker-XAGUSD-change">+2.30%</span>
</div>
</button>
</div>
</section>

<div className="grid gap-6 lg:grid-cols-3">

<div className="space-y-4 lg:col-span-2">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-500">Active Signals &amp; Analysis</h2>
<button className="rounded-full border px-3 py-1 text-xs font-medium transition-colors bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600">
                        Show All (4)
                    </button>
</div>

<div className="relative overflow-hidden rounded-xl border p-5 transition-all border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 transition-colors duration-500" id="signal-XAUUSD-border"></div>
<div className="mb-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg text-xs font-semibold tracking-tight bg-zinc-800 text-white">
                                XAU
                            </div>
<div>
<div className="flex items-center gap-2">
<span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-emerald-500/20 text-emerald-400 transition-colors duration-500" id="signal-XAUUSD-badge">LONG</span>
<span className="text-sm font-medium text-white">Gold / US Dollar</span>
</div>
<span className="text-xs text-zinc-500 transition-opacity duration-300" id="signal-XAUUSD-analysis">Breakout above major resistance at 5175</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-zinc-500">Confidence</span>
<span className="text-sm font-semibold text-emerald-400 transition-colors" id="signal-XAUUSD-confidence">92%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t pt-4 border-zinc-800/50">
<div>
<span className="block text-[10px] uppercase text-zinc-500">Entry Zone</span>
<span className="text-sm font-medium text-zinc-200">5178 - 5185</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase text-zinc-500">Stop Loss</span>
<span className="text-sm font-medium text-rose-400">5160.50</span>
</div>
<div className="text-right">
<span className="block text-[10px] uppercase text-zinc-500">Target</span>
<span className="text-sm font-medium text-emerald-400">5220.00+</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl border p-5 transition-all border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50">
<div className="absolute left-0 top-0 h-full w-1 bg-rose-500 transition-colors duration-500" id="signal-US100-border"></div>
<div className="mb-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg text-xs font-semibold tracking-tight bg-zinc-800 text-white">
                                US100
                            </div>
<div>
<div className="flex items-center gap-2">
<span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-rose-500/20 text-rose-400 transition-colors duration-500" id="signal-US100-badge">SHORT</span>
<span className="text-sm font-medium text-white">Nasdaq 100</span>
</div>
<span className="text-xs text-zinc-500 transition-opacity duration-300" id="signal-US100-analysis">Rejection at supply zone</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-medium text-zinc-500">Confidence</span>
<span className="text-sm font-semibold text-emerald-400 transition-colors" id="signal-US100-confidence">85%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 border-t pt-4 border-zinc-800/50">
<div>
<span className="block text-[10px] uppercase text-zinc-500">Entry Zone</span>
<span className="text-sm font-medium text-zinc-200">17850 - 17880</span>
</div>
<div className="text-center">
<span className="block text-[10px] uppercase text-zinc-500">Stop Loss</span>
<span className="text-sm font-medium text-rose-400">17920</span>
</div>
<div className="text-right">
<span className="block text-[10px] uppercase text-zinc-500">Target</span>
<span className="text-sm font-medium text-emerald-400">17600+</span>
</div>
</div>
</div>
</div>

<div className="h-fit space-y-4">
<h2 className="text-sm font-medium text-zinc-500">Lot Size Calculator</h2>
<div className="rounded-xl border p-5 backdrop-blur-sm border-zinc-800 bg-zinc-900/60">
<div className="space-y-5">

<div className="space-y-2">
<label className="text-xs text-zinc-400">Asset</label>
<div className="grid grid-cols-4 gap-2">
<button className="rounded-lg border border-indigo-500/50 bg-indigo-500/10 py-1.5 text-xs font-semibold transition-colors text-indigo-400">XAU</button>
<button className="rounded-lg border py-1.5 text-xs font-medium transition-colors border-zinc-800 bg-zinc-950 text-zinc-400 hover:bg-zinc-800">XAG</button>
<button className="rounded-lg border py-1.5 text-xs font-medium transition-colors border-zinc-800 bg-zinc-950 text-zinc-400 hover:bg-zinc-800">US100</button>
<button className="rounded-lg border py-1.5 text-xs font-medium transition-colors border-zinc-800 bg-zinc-950 text-zinc-400 hover:bg-zinc-800">US500</button>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<label className="text-zinc-400">Account Balance</label>
</div>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
<input className="w-full rounded-lg border py-2 pl-7 pr-3 text-sm placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white" type="number" value="10000"/>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<label className="text-zinc-400">Risk per Trade</label>
<span className="font-medium text-indigo-400">2%</span>
</div>
<input className="w-full" max="5" min="0.5" step="0.5" type="range" value="2"/>
<div className="flex justify-between text-[10px] px-1 text-zinc-600">
<span>Conservative</span>
<span>Aggressive</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Entry</label>
<input className="w-full rounded-lg border py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white" type="number" value="5180.50"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Stop Loss</label>
<input className="w-full rounded-lg border py-2 px-3 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 border-zinc-800 bg-zinc-950 text-white" type="number" value="5160.50"/>
</div>
</div>
<div className="mt-4 rounded-lg border p-4 space-y-3 bg-zinc-950 border-zinc-800/50">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-500">Lot Size</span>
<span className="text-sm font-semibold text-white">0.20 Lots</span>
</div>
<div className="flex items-center justify-between border-t pt-2 border-zinc-800/50">
<span className="text-xs text-zinc-500">Risk Amount</span>
<span className="text-sm font-medium text-rose-400">-$200.00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-2">

<section className="space-y-4">
<h2 className="text-sm font-medium text-zinc-500">Log New Trade</h2>
<div className="rounded-xl border p-5 border-zinc-800 bg-zinc-900/40">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Asset</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border py-2 pl-3 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white">
<option>XAUUSD</option>
<option>XAGUSD</option>
<option>US100</option>
<option>US500</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Direction</label>
<div className="flex rounded-lg border p-1 border-zinc-800 bg-zinc-950">
<button className="w-1/2 rounded-md py-1 text-xs font-medium shadow-sm bg-zinc-800 text-white" type="button">Long</button>
<button className="w-1/2 rounded-md py-1 text-xs font-medium transition-colors text-zinc-400 hover:text-white" type="button">Short</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Entry Price</label>
<input className="w-full rounded-lg border py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white" placeholder="0.00" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Exit Price</label>
<input className="w-full rounded-lg border py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Confluence &amp; Notes</label>
<textarea className="w-full resize-none rounded-lg border py-2 px-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 border-zinc-800 bg-zinc-950 text-white" placeholder="Why did you take this trade?" rows="2"></textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-400">Chart Image</label>
<label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed py-6 transition-all hover:border-indigo-500 border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900">
<iconify-icon className="mb-2 text-2xl text-zinc-500" icon="solar:camera-add-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-400">Click to attach screenshot</span>
<input accept="image/*" className="hidden" type="file"/>
</label>
</div>
<button className="w-full rounded-lg bg-indigo-500 py-2.5 text-sm font-semibold transition-transform active:scale-[0.98] shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] text-white hover:bg-indigo-600" type="button">
                            Save to Journal
                        </button>
</form>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium text-zinc-500">Recent Trades</h2>
<button className="text-xs font-medium transition-colors text-indigo-400 hover:text-indigo-300">View All</button>
</div>
<div className="space-y-3">

<div className="group flex flex-col sm:flex-row gap-4 rounded-xl border p-4 transition-all border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60">
<div className="h-24 w-full sm:w-32 shrink-0 rounded-lg bg-gradient-to-br border flex items-center justify-center relative overflow-hidden from-zinc-800 to-zinc-900 border-zinc-700/50">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:gallery-linear"></iconify-icon>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/40">
<iconify-icon className="text-lg text-white" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-white">US100</span>
<span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-rose-500/20 text-rose-400">SHORT</span>
</div>
<p className="text-[11px] line-clamp-2 text-zinc-400">Price tapped into 1H supply zone aligned with VWAP. Saw rejection wicks and entered on the 5m structural shift.</p>
</div>
<div className="text-right shrink-0">
<span className="block text-sm font-semibold text-emerald-400">+$450.00</span>
<span className="text-[10px] text-zinc-500">Today, 10:45 AM</span>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-[11px] text-zinc-500">
<span>Entry: <span className="text-zinc-300">17850</span></span>
<span>Exit: <span className="text-zinc-300">17820</span></span>
</div>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-4 rounded-xl border p-4 transition-all border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60">
<div className="h-24 w-full sm:w-32 shrink-0 rounded-lg bg-gradient-to-br border flex items-center justify-center relative overflow-hidden from-zinc-800 to-zinc-900 border-zinc-700/50">
<iconify-icon className="text-2xl text-zinc-600" icon="solar:gallery-linear"></iconify-icon>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/40">
<iconify-icon className="text-lg text-white" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-semibold text-white">XAUUSD</span>
<span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold border border-emerald-500/20 text-emerald-400">LONG</span>
</div>
<p className="text-[11px] line-clamp-2 text-zinc-400">Attempted a breakout long at 5170 resistance. Fakeout occurred and stopped me out. Should have waited for a candle close.</p>
</div>
<div className="text-right shrink-0">
<span className="block text-sm font-semibold text-rose-400">-$200.00</span>
<span className="text-[10px] text-zinc-500">Yesterday</span>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-[11px] text-zinc-500">
<span>Entry: <span className="text-zinc-300">5171.50</span></span>
<span>Exit: <span className="text-zinc-300">5160.50</span></span>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="border-t pt-8 pb-12 border-zinc-800">
<div className="rounded-lg bg-indigo-500/5 p-4 border border-indigo-500/10">
<div className="flex gap-3">
<iconify-icon className="shrink-0 text-lg mt-0.5 text-indigo-400" icon="solar:info-circle-linear"></iconify-icon>
<div className="space-y-1">
<p className="text-xs font-semibold text-zinc-300">Risk Disclosure</p>
<p className="text-[11px] leading-relaxed text-zinc-500">
                            Trading derivatives like Gold, Silver, Nasdaq, and S&amp;P 500 carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. The signals and tools provided by AI Signal Hub are for educational purposes only. Past performance is not indicative of future results.
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
