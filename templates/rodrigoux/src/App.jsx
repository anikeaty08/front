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



    // Update footer year
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
      

<header className="sticky top-0 z-30 backdrop-blur-lg bg-white/70 border-b border-neutral-200">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<span className="text-lg font-medium tracking-tight font-merriweather" style={{transition: 'outline 0.1s ease-in-out'}}>Meaningful</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-600 hover:text-neutral-900 transition font-manrope" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a>
<a className="text-neutral-600 hover:text-neutral-900 transition font-manrope" href="#work" style={{transition: 'outline 0.1s ease-in-out'}}>Work</a>
<a className="text-neutral-600 hover:text-neutral-900 transition font-manrope" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>About</a>
<a className="text-neutral-600 hover:text-neutral-900 transition font-manrope" href="#ecosystem" style={{transition: 'outline 0.1s ease-in-out'}}>Ecosystem</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-calendar -ml-0.5" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Book Intro
        </a>
<button aria-label="Open menu" className="md:hidden p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden relative" style={{width: 'calc(100% + 100px)', marginLeft: '-50px'}}>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full bg-[#7E3FF2]/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-black/5 blur-3xl"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6">
<div className="grid lg:grid-cols-12 gap-10 gap-x-10 gap-y-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 bg-white shadow-sm/0">
<span className="inline-flex h-2 w-2 rounded-full bg-[#7E3FF2]"></span>
<span className="text-xs text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Studio partner for startups and scale-ups</span>
</div>
<h1 className="mt-5 tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter, system-ui', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
              We design growth that looks as good as it performs.
            </h1>
<p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
              Meaningful is a creative growth and product studio helping startups and scaling companies turn great ideas into visible, profitable digital experiences.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-neutral-900 font-manrope" href="#contact" style={{background: 'rgb(126, 63, 242)', transition: 'outline 0.1s ease-in-out'}}>
                Let’s Build Together
                <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition font-manrope" href="#work" style={{transition: 'outline 0.1s ease-in-out'}}>
                View Our Work
                <svg className="lucide lucide-play ml-2" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="mt-10">
<p className="text-xs uppercase tracking-wider text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Trusted by teams at</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
<div className="h-10 flex items-center text-neutral-400">
<span className="text-base sm:text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Medium</span>
</div>
<div className="h-10 flex items-center text-neutral-400">
<span className="text-base sm:text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>BetterUp</span>
</div>
<div className="h-10 flex items-center text-neutral-400">
<span className="text-base sm:text-lg-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>CloudKitchens</span>
</div>
<div className="h-10 flex items-center text-neutral-400">
<span className="text-base sm:text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Raycast</span>
</div>
<div className="h-10 flex items-center text-neutral-400">
<span className="text-base sm:text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Reforge</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative">
<div className="sm:h-[36rem] overflow-hidden bg-transparent h-80 border-neutral-200 border-0 rounded-2xl relative" style={{width: 'calc(100% + 100px)', marginLeft: '-50px'}}>
<iframe allow="autoplay; fullscreen" className="absolute inset-0 w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/worldplanet-ZOCy5b8A68JGoCEods4OMIXK/" style={{left: '-50px', right: 'auto', width: 'calc(100% + 100px)'}} title="Interactive 3D Scene" width="100%"></iframe>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative" id="about">
<div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<h2 className="tracking-tight text-3xl sm:text-4xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
              Purpose-built for speed and impact
            </h2>
<p className="mt-5 text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
              A lean, senior team that embeds with you to find clarity, ship quickly, and compound results across brand, product, and growth.
            </p>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 p-4">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Team Size</div>
<div className="mt-1 text-2xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', transition: 'outline 0.1s ease-in-out'}}>23</div>
<div className="text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Specialists</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Operating Model</div>
<div className="mt-1 text-2xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', transition: 'outline 0.1s ease-in-out'}}>Lean</div>
<div className="text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>No unnecessary layers</div>
</div>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check-circle mt-0.5 text-[#7E3FF2]" data-lucide="check-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Hands-on involvement from directors
              </li>
<li className="flex items-start gap-3 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check-circle mt-0.5 text-[#7E3FF2]" data-lucide="check-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Collaboration tools like Supervisible and SavedTask
              </li>
<li className="flex items-start gap-3 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check-circle mt-0.5 text-[#7E3FF2]" data-lucide="check-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Weekly growth sprints and measurable outcomes
              </li>
</ul>
</div>
<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-4 rounded-3xl bg-[#7E3FF2]/10 blur-2xl"></div>
<div className="relative grid grid-cols-6 gap-4">
<div className="col-span-3 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Design</div>
<div className="mt-2 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Systems &amp; UI</div>
<div className="mt-3 h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-5/6 rounded-full" style={{background: '#7E3FF2'}}></div>
</div>
</div>
<div className="col-span-3 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Growth</div>
<div className="mt-2 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Acquisition</div>
<div className="mt-3 h-2 rounded-full bg-neutral-100 overflow-hidden">
<div className="h-full w-2/3 rounded-full" style={{background: '#7E3FF2'}}></div>
</div>
</div>
<div className="col-span-4 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Engineering</div>
<div className="mt-2 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Web &amp; Low-Code</div>
</div>
<svg className="lucide lucide-code-2 text-neutral-500" data-lucide="code-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="mt-3 grid grid-cols-4 gap-1">
<div className="h-2 rounded bg-neutral-200"></div>
<div className="h-2 rounded" style={{background: '#7E3FF2'}}></div>
<div className="h-2 rounded bg-neutral-200"></div>
<div className="h-2 rounded" style={{background: '#7E3FF2'}}></div>
</div>
</div>
<div className="col-span-2 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Ops</div>
<div className="mt-2 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Automation</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-zap text-[#7E3FF2]" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    +42 hrs saved/mo
                  </div>
</div>
<div className="col-span-6 rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Team" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Team" className="h-9 w-9 rounded-full object-cover -ml-3 ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Team" className="h-9 w-9 rounded-full object-cover -ml-3 ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm text-neutral-700 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Cross-functional pods led by directors</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative" id="services">
<div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="tracking-tight text-3xl sm:text-4xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
              What we ship
            </h2>
<p className="mt-3 text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>From first users to repeatable growth engines.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-neutral-300 hover:bg-neutral-50 font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
            Get a scope
            <svg className="lucide lucide-arrow-right -mr-0.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>SEO &amp; AEO Optimization</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Grow qualified traffic with intent-led search and answer engine optimization.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-pen-tool" data-lucide="pen-tool" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Content Strategy &amp; Marketing</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Editorial systems, pillars, and performance content across the funnel.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-globe" data-lucide="globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Web &amp; Low-Code Development</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Lightning-fast marketing sites and modular component libraries.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-rocket" data-lucide="rocket" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>MVP Development &amp; Go-To-Market</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Prototype fast, validate faster, launch with confidence.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Growth &amp; Conversion Optimization</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Experimentation, offers, and UX to maximize LTV and CVR.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-line-chart" data-lucide="line-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Analytics &amp; Dashboards</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Visibility from source to revenue with clean, actionable data.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-cog" data-lucide="cog" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.27 7 3.34"></path><path d="m11 13.73-4 6.93"></path><path d="M12 22v-2"></path><path d="M12 2v2"></path><path d="M14 12h8"></path><path d="m17 20.66-1-1.73"></path><path d="m17 3.34-1 1.73"></path><path d="M2 12h2"></path><path d="m20.66 17-1.73-1"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m3.34 7 1.73 1"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="12" r="8"></circle></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Martech &amp; Marketing Ops</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Automations, CDP, CRM, and attribution that actually work.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-briefcase" data-lucide="briefcase" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Fractional CMO &amp; CTO</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Strategic leadership embedded with your team.</p>
</div>
<div className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center" style={{background: '#7E3FF2', color: 'white'}}>
<svg className="lucide lucide-graduation-cap" data-lucide="graduation-cap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Team Training &amp; Mentorship</h3>
</div>
<p className="mt-3 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Enablement for PMM, growth, and design teams.</p>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative" id="ecosystem">
<div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="tracking-tight text-3xl sm:text-4xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
              In the ecosystem
            </h2>
<p className="mt-3 text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Active contributors to the global tech community.</p>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-2xl border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mic-2 text-[#7E3FF2]" data-lucide="mic-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Hosts of Growth Conference 2025</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Bringing leading operators together for what’s next.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-3">
<svg className="lucide lucide-handshake text-[#7E3FF2]" data-lucide="handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Mentors at 500 Startups &amp; Endeavor</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Operator-led guidance for early-stage teams.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin text-[#7E3FF2]" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Part of Mexico Tech Week</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Community, meetups, and founder workshops.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-3">
<svg className="lucide lucide-badge-check text-[#7E3FF2]" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-base font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Webflow‑recognized studio</h3>
</div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Quality, speed, and maintainability certified.</p>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative" id="work">
<div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="tracking-tight text-3xl sm:text-4xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
              Selected work
            </h2>
<p className="mt-3 text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>A snapshot of outcomes across product and growth.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-neutral-300 hover:bg-neutral-50 font-manrope" href="#projects" style={{transition: 'outline 0.1s ease-in-out'}}>
            View All Projects
            <svg className="lucide lucide-arrow-right -mr-0.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[4/3] bg-gradient-to-tr from-neutral-100 to-white relative">
<div className="absolute inset-4 rounded-xl bg-[radial-gradient(120px_80px_at_20%_30%,#7E3FF2_0%,transparent_60%),radial-gradient(120px_80px_at_80%_70%,#000_0%,transparent_60%)] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-line-chart text-neutral-400 group-hover:text-neutral-600 transition" data-lucide="line-chart" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
</div>
<div className="p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Raycast</div>
<h3 className="mt-1 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Helped Raycast boost engagement by 40%.</h3>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Lifecycle experiments and in‑product nudges increased weekly active power users.</p>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[4/3] bg-gradient-to-tr from-neutral-100 to-white relative">
<div className="absolute inset-4 rounded-xl bg-[radial-gradient(120px_80px_at_30%_70%,#7E3FF2_0%,transparent_60%),radial-gradient(120px_80px_at_70%_30%,#000_0%,transparent_60%)] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-funnel text-neutral-400 group-hover:text-neutral-600 transition" data-lucide="funnel" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</div>
</div>
<div className="p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>BetterUp</div>
<h3 className="mt-1 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Optimized BetterUp’s marketing funnel.</h3>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>New IA, offer sequencing, and CRO lifted qualified demo requests by 31%.</p>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-white md:col-span-2 lg:col-span-1">
<div className="aspect-[4/3] bg-gradient-to-tr from-neutral-100 to-white relative">
<div className="absolute inset-4 rounded-xl bg-[radial-gradient(120px_80px_at_50%_50%,#7E3FF2_0%,transparent_60%),radial-gradient(140px_80px_at_80%_80%,#000_0%,transparent_60%)] opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="lucide lucide-globe-2 text-neutral-400 group-hover:text-neutral-600 transition" data-lucide="globe-2" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
<div className="p-5">
<div className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>CloudKitchens</div>
<h3 className="mt-1 text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Scaled CloudKitchens’ global web presence.</h3>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Multi‑locale site system and CMS powering 20+ markets.</p>
</div>
</article>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative overflow-hidden" id="pricing">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] rounded-full bg-[#7E3FF2]/15 blur-3xl"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-20 lg:py-24 relative">
<div className="text-center max-w-3xl mx-auto">
<h2 className="tracking-tight text-4xl sm:text-5xl text-neutral-900 font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
            Simple Plans for Meaningful Growth.
          </h2>
<p className="mt-4 text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
            Choose the right level of partnership for your startup or scaling business.
          </p>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-manrope" href="#contact" style={{background: 'rgb(126, 63, 242)', transition: 'outline 0.1s ease-in-out'}}>
              Start Your Project
              <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="plans">
<div className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Starter Plan</h3>
</div>
<div className="mt-2">
<div className="text-3xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>$X,XXX <span className="text-base font-normal text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>/ month</span></div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Perfect for early-stage startups looking to establish their digital presence.</p>
</div>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
                Choose Plan
                <svg className="lucide lucide-check ml-2" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl border-2 bg-white p-6 transition hover:shadow-lg hover:-translate-y-0.5" style={{borderColor: '#7E3FF2'}}>
<div className="absolute -top-3 left-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-white shadow-sm font-manrope" style={{background: 'rgb(126, 63, 242)', transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"></svg>
              Most Popular
            </div>
<div className="flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Growth Plan</h3>
</div>
<div className="mt-2">
<div className="text-3xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>$X,XXX <span className="text-base font-normal text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>/ month</span></div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Ideal for scaling companies focused on growth and optimization.</p>
</div>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white transition hover:opacity-95 font-manrope" style={{background: 'rgb(126, 63, 242)', transition: 'outline 0.1s ease-in-out'}}>
                Choose Plan
                <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>

<div className="group relative rounded-2xl border border-neutral-200 bg-white p-6 transition hover:shadow-md hover:-translate-y-0.5">
<div className="flex items-start justify-between">
<h3 className="text-lg font-medium tracking-tight font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise Plan</h3>
</div>
<div className="mt-2">
<div className="text-3xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>Custom Quote</div>
<p className="mt-2 text-sm text-neutral-600 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>For companies needing dedicated support and advanced integrations.</p>
</div>
<div className="mt-6">
<a className="w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>
                Contact Us
                <svg className="lucide lucide-mail ml-2" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-neutral-200"></div>
</div>

<section className="relative" id="contact">
<div className="max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-tr from-[#7E3FF2] to-[#5b1ec4] text-white">
<div className="absolute -inset-16 opacity-20">
<div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
<div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-black/20 blur-3xl"></div>
</div>
<div className="sm:px-12 sm:py-16 text-center pt-14 pr-6 pb-14 pl-6 relative">
<h2 className="tracking-tight text-3xl sm:text-4xl font-montserrat font-medium" style={{fontFamily: '"Space Grotesk", Inter', fontWeight: '600', transition: 'outline 0.1s ease-in-out'}}>
    Let’s Create Something Meaningful.
  </h2>
<p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
    Whether you’re launching your next big thing or refining your current one — we’ll help you get there faster.
  </p>
<div className="mt-6">
<a className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-white/90 transition font-manrope" href="mailto:hello@meaningful.studio" style={{transition: 'outline 0.1s ease-in-out'}}>
      Schedule a Discovery Call
      <svg className="lucide lucide-calendar-check ml-2" data-lucide="calendar-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</a>
</div>
<form action="#" className="mt-6 max-w-2xl mx-auto text-left" method="post">
<div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-4 sm:p-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_name" style={{transition: 'outline 0.1s ease-in-out'}}>Name</label>
<input className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_name" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_email" style={{transition: 'outline 0.1s ease-in-out'}}>Email</label>
<input className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_company" style={{transition: 'outline 0.1s ease-in-out'}}>Company</label>
<input className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_company" name="company" placeholder="Company name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_website" style={{transition: 'outline 0.1s ease-in-out'}}>Website URL</label>
<input className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_website" name="website" placeholder="https://yourcompany.com" type="url"/>
</div>
<div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_referral" style={{transition: 'outline 0.1s ease-in-out'}}>How did you hear about us?</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py-3 pr-10 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_referral" name="referral">
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Select an option</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Search</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Referral</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Social</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Conference/Event</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Community</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Newsletter</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_hq" style={{transition: 'outline 0.1s ease-in-out'}}>Where are your company headquarters?</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py-3 pr-10 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_hq" name="hq">
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Select a region</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>North America</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Europe</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>LATAM</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>APAC</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Middle East</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Africa</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Remote / Distributed</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
<div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_stage" style={{transition: 'outline 0.1s ease-in-out'}}>Company stage</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py-3 pr-10 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_stage" name="stage">
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Select stage</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Pre‑seed</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Seed</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Series A</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Series B–C</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Growth / Scale</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Public / Enterprise</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Nonprofit / Other</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_budget" style={{transition: 'outline 0.1s ease-in-out'}}>Annual growth/marketing budget</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py 3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_budget" name="budget">
<option className="text-neutral- font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Select a range</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Under $50k</option>
<option className="font-manrope" classtext-neutral-900"="" style={{transition: 'outline 0.1s ease-in-out'}}>$50k–$100k</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>$100k–$k</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>$250k–$500k</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>$500k+</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Not sure</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_goals" style={{transition: 'outline 0.1s ease-in-out'}}>What are your goals for the next 3–6 months?</label>
<textarea className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_goals" name="goals" placeholder="Briefly describe your challenges and what success looks like." rows="4"></textarea>
</div>
<div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_timeline" style={{transition: 'outline 0.1s ease-in-out'}}>Ideal start timeframe</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_timeline" name="timeline">
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Select a timeframe</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Immediately</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Within 1 month</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>1–2 months</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>3+ months</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="relative">
<label className="block text-xs text-white/80 font-manrope" htmlFor="contact_plan" style={{transition: 'outline 0.1s ease-in-out'}}>Preferred plan</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-xl bg-white/10 border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/40" id="contact_plan" name="plan">
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} value="">Choose a plan</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Starter</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Growth</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise</option>
<option className="text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Unsure / Need guidance</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
<label className="inline-flex items-start gap-3 select-none cursor-pointer">
<input className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/40 focus:ring-2" name="consent" type="checkbox"/>
<span className="text-xs text-white/85 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>I agree to the privacy policy and consent to be contacted about my inquiry.</span>
</label>
<button className="inline-flex items-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90 transition font-manrope" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">
            Send Request
            <svg className="lucide lucide-send ml-2" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<p className="sm:col-span-2 mt-2 text-[11px] text-white/70 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
          We typically respond within 1–2 business days. Prefer email? Write us at
          <a className="underline decoration-white/50 hover:decoration-white font-manrope" href="mailto:hello@meaningful.studio" style={{transition: 'outline 0.1s ease-in-out'}}>hello@meaningful.studio</a>.
        </p>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-3" href="#">
<span className="text-lg font-medium tracking-tight font-merriweather" style={{transition: 'outline 0.1s ease-in-out'}}>Meaningful</span>
</a>
<p className="mt-4 text-sm text-neutral-600 max-w-md font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>
            A digital growth and product studio building brands, products, and systems that compound.
          </p>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Navigate</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-600 font-geist">
<li><a className="hover:text-neutral-900 transition font-manrope" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>Services</a></li>
<li><a className="hover:text-neutral-900 transition font-manrope" href="#work" style={{transition: 'outline 0.1s ease-in-out'}}>Work</a></li>
<li><a className="hover:text-neutral-900 transition font-manrope" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
<li><a className="hover:text-neutral-900 transition font-manrope" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>Connect</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-600 font-geist">
<li><a className="hover:text-neutral-900 transition font-manrope" href="mailto:hello@meaningful.studio" style={{transition: 'outline 0.1s ease-in-out'}}>Email</a></li>
<li><a aria-label="Twitter" className="hover:text-neutral-900 transition font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Twitter</a></li>
<li><a aria-label="LinkedIn" className="hover:text-neutral-900 transition font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>LinkedIn</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-manrope" style={{transition: 'outline 0.1s ease-in-out'}}>© <span className="font-manrope" id="year" style={{transition: 'outline 0.1s ease-in-out'}}>2025</span> Meaningful Studio. All rights reserved.</p>
<div className="inline-flex items-center gap-4 text-xs text-neutral-500 font-geist">
<a className="hover:text-neutral-800 transition font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a>
<a className="hover:text-neutral-800 transition font-manrope" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
