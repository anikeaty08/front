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
      
<div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">

<div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen">
<div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04)_0,_transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_0.5px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.04)_0.5px,transparent_0)] bg-[size:4rem_4rem]"></div>
</div>

<div className="relative flex-1 flex flex-col">

<div className="z-20 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-sm">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-4">

<div className="flex items-center gap-3">
<div className="w-8 h-8 border border-neutral-700/80 rounded-full flex items-center justify-center">
<span className="tracking-tight text-sm font-semibold">IP</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-medium tracking-tight text-neutral-100">industrial program</span>
<span className="text-xs font-normal text-neutral-500">affiliate layer for print &amp; packaging</span>
</div>
</div>

<div className="flex items-center gap-2 text-xs font-medium">
<button className="relative group inline-flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/60 px-3 py-1.5 text-neutral-100 transition-colors">
<span className="relative z-10">Designer side</span>
<span className="pointer-events-none absolute inset-0 rounded-full border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.35)] transition-all"></span>
</button>
<button className="relative group inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/80 px-3 py-1.5 text-neutral-400 hover:text-neutral-100 transition-colors">
<span className="relative z-10">Factory side</span>
<span className="pointer-events-none absolute inset-0 rounded-full border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.35)] transition-all"></span>
</button>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-3 text-xs text-neutral-400">
<span className="whitespace-nowrap">mediated contact only</span>
<span className="w-[1px] h-4 bg-neutral-700/70"></span>
<button className="relative group inline-flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/80 px-3 py-1.5 text-neutral-300">
<span className="iconify" data-height="14" data-icon="lucide:mail" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>contact channel</span>
<span className="pointer-events-none absolute inset-0 rounded-full border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.35)] transition-all"></span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full border border-neutral-700/80 bg-neutral-900/70 flex items-center justify-center text-[0.65rem] tracking-tight font-semibold text-neutral-100">
                DR
              </div>
</div>
</div>
</div>
</div>

<div className="relative flex-1 mx-auto max-w-6xl w-full px-4 py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8">

<div className="w-full lg:w-[32%] flex flex-col gap-4">

<div className="border border-neutral-800/80 bg-neutral-950/70 rounded-2xl overflow-hidden">
<div className="p-4 lg:p-5 space-y-3">
<p className="text-sm lg:text-base leading-relaxed text-neutral-200 tracking-tight">
                Factories focus on production. Designers send clients. Earnings follow confirmed work. Transparent. No pressure. Quiet partnership.
              </p>
</div>
<div className="border-t border-neutral-800/70 bg-neutral-950/90 px-4 lg:px-5 py-3 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-lime-300 shadow-[0_0_0_3px_rgba(198,255,0,0.25)]"></span>
<span>referrals only after confirmed delivery</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-400">
<span>no direct factory messaging</span>
</div>
</div>
</div>

<div className="border border-neutral-800/80 bg-neutral-950/80 rounded-2xl p-4 lg:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-xs font-medium text-neutral-300 tracking-tight">designer access</span>
<span className="text-[0.7rem] text-neutral-500">single step</span>
</div>
<form className="space-y-3">
<div className="space-y-1.5">
<input className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-lime-300/80 focus:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all" placeholder="name" type="text"/>
<input className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-lime-300/80 focus:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all" placeholder="email" type="email"/>
<input className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-lime-300/80 focus:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all" placeholder="portfolio link" type="text"/>
<input className="w-full bg-neutral-950/80 border border-neutral-800/80 rounded-lg px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-lime-300/80 focus:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all" placeholder="password" type="password"/>
</div>
<div className="flex items-center justify-between gap-3">
<button className="relative group inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700/80 bg-neutral-900/80 px-3.5 py-2 text-xs font-medium text-neutral-100" type="button">
<span className="relative z-10">create access</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/90 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
<span className="text-[0.7rem] text-neutral-500">auto dashboard · auto referral link · auto QR</span>
</div>
</form>
</div>

<div className="border border-neutral-800/80 bg-neutral-950/80 rounded-2xl p-4 lg:p-5 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium tracking-tight text-neutral-300">program selection</span>
<span className="text-[0.7rem] text-neutral-500">filters</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[0.7rem]">

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Country</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>any</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Production type</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>offset</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Price tier</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>mid</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Order volume</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>1–10K</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Packaging category</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>folding</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Payout %</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>&gt;5%</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Lead time</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>&lt;14d</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Finishing type</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>foil / UV</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Print option</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>CMYK / spot</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Eco compliance</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>FSC / recycled</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>

<button className="group relative flex items-center justify-between gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 text-neutral-300">
<span>Express availability</span>
<span className="flex items-center gap-1 text-neutral-500">
<span>on / off</span>
<span className="iconify" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.45)] transition-all"></span>
</button>
</div>
</div>
</div>

<div className="w-full lg:w-[38%] flex flex-col gap-4">

<div className="border border-neutral-800/80 bg-neutral-950/80 rounded-2xl overflow-hidden flex-1 flex flex-col">
<div className="px-4 lg:px-5 py-3 flex items-center justify-between text-xs text-neutral-400">
<span>available factory programs</span>
<span className="flex items-center gap-2">
<span>sorted by lead time</span>
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>designer view</span>
</span>
</div>
<div className="border-t border-neutral-800/80 divide-y divide-neutral-800/80 text-xs">

<button className="group relative w-full flex flex-col gap-2 px-4 lg:px-5 py-3 text-left bg-neutral-950/90 hover:bg-neutral-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-700/80 bg-neutral-900/90 flex items-center justify-center text-[0.7rem] tracking-tight font-semibold text-neutral-100">
                      DE
                    </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm tracking-tight text-neutral-100">Rhein Offset Packaging</span>
<span className="text-[0.7rem] text-neutral-500">Germany · EU shipping · folding cartons</span>
</div>
</div>
<div className="flex flex-col items-end gap-0.5">
<span className="text-[0.7rem] text-neutral-300">payout 7.5%</span>
<span className="text-[0.7rem] text-neutral-500">turnaround 10–14 days</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-neutral-400">
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">materials: cardboard · recycled</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">finishing: foil · UV · die-cut</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">capacity: 1K–100K+</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">eco: FSC · EU recycled</span>
</div>
<span className="pointer-events-none absolute inset-0 rounded-xl border border-lime-300/0 group-hover:border-lime-300/90 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.75)] transition-all"></span>
</button>

<button className="group relative w-full flex flex-col gap-2 px-4 lg:px-5 py-3 text-left bg-neutral-950/95 hover:bg-neutral-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-700/80 bg-neutral-900/90 flex items-center justify-center text-[0.7rem] tracking-tight font-semibold text-neutral-100">
                      PL
                    </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm tracking-tight text-neutral-100">Baltic Kraft Unit</span>
<span className="text-[0.7rem] text-neutral-500">Poland · EU + UK · mailer boxes</span>
</div>
</div>
<div className="flex flex-col items-end gap-0.5">
<span className="text-[0.7rem] text-neutral-300">payout 5–6%</span>
<span className="text-[0.7rem] text-neutral-500">turnaround 7–10 days</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-neutral-400">
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">materials: kraft · recycled</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">finishing: die-cut · lamination</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">capacity: 100–10K</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">express: limited</span>
</div>
<span className="pointer-events-none absolute inset-0 rounded-xl border border-lime-300/0 group-hover:border-lime-300/90 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.75)] transition-all"></span>
</button>

<button className="group relative w-full flex flex-col gap-2 px-4 lg:px-5 py-3 text-left bg-neutral-950/95 hover:bg-neutral-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-700/80 bg-neutral-900/90 flex items-center justify-center text-[0.7rem] tracking-tight font-semibold text-neutral-100">
                      IT
                    </div>
<div className="flex flex-col gap-0.5">
<span className="text-sm tracking-tight text-neutral-100">Milano Duplex Studio</span>
<span className="text-[0.7rem] text-neutral-500">Italy · global · rigid &amp; duplex</span>
</div>
</div>
<div className="flex flex-col items-end gap-0.5">
<span className="text-[0.7rem] text-neutral-300">payout 8–9%</span>
<span className="text-[0.7rem] text-neutral-500">turnaround 14–21 days</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-neutral-400">
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">materials: duplex · cardboard</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">finishing: foil · UV · lamination</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">category: rigid boxes</span>
<span className="rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2 py-0.5">samples: on</span>
</div>
<span className="pointer-events-none absolute inset-0 rounded-xl border border-lime-300/0 group-hover:border-lime-300/90 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.75)] transition-all"></span>
</button>
</div>
</div>

<div className="border border-neutral-800/80 bg-neutral-950/90 rounded-2xl p-3 lg:p-4 flex flex-col gap-3">
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>dielines · plates · cuts</span>
<span className="flex items-center gap-2">
<span className="w-12 h-[1px] bg-neutral-700/80"></span>
<span className="iconify text-neutral-500" data-height="14" data-icon="lucide:move-diagonal-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08)_0,_transparent_55%)] opacity-70"></div>
<div className="absolute inset-[12%] border border-neutral-500/70 border-dashed rounded-sm"></div>
<div className="absolute left-1 top-1 text-[0.6rem] text-neutral-400">flat carton</div>
</div>
<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06)_0,_transparent_60%)] opacity-80"></div>
<div className="absolute inset-[15%] border border-neutral-600/80 rounded-sm"></div>
<div className="absolute inset-[20%] border border-neutral-600/80 border-dashed"></div>
<div className="absolute left-1 top-1 text-[0.6rem] text-neutral-400">cutting die</div>
</div>
<div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08)_0,_transparent_60%)] opacity-80"></div>
<div className="absolute inset-[18%] border border-neutral-600/80 rounded-lg"></div>
<div className="absolute left-1 top-1 text-[0.6rem] text-neutral-400">offset plate</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[30%] flex flex-col gap-4">

<div className="border border-neutral-800/80 bg-neutral-950/80 rounded-2xl p-4 lg:p-5 space-y-4">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>designer dashboard</span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-lime-300 shadow-[0_0_0_3px_rgba(198,255,0,0.4)]"></span>
<span>active</span>
</span>
</div>

<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-3 space-y-1.5">
<span className="text-[0.7rem] text-neutral-500">total client referrals</span>
<span className="text-lg font-semibold tracking-tight text-neutral-50">48</span>
</div>
<div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-3 space-y-1.5">
<span className="text-[0.7rem] text-neutral-500">factory confirmations</span>
<span className="text-lg font-semibold tracking-tight text-neutral-50">29</span>
</div>
<div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-3 space-y-1.5">
<span className="text-[0.7rem] text-neutral-500">total payout earned</span>
<span className="text-lg font-semibold tracking-tight text-neutral-50">€7 420</span>
</div>
<div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-3 space-y-1.5">
<span className="text-[0.7rem] text-neutral-500">pending payout</span>
<span className="text-lg font-semibold tracking-tight text-neutral-50">€1 280</span>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>click vs confirmed</span>
<span>last 30 days</span>
</div>
<div className="relative h-20 rounded-xl border border-neutral-800/90 bg-neutral-950/90 overflow-hidden">
<div className="absolute inset-2 flex items-end gap-1">

<svg className="w-full h-full" viewbox="0 0 100 40">
<polyline fill="none" points="0,30 10,26 20,28 30,23 40,24 50,20 60,18 70,16 80,19 90,17 100,15" stroke="#262626" strokeWidth="0.4"></polyline>
<polyline fill="none" points="0,34 10,30 20,32 30,26 40,25 50,22 60,21 70,20 80,18 90,19 100,17" stroke="#C6FF00" strokeWidth="1"></polyline>
</svg>
</div>
<div className="absolute left-2 top-2 text-[0.65rem] text-neutral-500">ratio 60.4%</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>per-factory performance</span>
<span>top three</span>
</div>
<div className="space-y-1.5 text-[0.7rem] text-neutral-300">
<div className="flex items-center justify-between gap-2">
<span>Rhein Offset Packaging</span>
<span className="flex items-center gap-2 text-neutral-500">
<span>18 conf.</span>
<span className="w-16 h-[2px] bg-neutral-800 relative overflow-hidden">
<span className="absolute inset-y-0 left-0 w-3/4 bg-lime-300/80"></span>
</span>
</span>
</div>
<div className="flex items-center justify-between gap-2">
<span>Baltic Kraft Unit</span>
<span className="flex items-center gap-2 text-neutral-500">
<span>7 conf.</span>
<span className="w-16 h-[2px] bg-neutral-800 relative overflow-hidden">
<span className="absolute inset-y-0 left-0 w-2/4 bg-lime-300/60"></span>
</span>
</span>
</div>
<div className="flex items-center justify-between gap-2">
<span>Milano Duplex Studio</span>
<span className="flex items-center gap-2 text-neutral-500">
<span>4 conf.</span>
<span className="w-16 h-[2px] bg-neutral-800 relative overflow-hidden">
<span className="absolute inset-y-0 left-0 w-1/3 bg-lime-300/50"></span>
</span>
</span>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-3 pt-1">
<div className="flex flex-col gap-1 text-[0.7rem] text-neutral-400">
<span>referral link &amp; QR</span>
<span className="text-neutral-500 truncate">ip.program/designer/blk-grid-ref-932</span>
</div>
<div className="flex items-center gap-2">
<button className="relative group inline-flex items-center justify-center rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-1.5 text-[0.7rem] text-neutral-200">
<span className="iconify" data-height="14" data-icon="lucide:link" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="sr-only">export link</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
<button className="relative group inline-flex items-center justify-center rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-1.5 text-[0.7rem] text-neutral-200">
<span className="iconify" data-height="14" data-icon="lucide:qrcode" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="sr-only">export QR</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>
</div>
</div>

<div className="border border-neutral-800/80 bg-neutral-950/80 rounded-2xl p-4 lg:p-5 space-y-4">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>factory console</span>
<span className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>internal tool</span>
</span>
</div>

<button className="group relative w-full rounded-xl border border-neutral-800/90 bg-neutral-950/90 px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs text-neutral-100">
<div className="flex items-center gap-2">
<span className="iconify text-neutral-300" data-height="16" data-icon="lucide:box" data-width="16" style={{strokeWidth: '1.5'}}></span>
<div className="flex flex-col">
<span className="text-sm tracking-tight">Package Create Program</span>
<span className="text-[0.7rem] text-neutral-500">define commission presets for designers</span>
</div>
</div>
<span className="iconify text-neutral-500" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-xl border border-lime-300/0 group-hover:border-lime-300/85 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.65)] transition-all"></span>
</button>

<div className="grid grid-cols-2 gap-2 text-[0.7rem] text-neutral-300">
<button className="group relative rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 flex flex-col items-start gap-1">
<span>adjust payout %</span>
<span className="text-neutral-500">by bracket &amp; category</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/75 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
<button className="group relative rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 flex flex-col items-start gap-1">
<span>verify referral leads</span>
<span className="text-neutral-500">before production</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/75 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
<button className="group relative rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 flex flex-col items-start gap-1">
<span>confirm orders</span>
<span className="text-neutral-500">after client approval</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/75 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
<button className="group relative rounded-lg border border-neutral-800/90 bg-neutral-950/90 px-2.5 py-2 flex flex-col items-start gap-1">
<span>trigger payout status</span>
<span className="text-neutral-500">post-delivery only</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/75 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-2 text-[0.7rem] text-neutral-400">
<div className="flex items-center justify-between">
<span>active affiliate programs</span>
<span>3</span>
</div>
<div className="rounded-xl border border-neutral-800/90 bg-neutral-950/90 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-neutral-200">EU folding cartons</span>
<span className="text-neutral-500">weekly payout</span>
</div>
<div className="flex flex-wrap items-center gap-2 text-[0.65rem]">
<span className="rounded-full border border-neutral-700/80 px-2 py-0.5">capacity: 1K–100K+</span>
<span className="rounded-full border border-neutral-700/80 px-2 py-0.5">payout: 6–8%</span>
<span className="rounded-full border border-neutral-700/80 px-2 py-0.5">samples: yes</span>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-neutral-500">
<span>archive · revise · duplicate program presets</span>
<span className="iconify" data-height="14" data-icon="lucide:layers" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
<div className="pointer-events-auto border border-neutral-800/90 bg-neutral-950/95 rounded-2xl overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.7)]">
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-2/3 border-r border-neutral-800/90 p-4 md:p-5 space-y-3 text-[0.75rem] text-neutral-200">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>Package Create Program</span>
<span className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-neutral-600"></span>
<span>factory internal</span>
</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2">

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">country of production</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>Germany</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">shipping territory</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>full EU</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">materials</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>cardboard · recycled</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">finishing</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>foil · UV · die-cut</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">print &amp; packaging category</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>CMYK · spot · folding cartons</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">order capacity brackets</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>1–100 · 100–1K · 1K–10K · 10K–100K+</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-1">

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">payout percentage rules</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>by bracket</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:sliders" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">payout frequency</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>weekly · monthly · per order</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:chevron-down" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">turnaround standard</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>production + shipping</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:clock-3" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">sample availability</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>on · off</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:toggle-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>

<div className="space-y-1">
<span className="text-[0.7rem] text-neutral-500">minimum contract</span>
<button className="group relative w-full rounded-lg border border-neutral-800/90 bg-neutral-950 px-2.5 py-1.5 flex items-center justify-between">
<span>6 months</span>
<span className="iconify text-neutral-500" data-height="12" data-icon="lucide:calendar" data-width="12" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/80 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.55)] transition-all"></span>
</button>
</div>
</div>
<div className="flex items-center justify-between pt-2 text-[0.7rem] text-neutral-400">
<span>designer sees only payout, lead time, capacity, eco markers</span>
<button className="relative group inline-flex items-center gap-2 rounded-lg border border-neutral-800/90 bg-neutral-950 px-3 py-1.5 text-neutral-100">
<span>save program preset</span>
<span className="iconify" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/85 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.7)] transition-all"></span>
</button>
</div>
</div>

<div className="w-full md:w-1/3 bg-neutral-950/95 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06)_0,_transparent_60%)] opacity-90"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_0,transparent_40%,rgba(255,255,255,0.03)_60%,transparent_100%)] mix-blend-screen"></div>

<div className="relative h-full flex flex-col justify-between p-4">
<div className="relative flex-1 border border-neutral-700/70 rounded-xl bg-neutral-900/70 overflow-hidden">
<div className="absolute inset-[12%] border border-lime-300/75 rounded-[0.35rem]"></div>
<div className="absolute left-[12%] right-[12%] top-1/2 h-[1px] bg-lime-300/75"></div>
<div className="absolute top-[12%] bottom-[12%] left-1/2 w-[1px] bg-lime-300/75"></div>
<div className="absolute inset-[18%] border border-lime-300/40 border-dashed rounded-[0.35rem]"></div>
<div className="absolute left-2 top-2 text-[0.65rem] text-neutral-400">
                    program dieline
                  </div>
<div className="absolute right-2 bottom-2 text-[0.6rem] text-neutral-500">
                    neon used only for structure
                  </div>
</div>
<div className="pt-3 space-y-1 text-[0.7rem] text-neutral-400">
<p>no direct designer contact. platform mediates access only. pricing, logistics and approvals remain between factory and client.</p>
<p>designer sees confirmed payouts only, not production costs.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm pointer-events-none opacity-0">
<div className="pointer-events-auto max-w-md w-full mx-4 rounded-2xl border border-neutral-800/90 bg-neutral-950/95 p-5 space-y-4">
<p className="text-sm leading-relaxed text-neutral-100 tracking-tight">
            You will send client access. Factory will handle communication. Earnings follow confirmed delivery.
          </p>
<div className="flex items-center justify-between text-[0.75rem] text-neutral-400">
<span>no negotiation inside this interface. referral only.</span>
<div className="flex items-center gap-2">
<button className="relative group inline-flex items-center gap-1 rounded-lg border border-neutral-800/90 bg-neutral-950 px-3 py-1.5 text-neutral-200">
<span>close</span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/70 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.5)] transition-all"></span>
</button>
<button className="relative group inline-flex items-center gap-1 rounded-lg border border-neutral-800/90 bg-neutral-900 px-3 py-1.5 text-neutral-100">
<span>generate referral link</span>
<span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="pointer-events-none absolute inset-0 rounded-lg border border-lime-300/0 group-hover:border-lime-300/85 group-hover:shadow-[0_0_0_1px_rgba(198,255,0,0.7)] transition-all"></span>
</button>
</div>
</div>
</div>
</div>

<div className="z-20 border-t border-neutral-900/90 bg-neutral-950/95">
<div className="mx-auto max-w-6xl px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[0.7rem] text-neutral-500">
<span>neutral affiliate environment · no marketing layers · silent industrial ecosystem</span>
<span>cursor grid reacts subtly to scroll and proximity · no visual noise</span>
</div>
</div>
</div>
</div>



    </>
  );
}
