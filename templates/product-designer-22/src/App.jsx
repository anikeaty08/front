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
      

<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -top-[18rem] left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute top-[14rem] -left-[10rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute bottom-[-10rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.75),_rgba(3,7,18,1))]"></div>
</div>

<header className="animate-fade-in opacity-0">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-5 sm:py-6">
<a className="inline-flex items-center space-x-2" href="#">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-sm font-semibold tracking-[0.15em] uppercase">
          L
        </div>
<span className="hidden sm:block text-sm font-medium tracking-[0.18em] text-white/70 uppercase">
          Leo Studio
        </span>
</a>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium text-white/60">
<a className="relative transition-colors duration-200 hover:text-cyan-300" href="#work">
<span>Work</span>
<span className="absolute left-0 -bottom-[0.18rem] h-[0.09rem] w-0 bg-cyan-400 transition-all duration-200"></span>
</a>
<a className="relative transition-colors duration-200 hover:text-cyan-300" href="#about">
<span>About</span>
<span className="absolute left-0 -bottom-[0.18rem] h-[0.09rem] w-0 bg-cyan-400 transition-all duration-200"></span>
</a>
<a className="relative transition-colors duration-200 hover:text-cyan-300" href="#services">
<span>Services</span>
<span className="absolute left-0 -bottom-[0.18rem] h-[0.09rem] w-0 bg-cyan-400 transition-all duration-200"></span>
</a>
<a className="relative transition-colors duration-200 hover:text-cyan-300" href="#contact">
<span>Contact</span>
<span className="absolute left-0 -bottom-[0.18rem] h-[0.09rem] w-0 bg-cyan-400 transition-all duration-200"></span>
</a>
</div>
<div className="flex items-center space-x-3">
<button className="hidden sm:inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-200">
<svg className="w-3.5 h-3.5" data-lucide="file-down" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
<span>Resume</span>
</button>
<a className="inline-flex items-center space-x-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-1.5 text-xs font-medium text-white shadow-[0_0_0_1px_rgba(8,47,73,0.5)] hover:shadow-[0_0.6rem_2rem_rgba(8,145,178,0.35)] transition-all duration-200" href="#contact">
<span>Let’s talk</span>
<svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
</a>
<button className="md:hidden hover:bg-white/10 p-2 rounded-lg transition-colors duration-200">
<svg className="w-5 h-5" data-lucide="menu" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>
</button>
</div>
</nav>
</header>

<main>
<section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

<div className="flex-1 animate-slide-up opacity-0" style={{animationDelay: '0.15s'}}>
<div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.68rem] font-medium text-white/70 backdrop-blur mb-4">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</span>
<span>Currently designing future‑proof products at <span className="text-cyan-300">independent studio</span></span>
</div>
<h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-5 leading-tight">
            Leo — Product Designer &amp;<br className="hidden sm:block"/> Creative Technologist.
          </h1>
<p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-7">
            I craft minimal, high‑impact digital experiences for SaaS, fintech, and creative tools.
            From concept to polished interface, I merge aesthetics with systems thinking.
          </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-7 sm:mb-8">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-2.5 text-xs sm:text-sm font-medium text-white shadow-[0_0_0_1px_rgba(8,47,73,0.6)] hover:shadow-[0_0.6rem_2rem_rgba(8,145,178,0.45)] transition-all duration-200" href="#work">
              View selected work
            </a>
<button className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-white/80 backdrop-blur hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-200">
<svg className="w-3.5 h-3.5" data-lucide="play" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span>Portfolio walkthrough</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[0.7rem] sm:text-xs text-white/50">
<div className="flex items-center space-x-3">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=120')] bg-cover bg-center"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=120')] bg-cover bg-center"></div>
<div className="h-6 w-6 rounded-full border border-slate-900 bg-[url('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=120')] bg-cover bg-center"></div>
</div>
<div className="flex flex-col leading-snug">
<span className="text-white/70">18+ shipped products</span>
<span className="text-[0.65rem] text-emerald-300/90">With teams across SF · Berlin · Tokyo</span>
</div>
</div>
<div className="h-[1px] w-10 bg-gradient-to-r from-white/20 via-white/10 to-transparent hidden sm:block"></div>
<div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
<span>Selected clients</span>
<div className="flex items-center space-x-3 sm:space-x-4 text-[0.65rem] sm:text-[0.7rem] tracking-[0.12em] uppercase text-white/40">
<span className="rounded-full bg-white/5 border border-white/5 px-2 py-0.5">Atlas</span>
<span className="rounded-full bg-white/5 border border-white/5 px-2 py-0.5">Northwind</span>
<span className="rounded-full bg-white/5 border border-white/5 px-2 py-0.5">Helio</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[22rem] xl:w-[24rem] shrink-0 animate-scale-in opacity-0" style={{animationDelay: '0.2s'}}>
<div className="relative">
<div className="absolute -inset-[0.05rem] rounded-[1.4rem] bg-gradient-to-b from-cyan-400/40 via-transparent to-transparent opacity-80 blur"></div>
<div className="relative rounded-[1.3rem] border border-white/10 bg-gradient-to-b from-white/10 via-[#050512]/90 to-black/90 backdrop-blur-xl p-4 sm:p-5 flex flex-col gap-4">

<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                    L
                  </div>
<div>
<div className="text-xs font-medium text-white/80 tracking-tight">Leo</div>
<div className="text-[0.7rem] text-white/40">Product Designer · 8+ yrs</div>
</div>
</div>
<div className="flex items-center space-x-3 text-[0.68rem] text-white/50">
<div className="flex items-center space-x-1 rounded-full bg-white/5 px-2 py-1 border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Available from Q3</span>
</div>
</div>
</div>

<div className="relative mt-1 overflow-hidden rounded-xl border border-white/10 bg-black/60">
<img alt="Interface preview" className="w-full h-full object-cover opacity-90" src="https://images.pexels.com/photos/1181468/pexels-photo-1181468.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[0.68rem]">
<div className="flex flex-col">
<span className="text-white/80">Interaction system for fintech OS</span>
<span className="text-white/40">Design language · Prototyping · Handoff</span>
</div>
<div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-2 py-1 text-[0.62rem] text-white/70">
                    Case study
                    <svg className="w-3 h-3 ml-1" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mt-1">
<div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-2">
<div className="text-[0.58rem] uppercase tracking-[0.16em] text-white/40 mb-0.5">Focus</div>
<div className="text-xs text-white/85">Product · SaaS · Tools</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-2">
<div className="text-[0.58rem] uppercase tracking-[0.16em] text-white/40 mb-0.5">Core</div>
<div className="text-xs text-white/85">UX Systems</div>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-2">
<div className="text-[0.58rem] uppercase tracking-[0.16em] text-white/40 mb-0.5">Tooling</div>
<div className="text-xs text-white/85">Figma · Code</div>
</div>
</div>

<div className="flex flex-wrap gap-1.5 mt-1">
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.65rem] text-white/70">Product design</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.65rem] text-white/70">Design systems</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.65rem] text-white/70">Prototyping</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[0.65rem] text-white/70">Creative coding</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24" id="work">
<div className="flex items-end justify-between mb-6 sm:mb-8">
<div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2">
            Selected work
          </h2>
<p className="text-sm sm:text-base text-white/60 max-w-md">
            A curated selection of digital products, design systems, and experiments crafted with teams worldwide.
          </p>
</div>
<button className="hidden sm:inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.7rem] font-medium text-white/75 backdrop-blur hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-200">
<svg className="w-3.5 h-3.5" data-lucide="filter" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
<span>Filter by discipline</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">

<article className="project-card group rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300">
<div className="relative overflow-hidden">
<img alt="SaaS dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center space-x-2">
<span className="rounded-full bg-black/50 border border-white/20 px-2.5 py-1 text-[0.68rem] text-white/80">2024 · Product</span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium text-white mb-1">Helio Metrics OS</h3>
<p className="text-[0.7rem] sm:text-xs text-white/60 max-w-xs">
                  Designing a metrics‑driven operating system for growth teams in complex SaaS environments.
                </p>
</div>
<button className="ml-3 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 p-2 text-white/85 group-hover:bg-cyan-500/90 group-hover:border-cyan-400/80 transition-colors duration-200">
<svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="px-4 sm:px-5 py-4 sm:py-4.5 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-white/60">
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Product strategy</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Design system</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Complex UX</span>
</div>
<div className="flex items-center justify-between text-[0.68rem] text-white/45">
<span>Role · Lead Product Designer</span>
<span>Impact · +34% activation rate</span>
</div>
</div>
</article>

<article className="project-card group rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300">
<div className="relative overflow-hidden">
<img alt="Fintech mobile design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center space-x-2">
<span className="rounded-full bg-black/50 border border-white/20 px-2.5 py-1 text-[0.68rem] text-white/80">2023 · Fintech</span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium text-white mb-1">Northwind Pocket</h3>
<p className="text-[0.7rem] sm:text-xs text-white/60 max-w-xs">
                  A calm, trust‑driven mobile experience for everyday investing and cash management.
                </p>
</div>
<button className="ml-3 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 p-2 text-white/85 group-hover:bg-cyan-500/90 group-hover:border-cyan-400/80 transition-colors duration-200">
<svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="px-4 sm:px-5 py-4 sm:py-4.5 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-white/60">
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">UX research</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Interaction design</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Design ops</span>
</div>
<div className="flex items-center justify-between text-[0.68rem] text-white/45">
<span>Role · Product Designer</span>
<span>Impact · CSAT 4.8 → 4.9</span>
</div>
</div>
</article>

<article className="project-card group rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300">
<div className="relative overflow-hidden">
<img alt="Design system view" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center space-x-2">
<span className="rounded-full bg-black/50 border border-white/20 px-2.5 py-1 text-[0.68rem] text-white/80">2023 · System</span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium text-white mb-1">Atlas Design Language</h3>
<p className="text-[0.7rem] sm:text-xs text-white/60 max-w-xs">
                  A modular design language &amp; component library powering six products across web and mobile.
                </p>
</div>
<button className="ml-3 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 p-2 text-white/85 group-hover:bg-cyan-500/90 group-hover:border-cyan-400/80 transition-colors duration-200">
<svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="px-4 sm:px-5 py-4 sm:py-4.5 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-white/60">
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Design system</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Guidelines</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Tokens</span>
</div>
<div className="flex items-center justify-between text-[0.68rem] text-white/45">
<span>Role · System Owner</span>
<span>Impact · 40% faster ship</span>
</div>
</div>
</article>

<article className="project-card group rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-300">
<div className="relative overflow-hidden">
<img alt="Creative tool interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center space-x-2">
<span className="rounded-full bg-black/50 border border-white/20 px-2.5 py-1 text-[0.68rem] text-white/80">2022 · Tools</span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div>
<h3 className="text-sm sm:text-base font-medium text-white mb-1">Canvas Studio</h3>
<p className="text-[0.7rem] sm:text-xs text-white/60 max-w-xs">
                  A multiplayer creation space for designers and engineers to explore ideas together in real‑time.
                </p>
</div>
<button className="ml-3 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 p-2 text-white/85 group-hover:bg-cyan-500/90 group-hover:border-cyan-400/80 transition-colors duration-200">
<svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="px-4 sm:px-5 py-4 sm:py-4.5 flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-white/60">
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Multiplayer UX</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Creative coding</span>
<span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5">Prototype</span>
</div>
<div className="flex items-center justify-between text-[0.68rem] text-white/45">
<span>Role · Design &amp; Front-end</span>
<span>Impact · 2.1k+ teams</span>
</div>
</div>
</article>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center space-x-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/75 backdrop-blur hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-200">
<svg className="w-3.5 h-3.5" data-lucide="grid-3x3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span>View full archive</span>
</button>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 sm:pb-24" id="about">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">

<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-4">
            About Leo
          </h2>
<p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
            I’m a product designer who moves comfortably between strategy, visual craft, and implementation.
            I enjoy shaping early‑stage concepts into robust, scalable products — especially in complex,
            data‑rich spaces.
          </p>
<p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
            My process combines deep collaboration with teams, lightweight research, and fast prototyping.
            I care about calm, opinionated interfaces that age well and are effortless to use.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
<div className="rounded-xl border border-white/12 bg-white/5 px-3.5 py-3.5">
<div className="text-[0.58rem] uppercase tracking-[0.18em] text-white/40 mb-1.5">Experience</div>
<div className="text-sm text-white/85 mb-0.5">8+ years</div>
<div className="text-[0.7rem] text-white/45">Product, agencies, in‑house</div>
</div>
<div className="rounded-xl border border-white/12 bg-white/5 px-3.5 py-3.5">
<div className="text-[0.58rem] uppercase tracking-[0.18em] text-white/40 mb-1.5">Specialties</div>
<div className="text-sm text-white/85 mb-0.5">SaaS · Fintech · Tools</div>
<div className="text-[0.7rem] text-white/45">From v0 to v3</div>
</div>
<div className="rounded-xl border border-white/12 bg-white/5 px-3.5 py-3.5">
<div className="text-[0.58rem] uppercase tracking-[0.18em] text-white/40 mb-1.5">Based in</div>
<div className="text-sm text-white/85 mb-0.5">Berlin · Remote</div>
<div className="text-[0.7rem] text-white/45">Working with teams globally</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/12 bg-white/5 backdrop-blur-xl p-4 sm:p-5 flex flex-col gap-4" id="services">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm sm:text-base font-medium text-white tracking-tight">How I can help</h3>
<span className="rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 text-[0.65rem] font-medium">
              Available Q3
            </span>
</div>
<div className="space-y-3.5">
<div className="flex items-start space-x-3">
<div className="mt-[0.15rem] rounded-md bg-cyan-500/15 border border-cyan-400/40 p-1.5">
<svg className="w-3.5 h-3.5 text-cyan-300" data-lucide="layout-dashboard" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div>
<div className="text-xs font-medium text-white/90 mb-0.5">Product design · end to end</div>
<p className="text-[0.7rem] text-white/55">
                  From discovery and framing through flows, visual systems, and interaction details.
                </p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="mt-[0.15rem] rounded-md bg-sky-500/15 border border-sky-400/40 p-1.5">
<svg className="w-3.5 h-3.5 text-sky-300" data-lucide="component" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><rect height="8" rx="2" width="8" x="13" y="13"></rect><path d="M7 13v-2a2 2 0 0 1 2-2h6"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white/90 mb-0.5">Design systems &amp; libraries</div>
<p className="text-[0.7rem] text-white/55">
                  Tokens, components, and guidelines that scale across teams and platforms.
                </p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="mt-[0.15rem] rounded-md bg-indigo-500/15 border border-indigo-400/40 p-1.5">
<svg className="w-3.5 h-3.5 text-indigo-300" data-lucide="code-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white/90 mb-0.5">Prototyping &amp; creative tech</div>
<p className="text-[0.7rem] text-white/55">
                  High‑fidelity prototypes in Figma or code to validate ideas quickly with your team.
                </p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-3 mt-1">
<p className="text-[0.7rem] text-white/55 mb-2">
              Open to collaborations, embedded product roles, and advisory work for early‑stage teams.
            </p>
<a className="inline-flex items-center space-x-1.5 text-[0.7rem] font-medium text-cyan-300 hover:text-cyan-200 transition-colors duration-200" href="#contact">
<span>Share a brief</span>
<svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-28" id="contact">
<div className="relative rounded-2xl border border-white/12 bg-gradient-to-r from-white/8 via-[#050510] to-black/90 backdrop-blur-xl overflow-hidden">
<div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden md:block">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_55%),radial-gradient(circle_at_center,_rgba(129,140,248,0.18),_transparent_55%)] opacity-80"></div>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 p-5 sm:p-7 md:p-8 lg:p-9">
<div className="md:col-span-3">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
              Let’s build something considered.
            </h2>
<p className="text-sm sm:text-base text-white/65 mb-5 sm:mb-6 max-w-md">
              Tell me about your product, team, and timelines. I’ll get back within two working days with
              thoughts and potential next steps.
            </p>
<form className="space-y-3.5 sm:space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
<div>
<label className="block text-[0.7rem] font-medium text-white/70 mb-1">Name</label>
<input className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/70 transition-colors duration-150" placeholder="Who’s reaching out?" type="text"/>
</div>
<div>
<label className="block text-[0.7rem] font-medium text-white/70 mb-1">Work email</label>
<input className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/70 transition-colors duration-150" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[0.7rem] font-medium text-white/70 mb-1">Company / project</label>
<input className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/70 transition-colors duration-150" placeholder="Startup, product, or initiative" type="text"/>
</div>
<div>
<label className="block text-[0.7rem] font-medium text-white/70 mb-1">What are you looking for?</label>
<textarea className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/70 transition-colors duration-150 resize-none" placeholder="A few lines about your goals, timelines, and how I might help." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-[0_0_0_1px_rgba(8,47,73,0.5)] hover:shadow-[0_0.7rem_2.1rem_rgba(8,145,178,0.55)] transition-all duration-200" type="submit">
                  Send message
                </button>
<p className="text-[0.68rem] text-white/45 max-w-xs">
                  Or email directly at <span className="text-cyan-300">hi@leostudio.design</span>. No newsletter, no spam.
                </p>
</div>
</form>
</div>
<div className="md:col-span-2 space-y-4 md:space-y-5">
<div className="rounded-xl border border-white/12 bg-black/40 p-3.5">
<div className="flex items-center justify-between mb-2">
<span className="text-[0.7rem] font-medium text-white/80">Signal boost</span>
<span className="text-[0.65rem] text-emerald-300 flex items-center space-x-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>New projects welcome</span>
</span>
</div>
<p className="text-[0.68rem] text-white/55 mb-2.5">
                If you’re an early‑stage founder or design‑lean team, I offer focused 60‑minute sessions
                to untangle product or UX questions.
              </p>
<button className="inline-flex items-center space-x-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.68rem] font-medium text-white/80 hover:bg-white/10 hover:border-cyan-400/60 transition-all duration-200">
<svg className="w-3.5 h-3.5" data-lucide="calendar" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span>Book a 60‑min session</span>
</button>
</div>
<div className="rounded-xl border border-white/12 bg-black/40 p-3.5 space-y-2.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] font-medium text-white/80">Elsewhere</span>
<span className="text-[0.65rem] text-white/45">Selected channels</span>
</div>
<div className="flex flex-wrap gap-2 text-[0.7rem] text-white/70">
<a className="inline-flex items-center space-x-1.5 rounded-full bg-white/5 border border-white/15 px-2.5 py-1 hover:bg-white/10 hover:border-cyan-400/60 transition-colors duration-200" href="#">
<svg className="w-3.5 h-3.5" data-lucide="dribbble" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c2.43 2.9 3.99 5.99 4.83 9.06"></path><path d="M6.42 4.49A9.94 9.94 0 0 0 2 12c0 1.25.23 2.44.65 3.54 2.1-.52 4.12-.75 6.09-.7 1.38.05 2.72.2 4 .45"></path><path d="M14.06 14.11c1.3 2.49 2.29 4.77 2.98 6.85A9.99 9.99 0 0 0 22 12c0-.46-.03-.92-.08-1.36-2.43.1-4.63.6-6.54 1.47"></path></svg>
<span>Dribbble</span>
</a>
<a className="inline-flex items-center space-x-1.5 rounded-full bg-white/5 border border-white/15 px-2.5 py-1 hover:bg-white/10 hover:border-cyan-400/60 transition-colors duration-200" href="#">
<svg className="w-3.5 h-3.5" data-lucide="github" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-4 1-4-2-6-2"></path><path d="M15 19c4 1 4-2 6-2"></path><path d="M8 15c-1.95 0-3.5-1.79-3.5-4S6.05 7 8 7c3 0 4 3.5 4 5.5"></path><path d="M16 15c1.95 0 3.5-1.79 3.5-4S17.95 7 16 7c-3 0-4 3.5-4 5.5"></path><path d="M12 3a9 9 0 0 0-9 9c0 3.89 2.51 7.18 6 8.36V17"></path></svg>
<span>GitHub</span>
</a>
<a className="inline-flex items-center space-x-1.5 rounded-full bg-white/5 border border-white/15 px-2.5 py-1 hover:bg-white/10 hover:border-cyan-400/60 transition-colors duration-200" href="#">
<svg className="w-3.5 h-3.5" data-lucide="linkedin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span>LinkedIn</span>
</a>
<a className="inline-flex items-center space-x-1.5 rounded-full bg-white/5 border border-white/15 px-2.5 py-1 hover:bg-white/10 hover:border-cyan-400/60 transition-colors duration-200" href="#">
<svg className="w-3.5 h-3.5" data-lucide="twitter" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 9.6-8 16-16 11.3 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span>X</span>
</a>
</div>
</div>
<div className="rounded-xl border border-white/12 bg-black/40 p-3.5">
<p className="text-[0.7rem] text-white/55">
                For speaking, mentoring, or design reviews, reach out with subject
                <span className="text-cyan-300">“Studio conversations”</span>.
              </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#04040c]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="flex items-center space-x-2 mb-1">
<span className="text-xs font-medium tracking-[0.18em] uppercase text-white/60">
            LEO STUDIO
          </span>
</div>
<p className="text-[0.7rem] sm:text-xs text-white/40">
          Portfolio © 2024. Designed &amp; built by Leo. Minimal, resilient, quietly opinionated.
        </p>
</div>
<div className="flex flex-wrap gap-3 text-[0.7rem] text-white/45">
<span>Based in Berlin</span>
<span className="hidden sm:inline text-white/25">·</span>
<a className="hover:text-cyan-300 transition-colors duration-150" href="#work">Work</a>
<a className="hover:text-cyan-300 transition-colors duration-150" href="#about">About</a>
<a className="hover:text-cyan-300 transition-colors duration-150" href="#contact">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
