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
      

<div className="relative w-full max-w-[380px] h-[820px] bg-white/40 rounded-[3rem] shadow-2xl border-[6px] border-white overflow-hidden flex flex-col mesh-gradient">

<div className="absolute inset-0 z-0 pointer-events-none opacity-50">
<svg height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="relative z-10 px-6 pt-10 pb-4 flex flex-col h-[30%] justify-between">

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-zinc-200 bg-white/50 text-zinc-500 uppercase tracking-wider">Level 4</span>
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Explorer</span>
</div>
<h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Felix Henderson</h1>
</div>
<div className="p-1.5 bg-white/60 rounded-full shadow-sm border border-white cursor-pointer hover:scale-105 transition-transform">
<img alt="User" className="w-9 h-9 rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>

<div className="grid grid-cols-3 gap-2.5 mt-2">

<div className="flex flex-col p-3 bg-white/40 border border-white/60 rounded-2xl backdrop-blur-md shadow-sm relative overflow-hidden group">
<div className="absolute right-0 top-0 p-2 opacity-10">
<i className="w-8 h-8" data-lucide="flame"></i>
</div>
<div className="flex items-center gap-1.5 mb-1">
<i className="w-3.5 h-3.5 text-orange-500 fill-orange-500" data-lucide="flame"></i>
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Streak</span>
</div>
<span className="text-xl font-bold text-zinc-800 tracking-tight">12 <span className="text-xs text-zinc-400 font-medium">days</span></span>
</div>

<div className="flex flex-col p-3 bg-white/40 border border-white/60 rounded-2xl backdrop-blur-md shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-2 opacity-10">
<i className="w-8 h-8" data-lucide="star"></i>
</div>
<div className="flex items-center gap-1.5 mb-1">
<i className="w-3.5 h-3.5 text-violet-500 fill-violet-500" data-lucide="star"></i>
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">XP</span>
</div>
<span className="text-xl font-bold text-zinc-800 tracking-tight">2.4k</span>
</div>

<div className="flex flex-col p-3 bg-white/40 border border-white/60 rounded-2xl backdrop-blur-md shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 p-2 opacity-10">
<i className="w-8 h-8" data-lucide="trending-up"></i>
</div>
<div className="flex items-center gap-1.5 mb-1">
<i className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" data-lucide="zap"></i>
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Momtm.</span>
</div>
<span className="text-xl font-bold text-zinc-800 tracking-tight">94 <span className="text-xs text-emerald-600 font-bold">▲</span></span>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between items-end mb-1.5">
<span className="text-[10px] font-semibold text-zinc-500">Progress to Level 5</span>
<span className="text-[10px] font-bold text-zinc-400">840 / 1200 XP</span>
</div>
<div className="w-full h-1.5 bg-zinc-200/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 rounded-full w-[70%]"></div>
</div>
</div>
</div>

<div className="flex-1 bg-white/60 backdrop-blur-xl rounded-t-[2.5rem] relative z-20 border-t border-white/50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">

<div className="w-full flex justify-center pt-3 pb-1">
<div className="w-12 h-1 bg-zinc-300/50 rounded-full"></div>
</div>

<div className="overflow-y-auto hide-scroll flex-1 px-5 pt-2 pb-32">

<div className="mb-10 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
<div className="relative bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm flex ticket-mask">

<div className="w-[85px] bg-zinc-900 flex flex-col items-center justify-center p-3 text-white relative">
<i className="w-6 h-6 mb-2 text-violet-300" data-lucide="ticket"></i>
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 rotate-180" style={{writingMode: 'vertical-rl'}}>Daily</span>
</div>

<div className="w-[2px] h-full border-l-2 border-dashed border-zinc-200 absolute left-[85px] top-0 bottom-0 z-10"></div>

<div className="flex-1 p-5 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-violet-100 text-violet-700 uppercase">Mission</span>
<span className="text-[10px] font-semibold text-zinc-400">15 min left</span>
</div>
<h3 className="font-bold text-zinc-800 leading-tight">Compliment a Stranger</h3>
<p className="text-xs text-zinc-400 mt-1">Focus on something they chose (shoes, hair).</p>
</div>
</div>
</div>

<div className="relative">
<div className="flex items-center justify-between mb-6 px-1">
<h2 className="text-lg font-bold text-zinc-900 tracking-tight">Your Journey</h2>
<button className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 transition-colors">View Map</button>
</div>

<svg className="absolute top-[3rem] left-0 w-full h-full -z-10 pointer-events-none" style={{height: '500px'}}>

<path d="M 50 20 C 50 100, 250 100, 250 180 C 250 260, 50 260, 50 340" fill="none" stroke="#e4e4e7" stroke-dasharray="6 6" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="space-y-16 relative">

<div className="flex justify-start pl-2">
<div className="relative w-40">
<div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm opacity-60 grayscale-[0.5]">
<div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
<i className="w-4 h-4 text-emerald-600 stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-[10px] font-bold text-zinc-400 uppercase">Unit 1.1</span>
<h4 className="text-sm font-bold text-zinc-800 leading-tight mt-1">Eye Contact Basics</h4>
</div>
</div>
</div>

<div className="flex justify-end pr-2">
<div className="relative w-48 group cursor-pointer">

<div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-white p-5 rounded-2xl border border-violet-100 shadow-xl flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center text-violet-600">
<i className="w-4 h-4 fill-current" data-lucide="play"></i>
</div>
<div className="px-2 py-1 bg-zinc-900 text-white text-[10px] font-bold rounded-md">
                                            RESUME
                                        </div>
</div>
<div>
<h4 className="text-base font-bold text-zinc-900 leading-tight">The 3-Second Pause</h4>
<p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">Master the art of silence to build authority.</p>
</div>

<div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-violet-600 w-2/3 h-full rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex justify-start pl-2">
<div className="relative w-40">
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 shadow-inner">
<div className="flex justify-between items-start mb-2">
<i className="w-4 h-4 text-zinc-300" data-lucide="lock"></i>
</div>
<span className="text-[10px] font-bold text-zinc-300 uppercase">Unit 1.3</span>
<h4 className="text-sm font-bold text-zinc-400 leading-tight mt-1">Mirroring</h4>
</div>
</div>
</div>

<div className="flex justify-end pr-2">
<div className="relative w-40">
<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 shadow-inner">
<div className="flex justify-between items-start mb-2">
<i className="w-4 h-4 text-zinc-300" data-lucide="lock"></i>
</div>
<span className="text-[10px] font-bold text-zinc-300 uppercase">Unit 1.4</span>
<h4 className="text-sm font-bold text-zinc-400 leading-tight mt-1">Open Qs</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
<div className="glass-nav px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl shadow-black/20 border border-white/10">
<button className="relative w-11 h-11 rounded-full flex items-center justify-center text-white bg-zinc-800 shadow-inner">
<i className="w-5 h-5" data-lucide="home"></i>

<span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
</button>
<button className="w-11 h-11 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">
<i className="w-5 h-5" data-lucide="compass"></i>
</button>

<button className="mx-1 w-12 h-12 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-500/40 hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="mic"></i>
</button>
<button className="w-11 h-11 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">
<i className="w-5 h-5" data-lucide="trophy"></i>
</button>
<button className="w-11 h-11 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
