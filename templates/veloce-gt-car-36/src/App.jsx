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
      

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#050505] z-50">
<div className="flex items-center gap-8">
<a className="text-white tracking-tighter font-medium text-lg" href="#">VELOCE</a>
<nav className="hidden md:flex gap-6 text-xs font-medium text-neutral-500">
<a className="text-white hover:text-white transition-colors" href="#">Model GT</a>
<a className="hover:text-white transition-colors" href="#">Model S</a>
<a className="hover:text-white transition-colors" href="#">Roadster</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:bookmark-linear" width="16"></iconify-icon>
                Save Build
            </button>
<div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white/50">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative">

<div className="lg:col-span-8 relative bg-[#080808] flex flex-col justify-center items-center overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#050505] to-[#050505]"></div>

<div className="relative z-10 w-full max-w-5xl px-8 transition-transform duration-700 ease-out transform group-hover:scale-105">

<img alt="Car Model" className="w-full h-auto object-contain drop-shadow-2xl opacity-90 grayscale-[20%] brightness-110" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-center z-20">
<div>
<div className="text-2xl text-white font-medium tracking-tight">2.1s</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">0-60 mph</div>
</div>
<div>
<div className="text-2xl text-white font-medium tracking-tight">205mph</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Top Speed</div>
</div>
<div>
<div className="text-2xl text-white font-medium tracking-tight">410mi</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Range</div>
</div>
</div>

<div className="absolute top-8 right-8 flex flex-col gap-2 z-20">
<button className="w-10 h-10 rounded-full bg-neutral-900/50 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-neutral-900/50 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-4 bg-[#050505] border-l border-white/5 flex flex-col h-full relative z-30">

<div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-8 pb-32">
<div className="mb-10">
<h1 className="text-3xl text-white font-medium tracking-tight mb-2">Veloce GT</h1>
<p className="text-sm text-neutral-400">Estimated delivery: Oct - Nov 2024</p>
</div>

<div className="mb-12">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Paint</span>
<span className="text-xs text-white">Midnight Silver</span>
</div>
<div className="flex flex-wrap gap-4">

<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="paint" type="radio"/>
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 shadow-inner peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-white transition-all group-hover:scale-105"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 whitespace-nowrap transition-opacity">Included</span>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="paint" type="radio"/>
<div className="w-12 h-12 rounded-full bg-white border border-white/10 shadow-inner peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-white transition-all group-hover:scale-105"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 whitespace-nowrap transition-opacity">$1,500</span>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="paint" type="radio"/>
<div className="w-12 h-12 rounded-full bg-blue-900 border border-white/10 shadow-inner peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-blue-500 transition-all group-hover:scale-105"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 whitespace-nowrap transition-opacity">$2,000</span>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="paint" type="radio"/>
<div className="w-12 h-12 rounded-full bg-red-700 border border-white/10 shadow-inner peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-red-500 transition-all group-hover:scale-105"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 peer-checked:opacity-100 whitespace-nowrap transition-opacity">$2,500</span>
</label>
</div>
</div>

<div className="mb-12">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Wheels</span>
<span className="text-xs text-white">21" Turbine</span>
</div>
<div className="grid grid-cols-2 gap-3">

<label className="cursor-pointer relative group">
<input className="peer sr-only" name="wheels" type="radio"/>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] peer-checked:bg-white/[0.08] peer-checked:border-white/30 transition-all">
<iconify-icon className="text-neutral-400 peer-checked:text-white mb-2" icon="solar:wheel-angle-linear" width="32"></iconify-icon>
<div className="text-sm text-white font-medium">19" Aeroblade</div>
<div className="text-xs text-neutral-500">All-Season Tires</div>
<div className="text-xs text-neutral-400 mt-2">Included</div>
</div>
</label>

<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only" name="wheels" type="radio"/>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] peer-checked:bg-white/[0.08] peer-checked:border-white/30 transition-all">
<iconify-icon className="text-neutral-400 peer-checked:text-white mb-2" icon="solar:wheel-angle-bold" width="32"></iconify-icon>
<div className="text-sm text-white font-medium">21" Turbine</div>
<div className="text-xs text-neutral-500">Summer Tires</div>
<div className="text-xs text-white mt-2">$3,500</div>
</div>
</label>
</div>
</div>

<div className="mb-12">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Interior</span>
<span className="text-xs text-white">All Black</span>
</div>
<div className="flex gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="interior" type="radio"/>
<div className="w-10 h-10 rounded-full bg-[#111] border border-white/20 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-white transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interior" type="radio"/>
<div className="w-10 h-10 rounded-full bg-[#e3e3e3] border border-white/10 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-white transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="interior" type="radio"/>
<div className="w-10 h-10 rounded-full bg-[#d2b48c] border border-white/10 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-offset-[#050505] peer-checked:ring-white transition-all"></div>
</label>
</div>
</div>

<div className="mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500 block mb-4">Autopilot</span>
<label className="flex items-start justify-between cursor-pointer group mb-6">
<div className="flex-1 pr-4">
<div className="text-sm text-white font-medium mb-1 group-hover:text-white/90">Enhanced Autopilot</div>
<p className="text-xs text-neutral-500 leading-relaxed">Navigate on Autopilot, Auto Lane Change, Autopark, Summon, and Smart Summon.</p>
<div className="mt-2 text-xs text-white">$6,000</div>
</div>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:bg-white peer-checked:after:border-white"></div>
</div>
</label>
<label className="flex items-start justify-between cursor-pointer group">
<div className="flex-1 pr-4">
<div className="text-sm text-white font-medium mb-1 group-hover:text-white/90">Full Self-Driving</div>
<p className="text-xs text-neutral-500 leading-relaxed">All functionality of Basic Autopilot and Enhanced Autopilot, plus Traffic Light and Stop Sign Control.</p>
<div className="mt-2 text-xs text-white">$12,000</div>
</div>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:bg-white peer-checked:after:border-white"></div>
</div>
</label>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#050505] border-t border-white/5 p-6 lg:p-8 backdrop-blur-xl bg-opacity-90">
<div className="flex justify-between items-end mb-4">
<div>
<div className="text-xs text-neutral-500 mb-1">Total Price</div>
<div className="text-2xl text-white font-medium tracking-tight">$94,990</div>
</div>
<div className="text-right">
<div className="text-xs text-neutral-500 mb-1">Monthly</div>
<div className="text-sm text-white font-medium">$1,350/mo</div>
</div>
</div>
<button className="w-full bg-white text-black h-12 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                    Continue to Payment
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
