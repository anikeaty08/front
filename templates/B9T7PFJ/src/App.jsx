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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        document.getElementById('year').textContent = new Date().getFullYear();
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
      
<div className="min-h-screen">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-sm ring-1 ring-black/10">
<svg className="lucide lucide-leaf h-4 w-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="text-lg tracking-tight font-medium text-neutral-900">solace</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#">Home</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Device</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Story</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Support</a>
</nav>
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/10 bg-white text-neutral-700">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="hidden md:inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors" href="#">
              Preorder
              <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</header>

<section className="mt-6">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-neutral-900">

<div className="absolute inset-0">
<img alt="Calm workspace" className="h-full w-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80525773-1209-43bf-b1fc-df487cfc36b6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent"></div>
</div>

<div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<h1 className="text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                    The instrument, reimagined
                  </h1>
<p className="mt-5 text-neutral-200 text-base sm:text-lg max-w-xl">
                    Meet Solace One — a calm‑first device designed for deep focus, gentle light, and days of battery. A quieter way to think and make.
                  </p>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-amber-300">
<svg className="lucide lucide-moon h-4 w-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Paper‑calm display</p>
<p className="text-neutral-300 text-xs">Soft contrast, low glare</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-amber-300">
<svg className="lucide lucide-target h-4 w-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Flow‑first OS</p>
<p className="text-neutral-300 text-xs">No noise, just intent</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-amber-300">
<svg className="lucide lucide-battery h-4 w-4" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Days of charge</p>
<p className="text-neutral-300 text-xs">Up to 72h real work</p>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-5 py-3 text-sm font-medium shadow-md hover:bg-amber-400 transition-colors" href="#">
                      Order now
                      <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors">
<svg className="lucide lucide-info h-4 w-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                      Learn more
                    </button>
</div>
</div>

<div className="lg:col-span-5">
<div className="lg:ml-auto w-full max-w-md lg:max-w-sm rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
<div className="flex items-start justify-between">
<div>
<p className="text-neutral-900 font-medium tracking-tight">Newsletter</p>
<p className="text-neutral-500 text-xs mt-0.5">Updates. No noise.</p>
</div>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-600">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Privacy-first
                      </span>
</div>
<form className="mt-3">
<div className="flex gap-2">
<div className="relative flex-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" placeholder="you@domain.com" type="email"/>
</div>
<button className="rounded-xl bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors" type="submit">
                          Subscribe
                        </button>
</div>
</form>
</div>
</div>
</div>

<div className="mt-8 sm:mt-12 flex items-end justify-between">

<button className="group inline-flex items-center gap-3">
<div className="relative w-40 sm:w-48 aspect-[16/10] rounded-xl overflow-hidden ring-2 ring-amber-400/70 shadow-lg">
<img alt="Product teaser" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6398c31-e7f2-45ea-9396-0967a4ff0c97_800w.jpg"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform">
<svg className="lucide lucide-play h-5 w-5 translate-x-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-white/90 text-sm font-medium">Watch the overview</span>
<span className="text-neutral-300 text-xs">1 min • No fluff</span>
</div>
</button>

<div className="hidden md:flex items-center gap-3">
<div className="text-xs text-neutral-300">
                    In stock • Ships in 2–5 business days
                  </div>
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-md hover:bg-amber-400 transition-colors" href="#">
                    Order now
                    <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="text-center">
<p className="text-neutral-600 text-xs transition-colors hover:text-emerald-600">Core features</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight text-neutral-900 transition-colors hover:text-emerald-700">Built for deep focus</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 01 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-moon h-5 w-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">E-ink Display</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Paper-like clarity</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 02 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-battery h-5 w-5" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Long Battery</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">3 days of use</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 03 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-target h-5 w-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Minimal OS</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Zero distractions</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 04 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-keyboard h-5 w-5" data-lucide="keyboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Tactile Keys</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Satisfying typing</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 05 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-wifi h-5 w-5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Always Connected</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Built-in WiFi</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl ring-1 ring-emerald-300 p-5 bg-gradient-to-tr from-emerald-700 to-emerald-500 text-white">
<div className="absolute inset-0" style={{background: 'radial-gradient(160px 160px at 30% 30%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(220px 220px at 70% 70%, rgba(0,0,0,0.25), transparent 60%)'}}></div>
<div className="relative flex items-center justify-between">
<span className="text-[11px] text-white/80">{ 06 }</span>
</div>
<div className="relative mt-6">
<p className="text-white font-medium tracking-tight">Premium Build</p>
<p className="text-white/90 text-sm">Aluminum body</p>
</div>
<button className="relative mt-8 h-9 w-9 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-sm transition-colors hover:text-emerald-700">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 07 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-sun h-5 w-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Ambient Light</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Auto adjusting</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5 transition-colors">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400 transition-colors group-hover:text-emerald-600">{ 08 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="lucide lucide-cloud h-5 w-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight transition-colors group-hover:text-emerald-700">Cloud Sync</p>
<p className="text-neutral-600 text-sm transition-colors group-hover:text-emerald-600">Seamless backup</p>
</div>
</div>
</div>
</section><section className="mt-10" id="services">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-neutral-900">

<div className="absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79d3006c-9c25-4539-b5f8-94e6afdb2fcb_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
</div>

<div className="relative z-10 p-5 sm:p-8 md:p-12">

<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>What we do</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-white tracking-tight text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">Services.</h2>
</div>
</div>

<div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">

<details className="group open:bg-white/5">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(001)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Device onboarding &amp; setup</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
<img alt="Setup preview" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e19a3dc7-18ba-4146-ba87-10e8dc301957_320w.jpg"/>
</div>
<div>
<h3 className="text-white font-medium tracking-tight">Seamless start, tuned for focus</h3>
<p className="text-neutral-300 text-sm mt-1">We unbox, configure OS, migrate your notes and docs, and tailor profiles for reading, writing, and deep work.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="flex items-center justify-between">
<p className="text-white/80 text-xs">Categories</p>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">E‑ink tuning</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">App profiles</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Cloud sync</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Shortcuts</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Wi‑Fi</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Security</span>
<span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1">Automations</span>
<span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1">6+</span>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-neutral-900 px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-amber-400 transition-colors" href="#">
                Get started
                <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(002)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Workspace optimization</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">We map your daily rhythms and build layouts, themes, and quick actions that reduce friction and boost flow.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(003)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Team training</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">Hands‑on sessions covering best practices, shortcuts, and shared libraries for consistent, efficient work.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(004)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Priority support</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">Direct line to our team with next‑business‑day replies, replacement fast‑track, and proactive check‑ins.</p>
</div>
</details>
</div>
</div>
</div>
</section><section className="mt-10" id="contact">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-neutral-900">

<div className="absolute inset-0">
<img alt="Abstract minimal background" className="h-full w-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via/50 to-transparent"></div>
</div>

<div className="relative z-10 p-5 sm:p-8 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[11px] text-neutral-500">Solace Support</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Have a question?</h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-4 space-y-3" method="POST">
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-email">E‑mail<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-email" name="email" placeholder="you@solace.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-msg" name="message" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors" type="submit">
                Send message
                <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-white tracking-tight text-5xl sm:text-6xl font-semibold leading-[1.05]">Let's talk.</h2>
<p className="sm:text-lg max-w-2xl text-base text-neutral-200 mt-4">
            Tell us about your setup—support, bulk orders, or partnerships. We reply within one business day.
          </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Quick response</p>
<p className="text-neutral-300 text-xs">Most messages receive a reply in under 24h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div className="">
<p className="text-white font-medium text-sm">Clear next steps</p>
<p className="text-neutral-300 text-xs">We’ll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-7">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
<img alt="Team lead" className="h-12 w-12 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg"/>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none">Team Lead</p>
<p className="text-neutral-900 font-medium tracking-tight truncate">Ava Kim</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors" href="mailto:hello@solace.dev">
                Ask directly
                <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 text-center text-xs text-neutral-500">
          © <span id="year">2025</span> Solace. All rights reserved.
        </footer>
</div>
</div>




    </>
  );
}
