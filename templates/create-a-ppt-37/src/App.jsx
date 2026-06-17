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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-100" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-medium tracking-tight text-zinc-100">CYBERABAD<span className="text-zinc-600">.ANALYTICS</span></span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-500">
<span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> LIVE DATA</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/5 text-zinc-300">v2.4</span>
</div>
</div>
</div>
</nav>

<main className="max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-32">

<section className="min-h-[80vh] flex flex-col justify-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                    Urban Mobility Report 2024
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Decoding <span className="text-gradient-accent">Cyberabad</span>.<br/>
<span className="text-zinc-500">The algorithmic city.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    An analysis of the HITEC City ecosystem, focusing on the dichotomy between rapid vertical infrastructure growth and the strain on horizontal transportation networks.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
<div className="glass-panel p-5 rounded-xl">
<span className="iconify text-zinc-100 mb-3" data-icon="lucide:map" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-medium text-zinc-100">52 sq km</h3>
<p className="text-xs text-zinc-500 mt-1">Core IT Corridor Area</p>
</div>
<div className="glass-panel p-5 rounded-xl">
<span className="iconify text-zinc-100 mb-3" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-medium text-zinc-100">9.2M sq ft</h3>
<p className="text-xs text-zinc-500 mt-1">New Office Absorption '23</p>
</div>
<div className="glass-panel p-5 rounded-xl">
<span className="iconify text-zinc-100 mb-3" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24"></span>
<h3 className="text-sm font-medium text-zinc-100">~600,000</h3>
<p className="text-xs text-zinc-500 mt-1">Daily Commuters</p>
</div>
</div>
</div>
</section>

<section className="space-y-8">
<div className="border-l-2 border-cyan-500 pl-6">
<h2 className="text-3xl font-medium text-white tracking-tight">Modal Split Analysis</h2>
<p className="text-zinc-500 mt-2">Current distribution of commuter vehicle types entering the Cyberabad zone.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative glass-panel rounded-2xl p-8 border border-white/10">
<div className="absolute top-6 right-6 flex items-center gap-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-xs text-zinc-400">Private</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<span className="text-xs text-zinc-400">Public</span>
</div>
</div>

<div className="space-y-8 mt-4">

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<span className="iconify" data-icon="lucide:car-front" data-width="16"></span>
                                    Private Cars (Single Occupancy)
                                </span>
<span className="text-xl font-semibold text-white">42%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[42%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<span className="iconify" data-icon="lucide:bike" data-width="16"></span>
                                    Two Wheelers
                                </span>
<span className="text-xl font-semibold text-white">34%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 w-[34%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<span className="iconify" data-icon="lucide:bus" data-width="16"></span>
                                    RTC Bus &amp; Metro Shuttles
                                </span>
<span className="text-xl font-semibold text-zinc-400">14%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[14%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<span className="iconify" data-icon="lucide:train-front" data-width="16"></span>
                                    Metro (Last Mile Gap)
                                </span>
<span className="text-xl font-semibold text-zinc-400">10%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[10%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 mt-1">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="18"></span>
</div>
<div>
<h4 className="text-zinc-100 font-medium text-sm">High Private Dependancy</h4>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">
                                76% of all commuting vehicles are private. The lack of comprehensive last-mile connectivity from Metro stations forces reliance on personal transport.
                            </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="18"></span>
</div>
<div>
<h4 className="text-zinc-100 font-medium text-sm">Growth Trajectory</h4>
<p className="text-sm text-zinc-500 leading-relaxed mt-1">
                                With 12M sq.ft of office space under construction, vehicle density is projected to increase by 18% YoY unless mass transit adoption improves.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="border-l-2 border-purple-500 pl-6">
<h2 className="text-3xl font-medium text-white tracking-tight">Infrastructure Typology</h2>
<p className="text-zinc-500 mt-2">The architectural fabric of the financial district.</p>
</div>

<div className="bg-zinc-900 p-1 rounded-lg border border-white/10 flex">
<button className="px-4 py-1.5 roundedmd text-xs font-medium bg-zinc-800 text-white shadow-sm rounded">Current</button>
<button className="px-4 py-1.5 roundedmd text-xs font-medium text-zinc-500 hover:text-zinc-300">Projected</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden">

<div className="w-16 h-24 border border-zinc-600 bg-zinc-800/50 backdrop-blur skew-y-6 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500"></div>
<div className="w-16 h-28 border border-zinc-500 bg-zinc-700/30 backdrop-blur -ml-4 z-10 skew-y-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-zinc-100 font-medium">Grade-A Commercial</h3>
<span className="iconify text-purple-400" data-icon="lucide:building" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                            Steel and glass facades. Large floor plates (&gt;50k sq.ft). IGBC Platinum rated green buildings dominant in Mindspace &amp; Knowledge City.
                        </p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden">

<div className="flex gap-2 items-end">
<div className="w-6 h-12 bg-emerald-900/40 border border-emerald-500/20 rounded-t-sm"></div>
<div className="w-8 h-16 bg-emerald-900/40 border border-emerald-500/20 rounded-t-sm"></div>
<div className="w-6 h-10 bg-emerald-900/40 border border-emerald-500/20 rounded-t-sm"></div>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-zinc-100 font-medium">Vertical Gated Communities</h3>
<span className="iconify text-emerald-400" data-icon="lucide:home" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                            High-density residential towers (30+ floors) clustered around Kukatpally and Nanakramguda. Integrated clubhouses and retail.
                        </p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative overflow-hidden">

<div className="w-32 h-16 border-t border-l border-r border-amber-500/20 rounded-t-full bg-amber-900/10 mt-8"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-zinc-100 font-medium">Mixed-Use Retail</h3>
<span className="iconify text-amber-400" data-icon="lucide:shopping-bag" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                            Podium-style developments combining retail malls on lower levels with office or residential spaces above. High pedestrian traffic zones.
                        </p>
</div>
</div>
</div>
</section>

<section className="space-y-10 pb-20">
<div className="border-l-2 border-indigo-500 pl-6">
<h2 className="text-3xl font-medium text-white tracking-tight">The Connectivity Matrix</h2>
<p className="text-zinc-500 mt-2">Hyderabad Core <span className="text-indigo-400 px-1">↔</span> Cyberabad West</p>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">

<div className="flex flex-col items-center text-center space-y-4">
<div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center shadow-lg shadow-zinc-900/50">
<span className="font-bold text-zinc-400 text-xs tracking-wider">HYD</span>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Core City</h4>
<p className="text-xs text-zinc-500 mt-1">Residential Base</p>
</div>
</div>

<div className="flex flex-col gap-6 w-full min-w-[200px]">

<div className="relative group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 px-2 text-[10px] text-blue-400 uppercase tracking-widest font-semibold">Blue Line Metro</div>
<div className="h-1 w-full bg-zinc-800 rounded relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/50 w-full animate-pulse"></div>
<div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 blur-[4px]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-1">
<span>Ameerpet</span>
<span>Raidurg</span>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 px-2 text-[10px] text-orange-400 uppercase tracking-widest font-semibold">ORR (Outer Ring)</div>
<div className="h-1 w-full bg-zinc-800 rounded relative">
<div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-orange-500 to-orange-600/20 w-full"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-1">
<span>Airport</span>
<span>Gachibowli</span>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 px-2 text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">SRDP Flyovers</div>
<div className="h-1 w-full bg-zinc-800 border-t border-b border-zinc-700 border-dashed"></div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-1">
<span>Jubilee Hills</span>
<span>Mindspace</span>
</div>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-4">
<div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-900/20 ring-4 ring-indigo-500/10">
<span className="font-bold text-indigo-400 text-xs tracking-wider">CYB</span>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Cyberabad</h4>
<p className="text-xs text-zinc-500 mt-1">Employment Hub</p>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-6">
<div className="flex gap-3">
<div className="mt-1">
<span className="iconify text-zinc-400" data-icon="lucide:git-merge" data-width="18"></span>
</div>
<div>
<h5 className="text-sm text-zinc-200 font-medium">The Funnel Effect</h5>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                Morning peak hours witness a massive influx from Core Hyderabad (East/Central) towards West. The Metro (Blue line) terminates at Raidurg, creating a bottleneck.
                            </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1">
<span className="iconify text-zinc-400" data-icon="lucide:workflow" data-width="18"></span>
</div>
<div>
<h5 className="text-sm text-zinc-200 font-medium">Spoke Distribution</h5>
<p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                                Once at the hub (Cyber Towers/Mindspace), traffic disperses via internal grid roads which are currently operating at 140% capacity during peak hours.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">
                Data sources: HMDA Reports, Hyderabad Metro Rail Ltd, Private Traffic Studies (2023-24).
            </p>
<div className="flex gap-4">
<span className="iconify text-zinc-600 hover:text-zinc-400 cursor-pointer" data-icon="lucide:github" data-width="16"></span>
<span className="iconify text-zinc-600 hover:text-zinc-400 cursor-pointer" data-icon="lucide:twitter" data-width="16"></span>
</div>
</div>
</footer>

    </>
  );
}
