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



      (function(){ try { document.getElementById('year').textContent = new Date().getFullYear(); } catch(e){} })();
    
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-slate-900 focus:text-white" href="#main">Skip to content</a>

<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a aria-label="Aura home" className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-slate-900 to-blue-600 ring-1 flex items-center justify-center text-sm tracking-tighter font-semibold ring-slate-900/10 text-white">A</div>
<span className="font-semibold tracking-tight text-xl text-slate-900">Aura</span>
</a>
<nav className="hidden md:flex items-center gap-1 text-sm">
<a className="px-3 py-2 rounded-md text-slate-900 hover:bg-slate-900/5 transition-colors" href="#features">Features</a>
<a className="px-3 py-2 rounded-md text-slate-900 hover:bg-slate-900/5 transition-colors" href="#process">How it works</a>
<a className="px-3 py-2 rounded-md text-slate-900 hover:bg-slate-900/5 transition-colors" href="#pricing">Pricing</a>
<a className="px-3 py-2 rounded-md text-slate-900 hover:bg-slate-900/5 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 focus-visible:ring-offset-0 text-slate-900 hover:bg-slate-900/5 ring-1 ring-slate-300 bg-white" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-slate-900 to-blue-600 transition-colors shadow-sm ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-white hover:from-slate-800 hover:to-blue-500 ring-slate-900/10" href="#pricing">
              Start free trial
              <svg aria-hidden="true" className="-mr-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</header>
<main id="main">

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(15,23,42,0.06), transparent 60%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-semibold text-slate-800">
                Turn product data into instant growth outcomes
              </h1>
<p className="mt-5 text-lg sm:text-xl leading-7 text-slate-700">
                Ship decisions, not dashboards. Aura finds the patterns, prioritizes what matters, and tells you what to do next.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold bg-gradient-to-r from-slate-900 to-blue-600 transition-colors shadow ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-white hover:from-slate-800 hover:to-blue-500 ring-slate-900/10" href="#pricing">
                  Start free trial
                  <svg aria-hidden="true" className="-mr-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-medium transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-slate-900 hover:bg-slate-900/5 bg-white ring-slate-300" href="#demo">
                  See live demo
                  <svg aria-hidden="true" className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="12" r="9"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</a>
</div>
<div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
<span className="inline-flex items-center gap-2">
<svg aria-hidden="true" className="text-emerald-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                  Free for 14 days. No credit card.
                </span>
<span className="inline-flex items-center gap-2">
<svg aria-hidden="true" className="text-blue-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                  7,942 teams onboarded
                </span>
<span className="inline-flex items-center gap-2">
<svg aria-hidden="true" className="text-slate-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
                  SOC 2 practices. AES‑256 at rest.
                </span>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl ring-1 backdrop-blur p-4 sm:p-6 lg:p-8 bg-slate-50 ring-slate-200">

<div className="flex items-center justify-between pb-4 border-b border-slate-200">
<div className="flex items-center gap-2">
<span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500/80"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-500/80"></span>
<span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900/80"></span>
</div>
<div className="text-sm font-medium text-slate-700">Aura Insights</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4">

<div className="md:col-span-2 space-y-3">
<div className="rounded-lg ring-1 p-3 bg-white ring-slate-200">
<div className="flex items-center gap-2 text-sm font-medium text-slate-800">
<svg aria-hidden="true" className="text-blue-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M3 3h18v4H3z"></path>
<path d="M3 11h18v10H3z"></path>
</svg>
                        Opportunities
                      </div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between text-sm">
<span className="text-slate-700">Activation drop - onboarding</span>
<span className="font-medium text-blue-600">High</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-slate-700">Paywall friction</span>
<span className="font-medium text-slate-800">Med</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-slate-700">Churn‑risk segment</span>
<span className="font-medium text-slate-800">Low</span>
</li>
</ul>
</div>
<div className="rounded-lg ring-1 p-3 bg-white ring-slate-200">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Next best action</div>
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs bg-blue-50 ring-1 ring-inset text-blue-700 ring-blue-200">+43% lift</span>
</div>
<p className="mt-2 text-sm text-slate-600">Shorten onboarding step 3 by 1 field for new teams (N=1,204).</p>
<div className="mt-3 inline-flex items-center gap-2 text-sm cursor-pointer text-blue-600 hover:text-blue-700">
                        View playbook
                        <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</div>
</div>
</div>

<div className="md:col-span-3">
<div className="rounded-xl bg-gradient-to-br ring-1 p-4 sm:p-5 h-full from-white to-slate-50 ring-slate-200">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-700">Activation over time</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs bg-blue-50 ring-1 ring-inset text-blue-700 ring-blue-200">
<svg aria-hidden="true" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<polyline points="6 15 12 9 18 15"></polyline>
</svg>
                            +12.7%
                          </span>
</div>
</div>
<div className="mt-4 grid grid-cols-12 gap-2 items-end h-48">

<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '25%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '35%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '45%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '42%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '50%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '58%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '66%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '62%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '70%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '78%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '82%'}}></div>
<div className="bg-gradient-to-t from-blue-500/20 to-blue-500/70 rounded-md" style={{height: '88%'}}></div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-slate-600">
<span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span>
</div>
<div className="mt-5 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-lg ring-1 p-3 bg-white ring-slate-200">
<div className="flex items-center justify-between">
<span className="text-slate-700">Activation</span>
<span className="font-medium text-blue-600">+43%</span>
</div>
<div className="mt-2 h-1.5 rounded overflow-hidden bg-slate-200">
<div className="h-full w-4/5 bg-gradient-to-r from-blue-600 to-slate-700"></div>
</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white ring-slate-200">
<div className="flex items-center justify-between">
<span className="text-slate-700">Churn</span>
<span className="font-medium text-blue-600">−18%</span>
</div>
<div className="mt-2 h-1.5 rounded overflow-hidden bg-slate-200">
<div className="h-full w-2/5 bg-gradient-to-r from-slate-700 to-blue-600"></div>
</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white ring-slate-200">
<div className="flex items-center justify-between">
<span className="text-slate-700">LTV</span>
<span className="font-medium text-blue-600">2.1×</span>
</div>
<div className="mt-2 h-1.5 rounded overflow-hidden bg-slate-200">
<div className="h-full w-3/5 bg-gradient-to-r from-slate-700 to-slate-700"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 -z-10 blur-3xl opacity-20" style={{background: 'radial-gradient(700px 300px at 70% 30%, rgba(15,23,42,0.25), transparent 60%)'}}></div>
</div>
</div>
</div>
</section>

<section className="mt-16 md:mt-24 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col items-center text-center">
<p className="text-sm text-slate-600">Trusted by 2,500+ companies</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full">

<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">ALPHA</div>
<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">NOVA</div>
<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">ZEN</div>
<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">LUMO</div>
<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">QUAD</div>
<div className="h-12 rounded-md ring-1 flex items-center justify-center font-semibold tracking-tight bg-white ring-slate-200 text-slate-500">ATLAS</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="features-title" className="mt-8 md:mt-16" id="features">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-800" id="features-title">Outcomes over outputs</h2>
<p className="mt-3 text-lg max-w-3xl text-slate-700">Aura translates raw events into prioritized actions that lift activation, revenue, and retention—fast.</p>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="rounded-xl ring-1 p-6 transition-colors bg-slate-50 ring-slate-200 hover:ring-slate-300">
<div className="flex items-center justify-between">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M12 2v6"></path>
<path d="M5 10h14"></path>
<path d="M5 22h14"></path>
<path d="M12 14v8"></path>
</svg>
</div>
<span className="text-xs bg-blue-50 ring-1 ring-inset px-2 py-0.5 rounded text-blue-700 ring-blue-200">+43% lift</span>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-slate-800">Predictive opportunity scoring</h3>
<p className="mt-2 text-sm text-slate-600">Surface the highest impact fixes ranked by effort and upside. Focus sprints on what moves the needle.</p>
</div>

<div className="rounded-xl ring-1 p-6 transition-colors bg-slate-50 ring-slate-200 hover:ring-slate-300">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M3 3h7v7H3z"></path>
<path d="M14 3h7v7h-7z"></path>
<path d="M14 14h7v7h-7z"></path>
<path d="M3 14h7v7H3z"></path>
</svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-slate-800">Playbooks that ship themselves</h3>
<p className="mt-2 text-sm text-slate-600">Turn insights into guided tasks with owners, due dates, and status—no more orphaned dashboards.</p>
</div>

<div className="rounded-xl ring-1 p-6 transition-colors bg-slate-50 ring-slate-200 hover:ring-slate-300">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-slate-800">One-click experiment setup</h3>
<p className="mt-2 text-sm text-slate-600">Deploy experiments with guardrails. Aura tracks, analyzes, and recommends next steps automatically.</p>
</div>

<div className="rounded-xl ring-1 p-6 transition-colors bg-slate-50 ring-slate-200 hover:ring-slate-300">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M13 2H6a2 2 0 0 0-2 2v7"></path>
<path d="M22 13V6a2 2 0 0 0-2-2h-7"></path>
<path d="M2 13v5a2 2 0 0 0 2 2h5"></path>
<path d="M13 22h5a2 2 0 0 0 2-2v-5"></path>
</svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-slate-800">Plug-and-play integrations</h3>
<p className="mt-2 text-sm text-slate-600">Connect your stack in minutes. No heavy lifts. Keep data private with fine‑grained controls.</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="process-title" className="mt-20" id="process">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-800" id="process-title">From data to decisions in 3 steps</h2>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-blue-50 ring-1 ring-inset flex items-center justify-center font-semibold text-slate-800 ring-blue-200">1</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Connect</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Link product data and tools in minutes. Secure by default with zero-copy access.</p>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block">
<svg aria-hidden="true" className="text-slate-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</div>
</div>

<div className="relative rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-blue-50 ring-1 ring-inset flex items-center justify-center font-semibold text-slate-800 ring-blue-200">2</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Discover</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Aura scores opportunities by upside and effort so your team knows exactly where to start.</p>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block">
<svg aria-hidden="true" className="text-slate-400" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</div>
</div>

<div className="relative rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-blue-50 ring-1 ring-inset flex items-center justify-center font-semibold text-slate-800 ring-blue-200">3</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Execute</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Launch guided playbooks with owners and deadlines. See results roll in automatically.</p>
</div>
</div>
</div>
</section>

<section className="mt-20">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-xl ring-1 p-6 text-center bg-slate-50 ring-slate-200">
<div className="text-4xl tracking-tight font-semibold text-slate-800">+43%</div>
<p className="mt-1 text-sm text-slate-600">Activation in 30 days</p>
</div>
<div className="rounded-xl ring-1 p-6 text-center bg-slate-50 ring-slate-200">
<div className="text-4xl tracking-tight font-semibold text-slate-800">2.1×</div>
<p className="mt-1 text-sm text-slate-600">LTV after 1 quarter</p>
</div>
<div className="rounded-xl ring-1 p-6 text-center bg-slate-50 ring-slate-200">
<div className="text-4xl tracking-tight font-semibold text-slate-800">−18%</div>
<p className="mt-1 text-sm text-slate-600">Churn in risk cohorts</p>
</div>
<div className="rounded-xl ring-1 p-6 text-center bg-slate-50 ring-slate-200">
<div className="text-4xl tracking-tight font-semibold text-slate-800">99.99%</div>
<p className="mt-1 text-sm text-slate-600">Uptime last 12 months</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="why-title" className="mt-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-800" id="why-title">Why teams choose Aura</h2>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
<div className="rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 inline-flex text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.9L18.18 22 12 18.56 5.82 22 7 14.17l-5-4.9 6.91-1.01L12 2z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-800">Actionable by design</h3>
<p className="mt-2 text-sm text-slate-600">We prioritize outcomes and ownership, so insights turn into shipped changes.</p>
</div>
<div className="rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 inline-flex text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-800">Measurable impact</h3>
<p className="mt-2 text-sm text-slate-600">Every recommendation ships with an expected lift and confidence interval.</p>
</div>
<div className="rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 inline-flex text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-800">Secure &amp; private</h3>
<p className="mt-2 text-sm text-slate-600">Row‑level permissions, SSO, audit logs, and encryption at rest and in transit.</p>
</div>
<div className="rounded-xl ring-1 p-6 bg-slate-50 ring-slate-200">
<div className="rounded-md bg-blue-50 ring-1 ring-inset p-2 inline-flex text-slate-800 ring-blue-200">
<svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="16" x="4" y="4"></rect>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-800">Fast time‑to‑value</h3>
<p className="mt-2 text-sm text-slate-600">Onboard in hours, not weeks. See measurable wins in your first sprint.</p>
</div>
</div>
</div>
</section>

<section className="mt-20">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-800">What customers achieve</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-600 hover:text-slate-900" href="#pricing">
              Start free trial
              <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

</div>
</div>
</section>

<section className="mt-20" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-800">Simple, transparent pricing</h2>
<p className="mt-3 text-lg text-slate-700">Start free. Upgrade when you see the value. Cancel anytime.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div className="relative rounded-2xl ring-1 p-6 flex flex-col bg-white ring-slate-200 shadow-sm">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Starter</h3>
<p className="mt-1 text-sm text-slate-600">For solo builders and small teams.</p>
<div className="mt-5 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-800">$19</span>
<span className="text-sm text-slate-600">per seat / mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    3 integrations
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Opportunity scoring
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Basic playbooks
                  </li>
</ul>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-slate-900 bg-white hover:bg-slate-900/5 ring-slate-300" href="#">Start 14‑day trial</a>
</div>

<div className="relative rounded-2xl ring-1 p-6 shadow-lg shadow-slate-900/5 flex flex-col bg-white ring-slate-200">
<div className="absolute -top-3 right-4">
<span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs bg-slate-900 text-white ring-1 ring-inset ring-slate-900/10">Most popular</span>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Growth</h3>
<p className="mt-1 text-sm text-slate-600">For product teams ready to scale.</p>
<div className="mt-5 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-800">$49</span>
<span className="text-sm text-slate-600">per seat / mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Unlimited integrations
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Advanced playbooks &amp; SLAs
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Experiments &amp; guardrails
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Role‑based access
                  </li>
</ul>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-slate-900 to-blue-600 transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-white hover:from-slate-800 hover:to-blue-500 ring-slate-900/10" href="#">Start 14‑day trial</a>
</div>

<div className="relative rounded-2xl ring-1 p-6 flex flex-col bg-white ring-slate-200 shadow-sm">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-800">Scale</h3>
<p className="mt-1 text-sm text-slate-600">For large orgs and compliance needs.</p>
<div className="mt-5 flex items-baseline gap-2">
<span className="text-4xl font-semibold tracking-tight text-slate-800">$99</span>
<span className="text-sm text-slate-600">per seat / mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    SSO, SCIM, audit logs
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    VPC &amp; data residency
                  </li>
<li className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
                    Dedicated success manager
                  </li>
</ul>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-slate-900 bg-white hover:bg-slate-900/5 ring-slate-300" href="#">Start 14‑day trial</a>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-700">
<svg aria-hidden="true" className="text-emerald-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
            30‑day money‑back guarantee • Cancel anytime
          </div>
</div>
</section>

<section className="mt-20" id="faq">
<div className="mx-auto max-w-3xl px-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-center text-slate-800">Frequently asked questions</h2>
<div className="mt-8 space-y-3">

<details className="group rounded-xl ring-1 p-5 open:bg-slate-100/70 bg-slate-50 ring-slate-200">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4">
<h3 className="text-base font-medium text-slate-800">Can I cancel anytime?</h3>
<svg aria-hidden="true" className="group-open:rotate-180 transition-transform text-slate-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Yes. You can cancel in‑app at any time. Your plan remains active until the end of the billing period.</p>
</details>
<details className="group rounded-xl ring-1 p-5 open:bg-slate-100/70 bg-slate-50 ring-slate-200">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4">
<h3 className="text-base font-medium text-slate-800">How is pricing calculated?</h3>
<svg aria-hidden="true" className="group-open:rotate-180 transition-transform text-slate-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Pricing is per seat, billed monthly or annually. Add or remove seats anytime; charges prorate automatically.</p>
</details>
<details className="group rounded-xl ring-1 p-5 open:bg-slate-100/70 bg-slate-50 ring-slate-200">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4">
<h3 className="text-base font-medium text-slate-800">Is my data secure?</h3>
<svg aria-hidden="true" className="group-open:rotate-180 transition-transform text-slate-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</summary>
<p className="mt-3 text-sm text-slate-600">We use encryption at rest (AES‑256) and in transit (TLS 1.2+), offer SSO/SCIM, and provide audit logs on eligible plans.</p>
</details>
<details className="group rounded-xl ring-1 p-5 open:bg-slate-100/70 bg-slate-50 ring-slate-200">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4">
<h3 className="text-base font-medium text-slate-800">What integrations are available?</h3>
<svg aria-hidden="true" className="group-open:rotate-180 transition-transform text-slate-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Connect CDPs, data warehouses, analytics, billing, and support tools. New integrations ship monthly.</p>
</details>
<details className="group rounded-xl ring-1 p-5 open:bg-slate-100/70 bg-slate-50 ring-slate-200">
<summary className="list-none cursor-pointer flex items-center justify-between gap-4">
<h3 className="text-base font-medium text-slate-800">Do you offer support?</h3>
<svg aria-hidden="true" className="group-open:rotate-180 transition-transform w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="18">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</summary>
<p className="mt-3 text-sm text-slate-600">All plans include email support. Growth adds priority SLAs. Scale includes a dedicated success manager.</p>
</details>
</div>
</div>
</section>

<section className="mt-20 mb-24">
<div className="mx-auto max-w-7xl px-6">
<div className="relative overflow-hidden rounded-2xl ring-1 bg-gradient-to-r ring-slate-200 from-slate-900/5 via-blue-500/5 to-blue-500/10">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(800px 300px at 0% 0%, rgba(15,23,42,0.10), transparent 60%), radial-gradient(800px 300px at 100% 100%, rgba(59,130,246,0.12), transparent 60%)'}}></div>
<div className="md:px-12 md:py-14 pt-10 pr-8 pb-10 pl-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-800">Ready to turn insights into outcomes?</h3>
<p className="mt-2 text-slate-700">Start your 14‑day free trial. No credit card required. Cancel anytime.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold bg-gradient-to-r from-slate-900 to-blue-600 transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-white hover:from-slate-800 hover:to-blue-500 ring-slate-900/10" href="#pricing">
                      Get instant results
                      <svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-medium transition-colors ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/60 text-slate-900 hover:bg-slate-900/5 bg-white ring-slate-300" href="#features">
                      Explore features
                      <svg aria-hidden="true" className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 7v10"></path>
<path d="M7 12h10"></path>
</svg>
</a>
</div>
</div>
<div className="md:justify-self-end">
<div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 ring-1 bg-white ring-slate-200">
<svg aria-hidden="true" className="text-emerald-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm text-slate-700">30‑day money‑back guarantee</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-slate-900 to-blue-600 ring-1 flex items-center justify-center text-xs tracking-tighter font-semibold ring-slate-900/10 text-white">A</div>
<span className="font-semibold tracking-tight text-slate-900">Aura</span>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-700">
<a className="hover:text-slate-900" href="#features">Features</a>
<a className="hover:text-slate-900" href="#process">How it works</a>
<a className="hover:text-slate-900" href="#pricing">Pricing</a>
<a className="hover:text-slate-900" href="#faq">FAQ</a>
<a className="hover:text-slate-900" href="#">Security</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</nav>
<div className="text-xs text-slate-600">
            © <span id="year">2025</span> Aura, Inc. All rights reserved.
          </div>
</div>
</div>
</footer>


    </>
  );
}
