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
      
<main className="mx-auto max-w-5xl px-4 sm:px-6 py-6 md:py-10">

<div className="flex items-center gap-7 border-b border-white/10">
<button className="relative pb-3 text-sm md:text-[15px] font-normal text-neutral-400 hover:text-neutral-200 transition">
          Trade
        </button>
<button className="relative pb-3 text-sm md:text-[15px] font-semibold tracking-tight text-white">
          Strategies
          <span className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-full bg-emerald-400"></span>
</button>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-white bg-white/10 border border-white/10 hover:bg-white/15 transition">All</button>
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-neutral-300 bg-transparent border border-white/10 hover:bg-white/[0.06] hover:text-white transition">Bullish</button>
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-neutral-300 bg-transparent border border-white/10 hover:bg-white/[0.06] hover:text-white transition">Bearish</button>
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-neutral-300 bg-transparent border border-white/10 hover:bg-white/[0.06] hover:text-white transition">Sideways</button>
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-neutral-300 bg-transparent border border-white/10 hover:bg-white/[0.06] hover:text-white transition">Slicing bots</button>
<button className="px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium text-neutral-300 bg-transparent border border-white/10 hover:bg-white/[0.06] hover:text-white transition">Signal bots</button>
</div>

<section aria-label="Strategies" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Futures grid</h3>
<p className="hidden sm:block text-xs text-neutral-400">Automated grid strategy for futures markets.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Spot grid</h3>
<p className="hidden sm:block text-xs text-neutral-400">Range-trading grid for spot pairs.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Futures DCA</h3>
<p className="hidden sm:block text-xs text-neutral-400">Scale into futures positions over time.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Spot DCA</h3>
<p className="hidden sm:block text-xs text-neutral-400">Average into spot positions automatically.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Flywheel</h3>
<p className="hidden sm:block text-xs text-neutral-400">Compound gains via cyclical execution.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Smart Arbitrage</h3>
<p className="hidden sm:block text-xs text-neutral-400">Capture spreads across pairs or venues.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Recurring buy</h3>
<p className="hidden sm:block text-xs text-neutral-400">Automate periodic accumulation.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 hover:bg-white/[0.06] transition focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
<i className="h-5 w-5 text-white" data-lucide="plus"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-white">Tradingview signal</h3>
<p className="hidden sm:block text-xs text-neutral-400">Execute from external alerts.</p>
</div>
</button>
</section>

<section className="mt-10">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
<img alt="Minimal mountainscape" className="h-40 w-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Build your strategy</h2>
<p className="mt-1 text-sm text-neutral-300">Pick a template and customize parameters to launch.</p>
</div>
</div>
</section>
</main>




    </>
  );
}
