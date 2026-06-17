import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="hidden lg:flex w-64 flex-col border-r border-white/5 bg-neutral-950/50 h-screen sticky top-0 z-30">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-emerald-900 flex items-center justify-center text-xs font-bold text-white">N</div>
<span className="text-lg font-semibold tracking-tighter">NEXUS</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-lg border border-white/5 shadow-sm" href="#">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
                    Portfolio
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
                    Trades
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:star-linear" width="20"></iconify-icon>
                    Watchlist
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors group" href="#">
<iconify-icon className="group-hover:text-white transition-colors" icon="solar:bell-bing-linear" width="20"></iconify-icon>
                    Alerts
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</a>
</div>

<div>
<h3 className="px-3 text-xs font-medium uppercase tracking-widest text-neutral-600 mb-3">Active Assets</h3>
<div className="space-y-1">
<div className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:bitcoin-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white">Bitcoin</span>
</div>
<div className="text-right">
<span className="text-xs font-medium text-emerald-400">+2.4%</span>
</div>
</div>
<div className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:filters-linear" width="16"></iconify-icon> 
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white">Ethereum</span>
</div>
<div className="text-right">
<span className="text-xs font-medium text-emerald-400">+1.8%</span>
</div>
</div>
<div className="group flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
<iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon> 
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white">Solana</span>
</div>
<div className="text-right">
<span className="text-xs font-medium text-rose-400">-0.5%</span>
</div>
</div>
</div>
</div>
</nav>

<div className="p-4 border-t border-white/5">
<button className="w-full flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                Settings
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-20">

<div className="flex items-center gap-6 overflow-hidden max-w-xl opacity-60 hover:opacity-100 transition-opacity mask-linear-fade">
<div className="flex items-center gap-2 text-xs font-medium">
<span className="text-neutral-500">BTC</span>
<span className="text-emerald-400">$64,231</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium">
<span className="text-neutral-500">ETH</span>
<span className="text-emerald-400">$3,420</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium">
<span className="text-neutral-500">SOL</span>
<span className="text-rose-400">$142.50</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium">
<span className="text-neutral-500">GAS</span>
<span className="text-neutral-300">12 gwei</span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden sm:flex bg-neutral-900 rounded-lg p-1 border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">24h</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-950 bg-white rounded shadow-sm">7d</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors">30d</button>
</div>

<button className="relative text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 border border-neutral-950"></span>
</button>

<button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 hover:bg-white text-neutral-900 text-xs font-semibold rounded-full transition-colors">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
                    0x8a...2b4
                </button>

<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[400px]">

<div className="glass-panel lg:col-span-4 rounded-2xl p-6 flex flex-col justify-between relative group">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-neutral-500 hover:text-white transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
</div>
<div>
<p className="text-sm font-medium text-neutral-500 mb-1">Total Balance</p>
<h1 className="text-4xl font-semibold text-white tracking-tight">$124,592.34</h1>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
                                +$2,340 (1.9%)
                            </span>
<span className="text-xs text-neutral-600">vs. last week</span>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-end border-b border-white/5 pb-3">
<div>
<p className="text-xs text-neutral-500">Unrealized P/L</p>
<p className="text-lg font-medium text-emerald-400">+$12,402</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500">Bitcoin Dominance</p>
<p className="text-sm font-medium text-white">42.5%</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium hover:bg-emerald-500/20 transition-colors">Deposit</button>
<button className="flex-1 py-2 rounded-lg bg-neutral-800 text-white border border-white/5 text-xs font-medium hover:bg-neutral-700 transition-colors">Withdraw</button>
</div>
</div>
</div>

<div className="glass-panel lg:col-span-8 rounded-2xl p-6 relative flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-sm font-medium text-white">Performance</h2>
<p className="text-xs text-neutral-500 mt-1">Portfolio vs BTC</p>
</div>
<div className="flex bg-neutral-900/50 rounded-lg p-0.5 border border-white/5">
<button className="px-3 py-1 text-xs font-medium text-white bg-white/5 rounded shadow-sm">Portfolio</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">BTC</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">ETH</button>
</div>
</div>

<div className="flex-1 w-full h-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-neutral-700 pointer-events-none">
<div className="border-b border-dashed border-white/5 w-full h-0"></div>
<div className="border-b border-dashed border-white/5 w-full h-0"></div>
<div className="border-b border-dashed border-white/5 w-full h-0"></div>
<div className="border-b border-dashed border-white/5 w-full h-0"></div>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,150 C100,140 150,180 200,120 C250,60 300,90 350,80 C400,70 450,110 500,60 C550,10 600,40 650,30 C700,20 750,50 800,20 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>

<path className="chart-glow" d="M0,150 C100,140 150,180 200,120 C250,60 300,90 350,80 C400,70 450,110 500,60 C550,10 600,40 650,30 C700,20 750,50 800,20" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="2"></path>

<circle className="drop-shadow-lg animate-pulse" cx="500" cy="60" fill="#10B981" r="4"></circle>
<line opacity="0.5" stroke="#10B981" stroke-dasharray="4 4" strokeWidth="1" x1="500" x2="500" y1="0" y2="200"></line>
</svg>

<div className="absolute top-[10%] left-[63%] bg-neutral-900 border border-white/10 p-2 rounded-lg shadow-xl backdrop-blur-md transform -translate-x-1/2">
<div className="text-[10px] text-neutral-400">Oct 24, 14:00</div>
<div className="text-sm font-semibold text-white">$121,402.20</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-4 rounded-xl flex items-center justify-between group">
<div>
<p className="text-xs text-neutral-500 mb-1">Active Trades</p>
<p className="text-xl font-semibold text-white">8</p>
</div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between group">
<div>
<p className="text-xs text-neutral-500 mb-1">Win Rate (30d)</p>
<p className="text-xl font-semibold text-emerald-400">68%</p>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between group">
<div>
<p className="text-xs text-neutral-500 mb-1">Profit Factor</p>
<p className="text-xl font-semibold text-white">2.4</p>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between group">
<div>
<p className="text-xs text-neutral-500 mb-1">Avg Hold Time</p>
<p className="text-xl font-semibold text-white">4.2d</p>
</div>
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Allocation</h3>
<iconify-icon className="text-neutral-500" icon="solar:pie-chart-linear"></iconify-icon>
</div>
<div className="flex items-center gap-6">

<div className="relative w-28 h-28 rounded-full" style={{background: 'conic-gradient(#F59E0B 0% 35%, #6366F1 35% 60%, #10B981 60% 85%, #334155 85% 100%)'}}>
<div className="absolute inset-2 bg-neutral-900 rounded-full flex items-center justify-center">
<span className="text-xs font-medium text-neutral-400">Diversified</span>
</div>
</div>

<div className="space-y-2 flex-1">
<div className="flex justify-between items-center text-xs group cursor-pointer">
<span className="flex items-center gap-2 text-neutral-400"><span className="w-2 h-2 rounded-full bg-amber-500"></span> BTC</span>
<span className="font-medium text-white">35%</span>
</div>
<div className="flex justify-between items-center text-xs group cursor-pointer">
<span className="flex items-center gap-2 text-neutral-400"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> ETH</span>
<span className="font-medium text-white">25%</span>
</div>
<div className="flex justify-between items-center text-xs group cursor-pointer">
<span className="flex items-center gap-2 text-neutral-400"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> USDT</span>
<span className="font-medium text-white">25%</span>
</div>
<div className="flex justify-between items-center text-xs group cursor-pointer">
<span className="flex items-center gap-2 text-neutral-400"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Alts</span>
<span className="font-medium text-white">15%</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Whale Activity</h3>
<span className="text-[10px] text-neutral-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">Live</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between group relative">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-white/5 border border-white/5 text-emerald-400">
<iconify-icon icon="solar:arrow-left-down-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">BTC Accumulation</p>
<p className="text-[10px] text-neutral-500">2m ago • Coinbase</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$12.4M</p>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Bullish</span>
</div>

<div className="absolute inset-0 bg-neutral-900/95 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity rounded px-2">
<button className="text-[10px] font-medium text-white bg-blue-600 px-2 py-1 rounded hover:bg-blue-500">Follow</button>
<button className="text-[10px] font-medium text-white bg-white/10 px-2 py-1 rounded hover:bg-white/20">Analyze</button>
</div>
</div>

<div className="flex items-center justify-between group relative">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-white/5 border border-white/5 text-rose-400">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">ETH Dump</p>
<p className="text-[10px] text-neutral-500">14m ago • Binance</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$4.2M</p>
<span className="text-[10px] text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">Distribution</span>
</div>
</div>

<div className="flex items-center justify-between group relative">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-white/5 border border-white/5 text-emerald-400">
<iconify-icon icon="solar:arrow-left-down-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">SOL Buy</p>
<p className="text-[10px] text-neutral-500">32m ago • Wallet</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$1.1M</p>
<span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Neutral</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Social Sentiment</h3>
<iconify-icon className="text-neutral-500" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon className="grayscale opacity-50" icon="logos:twitter" width="10"></iconify-icon> Crypto Twitter</span>
<span className="text-emerald-400 font-medium">Very Bullish</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[75%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon className="grayscale opacity-50" icon="logos:reddit-icon" width="10"></iconify-icon> r/Cryptocurrency</span>
<span className="text-neutral-300 font-medium">Neutral</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-neutral-500 w-[45%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-neutral-400 flex items-center gap-1"><iconify-icon icon="solar:document-text-linear" width="10"></iconify-icon> Global News</span>
<span className="text-rose-400 font-medium">Fearful</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[30%] rounded-full"></div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5">
<p className="text-[10px] text-neutral-500 leading-relaxed">
                            Market sentiment is mixed. While social volume is high (bullish), macro news is causing short-term fear. 
                        </p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
