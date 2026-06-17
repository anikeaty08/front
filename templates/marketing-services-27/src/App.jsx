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



      // Icons
      lucide.createIcons();

      // Mobile menu
      const btn = document.getElementById('menuBtn');
      const mobile = document.getElementById('mobileNav');
      if (btn) {
        btn.addEventListener('click', () => {
          mobile.classList.toggle('hidden');
        });
      }

      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    
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
      

<header className="relative overflow-hidden">

<div className="absolute inset-0 bg-[#6f7f96]"></div>
<div className="mr-50 ml-50 relative">
<nav className="container lg:px-10 flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/30 flex items-center justify-center">
<span className="text-white text-lg font-semibold">B</span>
</div>
<span className="text-2xl font-semibold italic text-white/95 tracking-tight" style={{}}></span>
<span className="ml-1 text-white/70 text-xs align-top">®</span>
</a>

<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white text-[15px] font-medium text-white/80" href="#">Home</a>
<a className="text-white hover:text-white/90 text-[15px] font-semibold inline-flex items-center gap-1" href="#">
              Services
              <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</a>
<a className="hover:text-white text-[15px] font-medium text-white/80" href="#">Case Studies</a>
<a className="text-white/80 hover:text-white text-[15px] font-medium" href="#">Blog</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="relative inline-flex items-center justify-center rounded-md bg-white/90 px-4 py-2 text-[14px] font-semibold text-slate-700 hover:bg-white transition" href="#contact">
<span className="absolute -top-1 left-2 right-2 h-1 rounded-full bg-white/70"></span>
              Contact Us
            </a>
<a className="relative inline-flex items-center justify-center rounded-md bg-white/90 px-4 py-2 text-[14px] font-semibold text-slate-700 hover:bg-white transition" href="#leads">
<span className="absolute -top-1 left-2 right-2 h-1 rounded-full bg-white/70"></span>
              Local Leads
            </a>
</div>

<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/30 text-white" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="md:hidden hidden" id="mobileNav">
<div className="mx-4 rounded-xl bg-white/95 shadow-lg ring-1 ring-black/5">
<div className="px-6 py-4 flex flex-col gap-3">
<a className="text-slate-700 text-[15px] font-medium py-2" href="#">Home</a>
<a className="text-slate-900 text-[15px] font-semibold py-2 inline-flex items-center gap-2" href="#">Services <svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></a>
<a className="text-slate-700 text-[15px] font-medium py-2" href="#">Case Studies</a>
<a className="text-slate-700 text-[15px] font-medium py-2" href="#">Blog</a>
</div>
<div className="px-6 pb-6 flex gap-3">
<a className="flex-1 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-[14px] font-semibold text-white" href="#contact">Contact Us</a>
<a className="flex-1 inline-flex items-center justify-center rounded-lg bg-slate-800/90 px-4 py-2 text-[14px] font-semibold text-white" href="#leads">Local Leads</a>
</div>
</div>
</div>

<section className="container lg:px-10 md:pb-32 -translate-x-1 mr-auto ml-auto pt-14 pr-6 pb-32 pl-6 relative">
<div className="grid md:grid-cols-2 gap-6 md:gap-10 gap-x-6 gap-y-6 items-center">
<div className="max-w-2xl">
<h1 className="sm:text-7xl lg:text-8xl leading-[0.95] text-6xl font-semibold text-white tracking-tight">All Services
      </h1>
<p className="mt-6 text-white/85 text-lg sm:text-xl font-medium">We help to improve your business.</p>
</div>

<div className="relative h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center">
<div className="-right-8 md:right-0 flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative">
<div className="absolute inset-0 rounded-full bg-white/5 blur-2xl"></div>
<svg className="animate-spin" height="320" style={{animationDuration: '14s'}} viewbox="0 0 320 320" width="320">
<defs>
<path d="M160,20 a140,140 0 1,1 0,280 a140,140 0 1,1 0,-280" id="circlePath"></path>
</defs>
<text fill="white" fontSize="22" font-weight="500" letter-spacing="2">
<textpath href="#circlePath">
          • banch marketing • banch marketing • banch marketing • banch marketing
        </textpath>
</text>
</svg>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="h-28 w-28 rounded-full bg-white/10 ring-2 ring-white/40 flex items-center justify-center">
<span className="text-4xl font-semibold text-white">B</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative">
<div className="mx-auto container px-6 lg:px-10">
<div className="h-8 md:h-10 bg-white rounded-t-[28px]"></div>
</div>
</div>
</div>
</header>

<section className="bg-white">
<div className="container mx-auto px-6 lg:px-10 -mt-6 md:-mt-8">
<div className="rounded-2xl border border-slate-200/70 bg-white p-5 sm:p-6 md:px-8 md:py-7">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
<a className="group rounded-xl border border-slate-200 px-4 py-4 md:py-6 flex items-center gap-4 hover:shadow-sm hover:border-slate-300 transition" href="#">
<div className="h-11 w-11 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-700">
<svg className="lucide lucide-banknote h-5 w-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="">
<p className="text-slate-800 text-lg font-semibold tracking-tight">Paid Ads</p>
<p className="text-sm font-medium text-slate-500">Search, social, and display</p>
</div>
<svg className="lucide lucide-arrow-up-right ml-auto h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group md:py-6 flex items-center gap-4 hover:shadow-sm hover:border-slate-300 transition border-slate-200 border rounded-xl pt-4 pr-4 pb-4 pl-4" href="#">
<div className="h-11 w-11 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-700">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div className="">
<p className="text-slate-800 text-lg font-semibold tracking-tight">Email Marketing</p>
<p className="text-slate-500 text-sm font-medium">Lifecycle &amp; automation</p>
</div>
<svg className="lucide lucide-arrow-up-right ml-auto h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group rounded-xl border border-slate-200 px-4 py-4 md:py-6 flex items-center gap-4 hover:shadow-sm hover:border-slate-300 transition" href="#">
<div className="h-11 w-11 rounded-lg bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-700">
<svg className="lucide lucide-shopping-bag h-5 w-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div>
<p className="text-slate-800 text-lg font-semibold tracking-tight">Ecommerce</p>
<p className="text-slate-500 text-sm font-medium">Storefront &amp; CRO</p>
</div>
<svg className="lucide lucide-arrow-up-right ml-auto h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="md:py-20 pt-14 pb-14">
<div className="container mx-auto px-6 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight textlate-900">What we do best</h2>
<p className="mt-3 text-slate-600 text-lg font-medium">From strategy to execution, we deliver measurable growth across channels.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-line-chart h-5 w-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Performance Strategy</h3>
<p className="mt-2 text-slate-600 font-medium">Data-led plans that align channels and budgets to business goals.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Creative &amp; Content</h3>
<p className="mt-2 text-slate-600 font-medium">Iterative creatives built for speed, testing, and conversion.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-6 hover:shadow-sm transition">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<svg className="lucide lucide-circle-dollar-sign h-5 w-5" data-lucide="circle-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Attribution &amp; ROAS</h3>
<p className="mt-2 text-slate-600 font-medium">Clear reporting and modeling that track the impact of every dollar.</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20 bg-slate-50">
<div className="container mx-auto px-6 lg:px-10">
<div className="flex items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Case Studies</h2>
<p className="mt-3 text-slate-600 text-lg font-medium">Real results from our partners.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-slate-900 font-semibold" href="#">
            View all
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-2xl overflow-hidden border border-slate-200 bg-white" href="#">
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="3D Render" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-slate-900 text-lg font-semibold tracking-tight">DTC Revenue +128%</p>
<p className="text-slate-600 text-sm font-medium mt-1">Paid social, UGC creative, CRO</p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-slate-200 bg-white" href="#">
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Mountains" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-slate-900 text-lg font-semibold tracking-tight">CAC ↓37% in 90 Days</p>
<p className="text-slate-600 text-sm font-medium mt-1">Search + Email automation</p>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-slate-200 bg-white" href="#">
<div className="aspect-[16/10] w-full overflow-hidden">
<img alt="Minimal desk" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-slate-900 text-lg font-semibold tracking-tight">Email Revenue 42%</p>
<p className="text-slate-600 text-sm font-medium mt-1">Lifecycle flows &amp; segmentation</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="leads">
<div className="container mx-auto px-6 lg:px-10">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#6f7f96] to-[#7e8fa6]">
<div className="absolute -inset-x-10 -top-10 h-40 bg-white/10 blur-2xl"></div>
<div className="relative p-8 md:p-12">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Bring in more qualified local leads</h3>
<p className="mt-3 text-white/85 text-lg font-medium">Launch geo-targeted ads and conversion-first landing pages crafted for your audience.</p>
<div className="mt-6 flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 text-sm font-medium">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Geo-targeting
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 text-sm font-medium">
<svg className="lucide lucide-mouse-pointer h-4 w-4" data-lucide="mouse-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586 19 19"></path><path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path></svg> High-intent
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 text-sm font-medium">
<svg className="lucide lucide-goal h-4 w-4" data-lucide="goal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13V2l8 4-8 4"></path><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path></svg> Conversion-first
                  </span>
</div>
</div>
<div className="md:p-8 ring-1 ring-black/5 bg-white/95 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<form className="grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<label className="grid gap-1.5">
<span className="text-[13px] font-medium text-slate-700">Full name</span>
<input className="text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 h-11 border-slate-300 border rounded-lg pr-3 pl-3" placeholder="Jane Doe" type="text"/>
</label>
<label className="grid gap-1.5">
<span className="text-[13px] font-medium text-slate-700">Company</span>
<input className="text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 h-11 border-slate-300 border rounded-lg pr-3 pl-3" placeholder="Acme Inc." type="text"/>
</label>
</div>
<label className="grid gap-1.5">
<span className="text-[13px] font-medium text-slate-700">Work email</span>
<input className="h-11 rounded-lg border border-slate-300 px-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="you@company.com" type="email"/>
</label>
<label className="grid gap-1.5">
<span className="text-[13px] font-medium text-slate-700">What do you need?</span>
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="h-11 w-full rounded-lg border border-slate-300 pl-9 pr-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" placeholder="Paid Ads, Email, CRO..." type="text"/>
</div>
</label>
<button className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-slate-800">
<svg className="lucide lucide-send mr-2 h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Get Proposal
                  </button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-20">
<div className="container mx-auto px-6 lg:px-10">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Insights</h2>
<p className="mt-3 text-slate-600 text-lg font-medium">Latest notes on growth, ads, and measurement.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-slate-900 font-semibold" href="#">
            Explore
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="group rounded-2xl border border-slate-200 overflow-hidden" href="#">
<div className="aspect-[16/10]">
<img alt="Minimal" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
<svg className="lucide lucide-calendar h-35 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Sep 20
              </div>
<p className="mt-2 text-lg text-slate-900 font-semibold tracking-tight">Creative that converts: the 5 ad formats we every week</p>
</div>
</a>
<a className="group rounded-2xl border border-slate-200 overflow-hidden" href="#">
<div className="aspect-[16/10]">
<img alt="Workspace" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Sep 14
              </div>
<p className="mt-2 text-lg text-slate-900 font-semibold tracking-tight">Attribution simplified: MMM vs MTA for lean teams</p>
</div>
</a>
<a className="group rounded-2xl border border-slate-200 overflow-hidden" href="#">
<div className="aspect-[16/10]">
<img alt="Render" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Sep 02
              </div>
<p className="mt-2 text-lg text-slate-900 font-semibold tracking-tight">From click to cart: 7 CRO wins in ecommerce</p>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-slate-200" id="contact">
<div className="container mx-auto px-6 lg:px-10 py-12">
<div className="grid md:grid-cols-3 gap-8">
<div className="max-w-sm">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
<span className="text-sm font-semibold">B</span>
</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">Banch</span><span className="text-slate-500 text">®</span>
</div>
<p className="mt-3 text-slate-600 font-medium">A small team focused on performance and craft.</p>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-slate-900 font-semibold">Company</p>
<ul className="mt-3 space-y-2 text-slate-600 font-medium">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="text-slate-900 font-semibold">Services</p>
<ul className="mt-3 space-y-2 text-slate-600 font-medium">
<li><a className="hover:text-slate-900" href="#">Paid Ads</a></li>
<li><a className="hover:text-slate-900" href="#">Email</a></li>
<li><a className="hover:text-slate-900" href="#">Ecommerce</a></li>
</ul>
</div>
</div>
<div className="md:text-right">
<a className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-[15px] font-semibold text-white hover:bg-slate-800" href="#leads">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Start a project
            </a>
<p className="mt-4 text-slate-500 text-sm font-medium">© <span id="year">2025</span> Banch. All rights reserved.</p>
</div>
</div>
</div>
</footer>




    </>
  );
}
