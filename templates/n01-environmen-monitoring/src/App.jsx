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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="absolute inset-0 pointer-events-none z-0 opacity-20" style={{backgroundImage: 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}>
</div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<svg className="absolute w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 600">

<path className="opacity-30" d="M-50,300 C200,300 250,550 500,550 C700,550 800,200 1100,0" fill="none" stroke="#22c55e" strokeWidth="1.5"></path>

<path className="opacity-30" d="M300,0 C400,200 500,300 1100,550" fill="none" stroke="#22c55e" stroke-dasharray="8,8" strokeWidth="1"></path>

<circle className="opacity-10 animate-ping" cx="48%" cy="65%" fill="none" r="60" stroke="#fbbf24" strokeWidth="1" style={{animationDuration: '4s'}}></circle>
<circle className="opacity-20" cx="48%" cy="65%" fill="none" r="40" stroke="#fbbf24" strokeWidth="1"></circle>
</svg>


<div className="absolute top-[42%] left-[32%] flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,106,0.8)] relative">
<div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-50"></div>
</div>
<div className="bg-neutral-950 border border-neutral-900 px-2 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span>N-</span><span>01</span>
</div>
</div>

<div className="absolute top-[28%] left-[55%] flex items-center gap-3 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,106,0.5)]"></div>
<div className="bg-neutral-950 border border-neutral-900 px-2 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span>N-</span><span>02</span>
</div>
</div>

<div className="absolute top-[55%] left-[75%] flex items-center gap-3 opacity-60">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,106,0.5)]"></div>
<div className="bg-neutral-950 border border-neutral-900 px-2 py-1 text-xs font-mono text-emerald-400 flex flex-col items-center">
<span>N-</span><span>03</span>
</div>
</div>

<div className="absolute top-[65%] left-[48%] flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]"></div>
<div className="bg-neutral-950 border border-neutral-900 px-2 py-1 text-xs font-mono text-amber-400 flex flex-col items-center">
<span>N-</span><span>04</span>
</div>
</div>

<div className="absolute top-[78%] left-[27%] flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"></div>
<div className="bg-neutral-950 border border-neutral-900 px-2 py-1 text-xs font-mono text-orange-500 flex flex-col items-center">
<span>N-</span><span>05</span>
</div>
</div>
</div>

<main className="relative z-10 w-full min-h-screen p-6 md:p-10 flex flex-col justify-between">

<div className="flex justify-between items-start w-full max-w-7xl mx-auto" style={{animation: 'sequence-blur 2.4s normal 1 forwards'}}>

<div className="bg-[#0a0a0a] border border-neutral-800/80 p-6 shadow-2xl backdrop-blur-md inline-block">
<h1 className="font-['Space_Grotesk'] font-light tracking-normal text-3xl md:text-4xl text-white mb-2">
                    Alaba International Market
                </h1>
<p className="font-['Inter'] text-base text-neutral-500">
                    Sensor Network Topography
                </p>
</div>

<div className="hidden md:flex bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-full px-5 py-2.5 items-center gap-4">
<div className="flex items-center gap-2">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<span className="font-['Inter'] text-base text-neutral-300">System Online</span>
</div>
<div className="w-px h-4 bg-neutral-800"></div>
<div className="font-mono text-base text-neutral-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> 14:02:59 UTC
                </div>
</div>
</div>

<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 items-end pb-8" style={{animation: 'sequence-blur 2.4s normal 1 forwards', animationDelay: '0.2s'}}>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-neutral-900/40 backdrop-blur-2xl border border-neutral-800/60 rounded-xl p-6 shadow-2xl">
<h3 className="font-['Space_Grotesk'] font-light tracking-normal text-xl text-neutral-200 mb-5 flex items-center gap-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Current Location Focus
                    </h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-neutral-800/50 pb-3">
<span className="font-['Inter'] text-base text-neutral-500">Sector</span>
<span className="font-['Inter'] text-base text-neutral-200">Zone Alpha-4</span>
</div>
<div className="flex justify-between items-center border-b border-neutral-800/50 pb-3">
<span className="font-['Inter'] text-base text-neutral-500">Coordinates</span>
<span className="font-mono text-base text-neutral-300">6.4531° N, 3.3958° E</span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="font-['Inter'] text-base text-neutral-500">Elevation</span>
<span className="font-mono text-base text-neutral-300">12m ASL</span>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-neutral-800/80 p-5 shadow-2xl flex flex-wrap gap-6 items-center w-fit">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,106,0.5)]"></span>
<span className="font-['Inter'] text-base text-neutral-400">Safe Node</span>
</div>
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
<span className="font-['Inter'] text-base text-neutral-400">Elevated Node</span>
</div>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-neutral-900/60 backdrop-blur-2xl border border-neutral-800/60 rounded-xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
<div className="flex justify-between items-start mb-8">
<div className="font-mono text-base text-neutral-500 tracking-wider">PRIMARY SENSOR</div>
<div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="font-['Inter'] text-base text-emerald-400">Safe</span>
</div>
</div>
<div className="flex items-baseline gap-6 mb-2">
<h2 className="font-['Space_Grotesk'] font-light tracking-normal text-6xl text-white">
                            N01
                        </h2>

<div className="font-['Space_Grotesk'] font-light text-5xl text-emerald-400 animate-pulse" style={{animationDuration: '3s'}}>
                            24<span className="text-3xl opacity-80">%</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-800/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
<span className="font-['Inter'] text-base text-neutral-300">Status: Level 1</span>
</div>
<div className="font-mono text-base text-emerald-500/60">OPTIMAL</div>
</div>
</div>

<div className="bg-neutral-900/40 backdrop-blur-2xl border border-neutral-800/60 rounded-xl p-8 shadow-2xl flex flex-col justify-between">
<h3 className="font-['Space_Grotesk'] font-light tracking-normal text-xl text-neutral-200 mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-emerald-400" data-lucide="activity" strokeWidth="1.5"></i>
                        Live Data Stream
                    </h3>

<div className="h-20 w-full flex items-end gap-1.5 mb-8 opacity-80">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/20"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/30"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/20"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/40"></div></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm h-[80%] shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
<div className="w-full bg-emerald-400/80 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(52,211,106,0.4)]"></div>
<div className="w-full bg-emerald-500/50 rounded-t-sm h-[65%] shadow-[0_0_10px_rgba(16,185,129,0.2)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/30"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/20"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[25%] relative overflow-hidden"><div className="absolute bottom-0 w-full h-full bg-emerald-500/10"></div></div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-['Inter'] text-base text-neutral-500">Air Quality Index</span>
<span className="font-mono text-base text-white">42 AQI</span>
</div>
<div className="flex justify-between items-center">
<span className="font-['Inter'] text-base text-neutral-500">Particulate (PM2.5)</span>
<span className="font-mono text-base text-white">10.2 µg/m³</span>
</div>
<div className="flex justify-between items-center">
<span className="font-['Inter'] text-base text-neutral-500">Transmission Signal</span>
<div className="flex items-center gap-1">
<div className="w-1 h-3 bg-emerald-500 rounded-sm"></div>
<div className="w-1 h-4 bg-emerald-500 rounded-sm"></div>
<div className="w-1 h-5 bg-emerald-500 rounded-sm"></div>
<div className="w-1 h-6 bg-emerald-500 rounded-sm animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
