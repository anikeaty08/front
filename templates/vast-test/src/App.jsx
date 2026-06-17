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



      // Initialize Lucide icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2" href="#home">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-amber-500 text-white shadow-sm shadow-amber-500/20">
<span className="font-semibold tracking-tight" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>V</span>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif', letterSpacing: '-0.02em'}}>VAST</span>
<span className="hidden sm:inline text-sm font-medium text-slate-500 tracking-tight">Sourcing Talents</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#process">How It Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex">
<a className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/20 ring-1 ring-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 active:translate-y-px transition" href="#contact">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Get Started
            </a>
</div>

<div className="md:hidden">
<a className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/20 ring-1 ring-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 transition" href="#contact">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start
            </a>
</div>
</div>
</div>
</header>
<main className="" id="home">

<section className="relative overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(15,23,42,0.08),transparent_45%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:22px_22px]" style={{maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0))', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0))'}}></div>
<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/60 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl"></div>
</div>

<div className="absolute inset-y-0 right-0 w-full md:w-1/2 -z-10">
<div className="hidden md:block h-full bg-fixed bg-cover bg-center opacity-70" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556767576-cfba48f0faaf?q=80&amp'}}></div>
<div className="hidden md:block absolute inset-0 bg-gradient-to-l from-white via-white/90 to-white"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
<div className="max-w-xl">
<div className="h-1 w-16 bg-amber-500 rounded-full mb-6"></div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif', letterSpacing: '-0.02em'}}>
                Empowering Businesses with World-Class Virtual Talent.
              </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                VAST connects you with skilled Virtual Assistants who help your business scale faster, smarter, and more efficiently.
              </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-amber-500/20 ring-1 ring-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 active:translate-y-px transition" href="#contact">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Get Started
                </a>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-700 bg-white ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 transition" href="#process">
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
                  How It Works
                </a>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="Client 1" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600">Trusted by growth-focused teams across industries.</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 md:gap-6">
<div className="col-span-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition will-change-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="text-xs font-medium text-slate-500">Admin</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Scheduling</h3>
<p className="mt-1 text-sm text-slate-600">Precision calendars, task routing, and follow-through.</p>
</div>
<div className="col-span-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition will-change-transform hover:-translate-y-0.5">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-slate-500">Pipeline</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Prospecting</h3>
<p className="mt-1 text-sm text-slate-600">Data-driven outreach built around your ICP.</p>
</div>
<div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition will-change-transform hover:-translate-y-0.5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-line-chart w-5 h-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Operational Clarity</h3>
<p className="mt-0.5 text-sm text-slate-600">Reliable reporting and measurable outcomes.</p>
</div>
</div>
</div>
<div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition will-change-transform hover:-translate-y-0.5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Trusted Partners</h3>
<p className="mt-0.5 text-sm text-slate-600">Vetted assistants with proven reliability.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-center gap-3 mb-6">
<div className="h-0.5 w-12 bg-amber-500 rounded-full"></div>
<span className="text-xs uppercase tracking-widest text-slate-500">About</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Who We Are</h2>
<p className="leading-relaxed text-slate-600" data-element-id="aura-emgcbjnxz02755a7" data-element-locator="html &gt; body:nth-of-type(1) &gt; main:nth-of-type(1) &gt; section:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; p:nth-of-type(1)">
  VAST is a collective of forward-thinking professionals who came together to streamline how businesses find and manage Virtual Assistants. We prioritize efficiency, transparency, and performance in every partnership we build.
</p>
<div className="mt-6 h-px w-full bg-gradient-to-r from-amber-500/70 via-amber-500/30 to-transparent"></div>
</div>
<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-amber-100/60 blur-xl"></div>
<img alt="Modern collaboration" className="relative rounded-2xl ring-1 ring-slate-200 shadow-sm object-cover w-full h-72 sm:h-80 md:h-96" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-slate-50" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-center justify-between flex-wrap gap-4 mb-8">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Services</h2>
<p className="mt-2 text-slate-600">Purpose-built support to scale your operations with clarity.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-l-xl transition-all group-hover:w-1.5"></div>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-files w-5 h-5" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M15 2v4a2 2 0 0 0 2 2h4"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Administrative Support</h3>
<p className="mt-2 text-sm text-slate-600">Streamlined scheduling, document organization, and task coordination.</p>
</article>

<article className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-l-xl transition-all group-hover:w-1.5"></div>
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Lead Generation &amp; Prospecting</h3>
<p className="mt-2 text-sm text-slate-600">Precise, data-driven outreach for consistent results.</p>
</article>

<article className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-l-xl transition-all group-hover:w-1.5"></div>
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Social Media Management</h3>
<p className="mt-2 text-sm text-slate-600">Engagement, scheduling, and reporting built around your goals.</p>
</article>

<article className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-l-xl transition-all group-hover:w-1.5"></div>
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Research &amp; Data Entry</h3>
<p className="mt-2 text-sm text-slate-600">Fast, accurate, and confidential data handling.</p>
</article>

<article className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-full w-1 bg-amber-400 rounded-l-xl transition-all group-hover:w-1.5"></div>
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Email &amp; Calendar Management</h3>
<p className="mt-2 text-sm text-slate-600">Efficient inbox and meeting management to maximize your time.</p>
</article>

<div className="hidden lg:block"></div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="commitment">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-0.5 w-12 bg-amber-500 rounded-full"></div>
<span className="text-xs uppercase tracking-widest text-slate-500">Excellence</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Our Commitment to Excellence</h2>
<p className="mt-4 text-slate-600 leading-relaxed">
                At VAST, we believe in partnerships built on trust and performance. Every Virtual Assistant we recommend goes through a structured assessment focused on reliability, communication, and adaptability. We take ownership of every task and interaction—ensuring that our clients receive the same quality of work we would expect ourselves.
              </p>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200 shrink-0">
<svg className="lucide lucide-badge-check w-5 h-5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="font-medium text-slate-900">Integrity</p>
<p className="text-sm text-slate-600">We value honesty and transparency in every client relationship.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200 shrink-0">
<svg className="lucide lucide-align-center-horizontal w-5 h-5" data-lucide="align-center-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"></path><path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"></path><path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"></path><path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"></path></svg>
</div>
<div>
<p className="font-medium text-slate-900">Accountability</p>
<p className="text-sm text-slate-600">Every team member upholds measurable standards of excellence.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200 shrink-0">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="font-medium text-slate-900">Continuous Growth</p>
<p className="text-sm text-slate-600">We consistently refine our systems and training to stay ahead.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200 shrink-0">
<svg className="lucide lucide-focus w-5 h-5" data-lucide="focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div>
<p className="font-medium text-slate-900">Client-Centered Focus</p>
<p className="text-sm text-slate-600">Your business goals shape how we deliver results.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-100 via-white to-slate-100"></div>
<img alt="Abstract process" className="relative rounded-2xl ring-1 ring-slate-200 shadow-sm object-cover w-full h-72 sm:h-80 md:h-96" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-center gap-3 mb-4">
<div className="h-0.5 w-12 bg-amber-500 rounded-full"></div>
<span className="text-xs uppercase tracking-widest text-slate-500">Process</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>How It Works</h2>
<p className="mt-3 text-slate-600 max-w-2xl">A structured approach that respects your time and accelerates outcomes.</p>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-1 w-16 bg-amber-400 rounded-tr-xl rounded-bl-xl"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-500">01</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Discovery</h3>
<p className="mt-1 text-sm text-slate-600">We start by learning about your goals, workflows, and the type of support your business needs.</p>
</div>

<div className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-1 w-16 bg-amber-400 rounded-tr-xl rounded-bl-xl"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-500">02</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Matching</h3>
<p className="mt-1 text-sm text-slate-600">We select Virtual Assistants based on skill alignment, communication style, and reliability.</p>
</div>

<div className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-1 w-16 bg-amber-400 rounded-tr-xl rounded-bl-xl"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-plug-zap w-5 h-5" data-lucide="plug-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg>
</div>
<span className="text-sm font-medium text-slate-500">03</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Onboarding</h3>
<p className="mt-1 text-sm text-slate-600">We assist with setup, tools, and expectations to ensure seamless integration.</p>
</div>

<div className="group relative rounded-xl bg-white ring-1 ring-slate-200 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
<div className="absolute left-0 top-0 h-1 w-16 bg-amber-400 rounded-tr-xl rounded-bl-xl"></div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-gauge-circle w-5 h-5" data-lucide="gauge-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path><circle cx="12" cy="12" r="2"></circle><path d="M13.4 10.6 19 5"></path></svg>
</div>
<span className="text-sm font-medium text-slate-500">04</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Support &amp; Optimization</h3>
<p className="mt-1 text-sm text-slate-600">We provide ongoing coordination and optimization to keep operations smooth and measurable.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-slate-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-0.5 w-12 bg-amber-500 rounded-full"></div>
<span className="text-xs uppercase tracking-widest text-slate-500">Contact</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>Let’s Talk.</h2>
<p className="mt-3 text-slate-600 max-w-xl">Tell us what you’re building, and we’ll align the right support to move faster with confidence.</p>
<div className="mt-8 rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
<input autocomplete="name" className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/40 ring-1 ring-inset ring-slate-200 px-3 py-2 text-sm outline-none transition" id="name" name="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input autocomplete="email" className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/40 ring-1 ring-inset ring-slate-200 px-3 py-2 text-sm outline-none transition" id="email" name="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="company">Company</label>
<input className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/40 ring-1 ring-inset ring-slate-200 px-3 py-2 text-sm outline-none transition" id="company" name="company" placeholder="Company Inc." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="mt-1 block w-full rounded-lg border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/40 ring-1 ring-inset ring-slate-200 px-3 py-2 text-sm outline-none transition" id="message" name="message" placeholder="Tell us about your goals, timelines, and where you need the most support." rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-amber-500/20 ring-1 ring-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 active:translate-y-px transition" type="submit">
<svg className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                      Schedule a Call
                    </button>
<p className="text-xs text-slate-500">We respond within 24 hours. Your business goals are our priority.</p>
</div>
</form>
</div>
</div>
<div className="relative">
<div className="absolute -inset-2 rounded-2xl bg-amber-100/60 blur-xl"></div>
<div className="relative rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 grid place-items-center ring-1 ring-amber-200">
<svg className="lucide lucide-clipboard-check w-5 h-5" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>What to Expect</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-4 h-4 text-amber-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> A 15–30 minute discovery call</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-4 h-4 text-amber-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> A tailored scope and candidate shortlist</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check w-4 h-4 text-amber-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Clear timelines and onboarding plan</li>
</ul>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>48h</p>
<p className="text-sm text-slate-600">Avg. shortlist time</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-3xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>95%</p>
<p className="text-sm text-slate-600">Client retention</p>
</div>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-amber-500/70 via-amber-500/30 to-transparent"></div>
<p className="mt-4 text-sm text-slate-600">We align talent, tools, and process so your team can focus on meaningful work.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-amber-500 text-white shadow-sm shadow-amber-500/20">
<span className="font-semibold tracking-tight" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>V</span>
</div>
<div>
<p className="text-base font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Outfit, Inter, sans-serif'}}>VAST</p>
<p className="text-xs text-slate-500">Sourcing Talents</p>
</div>
</div>
<nav className="flex items-center gap-6">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#process">How It Works</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-sm transition" href="#">
<svg className="lucide lucide-linkedin w-4.5 h-4.5 text-slate-700" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 hover:ring-slate-300 hover:shadow-sm transition" href="#">
<svg className="lucide lucide-facebook w-4.5 h-4.5 text-slate-700" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="mt-8 text-xs text-slate-500">© <span id="year">2025</span> VAST — Sourcing Talents. All rights reserved.</div>
</div>
</footer>

<a className="md:hidden fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/30 ring-1 ring-amber-500/30 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 active:translate-y-px transition" href="#contact">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
      Get Started
    </a>


    </>
  );
}
