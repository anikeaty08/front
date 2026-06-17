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
},
colors: {
// Custom Palette based on modern "Linear-style" aesthetics
brand: {
50: '#eff4ff',
100: '#dbeafe',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb', // Primary Blue
700: '#1d4ed8',
},
accent: {
400: '#818cf8',
500: '#6366f1', // Indigo
600: '#4f46e5',
},
canvas: {
light: '#ffffff',
dark: '#050505', // Deep Obsidian
card: '#0a0a0a',
border: '#27272a',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'float': 'float 6s ease-in-out infinite',
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

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Governance</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Developers</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Blog</a>
</div>

<div className="flex items-center gap-3">

<button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>
<div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>
<button className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-brand-500/20">
                    Launch App
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
                V2 Mainnet Live
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1] max-w-4xl mx-auto">
                Derivatives for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-500 to-purple-500 dark:from-brand-400 dark:via-accent-400 dark:to-purple-400">Yield Markets</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Hedge interest rate risk or speculate on yield volatility. 
                The first institutional-grade protocol for interest rate swaps on Ethereum.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold hover:translate-y-[-1px] transition-transform flex items-center justify-center gap-2">
                    Start Trading
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    Read Documentation
                </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl blur opacity-20 dark:opacity-30"></div>
<div className="relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-canvas-card shadow-2xl overflow-hidden">

<div className="h-10 border-b border-slate-100 dark:border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/20"></div>
<div className="w-3 h-3 rounded-full bg-green-400/20"></div>
</div>
</div>

<div className="p-8 grid md:grid-cols-3 gap-8 text-left">

<div className="md:col-span-2 space-y-6">
<div className="flex justify-between items-end">
<div>
<div className="text-sm text-slate-500 dark:text-slate-400">USDC Variable APY</div>
<div className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white">5.42%</div>
</div>
<div className="flex gap-1">
<span className="px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-400">1H</span>
<span className="px-2 py-1 rounded bg-slate-100 dark:bg-white/5 text-xs font-medium text-slate-600 dark:text-slate-400">1D</span>
<span className="px-2 py-1 rounded bg-brand-500 text-xs font-medium text-white">1W</span>
</div>
</div>

<div className="h-40 w-full">
<svg className="w-full h-full text-brand-500" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 C20,35 25,10 40,20 C55,30 60,5 80,15 L100,10" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,35 C20,35 25,10 40,20 C55,30 60,5 80,15 L100,10 V40 H0 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="bg-slate-50 dark:bg-white/5 rounded-lg p-5 border border-slate-100 dark:border-white/5">
<div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Market Order</div>
<div className="space-y-3">
<div className="p-3 bg-white dark:bg-black/20 rounded border border-slate-200 dark:border-white/10">
<div className="text-xs text-slate-500 mb-1">Notional Size</div>
<div className="flex justify-between font-mono text-slate-900 dark:text-white">
<span>100,000</span>
<span>USDC</span>
</div>
</div>
<div className="flex justify-center -my-1 relative z-10">
<div className="bg-slate-200 dark:bg-slate-700 rounded-full p-1">
<i className="w-3 h-3 text-slate-500" data-lucide="arrow-down-up"></i>
</div>
</div>
<div className="p-3 bg-white dark:bg-black/20 rounded border border-slate-200 dark:border-white/10">
<div className="text-xs text-slate-500 mb-1">Receive Fixed</div>
<div className="flex justify-between font-mono text-slate-900 dark:text-white">
<span>4.85%</span>
<span>Fixed</span>
</div>
</div>
<button className="w-full py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded text-sm font-semibold transition-colors mt-2">
                                    Execute Swap
                                </button>
</div>
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

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center mb-20">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-4">Trusted by the best</h2>
<p className="text-slate-600 dark:text-slate-400">Used by leading hedge funds and DeFi power users.</p>
</div>
<div className="testimonial-wrapper flex flex-col md:flex-row justify-center items-center h-[500px] relative px-4">

<div className="testimonial-card w-full max-w-[380px] p-8 rounded-2xl bg-white dark:bg-[#0f1115] border border-slate-200 dark:border-white/10 shadow-xl z-10 md:translate-x-12 md:rotate-[-6deg] absolute md:static top-0">
<div className="flex items-center gap-3 mb-6">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-white">Alex Morgan</div>
<div className="text-xs text-slate-500">Portfolio Manager</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                    "AsceSwap has completely changed how we manage our variable rate exposure. The UI is incredibly intuitive and the execution is flawless."
                </p>
<div className="mt-6 flex gap-1">
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
</div>
</div>

<div className="testimonial-card w-full max-w-[380px] p-8 rounded-2xl bg-white dark:bg-[#0f1115] border border-slate-200 dark:border-white/10 shadow-2xl z-20 md:-mt-12 absolute md:static top-20">
<div className="flex items-center gap-3 mb-6">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Chen</div>
<div className="text-xs text-slate-500">DeFi Strategist</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                    "Finally, a way to lock in yields on mainnet without the headache. The liquidity depth is impressive for a new protocol. Highly recommended."
                </p>
<div className="mt-6 flex gap-1">
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
</div>
</div>

<div className="testimonial-card w-full max-w-[380px] p-8 rounded-2xl bg-white dark:bg-[#0f1115] border border-slate-200 dark:border-white/10 shadow-xl z-10 md:-translate-x-12 md:rotate-[6deg] absolute md:static top-40">
<div className="flex items-center gap-3 mb-6">
<img alt="User" className="w-10 h-10 rounded-full bg-slate-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"/>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-white">Marcus Reiss</div>
<div className="text-xs text-slate-500">DAO Contributor</div>
</div>
<i className="w-4 h-4 text-slate-400 ml-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                    "The integration with Aave and Compound is seamless. I use AsceSwap to hedge my debt positions against rate spikes. It's a lifesaver."
                </p>
<div className="mt-6 flex gap-1">
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-500 fill-brand-500" data-lucide="star"></i>
</div>
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
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
