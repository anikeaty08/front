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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Impact 2 Elevation Logo" className="group-hover:opacity-100 transition-opacity opacity-90 w-auto h-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6585c49-b6f7-4900-b83f-076b4356b021_1600w.png"/>
<span className="hidden sm:block text-lg font-medium text-white tracking-tight">Impact 2 Elevation</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="hover:text-white transition-colors text-base font-normal text-slate-50" href="#about" style={{}}>About</a>

<div className="relative group h-20 flex items-center">
<button className="flex gap-1 group-hover:text-white transition-colors focus:outline-none text-base font-normal text-slate-50 gap-x-1 gap-y-1 items-center" style={{}}>
                        Services
                        <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-hover:rotate-180 text-slate-500 group-hover:text-white" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible dropdown-menu w-64">
<div className="bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1 ring-1 ring-white/5">
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#web-design">
<div className="p-2 bg-indigo-500/10 rounded-md text-indigo-400 group-hover/item:text-indigo-300">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<span className="text-sm font-medium text-slate-200" style={{}}>Web Design</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#videography">
<div className="p-2 bg-pink-500/10 rounded-md text-pink-400 group-hover/item:text-pink-300">
<svg className="lucide lucide-clapperboard w-5 h-5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<span className="text-sm font-medium text-slate-200" style={{}}>Videography</span>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#graphic-design">
<div className="p-2 bg-emerald-500/10 rounded-md text-emerald-400 group-hover/item:text-emerald-300">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-200" style={{}}>Graphic Design</span>
</a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors text-base font-normal text-slate-50" href="#faq" style={{}}>FAQ</a>
<a className="hover:text-white transition-colors text-base font-normal text-slate-50" href="#contact" style={{}}>Contact</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-slate-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#contact">
                    Start Project
                </a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex gap-2 animate-fade-in-up text-sm text-indigo-300 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] animate-fade-in text-5xl font-medium text-white tracking-tight max-w-5xl mr-auto mb-8 ml-auto">
    Scale your impact.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-white">Elevate your brand.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light" style={{}}>
                Impact 2 Elevation connects visionary brands with digital excellence. We blend aesthetics with analytics to create marketing ecosystems that convert.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#services" style={{}}>
                    Explore Services
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all" href="#contact">
                    Book a Strategy Call
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl border border-white/10 rounded-xl bg-white/5 p-2 shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<img alt="Dashboard" className="rounded-lg w-full h-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/40">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-slate-500 mb-8" style={{}}>Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-8 text-white" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-8 text-white" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="20" x="35" y="5"></rect> <path d="M70,25 L80,5 L90,25"></path></svg>
<svg className="h-7 text-white" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="30" x="0" y="10"></rect> <circle cx="50" cy="15" r="8"></circle> <rect height="20" width="10" x="70" y="5"></rect> <rect height="20" width="10" x="85" y="5"></rect></svg>
<svg className="h-8 text-white" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 Q20,25 30,5 T50,5" fill="none" stroke="currentColor" strokeWidth="4"></path> <circle cx="70" cy="15" r="8"></circle> </svg>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">About Impact 2 Elevation</h2>
<div className="space-y-6 text-lg text-slate-400 leading-relaxed" style={{}}>
<p className="">
                        We aren't just a digital agency; we are growth architects. Founded on the principle that every brand has a higher elevation to reach, we provide the ladder to get there.
                    </p>
<p className="">
                        Our team of creatives, strategists, and developers work in unison to build digital experiences that are not only visually stunning but technically flawless and data-driven.
                    </p>
<ul className="grid grid-cols-2 gap-4 pt-4">
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle text-indigo-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Data-Driven
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle text-indigo-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Transparent
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle text-indigo-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Agile Process
                        </li>
<li className="flex items-center gap-3 text-white">
<svg className="lucide lucide-check-circle text-indigo-500 w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            ROI Focused
                        </li>
</ul>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
<div className="relative bg-zinc-900 border border-white/10 rounded-xl p-8 h-96 flex items-center justify-center overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900/0 to-zinc-900/0"></div>
<div className="text-center z-10">
<span className="text-6xl font-medium text-white block mb-2">300+</span>
<span className="text-slate-500 uppercase tracking-widest text-sm" style={{}}>Projects Delivered</span>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/30 border-white/5 border-t pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Our Expertise</h2>
<p className="text-lg text-slate-400" style={{}}>Comprehensive digital solutions tailored to elevate your market position.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-black border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right text-white w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layout-template w-6 h-6" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Web Design</h3>
<p className="text-slate-400 leading-relaxed" style={{}}>
                        Custom, high-performance websites built on modern stacks. We focus on user experience, speed, and conversion optimization.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-black border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right text-white w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clapperboard w-6 h-6" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Videography</h3>
<p className="text-slate-400 leading-relaxed" style={{}}>
                        Cinematic storytelling that captures your brand's essence. From commercials to social reels, we produce content that stops the scroll.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl bg-black border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right text-white w-6 h-6" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Graphic Design</h3>
<p className="text-slate-400 leading-relaxed" style={{}}>
                        Visual identity systems, branding assets, and marketing collateral designed to leave a lasting impression on your audience.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-white/5 border border-white/10 rounded-lg open:bg-white/10 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-slate-200" style={{}}>
<span>What is your typical turnaround time?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 leading-relaxed" style={{}}>
                        Timelines vary by project scope. A standard branding package takes 2-4 weeks, while a custom web build typically requires 6-10 weeks. We provide a detailed Gantt chart during onboarding.
                    </div>
</details>

<details className="group bg-white/5 border border-white/10 rounded-lg open:bg-white/10 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-slate-200" style={{}}>
<span>Do you work with startups?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 leading-relaxed" style={{}}>
                        Absolutely. We love working with ambitious founders. We have specific "Elevation" packages designed to get startups to market quickly with high-impact visuals and strategy.
                    </div>
</details>

<details className="group bg-white/5 border border-white/10 rounded-lg open:bg-white/10 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-slate-200" style={{}}>
<span>How does the pricing structure work?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-400 px-6 pb-6 leading-relaxed" style={{}}>
                        We operate on a project-based flat fee or a monthly retainer for ongoing support. This ensures transparency and aligns our goals with yours—delivering results, not just counting hours.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-zinc-900" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Let's elevate your business.</h2>
<p className="text-lg text-slate-400 mb-8" style={{}}>Ready to make an impact? Fill out the form or reach out directly.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300" style={{}}>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="text-lg">hello@impact2elevation.com</span>
</div>
<div className="flex items-center gap-4 text-slate-300" style={{}}>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-lg">New York, NY</span>
</div>
</div>
</div>
<form className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>First Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Last Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Email</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Message</label>
<textarea className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors" style={{}} type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="Logo" className="h-6 w-auto opacity-70 grayscale" src="https://i.imgur.com/L7E99aG.png"/>
<span className="text-slate-500 text-sm" style={{}}>© 2023 Impact 2 Elevation. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
