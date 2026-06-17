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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="bg-cyan-600 text-white p-1.5 rounded-lg">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path className="" d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">Quiet Check</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors font-sans" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors font-sans" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors font-sans" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors font-sans" href="#faq">FAQ</a>
</div>

<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all hover:shadow-md text-sm font-medium text-white bg-slate-900 border-transparent border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm" href="#pricing">Join the Waitlist</a>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient">

<div className="bg-center opacity-100 mix-blend-overlay bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&amp'}}></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 gap-x-12 gap-y-12 items-center">

<div className="lg:text-left lg:mx-0 text-center max-w-2xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium mb-6 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        New: Fall detection integration live
                    </div>
<h1 className="leading-[1.1] sm:text-5xl lg:text-6xl text-6xl font-normal text-white tracking-tight font-instrument-serif mb-6">
                        Twenty notifications become one: <span className="text-cyan-400 font-instrument-serif font-normal">she's okay.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-sans">
                        Connect Mom's Hue lights, Ring doorbell, and Health data into a single intelligent dashboard. AI that learns her routine and only alerts you when it matters.
                    </p>
<div className="flex flex-col gap-3 w-full max-w-lg mx-auto lg:mx-0">
<form className="flex flex-col sm:flex-row gap-2.5 w-full">
<div className="relative flex-1">
<input className="w-full h-11 bg-white/5 border border-white/10 text-white text-sm rounded-full px-5 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-500/10 focus:bg-white/10 transition-all font-sans" placeholder="First name" required="" type="text"/>
</div>
<div className="relative flex-[1.4]">
<input className="w-full h-11 bg-white/5 border border-white/10 text-white text-sm rounded-full px-5 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-500/10 focus:bg-white/10 transition-all font-sans" placeholder="Email address" required="" type="email"/>
</div>
<button className="h-11 inline-flex items-center justify-center px-6 text-sm font-medium rounded-full text-slate-900 bg-white hover:bg-cyan-50 hover:text-cyan-600 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)] whitespace-nowrap font-sans" type="submit">
            Join Waitlist
        </button>
</form>
<div className="flex items-center justify-center lg:justify-start gap-2 pl-2 opacity-80 hover:opacity-100 transition-opacity">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<p className="text-[11px] font-medium text-slate-400 tracking-wide uppercase font-sans">Rolling out to beta users</p>
</div>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p className="font-sans">Trusted by 2,000+ families</p>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none">

<div className="relative rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">

<div className="px-4 py-3 border-b border-slate-700 bg-slate-800/50 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<div className="w-3 h-3 rounded-full bg-pink-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-xs font-medium text-slate-400">Quiet Check Dashboard</div>
</div>

<div className="p-6 space-y-4">

<div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-sm font-sans">Mom is Okay</h3>
<p className="text-green-400 text-xs font-sans">Activity normal. Coffee started at 7:15 AM.</p>
</div>
</div>

<div className="space-y-3 pl-2 border-l border-slate-700 ml-2">
<div className="relative pl-6">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-slate-900"></div>
<p className="text-xs text-slate-500 mb-0.5 font-sans">8:30 AM</p>
<p className="text-sm text-slate-300 font-sans">Front door opened (Mail collected)</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-slate-900"></div>
<p className="text-xs text-slate-500 mb-0.5 font-sans">7:15 AM</p>
<p className="text-sm text-slate-300 font-sans">Kitchen motion detected (Coffee routine)</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-slate-900"></div>
<p className="text-xs text-slate-500 mb-0.5 font-sans">6:45 AM</p>
<p className="text-sm text-slate-300 font-sans">Wake up detected (Apple Watch)</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100 hidden sm:block animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-cyan-100 p-2 rounded-lg text-cyan-600">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase font-semibold font-sans">Weekly Insight</p>
<p className="text-sm font-medium text-slate-900 font-sans">Sleep quality up 12%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<p className="text-center text-sm font-medium text-slate-500 mb-6 font-sans">INTEGRATES SEAMLESSLY WITH DEVICES YOU ALREADY OWN</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-serif text-slate-800 flex items-center gap-2 font-sans"><svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s1.18-.74 2.94-.74c.67 0 1.99.21 2.94 1.25-.51 2.35 1.76 3.38 1.62 5.01-.5 2.5-1.62 4.71-2.58 6.71zM12.03 5.31c-.44-2.21 1.62-3.97 3.53-4.12.29 2.06-1.91 4.12-3.53 4.12z"></path></svg> Apple Health</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2 font-sans">ring</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2 font-sans">PHILIPS hue</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2 font-sans">ecobee</span>
<span className="text-xl font-bold text-slate-800 flex items-center gap-2 font-sans">Arlo</span>
</div>
</div>
</div>

<section className="py-20 sm:py-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight font-instrument-serif font-normal">The "Is she okay?" Anxiety</h2>
<p className="text-lg text-slate-600 font-sans">Managing aging parents from afar shouldn't mean drowning in notifications or constant phone calls.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Notification Overload</h3>
<p className="text-slate-600 leading-relaxed font-sans">Motion at the door. Light turned on. Pillbox opened. 20 alerts a day, but none answer the simple question: is she safe?</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Fragmented Data</h3>
<p className="text-slate-600 leading-relaxed font-sans">Checking 5 different apps (camera, health, lights) just to piece together her morning routine is exhausting and inefficient.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">The Checking Call</h3>
<p className="text-slate-600 leading-relaxed font-sans">Calling "just to check in" creates tension. Parents feel monitored, and you feel intrusive. There has to be a better way.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-12">
<span className="text-cyan-600 font-semibold tracking-wide uppercase text-sm font-sans">The Solution</span>
<h2 className="text-3xl sm:text-4xl text-slate-900 mt-2 mb-4 tracking-tight font-instrument-serif font-normal">Intelligence, not just integration.</h2>
<p className="text-lg text-slate-600">Quiet Check doesn't just collect data. It learns what "normal" looks like for your loved one.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[300px] gap-x-6 gap-y-6">

<div className="md:col-span-6 lg:col-span-8 row-span-2 rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
<div className="relative p-8 h-full flex flex-col">
<h3 className="text-2xl text-slate-900 mb-2 font-instrument-serif font-normal">Unified Care Dashboard</h3>
<p className="text-slate-600 max-w-md font-sans">All devices in one view. Medication, sleep, movement, and door sensors combined into a single status indicator.</p>

<div className="mt-auto pt-8 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="bg-white border-slate-200 border rounded-t-xl p-6 pb-20 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] relative group overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-80"></div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-slate-100 to-slate-200 ring-1 ring-slate-200 shadow-sm">
<img alt="Mom" className="object-cover h-full w-full rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100"/>
</div>
<div className="absolute bottom-0 right-0 translate-x-1 translate-y-1">
<span className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
</span>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight leading-none mb-1">Martha's Home</h3>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Monitoring Active</p>
</div>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-50 rounded-lg">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-sm transition-all duration-200 group/item">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover/item:bg-indigo-100 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div>
<div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Sleep Score</div>
<div className="text-sm font-bold text-slate-900">8h 30m</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Optimal</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-rose-100 hover:shadow-sm transition-all duration-200 group/item">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover/item:bg-rose-100 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="">
<div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Medication</div>
<div className="text-sm font-bold text-slate-900">All Taken</div>
</div>
</div>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-rose-500"></div>
<div className="h-2 w-2 rounded-full bg-rose-500"></div>
<div className="h-2 w-2 rounded-full bg-rose-200"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-cyan-100 hover:shadow-sm transition-all duration-200 group/item">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover/item:bg-cyan-100 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
</div>
<div>
<div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Motion</div>
<div className="text-sm font-bold text-slate-900">Kitchen</div>
</div>
</div>
<div className="text-xs font-medium text-slate-400">2m ago</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-[60px] opacity-20"></div>
<div className="">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="airplay" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(34, 211, 238)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><path d="m12 15 5 6H7Z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2 font-sans">Smart Anomalies</h3>
<p className="text-slate-400 text-sm font-sans">We alert you if the bathroom door doesn't open by 9 AM or if fridge usage is irregular.</p>
</div>
<div className="mt-4 bg-slate-800/50 rounded-lg p-3 border border-slate-700">
<div className="flex items-start gap-3">
<div className="text-pink-500 mt-0.5">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<div className="text-xs">
<span className="block text-slate-200 font-medium font-sans">Unusual Pattern</span>
<span className="text-slate-400 font-sans">Front door left open &gt; 10 mins</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-8">
<div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 mb-4">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="briefcase-medical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(244, 63, 94)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11v4"></path><path d="M14 13h-4"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M18 6v14"></path><path d="M6 6v14"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 font-sans">Medication Tracking</h3>
<p className="text-slate-600 text-sm font-sans">Integrates with smart pill dispensers or detects motion at the medicine cabinet.</p>
</div>

<div className="md:col-span-6 lg:col-span-12 flex flex-col lg:flex-row bg-white border-slate-200 border rounded-3xl overflow-hidden group hover:shadow-lg transition-all duration-300">

<div className="flex-1 p-8 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500 mb-6">
<svg className="lucide lucide-activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Passive Protection</h3>
<p className="text-slate-600 text-sm font-sans leading-relaxed mb-6 max-w-lg">
            Forget charging wearables or remembering to put on a pendant. Our system intelligently fuses data from existing smart home devices—motion sensors, door contacts, and smart plugs—to create a safety net that's always on but never intrusive.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium font-sans">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Privacy-first analysis</span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium font-sans">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Works with Hue &amp; Ring</span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium font-sans">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>0% false alarm rate</span>
</div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium font-sans">
<svg className="text-green-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Historical insights</span>
</div>
</div>
</div>

<div className="flex-1 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100 p-8 relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-full max-w-sm">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-sans">Live Sensor Feed</span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-green-600 font-sans">Monitoring</span>
</div>
</div>
<div className="divide-y divide-slate-50">

<div className="p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate font-sans">Living Room Motion</p>
<span className="text-[10px] text-slate-400 font-sans">Just now</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-orange-400 h-1 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>

<div className="p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate font-sans">Kitchen Smart Plug</p>
<span className="text-[10px] text-slate-400 font-sans">12m ago</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-blue-400 h-1 rounded-full opacity-40" style={{width: '100%'}}></div>
</div>
</div>
</div>

<div className="p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors opacity-60">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<p className="text-sm font-medium text-slate-900 truncate font-sans">Thermostat</p>
<span className="text-[10px] text-slate-400 font-sans">45m ago</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1">
<div className="bg-slate-400 h-1 rounded-full opacity-20" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 -bottom-4 bg-white/90 backdrop-blur border border-slate-200 shadow-lg rounded-lg p-3 text-xs max-w-[140px] transform rotate-2 hidden sm:block">
<p className="font-medium text-slate-900 mb-1 font-sans">AI Insight</p>
<p className="text-slate-500 font-sans">Normal morning routine detected.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl text-slate-900 tracking-tight font-instrument-serif font-normal">Setup in minutes, peace of mind for years</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200 w-full z-0"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl text-cyan-600 font-instrument-serif font-normal">1</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Connect Devices</h3>
<p className="text-slate-600 text-sm max-w-xs font-sans">Securely link existing smart devices (Hue, Ring, Apple Health) via our API.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl text-cyan-600 font-instrument-serif font-normal">2</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">AI Learns Patterns</h3>
<p className="text-slate-600 text-sm max-w-xs font-sans">Our system observes routine for 7 days to understand wake times and habits.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl text-cyan-600 font-instrument-serif font-normal">3</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Smart Alerts</h3>
<p className="text-slate-600 text-sm max-w-xs font-sans">Receive one daily summary and instant alerts only when something is actually wrong.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 text-slate-200">
<svg fill="currentColor" height="64" viewbox="0 0 24 24" width="64"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 17.2091 21.2261 19 19.017 19H16.017C15.4647 19 15.017 19.4477 15.017 20V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H10.0166C12.2257 5 14.0166 6.79086 14.0166 9V15C14.0166 17.2091 12.2257 19 10.0166 19H7.0166C6.46432 19 6.0166 19.4477 6.0166 20V21H5.0166Z"></path></svg>
</div>
<blockquote className="text-2xl text-slate-900 leading-relaxed relative z-10 font-instrument-serif font-normal">
                        "I used to check five different apps every morning to see if Mom was up. Now I get one notification: 'Mom is okay.' It has completely removed the daily anxiety without taking away her independence."
                    </blockquote>
<div className="mt-6 flex items-center gap-4">
<img alt="Sarah J" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<div className="font-semibold text-slate-900 font-sans">Sarah Jenkins</div>
<div className="text-sm text-slate-500 font-sans">Managing care for mother in Florida</div>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-center group">

<div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<h3 className="text-3xl font-normal font-instrument-serif text-white tracking-tight">Real results</h3>
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-cyan-300">Live verified</span>
</div>
</div>
<div className="space-y-4">

<div className="group/card relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
<svg className="" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line className="" x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">95%</span>
<span className="text-sm text-slate-400">reduction</span>
</div>
<p className="text-slate-400 text-sm font-medium leading-tight mt-0.5">False alarm notifications</p>
</div>
</div>
</div>

<div className="group/card relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">3x</span>
<span className="text-sm text-slate-400">faster</span>
</div>
<p className="text-slate-400 text-sm font-medium leading-tight mt-0.5">Emergency detection speed</p>
</div>
</div>
</div>

<div className="group/card relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">4hrs</span>
<span className="text-sm text-slate-400">saved</span>
</div>
<p className="text-slate-400 text-sm font-medium leading-tight mt-0.5">Weekly on manual checking</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-28 bg-slate-50" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight font-instrument-serif font-normal">Simple Pricing, No Contracts</h2>
<p className="text-lg text-slate-600 font-sans">Choose the level of monitoring that fits your family's needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 font-sans">Standard</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl tracking-tight text-slate-900 font-instrument-serif font-normal">$14.99</span>
<span className="ml-1 text-xl font-semibold text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-2 text-sm text-slate-500 font-sans">Perfect for active seniors.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Unified Dashboard</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Daily "Mom is Okay" Report</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Up to 5 Devices</span>
</li>
</ul>
<a className="group relative block w-full py-3 px-4 rounded-lg bg-slate-50 text-slate-900 font-medium text-center hover:bg-slate-100 transition-all font-sans overflow-hidden border border-slate-200" href="#waitlist">
<div className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
<span className="text-sm uppercase tracking-wide font-semibold text-slate-500 group-hover:text-slate-600">Coming Soon</span>
</div>
<div className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
<span>Join Waitlist</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>

<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col relative transform scale-105">
<div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-cyan-500 text-white text-xs font-bold uppercase rounded-full tracking-wide font-sans">Popular</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white font-sans">Premium Protection</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl tracking-tight text-white font-instrument-serif font-normal">$19.99</span>
<span className="ml-1 text-xl font-semibold text-slate-400 font-sans">/mo</span>
</div>
<p className="mt-2 text-sm text-slate-400 font-sans">Advanced AI &amp; health insights.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-300 text-sm font-sans">Everything in Standard</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-300 text-sm font-sans">Unlimited Devices</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-400 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-300 text-sm font-sans">AI Anomaly Detection</span>
</li>
</ul>
<a className="group relative block w-full py-3 px-4 rounded-lg bg-cyan-600 text-white font-medium text-center hover:bg-cyan-500 transition-all font-sans overflow-hidden" href="#waitlist">
<div className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
<span className="text-sm uppercase tracking-wide font-semibold text-cyan-100">Coming Soon</span>
</div>
<div className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
<span>Join Waitlist</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 font-sans">Facility</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl tracking-tight text-slate-900 font-instrument-serif font-normal">Custom</span>
</div>
<p className="mt-2 text-sm text-slate-500 font-sans">For Senior Living Communities.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Multi-resident Dashboard</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Staff Alerts</span>
</li>
<li className="flex items-start">
<svg className="h-5 w-5 text-indigo-500 shrink-0 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 text-sm font-sans">Hardware Installation</span>
</li>
</ul>
<a className="group relative block w-full py-3 px-4 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium text-center hover:bg-slate-50 transition-colors font-sans overflow-hidden" href="#contact">
<div className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
<span>Contact Sales</span>
</div>
<div className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
<span>Inquire Now</span>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl text-slate-900 mb-12 text-center tracking-tight font-instrument-serif font-normal">Common Questions</h2>
<div className="space-y-6">
<div className="border-b border-slate-100 pb-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 font-sans">Do I need to buy new devices?</h3>
<p className="text-slate-600" style={{}}>Likely not. Quiet Check works with over 500 existing smart home devices including Philips Hue, Ring, Nest, Ecobee, and Apple Health. We just connect the dots.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 font-sans">Is my parent's data private?</h3>
<p className="text-slate-600 font-sans">Absolutely. We use bank-level 256-bit encryption. Data is shared strictly between the senior and the authorized family members. We do not sell health data.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 font-sans">How does the "AI" actually work?</h3>
<p className="text-slate-600 font-sans">The app builds a baseline of "normal" (e.g., Mom usually makes coffee at 7 AM, opens the back door at 9 AM). If patterns deviate significantly (no coffee by 10 AM), we alert you.</p>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 font-sans">What if I want to cancel?</h3>
<p className="text-slate-600 font-sans">You can cancel anytime directly from the app. There are no long-term contracts for our family plans.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl mb-6 tracking-tight font-instrument-serif font-normal">Stop worrying. Start knowing.</h2>
<p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-sans">Join the families who have swapped notification fatigue for peace of mind. Try it risk-free.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="hover:bg-cyan-500 transition-colors shadow-cyan-900/50 text-lg font-medium bg-cyan-600 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#pricing">Join the Waitlist</a>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="bg-cyan-600 text-white p-1 rounded">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-lg font-semibold text-slate-900">Quiet Check</span>
</div>
<p className="text-slate-500 text-sm max-w-xs font-sans">Empowering seniors to age in place while giving families peace of mind through intelligent connectivity.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 font-sans">Product</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-cyan-600 font-sans" href="#">Features</a></li>
<li><a className="hover:text-cyan-600 font-sans" href="#">Integrations</a></li>
<li><a className="hover:text-cyan-600 font-sans" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 font-sans">Company</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-cyan-600 font-sans" href="#">About</a></li>
<li><a className="hover:text-cyan-600 font-sans" href="#">Blog</a></li>
<li><a className="hover:text-cyan-600 font-sans" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2025 Quiet Check Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
