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
      

<div className="absolute top-0 left-0 w-full h-[80vh] overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(239,111,57,0.06)_0%,transparent_70%)] blur-3xl"></div>
<div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(224,215,200,0.3)_0%,transparent_70%)] blur-3xl"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-40 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-[#EBE8E3]/60 transition-all duration-300">
<div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-[#2C2A26] hover:opacity-80 transition-opacity font-geist" href="#">
                WWAVEE
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-[#6B6863] hover:text-[#2C2A26] transition-colors relative group font-geist" href="#">
                    Explore Artists
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#EF6F39] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#6B6863] hover:text-[#2C2A26] transition-colors relative group font-geist" href="#">
                    For Venues
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#EF6F39] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm font-medium text-[#6B6863] hover:text-[#2C2A26] transition-colors relative group font-geist" href="#">
                    How it Works
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#EF6F39] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-medium text-[#6B6863] hover:text-[#2C2A26] transition-colors font-geist" href="#">
                    Log in
                </a>
<button className="bg-[#EF6F39] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-[0_4px_12px_rgba(239,111,57,0.2)] hover:shadow-[0_6px_16px_rgba(239,111,57,0.3)] hover:-translate-y-0.5 transition-all duration-300 border border-[#EF6F39]/50 font-geist">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-[1280px] mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

<div className="w-full lg:w-5/12 flex flex-col relative z-10 mt-8 lg:mt-0">

<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#EBE8E3] shadow-sm text-xs font-semibold text-[#6B6863] font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-[#EF6F39]"></span>
                    For artists &amp; venues
                </span>
</div>

<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-[#2C2A26] leading-[1.05] max-w-[14ch] font-geist">
                Where artists get discovered — <span className="text-[#EF6F39] inline-block relative font-custom">
                    and booked.
                    
<svg className="absolute -bottom-2 left-0 w-full h-2 text-[#EF6F39]/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q50,10 100,5" fill="transparent" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>

<p className="text-lg md:text-xl font-medium text-[#6B6863] leading-relaxed mt-8 max-w-[440px] font-geist">
                Connect with DJs, musicians, and performers — all in one place. Curate better experiences with zero friction.
            </p>

<div className="flex flex-wrap items-center gap-4 mt-10">
<button className="group relative bg-[#EF6F39] text-white px-7 py-3.5 rounded-2xl text-base font-medium shadow-[0_8px_20px_-4px_rgba(239,111,57,0.3)] hover:shadow-[0_12px_24px_-4px_rgba(239,111,57,0.4)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden border border-[#EF6F39]/50">
<div className="absolute inset-0 bg-white/20 blur-xl rounded-full -top-6 -left-6 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative flex items-center gap-2 font-geist">
                        Explore Artists
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="bg-white/60 backdrop-blur-md text-[#2C2A26] px-7 py-3.5 rounded-2xl text-base font-medium border border-[#EBE8E3] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-white hover:border-[#DEDBD5] hover:-translate-y-0.5 transition-all duration-300 font-geist">
                    List your venue
                </button>
</div>

<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full border-2 border-[#FAF9F6] bg-gradient-to-br from-[#E2D5C4] to-[#C9B9A5] shadow-sm"></div>
<div className="w-9 h-9 rounded-full border-2 border-[#FAF9F6] bg-gradient-to-br from-[#F5D8CE] to-[#E5B5A3] shadow-sm"></div>
<div className="w-9 h-9 rounded-full border-2 border-[#FAF9F6] bg-gradient-to-br from-[#DCE4D8] to-[#BACDB4] shadow-sm flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-[#2C2A26] tracking-tight font-geist">Trusted by 100+ venues</span>
<span className="text-xs font-medium text-[#A3A09A] font-geist">Creating better experiences</span>
</div>
</div>
</div>

<div className="w-full lg:w-7/12 relative flex justify-end">

<div className="relative w-full max-w-[640px] aspect-square sm:aspect-[4/3] bg-[#F2EFEA]/60 backdrop-blur-sm rounded-[2.5rem] md:rounded-[3.5rem] border border-white shadow-[inset_0_2px_20px_rgba(255,255,255,0.8),0_20px_40px_-10px_rgba(0,0,0,0.03)] flex items-center justify-center">

<div className="absolute inset-4 border border-[#EBE8E3]/50 rounded-[2rem] md:rounded-[3rem] pointer-events-none"></div>
<div className="absolute w-[80%] h-[80%] bg-gradient-to-b from-white/60 to-transparent rounded-[2rem] md:rounded-[3rem] top-4"></div>

<div className="relative z-20 w-[260px] sm:w-[300px] bg-white rounded-[24px] p-3 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-[#EBE8E3]/80 group hover:-translate-y-2 transition-transform duration-500 ease-out">

<div className="w-full aspect-[4/5] rounded-[18px] bg-gradient-to-br from-[#F7EBE5] to-[#EFEAE2] relative overflow-hidden flex flex-col items-center justify-center gap-2">

<div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-md shadow-sm border border-white flex items-center justify-center mb-2">
<iconify-icon className="text-3xl text-[#EF6F39]" icon="solar:microphone-3-linear"></iconify-icon>
</div>

<div className="flex items-center gap-1 opacity-60">
<div className="w-1.5 h-3 bg-[#2C2A26] rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-6 bg-[#2C2A26] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1.5 h-4 bg-[#2C2A26] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]"></div>
<div className="w-1.5 h-7 bg-[#EF6F39] rounded-full animate-[pulse_1.5s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1.5 h-3 bg-[#2C2A26] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.3s]"></div>
</div>

<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#2C2A26] shadow-[0_2px_8px_rgba(0,0,0,0.04)] font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
</span>
                            Accepting bookings
                        </div>
</div>

<div className="p-3 pt-4">
<div className="flex items-start justify-between mb-1">
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#2C2A26] leading-none font-geist">Elias Wave</h3>
<p className="text-xs font-medium text-[#A3A09A] mt-1.5 font-geist">DJ • Electronic / House</p>
</div>
<div className="bg-[#F9F8F6] px-2 py-1 rounded-lg border border-[#EBE8E3] flex items-center gap-1">
<iconify-icon className="text-xs text-[#EF6F39]" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-semibold text-[#2C2A26] font-geist">4.9</span>
</div>
</div>

<div className="mt-4 flex items-center justify-between p-2.5 bg-[#FAF9F6] rounded-xl border border-[#EBE8E3]/50">
<span className="text-xs font-medium text-[#6B6863] font-geist">Show setup requirements</span>
<div className="w-8 h-4 bg-[#EF6F39] rounded-full relative shadow-inner cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-2 sm:-left-8 z-30 bg-[#2C2A26] p-4 rounded-2xl shadow-[0_16px_32px_rgba(44,42,38,0.15)] border border-[#3D3A36] flex items-center gap-4 animate-float w-[240px]">
<div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#EF6F39] to-[#F59E75] flex items-center justify-center text-white shadow-inner">
<iconify-icon className="text-xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white tracking-tight font-geist">New Request</p>
<p className="text-xs font-medium text-[#A3A09A] mt-0.5 font-geist">The Grand Hall • Oct 24</p>
</div>
</div>

<div className="absolute top-8 -right-2 sm:-right-6 z-10 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#EBE8E3] flex flex-col gap-3 animate-float-delayed w-[180px]">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-[#6B6863] font-geist">Est. Daily Rate</span>
<span className="text-xs font-semibold text-[#2C2A26] font-geist">$500+</span>
</div>

<div className="w-full h-1.5 bg-[#F2EFEA] rounded-full relative">
<div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-[#EF6F39] rounded-full"></div>
<div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#EF6F39] rounded-full shadow-sm"></div>
<div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white border-2 border-[#EF6F39] rounded-full shadow-sm"></div>
</div>
</div>

<div className="absolute top-1/4 left-8 w-6 h-6 rounded-full bg-[#EF6F39]/10 border border-[#EF6F39]/20 flex items-center justify-center">
<iconify-icon className="text-[10px] text-[#EF6F39]" icon="solar:music-note-linear"></iconify-icon>
</div>
<div className="absolute bottom-1/3 right-10 w-8 h-8 rounded-full bg-white/50 border border-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-sm text-[#A3A09A]" icon="solar:vinyl-linear"></iconify-icon>
</div>
</div>
</div>
</main>

    </>
  );
}
