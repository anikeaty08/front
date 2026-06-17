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
      

<div className="pointer-events-none absolute inset-0">

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900"></div>

<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(244,63,94,0.22) 0%, rgba(244,63,94,0.00) 70%)'}}></div>
<div className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(190,18,60,0.18) 0%, rgba(190,18,60,0.00) 70%)'}}></div>

<div className="absolute inset-0 opacity-[0.18]" style="
             background-image:
               linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
             background-size: 24px 24px;
             mask-image: radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%);
             -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%);
           ">
</div>

<div className="absolute left-1/2 top-28 h-px w-[140%] -translate-x-1/2 rotate-[-7deg] bg-gradient-to-r from-transparent via-red-500/40 to-transparent motion-safe:animate-pulse"></div>
<div className="absolute left-1/2 top-60 h-px w-[140%] -translate-x-1/2 rotate-[6deg] bg-gradient-to-r from-transparent via-red-400/30 to-transparent motion-safe:animate-pulse"></div>
<div className="absolute left-1/2 top-[22rem] h-px w-[140%] -translate-x-1/2 rotate-[-2deg] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>
</div>

<main className="relative z-10">
<section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">

<div className="relative">

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10">

<img alt="Meme.energy hero banner" className="h-[42vh] w-full object-cover md:h-[54vh]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-500/15 via-transparent to-transparent mix-blend-screen"></div>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative rounded-2xl border border-white/15 bg-white/5 px-6 py-5 backdrop-blur-2xl shadow-lg shadow-black/30">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-red-500/10 to-pink-500/0 blur-xl"></div>
<div className="relative flex items-center gap-4">

<img alt="Meme.energy logo" className="h-12 w-12 md:h-16 md:w-16 object-contain" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm uppercase tracking-[0.22em] text-neutral-300">Meme.energy</span>
<span className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white/90">Crypto Meme Brand</span>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-4xl text-center">
<h1 className="mt-10 text-4xl sm:text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white">
              Feel The Meme Energy
            </h1>
</div>

<div className="flex mt-8 items-center justify-center">
<a className="group relative inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base md:text-lg font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-red-400/50 hover:bg-white/10 hover:shadow-[0_0_0_3px_rgba(244,63,94,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" href="https://x.com" rel="noopener noreferrer" target="_blank">

<span className="pointer-events-none absolute -inset-px -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 0%, rgba(244,63,94,0.20) 0%, rgba(244,63,94,0.00) 70%)'}}></span>

<svg className="opacity-90 transition-transform duration-300 group-hover:scale-110" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
</svg>
<span className="">Join Meme Energy</span>

<svg className="transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20">
<div className="absolute -inset-0.5 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" style={{background: 'radial-gradient(80% 120% at 10% 0%, rgba(244,63,94,0.14) 0%, rgba(244,63,94,0.00) 60%)'}}></div>
<div className="relative">
<div className="text-xs uppercase tracking-[0.24em] text-neutral-400">What Is Meme Energy?</div>
<p className="mt-3 text-base md:text-[15px] leading-relaxed text-neutral-200 uppercase">
                A Vibrant Crypto Community Channeling The Power Of Internet Culture.
              </p>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20">
<div className="absolute -inset-0.5 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" style={{background: 'radial-gradient(80% 120% at 50% 0%, rgba(190,18,60,0.12) 0%, rgba(190,18,60,0.00) 60%)'}}></div>
<div className="relative">
<div className="text-xs uppercase tracking-[0.24em] text-neutral-400">Why Meme Energy?</div>
<p className="mt-3 text-base md:text-[15px] leading-relaxed text-neutral-200 uppercase">
                Boost Your Digital Vibes. Join The Movement Where Fun Meets Financial Innovation.
              </p>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20">
<div className="absolute -inset-0.5 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100" style={{background: 'radial-gradient(80% 120% at 90% 0%, rgba(244,63,94,0.12) 0%, rgba(244,63,94,0.00) 60%)'}}></div>
<div className="relative">
<div className="text-xs uppercase tracking-[0.24em] text-neutral-400">How To Join?</div>
<p className="mt-3 text-base md:text-[15px] leading-relaxed text-neutral-200 uppercase">
                Hit The Button. Be Part Of The Energy On X.
              </p>
</div>
</div>
</div>

<div className="mt-16 md:mt-24 border-t border-white/10"></div>
</section>
</main>

<footer className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8">
<div className="flex items-center justify-center">
<a aria-label="Visit us on X" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/90 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60" href="https://x.com" rel="noopener noreferrer" target="_blank">

<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l16 16"></path>
<path d="M20 4L4 20"></path>
</svg>
</a>
</div>
</footer>

<div className="pointer-events-none absolute inset-0">

<div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10 motion-safe:animate-spin" style={{animationDuration: '18s'}}></div>

<div className="absolute left-[12%] top-[30%] h-2 w-2 rounded-full bg-rose-500/70 motion-safe:animate-ping"></div>
<div className="absolute right-[14%] bottom-[26%] h-2 w-2 rounded-full bg-red-400/70 motion-safe:animate-ping"></div>
</div>

    </>
  );
}
