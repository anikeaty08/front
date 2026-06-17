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
      

<header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-white uppercase">NeoWallet</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
<div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]"></div>
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-300 p-[1px]">
<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
<span className="text-xs font-medium text-white">JD</span>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-3xl p-6 lg:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition">
                    + Add Funds
                </button>
</div>
<div className="relative z-10">
<p className="text-sm font-normal text-slate-400 mb-1">Total Balance</p>
<div className="flex items-baseline gap-3 mb-6">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight">$42,850.00</h2>
<div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md text-xs font-medium border border-emerald-400/10">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>+2.4%</span>
</div>
</div>
</div>

<div className="w-full h-32 absolute bottom-0 left-0 right-0 px-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 500 150">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#818cf8" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#818cf8" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,150 L0,100 C50,80 100,120 150,90 C200,60 250,90 300,50 C350,10 400,60 450,40 L500,60 L500,150 Z" fill="url(#chartGradient)"></path>
<path d="M0,100 C50,80 100,120 150,90 C200,60 250,90 300,50 C350,10 400,60 450,40 L500,60" fill="none" stroke="#818cf8" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="glass-card rounded-3xl p-6 lg:col-span-2 flex flex-col justify-between">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-medium text-white tracking-tight">Quick Actions</h3>
<button className="text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-4 gap-4 h-full items-end">
<button className="group flex flex-col items-center gap-2 w-full">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-highlight flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400 group-hover:text-indigo-200 transition-colors">Send</span>
</button>
<button className="group flex flex-col items-center gap-2 w-full">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-highlight flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
<iconify-icon icon="solar:hand-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400 group-hover:text-indigo-200 transition-colors">Request</span>
</button>
<button className="group flex flex-col items-center gap-2 w-full">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-highlight flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400 group-hover:text-indigo-200 transition-colors">Top Up</span>
</button>
<button className="group flex flex-col items-center gap-2 w-full">
<div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-highlight flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
<iconify-icon icon="solar:widgets-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-slate-400 group-hover:text-indigo-200 transition-colors">More</span>
</button>
</div>
</div>

<div className="glass-card rounded-3xl p-6 lg:col-span-2 h-80 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">Recent Transactions</h3>
<a className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors" href="#">View All</a>
</div>
<div className="overflow-y-auto custom-scroll pr-2 flex-1 space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Apple Store</p>
<p className="text-xs text-slate-500">Electronics • Today, 10:24 AM</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$1,299.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Sarah Miller</p>
<p className="text-xs text-slate-500">Transfer • Yesterday, 4:30 PM</p>
</div>
</div>
<span className="text-sm font-medium text-emerald-400">+$450.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Starbucks</p>
<p className="text-xs text-slate-500">Food &amp; Drink • Oct 24</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$12.50</span>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">AWS Services</p>
<p className="text-xs text-slate-500">Software • Oct 23</p>
</div>
</div>
<span className="text-sm font-medium text-white">-$64.00</span>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 lg:col-span-2 relative overflow-hidden group">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row h-full items-center justify-between gap-6">
<div className="flex-1 space-y-4 z-10">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-purple-400" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight">Dream Workspace</h3>
</div>
<p className="text-xs text-slate-400">Target: $8,000</p>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white">$5,600 saved</span>
<span className="text-purple-300">70%</span>
</div>

<div className="h-3 w-full bg-slate-800 rounded-full border border-white/5 relative overflow-hidden shadow-inner">
<div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
</div>
</div>
<button className="text-xs font-medium bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-purple-900/20 w-max">
                        Add Contribution
                    </button>
</div>

<div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">

<svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#savingsGradient)" stroke-dasharray="251.2" stroke-dashoffset="75.36" strokeLinecap="round" strokeWidth="8"></circle>
<defs>
<lineargradient id="savingsGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#6366f1"></stop>
<stop offset="100%" stop-color="#d946ef"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rotate-3 shadow-2xl border border-white/20 flex items-center justify-center z-10">
<iconify-icon className="text-white drop-shadow-md" icon="solar:laptop-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="w-16 h-16 bg-indigo-900/50 rounded-2xl -rotate-6 absolute border border-white/10 backdrop-blur-sm z-0"></div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
