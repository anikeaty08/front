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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    
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
      

<div className="aura-background-component fixed left-0 right-0 top-0 w-full h-screen -z-10 hue-rotate-90 saturate-0 mix-blend-screen" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>

<div className="min-h-[90vh] overflow-hidden vertical-lines bg-neutral-950/80 max-w-[1600px] z-20 border-neutral-800/60 border rounded-[2.5rem] mr-auto ml-auto relative shadow-2xl backdrop-blur-lg flex flex-col">

<header className="flex flex-col md:flex-row md:p-10 z-20 border-neutral-800/50 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between shrink-0">

<div className="flex items-center gap-3 w-48">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50">
<div className="w-3 h-3 rounded-full border border-orange-400"></div>
</div>
<span className="text-[13px] font-medium tracking-[0.2em] text-neutral-200 uppercase">Nexus OS</span>
</div>

<div className="flex flex-wrap justify-center gap-10 md:gap-16">
<div className="text-center group">
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-1">Network</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-xl font-medium tracking-tight text-neutral-200">940</span>
<span className="text-[10px] text-neutral-600">Mbps</span>
</div>
</div>
<div className="text-center group">
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-1">Avg Temp</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-xl font-medium tracking-tight text-neutral-200">22</span>
<span className="text-[10px] text-neutral-600">°C</span>
</div>
</div>
<div className="text-center group">
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-1">Air Quality</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-xl font-medium tracking-tight text-neutral-200">98</span>
<span className="text-[10px] text-neutral-600">AQI</span>
</div>
</div>
<div className="text-center group">
<div className="flex items-center justify-center gap-1.5 mb-1">
<span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Devices</p>
</div>
<div className="flex items-baseline justify-center gap-1">
<span className="text-xl font-medium tracking-tight text-neutral-200">24</span>
<span className="text-[10px] text-neutral-600">/28</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 w-48 justify-end">
<button className="w-9 h-9 rounded-full bg-transparent border border-neutral-800 hover:border-neutral-600 flex items-center justify-center transition-all text-neutral-500 hover:text-neutral-200">
<svg className="w-3.5 h-3.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<button className="w-9 h-9 rounded-full bg-transparent border border-neutral-800 hover:border-neutral-600 flex items-center justify-center transition-all text-neutral-500 hover:text-neutral-200">
<svg className="w-3.5 h-3.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</header>

<main className="grid grid-cols-1 lg:grid-cols-12 grow h-full relative z-10">

<div className="lg:col-span-3 flex flex-col gap-5 p-6 md:p-10 border-r border-neutral-800/30">

<div className="observ-card rounded-[2rem] p-8 relative overflow-hidden group border border-neutral-800/50 bg-neutral-900/20">
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6 relative z-10">Daily Power</p>
<div className="flex flex-col items-center relative z-10">
<div className="relative w-48 h-24 mb-4">
<svg className="w-full h-full overflow-visible" viewbox="0 0 200 110">
<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#262626" strokeLinecap="round" strokeWidth="4"></path>
<path className="drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]" d="M 20 100 A 80 80 0 0 1 100 20" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="4"></path>
<line stroke="#404040" strokeWidth="1" x1="20" x2="20" y1="100" y2="108"></line>
<line stroke="#404040" strokeWidth="1" x1="180" x2="180" y1="100" y2="108"></line>
</svg>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center translate-y-2">
<p className="text-3xl font-semibold tracking-tight text-neutral-100">14.2</p>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider">kWh</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="rounded-xl border border-neutral-800 bg-neutral-900/30 px-5 py-3 flex items-center justify-between hover:border-neutral-700 transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_5px_rgba(251,146,60,0.5)]"></div>
<span className="text-[12px] font-medium text-neutral-300">Living Room</span>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-neutral-500 font-mono">22°C</span>
<svg className="w-3 h-3 text-neutral-500" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
</div>
<div className="rounded-xl border border-neutral-800/50 bg-neutral-900/10 px-5 py-3 flex items-center justify-between hover:border-neutral-700 transition-all cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<span className="text-[12px] font-medium text-neutral-400">Kitchen</span>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-neutral-600 font-mono">ON</span>
<svg className="w-3 h-3 text-yellow-500" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
</div>
</div>

<div className="observ-card rounded-[2rem] p-6 mt-2 relative overflow-hidden border border-neutral-800/50">
<div className="flex items-center justify-between mb-6">
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">Wi-Fi Strength</p>
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-neutral-800 px-2 py-0.5 text-[10px] text-neutral-400">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
                            Excellent
                        </span>
</div>
<div className="flex items-end justify-between h-12 gap-1.5">
<div className="w-1 bg-neutral-800/50 h-[20%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[30%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[25%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[40%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[35%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[50%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[45%] rounded-sm"></div>
<div className="w-1 bg-neutral-800/50 h-[60%] rounded-sm"></div>
<div className="w-1 bg-neutral-600 h-[55%] rounded-sm"></div>
<div className="w-1 bg-neutral-500 h-[70%] rounded-sm"></div>
<div className="w-1 bg-neutral-400 h-[65%] rounded-sm"></div>
<div className="w-1 bg-neutral-300 h-[80%] rounded-sm"></div>
<div className="w-1 bg-white h-[75%] rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
</div>
</div>

<div className="mt-4 border-t border-neutral-800/50 pt-5">
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mb-4">System Logs</p>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-neutral-700">
<svg className="lucide lucide-door-open" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M13 4h3a2 2 0 0 1 2 2v14"></path><path d="M2 20h3"></path><path d="M13 20h9"></path><path d="M10 12v.01"></path><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-neutral-300">Front Door Unlocked</span>
<span className="text-[9px] text-neutral-600">admin • Manual</span>
</div>
</div>
<span className="text-[10px] text-neutral-600 font-mono">10:42</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-neutral-700">
<svg className="lucide lucide-motion" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M4 12a8 8 0 0 1 16 0"></path><path d="M6 12a6 6 0 0 1 12 0"></path><path d="M8 12a4 4 0 0 1 8 0"></path><path d="M12 12v.01"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[11px] text-neutral-300">Motion Detected</span>
<span className="text-[9px] text-neutral-600">Backyard • Camera 02</span>
</div>
</div>
<span className="text-[10px] text-neutral-600 font-mono">09:15</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-2">
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
<span className="text-[9px] text-neutral-500 uppercase">Humidity</span>
<span className="text-sm font-medium text-neutral-200">42%</span>
</div>
<div className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-3 flex flex-col items-center justify-center gap-1">
<span className="text-[9px] text-neutral-500 uppercase">UV Index</span>
<span className="text-sm font-medium text-neutral-200">Low</span>
</div>
</div>

<div className="flex items-center gap-2 mt-auto pt-6">
<button className="flex-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 text-neutral-300 text-[12px] font-medium py-3 rounded-full transition-all flex items-center justify-center gap-2">
                        Arm Security
                    </button>
<button className="w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 text-neutral-300 flex items-center justify-center transition-all group">
<svg className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[700px] border-r border-neutral-800/30">

<button className="absolute top-10 group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg z-30 outline-none" style={{boxShadow: '0 15px 33px -12px rgba(255, 162, 42, 0.9), inset 0 4px 6.3px rgba(252, 220, 134, 1), inset 0 -5px 6.3px rgba(255,162,38,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center gap-2 text-[13px]">
                        Run Scene
                        <svg className="w-3.5 h-3.5 fill-orange-900/20" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
</button>

<div className="relative w-full flex-1 flex items-center justify-center my-auto">

<div className="flex flex-col pod-ring hover:border-neutral-600 transition-colors w-32 h-32 z-10 rounded-full absolute top-[15%] left-[15%] backdrop-blur-lg items-center justify-center">
<svg className="w-4 h-4 text-neutral-500 mb-2" data-lucide="speaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M12 6h.01"></path><circle cx="12" cy="14" r="4"></circle><path d="M12 14h.01"></path></svg>
<p className="text-[11px] font-medium text-neutral-400">Speaker</p>
<div className="w-1 h-1 bg-neutral-600 rounded-full mt-2"></div>
</div>

<div className="absolute top-[50%] left-[18%] w-20 h-20 rounded-full flex flex-col items-center justify-center z-0 pod-ring opacity-60">
<p className="text-[9px] text-neutral-600">Lock</p>
</div>

<div className="relative w-[22rem] h-[22rem] rounded-full flex flex-col items-center justify-center z-10 pod-ring-active">

<div className="absolute inset-[-20px] rounded-full border border-dashed border-neutral-800/50 animate-spin-slow"></div>

<div className="text-center relative z-20">
<p className="text-[10px] text-neutral-500 font-medium mb-3 uppercase tracking-[0.2em]">Thermostat</p>
<p className="text-6xl font-extralight tracking-tighter text-neutral-100">22<span className="text-2xl text-neutral-600">°</span></p>
<div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
<span className="h-1 w-1 rounded-full bg-orange-400 animate-pulse"></span>
<span className="text-[10px] text-neutral-400 uppercase tracking-wider">Heating</span>
</div>
</div>

<div className="absolute inset-0 rounded-full -rotate-[100deg]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-1 h-1 bg-white shadow-[0_0_10px_white] rounded-full"></div>
</div>
</div>

<div className="absolute right-[8%] top-1/2 -translate-y-1/2 flex flex-col gap-2 p-1.5 bg-neutral-900/80 backdrop-blur-md border border-neutral-800/60 rounded-full shadow-2xl z-30">

<button className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all group relative">
<svg className="w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>

<button className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-100 border border-neutral-700 shadow-inner">
<svg className="w-4 h-4" data-lucide="power" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
</button>

<button className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all">
<svg className="w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</button>
</div>

<div className="absolute bottom-[20%] left-[32%] w-16 h-16 rounded-full pod-ring flex items-center justify-center z-0 opacity-40">
<p className="text-[9px] text-neutral-600">TV</p>
</div>
<div className="absolute bottom-[15%] left-[45%] w-24 h-24 rounded-full pod-ring flex items-center justify-center z-0 opacity-30">
<p className="text-[9px] text-neutral-600">Camera</p>
</div>
<div className="absolute bottom-[25%] right-[32%] w-14 h-14 rounded-full pod-ring border-dashed flex items-center justify-center opacity-30">
</div>
</div>

<div className="flex gap-1.5 z-20 bg-neutral-900/90 border-neutral-800/60 border rounded-full mb-10 pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-2xl backdrop-blur-md items-center absolute bottom-0">
<button className="group flex transition-all hover:bg-white/10 active:scale-95 text-sm font-medium text-neutral-200 bg-gradient-to-b from-white/20 via-white/5 to-white/10 rounded-full pt-2.5 pr-5 pb-2.5 pl-4 relative gap-x-2 gap-y-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<svg className="lucide lucide-layout-grid w-4 h-4 text-neutral-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect className="" height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="tracking-tight text-neutral-100">Dashboard</span>
</button>
<button className="w-10 h-10 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-neutral-200 flex items-center justify-center transition-colors">
<svg className="w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
</button>
<button className="w-10 h-10 rounded-full hover:bg-neutral-800 text-neutral-500 hover:text-neutral-200 flex items-center justify-center transition-colors">
<svg className="w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-3 h-full flex flex-col p-8 md:p-10">
<div className="w-full flex-1 flex flex-col relative overflow-hidden">
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-8">Energy Consumption</p>

<div className="flex justify-between items-start mb-10">
<div className="">
<p className="text-3xl font-medium tracking-tight text-neutral-100 mb-1">4.2 <span className="text-base opacity-40 font-light">kWh</span></p>
<p className="text-[10px] text-neutral-500">Usage</p>
</div>
<div className="text-right">
<p className="text-3xl font-medium tracking-tight text-neutral-100 mb-1">$0.84 <span className="text-base opacity-40 font-light"></span></p>
<p className="text-[10px] text-neutral-500">Est. Cost</p>
</div>
</div>

<div className="relative h-64 w-full mb-6 px-2">

<div className="absolute top-[0%] w-full h-px border-t border-dashed border-neutral-800/50"></div>
<div className="absolute top-[33%] w-full h-px border-t border-dashed border-neutral-800/50"></div>
<div className="absolute top-[66%] w-full h-px border-t border-dashed border-neutral-800/50"></div>
<div className="absolute top-[100%] w-full h-px border-t border-dashed border-neutral-800/50"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="fillGradientRight" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fbbf24" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#fbbf24" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 200 C 40 200, 60 180, 100 150 S 160 50, 240 20" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M0 200 C 40 200, 60 180, 100 150 S 160 50, 240 20 V 260 H 0 Z" fill="url(#fillGradientRight)"></path>
<circle cx="240" cy="20" fill="#171717" r="3" stroke="#fbbf24" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="flex justify-between text-[9px] text-neutral-600 mb-8 px-1 font-mono">
<span>6AM</span>
<span>12PM</span>
<span>6PM</span>
<span>NOW</span>
</div>

<div className="mb-10">
<div className="flex justify-between items-center mb-4">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest">Network Load</p>
<svg className="w-3 h-3 text-emerald-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="flex gap-4">
<div>
<p className="text-2xl font-medium tracking-tight text-neutral-100">12 <span className="text-xs opacity-50 font-light">dev</span></p>
</div>
<div className="h-8 w-px bg-neutral-800"></div>
<div className="">
<p className="text-2xl font-medium tracking-tight text-neutral-100">42 <span className="text-xs opacity-50 font-light">ms</span></p>
</div>
</div>
</div>

<div className="relative w-full h-32 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden mb-8 group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558036117-15db5275d4bb?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
<div className="scanline"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-[9px] font-medium text-white tracking-wide uppercase">Live</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<span className="text-[10px] font-medium text-white text-shadow-sm">Backyard Cam</span>
<span className="text-[9px] text-neutral-400 font-mono">REC</span>
</div>
</div>

<div className="mt-auto">
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mb-4">Up Next</p>
<div className="space-y-3">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 flex items-center justify-center border border-neutral-700/50 group-hover:border-neutral-600 transition-colors">
<svg className="w-3.5 h-3.5 text-indigo-400" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</div>
<div className="flex-1">
<p className="text-[11px] text-neutral-300 font-medium">Sunset Mode</p>
<p className="text-[9px] text-neutral-600">Living Room • Dim Lights</p>
</div>
<span className="text-[10px] text-neutral-500 font-mono bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">18:45</span>
</div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-neutral-800/50 flex items-center justify-center border border-neutral-700/50 group-hover:border-neutral-600 transition-colors">
<svg className="w-3.5 h-3.5 text-blue-400" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="flex-1">
<p className="text-[11px] text-neutral-300 font-medium">Sprinklers</p>
<p className="text-[9px] text-neutral-600">Garden • 15 mins</p>
</div>
<span className="text-[10px] text-neutral-500 font-mono bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800">06:00</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
