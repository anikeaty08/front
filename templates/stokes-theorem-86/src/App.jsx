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
      change    <link crossorigin="" href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https:כדגכדגכדגכדכ//fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>

sdsd  
  
    
<div className="pointer-events-none fixed inset-0 opacity-60">
<div className="absolute inset-x-0 -top-32 mx-auto h-64 w-[80%] rounded-full blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.15), rgba(56,189,248,0.08) 45%, transparent 70%)'}}></div>
</div>

<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-sdsd/10">
<span className="text-sm font-semibold tracking-tight text-indigo-300">S</span>
</div>
<span className="text-base font-semibold tracking-tigsdsdht text-slate-100">stokes</span>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm text-slate-300 hover:text-slate-100 transition-colors" href="#path">Path</a>
<a className="text-sm text-slate-300 hover:text-slate-100 transition-colors" href="#lessons">Lessons</a>
<a className="text-sm text-slate-300 hover:text-slate-100 transition-colors" href="#practice">Practice</a>
<a className="text-sm text-slate-300 hover:text-slate-100 transition-colors" href="#visualize">Visualize</a>
</nav>sdsd

          <div className="flex items-center gap-2">
<button className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 active:translate-y-[1px] md:flex">
<iconify-icon height="1.1rem" icon="lucide:log-in" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span className="font-medium">Sign in</span>
</button>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-95 active:translate-y-[1px]" href="#start">
<iconify-icon height="1.1rem" icon="lucide:rocket" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
<span>Start from zero</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid items-center gap-10 py-10 md:grid-cols-12 md:py-16">
<div className="md:col-span-6 lg:col-span-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
<iconify-icon height="1rem" icon="lucide:sparkles" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Beginner-first pathway
            </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              נךשנשךנשךנשךשנךשנ
            </h1>
<p className="mt-3 text-base leading-relaxed text-slate-300">
              No background? No problem. Learn vectors, curls, surfaces, and Stokes’ Theorem with visuals, plain language, and bite-sized lessons.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:opacity-95 active:translate-y-[1px]" href="#path">
<iconify-icon height="1.1rem" icon="lucide:play" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                Start Path
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 active:translate-y-[1px]" href="#lessons">
<iconify-icon height="1.1rem" icon="lucide:list-tree" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
                Browse lessons
              </a>
</div>
<div className="mt-6 grid grid-cols-3 gap-3 text-xs text-slate-300">
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:badge-help" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                No prerequisites
              </div>
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:monitor-play" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Visual-first
              </div>
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:timer" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                8–12 min lessons
              </div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-7">
<div className="relative mx-auto w-full max-w-2xl">
<div className="absolute -inset-1 rounded-2xl blur-2xl" style={{background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(56,189,248,0.15))'}}></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-indigo-300" height="1.1rem" icon="lucide:book-open" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Lesson 01</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">What is a vector field?</h3>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
<iconify-icon height="1rem" icon="lucide:bookmark-plus" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                    Save
                  </button>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-2">
<div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10">
<div className="absolute inset-0 flex items-center justify-center">
<button className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur hover:bg-white/20">
<iconify-icon height="1.3rem" icon="lucide:play-circle" style={{strokeWidth: '1.5'}} width="1.3rem"></iconify-icon>
<span className="font-medium">Preview</span>
</button>
</div>
</div>
<div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300">Progress</span>
<span className="text-xs text-slate-400">0%</span>
</div>
<div className="h-2 w-full overflow-hidden rounded bg-slate-800/80">
<div className="h-full w-[6%] bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-slate-500" height="1rem" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                        Intuition over formulas
                      </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-slate-500" height="1rem" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                        Real-world examples
                      </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-slate-500" height="1rem" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                        Interactive visuals
                      </li>
</ul>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">8 min</span>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:opacity-95" href="#lessons">
                        Start lesson
                        <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="relative" id="path">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-6 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">Your beginner path</h2>
<p className="mt-1 text-sm text-slate-300">Three steps from “no idea” to “I get Stokes.”</p>
</div>
<a className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 md:inline-flex" href="#start">
<iconify-icon height="1rem" icon="lucide:map" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
            View syllabus
          </a>
</div>
<div className="grid gap-4 md:grid-cols-3">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/20">
<span className="text-sm font-semibold tracking-tight text-indigo-300">1</span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Foundations</h3>
<p className="text-xs text-slate-400">Get the language</p>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Vectors &amp; vector fields
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Line vs surface integrals
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Orientation &amp; normal vectors
              </li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-300/20">
<span className="text-sm font-semibold tracking-tight text-cyan-300">2</span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Intuition</h3>
<p className="text-xs text-slate-400">See the flow</p>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Circulation &amp; curl (why it matters)
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Flux as “stuff crossing a surface”
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Visual heuristics
              </li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20">
<span className="text-sm font-semibold tracking-tight text-emerald-300">3</span>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Theorems</h3>
<p className="text-xs text-slate-400">Unify the ideas</p>
</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Green’s Theorem (2D circulation)
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Stokes’ Theorem (3D curl)
              </li>
<li className="flex items-start gap-2">
<iconify-icon height="1rem" icon="lucide:dot" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                Divergence Theorem (flux)
              </li>
</ul>
</div>
</div>
<div className="mt-6 flex flex-col items-start gap-3 sm:flex-row" id="start">
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:opacity-95" href="#lessons">
            Begin Lessons
            <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
<p className="text-xs text-slate-400">You’ll start with vectors and reach Stokes in ~2 hours.</p>
</div>
</div>
</section>

<section className="relative" id="lessons">
<div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-4 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-100">First 6 lessons</h2>
<p className="mt-1 text-sm text-slate-300">Short, focused, and practical.</p>
</div>
<a className="hidden items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 md:inline-flex" href="#">
<iconify-icon height="1rem" icon="lucide:download" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
            Download Notes
          </a>
</div>
<div className="grid gap-3 md:grid-cols-2">

<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:compass" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Vectors &amp; vector fields</h3>
<p className="text-xs text-slate-400">Lesson 01 • 8 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:waves" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Flow, flux, and surfaces</h3>
<p className="text-xs text-slate-400">Lesson 02 • 10 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:rotate-ccw" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Circulation &amp; curl</h3>
<p className="text-xs text-slate-400">Lesson 03 • 9 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:ruler" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Line integrals, gently</h3>
<p className="text-xs text-slate-400">Lesson 04 • 8 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:scan" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Surface integrals, gently</h3>
<p className="text-xs text-slate-400">Lesson 05 • 11 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-500/10 ring-1 ring-indigo-400/20">
<iconify-icon height="1.1rem" icon="lucide:link" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-100">Meet Stokes’ Theorem</h3>
<p className="text-xs text-slate-400">Lesson 06 • 12 min</p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs text-slate-100 hover:bg-white/20" href="#">
              Start
              <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="practice">
<div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-4 md:grid-cols-2">

<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20">
<iconify-icon height="1.1rem" icon="lucide:target" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Practice mode</h3>
<p className="text-xs text-slate-400">Check understanding with guided problems.</p>
</div>
</div>
<span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[0.7rem] text-emerald-300 ring-1 ring-emerald-300/20">New</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:square-check" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                  Circulation vs curl (3 checks)
                </div>
<span className="text-xs text-slate-400">6 min</span>
</li>
<li className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:square-check" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                  Flux across a patch
                </div>
<span className="text-xs text-slate-400">7 min</span>
</li>
<li className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<iconify-icon height="1rem" icon="lucide:square-check" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                  Stokes on a simple surface
                </div>
<span className="text-xs text-slate-400">8 min</span>
</li>
</ul>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-slate-400">0/9 completed</span>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:opacity-95" href="#">
                Try a set
                <iconify-icon height="1rem" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</a>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4" id="visualize">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-300/20">
<iconify-icon height="1.1rem" icon="lucide:axis-3d" style={{strokeWidth: '1.5'}} width="1.1rem"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Flux Playground</h3>
<p className="text-xs text-slate-400">Manipulate fields, surfaces, and orientation.</p>
</div>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-2">
<div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10">
<div className="absolute inset-0 flex items-center justify-center">
<div className="rounded-md bg-white/10 px-3 py-2 text-xs text-slate-300 ring-1 ring-white/15">Interactive 3D view (coming soon)</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon height="1rem" icon="lucide:waves" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                    Field: F(x,y,z) = <span className="text-slate-200">(-y, x, 0)</span>
</div>
<button className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/20">Change</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon height="1rem" icon="lucide:scan" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                    Surface: <span className="text-slate-200">Disk in z = 0</span>
</div>
<button className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/20">Change</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon height="1rem" icon="lucide:rotate-ccw" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                    Orientation: <span className="text-slate-200">Counter‑clockwise</span>
</div>
<button className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-white/20">Flip</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon height="1rem" icon="lucide:equal-approximately" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
                    Prediction: <span className="text-slate-200">Flux = 0</span>
</div>
<button className="rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-2.5 py-1.5 text-xs font-semibold text-slate-950 hover:opacity-95">Explain</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-tr from-indigo-500/10 to-cyan-400/10 p-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-100">Ready to connect the dots?</h4>
<p className="text-sm text-slate-300">Enroll free. Learn at your pace. Reach Stokes with confidence.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10" href="#">
<iconify-icon height="1rem" icon="lucide:mail" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Sign up with email
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-indigo-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:opacity-95" href="#">
<iconify-icon height="1rem" icon="lucide:fingerprint" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
              Create account
            </a>
</div>
</div>
</div>
</section>

<footer className="SDSFSDFSDF">
<div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-indigo-300">S</span>
</div>
<span className="text-sm text-slate-400">© 2025 stokes</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-slate-200" href="#">Privacy</a>
<a className="hover:text-slate-200" href="#">Terms</a>
<a className="hover:text-slate-200" href="#">Contact</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
