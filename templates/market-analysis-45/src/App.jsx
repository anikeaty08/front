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



        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-100 rounded-sm flex items-center justify-center text-zinc-950">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">SIGMA</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-zinc-100" href="#">Overview</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Screeners</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Portfolio</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Risk Model</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-medium tracking-wide text-zinc-400 uppercase">Market Open</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10 flex items-center justify-center">
<span className="text-xs font-medium text-white">JD</span>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-[1600px] mx-auto w-full p-6 space-y-8 relative">
<div className="absolute inset-0 bg-grid pointer-events-none -z-10"></div>

<section className="space-y-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Portfolio Health</h2>
<p className="text-sm text-zinc-500 mt-1">Real-time valuation and risk exposure analysis.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all">1D</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-900 border border-zinc-100 rounded hover:bg-white transition-all">1W</button>
<button className="px-3 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all">1M</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Net Liquidity</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" data-lucide="wallet"></i>
</div>
<div className="mt-4">
<div className="text-2xl font-medium text-zinc-100 tabular-nums tracking-tight">$142,894.50</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-[10px] font-medium">+2.4%</span>
<span className="text-xs text-zinc-500">vs last week</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total PnL</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500/50 transition-colors" data-lucide="trending-up"></i>
</div>
<div className="mt-4">
<div className="text-2xl font-medium text-emerald-400 tabular-nums tracking-tight">+$28,402.12</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="text-xs text-zinc-400">Realized: <span className="text-zinc-200">$4,200</span></span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-400">Unrealized: <span className="text-zinc-200">$24,202</span></span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Portfolio Beta</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" data-lucide="activity"></i>
</div>
<div className="mt-4">
<div className="text-2xl font-medium text-indigo-300 tabular-nums tracking-tight">1.42</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="text-xs text-zinc-500">High sensitivity relative to SPY</span>
</div>

<div className="w-full bg-zinc-800 h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-indigo-500 h-full rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between group hover:border-rose-900/30 transition-colors">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Risk Grade</span>
<i className="w-4 h-4 text-zinc-600 group-hover:text-rose-400 transition-colors" data-lucide="shield-alert"></i>
</div>
<div className="mt-4 flex items-end justify-between">
<div>
<div className="text-2xl font-medium text-amber-400 tabular-nums tracking-tight">B-</div>
<div className="text-xs text-zinc-500 mt-1">Concentrated exposure</div>
</div>
<div className="h-8 w-16 flex items-end gap-1">
<div className="w-1/4 h-[40%] bg-zinc-800 rounded-sm"></div>
<div className="w-1/4 h-[60%] bg-zinc-800 rounded-sm"></div>
<div className="w-1/4 h-[100%] bg-amber-500 rounded-sm"></div>
<div className="w-1/4 h-[30%] bg-zinc-800 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden border border-zinc-800">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-white/5 bg-zinc-900/50">
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider w-[200px]">Ticker</th>
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Allocation</th>
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Price</th>
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Avg Cost</th>
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Unrealized PnL</th>
<th className="py-3 px-5 font-medium text-zinc-500 text-xs uppercase tracking-wider text-right">Risk</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white">N</div>
<div>
<div className="font-medium text-zinc-200">NVDA</div>
<div className="text-[10px] text-zinc-500">NVIDIA Corp</div>
</div>
</div>
</td>
<td className="py-3 px-5 text-right tabular-nums">32.4%</td>
<td className="py-3 px-5 text-right tabular-nums font-medium text-zinc-200">$124.45</td>
<td className="py-3 px-5 text-right tabular-nums text-zinc-500">$65.20</td>
<td className="py-3 px-5 text-right tabular-nums">
<span className="text-emerald-400">+$14,230</span>
<span className="text-[10px] block text-emerald-500/70">+90.8%</span>
</td>
<td className="py-3 px-5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-500">Med</span>
</td>
</tr>
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white">T</div>
<div>
<div className="font-medium text-zinc-200">TSLA</div>
<div className="text-[10px] text-zinc-500">Tesla Inc</div>
</div>
</div>
</td>
<td className="py-3 px-5 text-right tabular-nums">18.2%</td>
<td className="py-3 px-5 text-right tabular-nums font-medium text-zinc-200">$210.80</td>
<td className="py-3 px-5 text-right tabular-nums text-zinc-500">$245.00</td>
<td className="py-3 px-5 text-right tabular-nums">
<span className="text-rose-400">-$2,450</span>
<span className="text-[10px] block text-rose-500/70">-13.9%</span>
</td>
<td className="py-3 px-5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/10 text-rose-500">High</span>
</td>
</tr>
<tr className="group hover:bg-zinc-800/30 transition-colors">
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white">P</div>
<div>
<div className="font-medium text-zinc-200">PLTR</div>
<div className="text-[10px] text-zinc-500">Palantir Tech</div>
</div>
</div>
</td>
<td className="py-3 px-5 text-right tabular-nums">12.1%</td>
<td className="py-3 px-5 text-right tabular-nums font-medium text-zinc-200">$24.12</td>
<td className="py-3 px-5 text-right tabular-nums text-zinc-500">$18.50</td>
<td className="py-3 px-5 text-right tabular-nums">
<span className="text-emerald-400">+$3,120</span>
<span className="text-[10px] block text-emerald-500/70">+30.4%</span>
</td>
<td className="py-3 px-5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-700/30 text-zinc-400">Low</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="lg:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<div className="p-1 bg-indigo-500/10 rounded text-indigo-400">
<i className="w-4 h-4" data-lucide="brain-circuit"></i>
</div>
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">AI Predictions &amp; Signals</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glass-panel rounded-xl p-5 border-l-2 border-l-emerald-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-emerald-400" data-lucide="arrow-up-right"></i>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center font-medium text-white text-sm border border-zinc-700">N</div>
<div>
<div className="font-medium text-zinc-100">NVDA</div>
<div className="text-xs text-emerald-400 font-medium mt-0.5">Bullish Continuation</div>
</div>
</div>
<span className="text-xs font-mono text-zinc-500">Conf: 88%</span>
</div>
<div className="h-12 w-full mb-3">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q 20 35 40 20 T 100 5" fill="none" stroke="#34d399" strokeWidth="2"></path>
<path d="M0 30 Q 20 35 40 20 T 100 5 V 40 H 0 Z" fill="url(#gradNVDA)" opacity="0.2"></path>
<defs>
<lineargradient id="gradNVDA" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#34d399', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#34d399', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                                Momentum indicators remain elevated. RSI at 68 suggests room for upside before overbought territory. <span className="text-zinc-200">High probability</span> of testing $130 resistance this week.
                            </p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">Vol: Low</span>
<span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">Trend: Strong</span>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 border-l-2 border-l-rose-500 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-24 h-24 text-rose-400" data-lucide="alert-triangle"></i>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-zinc-900 rounded flex items-center justify-center font-medium text-white text-sm border border-zinc-700">T</div>
<div>
<div className="font-medium text-zinc-100">TSLA</div>
<div className="text-xs text-rose-400 font-medium mt-0.5">Bearish Divergence</div>
</div>
</div>
<span className="text-xs font-mono text-zinc-500">Conf: 72%</span>
</div>
<div className="h-12 w-full mb-3">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 10 Q 30 5 50 25 T 100 35" fill="none" stroke="#fb7185" strokeWidth="2"></path>
<path d="M0 10 Q 30 5 50 25 T 100 35 V 40 H 0 Z" fill="url(#gradTSLA)" opacity="0.2"></path>
<defs>
<lineargradient id="gradTSLA" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#fb7185', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#fb7185', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                                Price making higher highs while momentum oscillators make lower highs. <span className="text-zinc-200">Moderate risk</span> of pullback to $200 support zone. Recommendation: Hedge or Trim.
                            </p>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">Vol: High</span>
<span className="px-2 py-1 rounded bg-zinc-800 text-[10px] text-zinc-400 border border-zinc-700">Sent: Weak</span>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
<i className="w-5 h-5 text-indigo-400" data-lucide="radar"></i>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Sector Rotation Alert</div>
<div className="text-xs text-zinc-500">Capital flowing from Consumer Discretionary → Enterprise Software.</div>
</div>
</div>
<button className="text-xs text-zinc-400 hover:text-white underline decoration-zinc-700 hover:decoration-white underline-offset-4 transition-all">View Analysis</button>
</div>
</div>
</section>

<section className="space-y-4 h-full flex flex-col">
<div className="flex items-center gap-2">
<div className="p-1 bg-amber-500/10 rounded text-amber-400">
<i className="w-4 h-4" data-lucide="lightbulb"></i>
</div>
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Actionable Suggestions</h2>
</div>
<div className="glass-panel rounded-xl p-5 flex-1 border border-zinc-800 space-y-6">

<div className="relative pl-4 border-l border-zinc-800">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-emerald-500"></div>
<div className="flex justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-200">Accumulate PLTR</h3>
<span className="text-[10px] font-medium text-emerald-400 bg-emerald-400/10 px-1.5 rounded border border-emerald-400/20 h-fit">Buy Zone</span>
</div>
<p className="text-xs text-zinc-400 mb-2">Stock has consolidated above 50-day MA. Breakout probable above $24.50.</p>
<button className="w-full py-1.5 rounded bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-white transition-colors">View Setup</button>
</div>

<div className="relative pl-4 border-l border-zinc-800">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-zinc-600"></div>
<div className="flex justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-200">Monitor COIN</h3>
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-800 px-1.5 rounded border border-zinc-700 h-fit">Watchlist</span>
</div>
<p className="text-xs text-zinc-400 mb-2">Approaching key support level at $150. Wait for confirmation candle before entry.</p>
<div className="flex gap-2">
<button className="flex-1 py-1.5 rounded border border-zinc-700 text-zinc-400 text-xs font-medium hover:text-zinc-200 hover:border-zinc-500 transition-colors">Set Alert</button>
</div>
</div>

<div className="relative pl-4 border-l border-zinc-800">
<div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-rose-500"></div>
<div className="flex justify-between mb-1">
<h3 className="text-sm font-medium text-zinc-200">Reduce TSLA Exposure</h3>
<span className="text-[10px] font-medium text-rose-400 bg-rose-400/10 px-1.5 rounded border border-rose-400/20 h-fit">Risk Control</span>
</div>
<p className="text-xs text-zinc-400 mb-2">Position size (18%) exceeds recommended limit (15%) for high-beta assets.</p>
<button className="w-full py-1.5 rounded border border-zinc-700 text-zinc-400 text-xs font-medium hover:text-rose-300 hover:border-rose-900 hover:bg-rose-900/10 transition-colors">Simulate Sell</button>
</div>

<div className="pt-4 border-t border-zinc-800 mt-4">
<div className="flex justify-between items-center mb-2">
<label className="text-xs font-medium text-zinc-500">Risk Tolerance Model</label>
<span className="text-xs font-medium text-zinc-300">Aggressive</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="75"/>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-white/5 bg-zinc-950 py-2 mt-auto">
<div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between text-[10px] text-zinc-600">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span>Systems Operational</span>
</div>
<span>Last updated: 14:32:01 EST</span>
</div>
<div className="flex items-center gap-4">
<span>Data provided by SIGMA Core</span>
<span>v2.4.1</span>
</div>
</div>
</footer>


    </>
  );
}
