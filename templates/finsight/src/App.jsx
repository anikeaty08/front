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
      

<aside className="flex flex-col z-20 shrink-0 w-20 border-r pt-6 pb-6 items-center bg-slate-950 border-white/5">

<div className="mb-10 text-white">
<svg className="text-white" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>

<nav className="flex-1 flex flex-col w-full gap-x-6 gap-y-6 items-center">
<a className="transition-all group text-black bg-white hover:bg-green-500 hover:text-white rounded-xl pt-3 pr-3 pb-3 pl-3 relative shadow-[0_0_15px_rgba(255,255,255,0.2)]" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Dashboard</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-green-500 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="list"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Projects</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-green-500 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="activity"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Activity</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-green-500 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Reports</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-green-500 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="clock"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Time Tracking</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-green-500 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Apps</span>
</a>
</nav>

<div className="flex flex-col gap-6 items-center">
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-white hover:text-black" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Settings</span>
</a>
<a className="text-slate-500 p-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group relative hover:bg-white hover:text-black" href="#">
<i className="w-5 h-5" data-lucide="log-out"></i>
<span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 text-xs font-medium rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0 font-geist bg-slate-900 text-white border-white/10">Log out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative bg-slate-950">

<header className="h-20 flex items-center justify-between px-8 shrink-0">
<h1 className="text-2xl tracking-tight font-jakarta font-medium text-white">Overview</h1>
<div className="flex items-center gap-4">

<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-white transition-colors" data-lucide="search"></i>
<input className="border rounded-full pl-10 pr-4 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700 w-64 transition-all bg-slate-900 border-white/5 text-white" placeholder="Search" type="text"/>
</div>

<div className="flex items-center gap-3 border pl-2 pr-4 py-1.5 rounded-full bg-slate-900/50 border-white/5">
<img alt="Profile" className="w-8 h-8 object-cover border-slate-700 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cc3d2108-b362-49c8-be76-9151dbe6bb4f/320w.png"/>
<div className="flex flex-col">
<span className="text-xs font-medium font-geist text-white">Emma Parson</span>
<span className="text-[10px] text-slate-500 font-geist">emma.pars@gmail.com</span>
</div>
<i className="w-3 h-3 text-slate-500 ml-2" data-lucide="chevron-down"></i>
</div>

<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors relative border-white/5 bg-slate-900/50 text-slate-400 hover:text-white">
<div className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-2 pr-8 pb-8 pl-8">
<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">

<div className="col-span-12 lg:col-span-8 flex flex-col overflow-hidden border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative group/card bg-slate-900/40 border-white/5">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none transition-opacity duration-700 opacity-50 group-hover/card:opacity-100"></div>

<div className="flex items-start justify-between mb-8 z-10">
<div className="">
<h2 className="text-lg font-medium mb-1 font-geist text-slate-400">Revenue</h2>
<div className="flex items-baseline gap-3">
<span className="text-3xl tracking-tight transition-colors duration-300 cursor-default font-jakarta font-medium text-white hover:text-green-100">$ 28,165</span>
<span className="bg-amber-500/10 text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)] font-geist text-amber-400">
<i className="w-3 h-3" data-lucide="arrow-up"></i> 8.3%
                </span>
<span className="text-xs text-slate-500 font-geist">vs 24,280 last period</span>
</div>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 border rounded-full p-1 shadow-sm backdrop-blur-md hover:border-white/20 hover:bg-slate-900/90 bg-slate-950/80 border-white/10">
<button className="px-3 py-1.5 text-xs font-medium active:scale-95 active:bg-white/10 rounded-full transition-all duration-200 font-geist text-slate-400 hover:text-white hover:bg-white/5">Weekly</button>
<button className="px-3 py-1.5 text-xs font-medium active:scale-95 active:bg-white/10 rounded-full transition-all duration-200 font-geist text-slate-400 hover:text-white hover:bg-white/5">Monthly</button>
<button className="transform hover:scale-105 active:scale-95 transition-all duration-200 text-xs font-semibold text-slate-950 font-geist bg-white rounded-full ring-white/50 ring-1 pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_0_20px_rgba(255,255,255,0.3)]">Yearly</button>
<button className="px-3 py-1.5 text-xs font-medium active:scale-95 active:bg-white/10 rounded-full transition-all duration-200 font-geist text-slate-400 hover:text-white hover:bg-white/5">Range</button>
</div>
<button className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 border-white/10 bg-slate-950 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20">
<i className="w-3 h-3" data-lucide="filter"></i>
</button>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2 relative z-10">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 pr-4 opacity-50">
<div className="w-full border-t border-dashed h-0 border-white/5"><span className="text-[10px] -mt-2 block font-geist text-slate-600">6000</span></div>
<div className="w-full border-t border-dashed h-0 border-white/5"><span className="text-[10px] -mt-2 block font-geist text-slate-600">4500</span></div>
<div className="w-full border-t border-dashed h-0 border-white/5"><span className="text-[10px] -mt-2 block font-geist text-slate-600">3000</span></div>
<div className="w-full border-t border-dashed h-0 border-white/5"><span className="text-[10px] -mt-2 block font-geist text-slate-600">1500</span></div>
<div className="w-full border-t border-dashed h-0 border-white/5"><span className="text-[10px] -mt-2 block font-geist text-slate-600">0</span></div>
</div>


<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-40 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$4,120</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Jul</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-28 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$2,840</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Aug</span>
</div>

<div className="flex flex-col items-center gap-3 w-full relative cursor-pointer group">

<div className="absolute -top-12 bg-green-500/20 text-[10px] font-medium px-2 py-0.5 rounded-full border border-green-500/30 mb-2 flex items-center gap-1 transition-transform duration-300 group-hover:-translate-y-1 font-geist text-green-300">
<i className="w-2 h-2" data-lucide="arrow-up"></i> 12%
            </div>
<div className="flex flex-col transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:brightness-110 bg-green-500 w-full h-52 max-w-[40px] rounded-t-lg pt-2 pb-2 relative shadow-[0_0_20px_rgba(59,130,246,0.3)] justify-between">
<div className="w-8 h-4 rounded-full mx-auto text-[9px] flex items-center justify-center group-hover:scale-110 transition-transform font-geist bg-white/20 text-white">+</div>
<span className="text-[10px] font-medium text-center font-geist text-green-100">$1048</span>
</div>
<span className="text-xs font-medium group-hover:text-green-200 transition-colors font-geist text-white">Sep</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-44 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$5,210</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Oct</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-24 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$2,400</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Nov</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-48 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$5,650</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Dec</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-20 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$1,850</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Jan</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-44 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$5,100</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Feb</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-36 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$4,200</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Mar</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-48 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$5,800</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Apr</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-20 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$2,100</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">May</span>
</div>

<div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
<div className="w-full max-w-[40px] h-36 border rounded-t-lg bar-texture relative transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:bg-slate-700/50 group-hover:border-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-slate-800/30 border-white/5">
<div className="w-4 h-0.5 rounded-full mx-auto mt-2 transition-colors group-hover:bg-slate-500 bg-slate-600"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 border px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg whitespace-nowrap z-20 font-geist bg-slate-800 border-white/10 text-white">$4,350</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-geist">Jun</span>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col overflow-hidden border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] group/calendar bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60">

<div className="flex items-center justify-between mb-4 z-10">
<button className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 active:bg-white/20 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<span className="text-sm font-medium transition-all duration-300 group-hover/calendar:tracking-wide font-geist text-white">January, 2026</span>
<button className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 active:bg-white/20 border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>

<div className="grid grid-cols-7 text-center mb-2 z-10">
<div className="text-[10px] text-slate-500 py-2 font-geist">M</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">T</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">W</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">T</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">F</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">S</div>
<div className="text-[10px] text-slate-500 py-2 font-geist">S</div>
</div>

<div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center z-10 mb-4">

<div className="h-8 rounded-md bar-texture opacity-30 transition-opacity duration-300 hover:opacity-50 cursor-default"></div>
<div className="h-8 rounded-md bar-texture opacity-30 transition-opacity duration-300 hover:opacity-50 cursor-default"></div>
<div className="h-8 rounded-md bar-texture opacity-30 transition-opacity duration-300 hover:opacity-50 cursor-default"></div>
<div className="h-8 rounded-md bar-texture opacity-30 transition-opacity duration-300 hover:opacity-50 cursor-default"></div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">1</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">2</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">3</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">4</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">5</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">6</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">7</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">8</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">9</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">10</div>

<div className="h-8 flex flex-col items-center justify-center rounded-lg shadow-lg relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] z-20 bg-green-600 text-white shadow-green-900/50">
<span className="text-xs font-medium relative z-10 font-geist">11</span>
<div className="w-1 h-1 rounded-full mt-0.5 transition-transform duration-300 group-hover:scale-150 bg-white"></div>
</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">12</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">13</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">14</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">15</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">16</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">17</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">18</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">19</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">20</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">21</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">22</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">23</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">24</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">25</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">26</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">27</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">28</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">29</div>
<div className="h-8 flex items-center justify-center text-xs rounded-lg cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm font-geist text-slate-300 hover:bg-white/10 hover:text-white">30</div>

<div className="h-8 rounded-md bar-texture opacity-30 transition-opacity duration-300 hover:opacity-50 cursor-default"></div>
</div>

<div className="border rounded-2xl p-4 flex items-center justify-between mt-auto transition-all duration-300 group-hover/calendar:bg-slate-900 group-hover/calendar:border-white/10 bg-slate-900/80 border-white/5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/calendar:text-white group-hover/calendar:scale-110 group-hover/calendar:rotate-6 group-hover/calendar:bg-slate-700 shadow-sm bg-slate-800 text-slate-400">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<div className="flex flex-col items-end">
<div className="flex items-center gap-2">
<span className="text-2xl tracking-tight transition-colors duration-300 group-hover/calendar:text-green-100 font-jakarta font-medium text-white">$1,434</span>
<span className="text-[10px] font-medium bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 transition-all duration-300 group-hover/calendar:bg-amber-500/20 group-hover/calendar:border-amber-500/30 group-hover/calendar:shadow-[0_0_10px_rgba(34,197,94,0.2)] font-geist text-amber-400">▲ 12.4%</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col group/ai transition-all duration-500 hover:border-green-500/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden hover:bg-slate-900/60 bg-slate-900/40 border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover/ai:opacity-100 transition-opacity duration-700 ease-out"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover/ai:bg-green-500/20 group-hover/ai:border-green-500/40 group-hover/ai:rotate-3 transition-all duration-300">
<i className="w-5 h-5 text-green-400" data-lucide="sparkles"></i>
</div>
<h3 className="font-medium text-lg tracking-tight group-hover/ai:text-green-100 transition-colors duration-300 font-geist">How can I help you?</h3>
</div>
<button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:scale-105 active:scale-95 transition-all duration-200 hover:text-white hover:bg-white/5">
<i className="w-3.5 h-3.5" data-lucide="maximize-2"></i>
</button>
</div>
<div className="mb-6 p-4 -mx-4 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 group/summary cursor-default border border-transparent hover:border-white/5">
<div className="flex items-center gap-2 mb-2">
<p className="text-xs font-medium group-hover/summary:text-slate-300 transition-colors font-geist text-slate-400">AI Summary</p>
<div className="w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-0 group-hover/ai:opacity-100 transition-opacity"></div>
</div>
<p className="text-sm leading-relaxed group-hover/summary:text-slate-300 transition-colors duration-300 font-geist text-slate-400">
                Your financial activity this period remains stable. Revenue shows expected seasonal variation, spending is balanced across key categories. No unusual patterns det... <a className="font-medium hover:underline transition-all ml-1 inline-block hover:translate-x-0.5 font-geist text-green-400 hover:text-green-300 decoration-green-400/30 hover:decoration-green-400" href="#">Read more</a>
</p>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="border rounded-xl p-3 group/stat hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden bg-slate-900/50 border-white/5 hover:bg-slate-800/80 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
<p className="text-[10px] text-slate-500 mb-1 relative z-10 group-hover/stat:text-slate-400 transition-colors font-geist">Spending Trends</p>
<div className="flex items-center gap-2 relative z-10">
<span className="text-xl group-hover/stat:scale-110 origin-left transition-transform duration-300 font-jakarta font-medium text-white">7</span>
<span className="text-[10px] bg-slate-500/10 px-1.5 py-0.5 rounded border border-slate-500/20 group-hover/stat:bg-slate-500/20 group-hover/stat:border-slate-500/30 group-hover/stat:shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-all duration-300 font-medium font-geist text-slate-400">Stable</span>
</div>
</div>
<div className="border rounded-xl p-3 group/stat hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden bg-slate-900/50 border-white/5 hover:bg-slate-800/80 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></div>
<p className="text-[10px] text-slate-500 mb-1 relative z-10 group-hover/stat:text-slate-400 transition-colors font-geist">Customer Payments</p>
<div className="flex items-center gap-2 relative z-10">
<span className="text-xl group-hover/stat:scale-110 origin-left transition-transform duration-300 font-jakarta font-medium text-white">25</span>
<span className="text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 group-hover/stat:bg-amber-500/20 group-hover/stat:border-amber-500/30 group-hover/stat:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all duration-300 font-medium font-geist text-amber-400">Processed</span>
</div>
</div>
</div>
</div>
<div className="relative z-10 group/input">
<input className="w-full border rounded-full pl-4 pr-11 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 bg-slate-800/50 border-white/10 text-white" placeholder="Ask me anything..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full active:scale-90 transition-all duration-200 group/send text-slate-400 hover:text-white hover:bg-green-600">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col border rounded-3xl pt-6 pr-6 pb-6 pl-6 bg-slate-900/40 border-white/5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-lg tracking-tight font-geist text-white">Spending</h3>
<div className="relative group">
<button className="flex items-center gap-1 text-xs border px-3 py-1.5 rounded-lg transition-colors font-geist text-white bg-slate-800 border-white/10 hover:bg-slate-700">
                Last 30 Days <i className="w-3 h-3 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 top-full mt-2 w-32 border rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 translate-y-2 group-hover:translate-y-0 bg-slate-800 border-white/10">
<div className="py-1">
<a className="block px-4 py-2 text-xs font-geist text-white hover:bg-white/5" href="#">Last 7 Days</a>
<a className="block px-4 py-2 text-xs font-geist text-white hover:bg-white/5" href="#">Last 30 Days</a>
<a className="block px-4 py-2 text-xs font-geist text-white hover:bg-white/5" href="#">This Month</a>
<a className="block px-4 py-2 text-xs font-geist text-white hover:bg-white/5" href="#">Last Month</a>
</div>
</div>
</div>
</div>
<div className="flex-1 flex relative items-center justify-between">

<div className="flex transition-transform duration-300 ease-out hover:scale-105 w-40 h-40 relative items-center justify-center">

<svg className="transform overflow-visible -rotate-90 w-[160px] h-[160px]" data-icon-replaced="true" strokeWidth="2" style={{width: '160px', height: '160px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="none" r="40" stroke="#262626" strokeWidth="12"></circle>

<circle className="hover:stroke-[14] hover:opacity-90 transition-all duration-300 cursor-pointer origin-center" cx="50" cy="50" fill="none" onmouseenter="document.getElementById('tt-orange').classList.remove('opacity-0', 'translate-y-2')" onmouseleave="document.getElementById('tt-orange').classList.add('opacity-0', 'translate-y-2')" r="40" stroke="#f97316" stroke-dasharray="100.5 151" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="hover:stroke-[14] hover:opacity-90 transition-all duration-300 cursor-pointer origin-center" cx="50" cy="50" fill="none" onmouseenter="document.getElementById('tt-green').classList.remove('opacity-0', 'translate-y-2')" onmouseleave="document.getElementById('tt-green').classList.add('opacity-0', 'translate-y-2')" r="40" stroke="#22c55e" stroke-dasharray="62.8 188.5" stroke-dashoffset="-100.5" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="hover:stroke-[14] hover:opacity-90 transition-all duration-300 cursor-pointer origin-center" cx="50" cy="50" fill="none" onmouseenter="document.getElementById('tt-yellow').classList.remove('opacity-0', 'translate-y-2')" onmouseleave="document.getElementById('tt-yellow').classList.add('opacity-0', 'translate-y-2')" r="40" stroke="#eab308" stroke-dasharray="25.1 226.2" stroke-dashoffset="-163.3" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="hover:stroke-[14] hover:opacity-90 transition-all duration-300 cursor-pointer origin-center" cx="50" cy="50" fill="none" onmouseenter="document.getElementById('tt-blue').classList.remove('opacity-0', '-translate-x-0')" onmouseleave="document.getElementById('tt-blue').classList.add('opacity-0', '-translate-x-0')" onmouseout="document.getElementById('tt-blue').classList.add('translate-x-2'); document.getElementById('tt-blue').classList.remove('translate-x-0')" onmouseover="document.getElementById('tt-blue').classList.remove('translate-x-2'); document.getElementById('tt-blue').classList.add('translate-x-0')" r="40" stroke="#3b82f6" stroke-dasharray="25.1 226.2" stroke-dashoffset="-188.4" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="hover:stroke-[14] hover:opacity-90 transition-all duration-300 cursor-pointer origin-center" cx="50" cy="50" fill="none" onmouseenter="document.getElementById('tt-purple').classList.remove('opacity-0', 'translate-y-2'); document.getElementById('badge-purple').classList.add('opacity-0')" onmouseleave="document.getElementById('tt-purple').classList.add('opacity-0', 'translate-y-2'); document.getElementById('badge-purple').classList.remove('opacity-0')" r="40" stroke="#a855f7" stroke-dasharray="37.7 213.6" stroke-dashoffset="-213.5" strokeLinecap="round" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-lg font-semibold tracking-tight font-geist text-white">$28,165</span>
<span className="text-[10px] text-slate-500 font-geist">Total</span>
</div>


<div className="absolute -top-2 -right-12 z-20 pointer-events-none transition-all duration-300 ease-out" id="tt-orange">
<div className="border rounded-lg p-2 shadow-xl backdrop-blur-md bg-slate-800 border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
<span className="text-[9px] font-geist text-slate-400">Aug 24</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold font-geist text-white">$11,266</span>
<span className="text-[9px] text-slate-500 font-geist">Activity (40%)</span>
</div>
</div>
</div>

<div className="absolute bottom-0 -right-12 z-20 pointer-events-none opacity-0 translate-y-2 transition-all duration-300 ease-out" id="tt-green">
<div className="border rounded-lg p-2 shadow-xl backdrop-blur-md bg-slate-800 border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-[9px] font-geist text-slate-400">Aug 22</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold font-geist text-white">$7,041</span>
<span className="text-[9px] text-slate-500 font-geist">Meals (25%)</span>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-10 z-20 pointer-events-none opacity-0 translate-y-2 transition-all duration-300 ease-out" id="tt-yellow">
<div className="border rounded-lg p-2 shadow-xl backdrop-blur-md bg-slate-800 border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
<span className="text-[9px] font-geist text-slate-400">Aug 20</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold font-geist text-white">$2,816</span>
<span className="text-[9px] text-slate-500 font-geist">Supplies (10%)</span>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 pointer-events-none opacity-0 translate-x-2 transition-all duration-300 ease-out" id="tt-blue">
<div className="border rounded-lg p-2 shadow-xl backdrop-blur-md bg-slate-800 border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[9px] font-geist text-slate-400">Aug 18</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold font-geist text-white">$2,816</span>
<span className="text-[9px] text-slate-500 font-geist">Rewards (10%)</span>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 z-20 pointer-events-none transition-all duration-300 ease-out" id="tt-purple">
<div className="border rounded-lg p-2 shadow-xl backdrop-blur-md bg-slate-800 border-white/10">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[9px] font-geist text-slate-400">Aug 15</span>
</div>
<div className="flex items-center gap-2">
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold font-geist text-white">$4,225</span>
<span className="text-[9px] text-slate-500 font-geist">Internet (15%)</span>
</div>
<svg className="drop-shadow-md text-white" fill="white" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
</div>
</div>
</div>

<div className="absolute -top-2 -right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse transition-opacity duration-300" id="badge-purple"></div>
</div>

<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 group cursor-pointer p-1 rounded transition-colors hover:bg-white/5">
<div className="w-2 h-2 rounded-full bg-slate-500 shadow-[0_0_8px_rgba(249,115,22,0.5)] group-hover:scale-125 transition-transform"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Activity</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer p-1 rounded transition-colors hover:bg-white/5">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Meals</span>
</div>
<div className="flex group cursor-pointer transition-colors hover:bg-white/5 rounded pt-1 pr-1 pb-1 pl-1 gap-x-2 gap-y-2 items-center">
<div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(234,179,8,0.5)] group-hover:scale-125 transition-transform"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Office supplies</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer p-1 rounded transition-colors hover:bg-white/5">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Rewards</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer p-1 rounded transition-colors hover:bg-white/5">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Internet</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer p-1 rounded transition-colors hover:bg-white/5">
<div className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform bg-slate-600"></div>
<span className="text-xs group-hover:text-white transition-colors font-geist text-slate-400">Other</span>
</div>
</div>
</div>
<div className="mt-4 flex items-start gap-2 p-3 rounded-xl border transition-all cursor-default bg-slate-800/30 border-white/5 hover:bg-slate-800/50 hover:border-white/10">
<i className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" data-lucide="info"></i>
<p className="text-[10px] leading-snug font-geist text-slate-400">Most expenses come from Activity and Meals, while Internet&amp;Telephone shows a slight increase.</p>
</div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] group/panel hover:border-white/10 bg-slate-900/40 border-white/5 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-lg tracking-tight font-geist text-white group-hover/panel:text-cyan-50 transition-colors duration-300">Invoices</h3>
<button className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 hover:rotate-180 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95 bg-slate-800 border-white/10 text-white hover:bg-slate-700">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>

<div className="border rounded-xl p-3 mb-6 flex items-center gap-3 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] group/score cursor-default bg-slate-900/50 border-white/5 hover:bg-slate-800/80 hover:border-white/10 transform-gpu">
<span className="text-xs font-medium whitespace-nowrap group-hover/score:text-cyan-100 group-hover/score:translate-x-1 transition-all duration-300 font-geist text-slate-400">Payment Score</span>
<div className="flex-1 h-3 flex items-center gap-0.5">

<div className="w-0.5 h-1.5 bg-cyan-500/30 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/50 group-hover/score:h-2 group-hover/score:-translate-y-0.5"></div>
<div className="w-0.5 h-2 bg-cyan-500/30 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/50 group-hover/score:h-2.5 group-hover/score:-translate-y-0.5"></div>
<div className="w-0.5 h-3 bg-cyan-500/30 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/50 group-hover/score:h-3.5 group-hover/score:-translate-y-0.5"></div>
<div className="w-0.5 h-2.5 bg-cyan-500/50 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/70 group-hover/score:h-3 group-hover/score:-translate-y-0.5"></div>

<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500 rounded-full transition-all duration-300 group-hover/score:h-4 group-hover/score:bg-cyan-400 group-hover/score:-translate-y-0.5 group-hover/score:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<div className="w-0.5 h-3 bg-cyan-500/30 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/50 group-hover/score:h-3.5 group-hover/score:-translate-y-0.5"></div>
<div className="w-0.5 h-3 bg-cyan-500/30 rounded-full transition-all duration-300 group-hover/score:bg-cyan-500/50 group-hover/score:h-3.5 group-hover/score:-translate-y-0.5"></div>
<div className="w-0.5 h-3 rounded-full bg-slate-700 transition-all duration-300 group-hover/score:bg-slate-600"></div>
<div className="w-0.5 h-3 rounded-full bg-slate-700 transition-all duration-300 group-hover/score:bg-slate-600"></div>
<div className="w-0.5 h-3 rounded-full bg-slate-700 transition-all duration-300 group-hover/score:bg-slate-600"></div>
<div className="w-0.5 h-3 rounded-full bg-slate-700 transition-all duration-300 group-hover/score:bg-slate-600"></div>
<div className="w-0.5 h-3 rounded-full bg-slate-700 transition-all duration-300 group-hover/score:bg-slate-600"></div>
</div>
<span className="text-xs font-semibold group-hover/score:scale-125 group-hover/score:text-cyan-400 transition-all duration-300 font-geist text-white">76</span>
</div>

<div className="flex flex-col gap-2 flex-1">

<div className="flex items-center justify-between group p-2 -mx-2 rounded-xl border border-transparent transition-all duration-300 cursor-pointer hover:bg-white/5 hover:border-white/10 hover:translate-x-1 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
<div className="flex flex-col">
<span className="text-xs font-medium group-hover:text-white transition-colors font-geist text-slate-300">Aug 9</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-300 font-geist">in 1 week</span>
</div>
<div className="bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-full flex items-center gap-1.5 w-20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300"></div>
<span className="text-[10px] group-hover:text-cyan-50 font-geist text-slate-300 transition-colors duration-300">Unpaid</span>
</div>
<span className="text-xs w-20 truncate group-hover:text-white group-hover:translate-x-1 transition-all duration-300 font-geist text-slate-400">Leonard Kim</span>
<span className="text-xs font-medium text-right w-16 group-hover:scale-110 group-hover:text-cyan-400 origin-right transition-all duration-300 font-geist text-white">$130.00</span>
</div>
<div className="border-b w-full mx-2 opacity-30 border-white/5"></div>

<div className="flex items-center justify-between group p-2 -mx-2 rounded-xl border border-transparent transition-all duration-300 cursor-pointer hover:bg-white/5 hover:border-white/10 hover:translate-x-1 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
<div className="flex flex-col">
<span className="text-xs font-medium group-hover:text-white transition-colors font-geist text-slate-300">Aug 24</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-300 font-geist">in 2 week</span>
</div>
<div className="bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-full flex items-center gap-1.5 w-20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.3)]">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 group-hover:bg-amber-400 transition-all duration-300"></div>
<span className="text-[10px] group-hover:text-amber-50 font-geist text-slate-300 transition-colors duration-300">Paid</span>
</div>
<span className="text-xs w-20 truncate group-hover:text-white group-hover:translate-x-1 transition-all duration-300 font-geist text-slate-400">John Smith</span>
<span className="text-xs font-medium text-right w-16 group-hover:scale-110 group-hover:text-amber-400 origin-right transition-all duration-300 font-geist text-white">$220.00</span>
</div>
<div className="border-b w-full mx-2 opacity-30 border-white/5"></div>

<div className="flex items-center justify-between group p-2 -mx-2 rounded-xl border border-transparent transition-all duration-300 cursor-pointer hover:bg-white/5 hover:border-white/10 hover:translate-x-1 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
<div className="flex flex-col">
<span className="text-xs font-medium group-hover:text-white transition-colors font-geist text-slate-300">Sep 9</span>
<span className="text-[10px] text-slate-500 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-300 font-geist">in 1 month</span>
</div>
<div className="bg-slate-500/10 border border-slate-500/20 px-2 py-1 rounded-full flex items-center gap-1.5 w-20 group-hover:bg-slate-500/20 group-hover:border-slate-500/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(148,163,184,0.3)]">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:scale-150 group-hover:bg-slate-400 transition-all duration-300"></div>
<span className="text-[10px] group-hover:text-slate-50 font-geist text-slate-300 transition-colors duration-300">Pending</span>
</div>
<span className="text-xs w-20 truncate group-hover:text-white group-hover:translate-x-1 transition-all duration-300 font-geist text-slate-400">Anna Spirid</span>
<span className="text-xs font-medium text-right w-16 group-hover:scale-110 group-hover:text-slate-300 origin-right transition-all duration-300 font-geist text-white">$2080.00</span>
</div>
</div>
<a className="mt-6 flex items-center gap-1 text-xs font-medium transition-all duration-300 self-start group/link font-geist text-white hover:text-cyan-400 hover:translate-x-0.5" href="#">
        View all invoices 
        <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="h-8"></div> 
</div>
</main>


    </>
  );
}
