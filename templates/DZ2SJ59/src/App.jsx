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
      <div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-90"><iframe frameborder="0" height="100%" src="https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q" width="100%"></iframe></div>
<div className="w-full max-w-6xl overflow-hidden flex flex-col lg:flex-row animate-blur-in bg-white/80 border-white/20 border rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur-xl">

<div className="w-full lg:w-1/2 sm:p-8 md:p-12 lg:p-16 pt-6 pr-6 pb-6 pl-6">

<div className="inline-flex items-center px-3 py-1 rounded-xl border border-violet-200 bg-violet-50 text-violet-700 text-sm font-medium mb-12 font-geist animate-fade-up delay-100">
<svg className="w-4 h-4 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="7.5,4.21 12,6.81 16.5,4.21"></polyline>
<polyline points="7.5,19.79 7.5,14.6 3,12"></polyline>
<polyline points="21,12 16.5,14.6 16.5,19.79"></polyline>
</svg>
        NeoFlow
      </div>

<h1 className="text-3xl lg:text-4xl text-slate-900 tracking-tight font-space-grotesk animate-fade-up delay-200">Create your workspace</h1>
<p className="text-slate-600 mt-2 text-base font-geist animate-fade-up delay-300">Get started with your free account today</p>

<form className="mt-10 space-y-4">
<div className="animate-slide-right delay-400">
<label className="sr-only font-geist" htmlFor="fullname">Full name</label>
<input className="w-full rounded-xl py-3 px-4 border border-slate-200 bg-white/50 placeholder-slate-400 text-slate-900 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200" id="fullname" placeholder="Full name" type="text"/>
</div>
<div className="animate-slide-right delay-500">
<label className="sr-only font-geist" htmlFor="email">Email address</label>
<input className="w-full rounded-xl py-3 px-4 border border-slate-200 bg-white/50 placeholder-slate-400 text-slate-900 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200" id="email" placeholder="Email address" type="email"/>
</div>
<div className="relative animate-slide-right delay-600">
<label className="sr-only font-geist" htmlFor="password">Password</label>
<input className="w-full rounded-xl py-3 px-4 pr-12 border border-slate-200 bg-white/50 placeholder-slate-400 text-slate-900 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200" id="password" placeholder="Create password" type="password"/>
<button aria-label="Continue" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600 transition-colors" type="button">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<button className="w-full hover:from-violet-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 animate-scale-up delay-700 font-medium text-white font-geist bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" type="submit">
          Get Started
        </button>
<div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-800">
<button className="flex items-center justify-center w-full gap-2 rounded-xl border border-slate-200 bg-white/50 py-3 hover:bg-white/70 hover:border-slate-300 transition-all duration-200 group" type="button">
<svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
<span className="font-medium text-slate-700 font-geist">GitHub</span>
</button>
<button className="flex items-center justify-center w-full gap-2 rounded-xl border border-slate-200 bg-white/50 py-3 hover:bg-white/70 hover:border-slate-300 transition-all duration-200 group" type="button">
<svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<line x1="21.17" x2="12" y1="8" y2="8"></line>
<line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
<line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
</svg>
<span className="font-medium text-slate-700 font-geist">Google</span>
</button>
</div>
</form>

<div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500 space-y-3 sm:space-y-0 animate-fade-up delay-900">
<span className="font-geist">Already have an account? <a className="text-violet-600 hover:text-violet-700 font-medium font-geist" href="#">Sign in</a></span>
<a className="hover:text-slate-700 underline font-geist" href="#">Terms &amp; Privacy</a>
</div>
</div>

<div className="w-full lg:w-1/2 relative min-h-[24rem] lg:min-h-[36rem] overflow-hidden animate-blur-in delay-200 bg-[url(https://cdn.midjourney.com/ddbd3d4d-dfb1-47cc-9964-ea9c84f0faa9/0_3.png?w=800&amp;q=80)] bg-cover">

<div %3e%3c="" %3e%3ccircle="" %3e%3cg="" 60"="" className="absolute inset-0 width=" cx="30" cy="30" fill="none" fillOpacity="0.1" fill-rule="evenodd" g%3e%3c="" height="60" opacity-40"="" r="2" svg%3e')]="" viewbox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>

<button aria-label="Close" className="absolute top-4 right-4 w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-white/20 transition-colors z-10 animate-scale-up delay-1000">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="absolute top-6 left-6 glass-card max-w-xs z-10 animate-slide-right delay-600 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-white rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<p className="font-medium font-geist">Analytics Review</p>
</div>
<p className="text-sm mt-1 text-white/80 font-geist">3:30pm–4:45pm</p>
</div>

<div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 glass-card z-10 animate-fade-up delay-800 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-white rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex justify-between items-center mb-4">
<span className="font-medium font-geist">Weekly Progress</span>
<span className="text-sm text-white/70 font-geist">+12%</span>
</div>
<div className="grid grid-cols-7 gap-2">
<div className="text-center">
<span className="block text-xs text-white/70 font-geist">M</span>
<div className="w-6 h-8 bg-white/30 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center">
<span className="block text-xs text-white/70 font-geist">T</span>
<div className="w-6 h-10 bg-white/40 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center">
<span className="block text-xs text-white/70 font-geist">W</span>
<div className="w-6 h-12 bg-white/50 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center">
<span className="block text-xs text-white/70 font-geist">T</span>
<div className="w-6 h-9 bg-white/35 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center">
<span className="block text-xs text-white/70 font-geist">F</span>
<div className="w-6 h-14 bg-white/60 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center hidden sm:block">
<span className="block text-xs text-white/70 font-geist">S</span>
<div className="w-6 h-6 bg-white/25 rounded-sm mx-auto mt-1"></div>
</div>
<div className="text-center hidden sm:block">
<span className="block text-xs text-white/70 font-geist">S</span>
<div className="w-6 h-7 bg-white/30 rounded-sm mx-auto mt-1"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 glass-card w-72 max-w-[calc(100%-3rem)] z-10 animate-slide-right delay-1000 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="flex items-center justify-between mb-2">
<span className="font-medium text-white font-geist">Team Standup</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs text-white/70 font-geist">Live</span>
</div>
</div>
<p className="text-sm text-white/70 mb-3 font-geist">9:00am–9:30am</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 flex bg-gradient-to-br from-pink-400 to-purple-500 rounded-full items-center justify-center">
<span className="text-white text-xs font-medium font-geist">S</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
<span className="text-white text-xs font-medium font-geist">M</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
<span className="text-white text-xs font-medium font-geist">A</span>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
<span className="text-white text-xs font-medium font-geist">J</span>
</div>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<span className="text-white text-xs font-medium font-geist">+3</span>
</div>
</div>
<button className="text-white/70 hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
