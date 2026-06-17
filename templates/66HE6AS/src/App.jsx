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
      

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
<div className="absolute -top-32 -left-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
<div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-200/30 blur-3xl"></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="bloq home" className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-blue-600 text-white grid place-items-center ring-1 ring-blue-700/30 shadow-sm">
<span className="text-sm font-semibold tracking-tight">b</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">bloq</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#roles">Open roles</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#teams">Teams</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#culture">Culture</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors" href="#process">Process</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" id="btnSignIn">
<i className="h-4 w-4" data-lucide="user"></i>
              Sign in
            </button>
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" href="#roles">
<i className="h-4 w-4" data-lucide="briefcase"></i>
              View roles
            </a>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 lg:py-20">
<div className="flex flex-col justify-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Build the quantum future at <span className="text-blue-700">bloq</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">
              Join world-class researchers and engineers shipping quantum software, hardware integrations, and post-quantum security—today.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" href="#roles">
                Explore open roles
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" href="#process">
                Hiring process
                <i className="h-4 w-4" data-lucide="route"></i>
</a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Team member" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Team member" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Team member" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">200+ people across research, engineering, and product.</p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 -z-10">
<div className="absolute left-1/2 top-6 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-200/30 blur-2xl"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/80">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-blue-50 text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="atom"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-800">Quantum Workbench</p>
<p className="text-xs text-slate-500">bloq internal tooling</p>
</div>
</div>
<div className="text-xs text-slate-500">live</div>
</div>
<div className="mt-4 rounded-md border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-xs font-medium text-slate-700">Qubits</p>
<p className="text-xs text-blue-700">128</p>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
<div className="h-1.5 rounded-full bg-blue-600" style={{width: '64%'}}></div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-md border border-slate-200 p-3">
<p className="text-[11px] text-slate-500">Error rate</p>
<p className="text-sm font-medium text-slate-800">0.23%</p>
</div>
<div className="rounded-md border border-slate-200 p-3">
<p className="text-[11px] text-slate-500">Shots</p>
<p className="text-sm font-medium text-slate-800">50k</p>
</div>
<div className="rounded-md border border-slate-200 p-3">
<p className="text-[11px] text-slate-500">Latency</p>
<p className="text-sm font-medium text-slate-800">18ms</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-600">
<i className="h-4 w-4" data-lucide="lock"></i>
<span className="text-xs">Enterprise-grade</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">
                    Open Console
                    <i className="h-3.5 w-3.5" data-lucide="external-link"></i>
</button>
</div>
</div>
<div className="h-px w-full bg-slate-200"></div>
<div className="grid grid-cols-2 gap-0">
<div className="p-4 sm:p-5">
<p className="text-xs text-slate-500">Supported providers</p>
<div className="mt-2 flex items-center gap-2">
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">IonQ</span>
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Rigetti</span>
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">IBM Q</span>
</div>
</div>
<div className="p-4 sm:p-5 border-l border-slate-200">
<p className="text-xs text-slate-500">Languages</p>
<div className="mt-2 flex items-center gap-2">
<span className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Python</span>
<span className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">Rust</span>
<span className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">C++</span>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-slate-500">This is a conceptual preview of internal tools you might use on the job.</p>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</section>

<section className="relative z-10 py-12 sm:py-16" id="roles">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Open positions</h2>
<p className="mt-2 text-sm text-slate-600">Each role includes a focused take-home assignment aligned with day-to-day work.</p>
</div>
<div className="w-full sm:w-auto">
<div className="flex w-full items-center gap-3">
<div className="relative flex-1">
<i className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm hover:border-blue-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/70 focus:outline-none" id="searchInput" placeholder="Search roles, teams, locations…" type="text"/>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600" id="filterToggle">
<i className="h-4 w-4" data-lucide="filter"></i>
                  Filters
                </button>
<div className="absolute right-0 mt-2 w-64 rounded-md border border-slate-200 bg-white p-3 shadow-lg ring-1 ring-slate-200/80 hidden" id="filterMenu">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-700">Filter roles</span>
<button className="text-xs text-blue-700 hover:underline" id="clearFilters">Clear</button>
</div>
<div className="mt-3 space-y-3">
<div>
<p className="text-[11px] uppercase tracking-wide text-slate-500">Team</p>
<div className="mt-2 flex flex-wrap gap-2">
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Research">Research</button>
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Engineering">Engineering</button>
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Security">Security</button>
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Product">Product</button>
</div>
</div>
<div>
<p className="text-[11px] uppercase tracking-wide text-slate-500">Work type</p>
<div className="mt-2 flex flex-wrap gap-2">
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Remote">Remote</button>
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Hybrid">Hybrid</button>
<button className="chip inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800" data-chip="Onsite">Onsite</button>
</div>
</div>
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" id="applyFilters">
                        Apply filters
                      </button>
</div>
</div>
</div>
</div>
<span className="hidden sm:inline text-sm text-slate-500" id="resultCount">5 roles</span>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="jobsGrid">

<article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-200/60 hover:border-blue-300 hover:ring-blue-200" data-tags="Research,Remote">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 grid place-items-center text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="beaker"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Quantum Algorithms Researcher</h3>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Remote</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Research</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Full-time</span>
</div>
</div>
</div>
<button aria-label="Share role" className="rounded-md p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50/60 ring-1 ring-transparent hover:ring-blue-100">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
</div>
<p className="mt-3 text-sm text-slate-600">Design and analyze near-term algorithms for optimization, simulation, and error mitigation.</p>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Assignment preview</p>
<span className="text-xs text-blue-700">~90 min</span>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Implement VQE for a small molecular Hamiltonian.</li>
<li>Compare performance across noise models.</li>
<li>Share insights and trade-offs.</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" data-open-modal="#modal-researcher">
                  Start assignment
                  <i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
                  Apply now
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-200/60 hover:border-blue-300 hover:ring-blue-200" data-tags="Engineering,Hybrid">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 grid place-items-center text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Quantum Software Engineer</h3>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Hybrid (SF)</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="code-2"></i> Engineering</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Full-time</span>
</div>
</div>
</div>
<button aria-label="Share role" className="rounded-md p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50/60 ring-1 ring-transparent hover:ring-blue-100">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
</div>
<p className="mt-3 text-sm text-slate-600">Ship SDKs and services bridging classical and quantum backends with reliability and speed.</p>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Assignment preview</p>
<span className="text-xs text-blue-700">~120 min</span>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Build a small circuit transpiler pass.</li>
<li>Implement async job orchestration.</li>
<li>Expose a typed HTTP API endpoint.</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" data-open-modal="#modal-software">
                  Start assignment
                  <i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
                  Apply now
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-200/60 hover:border-blue-300 hover:ring-blue-200" data-tags="Engineering,Remote">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 grid place-items-center text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="server-cog"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">DevOps Engineer — Quantum Cloud</h3>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Remote</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="wrench"></i> Engineering</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Full-time</span>
</div>
</div>
</div>
<button aria-label="Share role" className="rounded-md p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50/60 ring-1 ring-transparent hover:ring-blue-100">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
</div>
<p className="mt-3 text-sm text-slate-600">Scale infrastructure for heterogeneous quantum/classical workloads, with strong reliability and observability.</p>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Assignment preview</p>
<span className="text-xs text-blue-700">~75 min</span>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Provision a job queue with autoscaling.</li>
<li>Add distributed tracing for a sample pipeline.</li>
<li>Provide Terraform and runbook docs.</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" data-open-modal="#modal-devops">
                  Start assignment
                  <i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
                  Apply now
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-200/60 hover:border-blue-300 hover:ring-blue-200" data-tags="Security,Remote">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 grid place-items-center text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="shield"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Security Engineer — Post‑Quantum</h3>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Remote</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="key-round"></i> Security</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Full-time</span>
</div>
</div>
</div>
<button aria-label="Share role" className="rounded-md p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50/60 ring-1 ring-transparent hover:ring-blue-100">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
</div>
<p className="mt-3 text-sm text-slate-600">Implement NIST PQC primitives and migrate services with zero-downtime and strong crypto hygiene.</p>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Assignment preview</p>
<span className="text-xs text-blue-700">~60 min</span>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Integrate Kyber/Dilithium into a sample service.</li>
<li>Rotate certificates with canary strategy.</li>
<li>Threat model and mitigations.</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" data-open-modal="#modal-security">
                  Start assignment
                  <i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
                  Apply now
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-slate-200/60 hover:border-blue-300 hover:ring-blue-200" data-tags="Product,Hybrid">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 grid place-items-center text-blue-700 ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Product Manager — Quantum Services</h3>
<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Hybrid (NYC)</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="layout-dashboard"></i> Product</span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 ring-1 ring-slate-200"><i className="h-3.5 w-3.5" data-lucide="clock"></i> Full-time</span>
</div>
</div>
</div>
<button aria-label="Share role" className="rounded-md p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50/60 ring-1 ring-transparent hover:ring-blue-100">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
</div>
<p className="mt-3 text-sm text-slate-600">Define strategy and roadmap for developer-first quantum services across industries.</p>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Assignment preview</p>
<span className="text-xs text-blue-700">~45 min</span>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Draft a one‑pager for a new workload API.</li>
<li>Define success metrics and experiment plan.</li>
<li>Produce release plan and cut scope.</li>
</ul>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-blue-700/30 hover:bg-blue-700 hover:ring-blue-800/40" data-open-modal="#modal-product">
                  Start assignment
                  <i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
                  Apply now
                  <i className="h-3.5 w-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>

<div className="mt-8 rounded-lg border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-900">
<div className="flex items-start gap-2">
<i className="h-4 w-4 mt-[2px]" data-lucide="info"></i>
<p>Assignments are designed to be practical and time‑bounded. We value clarity, trade‑offs, and communication over perfection.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 sm:py-16" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Hiring process</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="file-text"></i>
<p className="text-sm font-medium">1. Apply</p>
</div>
<p className="mt-2 text-sm text-slate-600">Share your background and preferences.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="messages-square"></i>
<p className="text-sm font-medium">2. Intro chat</p>
</div>
<p className="mt-2 text-sm text-slate-600">Meet the team and align on role and impact.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="clipboard-check"></i>
<p className="text-sm font-medium">3. Assignment</p>
</div>
<p className="mt-2 text-sm text-slate-600">Complete a focused task reflective of the job.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4" data-lucide="handshake"></i>
<p className="text-sm font-medium">4. Offer</p>
</div>
<p className="mt-2 text-sm text-slate-600">Join us to build the future of quantum.</p>
</div>
</div>
</div>
<div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</section>

<section className="relative z-10 py-12 sm:py-16" id="culture">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Why bloq</h2>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-blue-700" data-lucide="radar"></i>
<p className="text-sm text-slate-600">Tackle foundational problems in algorithms, control, and error correction with direct impact.</p>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-blue-700" data-lucide="layers"></i>
<p className="text-sm text-slate-600">Work across the stack — from firmware integrations to developer APIs.</p>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-blue-700" data-lucide="globe"></i>
<p className="text-sm text-slate-600">Distributed-first culture with hubs in SF and NYC.</p>
</li>
</ul>
</div>
<div id="teams">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/80">
<img alt="Team collaboration" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex flex-wrap items-center gap-2">
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Research</span>
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Engineering</span>
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Security</span>
<span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Product</span>
</div>
<p className="mt-3 text-sm text-slate-600">We’re an interdisciplinary group turning breakthroughs into robust products used by developers and enterprises.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-blue-600 text-white grid place-items-center ring-1 ring-blue-700/30 shadow-sm">
<span className="text-sm font-semibold tracking-tight">b</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">bloq</p>
<p className="text-xs text-slate-500">Quantum computing for builders</p>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-600 hover:text-blue-700" href="#">Privacy</a>
<a className="text-sm text-slate-600 hover:text-blue-700" href="#">Terms</a>
<a className="text-sm text-slate-600 hover:text-blue-700" href="#">Contact</a>
</div>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 hidden items-end sm:items-center justify-center" id="modal-researcher">
<div className="absolute inset-0 bg-slate-900/50" data-close-modal=""></div>
<div className="relative w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="beaker"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Assignment — Quantum Algorithms Researcher</h3>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-700" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> ~90 min
            </span>
<span className="text-xs text-slate-500">Use Python + a quantum SDK of your choice.</span>
</div>
<ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2">
<li>Implement VQE for H2 using a minimal ansatz; plot energy convergence.</li>
<li>Simulate under two noise models; discuss effects on convergence.</li>
<li>Propose a mitigation strategy and evaluate results.</li>
</ol>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Deliverables</p>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Notebook (.ipynb) or repo link.</li>
<li>Short README with decisions and trade‑offs.</li>
<li>Charts for convergence and noise comparison.</li>
</ul>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
<i className="h-4 w-4" data-lucide="link"></i>
              Open sandbox
            </a>
<label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50">
<i className="h-4 w-4" data-lucide="upload-cloud"></i>
              Upload submission
              <input className="sr-only" type="file"/>
</label>
</div>
</div>
<div className="border-t border-slate-200 px-5 py-4 flex items-center justify-between">
<p className="text-xs text-slate-500">We review within 3 business days.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700" data-close-modal="">
            Done
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-end sm:items-center justify-center" id="modal-software">
<div className="absolute inset-0 bg-slate-900/50" data-close-modal=""></div>
<div className="relative w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="cpu"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Assignment — Quantum Software Engineer</h3>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-700" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> ~120 min
            </span>
<span className="text-xs text-slate-500">Python or Rust; HTTP JSON API.</span>
</div>
<ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2">
<li>Implement a circuit transpiler pass (merge adjacent single-qubit rotations).</li>
<li>Job runner with async queue + retry/backoff; expose status endpoint.</li>
<li>Provide OpenAPI spec and minimal client.</li>
</ol>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Deliverables</p>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Repo link with instructions and tests.</li>
<li>API spec and example curl calls.</li>
<li>Notes on complexity and trade‑offs.</li>
</ul>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
<i className="h-4 w-4" data-lucide="link"></i>
              Open sandbox
            </a>
<label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50">
<i className="h-4 w-4" data-lucide="upload-cloud"></i>
              Upload submission
              <input className="sr-only" type="file"/>
</label>
</div>
</div>
<div className="border-t border-slate-200 px-5 py-4 flex items-center justify-between">
<p className="text-xs text-slate-500">We review within 3 business days.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700" data-close-modal="">
            Done
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-end sm:items-center justify-center" id="modal-devops">
<div className="absolute inset-0 bg-slate-900/50" data-close-modal=""></div>
<div className="relative w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="server-cog"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Assignment — DevOps Engineer</h3>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-700" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-4">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> ~75 min
            </span>
<span className="text-xs text-slate-500">Infra as code; cloud of choice.</span>
</div>
<ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2">
<li>Provision autoscaling job queue and worker pool.</li>
<li>Instrument tracing with correlation IDs across services.</li>
<li>Provide Terraform, dashboards, and a short runbook.</li>
</ol>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
<p className="text-sm font-medium text-slate-800">Deliverables</p>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
<li>Infra code + sample pipeline repo.</li>
<li>Monitoring/tracing config.</li>
<li>Runbook with failover steps.</li>
</ul>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-800" href="#">
<i className="h-4 w-4" data-lucide="link"></i>
              Open sandbox
            </a>
<label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/50">
<i className="h-4 w-4" data-lucide="upload-cloud"></i>
              Upload submission
              <input className="sr-only" type="file"/>
</label>
</div>
</div>
<div className="border-t border-slate-200 px-5 py-4 flex items-center justify-between">
<p className="text-xs text-slate-500">We review within 3 business days.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700" data-close-modal="">
            Done
          </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-end sm:items-center justify-center" id="modal-security">
<div className="absolute inset-0 bg-slate-900/50" data-close-modal=""></div>
<div className="relative w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
<div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-700" data-lucide="shield"></i>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Assignment — Post‑Quantum Security</h3>
</div>
<button className="rounded-md p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-700" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5 space-y-4">
<div className="flex items-center gap-3">
</div></div></div></div>
    </>
  );
}
