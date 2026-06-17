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
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e176e0f-b606-41d5-83b8-9fbc9588a6b6_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="relative z-10">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-full backdrop-blur" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="text-white/90 w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="window-frame-bold-duotone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c4.714 0 7.071 0 8.535 1.464c1.08 1.08 1.364 2.647 1.439 5.286L22 9.5H2.026v-.75c.075-2.64.358-4.205 1.438-5.286C4.93 2 7.286 2 12 2" fill="#ffffff" opacity=".5"></path><path d="M13 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="#ffffff"></path><path d="M2 12c0 4.714 0 7.071 1.464 8.535c1.01 1.01 2.446 1.324 4.786 1.421L9 22V9.5H2.026l-.023.75Q2 11.066 2 12" fill="#ffffff" opacity=".7"></path><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-2.316 0-3-.008V9.5h13l-.003.75Q22 11.066 22 12" fill="#ffffff"></path></svg>
</span>
<span className="text-lg tracking-tight font-semibold font-sans">Pulseframe</span>
</a>
<div className="hidden items-center gap-8 text-sm md:flex">
<a className="text-white/80 hover:text-white transition-colors font-sans" href="#">Home</a>
<a className="text-white/70 hover:text-white transition-colors font-sans" href="#">Features</a>
<a className="text-white/70 hover:text-white transition-colors font-sans" href="#">Pricing</a>
<a className="text-white/70 hover:text-white transition-colors font-sans" href="#">Docs</a>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-sans">Log in</button>
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-medium text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full px-4 py-2 text-sm items-center justify-center">
<span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Get started</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">Get started</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button>
</div>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-6 pb-24 md:px-8 md:pt-14 lg:pt-20">

<div className="flex gap-3 mt-32 mb-6 gap-x-3 gap-y-3 items-center">
<div className="flex -space-x-2">
<img alt="Futuristic Techwear Figure with Neon Halo" className="h-8 w-8 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86071fe2-c5b4-4d6d-8cc8-87a7cc2edda1_320w.jpg"/>
<img alt="3D Teen Wearing VR Headset on Cyan Background" className="h-8 w-8 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a97544a-e641-4759-a1a7-7dae56e72f14_320w.webp"/>
<img alt="Studio Portrait of Stylish Woman in Black Blazer" className="h-8 w-8 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_320w.jpg"/>
<img alt="Portrait with vivid fuchsia hair and freckles" className="h-8 w-8 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d8b9b639-b54e-46f3-a9e7-d0748a704d73_320w.jpg"/>
</div>
<p className="text-sm text-white/70 font-sans"><span className="font-medium text-white/90 font-sans">48+</span> experts on call to guide you</p>
</div>

<h1 className="leading-[1.05] sm:text-5xl lg:text-8xl text-4xl font-medium tracking-tighter font-manrope pt-0 pb-4" style={{maskImage: 'linear-gradient(140deg, transparent, black 15%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 15%, black 70%, transparent)'}}>
      Orchestrate Work<br className="hidden sm:block"/> at Lightspeed
    </h1>
<p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70 font-sans">
      Pulseframe equips modern teams with forward‑thinking tools to automate the mundane, align stakeholders, and keep momentum high—without the chaos.
    </p>

<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex hover:-translate-y-0.5 transition will-change-transform bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFA500] rounded-full px-[2px] py-[2px] relative shadow-[0_0_48px_rgba(255,107,53,0.45)] items-center w-full sm:w-auto">
<span className="inline-flex items-center justify-between gap-3 leading-[1] text-sm font-medium text-white tracking-tight z-0 rounded-full pt-3 pr-5 pb-3 pl-5 relative w-full" style={{background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 50%, #FFA500 100%)', boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0,0,0,0.25)'}}>
<span className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 120% at 50% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0) 60%)', mixBlendMode: 'screen'}}></span>
<span className="z-10 relative">Start free</span>
<span className="relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 ring-1 ring-white/10">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</span>
</button>
<button className="inline-flex hover:bg-white/15 transition text-sm text-white/90 bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur gap-x-2 gap-y-2 items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
        How it works
      </button>
<div className="text-xs text-white/50 sm:ml-2 font-sans">No credit card needed</div>
</div>

<div className="mt-44">
<div className="bg-gradient-to-b from-white/5 to-black/20 w-full max-w-5xl rounded-3xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 shadow-2xl backdrop-blur" style={{boxShadow: '0 30px 60px rgba(0,0,0,0.45), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.15)', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '24px'}}>
<div className="rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(22,22,22,0.98), rgba(12,12,12,0.98))', backdropFilter: 'saturate(1.25) blur(4px)', WebkitBackdropFilter: 'saturate(1.25) blur(4px)', position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '16px'}}>

<div className="flex border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10" style={{background: 'linear-gradient(135deg, rgba(36, 36, 36, 0.85), rgba(20, 20, 20, 0.85))', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.06)'}}>
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-sm font-medium tracking-tight font-sans">Pulseframe</span>
</div>
<div className="hidden md:flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 w-full max-w-md">
<svg className="h-4 w-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent text-sm placeholder-white/40 focus:outline-none" placeholder="Search tasks, docs, teammates…"/>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/10">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
<img alt="Studio Portrait of Stylish Woman in Black Blazer" className="h-7 w-7 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_320w.jpg"/>
<div className="hidden sm:block">
<div className="text-xs font-medium font-sans">Maya Ortiz</div>
<div className="text-[10px] text-white/60 font-sans">Owner</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-12">
<aside className="md:col-span-3">
<ul className="space-y-1 text-sm">
<li className="">
<a className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 ring-1 ring-white/10" href="#">
<span className="text-white/90 font-sans">Overview</span>
<span className="text-[10px] text-white/50 font-sans">12</span>
</a>
</li>
<li className=""><a className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition font-sans" href="#"><span className="">Tasks</span><span className="text-[10px] text-white/40">34</span></a></li>
<li><a className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition font-sans" href="#"><span>Sprints</span><span className="text-[10px] text-white/40">5</span></a></li>
<li><a className="flex items-center justify-between rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition font-sans" href="#"><span>Docs</span><span className="text-[10px] text-white/40">18</span></a></li>
</ul>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="text-xs text-white/50 mb-2 px-3 font-sans">Team</p>
<div className="space-y-1">
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition" href="#">
<img alt="" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_320w.jpg"/>
<span className="text-sm font-sans">Maya Ortiz</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition" href="#">
<img alt="" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86071fe2-c5b4-4d6d-8cc8-87a7cc2edda1_320w.jpg"/>
<span className="text-sm font-sans">Alex Chen</span>
</a>
<a className="flex items-center gap-2 rounded-lg px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white transition" href="#">
<img alt="" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a97544a-e641-4759-a1a7-7dae56e72f14_320w.webp"/>
<span className="text-sm font-sans">Jordan Lee</span>
</a>
</div>
</div>
</aside>
<div className="md:col-span-9">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-medium tracking-tight font-sans">Active Projects</h3>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs ring-1 ring-white/15 hover:bg-white/15 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  New Project
                </button>
</div>
<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-4">
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/8 transition">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 ring-1 ring-emerald-400/30 flex items-center justify-center">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<p className="text-sm font-medium text-white/90 font-sans">Atlas Redesign</p>
</div>
</div>
<span className="inline-block text-[10px] rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300 ring-1 ring-emerald-300/30 font-sans mb-3">On track</span>
<div className="mt-3 pt-3 border-t border-white/10">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-white/60 font-sans">Progress</span>
<span className="text-white/90 font-sans">74%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full bg-emerald-400 rounded-full" style={{width: '74%'}}></div>
</div>
<p className="mt-2 text-xs text-white/50 font-sans">46 open • 128 done</p>
</div>
</div>
<div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/8 transition">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-600/20 ring-1 ring-amber-400/30 flex items-center justify-center">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(251, 191, 36)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<p className="text-sm font-medium text-white/90 font-sans">Relay API</p>
</div>
</div>
<span className="inline-block text-[10px] rounded-full bg-amber-400/15 px-2 py-0.5 text-amber-300 ring-1 ring-amber-300/30 font-sans mb-3">Review</span>
<div className="mt-3 pt-3 border-t border-white/10">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-white/60 font-sans">Progress</span>
<span className="text-white/90 font-sans">80%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full bg-amber-400 rounded-full" style={{width: '80%'}}></div>
</div>
<p className="mt-2 text-xs text-white/50 font-sans">19 open • 74 done</p>
</div>
</div>
<div className="hover:bg-white/8 transition bg-white/5 rounded-xl ring-white/10 ring-1 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400/20 to-sky-600/20 ring-1 ring-sky-400/30 flex items-center justify-center">
<svg className="h-4 w-4 text-sky-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<p className="text-sm font-medium text-white/90 font-sans">Edge Deploy</p>
</div>
</div>
<span className="inline-block text-[10px] rounded-full bg-sky-400/15 px-2 py-0.5 text-sky-300 ring-1 ring-sky-300/30 font-sans mb-3">Planning</span>
<div className="mt-3 pt-3 border-t border-white/10">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-white/60 font-sans">Progress</span>
<span className="text-white/90 font-sans">25%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full bg-sky-400 rounded-full" style={{width: '25%'}}></div>
</div>
<p className="mt-2 text-xs text-white/50 font-sans">7 open • 21 done</p>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium tracking-tight text-white/90 font-sans">Recent Activity</h3>
<a className="text-xs text-white/60 hover:text-white/90 font-sans" href="#">View all</a>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/5">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c62627bc-d916-4071-90de-5b3aa885cbf0_320w.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-white/90 font-sans"><span className="font-medium">Maya Ortiz</span> completed <span className="text-white/70">Homepage redesign</span></p>
<p className="text-xs text-white/50 mt-1 font-sans">2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 p-3 ring-1 ring-white/5">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86071fe2-c5b4-4d6d-8cc8-87a7cc2edda1_320w.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-white/90 font-sans"><span className="font-medium">Alex Chen</span> added 3 tasks to <span className="text-white/70">Relay API</span></p>
<p className="text-xs text-white/50 mt-1 font-sans">5 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<span className="inline-flex items-center gap-1 rounded-full bg-[#FF6B35]/10 px-2 py-1 text-[11px] text-[#FF6B35] ring-1 ring-[#FF6B35]/20 uppercase tracking-tight">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
        Integrations
      </span>
<h2 className="sm:text-5xl text-4xl font-medium tracking-tight mt-4 font-manrope">
        Connect your entire tech stack
      </h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-white/70">
        One platform, infinite possibilities. Sync with all your favorite tools.
      </p>
</div>
<div className="relative mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-6 sm:gap-10">
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</span>
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path className="" d="M3 5V19A9 3 0 0 0 21 19V5"></path><path className="" d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<span className="inline-flex items-center justify-center bg-white/5 w-10 h-10 ring-white/10 ring-1 rounded-lg backdrop-blur-lg">
<svg className="h-5 w-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</span>
</div>
<div className="relative mt-6 h-64">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 900 360">
<circle cx="150" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="270" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.2s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="390" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.4s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="510" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.6s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="630" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="0.8s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<circle cx="750" cy="30" fill="#FF6B35" filter="url(#glow)" r="4">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.5;1;0.5"></animate>
</circle>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path className="" d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '450', strokeDashoffset: '450'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '520', strokeDashoffset: '520'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#FF6B35" strokeLinecap="round" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="3s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/20 ring-2 ring-[#FF6B35]/40" style={{boxShadow: '0 0 20px rgba(255, 107, 53, 0.6), 0 0 40px rgba(255,107,53,0.3)'}}>
<svg className="h-6 w-6 text-[#FF6B35]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</div>
</div>
</div>
<div className="mx-auto mt-12 max-w-4xl">
<div className="flex items-center justify-center gap-3 flex-wrap text-sm">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-[#FF6B35]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium">Instant sync</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-[#FF6B35]/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-[#FF6B35]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Enterprise security</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-[#FF6B35]/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-[#FF6B35]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="font-medium">Real-time updates</span>
</div>
<div className="hidden sm:block w-24 h-px border-t border-dashed border-[#FF6B35]/40"></div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-[#FF6B35]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
<span className="font-medium">One-click setup</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="mb-12 text-center">
<p className="text-xs uppercase text-white/50 tracking-widest mb-2 font-sans">
      Featured Reviews
    </p>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight font-manrope">
      Client Highlights
    </h2>
</div>
<div className="flex sm:py-20 overflow-hidden pt-12 pb-12 relative items-center justify-center" style={{minHeight: '450px'}}>
<div className="container max-w-full pr-4 pl-4" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
<div className="glass [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.05), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(-10deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white/5 backdrop-blur-xl text-white shadow-2xl ring-1 ring-white/10 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 mb-4">
<svg className="h-4 w-4 text-white/80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-white/90 mb-4 font-sans">
              Working with Pulseframe was transformative. The platform elevated our workflow and team experience to new heights. Their attention to detail is unmatched.
            </p>
<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Portrait of smiling young man" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg"/>
<div>
<div className="text-xs font-medium text-white/90 font-sans">
                    Alex Rivera
                  </div>
<div className="text-xs text-white/60 font-sans">
                    CEO, GrowthLabs
                  </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.04), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(-6deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white/5 backdrop-blur-xl text-white shadow-xl ring-1 ring-white/10 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 mb-4">
<svg className="h-4 w-4 text-white/80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-white/90 mb-4 font-sans">
              Pulseframe's expertise in both UX and visual design made our project seamless. They delivered beyond expectations and on time every milestone.
            </p>
<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Elegant woman portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg"/>
<div className="">
<div className="text-xs font-medium text-white/90 font-sans">
                    Nina Patel
                  </div>
<div className="text-xs text-white/60 font-sans">
                    Director, PixelCraft
                  </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.03), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', transform: 'rotate(0deg)'}}>
<div className="absolute inset-4 rounded-xl bg-white/5 backdrop-blur-xl text-white shadow-lg ring-1 ring-white/10 overflow-hidden">
<div className="p-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 mb-4">
<svg className="h-4 w-4 text-white/80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-white/90 mb-4 font-sans">
              Exceptional platform with a strategic mindset. Pulseframe helped us rethink our entire product experience from the ground up.
            </p>
<div className="pt-3 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Male portrait" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
<div>
<div className="text-xs font-medium text-white/90 font-sans">
                    Marcus Webb
                  </div>
<div className="text-xs text-white/60 font-sans">
                    VP Product, Velocity
                  </div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="overflow-hidden [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-gradient-to-br from-white/5 to-white/0 border-white/10 border rounded-3xl relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-transparent"></div>
<div className="md:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight font-manrope">
              Turn bold ideas into products — <span className="font-normal italic opacity-80">growth without the noise</span>
</h2>
<p className="mt-5 text-white/70 leading-relaxed font-sans">
              We partner with ambitious teams to craft delightful interfaces, validate quickly, and scale with data-backed decisions.
            </p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 hover:bg-white/90 transition text-sm font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
                Get started
              </a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition text-sm font-medium border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 text-white" href="#">
                See our work
              </a>
</div>
</div>
<div className="relative">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-neutral-900/50 backdrop-blur border-white/10 border rounded-3xl">
<div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative h-56 sm:h-64 rounded-2xl bg-black/40 ring-1 ring-inset ring-white/10 overflow-hidden">
<svg aria-hidden="true" className="absolute inset-0 h-full w-full text-white/5">
<defs>
<pattern height="24" id="grid" patternunits="userSpaceOnUse" width="24">
<path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
<span className="absolute left-6 top-4 h-0.5 w-10 rounded bg-[#FF6B35]"></span>
<div className="absolute right-6 top-8 sm:right-10 sm:top-10 w-[78%] rounded-2xl border border-white/10 bg-black/60 backdrop-blur shadow-lg">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/10"></span>
<div className="ml-3 h-2 w-24 rounded bg-white/10"></div>
</div>
<div className="grid grid-cols-3 gap-3 p-4">
<div className="col-span-2 rounded-lg border border-white/10 overflow-hidden">
<img alt="Minimal 3D render" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca446c1b-d6e1-4316-9864-4d6306b13cf4_800w.jpg"/>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="Mountain landscape" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7e430a8d-376b-4aba-8993-1350529e5946_800w.jpg"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 h-24"></div>
<div className="rounded-lg border border-white/10 bg-white/5 h-24"></div>
<div className="rounded-lg border border-white/10 bg-white/5 h-24"></div>
</div>
</div>
</div>
<div className="sm:mt-8 mt-6">
<div className="flex items-center gap-3">
<svg className="h-5 w-5 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white/90 font-manrope">Data-Driven Growth Engine</h3>
</div>
<p className="mt-3 text-white/60 text-sm">Transform your product metrics with our proven design systems and growth optimization framework that scales with ambitious teams.</p>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-white/10 border-t mt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="overflow-hidden glass [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-white/5 rounded-3xl ring-white/10 ring-1 relative">
<div className="bg-gradient-to-br from-white/5 via-transparent to-white/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:px-10 lg:px-14 lg:py-16 glass px-10 py-16">
<div className="flex flex-col lg:flex-row items-start justify-between gap-10">
<div className="max-w-md">
<a className="inline-flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-lg tracking-tight font-semibold font-sans">Pulseframe</span>
</a>
<p className="mt-4 text-sm text-white/70 leading-relaxed">
              Transform your workflow into a productivity powerhouse with AI-powered work management that saves you hours every week.
            </p>
<form className="mt-6 flex items-center gap-2">
<div className="flex-1">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-white/40 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-[#FF6B35]/30 outline-none" id="footer-email" placeholder="Your email" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] text-white px-4 py-3 text-sm ring-1 ring-[#FF6B35]/30 hover:bg-[#F7931E] transition font-medium" type="submit">
                Subscribe
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
<p className="mt-2 text-xs text-white/50">
              Monthly updates. No spam.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
<div className="">
<p className="text-sm font-medium text-white/90 tracking-tight">
                Product
              </p>
<ul className="mt-3 space-y-2 text-sm text-white/60">
<li>
<a className="hover:text-white transition" href="#">
                    Features
                  </a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                    How it works
                  </a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                    Pricing
                  </a>
</li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/90 tracking-tight">
                Company
              </p>
<ul className="mt-3 space-y-2 text-sm text-white/60">
<li>
<a className="hover:text-white transition" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                    Careers
                  </a>
</li>
</ul>
</div>
<div className="">
<p className="text-sm font-medium text-white/90 tracking-tight">
                Legal
              </p>
<ul className="mt-3 space-y-2 text-sm text-white/60">
<li>
<a className="hover:text-white transition" href="#">
                    Privacy
                  </a>
</li>
<li>
<a className="hover:text-white transition" href="#">Terms</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/50">
            © 2024 Pulseframe. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
