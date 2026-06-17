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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute brightness-50"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<div className="pointer-events-none fixed inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/20"></div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B0D12]/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a aria-label="Hypr home" className="group inline-flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-inset group-hover:bg-white/10 transition-colors bg-white/5 ring-white/10">
<span className="text-xs tracking-[0.06em] font-medium font-sans" style={{}}>HY</span>
</div>
<span className="text-[18px] tracking-tight font-semibold leading-none font-sans" style={{}}>Hypr</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors text-white/70 hover:text-white font-sans" href="#work" style={{}}>Work</a>
<a className="text-sm transition-colors text-white/70 hover:text-white font-sans" href="#services" style={{}}>Services</a>
<a className="text-sm transition-colors text-white/70 hover:text-white font-sans" href="#process" style={{}}>Process</a>
<a className="text-sm transition-colors text-white/70 hover:text-white font-sans" href="#about" style={{}}>About</a>
<a className="text-sm transition-colors text-white/70 hover:text-white font-sans" href="#contact" style={{}}>Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" href="#contact" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Start a project
            </a>
</div>

<details className="md:hidden relative">
<summary className="list-none inline-flex ring-1 ring-inset cursor-pointer select-none text-sm font-geist rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center ring-white/10 hover:bg-white/5 hover:text-white text-white/80"><svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></summary>
<div className="absolute right-0 mt-2 w-56 rounded-lg bg-[#0D1117] ring-1 shadow-lg overflow-hidden ring-white/10">
<div className="p-2">
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#work" style={{}}>
<svg className="lucide lucide-layout-grid h-4 w-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Work
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#services" style={{}}>
<svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Services
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#process" style={{}}>
<svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg> Process
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#about" style={{}}>
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> About
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#contact" style={{}}>
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Contact
                </a>
</div>
<div className="border-t border-white/10"></div>
<div className="p-2">
<a className="flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" href="#contact" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Start a project
                </a>
</div>
</div>
</details>
</div>
</div>
</header>

<section className="overflow-hidden relative">

<div className="pointer-events-none absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(ellipse at top, rgba(99,102,241,0.12), transparent 40%), radial-gradient(ellipse at bottom, rgba(56,189,248,0.08), transparent 40%)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 md:py-24 pt-20 pb-20 gap-x-10 gap-y-10">
<div className="lg:col-span-7">
<div className="uppercase inline-flex text-[10px] text-white/80 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center font-sans">
  Web &amp; Digital services<svg className="lucide lucide-rocket h-3.5 w-3.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg><span className="mx-2 h-3 w-px bg-white/15"></span><span className="text-white/80" style={{}}>Since 2019</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-semibold tracking-tight mt-5" style={{}}>
  Build, launch and scale exceptional web experiences.
</h1>
<p className="mt-5 text-base sm:text-lg max-w-2xl text-white/70 font-sans" style={{}}>
  Hypr is a studio that designs, develops and optimizes fast, accessible and resilient products. From landing pages to
  complex apps and automations—we ship with quality and speed.
</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" href="#contact" style={{}}>
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Start a project
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 ring-1 ring-inset transition-colors hover:text-white hover:bg-white/5 ring-white/10 hover:ring-white/20 text-sm font-medium text-white/80 bg-white/0 rounded-md pt-3 pr-5 pb-3 pl-5 font-sans" href="#work">Explore<svg className="lucide lucide-play h-5 w-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></a>
</div>

<div className="mt-10">
<div className="text-xs uppercase tracking-[0.12em] text-white/40 font-sans" style={{}}>Trusted by teams at</div>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>ALPHA</span>
</div>
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>NOVA</span>
</div>
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>KITE</span>
</div>
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>ECHO</span>
</div>
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>METR</span>
</div>
<div className="flex items-center justify-center h-10 rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-[12px] tracking-[0.18em] text-white/70 font-sans" style={{}}>VOLT</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative h-[420px] sm:h-[500px] lg:h-full rounded-2xl overflow-hidden ring-1 ring-inset bg-white/[0.02] ring-white/10">
<img alt="Team working on product" className="absolute inset-0 h-full w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-[#0D1117]/80 ring-1 backdrop-blur p-3 ring-white/10">
<div className="flex items-center gap-2 text-xs text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-code-2 h-4 w-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> Recent deploy
                  </div>
<div className="mt-1 text-[22px] tracking-tight font-sans font-semibold" style={{}}>2.3s</div>
<div className="text-xs text-white/50 font-sans" style={{}}>First Contentful Paint</div>
</div>
<div className="rounded-xl bg-[#0D1117]/80 ring-1 backdrop-blur p-3 ring-white/10">
<div className="flex items-center gap-2 text-xs text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Accessibility
                  </div>
<div className="text-[22px] tracking-tight mt-1 font-sans font-semibold" style={{}}>100</div>
<div className="text-xs text-white/50 font-sans" style={{}}>Lighthouse score</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10 bg-black/10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>Services</h2>
<p className="mt-2 max-w-2xl text-white/70 font-sans" style={{}}>End‑to‑end capabilities to plan, design, build and grow your product.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" href="#contact" style={{}}>
            Get a quote
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-code h-4.5 w-4.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<div className="font-medium font-sans" style={{}}>Web Development</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>High‑performance websites and apps with modern tooling, structured content and robust architecture.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SPA/SSR, CMS, APIs</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Performance &amp; accessibility</li>
</ul>
</div>
<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-figma h-4.5 w-4.5" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="font-medium font-sans" style={{}}>Product Design</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>UX research, flows and interfaces that are clean, accessible and conversion‑focused.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Wireframes to hi‑fi design</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Design systems</li>
</ul>
</div>
<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-zap h-4.5 w-4.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="font-medium font-sans" style={{}}>Automations</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Reduce toil with reliable workflows, integrations and internal tooling.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> APIs, webhooks, bots</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Data sync &amp; reporting</li>
</ul>
</div>
<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-shopping-bag h-4.5 w-4.5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="font-medium font-sans" style={{}}>E‑commerce</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Custom storefronts, subscriptions and optimized checkout flows.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Storefront + headless</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Analytics &amp; CRO</li>
</ul>
</div>
<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-search h-4.5 w-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="font-medium font-sans" style={{}}>SEO &amp; Growth</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Technical SEO, content ops and growth loops aligned to business outcomes.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Site health &amp; schema</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Content velocity</li>
</ul>
</div>
<div className="group rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-palette h-4.5 w-4.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="font-medium font-sans" style={{}}>Brand &amp; Content</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Identity systems, tone and content frameworks that scale across surfaces.</p>
<ul className="mt-3 text-sm space-y-1.5 text-white/60">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Naming &amp; narrative</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Content guidelines</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>Selected work</h2>
<p className="mt-2 text-white/70 font-sans" style={{}}>A snapshot of recent builds and outcomes.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white font-sans" href="#contact" style={{}}>
            Full case studies
            <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group rounded-2xl overflow-hidden ring-1 ring-inset bg-white/[0.02] hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20" href="#">
<div className="relative h-56">
<img alt="Analytics dashboard" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#0D1117]/80 backdrop-blur px-2.5 py-1 text-[11px] ring-1 ring-white/10">
<span className="text-white/80 font-sans" style={{}}>SaaS</span>
<span className="text-white/40 font-sans" style={{}}>Web App</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="font-medium font-sans" style={{}}>Nova Analytics</div>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:text-white/80 transition-colors text-white/50" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Dashboards, auth and billing for a data platform. 99.98% uptime.</p>
</div>
</a>
<a className="group rounded-2xl overflow-hidden ring-1 ring-inset bg-white/[0.02] hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20" href="#">
<div className="relative h-56">
<img alt="E-commerce interface" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#0D1117]/80 backdrop-blur px-2.5 py-1 text-[11px] ring-1 ring-white/10">
<span className="text-white/80 font-sans" style={{}}>D2C</span>
<span className="text-white/40 font-sans" style={{}}>Commerce</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="font-medium font-sans" style={{}}>Volt Supply</div>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:text-white/80 transition-colors text-white/50" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Headless storefront with tailored product quiz. +34% CVR.</p>
</div>
</a>
<a className="group rounded-2xl overflow-hidden ring-1 ring-inset bg-white/[0.02] hover:bg-white/[0.04] transition-colors ring-white/10 hover:ring-white/20" href="#">
<div className="relative h-56">
<img alt="Marketing site" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#0D1117]/80 backdrop-blur px-2.5 py-1 text-[11px] ring-1 ring-white/10">
<span className="text-white/80 font-sans" style={{}}>B2B</span>
<span className="text-white/40 font-sans" style={{}}>Site</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="font-medium font-sans" style={{}}>Echo Security</div>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover:text-white/80 transition-colors text-white/50" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Performance‑first marketing site with multilingual support.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10 bg-black/10" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>Process</h2>
<p className="mt-2 max-w-2xl text-white/70 font-sans" style={{}}>A transparent, outcomes‑driven approach.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Typical timeline: 2–8 weeks
          </div>
</div>
<ol className="mt-10 relative">
<div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>

<li className="relative pl-14 py-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<div className="absolute left-0 top-5 h-8 w-8 rounded-full ring-1 ring-inset flex items-center justify-center bg-white/10 ring-white/20">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<div className="flex items-center justify-between gap-4">
<div className="font-medium font-sans" style={{}}>Discovery</div>
<span className="text-xs text-white/50 font-sans" style={{}}>1–3 days</span>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Goals, constraints, metrics. We align on scope, success and timeline.</p>
</li>
<li className="relative pl-14 py-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<div className="absolute left-0 top-5 h-8 w-8 rounded-full ring-1 ring-inset flex items-center justify-center bg-white/10 ring-white/20">
<svg className="lucide lucide-pen-tool h-4 w-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="flex items-center justify-between gap-4">
<div className="font-medium font-sans" style={{}}>Design</div>
<span className="text-xs text-white/50 font-sans" style={{}}>3–10 days</span>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Flows, wireframes and hi‑fi UI. We build a minimal system early.</p>
</li>
<li className="relative pl-14 py-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<div className="absolute left-0 top-5 h-8 w-8 rounded-full ring-1 ring-inset flex items-center justify-center bg-white/10 ring-white/20">
<svg className="lucide lucide-merge h-4 w-4" data-lucide="merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 6 4-4 4 4"></path><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path><path d="m20 22-5-5"></path></svg>
</div>
<div className="flex items-center justify-between gap-4">
<div className="font-medium font-sans" style={{}}>Build</div>
<span className="text-xs text-white/50 font-sans" style={{}}>1–4 weeks</span>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Implementation with testing, performance and accessibility baked in.</p>
</li>
<li className="relative pl-14 py-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<div className="absolute left-0 top-5 h-8 w-8 rounded-full ring-1 ring-inset flex items-center justify-center bg-white/10 ring-white/20">
<svg className="lucide lucide-plane h-4 w-4" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="flex items-center justify-between gap-4">
<div className="font-medium font-sans" style={{}}>Launch &amp; Iterate</div>
<span className="text-xs text-white/50 font-sans" style={{}}>ongoing</span>
</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Deploy, monitor and iterate with analytics and feedback loops.</p>
</li>
</ol>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>What clients say</h2>
<p className="mt-2 text-white/70 font-sans" style={{}}>Outcomes, not buzzwords.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-sans" style={{}}>Ari K.</div>
<div className="text-xs text-white/50 font-sans" style={{}}>CEO, Nova Analytics</div>
</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Hypr shipped a complex app on a tight deadline with flawless performance. Our onboarding time dropped by 42%.</p>
</div>
<div className="rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-sans" style={{}}>Maya R.</div>
<div className="text-xs text-white/50 font-sans" style={{}}>Head of Growth, Volt</div>
</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>We saw a meaningful lift in conversion and organic traffic. Clean code, clear comms, fast iteration.</p>
</div>
<div className="rounded-xl p-5 bg-white/[0.02] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium font-sans" style={{}}>Leo D.</div>
<div className="text-xs text-white/50 font-sans" style={{}}>CTO, Echo</div>
</div>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Pragmatic and detail‑oriented. Strong emphasis on accessibility and performance from day one.</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/10 bg-black/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between flex-wrap gap-3">
<div className="inline-flex items-center gap-2 text-sm text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-boxes h-4 w-4" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
            Tech we use
          </div>
<div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full sm:w-auto">
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>JS</span></div>
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>TS</span></div>
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>NODE</span></div>
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>AWS</span></div>
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>GCP</span></div>
<div className="h-9 min-w-[84px] rounded-md ring-1 ring-inset flex items-center justify-center bg-white/5 ring-white/10"><span className="text-[12px] tracking-[0.18em] text-white/80 font-sans" style={{}}>FIGMA</span></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>A small studio with senior impact</h2>
<p className="mt-3 text-white/70 font-sans" style={{}}>We’re operators turned builders. You’ll work directly with the people shipping your product—no layers, no drag.</p>
<ul className="mt-5 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Transparent pricing and timelines</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Async‑first communication</li>
<li className="flex items-center gap-2 font-sans" style={{}}><svg className="lucide lucide-check-circle h-4 w-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Post‑launch support and training</li>
</ul>
<div className="mt-6 inline-flex items-center gap-3 text-sm text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Fully insured. NDAs on request.
            </div>
</div>
<div className="lg:col-span-6">
<div className="rounded-2xl overflow-hidden ring-1 ring-inset bg-white/[0.02] ring-white/10">
<img alt="Studio" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="font-medium font-sans" style={{}}>How we partner</div>
<p className="mt-1.5 text-sm text-white/70 font-sans" style={{}}>Flexible scopes—from fixed projects to on‑going retainers—tailored to your team’s velocity.</p>
<div className="mt-3 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-lg ring-1 ring-inset p-3 bg-white/5 ring-white/10">
<div className="text-white/60 font-sans" style={{}}>Avg. response</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-sans" style={{}}>4h</div>
</div>
<div className="rounded-lg ring-1 ring-inset p-3 bg-white/5 ring-white/10">
<div className="text-white/60 font-sans" style={{}}>NPS</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-sans" style={{}}>72</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 bg-black/10 border-white/10 border-t pt-16 pb-16" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-10">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-sans font-semibold" style={{}}>Have a project in mind?</h2>
<p className="mt-2 text-white/70 font-sans" style={{}}>Tell us about your goals and constraints. We’ll get back within one
    business day.</p>
<div className="mt-5 space-y-2 text-sm">
<a className="group inline-flex items-center gap-2 text-white/80 hover:text-white font-sans" href="mailto:hello@hypr.studio" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@hypr.studio
      <svg className="lucide lucide-arrow-up-right h-4 w-4 group-hover:text-white/80 text-white/50" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<div className="flex items-center gap-2 text-white/60 font-sans" style={{}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +1 (555) 010‑2030
    </div>
</div>
</div>
<div className="">
<form className="rounded-2xl p-5 bg-white/[0.02] ring-1 ring-inset ring-white/10">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-white/60 font-sans" htmlFor="name" style={{}}>Your name</label>
<input className="mt-1 w-full rounded-md text-sm placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" id="name" name="name" placeholder="Alex Morgan" type="text"/>
</div>
<div>
<label className="block text-xs text-white/60 font-sans" htmlFor="email" style={{}}>Email</label>
<input className="mt-1 w-full rounded-md text-sm placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" id="email" name="email" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-white/60 font-sans" htmlFor="company" style={{}}>Company</label>
<input className="mt-1 w-full rounded-md text-sm placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" id="company" name="company" placeholder="Company Inc." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-white/60 font-sans" htmlFor="budget" style={{}}>Budget</label>
<div className="relative">
<select className="appearance-none mt-1 w-full rounded-md text-sm pr-10 placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" id="budget" name="budget">
<option className="text-black font-sans" style={{}}>Under $5k</option>
<option className="text-black font-sans" style={{}}>$5k–$15k</option>
<option className="text-black font-sans" style={{}}>$15k–$40k</option>
<option className="text-black font-sans" style={{}}>$40k+</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-white/60 font-sans" htmlFor="message" style={{}}>Project brief</label>
<textarea className="mt-1 w-full rounded-md text-sm placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" id="message" name="message" placeholder="Tell us about your goals, timeline and scope..." rows="4"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-white/50 font-sans" style={{}}>We’ll never share your information.</div>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" style={{}} type="submit">
                  Send inquiry
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="md:p-8 ring-inset flex flex-col md:flex-row md:items-center gap-6 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<h3 className="text-2xl md:text-3xl tracking-tight font-sans font-semibold" style={{}}>Let’s build something great together.</h3>
<p className="mt-1 text-white/70 font-sans" style={{}}>Share your brief for a fast, obligation‑free estimate.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white bg-white/10 hover:bg-white/15 ring-white/15 hover:ring-white/25 font-sans" href="#contact" style={{}}>
              Start a project
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-1 ring-inset transition-colors text-white/80 hover:text-white bg-white/0 hover:bg-white/5 ring-white/10 hover:ring-white/20 font-sans" href="#work" style={{}}>
              See work
            </a>
</div>
</div>
</div>
</section>

<footer className="pt-12 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8">
<div className="">
<div className="inline-flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-inset bg-white/5 ring-white/10">
<span className="text-xs tracking-[0.06em] font-medium font-sans" style={{}}>HY</span>
</div>
<span className="text-[18px] tracking-tight font-semibold leading-none font-sans" style={{}}>Hypr</span>
</div>
<p className="mt-3 text-sm text-white/70 font-sans" style={{}}>Web development and digital services for teams that value speed and quality.</p>
<div className="mt-3 flex items-center gap-3 text-sm text-white/60">
<svg className="lucide lucide-copyright h-4 w-4" data-lucide="copyright" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg> <span className="font-sans" style={{}}>2025</span>
</div>
</div>
<div>
<div className="text-sm font-medium font-sans" style={{}}>Explore</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white font-sans" href="#work" style={{}}>Work</a></li>
<li><a className="hover:text-white font-sans" href="#services" style={{}}>Services</a></li>
<li><a className="hover:text-white font-sans" href="#process" style={{}}>Process</a></li>
<li><a className="hover:text-white font-sans" href="#about" style={{}}>About</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-medium font-sans" style={{}}>Resources</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className=""><a className="hover:text-white font-sans" href="#" style={{}}>Playbooks</a></li>
<li><a className="hover:text-white font-sans" href="#" style={{}}>Guides</a></li>
<li className=""><a className="hover:text-white font-sans" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-white font-sans" href="#" style={{}}>Privacy</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-medium font-sans" style={{}}>Newsletter</div>
<p className="mt-2 text-sm text-white/70 font-sans" style={{}}>Monthly notes on shipping better products.</p>
<form className="mt-3 flex">
<input className="flex-1 rounded-l-md text-sm placeholder:text-white/30 px-3 py-2 ring-1 ring-inset focus:outline-none focus:ring-white/30 bg-white/5 text-white ring-white/10" placeholder="you@company.com" type="email"/>
<button className="inline-flex gap-2 ring-inset transition-colors hover:bg-white/15 hover:ring-white/25 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-r-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Join<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
<div className="" style={{}}>Made with &lt;3 by Hypr</div>
<div className="flex items-center gap-4">
<a className="hover:text-white/80 font-sans" href="#" style={{}}>Twitter</a>
<a className="hover:text-white/80 font-sans" href="#" style={{}}>LinkedIn</a>
<a className="hover:text-white/80 font-sans" href="#" style={{}}>GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
