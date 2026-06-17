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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="w-full border-b border-slate-800/70 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/40">
<span className="text-sm font-semibold tracking-tight text-slate-950">
                N
              </span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight">
                Nelmo
              </span>
<span className="text-xs font-medium tracking-tight text-slate-400">
                Construction
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#services">
              Services
            </a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#process">
              How it works
            </a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#projects">
              Projects
            </a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#faq">
              FAQ
            </a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900 transition-colors">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px] shadow-emerald-400/30"></span>
              Licensed &amp; insured
            </button>
<a className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/90 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition-colors" href="#booking">
              Free consultation
              <iconify-icon className="text-xs" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</header>

<main className="flex-1">
<section className="w-full border-b border-slate-800/70">
<div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Now booking Spring &amp; Summer projects</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
                  Build your next home project
                  <span className="text-amber-300">without the stress.</span>
</h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                  Nelmo Construction helps homeowners plan, budget, and complete renovations with a dedicated project lead from
                  first sketch to final walkthrough.
                </p>
</div>

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 space-y-1.5">
<div className="inline-flex items-center justify-between w-full">
<span className="text-xs font-medium text-slate-400 tracking-tight">
                      Completed homes
                    </span>
<iconify-icon className="text-slate-300" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg font-semibold text-slate-50 tracking-tight">
                    250+
                  </div>
<p className="text-xs text-slate-400">
                    From kitchen updates to full additions.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 space-y-1.5">
<div className="inline-flex items-center justify-between w-full">
<span className="text-xs font-medium text-slate-400 tracking-tight">
                      Local experience
                    </span>
<iconify-icon className="text-slate-300" icon="lucide:map-pinned" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg font-semibold text-slate-50 tracking-tight">
                    12+ years
                  </div>
<p className="text-xs text-slate-400">
                    Serving families across the metro area.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 space-y-1.5">
<div className="inline-flex items-center justify-between w-full">
<span className="text-xs font-medium text-slate-400 tracking-tight">
                      Customer rating
                    </span>
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-lg font-semibold text-slate-50 tracking-tight">
                    4.9 / 5
                  </div>
<p className="text-xs text-slate-400">
                    Transparent pricing and clear timelines.
                  </p>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400/90 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition-colors" href="#booking">
                  Book free in‑home consultation
                  <iconify-icon className="text-sm" icon="lucide:calendar-plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="flex items-center gap-3 text-xs text-slate-300">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900/80 flex items-center justify-center text-[0.6rem] font-semibold tracking-tight">
                      A
                    </div>
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900/80 flex items-center justify-center text-[0.6rem] font-semibold tracking-tight">
                      M
                    </div>
<div className="h-7 w-7 rounded-full bg-slate-700 border border-slate-900/80 flex items-center justify-center text-[0.6rem] font-semibold tracking-tight">
                      J
                    </div>
</div>
<span className="text-slate-400">
                    100% free visit. No obligation, no pressure.
                  </span>
</div>
</div>
</div>

<div className="lg:justify-self-end w-full" id="booking">
<div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/60 backdrop-blur-md p-5 sm:p-6 space-y-5">
<div className="space-y-1.5">
<div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
<iconify-icon icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Free 30‑minute consultation</span>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-50">
                    Tell us about your project
                  </h2>
<p className="text-sm text-slate-300">
                    Share a few details and we’ll confirm your in‑home visit within one business day.
                  </p>
</div>
<form className="space-y-4">

<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Full name</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none px-3.5 py-2.5" placeholder="Jordan Smith" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Phone</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none px-3.5 py-2.5" placeholder="(555) 123‑4567" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Email</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none px-3.5 py-2.5" placeholder="you@example.com" type="email"/>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Project type</label>
<div className="grid grid-cols-2 gap-2">
<button className="group rounded-2xl border border-amber-400/80 bg-amber-400/10 text-xs font-medium text-amber-200 px-3 py-2 flex items-center justify-between" type="button">
<span>Kitchen</span>
<iconify-icon className="text-amber-200" icon="lucide:utensils" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="group rounded-2xl border border-slate-800 bg-slate-950/60 text-xs font-medium text-slate-200 hover:border-slate-600 px-3 py-2 flex items-center justify-between transition-colors" type="button">
<span>Bathroom</span>
<iconify-icon className="text-slate-300" icon="lucide:shower-head" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="group rounded-2xl border border-slate-800 bg-slate-950/60 text-xs font-medium text-slate-200 hover:border-slate-600 px-3 py-2 flex items-center justify-between transition-colors" type="button">
<span>Basement</span>
<iconify-icon className="text-slate-300" icon="lucide:warehouse" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="group rounded-2xl border border-slate-800 bg-slate-950/60 text-xs font-medium text-slate-200 hover:border-slate-600 px-3 py-2 flex items-center justify-between transition-colors" type="button">
<span>Other</span>
<iconify-icon className="text-slate-300" icon="lucide:hammer" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Preferred date</label>
<div className="relative">
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-xs text-slate-100 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none pr-9 pl-3.5 py-2.5" type="date"/>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Best time</label>
<select className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-xs text-slate-100 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none pr-8 pl-3.5 py-2.5">
<option className="text-slate-900">Morning (8–11am)</option>
<option className="text-slate-900">Midday (11am–2pm)</option>
<option className="text-slate-900">Afternoon (2–5pm)</option>
<option className="text-slate-900">Evening (5–7pm)</option>
</select>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-200">Project details</label>
<textarea className="w-full rounded-2xl border border-slate-800 bg-slate-950/70 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none px-3.5 py-2.5" placeholder="Tell us about your space, your goals, and your ideal timeline." rows="3"></textarea>
</div>

<div className="space-y-3">
<div className="flex items-start gap-2.5">
<button aria-pressed="true" className="mt-0.5 h-4.5 w-4.5 rounded border border-amber-400 bg-amber-400/90 flex items-center justify-center" type="button">
<iconify-icon className="text-slate-950 text-[0.6rem]" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-slate-400">
                        I agree to be contacted by Nelmo Construction about my project. No spam, just one follow‑up.
                      </p>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400/90 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition-colors" type="submit">
                      Request my free visit
                      <iconify-icon className="text-sm" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-[0.7rem] text-slate-500 text-center">
                      Average confirmation time: under 24 hours.
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800/70" id="services">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Renovations that fit your life and budget
                </h2>
<p className="text-base text-slate-300 max-w-2xl">
                  From a single room refresh to full‑scale remodeling, we manage every step so you can keep your routine running.
                </p>
</div>
<div className="text-xs text-slate-400">
                Transparent estimates • Itemized materials • Clean job sites
              </div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300">
<iconify-icon icon="lucide:layout-panel-top" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Kitchen &amp; living spaces
                </h3>
<p className="text-sm text-slate-300">
                  Layout changes, cabinetry, flooring, lighting, and custom storage designed for how you actually use your space.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Island additions &amp; open‑concept plans
                  </li>
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Countertops, backsplashes, and fixtures
                  </li>
</ul>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300">
<iconify-icon icon="lucide:shower-head" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Bathrooms &amp; basements
                </h3>
<p className="text-sm text-slate-300">
                  Turn unused or outdated rooms into modern, durable spaces for guests, family, or rental income.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Walk‑in showers &amp; tile work
                  </li>
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Finished basements &amp; family rooms
                  </li>
</ul>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300">
<iconify-icon icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Additions &amp; exterior
                </h3>
<p className="text-sm text-slate-300">
                  Extra bedrooms, offices, decks, and exterior upgrades that blend seamlessly with your existing home.
                </p>
<ul className="text-xs text-slate-400 space-y-1.5">
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Permits, engineering, and inspections handled
                  </li>
<li className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-400" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Siding, roofing, and energy‑efficient windows
                  </li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800/70" id="process">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  A clear three‑step process
                </h2>
<p className="text-base text-slate-300 max-w-2xl">
                  From first visit to final walkthrough, you’ll know what’s happening, what it costs, and what comes next.
                </p>
</div>
<div className="text-xs text-slate-400">
                Most consultations scheduled within 3–5 days.
              </div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="relative rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-400/15 border border-amber-400/50 text-[0.7rem] font-semibold text-amber-200">
                    1
                  </span>
<span className="text-[0.7rem] text-slate-400">
                    30–45 minutes
                  </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Free in‑home visit
                </h3>
<p className="text-sm text-slate-300">
                  We walk the space with you, take measurements, and discuss your goals, style, and budget. No sales pressure.
                </p>
</div>

<div className="relative rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-400/15 border border-amber-400/50 text-[0.7rem] font-semibold text-amber-200">
                    2
                  </span>
<span className="text-[0.7rem] text-slate-400">
                    3–5 days
                  </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Detailed plan &amp; estimate
                </h3>
<p className="text-sm text-slate-300">
                  You receive a clear line‑item estimate, timeline, and materials options. We revise with you until it feels right.
                </p>
</div>

<div className="relative rounded-3xl border border-slate-800 bg-slate-950/70 p-5 space-y-3">
<div className="flex items-center justify-between">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-400/15 border border-amber-400/50 text-[0.7rem] font-semibold text-amber-200">
                    3
                  </span>
<span className="text-[0.7rem] text-slate-400">
                    Weekly updates
                  </span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">
                  Build &amp; walkthrough
                </h3>
<p className="text-sm text-slate-300">
                  Your dedicated project lead keeps you updated, coordinates trades, and walks you through the finished work.
                </p>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-emerald-400" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
                  Licensed, insured, and permit‑ready for residential projects.
                </span>
</div>
<a className="inline-flex items-center gap-2 text-xs font-semibold tracking-tight text-amber-300 hover:text-amber-200" href="#booking">
                Schedule your step 1 visit
                <iconify-icon className="text-xs" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="w-full border-b border-slate-800/70" id="projects">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Homes we’ve helped transform
                </h2>
<p className="text-base text-slate-300 max-w-2xl">
                  Every project is different, but the goal is the same: more comfort, more function, and more value in your home.
                </p>
</div>
<div className="text-xs text-slate-400">
                Photos available during your consultation.
              </div>
</div>
<div className="grid md:grid-cols-[1.3fr_1fr] gap-5">

<div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800">
<div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
<div className="relative p-5 space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 border border-slate-800 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span className="text-[0.7rem] text-slate-300">
                        Before
                      </span>
</div>
<p className="text-sm text-slate-300">
                      Closed‑off kitchen, worn flooring, and low natural light in a 1980s split‑level home.
                    </p>
<ul className="space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<iconify-icon icon="lucide:dot" style={{strokeWidth: '1.5'}}></iconify-icon>
                        4‑week build time
                      </li>
<li className="flex items-center gap-1.5">
<iconify-icon icon="lucide:dot" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Structural wall removal with permit
                      </li>
</ul>
</div>
<div className="relative p-5 space-y-3 bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-slate-900">
<div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 border border-amber-400/60 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
<span className="text-[0.7rem] text-amber-100">
                        After
                      </span>
</div>
<p className="text-sm text-slate-100">
                      Open‑concept kitchen and living room with new cabinets, island, and durable plank flooring.
                    </p>
<div className="grid grid-cols-2 gap-2 text-[0.7rem] text-slate-100">
<div className="rounded-2xl bg-slate-950/50 border border-slate-800/70 p-2">
                        +18% estimated home value
                      </div>
<div className="rounded-2xl bg-slate-950/50 border border-slate-800/70 p-2">
                        Completed under budget
                      </div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 space-y-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-[0.75rem] font-semibold tracking-tight">
                    L
                  </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-50">
                      Lauren &amp; Diego
                    </span>
<span className="text-[0.7rem] text-slate-400">
                      Kitchen &amp; main floor renovation
                    </span>
</div>
</div>
<p className="text-sm text-slate-200">
                  “Nelmo walked us through every choice and kept the timeline realistic. The crew was respectful of our home and
                  the budget never ‘mysteriously’ grew. We booked a second project before the first was even finished.”
                </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-[0.7rem] text-slate-400">
                    Verified homeowner review
                  </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full" id="faq">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-10">

<div className="space-y-6">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Questions about your consultation
                </h2>
<p className="text-base text-slate-300 max-w-xl">
                  Here’s what most homeowners ask before they invite us into their space.
                </p>
</div>
<div className="space-y-3">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-100">
                      Is the consultation really free?
                    </span>
</div>
<p className="text-sm text-slate-300">
                    Yes. The visit, measurements, and first detailed estimate are completely free. You only pay if you choose to
                    move forward with the project.
                  </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-100">
                      What should I prepare before you come?
                    </span>
</div>
<p className="text-sm text-slate-300">
                    Rough ideas, inspiration photos, or a ballpark budget help, but they’re not required. We can explore options
                    together during the visit.
                  </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-100">
                      Do you work while we’re living in the home?
                    </span>
</div>
<p className="text-sm text-slate-300">
                    In most projects, yes. We protect floors and furniture, manage dust, and coordinate schedules to reduce
                    disruption to your routine.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-amber-400/50 bg-gradient-to-br from-amber-400/15 via-amber-400/5 to-slate-950/90 p-6 space-y-5">
<div className="space-y-2">
<h3 className="text-xl font-semibold tracking-tight text-slate-50">
                  Ready to talk through your ideas?
                </h3>
<p className="text-sm text-slate-200">
                  Book your free consultation and we’ll confirm a time, introduce your project lead, and outline next steps.
                </p>
</div>
<div className="space-y-3">
<div className="flex items-center gap-2 text-xs text-slate-100">
<iconify-icon icon="lucide:clock" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Visits available Monday–Saturday</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-100">
<iconify-icon icon="lucide:map-pinned" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Servicing metro &amp; surrounding suburbs</span>
</div>
</div>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400/90 py-2.5 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-300 transition-colors" href="#booking">
                Book my free consultation
                <iconify-icon className="text-sm" icon="lucide:calendar-plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="text-[0.7rem] text-slate-300">
                Prefer to call? Reach us at <span className="font-medium text-slate-50">() 987‑6543</span> weekdays 8am–6pm.
              </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/70">
<div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-4 text-[0.7rem] text-slate-400">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-slate-100">
              Nelmo Construction
            </span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>Residential renovations &amp; additions</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<span>© <span id="year"></span> Nelmo Construction. All rights reserved.</span>
<span className="h-3 w-[0.05rem] bg-slate-700"></span>
<span>Licensed &amp; insured • Free estimates</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
