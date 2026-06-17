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
      
<div className="min-h-screen flex flex-col" style={{fontFamily: '\'Inter\', system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 right-10 h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-sky-400/5 blur-3xl"></div>
</div>

<header className="w-full">
<div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-slate-950">
                M
              </span>
</div>
<span className="text-base font-medium tracking-tight text-slate-50">
              Manta Sleep
            </span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#features">
              Features
            </a>
<a className="hover:text-slate-50 transition-colors" href="#experience">
              Experience
            </a>
<a className="hover:text-slate-50 transition-colors" href="#tech">
              Technology
            </a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 hover:border-cyan-500/70 hover:bg-slate-900 transition-colors">
              Learn more
            </button>
<button className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-cyan-500/30 hover:shadow-emerald-500/30 transition-all">
              Pre-order
            </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="px-6 pt-8 pb-16 md:pt-16 md:pb-24">
<div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-100/90">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                New · Manta Sound Sleep Mask
              </div>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                  Total blackout.  
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    Immersive sound.
                  </span>
</h1>
<p className="text-base sm:text-lg font-normal text-slate-300 max-w-xl">
                  The most comfortable Bluetooth sleep mask in existence—engineered for total
                  darkness and immersive sound.
                </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-base font-semibold tracking-tight text-slate-950 hover:bg-cyan-50 transition-colors shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  Pre-order Manta Sound
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[0.65rem] font-medium text-slate-50">
                    24h
                  </span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-3 text-sm font-medium text-slate-100 hover:border-cyan-400/80 hover:text-cyan-50 transition-colors">
                  Watch how it works
                  
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
<div className="space-y-1">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Battery life
                  </p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    24 hours
                  </p>
<p className="text-xs font-normal text-slate-400">
                    At 100% volume.
                  </p>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Blackout
                  </p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    100%
                  </p>
<p className="text-xs font-normal text-slate-400">
                    darkness.
                  </p>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Comfort
                  </p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    Side-sleep ready
                  </p>
<p className="text-xs font-normal text-slate-400">
                    Ultra-thin speakers.
                  </p>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Guarantee
                  </p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                    Love it or return
                  </p>
<p className="text-xs font-normal text-slate-400">
                    Comfort, guaranteed.
                  </p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/30 via-transparent to-emerald-500/30 opacity-60 blur-3xl"></div>
<div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(15,23,42,0.9)]">
<div className="aspect-square">
<img alt="Manta Sound Sleep Mask on model with flowing sound waves" className="h-full w-full object-cover" src="https://mantasleep.com/cdn/shop/files/S2-Panel-4_1.jpg?v=1754045215&amp;width=1200"/>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="space-y-1">
<p className="text-xs font-medium text-cyan-300 uppercase tracking-wide">
                        Manta Sound
                      </p>
<p className="text-sm font-normal text-slate-100">
                        Ultra-thin Bluetooth speakers in a ventilated strap.
                      </p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-normal text-slate-200">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9A9 9 0 1 1 12 3Z"></path>
</svg>
<span>100% blackout</span>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-normal text-slate-200">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8a6 6 0 0 1 6-6"></path>
<path d="M2 16a14 14 0 0 1 14-14"></path>
<path d="M2 20a18 18 0 0 1 18-18"></path>
</svg>
<span>Immersive audio</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex relative mt-4 rounded-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-xl px-4 py-3 items-center gap-3 shadow-xl">
<svg className="h-7 w-7 text-cyan-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 1 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path>
<path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
<div className="space-y-0.5">
<p className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                    Ultra-thin speakers
                  </p>
<p className="text-sm font-normal text-slate-100">
                    Just-there audio—even for side sleepers.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-800/80 bg-slate-950/80" id="features">
<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
<div className="grid gap-10 md:grid-cols-4">

<div className="space-y-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a18.68 18.68 0 0 1-1.67 2.68"></path>
<path d="M6.61 6.61A10.43 10.43 0 0 0 2 12s3 7 10 7a10.43 10.43 0 0 0 3.39-.56"></path>
<line x1="2" x2="22" y1="2" y2="22"></line>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  100% blackout
                </h3>
<p className="text-base font-normal text-slate-300">
                  True darkness in any environment.
                </p>
</div>

<div className="space-y-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12a8 8 0 0 1 8-8"></path>
<path d="M4 12a8 8 0 0 0 8 8"></path>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  C-shaped eye cups
                </h3>
<p className="text-base font-normal text-slate-300">
                  A perfect seal without touching your eyes.
                </p>
</div>

<div className="space-y-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M19 5a7 7 0 0 1 0 14"></path>
<path d="M15 9.4a3 3 0 0 1 0 5.2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  Ultra-thin audio
                </h3>
<p className="text-base font-normal text-slate-300">
                  High-fidelity sound that disappears into your pillow.
                </p>
</div>

<div className="space-y-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.24 12.24a6 6 0 0 0-8.48-8.48L5 10.5V19h8.5z"></path>
<line x1="16" x2="2" y1="8" y2="22"></line>
<line x1="17.5" x2="9" y1="15" y2="15"></line>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50">
                  Zero eye pressure
                </h3>
<p className="text-base font-normal text-slate-300">
                  Floating design for weightless comfort.
                </p>
</div>
</div>
</div>
</section>

<section className="px-6 py-14 md:py-20 bg-slate-950/90" id="experience">
<div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center">

<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
                Built for deep, uninterrupted sleep.
              </h2>
<p className="text-base sm:text-lg font-normal text-slate-300">
                Control the two senses that matter most for sleep: sight and sound.
              </p>
<p className="text-base font-normal text-slate-300">
                C-shaped eye cups, a breathable strap and ultra-thin speakers come together
                for all-night comfort.
              </p>
<div className="grid gap-4 sm:grid-cols-2 pt-2">
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Perforated airflow
                  </p>
<p className="text-base font-normal text-slate-200">
                    Ventilated materials keep your skin cool.
                  </p>
</div>
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Silent by design
                  </p>
<p className="text-base font-normal text-slate-200">
                    No beeps or voice prompts—just sleep.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-4">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-slate-900 bg-slate-700/80"></div>
<div className="h-8 w-8 rounded-full border border-slate-900 bg-slate-700/80"></div>
<div className="h-8 w-8 rounded-full border border-slate-900 bg-slate-700/80"></div>
</div>
<p className="text-xs sm:text-sm font-normal text-slate-400">
                  Tested across thousands of real nights.
                </p>
</div>
</div>

<div className="grid gap-5">
<div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 overflow-hidden shadow-[0_0_40px_rgba(15,23,42,0.8)]">
<div className="aspect-video">
<img alt="Close-up of Manta Sound mask highlighting breathable strap and controls" className="h-full w-full object-cover" src="https://mantasleep.com/cdn/shop/files/S2-Panel-5.jpg?v=1752852877&amp;width=1200"/>
</div>
</div>
<div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 overflow-hidden">
<div className="aspect-[16/10]">
<img alt="Manta Sound mask laid flat showing C-shaped eye cups and perforated design" className="h-full w-full object-cover" src="https://mantasleep.com/cdn/shop/files/S2-Panel-7.jpg?v=1752852977&amp;width=1200"/>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 pb-16 md:pb-24 bg-gradient-to-t from-slate-950 via-slate-950/98 to-slate-950" id="tech">
<div className="mx-auto max-w-6xl space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="space-y-3">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50">
                  Engineered for all-night immersion.
                </h2>
<p className="text-base sm:text-lg font-normal text-slate-300 max-w-xl">
                  A 24-hour battery and micro-adjustable speakers keep your soundscape going
                  as long as you do.
                </p>
</div>
<div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 flex items-center gap-3 max-w-xs">

<svg className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<div className="space-y-0.5">
<p className="text-xs font-medium text-emerald-200 uppercase tracking-wide">
                    Comfort guarantee
                  </p>
<p className="text-sm font-normal text-emerald-100">
                    If it’s not your most comfortable mask, send it back.
                  </p>
</div>
</div>
</div>
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">

<div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-6 lg:p-7">
<dl className="grid gap-5 sm:grid-cols-2">
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Battery life
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Up to 24 hours
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      Even at full volume.
                    </p>
</div>
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Bluetooth
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Low-latency wireless
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      Stable connection from any device.
                    </p>
</div>
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Speaker adjustment
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Intuitive tabs
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      Fine-tune position with your eyes closed.
                    </p>
</div>
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Notifications
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Absolutely silent
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      No beeps, no voices, no wake-ups.
                    </p>
</div>
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Materials
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Perforated, breathable weave
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      Stays cool while blocking light.
                    </p>
</div>
<div className="space-y-1.5">
<dt className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Eye cups
                    </dt>
<dd className="text-base font-semibold tracking-tight text-slate-50">
                      Modular &amp; C-shaped
                    </dd>
<p className="text-xs font-normal text-slate-400">
                      Zero pressure, even with long lashes.
                    </p>
</div>
</dl>
</div>

<div className="flex flex-col justify-between rounded-3xl border border-cyan-500/50 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950/40 p-6 sm:p-7">
<div className="space-y-4">
<p className="text-xs font-medium text-cyan-300 uppercase tracking-wide">
                    Better sleep in a single night.
                  </p>
<p className="text-base sm:text-lg font-normal text-slate-100">
                    Give your brain total darkness and sound that helps you drift and stay
                    asleep.
                  </p>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-center justify-between gap-3">
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                        Early access pricing
                      </p>
<p className="text-base font-semibold tracking-tight text-slate-50">
                        $179 <span className="text-xs font-normal text-slate-400">· limited drop</span>
</p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 hover:bg-cyan-50 transition-colors">
                      Reserve your mask
                    </button>
</div>
<div className="flex items-center gap-2 text-xs font-normal text-slate-400">

<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span>
                      Risk-free trial and easy returns.
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 bg-slate-950/95">
<div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs sm:text-sm font-normal text-slate-500">
            © <span className="tabular-nums">2025</span> Manta Sleep. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-xs sm:text-sm font-normal text-slate-500">
<a className="hover:text-slate-200 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-200 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-200 transition-colors" href="#">Support</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
