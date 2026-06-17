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



      document.getElementById("year").textContent = new Date().getFullYear();
      window.addEventListener("DOMContentLoaded", () => {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
        }
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
      
<div className="relative min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-fuchsia-500/20 blur-3xl rounded-full mix-blend-screen"></div>
<div className="absolute top-40 -left-40 w-[28rem] h-[28rem] bg-sky-500/20 blur-3xl rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-emerald-400/15 blur-3xl rounded-full mix-blend-screen"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)] opacity-80"></div>

<div className="absolute inset-0 opacity-20 md:opacity-30 mix-blend-soft-light">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full border border-slate-700/20"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full border border-slate-700/15"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] rounded-full border border-slate-700/10"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] rounded-full border border-slate-700/5"></div>

<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-slate-500/15 to-transparent"></div>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.3),_transparent_60%),repeating-linear-gradient(to_right,rgba(148,163,184,0.08),rgba(148,163,184,0.08)_1px,transparent_1px,transparent_32px),repeating-linear-gradient(to_top,rgba(148,163,184,0.06),rgba(148,163,184,0.06)_1px,transparent_1px,transparent_32px)] opacity-40"></div>
</div>
</div>

<header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 py-4">

<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-emerald-400 flex items-center justify-center ring-2 ring-slate-900/80 shadow-lg shadow-fuchsia-500/30">
<span className="text-xs font-medium tracking-[0.16em] uppercase text-slate-950">
                PB
              </span>
</div>
<div className="flex flex-col">
<span className="text-lg tracking-tight font-medium text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                Patrick Bernard
              </span>
<span className="text-sm text-slate-400">
                Sacred Ambient • Mantra Yoga
              </span>
</div>
</a>

<nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#music">Music</a>
<a className="hover:text-slate-50 transition-colors" href="#about">About</a>
<a className="hover:text-slate-50 transition-colors" href="#concerts">Concerts</a>
<a className="hover:text-slate-50 transition-colors" href="#media">Videos</a>
<a className="hover:text-slate-50 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<span>EN</span>
<span className="text-slate-500">/</span>
<span className="text-slate-400">FR</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-950 shadow-sm shadow-slate-50/30 hover:bg-slate-200 transition-colors" href="#music">
<span>Listen &amp; Shop</span>
<svg className="h-4 w-4" data-lucide="headphones" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative border-b border-slate-800/70 bg-gradient-to-b from-slate-950/60 to-slate-950/90">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 opacity-30">

<div className="hidden lg:block absolute top-1/2 right-[12%] -translate-y-1/2 w-[26rem] h-[26rem] rounded-full border border-fuchsia-300/10"></div>
<div className="hidden lg:block absolute top-1/2 right-[12%] -translate-y-1/2 w-[20rem] h-[20rem] rounded-full border border-sky-300/8"></div>
<div className="hidden lg:block absolute top-1/2 right-[12%] -translate-y-1/2 w-[14rem] h-[14rem] rounded-full border border-emerald-300/8"></div>

<div className="absolute top-14 left-[10%] w-16 h-16 border border-slate-500/10 rotate-45 rounded-xl"></div>
<div className="absolute top-24 left-[16%] w-10 h-10 border border-slate-500/8 -rotate-12 rounded-full"></div>

<div className="absolute -top-10 right-12 w-40 h-40 rounded-full border border-slate-400/5"></div>
<div className="absolute -top-4 right-20 w-28 h-28 rounded-full border border-slate-400/7"></div>
</div>
<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">

<div className="space-y-8">
<p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-slate-950/60 px-3 py-1 text-xs text-fuchsia-100/90">
<span className="flex h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_0_4px_rgba(244,114,182,0.4)]"></span>
<span>New album available now</span>
</p>
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  Devotion in
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-sky-300 to-emerald-200">Sound</span>
</h1>
<p className="text-base sm:text-lg text-slate-200/90 max-w-xl">
                  Ethereal mantras, celestial choirs and meditative soundscapes
                  crafted to guide you inward. Immerse yourself in the
                  spiritual, cosmic music of Patrick Bernard.
                </p>
</div>

<div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-200">
<a className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 px-4 py-2.5 text-xs font-medium text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:bg-fuchsia-400 transition-colors" href="#music">
<svg className="h-4 w-4" data-lucide="play" strokeWidth="1.5"></svg>
<span>Play latest album</span>
</a>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-3.5 py-2 text-xs text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-4 w-4" data-lucide="shopping-bag" strokeWidth="1.5"></svg>
<span>Buy CDs &amp; downloads</span>
</button>
<div className="flex items-center gap-3 text-xs text-slate-400">
<div className="flex -space-x-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-[0.6rem]">
                      ॐ
                    </span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-[0.6rem]">
                      ☸
                    </span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-[0.6rem]">
                      ✶
                    </span>
</div>
<span>Over 30 years of contemplative music</span>
</div>
</div>
</div>

<div className="relative rounded-3xl border border-slate-800/70 bg-slate-900/60 p-4 sm:p-5 lg:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.85)] backdrop-blur-xl">
<div className="absolute -top-6 -right-4 rounded-full bg-emerald-400/90 px-3 py-1 text-[0.65rem] font-medium text-slate-950 shadow-lg shadow-emerald-400/40 uppercase tracking-[0.18em]">
                New
              </div>
<div className="space-y-4">
<div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400 relative">

<div className="pointer-events-none absolute inset-5 rounded-full border border-slate-50/10"></div>
<div className="pointer-events-none absolute inset-10 rounded-full border border-slate-50/15"></div>
<div className="pointer-events-none absolute inset-1/4 border border-slate-50/10 rounded-[9999px] rotate-45"></div>
<div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.3),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(248,250,252,0.2),transparent_55%)] flex items-center justify-center">
<div className="mx-auto max-w-[70%] text-center space-y-3 text-slate-50">
<p className="text-xs tracking-[0.2em] uppercase text-slate-100/90">
                        Sacred Lounge
                      </p>
<p className="text-xl sm:text-2xl tracking-tight font-medium" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                        New Devotion
                      </p>
<p className="text-xs text-slate-100/90">
                        Mantra Yoga • Ambient Choirs • Celestial Atmospheres
                      </p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                        Featured album
                      </p>
<p className="text-sm font-medium text-slate-50">
                        New Devotion – Mantra Yoga Lounge
                      </p>
</div>
<span className="rounded-full bg-slate-900/90 px-3 py-1 text-[0.7rem] text-slate-200 border border-slate-700/80">
                      64 min
                    </span>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3 min-w-0">
<button aria-label="Play preview" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/90 text-slate-950 hover:bg-fuchsia-400 transition-colors shadow-md shadow-fuchsia-500/40" type="button">
<svg className="h-4 w-4 translate-x-[1px]" data-lucide="play" strokeWidth="1.5"></svg>
</button>
<div className="min-w-0">
<p className="text-xs font-medium text-slate-50 truncate">
                            Divine Grace Divine
                          </p>
<p className="text-[0.7rem] text-slate-400">
                            Track 01 • 12:34
                          </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="download" strokeWidth="1.5"></svg>
<span>Buy</span>
</button>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between text-[0.65rem] text-slate-400">
<span>02:31</span>
<span>12:34</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/5 rounded-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300"></div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/70 mt-2 pt-3">
<p className="text-[0.7rem] text-slate-400 mr-1">
                      Also available on
                    </p>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3 py-1 text-[0.7rem] text-slate-200 border border-slate-700 hover:border-sky-400/80 hover:text-sky-100 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="music" strokeWidth="1.5"></svg>
<span>Streaming</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-3 py-1 text-[0.7rem] text-slate-200 border border-slate-700 hover:border-emerald-400/80 hover:text-emerald-100 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="disc-3" strokeWidth="1.5"></svg>
<span>CD &amp; Vinyl</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70 bg-slate-950/70" id="music">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  Discography
                </h2>
<p className="text-base text-slate-300 max-w-xl">
                  Explore albums dedicated to devotion, meditation and sacred
                  travel. Purchase high‑resolution downloads or physical
                  editions.
                </p>
</div>
<div className="flex flex-wrap gap-3 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-fuchsia-400/80 hover:text-fuchsia-100 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="sparkles" strokeWidth="1.5"></svg>
<span>Devotional</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-sky-400/80 hover:text-sky-100 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="waves" strokeWidth="1.5"></svg>
<span>Meditative</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-emerald-400/80 hover:text-emerald-100 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="compass" strokeWidth="1.5"></svg>
<span>World</span>
</button>
</div>
</div>
<div aria-label="Albums" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 flex flex-col gap-3 hover:border-fuchsia-400/60 hover:bg-slate-900/80 transition-colors">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-sky-400">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(248,250,252,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(15,23,42,0.8),transparent_65%)]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base sm:text-lg tracking-[0.2em] uppercase text-slate-50/90 text-center">
                      New<br/>Devotion
                    </span>
</div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-slate-50">
                    New Devotion
                  </h3>
<p className="text-xs text-slate-400">
                    Mantra yoga lounge with layered choirs and subtle
                    electronics for deep practice.
                  </p>
</div>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="h-3.5 w-3.5" data-lucide="clock-4" strokeWidth="1.5"></svg>
<span>64 min</span>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/90 px-3 py-1.5 text-slate-950 font-medium hover:bg-fuchsia-400 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="play" strokeWidth="1.5"></svg>
<span>Preview</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="shopping-cart" strokeWidth="1.5"></svg>
<span>$12</span>
</button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 flex flex-col gap-3 hover:border-sky-400/60 hover:bg-slate-900/80 transition-colors">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(248,250,252,0.35),transparent_65%)]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base sm:text-lg tracking-[0.2em] uppercase text-slate-50/90 text-center">
                      Terra<br/>Voyage
                    </span>
</div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-slate-50">
                    Terra Voyage
                  </h3>
<p className="text-xs text-slate-400">
                    A contemplative journey through celestial landscapes and
                    earthly temples.
                  </p>
</div>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="h-3.5 w-3.5" data-lucide="clock-4" strokeWidth="1.5"></svg>
<span>58 min</span>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/90 px-3 py-1.5 text-slate-950 font-medium hover:bg-sky-400 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="play" strokeWidth="1.5"></svg>
<span>Preview</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="shopping-cart" strokeWidth="1.5"></svg>
<span>$12</span>
</button>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 flex flex-col gap-3 hover:border-emerald-400/60 hover:bg-slate-900/80 transition-colors">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-tr from-emerald-400 via-lime-300 to-sky-400">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.3),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(248,250,252,0.3),transparent_65%)]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-base sm:text-lg tracking-[0.2em] uppercase text-slate-50/90 text-center">
                      Sacred<br/>Retreats
                    </span>
</div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-slate-50">
                    Sacred Retreats
                  </h3>
<p className="text-xs text-slate-400">
                    Quiet, spacious pieces for yoga, massage and devotional
                    ceremonies.
                  </p>
</div>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="h-3.5 w-3.5" data-lucide="clock-4" strokeWidth="1.5"></svg>
<span>72 min</span>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/90 px-3 py-1.5 text-slate-950 font-medium hover:bg-emerald-300 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="play" strokeWidth="1.5"></svg>
<span>Preview</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="shopping-cart" strokeWidth="1.5"></svg>
<span>$12</span>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-800/70 bg-gradient-to-b from-slate-950/70 to-slate-950" id="about">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">

<div className="space-y-6">
<div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 flex items-end justify-center">

<div className="w-full h-full flex items-center justify-center text-center text-slate-500 text-sm">
                    Artist portrait photography
                  </div>
</div>
<div className="mt-4 space-y-3">
<p className="text-sm text-slate-100 tracking-tight" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                    “Music is a temple of vibration. Each note is a step towards
                    the heart.”
                  </p>
<p className="text-xs text-slate-400">
                    Patrick Bernard is a composer and vocalist dedicated to
                    bringing sacred mantras and contemplative soundscapes to a
                    global audience.
                  </p>
</div>
</div>
</div>

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  About Patrick
                </h2>
<p className="text-base text-slate-300">
                  Blending devotional chants, world instruments and cinematic
                  atmospheres, Patrick’s music is designed for meditation, yoga,
                  healing work and quiet listening. Inspired by ancient
                  traditions yet produced with modern clarity, his albums have
                  accompanied retreats and spiritual gatherings around the
                  world.
                </p>
</div>
<div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-200">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-2">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-sky-300" data-lucide="globe-2" strokeWidth="1.5"></svg>
<p className="font-medium text-slate-50">Global reach</p>
</div>
<p className="text-slate-400">
                    Albums used in yoga studios, temples and healing centers in
                    more than 30 countries.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-2">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" data-lucide="meditation" strokeWidth="1.5"></svg>
<p className="font-medium text-slate-50">
                      Meditative focus
                    </p>
</div>
<p className="text-slate-400">
                    Compositions built around breath, mantra repetition and
                    subtle harmonic movement.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-2">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-fuchsia-300" data-lucide="sparkles" strokeWidth="1.5"></svg>
<p className="font-medium text-slate-50">Cosmic sound</p>
</div>
<p className="text-slate-400">
                    Layered choirs, drones and ambient textures that evoke a
                    sense of timeless space.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs">
<a className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3.5 py-2 text-slate-950 font-medium hover:bg-slate-200 transition-colors" href="#concerts">
<svg className="h-3.5 w-3.5" data-lucide="calendar" strokeWidth="1.5"></svg>
<span>Upcoming concerts</span>
</a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3.5 py-2 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" href="#media">
<svg className="h-3.5 w-3.5" data-lucide="film" strokeWidth="1.5"></svg>
<span>Watch live sessions</span>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70 bg-slate-950/90" id="concerts">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">

<div className="space-y-5">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  Concerts &amp; Retreats
                </h2>
<p className="text-base text-slate-300">
                  Intimate evenings of sacred music, mantra singing and guided
                  sound meditation.
                </p>
</div>
<div className="space-y-3 text-xs">

<article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-[0.7rem] text-slate-400 uppercase tracking-[0.16em]">
                      Montréal • Temple Concert
                    </p>
<p className="text-sm font-medium text-slate-50">
                      Evening of Mantra Yoga &amp; Choir
                    </p>
<p className="text-slate-400">
                      Live performance with immersive surround sound.
                    </p>
</div>
<div className="flex flex-col items-end gap-2">
<div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-right">
<p className="text-[0.7rem] text-slate-300">Apr 27</p>
<p className="text-[0.7rem] text-slate-500">
                        Tickets available
                      </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-[0.7rem] text-slate-950 font-medium hover:bg-slate-200 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="ticket" strokeWidth="1.5"></svg>
<span>Reserve</span>
</button>
</div>
</article>

<article className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-[0.7rem] text-slate-400 uppercase tracking-[0.16em]">
                      Online • Global Retreat
                    </p>
<p className="text-sm font-medium text-slate-50">
                      Weekend of Sacred Sound Immersion
                    </p>
<p className="text-slate-400">
                      Guided meditations, live Q&amp;A and extended mantra
                      sessions.
                    </p>
</div>
<div className="flex flex-col items-end gap-2">
<div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-right">
<p className="text-[0.7rem] text-slate-300">Jun 14–16</p>
<p className="text-[0.7rem] text-emerald-300">
                        Early bird
                      </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/70 bg-emerald-400/10 px-3 py-1.5 text-[0.7rem] text-emerald-100 hover:bg-emerald-400/20 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="leaf" strokeWidth="1.5"></svg>
<span>Join retreat</span>
</button>
</div>
</article>
</div>
</div>

<div className="space-y-5" id="media">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  Videos &amp; Live Sessions
                </h2>
<p className="text-base text-slate-300">
                  Experience full performances, guided meditations and
                  behind‑the‑scenes studio moments.
                </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-3">
<div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900 flex items-center justify-center text-xs text-slate-500">
                  Embedded video player
                </div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
<div>
<p className="text-sm font-medium text-slate-50">
                      Divine Grace Divine – Live
                    </p>
<p className="text-slate-400">
                      Recorded during a candlelit concert with choir and sitar.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="youtube" strokeWidth="1.5"></svg>
<span>Watch on YouTube</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="share-2" strokeWidth="1.5"></svg>
<span>Share</span>
</button>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
<span className="text-slate-300">Follow:</span>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="instagram" strokeWidth="1.5"></svg>
<span>Instagram</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="facebook" strokeWidth="1.5"></svg>
<span>Facebook</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 hover:border-slate-500 hover:bg-slate-900 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="twitter" strokeWidth="1.5"></svg>
<span>X / Twitter</span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-slate-950/95 border-b border-slate-800/80" id="contact">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">

<div className="space-y-5">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                  Contact &amp; Booking
                </h2>
<p className="text-base text-slate-300">
                  For concerts, retreats, collaborations or press inquiries,
                  send a message and the team will respond shortly.
                </p>
</div>
<form className="space-y-4 text-sm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200" htmlFor="name">Name</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500/60" id="name" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200" htmlFor="email">Email</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500/60" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200" htmlFor="subject">Subject</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500/60" id="subject" placeholder="Concert, retreat, licensing..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200" htmlFor="message">Message</label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-500/60" id="message" placeholder="Share details about your event or question..." rows="4"></textarea>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-950 hover:bg-slate-200 transition-colors" type="submit">
<svg className="h-3.5 w-3.5" data-lucide="send" strokeWidth="1.5"></svg>
<span>Send message</span>
</button>
</form>
</div>

<div className="space-y-5">
<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950/90 to-slate-950/60 p-5 space-y-4">
<div className="space-y-2">
<h3 className="text-xl tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                    Newsletter of Devotion
                  </h3>
<p className="text-sm text-slate-300">
                    Receive new releases, live stream invitations and exclusive
                    recordings directly to your inbox.
                  </p>
</div>
<form className="space-y-3 text-sm">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200" htmlFor="newsletter-email">Email address</label>
<div className="flex flex-col sm:flex-row gap-2">
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-500/60" id="newsletter-email" placeholder="you@example.com" type="email"/>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-fuchsia-500/90 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-fuchsia-400 transition-colors" type="submit">
<svg className="h-3.5 w-3.5" data-lucide="sparkles" strokeWidth="1.5"></svg>
<span>Subscribe</span>
</button>
</div>
</div>
<p className="text-[0.7rem] text-slate-500">
                    No spam. Only a few messages each season with meaningful
                    updates.
                  </p>
</form>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3 text-sm">
<div className="flex items-center justify-between gap-3">
<div className="space-y-1">
<h3 className="text-base tracking-tight font-semibold text-slate-50" style={{fontFamily: '\'Fraunces\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', serif'}}>
                      Gift sacred music
                    </h3>
<p className="text-xs text-slate-400">
                      Send a digital gift card redeemable for any album or
                      retreat.
                    </p>
</div>
<svg className="h-7 w-7 text-emerald-300/90" data-lucide="gift" strokeWidth="1.5"></svg>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/90 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-300 transition-colors" type="button">
<svg className="h-3.5 w-3.5" data-lucide="credit-card" strokeWidth="1.5"></svg>
<span>Buy gift card</span>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.75rem] text-slate-500">
<p>© <span id="year"></span> Patrick Bernard. All rights reserved.</p>
<div className="flex flex-wrap items-center gap-4">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Press kit</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
