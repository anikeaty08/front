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



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16 });

      document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    
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
      

<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(129,140,248,0.14),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(96,165,250,0.16),_transparent_55%)]"></div>
<div className="aura-background-component absolute inset-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 80%, transparent)'}}>
<div className="aura-background-component absolute inset-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div>
</div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-500/40 via-sky-500/5 to-transparent blur-3xl"></div>
</div>

<div className="relative z-10 flex-1 flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="w-full py-5 sm:py-6 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-slate-900/70 border border-slate-700/70 flex items-center justify-center shadow-sm shadow-sky-500/30 overflow-hidden pulse-soft">
<img alt="Merchadise logo" className="h-7 w-7 object-contain group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-[0.18em] text-slate-100 uppercase">MERCHADISE</span>
<span className="text-[10px] font-medium tracking-[0.22em] text-slate-400 uppercase">DONE‑FOR‑YOU STORES</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#pillars">Why it’s different</a>
<a className="text-sm font-medium text-slate-300 hover:text-slate-50 transition-colors" href="#examples">Live store feel</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-slate-50 hover:border-slate-500/80 hover:bg-slate-900/70 transition-colors">
<span className="i-lucide-play-circle text-[14px]"></span>
            2‑min product loop
          </button>
<a className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-900 shadow-sm shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors" href="#demo">
            Book a live walkthrough
            <span className="i-lucide-arrow-right text-[14px]"></span>
</a>
</div>
</header>
<div className="border-t border-slate-800/80"></div>

<main className="flex-1 py-10 sm:py-14 lg:py-16">
<section className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] gap-10 lg:gap-12 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 fade-up" data-visible="true">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]"></span>
              Fully managed merch stores
              <span className="h-3 w-px bg-slate-700 mx-1"></span>
<span className="text-slate-400">No dashboards. No inventory.</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 fade-up" data-visible="true">
                One link. <span className="text-sky-400">Your entire merch operation, done for you.</span>
</h1>
<p className="text-sm sm:text-base text-slate-200/90 max-w-md fade-up" data-visible="true">
                Merchadise designs, runs, and supports your fully branded merch store. You see the magic; we handle the work.
              </p>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 fade-up" data-visible="true">
<a className="inline-flex justify-center sm:justify-start items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors" href="#demo">
                Get a store proposal
                <span className="i-lucide-arrow-right text-[16px]"></span>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-slate-950/80 px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:border-slate-500/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors">
<span className="i-lucide-store text-[16px]"></span>
                Open a sample store
              </button>
</div>

<div className="grid grid-cols-3 gap-2 sm:gap-3 text-[11px] fade-up" data-visible="true" id="pillars">
<div className="rounded-xl border border-sky-500/40 bg-sky-500/10 px-3 py-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="i-lucide-badge-dollar-sign text-sky-300 text-[14px]"></span>
<span className="rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-sky-100 border border-sky-400/50">No inventory</span>
</div>
<p className="text-sky-50 font-medium leading-tight">On‑demand printing. You only pay per order.</p>
</div>
<div className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 px-3 py-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="i-lucide-headset text-emerald-300 text-[14px]"></span>
<span className="rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-emerald-50 border border-emerald-400/50">Fully managed</span>
</div>
<p className="text-emerald-50 font-medium leading-tight">We run the store, support, and logistics.</p>
</div>
<div className="rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-3 py-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="i-lucide-shield-check text-indigo-300 text-[14px]"></span>
<span className="rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] text-indigo-50 border border-indigo-400/50">Always on‑brand</span>
</div>
<p className="text-indigo-50 font-medium leading-tight">Your brand system baked into every product.</p>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 fade-up" data-visible="true">
<div className="flex -space-x-2">
<img alt="Customer" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Customer" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Customer" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span>Distributed teams, multi‑office orgs, and global nonprofits rely on Merchadise stores.</span>
</div>
</div>

<div className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 mt-4 lg:mt-0">

<div className="absolute -inset-8 bg-gradient-to-tr from-sky-500/30 via-violet-500/20 to-transparent blur-2xl -z-10"></div>

<div className="rounded-2xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] overflow-hidden float-slow">

<div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-800/80">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 border border-slate-700/80 overflow-hidden">
<img alt="Merchadise logo small" className="h-6 w-6 object-contain" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-tight text-slate-50">Your brand store</span>
<span className="text-[11px] text-slate-400">Operated by Merchadise</span>
</div>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-200 border border-emerald-400/60">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-medium">Live · Auto‑managed</span>
</div>
</div>

<div className="px-4 sm:px-5 py-3 flex flex-col gap-3 border-b border-slate-800/80">
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 flex-1 rounded-lg border border-slate-700/80 bg-slate-950/60 px-2.5 py-1.5">
<span className="i-lucide-search text-[14px] text-slate-400"></span>
<input className="bg-transparent text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none flex-1" disabled="" placeholder="Search your merch..." type="text"/>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-700/80 bg-slate-950/60 px-2.5 py-1.5 text-[11px] text-slate-100 opacity-80 cursor-default">
<span className="i-lucide-sliders-horizontal text-[13px]"></span>
                    Curated sets
                  </button>
</div>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-sky-500/15 text-sky-200 border border-sky-500/40">New hires</button>
<button className="px-2.5 py-1 rounded-full text-[10px] text-slate-300 bg-slate-950/80 border border-slate-700/80">Events</button>
<button className="px-2.5 py-1 rounded-full text-[10px] text-slate-300 bg-slate-950/80 border border-slate-700/80">Customers</button>
<button className="px-2.5 py-1 rounded-full text-[10px] text-slate-300 bg-slate-950/80 border border-slate-700/80">Chapters</button>
</div>
</div>

<div className="px-3.5 sm:px-4 py-4">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Branded hoodie" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-sky-200 border border-slate-700/80">Team hoodie</div>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">$48</span>
<span className="text-emerald-300 text-[10px] flex items-center gap-1">
<span className="i-lucide-zap text-[12px]"></span>On‑demand
                        </span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Branded t-shirt" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 rounded-full bg-amber-500/90 px-2 py-0.5 text-[10px] text-slate-900 border border-amber-300/80">Welcome kit</div>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">$72</span>
<span className="text-slate-300 text-[10px]">Kit · 4 items</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Bottle" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 right-2 rounded-full bg-slate-900/85 px-2 py-0.5 text-[10px] text-slate-100 border border-slate-700/80">EU &amp; US</div>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">$32</span>
<span className="text-slate-300 text-[10px]">Bottle</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Desk kit" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">$76</span>
<span className="text-slate-300 text-[10px]">Remote desk kit</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Cap" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">$24</span>
<span className="text-slate-300 text-[10px]">Cap · Events</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/60 hover:bg-slate-900/80 transition-all overflow-hidden cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Gift card" className="h-full w-full object-cover group-hover:scale-[1.05] transition-transform duration-300 blur-[1px]" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="rounded-full bg-slate-950/80 px-3 py-1.5 text-[10px] text-slate-100 border border-slate-600 flex items-center gap-1.5">
<span className="i-lucide-gift text-[12px] text-sky-300"></span>
                          Send as a gift link
                        </div>
</div>
</div>
<div className="px-2.5 py-2.5 text-[11px] space-y-1">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-50">From $25</span>
<span className="text-slate-300 text-[10px]">Store credit</span>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2.5 text-[11px]">
<div className="flex items-center gap-2">
<span className="i-lucide-shopping-bag text-[14px] text-slate-200"></span>
<div className="flex flex-col">
<span className="font-medium text-slate-50">Self‑serve for them</span>
<span className="text-slate-400 text-[10px]">Done‑for‑you ops for you.</span>
</div>
</div>
<button className="hidden sm:inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-medium text-slate-900 hover:bg-white transition-colors">
                    Preview flow
                    <span className="i-lucide-arrow-right text-[13px]"></span>
</button>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-1 sm:-left-6 w-48 rounded-xl border border-slate-700/90 bg-slate-950/95 backdrop-blur-md shadow-lg shadow-sky-900/40 px-3 py-3 text-[11px] float-medium">
<div className="flex items-center justify-between mb-1">
<span className="text-slate-200">Ops time saved</span>
<span className="i-lucide-trending-up text-[14px] text-emerald-300"></span>
</div>
<div className="text-2xl font-semibold text-slate-50 tracking-tight">–92%</div>
<p className="mt-1 text-[10px] text-slate-400">After switching from manual swag management.</p>
</div>
<div className="absolute -top-4 -right-2 sm:-right-6 w-48 rounded-xl border border-sky-500/40 bg-sky-500/10 backdrop-blur-md shadow-lg shadow-sky-900/40 px-3 py-3 text-[11px] float-fast">
<div className="flex items-center justify-between mb-1">
<span className="text-slate-100 flex items-center gap-1">
<span className="i-lucide-sparkles text-[13px] text-sky-300"></span>
                  Automations
                </span>
</div>
<ul className="space-y-1 text-[10px] text-sky-50/90">
<li className="flex items-center gap-1.5">
<span className="i-lucide-check text-[11px] text-emerald-300"></span>
                  New‑hire kits trigger automatically
                </li>
<li className="flex items-center gap-1.5">
<span className="i-lucide-check text-[11px] text-emerald-300"></span>
                  Region‑aware printing &amp; shipping
                </li>
</ul>
</div>
</div>
</section>

<section className="mt-16 lg:mt-20 border-t border-slate-800/80 pt-10 sm:pt-12" id="how-it-works">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                From brand file to live store in days
              </h2>
<p className="mt-2 text-sm text-slate-400 max-w-lg">
                A three‑step setup that feels like magic. You hand us your brand; we return a fully working merch engine.
              </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-slate-800 px-3 py-1.5 text-[11px] text-slate-300">
<span className="i-lucide-clock-4 text-[14px] text-sky-300"></span>
              Launch window:
              <span className="font-semibold text-slate-50">~2 weeks</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 text-sm">

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/85 px-4 py-4 sm:px-5 sm:py-5 fade-up" data-visible="false">
<div className="flex items-center justify-between mb-4 text-xs">
<div className="flex items-center gap-2">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-[12px] text-sky-200 border border-sky-500/40">1</span>
<span className="font-medium text-slate-100">Share your brand</span>
</div>
</div>
<div className="relative h-32 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
<div className="absolute inset-x-6 inset-y-4 border border-dashed border-slate-700/80 rounded-lg flex items-center justify-center">
<div className="flex flex-col items-center text-[11px] text-slate-300 gap-1.5">
<span className="i-lucide-upload-cloud text-[18px] text-sky-300"></span>
<span>Drop logo, colors, fonts</span>
</div>
</div>
<div className="absolute -right-5 -bottom-3 rounded-xl bg-sky-500/10 border border-sky-500/50 px-3 py-2 text-[10px] text-sky-50 flex items-center gap-2">
<span className="i-lucide-shield-check text-[13px] text-sky-300"></span>
                  Brand locked in once
                </div>
</div>
<p className="mt-3 text-[12px] text-slate-400">
                Send your brand kit and who you’re serving (employees, customers, chapters). We translate it into a store system.
              </p>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/85 px-4 py-4 sm:px-5 sm:py-5 fade-up" data-visible="false">
<div className="flex items-center justify-between mb-4 text-xs">
<div className="flex items-center gap-2">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-[12px] text-sky-200 border border-sky-500/40">2</span>
<span className="font-medium text-slate-100">We build the store</span>
</div>
</div>
<div className="relative h-32 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 overflow-hidden">
<div className="absolute inset-3 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80"></div>
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80"></div>
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80"></div>
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80"></div>
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80"></div>
<div className="rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center">
<span className="i-lucide-sparkles text-sky-300 text-[16px]"></span>
</div>
</div>
<div className="absolute left-3 bottom-3 rounded-full bg-emerald-500/10 border border-emerald-400/60 px-2.5 py-1 text-[10px] text-emerald-50 flex items-center gap-1.5">
<span className="i-lucide-wrench text-[12px]"></span>
                  Products, payments, tax · handled
                </div>
</div>
<p className="mt-3 text-[12px] text-slate-400">
                We curate products, set up printing and logistics across regions, and return a review‑ready store.
              </p>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/85 px-4 py-4 sm:px-5 sm:py-5 fade-up" data-visible="false">
<div className="flex items-center justify-between mb-4 text-xs">
<div className="flex items-center gap-2">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-[12px] text-sky-200 border border-sky-500/40">3</span>
<span className="font-medium text-slate-100">You share one link</span>
</div>
</div>
<div className="relative h-32 rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 overflow-hidden">
<div className="absolute inset-4 flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] text-slate-200">
<span className="i-lucide-link-2 text-[14px] text-sky-300"></span>
<span>store.yourbrand.com</span>
</div>
<div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
<div className="rounded-lg bg-slate-900/85 border border-slate-700/80 px-2 py-1.5 flex items-center gap-1.5">
<span className="i-lucide-users text-[13px] text-sky-300"></span>
                      Employees
                    </div>
<div className="rounded-lg bg-slate-900/85 border border-slate-700/80 px-2 py-1.5 flex items-center gap-1.5">
<span className="i-lucide-heart-handshake text-[13px] text-sky-300"></span>
                      Customers
                    </div>
<div className="rounded-lg bg-slate-900/85 border border-slate-700/80 px-2 py-1.5 flex items-center gap-1.5">
<span className="i-lucide-globe-2 text-[13px] text-sky-300"></span>
                      Chapters
                    </div>
</div>
</div>
<div className="absolute right-3 top-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[10px] text-slate-200 border border-slate-700/80 flex items-center gap-1.5">
<span className="i-lucide-bot text-[12px] text-emerald-300"></span>
                  We run the rest
                </div>
</div>
<p className="mt-3 text-[12px] text-slate-400">
                Teams order what they need. We handle printing, shipping, support, and seasonal refreshes.
              </p>
</div>
</div>
</section>

<section className="mt-16 lg:mt-20 border-t border-slate-800/80 pt-10 sm:pt-12" id="examples">
<div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-end">
<div className="flex-1">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                What a done‑for‑you merch store feels like
              </h2>
<p className="mt-2 text-sm text-slate-400 max-w-lg">
                Explore the experience from the eyes of your team: effortless ordering, zero admin.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
<div className="flex items-center gap-1">
<span className="i-lucide-box-seam text-[14px] text-sky-300"></span>
<span>No stock rooms</span>
</div>
<span className="h-3 w-px bg-slate-700"></span>
<div className="flex items-center gap-1">
<span className="i-lucide-globe-2 text-[14px] text-sky-300"></span>
<span>Global shipping</span>
</div>
<span className="hidden sm:inline h-3 w-px bg-slate-700"></span>
<div className="hidden sm:flex items-center gap-1">
<span className="i-lucide-badge-check text-[14px] text-sky-300"></span>
<span>Brand‑locked templates</span>
</div>
</div>
</div>
<div className="grid lg:grid-cols-[1.15fr_0.9fr] gap-6 lg:gap-8 items-start">

<div className="sm:p-5 bg-slate-950/80 border-slate-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="grid md:grid-cols-3 gap-3 sm:gap-4">

<div className="md:col-span-2 rounded-xl overflow-hidden relative group">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/0 to-transparent"></div>
<img alt="Team wearing branded merch" className="group-hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px]">
<div className="text-slate-100">
<div className="font-medium">Distributed team, one store</div>
<div className="text-slate-300">Everyone orders locally. You never pack a box.</div>
</div>
<div className="hidden sm:flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 border border-slate-700/80 text-slate-300">
<span className="i-lucide-cursor-click text-[13px]"></span>
                      Self‑serve ordering
                    </div>
</div>
</div>

<div className="space-y-3 sm:space-y-4">

<div className="text-[11px] bg-slate-950/80 border-slate-800 border rounded-xl pt-3 pr-3 pb-3 pl-3 space-y-2">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-100">No inventory risk</span>
<span className="i-lucide-badge-dollar-sign text-[14px] text-sky-300"></span>
</div>
<p className="text-slate-400">
                      Products are printed when ordered. No more guessing sizes or storing boxes.
                    </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-100">Fully managed service</span>
<span className="i-lucide-headset text-[14px] text-sky-300"></span>
</div>
<p className="text-slate-400">
                      Our team runs operations, support, returns, and updates behind the scenes.
                    </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="font-medium text-slate-100">Always on‑brand</span>
<span className="i-lucide-shield-check text-[14px] text-sky-300"></span>
</div>
<p className="text-slate-400">
                      Guardrails ensure every product stays aligned with your brand system.
                    </p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 flex flex-col justify-between space-y-4">
<div className="flex items-center gap-3">
<img alt="Customer headshot" className="h-10 w-10 rounded-full object-cover border border-slate-800" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<div className="text-sm font-medium text-slate-100">Alex Rivera</div>
<div className="text-[11px] text-slate-400">
                    People Ops · 350+ employees · 7 locations
                  </div>
</div>
</div>
<blockquote className="text-sm text-slate-200 leading-relaxed">
                “We went from spreadsheets and swag closets to a single link. Our teams still get great merch—my team just doesn’t run a merch business anymore.”
              </blockquote>
<div className="flex flex-wrap items-center gap-3 text-[11px]">
<div className="flex items-center gap-1.5 text-emerald-300">
<span className="i-lucide-arrow-down-right text-[13px]"></span>
<span>~90% less ops time</span>
</div>
<span className="h-3 w-px bg-slate-700"></span>
<div className="flex items-center gap-1.5 text-slate-400">
<span className="i-lucide-users text-[13px] text-sky-300"></span>
<span>Global team · 18 countries</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 lg:mt-20 border-t border-slate-800/80 pt-10 sm:pt-12" id="faqs">
<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10">

<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Common questions, quick answers
              </h2>
<p className="mt-2 text-sm text-slate-400 max-w-xl">
                A few things people ask before they hand us their merch.
              </p>
<div className="mt-5 space-y-3 text-sm">
<details className="group rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 open:border-sky-500/40">
<summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-slate-100">
<span className="font-medium text-[13px]">Do we buy inventory upfront?</span>
<span className="i-lucide-chevron-down text-[16px] text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="mt-2.5 text-[13px] text-slate-400">
                    No. Stores are fully on‑demand. You only pay when items are ordered.
                  </p>
</details>
<details className="group rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-slate-100">
<span className="font-medium text-[13px]">Who handles support &amp; logistics?</span>
<span className="i-lucide-chevron-down text-[16px] text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="mt-2.5 text-[13px] text-slate-400">
                    We do—printing, shipping, tracking, returns, and “Where’s my order?” questions.
                  </p>
</details>
<details className="group rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3">
<summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-slate-100">
<span className="font-medium text-[13px]">How flexible is payment?</span>
<span className="i-lucide-chevron-down text-[16px] text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="mt-2.5 text-[13px] text-slate-400">
                    Company‑pay, personal‑pay, stipends, and codes are all supported.
                  </p>
</details>
</div>
</div>

<div className="rounded-2xl border border-sky-500/40 bg-slate-950/90 backdrop-blur-md p-4 sm:p-5" id="demo">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  Get a tailored store proposal
                </h3>
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-1 text-[10px] text-sky-200 border border-sky-500/40">
<span className="i-lucide-sparkles text-[13px]"></span>
<span>Free &amp; no commitment</span>
</span>
</div>
<p className="text-[13px] text-slate-300 mb-4">
                Share a few details and we’ll reply with a product mix, visuals, and pricing ranges.
              </p>
<form className="space-y-3 text-[13px]">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">Work email</label>
<input className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">Company</label>
<input className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="Your company name" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">Team size</label>
<select className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[13px] text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70">
<option className="bg-slate-950">1–25</option>
<option className="bg-slate-950">26–100</option>
<option className="bg-slate-950">101–500</option>
<option className="bg-slate-950">501–2,000</option>
<option className="bg-slate-950">2,000+</option>
</select>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">Primary use</label>
<select className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[13px] text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70">
<option className="bg-slate-950">Employee swag / new hires</option>
<option className="bg-slate-950">Customer / partner gifting</option>
<option className="bg-slate-950">Events / conferences</option>
<option className="bg-slate-950">Nonprofit fundraising</option>
<option className="bg-slate-950">Other</option>
</select>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">What are you hoping to replace?</label>
<textarea className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70" placeholder="e.g. Swag closets, manual bulk orders, multiple vendors..." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-colors w-full sm:w-auto" type="submit">
                    Send my proposal
                    <span className="i-lucide-send text-[16px]"></span>
</button>
<p className="text-[11px] text-slate-400">
                    Expect a reply within 1–2 business days with a visual concept.
                  </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 py-6 mt-10 text-[11px] text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold tracking-[0.18em] text-slate-300 uppercase">Merchadise</span>
<span className="h-3 w-px bg-slate-700"></span>
<span>Premium, fully managed merch stores for modern teams.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
</div>
</footer>
</div>



    </>
  );
}
