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



    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/radialglass-20RYcJn9wbsEb5QEYkazHjpb" width="100%"></iframe></div>

<div className="fixed inset-0 -z-10">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<nav className="relative border-b border-white/10 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center">
<a className="text-lg font-semibold text-white tracking-tight font-geist pr-4 pl-4" href="#">EC</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-white transition text-sm text-neutral-300 font-geist" href="#about">About</a>
<a className="hover:text-white transition text-sm text-neutral-300 font-geist" href="#services">Services</a>
<a className="hover:text-white transition text-sm text-neutral-300 font-geist" href="https://drive.google.com/drive/folders/1NIbaYBGCocuthk64mm7N2QdPbr6U2JGS?usp=drive_link">Work</a>
<a className="hover:text-white transition text-sm text-neutral-300 font-geist" href="#contact">Contact</a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium text-neutral-100 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur" href="#contact">
<svg aria-hidden="true" className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="hidden sm:inline font-geist">Get in touch</span>
</a>
</div>
</div>
</div>
</nav>

<header className="sm:px-6 lg:px-8 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-4 pl-4" id="about">
<div className="inline-flex border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="lucide lucide-badge-check h-4 w-4 text-emerald-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Expert Creator</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl text-neutral-100 tracking-tighter font-geist mt-6 pr-4 pl-3">Elwin Correo, <span className="text-neutral-300 tracking-tighter font-geist">Your Creator</span></h1>
<p className="sm:text-lg text-base text-neutral-400 font-geist max-w-3xl mt-3 pr-4 pl-4">
      Brief initial presentation of myself and my previous experiences.
    </p>
</header>
<main className="sm:px-6 lg:px-8 md:mt-12 max-w-7xl mt-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<section className="relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border-white/10 border rounded-3xl backdrop-blur-lg">
<div className="sm:p-4 pt-3 pr-3 pb-3 pl-3">
<div className="relative rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
<img alt="Portrait" className="sm:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bca741b3-96ce-43a2-8fc0-931f321709e3_3840w.jpg"/>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/60 px-2.5 py-1.5 ring-1 ring-white/10 backdrop-blur">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-[12px] text-neutral-200 font-geist">Available for work</span>
</div>
</div>
<div className="px-2 sm:px-1">
<h2 className="text-2xl text-neutral-100 tracking-tighter font-geist mt-4">Hello I  am <span className="bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-neutral-100 to-neutral-400">Elwin Beringuela Correo</span></h2>
<p className="text-sm text-neutral-400 font-geist mt-1">Creating endless visual and imagination with AI execution.</p>
<div className="mt-4 flex items-center gap-2.5">
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-dribbble h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-10 h-10 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-github h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
<div className="my-5 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
<div className="mb-2">
<a className="inline-flex items-center gap-2 hover:shadow-lg transition text-sm font-medium text-black font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow" href="#contact">
<svg aria-hidden="true" className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Connect with me
              </a>
</div>
</div>
</div>
</section>

<section className="relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] sm:p-6 border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<p className="text-base text-neutral-300 font-geist">I'm Elwin Correo, a dedicated GHL Builder &amp; AI Creator based in the beauty of universe. I specialize in designing, building, creating, with seamless technical execution to craft exceptional digital experiences.</p>
<div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

<div className="flex flex-wrap gap-2.5 mt-6 gap-x-2.5 gap-y-2.5">
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">AI Image</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">AI Video</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">UGC</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Ads</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">Design</span>
<span className="inline-flex items-center text-sm text-neutral-200 font-geist border-white/10 border rounded-xl pt-2 pr-3 pb-2 pl-3">GoHighLevel</span>
</div>
<div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

<div className="mt-6 space-y-3">
<div className="group rounded-2xl border border-white/10 bg-black/20 px-4 py-4 flex items-center justify-between shadow-sm hover:bg-black/30 transition">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-briefcase h-3.5 w-3.5 text-emerald-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Artificial Intelligence

</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2024</span>
</div>
<div className="group flex hover:bg-black/30 transition bg-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-layout h-3.5 w-3.5 text-cyan-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">GoHighLevel</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2024</span>
</div>
<div className="group flex hover:bg-black/30 transition bg-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-fuchsia-400/10 ring-1 ring-fuchsia-400/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-package h-3.5 w-3.5 text-fuchsia-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Automation

</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2025</span>
</div>
<div className="group rounded-2xl border border-white/10 bg-black/20 px-4 py-4 flex items-center justify-between shadow-sm hover:bg-black/30 transition">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-amber-400/10 ring-1 ring-amber-400/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-palette h-3.5 w-3.5 text-amber-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium text-neutral-200 tracking-tight font-geist">Designer</p>
<p className="text-xs text-neutral-400 font-geist"></p>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist">2022</span>
</div>
</div>
</section>
</div>

<section className="mt-20 md:mt-32" id="services">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 shadow-sm backdrop-blur mb-6">
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4 text-cyan-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[13px] leading-none text-neutral-300 font-geist">Output</span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-100 font-geist tracking-tighter" style={{}}>
          Creative <span className="text-neutral-300 font-geist tracking-tighter" style={{}}>Services</span>
</h2>
<p className="sm:text-lg text-base text-neutral-400 font-geist max-w-2xl mt-3 mr-auto ml-auto">Explore a modern set of services crafted to elevate your business and brand presence across social media and identity.

</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="relative sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04] lg:row-span-2 overflow-hidden border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -bottom-40 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]"></div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard h-5 w-5 text-white/80" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">GoHighLevel
</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3">High-performing, user-centered websites, funnels, automation, landing page that accelerate growth and feel unmistakably yours.</p>
<div className="mt-5 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Website design showcase" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34f97a20-dcef-4cb0-b16a-6cbcd7e6aa9f_1600w.png"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="UI concept" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92587f9e-68b7-4ea4-a715-d23c5178fd93_3840w.png"/>
<img alt="Interface detail" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe3f0a32-f06a-4127-bacc-518b40c1b388_3840w.png"/>
<img alt="Product view" className="aspect-[4/3] w-full object-auto border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef67e32e-3b97-4efd-ac43-70b1bb5eda5c_3840w.png"/>
</div>
</div>

<div className="sm:p-6 bg-center rounded-3xl ring-0 pt-5 pr-5 pb-5 pl-5 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-pen-tool h-5 w-5 text-white/80" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-xl sm:text-2xl text-white font-geist tracking-tighter" style={{}}>Logo Systems</h3>
</div>
<p className="mt-3 text-sm sm:text-base text-neutral-400 font-geist">
            Distinctive, scalable identity marks with a full system of rules and assets for consistent brand expression.
          </p>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="col-span-1 flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59097d62-5c2a-4ba8-92c0-63b8b39437b9_3840w.webp)] bg-cover border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-shapes w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(229, 229, 229)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<div className="col-span-1 flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16a9a69b-8b6f-4b95-8a21-b397f290067f_3840w.webp)] bg-cover border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-beaker h-8 w-8 text-neutral-200" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
</div>
<div className="col-span-1 flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81f9a5ac-a145-462d-ab78-951937e64ed1_1600w.webp)] bg-cover border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-badge-check w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(229, 229, 229)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>

<div className="relative sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04] border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex gap-3 items-center">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-mouse-pointer-square-dashed h-5 w-5 text-white/80" data-lucide="mouse-pointer-square-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path><path d="M5 3a2 2 0 0 0-2 2"></path><path d="M19 3a2 2 0 0 1 2 2"></path><path d="M5 21a2 2 0 0 1-2-2"></path><path d="M9 3h1"></path><path d="M9 21h2"></path><path d="M14 3h1"></path><path d="M3 9v1"></path><path d="M21 9v2"></path><path d="M3 14v1"></path></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">Static Ad Creative</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3">Some outputs that help businesses and brand owners.</p>
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

<div className="relative sm:p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.04] lg:col-span-2 border-white/10 border rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-palette h-5 w-5 text-white/80" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="sm:text-2xl text-xl text-white tracking-tighter font-geist">Artificial Intelligence
</h3>
</div>
<p className="sm:text-base text-sm text-neutral-400 font-geist mt-3">Without using AI to your unfair advantage is wasting millions on the table.</p>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="Poster graphic" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b1ab6e3-dbcb-43e1-a0d8-7e78f5e27693_800w.png"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="3D render" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad12226b-9c56-48b6-81b8-bf1ef9f0cb87_800w.webp"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="Scenic minimal" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54794e3a-303a-4fdc-969b-620128c22507_800w.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 md:mt-32 mb-20" id="contact">
<div className="flex flex-col sm:flex-row sm:items-center sm:p-6 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white font-geist">Start a project</h3>
<p className="text-sm text-neutral-400 font-geist mt-1">Tell me about your goals and plan. We'll reply within 1–2 business days.</p>
</div>
<a className="group inline-flex items-center gap-2 hover:bg-white/20 transition text-sm font-medium text-neutral-100 bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/#contact">
<svg aria-hidden="true" className="lucide lucide-mail w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist" onclick="window.location.href='/#contact'" role="button">elwincorreo33@gmail.com</span>
<svg aria-hidden="true" className="lucide lucide-arrow-up-right opacity-80 w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(245, 245, 245)', width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>
</main>

<footer className="bg-black/20 border-white/10 border-t relative backdrop-blur-sm">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="md:col-span-2">
<h3 className="text-lg font-semibold text-white tracking-tight font-geist mb-3">Elwin Beringuela Correo</h3>
<p className="text-sm text-neutral-400 font-geist max-w-md mb-4">Builder, Creator, Designer. With exceptional digital experiences with seamless technical execution. Based in imagination.</p>
<div className="flex items-center gap-3">
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-dribbble h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a className="group inline-flex items-center justify-center hover:bg-white/[0.06] transition w-9 h-9 border-white/10 border rounded-full" href="#">
<svg aria-hidden="true" className="lucide lucide-github h-4 w-4 text-neutral-300 group-hover:text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-3 font-geist">Services</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className=""><a className="hover:text-white transition font-geist" href="#services">Website Design</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#services">Funnel Design</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#services">AI UGC and Ads</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="#services">AI Image and Video</a></li>
</ul>
</div>

<div className="space-x-1">
<h4 className="text-sm font-medium text-white font-geist mb-3 pr-3 pl-1">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="" onclick="window.location.href='/#contact'" role="button"><a className="hover:text-white transition font-geist" href="/#contact">elwincorreo33@gmail.com</a></li>
<li className="" onclick="window.location.href='/#contact'" role="button"><a className="hover:text-white transition font-geist" href="/#contact">(WhatsApp)+639922654751</a></li>
<li className=""><a className="hover:text-white transition font-geist" href="https://drive.google.com/drive/folders/1NIbaYBGCocuthk64mm7N2QdPbr6U2JGS?usp=drive_link">Portfolio</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400 font-geist">© 2024 Elwin Correo. All rights reserved.</p>
<div className="flex text-xs text-neutral-400 gap-x-6 gap-y-6 items-center">
<a className="hover:text-white transition font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white transition font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
