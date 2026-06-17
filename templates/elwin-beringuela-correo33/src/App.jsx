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
      <div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe></div>

<div className="fixed inset-0 -z-10">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div><div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<nav className="relative border-b backdrop-blur-sm border-white/10 bg-black/20 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center">
<a className="text-lg font-semibold text-white tracking-tight font-geist" href="#">EC</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="transition hover:text-white text-sm text-neutral-300 font-geist" href="#about">About</a>
<a className="transition hover:text-white text-sm text-neutral-300 font-geist" href="https://drive.google.com/drive/folders/1NIbaYBGCocuthk64mm7N2QdPbr6U2JGS?usp=drive_link">Portfolio</a>
<a className="transition hover:text-white text-sm text-neutral-300 font-geist" href="#services">Services</a>
<a className="transition hover:text-white text-sm text-neutral-300 font-geist" href="#contact">Contact</a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center gap-2 rounded-full border bg-white/[0.03] px-4 py-2 text-sm font-medium transition backdrop-blur border-white/10 text-neutral-100 hover:bg-white/10" href="#contact">
<svg aria-hidden="true" className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="hidden sm:inline font-geist">Get in touch</span>
</a>
</div>
</div>
</div>
</nav>

<header className="sm:px-6 lg:px-8 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-4 pl-4" id="about">
<div className="inline-flex items-center gap-2 rounded-full border bg-white/[0.03] px-3 py-1.5 shadow-sm backdrop-blur border-white/10">
<svg aria-hidden="true" className="lucide lucide-badge-check h-4 w-4 text-emerald-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Expert Creator</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl tracking-tighter font-geist mt-6 text-neutral-100">Elwin Correo, <span className="tracking-tighter font-geist text-neutral-300">Your Creator</span></h1>
<p className="mt-3 text-base sm:text-lg max-w-3xl font-geist text-neutral-400">
      Brief initial presentation of myself and my previous experiences.
    </p>
</header>
<main className="md:mt-12 mt-8">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<section className="relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border rounded-3xl backdrop-blur-lg border-white/10">
<div className="p-3 sm:p-4">
<div className="relative rounded-2xl overflow-hidden ring-1 bg-neutral-900 ring-white/10">
<img alt="Portrait" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aee7c414-1804-47c8-ae06-d2543a148ad7_800w.jpg"/>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full px-2.5 py-1.5 ring-1 backdrop-blur bg-black/60 ring-white/10">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-[12px] font-geist text-neutral-200">Available for work</span>
</div>
</div>
<div className="sm:px-1 pr-2 pl-2">
<h2 className="text-2xl tracking-tighter font-geist mt-4 text-neutral-100">
                Hello I am <span className="bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-neutral-100 to-neutral-400">Elwin Correo</span>
</h2>
<p className="text-sm text-neutral-400 font-geist mt-1">GHL Website, Funnel, Automation, Builder. AI Images and Videos Creator.</p>
<div className="mt-4 flex items-center gap-2.5">
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter h-4 w-4 group-hover:text-white text-neutral-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram group-hover:text-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-dribbble group-hover:text-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path className="" d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-github group-hover:text-white w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
<div className="my-5 h-px bg-gradient-to-r to-transparent from-white/10 via-white/5"></div>
<div className="mb-2">
<a className="inline-flex items-center gap-2 hover:shadow-lg transition text-sm font-medium text-black font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow" href="#contact">
<svg aria-hidden="true" className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Connect with me
                </a>
</div>
</div>
</div>
</section>

<section className="sm:p-6 border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-lg">
<p className="text-base text-neutral-300 font-geist">I'm Elwin Correo, a dedicated GHL Builder &amp; AI Creator based in the beauty of universe. I specialize in designing, building, creating, with seamless technical execution to craft exceptional digital experiences.</p>
<div className="mt-6 h-px bg-gradient-to-r to-transparent from-white/10 via-white/5"></div>

<div className="flex flex-wrap mt-6 gap-x-2.5 gap-y-2.5">
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Product Design</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Automation</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">AI Image</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Ai VIdeo</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3" style={{maskImage: 'linear-gradient(100deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 0%, black 100%, transparent)'}}>Ads</span><span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Landing Page</span>
</div>
<div className="mt-6 h-px bg-gradient-to-r to-transparent from-white/10 via-white/5"></div>

<div className="mt-6 space-y-3">
<div className="group flex transition hover:bg-black/30 bg-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full ring-1 flex items-center justify-center bg-emerald-400/10 ring-emerald-400/20">
<svg aria-hidden="true" className="lucide lucide-briefcase w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect className="" height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Artificial Intelligence</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2024</span>
</div>
<div className="group flex transition hover:bg-black/30 bg-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full ring-1 flex items-center justify-center bg-cyan-400/10 ring-cyan-400/20">
<svg aria-hidden="true" className="lucide lucide-layout h-3.5 w-3.5 text-cyan-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">GoHighLevel</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2024</span>
</div>
<div className="group flex transition hover:bg-black/30 bg-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full ring-1 flex items-center justify-center bg-fuchsia-400/10 ring-fuchsia-400/20">
<svg aria-hidden="true" className="lucide lucide-package h-3.5 w-3.5 text-fuchsia-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Automation</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2025</span>
</div>
<div className="group rounded-2xl border px-4 py-4 flex items-center justify-between shadow-sm transition border-white/10 bg-black/20 hover:bg-black/30">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full ring-1 flex items-center justify-center bg-amber-400/10 ring-amber-400/20">
<svg aria-hidden="true" className="lucide lucide-palette h-3.5 w-3.5 text-amber-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Designer</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2023</span>
</div>
</div>
</section>
</div>
</div>

<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<section className="mt-20 md:mt-32" id="services">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 rounded-full border bg-white/[0.03] px-3 py-1.5 shadow-sm backdrop-blur mb-6 border-white/10">
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 text-cyan-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Outputs</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-geist tracking-tighter text-neutral-100" style={{}}>
            Creative <span className="font-geist tracking-tighter text-neutral-300" style={{}}>Services</span>
</h2>
<p className="sm:text-lg text-base text-neutral-400 font-geist max-w-2xl mt-3 mr-auto ml-auto">Explore a modern set of services crafted to elevate your business and brand presence across social media and identity.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="relative sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04] lg:row-span-2 overflow-hidden border rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg border-white/10">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-40 -left-24 h-72 w-72 rounded-full blur-[120px] bg-cyan-400/10"></div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border flex items-center justify-center border-white/10 bg-white/5">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard h-5 w-5 text-white/80" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">GoHighLevel</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3">High-performing, user-centered websites, funnels, automation, landing page that accelerate growth and feel unmistakably yours.</p>
<div className="mt-5 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Website design showcase" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf072b5e-1c5d-4961-91f2-3bf3e6e022de_1600w.png"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="UI concept" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe3f0a32-f06a-4127-bacc-518b40c1b388_800w.png"/>
<img alt="Interface detail" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92587f9e-68b7-4ea4-a715-d23c5178fd93_800w.png"/>
<img alt="Product view" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef67e32e-3b97-4efd-ac43-70b1bb5eda5c_3840w.png"/>
</div>
</div>

<div className="sm:p-6 border-white/10 border ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-lg">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border flex items-center justify-center border-white/10 bg-white/5">
<svg aria-hidden="true" className="lucide lucide-pen-tool h-5 w-5 text-white/80" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl sm:text-2xl font-geist tracking-tighter text-white" style={{}}>Logo Systems</h3>
</div>
<p className="mt-3 text-sm sm:text-base font-geist text-neutral-400">
              Distinctive, scalable identity marks with a full system of rules and assets for consistent brand expression.
            </p>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="col-span-1 flex bg-center bg-gradient-to-b from-white/5 to-white/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca46fa41-3b0d-4167-93fc-9b5228bcc0d2_800w.png)] bg-auto border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-shapes w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(229, 229, 229)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect className="" height="7" rx="1" width="7" x="3" y="14"></rect><circle className="" cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<div className="col-span-1 rounded-2xl border bg-gradient-to-b p-4 flex items-center justify-center border-white/10 from-white/5 to-white/0">
<svg aria-hidden="true" className="lucide lucide-beaker h-8 w-8 text-neutral-200" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4.5 3h15"></path><path className="" d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
</div>
<div className="col-span-1 rounded-2xl border bg-gradient-to-b p-4 flex items-center justify-center border-white/10 from-white/5 to-white/0">
<svg aria-hidden="true" className="lucide lucide-badge-check h-8 w-8 text-neutral-200" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>

<div className="sm:p-6 border-white/10 border rounded-3xl ring-1 pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-lg">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 rounded-xl border flex items-center justify-center border-white/10 bg-white/5">
<svg aria-hidden="true" className="lucide lucide-mouse-pointer-square-dashed h-5 w-5 text-white/80" data-lucide="mouse-pointer-square-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path><path d="M5 3a2 2 0 0 0-2 2"></path><path className="" d="M19 3a2 2 0 0 1 2 2"></path><path d="M5 21a2 2 0 0 1-2-2"></path><path d="M9 3h1"></path><path className="" d="M9 21h2"></path><path d="M14 3h1"></path><path d="M3 9v1"></path><path d="M21 9v2"></path><path d="M3 14v1"></path></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">Static Ad Creative</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3" style={{}}></p>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Prototype 1" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3cdd41d-fb56-44c5-a49c-63a02ed295eb_3840w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Prototype 2" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59e2de0e-1f59-4a87-90e5-3ac73ae526a8_3840w.png"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Prototype 3" className="aspect-[4/3] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32dcd344-e060-4889-80af-b42ecdd4a29c_3840w.png"/>
</div>
</div>
</div>

<div className="sm:p-6 lg:col-span-2 border-white/10 border ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-lg">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 rounded-xl border flex items-center justify-center border-white/10 bg-white/5">
<svg aria-hidden="true" className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="sun-medium" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">Artificial Intelligence</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3">Some outputs that help businesses and brand owners.</p>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="Poster graphic" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/571b81bf-f918-4895-9ce4-c712a9b0d065_3840w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="3D render" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54794e3a-303a-4fdc-969b-620128c22507_800w.png"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="Scenic minimal" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b1ab6e3-dbcb-43e1-a0d8-7e78f5e27693_800w.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 md:mt-32 mb-20" id="contact">
<div className="flex flex-col sm:flex-row sm:items-center sm:p-6 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight font-geist text-white">Start a project</h3>
<p className="text-sm text-neutral-400 font-geist mt-1">Tell me about your goals and timelines. We'll reply within 1–2 business days.</p>
</div>
<a className="group inline-flex items-center gap-2 transition hover:bg-white/20 text-sm font-medium text-neutral-100 bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/home">
<svg aria-hidden="true" className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist">elwincorreo33@gmail.com</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right h-4 w-4 opacity-80" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>
</div>
</main>

<footer className="relative border-t backdrop-blur-sm border-white/10 bg-black/20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8">

<div className="md:col-span-2">
<h3 className="text-lg font-semibold tracking-tight font-geist mb-3 text-white">Elwin Correo</h3>
<p className="text-sm text-neutral-400 font-geist max-w-md mb-4">Builder, Creator, Designer, creating exceptional digital experiences with seamless technical execution. Based in mind.</p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter h-4 w-4 group-hover:text-white text-neutral-300" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram h-4 w-4 group-hover:text-white text-neutral-300" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></rect></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-dribbble h-4 w-4 group-hover:text-white text-neutral-300" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-github h-4 w-4 group-hover:text-white text-neutral-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-medium mb-3 font-geist text-white">Services</h4>
<ul className="text-sm text-neutral-400 space-y-2">
<li className=""><a className="transition hover:text-white font-geist" href="#services">Website Design</a></li>
<li className=""><a className="transition font-geist hover:text-white" href="#services">Funnel Design</a></li>
<li className=""><a className="transition font-geist hover:text-white" href="#services">Automation System</a></li>
<li className=""><a className="transition font-geist hover:text-white" href="/#services">AI Image and Video</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium mb-3 font-geist text-white">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="transition hover:text-white font-geist" href="/home">elwincorreo33@gmail.com</a></li>
<li className=""><a className="transition hover:text-white font-geist" href="#about">About</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 border-white/10 border-t mt-8 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs font-geist text-neutral-400">© 2025 Elwin Correo. All rights reserved.</p>
        &lt;</div></div></footer>
    </>
  );
}
