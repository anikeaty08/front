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
      

<header className="flex-none flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl relative z-30">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
                AERO
            </a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Models</a>
<a className="text-white font-medium" href="#">Configurator</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Technology</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Inventory</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm">
<button className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Sign In</span>
</button>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">

<div className="relative flex-1 flex flex-col items-center justify-center bg-[#050505] overflow-hidden" style={{backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)`}}>

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: `64px 64px`}}></div>

<div className="absolute bottom-1/4 w-[120%] h-[40%] bg-white/5 rounded-[100%] blur-[80px] pointer-events-none translate-y-1/2"></div>


<div className="relative z-10 w-full max-w-5xl px-8 flex items-center justify-center transition-transform duration-700 hover:scale-[1.02] cursor-grab active:cursor-grabbing">
<img alt="Car 3D Model" className="filter contrast-125 opacity-90 mix-blend-lighten w-full h-auto object-contain drop-shadow-2xl saturate-50" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" />
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-[#111] border border-white/10 rounded-full shadow-2xl backdrop-blur-md z-20">
<button className="p-2.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all group relative">
<iconify-icon icon="solar:ruler-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Dimensions</span>
</button>
<button className="p-2.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="w-px h-5 bg-white/10 mx-1"></div>
<div className="flex items-center bg-[#1a1a1a] rounded-full p-1 border border-white/5">
<button className="px-4 py-1.5 text-xs font-medium bg-white text-black rounded-full shadow-sm">Exterior</button>
<button className="hover:text-white transition-colors text-xs font-medium text-neutral-400 rounded-full pt-1.5 pr-4 pb-1.5 pl-4">Interior</button>
</div>
<div className="w-px h-5 bg-white/10 mx-1"></div>
<button className="p-2.5 text-neutral-500 hover:text-white hover:bg-white/5 rounded-full transition-all group relative">
<iconify-icon icon="solar:video-frame-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Cinematic</span>
</button>
</div>

<button className="absolute top-[45%] left-[25%] z-20 w-6 h-6 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all cursor-pointer group">
<span className="w-1.5 h-1.5 bg-current rounded-full"></span>
<div className="absolute left-8 top-1/2 -translate-y-1/2 w-max px-3 py-1.5 bg-black/90 border border-white/10 backdrop-blur-md rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white">Aerodynamic Front Fascia</div>
</button>
</div>

<aside className="w-full lg:w-[420px] bg-[#0a0a0a] lg:border-l border-white/5 flex flex-col z-30 h-[50vh] lg:h-auto overflow-y-auto relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)] lg:shadow-none">
<div className="p-6 lg:p-8 flex-1 space-y-10">

<div className="space-y-1">
<div className="flex items-center gap-2 text-xs text-neutral-500 font-medium uppercase tracking-wider mb-2">
<span>Model 01</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span>Performance</span>
</div>
<h1 className="text-3xl font-medium tracking-tighter text-white">Aero GT-R</h1>
<p className="text-sm text-neutral-400 mt-2">Dual Motor All-Wheel Drive</p>
</div>

<div className="grid grid-cols-3 gap-4 pb-8 border-b border-white/5">
<div className="flex flex-col space-y-1">
<span className="text-xl font-medium text-white tracking-tight">2.4s</span>
<span className="text-xs text-neutral-500">0-60 mph</span>
</div>
<div className="flex flex-col space-y-1">
<span className="text-xl font-medium text-white tracking-tight">410</span>
<span className="text-xs text-neutral-500">Mi Range</span>
</div>
<div className="flex flex-col space-y-1">
<span className="text-xl font-medium text-white tracking-tight">1020</span>
<span className="text-xs text-neutral-500">Peak HP</span>
</div>
</div>

<div className="space-y-4">
<div className="flex items-baseline justify-between">
<h2 className="text-sm font-medium text-white">Exterior Paint</h2>
<span className="text-xs text-neutral-400">Stealth Grey <span className="text-white ml-1">Included</span></span>
</div>
<div className="flex flex-wrap gap-4">
<label className="cursor-pointer group">
<input checked className="peer sr-only" name="paint" type="radio" />
<div className="w-10 h-10 rounded-full bg-[#1c1c1e] ring-1 ring-white/10 peer-checked:ring-white peer-checked:ring-offset-4 peer-checked:ring-offset-[#0a0a0a] transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] group-hover:scale-110"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="paint" type="radio" />
<div className="w-10 h-10 rounded-full bg-[#f4f4f5] ring-1 ring-white/10 peer-checked:ring-white peer-checked:ring-offset-4 peer-checked:ring-offset-[#0a0a0a] transition-all shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] group-hover:scale-110"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="paint" type="radio" />
<div className="w-10 h-10 rounded-full bg-[#030712] ring-1 ring-white/10 peer-checked:ring-white peer-checked:ring-offset-4 peer-checked:ring-offset-[#0a0a0a] transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] group-hover:scale-110"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="paint" type="radio" />
<div className="w-10 h-10 rounded-full bg-[#450a0a] ring-1 ring-white/10 peer-checked:ring-white peer-checked:ring-offset-4 peer-checked:ring-offset-[#0a0a0a] transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] group-hover:scale-110"></div>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex items-baseline justify-between">
<h2 className="text-sm font-medium text-white">Wheels</h2>
</div>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer relative">
<input checked className="peer sr-only" name="wheels" type="radio" />
<div className="w-full flex items-center justify-between border border-white/10 rounded-xl p-4 bg-white/[0.01] peer-checked:border-white/40 peer-checked:bg-white/[0.04] transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-300" icon="solar:record-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">20" Cyber Wheels</span>
<span className="text-xs text-neutral-500">Optimized for range</span>
</div>
</div>
<span className="text-xs text-neutral-400">Included</span>
</div>

<div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-white opacity-0 peer-checked:opacity-100 flex items-center justify-center transition-opacity">
<iconify-icon className="text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="wheels" type="radio" />
<div className="w-full flex items-center justify-between border border-white/10 rounded-xl p-4 bg-white/[0.01] peer-checked:border-white/40 peer-checked:bg-white/[0.04] transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-300" icon="solar:wheel-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">22" Forged Turbine</span>
<span className="text-xs text-neutral-500">Maximum performance</span>
</div>
</div>
<span className="text-xs text-white">+$4,500</span>
</div>
<div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-white opacity-0 peer-checked:opacity-100 flex items-center justify-center transition-opacity">
<iconify-icon className="text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium text-white">Software & Autonomy</h2>
<label className="cursor-pointer flex items-start justify-between p-4 border border-white/10 rounded-xl hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col pr-4 space-y-1">
<span className="text-sm text-white font-medium">Full Autonomous Capability</span>
<span className="text-xs text-neutral-500 leading-relaxed">Navigate on Autopilot, Auto Lane Change, Autopark, and Smart Summon.</span>
<span className="text-xs text-neutral-300 mt-2 block">+$12,000</span>
</div>
<div className="relative inline-flex items-center mt-1">
<input className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-neutral-800 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 after:border-transparent after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</div>
</label>
</div>
</div>

<div className="p-6 lg:p-8 border-t border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl sticky bottom-0 z-10">
<div className="flex items-end justify-between mb-5">
<div className="flex flex-col">
<span className="text-xs text-neutral-500 mb-1">Estimated Delivery: Oct-Nov</span>
<span className="text-sm font-medium text-neutral-300">Purchase Price</span>
</div>
<span className="text-2xl font-medium tracking-tighter text-white">$104,990</span>
</div>
<button className="w-full py-3.5 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 group">
                    Continue to Payment
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</aside>
</main>

    </>
  );
}
