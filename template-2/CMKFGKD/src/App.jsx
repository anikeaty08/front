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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-300/40 via-pink-300/30 to-indigo-300/40 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-32 -left-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-sky-300/30 via-violet-300/30 to-rose-300/30 blur-3xl"></div>

<header className="relative">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="flex h-9 w-9 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-pink-200 via-rose-400 to-red-700 rounded-xl items-center justify-center">
<svg className="h-5 w-5 text-white" viewBox="0 0 24 24">
<path d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3z" fill="currentColor" opacity=".15"></path>
<path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" fill="currentColor"></path>
</svg>
</div>
<span className="text-base font-semibold tracking-tight font-sans">Nebula Core</span>
</div>

<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-sans">Use Cases</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-sans">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-sans">SDK</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-sans">Pricing</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden rounded-full border border-slate-200/80 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-white/60 md:flex items-center gap-2 font-sans">
<svg className="lucide lucide-languages h-4 w-4" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
              EN
            </button>
<button className="hidden rounded-full border border-slate-200/80 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-white/60 sm:flex font-sans">
              Login
            </button>
<button className="inline-flex gap-2 hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center">
              Get Access
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-8 pl-4">
<div className="grid gap-10 pt-4 md:grid-cols-12 md:gap-8 md:pt-8">

<div className="md:col-span-7 lg:col-span-8">
<h1 className="leading-tight sm:text-6xl lg:text-7xl text-5xl font-light text-slate-900 tracking-tight font-manrope" style={{}}><span className="block bg-clip-text font-light text-transparent font-manrope bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 pt-0 pb-4" style={{}}>One Core</span><span className="block bg-clip-text font-light text-transparent font-manrope bg-gradient-to-r from-rose-400 via-pink-500 to-gray-500 pt-0 pb-4" style={{}}>Endless Intelligence</span></h1>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-sparkles h-4 w-4 text-violet-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Model‑first
                </div>
<div className="h-px w-24 bg-slate-200"></div>
<div className="font-sans">Est. 2025</div>
</div>
</div>

<div className="md:col-span-5 lg:col-span-4">
<p className="text-base leading-relaxed text-slate-600 font-sans">
                From multimodal perception to contextual reasoning, Nebula Core fuses cognitive tooling with graceful interaction. Build agents that feel invisible—and work everywhere.
              </p>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex gap-2 hover:bg-slate-50 text-sm font-medium text-slate-900 bg-white border-slate-200/80 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center">
                  Deep Dive
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 font-sans">
                  View Docs
                  <svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm ring-1 ring-slate-200/70">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 font-sans">3–4 yrs</span>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50">
<svg className="lucide lucide-maximize-2 h-4 w-4" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 font-sans">Adaptive Interaction Engine</h3>
<p className="mt-1 text-sm text-slate-600 font-sans">Natural chats that instantly connect with data, apps, and people.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="3D spheres" className="aspect-[3/4] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73d2df6e-f2df-4c10-b029-1d4f0dcb8fce_800w.jpg" style={{}} />
</div>
</article>

<article className="relative overflow-hidden ring-1 ring-slate-200/70 bg-gradient-to-b from-white to-sky-50 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-medium text-sky-700 font-sans">Beta</span>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50">
<svg className="lucide lucide-maximize-2 h-4 w-4" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 font-sans">Context Mesh API</h3>
<p className="mt-1 text-sm text-slate-600 font-sans">Stream memory, tools, and policies into one coherent workspace.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="3D abstract ribbon" className="aspect-[3/4] w-full object-cover" src="/assets/15c3e3e5-854e-4a74-8468-c909578e12e3_800w.jpg" style={{}} />
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-rose-50 p-4 shadow-sm ring-1 ring-slate-200/70">
<div className="flex items-start justify-between">
<span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-medium text-rose-700 font-sans">Preview</span>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50">
<svg className="lucide lucide-maximize-2 h-4 w-4" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 font-sans">Neural Canvas UI</h3>
<p className="mt-1 text-sm text-slate-600 font-sans">Composable panels for visual planning, routing, and evaluation.</p>
<div className="mt-4 overflow-hidden rounded-2xl">
<img alt="3D swirl" className="aspect-[3/4] w-full object-cover" src="/assets/46bbb147-bb49-4dc2-9a4d-48f56b0dc37c_800w.jpg" />
</div>
</article>
</div><div className="mt-16">

<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 font-sans">Pricing</span>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 font-sans">Simple, transparent plans</h2>
<p className="mt-2 text-sm text-slate-600 font-sans">Start free. Upgrade when you’re ready. No hidden fees.</p>
</div>
<div className="flex items-center gap-3">
<span className="hidden text-xs text-slate-500 sm:inline font-sans">Save 20% annually</span>
<div className="inline-flex rounded-full border border-slate-200/80 bg-white p-1">
<button className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-900 text-white font-sans">Monthly</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-full text-slate-700 hover:text-slate-900 font-sans">Yearly</button>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm ring-1 ring-slate-200/70">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Starter</h3>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 font-sans">Free</span>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900 font-sans">$0</span>
<span className="text-sm text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-1 text-sm text-slate-600 font-sans">Everything you need to explore the platform.</p>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Up to 3 projects
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          10k requests / mo
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Community support
        </li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 font-sans">
        Get Started
        <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 bg-gradient-to-b from-white to-sky-50 p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Pro</h3>
<span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-medium text-sky-700 font-sans">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Popular
        </span>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900 font-sans">$29</span>
<span className="text-sm text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-1 text-sm text-slate-600 font-sans">For teams building production‑ready agents.</p>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Unlimited projects
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          1M requests / mo
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Priority support
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-check h-4 w-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Fine‑tuned models & analytics
        </li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 font-sans">
        Start Pro
        <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-violet-50 p-6 shadow-sm ring-1 ring-slate-200/70">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Enterprise</h3>
<span className="inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium text-violet-700 font-sans">Scale</span>
</div>
<div className="mt-4">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900 font-sans">Custom</span>
</div>
<p className="mt-1 text-sm text-slate-600 font-sans">Advanced security, controls, and support.</p>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-building-2 h-4 w-4 text-violet-700 mt-0.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
          SSO, SAML, SCIM
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-700 mt-0.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          SOC 2, HIPAA (add‑on)
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-server h-4 w-4 text-slate-700 mt-0.5" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
          Regional & on‑prem deployment
        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<svg className="lucide lucide-headset h-4 w-4 text-slate-700 mt-0.5" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
          Dedicated TAM & 24/7 support
        </li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 font-sans">
        Contact Sales
        <svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</button>
</article>
</div>
<p className="mt-4 text-xs text-slate-500 font-sans">Usage beyond plan limits is billed at metered rates. Cancel anytime.</p>
</div><div className="mt-16">
<div className="flex items-end justify-between">
<div>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 font-sans">FAQ</span>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 font-sans">Answers to common questions</h2>
<p className="mt-2 text-sm text-slate-600 font-sans">Can’t find what you’re looking for? Reach us anytime.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 font-sans">
      Contact Support
      <svg className="lucide lucide-life-buoy h-4 w-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
</button>
</div>
<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">How does billing work?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">Plans are flat monthly rates. If you exceed included usage, you’ll be billed at metered overage rates at the end of the cycle.</p>
</details>
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">Can I cancel anytime?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">Yes. You can upgrade, downgrade, or cancel at any time from your dashboard—no lock‑in.</p>
</details>
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">Do you support multiple models?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">Yes. Route across leading foundation models and fine‑tunes. You can set policies per project or environment.</p>
</details>
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">Is my data private?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">We never train on customer data. Enterprise plans offer regional isolation, data residency, and on‑prem options.</p>
</details>
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">How do rate limits work?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">Each plan includes generous default limits. Contact us to increase limits based on your workload and traffic profile.</p>
</details>
<details className="group rounded-2xl ring-1 ring-slate-200/70 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-slate-900 font-sans">Do you offer SLAs?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600 font-sans">Yes. Enterprise plans include uptime SLAs, support SLAs, and incident response commitments.</p>
</details>
</div>
</div>

<div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row sm:items-center">
<div className="flex items-center gap-2 text-sm text-slate-600 font-sans">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Private by default
            </div>
<div className="flex items-center gap-6 text-sm text-slate-600">
<span className="inline-flex items-center gap-2 font-sans">
<svg className="lucide lucide-cpu h-4 w-4 text-violet-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                Multi‑model
              </span>
<span className="inline-flex items-center gap-2 font-sans">
<svg className="lucide lucide-zap h-4 w-4 text-amber-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Realtime
              </span>
<span className="inline-flex items-center gap-2 font-sans">
<svg className="lucide lucide-globe h-4 w-4 text-indigo-600" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                Global edge
              </span>
</div>
</div>
</div>
</section>
</div>




    </>
  );
}
