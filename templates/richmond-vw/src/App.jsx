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



      document.getElementById('year').textContent = new Date().getFullYear();
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.10),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.08),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_10%_10%,rgba(168,85,247,0.08),transparent)]"></div>

<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<svg aria-hidden="true" className="w-[76vw] max-w-[980px] h-auto opacity-[0.055] text-neutral-200" viewbox="0 0 512 512">
<circle cx="256" cy="256" fill="none" r="220" stroke="currentColor" strokeWidth="24"></circle>

<path d="M160 172 L256 310 L352 172" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></path>

<path d="M140 340 L190 210 L256 320 L322 210 L372 340" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></path>
</svg>
</div>
<div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[1px]"></div>
</div>
<main className="min-h-screen px-4">
<div className="mx-auto max-w-xl pt-12 pb-10">

<section className="relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/40">
<div className="absolute inset-0">
<img alt="Volkswagen showroom ambience" className="h-full w-full object-cover opacity-30" decoding="async" loading="eager" src="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="flex items-center gap-4">
<div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-sm tracking-tight font-semibold">RVW</span>
</div>
<div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Richmond VW</h1>
<p className="text-sm text-neutral-300">Your Volkswagen destination in Richmond</p>
</div>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-neutral-300">
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i>
<span>Richmond, BC</span>
</div>
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<i className="h-3.5 w-3.5" data-lucide="shield-check"></i>
<span>Official Dealer</span>
</div>
</div>
</div>
</section>

<section className="mt-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-2 sm:p-3">
<div className="p-2 sm:p-3">
<h2 className="px-2 text-lg tracking-tight font-semibold text-neutral-100">Quick links</h2>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
<div className="p-2 sm:p-3">
<div className="grid gap-3 sm:gap-3.5">

<a className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://www.richmondvw.ca" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="globe"></i>
</div>
<div>
<div className="font-medium text-neutral-100">Visit Main Site</div>
<div className="text-xs text-neutral-400">richmondvw.ca</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-400 group-hover:text-neutral-200" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://www.richmondvw.ca/special-offers" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
<i className="h-5 w-5 text-emerald-300" data-lucide="badge-percent"></i>
</div>
<div>
<div className="font-medium text-neutral-100">Special Offers</div>
<div className="text-xs text-neutral-400">Latest deals on vehicles &amp; service</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-400 group-hover:text-neutral-200" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://www.richmondvw.ca/contests" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-lg border border-indigo-400/20 bg-indigo-400/10">
<i className="h-5 w-5 text-indigo-300" data-lucide="gift"></i>
</div>
<div>
<div className="font-medium text-neutral-100">Contests &amp; Extras</div>
<div className="text-xs text-neutral-400">Sign up for giveaways and updates</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-400 group-hover:text-neutral-200" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://instagram.com/vwofrichmond" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-lg border border-pink-400/20 bg-pink-400/10">
<i className="h-5 w-5 text-pink-300" data-lucide="instagram"></i>
</div>
<div>
<div className="font-medium text-neutral-100">@vwofrichmond</div>
<div className="text-xs text-neutral-400">Follow us on Instagram</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-400 group-hover:text-neutral-200" data-lucide="arrow-up-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://youtube.com/@volkswagenofrichmond" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-lg border border-red-400/20 bg-red-400/10">
<i className="h-5 w-5 text-red-300" data-lucide="youtube"></i>
</div>
<div>
<div className="font-medium text-neutral-100">YouTube</div>
<div className="text-xs text-neutral-400">Walkthroughs, features, and more</div>
</div>
</div>
<i className="h-5 w-5 text-neutral-400 group-hover:text-neutral-200" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<footer className="mt-6">
<div className="rounded-2xl border border-neutral-800/60 bg-neutral-900/40 px-4 py-4 sm:px-6">
<div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
<div className="text-xs text-neutral-400">
                © <span id="year">2025</span> Richmond VW. All rights reserved.
              </div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 transition hover:border-neutral-600 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30" href="https://www.richmondvw.ca" rel="noopener noreferrer" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i>
<span>Open full site</span>
</a>
</div>
</div>
</div>
</footer>
</div>
</main>




    </>
  );
}
