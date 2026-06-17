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



function switchTab(tabId) {
// Hide all views
document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
document.querySelectorAll('.view-section').forEach(el => el.classList.remove('fade-in'));
// Show selected view
const selected = document.getElementById(tabId);
selected.classList.remove('hidden');
selected.classList.add('fade-in');
// Update sidebar state
document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
event.currentTarget.classList.add('active');
}

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
      

<aside className="w-16 lg:w-64 flex-shrink-0 border-r border-white/5 bg-[#080808] flex flex-col justify-between hidden md:flex transition-all duration-300">
<div>

<div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
<div className="w-12 h-12 flex-shrink-0">
<svg className="w-full h-full" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<text fill="white" fontFamily="'Inter', sans-serif" fontSize="100" font-weight="900" x="5" y="95">FX</text>

<g transform="translate(145, 15)">

<line stroke="#4ade80" strokeLinecap="round" strokeWidth="6" x1="5" x2="5" y1="10" y2="70"></line>
<rect fill="#4ade80" height="30" width="10" x="0" y="25"></rect>

<line stroke="#ef4444" strokeLinecap="round" strokeWidth="6" x1="25" x2="25" y1="20" y2="65"></line>
<rect fill="#ef4444" height="25" width="10" x="20" y="30"></rect>

<line stroke="#4ade80" strokeLinecap="round" strokeWidth="6" x1="45" x2="45" y1="5" y2="60"></line>
<rect fill="#4ade80" height="35" width="10" x="40" y="15"></rect>
</g>

<text fill="#4ade80" fontFamily="'Inter', sans-serif" fontSize="75" font-weight="900" letter-spacing="4" x="5" y="175">LIFE</text>
</svg>
</div>
</div>
<nav className="p-4 space-y-1 mt-2">
<button className="nav-item active w-full flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-colors group text-left" onclick="switchTab('dashboard')">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:chart-square-linear" width="20"></iconify-icon>
<span className="hidden lg:block font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-colors group text-left" onclick="switchTab('macro')">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:global-linear" width="20"></iconify-icon>
<span className="hidden lg:block font-medium">Macro Context</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-colors group text-left" onclick="switchTab('liquidity')">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="hidden lg:block font-medium">Liquidity Map</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-md transition-colors group text-left">
<iconify-icon className="group-hover:text-zinc-300 transition-colors" icon="solar:notebook-linear" width="20"></iconify-icon>
<span className="hidden lg:block font-medium">Daily Briefing</span>
</button>
</nav>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-medium">
                    JD
                </div>
<div className="hidden lg:block">
<div className="text-white text-xs font-medium">John Doe</div>
<div className="text-zinc-600 text-[10px] uppercase tracking-wide">Pro Tier</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#050505] grid-bg relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-sm z-10 shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col">
<h1 className="text-white font-medium tracking-tight">Market Intelligence</h1>
<span className="text-xs text-zinc-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        London Session • Open
                    </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5">
<span className="text-xs text-zinc-400">VIX</span>
<span className="text-xs text-rose-400 font-medium">13.40 (+1.2%)</span>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5">
<span className="text-xs text-zinc-400">DXY</span>
<span className="text-xs text-emerald-400 font-medium">102.45 (+0.1%)</span>
</div>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
<div className="max-w-7xl mx-auto">

<div className="view-section space-y-6" id="dashboard">

<section className="glass-panel rounded-xl p-6 border border-emerald-500/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-500" icon="solar:document-text-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 max-w-3xl">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Daily Bias</span>
<span className="text-zinc-500 text-xs">Today, 07:00 AM GMT</span>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">USD Strength Continuation via Yield Divergence</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                                Market context remains <span className="text-zinc-200 font-normal">Risk-Off</span>. US Treasury yields are pushing higher, creating a strong bid for the Dollar against low-yielders (JPY, CHF).
                                <br className="mb-2"/>
<span className="text-emerald-400 block mt-2 font-medium">Focus: Short EURUSD, Long USDJPY. Avoid GBP pairs (CPI pending).</span>
</p>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-zinc-400 font-medium text-sm tracking-tight">Active Opportunity</h3>
<div className="flex gap-2">
<span className="text-xs text-zinc-500">Last updated: 2m ago</span>
</div>
</div>

<div className="glass-panel rounded-xl border-l-4 border-l-emerald-500 p-0 overflow-hidden">

<div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white" icon="solar:euro-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="text-xl font-medium text-white tracking-tight">EURUSD</h2>
<span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wide">Bearish</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-2xl font-normal text-white tracking-tighter">1.0845</span>
<span className="text-xs text-rose-400">-0.24%</span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-[10px] uppercase text-zinc-500 tracking-wider">BIOS Score</div>
<div className="text-3xl font-medium text-emerald-400 tracking-tighter bios-gradient">8.4<span className="text-lg text-emerald-500/50">/10</span></div>
</div>
<div className="h-10 w-px bg-white/10 mx-2"></div>
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded hover:bg-zinc-200 transition-colors">
                                            View Chart
                                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="p-6">
<div className="flex items-center gap-2 mb-3 text-emerald-400">
<iconify-icon icon="solar:earth-linear" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Macro Regime</span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed">ECB dovish rhetoric contrasts with Fed's "higher for longer". Real rate differential favors USD.</p>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3 text-emerald-400">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Sentiment</span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed">Retail is heavily net long. Institutions are adding short exposure on rallies.</p>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex items-center gap-2 mb-3 text-emerald-400">
<iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Liquidity</span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed">Sell-side imbalance detected. Large stop clusters sitting below 1.0820.</p>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex items-center gap-2 mb-3 text-orange-400">
<iconify-icon icon="solar:ruler-pen-linear" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Structure</span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed">Price trading below Daily VWAP and 4H 50EMA. Forming Lower Highs.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="glass-panel rounded-xl overflow-hidden">
<table className="w-full text-left">
<thead className="bg-white/5 border-b border-white/5 text-[10px] uppercase text-zinc-500">
<tr>
<th className="px-4 py-3 font-medium">Asset</th>
<th className="px-4 py-3 font-medium text-right">Trend</th>
<th className="px-4 py-3 font-medium text-right">Score</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="group hover:bg-white/5 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
<div className="text-white font-medium text-sm">USDJPY</div>
</div>
</td>
<td className="px-4 py-3 text-right"><span className="text-emerald-400 text-xs">Bullish</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center justify-center px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-xs">9.1</div>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-1 h-8 bg-zinc-700 rounded-full"></div>
<div className="text-zinc-300 font-medium text-sm">GBPUSD</div>
</div>
</td>
<td className="px-4 py-3 text-right"><span className="text-zinc-500 text-xs">Neutral</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center justify-center px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 font-medium text-xs">5.4</div>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors cursor-pointer">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-1 h-8 bg-rose-900 rounded-full"></div>
<div className="text-zinc-400 font-medium text-sm">AUDUSD</div>
</div>
</td>
<td className="px-4 py-3 text-right"><span className="text-rose-400 text-xs">Bearish</span></td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center justify-center px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-medium text-xs">3.2</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="macro">
<div className="flex justify-between items-end">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Macroeconomic Matrix</h2>
<p className="text-zinc-500 mt-1 font-light">Global central bank divergence and yield analysis.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-xs text-zinc-400">G7 Currencies</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="glass-panel p-5 rounded-xl border-t-4 border-t-emerald-500">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">United States (Fed)</h3>
<span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded mt-1 inline-block">Hawkish Hold</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">Interest Rate</span>
<span className="text-white">5.50%</span>
</div>
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">Inflation (CPI)</span>
<span className="text-rose-400">3.2% (Sticky)</span>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-zinc-500">Bias</span>
<span className="text-emerald-400">Bullish USD</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border-t-4 border-t-rose-500">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Eurozone (ECB)</h3>
<span className="text-xs text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded mt-1 inline-block">Dovish Pivot</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:euro-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">Interest Rate</span>
<span className="text-white">4.00%</span>
</div>
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">Growth (GDP)</span>
<span className="text-rose-400">Stagnant</span>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-zinc-500">Bias</span>
<span className="text-rose-400">Bearish EUR</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border-t-4 border-t-zinc-500">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Japan (BOJ)</h3>
<span className="text-xs text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded mt-1 inline-block">Ultra Loose</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:yen-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">Interest Rate</span>
<span className="text-white">-0.10%</span>
</div>
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-zinc-500">YCC Cap</span>
<span className="text-zinc-300">1.0% on 10Y</span>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-zinc-500">Bias</span>
<span className="text-rose-400">Bearish JPY</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden space-y-6" id="liquidity">
<div className="flex justify-between items-end">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Liquidity Heatmap: EURUSD</h2>
<p className="text-zinc-500 mt-1 font-light">Estimated stop-loss clusters and order block density.</p>
</div>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-2 text-xs">
<div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500/50 rounded-sm"></div>
<span className="text-zinc-400">Buy Stops</span>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="w-3 h-3 bg-rose-500/20 border border-rose-500/50 rounded-sm"></div>
<span className="text-zinc-400">Sell Stops</span>
</div>
</div>
</div>
<div className="glass-panel rounded-xl p-1 overflow-hidden relative min-h-[500px] flex">

<div className="w-20 border-r border-white/5 bg-[#080808] flex flex-col justify-between py-10 items-end pr-3 text-xs text-zinc-500 font-mono">
<span>1.0900</span>
<span>1.0890</span>
<span>1.0880</span>
<span>1.0870</span>
<span>1.0860</span>
<span className="text-white font-bold bg-white/10 px-1 rounded">1.0845</span>
<span>1.0840</span>
<span>1.0830</span>
<span>1.0820</span>
<span>1.0810</span>
<span>1.0800</span>
</div>

<div className="flex-1 relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90">

<div className="absolute top-[50%] w-full h-px bg-white border-b border-dashed border-zinc-500 z-10 flex items-center">
<span className="absolute right-2 text-[10px] text-zinc-300 uppercase tracking-widest">Current Price</span>
</div>


<div className="absolute top-[75%] left-[10%] right-[10%] h-[40px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 border-y border-rose-500/20 flex items-center justify-center">
<span className="text-xs text-rose-400 font-medium tracking-wide">HIGH LIQUIDITY (SELL STOPS)</span>
</div>

<div className="absolute top-[20%] left-[20%] right-[20%] h-[30px] bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 border-y border-emerald-500/20 flex items-center justify-center">
<span className="text-xs text-emerald-500/70 font-medium tracking-wide">Buy Side Liquidity</span>
</div>

<div className="absolute right-0 top-0 bottom-0 w-32 flex flex-col items-end gap-[2px] opacity-30 py-2">
<div className="h-[2%] w-[30%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[40%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[20%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[60%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[80%] bg-zinc-400 rounded-l-sm"></div> 
<div className="h-[2%] w-[50%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[30%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[90%] bg-zinc-200 rounded-l-sm"></div> 
<div className="h-[2%] w-[70%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[40%] bg-zinc-600 rounded-l-sm"></div>
<div className="h-[2%] w-[100%] bg-rose-500 rounded-l-sm"></div> 
<div className="h-[2%] w-[50%] bg-zinc-600 rounded-l-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
