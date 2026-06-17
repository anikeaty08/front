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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons();
        }

        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        if (toggle && menu) {
          toggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>
</div>

<header className="fixed inset-x-0 top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
<div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.45)]">
<div className="flex items-center gap-2">
<svg className="w-20 h-8 text-white" fill="none" height="32" strokeWidth="2" viewbox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8834 4.66666C17.4168 4.66666 16.2168 5.86666 16.2168 7.33332V11.56L18.8834 14.2267L21.5501 11.56V7.33332C21.5501 6.59999 21.2568 5.93332 20.7634 5.43999C20.2834 4.95999 19.6168 4.66666 18.8834 4.66666Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M16.2168 24.44V28.6666C16.2168 30.1333 17.4168 31.3333 18.8834 31.3333C20.3501 31.3333 21.5501 30.1333 21.5501 28.6666V24.44L18.8834 21.7733L16.2168 24.44Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M12.4434 15.3333H8.21675C6.75008 15.3333 5.55008 16.5333 5.55008 18C5.55008 19.4667 6.75008 20.6667 8.21675 20.6667H12.4434L15.1101 18L12.4434 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M29.5502 15.3333H25.3235L22.6569 18L25.3235 20.6667H29.5502C30.2835 20.6667 30.9502 20.3733 31.4302 19.88C31.9235 19.4 32.2169 18.7333 32.2169 18C32.2169 16.5333 31.0169 15.3333 29.5502 15.3333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M28.3101 23.6533L22.6568 18L18.8834 21.7733L24.5368 27.4267C25.5768 28.4667 27.2701 28.4667 28.3101 27.4267C29.3501 26.3867 29.3501 24.6933 28.3101 23.6533Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M13.2301 8.57329C12.7101 8.05329 12.0301 7.78662 11.3367 7.78662C10.6567 7.78662 9.97673 8.05329 9.45673 8.57329C8.41673 9.61329 8.41673 11.3066 9.45673 12.3466L15.1101 18L18.8834 14.2266L13.2301 8.57329Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path d="M9.45673 27.4266C8.41673 26.3866 8.41673 24.6933 9.45673 23.6533L24.5367 8.5733C25.5767 7.5333 27.2701 7.5333 28.3101 8.5733C29.3501 9.6133 29.3501 11.3066 28.3101 12.3466L13.2301 27.4266C12.1901 28.4666 10.4967 28.4666 9.45673 27.4266Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
</svg>
<span className="text-sm font-medium tracking-tight text-white">NovaFlow Portfolio</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/80">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex gap-x-3 gap-y-3 items-center">
<a className="text-xs font-medium text-white/80 hover:text-white transition-colors" href="#projects">View Work</a>

<button className="inline-flex overflow-hidden group text-xs font-semibold text-white tracking-tight rounded-full pt-2 pr-4 pb-2 pl-4 relative items-center justify-center" style={{background: 'radial-gradient(80% 200% at 0% 0%, rgba(56, 189, 248, 0.7) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%), radial-gradient(80% 200% at 100% 100%, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0.1) 40%, transparent 70%), linear-gradient(135deg, #4f46e5, #6366f1, #ec4899)', boxShadow: '0 18px 45px rgba(15,23,42,0.75)'}} type="button">
<span className="group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at 0% 0%, rgba(248,250,252,0.25) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(15,23,42,0.55) 0, transparent 55%)'}}></span>
<span className="relative flex items-center gap-1.5">
<span className="">Let’s Collaborate</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur" id="mobile-menu-toggle">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden mt-3 hidden" id="mobile-menu">
<div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl px-4 py-3 text-xs font-medium text-white/80 space-y-2" style={{background: 'rgba(15,23,42,0.85)'}}>
<a className="block py-1 hover:text-white transition-colors" href="#about">About</a>
<a className="block py-1 hover:text-white transition-colors" href="#projects">Projects</a>
<a className="block py-1 hover:text-white transition-colors" href="#experience">Experience</a>
<a className="block py-1 hover:text-white transition-colors" href="#contact">Contact</a>
<button className="mt-2 w-full relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2 text-xs font-semibold tracking-tight text-white group" style={{background: 'radial-gradient(80% 200% at 0% 0%, rgba(56, 189, 248, 0.7) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%), radial-gradient(80% 200% at 100% 100%, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0.1) 40%, transparent 70%), linear-gradient(135deg, #4f46e5, #6366f1, #ec4899)', boxShadow: '0 14px 35px rgba(15,23,42,0.7)'}} type="button">
<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 0% 0%, rgba(248,250,252,0.25) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(15,23,42,0.55) 0, transparent 55%)'}}></span>
<span className="relative flex items-center justify-center gap-1.5">
<span>Let’s Collaborate</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative mb-24 pt-32 sm:pt-36" id="about">
<div className="max-w-7xl lg:px-8 mx-auto px-6">
<div className="mx-auto max-w-3xl text-center pt-6 sm:pt-10">
<span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-blue-600/20 border-white/20 rounded-full mx-auto mb-4 px-3 py-1">
            Product Designer &amp; Frontend Engineer
          </span>
<h1 className="text-4xl sm:text-6xl md:text-7xl text-white/80 tracking-tight">
            NovaFlow Studio—
            <span className="bg-clip-text text-slate-50 bg-gradient-to-r from-indigo-500 via-sky-400 to-pink-500">Portfolio</span>
</h1>
<p className="mt-5 text-base sm:text-lg font-normal text-white/70">
            I craft high-performance, aesthetically refined digital products—from concept to polished interfaces. Explore selected work in product design, interaction, and engineering.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">

<button className="inline-flex-base font-semibold text-white tracking-tight rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" onclick="document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'});" style={{background: 'radial-gradient(80% 200% at 0% 0%, rgba(56, 189, 248, 0.7) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%), radial-gradient(80% 200% at 100% 100%, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0.1) 40%, transparent 70%), linear-gradient(135deg, #4f46e5, #6366f1, #ec4899)', boxShadow: '0 18px 45px rgba(15,23,42,0.75)', minHeight: '56px', minWidth: '160px'}} type="button">
<span className="group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at 0% 0%, rgba(248,250,252,0.25) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(15,23,42,0.55) 0, transparent 55%)'}}></span>
<span className="relative flex items-center gap-2">
<span className="">View Selected Work</span>
<svg className="transition-transform-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<button className="group relative overflow-hidden cursor-pointer leading-none hover:shadow-2xl transition-all duration-300 text-white bg-white/10 border-white/10 border rounded-full shadow-sm backdrop-blur" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});" style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '16px 32px', minHeight: '56px', minWidth: '160px'}}>
<span className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
<div className="flex relative overflow-hidden font-semibold items-center justify-center" style={{gap: '8px'}}>
<div className="flex items-center justify-center z-10">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
<span className="inline-block transition-colors duration-300 relative z-10 group-hover:text-white font-semibold text-white" style={{fontSize: '16px'}}>
                  Request a Call
                </span>
</div>
</button>
</div>
<div className="flex flex-col sm:flex-row sm:justify-center mt-8 gap-x-5 gap-y-5 items-center">
<div className="flex -space-x-2">
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg"/>
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg"/>
<img alt="" className="w-9 h-9 object-cover ring-white ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe82ca0-ec91-4df3-b0fb-d97b643f2178_320w.jpg"/>
</div>
<div className="flex gap-2 text-sm font-medium text-white/70 items-center">
<svg className="lucide lucide-shield-check w-4 h-4 text-white" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Trusted by startups, studios, and founders worldwide
            </div>
</div>
</div>
</div>
</section>

<section className="animate-[fadeInUp_1s_ease-out_1.2s_forwards] relative" id="projects" style={{transform: 'translateY(0px)'}}>
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Selected Projects</h2>
<p className="text-xs text-slate-500 max-w-xs">A snapshot of product design, data visualization, and collaboration
        tools I’ve shipped recently.</p>
</div>
<div className="grid gap-12 lg:grid-cols-2 gap-x-12 gap-y-12">

<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac30327e-f74e-4f00-871e-19b69c6e0feb_1600w.jpg)] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 p-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Real‑Time Market Analytics</h3>
<p className="mt-1 text-xs text-neutral-400">Fintech dashboard · Product design &amp; frontend build</p>
</div>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                    Live trading UI
                  </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8">

</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Role</h4>
<p className="mt-2 text-sm text-neutral-400">Led product design, prototyped interactions, and implemented
                  the frontend in React.</p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Impact</h4>
<p className="mt-2 text-sm text-neutral-400">Improved trader execution speed by 23% and reduced
                  time‑to‑insight by 40%.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
              View case study
              <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
</div>

<div className="relative bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/347ae071-e53a-4247-a97a-e708e4ae14a7_1600w.jpg)] bg-cover rounded-[36px] p-5">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 p-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-white">Team Collaboration Suite</h3>
<p className="mt-1 text-xs text-neutral-400">SaaS workspace · Design systems &amp; UX flows</p>
</div>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                    Collaboration OS
                  </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8">
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Role</h4>
<p className="mt-2 text-sm text-neutral-400">Defined information architecture, built a component library,
                  and implemented key flows.</p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Impact</h4>
<p className="mt-2 text-sm text-neutral-400">Cut onboarding time by 35% and increased weekly active teams by
                  19%.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
              View product tour
              <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="relative z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards]" id="experience" style={{transform: 'translateY(0px)'}}>
<div className="max-w-7xl mx-auto pt-8 px-6 pb-16">
<div className="grid gap-12 lg:grid-cols-2">
<div>
<h3 className="sm:text-5xl text-4xl font-semibold tracking-tight text-slate-900">Experience &amp; Skills</h3>
<p className="mt-4 text-slate-700 text-base">Blending product thinking, interaction design, and modern frontend engineering.</p>
<div className="mt-8 border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Core Skills</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div>
<h5 className="font-medium text-slate-900">Product Design</h5>
<p className="text-sm text-slate-600 mt-1">End‑to‑end UX, information architecture, prototyping, and usability testing.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18v4H3z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M5 7v7a7 7 0 0 0 14 0V7"></path>
</svg>
</div>
<div>
<h5 className="font-medium text-slate-900">Design Systems</h5>
<p className="text-sm text-slate-600 mt-1">Token‑driven systems, component libraries, and multi‑brand theming.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4h18"></path><path d="M4 8h16v11H4z"></path><path d="M10 12h4"></path>
</svg>
</div>
<div>
<h5 className="font-medium text-slate-900">Frontend Engineering</h5>
<p className="text-sm text-slate-600 mt-1">React, TypeScript, modern CSS, performance, and design‑to‑code workflows.</p>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="border-t border-neutral-200 pt-6 mt-2">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-slate-900">30+</span>
<span className="text-sm text-slate-600">products shipped</span>
</div>
<p className="text-xs text-slate-600 mt-1">Across SaaS, fintech, and devtools.</p>
</div>
</div>
<div className="flex gap-3 items-center hover:scale-105 transition-transform duration-200 cursor-pointer">
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-slate-900">10 yrs</span>
</div>
<p className="text-xs text-slate-600 mt-1">Design &amp; engineering experience.</p>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 mt-8">
<button className="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-base text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl py-2.5 px-5 items-center justify-center" onclick="document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});" role="button">
                Download Resume
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-zinc-900/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f02f2d97-2f6e-4565-af29-5029e146b6ad_3840w.jpg)] bg-cover border-zinc-800 rounded-[36px] mt-10 mx-8 p-6" id="contact">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-300 backdrop-blur-xl">
<svg className="h-4 w-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/200/svg">
<path d="M21 10V6a2 2 0 0 0-2-2h-3"></path><path d="M3 10V6a2 2 0 0 1 2-2h3"></path><path d="M7 22h10"></path><path d="M12 2v20"></path>
</svg>
<span className="text-xs font-normal font-geist">Availability</span>
</div>
<h2 className="mt-4 text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] font-geist font-medium tracking-tighter text-white">Let’s build something</h2>
<p className="mt-2 text-sm sm:text-base text-zinc-400 font-geist">Tell me about your product, team, and timelines. I’ll get back within 24 hours.</p>
</div>
<div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
<article className="relative overflow-hidden sm:p-6 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl p-5 backdrop-blur-xl lg:col-span-2">
<form className="space-y-4">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1 font-geist">Name</label>
<input className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1 font-geist">Email</label>
<input className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1 font-geist">Project Type</label>
<input className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="e.g. SaaS dashboard, mobile app, design system" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1 font-geist">Message</label>
<textarea className="w-full rounded-lg bg-zinc-900/60 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="Share goals, scope, and timelines." rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-4 pt-2">
<p className="text-[11px] text-zinc-500 font-geist">I’m typically available for 1–2 new projects per quarter.</p>
<button className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold tracking-tight text-white group" style={{background: 'radial-gradient(80% 200% at 0% 0%, rgba(56, 189, 248, 0.7) 0%, rgba(56, 189, 248, 0.1) 40%, transparent 70%), radial-gradient(80% 200% at 100% 100%, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0.1) 40%, transparent 70%), linear-gradient(135deg, #4f46e5, #6366f1, #ec4899)', boxShadow: '0 14px 40px rgba(15,23,42,0.7)'}} type="submit">
<span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 0% 0%, rgba(248,250,252,0.25) 0, transparent 55%), radial-gradient(circle at 100% 100%, rgba(15,23,42,0.55) 0, transparent 55%)'}}></span>
<span className="relative flex items-center gap-1.5">
<span>Send Message</span>
<svg className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</form>
</article>
<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 backdrop-blur-xl p-5 sm:p-6">
<h3 className="text-lg font-geist font-medium tracking-tight text-white">Quick Details</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-300 font-geist">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18"></path><path d="M8 3v2"></path><path d="M16 3v2"></path><rect height="16" rx="2" width="18" x="3" y="5"></rect></svg>
</span>
<span>Based in EU, working remotely with teams worldwide.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4Z"></path></svg>
</span>
<span>Specializing in SaaS, devtools, and data products.</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v4H3z"></path><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M5 7v7a7 7 0 0 0 14 0V7"></path></svg>
</span>
<span>Open to consulting, full‑stack collaborations, and design leadership support.</span>
</li>
</ul>
</article>
</div>
<div className="flex flex-col text-center mt-6 items-center">
<p className="text-xs text-zinc-500 font-geist">Prefer email? Reach out at <a className="underline decoration-zinc-700 underline-offset-4 text-zinc-300 hover:text-white font-geist" href="mailto:hello@novaflow.studio">hello@novaflow.studio</a></p>
</div>
</section>

<footer className="relative z-10 animate-[fadeInUp_1s_ease-out_1.6s_forwards] p-2" style={{transform: 'translateY(50px)'}}>
<div className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-neutral-950 to-neutral-800 border-white/10 rounded-xl border-t">
<div className="mx-auto max-w-7xl px-6 py-16">

</div>
</div>
</footer>



    </>
  );
}
