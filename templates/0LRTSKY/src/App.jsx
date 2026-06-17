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



      // Icons at 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Chart.js placeholder (kept intact; only runs if a canvas with id exists)
        const ctx = document.getElementById('engagementChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
              datasets: [{
                label: 'Interactions',
                data: [12, 19, 11, 25, 22, 30, 28],
                fill: true,
                tension: 0.35,
                backgroundColor: 'rgba(16,185,129,0.15)',
                borderColor: 'rgb(16,185,129)',
                borderWidth: 2,
                pointRadius: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { intersect: false } },
              scales: {
                x: { grid: { display: false }, ticks: { color: '#4b5563', font: { size: 11 } } },
                y: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#4b5563', font: { size: 11 }, stepSize: 10 } }
              }
            }
          });
        }
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-8 w-8 rounded-full bg-neutral-900 items-center justify-center text-white">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Spik 'N Span Cleaning Services</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-700 hover:text-neutral-900 font-sans" href="#">Services</a>
<a className="hover:text-neutral-900 text-neutral-700" href="#">Testimonials</a>
<a className="hover:text-neutral-900 text-neutral-700" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 transition font-sans">
              Free quote
            </button>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 hover:bg-neutral-100">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden rounded-3xl mt-4 mr-6 mb-4 ml-6 border border-black/10">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100 to-lime-100"></div>
<div className="max-w-7xl md:py-20 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="">
<h1 className="sm:text-5xl md:text-6xl text-4xl font-medium text-neutral-900 tracking-tight">Make every surface shine — <span className="font-normal italic font-instrument-serif">spotless without the stress</span></h1>
<p className="mt-5 text-neutral-700 leading-relaxed font-sans">
              Professional, insured cleaners for homes and businesses. Flexible scheduling, eco options, and meticulous detail—every visit.
            </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-black transition text-sm font-medium text-white bg-neutral-900 rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
                Get a free quote
              </a>
<a className="inline-flex items-center gap-2 hover:bg-white/60 transition text-sm font-medium border-black/10 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
                Explore services
              </a>
</div>
<div className="mt-8 space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 flex bg-emerald-100 rounded-full mt-1 items-center justify-center"><svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<div className="">
<h4 className="text-base font-semibold text-neutral-900 mb-1">Bonded &amp; insured</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Vetted professionals and coverage for total peace of mind.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 flex bg-emerald-100 rounded-full mt-1 items-center justify-center">
<svg className="lucide lucide-clock h-4 w-4 text-emerald-600" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-neutral-900 mb-1">On-time guarantee</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Reliable arrivals with reminders and clear communication.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 flex bg-emerald-100 rounded-full mt-1 items-center justify-center">
<svg className="lucide lucide-leaf h-4 w-4 text-emerald-600" data-lucide="leaf" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-neutral-900 mb-1">Eco-friendly options</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Non-toxic supplies available—safe for kids and pets.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-neutral-900 border-neutral-800 border rounded-3xl">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative h-56 sm:h-64 rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/5 overflow-hidden">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full text-neutral-800">
<defs>
<pattern height="24" id="grid" patternunits="userSpaceOnUse" width="24">
<path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
<span className="absolute left-6 top-4 h-0.5 w-10 rounded bg-sky-500"></span>
<div className="absolute right-6 top-8 sm:right-10 sm:top-10 w-[78%] rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg">
<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
<span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
<span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
<span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
<div className="ml-3 h-2 w-24 rounded bg-neutral-800"></div>
</div>
<div className="grid grid-cols-3 gap-3 p-4">
<div className="col-span-2 rounded-lg border border-neutral-800 overflow-hidden">
<img alt="Kitchen cleaning" className="h-28 w-full object-cover" data-gallery="https://images.unsplash.com/photo-1588011930968-eadac80e6f88?q=80&amp;w=1600&amp;auto=format&amp;fit=crop, https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=1600&amp;auto=format&amp;fit=crop, https://images.unsplash.com/photo-1584624278907-8f511dfa7b43?q=80&amp;w=1600&amp;auto=format&amp;fit=crop, https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80, https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80, https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=800&amp;q=80"/>
</div>
<div className="rounded-lg border border-neutral-800 overflow-hidden">
<img alt="Bathroom sparkle" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-24 bg-neutral-900 bg-[url(https://images.unsplash.com/photo-1484154218962-a197022b5858?w=320&amp;q=80)] bg-cover border-neutral-800 border rounded-lg"></div>
<div className="h-24 bg-neutral-900 bg-[url(https://images.unsplash.com/photo-1563453392212-326f5e854473?w=320&amp;q=80)] bg-cover border-neutral-800 border rounded-lg"></div>
<div className="h-24 bg-neutral-900 bg-[url(https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=320&amp;q=80)] bg-cover border-neutral-800 border rounded-lg"></div>
</div>
</div>
</div>
<div className="sm:mt-8 mt-6">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2v20"></path><circle cx="12" cy="12" r="4"></circle></svg>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-100">Deep Clean Preview</h3>
</div>
<p className="mt-3 text-neutral-400 text-sm">See the attention to detail our teams bring to kitchens, bathrooms, and high-touch areas.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
                      See results
                      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</article>

<div className="relative w-full max-w-xl mt-8">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] h-9 shadow-[0_6px_20px_rgba(16,185,129,0.25)] bg-emerald-900/10 rounded-2xl"></div>
<article className="relative overflow-hidden ring-1 ring-white/15 text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-2xl">
<div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
<div className="sm:p-5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start gap-3">
<div className="shrink-0 rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-2.5 ring-1 ring-white/10 shadow-md">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-start justify-between gap-3">
<h3 className="text-[15px] sm:text-base font-semibold tracking-tight truncate">Tip: Request Green Cleaning</h3>
<span className="text-xs sm:text-sm text-white/85 shrink-0">2m ago</span>
</div>
<p className="mt-1 text-sm leading-6 text-white/90">Choose non-toxic products for allergy-sensitive homes—same shine, safer supplies.</p>
</div>
</div>
</div>
</article>
</div>
</div>
</div>

<div className="border-black/10 border-t mt-12 pt-8">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center text-neutral-500">
<div className="flex gap-2 items-center">
<svg className="lucide lucide-asterisk h-4 w-4" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg><span className="text-sm font-medium font-sans">Alpha</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg><span className="text-sm font-medium font-sans">Nova</span>
</div>
<div className="flex gap-2 items-center">
<svg className="lucide lucide-orbit w-[16px] h-[16px]" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg><span className="text-sm font-medium font-sans">Orbit</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-blocks h-4 w-4" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg><span className="text-sm font-medium font-sans">Civic</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-beaker h-4 w-4" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg><span className="text-sm font-medium font-sans">Labify</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-box h-4 w-4" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg><span className="text-sm font-medium font-sans">Pallet</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 bg-white pt-16 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-end justify-between gap-6">
<div className="">
<h2 className="sm:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">Our services —<span className="font-normal italic font-instrument-serif">designed to sparkle</span></h2>
<p className="mt-3 text-neutral-600 max-w-2xl font-sans">From routine maintenance to deep cleans and move-outs—tailored to your space and schedule.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black font-sans" href="#">
            Explore services
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
<svg className="lucide lucide-home h-5 w-5 text-emerald-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Residential Cleaning</h3>
<p className="text-sm text-slate-600 mb-6">Weekly, bi-weekly, or monthly home cleaning with checklists for every room.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between"><span className="text-slate-700">Kitchens &amp; bathrooms</span><span className="text-emerald-600 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-slate-700">Dusting &amp; vacuuming</span><span className="text-emerald-600 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-slate-700">Mopping &amp; surfaces</span><span className="text-emerald-600 font-medium">✓</span></div>
</div>
</div>

<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center">
<svg className="lucide lucide-building-2 h-5 w-5 text-blue-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<button className="text-gray-500 hover:text-gray-300 transition-colors">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Commercial Cleaning</h3>
<p className="text-sm text-gray-300 mb-6">Reliable office and retail cleaning with after-hours availability.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between"><span className="text-gray-300">Desks &amp; lobbies</span><span className="text-blue-400 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-gray-300">Glass spot cleaning</span><span className="text-blue-400 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-gray-300">Trash &amp; sanitizing</span><span className="text-blue-400 font-medium">✓</span></div>
</div>
</div>

<div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
<div className="flex items-start justify-between mb-4">
<div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
<svg className="lucide lucide-sparkle h-5 w-5 text-purple-600" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Deep Cleaning</h3>
<p className="text-sm text-slate-600 mb-6">Top-to-bottom detail cleaning for move-ins, move-outs, or seasonal refresh.</p>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between"><span className="text-slate-700">Baseboards &amp; vents</span><span className="text-purple-600 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-slate-700">Inside cabinets</span><span className="text-purple-600 font-medium">✓</span></div>
<div className="flex items-center justify-between"><span className="text-slate-700">Appliance interiors</span><span className="font-medium text-purple-600">✓</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="sm:p-10 text-white bg-emerald-900 bg-[url(https://images.unsplash.com/photo-1603715749722-c4b4a67777ee?q=80&amp;w=2000&amp;auto=format&amp;fit=crop)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="grid md:grid-cols-4 gap-8 items-start">
<div>
<p className="text-3xl font-medium tracking-tight">1.2k+</p>
<p className="text-sm text-emerald-100 mt-1 font-sans">Spaces cleaned</p>
</div>
<div>
<p className="text-3xl font-medium tracking-tight">24h</p>
<p className="text-sm text-emerald-100 mt-1 font-sans">Turnaround quotes</p>
</div>
<div className="">
<p className="text-3xl font-medium tracking-tight">4.9</p>
<p className="text-sm text-emerald-100 mt-1 font-sans">Average rating</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin h-5 w-5 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-sm text-zinc-50">Serving homes and businesses across the metro with vetted cleaners and clear communication.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative md:py-20 bg-neutral-50 pt-16 pb-16">
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-100 to-white"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">Pricing plans — <span className="font-normal italic font-instrument-serif">for every space</span></h2>
<p className="mt-3 text-neutral-600">Transparent pricing with optional add-ons like fridge/oven interiors and green supplies.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="relative rounded-2xl border border-neutral-200 bg-gradient-to-b from-emerald-50/60 to-white p-8 shadow-sm hover:shadow-lg transition-shadow">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">Basic Clean</span>
<div className="mt-6">
<div className="">
<div className="text-4xl font-medium tracking-tight text-neutral-900">$149<span className="ml-1 text-neutral-600 text-base italic font-normal">/visit</span></div>
<p className="mt-2 text-sm text-neutral-600">Ideal for light upkeep and smaller spaces.</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Kitchen &amp; bath surfaces</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Dusting &amp; floors</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">General tidying</span></li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-emerald-50 transition" href="#">Choose Basic</a>
</div>
</div>

<div className="relative rounded-2xl border-2 border-emerald-900 bg-emerald-900 p-8 shadow-lg">
<span className="inline-flex items-center rounded-full bg-emerald-800 px-3 py-1 text-xs font-medium text-emerald-100">Standard</span>
<div className="mt-6 text-white">
<div>
<div className="text-4xl font-medium tracking-tight text-white">$249<span className="ml-1 text-emerald-100 text-base italic font-normal">/visit</span></div>
<p className="mt-2 text-sm text-emerald-100">Best for regular maintenance with more detail.</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-emerald-100">All Basic features</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-emerald-100">Detail bathroom/kitchen</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-emerald-100">Baseboards (rotational)</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-emerald-100">Optional eco supplies</span></li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-900 px-6 py-3 text-sm font-medium hover:bg-emerald-200 transition" href="#">Choose Standard</a>
</div>
</div>

<div className="relative rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-emerald-50/40 p-8 shadow-sm hover:shadow-lg transition-shadow">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">Deep Clean</span>
<div className="mt-6">
<div>
<div className="text-4xl font-medium tracking-tight text-neutral-900">$399<span className="ml-1 text-neutral-600 text-base italic font-normal">/visit</span></div>
<p className="mt-2 text-sm text-neutral-600">A thorough top-to-bottom reset for any space.</p>
</div>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Inside cabinets &amp; drawers</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Appliance interiors</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Detail scrubbing &amp; sanitizing</span></li>
<li className="flex items-center gap-3"><svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg><span className="text-neutral-700">Move in / Move out ready</span></li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-emerald-50 transition" href="#">Choose Deep Clean</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-neutral-600">Simple, flexible scheduling. Cancel anytime.</p>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="sm:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">Frequently asked — <span className="font-normal italic font-instrument-serif">questions</span></h2>
<p className="mt-3 text-neutral-600">Everything you need to know about working with Spik 'N Span.</p>
</div>
<div className="space-y-6">
<div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">How do quotes work?</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Share your space size and priorities, and we’ll send a same-day estimate. Final pricing is confirmed after a quick walkthrough or photos.</p>
</div>
<div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">What’s included in each clean?</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Each visit covers kitchens, bathrooms, living areas, and bedrooms. Deep and move-out cleans add interiors, baseboards, vents, and detail scrubbing.</p>
</div>
<div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Do you bring supplies?</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Yes. We bring professional-grade supplies and equipment. Eco-friendly products are available on request.</p>
</div>
<div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Can I set up recurring service?</h3>
<p className="text-neutral-600 text-sm leading-relaxed">Absolutely—weekly, bi-weekly, or monthly. Recurring plans include preferred scheduling and discounted rates.</p>
</div>
<div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
<h3 className="text-lg font-semibold text-neutral-900 mb-3">What if I’m not satisfied?</h3>
<p className="text-neutral-600 text-sm leading-relaxed">We’ll make it right. Contact us within 24 hours and we’ll re-clean the affected areas for free.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-neutral-600 mb-4">Still have questions?</p>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition" href="#">
            Get in touch
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-14">
<div className="max-w-7xl mx-auto px-6">
<div className="relative overflow-hidden rounded-3xl border border-neutral-200">
<img alt="clean interior" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative bg-black/40">
<div className="sm:px-12 sm:py-20 bg-[url(https://images.unsplash.com/photo-1610924124476-31e3c6a92980?w=2560&amp;q=80)] bg-cover pt-16 pr-8 pb-16 pl-8">
<div className="max-w-2xl text-white">
<h3 className="text-3xl sm:text-4xl tracking-tight font-sans font-medium">Ready for a spotless space?</h3>
<p className="mt-3">Bring your schedule. We’ll bring the shine.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 font-sans" href="#">
                    Book a walkthrough
                    <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 font-sans" href="#">
                    Download checklist
                    <svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-neutral-200 border-t pt-10 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="sm:p-8 bg-gradient-to-r from-neutral-100 to-white border-neutral-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="grid md:grid-cols-2 gap-10">

<div className="">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 rounded-full bg-neutral-900 items-center justify-center text-white">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">SNS</span>
</div>
<p className="mt-3 text-sm text-neutral-600 font-sans">
                Professional, dependable cleaning—homes and businesses. Meticulous standards, flexible schedules, and friendly pros.
              </p>
<ul className="mt-6 space-y-2">
<li className="">
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm" href="#">
<span className="flex items-center gap-3 text-neutral-800">
<svg className="lucide lucide-facebook h-4 w-4 text-neutral-600" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook
                    </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="">
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm" href="#">
<span className="flex items-center gap-3 text-neutral-800">
<svg className="lucide lucide-instagram h-4 w-4 text-neutral-600" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> Instagram
                    </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="">
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm" href="#">
<span className="flex items-center gap-3 text-neutral-800">
<svg className="lucide lucide-linkedin h-4 w-4 text-neutral-600" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                    </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="">
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm" href="#">
<span className="flex items-center gap-3 text-neutral-800">
<svg className="lucide lucide-youtube h-4 w-4 text-neutral-600" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg> YouTube
                    </span>
<svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
</ul>
</div>

<div>
<p className="text-sm font-medium text-neutral-800 font-sans">Join our cleaning tips newsletter</p>
<form className="mt-3">
<label className="sr-only" htmlFor="footer-email">Email address</label>
<div className="flex items-center gap-3 sm:max-w-sm">
<input className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm placeholder-neutral-500 focus:outline-none" id="footer-email" placeholder="Your email address" type="email"/>
<button className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black" type="button">Get Updates</button>
</div>
</form>
<ul className="mt-6 space-y-2">
<li>
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800" href="#">
                    Services
                    <svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li>
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800" href="#">
                    Testimonials
                    <svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li>
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800" href="#">
                    Our Story
                    <svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li>
<a className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800" href="#">
                    FAQ
                    <svg className="lucide lucide-arrow-right h-4 w-4 text-neutral-500" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</li>
<li className="flex items-center justify-between py-3">
<p className="text-neutral-600 font-sans">© <span className="font-sans" id="year">2025</span> Spik 'N Span. All rights reserved.</p>
</li>
</ul>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
