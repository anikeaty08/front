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
      
<main>
<section className="relative overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute -top-32 -right-20 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-amber-400/30 via-fuchsia-500/20 to-cyan-400/20"></div>
<img alt="" className="absolute inset-y-0 right-[-10%] my-auto h-[80%] object-cover opacity-[0.12] mix-blend-screen pointer-events-none select-none rounded-3xl" src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">

<div className="flex items-center gap-2 text-amber-400">
<i className="h-4 w-4 stroke-[2.5]" data-lucide="star"></i>
<i className="h-4 w-4 stroke-[2.5]" data-lucide="star"></i>
<i className="h-4 w-4 stroke-[2.5]" data-lucide="star"></i>
<i className="h-4 w-4 stroke-[2.5]" data-lucide="star"></i>
<i className="h-4 w-4 stroke-[2.5]" data-lucide="star"></i>
<span className="sr-only">5 out of 5</span>
</div>

<div className="mt-4">
<h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-white">
              Is this for you?
            </h2>
<p className="mt-4 text-base md:text-lg text-neutral-300/90 max-w-2xl">
              This course is built for customer-facing tourism businesses who want to streamline ops, ship better content, and unlock growth.
            </p>
</div>

<div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

<a className="group relative rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 focus:ring-white/25 focus:outline-none transition-all p-5 md:p-6 flex items-start gap-4" href="#">
<div className="shrink-0 h-10 w-10 rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/30 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="map-pinned"></i>
</div>
<div>
<h3 className="text-lg md:text-xl tracking-tight font-semibold text-white leading-snug">
                  Tour &amp; experience operators
                </h3>
<p className="mt-1.5 text-sm text-neutral-400">
                  Increase bookings and reduce manual admin.
                </p>
</div>
<i className="absolute right-5 top-5 h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</a>

<a className="group relative rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 focus:ring-white/25 focus:outline-none transition-all p-5 md:p-6 flex items-start gap-4" href="#">
<div className="shrink-0 h-10 w-10 rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/30 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-lg md:text-xl tracking-tight font-semibold text-white leading-snug">
                  Boutique accommodation providers
                </h3>
<p className="mt-1.5 text-sm text-neutral-400">
                  Automate guest comms and boost upsells.
                </p>
</div>
<i className="absolute right-5 top-5 h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</a>

<a className="group relative rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 focus:ring-white/25 focus:outline-none transition-all p-5 md:p-6 flex items-start gap-4" href="#">
<div className="shrink-0 h-10 w-10 rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/30 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="landmark"></i>
</div>
<div>
<h3 className="text-lg md:text-xl tracking-tight font-semibold text-white leading-snug">
                  Regional attractions &amp; visitor services
                </h3>
<p className="mt-1.5 text-sm text-neutral-400">
                  Coordinate partners and centralize content.
                </p>
</div>
<i className="absolute right-5 top-5 h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</a>

<a className="group relative rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 focus:ring-white/25 focus:outline-none transition-all p-5 md:p-6 flex items-start gap-4" href="#">
<div className="shrink-0 h-10 w-10 rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/30 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<div>
<h3 className="text-lg md:text-xl tracking-tight font-semibold text-white leading-snug">
                  Farm stays, food tours, retreats, eco‑tourism
                </h3>
<p className="mt-1.5 text-sm text-neutral-400">
                  Tell your story and fill shoulder seasons.
                </p>
</div>
<i className="absolute right-5 top-5 h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</a>
</div>

<div className="mt-10 md:mt-12">
<h4 className="text-base md:text-lg font-medium text-neutral-300">
              Whether you’re solo or a small team, this course will help you:
            </h4>
<ul className="mt-5 grid gap-3 sm:gap-3.5">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/30 text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
<span className="text-[15px] md:text-base text-neutral-200">Reduce repetitive admin</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/30 text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
<span className="text-[15px] md:text-base text-neutral-200">Create compelling content without the stress</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/30 text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
<span className="text-[15px] md:text-base text-neutral-200">Identify growth opportunities hidden in plain sight</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/30 text-amber-300">
<i className="h-3.5 w-3.5" data-lucide="check"></i>
</span>
<span className="text-[15px] md:text-base text-neutral-200">Reclaim time—for your guests, your business, and yourself</span>
</li>
</ul>
</div>
</div>
</section>
</main>




    </>
  );
}
