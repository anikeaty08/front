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
      

<div className="pointer-events-none fixed inset-0">
<div className="absolute right-[-20%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-sky-500/10 via-sky-400/5 to-violet-500/10 blur-3xl"></div>
<div className="absolute left-[-10%] bottom-[-10%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/5 to-sky-400/10 blur-3xl"></div>
</div>
<div className="relative flex">

<aside className="hidden md:flex md:flex-col md:w-64 lg:w-72 h-screen sticky top-0 p-4 gap-4 bg-white/70 backdrop-blur-xl border-r border-slate-200/60">
<div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/60 to-white/0 ring-1 ring-slate-200/60">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-slate-200/60 shadow-inner">
<span className="text-sm font-semibold tracking-tight">MA</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight">Mentora AI</span>
<span className="text-xs text-slate-500">Education Intelligence</span>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm font-medium tracking-tight bg-gradient-to-r from-sky-500/10 to-violet-500/10 ring-1 ring-slate-200/60 transition" href="#">
<iconify-icon className="text-sky-500" icon="solar:home-2-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Overview</span>
<span className="ml-auto text-[0.7rem] rounded-md bg-white/70 px-2 py-0.5 text-slate-700 ring-1 ring-slate-200/60">Now</span>
</a>
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:users-group-rounded-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Learners</span>
</a>
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:book-2-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Courses</span>
</a>
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:calendar-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Sessions</span>
</a>
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:chart-2-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Insights</span>
</a>
<a className="group flex items-center gap-3 rounded-lg p-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:wallet-2-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Earnings</span>
</a>
</nav>
<div className="mt-auto space-y-2">
<div className="rounded-xl p-4 bg-gradient-to-br from-white/70 to-white/0 ring-1 ring-slate-200/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:stars-minimalistic-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Mentora Tips</span>
</div>
<p className="mt-2 text-xs text-slate-500">Boost completion by sending nudges to learners inactive for 5+ days.</p>
<button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/15 to-violet-500/15 px-3 py-2 text-xs font-medium ring-1 ring-slate-200/60 hover:from-sky-500/25 hover:to-violet-500/25 transition">
<iconify-icon className="text-sky-500" icon="solar:bolt-circle-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
            Apply Suggestion
          </button>
</div>
<a className="group flex items-center justify-between rounded-lg p-3 text-sm hover:bg-slate-50 hover:ring-1 hover:ring-slate-200/60 transition" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-500 group-hover:text-sky-500" icon="solar:settings-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Settings</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-slate-200/60">
<div className="flex items-center gap-3 px-4 sm:px-6 py-3">
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/60">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden md:flex items-center gap-2">
<span className="text-sm text-slate-500">Welcome back,</span>
<span className="text-sm font-semibold tracking-tight">Alex</span>
</div>
<div className="ml-auto flex items-center gap-3 w-full md:w-auto">
<div className="relative flex-1 md:flex-none">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:magnifier-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full md:w-[28rem] rounded-lg bg-white pl-10 pr-3 py-2.5 text-sm placeholder:text-slate-400/80 ring-1 ring-slate-200/60 focus:outline-none focus:ring-2 focus:ring-sky-400/40" placeholder="Search learners, courses, sessions" type="text"/>
</div>
<button className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200/60 hover:ring-sky-400/30">
<iconify-icon className="text-slate-600" icon="solar:bell-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-[0.65rem] font-medium px-1.5 text-white">3</span>
</button>
<div className="h-9 w-px bg-slate-200/60"></div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white ring-1 ring-slate-200/60 px-3 py-2 hover:ring-sky-400/30">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-slate-200/60 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold">AL</span>
</div>
<span className="hidden sm:inline text-sm">Alex Lee</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<section className="px-4 sm:px-6 py-6">

<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Overview</h1>
<p className="text-xs text-slate-500">AI-powered education dashboard for tutors and administrators</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center rounded-lg bg-white ring-1 ring-slate-200/60 p-1">
<button className="text-xs font-medium rounded-md px-3 py-1.5 bg-gradient-to-r from-sky-500/15 to-violet-500/15 ring-1 ring-slate-200/60">Last 30 days</button>
<button className="text-xs text-slate-600 rounded-md px-3 py-1.5 hover:bg-slate-50">Quarter</button>
<button className="text-xs text-slate-600 rounded-md px-3 py-1.5 hover:bg-slate-50">Year</button>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/15 to-violet-500/15 px-3 py-2 text-xs font-medium ring-1 ring-slate-200/60 hover:from-sky-500/25 hover:to-violet-500/25">
<iconify-icon className="text-sky-500" icon="solar:download-minimalistic-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
              Export
            </button>
</div>
</div>

<div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="solar:users-group-rounded-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-slate-500">Active Learners</span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">12,438</div>
<div className="mt-1 text-xs text-emerald-600">+8.2% vs last period</div>
</div>

<svg className="h-14 w-28" viewbox="0 0 100 40">
<defs>
<lineargradient id="grad1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<path d="M0,28 C15,24 20,30 30,18 C40,6 55,10 62,16 C70,22 80,18 100,8" fill="none" stroke="url(#grad1)" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:flag-2-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-slate-500">Course Completion</span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">86%</div>
<div className="mt-1 text-xs text-emerald-600">+3.4% this month</div>
</div>
<div className="h-14 w-28 flex items-end gap-1">
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-3"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-5"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-7"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-9"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-10"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-12"></div>
<div className="w-3 rounded bg-gradient-to-t from-violet-500/15 to-violet-400/70 h-14"></div>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="solar:smile-circle-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-slate-500">Avg Session Rating</span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">4.7</div>
<div className="mt-1 text-xs text-emerald-600">+0.1 vs last 30d</div>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" icon="solar:star-shine-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-shine-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-shine-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-shine-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-amber-300/60" icon="solar:star-shine-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start justify-between">
<div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="solar:wallet-2-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-slate-500">MTD Earnings</span>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">$142,920</div>
<div className="mt-1 text-xs text-emerald-600">+12.5% MoM</div>
</div>
<svg className="h-14 w-28" viewbox="0 0 100 40">
<defs>
<lineargradient id="grad2" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0.6"></stop>
</lineargradient>
</defs>
<polyline fill="none" points="0,32 10,30 20,28 30,26 40,24 50,22 60,18 70,16 80,12 90,10 100,8" stroke="url(#grad2)" strokeWidth="2"></polyline>
</svg>
</div>
</div>
</div>

<div className="mt-6 grid gap-4 xl:grid-cols-12">

<div className="space-y-4 xl:col-span-8">

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 sm:p-6 backdrop-blur-xl">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-lg font-semibold tracking-tight">Learning Progress</h2>
<p className="text-xs text-slate-500">Completion and activity trend by week</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-white ring-1 ring-slate-200/60 px-2 py-1 text-xs">
<span className="h-2 w-2 rounded-full bg-sky-400/80 shadow-[0_0_12px_2px_rgba(56,189,248,0.25)]"></span>
                    Completion
                  </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white ring-1 ring-slate-200/60 px-2 py-1 text-xs">
<span className="h-2 w-2 rounded-full bg-violet-400/80 shadow-[0_0_12px_2px_rgba(167,139,250,0.25)]"></span>
                    Activity
                  </span>
</div>
</div>
<div className="mt-4">
<div className="h-60 w-full rounded-lg bg-gradient-to-b from-white to-white/0 ring-1 ring-slate-200/60 p-3">
<svg className="h-full w-full" viewbox="0 0 600 240">
<defs>
<lineargradient id="compLine" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95"></stop>
<stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"></stop>
</lineargradient>
<lineargradient id="actLine" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#a78bfa" stop-opacity="0.95"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0.2"></stop>
</lineargradient>
</defs>

<g stroke="rgba(2,6,23,0.08)" strokeWidth="1">
<line x1="0" x2="600" y1="200" y2="200"></line>
<line x1="0" x2="600" y1="150" y2="150"></line>
<line x1="0" x2="600" y1="100" y2="100"></line>
<line x1="0" x2="600" y1="50" y2="50"></line>
</g>

<path d="M0,180 L60,165 L120,150 L180,135 L240,110 L300,105 L360,95 L420,85 L480,70 L540,65 L600,55 L600,240 L0,240 Z" fill="url(#compLine)" opacity="0.25"></path>
<polyline fill="none" points="0,180 60,165 120,150 180,135 240,110 300,105 360,95 420,85 480,70 540,65 600,55" stroke="#38bdf8" strokeWidth="2.5"></polyline>

<path d="M0,195 L60,180 L120,175 L180,155 L240,140 L300,135 L360,130 L420,120 L480,110 L540,100 L600,95 L600,240 L0,240 Z" fill="url(#actLine)" opacity="0.2"></path>
<polyline fill="none" points="0,195 60,180 120,175 180,155 240,140 300,135 360,130 420,120 480,110 540,100 600,95" stroke="#a78bfa" strokeWidth="2.5"></polyline>

<g fill="rgba(71,85,105,0.85)" fontSize="10">
<text x="0" y="220">W1</text>
<text x="60" y="220">W2</text>
<text x="120" y="220">W3</text>
<text x="180" y="220">W4</text>
<text x="240" y="220">W5</text>
<text x="300" y="220">W6</text>
<text x="360" y="220">W7</text>
<text x="420" y="220">W8</text>
<text x="480" y="220">W9</text>
<text x="540" y="220">W10</text>
<text x="580" y="220">Now</text>
</g>
</svg>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 sm:p-6 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Earnings</h2>
<p className="text-xs text-slate-500">Revenue by course category</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-white ring-1 ring-slate-200/60 px-2 py-1 text-xs">
<span className="h-2 w-2 rounded-full bg-sky-400/80"></span>
                    1:1
                  </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white ring-1 ring-slate-200/60 px-2 py-1 text-xs">
<span className="h-2 w-2 rounded-full bg-violet-400/80"></span>
                    Group
                  </span>
</div>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-12">
<div className="sm:col-span-8">
<div className="h-56 w-full rounded-lg bg-gradient-to-b from-white to-white/0 ring-1 ring-slate-200/60 p-3">
<svg className="h-full w-full" viewbox="0 0 600 220">
<defs>
<lineargradient id="earnLineA" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"></stop>
<stop offset="100%" stop-color="#a78bfa" stop-opacity="0.9"></stop>
</lineargradient>
</defs>
<g stroke="rgba(2,6,23,0.08)" strokeWidth="1">
<line x1="0" x2="600" y1="180" y2="180"></line>
<line x1="0" x2="600" y1="140" y2="140"></line>
<line x1="0" x2="600" y1="100" y2="100"></line>
</g>
<polyline fill="none" points="0,170 60,160 120,140 180,130 240,120 300,110 360,100 420,95 480,85 540,80 600,70" stroke="url(#earnLineA)" strokeWidth="3"></polyline>
<g fill="rgba(71,85,105,0.85)" fontSize="10">
<text x="0" y="200">Jan</text>
<text x="60" y="200">Feb</text>
<text x="120" y="200">Mar</text>
<text x="180" y="200">Apr</text>
<text x="240" y="200">May</text>
<text x="300" y="200">Jun</text>
<text x="360" y="200">Jul</text>
<text x="420" y="200">Aug</text>
<text x="480" y="200">Sep</text>
<text x="540" y="200">Oct</text>
<text x="580" y="200">Now</text>
</g>
</svg>
</div>
</div>
<div className="sm:col-span-4 space-y-3">
<div className="flex items-center justify-between rounded-lg bg-white ring-1 ring-slate-200/60 p-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.25)]"></span>
<span className="text-xs">1:1 Tutoring</span>
</div>
<span className="text-xs font-semibold">$82,410</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-white ring-1 ring-slate-200/60 p-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.25)]"></span>
<span className="text-xs">Group Classes</span>
</div>
<span className="text-xs font-semibold">$60,510</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-white ring-1 ring-slate-200/60 p-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/80"></span>
<span className="text-xs">Courses</span>
</div>
<span className="text-xs font-semibold">$37,900</span>
</div>
</div>
</div>
</div>

<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500/15 to-violet-500/15 ring-1 ring-slate-200/60 flex items-center justify-center">
<iconify-icon className="text-sky-500" icon="solar:lightbulb-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight">Recommendation: Revise Math Foundations</h3>
<p className="mt-1 text-xs text-slate-600">Cohort G-12 shows 22% lower mastery in Algebra II. Suggested: 2 micro-modules + spaced quizzes.</p>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-lg bg-white ring-1 ring-slate-200/60 px-3 py-1.5 text-xs hover:ring-sky-400/30">Preview Modules</button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-500/15 to-violet-500/15 ring-1 ring-slate-200/60 px-3 py-1.5 text-xs hover:from-sky-500/25 hover:to-violet-500/25">
<iconify-icon className="text-sky-500" icon="solar:play-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
                        Launch Plan
                      </button>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500/15 to-violet-500/15 ring-1 ring-slate-200/60 flex items-center justify-center">
<iconify-icon className="text-violet-500" icon="solar:shield-check-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="min-w-0">
<h3 className="text-sm font-semibold tracking-tight">Retention Alert: At-risk Learners</h3>
<p className="mt-1 text-xs text-slate-600">48 learners show declining engagement for 10+ days. Recommend targeted nudges and office hours.</p>
<div className="mt-3 flex items-center gap-2">
<button className="rounded-lg bg-white ring-1 ring-slate-200/60 px-3 py-1.5 text-xs hover:ring-sky-400/30">View List</button>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-500/15 to-violet-500/15 ring-1 ring-slate-200/60 px-3 py-1.5 text-xs hover:from-sky-500/25 hover:to-violet-500/25">
<iconify-icon className="text-violet-500" icon="solar:letter-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
                        Send Nudges
                      </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 xl:col-span-4">
<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 sm:p-5 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500/20 to-violet-500/20 ring-1 ring-slate-200/60 flex items-center justify-center">
<iconify-icon className="text-sky-500" icon="solar:sparkles-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold tracking-tight">Mentora Assistant</h2>
<p className="text-xs text-slate-500">Smart weekly summary</p>
</div>
</div>
<button className="rounded-lg bg-white ring-1 ring-slate-200/60 px-2.5 py-1.5 text-xs hover:ring-sky-400/30">Refresh</button>
</div>
<div className="mt-4 space-y-3">
<div className="rounded-lg bg-gradient-to-r from-sky-500/10 to-violet-500/10 ring-1 ring-slate-200/60 p-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:pie-chart-2-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs text-slate-700">Completion improved by 3.4% after adding mid-week review sessions. Most impact observed in Grades 9–10.</p>
</div>
</div>
<div className="rounded-lg bg-white ring-1 ring-slate-200/60 p-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:target-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs text-slate-700">Top driver: Shorter videos (under 6 minutes) correlate with +12% retention.</p>
</div>
</div>
<div className="rounded-lg bg-white ring-1 ring-slate-200/60 p-3">
<div className="flex items-start gap-2">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:document-add-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs text-slate-700">Add a quick-start worksheet to Course ENG-201 to unlock an estimated +8% completion.</p>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500/15 to-violet-500/15 px-3 py-2 text-xs font-medium ring-1 ring-slate-200/60 hover:from-sky-500/25 hover:to-violet-500/25">
<iconify-icon className="text-sky-500" icon="solar:document-text-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
                  Generate Study Plan
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium ring-1 ring-slate-200/60 hover:ring-sky-400/30">
<iconify-icon className="text-violet-500" icon="solar:chat-round-dots-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
                  Ask Mentora
                </button>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-500" icon="solar:bookmark-square-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Top Course</span>
</div>
<span className="text-[0.7rem] text-slate-500">ENG-201</span>
</div>
<div className="mt-3">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold tracking-tight">2,910</span>
<span className="text-xs text-slate-500">active</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 ring-1 ring-slate-200/60">
<div className="h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" style={{width: '78%'}}></div>
</div>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-500" icon="solar:timeline-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Utilization</span>
</div>
<span className="text-[0.7rem] text-slate-500">Tutors</span>
</div>
<div className="mt-3">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold tracking-tight">68%</span>
<span className="text-xs text-emerald-600">+5%</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 ring-1 ring-slate-200/60">
<div className="h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-sky-400" style={{width: '68%'}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-white ring-1 ring-slate-200/60 p-4 backdrop-blur-xl">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
<button className="text-xs rounded-lg bg-white px-3 py-1.5 ring-1 ring-slate-200/60 hover:ring-sky-400/30">View All</button>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-50">
<iconify-icon className="text-emerald-600 mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<div className="min-w-0">
<p className="text-xs"><span className="font-medium">Cohort A2</span> completed <span className="font-medium">Module 4</span> in <span className="font-medium">Physics</span>.</p>
<span className="text-[0.7rem] text-slate-500">12m ago</span>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-50">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:clock-circle-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<div className="min-w-0">
<p className="text-xs"><span className="font-medium">Session</span> rescheduled: <span className="font-medium">Algebra II Workshop</span> → Fri 3 PM.</p>
<span className="text-[0.7rem] text-slate-500">1h ago</span>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-50">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:card-2-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
<div className="min-w-0">
<p className="text-xs">Payment received: <span className="font-medium">$4,120</span> for <span className="font-medium">Q4 Group Classes</span>.</p>
<span className="text-[0.7rem] text-slate-500">3h ago</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<div className="flex items-center gap-2">
<span>© 2026 Mentora AI</span>
<span className="hidden sm:inline">•</span>
<a className="hover:text-slate-700" href="#">Privacy</a>
<span>•</span>
<a className="hover:text-slate-700" href="#">Terms</a>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:shield-user-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>FERPA-ready • SOC 2</span>
</div>
</div>
</section>
</main>
</div>

<div className="md:hidden fixed bottom-0 inset-x-0 backdrop-blur-xl bg-white/80 border-t border-slate-200/60">
<div className="grid grid-cols-4 gap-1 p-2">
<a className="flex flex-col items-center gap-1 rounded-lg p-2 bg-white ring-1 ring-slate-200/60" href="#">
<iconify-icon className="text-sky-500" icon="solar:home-2-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.7rem]">Home</span>
</a>
<a className="flex flex-col items-center gap-1 rounded-lg p-2" href="#">
<iconify-icon className="text-slate-600" icon="solar:users-group-rounded-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.7rem]">Learners</span>
</a>
<a className="flex flex-col items-center gap-1 rounded-lg p-2" href="#">
<iconify-icon className="text-slate-600" icon="solar:chart-2-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.7rem]">Insights</span>
</a>
<a className="flex flex-col items-center gap-1 rounded-lg p-2" href="#">
<iconify-icon className="text-slate-600" icon="solar:wallet-2-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.7rem]">Earnings</span>
</a>
</div>
</div>

    </>
  );
}
