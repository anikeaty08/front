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
      
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();

      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      const open = document.getElementById('mobile-open');
      const drawer = document.getElementById('mobile-drawer');
      let openState = false;
      const toggle = () => {
        openState = !openState;
        drawer.classList.toggle('hidden', !openState);
        open.innerHTML = openState
          ? '<i data-lucide="x" class="h-5 w-5" stroke-width="1.5"></i>'
          : '<i data-lucide="menu" class="h-5 w-5" stroke-width="1.5"></i>';
        if (window.lucide) lucide.createIcons();
      };
      open && open.addEventListener('click', toggle);
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/80 border-b border-slate-800">
<div className="mx-auto max-w-7xl px-6">
<div className="h-16 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="text-2xl tracking-tight font-semibold bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF] bg-clip-text text-transparent" style={{fontFamily: `'Plus Jakarta Sans', Inter, system-ui`}}>
            morre
          </span>
<span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-600"></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#eligibility">Eligibility</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF] shadow-sm hover:shadow transition-shadow" href="#apply">
            Apply now
            <svg className="lucide lucide-arrow-right h-4 w-4 opacity-90" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-slate-800/60 border border-slate-800" id="mobile-open">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-800" id="mobile-drawer">
<div className="px-6 py-4 space-y-2">
<a className="block text-sm font-medium text-slate-200 py-2" href="#solutions">Solutions</a>
<a className="block text-sm font-medium text-slate-200 py-2" href="#eligibility">Eligibility</a>
<a className="block text-sm font-medium text-slate-200 py-2" href="#faq">FAQ</a>
<div className="pt-2">
<a className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-white px-3 py-2 rounded-md bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF]" href="#apply">
            Apply now
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute -inset-[20%] opacity-30 blur-3xl" style={{background: `radial-gradient(600px 300px at 20% 20%, #6E3AFE22, transparent), radial-gradient(600px 300px at 80% 30%, #2E7BFF22, transparent)`}}></div>
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(transparent_1px,rgba(2,6,23,1)_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="max-w-7xl md:pt-24 md:pb-20 mr-auto ml-auto pt-16 pr-6 pb-12 pl-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF]"></span>
          morre for B2B finance
        </div>
<h1 className="mt-6 text-4xl md:text-6xl tracking-tight font-semibold text-white">
          Flexible B2B finance to power your next move.
        </h1>
<p className="md:text-lg leading-7 max-w-2xl text-base text-slate-300 mt-5">
          Access clear, tailored finance with fast decisions and transparent terms. Built for modern teams that value clarity and speed.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-5 py-3 rounded-lg bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF] shadow-sm hover:shadow-md transition" href="#apply">
            Apply now
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-lg border border-slate-800 text-slate-200 hover:bg-slate-900/60 transition" href="#eligibility">
            See eligibility
            <svg className="lucide lucide-shield h-4 w-4 text-indigo-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</a>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=256&auto=format&fit=crop" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop" />
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-950 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<p className="text-sm text-slate-400">Trusted by operators focused on precision and momentum.</p>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="solutions">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight">Why business owners choose morre.</h2>
<p className="mt-3 text-slate-400">Focused on essentials, built for fast execution.</p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="hover:border-slate-700 transition bg-slate-900/40 border-slate-800 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-bolt h-5 w-5" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-white">Fast decisions</h3>
<p className="mt-1 text-sm text-slate-400">Streamlined review for clear outcomes, typically within one business day.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-badge-check h-5 w-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-white">Transparent terms</h3>
<p className="mt-1 text-sm text-slate-400">Straightforward structures with no hidden surprises.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-white">Right-sized finance</h3>
<p className="mt-1 text-sm text-slate-400">Tailored to your operating cadence and growth plans.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-lock h-5 w-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-white">Security-first</h3>
<p className="mt-1 text-sm text-slate-400">Enterprise-grade practices for data protection and privacy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="eligibility">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
<div className="flex items-start gap-4">
<div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-indigo-300 border border-slate-700">
<svg className="lucide lucide-list-checks h-5 w-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
</div>
<div className="flex-1">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Eligibility snapshot</h2>
<p className="mt-2 text-sm text-slate-400">A brief overview—additional details may be requested during review.</p>
<ul className="mt-4 grid sm:grid-cols-2 gap-3">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-sm text-slate-300">Registered company in supported regions.</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-sm text-slate-300">Minimum 12 months of operating history.</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-sm text-slate-300">Consistent revenue and clear use of funds.</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className="text-sm text-slate-300">No unresolved compliance actions.</p>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF]" href="#apply">
                Start application
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="apply">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-8">
<div className="">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">In-page application</h2>
<p className="mt-3 text-slate-400">Share a few details to get started. A specialist will follow up quickly with next steps.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<p className="text-sm text-slate-300">Takes seconds</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<p className="text-sm text-slate-300">Data encrypted in transit and at rest</p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#6E3AFE] to-[#2E7BFF] text-white">
<svg className="lucide lucide-file-check-2 h-3.5 w-3.5" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>
</span>
<p className="text-sm text-slate-300">Same day review in most cases</p>
</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-7">
<form action="#" className="space-y-5" method="POST">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="company">Company legal name</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="company" name="company" placeholder="Acme Inc." required type="text" />
</div>
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="contact">Contact name</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="contact" name="contact" placeholder="Jordan Lee" required type="text" />
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="email">Work email</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="email" name="email" placeholder="you@company.com" required type="email" />
</div>
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="phone">Phone</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs font-medium text-slate-300" htmlFor="country">State</label>
<select className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40 text-sm text-slate-100 bg-slate-900/60 border-slate-800 border rounded-lg mt-1 pt-2.5 pr-3 pb-2.5 pl-3" id="country" name="country">
<option value="">Select</option>
<option>United States</option>
<option>Canada</option>
<option>United Kingdom</option>
<option>European Union</option>
<option>Other</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-9 h-4 w-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="revenue">Annual revenue (USD)</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="revenue" inputmode="decimal" name="revenue" placeholder="$2.4M" type="text" />
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="amount">Requested amount (USD)</label>
<input className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="amount" inputmode="decimal" name="amount" placeholder="$250,000" type="text" />
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-300" htmlFor="timeline">Target timeline</label>
<select className="w-full appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40 text-sm text-slate-100 bg-slate-900/60 border-slate-800 border rounded-lg mt-1 pt-2.5 pr-3 pb-2.5 pl-3" id="timeline" name="timeline">
<option value="">Select</option>
<option>ASAP</option>
<option>1–2 weeks</option>
<option>30 days</option>
<option>Flexible</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-9 h-4 w-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-300" htmlFor="use">Use of funds</label>
<textarea className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/40" id="use" name="use" placeholder="Working capital, inventory, equipment, growth, etc." rows="3"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="relative">
<input className="peer sr-only" id="agree" type="checkbox" />
<label className="inline-flex h-5 w-9 cursor-pointer items-center rounded-full border border-slate-800 bg-slate-900/60 transition peer-checked:bg-indigo-600/30 peer-checked:border-indigo-500/60" htmlFor="agree"></label>
<span className="pointer-events-none absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-slate-500 transition peer-checked:translate-x-4 peer-checked:bg-indigo-400"></span>
</div>
<label className="text-xs text-slate-400" htmlFor="agree">I agree to the Terms and Privacy Policy.</label>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF] hover:shadow-md transition" type="submit">
                Submit application
                <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p className="text-xs text-slate-500">No impact to credit score for submitting this form.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16" id="faq">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-2xl border border-slate-800 p-6 md:p-8 bg-slate-900/40">
<div className="grid md:grid-cols-3 gap-6">
<div>
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-white">FAQs</h3>
<p className="mt-2 text-sm text-slate-400">Quick answers to common questions.</p>
</div>
<div className="md:col-span-2 space-y-6">
<div className="border-b border-slate-800 pb-6">
<p className="text-sm font-medium text-slate-200">How fast will I hear back?</p>
<p className="mt-1 text-sm text-slate-400">Most applications receive an update within one business day.</p>
</div>
<div className="border-b border-slate-800 pb-6">
<p className="text-sm font-medium text-slate-2 00">What information is required?</p>
<p className="mt-1 text-sm text-slate-400">Basic company details, revenue information, and the intended use of funds. We may request additional documentation during review.</p>
</div>
<div>
<p className="text-sm font-medium text-slate-200">Do you support international companies?</p>
<p className="mt-1 text-sm text-slate-400">Yes—availability varies by region. If your country isn’t listed, choose “Other” and we’ll reach out.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800">
<div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight font-semibold bg-gradient-to-r from-[#6E3AFE] via-[#5B4CFF] to-[#2E7BFF] bg-clip-text text-transparent" style={{fontFamily: `'Plus Jakarta Sans', Inter, system-ui`}}>
          morre
        </span>
<span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-600"></span>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
<a className="text-slate-400 hover:text-slate-200" href="#solutions">Solutions</a>
<a className="text-slate-400 hover:text-slate-200" href="#eligibility">Eligibility</a>
<a className="text-slate-400 hover:text-slate-200" href="#apply">Apply</a>
<a className="text-slate-400 hover:text-slate-200" href="#">Privacy</a>
<a className="text-slate-400 hover:text-slate-200" href="#">Terms</a>
</nav>
</div>
<div className="mx-auto max-w-7xl px-6 pb-8">
<p className="text-xs text-slate-500">© <span id="year">2025</span> morre. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
