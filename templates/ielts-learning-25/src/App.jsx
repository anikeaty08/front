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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="mx-auto max-w-md bg-slate-50 min-h-screen relative overflow-x-hidden shadow-[0_0_50px_rgba(0,0,0,0.05)] flex flex-col">

<header className="sticky top-0 z-50 bg-slate-50/85 backdrop-blur-xl px-5 py-4 flex items-center justify-between border-b border-slate-200/50">

<div className="flex flex-col">
<span className="font-semibold text-lg tracking-tighter text-blue-600 leading-tight">PREPPRR</span>
<span className="text-[0.65rem] uppercase tracking-widest text-slate-400 font-semibold">Intermediate</span>
</div>

<div className="flex items-center gap-4 text-sm font-semibold">
<div className="flex items-center gap-1.5 text-orange-500">
<iconify-icon className="text-lg" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>12</span>
</div>
<div className="flex items-center gap-1.5 text-rose-500">
<iconify-icon className="text-lg" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>4</span>
</div>
<div className="flex items-center gap-1.5 text-amber-500">
<iconify-icon className="text-lg" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>850</span>
</div>
</div>
</header>

<div className="px-5 mt-6 mb-2 relative z-20">
<div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-[24px] p-6 text-white shadow-xl shadow-blue-500/20 overflow-hidden border border-blue-400/30">

<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-5">
<div>
<span className="text-xs uppercase tracking-widest text-blue-100 font-semibold">Unit 3 • Section 2</span>
<h2 className="text-2xl tracking-tight font-semibold mt-1">Speaking Practice</h2>
</div>
<span className="bg-white/20 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md flex items-center gap-1">
<iconify-icon icon="solar:microphone-3-linear"></iconify-icon>
                            Part 2
                        </span>
</div>

<div className="mt-2">
<div className="flex justify-between text-xs mb-2 text-blue-50 font-medium">
<span>Current Progress</span>
<span>6/12 tasks</span>
</div>
<div className="w-full bg-black/15 rounded-full h-2.5 overflow-hidden">
<div className="bg-white h-full rounded-full w-1/2 relative">

<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>

<button className="w-full mt-6 bg-white text-blue-600 rounded-2xl py-3.5 text-base font-semibold shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-slate-50">
                        Continue Lesson
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative flex flex-col items-center pt-8 pb-32 w-full z-10 overflow-hidden">

<div className="absolute top-12 bottom-12 w-8 bg-slate-200/70 rounded-full shadow-inner z-0 border border-slate-300/30"></div>

<div className="absolute top-12 w-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full z-0 shadow-[0_0_15px_rgba(56,189,248,0.4)]" style={{height: '42%'}}></div>

<div className="flex flex-col items-center gap-8 w-full relative z-10">

<div className="relative translate-x-[-24px]">
<button className="w-20 h-20 bg-blue-500 rounded-full border-b-[6px] border-blue-700 flex items-center justify-center text-white active:border-b-0 active:translate-y-[6px] transition-all shadow-sm">
<iconify-icon className="text-3xl" icon="solar:headphones-round-linear"></iconify-icon>
</button>

<div className="absolute -right-2 -bottom-2 bg-amber-400 text-white w-8 h-8 rounded-full border-[3px] border-slate-50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="relative translate-x-[32px]">
<button className="w-20 h-20 bg-blue-500 rounded-full border-b-[6px] border-blue-700 flex items-center justify-center text-white active:border-b-0 active:translate-y-[6px] transition-all shadow-sm">
<iconify-icon className="text-3xl" icon="solar:book-2-linear"></iconify-icon>
</button>
</div>

<div className="relative translate-x-[-8px] mt-4 mb-4 z-20">

<div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-30 scale-[1.3]"></div>

<div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-xs shadow-xl whitespace-nowrap animate-bounce flex flex-col items-center">
                        Start Here
                        <div className="absolute -bottom-1.5 w-3 h-3 bg-slate-800 rotate-45 rounded-sm"></div>
</div>
<button className="relative w-24 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-b-[8px] border-blue-800 flex items-center justify-center text-white shadow-[0_10px_20px_rgba(59,130,246,0.4)] active:border-b-0 active:translate-y-[8px] transition-all ring-4 ring-slate-50">
<iconify-icon className="text-4xl" icon="solar:microphone-2-linear"></iconify-icon>

<svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.2)" strokeWidth="6"></circle>
<circle cx="50" cy="50" fill="none" r="46" stroke="#fff" stroke-dasharray="289" stroke-dashoffset="144" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
</button>
</div>

<div className="relative translate-x-[24px]">

<div className="absolute -right-16 top-4 text-xs font-semibold text-amber-500 opacity-80 animate-pulse">
                        +50 XP
                    </div>
<button className="w-16 h-16 bg-amber-400 rounded-full border-b-[5px] border-amber-600 flex items-center justify-center text-white active:border-b-0 active:translate-y-[5px] transition-all shadow-sm">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</button>
</div>

<div className="w-full px-8 py-4 z-10 relative">
<div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-200 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-800">Unit 4: Academic Writing</h3>
<p className="text-xs text-slate-500 mt-1 font-medium">Essays &amp; Data Description</p>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border-2 border-slate-100">
<iconify-icon className="text-lg" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative translate-x-[-32px]">
<button className="w-20 h-20 bg-slate-200 rounded-full border-b-[6px] border-slate-300 flex items-center justify-center text-slate-400 active:border-b-0 active:translate-y-[6px] transition-all">
<iconify-icon className="text-3xl" icon="solar:pen-linear"></iconify-icon>
</button>
</div>

<div className="relative translate-x-[16px]">
<button className="w-20 h-20 bg-slate-200 rounded-full border-b-[6px] border-slate-300 flex items-center justify-center text-slate-400 active:border-b-0 active:translate-y-[6px] transition-all">
<iconify-icon className="text-3xl" icon="solar:document-text-linear"></iconify-icon>
</button>

<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-max">
<a className="text-xs font-semibold text-slate-400 hover:text-slate-600 uppercase tracking-widest flex items-center gap-1" href="#">
                            Skip to here
                            <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<nav className="fixed bottom-0 w-full max-w-md bg-white/90 backdrop-blur-xl border-t border-slate-200/60 px-6 pt-3 pb-8 z-50">
<ul className="flex justify-between items-center">
<li className="flex flex-col items-center">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</li>
<li className="flex flex-col items-center">
<button className="w-12 h-12 text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</li>
<li className="flex flex-col items-center">
<button className="w-12 h-12 text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:cards-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</li>
<li className="flex flex-col items-center">
<button className="w-12 h-12 text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</li>
<li className="flex flex-col items-center">
<button className="w-12 h-12 text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center relative">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
</li>
</ul>
</nav>
</div>

    </>
  );
}
