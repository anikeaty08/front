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
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-slate-800/80 backdrop-blur">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-6 py-4 md:py-5 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<span className="tracking-tight font-semibold text-base text-sky-300">HC</span>
</div>
<div className="flex flex-col">
<span className="tracking-tight font-semibold text-lg text-slate-50">HomeCare</span>
<span className="text-sm text-slate-400">Trusted home services</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#services">Services</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#how-it-works">How it works</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#areas">Service areas</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#testimonials">Reviews</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 text-sm text-slate-200 hover:border-slate-500/70 hover:bg-slate-900/90 transition-colors px-4 py-1.5">
<i className="lucide lucide-phone-call text-slate-300" style={{strokeWidth: '1.5'}}></i>
<span>Call us</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-sky-500 text-slate-950 text-sm font-semibold tracking-tight hover:bg-sky-400 transition-colors shadow-sm shadow-sky-500/40 px-4 md:px-5 py-1.5">
<i className="lucide lucide-calendar-plus text-slate-950" style={{strokeWidth: '1.5'}}></i>
<span>Book a service</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-sky-100">Same-day &amp; next-day appointments</span>
</div>
<div className="space-y-4">
<h1 className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-slate-50">
                Reliable home services,
                <span className="text-sky-400">on your schedule</span>
</h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                From plumbing and electrical to cleaning and repairs, vetted professionals
                take care of your home so you can focus on what matters.
              </p>
</div>

<form className="rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm shadow-lg shadow-slate-950/60 p-4 sm:p-5 space-y-4 max-w-xl">
<div className="grid md:grid-cols-2 gap-3">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Service type</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-700/80 bg-slate-950/60 text-sm text-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/70 outline-none px-3 py-2 pr-9">
<option>Home cleaning</option>
<option>Plumbing</option>
<option>Electrical</option>
<option>Appliance repair</option>
<option>Handyman</option>
</select>
<i className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">ZIP code</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/60 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/70 outline-none px-3 py-2" placeholder="12345" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-[minmax(0,1.4fr),auto] gap-3 items-center">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Preferred date</label>
<div className="relative">
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/60 text-sm text-slate-100 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/70 outline-none pl-9 pr-3 py-2" type="date"/>
<i className="lucide lucide-calendar absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<button className="inline-flex justify-center items-center gap-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold tracking-tight hover:bg-sky-400 transition-colors shadow-sm shadow-sky-500/40 h-full px-4 md:px-5 py-2" type="submit">
<i className="lucide lucide-search text-slate-950" style={{strokeWidth: '1.5'}}></i>
<span>Check availability</span>
</button>
</div>
<div className="flex items-center gap-3 pt-1">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/5591835/pexels-photo-5591835.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center"></div>
</div>
<p className="text-xs text-slate-400">
                  Trusted by over <span className="text-slate-100 font-medium">4,000</span> local homeowners
                </p>
</div>
</form>
</div>

<div className="relative">
<div className="absolute -top-6 -right-2 sm:-right-6 md:-right-10 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-4 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>
<div className="relative space-y-4">
<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950/90 shadow-xl shadow-slate-950/70 p-5 sm:p-6">
<div className="flex items-center justify-between gap-4 mb-4">
<div>
<h2 className="font-semibold tracking-tight text-lg text-slate-50">
                      Next available professionals
                    </h2>
<p className="text-sm text-slate-400">
                      Real-time availability in your area
                    </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-medium px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Online now
                  </span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[url('https://images.pexels.com/photos/4239148/pexels-photo-4239148.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center border border-slate-800"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-100">Alex • Cleaning</span>
<span className="text-xs text-slate-400">3:30–5:00 PM • Today</span>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-1.5 text-xs text-amber-300">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4.9</span>
<span className="text-slate-500">•</span>
<span className="text-slate-400">128 jobs</span>
</div>
<button className="rounded-full bg-slate-800 text-xs text-slate-100 hover:bg-slate-700/90 transition-colors px-3 py-1">
                        Select
                      </button>
</div>
</div>

<div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-[url('https://images.pexels.com/photos/6466251/pexels-photo-6466251.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center border border-slate-800"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-100">Jamie • Plumbing</span>
<span className="text-xs text-slate-400">Tomorrow • 9–11 AM</span>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-1.5 text-xs text-amber-300">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4.8</span>
<span className="text-slate-500">•</span>
<span className="text-slate-400">96 jobs</span>
</div>
<button className="rounded-full bg-slate-800 text-xs text-slate-100 hover:bg-slate-700/90 transition-colors px-3 py-1">
                        Select
                      </button>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-xs">
<div className="flex items-center gap-1.5 text-slate-400">
<i className="lucide lucide-shield-check text-slate-300" style={{strokeWidth: '1.5'}}></i>
<span>Background-checked &amp; insured professionals</span>
</div>
<button className="hidden sm:inline-flex items-center gap-1 text-sky-300 hover:text-sky-200">
<span>View all</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Avg. response</span>
<i className="lucide lucide-clock-3 text-slate-400" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50">12 min</p>
<p className="text-xs text-emerald-400 mt-1">Live in your area</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Jobs completed</span>
<i className="lucide lucide-home text-slate-400" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50">18k+</p>
<p className="text-xs text-slate-400 mt-1">In the last year</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400">Customer rating</span>
<i className="lucide lucide-smile-plus text-slate-400" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-lg font-semibold tracking-tight text-slate-50">4.9/5</p>
<p className="text-xs text-sky-300 mt-1">2,300+ reviews</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="services">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50">
                All your home services in one place
              </h2>
<p className="mt-2 text-base text-slate-400 max-w-2xl">
                Book one-time jobs or set up recurring visits with trusted professionals.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 px-3 py-1">
<i className="lucide lucide-sparkles text-sky-300" style={{strokeWidth: '1.5'}}></i>
<span>No subscription required</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 px-3 py-1">
<i className="lucide lucide-badge-check text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Upfront pricing</span>
</span>
</div>
</div>
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/50 hover:bg-slate-900/80 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<i className="lucide lucide-sparkles text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Home cleaning</h3>
<p className="text-xs text-slate-400">Standard, deep &amp; move-out</p>
</div>
</div>
<span className="text-xs text-slate-400">From $89</span>
</div>
<p className="text-sm text-slate-300">
                Flexible cleanings for apartments and houses, plus add-ons like inside fridge, oven, and windows.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">Avg. rating <span className="text-amber-300">4.9</span></span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>Book cleaning</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/50 hover:bg-slate-900/80 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<i className="lucide lucide-droplets text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Plumbing</h3>
<p className="text-xs text-slate-400">Leaks, clogs &amp; installs</p>
</div>
</div>
<span className="text-xs text-slate-400">From $119</span>
</div>
<p className="text-sm text-slate-300">
                Emergency leak fixes, drain clearing, fixture installs, water heater repairs and more.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">24/7 emergency support</span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>Request plumber</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/50 hover:bg-slate-900/80 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<i className="lucide lucide-zap text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Electrical</h3>
<p className="text-xs text-slate-400">Repairs &amp; upgrades</p>
</div>
</div>
<span className="text-xs text-slate-400">From $129</span>
</div>
<p className="text-sm text-slate-300">
                Fix faulty outlets, install lighting, upgrade panels, and handle smart home setups safely.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">Licensed &amp; insured pros</span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>Book electrician</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/50 hover:bg-slate-900/80 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<i className="lucide lucide-hammer text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Handyman</h3>
<p className="text-xs text-slate-400">Small jobs &amp; fixes</p>
</div>
</div>
<span className="text-xs text-slate-400">From $89</span>
</div>
<p className="text-sm text-slate-300">
                Furniture assembly, mounting, caulking, minor repairs, and general maintenance tasks.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">Perfect for punch lists</span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>View tasks</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="group rounded-2xl border border-slate-800/90 bg-slate-950/80 hover:border-sky-500/50 hover:bg-slate-900/80 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center">
<i className="lucide lucide-washing-machine text-sky-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Appliance repair</h3>
<p className="text-xs text-slate-400">Kitchen &amp; laundry</p>
</div>
</div>
<span className="text-xs text-slate-400">From $99</span>
</div>
<p className="text-sm text-slate-300">
                Diagnose and repair fridges, ovens, dishwashers, washers, dryers, and more.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">Parts &amp; labor warranty</span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>Book repair</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="group rounded-2xl border border-dashed border-slate-800/90 bg-slate-950/50 hover:border-sky-500/60 hover:bg-slate-900/70 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center">
<i className="lucide lucide-plus text-slate-300" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Custom project</h3>
<p className="text-xs text-slate-400">Indoor &amp; outdoor</p>
</div>
</div>
</div>
<p className="text-sm text-slate-300">
                Have something specific in mind? Tell us about your project and we’ll match you with the right pro.
              </p>
<div className="flex items-center justify-between mt-auto pt-2 text-xs">
<span className="text-slate-400">Free, no-obligation quotes</span>
<button className="inline-flex items-center gap-1 text-sky-300 group-hover:text-sky-200">
<span>Describe project</span>
<i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50">
                Book in minutes, not hours
              </h2>
<p className="mt-2 text-base text-slate-400 max-w-2xl">
                A simple process designed so you always know who’s coming and what you’ll pay.
              </p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3 mb-1">
<span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-sky-500/15 border border-sky-500/40 text-xs font-semibold tracking-tight text-sky-200">
                  1
                </span>
<span className="text-xs text-slate-500">Less than 1 minute</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Tell us what you need</h3>
<p className="text-sm text-slate-300">
                Choose your service, share a few details, add photos if needed, and pick your preferred time.
              </p>
<div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
<i className="lucide lucide-file-input text-slate-400" style={{strokeWidth: '1.5'}}></i>
<span>Get an instant price estimate</span>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3 mb-1">
<span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-sky-500/15 border border-sky-500/40 text-xs font-semibold tracking-tight text-sky-200">
                  2
                </span>
<span className="text-xs text-slate-500">We match you</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Get matched with a pro</h3>
<p className="text-sm text-slate-300">
                We pair you with a vetted professional based on availability, rating, and experience.
              </p>
<div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
<i className="lucide lucide-shield-check text-slate-400" style={{strokeWidth: '1.5'}}></i>
<span>Background-checked &amp; insured</span>
</div>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3 mb-1">
<span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-sky-500/15 border border-sky-500/40 text-xs font-semibold tracking-tight text-sky-200">
                  3
                </span>
<span className="text-xs text-slate-500">After the job</span>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-50">Relax, we’ll handle the rest</h3>
<p className="text-sm text-slate-300">
                Track arrival, rate your pro, and pay securely once the job is done. We’re here if you need support.
              </p>
<div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
<i className="lucide lucide-credit-card text-slate-400" style={{strokeWidth: '1.5'}}></i>
<span>Secure online payment</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="areas">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">

<div>
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50 mb-2">
              Serving your neighborhood
            </h2>
<p className="text-base text-slate-400 mb-5 max-w-xl">
              Enter your ZIP code to confirm availability and see real-time ETA and pricing.
            </p>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4">
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<i className="lucide lucide-map-pin absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{strokeWidth: '1.5'}}></i>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/60 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/70 outline-none pl-9 pr-3 py-2" placeholder="Enter ZIP code" type="text"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 text-slate-950 text-sm font-semibold tracking-tight hover:bg-sky-400 transition-colors px-4 py-2" type="submit">
<i className="lucide lucide-radar text-slate-950" style={{strokeWidth: '1.5'}}></i>
<span>Check</span>
</button>
</form>
<div className="grid sm:grid-cols-3 gap-3 text-xs">
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
<p className="text-slate-400 mb-1">Metro area</p>
<p className="text-sm text-slate-100">Downtown, Midtown, Westside</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
<p className="text-slate-400 mb-1">Suburbs</p>
<p className="text-sm text-slate-100">North, East &amp; South suburbs</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3">
<p className="text-slate-400 mb-1">Soon</p>
<p className="text-sm text-slate-100">More cities coming Q4</p>
</div>
</div>
<p className="text-xs text-slate-500">
                Not in your area yet? <span className="text-sky-300">Join the waitlist</span> and we’ll let you know when we’re live.
              </p>
</div>
</div>

<div id="testimonials">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold tracking-tight text-xl text-slate-50">Homeowners love us</h3>
<div className="flex items-center gap-1 text-xs text-amber-300">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<i className="lucide lucide-star-half text-amber-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-300 ml-1">4.9 average</span>
</div>
</div>
<div className="space-y-4">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[url('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center border border-slate-800"></div>
<div>
<p className="text-sm font-medium text-slate-100">Taylor R.</p>
<p className="text-xs text-slate-400">Home cleaning • Downtown</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-amber-300">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>5.0</span>
</div>
</div>
<p className="text-sm text-slate-300">
                  “Booked a deep clean the night before guests arrived. The team was on time, thorough, and the price was exactly what I was quoted.”
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[url('https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200')] bg-cover bg-center border border-slate-800"></div>
<div>
<p className="text-sm font-medium text-slate-100">Marcus L.</p>
<p className="text-xs text-slate-400">Plumbing • Eastside</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs text-amber-300">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4.8</span>
</div>
</div>
<p className="text-sm text-slate-300">
                  “They had a plumber at my place in under an hour for a leak. Loved being able to track arrival right from my phone.”
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
<div className="rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/15 via-slate-950 to-slate-950 shadow-[0_0_60rem_rgba(56,189,248,0.25)] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="max-w-xl space-y-3">
<h2 className="font-semibold tracking-tight text-2xl sm:text-3xl text-slate-50">
                Ready to take something off your to-do list?
              </h2>
<p className="text-base text-slate-200">
                Book a trusted professional in just a few clicks. No phone trees, no hidden fees.
              </p>
<div className="flex flex-wrap gap-3 text-xs text-slate-200">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-badge-check text-emerald-300" style={{strokeWidth: '1.5'}}></i>
<span>Vetted pros only</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-lock text-sky-300" style={{strokeWidth: '1.5'}}></i>
<span>Secure payments</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-info text-slate-200" style={{strokeWidth: '1.5'}}></i>
<span>Support 7 days a week</span>
</span>
</div>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 text-slate-950 text-sm font-semibold tracking-tight hover:bg-sky-400 transition-colors shadow-sm shadow-sky-500/40 px-6 py-2">
<i className="lucide lucide-calendar-plus text-slate-950" style={{strokeWidth: '1.5'}}></i>
<span>Book a service</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 text-sm text-slate-100 hover:border-slate-500 hover:bg-slate-900/90 transition-colors px-6 py-2">
<i className="lucide lucide-message-circle text-slate-200" style={{strokeWidth: '1.5'}}></i>
<span>Talk to our team</span>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<span className="tracking-tight font-semibold text-sm text-slate-100">HomeCare</span>
<span>•</span>
<span>Made for modern homeowners</span>
</div>
<div className="flex flex-wrap gap-4 text-slate-500">
<span>© <span id="year"></span> HomeCare, Inc.</span>
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Support</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
