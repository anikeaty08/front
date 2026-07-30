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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (btn && nav) {
          btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
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
      
<header className="px-4 sm:px-6 lg:px-8 py-4">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between gap-4">
<a className="inline-flex items-center gap-2" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<svg className="lucide lucide-sparkles h-4 w-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Orbitas</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">Models <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></a>
<a className="text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">Solutions <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></a>
<a className="text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">Deploy <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></a>
<a className="text-slate-700 hover:text-slate-900" href="#">Pricing</a>
<a className="text-slate-700 hover:text-slate-900" href="#">Docs</a>
</nav>
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="hidden md:inline-flex items-center gap-2 ring-1 ring-black/5 hover:bg-black text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
              Contact
            </a>
</div>
</div>
<div className="md:hidden hidden mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" id="mobileNav">
<div className="grid gap-2 text-sm">
<a className="px-2 py-2 rounded-lg hover:bg-slate-50 inline-flex items-center justify-between" href="#">Models <svg className="lucide lucide-chevrons-down h-4 w-4" data-lucide="chevrons-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg></a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50 inline-flex items-center justify-between" href="#">Solutions <svg className="lucide lucide-chevrons-down h-4 w-4" data-lucide="chevrons-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg></a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#">Deploy</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#">Pricing</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#">Docs</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-900 hover:text-white inline-flex items-center gap-2 bg-slate-900 text-white mt-2" href="#">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Contact
            </a>
</div>
</div>
</div>
</header>
<main className="px-4 sm:px-6 lg:px-8 pb-16">
<section className="max-w-7xl sm:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 shadow-sm">
<span className="h-2 w-2 rounded-full bg-violet-500"></span>
              Start something new
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Unlock Creative Potential with Orbitas AI
            </h1>
<p className="mt-4 text-base leading-7 text-slate-600">
              We build open models and tools that empower product teams to explore, iterate, and deploy safely—from concept to production.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="button shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
    Sign Up
    <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50" href="#">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                7-day free trial
              </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-slate-500">Trusted teams</span>
<div className="flex items-center -space-x-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/90 text-white ring-2 ring-white">
<svg className="lucide lucide-atom h-4 w-4" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white ring-2 ring-white">
<svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white ring-2 ring-white">
<svg className="lucide lucide-infinity h-4 w-4" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white ring-2 ring-white">
<svg className="lucide lucide-aperture h-4 w-4" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-600 text-white ring-2 ring-white">
<svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500">Rated</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-amber-400 stroke-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400 stroke-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400 stroke-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400 stroke-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-amber-400 stroke-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-slate-600">5/5</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="relative">
<div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl"></div>
<div className="relative grid grid-cols-2 gap-4 rounded-[24px] bg-slate-100/60 p-4">
<div className="grid gap-4">
<img alt="Futuristic portrait" className="h-44 w-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/463eb1ac-5a53-48a3-9437-b6470628bc95_800w.jpg" />
<img alt="Robotic tiger render" className="h-40 w-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/96e876c3-560e-4f7c-8a12-e06e27479ff8_800w.jpg" />
<img alt="Robot detail" className="h-48 w-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7590127a-a797-4b57-9c7e-c81c7cc91c01_800w.jpg" />
</div>
<div className="grid gap-4">
<img alt="Mechanical bird render" className="h-44 w-full object-cover rounded-2xl" src="/assets/e2d3700a-0674-43e6-9790-7dff74b061f3_800w.jpg" />
<img alt="Mountain dusk scene" className="h-52 w-full object-cover rounded-2xl" src="/assets/49da264e-faeb-41f9-b488-bcb9661f7f04_800w.jpg" />
<img alt="Minimal robot head" className="h-36 w-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c013601-3632-4852-b1b5-d9bcb25507ee_800w.jpg" />
</div>
</div>
</div>
</div>
</div>
</section><section className="max-w-7xl sm:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mt-12 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span>
      Features
    </div>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        Build faster with everything you need
      </h2>
<p className="text-sm text-slate-600 sm:max-w-md">
        Opinionated defaults with powerful APIs. Secure by design, ready for production.
      </p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
<svg className="lucide lucide-wand-2 h-5 w-5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<span className="text-xs text-slate-500">v1.0</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Generative Pipelines</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Chain models, prompts, and tools into reusable flows with versioning and rollback.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
<svg className="lucide lucide-boxes h-5 w-5" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Modular Components</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Swap models and data adapters without refactoring your application logic.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Real-time Observability</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Streaming logs, traces, and metrics so you can tune latency and quality.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Safety & Guardrails</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Input/output filters, PII redaction, and policy enforcement baked in.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
<svg className="lucide lucide-code-2 h-5 w-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">API & SDKs</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Type-safe clients for JavaScript, Python, and Go. Use REST or WebSockets.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600 text-white">
<svg className="h-5 w-5" data-lucide="servers" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Scale Anywhere</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">Run on our managed cloud, your VPC, or on-prem with autoscaling workers.</p>
</div>
</div>
</section><section className="max-w-7xl sm:p-10 sm:mt-12 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-slate-900"></span>
      Pricing
    </div>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent plans</h2>
<p className="text-sm text-slate-600 sm:max-w-md">Start free. Upgrade when you’re ready. Cancel anytime.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Starter</h3>
<span className="text-xs text-slate-500">For trying things out</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$0</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2K requests/day</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Community support</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 workspace</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50" href="#">
        Get started
      </a>
</div>

<div className="rounded-2xl border-2 border-indigo-500/60 bg-gradient-to-b from-indigo-50/40 to-white p-6 shadow-sm flex flex-col relative">
<span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-indigo-600 text-white text-[10px] font-medium px-2 py-1 shadow-sm">Most Popular</span>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Pro</h3>
<span className="text-xs text-slate-500">For growing teams</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$39</span>
<span className="text-sm text-slate-500">/user/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 250K requests/month</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Role-based access</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Observability suite</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium text-white bg-slate-900 px-4 py-2 ring-1 ring-black/5 hover:bg-black" href="#">
        Upgrade <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Enterprise</h3>
<span className="text-xs text-slate-500">For scale & compliance</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Custom</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated VPC / on‑prem</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO/SAML, SCIM</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom SLAs & support</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Governance & audit logs</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50" href="#">
        Talk to sales
      </a>
</div>
</div>
</section><section className="max-w-7xl sm:p-10 bg-white rounded-3xl mx-auto mt-8 sm:mt-12 shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
      FAQ
    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Answers to common questions</h2>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">How does the free trial work?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Create an account and you’ll receive usage credits and access to all core features for 7 days. No card required.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Can I self-host Orbitas?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">Yes. Our Enterprise plan supports VPC and on‑prem deployments with advanced governance and SSO/SAML.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Which models are supported?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">We support leading open and commercial models for text, images, and audio. Swap models without code changes.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Do you offer academic or startup discounts?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">We do. Contact us and we’ll tailor a plan that fits your team’s needs and budget.</p>
</details>
</div>
</section><section className="relative max-w-7xl mx-auto mt-8 sm:mt-12 overflow-hidden rounded-3xl">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="/assets/12695d49-b1f6-4e12-afcb-9dab9c700176_1600w.jpg" />
<div className="absolute inset-0 bg-slate-900/70"></div>
<div className="relative p-6 sm:p-10">
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Create with Orbitas today</h2>
<p className="mt-3 text-sm sm:text-base text-white/80">Spin up your first pipeline in minutes. Ship with confidence using built‑in safety and observability.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100" href="#">
          Create account <svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20" href="#">
          Talk to sales <svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</a>
</div>
</div>
</section>
</main>
<footer className="px-4 sm:px-6 lg:px-8 pb-10">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p className="">© <span id="year">2025</span> Orbitas Labs. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700 inline-flex items-center gap-1" href="#"><svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Privacy</a>
<a className="hover:text-slate-700 inline-flex items-center gap-1" href="#"><svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Terms</a>
</div>
</div>
</div>

</footer>



    </>
  );
}
