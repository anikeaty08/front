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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">

<header className="w-full border-b border-slate-800/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
            CV
          </div>
<span className="text-sm sm:text-base font-medium tracking-tight text-slate-100">
            CVForge
          </span>
</div>

<nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-50 transition-colors" href="#templates">Templates</a>
<a className="hover:text-slate-50 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-50 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800/80 transition-colors h-9 sm:h-10 px-3 sm:px-4">
            Sign in
          </button>
<button className="inline-flex items-center justify-center rounded-lg bg-sky-500 text-xs sm:text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors shadow-sm shadow-sky-500/40 h-9 sm:h-10 px-3 sm:px-4">
            Get started
          </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-900/80">
<div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

<div className="space-y-6 sm:space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 text-sky-300/90 text-[0.7rem] sm:text-xs font-medium px-2.5 sm:px-3 py-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400"></span>
</span>
              AI-powered CV builder · ATS-ready
            </div>
<div className="space-y-3 sm:space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Build a standout CV in minutes, not hours.
              </h1>
<p className="text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed max-w-xl">
                Turn your experience into a modern, recruiter-ready CV with live previews, smart suggestions, and pixel-perfect templates designed to pass ATS scans.
              </p>
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
<button className="inline-flex items-center justify-center rounded-lg bg-sky-500 text-sm sm:text-base font-medium text-slate-950 hover:bg-sky-400 transition-colors shadow-md shadow-sky-500/40 h-11 sm:h-12 px-4 sm:px-6">
                Start for free
                <i aria-hidden="true" className="lucide lucide-arrow-right ml-2 h-4 w-4 stroke-[1.5]"></i>
</button>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 text-sm sm:text-base font-medium text-slate-100 hover:bg-slate-800 transition-colors h-11 sm:h-12 px-4 sm:px-5">
<i aria-hidden="true" className="lucide lucide-play-circle mr-2 h-4 w-4 stroke-[1.5]"></i>
                Watch 60s demo
              </button>
</div>

<div className="space-y-3 pt-2 sm:pt-3">
<p className="text-xs sm:text-sm text-slate-400">
                Trusted by job seekers at:
              </p>
<div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[0.7rem] sm:text-xs text-slate-500">
<span className="tracking-tight font-medium text-slate-400/80">ALPHA</span>
<span className="tracking-tight font-medium text-slate-400/80">NORTHBASE</span>
<span className="tracking-tight font-medium text-slate-400/80">PIXELWORKS</span>
<span className="tracking-tight font-medium text-slate-400/80">GRADIENT</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute inset-0 -top-8 -left-6 blur-3xl opacity-60 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-teal-400/10 pointer-events-none"></div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 shadow-2xl shadow-sky-900/40 overflow-hidden">

<div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-3 sm:px-4 py-2.5">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
</div>
<span className="text-[0.7rem] sm:text-xs text-slate-300">
                    CV preview · Product Designer
                  </span>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-[0.7rem] sm:text-xs text-emerald-200 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  ATS score 94%
                </button>
</div>

<div className="grid grid-cols-12 gap-0">

<div className="col-span-5 border-r border-slate-800 bg-slate-950/90">
<div className="p-3 sm:p-4 space-y-3 sm:space-y-4">

<div className="flex items-center gap-1.5 text-[0.7rem] sm:text-xs">
<button className="flex-1 inline-flex items-center justify-center rounded-lg bg-slate-900 text-slate-50 h-7 sm:h-8">
                        Content
                      </button>
<button className="flex-1 inline-flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 h-7 sm:h-8">
                        Design
                      </button>
<button className="flex-1 inline-flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900/80 h-7 sm:h-8">
                        Settings
                      </button>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm font-medium text-slate-100">Experience</span>
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-[0.7rem] sm:text-xs text-slate-200 hover:bg-slate-800 h-6 px-1.5 sm:px-2">
<i aria-hidden="true" className="lucide lucide-plus h-3 w-3 stroke-[1.5] mr-1"></i>
                          Add
                        </button>
</div>
<div className="space-y-2.5">
<div className="rounded-lg border border-slate-800 bg-slate-900/80 p-2.5 space-y-1.5">
<div className="flex items-center justify-between gap-2">
<span className="text-xs text-slate-100">Product Designer · LinearFlow</span>
<span className="text-[0.65rem] text-slate-400">2022 – Now</span>
</div>
<p className="text-[0.7rem] text-slate-400 leading-snug">
                            Led end-to-end redesign of onboarding, improving activation by 28%.
                          </p>
</div>
<div className="rounded-lg border border-slate-900 bg-slate-950/60 p-2.5 space-y-1.5">
<div className="flex items-center justify-between gap-2">
<span className="text-xs text-slate-200">UX Designer · MetricLab</span>
<span className="text-[0.65rem] text-slate-500">2019 – 2022</span>
</div>
<p className="text-[0.7rem] text-slate-500 leading-snug">
                            Shipped analytics workflows used by 50k+ monthly users.
                          </p>
</div>
</div>
</div>

<div className="rounded-xl border border-sky-700/60 bg-sky-950/40 p-2.5 sm:p-3 space-y-1.5">
<div className="flex items-center gap-1.5">
<div className="h-4 w-4 rounded-full bg-sky-500/20 flex items-center justify-center">
<i aria-hidden="true" className="lucide lucide-sparkles h-3 w-3 text-sky-300 stroke-[1.5]"></i>
</div>
<span className="text-xs font-medium text-sky-100">AI suggestion</span>
</div>
<p className="text-[0.7rem] sm:text-xs text-sky-100/90 leading-snug">
                        Turn responsibilities into impact-driven bullet points tailored to Product Design roles.
                      </p>
<button className="inline-flex items-center justify-center rounded-lg bg-sky-500 text-[0.7rem] sm:text-xs font-medium text-slate-950 hover:bg-sky-400 transition-colors h-7 px-2.5">
                        Rewrite this section
                      </button>
</div>
</div>
</div>

<div className="col-span-7 bg-slate-950/60">
<div className="p-3 sm:p-4">
<div className="rounded-lg border border-slate-800 bg-slate-900/80 overflow-hidden">

<div className="bg-slate-950/90 border-b border-slate-800 px-3 sm:px-4 py-3">
<div className="flex items-center gap-3 sm:gap-4">
<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500"></div>
<div>
<h2 className="text-xs sm:text-sm font-medium tracking-tight text-slate-50">
                              Alex Rivera
                            </h2>
<p className="text-[0.65rem] sm:text-xs text-slate-400">
                              Senior Product Designer
                            </p>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-0">
<div className="col-span-5 border-r border-slate-800 bg-slate-900/90 px-3 sm:px-4 py-3 space-y-2.5">
<div>
<h3 className="text-xs font-medium tracking-tight text-slate-100 mb-1">
                              Profile
                            </h3>
<p className="text-[0.7rem] text-slate-300 leading-snug">
                              Designer focused on thoughtful interfaces and measurable results across SaaS and data tools.
                            </p>
</div>
<div>
<h3 className="text-xs font-medium tracking-tight text-slate-100 mb-1">
                              Skills
                            </h3>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-md bg-slate-800/80 text-[0.65rem] text-slate-200 px-2 py-0.5">
                                Product thinking
                              </span>
<span className="inline-flex items-center rounded-md bg-slate-800/80 text-[0.65rem] text-slate-200 px-2 py-0.5">
                                UX research
                              </span>
<span className="inline-flex items-center rounded-md bg-slate-800/80 text-[0.65rem] text-slate-200 px-2 py-0.5">
                                Systems design
                              </span>
</div>
</div>
</div>
<div className="col-span-7 bg-slate-900/70 px-3 sm:px-4 py-3 space-y-2.5">
<div>
<h3 className="text-xs font-medium tracking-tight text-slate-100 mb-1">
                              Experience
                            </h3>
<div className="space-y-1.5">
<div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-200">
<span>Senior Product Designer · LinearFlow</span>
<span className="text-slate-400">2022 – Now</span>
</div>
<ul className="mt-1.5 space-y-0.5 list-disc list-inside">
<li className="text-[0.7rem] text-slate-300 leading-snug">
                                    Increased onboarding completion by <span className="text-sky-300">28%</span> through flow simplification and guided setup.
                                  </li>
<li className="text-[0.7rem] text-slate-300 leading-snug">
                                    Partnered with PMs and Eng to ship features used by <span className="text-sky-300">40k+</span> teams globally.
                                  </li>
</ul>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-medium tracking-tight text-slate-100 mb-1">
                              Education
                            </h3>
<p className="text-[0.7rem] text-slate-300 leading-snug">
                              B.A. in Interaction Design · Northbridge University
                            </p>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[0.7rem] sm:text-xs text-slate-400">
<i aria-hidden="true" className="lucide lucide-shield-check h-3.5 w-3.5 stroke-[1.5]"></i>
<span>Optimized for ATS · Clean typography · One-page layout</span>
</div>
<button className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-[0.7rem] sm:text-xs font-medium text-slate-950 hover:bg-emerald-400 transition-colors h-7 sm:h-8 px-2.5 sm:px-3">
<i aria-hidden="true" className="lucide lucide-download mr-1.5 h-3.5 w-3.5 stroke-[1.5]"></i>
                        Export PDF
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80" id="features">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Everything you need to land more interviews.
              </h2>
<p className="mt-2 text-sm sm:text-base text-slate-300/90 max-w-xl">
                From AI-assisted bullet points to clean exports, build a CV that looks great everywhere and reads even better.
              </p>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<i aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 stroke-[1.5]"></i>
<span>Smart defaults, fully customizable</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 space-y-3 sm:space-y-4">
<div className="h-8 w-8 rounded-lg bg-sky-500/15 flex items-center justify-center">
<i aria-hidden="true" className="lucide lucide-wand-2 h-4 w-4 text-sky-300 stroke-[1.5]"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                  AI writing assistant
                </h3>
<p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Turn plain descriptions into strong, impact-focused bullet points tailored to each role you apply for.
                </p>
</div>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-sky-400"></span>
<span>Role-aware suggestions for every section.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-sky-400"></span>
<span>Highlight measurable outcomes and impact.</span>
</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 space-y-3 sm:space-y-4">
<div className="h-8 w-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
<i aria-hidden="true" className="lucide lucide-badge-check h-4 w-4 text-emerald-300 stroke-[1.5]"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                  ATS-friendly by design
                </h3>
<p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Clean structure, semantic sections, and fonts that parse reliably across applicant tracking systems.
                </p>
</div>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Live ATS readiness score as you edit.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Keyword hints based on your target role.</span>
</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 space-y-3 sm:space-y-4">
<div className="h-8 w-8 rounded-lg bg-indigo-500/15 flex items-center justify-center">
<i aria-hidden="true" className="lucide lucide-layout-template h-4 w-4 text-indigo-300 stroke-[1.5]"></i>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                  Polished templates
                </h3>
<p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  Professionally balanced layouts for designers, engineers, marketers, and more — always one page if you need it.
                </p>
</div>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-indigo-400"></span>
<span>Switch templates without reformatting content.</span>
</li>
<li className="flex items-start gap-1.5">
<span className="mt-1 h-1 w-1 rounded-full bg-indigo-400"></span>
<span>Export to high-resolution PDF in a click.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80" id="templates">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Templates for every stage of your career.
              </h2>
<p className="mt-2 text-sm sm:text-base text-slate-300/90 max-w-xl">
                Pick a layout that fits your story. Switch any time without losing content or structure.
              </p>
</div>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors h-9 sm:h-10 px-3 sm:px-4">
              Browse all templates
            </button>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/70 hover:bg-slate-950/90 transition-colors p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                    Focused
                  </h3>
<p className="text-xs sm:text-sm text-slate-400">
                    One-page, role-first layout for IC positions.
                  </p>
</div>
<span className="text-[0.65rem] sm:text-xs text-sky-300 border border-sky-500/50 rounded-full px-2 py-0.5">
                  Popular
                </span>
</div>
<div className="relative rounded-xl border border-slate-800 bg-slate-900/80 aspect-[4/5] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/80 pointer-events-none"></div>
<div className="absolute inset-2 sm:inset-2.5 border border-slate-800/80 rounded-lg">
<div className="h-6 sm:h-7 border-b border-slate-800 bg-slate-950/80"></div>
<div className="p-2 sm:p-2.5 space-y-1.5">
<div className="h-2 sm:h-2.5 bg-slate-700/70 rounded w-2/5"></div>
<div className="space-y-1">
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-11/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-9/12"></div>
</div>
<div className="mt-2 grid grid-cols-2 gap-1">
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-3/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-9/12"></div>
</div>
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-2/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-8/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-7/12"></div>
</div>
</div>
</div>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                Best for designers, engineers, and IC roles where clarity and focus matter most.
              </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-emerald-500/70 hover:bg-slate-950/90 transition-colors p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                    Narrative
                  </h3>
<p className="text-xs sm:text-sm text-slate-400">
                    Story-driven layout for managers and leads.
                  </p>
</div>
<span className="text-[0.65rem] sm:text-xs text-emerald-300 border border-emerald-500/50 rounded-full px-2 py-0.5">
                  New
                </span>
</div>
<div className="relative rounded-xl border border-slate-800 bg-slate-900/80 aspect-[4/5] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/80 pointer-events-none"></div>
<div className="absolute inset-2 sm:inset-2.5 border border-slate-800/80 rounded-lg">
<div className="flex">
<div className="w-2/5 border-r border-slate-800 bg-slate-950/80 h-full"></div>
<div className="w-3/5 h-full"></div>
</div>
<div className="absolute inset-2 sm:inset-2.5 p-2 sm:p-2.5 space-y-1.5">
<div className="h-2 sm:h-2.5 bg-slate-700/80 rounded w-1/2"></div>
<div className="grid grid-cols-2 gap-1 mt-1.5">
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-11/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-9/12"></div>
</div>
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-8/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-7/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-6/12"></div>
</div>
</div>
<div className="mt-2 space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-3/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-11/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
</div>
</div>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                Perfect for highlighting leadership, cross-functional work, and longer career arcs.
              </p>
</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-indigo-500/70 hover:bg-slate-950/90 transition-colors p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                    Compact
                  </h3>
<p className="text-xs sm:text-sm text-slate-400">
                    Dense, skills-forward layout for early careers.
                  </p>
</div>
</div>
<div className="relative rounded-xl border border-slate-800 bg-slate-900/80 aspect-[4/5] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/80 pointer-events-none"></div>
<div className="absolute inset-2 sm:inset-2.5 border border-slate-800/80 rounded-lg">
<div className="h-5 sm:h-6 border-b border-slate-800 bg-slate-950/90"></div>
<div className="p-2 sm:p-2.5 space-y-1">
<div className="grid grid-cols-3 gap-1.5">
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-4/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-9/12"></div>
</div>
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-3/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-9/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-8/12"></div>
</div>
<div className="space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-2/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-7/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-6/12"></div>
</div>
</div>
<div className="mt-1.5 space-y-0.5">
<div className="h-1 sm:h-1.5 bg-slate-700 rounded w-2/5"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-11/12"></div>
<div className="h-1 sm:h-1.5 bg-slate-800 rounded w-10/12"></div>
</div>
</div>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                Ideal for internships, graduates, and role switches where skills and projects come first.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80" id="how-it-works">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-8 sm:mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              From signup to PDF in under 10 minutes.
            </h2>
<p className="mt-2 text-sm sm:text-base text-slate-300/90">
              A guided flow that keeps you moving, even if you are starting from a blank page.
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 h-6 w-6 text-xs font-medium text-slate-100">
                  1
                </div>
<span className="text-[0.65rem] sm:text-xs text-slate-400">
                  1–2 minutes
                </span>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                Import or start from scratch
              </h3>
<p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Paste your existing CV, upload a file, or answer a few quick questions to generate a first version.
              </p>
<div className="mt-3 sm:mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 sm:p-3 flex items-center gap-2">
<i aria-hidden="true" className="lucide lucide-file-input h-4 w-4 text-slate-300 stroke-[1.5]"></i>
<div className="flex-1">
<p className="text-xs text-slate-200">
                    Drag &amp; drop your current CV
                  </p>
<p className="text-[0.65rem] text-slate-500">
                    We will extract and clean your content automatically.
                  </p>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 h-6 w-6 text-xs font-medium text-slate-100">
                  2
                </div>
<span className="text-[0.65rem] sm:text-xs text-slate-400">
                  4–6 minutes
                </span>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                Shape your story with AI
              </h3>
<p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Highlight what matters: responsibilities become measurable outcomes, tailored to each role.
              </p>
<div className="mt-3 sm:mt-4 space-y-2">
<div className="rounded-lg border border-sky-700/60 bg-sky-950/40 p-2.5 sm:p-3">
<p className="text-[0.7rem] sm:text-xs text-sky-100 leading-snug">
                    “Improved dashboard UX” → “Redesigned analytics dashboard, cutting time-to-insight by 35% for 20k+ users.”
                  </p>
</div>
<button className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors h-8 sm:h-9 px-3 sm:px-4">
<i aria-hidden="true" className="lucide lucide-sparkles mr-1.5 h-3.5 w-3.5 stroke-[1.5]"></i>
                  See AI examples
                </button>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 border border-slate-700 h-6 w-6 text-xs font-medium text-slate-100">
                  3
                </div>
<span className="text-[0.65rem] sm:text-xs text-slate-400">
                  1–2 minutes
                </span>
</div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                Pick a template &amp; export
              </h3>
<p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Choose from modern templates, tweak fonts and spacing, and export a crisp PDF in one click.
              </p>
<div className="mt-3 sm:mt-4 flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 sm:p-3">
<div className="flex items-center gap-2">
<i aria-hidden="true" className="lucide lucide-download h-4 w-4 text-emerald-300 stroke-[1.5]"></i>
<div>
<p className="text-xs text-slate-200">One-click export</p>
<p className="text-[0.65rem] text-slate-500">Print-ready PDF, always aligned.</p>
</div>
</div>
<span className="text-[0.65rem] sm:text-xs text-slate-400">
                  + DOCX, PNG soon
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80" id="pricing">
<div className="max-w-6xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Simple pricing for serious job searches.
              </h2>
<p className="mt-2 text-sm sm:text-base text-slate-300/90 max-w-xl">
                Start for free, upgrade only when you are ready to apply. No hidden fees, no lock-in.
              </p>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<i aria-hidden="true" className="lucide lucide-lock h-4 w-4 stroke-[1.5]"></i>
<span>7-day money-back guarantee on paid plans</span>
</div>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-5 sm:gap-6 lg:gap-7 items-stretch">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5 flex flex-col">
<div className="flex items-center justify-between mb-3 sm:mb-4">
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                  Free
                </h3>
<span className="text-[0.65rem] sm:text-xs text-slate-400">
                  For trying things out
                </span>
</div>
<div className="flex items-baseline gap-1 mb-3 sm:mb-4">
<span className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                  $0
                </span>
<span className="text-xs sm:text-sm text-slate-400">
                  forever
                </span>
</div>
<p className="text-sm text-slate-300 mb-3 sm:mb-4">
                Build and export a polished CV with the essentials covered.
              </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
<span>1 active CV and 2 basic templates.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
<span>Basic export to watermark-free PDF.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
<span>Manual editing for all sections.</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors h-10 sm:h-11 px-4 sm:px-5">
                Start with Free
              </button>
</div>

<div className="relative rounded-2xl border border-sky-500/70 bg-slate-950/80 p-4 sm:p-5 shadow-lg shadow-sky-900/40 flex flex-col">
<div className="absolute -top-3 right-4 sm:right-5 inline-flex items-center rounded-full bg-sky-500 text-[0.65rem] sm:text-xs font-medium text-slate-950 px-2.5 py-0.5">
                Recommended
              </div>
<div className="flex items-center justify-between mb-3 sm:mb-4">
<h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                  Pro
                </h3>
<span className="text-[0.65rem] sm:text-xs text-slate-200">
                  For active job searches
                </span>
</div>
<div className="flex items-baseline gap-1 mb-3 sm:mb-4">
<span className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                  $9
                </span>
<span className="text-xs sm:text-sm text-slate-300">
                  per month
                </span>
</div>
<p className="text-sm text-slate-200 mb-3 sm:mb-4">
                Everything in Free, plus powerful AI and unlimited exports.
              </p>
<ul className="space-y-1.5 text-xs sm:text-sm text-slate-100 mb-4 sm:mb-5">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Unlimited CVs, profiles, and premium templates.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>AI rewrite and summarization for every section.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Live ATS scoring and keyword suggestions.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Version history and role-specific variants.</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center rounded-lg bg-sky-500 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors h-10 sm:h-11 px-4 sm:px-5">
                Upgrade to Pro
              </button>
<p className="mt-2 text-[0.65rem] sm:text-xs text-slate-300">
                Cancel anytime. Keep access to your exported PDFs forever.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80">
<div className="max-w-6xl mx-auto py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950/90 p-5 sm:p-6 lg:p-7 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6">
<div className="flex-1 space-y-2 sm:space-y-2.5">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Ready to ship a CV you are proud of?
              </h2>
<p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Create your first CV for free. No credit card required, no commitment — just a clearer story of what you can do.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
<button className="flex-1 inline-flex items-center justify-center rounded-lg bg-sky-500 text-sm sm:text-base font-medium text-slate-950 hover:bg-sky-400 transition-colors h-10 sm:h-11 px-4 sm:px-6">
                Start building your CV
              </button>
<button className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-xs sm:text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors h-10 sm:h-11 px-4 sm:px-5">
<i aria-hidden="true" className="lucide lucide-message-circle mr-1.5 h-3.5 w-3.5 stroke-[1.5]"></i>
                Talk to support
              </button>
</div>
</div>
</div>
</section>
<footer className="border-t border-slate-900/80">
<div className="max-w-6xl mx-auto py-5 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[0.7rem] sm:text-xs text-slate-500">
<div className="flex items-center gap-2">
<span className="tracking-tight font-medium text-slate-300">CVForge</span>
<span>·</span>
<span>© <span id="year"></span> All rights reserved.</span>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-300 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
