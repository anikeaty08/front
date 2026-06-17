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



      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
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
      
<div className="relative min-h-screen flex flex-col">

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>
<div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"></div>
</div>

<header className="relative z-10 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-400 to-violet-500 shadow-lg shadow-sky-500/30">
<span className="text-[0.6rem] tracking-tight text-slate-950" style={{fontFamily: '\'Space Grotesk\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif', fontWeight: '600'}}>
                NS
              </span>
</div>
<span className="text-sm tracking-tight text-slate-100" style={{fontFamily: '\'Space Grotesk\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif', fontWeight: '500'}}>
              Nova Studio
            </span>
</div>
<nav className="hidden items-center gap-7 text-sm text-slate-300 sm:flex">
<button className="transition-colors hover:text-slate-50" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Product
            </button>
<button className="transition-colors hover:text-slate-50" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Use cases
            </button>
<button className="transition-colors hover:text-slate-50" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Pricing
            </button>
<button className="transition-colors hover:text-slate-50" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Docs
            </button>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-200 shadow-sm shadow-slate-900/40 transition-colors hover:border-slate-600 hover:bg-slate-900 sm:inline-flex" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '400'}}>
              Log in
            </button>
<button className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-1.5 text-xs text-slate-950 shadow-lg shadow-sky-500/40 transition-transform hover:translate-y-0.5 hover:shadow-sky-500/60" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '500'}}>
              Get started
            </button>
</div>
</div>
</header>

<main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-12 px-6 pb-12 pt-10 sm:px-8 lg:flex-row lg:pb-16 lg:pt-14">

<section className="flex-1 space-y-7">

<div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 shadow-sm shadow-slate-900/70 backdrop-blur" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontSize: '0.75rem'}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
<svg className="h-3 w-3" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</span>
<span className="text-slate-300 tracking-tight">
              New
            </span>
<span className="text-slate-50 tracking-tight">
              Realtime canvas for AI‑native teams
            </span>
</div>

<div className="space-y-3">
<h1 className="max-w-xl text-slate-50 font-semibold tracking-tight leading-tight sm:leading-tight" style={{fontFamily: '\'Space Grotesk\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif', fontSize: 'clamp(2.6rem, 4.3vw, 3.4rem)', letterSpacing: '-0.04em'}}>
              Make your product
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-300">
                feel smart
                <span className="pointer-events-none absolute -top-1 -right-5 h-4 w-4 rounded-full bg-sky-400/40 blur-md"></span>
</span>
              instantly.
            </h1>
<p className="max-w-md text-slate-300" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontSize: '1rem'}}>
              Drop in an AI copilot that understands every interaction, adapts to
              your users in real time, and slots directly into your existing
              workflow.
            </p>
</div>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-2 text-sm text-slate-950 shadow-lg shadow-sky-500/40 transition-transform hover:translate-y-0.5 hover:shadow-sky-500/60" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '500'}}>
              Start free
              <svg className="h-4 w-4" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-5 py-2 text-sm text-slate-200 shadow-sm shadow-slate-900/70 transition-colors hover:border-slate-500 hover:bg-slate-900" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '400'}}>
<svg className="h-4 w-4" data-lucide="play" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
              Watch product tour
            </button>
</div>

<div className="space-y-2">
<p className="text-xs text-slate-400" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              No AI expertise required. Connect in minutes with your existing stack.
            </p>
<div className="flex flex-wrap items-center gap-6 text-[0.7rem] text-slate-500">
<span style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                Trusted by modern product teams
              </span>
<div className="flex gap-3 opacity-80">
<div className="h-4 w-14 rounded-full bg-slate-800/80"></div>
<div className="h-4 w-14 rounded-full bg-slate-800/60"></div>
<div className="h-4 w-14 rounded-full bg-slate-800/40"></div>
</div>
</div>
</div>
</section>

<aside className="flex-1 w-full">
<div className="relative mx-auto flex max-w-md flex-col gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/80 backdrop-blur">

<div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
<svg className="h-3.5 w-3.5 text-sky-300" data-lucide="line-chart" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-100 tracking-tight" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '500'}}>
                      Engagement over time
                    </span>
<span className="text-[0.65rem] text-slate-500" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Auto‑optimized by Nova
                    </span>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.65rem] text-slate-200" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg className="h-3 w-3" data-lucide="sliders-horizontal" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
                    Filter
                  </button>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-[0.65rem] text-slate-200" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg className="h-3 w-3" data-lucide="clock-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
                    Last 90d
                  </button>
</div>
</div>

<div className="relative mt-1 h-40 rounded-xl bg-gradient-to-b from-slate-900/60 to-slate-950/60">

<div className="absolute inset-3">
<div className="h-full w-full rounded-xl border border-slate-800/70 bg-slate-950/40"></div>
<div className="absolute inset-3 flex flex-col justify-between">
<div className="border-t border-dashed border-slate-800/80"></div>
<div className="border-t border-dashed border-slate-800/80"></div>
<div className="border-t border-dashed border-slate-800/80"></div>
</div>
</div>

<svg className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" viewbox="0 0 320 120">
<defs>
<lineargradient id="line-grad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stop-color="#38bdf8"></stop>
<stop offset="1" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient id="fill-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#38bdf8" stop-opacity="0.35"></stop>
<stop offset="1" stop-color="#0f172a" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M10 90 C 60 40, 90 110, 140 70 S 230 20, 310 40" fill="none" stroke="url(#line-grad)" strokeLinecap="round" strokeWidth="2.3"></path>
<path d="M10 90 C 60 40, 90 110, 140 70 S 230 20, 310 40 L 310 120 L 10 120 Z" fill="url(#fill-grad)"></path>

<circle cx="40" cy="70" fill="#38bdf8" r="4"></circle>
<circle cx="140" cy="70" fill="#38bdf8" r="4"></circle>
<circle cx="220" cy="35" fill="#38bdf8" r="4"></circle>
<circle cx="300" cy="40" fill="#38bdf8" r="4"></circle>
</svg>

<div className="absolute left-1/2 top-7 inline-flex -translate-x-1/2 rounded-xl border border-slate-800/80 bg-slate-950/95 px-3 py-1.5 text-[0.65rem] text-slate-200 shadow-lg shadow-slate-950/80" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<div className="flex flex-col gap-0.5">
<span className="text-slate-400">
                      May 03
                    </span>
<span className="text-slate-100">
                      3.2x active sessions
                    </span>
</div>
</div>
</div>

<div className="mt-3 flex justify-between text-[0.65rem] text-slate-500" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Sep</span>
</div>
</div>

<div className="grid gap-3 md:grid-cols-[1.25fr_minmax(0,1fr)]">
<div className="relative flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
<svg className="h-3.5 w-3.5" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</div>
<span className="text-xs text-slate-100 tracking-tight" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif', fontWeight: '500'}}>
                      Nova Copilot
                    </span>
</div>
<span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] text-emerald-300" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Live
                  </span>
</div>
<div className="mt-1 flex flex-col gap-1.5">
<div className="max-w-[85%] rounded-2xl bg-slate-900/90 px-3 py-1.5 text-[0.75rem] text-slate-100" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    How can I assist your users today?
                  </div>
<div className="max-w-[80%] self-start rounded-2xl border border-slate-800/80 bg-slate-950 px-3 py-1.5 text-[0.7rem] text-slate-300" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Summarize session, suggest the next best action, or draft an
                    in‑app message.
                  </div>
</div>
<div className="mt-2 flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1.5 text-[0.7rem] text-slate-400" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<svg className="h-3.5 w-3.5 text-slate-500" data-lucide="message-circle" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
<span className="truncate">
                    “Draft a release note for the new onboarding flow…”
                  </span>
<svg className="ml-auto h-3.5 w-3.5 text-sky-400" data-lucide="send" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 px-3 py-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Weekly impact
                    </span>
<span className="text-[0.7rem] text-emerald-300" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      +32%
                    </span>
</div>
<div className="mt-1 flex items-baseline gap-1">
<span className="text-base text-slate-50 tracking-tight" style={{fontFamily: '\'Space Grotesk\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif', fontWeight: '500', letterSpacing: '-0.03em'}}>
                      21k
                    </span>
<span className="text-[0.7rem] text-slate-500" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      assisted sessions
                    </span>
</div>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 px-3 py-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400" style={{fontFamily: '\'Geist\', system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      Command usage
                    </span>
<svg className="h-3.5 w-3.5 text-sky-300" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</div>
<div className="mt-2 space-y-1.5 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between">
<span>Generate report</span>
<span className="text-slate-400">
                        2,120
                      </span>
</div>
<div className="flex items-center justify-between">
<span>Summarize session</span>
<span className="text-slate-400">
                        1,860
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-7 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/30 blur-[18px]"></div>
<div className="absolute -right-4 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 to-violet-400 shadow-lg shadow-sky-500/50">
<svg className="h-5 w-5 text-slate-950" data-lucide="activity" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"></svg>
</div>
</div>
</aside>
</main>
</div>

<style>
      @keyframes scaleIn {
        0% {
          opacity: 0;
          transform: translateY(0.5rem) scale(0.96);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(0.5rem);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>


    </>
  );
}
