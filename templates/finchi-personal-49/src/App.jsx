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
      

<div className="mx-auto w-full max-w-md">

<header className="relative px-5 pt-6">

<div className="pointer-events-none absolute inset-x-0 -top-6 mx-auto h-40 w-[92%] rounded-[2rem] bg-gradient-to-br to-transparent blur-2xl from-emerald-100/60 via-white/30"></div>
<div className="relative flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: 'Inter, "Be Vietnam Pro", ui-sans-serif, system-ui'}}>
              fn
            </div>
</div>
<div>
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Good morning</div>
<div className="text-lg font-semibold tracking-tight text-zinc-900" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>Minh Anh</div>
</div>
</div>

<div className="flex items-center gap-2">
<button aria-label="Search" className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ring-1 backdrop-blur transition bg-white/70 ring-zinc-200/60 hover:bg-white">
<iconify-icon className="text-zinc-700" height="22" icon="solar:magnifer-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</button>
<button aria-label="Notifications" className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ring-1 backdrop-blur transition bg-white/70 ring-zinc-200/60 hover:bg-white">
<div className="relative">
<iconify-icon className="text-zinc-700" height="22" icon="solar:bell-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
<span className="absolute -right-1 -top-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
</button>
</div>
</div>

<div className="relative mt-5 flex items-center justify-between rounded-3xl p-3 shadow-sm ring-1 backdrop-blur bg-white/70 ring-zinc-200/60">
<button aria-label="Previous month" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-100/70" style={{fontFamily: 'Inter, "Be Vietnam Pro", ui-sans-serif, system-ui'}}>
<iconify-icon className="text-zinc-600" height="18" icon="solar:alt-arrow-left-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
          Dec
        </button>
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>
          January, 2026
        </div>
<button aria-label="Next month" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-100/70" style={{fontFamily: 'Inter, "Be Vietnam Pro", ui-sans-serif, system-ui'}}>
          Feb
          <iconify-icon className="text-zinc-600" height="18" icon="solar:alt-arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</button>
</div>
</header>
<main className="px-5 pb-24">

<section className="mt-5">
<div className="relative overflow-hidden rounded-[2rem] shadow-[0_12px_40px_-20px_rgba(16,24,40,0.20)] ring-1 bg-white ring-zinc-200/60">
<div className="pointer-events-none absolute -right-12 -top-14 h-44 w-44 rounded-full blur-2xl bg-emerald-200/40"></div>
<div className="pointer-events-none absolute -left-10 -bottom-16 h-52 w-52 rounded-full blur-2xl bg-zinc-200/50"></div>
<div className="relative p-5">
<div className="flex items-start justify-between gap-4">
<div className="">
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Total assets</div>
<div className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>
                  128.450.000 <span className="text-base font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>₫</span>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 bg-emerald-50 text-emerald-700 ring-emerald-100" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
<iconify-icon className="text-emerald-700" height="14" icon="solar:arrow-up-linear" style={{'--iconify-stroke-width': '1.5'}} width="14"></iconify-icon>
                  +3.2% vs last month
                </div>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-zinc-900 text-white hover:bg-zinc-800" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
<iconify-icon className="text-white" height="18" icon="solar:card-transfer-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                Transfer
              </button>
</div>

<div className="mt-5 grid grid-cols-4 gap-3">
<button aria-label="Income" className="group flex flex-col items-center gap-2 rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-emerald-50 ring-emerald-100">
<iconify-icon className="text-emerald-700" height="20" icon="solar:wallet-money-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<span className="text-xs font-medium text-zinc-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Income</span>
</button>
<button aria-label="Spending" className="group flex flex-col items-center gap-2 rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="20" icon="solar:tag-price-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<span className="text-xs font-medium text-zinc-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Spend</span>
</button>
<button aria-label="Goals" className="group flex flex-col items-center gap-2 rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-emerald-50 ring-emerald-100">
<iconify-icon className="text-emerald-700" height="20" icon="solar:target-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<span className="text-xs font-medium text-zinc-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Goals</span>
</button>
<button aria-label="Reports" className="group flex flex-col items-center gap-2 rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="20" icon="solar:chart-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<span className="text-xs font-medium text-zinc-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Reports</span>
</button>
</div>
</div>
</div>
</section>

<section className="mt-5">
<div className="flex items-end justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Monthly overview</div>
<div className="mt-1 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Track your budget &amp; cash flow</div>
</div>
<button className="text-sm font-semibold transition text-emerald-700 hover:text-emerald-800" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
            View all
          </button>
</div>
<div className="mt-3 grid gap-3 sm:grid-cols-2">

<div className="rounded-[1.5rem] p-4 shadow-sm ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 bg-emerald-50 ring-emerald-100">
<iconify-icon className="text-emerald-700" height="18" icon="solar:cash-out-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Income</div>
<div className="text-base font-semibold tracking-tight text-zinc-900" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>42.000.000 ₫</div>
</div>
</div>
<div className="text-xs font-medium text-emerald-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>+5.1%</div>
</div>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full ring-1 bg-zinc-100 ring-zinc-200/60">
<div className="h-full w-[62%] rounded-full bg-gradient-to-r from-emerald-500/80 to-emerald-400/70"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
<span>Received</span>
<span>62% of goal</span>
</div>
</div>

<div className="rounded-[1.5rem] p-4 shadow-sm ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="18" icon="solar:receipt-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</span>
<div>
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Spending</div>
<div className="text-base font-semibold tracking-tight text-zinc-900" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>18.420.000 ₫</div>
</div>
</div>
<div className="text-xs font-medium text-zinc-600" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>48%</div>
</div>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full ring-1 bg-zinc-100 ring-zinc-200/60">
<div className="h-full w-[48%] rounded-full bg-gradient-to-r from-zinc-800/70 to-zinc-600/60"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
<span>Budget</span>
<span>38.000.000 ₫</span>
</div>
</div>
</div>
</section>

<section className="mt-5">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Accounts</div>
<button className="inline-flex items-center gap-1.5 text-sm font-semibold transition text-zinc-700 hover:text-zinc-900" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
            Manage
            <iconify-icon className="text-zinc-500" height="18" icon="solar:alt-arrow-right-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="mt-3 grid gap-3">

<div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br p-5 shadow-[0_16px_60px_-30px_rgba(0,0,0,0.55)] ring-1 from-zinc-950 via-zinc-900 to-zinc-800 ring-white/10">
<div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full blur-2xl bg-emerald-400/20"></div>
<div className="pointer-events-none absolute -left-12 -bottom-16 h-52 w-52 rounded-full blur-2xl bg-white/10"></div>
<div className="relative flex items-start justify-between gap-4">
<div>
<div className="text-xs font-medium text-white/70" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Primary card</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>
                  Finchi Black
                </div>
</div>
<div className="rounded-2xl px-3 py-1.5 text-xs font-semibold ring-1 bg-white/10 text-white/80 ring-white/10" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
                Visa
              </div>
</div>
<div className="relative mt-6">
<div className="text-xs font-medium text-white/60" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Available balance</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white" style={{fontFamily: 'Be Vietnam Pro, Inter, ui-sans-serif, system-ui'}}>
                26.800.000 ₫
              </div>
<div className="mt-4 flex items-center justify-between text-xs font-medium text-white/60" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
<span>•••• 3812</span>
<span>01/29</span>
</div>
</div>
</div>

<div className="rounded-[1.75rem] p-4 shadow-sm ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="grid gap-3">
<button className="flex w-full items-center justify-between rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-emerald-50 ring-emerald-100">
<iconify-icon className="text-emerald-700" height="20" icon="solar:buildings-3-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<div className="text-left">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Vietcombank</div>
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Checking account</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>54.120.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>• 1129</div>
</div>
</button>
<button className="flex w-full items-center justify-between rounded-2xl p-3 ring-1 transition bg-zinc-50/80 ring-zinc-200/60 hover:bg-white">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="20" icon="solar:safe-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</span>
<div className="text-left">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Emergency fund</div>
<div className="text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Savings</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>32.500.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-emerald-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>+1.200.000 ₫</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="mt-5">
<div className="flex items-end justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Recent transactions</div>
<div className="mt-1 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Auto-categorized, easy to track</div>
</div>
<button className="text-sm font-semibold transition text-emerald-700 hover:text-emerald-800" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Filter</button>
</div>
<div className="mt-3 overflow-hidden rounded-[1.75rem] shadow-sm ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="divide-y divide-zinc-200/60">
<div className="flex items-center justify-between gap-3 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="22" icon="solar:cup-hot-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>The Coffee House</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Food &amp; drink • 09:12</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>- 78.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Primary card</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 bg-emerald-50 ring-emerald-100">
<iconify-icon className="text-emerald-700" height="22" icon="solar:cash-in-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>January salary</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Income • 08:30</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-emerald-700" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>+ 35.000.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Vietcombank</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="22" icon="solar:home-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Rent</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Housing • Yesterday</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>- 8.500.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Bank transfer</div>
</div>
</div>
<div className="flex items-center justify-between gap-3 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl ring-1 bg-zinc-100 ring-zinc-200">
<iconify-icon className="text-zinc-700" height="22" icon="solar:bus-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
<div>
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>Grab</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Transport • 2 days ago</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold tracking-tight text-zinc-900" style={{fontFamily: '"Be Vietnam Pro", Inter, ui-sans-serif, system-ui'}}>- 152.000 ₫</div>
<div className="mt-0.5 text-xs font-medium text-zinc-500" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Primary card</div>
</div>
</div>
</div>
<div className="p-4">
<button className="w-full rounded-2xl py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-zinc-900 text-white hover:bg-zinc-800" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>
              Add transaction
            </button>
</div>
</div>
</section>
</main>

<nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md">
<div className="px-5 pb-5">
<div className="rounded-[2rem] shadow-[0_18px_60px_-35px_rgba(16,24,40,0.35)] ring-1 backdrop-blur bg-white/80 ring-zinc-200/60">
<div className="grid grid-cols-5 items-center px-2 py-2.5">
<button aria-label="Home" className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-emerald-700">
<iconify-icon className="text-emerald-700" height="22" icon="solar:home-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-semibold" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Home</span>
</button>
<button aria-label="Budget" className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 transition text-zinc-600 hover:text-zinc-900">
<iconify-icon className="text-zinc-600" height="22" icon="solar:pie-chart-2-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Budget</span>
</button>
<button aria-label="Create new" className="relative -mt-7 flex flex-col items-center gap-1">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.5rem] shadow-[0_18px_50px_-22px_rgba(5,150,105,0.85)] ring-1 ring-emerald-500/40 transition bg-emerald-600 hover:bg-emerald-700">
<iconify-icon className="text-white" height="26" icon="solar:add-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="26"></iconify-icon>
</span>
<span className="text-xs font-semibold text-zinc-700" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Add</span>
</button>
<button aria-label="Goals" className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 transition text-zinc-600 hover:text-zinc-900">
<iconify-icon className="text-zinc-600" height="22" icon="solar:target-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Goals</span>
</button>
<button aria-label="Personal" className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 transition text-zinc-600 hover:text-zinc-900">
<iconify-icon className="text-zinc-600" height="22" icon="solar:user-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium" style={{fontFamily: 'Inter, Be Vietnam Pro, ui-sans-serif, system-ui'}}>Personal</span>
</button>
</div>
</div>
</div>
</nav>
</div>

    </>
  );
}
