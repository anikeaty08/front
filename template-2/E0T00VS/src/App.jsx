import React, { useEffect } from 'react';
import { createIcons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";

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

  createIcons({ attrs: { class: 'stroke-2' } });

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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/dunes-3fd4468737972c9a084de27efa2263c4" width="100%"></iframe></div>

<div className="min-h-screen flex pt-10 pr-4 pb-10 pl-4 items-center justify-center">

<div className="backdrop-blur-lg w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden ring-1 bg-white/90 ring-white/20" style={{animation: `blur-in 0.8s cubic-bezier(.16,1,.3,1) both`}}>

<nav className="flex items-center justify-between px-6 sm:px-10 py-6" style={{animation: `fade-in .7s ease-out .15s both`}}>
<div className="flex items-center gap-2">
<i className="w-7 h-7 text-indigo-500" data-lucide="puzzle"></i>
<span className="text-lg font-semibold font-geist">Edulite</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 rounded-md transition font-geist text-neutral-700 hover:text-indigo-600" href="#" style={{animation: `fade-in .7s ease-out .25s both`}}>Home</a>
<a className="text-sm font-medium outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 rounded-md transition font-geist text-neutral-700 hover:text-indigo-600" href="#" style={{animation: `fade-in .7s ease-out .35s both`}}>Features</a>
<a className="text-sm font-medium outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 rounded-md transition font-geist text-neutral-700 hover:text-indigo-600" href="#" style={{animation: `fade-in .7s ease-out .45s both`}}>About Us</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium focus-visible:outline focus-visible:outline-indigo-500 rounded-md transition font-geist text-neutral-700 hover:text-indigo-600" href="#" style={{animation: `fade-in .7s ease-out .55s both`}}>Login</a>
<a className="hidden sm:inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-indigo-500 transition hover:bg-indigo-50 text-sm font-medium text-indigo-600 font-geist border-indigo-200 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#" style={{animation: `fade-in .7s ease-out .65s both`}}>
<svg className="w-[16px] h-[16px]" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(79, 70, 229)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><polyline points="7 10 12 15 17 10"></polyline><line></line></svg>
            Download App
          </a>
</div>
</nav>

<section className="grid md:grid-cols-2 gap-10 sm:px-10 pr-6 pb-16 pl-6 items-center">

<div className="pt-6 md:pt-0" style={{animation: `slide-right .9s cubic-bezier(.16,1,.3,1) .2s both`}}>

<div className="inline-flex gap-2 bg-neutral-50 rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 shadow-sm items-center">
<i className="w-4 h-4 text-indigo-500" data-lucide="zap"></i>
<span className="text-xs font-medium font-geist text-neutral-600">The best kids course</span>
</div>

<h1 className="sm:text-5xl lg:text-6xl leading-tight text-5xl font-semibold text-neutral-900 tracking-wide font-space-grotesk text-left">
            Turn <br className="hidden sm:block" />learning <br />into <span className="relative font-semibold text-indigo-600 font-space-grotesk">
              fun!
              <span className="absolute left-0 -bottom-1 w-full h-2 rounded-full -z-10 bg-indigo-200"></span>
</span>
</h1>

<div className="flex flex-wrap items-center gap-4 mt-8">
<a className="inline-flex items-center justify-center outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 transition hover:bg-indigo-700 font-semibold text-white font-geist bg-indigo-600 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#">
              Get Started
            </a>
<a className="inline-flex items-center gap-2 outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 transition hover:border-indigo-600 hover:text-indigo-600 font-medium text-neutral-700 font-geist border-indigo-600 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#">
<svg className="w-[16px] h-[16px]" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(79, 70, 229)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Video
            </a>
</div>

<div className="mt-12 flex items-center gap-6 shadow-md rounded-2xl px-6 py-5 max-w-md bg-white" style={{animation: `fade-in .9s ease-out .5s both`}}>
<div className="">
<p className="text-2xl sm:text-3xl font-space-grotesk font-semibold text-indigo-600">320k+</p>
<p className="text-sm font-geist text-neutral-600">Children have learned  with our method</p>
</div>
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1542327897-acbfd35f0163?w=320&q=80" style={{}} />
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1713355582406-becefc2a915b?w=320&q=80" style={{}} />
<img alt="" className="w-10 h-10 rounded-full object-cover border-2 border-white" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" />
</div>
</div>
</div>

<div className="relative flex md:justify-end justify-center" style={{animation: `slide-left .9s cubic-bezier(.16,1,.3,1) .4s both`}}>

<i className="w-6 h-6 absolute -top-8 right-20 hidden md:block animate-pulse text-indigo-400" data-lucide="sparkles"></i>
<i className="w-6 h-6 absolute top-20 right-0 hidden md:block rotate-45 animate-ping text-blue-300" data-lucide="sparkles"></i>

<div className="relative w-64 sm:w-80 rounded-3xl shadow-2xl overflow-hidden ring-1 bg-white ring-neutral-200/50">

<div className="px-6 pt-6">
<p className="text-xs text-neutral-500 mb-1 font-geist">Good morning,</p>
<p className="text-base font-semibold font-geist text-neutral-800">Sarah Hessy</p>
</div>

<div className="mx-4 mt-4 rounded-xl p-4 bg-indigo-50">
<p className="text-sm font-medium mb-1 font-geist text-neutral-800">Math class in30 minutes</p>
<button className="mt-2 inline-flex items-center justify-center text-xs font-semibold rounded-full px-3 py-1 outline-offset-2 focus-visible:outline focus-visible:outline-indigo-500 transition font-geist bg-indigo-600 hover:bg-indigo-700 text-white">
                Join now
              </button>
</div>

<div className="flex gap-2 overflow-x-auto px-4 pt-4 pb-2 scrollbar-hide">
<span className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition font-geist bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
<svg className="w-[12px] h-[12px]" data-lucide="calculator" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="12" cy="5"></circle></svg> Math
              </span>
<span className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition font-geist bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
<svg className="w-[12px] h-[12px]" data-lucide="atom" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg> Science
              </span>
<span className="flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition font-geist bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
<svg className="w-[12px] h-[12px]" data-lucide="bulb" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `12px`, height: `12px`, color: `rgb(64, 64, 64)`}} viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Creativity
              </span>
</div>

<div className="px-6 pt-4 flex items-center justify-between">
<h3 className="text-base font-semibold font-geist text-neutral-800">New course</h3>
<a className="text-xs font-medium hover:underline font-geist text-indigo-600" href="#">See more</a>
</div>

<div className="grid grid-cols-2 gap-4 pt-4 pr-6 pb-6 pl-6">
<div className="h-32 flex hover:scale-[1.03] transition bg-center text-sm font-medium text-neutral-950 font-geist text-center bg-fuchsia-100 rounded-xl pr-2 pl-2 items-center justify-center">Drawing practice</div>
<div className="h-32 flex hover:scale-[1.03] transition text-sm font-medium text-neutral-950 font-geist text-center bg-indigo-50 rounded-xl pr-2 pl-2 items-center justify-center">Learning to count</div>
</div>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
