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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<aside className="lg:w-64 flex flex-col hidden md:flex bg-[#050505]/80 w-16 z-20 border-white/5 border-r backdrop-blur-md justify-between">
<div className="">

<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
<span className="text-xl font-medium tracking-tighter text-white">QNTM</span>
</div>

<nav className="p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-zinc-100 group transition-colors" href="#">
<iconify-icon className="text-xl group-hover:text-emerald-400 transition-colors" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-zinc-100 group transition-colors" href="#">
<iconify-icon className="group-hover:text-emerald-400 transition-colors text-xl" height="20" icon="solar:cpu-linear" style={{strokeWidth: '1.5', color: 'rgb(52, 211, 153)'}} width="20"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Neural Engines</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-zinc-100 group transition-colors" href="#">
<iconify-icon className="text-xl group-hover:text-emerald-400 transition-colors" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Market Matrix</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 hover:text-zinc-100 group transition-colors" href="#">
<iconify-icon className="text-xl group-hover:text-emerald-400 transition-colors" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Backtesting</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-white/5 hidden lg:block">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Auto-Trade</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500/30 border border-white/10 peer-checked:border-emerald-500/50"></div>
</label>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1.5 rounded-md border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                Algo Alpha-v4 Active
            </div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

<header className="flex md:px-8 h-16 z-10 border-white/5 border-b pr-4 pl-4 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Total Deployed Capital</span>
<span className="text-sm font-medium text-zinc-200 tracking-tight">$45,200,000.00</span>
</div>
<div className="h-8 w-px bg-white/10 mx-2 hidden sm:block"></div>
<div className="flex flex-col hidden sm:flex">
<span className="text-xs text-zinc-500">Global Market Status</span>
<span className="text-sm font-medium text-emerald-400 tracking-tight flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                        Bullish Matrix
                    </span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#050505]"></span>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center text-xs text-white font-medium">
                    TR
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-8 z-10">
<div className="max-w-7xl mx-auto space-y-6">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="">
<h2 className="text-sm font-medium text-zinc-400 mb-2 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:wallet-money-linear"></iconify-icon>
                                Today's Realized Profit
                            </h2>
<div className="flex items-baseline gap-2">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                                    +$1,042,891<span className="text-zinc-600 text-3xl md:text-5xl">.54</span>
</h1>
</div>
<div className="mt-4 flex items-center gap-3 text-xs md:text-sm">
<span className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-500/20">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                                    +2.31% vs Target
                                </span>
<span className="text-zinc-500">Updated 2s ago</span>
</div>
</div>
<div className="flex gap-4">
<button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-square-linear"></iconify-icon>
                                Export Log
                            </button>
<button className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                                Force Execution
                            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Win Rate</span>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:target-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">84.2%</div>
<div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                            +1.2% this week
                        </div>
</div>

<div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Sharpe Ratio</span>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:scale-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">3.8</div>
<div className="mt-2 text-xs text-zinc-500 flex items-center gap-1">
                            Optimal performance range
                        </div>
</div>

<div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Active Positions</span>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">1,204</div>
<div className="mt-2 text-xs text-emerald-400 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1"></div>
                            Processing high volume
                        </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/5 bg-[#0A0A0A] p-6 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-medium text-zinc-200 tracking-tight">Intraday PnL Trajectory</h3>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-zinc-300 cursor-pointer hover:bg-white/10">1H</span>
<span className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-white cursor-pointer shadow-sm border border-white/5">1D</span>
<span className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-zinc-300 cursor-pointer hover:bg-white/10">1W</span>
</div>
</div>

<div className="flex-1 w-full relative mt-4">

<div className="absolute inset-0 flex flex-col justify-between border-y border-white/5">
<div className="w-full h-px border-b border-white/5 border-dashed"></div>
<div className="w-full h-px border-b border-white/5 border-dashed"></div>
<div className="w-full h-px border-b border-white/5 border-dashed"></div>
</div>
<svg className="w-full h-full overflow-visible absolute inset-0" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="chart-glow" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="" d="M0 40 L0 25 Q 10 15, 20 22 T 40 18 T 60 25 T 80 12 T 100 5 L 100 40 Z" fill="url(#chart-glow)"></path>

<path className="drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" d="M0 25 Q 10 15, 20 22 T 40 18 T 60 25 T 80 12 T 100 5" fill="none" stroke="#10b981" strokeWidth="0.3"></path>

<circle className="drop-shadow-[0_0_4px_rgba(16,185,129,1)]" cx="100" cy="5" fill="#10b981" r="1"></circle>
</svg>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-6 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-medium text-zinc-200 tracking-tight">Live Matrix Executions</h3>
<button className="text-xs text-zinc-500 hover:text-white transition-colors">View All</button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pr-2 space-y-1">

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-200">NVDA</div>
<div className="text-xs text-zinc-500">Algo Buy • 1,000 shs</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+$12,450.00</div>
<div className="text-xs text-zinc-600">@ 892.45</div>
</div>
</div>

<div className="flex hover:bg-white/[0.02] transition-colors hover:border-white/5 group border-transparent border rounded-lg pt-3 pr-3 pb-3 pl-3 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
<iconify-icon className="text-sm" icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">TSLA</div>
<div className="text-xs text-zinc-500">Short • 5,000 shs</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+$8,210.50</div>
<div className="text-xs text-zinc-600">@ 175.22</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon className="text-sm" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">MSFT</div>
<div className="text-xs text-zinc-500">Arb Adjust • Options</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-zinc-300">+$1,050.00</div>
<div className="text-xs text-zinc-600">Spread</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">AMD</div>
<div className="text-xs text-zinc-500">Algo Buy • 2,500 shs</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-400">+$4,820.00</div>
<div className="text-xs text-zinc-600">@ 182.90</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5 group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400">
<iconify-icon className="text-sm" icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">AAPL</div>
<div className="text-xs text-zinc-500">Hedge Sell • 1,200 shs</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-zinc-400">-$450.00</div>
<div className="text-xs text-zinc-600">@ 168.40</div>
</div>
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
