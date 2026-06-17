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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
<span className="font-semibold tracking-tighter">CA</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">
              Foundation Prep
            </span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-900" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
              Papers
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
              Resources
            </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
              About
            </a>
</div>
<div className="flex items-center gap-3">
<button className="rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden sm:inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors" href="#">
              Sign In
            </a>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

<section className="mb-12 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 mb-6">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="14"></iconify-icon>
          Exams held 3x/Year: Jan, May, &amp; Sep (Effective 2025)
        </div>
<h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Master CA Foundation with
          <br className="hidden sm:block"/>
<span className="text-indigo-600">Official ICAI Previous Papers</span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-slate-500 mb-8">
          Access the official ICAI Previous Year Question (PYQ) papers. Updated
          for the new 2025 Syllabus pattern with January, May, and September
          exam cycles.
        </p>

<div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 mb-10">
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
              42+
            </div>
<div className="text-xs font-medium text-slate-500">
              Papers Available
            </div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
              Sep 25
            </div>
<div className="text-xs font-medium text-slate-500">Latest Session</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
              New
            </div>
<div className="text-xs font-medium text-slate-500">
              Syllabus Updated
            </div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<div className="text-2xl font-semibold tracking-tight text-slate-900">
              12k
            </div>
<div className="text-xs font-medium text-slate-500">Downloads</div>
</div>
</div>

<div className="relative mx-auto max-w-xl">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
<iconify-icon className="text-slate-400" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Search papers (e.g., 'Sep 2025 Paper 1', 'Jan 2025 Law')" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-2">
<kbd className="hidden items-center gap-1 rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500 sm:inline-flex">
              ⌘K
            </kbd>
</div>
</div>
</section>

<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

<div>
<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Syllabus Pattern
              </h3>
<div className="space-y-2">
<label className="flex items-center gap-3">
<input checked="" className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm font-medium text-slate-700">
                    Post-2025 (New)
                  </span>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm text-slate-600">Pre-2025 (Old)</span>
</label>
</div>
</div>
<hr className="border-slate-100"/>

<div>
<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Subjects
              </h3>
<div className="space-y-2">
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-sm text-slate-600">
                      Paper 1: Accounting
                    </span>
</div>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-sm text-slate-600">Paper 2: Law</span>
</div>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-sm text-slate-600">
                      Paper 3: Quant Apt.
                    </span>
</div>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-purple-500"></span>
<span className="text-sm text-slate-600">
                      Paper 4: Economics
                    </span>
</div>
</label>
</div>
</div>
<hr className="border-slate-100"/>

<div>
<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Exam Session
              </h3>
<div className="space-y-2">
<label className="flex items-center gap-3">
<input checked="" className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm font-medium text-slate-700">
                    September 2025
                  </span>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm text-slate-600">May 2025</span>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm text-slate-600">January 2025</span>
</label>
<label className="flex items-center gap-3">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 transition focus:ring-0" type="checkbox"/>
<span className="text-sm text-slate-600">September 2024</span>
</label>
</div>
</div>
</div>
</aside>

<div className="flex-1">

<div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<h2 className="text-lg font-semibold text-slate-900">
              Latest Question Papers
            </h2>
<div className="flex items-center gap-3">
<span className="text-sm text-slate-500">Sort by:</span>
<select className="rounded-lg border border-slate-200 bg-white py-1.5 pl-3 pr-8 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option>Latest First</option>
<option>Oldest First</option>
<option>Most Downloaded</option>
</select>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
<div className="mb-4 flex items-start justify-between">
<div>
<div className="mb-2 flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Sep 2025
                    </span>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      NEW Syllabus
                    </span>
</div>
<h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600">
                    Paper 1: Accounting
                  </h3>
<p className="text-xs text-slate-500">
                    Principles and Practice of Accounting
                  </p>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:calculator" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="mb-5 mt-auto rounded-lg bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="font-medium text-slate-600">Format</span>
<span className="text-slate-500">New 2025 Pattern</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-200">
<div className="h-1.5 w-full rounded-full bg-indigo-500"></div>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
                    4.2k
                  </span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    2.4 MB
                  </span>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    QP
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                    Ans
                  </button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md">
<div className="mb-4 flex items-start justify-between">
<div>
<div className="mb-2 flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      Sep 2025
                    </span>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      NEW Syllabus
                    </span>
</div>
<h3 className="text-base font-semibold text-slate-900 group-hover:text-emerald-600">
                    Paper 2: Business Laws
                  </h3>
<p className="text-xs text-slate-500">Business Laws &amp; BCR</p>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon icon="lucide:scale" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="mb-5 mt-auto rounded-lg bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="font-medium text-slate-600">Weightage</span>
<span className="text-slate-500">Case Studies (40%)</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-200">
<div className="h-1.5 w-2/5 rounded-full bg-emerald-500"></div>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
                    3.5k
                  </span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    2.1 MB
                  </span>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    QP
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                    Ans
                  </button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-orange-200 hover:shadow-md">
<div className="mb-4 flex items-start justify-between">
<div>
<div className="mb-2 flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                      May 2025
                    </span>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      NEW Syllabus
                    </span>
</div>
<h3 className="text-base font-semibold text-slate-900 group-hover:text-orange-600">
                    Paper 3: Quant Aptitude
                  </h3>
<p className="text-xs text-slate-500">
                    Maths, Logical Reasoning &amp; Stats
                  </p>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-600">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="mb-5 mt-auto flex items-center justify-between rounded-lg bg-orange-50/50 p-3 border border-orange-100">
<span className="text-xs font-medium text-orange-800">
                  Includes Practice Mode
                </span>
<iconify-icon className="text-orange-600" icon="lucide:timer" width="16"></iconify-icon>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
                    5.1k
                  </span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:message-circle" width="14"></iconify-icon>
                    4.8 MB
                  </span>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    QP
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                    Ans
                  </button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-purple-200 hover:shadow-md">
<div className="mb-4 flex items-start justify-between">
<div>
<div className="mb-2 flex items-center gap-2">
<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      Jan 2025
                    </span>
<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      NEW Syllabus
                    </span>
</div>
<h3 className="text-base font-semibold text-slate-900 group-hover:text-purple-600">
                    Paper 4: Economics
                  </h3>
<p className="text-xs text-slate-500">
                    Business Economics &amp; BCK
                  </p>
</div>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-purple-600">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="mb-5 mt-auto rounded-lg bg-slate-50 p-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="font-medium text-slate-600">Weightage</span>
<span className="text-slate-500">Macro (35%)</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-200">
<div className="h-1.5 w-1/3 rounded-full bg-purple-500"></div>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:eye" width="14"></iconify-icon>
                    2.9k
                  </span>
<span className="flex items-center gap-1">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    1.9 MB
                  </span>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
<iconify-icon icon="lucide:file-text" width="14"></iconify-icon>
                    QP
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                    Ans
                  </button>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Load Previous Sessions
              <iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="mt-20 border-t border-slate-200 pt-16">
<div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Exam Strategy &amp; Pattern
            </h2>
<p className="mt-2 text-slate-500">
              Analyze trends and optimize your preparation with data-backed
              insights.
            </p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
            View full analytics
            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid gap-6 sm:grid-cols-3">

<div className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">
              Pattern Analysis
            </h3>
<p className="mb-4 text-sm text-slate-500">
              Detailed breakdown of recurring topics across the last 5 years of
              Paper 1 and 2.
            </p>
<a className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-indigo-500 transition-all" href="#">
              View Charts
            </a>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<iconify-icon icon="lucide:check-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">
              Syllabus Checker
            </h3>
<p className="mb-4 text-sm text-slate-500">
              Instant compatibility check. See which Old Syllabus questions are
              still relevant for 2025.
            </p>
<a className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-emerald-500 transition-all" href="#">
              Check Syllabus
            </a>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:shadow-slate-100/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">
              Mock Timer
            </h3>
<p className="mb-4 text-sm text-slate-500">
              Simulate exam conditions. Open any PYQ pdf in "Exam Mode" with a
              built-in countdown.
            </p>
<a className="text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-orange-500 transition-all" href="#">
              Start Mock
            </a>
</div>
</div>
</section>
</main>

<footer className="mt-12 bg-white border-t border-slate-200 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 text-white">
<span className="font-bold text-xs">CA</span>
</div>
<span className="font-semibold text-slate-900">Foundation Prep</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
              An educational initiative to help CA Foundation aspirants access
              organized past year papers and analytics.
            </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600" href="#">
                  Paper 1: Accounting
                </a>
</li>
<li>
<a className="hover:text-indigo-600" href="#">Paper 2: Laws</a>
</li>
<li><a className="hover:text-indigo-600" href="#">Paper 3: QA</a></li>
<li>
<a className="hover:text-indigo-600" href="#">Paper 4: Economics</a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-600" href="#">
                  Syllabus 2025 Guide
                </a>
</li>
<li>
<a className="hover:text-indigo-600" href="#">Study Strategy</a>
</li>
<li>
<a className="hover:text-indigo-600" href="#">
                  Mock Test Generator
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Disclaimer</h4>
<p className="text-xs text-slate-400 leading-relaxed">
              📋 All papers sourced from ICAI BoS Knowledge Portal. CA
              Foundation exams are conducted three times a year: January, May,
              and September.
            </p>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
            © 2024 CA Prep. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
