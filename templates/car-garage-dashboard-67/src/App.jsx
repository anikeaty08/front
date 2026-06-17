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
      

<aside className="w-16 lg:w-64 border-r border-zinc-800/60 bg-zinc-950/50 flex flex-col justify-between py-6 px-4 lg:px-6 z-20 backdrop-blur-xl">
<div className="flex flex-col gap-8 lg:gap-12">

<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-zinc-950 text-lg" icon="solar:steering-wheel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-lg font-medium tracking-tighter hidden lg:block">APEX<span className="text-zinc-500">.</span></div>
</div>

<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-2 py-2.5 rounded-lg bg-zinc-800/50 text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:garage-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm hidden lg:block">Garage</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:tuning-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm hidden lg:block">Telemetry &amp; Tuning</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm hidden lg:block">Race Events</span>
</a>
<a className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm hidden lg:block">Marketplace</span>
</a>
</nav>
</div>
<div className="flex flex-col gap-4 px-2">

<div className="flex items-center gap-3 pt-6 border-t border-zinc-800/60 hidden lg:flex">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex-shrink-0">
<img alt="Driver" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Driver_X7</span>
<span className="text-xs text-zinc-500">Level 42 · Pro</span>
</div>
</div>
<a className="flex items-center gap-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm hidden lg:block">Settings</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-zinc-950">

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none"></div>

<header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-zinc-800/50 z-10 bg-zinc-950/40 backdrop-blur-md">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-100">Project <span className="text-zinc-400">Valkyrie</span></h1>
<p className="text-xs text-zinc-500 mt-0.5">Class S · Hypercar Division</p>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 border-r border-zinc-800 pr-6 hidden md:flex">
<div className="flex flex-col items-end">
<span className="text-xs text-zinc-500">Credits</span>
<span className="text-sm font-medium text-zinc-200 flex items-center gap-1">
<iconify-icon className="text-zinc-400" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
                            142,500
                        </span>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-zinc-500">Tokens</span>
<span className="text-sm font-medium text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                            1,250
                        </span>
</div>
</div>
<button className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
                    Test Drive
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-6 z-10">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 h-full max-h-[900px]">

<div className="xl:col-span-8 flex flex-col gap-6">

<div className="relative w-full flex-1 min-h-[400px] rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/20 to-zinc-900/5 overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551806235-a05d84d1262f?auto=format&amp;fit=crop&amp;q=80&amp;w=2070')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>

<img alt="Hypercar" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&amp;fit=crop&amp;q=80&amp;w=1974"/>

<div className="absolute top-6 left-6 flex items-center gap-2 bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50 px-3 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-zinc-300">Dyno Active</span>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
<iconify-icon className="text-lg" icon="solar:rotate-3d-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 flex gap-6">
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Power</span>
<span className="text-lg font-medium tracking-tight">1,160 <span className="text-xs text-zinc-500 font-normal">HP</span></span>
</div>
<div className="w-px h-auto bg-zinc-800/60"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Weight</span>
<span className="text-lg font-medium tracking-tight">1,050 <span className="text-xs text-zinc-500 font-normal">KG</span></span>
</div>
<div className="w-px h-auto bg-zinc-800/60"></div>
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Drivetrain</span>
<span className="text-lg font-medium tracking-tight">AWD</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-48">

<div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm flex flex-col justify-center gap-4">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-400">Top Speed</span>
<span className="text-zinc-200">382 km/h</span>
</div>
<div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 rounded-full w-[85%] relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-400">Acceleration 0-100</span>
<span className="text-zinc-200">2.1s</span>
</div>
<div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 rounded-full w-[95%] relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-zinc-400">Handling Limit</span>
<span className="text-zinc-200">1.8g</span>
</div>
<div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 rounded-full w-[78%] relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between">
<iconify-icon className="absolute -right-4 -top-4 text-8xl text-zinc-800/20" icon="solar:cpu-linear" strokeWidth="1"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Engine Map Management</h3>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[80%]">Currently optimized for high-speed circuits. Adjust ECU mapping for tight corners to improve exit velocity.</p>
</div>
<div className="flex items-center gap-3 mt-4">
<span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-zinc-300">Map 3: Race Qualify</span>
<button className="ml-auto text-xs text-zinc-400 hover:text-zinc-100 underline underline-offset-4 decoration-zinc-700">Change Map</button>
</div>
</div>
</div>
</div>

<div className="xl:col-span-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-md flex flex-col overflow-hidden">
<div className="p-5 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-900/50">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-zinc-500" icon="solar:settings-bold" strokeWidth="1.5"></iconify-icon>
<h2 className="text-sm font-medium">Advanced Setup</h2>
</div>
<div className="flex gap-1">
<button className="px-2 py-1 rounded text-xs text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">Load</button>
<button className="px-2 py-1 rounded text-xs text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">Save</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-5 flex flex-col gap-8">

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Aerodynamics</h3>
<div className="flex flex-col gap-5">

<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300">Front Downforce</span>
<span className="text-zinc-400 font-mono">12.5°</span>
</div>
<div className="relative h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer flex items-center">

<div className="absolute h-full bg-zinc-400 rounded-full w-[40%]"></div>

<div className="absolute w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-zinc-300 left-[40%] -translate-x-1/2 transition-transform group-hover:scale-110"></div>

<div className="absolute left-1/2 -translate-x-1/2 w-px h-2.5 bg-zinc-600"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-1.5 px-1">
<span>Speed</span>
<span>Grip</span>
</div>
</div>

<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300">Rear Wing Angle</span>
<span className="text-zinc-400 font-mono">24.0°</span>
</div>
<div className="relative h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer flex items-center">
<div className="absolute h-full bg-zinc-400 rounded-full w-[75%]"></div>
<div className="absolute w-3.5 h-3.5 bg-zinc-100 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-zinc-300 left-[75%] -translate-x-1/2 transition-transform group-hover:scale-110"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-px h-2.5 bg-zinc-600"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-1.5 px-1">
<span>Speed</span>
<span>Grip</span>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-800/50"></div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Suspension</h3>
<div className="flex flex-col gap-5">

<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300">Anti-Roll Bar (F)</span>
<span className="text-zinc-400 font-mono">Stiff</span>
</div>
<div className="relative h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer flex items-center">
<div className="absolute h-full bg-zinc-500 rounded-full w-[80%] transition-all"></div>
<div className="absolute w-3 h-3 bg-zinc-200 rounded-sm left-[80%] -translate-x-1/2 transition-transform group-hover:scale-110"></div>

<div className="absolute inset-x-0 flex justify-between px-1 pointer-events-none">
<div className="w-0.5 h-1.5 bg-zinc-900 rounded-full"></div>
<div className="w-0.5 h-1.5 bg-zinc-900 rounded-full"></div>
<div className="w-0.5 h-1.5 bg-zinc-900 rounded-full"></div>
<div className="w-0.5 h-1.5 bg-zinc-900 rounded-full"></div>
<div className="w-0.5 h-1.5 bg-zinc-900 rounded-full"></div>
</div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-300">Ride Height</span>
<span className="text-zinc-400 font-mono">65 mm</span>
</div>
<div className="relative h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer flex items-center">
<div className="absolute h-full bg-zinc-500 rounded-full w-[20%] transition-all"></div>
<div className="absolute w-3 h-3 bg-zinc-200 rounded-full left-[20%] -translate-x-1/2 shadow-sm transition-transform group-hover:scale-110"></div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-zinc-800/50"></div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Assists &amp; Electronics</h3>
<div className="flex flex-col gap-3">

<label className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/20 border border-zinc-800/50 cursor-pointer group hover:bg-zinc-800/40 transition-colors">
<div className="flex flex-col">
<span className="text-sm text-zinc-200 group-hover:text-white transition-colors">Traction Control (TCS)</span>
<span className="text-[10px] text-zinc-500 mt-0.5">Limits wheel spin on acceleration</span>
</div>

<div className="relative w-9 h-5 bg-zinc-200 rounded-full transition-colors flex items-center px-0.5">
<div className="w-4 h-4 bg-zinc-950 rounded-full transform translate-x-4 transition-transform shadow-sm"></div>
</div>
</label>
<label className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/20 border border-zinc-800/50 cursor-pointer group hover:bg-zinc-800/40 transition-colors">
<div className="flex flex-col">
<span className="text-sm text-zinc-200 group-hover:text-white transition-colors">Anti-lock Brakes (ABS)</span>
<span className="text-[10px] text-zinc-500 mt-0.5">Prevents wheel lockup under braking</span>
</div>

<div className="relative w-9 h-5 bg-zinc-700 rounded-full transition-colors flex items-center px-0.5">
<div className="w-4 h-4 bg-zinc-300 rounded-full transform translate-x-0 transition-transform shadow-sm"></div>
</div>
</label>

<div className="mt-2 relative">
<div className="flex justify-between items-center p-3 rounded-lg border border-zinc-800 bg-zinc-900 cursor-pointer hover:border-zinc-700 transition-colors">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 mb-0.5">Brake Bias</span>
<span className="text-sm text-zinc-200">54% Front</span>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="p-5 border-t border-zinc-800/50 bg-zinc-900/50 mt-auto">
<button className="w-full py-2.5 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Apply Tuning Setup
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
