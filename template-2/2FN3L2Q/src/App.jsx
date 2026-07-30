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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: `url("/assets/bc6d9465-07ac-48f8-a600-79362e8b2b11_3840w.jpg")`}}></div>
<div className="flex gap-8 flex-wrap mx-8 my-12 justify-center">

<div className="w-80 h-[680px] bg-white/10 backdrop-blur-sm rounded-[3rem] p-1 shadow-lg border border-white/20">
<div className="w-full h-full rounded-[2.5rem] bg-black overflow-hidden relative">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50"></div>

<div className="h-full flex flex-col p-4 bg-gradient-to-br from-black to-zinc-900 text-white">

<div className="flex items-center justify-between pt-8 pb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<span className="font-medium text-lg font-geist">Mindful</span>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs text-zinc-400 font-geist">Streak</div>
<div className="text-lg font-semibold text-emerald-400 font-geist">7</div>
</div>
<svg className="text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
</div>

<div className="flex-1 flex flex-col gap-6">

<div className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-900" style={{backgroundImage: `url('/assets/38367144-d0a1-4363-84fa-a3c129fdd6bf_1600w.jpg')`, backgroundSize: `cover`, backgroundPosition: `center`}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative h-full p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
<span className="text-xs font-medium font-geist">Today's Session</span>
</div>
<div className="text-right">
<div className="text-2xl font-geist font-semibold">12</div>
<div className="text-xs opacity-80 font-geist">minutes</div>
</div>
</div>
<div className="">
<h1 className="text-2xl tracking-tight mb-2 font-geist font-semibold">Morning Gratitude</h1>
<p className="text-emerald-100 text-xs mb-3 opacity-90 font-geist">Start your day with intention and appreciation</p>
<button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl py-3 px-4 flex items-center justify-center gap-3 text-sm font-medium font-geist">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="5,3 19,12 5,21"></polygon></svg>
                                        Continue Session
                                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<svg className="text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
<span className="text-xs text-zinc-400 font-geist">5 min</span>
</div>
<h3 className="text-sm font-medium mb-1 font-geist">Breathwork</h3>
<p className="text-xs text-zinc-400 font-geist">4-7-8 Technique</p>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
<span className="text-xs text-zinc-400 font-geist">15 min</span>
</div>
<h3 className="text-sm font-medium mb-1 font-geist">Sleep Stories</h3>
<p className="text-xs text-zinc-400 font-geist">Ocean Waves</p>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<svg className="text-amber-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline><polyline points="16,7 22,7 22,13"></polyline></svg>
<span className="text-sm font-medium font-geist">This Week</span>
</div>
<span className="text-xs bg-amber-500 text-black px-2 py-1 rounded-full font-semibold font-geist">+28%</span>
</div>
<div className="space-y-2 text-xs">
<div className="flex justify-between">
<span className="text-zinc-400 font-geist">Sessions completed</span>
<span className="font-medium font-geist">12/14</span>
</div>
<div className="flex justify-between">
<span className="text-zinc-400 font-geist">Total time</span>
<span className="font-medium font-geist">2h 47m</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-amber-400 h-1.5 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
</div>
</div>

<div className="flex justify-center pt-4 pb-2">
<div className="flex gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 h-[680px] bg-white/10 backdrop-blur-sm rounded-[3rem] p-1 shadow-lg border border-white/20">
<div className="w-full h-full rounded-[2.5rem] bg-black overflow-hidden relative">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50"></div>

<div className="h-full flex flex-col p-4 bg-gradient-to-br from-black to-purple-900/20 text-white">

<div className="flex items-center justify-between pt-8 pb-6">
<h1 className="text-xl tracking-tight font-geist">Session Library</h1>
<div className="flex items-center gap-3">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon></svg>
</div>
</div>

<div className="relative h-48 rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-purple-600 to-purple-900" style={{backgroundImage: `url('/assets/088b775e-f259-464f-8b1e-c4a769c3f7ca_1600w.jpg')`, backgroundSize: `cover`, backgroundPosition: `center`}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative h-full p-5 flex flex-col justify-between">
<div className="flex justify-between">
<span className="text-xs bg-purple-400/20 text-purple-200 px-3 py-1.5 rounded-full font-medium font-geist">Featured</span>
<div className="flex items-center gap-1">
<svg className="text-yellow-400" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>
<span className="text-xs font-geist">4.9</span>
</div>
</div>
<div>
<h2 className="text-lg mb-1 font-geist">Deep Focus Collection</h2>
<p className="text-purple-100 text-xs opacity-90 mb-3 font-geist">12 sessions • Expert guided</p>
<button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl py-2.5 px-4 flex items-center gap-2">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="5,3 19,12 5,21"></polygon></svg>
<span className="text-xs font-medium font-geist">Start Collection</span>
</button>
</div>
</div>
</div>

<div className="flex-1">
<h3 className="text-sm font-medium mb-3 font-geist">Categories</h3>
<div className="space-y-3">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
</div>
<div className="">
<div className="text-sm font-medium font-geist">Focus & Concentration</div>
<div className="text-xs text-zinc-400 font-geist">12 sessions available</div>
</div>
</div>
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9,18 15,12 9,6"></polyline></svg>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
</div>
<div>
<div className="text-sm font-medium font-geist">Anxiety Relief</div>
<div className="text-xs text-zinc-400 font-geist">8 sessions available</div>
</div>
</div>
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9,18 15,12 9,6"></polyline></svg>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-rose-500/20 rounded-xl flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
</div>
<div className="">
<div className="text-sm font-medium font-geist">Self Compassion</div>
<div className="text-xs text-zinc-400 font-geist">15 sessions available</div>
</div>
</div>
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9,18 15,12 9,6"></polyline></svg>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-cyan-500/20 rounded-xl flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
</div>
<div>
<div className="text-sm font-medium font-geist">Body Scan</div>
<div className="text-xs text-zinc-400 font-geist">6 sessions available</div>
</div>
</div>
<svg className="text-zinc-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9,18 15,12 9,6"></polyline></svg>
</div>
</div>
</div>

<div className="flex justify-center pt-4 pb-2">
<div className="flex gap-2">
<div className="w-2 h-2 bg-zinc-600 rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
