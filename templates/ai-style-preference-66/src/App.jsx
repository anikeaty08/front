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
      
<div className="flex items-center justify-center min-h-screen">
<main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
<section className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-slate-800/80 shadow-[0_18px_60px_rgba(0,0,0,0.75)] overflow-hidden">

<div className="pointer-events-none absolute inset-x-10 -top-40 h-64 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),_transparent_60%)]"></div>
<div className="relative px-6 sm:px-8 lg:px-10 pt-7 sm:pt-9 pb-8 sm:pb-10">

<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
<div>
<p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-[0.18em]">
                  Quick preference test
                </p>
<h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
                  Which is better?
                </h1>
<p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                  Pick the version that feels more like your style. We use this
                  to fine‑tune your AI style memory.
                </p>
</div>
<div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(34,197,94,0.35)]"></span>
<span className="text-xs sm:text-sm text-slate-300 font-medium">
                  Learning from your choices
                </span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">

<button className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 sm:pb-5 text-left shadow-[0_18px_45px_rgba(15,23,42,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-transform duration-200 hover:-translate-y-1 hover:border-indigo-400/70 hover:bg-slate-950">
<div className="absolute inset-x-8 -top-5 h-28 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),_transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<div className="flex items-center justify-between mb-3 relative z-10">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
<span className="text-xs text-slate-200 font-medium">
                      Option A
                    </span>
</span>
<span className="text-[0.7rem] sm:text-xs text-slate-400 font-medium tracking-[0.16em] uppercase">
                    Recommended
                  </span>
</div>

<div className="relative mb-4 sm:mb-5 flex items-center justify-center">
<div className="h-28 sm:h-32 w-full rounded-xl bg-gradient-to-b from-slate-900 to-black border border-slate-800/90 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.6),_transparent_60%)]"></div>
<div className="relative flex flex-col items-center justify-center gap-2">

<div className="flex gap-1.5 rounded-md bg-slate-900/90 px-2 py-1 border border-slate-700/70">
<div className="h-4 w-1.5 rounded bg-indigo-400/90 shadow-[0_0_12px_rgba(129,140,248,0.8)]"></div>
<div className="h-4 w-1.5 rounded bg-indigo-300/95"></div>
<div className="h-4 w-1.5 rounded bg-indigo-400/90"></div>
<div className="h-4 w-1.5 rounded bg-indigo-300/95"></div>
<div className="h-4 w-1.5 rounded bg-indigo-400/90"></div>
</div>

<div className="h-10 sm:h-11 w-16 sm:w-18 rounded-lg bg-slate-950 border border-slate-700/80 flex items-center justify-center">
<span className="text-[0.6rem] tracking-[0.18em] text-slate-300 font-medium">
                          MEMORY
                        </span>
</div>
</div>
</div>
</div>

<div className="relative z-10 space-y-1.5">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    AI style memory
                  </h2>
<p className="text-sm sm:text-base text-slate-400">
                    Learns from your edits across sessions to predict layouts,
                    palettes, and typography you are most likely to approve.
                  </p>
</div>

<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-400 relative z-10">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 border border-slate-800">
<i className="lucide lucide-brain w-3.5 h-3.5 text-indigo-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-[0.7rem] sm:text-xs">Adaptive</span>
</span>
<span className="hidden sm:inline text-[0.7rem] sm:text-xs">
                      92% match after 6 choices
                    </span>
</div>
<span className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Real‑time
                  </span>
</div>
</button>

<button className="group relative flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/60 px-4 sm:px-5 pt-4 sm:pt-5 pb-4 sm:pb-5 text-left transition-transform duration-200 hover:-translate-y-1 hover:border-indigo-400/60 hover:bg-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<div className="absolute inset-x-8 -top-5 h-28 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<div className="flex items-center justify-between mb-3 relative z-10">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="text-xs text-slate-200 font-medium">
                      Option B
                    </span>
</span>
<span className="text-[0.7rem] sm:text-xs text-slate-500 font-medium tracking-[0.16em] uppercase">
                    Alternate
                  </span>
</div>

<div className="relative mb-4 sm:mb-5 flex items-center justify-center">
<div className="h-28 sm:h-32 w-full rounded-xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.55),_transparent_60%)]"></div>
<div className="relative flex flex-col items-center justify-center gap-2">

<div className="flex gap-1.5 rounded-md bg-slate-900/90 px-2 py-1 border border-slate-700/70">
<div className="h-4 w-1.5 rounded bg-sky-400/90"></div>
<div className="h-4 w-1.5 rounded bg-sky-300/95"></div>
<div className="h-4 w-1.5 rounded bg-sky-400/90"></div>
<div className="h-4 w-1.5 rounded bg-sky-300/95"></div>
<div className="h-4 w-1.5 rounded bg-sky-400/90"></div>
</div>

<div className="h-10 sm:h-11 w-16 sm:w-18 rounded-lg bg-slate-950 border border-slate-700/80 flex items-center justify-center">
<span className="text-[0.6rem] tracking-[0.18em] text-slate-300 font-medium">
                          MEMORY
                        </span>
</div>
</div>
</div>
</div>

<div className="relative z-10 space-y-1.5">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    AI style memory
                  </h2>
<p className="text-sm sm:text-base text-slate-400">
                    Focuses on your most recent choices to react quickly to
                    shifts in taste, ideal when you experiment frequently.
                  </p>
</div>

<div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-400 relative z-10">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 border border-slate-800">
<i className="lucide lucide-sparkles w-3.5 h-3.5 text-sky-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-[0.7rem] sm:text-xs">Responsive</span>
</span>
<span className="hidden sm:inline text-[0.7rem] sm:text-xs">
                      Adapts in under 3 choices
                    </span>
</div>
<span className="inline-flex items-center gap-1 text-[0.7rem] sm:text-xs text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Fast shift
                  </span>
</div>
</button>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3">

<div className="flex items-center gap-3 sm:gap-4">
<button aria-label="Prefer option A" className="inline-flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-50 h-12 w-12 sm:h-12 sm:w-12 shadow-[0_18px_35px_rgba(79,70,229,0.55)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<i className="lucide lucide-thumbs-up w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</button>
<button aria-label="Prefer option B" className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400/80 hover:bg-slate-900/80 text-sky-200 h-12 w-12 sm:h-12 sm:w-12 shadow-[0_18px_30px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<i className="lucide lucide-sun-medium w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="flex-1 sm:flex-none sm:w-40">
<div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"></div>
</div>
</div>
<div className="text-xs sm:text-sm text-slate-400">
<span className="font-medium text-slate-200">4 / 6</span>
<span className="ml-1 text-slate-500">comparisons</span>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
