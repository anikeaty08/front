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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[120px]"></div>
<div className="absolute inset-0 grid-bg opacity-40"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-2 backdrop-blur-xl shadow-2xl shadow-black/50">
<a className="flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-white/5" href="#">
<div className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/20">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">CopyVault</span>
</a>
<div className="h-4 w-px bg-white/10 mx-2 hidden sm:block"></div>
<div className="hidden items-center gap-1 sm:flex">
<a className="rounded-full px-4 py-2 text-xs font-medium text-slate-400 transition hover:text-white hover:bg-white/5" href="#">Markets</a>
<a className="rounded-full px-4 py-2 text-xs font-medium text-slate-400 transition hover:text-white hover:bg-white/5" href="#">Pro Traders</a>
<a className="rounded-full px-4 py-2 text-xs font-medium text-slate-400 transition hover:text-white hover:bg-white/5" href="#">Enterprise</a>
</div>
<div className="ml-2 flex items-center gap-2 pl-2">
<a className="text-xs font-medium text-slate-300 hover:text-white px-3" href="#">Log in</a>
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-slate-200">
<span className="mr-1">Start Trading</span>
<i className="h-3 w-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<section className="relative z-10 pt-40 pb-20">
<div className="mx-auto max-w-7xl px-6 text-center">

<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)] backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_currentColor]"></span>
<span className="text-[10px] font-medium tracking-wide text-indigo-200 uppercase">New: Crypto Derivatives live</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
<span className="text-gradient block">Automate Wealth.</span>
<span className="block text-slate-500 text-4xl sm:text-5xl md:text-7xl mt-2">Hedge Inflation.</span>
</h1>
<p className="mx-auto mt-8 max-w-xl text-lg text-slate-400 leading-relaxed font-light">
                Copy institutional-grade strategies on Forex, Crypto, and Indices. Build a dollar-denominated portfolio from anywhere in Africa.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="group relative h-12 overflow-hidden rounded-full bg-white px-8 text-sm font-medium text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent translate-x-[-100%] animate-shimmer group-hover:animate-none"></div>
<span className="relative flex items-center gap-2">
                        Start Copying <i className="h-4 w-4" data-lucide="chevron-right"></i>
</span>
</button>
<button className="flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition hover:bg-white/10">
<i className="h-4 w-4 text-slate-400" data-lucide="play-circle"></i> View Demo
                </button>
</div>

<div className="perspective-container mt-24 flex justify-center px-4">
<div className="rotate-3d relative w-full max-w-5xl rounded-xl border border-white/10 bg-[#0A0A0A] p-1 shadow-2xl shadow-indigo-900/20">

<div className="flex items-center justify-between border-b border-white/5 bg-[#0A0A0A] px-4 py-3 rounded-t-lg">
<div className="flex gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex h-6 w-64 items-center justify-center rounded-md bg-white/5 text-[10px] text-slate-500 font-mono">
                            copyvault.app/dashboard/trade
                        </div>
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
</div>

<div className="flex h-[400px] md:h-[500px] overflow-hidden bg-black/50 backdrop-blur-sm rounded-b-lg">

<div className="hidden w-16 flex-col items-center gap-6 border-r border-white/5 py-6 md:flex">
<i className="h-5 w-5 text-indigo-400" data-lucide="layout-grid"></i>
<i className="h-5 w-5 text-slate-600 hover:text-white transition" data-lucide="bar-chart-2"></i>
<i className="h-5 w-5 text-slate-600 hover:text-white transition" data-lucide="wallet"></i>
<i className="h-5 w-5 text-slate-600 hover:text-white transition" data-lucide="users"></i>
<div className="mt-auto mb-4 h-8 w-8 rounded-full border border-white/10 bg-white/5 text-slate-500 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="settings"></i>
</div>
</div>

<div className="flex-1 p-6">
<div className="flex flex-col h-full gap-6">

<div className="grid grid-cols-3 gap-4">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Total Equity</p>
<p className="mt-1 text-xl font-medium text-white font-mono">$12,450.00</p>
<p className="mt-1 text-[10px] text-emerald-500 flex items-center gap-1">+2.4% <i className="h-3 w-3" data-lucide="trending-up"></i></p>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<p className="text-[10px] text-slate-500 uppercase tracking-wider">Active Copiers</p>
<p className="mt-1 text-xl font-medium text-white font-mono">4</p>
<p className="mt-1 text-[10px] text-indigo-400">Running</p>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
<p className="text-[10px] text-slate-500 uppercase tracking-wider">P&amp;L (30d)</p>
<p className="mt-1 text-xl font-medium text-white font-mono">+$890.32</p>
<div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[70%] bg-emerald-500"></div>
</div>
</div>
</div>

<div className="flex flex-1 gap-6 overflow-hidden">

<div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-4 relative">
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-orange-500/20 flex items-center justify-center"><i className="h-4 w-4 text-orange-500" data-lucide="bitcoin"></i></div>
<span className="text-xs font-medium text-white">BTC/USD</span>
</div>
<div className="flex gap-2">
<span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-slate-400">1H</span>
<span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-slate-400">4H</span>
<span className="rounded bg-indigo-500/20 text-indigo-400 px-2 py-0.5 text-[10px]">1D</span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 top-16 flex items-end justify-between gap-1">

<div className="w-full bg-emerald-500/20 rounded-sm" style={{height: '30%'}}></div>
<div className="w-full bg-emerald-500/30 rounded-sm" style={{height: '45%'}}></div>
<div className="w-full bg-red-500/20 rounded-sm" style={{height: '35%'}}></div>
<div className="w-full bg-emerald-500/40 rounded-sm" style={{height: '50%'}}></div>
<div className="w-full bg-emerald-500/50 rounded-sm" style={{height: '70%'}}></div>
<div className="w-full bg-red-500/20 rounded-sm" style={{height: '60%'}}></div>
<div className="w-full bg-emerald-500/60 rounded-sm" style={{height: '80%'}}></div>
<div className="w-full bg-red-500/30 rounded-sm" style={{height: '65%'}}></div>
<div className="w-full bg-emerald-500/80 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]" style={{height: '90%'}}></div>
</div>

<svg className="absolute bottom-4 left-4 right-4 top-16 w-full h-full" preserveaspectratio="none">
<path d="M0 70 Q 50 80 100 40 T 200 60 T 300 10" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="w-64 flex flex-col gap-2">
<div className="rounded-lg border border-white/5 bg-white/[0.04] p-3">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-slate-800">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<p className="text-[10px] font-medium text-white">Alex M.</p>
<p className="text-[8px] text-slate-500">Forex Pro</p>
</div>
</div>
<span className="text-[10px] text-emerald-400 font-mono">+12%</span>
</div>
<button className="w-full rounded bg-indigo-600 py-1.5 text-[10px] font-medium text-white hover:bg-indigo-500">Copy Strategy</button>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.04] p-3 opacity-60">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-slate-800">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<p className="text-[10px] font-medium text-white">Sarah K.</p>
<p className="text-[8px] text-slate-500">Crypto Elite</p>
</div>
</div>
<span className="text-[10px] text-emerald-400 font-mono">+8%</span>
</div>
<button className="w-full rounded border border-white/10 bg-transparent py-1.5 text-[10px] font-medium text-slate-400 hover:text-white">View</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 mask-linear overflow-hidden">
<p className="text-xs font-medium text-slate-600 uppercase tracking-widest mb-6">Trusted by traders from</p>
<div className="flex justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-lg font-bold text-white tracking-tighter flex items-center gap-2"><i className="h-4 w-4" data-lucide="triangle"></i> BINANCE</div>
<div className="text-lg font-bold text-white tracking-tighter flex items-center gap-2"><i className="h-4 w-4" data-lucide="box"></i> EXNESS</div>
<div className="text-lg font-bold text-white tracking-tighter flex items-center gap-2"><i className="h-4 w-4" data-lucide="circle"></i> DERIV</div>
<div className="text-lg font-bold text-white tracking-tighter flex items-center gap-2"><i className="h-4 w-4" data-lucide="hexagon"></i> BYBIT</div>
</div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/50 py-3 backdrop-blur-sm overflow-hidden">
<div className="flex animate-marquee items-center gap-8 whitespace-nowrap">

<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">BTC/USD</span> <span className="text-white">64,230.50</span> <span className="text-emerald-500">+2.4%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">ETH/USD</span> <span className="text-white">3,450.20</span> <span className="text-emerald-500">+1.8%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">XAU/USD</span> <span className="text-white">2,045.10</span> <span className="text-red-500">-0.4%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">GBP/USD</span> <span className="text-white">1.2640</span> <span className="text-emerald-500">+0.1%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">SOL/USD</span> <span className="text-white">145.20</span> <span className="text-emerald-500">+5.4%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">NASDAQ</span> <span className="text-white">17,890.00</span> <span className="text-emerald-500">+0.8%</span></div>

<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">BTC/USD</span> <span className="text-white">64,230.50</span> <span className="text-emerald-500">+2.4%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">ETH/USD</span> <span className="text-white">3,450.20</span> <span className="text-emerald-500">+1.8%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">XAU/USD</span> <span className="text-white">2,045.10</span> <span className="text-red-500">-0.4%</span></div>
<div className="flex items-center gap-2 text-xs font-mono"><span className="text-slate-500">GBP/USD</span> <span className="text-white">1.2640</span> <span className="text-emerald-500">+0.1%</span></div>
</div>
</div>

<section className="py-32 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:w-1/2">
<h2 className="text-3xl font-medium text-white md:text-5xl tracking-tight">Institutional tools.<br/>Retail access.</h2>
<p className="mt-4 text-slate-400">We've democratized access to high-frequency trading data and expert portfolio management.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="glass-panel group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1">
<div className="absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-indigo-900/10 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-medium text-indigo-300">
<i className="h-3 w-3" data-lucide="zap"></i> Millisecond Latency
                            </div>
<h3 className="text-2xl font-medium text-white">Instant Trade Mirroring</h3>
<p className="mt-2 text-sm text-slate-400 max-w-sm">No lag. When your pro trader opens a position, your account executes it instantly via API connection.</p>
</div>

<div className="mt-8 flex items-center gap-4">

<div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center"><i className="h-4 w-4 text-white" data-lucide="user"></i></div>
<div className="text-xs">
<div className="text-white">Master</div>
<div className="text-green-500">Buy EURUSD</div>
</div>
</div>
</div>

<div className="h-px flex-1 bg-gradient-to-r from-slate-700 via-indigo-500 to-slate-700 relative">
<div className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8] animate-[marquee_2s_linear_infinite]" style={{animation: 'moveRight 1.5s infinite linear'}}></div>
</div>

<div className="rounded-xl border border-indigo-500/30 bg-indigo-900/10 p-4 backdrop-blur-sm shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center"><i className="h-4 w-4 text-white" data-lucide="check"></i></div>
<div className="text-xs">
<div className="text-white">You</div>
<div className="text-green-500">Executed</div>
</div>
</div>
</div>
</div>
</div>
<style>
                        @keyframes moveRight { 0% { left: 0; opacity:0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
                    </style>
</div>

<div className="glass-panel group relative row-span-2 overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-medium text-white">Risk Guard™</h3>
<p className="mt-2 text-sm text-slate-400">Set maximum drawdown limits. If a trader hits your threshold, we automatically disconnect and close positions.</p>
</div>

<div className="absolute bottom-8 left-6 right-6 rounded-xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl">
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-400">Max Drawdown</span>
<span className="text-white">15%</span>
</div>
<div className="relative h-2 w-full rounded-full bg-slate-800">
<div className="absolute left-0 top-0 h-full w-[15%] rounded-full bg-red-500"></div>
<div className="absolute left-[15%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-black shadow cursor-pointer hover:scale-110 transition"></div>
</div>
<div className="mt-4 flex items-center gap-2 text-[10px] text-slate-500">
<i className="h-3 w-3" data-lucide="info"></i> Stop loss triggers automatically.
                        </div>
</div>
</div>

<div className="glass-panel group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1">
<div className="relative z-10">
<h3 className="text-lg font-medium text-white">Non-Custodial</h3>
<p className="mt-2 text-xs text-slate-400">Funds stay in your broker account. We only execute trades via API.</p>
</div>
<div className="absolute bottom-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
<i className="h-16 w-16 text-white/5 -rotate-12" data-lucide="lock"></i>
</div>
</div>

<div className="glass-panel group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1">
<div className="relative z-10">
<h3 className="text-lg font-medium text-white">Cross-Broker</h3>
<p className="mt-2 text-xs text-slate-400">Connect Exness, Binance, and Deriv simultaneously.</p>
</div>
<div className="absolute bottom-0 right-0 p-4">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-black bg-slate-800"></div>
<div className="h-8 w-8 rounded-full border border-black bg-slate-700"></div>
<div className="h-8 w-8 rounded-full border border-black bg-slate-600"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#080808] py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
<div>
<h2 className="text-3xl font-medium text-white">Live Performance</h2>
<p className="text-slate-400 text-sm mt-1">Real-time stats from our top performing managers this month.</p>
</div>
<div className="flex gap-2">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition">Forex</button>
<button className="rounded-lg border border-transparent px-3 py-1.5 text-xs text-slate-500 hover:text-white transition">Crypto</button>
<button className="rounded-lg border border-transparent px-3 py-1.5 text-xs text-slate-500 hover:text-white transition">Indices</button>
</div>
</div>

<div className="overflow-x-auto rounded-xl border border-white/5 bg-black/20">
<table className="w-full text-left text-sm">
<thead>
<tr className="border-b border-white/5 text-xs text-slate-500 uppercase tracking-wider">
<th className="px-6 py-4 font-medium">Trader</th>
<th className="px-6 py-4 font-medium">Strategy</th>
<th className="px-6 py-4 font-medium text-right">Win Rate</th>
<th className="px-6 py-4 font-medium text-right">Return (30d)</th>
<th className="px-6 py-4 font-medium text-right">Copiers</th>
<th className="px-6 py-4 font-medium"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="group transition hover:bg-white/[0.02]">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400"></div>
<span className="font-medium text-white">Nova Capital</span>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Gold Scalper X</td>
<td className="px-6 py-4 text-right text-slate-300">82.4%</td>
<td className="px-6 py-4 text-right font-mono text-emerald-400">+42.1%</td>
<td className="px-6 py-4 text-right text-slate-300">1,204</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition rounded border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 hover:bg-indigo-500 hover:text-white">Copy</button>
</td>
</tr>

<tr className="group transition hover:bg-white/[0.02]">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400"></div>
<span className="font-medium text-white">Atlas Macro</span>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Swing BTC/ETH</td>
<td className="px-6 py-4 text-right text-slate-300">68.1%</td>
<td className="px-6 py-4 text-right font-mono text-emerald-400">+128.5%</td>
<td className="px-6 py-4 text-right text-slate-300">892</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition rounded border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 hover:bg-indigo-500 hover:text-white">Copy</button>
</td>
</tr>

<tr className="group transition hover:bg-white/[0.02]">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400"></div>
<span className="font-medium text-white">Delta Neutral</span>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Conservative Index</td>
<td className="px-6 py-4 text-right text-slate-300">94.2%</td>
<td className="px-6 py-4 text-right font-mono text-emerald-400">+8.2%</td>
<td className="px-6 py-4 text-right text-slate-300">3,450</td>
<td className="px-6 py-4 text-right">
<button className="opacity-0 group-hover:opacity-100 transition rounded border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 hover:bg-indigo-500 hover:text-white">Copy</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-32">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="mb-8 flex justify-center">
<i className="h-8 w-8 text-indigo-500 opacity-50" data-lucide="quote"></i>
</div>
<h2 className="text-2xl font-light leading-relaxed text-white md:text-4xl">
                "In Lagos, hedging against currency devaluation is survival. CopyVault lets me earn in stable USD by mirroring London-based forex strategies, without needing to watch the charts 24/7."
            </h2>
<div className="mt-10 flex items-center justify-center gap-4">
<img alt="User" className="h-12 w-12 rounded-full grayscale border border-white/10" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=100&amp;h=100&amp;fit=crop"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Chinedu O.</div>
<div className="text-xs text-slate-500">Early Adopter, Nigeria</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 px-6">
<div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] relative">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
<div className="relative z-10 flex flex-col items-center py-20 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Stop guessing.<br/>Start copying.</h2>
<p className="mt-6 max-w-lg text-slate-400">Join 50,000+ traders automating their wealth. Create an account in 30 seconds.</p>
<div className="mt-10 flex w-full max-w-sm flex-col gap-3 px-4 sm:flex-row">
<input className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Enter your email" type="email"/>
<button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200">Get Started</button>
</div>
<p className="mt-4 text-[10px] text-slate-600">No credit card required. Cancel anytime.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">CV</span></div>
<span className="text-sm text-slate-400">© 2025 CopyVault Inc.</span>
</div>
<div className="flex gap-8 text-xs text-slate-500">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Risk Disclosure</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition" href="#"><i className="h-4 w-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition" href="#"><i className="h-4 w-4" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition" href="#"><i className="h-4 w-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
