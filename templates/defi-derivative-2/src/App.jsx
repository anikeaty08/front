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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
50: '#eff4ff',
100: '#dbeafe',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
},
trade: {
up: '#10b981',   /* Emerald 500 */
down: '#f43f5e', /* Rose 500 */
long: 'rgba(16, 185, 129, 0.1)',
short: 'rgba(244, 63, 94, 0.1)',
},
accent: {
400: '#818cf8',
500: '#6366f1',
600: '#4f46e5',
},
canvas: {
light: '#ffffff',
dark: '#050505',
card: '#0a0a0a',
border: '#27272a',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
      

<div className="fixed inset-0 z-[-1] bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/20 dark:bg-brand-500/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

<nav className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-100/50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-500 ring-1 ring-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
<i className="w-4 h-4 transition-transform duration-700 group-hover:rotate-180" data-lucide="refresh-cw"></i>
</div>
<span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
                    ASCE<span className="text-brand-600 dark:text-brand-500">SWAP</span>
</span>
</a>

<div className="flex items-center gap-3">
<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>

</div>
</div>
</nav>

<main className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Coming Soon
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1] max-w-4xl mx-auto">
                Derivatives for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-500 to-purple-500 dark:from-brand-400 dark:via-accent-400 dark:to-purple-400">Yield Markets</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Hedge interest rate risk or speculate on yield volatility. 
                The first institutional-grade protocol for interest rate swaps on Ethereum.
            </p>

<div className="max-w-sm mx-auto mb-20">
<form className="relative group">
<div className="relative flex items-center">
<i className="absolute left-4 w-5 h-5 text-slate-400 z-10" data-lucide="mail"></i>
<input className="w-full pl-12 pr-32 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500/50 transition-all shadow-xl shadow-brand-900/5" placeholder="Enter your email" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center" type="submit">
                            Join
                        </button>
</div>
</form>
<div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-500">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-slate-200 border border-white dark:border-black"></div>
<div className="w-5 h-5 rounded-full bg-slate-300 border border-white dark:border-black"></div>
<div className="w-5 h-5 rounded-full bg-slate-400 border border-white dark:border-black"></div>
</div>
<span>Join 4,200+ others waiting for access</span>
</div>
</div>

<div className="relative max-w-4xl mx-auto animate-float">
<div className="absolute -inset-1 bg-gradient-to-b from-brand-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-30"></div>

<div className="relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#09090b] shadow-2xl overflow-hidden ring-1 ring-black/5">

<div className="h-14 border-b border-slate-100 dark:border-white/5 flex items-center justify-between px-6 bg-slate-50/50 dark:bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="flex items-center -space-x-2">
<div className="w-6 h-6 rounded-full bg-[#2775CA] flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#09090b]">U</div>
<div className="w-6 h-6 rounded-full bg-[#B6509E] flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#09090b]">A</div>
</div>
<span className="font-semibold text-slate-900 dark:text-slate-100">Aave V3 USDC</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400">MAINNET</span>
</div>
<div className="flex items-center gap-6">
<div className="text-right">
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Oracle Rate</div>
<div className="font-mono text-sm font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                                    5.44%
                                    <span className="text-trade-up text-xs bg-trade-up/10 px-1 rounded">+0.06%</span>
</div>
</div>
<div className="h-8 w-px bg-slate-200 dark:bg-white/5"></div>
<div className="text-right">
<div className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Liquidity</div>
<div className="font-mono text-sm font-medium text-slate-900 dark:text-white">$5.24M</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-12 min-h-[440px]">

<div className="md:col-span-7 p-6 border-r border-slate-100 dark:border-white/5 flex flex-col">

<div className="flex p-1 bg-slate-100 dark:bg-white/5 rounded-lg mb-6">
<button className="flex-1 py-1.5 px-3 rounded text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">1D <span className="opacity-50 text-[10px] block">6000x</span></button>
<button className="flex-1 py-1.5 px-3 rounded shadow-sm bg-white dark:bg-white/10 text-brand-600 dark:text-brand-400 text-xs font-semibold ring-1 ring-black/5">7D <span className="opacity-50 text-[10px] block">800x</span></button>
<button className="flex-1 py-1.5 px-3 rounded text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">30D <span className="opacity-50 text-[10px] block">200x</span></button>
</div>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Select Side</div>

<div className="grid grid-cols-2 gap-4 h-full">

<div className="relative group cursor-pointer rounded-xl border-2 border-brand-500 bg-brand-50/50 dark:bg-brand-500/5 p-5 transition-all">
<div className="absolute top-3 right-3">
<div className="w-4 h-4 rounded-full bg-brand-500 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div className="flex items-center gap-2 mb-3">
<div className="p-1.5 rounded bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<span className="font-semibold text-sm text-slate-900 dark:text-white">Fixed Taker</span>
</div>
<p className="text-xs text-slate-500 mb-6 h-8">Profit if variable rates <span className="font-bold text-slate-700 dark:text-slate-300">RISE</span> above fixed rate.</p>
<div className="space-y-1">
<div className="text-[10px] text-slate-500">Pay Fixed Rate</div>
<div className="font-mono text-2xl font-semibold text-slate-900 dark:text-white">5.46%</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Est. Yield</span>
<span className="font-mono text-brand-600 dark:text-brand-400 font-medium">142% APR</span>
</div>
</div>
</div>

<div className="relative group cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-white dark:bg-white/[0.02] p-5 transition-all opacity-60 hover:opacity-100">
<div className="flex items-center gap-2 mb-3">
<div className="p-1.5 rounded bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400">
<i className="w-4 h-4" data-lucide="trending-down"></i>
</div>
<span className="font-semibold text-sm text-slate-900 dark:text-white">Variable Taker</span>
</div>
<p className="text-xs text-slate-500 mb-6 h-8">Profit if variable rates <span className="font-bold text-slate-700 dark:text-slate-300">FALL</span> below fixed rate.</p>
<div className="space-y-1">
<div className="text-[10px] text-slate-500">Pay Variable Rate</div>
<div className="font-mono text-2xl font-semibold text-slate-900 dark:text-white">Current</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Est. Yield</span>
<span className="font-mono text-slate-600 dark:text-slate-400 font-medium">98% APR</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 p-6 bg-slate-50/80 dark:bg-[#0c0d10] flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Position Size</div>
<div className="flex items-center gap-1 text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
<i className="w-3 h-3" data-lucide="zap"></i>
                                        High Leverage
                                    </div>
</div>

<div className="bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/10 rounded-lg p-3 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-brand-500/20 transition-all">
<div className="text-[10px] text-slate-400 mb-1">Notional Amount (USDC)</div>
<div className="flex items-center justify-between">
<input className="w-full bg-transparent font-mono text-xl font-medium text-slate-900 dark:text-white outline-none" readonly="" type="text" value="100,000"/>
<span className="text-xs font-semibold text-slate-500 ml-2">USDC</span>
</div>
</div>

<div className="mb-6 px-1">
<input className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer" max="1000000" min="1000" type="range" value="100000"/>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono">
<span>$1K</span>
<span>$1M</span>
</div>
</div>

<div className="bg-brand-50 dark:bg-brand-900/10 rounded-lg p-4 border border-brand-100 dark:border-brand-500/20 mb-6">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-brand-700 dark:text-brand-300">Required Collateral</span>
<i className="w-3 h-3 text-brand-500" data-lucide="lock"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">$125.00</span>
<span className="text-xs text-slate-500">for $100k exposure</span>
</div>
<div className="mt-2 w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[800%]"></div> 
</div>
<div className="mt-1 text-[10px] text-right text-brand-600 dark:text-brand-400 font-mono">800x Leverage</div>
</div>

<div className="space-y-2 mb-6">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Liquidation Rate</span>
<span className="font-mono text-slate-700 dark:text-slate-300">5.51%</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Breakeven</span>
<span className="font-mono text-slate-700 dark:text-slate-300">5.47%</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Est. Daily P&amp;L</span>
<span className="font-mono text-trade-up">+$32.40</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-lg text-sm font-bold shadow-lg shadow-brand-500/10 hover:shadow-brand-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                                Open Long Position
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Total Notional Volume</div>
<div className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">$2.4B+</div>
</div>
<div>
<div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Open Interest</div>
<div className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">$450M</div>
</div>
<div>
<div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Total Users</div>
<div className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">12,500</div>
</div>
<div>
<div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Supported Assets</div>
<div className="text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">15+</div>
</div>
</div>
</section>

<footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-5 gap-12 mb-12">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2.5 mb-4 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-100/50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-500 ring-1 ring-brand-500/20">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
</div>
<span className="text-lg font-bold tracking-tighter text-slate-900 dark:text-white">
                            ASCE<span className="text-brand-600 dark:text-brand-500">SWAP</span>
</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                        Building the future of interest rate derivatives. Open source, permissionless, and community governed.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="disc"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-500 transition-colors" href="#">Markets</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Earn</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
<li><a className="hover:text-brand-500 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Risks</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 AsceSwap Labs. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span>All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
