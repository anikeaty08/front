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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    
}
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>
</div>

<header className="relative z-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex pt-6 pb-6 items-center justify-between">
<svg className="w-[92px] h-[36px] text-white" data-icon-replaced="true" fill="none" height="36" strokeWidth="2" style={{width: `92px`, height: `36px`}} viewBox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path fill="currentColor"></path>
<path fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path fill="currentColor"></path>
</svg>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Product</a>
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Pricing</a>
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Resources</a>
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Updates</a>
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Contact</a>
</nav>
<div className="hidden md:flex gap-3 items-center">
<a className="hover:text-white/50 text-sm font-medium text-white" href="#">Sign in</a><button className="group relative inline-flex cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[8px] pr-[16px] pb-[8px] pl-[16px] items-center justify-center" style={{boxShadow: `inset 0 0 0 1px rgba(99,102,241,0.3)`, background: `linear-gradient(135deg,rgba(99,102,241,0.6) 0%,rgba(79,70,229,0.4) 50%,rgba(99,102,241,0.2) 100%)`, backdropFilter: `blur(12px)`, border: `0.5px solid rgba(99,102,241,0.2)`}}>
<span className="relative z-10 text-sm font-normal rounded-full">Sign Up</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 text-xs rounded-full" style={{background: `linear-gradient(90deg,rgba(99,102,241,0) 0%,rgba(99,102,241,1) 50%,rgba(99,102,241,0) 100%)`}}></span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-200 p-2">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>
</header>

<section className="relative mb-24">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="mx-auto max-w-3xl text-center pt-10 sm:pt-14">
<span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-blue-600/20 border-white/20 rounded-full mr-auto mb-4 ml-auto pt-1 pr-3 pb-1 pl-3">
            
            Powering the next wave of product teams
          </span>
<h1 className="sm:text-6xl md:text-7xl text-4xl text-white/70 tracking-tight" style={{}}>
            From Spark to Scale—Build, Launch, and Grow
            <span className="bg-clip-text text-slate-50 bg-gradient-to-r from-indigo-600 to-pink-500" style={{}}>Faster</span>.
          </h1>
<p className="sm:text-lg text-base font-normal text-white/70 mt-5">
            We transform ambitious ideas into performant products your customers love—built for differentiation, velocity, and lasting impact.
          </p>
<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<button className="button" type="button">
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
<path className=""></path>
<path className=""></path>
</svg>
</span>

</button>
<button className="group relative overflow-hidden cursor-pointer leading-none hover:shadow-2xl transition-all duration-300 text-white bg-white/10 border-white/10 border rounded-full shadow-sm backdrop-blur" style={{background: `rgba(255, 255, 255, 0.1)`, backdropFilter: `blur(24px)`, border: `1px solid rgba(255, 255, 255, 0.2)`, padding: `16px 32px`, minHeight: `56px`, minWidth: `160px`}}>
<span className="absolute inset-0 z-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
<div className="flex relative overflow-hidden font-semibold items-center justify-center" style={{gap: `8px`}}>
<div className="flex items-center justify-center z-10">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18">
<path className=""></path>
</svg>
</div>
<span className="inline-block transition-colors duration-300 relative z-10 group-hover:text-white font-semibold text-white" style={{fontSize: `16px`}}>
            View Demo
        </span>
</div>
</button>
</div>
<div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
<div className="flex -space-x-2">
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg" style={{}} />
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg" style={{}} />
<img alt="" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5fe82ca0-ec91-4df3-b0fb-d97b643f2178_320w.jpg" style={{}} />
</div>
<div className="flex gap-2 text-sm font-medium text-white/70 items-center">
<svg className="lucide lucide-shield-check w-[16px] h-[16px] text-white" data-icon-replaced="true" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Trusted by 30,000+ builders worldwide
            </div>
</div>
</div>

<div className="mt-14">
<div className="mt-6 pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-xs font-medium text-black/50 tracking-wide">Loved by teams around the world</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<svg className="" fill="none" height="36" viewBox="0 0 99 36" width="99" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 115 36" width="115" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 110 36" width="110" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg><svg className="" fill="none" height="36" viewBox="0 0 92 36" width="92" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 104 36" width="104" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
<svg className="" fill="none" height="36" viewBox="0 0 113 36" width="113" xmlns="http://www.w3.org/2000/svg">
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" clip-rule="evenodd" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
<path className="" fill="currentColor"></path>
</svg>
</div>
</div>
</div>

<div className="relative sm:mt-16 mt-12">

<div className="absolute inset-x-0 -top-6 -bottom-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b81e8501-3472-47a4-b528-859fb9ce9d5a_1600w.jpg)] bg-cover rounded-[40px]"></div>
<div className="relative overflow-hidden bg-neutral-900/70 border-neutral-700 border rounded-3xl mr-24 ml-24 shadow-xl backdrop-blur-xl" style={{background: `rgba(17, 17, 17, 0.7)`, backdropFilter: `blur(20px)`, border: `1px solid rgba(64, 64, 64, 0.35)`}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<h3 className="text-2xl font-semibold tracking-tight text-white">Private by Design</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
      Secure workspace
    </span>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 ring-1 ring-inset ring-white/5 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-neutral-200">Meeting participants</span>
</div>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-green-300 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
          No bots detected
        </span>
</div>
<ul className="px-3 py-3 space-y-2">
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52f90c3d-9f64-4db9-997b-8765ea3ff941_320w.jpg" />
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Gina Huels <span className="text-neutral-400">(You)</span></p>
<p className="text-xs text-neutral-400 truncate">ginahue65@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Owner</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg" />
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Todd Cremin</p>
<p className="text-xs text-neutral-400 truncate">todd.cremin@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg" />
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Holly Gleason</p>
<p className="text-xs text-neutral-400 truncate">holly_gleaso1972@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
<li className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg" />
<div className="min-w-0">
<p className="text-sm font-medium text-white truncate">Tomas Hansen</p>
<p className="text-xs text-neutral-400 truncate">tomas_hansen@cluely.com</p>
</div>
</div>
<span className="text-xs text-neutral-300 flex-shrink-0">Speaker</span>
</li>
</ul>
<div className="px-4 py-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
          Auto‑redacted
        </div>
<div className="text-xs text-neutral-400">Guest list stays clean</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 ring-1 ring-inset ring-white/5 overflow-hidden">
<div className="absolute left-3 top-3 z-10">
</div>
<div className="absolute right-3 top-3 z-10">
</div>
<div className="relative h-56">

<div className="absolute inset-y-0 left-0 w-1/2 bg-neutral-950/70">
<div className="h-full p-4">
<div className="rounded-lg bg-neutral-900/80 border border-white/10 h-full overflow-hidden">
<div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/70"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/70"></span>
<span className="h-3 w-3 rounded-full bg-green-500/70"></span>
</div>
<div className="p-3 text-[11px] leading-relaxed font-medium">
<pre className="text-[11px] text-neutral-300"><code className="">// Fetch data, keep private
import axios from 'axios';

async function fetchUserData(userId) {"{"}
  const resp = await axios.get('/api/users/' + userId);
  return resp.data;
{"}"}</code></pre>
</div>
</div>
</div>
</div>

<div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10"></div>
<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center">
</div>

<div className="absolute inset-y-0 right-0 w-1/2 bg-neutral-900/50">
<div className="h-full p-4">
<div className="rounded-lg border border-white/10 h-full bg-gradient-to-b from-neutral-900/60 to-neutral-900/30 backdrop-blur">
<div className="h-full flex items-center justify-center">
<div className="text-center">
<svg className="lucide lucide-lock w-[26px] h-[26px] text-neutral-400 mx-auto" data-icon-replaced="true" data-lucide="lock" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `26px`, height: `26px`, color: `rgb(163, 163, 163)`}} viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
<p className="text-xs text-neutral-400 mt-1">Hidden</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
<rect height="12" rx="1" width="16"></rect>
</svg>
<span className="truncate">Never appears in shared recordings</span>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 ring-1 ring-inset ring-white/5 overflow-hidden">
<div className="relative h-56">
<img alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/22848efd-ec1e-4b8e-9232-4701ae5cb3c8_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-pink-500/20 mix-blend-overlay"></div>

<div className="absolute right-4 top-4 w-32 sm:w-40 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur p-3 shadow-sm">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-200">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="truncate">AI Response</span>
</div>
<div className="mt-2 space-y-1.5">
<div className="h-1.5 w-full max-w-28 rounded bg-white/20"></div>
<div className="h-1.5 w-full max-w-24 rounded bg-white/10"></div>
<div className="h-1.5 w-full max-w-20 rounded bg-white/10"></div>
</div>
</div>

<div className="absolute left-0 right-0 bottom-0">
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2">
<div className="rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur px-2 py-1.5 flex items-center gap-1.5">
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">⌘</span>
<span className="text-[10px] text-neutral-300 hidden sm:inline">command</span>
</div>
<div className="rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur px-2 py-1.5 flex items-center gap-1">
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">↑</span>
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">↓</span>
<span className="text-[10px] text-neutral-300 rounded-lg bg-white/5 border border-white/10 px-2 py-1">→</span>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20"></rect>
<path></path>
<path></path>
<path></path>
</svg>
<span className="truncate">Translucent, hideable overlay</span>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Doesn't join meetings</h4>
<p className="mt-2 text-sm text-neutral-400">There are no bots and no extra guests. Your sessions stay clean and focused.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Invisible to screen share</h4>
<p className="mt-2 text-sm text-neutral-400">It never shows up in shared screens, recordings, or external tools.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Never in your way</h4>
<p className="mt-2 text-sm text-neutral-400">Appears as a lightweight window you can move, fade, or hide anytime.</p>
</div>
</div>

<div className="mt-6">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
      Explore privacy features
      <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards]" style={{transform: `translateY(0px)`}}>
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2">

<div className="relative bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac30327e-f74e-4f00-871e-19b69c6e0feb_1600w.jpg)] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl" style={{background: `rgba(17, 17, 17, 0.7)`, backdropFilter: `blur(20px)`, border: `1px solid rgba(64, 64, 64, 0.35)`}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-white">Real‑Time Market Data</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
        Live streaming
      </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8">

<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">AAPL</span>
<div className="flex items-center gap-2">
<span className="text-xs text-green-400">+2.34%</span>
<span className="h-2 w-12 rounded bg-green-500/20"></span>
</div>
</div>
<div className="p-2">
<svg className="w-full h-20 sm:h-24 text-neutral-700" viewBox="0 0 300 90">
<defs>
<pattern height="4" id="dots1" patternunits="userSpaceOnUse" width="4">
<circle cx="1" cy="1" fill="currentColor" opacity="0.3"></circle>
</pattern>
</defs>
<rect className="" fill="url(#dots1)" height="100%" width="100%"></rect>

<rect fill="#EF4444" height="20" width="3"></rect>
<rect fill="#10B981" height="25" width="3"></rect>
<rect fill="#EF4444" height="15" width="3"></rect>
<rect fill="#10B981" height="30" width="3"></rect>
<rect fill="#10B981" height="20" width="3"></rect>
<rect fill="#10B981" height="35" width="3"></rect>
<rect fill="#EF4444" height="18" width="3"></rect>
<rect fill="#10B981" height="40" width="3"></rect>
<rect fill="#10B981" height="25" width="3"></rect>
<rect fill="#10B981" height="45" width="3"></rect>
<polyline fill="none" points="22,55 42,47 62,57 82,45 102,50 122,42 142,54 162,40 182,47 202,37" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></polyline>
</svg>
</div>
</div>

<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">WATCHLIST</span>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">TSLA</span>
<span className="text-green-400">+1.2%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">MSFT</span>
<span className="text-red-400">-0.5%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">GOOGL</span>
<span className="text-green-400">+0.8%</span>
</div>
</div>
</div>

<div className="absolute left-3 sm:left-6 bottom-3 sm:bottom-4 w-[38%] h-[44%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">MOBILE</span>
</div>
<div className="p-2">
<svg className="w-full h-14 sm:h-16 text-neutral-700" viewBox="0 0 180 70">
<rect fill="#10B981" height="12" width="2"></rect>
<rect fill="#10B981" height="17" width="2"></rect>
<rect fill="#EF4444" height="10" width="2"></rect>
<rect fill="#10B981" height="22" width="2"></rect>
<rect fill="#10B981" height="27" width="2"></rect>
<rect fill="#EF4444" height="12" width="2"></rect>
<rect fill="#10B981" height="32" width="2"></rect>
<rect fill="#10B981" height="19" width="2"></rect>
<rect fill="#10B981" height="35" width="2"></rect>
<polyline fill="none" points="11,41 26,38 41,45 56,36 71,33 86,41 101,31 116,36 131,29" stroke="#10B981" strokeLinecap="round" strokeWidth="1"></polyline>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Advanced Charting</h4>
<p className="mt-2 text-sm text-neutral-400">Professional-grade technical analysis tools with real-time candlestick patterns.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Smart Watchlists</h4>
<p className="mt-2 text-sm text-neutral-400">Curated stock tracking with instant performance updates and alerts.</p>
</div>
</div>

<div className="">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
        Start trading
        <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
</div>
</div>
</article>
</div>

<div className="">
<div className="tech-content" id="technology">
<h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-semibold text-slate-900 tracking-tight">Industry‑leading precision, professionally certified</h3>

<div className="mt-8">
<div className="border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Core Technology Features</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
</svg>
</div>
<div className="">
<h5 className="font-medium text-slate-900">Real-time Processing</h5>
<p className="text-sm text-slate-600 mt-1">Sub-second color analysis with continuous calibration and temperature compensation for consistent results.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
<line></line>
</svg>
</div>
<div className="">
<h5 className="font-medium text-slate-900">Advanced Algorithms</h5>
<p className="text-sm text-slate-600 mt-1">Machine learning-enhanced color matching with proprietary spectral analysis for superior accuracy.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tech-content hidden" id="specs">
<h3 className="text-4xl tracking-tight text-slate-900 sm:text-5xl font-sans font-semibold">Technical Specifications</h3>
<p className="mt-4 text-slate-700 font-sans">Precision engineered with cutting-edge hardware and software integration for professional color analysis workflows.</p>
<div className="mt-8 border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Hardware Specifications</h4>
<div className="space-y-3">
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Spectral Range</span>
<span className="text-sm text-slate-900 font-sans">380-780 nm</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Accuracy</span>
<span className="text-sm text-slate-900 font-sans">±0.03 ΔE*ab</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Measurement Time</span>
<span className="text-sm text-slate-900 font-sans">0.5 seconds</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Illumination</span>
<span className="text-sm text-slate-900 font-sans">LED D65/A/C/D50/D55/F2/F7/F11</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Observer Angle</span>
<span className="text-sm text-slate-900 font-sans">2°/10° standard observer</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Repeatability</span>
<span className="text-sm text-slate-900 font-sans">ΔE*ab ≤ 0.04 (σ)</span>
</div>
</div>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Connectivity & Power</h4>
<div className="space-y-3">
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Interface</span>
<span className="text-sm text-slate-900 font-sans">USB-C 3.0, Bluetooth 5.2, Wi-Fi 6</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Battery Life</span>
<span className="text-sm text-slate-900 font-sans">8 hours continuous use</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Operating Temperature</span>
<span className="text-sm text-slate-900 font-sans">0°C to 40°C (32°F to 104°F)</span>
</div>
<div className="flex justify-between py-2 border-b border-neutral-200">
<span className="text-sm text-slate-600 font-sans">Dimensions</span>
<span className="text-sm text-slate-900 font-sans">95 × 65 × 28 mm</span>
</div>
<div className="flex justify-between py-2">
<span className="text-sm text-slate-600 font-sans">Weight</span>
<span className="text-sm text-slate-900 font-sans">280g (9.9 oz)</span>
</div>
</div>
</div>
</div>
<div className="tech-content hidden" id="certifications">
<h3 className="text-4xl tracking-tight text-slate-900 sm:text-5xl font-sans font-semibold">Certifications & Standards</h3>
<p className="mt-4 text-slate-700 font-sans">Meets and exceeds international standards for color measurement and professional certification requirements.</p>
<div className="mt-8 border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">International Standards</h4>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="text-sm font-medium text-slate-900 font-sans">ISO 11664</div>
<div className="text-xs text-slate-600 font-sans">Colorimetry Standards</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="text-sm font-medium text-slate-900 font-sans">CIE Standard</div>
<div className="text-xs text-slate-600 font-sans">Illuminant D65</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="text-sm font-medium text-slate-900 font-sans">ASTM E308</div>
<div className="text-xs text-slate-600 font-sans">Standard Practice for Computing Colors</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="text-sm font-medium text-slate-900 font-sans">DIN 5033</div>
<div className="text-xs text-slate-600 font-sans">Colorimetry Guidelines</div>
</div>
</div>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Industry Certifications</h4>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
<div className="text-sm font-medium text-slate-900 font-sans">FDA Approved</div>
</div>
<div className="text-xs text-slate-600 font-sans">Medical device classification for clinical use</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<div className="text-sm font-medium text-slate-900 font-sans">CE Marking</div>
</div>
<div className="text-xs text-slate-600 font-sans">European conformity for commercial distribution</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-purple-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
<div className="text-sm font-medium text-slate-900 font-sans">NIST Traceable</div>
</div>
<div className="text-xs text-slate-600 font-sans">Calibration standards traceable to national institute</div>
</div>
<div className="rounded-lg bg-neutral-50 p-3 ring-1 ring-neutral-200 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<svg className="text-orange-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
<div className="text-sm font-medium text-slate-900 font-sans">RoHS Compliant</div>
</div>
<div className="text-xs text-slate-600 font-sans">Restriction of hazardous substances directive</div>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 mt-8">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number text-slate-900" data-target="4.8">4.8</span>
<span className="text-sm text-slate-600 font-sans">/5</span>
</div>
<p className="text-xs text-slate-600 font-sans">22k+ professional reviews</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number text-slate-900" data-target="94">94%</span>
</div>
<p className="text-xs text-slate-600 font-sans">Users recommend to colleagues</p>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 mt-8">
<button className="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-base text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 items-center justify-center" role="button">Tech Specifications</button>
</div>
</div>
</div>
</div>
</section><section className="relative z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards]" style={{transform: `translateY(0px)`}}>
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid gap-12 lg:grid-cols-2">


<div className="">
<div className="tech-content" id="technology">
<h3 className="sm:text-5xl transition-colors duration-500 text-4xl font-semibold text-slate-900 tracking-tight">Seamless team collaboration, built for modern workflows</h3>

<div className="mt-8">
<div className="border-t border-neutral-200 pt-6">
<h4 className="text-lg font-semibold text-slate-900 mb-4">Core Collaboration Features</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="">
<h5 className="font-medium text-slate-900">Instant Communication</h5>
<p className="text-sm text-slate-600 mt-1">Built-in chat, video calls, and screen sharing with contextual project discussions and file sharing.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="14,2 14,8 20,8"></polyline>
<line></line>
<line></line>
<polyline points="10,9 9,9 8,9"></polyline>
</svg>
</div>
<div className="">
<h5 className="font-medium text-slate-900">Smart Project Management</h5>
<p className="text-sm text-slate-600 mt-1">Automated task assignment, progress tracking, and intelligent reporting with customizable workflows.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 mt-8">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number text-slate-900" data-target="4.9">4.9</span>
<span className="text-sm text-slate-600 font-sans">/5</span>
</div>
<p className="text-xs text-slate-600 font-sans">18k+ team collaboration reviews</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-sans font-semibold rating-number text-slate-900" data-target="87">87%</span>
</div>
<p className="text-xs text-slate-600 font-sans">Faster project delivery</p>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-6 mt-8">
<button className="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-base text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl pt-2.5 pr-5 pb-2.5 pl-5 items-center justify-center" role="button">Team Features</button>
</div>
</div><div className="relative bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/347ae071-e53a-4247-a97a-e708e4ae14a7_1600w.jpg)] bg-cover rounded-[36px] pt-5 pr-5 pb-5 pl-5">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border-neutral-700 border rounded-3xl shadow-xl backdrop-blur-xl" style={{background: `rgba(17, 17, 17, 0.7)`, backdropFilter: `blur(20px)`, border: `1px solid rgba(64, 64, 64, 0.35)`}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-white">Collaborative Workflows</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
<path></path>
</svg>
                Team sync
              </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8">

<div className="absolute left-3 sm:left-6 top-4 sm:top-6 w-[70%] h-[52%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">PROJECT BOARD</span>
<div className="flex items-center gap-1">
<div className="h-3 w-3 rounded-full bg-green-500/70"></div>
<span className="text-[10px] text-green-400">Active</span>
</div>
</div>
<div className="p-2 space-y-1.5">
<div className="flex items-center justify-between text-[10px] sm:text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded bg-blue-400"></div>
<span className="text-neutral-300">UI Design</span>
</div>
<span className="text-blue-400">In Progress</span>
</div>
<div className="flex items-center justify-between text-[10px] sm:text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded bg-green-400"></div>
<span className="text-neutral-300">API Integration</span>
</div>
<span className="text-green-400">Complete</span>
</div>
<div className="flex items-center justify-between text-[10px] sm:text-xs">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded bg-yellow-400"></div>
<span className="text-neutral-300">Testing</span>
</div>
<span className="text-yellow-400">Review</span>
</div>
</div>
</div>

<div className="absolute right-4 sm:right-6 top-5 sm:top-7 w-[38%] h-[68%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">TEAM CHAT</span>
<div className="h-2 w-2 rounded-full bg-green-500"></div>
</div>
<div className="p-2 space-y-2">
<div className="flex items-start gap-2">
<div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex-shrink-0 mt-0.5"></div>
<div className="min-w-0">
<div className="text-[9px] text-neutral-400 mb-0.5">Sarah</div>
<div className="bg-white/10 rounded-lg px-2 py-1 text-[9px] text-neutral-300">Design looks great!</div>
</div>
</div>
<div className="flex items-start gap-2">
<div className="h-4 w-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex-shrink-0 mt-0.5"></div>
<div className="min-w-0">
<div className="text-[9px] text-neutral-400 mb-0.5">Mike</div>
<div className="bg-white/10 rounded-lg px-2 py-1 text-[9px] text-neutral-300">API ready for testing</div>
</div>
</div>
</div>
</div>

<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[55%] h-[28%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400">PROGRESS</span>
<span className="text-[10px] text-green-400">78%</span>
</div>
<div className="p-2">
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full" style={{width: `78%`}}></div>
</div>
<div className="flex justify-between mt-1 text-[9px] text-neutral-400">
<span>12 tasks done</span>
<span>3 remaining</span>
</div>
</div>
</div>

<div className="absolute right-4 bottom-4 flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 ring-2 ring-neutral-800"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 ring-2 ring-neutral-800"></div>
<div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 ring-2 ring-neutral-800"></div>
<div className="h-6 w-6 rounded-full bg-neutral-700 ring-2 ring-neutral-800 flex items-center justify-center">
<span className="text-[8px] text-neutral-300">+2</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Real‑time Collaboration</h4>
<p className="mt-2 text-sm text-neutral-400">Work together seamlessly with live updates, instant messaging, and shared workspaces.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white">Project Tracking</h4>
<p className="mt-2 text-sm text-neutral-400">Monitor progress with visual dashboards, automated reports, and milestone tracking.</p>
</div>
</div>

<div className="">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300" href="#">
                Start collaborating
                <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
</div>
</div>
</article>
</div>
</div>
</div>
</section><section className="sm:p-8 bg-zinc-900/50 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f02f2d97-2f6e-4565-af29-5029e146b6ad_3840w.jpg)] bg-cover border-zinc-800 rounded-[36px] mt-10 mr-8 ml-8 pt-6 pr-6 pb-6 pl-6">

<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-300 backdrop-blur-xl">
<svg className="lucide lucide-credit-card h-4 w-4" data-lucide="credit-card" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/200/svg"><rect height="14" rx="2" width="20"></rect><line></line></svg>
<span className="text-xs font-normal font-geist">Pricing</span>
</div>
<h2 className="mt-4 text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] font-geist font-medium tracking-tighter text-white">Scale with confidence</h2>
<p className="mt-2 text-sm sm:text-base text-zinc-400 font-geist">Choose a plan that grows with your team and adapts to your workflow needs.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mt-8 mr-auto ml-auto">

<article className="relative overflow-hidden sm:p-6 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-xl">

<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-white/10 text-zinc-300 backdrop-blur">01</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/20"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="font-geist">Setup in 24 hours</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Starter</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">Perfect for individual developers and small projects.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">$29</p>
<p className="text-xs text-zinc-500 font-geist">per month</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/90 text-zinc-900 text-sm font-normal hover:bg-white transition backdrop-blur font-geist">
        Get Started
        <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">Everything you need to start:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">5 active projects with full version control</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">10GB storage and priority CDN</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Community support and knowledge base</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden sm:p-6 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border-white/20 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl">
<div className="absolute right-4 top-4">
</div>

<div className="flex text-xs items-center justify-between">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-indigo-500/20 text-zinc-300 backdrop-blur">02</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/40"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="font-geist">Setup in 12 hours</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Pro</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">For growing teams and professional workflows.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">$99</p>
<p className="text-xs text-zinc-500 font-geist">per month</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/90 text-zinc-900 text-sm font-normal hover:bg-white transition backdrop-blur font-geist">
        Start Pro
        <svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">Everything in Starter, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-indigo-500/20 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Unlimited projects and team collaboration</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-indigo-500/20 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">100GB storage with global edge deployment</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-indigo-500/20 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Priority email support and live chat</span>
</li>
</ul>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950/80 backdrop-blur-xl p-5 sm:p-6">

<div className="flex items-center justify-between text-xs">
<div className="inline-flex items-center gap-2 text-zinc-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/80 ring-1 ring-white/10 text-zinc-300 backdrop-blur">03</span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500/80"></span>
</div>
</div>
<div className="inline-flex items-center gap-1 text-zinc-400">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="font-geist">Custom onboarding</span>
</div>
</div>

<div className="mt-5 flex items-start justify-between">
<div className="">
<h3 className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Enterprise</h3>
<p className="mt-1 text-sm text-zinc-400 font-geist">For large organizations with custom requirements.</p>
</div>
<div className="text-right">
<p className="text-2xl sm:text-3xl text-white font-geist font-medium tracking-tight">Custom</p>
<p className="text-xs text-zinc-500 font-geist">contact sales</p>
</div>
</div>
<button className="mt-5 inline-flex items-center justify-center gap-2 h-11 w-full rounded-full bg-white/20 text-white text-sm font-normal hover:bg-white/30 transition backdrop-blur border border-white/20 font-geist">
        Contact Sales
        <svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>

<div className="mt-6">
<p className="text-xs text-zinc-400 font-geist">Everything in Pro, plus:</p>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">SSO/SAML authentication and audit logs</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">Dedicated infrastructure and 99.9% SLA</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 h-5 w-5 rounded-full bg-zinc-900/70 border border-white/10 flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-check h-3.5 w-3.5 text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</span>
<span className="text-sm text-zinc-300 font-geist">24/7 phone support and dedicated CSM</span>
</li>
</ul>
</div>
</article>
</div>

<div className="flex flex-col text-center mt-6 items-center">
<p className="text-xs text-zinc-500 font-geist">All plans include a 14-day free trial. <a className="underline decoration-zinc-700 underline-offset-4 text-zinc-300 hover:text-white font-geist" href="#">View detailed comparison</a>.</p>
</div>
</section><footer className="relative z-10 animate-[fadeInUp_1s_ease-out_1.6s_forwards] pt-2 pr-2 pb-2 pl-2" style={{transform: `translateY(50px)`}}>
<div className="bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-neutral-950 to-neutral-800 border-white/10 rounded-xl border-t">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid gap-12 md:grid-cols-3">
<div className="flex flex-col gap-6">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity group" href="#">
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold text-white font-sans tracking-tight">NovaFlow</span>
<span className="text-sm text-neutral-400 font-sans">Ship Better Products</span>
</div>
</a>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 hover:ring-white/20 transition-all duration-200" href="#">
<svg className="text-neutral-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<a aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 hover:ring-white/20 transition-all duration-200" href="#">
<svg className="text-neutral-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
<a aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:scale-110 hover:ring-white/20 transition-all duration-200" href="#">
<svg className="text-neutral-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
<rect height="12" width="4"></rect>
<circle cx="4" cy="4"></circle>
</svg>
</a>
</div>
<div className="mt-4 space-y-2">
<p className="text-sm text-neutral-400 font-sans">© 2024 NovaFlow. All rights reserved.</p>
<p className="text-xs text-neutral-500 font-sans">Built for the next generation of product teams.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:col-span-2">
<div className="space-y-8">
<div className="">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white font-sans">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Features</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Integrations</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">API & SDK</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Security</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white font-sans">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Documentation</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Tutorials</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Blog</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Changelog</a></li>
</ul>
</div>
</div>
<div className="space-y-8">
<div className="">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white font-sans">Support</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Help Center</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Contact Us</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Community</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Status</a></li>
</ul>
</div>
<div className="">
<h4 className="mb-4 text-sm font-semibold tracking-tight text-white font-sans">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">About</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Careers</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Press</a></li>
<li className=""><a className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block font-sans" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/10">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="flex flex-wrap gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-300 transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors font-sans" href="#">Terms of Service</a>
<a className="hover:text-neutral-300 transition-colors font-sans" href="#">Cookie Settings</a>
<a className="hover:text-neutral-300 transition-colors font-sans" href="#">Sitemap</a>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-500 font-sans">Stay updated</span>
<div className="flex items-center gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all" placeholder="Enter your email" type="email" />
<button className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-200 hover:scale-105">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
