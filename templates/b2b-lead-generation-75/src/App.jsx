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



  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

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
      

<section className="min-h-screen overflow-hidden bg-transparent relative flex flex-col">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-y-12 right-0 flex items-center justify-end">
<div className="relative mr-4 md:mr-16 lg:mr-24 w-72 sm:w-80 md:w-[26rem] aspect-[4/3]">
<div className="absolute inset-0 rounded-3xl animated-gradient-bg hero-glow"></div>
<div className="absolute inset-6 rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_0%,rgba(147,197,253,0.9),transparent_55%),radial-gradient(circle_at_80%_110%,rgba(191,219,254,0.95),transparent_60%),radial-gradient(circle_at_10%_100%,rgba(96,165,250,0.6),transparent_55%)] opacity-80 blur-sm"></div>
<div className="absolute inset-6 rounded-[1.75rem] bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50"></div>
<div className="absolute inset-3 rounded-[2.25rem] border border-blue-400/40 hero-orbit-ring"></div>
<div className="absolute inset-10 rounded-[1.75rem] border border-blue-500/30"></div>
<div className="absolute inset-16 rounded-[1.5rem] border border-sky-500/30"></div>
<div className="absolute inset-8">
<div className="relative w-full h-full">
<div className="hero-orbit-dot absolute inset-0">
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] h-2 w-2"></div>
</div>
<div className="hero-orbit-dot absolute inset-0" style={{animationDuration: '26s', animationDirection: 'reverse'}}>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_26px_rgba(14,165,233,0.8)] h-2.5 w-2.5"></div>
</div>
<div className="hero-orbit-dot absolute inset-0" style={{animationDuration: '34s'}}>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.9)] h-2 w-2"></div>
</div>
</div>
</div>

<div className="absolute left-5 right-5 top-5 rounded-2xl bg-white/95 border border-blue-200/60 backdrop-blur-xl p-4 flex items-center justify-between shadow-lg">
<div>
<p className="text-xs font-medium text-slate-500">Werkflows Engine</p>
<p className="mt-1 text-base font-semibold text-slate-900">Live Pipeline</p>
</div>
<div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-semibold text-emerald-700">Active</span>
</div>
</div>
</div>
</div>
<div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 opacity-10 blur-3xl"></div>
<div className="absolute top-1/3 right-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tl from-cyan-400 via-blue-500 to-indigo-600 opacity-10 blur-3xl"></div>
<div className="floating-orb-1 absolute top-20 right-1/2 h-28 w-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-40 blur-2xl"></div>
<div className="floating-orb-2 absolute bottom-1/4 left-24 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 opacity-30 blur-2xl"></div>
<div className="floating-orb-3 absolute top-1/2 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-300 to-sky-400 opacity-30 blur-2xl"></div>
<div className="rotating-border absolute left-1/3 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2">
<div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.08),transparent_20%,rgba(56,189,248,0.16),transparent_60%,rgba(79,70,229,0.18),transparent_100%)] blur-3xl"></div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
</div>
<nav className="relative z-50 mx-auto max-w-7xl px-6 py-6 lg:px-8 w-full">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30">
<span className="text-base font-semibold tracking-tighter text-white">W</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900">Werkflows</span>
<span className="text-xs font-medium text-slate-500">B2B Lead Engine</span>
</div>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#solution">What We Do</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#dream">Vision</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#pricing">Pricing</a>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold tracking-tight text-white shadow-lg shadow-blue-500/40 transition hover:shadow-xl hover:shadow-blue-500/50" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
        Book Call
        <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>
<div className="relative z-10 mx-auto max-w-7xl px-6 flex-1 flex items-center lg:px-8">
<div className="grid items-center gap-12 w-full lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-50/80 px-4 py-1.5 backdrop-blur-sm">
<span className="h-2 w-2 animate-pulse rounded-full bg-sky-500"></span>
<span className="text-xs font-semibold tracking-tight text-sky-700">Done-for-you outbound for B2B agencies</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          B2B Agencies: Get 10+ Qualified Sales Meetings Per Month — <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Guaranteed</span>
</h1>
<p className="text-lg font-medium leading-relaxed text-slate-600">
          We help B2B agencies generate a predictable flow of qualified meetings using personalized cold email — completely done-for-you.
        </p>
<div className="flex flex-col gap-4 sm:flex-row">
<a className="inline-block" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
<button className="shiny-cta focus:outline-none">
<span>Book Your Free Strategy Call</span>
</button>
</a>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 backdrop-blur-sm transition hover:bg-white hover:shadow-lg">
<svg className="lucide lucide-play-circle h-5 w-5 text-blue-600" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            See How It Works
          </button>
</div>
<div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
<div>
<p className="text-2xl font-semibold text-slate-900">347%</p>
<p className="text-sm font-medium text-slate-600">Avg Pipeline Growth</p>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900">10+</p>
<p className="text-sm font-medium text-slate-600">Meetings/Month</p>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900">30%</p>
<p className="text-sm font-medium text-slate-600">Response Rate</p>
</div>
</div>
</div>

<div className="relative flex items-center justify-center lg:justify-end">
<div className="float-animation glass-card-strong relative rounded-3xl p-8 shadow-2xl shadow-slate-900/10 bg-white/95 backdrop-blur-xl">
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Pipeline Growth</p>
<p className="text-2xl font-semibold text-slate-900">+347%</p>
</div>
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-blue-500/30">
<svg className="lucide lucide-trending-up h-6 w-6 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
<div className="flex items-end justify-between gap-2 pt-4">
<div className="h-12 w-8 rounded-full bg-gradient-to-t from-blue-400/40 to-blue-300/40"></div>
<div className="h-16 w-8 rounded-full bg-gradient-to-t from-indigo-400/60 to-indigo-300/60"></div>
<div className="h-20 w-8 rounded-full bg-gradient-to-t from-cyan-400/70 to-cyan-300/70"></div>
<div className="h-28 w-8 rounded-full bg-gradient-to-t from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/40"></div>
<div className="h-32 w-8 rounded-full bg-gradient-to-t from-indigo-600 to-blue-600 shadow-lg shadow-blue-500/50"></div>
</div>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<p className="text-xs font-medium text-slate-500">Meetings Booked</p>
<p className="mt-1 text-xl font-semibold text-slate-900">23</p>
<p className="mt-1 text-xs font-semibold text-emerald-600">▲ +18% this month</p>
</div>
<div>
<p className="text-xs font-medium text-slate-500">Response Rate</p>
<p className="mt-1 text-xl font-semibold text-slate-900">34%</p>
<p className="mt-1 text-xs font-semibold text-blue-600">▲ Above industry avg</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-24 lg:py-32" id="solution">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
<svg className="lucide lucide-zap h-4 w-4 text-blue-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-semibold tracking-tight text-blue-700">The Werkflows Difference</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Done-For-You Outbound That <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Actually Works</span>
</h2>
<p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
        We handle everything from targeting to email deliverability so you can focus on closing deals, not chasing leads.
      </p>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-blue-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">
<svg className="lucide lucide-target h-7 w-7 text-white" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">ICP Research</h3>
<p className="font-medium leading-relaxed text-slate-600">
            We identify your perfect prospects using 47+ data points — targeting decision-makers who actually need your services.
          </p>
</div>
</div>
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/30">
<svg className="lucide lucide-mail h-7 w-7 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Personalized Outreach</h3>
<p className="font-medium leading-relaxed text-slate-600">
            Custom email sequences written specifically for your offer — tested and refined for maximum response rates.
          </p>
</div>
</div>
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-cyan-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">
<svg className="lucide lucide-inbox h-7 w-7 text-white" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Inbox Optimization</h3>
<p className="font-medium leading-relaxed text-slate-600">
            We manage domains, warm-ups, and deliverability — ensuring your emails land in inboxes, not spam folders.
          </p>
</div>
</div>
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-blue-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30">
<svg className="lucide lucide-repeat h-7 w-7 text-white" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Follow-Up Automation</h3>
<p className="font-medium leading-relaxed text-slate-600">
            Smart sequences that nurture leads over time — automatically following up until they respond or opt out.
          </p>
</div>
</div>
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-cyan-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 shadow-lg shadow-cyan-500/30">
<svg className="lucide lucide-calendar h-7 w-7 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Meeting Booking</h3>
<p className="font-medium leading-relaxed text-slate-600">
            Qualified prospects land directly on your calendar — pre-vetted and ready to discuss working with you.
          </p>
</div>
</div>
<div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-10 blur-3xl transition group-hover:opacity-20"></div>
<div className="relative">
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/30">
<svg className="lucide lucide-bar-chart-3 h-7 w-7 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Weekly Reporting</h3>
<p className="font-medium leading-relaxed text-slate-600">
            Transparent dashboards showing open rates, replies, and booked meetings — full visibility into performance.
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="process">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
<svg className="lucide lucide-workflow h-4 w-4 text-blue-600" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-xs font-semibold tracking-tight text-blue-700">Simple &amp; Proven</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        How We Get You <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10+ Meetings/Month</span>
</h2>
<p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
        Our battle-tested process turns cold prospects into warm conversations in 4 simple steps.
      </p>
</div>
<div className="mt-16 grid gap-8 lg:grid-cols-4">
<div className="relative">
<div className="glass-card-strong rounded-2xl p-8 shadow-lg transition hover:shadow-xl">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-500/30">
            1
          </div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">ICP Definition</h3>
<p className="font-medium leading-relaxed text-slate-600">
            We workshop your ideal customer profile and build a targeted list of prospects.
          </p>
</div>
<div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-blue-300 to-transparent lg:block"></div>
</div>
<div className="relative">
<div className="glass-card-strong rounded-2xl p-8 shadow-lg transition hover:shadow-xl">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30">
            2
          </div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Campaign Setup</h3>
<p className="font-medium leading-relaxed text-slate-600">
            We write personalized sequences and configure your technical infrastructure.
          </p>
</div>
<div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-indigo-300 to-transparent lg:block"></div>
</div>
<div className="relative">
<div className="glass-card-strong rounded-2xl p-8 shadow-lg transition hover:shadow-xl">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-500 text-lg font-semibold text-white shadow-lg shadow-cyan-500/30">
            3
          </div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Launch &amp; Optimize</h3>
<p className="font-medium leading-relaxed text-slate-600">
            We launch campaigns, monitor performance, and continuously improve results.
          </p>
</div>
<div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-cyan-300 to-transparent lg:block"></div>
</div>
<div className="relative">
<div className="glass-card-strong rounded-2xl p-8 shadow-lg transition hover:shadow-xl">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-lg font-semibold text-white shadow-lg shadow-teal-500/30">
            4
          </div>
<h3 className="mb-3 text-xl font-semibold text-slate-900">Meetings Delivered</h3>
<p className="font-medium leading-relaxed text-slate-600">
            Qualified prospects appear on your calendar, ready to become clients.
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-24 lg:py-32" id="dream">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/4 top-1/4 h-[25rem] w-[25rem] rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50/80 px-4 py-1.5">
<svg className="lucide lucide-sparkles h-4 w-4 text-cyan-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-semibold tracking-tight text-cyan-700">Imagine This</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Your Calendar Full of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Clients</span>
</h2>
<p className="text-lg font-medium leading-relaxed text-slate-600">
          No more cold calling. No more awkward LinkedIn DMs. No more crickets.
        </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">
<strong>Predictable pipeline:</strong> Know exactly how many meetings you'll have next month
            </p>
</div>
<div bg-cyan-100"="" className="flex items-start gap-4 &lt;div class=" flex="" h-6="" items-center="" justify-center="" rounded-full="" shrink-0="" w-6="">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">
<strong>Higher close rates:</strong> Talk to prospects who actually need your services
            </p>
</div>
<div className="flex items-start gap-4">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">
<strong>Scale with confidence:</strong> Grow your team knowing new clients are on the way
            </p>
</div>
</div>
<a className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold tracking-tight text-white shadow-lg shadow-blue-500/40 transition hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
          Start Getting Meetings
          <svg className="lucide lucide-arrow-right h-5 w-5 transition group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="glass-card-strong rounded-2xl p-8 shadow-2xl">
<div className="space-y-6">
<div className="flex items-center gap-4 rounded-xl border border-cyan-200/60 bg-cyan-50/60 p-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
<svg className="lucide lucide-calendar-check h-6 w-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Meeting Booked</p>
<p className="text-xs font-medium text-slate-600">TechCorp Inc. • CEO</p>
</div>
<span className="ml-auto text-xs font-semibold text-cyan-600">Today</span>
</div>
<div className="flex items-center gap-4 rounded-xl border border-blue-200/60 bg-blue-50/60 p-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
<svg className="lucide lucide-calendar-check h-6 w-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Meeting Booked</p>
<p className="text-xs font-medium text-slate-600">GrowthLabs • VP Marketing</p>
</div>
<span className="ml-auto text-xs font-semibold text-blue-600">Tomorrow</span>
</div>
<div className="flex items-center gap-4 rounded-xl border border-indigo-200/60 bg-indigo-50/60 p-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
<svg className="lucide lucide-calendar-check h-6 w-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Meeting Booked</p>
<p className="text-xs font-medium text-slate-600">Acme Agency • Founder</p>
</div>
<span className="ml-auto text-xs font-semibold text-indigo-600">Wed 2pm</span>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-center">
<p className="text-sm font-semibold text-slate-600">+ 7 more meetings this week</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32" id="pricing">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute right-1/4 top-1/4 h-[31rem] w-[31rem] rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
<svg className="lucide lucide-tag h-4 w-4 text-blue-600" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-xs font-semibold tracking-tight text-blue-700">Simple Pricing</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Invest in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Predictable Growth</span>
</h2>
<p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
        One flat monthly fee. No hidden costs. Cancel anytime.
      </p>
</div>
<div className="mx-auto mt-16 max-w-2xl">
<div className="glass-card-strong relative overflow-hidden rounded-3xl p-10 shadow-2xl">
<div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-3xl"></div>
<div className="relative">
<div className="mb-8 text-center">
<p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Done-For-You Outbound</p>
<div className="flex items-end justify-center gap-2">
<span className="text-5xl font-semibold text-slate-900">$3,500</span>
<span className="mb-2 text-lg font-semibold text-slate-600">/month</span>
</div>
<p className="mt-2 text-sm font-medium text-slate-600">10+ qualified meetings guaranteed</p>
</div>
<div className="mb-8 space-y-4">
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">ICP research &amp; list building (500+ prospects/month)</p>
</div>
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">Custom email copywriting &amp; sequence design</p>
</div>
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">Domain setup &amp; email deliverability optimization</p>
</div>
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">Daily campaign management &amp; A/B testing</p>
</div>
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">Weekly performance reporting &amp; strategy calls</p>
</div>
<div className="flex items-start gap-3">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
<svg className="lucide lucide-check h-4 w-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="font-medium text-slate-700">Dedicated account manager</p>
</div>
</div>
<a className="pulse-glow group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5 text-lg font-semibold tracking-tight text-white transition hover:scale-105" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
            Book Your Strategy Call
            <svg className="lucide lucide-arrow-right h-5 w-5 transition group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="mt-6 text-center text-sm font-medium text-slate-600">
            🔒 No long-term contracts • Cancel anytime • 30-day money-back guarantee
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-white py-24 lg:py-32">
<div className="mx-auto max-w-4xl px-6 lg:px-8">
<div className="mb-16 text-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1.5">
<svg className="lucide lucide-help-circle h-4 w-4 text-blue-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 .5 3.5 0 0 1 6.91 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="text-xs font-semibold tracking-tight text-blue-700">Questions, answered</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
</h2>
<p className="mt-4 text-base font-medium text-slate-600">
        Everything you need to know before partnering with Werkflows.
      </p>
</div>
<div className="space-y-4">
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">1</span>
<h3 className="text-base font-semibold text-slate-900">
              Who is Werkflows a good fit for?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          We work best with B2B agencies and service providers who have:
          <ul className="mt-2 list-disc space-y-1 pl-5">
<li>A clearly defined offer and proven client results</li>
<li>High-ticket services (LTV &gt; $5,000)</li>
<li>Capacity to handle 10–20+ new sales conversations per month</li>
</ul>
</div>
</details>
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">2</span>
<h3 className="text-base font-semibold text-slate-900">
              How quickly will I start seeing meetings?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          Most clients see their first meetings booked within 10–21 days of onboarding. This includes time for:
          <ul className="mt-2 list-disc space-y-1 pl-5">
<li>ICP refinement and list building</li>
<li>Copywriting and sequence setup</li>
<li>Domain warm-up and deliverability checks</li>
</ul>
</div>
</details>
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
          &lt;          <div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">3</span>
<h3 className="text-base font-semibold text-slate-900">
              What makes Werkflows different from other lead gen agencies?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          A few key differences:
          <ul className="mt-2 list-disc space-y-1 pl-5">
<li>We cap the number of clients we work with to protect performance and deliverability.</li>
<li>We focus exclusively on B2B agencies and service businesses — not “everyone.”</li>
<li>We do the heavy lifting: research, copy, tech, and optimization are all handled for you.</li>
<li>We’re transparent — you get full visibility into campaigns and performance data.</li>
</ul>
</div>
</details>
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">4</span>
<h3 className="text-base font-semibold text-slate-900">
              What do you need from us to get started?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          During onboarding we’ll ask for:
          <ul className="mt-2 list-disc space-y-1 pl-5">
<li>A clear description of your offer and ideal customer profile</li>
<li>Access to a sending inbox (or we can help set one up)</li>
<li>Any existing sales collateral or case studies you’d like us to leverage</li>
</ul>
          From there, we take it and run.
        </div>
</details>
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">5</span>
<h3 className="text-base font-semibold text-slate-900">
              What if you don’t hit the 10+ meetings guarantee?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          If we don’t deliver at least 10 qualified meetings in a full billing cycle — and you’ve met your commitments on show-up and follow-up — we’ll work for free until we do, or refund your most recent month. Our incentives are fully aligned with your outcomes.
        </div>
</details>
<details className="group glass-card-strong rounded-2xl p-5">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">6</span>
<h3 className="text-base font-semibold text-slate-900">
              Is this compliant with email regulations (GDPR, CAN-SPAM, etc.)?
            </h3>
</div>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="mt-3 text-sm leading-relaxed text-slate-600">
          Yes. We follow best practices for compliant cold outreach, including:
          <ul className="mt-2 list-disc space-y-1 pl-5">
<li>Targeting only relevant B2B decision-makers</li>
<li>Including clear identification and opt-out options</li>
<li>Keeping data usage aligned with legitimate business interest</li>
</ul>
          We’ll also work with your legal team if you have specific compliance requirements.
        </div>
</details>
</div>
<div className="mt-12 flex flex-col items-center gap-4 text-center">
<p className="text-sm font-medium text-slate-600">
        Still have questions? Let’s talk through them on a quick call.
      </p>
<a className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
        Ask on a strategy call
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-slate-900 py-16 lg:py-20">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,_rgba(30,64,175,0.6),transparent_55%)] opacity-80"></div>
</div>
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="glass-card-strong relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 px-6 py-10 shadow-2xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
<div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-30 blur-3xl"></div>
<div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 opacity-30 blur-3xl"></div>
<div className="relative max-w-xl space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Build a Predictable <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Sales Pipeline</span>?
        </h2>
<p className="text-sm sm:text-base font-medium leading-relaxed text-slate-200">
          Book a 30-minute strategy call. We’ll review your current acquisition, identify quick wins, and show you how Werkflows can plug a done-for-you outbound engine into your agency.
        </p>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            No hard pitch — just clarity on whether we’re a fit.
          </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
            Actionable recommendations you can use immediately.
          </li>
</ul>
</div>
<div className="relative mt-8 flex flex-col items-center gap-4 lg:mt-0">
<a className="pulse-glow group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 text-base font-semibold tracking-tight text-white shadow-xl shadow-blue-500/40 transition hover:scale-105" href="https://calendly.com/dominic-werkflows/30min" target="_blank">
          Book Your Free Strategy Call
          <svg className="h-5 w-5 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="text-xs font-medium text-slate-300">
          Limited capacity: we only onboard a few new clients each month to protect performance.
        </p>
</div>
</div>
<footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-[11px] font-semibold text-white">
          W
        </span>
<span className="font-semibold text-slate-100">Werkflows</span>
<span className="hidden text-slate-500 sm:inline">• B2B Lead Generation</span>
</div>
<p>© <span id="year"></span> Werkflows. All rights reserved.</p>
</footer>
</div>
</section>


    </>
  );
}
