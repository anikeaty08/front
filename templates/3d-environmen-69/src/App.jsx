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
      

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

<nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-neutral-950/50 backdrop-blur-md">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                FP
            </div>
<span className="text-sm font-medium tracking-tight text-white/90">HydroVis<span className="text-neutral-500">_Lab</span></span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-white hover:text-cyan-400 transition-colors" href="#">Simulation</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Telemetry</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/10 bg-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-wider font-medium text-neutral-400">Tracking Active</span>
</div>
<button className="text-neutral-400 hover:text-white">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 w-full h-full flex flex-col md:flex-row pt-16">

<aside className="hidden md:flex flex-col w-80 h-full border-r border-white/5 bg-neutral-950/30 backdrop-blur-sm p-6 justify-between">
<div className="space-y-6">
<div>
<h1 className="text-xl font-medium text-white tracking-tight mb-2">Pool &amp; Weir Fishway</h1>
<p className="text-xs text-neutral-400 leading-relaxed">
                        A hydraulic visualization of a stepped pool structure facilitating upstream migration. Modeled species: <span className="text-orange-400">Oncorhynchus mykiss</span>.
                    </p>
</div>
<div className="space-y-3">
<div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Live Metrics</div>
<div className="p-3 rounded border border-white/5 bg-white/5 space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-300">Water Velocity</span>
<span className="text-xs font-mono text-cyan-300">1.8 m/s</span>
</div>
<div className="w-full bg-neutral-800 h-0.5 rounded-full">
<div className="bg-cyan-500 w-[65%] h-full rounded-full"></div>
</div>
</div>
<div className="p-3 rounded border border-white/5 bg-white/5 space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-300">Pool Depth</span>
<span className="text-xs font-mono text-indigo-300">1.2 m</span>
</div>
<div className="w-full bg-neutral-800 h-0.5 rounded-full">
<div className="bg-indigo-500 w-[80%] h-full rounded-full"></div>
</div>
</div>
<div className="p-3 rounded border border-white/5 bg-white/5 space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-300">Energy Dissipation</span>
<span className="text-xs font-mono text-emerald-300">180 W/m³</span>
</div>
<div className="w-full bg-neutral-800 h-0.5 rounded-full">
<div className="bg-emerald-500 w-[45%] h-full rounded-full"></div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">Passage Efficiency</div>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-2xl font-mono text-white tracking-tight">94%</span>
<span className="text-[10px] text-neutral-500">Success Rate</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-mono text-white tracking-tight">12s</span>
<span className="text-[10px] text-neutral-500">Avg. Transit</span>
</div>
</div>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/5">
<div className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 mt-0.5" icon="solar:info-square-linear" width="16"></iconify-icon>
<div className="text-xs text-neutral-400">
                        The weirs create pools of low velocity, allowing fish to rest between bursts of swimming.
                    </div>
</div>
</div>
</aside>

<div className="flex-1 relative scene-viewport flex items-center justify-center bg-transparent group cursor-grab active:cursor-grabbing">

<div className="isometric-world w-64 h-[500px] relative">

<div className="face w-full h-full bg-neutral-800 border border-white/5" style={{transform: 'translateZ(0px)'}}></div>

<div className="face h-full w-[40px] wall origin-left" style={{transform: 'rotateY(-90deg) translateZ(0px)'}}></div>

<div className="face h-full w-[40px] wall origin-right right-0" style={{transform: 'rotateY(90deg) translateZ(0px)'}}></div>

<div className="face w-full h-full water" style={{transform: 'translateZ(30px)', opacity: '0.6'}}></div>


<div className="baffle" style={{top: '20%', height: '25px', transform: 'translateZ(0) rotateX(-90deg)'}}></div>

<div className="baffle" style={{top: '40%', height: '25px', transform: 'translateZ(0) rotateX(-90deg)'}}></div>

<div className="baffle" style={{top: '60%', height: '25px', transform: 'translateZ(0) rotateX(-90deg)'}}></div>

<div className="baffle" style={{top: '80%', height: '25px', transform: 'translateZ(0) rotateX(-90deg)'}}></div>

<div className="fish-container">
<div className="fish-mesh">

<div className="fish-body"></div>

<div className="fish-dorsal"></div>

<div className="fish-tail"></div>
</div>

<div className="absolute w-3 h-8 bg-black/40 blur-sm rounded-full -translate-x-1/2 -translate-y-1/2 top-0 left-0" style={{transform: 'translateZ(-20px)'}}></div>
</div>

<div className="absolute -right-12 top-0 h-full flex flex-col justify-between py-4 opacity-50">
<div className="text-[10px] font-mono text-neutral-500 border-l border-neutral-700 pl-2">0m</div>
<div className="text-[10px] font-mono text-neutral-500 border-l border-neutral-700 pl-2">5m</div>
<div className="text-[10px] font-mono text-neutral-500 border-l border-neutral-700 pl-2">10m</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-2xl shadow-black/50 z-50">
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all" title="Rotate View">
<iconify-icon icon="solar:refresh-linear" width="20"></iconify-icon>
</button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 transition-all" title="Flow Animation">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all" title="Pause">
<iconify-icon icon="solar:pause-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-6 right-6 flex flex-col items-end gap-2">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm text-xs font-mono text-neutral-500 shadow-lg">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
<span>ID: <span className="text-white">TAG-8823</span></span>
</div>
<div className="px-3 py-1 rounded-md border border-white/5 bg-black/20 text-[10px] font-mono text-neutral-600">
                    Pos: 12.4, 04.2, 01.1
                 </div>
</div>

<div className="absolute bottom-8 right-8 hidden md:block">
<div className="flex flex-col bg-neutral-900/80 backdrop-blur border border-white/10 rounded-lg p-1">
<button className="p-2 rounded hover:bg-white/5 text-cyan-400">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</button>
<button className="p-2 rounded hover:bg-white/5 text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
