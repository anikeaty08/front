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



    document.getElementById('year').textContent = new Date().getFullYear();
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  
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
      
<div className="relative min-h-screen">
<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex gap-4 items-center">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="lucide lucide-diamond w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<span className="text-[17px] uppercase font-semibold tracking-tighter font-geist">Aventra</span>
</a>
<nav className="hidden md:flex items-center gap-2 ml-6">
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition">Markets</a>
<a className="px-3 py-2 text-sm text-white rounded-md bg-white/5 ring-1 ring-white/10">Earn</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition">Borrow</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition">Activity</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition">Rewards</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-white transition">Gov</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="">Search</span>
<span className="ml-2 text-[10px] text-neutral-400">/</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-amber-500 to-orange-600 text-sm font-medium text-neutral-950 hover:opacity-95 transition">
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="">0x3C...9D2</span>
</button>
</div>
</div>
</div>
</header>
<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="max-w-7xl mr-auto mb-8 ml-auto">
<div className="relative overflow-hidden rounded-3xl">
<img alt="mountain minimal" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58be6ce7-035f-46d6-9f95-cf56eada0b13_800w.jpg"/>
<div className="relative bg-black/40">
<div className="sm:px-12 sm:py-20 pt-16 pr-8 pb-16 pl-8">
<div className="max-w-2xl text-white">
<h3 className="text-3xl sm:text-4xl tracking-tight font-medium">Unlock the Future of DeFi Earning</h3>
<p className="mt-3 text-white/80">Experience institutional-grade yield strategies with transparent, onchain execution.</p>
<div className="flex flex-wrap gap-3 mt-6 items-center">
<a className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10" href="#">
              Learn more
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div><div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
<section className="lg:col-span-2 overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-2xl">
<div className="relative flex flex-col md:flex-row gap-6 sm:p-8 pt-6 pr-6 pb-6 pl-6 items-stretch">
<div className="flex-1">
<h1 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-white">Earn</h1>
<p className="mt-2 text-sm sm:text-base text-neutral-300">Multiply your assets with curated vaults, hedged exposure, and onchain execution.</p>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="">Start earning</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>Demo</span>
</button>
</div>
</div>
<div className="relative md:w-[320px] lg:w-[380px] shrink-0">
<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-600/10 to-fuchsia-500/10 blur-xl"></div>
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<img alt="3D render of coins" className="sm:h-48 md:h-56 w-full h-44 object-cover grayscale" src="https://cdn.midjourney.com/9c649db4-a6a9-488f-bf3c-1586664627e1/0_0.png?w=800&amp;q=80"/>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 ring-1 ring-white/10">
<svg className="lucide lucide-coins h-4 w-4 text-neutral-950" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</span>
<div className="">
<p className="text-sm text-neutral-300">USDX</p>
<p className="text-xs text-neutral-400">Stable Coin</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-neutral-400">Portfolio</p>
<p className="text-base font-semibold tracking-tight text-white">18,263,389 USDX</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-neutral-400">Supply APY</p>
<p className="text-sm font-semibold text-emerald-400">+6.98%</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-neutral-400">Balance</p>
<p className="text-sm font-semibold text-white">$98,675</p>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 px-3 py-2 text-sm font-medium hover:opacity-95 transition">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="">Deposit</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<i className="h-4 w-4" data-lucide="arrows-left-right"></i>
<span className="">Transfer</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<aside className="sm:p-8 bg-white/5 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="">
<p className="text-sm text-neutral-400">Net deposits</p>
<p className="mt-1 text-2xl font-semibold tracking-tight text-white">$17,987,451</p>
</div>
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<svg className="lucide lucide-chart-line h-6 w-6 text-emerald-400" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">Utilization</span>
<span className="text-sm font-semibold text-white">72%</span>
</div>
<div className="h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-emerald-400 to-teal-400"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">7d Inflow</span>
<span className="text-sm font-semibold text-emerald-400">+$2.4m</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">7d Outflow</span>
<span className="text-sm font-semibold text-rose-400">-$1.1m</span>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Add funds</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-upload h-4 w-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<span>Withdraw</span>
</button>
</div>
</aside>
</div>
<section className="md:mt-10 mt-8">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">Vaults</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span>Filters</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition">
<svg className="lucide lucide-sort-desc h-4 w-4" data-lucide="sort-desc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="M11 4h10"></path><path d="M11 8h7"></path><path d="M11 12h4"></path></svg>
<span>Sort</span>
</button>
</div>
</div>
<div className="mt-4 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
<div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 text-xs text-neutral-400">
<div className="col-span-5">Vault</div>
<div className="col-span-2">TVL</div>
<div className="col-span-2">APY</div>
<div className="col-span-3 text-right md:text-left md:pl-4">Strategy</div>
</div>
<div className="divide-y divide-white/5">

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 ring-1 ring-white/10">
<svg className="lucide lucide-bitcoin h-4 w-4 text-neutral-950" data-lucide="bitcoin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Atlas BTC Hedge</p>
<p className="text-xs text-neutral-400">LBTC</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$2.97m</p>
<p className="text-xs text-neutral-400">24.6 LBTC</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–22%</p>
<p className="text-xs text-neutral-400">Auto-hedged</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  BULLISH BTC
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-sky-500 ring-1 ring-white/10">
<svg className="lucide lucide-currency w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="currency" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(10, 10, 10)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8"></circle><line x1="3" x2="6" y1="3" y2="6"></line><line x1="21" x2="18" y1="3" y2="6"></line><line x1="3" x2="6" y1="21" y2="18"></line><line x1="21" x2="18" y1="21" y2="18"></line></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Nebula stETH Rebalance</p>
<p className="text-xs text-neutral-400">wstETH</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$1.62m</p>
<p className="text-xs text-neutral-400">9.1 wstETH</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 4–18%</p>
<p className="text-xs text-neutral-400">Rehypothecated</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  TRENDING ETH
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-600 ring-1 ring-white/10">
<svg className="lucide lucide-leaf h-4 w-4 text-neutral-950" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Quark ETH Harvest</p>
<p className="text-xs text-neutral-400">rswETH</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$7.92m</p>
<p className="text-xs text-neutral-400">24.6 rswETH</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 6–25%</p>
<p className="text-xs text-neutral-400">MEV capture</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                  TRENDING ETH
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 ring-1 ring-white/10">
<svg className="lucide lucide-shield-check h-4 w-4 text-neutral-950" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Sigma Stable Boost</p>
<p className="text-xs text-neutral-400">sUSDX</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$1.97m</p>
<p className="text-xs text-neutral-400">24.6 sUSDX</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–12%</p>
<p className="text-xs text-neutral-400">Delta neutral</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  BULLISH BTC
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 ring-1 ring-white/10">
<svg className="lucide lucide-waves h-4 w-4 text-neutral-950" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Photon XRP</p>
<p className="text-xs text-neutral-400">XRP</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$0.89m</p>
<p className="text-xs text-neutral-400">24.6 XRP</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 4–17%</p>
<p className="text-xs text-neutral-400">LP range</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  LIMITED DOWNSIDE
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 ring-1 ring-white/10">
<svg className="lucide lucide-link h-4 w-4 text-neutral-950" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Vector Chain</p>
<p className="text-xs text-neutral-400">VETX</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$1.53m</p>
<p className="text-xs text-neutral-400">24.6 VETX</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–21%</p>
<p className="text-xs text-neutral-400">Validator set</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  TRENDING ETH
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-400 to-slate-600 ring-1 ring-white/10">
<svg className="lucide lucide-layers h-4 w-4 text-neutral-950" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<div>
<p className="text-sm font-medium text-white">StackerNet</p>
<p className="text-xs text-neutral-400">STX</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$3.10m</p>
<p className="text-xs text-neutral-400">24.6 STX</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–26%</p>
<p className="text-xs text-neutral-400">Ordinals</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  BULLISH BTC
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-amber-500 ring-1 ring-white/10">
<svg className="lucide lucide-image h-4 w-4 text-neutral-950" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</span>
<div>
<p className="text-sm font-medium text-white">RenderFlow</p>
<p className="text-xs text-neutral-400">RNDRX</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$2.62m</p>
<p className="text-xs text-neutral-400">24.6 RNDRX</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–23%</p>
<p className="text-xs text-neutral-400">GPU staking</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  LIMITED DOWNSIDE
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 ring-1 ring-white/10">
<svg className="lucide lucide-hexagon h-4 w-4 text-neutral-950" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Poly Edge</p>
<p className="text-xs text-neutral-400">POL</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$5.31m</p>
<p className="text-xs text-neutral-400">24.6 POL</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 6–24%</p>
<p className="text-xs text-neutral-400">Liquidity loops</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  BULLISH BTC
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-green-600 ring-1 ring-white/10">
<svg className="lucide lucide-laugh h-4 w-4 text-neutral-950" data-lucide="laugh" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">MemePulse</p>
<p className="text-xs text-neutral-400">PEPX</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$1.99m</p>
<p className="text-xs text-neutral-400">24.6 PEPX</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 7–35%</p>
<p className="text-xs text-neutral-400">Vol capture</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                  TRENDING ETH
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 ring-1 ring-white/10">
<svg className="lucide lucide-badge-dollar-sign w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="badge-dollar-sign" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(10, 10, 10)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Gravity Pi</p>
<p className="text-xs text-neutral-400">PI</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$4.01m</p>
<p className="text-xs text-neutral-400">24.6 PI</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–20%</p>
<p className="text-xs text-neutral-400">Options wheel</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                  TRENDING ETH
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition">
<div className="md:col-span-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-rose-600 ring-1 ring-white/10">
<svg className="lucide lucide-flashlight h-4 w-4 text-neutral-950" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white">Opti Surge</p>
<p className="text-xs text-neutral-400">OP</p>
</div>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-white">$3.67m</p>
<p className="text-xs text-neutral-400">24.6 OP</p>
</div>
<div className="md:col-span-2">
<p className="text-sm font-semibold text-emerald-400">Est 5–19%</p>
<p className="text-xs text-neutral-400">L2 rebates</p>
</div>
<div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
<span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  BULLISH BTC
                </span>
<svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-400 md:ml-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

</div>
</div>
</section>
<footer className="mt-12 md:mt-16 border-t border-white/5 pt-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="lucide lucide-diamond w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<span className="text-[17px] uppercase font-semibold tracking-tighter font-geist">Aventra</span>
</a>
<p className="mt-3 text-sm text-neutral-400 max-w-md">Onchain yield infrastructure for funds and builders. Execute hedged strategies, route liquidity, and earn with confidence.</p>
<div className="mt-4 flex items-center gap-2">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] transition" href="#"><svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] transition" href="#"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] transition" href="#"><svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] transition" href="#"><svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
<div>
<p className="text-sm font-semibold text-white">Explore</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#">Protocol</a></li>
<li><a className="hover:text-white" href="#">Vaults</a></li>
<li><a className="hover:text-white" href="#">Perpetuals</a></li>
<li><a className="hover:text-white" href="#">Structured Products</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold text-white">Build</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#">Docs</a></li>
<li><a className="hover:text-white" href="#">SDK</a></li>
<li><a className="hover:text-white" href="#">Developer Tools</a></li>
<li><a className="hover:text-white" href="#">API Access</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> AetherFund. All rights reserved.</p>
<p className="text-xs text-neutral-500">Built for traders. Powered by onchain automation.</p>
</div>
</footer>
</main>
</div>



    </>
  );
}
