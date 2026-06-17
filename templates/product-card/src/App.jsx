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
      
<main className="relative w-full max-w-5xl mx-auto">

<div className="pointer-events-none hidden xl:block absolute top-0 right-0 bottom-0 left-0">

<div className="flex gap-2 text-neutral-700 absolute top-1/4 left-4 items-center">
<div className="h-px flex-1 bg-neutral-800 translate-x-2"></div>
<div className="flex bg-neutral-900/80 w-16 h-9 rounded-xl relative shadow-[0_0_0_1px_rgba(82,82,91,0.4)] items-center justify-center">
<div className="bg-neutral-700 w-10 h-1 rounded-full"></div>
<span className="-left-1 animate-pulse bg-emerald-400 w-1 h-1 rounded-full absolute shadow-[0_0_12px_rgba(52,211,153,0.65)]"></span>
</div>
<div className="h-px bg-neutral-800 w-12"></div>
</div>

<div className="flex gap-2 text-neutral-700 absolute bottom-10 left-10 items-center">
<div className="h-px flex-1 bg-neutral-800 translate-x-2"></div>
<div className="flex bg-neutral-900/80 w-20 h-9 rounded-xl relative shadow-[0_0_0_1px_rgba(82,82,91,0.4)] items-center justify-center">
<div className="flex gap-1">
<span className="bg-neutral-700 w-2 h-1 rounded"></span>
<span className="h-1 w-2 rounded bg-neutral-700/60"></span>
<span className="h-1 w-2 rounded bg-neutral-700/40"></span>
</div>
<span className="-left-1 animate-pulse bg-emerald-400 w-1 h-1 rounded-full absolute shadow-[0_0_12px_rgba(52,211,153,0.65)]"></span>
</div>
<div className="h-px bg-neutral-800 w-16"></div>
</div>


<div className="absolute right-8 bottom-16 flex items-center gap-2 text-neutral-700">
<div className="h-px w-10 bg-neutral-800"></div>
<div className="relative h-9 w-16 rounded-xl shadow-[0_0_0_1px_rgba(82,82,91,0.4)] flex items-center justify-center bg-neutral-900/80">
<div className="h-1 w-8 rounded-full bg-neutral-700"></div>
<span className="absolute -right-1 h-1 w-1 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.65)] animate-pulse bg-emerald-400"></span>
</div>
<div className="h-px flex-1 -translate-x-2 bg-neutral-800"></div>
</div>
</div>

<section className="overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 w-full border-neutral-800 border rounded-2xl sm:rounded-3xl relative shadow-xl">


<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b via-transparent to-transparent opacity-60 from-white/5"></div>
</div>
<div className="relative space-y-6 sm:space-y-8">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 shadow-inner bg-neutral-900/90 border-neutral-800 shadow-black/40">
<span className="flex h-5 w-5 items-center justify-center rounded-full border bg-neutral-950 border-neutral-700/80">

<svg className="h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10.75 12 4l9 6.75M5 10.5V19a1 1 0 0 0 1 1h4v-4.25a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2V20h4a1 1 0 0 0 1-1v-8.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-300">
                Product vision
              </span>
</div>
<div className="flex items-center gap-2 text-neutral-300/80">

<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2 4 14h6l-1 8 9-12h-6z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs font-medium">
                Precision tuned. Effortlessly fast.
              </span>
</div>
</div>

<div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 items-start">
<div className="space-y-3 sm:space-y-4">
<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light italic tracking-tight text-neutral-100/90">
                Crafted to clear the static.
              </p>
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-50 tracking-tight">
                Signal keeps your workflow sharp.
              </h1>
</div>
<div className="max-w-md lg:ml-auto">
<p className="leading-relaxed text-sm sm:text-base md:text-lg font-normal text-neutral-300">
                Every interaction is tuned for clarity and control. Signal pairs
                measured automation with human nuance, so you move faster
                without losing the details that matter.
              </p>
</div>
</div>

<div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<article className="relative rounded-xl sm:rounded-2xl border backdrop-filter backdrop-blur-2xl px-4 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 flex flex-col justify-between overflow-hidden shadow-inner border-neutral-800 bg-neutral-950/60 shadow-black/40">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-60 from-white/10"></div>
<div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full blur-3xl bg-emerald-400/15"></div>
</div>
<div className="relative space-y-1.5">
<p className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-400">
                  Throughput
                </p>
<p className="text-xs font-medium text-neutral-500">
                  Interaction speed
                </p>
</div>
<div className="relative mt-4 sm:mt-6 space-y-1">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                  6×
                </p>
<p className="text-xs sm:text-sm font-normal text-neutral-400">
                  Faster task completion across your entire stack.
                </p>
</div>
</article>

<article className="relative rounded-xl sm:rounded-2xl border backdrop-filter backdrop-blur-2xl px-4 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 flex flex-col justify-between overflow-hidden shadow-inner border-neutral-800 bg-neutral-950/60 shadow-black/40">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-60 from-white/10"></div>
<div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full blur-3xl bg-emerald-400/18"></div>
</div>
<div className="relative space-y-1.5">
<p className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-400">
                  Focus time
                </p>
<p className="text-xs font-medium text-neutral-500">
                  Deep-work reclaimed
                </p>
</div>
<div className="relative mt-4 sm:mt-6 space-y-1">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                  4.1
                  <span className="ml-1 text-xs font-medium text-neutral-400">
                    hrs/day
                  </span>
</p>
<p className="text-xs sm:text-sm font-normal text-neutral-400">
                  Less micromanaging, more time on meaningful work.
                </p>
</div>
</article>

<article className="relative rounded-xl sm:rounded-2xl border backdrop-filter backdrop-blur-2xl px-4 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 flex flex-col justify-between overflow-hidden shadow-inner border-neutral-800 bg-neutral-950/60 shadow-black/40 sm:col-span-2 lg:col-span-1">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-60 from-white/10"></div>
<div className="absolute -bottom-12 -right-10 h-32 w-32 rounded-full blur-3xl bg-emerald-400/20"></div>
</div>
<div className="relative space-y-1.5">
<p className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-400">
                  Alignment
                </p>
<p className="text-xs font-medium text-neutral-500">
                  Voice consistency
                </p>
</div>
<div className="relative mt-4 sm:mt-6 space-y-1">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                  99%
                </p>
<p className="text-xs sm:text-sm font-normal text-neutral-400">
                  Outputs that read exactly like your best work, every time.
                </p>
</div>
</article>
</div>
</div>
</section>
</main>

    </>
  );
}
