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



  // Icons
  document.addEventListener('DOMContentLoaded', function() {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  });

  // Year
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
      

<div className="aura-background-component top-0 w-full -z-10 saturate-0 brightness-125 absolute h-[800px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>


<header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
<nav aria-label="Primary" className="flex border-white/10 border-b pb-4 items-center justify-between">

<a aria-label="Design Architecture — Home" className="inline-flex items-center gap-2" href="#">
<span className="sm:text-base text-sm font-medium tracking-tight">Design Architecture</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#work">Projects</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#services">Services</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#approach">Process</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#about">About</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#contact">Contact</a>
</div>

<button className="group inline-flex hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] w-full h-full rounded-full pt-2 pr-4 pb-2 pl-4 xl:bg-[#0b0f17]/50">
<svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>Consultation</span>
</span>
</button>
</nav>
</header>

<section className="sm:px-6 sm:mt-16 max-w-7xl mt-16 mr-auto mb-16 ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-7">
<h1 className="leading-none text-white tracking-tight">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
<span className="tracking-tighter">Architectural</span>
<span className="block"></span>
<span className="tracking-tighter">Excellence</span>
</span>
</h1>
<p className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-base text-white/70 tracking-tight mt-4">
        Transforming visions into reality through thoughtful design, sustainable practices, and masterful execution.
      </p>
<div className="flex flex-col sm:flex-row gap-3 mt-6 gap-x-3 gap-y-3">
<button className="group inline-flex hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] w-full h-full rounded-full pt-2 pr-4 pb-2 pl-4 xl:bg-[#0b0f17]/50">
<svg className="lucide lucide-arrow-right w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>View our portfolio</span>
</span>
</button>
<a aria-label="Schedule consultation" className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Schedule consultation</span>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-home w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<div className="">
<p className="text-sm font-medium tracking-tight">Residential Design</p>
<p className="text-xs text-white/60 mt-0.5">Custom homes &amp; renovations</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-building-2 w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<div>
<p className="text-sm font-medium tracking-tight">Commercial Spaces</p>
<p className="text-xs text-white/60 mt-0.5">Office &amp; retail design</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-leaf w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<div className="">
<p className="text-sm font-medium tracking-tight">Sustainable Design</p>
<p className="text-xs text-white/60 mt-0.5">Eco-friendly solutions</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="aspect-[4/5] sm:aspect-[5/6] overflow-hidden bg-white/5 border-white/10 border rounded-3xl relative shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<img alt="Modern architecture design" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/395e234d-5c8a-4b0b-96be-c8eab9f4fc1d_1600w.webp"/>
<div className="bg-gradient-to-t from-black/40 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">200+</div>
</div>
<p className="text-[11px] text-white/70">projects</p>
</div>
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">15yr</div>
</div>
<p className="text-[11px] text-white/70">experience</p>
</div>
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">12</div>
</div>
<p className="text-[11px] text-white/70">awards</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl border-white/10 border-t mt-20 mr-auto ml-auto pt-10 pr-4 pl-4 sm:px-6 sm:mt-16" id="work">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight">Featured Projects</h2>
<a aria-label="View all projects" className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white" href="#">
<span>View all</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Modern residential home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d8e09a9-3cbb-4d2b-8fbf-7c25b63da348_800w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-black/30 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span>Residential — Modern Villa</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Lakeside Modern Villa</h3>
<p className="text-sm text-white/70 mt-1">Contemporary design with panoramic lake views and sustainable features.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Commercial office building" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99ba349f-6119-4d26-b759-12862567fbc0_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span>Commercial — Office Tower</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Downtown Office Complex</h3>
<p className="text-sm text-white/70 mt-1">12-story mixed-use development with retail and office spaces.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Luxury residence" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Residential — Estate</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Hillside Estate Residence</h3>
<p className="text-sm text-white/70 mt-1">Luxury estate with infinity pool and panoramic valley views.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Modern office interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span>Commercial — Tech Campus</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Innovation Hub Campus</h3>
<p className="text-sm text-white/70 mt-1">Collaborative workspace design for technology startup incubator.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Contemporary home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4008e7b8-e0fc-4429-bfcc-c3ada0d74214_800w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Residential — Urban Living</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">City Center Townhomes</h3>
<p className="text-sm text-white/70 mt-1">Contemporary townhome development with rooftop gardens.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Retail space design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/01496bcc-60f3-40ac-90c5-edc485e939a6_800w.jpg"/>
<div className="bg-gradient-to-t from-black/30 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span>Commercial — Retail</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Boutique Shopping Center</h3>
<p className="text-sm text-white/70 mt-1">Modern retail complex with integrated dining and entertainment.</p>
</div>
</article>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 lg:pt-10 max-w-7xl border-white/10 border-t mt-20 mr-auto ml-auto pt-10 pr-4 pb-20 pl-4 relative" id="services">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<p className="text-sm font-medium text-white/50">What we offer</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-white tracking-tight">Architectural Services</h2>
<p className="sm:text-lg max-w-[85ch] text-base text-white/70 mt-4">Comprehensive architectural solutions from initial concept to construction completion.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-white/[0.03] border-white/10 border rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
<div className="relative overflow-hidden">
<div className="aspect-video w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
<svg className="text-white/30 transition-colors duration-300 group-hover:text-white/50" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/50"></div>
<div className="bg-cover absolute top-0 right-0 bottom-0 left-0 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/25fd86d8-a0d9-412f-8034-82a3dfc655f4_1600w.jpg)] bg-center"></div>
</div>
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:text-blue-200">SIGNATURE SERVICE</span>
<span className="text-xs text-white/60 transition-colors duration-300 group-hover:text-white/80">Most requested</span>
</div>
<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-100">Custom Residential Design</h3>
<p className="mt-2 text-sm sm:text-base text-white/70 transition-colors duration-300 group-hover:text-white/80">Complete architectural services for custom homes, from initial consultation through construction. We create timeless designs that reflect your lifestyle, optimize space, and integrate seamlessly with the environment.</p>
<div className="mt-5 flex flex-wrap items-center gap-3 transform transition-all duration-300 group-hover:translate-x-1">
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-400/30 text-sm font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur" href="#contact">
<svg className="h-4 w-4 transition-transform duration-300 hover:rotate-12" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
            View portfolio
          </a>
<a className="inline-flex items-center gap-2 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
<svg className="h-4 w-4 transition-transform duration-300 hover:rotate-12" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
            Start your project
          </a>
</div>
</div>
</div>

<div className="group sm:p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:shadow-xl border-white/10 border rounded-3xl mt-0 pt-6 pr-6 pb-8 pl-8">
<div className="sm:p-6 md:p-8 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-purple-200">
            Commercial Design
          </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-400/30 group-hover:text-purple-200">BUSINESS</span>
</div>
<p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/80">Office buildings, retail spaces, and mixed-use developments designed for functionality and impact.</p>
<div className="overflow-hidden transition-all duration-300 group-hover:border-white/20 aspect-video flex ring-slate-50/10 ring-1 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2a662871-accd-4114-b384-662748965262_800w.jpg)] bg-cover border-0 rounded-lg mt-4 items-center justify-center"></div>
</div>
</div>

<div className="group sm:p-8 bg-white/[0.03] border-white/10 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-green-200">
            Renovations
          </h3>
<span className="inline-flex items-center text-[11px] font-medium text-slate-50 bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 group-hover:bg-green-500/20 group-hover:border-green-400/30 group-hover:text-green-200">REMODEL</span>
</div>
<p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/80">Transform existing spaces with thoughtful redesigns that maximize potential and value.</p>
<div className="overflow-hidden transition-all duration-300 group-hover:border-white/20 aspect-video flex ring-slate-50/10 ring-1 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4bcd74f-37c9-4cbe-b95d-22b26926781a_800w.jpg)] bg-cover border-0 rounded-lg mt-4 items-center justify-center"></div>
</div>
</div>

<div className="group sm:p-8 bg-white/[0.03] border-white/10 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-amber-200">
          Interior Architecture
          <span className="ml-2 inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 transition-all duration-300 group-hover:bg-amber-500/25 group-hover:border-amber-400/50">SPACES</span>
</h3>
<p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/80">Spatial planning and interior design that harmonizes aesthetics with functionality.</p>
<div className="overflow-hidden transition-all duration-300 group-hover:border-white/20 aspect-video flex bg-cover border-0 ring-slate-50/10 ring-1 rounded-lg mt-4 items-center justify-center bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/deb7ce75-2918-4768-9f74-f60fe415b09c_800w.jpg)]"></div>
</div>
</div>

<div className="group sm:p-8 bg-white/[0.03] border-white/10 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-rose-200">
          Sustainable Design
        </h3>
<p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/80">Eco-friendly solutions incorporating energy efficiency and environmentally conscious materials.</p>
<div className="overflow-hidden transition-all duration-300 group-hover:border-white/20 aspect-video flex ring-slate-50/10 ring-1 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a906012b-00b9-4610-82f7-f1a6ef3453d0_800w.jpg)] bg-cover border-0 rounded-lg mt-4 items-center justify-center"></div>
</div>
</div>

<div className="group sm:p-8 bg-white/[0.03] border-white/10 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/[0.05] hover:shadow-xl">
<div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
<h3 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 transition-colors duration-300 group-hover:text-cyan-200">
          Consultation
        </h3>
<p className="mt-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-white/80">Expert guidance on feasibility studies, zoning, permits, and project planning.</p>
<div className="overflow-hidden transition-all duration-300 group-hover:border-white/20 aspect-video flex ring-slate-50/10 ring-1 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/933eba1d-d9be-4654-8a03-99b0d1e2e98a_800w.jpg)] bg-cover border-0 rounded-lg mt-4 items-center justify-center"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4 sm:px-6 sm:mt-0" id="approach">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight">Our Design Process</h2>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="space-y-6">

<article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/70">
            01
          </div>
<div className="flex-1">
<h3 className="text-base font-semibold tracking-tight">Initial Consultation</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">We meet to understand your vision, needs, budget, and timeline. Site analysis and feasibility assessment included.</p>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/70">
            02
          </div>
<div className="flex-1">
<h3 className="text-base font-semibold tracking-tight">Schematic Design</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Develop preliminary drawings, 3D visualizations, and explore design concepts that align with your vision.</p>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/70">
            03
          </div>
<div className="flex-1">
<h3 className="text-base font-semibold tracking-tight">Design Development</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Refine details, select materials, finalize specifications, and prepare comprehensive construction documents.</p>
</div>
</div>
</article>

<article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/70">
            04
          </div>
<div className="flex-1">
<h3 className="text-base font-semibold tracking-tight">Construction Administration</h3>
<p className="text-sm text-white/70 mt-2 leading-relaxed">Oversee construction, conduct site visits, and ensure your project is built according to design intent.</p>
</div>
</div>
</article>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight mb-6">Design Philosophy</h3>
<div className="space-y-5">
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div>
<p className="text-sm font-medium tracking-tight">Context-Driven Design</p>
<p className="text-xs text-white/60 mt-1">Every project responds to its unique site, climate, and surroundings.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div>
<p className="text-sm font-medium tracking-tight">Timeless Aesthetics</p>
<p className="text-xs text-white/60 mt-1">We create designs that age gracefully and remain relevant for decades.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div>
<p className="text-sm font-medium tracking-tight">Functional Beauty</p>
<p className="text-xs text-white/60 mt-1">Form follows function, but beauty is never compromised.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div>
<p className="text-sm font-medium tracking-tight">Sustainable Practices</p>
<p className="text-xs text-white/60 mt-1">Environmental responsibility is integrated into every decision.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<div>
<p className="text-sm font-medium tracking-tight">Collaborative Approach</p>
<p className="text-xs text-white/60 mt-1">We work closely with clients, engineers, and builders as a unified team.</p>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-sm text-white/70 leading-relaxed">"Great architecture doesn't just look good—it enhances the way people live, work, and connect with their environment."</p>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
<div className="text-2xl font-semibold tracking-tight">15+</div>
<p className="text-xs text-white/60 mt-1">Years experience</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
<div className="text-2xl font-semibold tracking-tight">200+</div>
<p className="text-xs text-white/60 mt-1">Projects completed</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
<div className="text-2xl font-semibold tracking-tight">12</div>
<p className="text-xs text-white/60 mt-1">Design awards</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
<div className="text-2xl font-semibold tracking-tight">98%</div>
<p className="text-xs text-white/60 mt-1">Client satisfaction</p>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-16 mx-auto px-4" id="about">
<div className="relative overflow-hidden sm:p-8 text-white text-center bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]"></div>
</div>
<div className="relative">
<h2 className="text-2xl sm:text-3xl tracking-tight">Award-Winning Designs</h2>
<p className="text-white/70 mt-2">Recognized for excellence in architectural innovation</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 mb-8 items-center">
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center flex-col">
<span className="text-lg font-semibold tracking-tighter">AIA Award</span>
<span className="text-xs text-white/50">2023</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center flex-col">
<span className="text-lg font-semibold tracking-tighter">Design Excellence</span>
<span className="text-xs text-white/50">2022</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center flex-col">
<span className="text-lg font-medium tracking-tighter">Green Building</span>
<span className="text-xs text-white/50">2023</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center flex-col">
<span className="text-lg font-normal tracking-tighter">Arch Digest</span>
<span className="text-xs text-white/50">Featured</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mt-16 mx-auto px-4" id="contact">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
<div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Ready to start your project?</h3>
<p className="text-white/70 text-sm mt-1">Let's discuss how we can bring your vision to life.</p>
</div>
<form className="w-full sm:w-auto flex gap-2">
<input className="w-full sm:w-80 rounded-xl px-3.5 py-2.5 text-sm bg-black/30 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@email.com" type="email"/>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Get in touch</span>
</button>
</form>
</div>
</div>
</section>

<footer className="sm:px-6 max-w-7xl mt-16 mr-auto mb-10 ml-auto pr-4 pl-4">
<div className="border-t border-white/10 pt-6 flex items-center justify-between text-sm text-white/60">
<p>© <span id="year">2025</span> Design Architecture. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
