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
      
<main className="relative">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-white/5 via-white/0 to-white/0 blur-3xl"></div>
<div className="absolute -bottom-32 right-1/3 h-64 w-[36rem] translate-x-1/2 rounded-full bg-gradient-to-l from-white/5 via-white/0 to-white/0 blur-3xl"></div>
</div>
<section className="relative mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">

<div className="flex items-center justify-between gap-6">
<div>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-white/70">Testimonials</span>
<h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              What guests are saying
            </h1>
<p className="mt-3 text-sm md:text-base text-neutral-300/80">
              Real experiences from real stays around the world.
            </p>
</div>
</div>

<div className="mt-8 border-t border-white/10"></div>

<div className="mt-8 md:mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 [-ms-overflow-style:none] [scrollbar-width:none]" style={{WebkitOverflowScrolling: 'touch'}}>

<style>
            .no-scrollbar::-webkit-scrollbar{display:none}
          </style>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">

<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Aisha" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Aisha O.</span>
<span className="text-xs text-neutral-400">Kyoto, Japan · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              The apartment was spotless and exactly as described. I loved the quiet neighborhood and the host’s local tips made all the difference.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
</svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
</svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
</svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
</svg>
<svg className="h-4.5 w-4.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
</svg>
</div>
<span className="text-xs text-neutral-400">4.8</span>
</div>
<span className="text-xs text-neutral-400">Stayed Mar 2025</span>
</div>
</article>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">
<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Marco" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Marco R.</span>
<span className="text-xs text-neutral-400">Lisbon, Portugal · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              Waking up to ocean views was unreal. Check-in was smooth and the kitchen had everything we needed for a long weekend.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
</div>
<span className="text-xs text-neutral-400">4.7</span>
</div>
<span className="text-xs text-neutral-400">Stayed Feb 2025</span>
</div>
</article>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">
<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Lina" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Lina M.</span>
<span className="text-xs text-neutral-400">Reykjavík, Iceland · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              Cozy, warm, and close to everything. The aurora views from the balcony were an absolute highlight. Would book again.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
</div>
<span className="text-xs text-neutral-400">5.0</span>
</div>
<span className="text-xs text-neutral-400">Stayed Jan 2025</span>
</div>
</article>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">
<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Daniel" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Daniel K.</span>
<span className="text-xs text-neutral-400">Cape Town, South Africa · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              Spacious loft with tons of natural light. Walking distance to cafés and the waterfront made this trip effortless.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
</div>
<span className="text-xs text-neutral-400">4.8</span>
</div>
<span className="text-xs text-neutral-400">Stayed Dec 2024</span>
</div>
</article>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">
<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Priya" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Priya S.</span>
<span className="text-xs text-neutral-400">Bali, Indonesia · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              The private pool and the jungle sounds at night were magical. Hosts were incredibly responsive and kind.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
</div>
<span className="text-xs text-neutral-400">4.9</span>
</div>
<span className="text-xs text-neutral-400">Stayed Nov 2024</span>
</div>
</article>

<article className="group relative min-w-[88%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl bg-neutral-900/60 p-6 ring-1 ring-white/10 hover:ring-white/20 hover:bg-neutral-900/80 transition duration-300">
<div className="absolute -top-3 -left-3 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h4v4H8a3 3 0 0 0-3 3v3H2v-3a5 5 0 0 1 5-5V7zm10 0h4v4h-3a3 3 0 0 0-3 3v3h-3v-3a5 5 0 0 1 5-5V7z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<img alt="Avatar - Sofia" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;h=256&amp;fit=crop&amp;crop=faces&amp;auto=format"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Sofia L.</span>
<span className="text-xs text-neutral-400">Seattle, USA · Verified stay</span>
</div>
</div>
<p className="mt-4 text-[15px] leading-7 text-neutral-200">
              The host was thoughtful and proactive. Loved the reading nook by the window and the quiet street.
            </p>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 text-amber-300">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
<svg className="h-4.5 w-4.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path></svg>
</div>
<span className="text-xs text-neutral-400">4.8</span>
</div>
<span className="text-xs text-neutral-400">Stayed Oct 2024</span>
</div>
</article>
</div>

<div className="mt-10 flex items-center justify-between">
<p className="text-xs text-neutral-400">
            All reviews are from verified guests. Some may be edited for clarity and length.
          </p>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md px-2 py-1" href="#">
            View more
            <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>
</section>
</main>

    </>
  );
}
