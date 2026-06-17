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



      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
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
      
<div className="mx-auto max-w-md md:max-w-6xl px-4 sm:px-6 pb-24 pt-3">

<header className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-zinc-900 border border-white/10 grid place-items-center tracking-tight text-[10px] font-semibold text-zinc-200">SI</div>
<span className="hidden sm:inline text-zinc-300 text-sm">Spending</span>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/60 px-1 py-1">
<button aria-label="Previous month" className="p-1.5 rounded-full hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition-colors">
<i className="h-4 w-4 text-zinc-300" data-lucide="chevron-left"></i>
</button>
<button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition-colors">
<i className="h-4 w-4 text-zinc-300" data-lucide="calendar"></i>
<span className="text-sm tracking-tight text-zinc-200">Nov 2025</span>
<i className="h-4 w-4 text-zinc-400" data-lucide="chevron-down"></i>
</button>
<button aria-label="Next month" className="p-1.5 rounded-full hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition-colors">
<i className="h-4 w-4 text-zinc-300" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<img alt="Profile" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
</header>

<section className="rounded-2xl border border-white/10 bg-zinc-900/60 shadow-sm overflow-hidden">
<div className="p-4 sm:p-6">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs text-zinc-400">Spent so far</div>
<div className="mt-1 text-4xl tracking-tight font-semibold">$1,842</div>
<div className="mt-2 flex items-center gap-2 text-sm">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="trending-down"></i>
<span className="font-medium">-12%</span>
</span>
<span className="text-zinc-400">vs Oct</span>
</div>
</div>

<div className="hidden sm:block">
<svg className="opacity-90" fill="none" height="72" viewbox="0 0 180 72" width="180">
<path d="M2 62 L20 50 L35 54 L50 40 L65 44 L80 28 L95 36 L110 22 L125 30 L140 18 L160 26 L178 14" fill="none" stroke="rgb(52, 211, 153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 62 C20 50, 35 54, 50 40 C65 44, 80 28, 95 36 C110 22, 125 30, 140 18 C160 26, 178 14, 178 14 L178 70 L2 70 Z" fill="rgba(16,185,129,0.08)"></path>
</svg>
</div>
</div>

<div className="mt-4">
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>Month progress</span>
<span>Projection: <span className="text-zinc-200">$2,430</span></span>
</div>
<div className="mt-2 h-2.5 w-full rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-emerald-500/80" style={{width: '58%'}}></div>
</div>
<div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-500">
<span>18 of 30 days</span>
<span className="inline-flex items-center gap-1 text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> Pacing under last month
              </span>
</div>
</div>
</div>

<div className="h-px w-full bg-white/10"></div>

<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
<i className="h-4 w-4 text-zinc-300" data-lucide="wallet"></i>
              Essentials
            </div>
<div className="text-xl tracking-tight font-semibold">$1,120</div>
<div className="mt-1 text-xs text-zinc-400">62% of total</div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
<i className="h-4 w-4 text-zinc-300" data-lucide="sparkles"></i>
              Discretionary
            </div>
<div className="text-xl tracking-tight font-semibold">$580</div>
<div className="mt-1 text-xs text-zinc-400">-9% vs Oct</div>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
<i className="h-4 w-4 text-zinc-300" data-lucide="trending-up"></i>
              Biggest mover
            </div>
<div className="text-xl tracking-tight font-semibold">Groceries +$128</div>
<div className="mt-1 text-xs text-zinc-400">Consider a limit</div>
</div>
</div>
</section>

<section className="mt-4 sm:mt-6 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="shrink-0">
<i className="h-5 w-5 text-amber-300" data-lucide="lightbulb"></i>
</div>
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-amber-100">You’re on track</div>
<p className="mt-1 text-sm text-amber-200/90">
              Keep weekday dining under $18/day to finish the month 10–14% below last month.
            </p>
</div>
<button className="shrink-0 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-amber-100 text-xs hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors">
            Apply tip
          </button>
</div>
</section>

<section className="mt-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg tracking-tight font-semibold">Where your money went</h2>
<div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/60 p-1">
<button className="px-2.5 py-1 rounded-full text-xs text-zinc-300 hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition">All</button>
<button className="px-2.5 py-1 rounded-full text-xs bg-white/10 ring-1 ring-white/10 text-zinc-100">Top 5</button>
<button className="px-2.5 py-1 rounded-full text-xs text-zinc-300 hover:bg-white/5 hover:ring-1 hover:ring-white/10 transition">Essentials</button>
</div>
</div>
<div className="space-y-3">

<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 hover:bg-white/5 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="shopping-bag"></i>
</div>
<div>
<div className="text-sm font-medium">Shopping</div>
<div className="text-xs text-zinc-400">3 orders · -$22 vs Oct</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight">$420</div>
<div className="text-xs text-zinc-400">23% of total</div>
</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-zinc-300/80" style={{width: '23%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 hover:bg-white/5 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="car"></i>
</div>
<div>
<div className="text-sm font-medium">Transport</div>
<div className="text-xs text-zinc-400">14 rides · -$44 vs Oct</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight">$180</div>
<div className="text-xs text-zinc-400">10% of total</div>
</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-zinc-300/80" style={{width: '10%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 hover:bg-white/5 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="utensils"></i>
</div>
<div>
<div className="text-sm font-medium">Dining</div>
<div className="text-xs text-zinc-400">8 visits · +$86 vs Oct</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight">$356</div>
<div className="text-xs text-zinc-400">19% of total</div>
</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-rose-400/80" style={{width: '19%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 hover:bg-white/5 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="grocery"></i>
</div>
<div>
<div className="text-sm font-medium">Groceries</div>
<div className="text-xs text-zinc-400">5 trips · +$128 vs Oct</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight">$520</div>
<div className="text-xs text-zinc-400">28% of total</div>
</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-rose-400/80" style={{width: '28%'}}></div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 hover:bg-white/5 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="badge-dollar-sign"></i>
</div>
<div>
<div className="text-sm font-medium">Subscriptions</div>
<div className="text-xs text-zinc-400">6 services · +$12 vs Oct</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight">$210</div>
<div className="text-xs text-zinc-400">11% of total</div>
</div>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-zinc-300/80" style={{width: '11%'}}></div>
</div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold">Spending rhythm</h3>
<span className="text-xs text-zinc-400">This month</span>
</div>
<div className="mt-3 grid grid-cols-7 gap-1.5">

<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-zinc-300/80" style={{height: '30%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-zinc-300/80" style={{height: '42%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-zinc-300/80" style={{height: '55%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Wed</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-zinc-300/80" style={{height: '48%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-rose-400/80" style={{height: '90%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Fri</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-rose-400/80" style={{height: '80%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Sat</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-7 h-16 rounded-md bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="w-full bg-zinc-300/80" style={{height: '36%'}}></div>
</div>
<span className="text-[10px] text-zinc-400">Sun</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4 text-rose-400" data-lucide="flame"></i> 3 spikes
            </span>
<span>Most active: Fri</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold">Notable changes</h3>
<span className="text-xs text-zinc-400">vs last month</span>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-rose-500/10 ring-1 ring-rose-500/20">
<i className="h-4 w-4 text-rose-400" data-lucide="arrow-up-right"></i>
</span>
<div>
<div className="text-sm font-medium">Dining</div>
<div className="text-xs text-zinc-400">+18%</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-24 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-rose-400/80" style={{width: '72%'}}></div>
</div>
<div className="text-sm font-semibold tracking-tight">+$86</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i className="h-4 w-4 text-emerald-400" data-lucide="arrow-down-right"></i>
</span>
<div>
<div className="text-sm font-medium">Ride-hailing</div>
<div className="text-xs text-zinc-400">-12%</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-24 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-emerald-400/80" style={{width: '48%'}}></div>
</div>
<div className="text-sm font-semibold tracking-tight">-$44</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-rose-500/10 ring-1 ring-rose-500/20">
<i className="h-4 w-4 text-rose-400" data-lucide="arrow-up-right"></i>
</span>
<div>
<div className="text-sm font-medium">Groceries</div>
<div className="text-xs text-zinc-400">+14%</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-24 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
<div className="h-full bg-rose-400/80" style={{width: '64%'}}></div>
</div>
<div className="text-sm font-semibold tracking-tight">+$128</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-end">
<button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 hover:border-white/20 transition-colors">View transactions</button>
</div>
</div>
</section>

<section className="mt-6 rounded-xl border border-white/10 bg-zinc-900/60 p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold">What you can do next</h3>
<span className="text-xs text-zinc-400">Smart suggestions</span>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
<button className="group rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="target"></i>
<div className="text-sm font-medium">Set dining limit</div>
</div>
<p className="mt-1 text-xs text-zinc-400">Keep under $18/day weekdays</p>
</button>
<button className="group rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="bell"></i>
<div className="text-sm font-medium">Spike alerts</div>
</div>
<p className="mt-1 text-xs text-zinc-400">Notify on 2x category spend</p>
</button>
<button className="group rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left hover:bg-white/10 hover:border-white/20 transition-colors">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-zinc-200" data-lucide="ticket-percent"></i>
<div className="text-sm font-medium">Find savings</div>
</div>
<p className="mt-1 text-xs text-zinc-400">Unused subscriptions</p>
</button>
</div>
</section>
</div>

<nav className="fixed bottom-0 inset-x-0 bg-zinc-950/80 backdrop-blur border-t border-white/10">
<div className="mx-auto max-w-md md:max-w-6xl px-6">
<div className="grid grid-cols-4">
<button className="py-3.5 flex flex-col items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="h-5 w-5" data-lucide="home"></i>
            Home
          </button>
<button className="py-3.5 flex flex-col items-center gap-1 text-xs text-zinc-100">
<span className="relative">
<i className="h-5 w-5" data-lucide="chart-line"></i>
<span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-zinc-950"></span>
</span>
            Insights
          </button>
<button className="py-3.5 flex flex-col items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="h-5 w-5" data-lucide="credit-card"></i>
            Cards
          </button>
<button className="py-3.5 flex flex-col items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="h-5 w-5" data-lucide="user"></i>
            Profile
          </button>
</div>
</div>
</nav>


    </>
  );
}
