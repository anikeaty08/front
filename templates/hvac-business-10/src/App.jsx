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



      // Lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Pricing toggle
        const toggle = document.getElementById('billingToggle');
        const thumb = document.getElementById('toggleThumb');
        const monthly = document.querySelectorAll('.price-monthly');
        const yearly = document.querySelectorAll('.price-yearly');

        let annual = false;
        const setMode = () => {
          annual
            ? thumb.classList.add('translate-x-8')
            : thumb.classList.remove('translate-x-8');
          monthly.forEach(el => el.classList.toggle('hidden', annual));
          yearly.forEach(el => el.classList.toggle('hidden', !annual));
        };
        toggle?.addEventListener('click', () => {
          annual = !annual;
          setMode();
        });
        setMode();
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -left-20 h-[60vh] w-[60vw] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(24,24,27,0) 60%)'}}></div>
<div className="absolute -bottom-40 -right-20 h-[70vh] w-[60vw] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.3) 0%, rgba(24,24,27,0) 60%)'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,rgba(99,102,241,0.08),transparent)]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 border-b bg-slate-950/60 border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md ring-1 flex items-center justify-center text-xs font-semibold tracking-tight group-hover:ring-white/20 transition bg-white/5 ring-white/10">
              HT
            </div>
<span className="text-[17px] tracking-tight font-semibold">HVACTR</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:underline underline-offset-4 hover:text-white" href="#features">Product</a>
<a className="hover:underline underline-offset-4 hover:text-white" href="#how-it-works">How it works</a>
<a className="hover:underline underline-offset-4 hover:text-white" href="#pricing">Pricing</a>
<a className="hover:underline underline-offset-4 hover:text-white" href="#testimonials">Customers</a>
<a className="hover:underline underline-offset-4 hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-3.5 py-2 rounded-md text-sm ring-1 transition text-slate-300 hover:text-white hover:bg-white/5 ring-white/10 hover:ring-white/20" href="#">Log in</a>
<a className="px-4 py-2 rounded-md text-sm font-medium transition shadow-sm ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#pricing">Start free</a>
</div>
<div className="md:hidden">
<a className="px-3 py-1.5 rounded-md text-sm font-medium transition ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#pricing">Start</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="md:pt-24 md:pb-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-12 pl-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs bg-green-500/10 ring-1 mb-5 text-green-200 ring-green-400/20">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Save hours every week
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.05]">
              Run your HVAC business from one dashboard
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-300">
              Scheduling, job tracking, dispatch, invoicing, and billing—all streamlined for small HVAC teams. Spend less time in spreadsheets and more time on-site.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition ring-1 shadow-sm bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#pricing">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Start free trial
              </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition ring-1 bg-white/5 text-white hover:bg-white/10 ring-white/10 hover:ring-white/20" href="#demo">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a demo
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6 text-sm">
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-2xl font-semibold tracking-tight">98%</div>
<div className="text-slate-400">On‑time jobs</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-2xl font-semibold tracking-tight">3x</div>
<div className="text-slate-400">Faster invoicing</div>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-2xl font-semibold tracking-tight">-12 hrs</div>
<div className="text-slate-400">Admin per week</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-2xl opacity-20 blur-2xl" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.35), rgba(24,24,27,0))'}}></div>
<div className="rounded-xl ring-1 p-4 md:p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] bg-slate-900 ring-white/10">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="text-xs text-slate-400">Demo — Scheduler</div>
</div>
<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-5">
<div className="rounded-lg ring-1 overflow-hidden bg-white/5 ring-white/10">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<div className="text-sm font-medium">Technicians</div>
<div className="flex items-center gap-2 text-slate-400">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
<ul className="divide-y divide-white/10">
<li className="px-3 py-2.5 flex items-center justify-between gap-2 min-w-0 transition hover:bg-white/5">
<div className="flex items-center gap-2 flex-1 min-w-0">
<span className="h-2.5 w-2.5 rounded-full bg-cyan-400/90"></span>
<span className="text-sm truncate">A. Reyes</span>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 ring-1 ring-cyan-500/20 text-cyan-300">Free</span>
</li>
<li className="px-3 py-2.5 flex items-center justify-between gap-2 min-w-0 transition hover:bg-white/5">
<div className="flex items-center gap-2 flex-1 min-w-0">
<span className="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
<span className="text-sm truncate">M. Chen</span>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300">On route</span>
</li>
<li className="px-3 py-2.5 flex items-center justify-between gap-2 min-w-0 transition hover:bg-white/5">
<div className="flex items-center gap-2 flex-1 min-w-0">
<span className="h-2.5 w-2.5 rounded-full bg-green-400/90"></span>
<span className="text-sm truncate">P. Patel</span>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-green-500/10 ring-1 ring-green-500/20 text-green-300">Job</span>
</li>
</ul>
</div>

<div className="mt-4 rounded-lg ring-1 overflow-hidden bg-white/5 ring-white/10">
<div className="px-3 py-2 border-b text-sm font-medium border-white/10">Today</div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between gap-3 min-w-0 rounded-md ring-1 px-3 py-2 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 flex-1 min-w-0">
<svg className="lucide lucide-wrench h-4 w-4 text-green-300" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<div className="min-w-0">
<div className="text-sm truncate">Tune-up — 3 Ton Unit</div>
<div className="text-[11px] text-slate-400 truncate">08:30 AM • 1524 Elm St.</div>
</div>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-green-500/10 ring-1 ring-green-500/20 text-green-300">Scheduled</span>
</div>
<div className="flex items-center justify-between gap-3 min-w-0 rounded-md ring-1 px-3 py-2 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 flex-1 min-w-0">
<svg className="lucide lucide-thermometer-sun h-4 w-4 text-cyan-300" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
<div className="min-w-0">
<div className="text-sm truncate">Install — Heat Pump</div>
<div className="text-[11px] text-slate-400 truncate">11:00 AM • 780 Oak Ave.</div>
</div>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 ring-1 ring-cyan-500/20 text-cyan-300">Active</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-7">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center justify-between flex-wrap gap-y-2">
<div className="flex items-center gap-2">
<button className="h-7 w-7 rounded-md ring-1 transition flex items-center justify-center bg-white/5 ring-white/10 hover:bg-white/10">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="h-7 w-7 rounded-md ring-1 transition flex items-center justify-center bg-white/5 ring-white/10 hover:bg-white/10">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<div className="text-sm font-medium">Wed, Mar 13</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] hidden md:inline text-slate-400">Drag to assign or reschedule</span>
<button className="px-2.5 py-1.5 rounded-md text-xs bg-green-500 transition ring-1 text-white hover:bg-green-400 ring-green-300/30">New job</button>
</div>
</div>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-md bg-green-500/10 ring-1 ring-green-500/20 p-3">
<div className="text-xs mb-1 text-green-200">09:00 — 11:30</div>
<div className="text-sm">Maintenance • SMITH</div>
<div className="text-[11px] text-slate-400">A. Reyes — 1524 Elm St.</div>
</div>
<div className="rounded-md bg-cyan-500/10 ring-1 ring-cyan-500/20 p-3">
<div className="text-xs mb-1 text-cyan-200">12:00 — 15:00</div>
<div className="text-sm">Installation • AC</div>
<div className="text-[11px] text-slate-400">M. Chen — 780 Oak Ave.</div>
</div>
<div className="rounded-md bg-amber-500/10 ring-1 ring-amber-500/20 p-3">
<div className="text-xs mb-1 text-amber-200">14:00 — 16:00</div>
<div className="text-sm">Diagnostic • Heat</div>
<div className="text-[11px] text-slate-400">P. Patel — 52 Pine Rd.</div>
</div>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-4">

<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text h-4 w-4 text-slate-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="text-sm font-medium">Job #2841 • Diagnostic</div>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300">Pending</span>
</div>
<div className="mt-2 text-[13px] text-slate-300">
                        Issue: No cool. Technician to inspect coils and compressor.
                      </div>
<div className="mt-3 flex items-center gap-2 text-[12px] text-slate-400">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 52 Pine Rd., Suite 6
                      </div>
</div>

<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-receipt h-4 w-4 text-slate-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<div className="text-sm font-medium">Invoice #INV-732</div>
</div>
<span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 ring-1 ring-cyan-500/20 text-cyan-300">Paid</span>
</div>
<div className="mt-2 text-[13px] text-slate-300">
                        Labor (2.0h), Air Filter MERV 13, Diagnostic Fee
                      </div>
<div className="mt-3 flex items-center justify-between text-sm">
<span className="text-slate-400">Total</span>
<span className="font-medium">$286.00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center gap-2 text-[12px] text-slate-400">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Secure and PCI compliant billing
            </div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
<div className="text-center text-sm text-slate-400">
          Trusted by growing HVAC teams everywhere
        </div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-slate-400">
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">ARCO</div>
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">NORTHAIR</div>
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">VENTCO</div>
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">COOLA</div>
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">THERMOX</div>
<div className="h-10 rounded-md ring-1 flex items-center justify-center text-xs tracking-tight bg-white/5 ring-white/10">AIRSET</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="features">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Everything you need to run your shop</h2>
<p className="mt-3 text-slate-300">
            Stay on top of jobs, technicians, and cash flow without juggling multiple tools.
          </p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-calendar-range h-5 w-5 text-green-300" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<div className="text-base font-medium">Smart scheduling</div>
</div>
<p className="mt-2 text-sm text-slate-300">Drag-and-drop calendar with conflict alerts and real-time technician availability.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-wrench h-5 w-5 text-cyan-300" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<div className="text-base font-medium">Job management</div>
</div>
<p className="mt-2 text-sm text-slate-300">Track work orders, parts, photos, and notes from dispatch to sign‑off.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-receipt h-5 w-5 text-amber-300" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<div className="text-base font-medium">Invoicing &amp; billing</div>
</div>
<p className="mt-2 text-sm text-slate-300">Send invoices on-site, accept cards and ACH, and auto-remind late payers.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map h-5 w-5 text-teal-300" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<div className="text-base font-medium">GPS &amp; dispatch</div>
</div>
<p className="mt-2 text-sm text-slate-300">Live technician location and optimized routing for faster response times.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-bell h-5 w-5 text-amber-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="text-base font-medium">Customer updates</div>
</div>
<p className="mt-2 text-sm text-slate-300">SMS and email notifications with ETA links and invoice receipts.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center gap-3">
<svg className="lucide lucide-folder-cog h-5 w-5 text-green-300" data-lucide="folder-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"></path><path d="m14.305 19.53.923-.382"></path><path d="m15.228 16.852-.923-.383"></path><path d="m16.852 15.228-.383-.923"></path><path d="m16.852 20.772-.383.924"></path><path d="m19.148 15.228.383-.923"></path><path d="m19.53 21.696-.382-.924"></path><path d="m20.772 16.852.924-.383"></path><path d="m20.772 19.148.924.383"></path><circle cx="18" cy="18" r="3"></circle></svg>
<div className="text-base font-medium">Integrations</div>
</div>
<p className="mt-2 text-sm text-slate-300">Sync customers, items, and payouts with your accounting and payments.</p>
</div>
</div>

<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-sm font-medium mb-1">Estimates &amp; proposals</div>
<p className="text-sm text-slate-300">Quick quotes, customer approvals, and convert to jobs with one click.</p>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-sm font-medium mb-1">Inventory &amp; parts</div>
<p className="text-sm text-slate-300">Track stock, preferred vendors, and auto-suggest parts for common fixes.</p>
</div>
<div className="rounded-lg ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-sm font-medium mb-1">Team performance</div>
<p className="text-sm text-slate-300">Measure first-time fix rate, utilization, and revenue per tech.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="how-it-works">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold">From call to paid in three steps</h3>
<div className="mt-6 space-y-6">
<div className="flex gap-4">
<div className="h-9 w-9 rounded-md ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-phone h-4.5 w-4.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="text-base font-medium">1. Capture and schedule</div>
<p className="text-sm mt-1 text-slate-300">Create a job from a call or web request, then drop it on the calendar. Assign based on skills and location.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-9 w-9 rounded-md ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-truck h-4.5 w-4.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="">
<div className="text-base font-medium">2. Dispatch and track</div>
<p className="text-sm mt-1 text-slate-300">Techs get job details on mobile, update status, attach photos, and capture signatures.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-9 w-9 rounded-md ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-credit-card h-4.5 w-4.5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<div className="text-base font-medium">3. Invoice and get paid</div>
<p className="text-sm mt-1 text-slate-300">Generate an invoice on-site and accept payment instantly or send online.</p>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#pricing">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Get started
              </a>
</div>
</div>

<div className="relative">
<div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900">
<img alt="HVAC technician" className="h-72 w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs mb-1 text-slate-400">Customer</div>
<div className="text-sm font-medium">S. Johnson</div>
<div className="text-[11px] text-slate-400">1524 Elm St.</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs mb-1 text-slate-400">Job</div>
<div className="text-sm font-medium">Maintenance</div>
<div className="text-[11px] text-slate-400">3 Ton Unit</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs mb-1 text-slate-400">Status</div>
<div className="text-sm font-medium text-cyan-300">On site</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-3 hidden md:block">
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="max-w-2xl mx-auto text-center">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold">Simple pricing that scales with your crew</h3>
<p className="mt-3 text-slate-300">No contracts. Upgrade or cancel anytime.</p>
</div>

<div className="mt-6 flex items-center justify-center gap-3">
<span className="text-sm text-slate-400">Monthly</span>
<button className="relative flex items-center w-16 h-8 rounded-full ring-1 transition p-1 bg-white/10 ring-white/10 hover:ring-white/20" id="billingToggle">
<span className="h-6 w-6 rounded-full shadow ring-1 translate-x-0 transition-transform bg-white ring-black/5" id="toggleThumb"></span>
</button>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-400">Yearly</span>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 ring-1 ring-cyan-500/20 text-cyan-300">Save 20%</span>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl ring-1 transition p-6 flex flex-col bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Starter</div>
<svg className="lucide lucide-leaf h-5 w-5 text-slate-300" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight">
<span className="price price-monthly">$19</span>
<span className="price price-yearly hidden">$15</span>
</span>
<span className="text-sm text-slate-400">/ tech</span>
</div>
<div className="mt-1 text-[13px] text-slate-400">Billed monthly or yearly</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Scheduling &amp; calendar
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic job tracking
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Invoicing &amp; receipts
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#">Start free</a>
</div>

<div className="relative rounded-2xl bg-gradient-to-b ring-1 transition p-6 flex flex-col from-white/10 to-white/5 ring-white/10 hover:ring-white/20">
<div className="absolute -top-3 right-4 text-[11px] px-2 py-0.5 rounded-full bg-green-500/15 ring-1 ring-green-500/20 text-green-200">Most popular</div>
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Pro</div>
<svg className="lucide lucide-sparkles h-5 w-5 text-green-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight">
<span className="price price-monthly">$39</span>
<span className="price price-yearly hidden">$31</span>
</span>
<span className="text-sm text-slate-400">/ tech</span>
</div>
<div className="mt-1 text-[13px] text-slate-400">Everything in Starter, plus:</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dispatch &amp; live GPS
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Estimates &amp; approvals
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SMS/email notifications
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#">Start free</a>
</div>

<div className="rounded-2xl ring-1 transition p-6 flex flex-col bg-white/5 ring-white/10 hover:ring-white/20 hover:bg-white/10">
<div className="flex items-center justify-between">
<div className="text-lg font-medium">Business</div>
<svg className="lucide lucide-building-2 h-5 w-5 text-slate-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight">
<span className="price price-monthly">$69</span>
<span className="price price-yearly hidden">$55</span>
</span>
<span className="text-sm text-slate-400">/ tech</span>
</div>
<div className="mt-1 text-[13px] text-slate-400">For multi‑location teams</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced permissions
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom fields &amp; reports
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check h-4 w-4 text-cyan-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support &amp; onboarding
              </li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white/5 text-white hover:bg-white/10 ring-white/10" href="#demo">Talk to sales</a>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="testimonials">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="max-w-2xl">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold">Loved by HVAC owners and ops managers</h3>
<p className="mt-3 text-slate-300">Real results from small teams growing faster with less admin.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:bg-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Sasha V.</div>
<div className="text-[11px] text-slate-400">Owner, ArcticFix</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">We moved off spreadsheets and closed out invoices 3x faster. The calendar and dispatch board are game changers.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:bg-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Miguel R.</div>
<div className="text-[11px] text-slate-400">Ops, NorthAir</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">Techs love the mobile flow. Signatures, photos, and parts are all in one place—less time chasing details.</p>
</div>
<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:bg-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Priya P.</div>
<div className="text-[11px] text-slate-400">Manager, VentCo</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">We see where every job stands at a glance. Cash flow is clearer and customers get updates automatically.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="faq">
<div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold text-center">FAQs</h3>
<div className="mt-8 divide-y rounded-xl ring-1 divide-white/10 ring-white/10 bg-white/5">
<details className="group">
<summary className="p-5 cursor-pointer list-none flex items-center justify-between">
<span className="text-base font-medium">Can I use this with a small crew?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-300">Yes—built for teams from 1–50 techs with simple setup and no contracts.</div>
</details>
<details className="group">
<summary className="p-5 cursor-pointer list-none flex items-center justify-between">
<span className="text-base font-medium">Do you have a mobile app?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-300">Technicians use a streamlined mobile experience for jobs, photos, signatures, and payments.</div>
</details>
<details className="group">
<summary className="p-5 cursor-pointer list-none flex items-center justify-between">
<span className="text-base font-medium">How does billing work?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-300">Choose monthly or save with annual billing. Add or remove tech seats anytime.</div>
</details>
<details className="group">
<summary className="p-5 cursor-pointer list-none flex items-center justify-between">
<span className="text-base font-medium">Can I import my data?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-slate-300">We’ll help import customers, items, and price books from CSV or your accounting tool.</div>
</details>
</div>
</div>
</section>

<section className="border-t border-white/5" id="demo">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="rounded-2xl ring-1 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 ring-white/10">
<div>
<h4 className="text-2xl md:text-3xl tracking-tight font-semibold">See HVAC Tracker in action</h4>
<p className="mt-2 text-sm md:text-base text-slate-300">Book a 20‑minute walkthrough tailored to your workflow.</p>
</div>
<div className="flex items-center gap-3">
<a className="px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white/5 text-white hover:bg-white/10 ring-white/10" href="#pricing">Compare plans</a>
<a className="px-4 py-2 rounded-md text-sm font-medium transition ring-1 bg-white text-slate-900 hover:bg-slate-100 ring-black/5" href="#">Book a demo</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-5 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md ring-1 flex items-center justify-center text-xs font-semibold tracking-tight bg-white/5 ring-white/10">HT</div>
<span className="text-[16px] tracking-tight font-semibold">HVACTR</span>
</a>
<p className="mt-3 text-sm max-w-sm text-slate-400">Powerful, simple software to schedule jobs, dispatch your crew, and get paid—without the paperwork.</p>
<div className="mt-4 flex items-center gap-3 text-slate-400">
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs">SOC 2 &amp; PCI compliant</span>
</div>
</div>
<div>
<div className="text-sm font-medium mb-2">Product</div>
<ul className="text-sm space-y-2 text-slate-300">
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#features">Scheduling</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#features">Jobs</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#features">Invoicing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-2">Company</div>
<ul className="text-sm space-y-2 text-slate-300">
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#testimonials">Customers</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#demo">Demo</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-2">Resources</div>
<ul className="text-sm space-y-2 text-slate-300">
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#faq">FAQ</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#">Guides</a></li>
<li><a className="hover:underline underline-offset-4 hover:text-white" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<div>© <span id="year">2025</span> HVAC Tracker. All rights reserved.</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Security</a>
</div>
</div>
</div>
</footer>

<style>
      /* Ensure Inter is applied consistently */
      :root { font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; }
    </style>

    </>
  );
}
