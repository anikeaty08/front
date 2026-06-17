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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 backdrop-blur-md bg-slate-950/70">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-xl" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white font-medium tracking-tighter text-lg">ABYSS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Forecasts</a>
<a className="hover:text-white transition-colors" href="#">Locations</a>
<a className="hover:text-white transition-colors" href="#">Tides</a>
<a className="hover:text-white transition-colors" href="#">Gear</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex text-slate-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/5 transition-all" href="#">
                    Sign In
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Underwater Ocean" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-end">

<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">Live Conditions</span>
</div>
<h1 className="text-4xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Clarity deep <br/> <span className="text-slate-500">below the surface.</span>
</h1>
<p className="text-lg text-slate-400 font-light mb-10 max-w-md leading-relaxed">
                    Precision diving forecasts for the Indonesian archipelago. Monitor swell, visibility, and thermoclines in real-time.
                </p>

<div className="relative max-w-md group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500 group-focus-within:text-cyan-400 transition-colors" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all" placeholder="Search reef, atoll or dive site..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
</div>
</div>
</div>

<div className="lg:justify-self-end w-full max-w-sm">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-white font-medium text-lg tracking-tight">Raja Ampat</h3>
<p className="text-xs text-slate-400">West Papua, Indonesia</p>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-medium text-white">29°C</span>
<span className="text-xs text-cyan-400">Perfect</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-slate-500">Visibility</span>
</div>
<span className="text-white font-medium">35m <span className="text-emerald-500 text-xs">↑</span></span>
</div>
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" icon="solar:water-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-slate-500">Swell</span>
</div>
<span className="text-white font-medium">0.4m <span className="text-xs text-slate-500 font-light">NW</span></span>
</div>
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-slate-500">Wind</span>
</div>
<span className="text-white font-medium">4kts <span className="text-xs text-slate-500 font-light">E</span></span>
</div>
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-slate-500">Tide</span>
</div>
<span className="text-white font-medium">Rising <span className="text-xs text-slate-500 font-light">+1.2m</span></span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between text-xs text-slate-400">
<span>Thermocline Depth</span>
<span className="text-white">22m</span>
</div>
<input className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-not-allowed opacity-80" disabled="" max="40" min="0" type="range" value="22"/>
<div className="flex justify-between text-[10px] text-slate-600 font-medium">
<span>0m</span>
<span>40m</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6 overflow-x-auto hide-scroll pb-2 md:pb-0">
<button className="flex items-center gap-2 text-xs font-medium text-white bg-white/10 px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/15 transition-colors whitespace-nowrap">
<iconify-icon icon="solar:sort-linear" strokeWidth="1.5"></iconify-icon> Sort by Visibility
                </button>
<div className="h-4 w-px bg-white/10"></div>
<label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer hover:text-white transition-colors whitespace-nowrap">
<input className="accent-cyan-500 h-3 w-3 bg-transparent border-slate-700 rounded-sm" type="checkbox"/>
                    Show Marine Parks Only
                </label>
<label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer hover:text-white transition-colors whitespace-nowrap">
<input className="accent-cyan-500 h-3 w-3 bg-transparent border-slate-700 rounded-sm" type="checkbox"/>
                    Liveaboards Nearby
                </label>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
<span>°C</span>

<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-slate-700 appearance-none cursor-pointer transition-all duration-300" id="unit-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-800 cursor-pointer border border-slate-700" htmlFor="unit-toggle"></label>
</div>
<span>°F</span>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Indonesia's Crown Jewels</h2>
<p className="text-slate-400 text-sm max-w-lg">
                    Current diving conditions for the top rated locations in the archipelago. Data aggregated from satellite and local dive computers.
                </p>
</div>
<a className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors" href="#">
                View Full Map <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Raja Ampat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-1 rounded">
                        PRIME
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Raja Ampat</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">West Papua</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">29°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">30m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-orange-400">Strong</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Komodo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&amp;w=2050&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-blue-500/20 backdrop-blur-md border border-blue-500/20 text-blue-300 text-[10px] font-semibold px-2 py-1 rounded">
                        GOOD
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Komodo NP</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">East Nusa Tenggara</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">27°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">20m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-red-400">Extreme</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Bunaken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-1 rounded">
                        PRIME
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Bunaken</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">North Sulawesi</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">29°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">35m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-emerald-400">Mild</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Nusa Penida" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=2062&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-orange-500/20 backdrop-blur-md border border-orange-500/20 text-orange-300 text-[10px] font-semibold px-2 py-1 rounded">
                        CHOPPY
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Nusa Penida</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">Bali</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-cyan-200">24°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">25m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-orange-400">Mod</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Wakatobi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-1 rounded">
                        PRIME
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Wakatobi</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">Southeast Sulawesi</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">28°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-emerald-400">40m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-slate-200">Calm</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Lembeh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-slate-700/50 backdrop-blur-md border border-white/10 text-slate-200 text-[10px] font-semibold px-2 py-1 rounded">
                        OVERCAST
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Lembeh Strait</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">North Sulawesi</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">27°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-orange-400">10m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-slate-200">None</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Gili" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-3 right-3 bg-blue-500/20 backdrop-blur-md border border-blue-500/20 text-blue-300 text-[10px] font-semibold px-2 py-1 rounded">
                        GOOD
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Gili Trawangan</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">Lombok</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">29°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">20m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-orange-400">Mod</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Banda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 right-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/20 text-emerald-300 text-[10px] font-semibold px-2 py-1 rounded">
                        PRIME
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Banda Islands</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">Maluku</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">28°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-emerald-400">30m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-slate-200">Var</span>
</div>
</div>
</div>
</article>

<article className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:shadow-xl hover:shadow-cyan-900/10 hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Derawan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-blue-500/20 backdrop-blur-md border border-blue-500/20 text-blue-300 text-[10px] font-semibold px-2 py-1 rounded">
                        GOOD
                    </div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Derawan</h3>
<div className="flex items-center gap-1 text-slate-500 mt-1">
<iconify-icon className="text-xs" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs">East Kalimantan</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
<div className="text-center">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:thermometer-linear"></iconify-icon>
<span className="text-[10px] uppercase">Temp</span>
</div>
<span className="text-sm font-medium text-slate-200">29°C</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:eye-linear"></iconify-icon>
<span className="text-[10px] uppercase">Vis</span>
</div>
<span className="text-sm font-medium text-slate-200">15m</span>
</div>
<div className="text-center border-l border-white/5">
<div className="flex items-center justify-center gap-1 text-slate-500 mb-1">
<iconify-icon className="text-xs" icon="solar:water-linear"></iconify-icon>
<span className="text-[10px] uppercase">Current</span>
</div>
<span className="text-sm font-medium text-slate-200">Light</span>
</div>
</div>
</div>
</article>
</div>

<div className="mt-20 border-t border-white/5 pt-12 text-center">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">Ready to submerge?</h3>
<p className="text-slate-400 mb-8 max-w-md mx-auto">Access detailed 14-day swell forecasts and live current maps with Abyss Pro.</p>
<button className="bg-white text-slate-950 px-6 py-3 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors">
                Start Free Trial
            </button>
<div className="mt-16 flex justify-center gap-6 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs flex items-center gap-4">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">API</a>
</div>
</div>
<p className="mt-6 text-[10px] text-slate-700">© 2024 Abyss Weather Data. All rights reserved.</p>
</div>
</main>

    </>
  );
}
