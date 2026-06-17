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



    const ctx = document.getElementById('skillChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 260);
    gradient.addColorStop(0, 'rgba(239,68,68,0.18)');
    gradient.addColorStop(1, 'rgba(239,68,68,0.02)');

    const gridColor = 'rgba(255,255,255,0.06)';
    const textColor = 'rgba(226,232,240,0.7)';

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
        datasets: [{
          label: 'Skill Level',
          data: [10, 18, 26, 35, 47, 58, 70, 85],
          tension: 0.35,
          borderColor: 'rgba(248,113,113,1)',
          pointBackgroundColor: 'rgba(248,113,113,1)',
          pointBorderColor: 'rgba(248,113,113,1)',
          pointRadius: 0,
          hitRadius: 10,
          fill: true,
          backgroundColor: gradient,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15,23,42,0.9)',
            borderColor: 'rgba(248,113,113,0.3)',
            borderWidth: 1,
            titleColor: '#e5e7eb',
            bodyColor: '#cbd5e1',
            displayColors: false,
            padding: 10,
            callbacks: {
              label: (ctx) => `Skill: ${ctx.parsed.y}`
            }
          }
        },
        scales: {
          x: {
            grid: { color: gridColor, drawBorder: false },
            ticks: { color: textColor, font: { weight: 500 } }
          },
          y: {
            grid: { color: gridColor, drawBorder: false },
            ticks: {
              color: textColor,
              font: { weight: 500 },
              callback: (v) => v + '%'
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        },
        animation: { duration: 500 }
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
      
<main className="min-h-screen">
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<aside className="lg:col-span-5 xl:col-span-4">
<div className="sticky top-6">
<div className="relative rounded-2xl border border-white/5 bg-[#0d1116] overflow-hidden">

<div className="pointer-events-none absolute inset-0 opacity-60" style={{background: 'radial-gradient(80% 50% at 50% 0%, rgba(239,68,68,0.10) 0%, rgba(239,68,68,0.00) 60%)'}}></div>
<div className="p-6 sm:p-8">

<h1 className="text-3xl sm:text-4xl md:text-[40px] tracking-tight font-extrabold text-white leading-tight">
                  What will you <span className="relative whitespace-nowrap">
<span className="absolute inset-x-0 bottom-1 h-2 rounded bg-red-500/30"></span>
<span className="relative text-red-400">learn?</span>
</span>
</h1>
<p className="mt-3 text-sm sm:text-base text-neutral-400">
                  A focused path from fundamentals to mastery. Track your growth over time.
                </p>

<div className="mt-8">
<div className="rounded-xl border border-white/5 bg-[#0a0f14] p-4 shadow-inner">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M19 9l-5 5-4-4-4 4"></path>
</svg>
<span className="text-sm font-medium text-neutral-300">Skill level vs time</span>
</div>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-md border border-red-500/20 bg-red-500/10 text-red-300">
<span className="w-2 h-2 rounded-full bg-red-400"></span> Live model
                      </span>
</div>

<div className="relative rounded-lg bg-[#0b1218] border border-white/5 p-2">
<div className="relative h-44 sm:h-56 md:h-64">
<canvas aria-label="Skill over time chart" id="skillChart" role="img"></canvas>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<span className="w-4 h-[2px] rounded bg-red-400"></span> Progress
                        </div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></span> Confidence band
                        </div>
</div>
<span className="text-neutral-500">Updated daily</span>
</div>
</div>
</div>

<div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="mt-6 grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
<svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7l-8 10-5-5"></path>
</svg>
<span className="text-xs text-neutral-300">Hands-on lessons</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
<svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7l-8 10-5-5"></path>
</svg>
<span className="text-xs text-neutral-300">Actionable tips</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="lg:col-span-7 xl:col-span-8">
<div className="h-[70vh] sm:h-[75vh] lg:h-[calc(100vh-48px)] overflow-y-auto scroll-smooth pr-2">
<div className="space-y-5">

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 01</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">Foundations and Setup</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      8 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      42 min
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Environment and tooling optimized for speed
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Project structure and naming conventions
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Git discipline and lightweight workflows
                  </li>
</ul>
</article>

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 02</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">Core Concepts</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      12 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      1h 18m
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    State, data flow, and composition patterns
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Reusable components and accessibility basics
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Error boundaries and defensive coding
                  </li>
</ul>
</article>

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 03</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">Data and APIs</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      9 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      54 min
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Fetch strategies, caching, and pagination
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Authentication, tokens, and refresh cycles
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Resilience: retries, timeouts, and backoff
                  </li>
</ul>
</article>

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 04</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">UI Patterns &amp; Interactions</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      10 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      1h 02m
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Navigation, modals, and async flows
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Input patterns and validation UX
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Loading states: skeletons and progress
                  </li>
</ul>
</article>

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 05</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">Performance &amp; Quality</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      7 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      36 min
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Profiling, metrics, and critical path budgets
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Testing strategies from unit to E2E
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    CI checks, previews, and release gates
                  </li>
</ul>
</article>

<article className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/10 transition-colors">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-400">Module 06</div>
<h3 className="mt-1 text-xl tracking-tight font-semibold text-white">Capstone Project</h3>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-emerald-300/90 bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 border border-emerald-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M10 8l6 4-6 4V8z"></path>
</svg>
                      6 videos
                    </span>
<span className="inline-flex items-center gap-1 text-sky-300/90 bg-gradient-to-r from-sky-600/20 to-sky-400/10 border border-sky-400/20 text-[11px] px-2.5 py-1 rounded-md">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
                      48 min
                    </span>
</div>
</div>
<ul className="mt-4 space-y-2">
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Design, spec, and milestones
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Implementation with reviews and QA
                  </li>
<li className="flex gap-2 text-sm text-neutral-300">
<svg className="mt-0.5 h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-8 10-5-5"></path></svg>
                    Demo, metrics, and retrospective
                  </li>
</ul>
</article>

<div className="py-4">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-neutral-500">Scroll for more modules</span>
<button className="inline-flex items-center gap-2 text-xs text-neutral-300 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/[0.03] transition-colors">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
                    Add to plan
                  </button>
</div>
</div>
</div>
</div>
</section>
</div>
</section>
</main>


    </>
  );
}
