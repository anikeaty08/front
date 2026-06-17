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



      const y = document.getElementById('year-span');
      if (y) y.textContent = new Date().getFullYear();
    
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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">

<div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/15 via-sky-500/5 to-transparent blur-3xl opacity-80"></div>

<header className="relative z-20">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">

<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
<span className="text-xs font-semibold tracking-tight text-slate-950">K</span>
</div>
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
              Kreelio
            </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-50 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-slate-50 transition-colors" href="#talent">For talent</a>
<a className="hover:text-slate-50 transition-colors" href="#about">About</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-xs sm:text-sm text-slate-300 hover:text-slate-50 transition-colors" href="#waitlist">
              Login
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/20 hover:bg-cyan-500/30 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-slate-50 shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all" href="#waitlist">
              Get early access
              <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</header>

<main className="relative flex-1">

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -right-40 top-16 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute -left-32 bottom-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
</div>
<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24 pb-16">
<div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 lg:gap-16 items-center">

<div className="space-y-8">

<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-3 py-1 text-[0.7rem] sm:text-xs text-cyan-200">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Curated on-demand teams for founders &amp; product leaders
              </div>

<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-slate-50">
                  Build your next product
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300">
                    with elite global talent
                  </span>
</h1>
<p className="text-base sm:text-lg text-slate-300/90 max-w-xl">
                  Kreelio connects you with pre-vetted builders, designers, and engineers to launch and scale your product faster—without the hiring overhead.
                </p>
</div>

<div className="grid sm:grid-cols-3 gap-4 sm:gap-5 text-xs sm:text-sm text-slate-200">
<div className="flex flex-col gap-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3">
<div className="flex items-center gap-1.5">
<span className="iconify text-cyan-300" data-height="16" data-icon="lucide:zap" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Faster kickoff</span>
</div>
<p className="text-slate-400 text-xs">
                    Start in days, not months. We assemble teams from a curated global network.
                  </p>
</div>
<div className="flex flex-col gap-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3">
<div className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Pre-vetted talent</span>
</div>
<p className="text-slate-400 text-xs">
                    Builders with real shipping track records, not just portfolios.
                  </p>
</div>
<div className="flex flex-col gap-1.5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3">
<div className="flex items-center gap-1.5">
<span className="iconify text-sky-300" data-height="16" data-icon="lucide:globe-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Global-first</span>
</div>
<p className="text-slate-400 text-xs">
                    Access top operators and makers across timezones, optimized for async.
                  </p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<form className="flex-1 flex flex-col sm:flex-row gap-2" id="waitlist">
<div className="flex-1">
<label className="sr-only" htmlFor="email">Work email</label>
<input className="w-full rounded-full border border-slate-700/80 bg-slate-900/70 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70 px-4 py-2.5" id="email" placeholder="Work email" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 hover:from-cyan-300 hover:via-sky-400 hover:to-indigo-400 text-slate-950 text-sm font-medium px-4 sm:px-5 py-2.5 shadow-[0_18px_45px_rgba(8,47,73,0.9)] transition-all" type="submit">
                    Join founder waitlist
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</form>
<p className="text-xs text-slate-500 sm:pl-1">
                  No spam. We onboard a limited number of teams each month.
                </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-3 sm:pt-4">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-cyan-400 to-sky-500"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-indigo-400 to-fuchsia-500"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                  Used by founders, operators, and product leaders from fast-growing startups and modern enterprises.
                </p>
</div>
</div>

<div className="relative">

<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-sky-500/0 to-indigo-500/25 blur-2xl opacity-70"></div>
<div className="relative rounded-3xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-xl shadow-[0_32px_80px_rgba(15,23,42,0.95)] overflow-hidden">

<div className="flex items-center justify-between border-b border-slate-800/80 px-4 sm:px-5 py-3">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Live talent network</span>
</div>
<div className="flex items-center gap-2 text-[0.65rem] text-slate-400">
<span className="iconify" data-height="14" data-icon="lucide:clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Updated in real time</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-5">

<div className="flex flex-wrap items-center gap-2 text-[0.7rem] sm:text-xs">
<button className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-500/50 px-3 py-1">
<span className="iconify" data-height="14" data-icon="lucide:sparkles" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Founding teams</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 text-slate-300 border border-slate-700/80 px-3 py-1">
<span className="iconify" data-height="14" data-icon="lucide:layout-template" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Product &amp; design</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 text-slate-300 border border-slate-700/80 px-3 py-1">
<span className="iconify" data-height="14" data-icon="lucide:code-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Engineering</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 text-slate-300 border border-slate-700/80 px-3 py-1">
<span className="iconify" data-height="14" data-icon="lucide:rocket" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Growth</span>
</button>
</div>

<div className="space-y-3">

<div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 via-cyan-500 to-indigo-500 flex items-center justify-center text-[0.7rem] font-medium text-slate-950">
                          FP
                        </div>
<div>
<div className="flex items-center gap-1.5 text-xs text-slate-100">
<span>Founding Product Partner</span>
<span className="inline-flex items-center rounded-full bg-slate-800/80 text-[0.6rem] text-cyan-200 px-1.5 py-0.5">
                              YC alum
                            </span>
</div>
<p className="text-[0.7rem] text-slate-400">
                            Ex-Stripe, 8+ yrs shipping B2B SaaS and fintech.
                          </p>
</div>
</div>
<div className="flex flex-col items-end gap-1 text-[0.65rem] text-slate-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-emerald-300" data-height="14" data-icon="lucide:check-circle-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Verified</span>
</span>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5">
<span className="iconify text-sky-300" data-height="14" data-icon="lucide:users" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>2–3 slots</span>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 flex items-center justify-center text-[0.7rem] font-medium text-slate-950">
                          FD
                        </div>
<div>
<div className="flex items-center gap-1.5 text-xs text-slate-100">
<span>Founding Design Squad</span>
</div>
<p className="text-[0.7rem] text-slate-400">
                            Product design, brand, UX research for early-stage startups.
                          </p>
</div>
</div>
<div className="flex flex-col items-end gap-1 text-[0.65rem] text-slate-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-amber-300" data-height="14" data-icon="lucide:flame" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>High demand</span>
</span>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5">
<span className="iconify text-slate-200" data-height="14" data-icon="lucide:clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>4 weeks min</span>
</div>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 px-3 py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 flex items-center justify-center text-[0.7rem] font-medium text-slate-950">
                          FE
                        </div>
<div>
<div className="flex items-center gap-1.5 text-xs text-slate-100">
<span>Full-stack Engineering Pod</span>
</div>
<p className="text-[0.7rem] text-slate-400">
                            3–5 engineers for complex products &amp; integrations.
                          </p>
</div>
</div>
<div className="flex flex-col items-end gap-1 text-[0.65rem] text-slate-300">
<span className="inline-flex items-center gap-1">
<span className="iconify text-emerald-300" data-height="14" data-icon="lucide:check-circle-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Trusted</span>
</span>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2 py-0.5">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:globe-2" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>EU · US · Asia</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 pt-2">
<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
<p className="text-[0.65rem] text-slate-400">Average time to team match</p>
<p className="text-base font-semibold text-slate-50 mt-1">9 days</p>
<p className="text-[0.65rem] text-emerald-300 mt-1 flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:trending-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>34% faster than traditional hiring</span>
</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
<p className="text-[0.65rem] text-slate-400">Founders NPS</p>
<p className="text-base font-semibold text-slate-50 mt-1">72</p>
<p className="text-[0.65rem] text-cyan-300 mt-1 flex items-center gap-1">
<span className="iconify" data-height="14" data-icon="lucide:sparkles" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Curated, not marketplace</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-900/80 bg-slate-950/90" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="max-w-xl space-y-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  From idea to impact in weeks, not quarters
                </h2>
<p className="text-base text-slate-300">
                  We take the friction out of building with distributed talent. No cold outreach, no endless interviews—just aligned teams ready to ship.
                </p>
</div>
<div className="text-xs sm:text-sm text-slate-400 max-w-sm">
                Designed for founders, heads of product, and transformation leaders shipping net-new products or modernizing legacy systems.
              </div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/60 text-[0.7rem]">
                    1
                  </span>
<span>Define what you need</span>
</div>
<h3 className="text-sm font-medium text-slate-50">Scope, constraints &amp; outcomes</h3>
<p className="text-sm text-slate-400">
                  Share your product vision, constraints, and timelines. We turn this into a clear scope and engagement model.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-400">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Asynchronous intake—no sales theatre.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>We work with you to define realistic milestones.</span>
</li>
</ul>
</div>

<div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/60 text-[0.7rem]">
                    2
                  </span>
<span>Meet your curated team</span>
</div>
<h3 className="text-sm font-medium text-slate-50">Handpicked teams, not profiles</h3>
<p className="text-sm text-slate-400">
                  We assemble a squad tailored to your problem: product, design, engineering, and growth operators where needed.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-400">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Pre-vetted for domain and stage fit.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Optional async chemistry checks before kickoff.</span>
</li>
</ul>
</div>

<div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/60 text-[0.7rem]">
                    3
                  </span>
<span>Ship, learn, iterate</span>
</div>
<h3 className="text-sm font-medium text-slate-50">Execution with built-in governance</h3>
<p className="text-sm text-slate-400">
                  We provide structure, rituals, and reporting so you stay close to the work without getting lost in it.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-400">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Transparent progress, async by default.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="14" data-icon="lucide:dot" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Flexible to transition into in-house teams later.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-900/80 bg-slate-950" id="solutions">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
<div className="space-y-3 max-w-xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Purpose-built teams for your most important bets
                </h2>
<p className="text-base text-slate-300">
                  Whether you’re validating a new product, rewiring a legacy stack, or scaling a proven motion, we assemble teams tuned to that phase.
                </p>
</div>
<div className="text-xs sm:text-sm text-slate-400 max-w-sm">
                We go beyond role titles to understand constraints, business model, and adoption risks before matching you with teams.
              </div>
</div>
<div className="grid lg:grid-cols-3 gap-5">

<div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="iconify" data-height="16" data-icon="lucide:lightbulb" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>New product bets</span>
</div>
<span className="rounded-full bg-slate-800/80 text-[0.65rem] text-slate-300 px-2 py-0.5">
                    0 → 1
                  </span>
</div>
<h3 className="text-sm font-medium text-slate-50 mb-2">From insight to launch</h3>
<p className="text-sm text-slate-400 mb-3">
                  Lean squads to validate new product ideas, run experiments, and ship MVPs with real adoption.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Discovery, research, and opportunity mapping</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>MVP scoping &amp; build with 6–12 week horizons</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Experiment design &amp; adoption metrics</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center gap-1 text-xs text-cyan-200 hover:text-cyan-100">
                  Talk about a new product
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="iconify" data-height="16" data-icon="lucide:square-stack" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Modernization &amp; replatforming</span>
</div>
<span className="rounded-full bg-slate-800/80 text-[0.65rem] text-slate-300 px-2 py-0.5">
                    1 → many
                  </span>
</div>
<h3 className="text-sm font-medium text-slate-50 mb-2">Upgrade without stalling</h3>
<p className="text-sm text-slate-400 mb-3">
                  Cross-functional teams to untangle legacy systems, improve performance, and ship new capabilities in parallel.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Architecture, runway, and risk mapping</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>API-first rebuilds and interfaces</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Change management with your internal teams</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center gap-1 text-xs text-cyan-200 hover:text-cyan-100">
                  Modernize an existing product
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
<div className="flex items-center justify-between mb-3">
<div className="inline-flex items-center gap-2 text-xs text-cyan-200">
<span className="iconify" data-height="16" data-icon="lucide:rocket" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Growth &amp; GTM</span>
</div>
<span className="rounded-full bg-slate-800/80 text-[0.65rem] text-slate-300 px-2 py-0.5">
                    Scale
                  </span>
</div>
<h3 className="text-sm font-medium text-slate-50 mb-2">Connect product to revenue</h3>
<p className="text-sm text-slate-400 mb-3">
                  GTM-focused teams to find traction channels, smooth activation, and improve retention.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5 mb-4">
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Product-led growth experiments</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Onboarding and activation flows</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Analytics and instrumentation foundations</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center gap-1 text-xs text-cyan-200 hover:text-cyan-100">
                  Explore growth engagements
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-900/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" id="talent">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 items-center">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-200">
<span className="iconify text-sky-300" data-height="14" data-icon="lucide:sparkles" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>For founders, builders &amp; operators</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Work on problems that actually matter
                </h2>
<p className="text-base text-slate-300">
                  Kreelio is home for independent builders, studios, and operators who want to work with ambitious teams—without giving up autonomy.
                </p>
<ul className="space-y-2.5 text-sm text-slate-300 pt-1">
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-emerald-300" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Access curated projects aligned with your stage and strengths, not random gigs.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-emerald-300" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Work async-first with world-class teams distributed across the globe.</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-0.5 text-emerald-300" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Keep your own brand and practice—Kreelio is a network, not a single studio.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-3 pt-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 text-slate-950 text-sm font-medium px-4 sm:px-5 py-2.5 hover:bg-slate-200 transition-colors">
                    Apply as talent
                    <span className="iconify" data-height="16" data-icon="lucide:user-plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 text-xs sm:text-sm text-slate-200 px-4 sm:px-5 py-2.5 hover:border-slate-400 hover:text-slate-50 transition-colors">
                    Learn how we work
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-xs text-slate-500 pt-1">
                  We review new talent applications on a rolling basis. Priority for those with shipped products, not just roles.
                </p>
</div>

<div className="relative">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-sky-500/0 to-indigo-500/25 blur-2xl opacity-70"></div>
<div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 backdrop-blur-xl p-5 shadow-[0_32px_80px_rgba(15,23,42,0.95)]">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-slate-300 flex items-center gap-2">
<span className="iconify text-cyan-300" data-height="16" data-icon="lucide:network" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Network overview</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-1 text-[0.65rem] text-slate-300">
<span className="iconify text-emerald-300" data-height="14" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Invite-only</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-[0.7rem] text-slate-400">Builders &amp; operators</p>
<p className="text-base font-semibold text-slate-50 mt-1">300+</p>
<p className="text-[0.7rem] text-slate-400 mt-1">Product, design, engineering, growth.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<p className="text-[0.7rem] text-slate-400">Countries</p>
<p className="text-base font-semibold text-slate-50 mt-1">25+</p>
<p className="text-[0.7rem] text-slate-400 mt-1">Optimized for remote-first work.</p>
</div>
</div>
<div className="space-y-3 mb-4">
<div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 via-cyan-500 to-indigo-500 flex items-center justify-center text-[0.7rem] font-medium text-slate-950">
                        PR
                      </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-100">Product-led founder</p>
<p className="text-[0.7rem] text-slate-400">Operating as a fractional CPO &amp; advisor.</p>
</div>
<span className="rounded-full bg-slate-800/80 text-[0.65rem] text-emerald-300 px-2 py-0.5">
                            Available 1–2 days/week
                          </span>
</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 flex items-center justify-center text-[0.7rem] font-medium text-slate-950">
                        DS
                      </div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-100">Independent design studio</p>
<p className="text-[0.7rem] text-slate-400">Brand &amp; product systems for B2B SaaS.</p>
</div>
<span className="rounded-full bg-slate-800/80 text-[0.65rem] text-amber-300 px-2 py-0.5">
                            2 slots next quarter
                          </span>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span>Tell us how you like to work, and we’ll only show the right opportunities.</span>
<button className="inline-flex items-center gap-1 text-cyan-200 hover:text-cyan-100">
                      Join as talent
                      <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-900/80 bg-slate-950" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid md:grid-cols-[1.2fr,1fr] gap-8 lg:gap-12 items-start">
<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  A new way to build with distributed talent
                </h2>
<p className="text-base text-slate-300">
                  Kreelio sits between a traditional agency, a marketplace, and building entirely in-house. You get the focus and continuity of a team, with the flexibility and global reach of a network.
                </p>
<div className="grid sm:grid-cols-3 gap-4 pt-2">
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-200">Curated, not crowdsourced</p>
<p className="text-sm text-slate-400">
                      We don’t list everyone. Each team is vetted for depth, collaboration, and execution quality.
                    </p>
</div>
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-200">Aligned on outcomes</p>
<p className="text-sm text-slate-400">
                      Engagements are structured around product outcomes, not just hours billed.
                    </p>
</div>
<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-200">Async by default</p>
<p className="text-sm text-slate-400">
                      We design for distributed teams, so work moves forward even when you’re offline.
                    </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
<p className="text-xs font-medium text-slate-200">Who we work best with</p>
<div className="space-y-3 text-sm text-slate-300">
<div className="flex gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="16" data-icon="lucide:target" data-width="16" style={{strokeWidth: '1.5'}}></span>
<p>Founders validating new products, second acts, or strategic bets.</p>
</div>
<div className="flex gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="16" data-icon="lucide:building-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<p>Product and transformation leaders inside scale-ups and enterprises.</p>
</div>
<div className="flex gap-2">
<span className="iconify mt-0.5 text-cyan-300" data-height="16" data-icon="lucide:users" data-width="16" style={{strokeWidth: '1.5'}}></span>
<p>Independent studios and operators who want deep, long-term product work.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-3 text-xs text-slate-300 space-y-2">
<div className="flex items-center justify-between gap-2">
<span className="inline-flex items-center gap-2">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:sparkle" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>We’re building this in the open.</span>
</span>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[0.7rem] text-slate-200 hover:border-slate-500">
                      Get product updates
                      <span className="iconify" data-height="14" data-icon="lucide:arrow-up-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-[0.7rem] text-slate-400">
                    Join the early group of founders and builders shaping how Kreelio works. We share product decisions, learnings, and opportunities before they go public.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-900/80 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="relative rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
<div className="absolute inset-y-0 -right-20 w-1/2 bg-gradient-to-l from-cyan-500/15 via-sky-500/5 to-transparent blur-3xl"></div>
<div className="relative grid lg:grid-cols-[1.2fr,0.9fr] gap-8 items-center px-5 sm:px-8 py-8 sm:py-10">
<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                    Tell us about the product you want to build
                  </h2>
<p className="text-base text-slate-300">
                    Share where you are today and where you want to go. We’ll respond with a recommended team shape, timeline, and next steps.
                  </p>
<div className="flex flex-col sm:flex-row gap-3 pt-1">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-slate-950 text-sm font-medium px-4 sm:px-5 py-2.5 hover:from-cyan-300 hover:via-sky-400 hover:to-indigo-400 transition-all shadow-[0_18px_45px_rgba(8,47,73,0.9)]">
                      Start a project brief
                      <span className="iconify" data-height="16" data-icon="lucide:pen-square" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600/80 bg-slate-950/60 text-xs sm:text-sm text-slate-200 px-4 sm:px-5 py-2.5 hover:border-slate-400 hover:text-slate-50 transition-colors">
                      Book a 25-min intro
                      <span className="iconify" data-height="16" data-icon="lucide:calendar-clock" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-xs text-slate-500">
                    We’re currently onboarding a limited number of partners per quarter to keep the network high-signal.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-3">
<p className="text-xs font-medium text-slate-200">A few details to get started</p>
<div className="space-y-2.5">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Company / project name</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 text-xs text-slate-50 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70" placeholder="Acme Insights" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">What are you trying to build?</label>
<textarea className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 text-xs text-slate-50 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70" placeholder="A short note on the problem, users, and timelines." rows="3"></textarea>
</div>
<div className="grid sm:grid-cols-2 gap-2.5">
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Role</label>
<select className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 text-xs text-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70">
<option className="bg-slate-900">Founder</option>
<option className="bg-slate-900">Head of Product</option>
<option className="bg-slate-900">Leadership / Exec</option>
<option className="bg-slate-900">Independent / Studio</option>
<option className="bg-slate-900">Other</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs text-slate-300">Target start</label>
<select className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 text-xs text-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-cyan-400/70">
<option className="bg-slate-900">ASAP</option>
<option className="bg-slate-900">Within 4 weeks</option>
<option className="bg-slate-900">In 1–3 months</option>
<option className="bg-slate-900">Exploring options</option>
</select>
</div>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-50 text-slate-950 text-sm font-medium px-4 py-2.5 hover:bg-slate-200 transition-colors mt-1">
                    Share project details
                    <span className="iconify" data-height="16" data-icon="lucide:send" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<p className="text-[0.7rem] text-slate-500">
                    By submitting, you agree to be contacted about this request. No mailing lists unless you opt in.
                  </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900/80 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 flex items-center justify-center">
<span className="text-[0.65rem] font-semibold tracking-tight text-slate-950">K</span>
</div>
<div>
<p className="text-xs font-medium text-slate-200 tracking-tight">Kreelio</p>
<p className="text-xs text-slate-500">Curated global talent for high-stakes product work.</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
<a className="hover:text-slate-200" href="#how-it-works">How it works</a>
<a className="hover:text-slate-200" href="#solutions">Solutions</a>
<a className="hover:text-slate-200" href="#talent">For talent</a>
<a className="hover:text-slate-200" href="#about">About</a>
</div>
</div>
<div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[0.7rem] text-slate-500">
<p>© <span id="year-span"></span> Kreelio. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="inline-flex items-center gap-1 hover:text-slate-300" href="#">
<span className="iconify" data-height="14" data-icon="lucide:mail" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Contact</span>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
