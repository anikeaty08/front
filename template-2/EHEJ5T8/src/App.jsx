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
      
<main className="mx-auto max-w-[420px] sm:max-w-[560px] px-4 sm:px-6 py-6 md:py-10">
<div className="rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl overflow-hidden">

<div className="border-b border-white/10">
<div className="grid grid-cols-2">
<button className="relative w-full min-h-[44px] py-3 text-sm md:text-[15px] font-normal text-neutral-400 hover:text-neutral-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Trade
          </button>
<button className="relative w-full min-h-[44px] py-3 text-sm md:text-[15px] font-semibold tracking-tight text-emerald-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
            Strategies
            <span className="pointer-events-none absolute -bottom-px left-0 h-0.5 w-full bg-emerald-400"></span>
</button>
</div>
</div>

<div className="p-4 sm:p-5 pt-4">
<div className="grid grid-cols-6 gap-2">
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium tracking-tight text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            All
          </button>
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium text-neutral-400 bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 hover:text-neutral-200 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Bullish
          </button>
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium text-neutral-400 bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 hover:text-neutral-200 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Bearish
          </button>
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium text-neutral-400 bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 hover:text-neutral-200 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Sideways
          </button>
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium text-neutral-400 bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 hover:text-neutral-200 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Slicing bots
          </button>
<button className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs md:text-sm font-medium text-neutral-400 bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 hover:text-neutral-200 transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:bg-neutral-800/80">
            Signal bots
          </button>
</div>
</div>

<section aria-label="Strategies" className="px-4 sm:px-5 pb-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="grid-3x3" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Futures grid</h3>
<p className="hidden sm:block text-xs text-neutral-400">Automated grid strategy for futures markets.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="grid" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Spot grid</h3>
<p className="hidden sm:block text-xs text-neutral-400">Range-trading grid for spot pairs.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="repeat-2" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Futures DCA</h3>
<p className="hidden sm:block text-xs text-neutral-400">Scale into futures positions over time.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="repeat" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Spot DCA</h3>
<p className="hidden sm:block text-xs text-neutral-400">Average into spot positions automatically.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Flywheel</h3>
<p className="hidden sm:block text-xs text-neutral-400">Compound gains via cyclical execution.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="arrows-left-right" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Smart Arbitrage</h3>
<p className="hidden sm:block text-xs text-neutral-400">Capture spreads across pairs or venues.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="calendar-plus" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Recurring buy</h3>
<p className="hidden sm:block text-xs text-neutral-400">Automate periodic accumulation.</p>
</div>
</button>
<button className="group flex items-center gap-4 rounded-xl border border-white/10 bg-neutral-900/70 backdrop-blur p-4 hover:bg-neutral-800 transition active:bg-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-800/70">
<i aria-hidden="true" className="h-4 w-4 text-neutral-200" data-lucide="activity" strokeWidth="1.5"></i>
</span>
<div className="flex-1 text-left">
<h3 className="text-[15px] md:text-base font-medium tracking-tight text-neutral-200">Tradingview signal</h3>
<p className="hidden sm:block text-xs text-neutral-400">Execute from external alerts.</p>
</div>
</button>
</div>
</section>
</div>
</main>




    </>
  );
}
