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
      

<div className="w-full max-w-[375px] h-[812px] bg-[#F9F9FB] relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sm:rounded-[2.5rem] overflow-hidden flex flex-col ring-1 ring-gray-200/50">

<header className="pt-14 pb-4 px-6 bg-[#F9F9FB]/80 backdrop-blur-xl sticky top-0 z-30">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Hub Inventory</h1>
<div className="w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-black/[0.04] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
<iconify-icon className="text-gray-600" icon="solar:bell-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg group-focus-within:text-gray-900 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-white ring-1 ring-black/[0.04] rounded-2xl py-3.5 pl-10 pr-4 text-sm font-medium text-gray-900 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-gray-900 focus:shadow-sm transition-all shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]" placeholder="Search cargo ID..." type="text"/>
</div>
</header>

<main className="px-6 pt-2 pb-28 flex-1 overflow-y-auto no-scrollbar">
<div className="flex items-center justify-between mb-4 mt-2">
<h2 className="text-sm font-medium text-gray-500">Active Shipments</h2>
<button className="text-xs font-medium text-gray-900 hover:text-gray-600 transition-colors">See all</button>
</div>
<div className="grid grid-cols-2 gap-3.5">

<div className="col-span-2 bg-[#0A0A0A] rounded-[1.5rem] p-5 shadow-lg cursor-pointer hover:bg-[#111] transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px] ring-1 ring-white/10">
<div className="flex justify-between items-start relative z-10 mb-6">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md">
<iconify-icon icon="solar:airplane-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white">#KOLI-05</h3>
<p className="text-xs text-white/60 font-medium mt-0.5">Air Freight</p>
</div>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-md">
                            42 Items
                        </span>
</div>
<div className="flex justify-between items-end relative z-10">
<div>
<p className="text-xs text-white/50 mb-1 font-medium">Arrival Time</p>
<p className="text-sm font-medium text-white">Today, 09:15 AM</p>
</div>
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-tight">Sorting</span>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-[1.5rem] p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.04] cursor-pointer hover:ring-black/[0.08] hover:shadow-sm transition-all duration-300 flex flex-col justify-between aspect-square group">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-[#F7F7F8] text-gray-700 flex items-center justify-center">
<iconify-icon icon="solar:ship-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<iconify-icon className="text-gray-300 group-hover:text-gray-900 transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-gray-900">#KOLI-04</h3>
<p className="text-xs text-gray-500 font-normal mt-0.5 mb-3">15 Items left</p>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
<span className="text-xs font-medium text-gray-900">Almost Cleared</span>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-[1.5rem] p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] ring-1 ring-amber-500/20 cursor-pointer hover:ring-amber-500/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between aspect-square group">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<iconify-icon className="text-gray-300 group-hover:text-gray-900 transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-gray-900">#KOLI-02</h3>
<p className="text-xs text-gray-500 font-normal mt-0.5 mb-3">Action Required</p>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-xs font-medium text-amber-700">Overdue</span>
</div>
</div>
</div>

<div className="col-span-2 mt-2 group cursor-pointer">
<div className="bg-transparent border border-dashed border-gray-300 rounded-[1.25rem] p-4 flex items-center justify-center gap-2 text-gray-500 hover:bg-white hover:border-gray-400 hover:text-gray-900 transition-all duration-300 shadow-sm">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Register New Cargo</span>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-black/[0.04] pb-8 pt-4 px-8 flex justify-between items-center z-40">

<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors group">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:home-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium">Home</span>
</button>

<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors group">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:scanner-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium">Scan</span>
</button>

<button className="flex flex-col items-center gap-1 text-gray-900 transition-colors relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-900 rounded-b-full"></div>
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium">Inventory</span>
</button>

<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors group">
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium">Profile</span>
</button>
</nav>
</div>

    </>
  );
}
