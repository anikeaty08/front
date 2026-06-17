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



                  document.write(new Date().getFullYear());
                
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
      
<div className="min-h-screen flex flex-col" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Inter\', sans-serif'}}>

<div className="flex-1 flex flex-col lg:flex-row">

<aside className="w-full lg:w-2/5 xl:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950/60 backdrop-blur-sm">
<div className="h-full flex flex-col justify-between">

<div className="p-6 sm:p-8 lg:p-10 space-y-8">

<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 via-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-sky-500/20">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                      SE
                    </span>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-100">
                      Your Name
                    </p>
<p className="text-xs text-slate-400">
                      Software Engineer
                    </p>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[0.7rem] font-medium tracking-tight text-emerald-100">
                      Available for work
                    </span>
</span>
</div>
</div>

<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-slate-50">
                  Building reliable systems and delightful developer tools.
                </h1>
<p className="text-base text-slate-300 leading-relaxed">
                  I’m a software engineer focused on designing resilient
                  backends, clean APIs, and pragmatic frontend experiences.
                  Comfortable across the stack, opinionated about DX, and
                  obsessed with maintainable code.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
<div className="space-y-1.5">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Location
                  </p>
<p>City, Country</p>
</div>
<div className="space-y-1.5">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Focus
                  </p>
<p>Backend · APIs · Platforms</p>
</div>
<div className="space-y-1.5">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Experience
                  </p>
<p>5+ years</p>
</div>
<div className="space-y-1.5">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Currently
                  </p>
<p>Open to full-time &amp; freelance</p>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-500 text-slate-950 text-sm font-medium tracking-tight px-4 py-2.5 transition-colors shadow-md shadow-sky-500/30" href="mailto:you@example.com">
<i className="lucide lucide-send h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>Contact me</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 hover:bg-slate-900 text-sm font-medium tracking-tight px-4 py-2.5 text-slate-200 transition-colors" href="#projects">
<i className="lucide lucide-chevron-right h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>View projects</span>
</a>
</div>

<div className="flex flex-wrap items-center gap-3 text-sm">
<a className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors" href="https://github.com/your-handle" target="_blank">
<i className="lucide lucide-github h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>GitHub</span>
</a>
<a className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors" href="https://www.linkedin.com/in/your-handle" target="_blank">
<i className="lucide lucide-linkedin h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>LinkedIn</span>
</a>
<a className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors" href="https://your-blog-or-website.com" target="_blank">
<i className="lucide lucide-globe-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
<span>Website</span>
</a>
</div>
</div>

<div className="border-t border-slate-800/80 bg-slate-950/80 px-6 sm:px-8 lg:px-10 py-4 sm:py-5">
<div className="flex flex-wrap items-start justify-between gap-4">
<div className="space-y-2">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Core stack
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      TypeScript
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      Node.js
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      React
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      PostgreSQL
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      AWS
                    </span>
</div>
</div>
<div className="&lt;p class=" text-slate-500"="" text-xs="" tracking-[0.16em]="" uppercase="">
                    Strengths
                  
<div className="flex flex-wrap gap-1.5">
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      System Design
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      API Design
                    </span>
<span className="rounded-md bg-slate-900/80 border border-slate-700/70 px-2.5 py-1 text-xs text-slate-100">
                      Developer Experience
                    </span>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-slate-950/40">
<div className="relative h-full w-full px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 space-y-10 overflow-y-auto">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-40">
<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
</div>

<section aria-label="Profile overview" className="relative grid gap-4 sm:gap-5 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-center justify-between gap-3">
<div className="space-y-1">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Recent focus
                    </p>
<p className="text-sm text-slate-200">
                      High-throughput APIs · observability · performance
                    </p>
</div>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300">
<i className="lucide lucide-cpu h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-center justify-between gap-3">
<div className="space-y-1">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Impact
                    </p>
<p className="text-sm text-slate-200">
                      Helped teams ship faster with better tooling &amp; automation.
                    </p>
</div>
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
<i className="lucide lucide-rocket h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40 md:col-span-1">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex items-center justify-between gap-3">
<div className="space-y-1">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Looking for
                    </p>
<p className="text-sm text-slate-200">
                      Product-minded engineering roles on small, senior teams.
                    </p>
</div>
<div 10="" bg-violet-500="" className="flex class=" flex="" h-9="" items-center="" justify-center="" rounded-lg="" text-violet-300"="" w-9="">
<i className="lucide lucide-users h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</section>

<section aria-labelledby="projects-title" className="relative space-y-4 sm:space-y-5" id="projects">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs uppercase tracking-[0.16em] text-slate-500" id="projects-title">
                    Selected work
                  </p>
<h2 className="mt-1 text-lg sm:text-xl font-semibold text-slate-50">
                    Projects that ship real value
                  </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300" href="mailto:you@example.com">
<span>Request full portfolio</span>
<i className="lucide lucide-arrow-up-right h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="grid gap-4 md:grid-cols-2">

<article className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40 flex flex-col gap-4">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<header className="relative flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                        API Platform for Internal Tools
                      </h3>
<p className="mt-1 text-xs text-slate-400">
                        Unified gateway for dozens of microservices, powering dashboards and automations.
                      </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-sky-200">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                      Live
                    </span>
</header>
<div className="relative space-y-3 text-xs text-slate-300">
<p>
                      Designed and led implementation of an internal API platform handling
                      millions of requests/day with built-in auth, rate limiting, and
                      observability baked in.
                    </p>
<ul className="list-disc list-inside space-y-1 text-slate-400">
<li>Cut integration time for new services from weeks to days.</li>
<li>Standardized logging and tracing across 15+ teams.</li>
</ul>
</div>
<div className="relative flex flex-wrap items-center justify-between gap-3 pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        TypeScript
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        Node.js
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        PostgreSQL
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        OpenTelemetry
                      </span>
</div>
<a className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 hover:text-sky-300" href="#">
<span>View details</span>
<i className="lucide lucide-arrow-right h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40 flex flex-col gap-4">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<header className="relative flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                        Continuous Delivery Pipeline Revamp
                      </h3>
<p className="mt-1 text-xs text-slate-400">
                        End‑to‑end CI/CD pipeline for microservices with automated checks.
                      </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Case study
                    </span>
</header>
<div className="relative space-y-3 text-xs text-slate-300">
<p>
                      Implemented a robust CI/CD pipeline with preview environments,
                      canary deploys, and automated rollbacks, integrated deeply with GitHub.
                    </p>
<ul className="list-disc list-inside space-y-1 text-slate-400">
<li>Reduced deployment time from 30 minutes to under 5.</li>
<li>Improved release confidence with automated checks and alerts.</li>
</ul>
</div>
<div className="relative flex flex-wrap items-center justify-between gap-3 pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        GitHub Actions
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        Docker
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        Kubernetes
                      </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                        Prometheus
                      </span>
</div>
<a className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200" href="#">
<span>Read more</span>
<i className="lucide lucide-arrow-right h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 shadow-sm shadow-slate-900/40 flex flex-col gap-4 md:col-span-2">
<div aria-hidden="true" className="absolute inset-px rounded-lg bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<header className="relative flex flex-wrap items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                        Developer Experience Dashboard
                      </h3>
<p className="mt-1 text-xs text-slate-400">
                        Central hub for build health, incidents, and engineering metrics.
                      </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[0.7rem] font-medium text-violet-100">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
                      Internal
                    </span>
</header>
<div className="relative grid gap-4 md:grid-cols-3 text-xs text-slate-300">
<div className="md:col-span-2 space-y-3">
<p>
                        Built a DX dashboard surfacing key signals from CI, incidents, and
                        release cycles, enabling teams to spot friction early and track
                        improvements over time.
                      </p>
<ul className="list-disc list-inside space-y-1 text-slate-400">
<li>Standardized engineering health metrics across squads.</li>
<li>Provided self‑serve insights without manual reporting.</li>
</ul>
</div>
<div className="flex flex-col justify-between rounded-lg border border-slate-800/80 bg-slate-950/50 p-3 space-y-2">
<p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">
                        Highlights
                      </p>
<dl className="space-y-1.5 text-[0.7rem]">
<div className="flex items-center justify-between gap-2">
<dt className="text-slate-400">Build success</dt>
<dd className="text-emerald-300 font-medium">+18%</dd>
</div>
<div className="flex items-center justify-between gap-2">
<dt className="text-slate-400">MTTR</dt>
<dd className="text-emerald-300 font-medium">‑35%</dd>
</div>
<div className="flex items-center justify-between gap-2">
<dt className="text-slate-400">Lead time</dt>
<dd className="text-emerald-300 font-medium">‑22%</dd>
</div>
</dl>
<div className="flex flex-wrap gap-1.5 pt-1">
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                          React
                        </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                          Next.js
                        </span>
<span className="rounded-md bg-slate-950/60 border border-slate-700/70 px-2 py-0.5 text-[0.7rem] text-slate-200">
                          Tailwind
                        </span>
</div>
</div>
</div>
<div className="relative flex items-center justify-between gap-3 pt-2">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<i className="lucide lucide-info h-3 w-3" style={{strokeWidth: '1.5'}}></i>
<span>Demo and walkthrough available on request.</span>
</div>
<a className="inline-flex items-center gap-1 text-xs font-medium text-violet-300 hover:text-violet-200" href="#">
<span>Request demo</span>
<i className="lucide lucide-video h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</article>
</div>
</section>

<section aria-labelledby="experience-title" className="relative grid gap-6 lg:grid-cols-[1.1fr,0.9fr] items-start">

<div className="space-y-4 sm:space-y-5">
<div>
<p className="text-xs uppercase tracking-[0.16em] text-slate-500" id="experience-title">
                    Experience
                  </p>
<h2 className="mt-1 text-lg sm:text-xl font-semibold text-slate-50">
                    Roles where I’ve led and shipped
                  </h2>
</div>
<ol className="space-y-4">

<li className="relative rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                          Senior Software Engineer · ACME Corp
                        </h3>
<p className="mt-1 text-xs text-slate-400">
                          Platform team · API &amp; infrastructure
                        </p>
</div>
<p className="text-[0.7rem] text-slate-500 whitespace-nowrap">
                        2021 — Present
                      </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs text-slate-300">
<li>
                        Led design and rollout of API platform adopted by 15+ teams.
                      </li>
<li>
                        Partnered with product and SRE to define SLAs and error budgets.
                      </li>
<li>
                        Mentored 4 engineers on system design and technical communication.
                      </li>
</ul>
</li>

<li className="relative rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                          Software Engineer · Startup XYZ
                        </h3>
<p className="mt-1 text-xs text-slate-400">
                          Product engineering · Web &amp; backend
                        </p>
</div>
<p className="text-[0.7rem] text-slate-500 whitespace-nowrap">
                        2018 — 2021
                      </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs text-slate-300">
<li>
                        Shipped core customer onboarding flow, increasing activation by 15%.
                      </li>
<li>
                        Introduced type‑safe APIs and testing practices across services.
                      </li>
<li>
                        Collaborated closely with design on UX for complex workflows.
                      </li>
</ul>
</li>

<li className="relative rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-sm font-semibold text-slate-50">
                          Software Engineer · Freelance
                        </h3>
<p className="mt-1 text-xs text-slate-400">
                          Early‑stage startups · MVPs &amp; prototypes
                        </p>
</div>
<p className="text-[0.7rem] text-slate-500 whitespace-nowrap">
                        2016 — 2018
                      </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs text-slate-300">
<li>
                        Helped founders validate ideas quickly with focused MVPs.
                      </li>
<li>
                        Built maintainable codebases that teams could grow into.
                      </li>
</ul>
</li>
</ol>
</div>

<aside aria-label="Tooling &amp; skills" className="space-y-4 sm:space-y-5">
<div>
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Toolbox
                  </p>
<h2 className="mt-1 text-lg sm:text-xl font-semibold text-slate-50">
                    Skills that support the work
                  </h2>
</div>

<div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Technical
                    </p>
<i className="lucide lucide-wrench h-4 w-4 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
<dl className="grid grid-cols-2 gap-3 text-xs text-slate-300">
<div className="space-y-1">
<dt className="text-slate-400">Languages</dt>
<dd>TypeScript, JavaScript, Go, SQL</dd>
</div>
<div className="space-y-1">
<dt className="text-slate-400">Frameworks</dt>
<dd>Node.js, React, Next.js, Express</dd>
</div>
<div className="space-y-1">
<dt className="text-slate-400">Datastores</dt>
<dd>PostgreSQL, Redis, DynamoDB</dd>
</div>
<div className="space-y-1">
<dt className="text-slate-400">Cloud / Infra</dt>
<dd>AWS, Docker, Kubernetes, Terraform</dd>
</div>
</dl>
</div>

<div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Ways of working
                    </p>
<i className="lucide lucide-compass h-4 w-4 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
<ul className="space-y-1.5 text-xs text-slate-300">
<li>Product‑minded engineering with focus on outcomes.</li>
<li>Strong written communication and RFC‑driven planning.</li>
<li>Comfortable in distributed, async‑first teams.</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800/80 bg-gradient-to-br from-sky-950/80 via-slate-950/80 to-violet-950/80 p-4 sm:p-5 space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
<i className="lucide lucide-mail h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-50">
                        Let’s talk
                      </p>
<p className="text-xs text-slate-400">
                        Briefly describe your project or role and I’ll respond within a day.
                      </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 pt-1">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 active:bg-sky-500 text-slate-950 text-xs font-medium tracking-tight px-3 py-2 transition-colors" href="mailto:you@example.com?subject=Opportunity%20to%20connect">
<span>Email me</span>
<i className="lucide lucide-send h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/70 hover:bg-slate-900 text-slate-100 text-xs font-medium tracking-tight px-3 py-2 transition-colors" href="https://cal.com/your-handle" target="_blank">
<span>Book a call</span>
<i className="lucide lucide-calendar h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</aside>
</section>

<footer className="relative border-t border-slate-800/80 pt-4 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.7rem] text-slate-500">
<p>
                ©
                
                Your Name. All rights reserved.
              </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-1 hover:text-slate-300" href="mailto:you@example.com">
<i className="lucide lucide-mail h-3 w-3" style={{strokeWidth: '1.5'}}></i>
<span>you@example.com</span>
</a>
<span className="hidden sm:inline text-slate-700">·</span>
<a className="inline-flex items-center gap-1 hover:text-slate-300" href="https://github.com/your-handle" target="_blank">
<i className="lucide lucide-github h-3 w-3" style={{strokeWidth: '1.5'}}></i>
<span>@your-handle</span>
</a>
</div>
</footer>
</div>
</main>
</div>
</div>

    </>
  );
}
