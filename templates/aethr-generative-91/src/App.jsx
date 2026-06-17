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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none z-0 mix-blend-screen opacity-20">
<div className="absolute top-[10%] left-[20%] w-[40%] aspect-square rounded-full bg-zinc-400 blur-[120px]"></div>
<div className="absolute top-[30%] right-[20%] w-[30%] aspect-square rounded-full bg-zinc-600 blur-[100px]"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-lg uppercase text-zinc-100">AETHR</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Concept</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Gallery</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Algorithms</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Manifesto</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
<span>Sign In</span>
</button>
<button className="h-8 px-4 rounded-full bg-zinc-50 text-zinc-950 text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Initialize
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow z-10 relative mt-16">

<section className="relative min-h-[85vh] flex items-center px-6 pt-12 pb-24 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

<div className="flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Engine v3.4 Online
                    </div>
<div className="space-y-4">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-gradient">
                            Horology,<br/>Computed.
                        </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-md font-normal leading-relaxed">
                            Generate mathematically perfect, unique timepieces. 3D rendered in real-time, forged from pure data to physical reality.
                        </p>
</div>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="h-12 px-6 rounded-full bg-zinc-50 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Generate Model
                        </button>
<button className="h-12 px-6 rounded-full border border-zinc-700 bg-transparent text-sm font-medium hover:bg-zinc-900 transition-colors flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            View Simulation
                        </button>
</div>
<div className="flex items-center gap-6 pt-8 border-t border-white/5 w-full max-w-md mt-4">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tighter text-zinc-100">8.4M+</span>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Permutations</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tighter text-zinc-100">0.01μ</span>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Precision</span>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center order-1 lg:order-2">

<div className="absolute inset-0 border border-white/5 rounded-full rounded-tr-[100px] rounded-bl-[100px] bg-gradient-to-br from-white/[0.02] to-transparent glass-panel -z-10 transform rotate-45 scale-90"></div>
<div className="relative w-4/5 h-4/5 float-anim flex items-center justify-center">

<img alt="3D Generated Watch Render" className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] contrast-125 saturate-50" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{maskImage: 'radial-gradient(circle, black 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'}}/>

<div className="absolute top-10 left-0 flex flex-col gap-1 text-[10px] font-mono text-zinc-500 tracking-wider">
<span>MAT: TI-6AL-4V</span>
<span>CAL: A-890.3</span>
<span>RENDER: RT_ON</span>
</div>
<div className="absolute bottom-10 right-0 flex items-center gap-2 text-[10px] font-mono text-zinc-500">
<div className="w-8 h-px bg-zinc-700"></div>
<span>AXIS_Z_LOCKED</span>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-32 h-32 border border-dashed border-zinc-500 rounded-full animate-[spin_30s_linear_infinite]"></div>
<div className="absolute w-2 h-2 bg-zinc-50 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="space-y-4 max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100">Parametric Control</h2>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Adjust the algorithmic weights to guide the generation process. Our neural engine interprets your constraints to produce viable, structurally sound timepieces.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 glass-panel rounded-2xl p-6 md:p-8 space-y-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 opacity-20"></div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h3 className="text-sm font-medium tracking-wide text-zinc-100 uppercase">Input Parameters</h3>
<iconify-icon className="text-zinc-500" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="space-y-6">
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium text-zinc-400">
<span>Complexity Density</span>
<span className="font-mono text-zinc-300">0.84</span>
</div>
<div className="relative w-full h-1 bg-zinc-800 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[84%] bg-zinc-300 rounded-full"></div>
<div className="absolute top-1/2 left-[84%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform hover:scale-125"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium text-zinc-400">
<span>Skeletonization</span>
<span className="font-mono text-zinc-300">0.62</span>
</div>
<div className="relative w-full h-1 bg-zinc-800 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[62%] bg-zinc-300 rounded-full"></div>
<div className="absolute top-1/2 left-[62%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform hover:scale-125"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium text-zinc-400">
<span>Case Geometry (Angular)</span>
<span className="font-mono text-zinc-300">0.25</span>
</div>
<div className="relative w-full h-1 bg-zinc-800 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[25%] bg-zinc-300 rounded-full"></div>
<div className="absolute top-1/2 left-[25%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform hover:scale-125"></div>
</div>
</div>
</div>

<div className="space-y-6 pt-6 border-t border-white/5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-400">Tourbillon Inclusion</span>

<div className="w-9 h-5 bg-zinc-300 rounded-full relative cursor-pointer flex items-center px-0.5">
<div className="w-4 h-4 bg-zinc-900 rounded-full transform translate-x-4 transition-transform shadow-sm"></div>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-medium text-zinc-400">Primary Material</span>

<div className="w-full h-10 px-3 rounded-lg border border-white/10 bg-black/20 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors">
<span className="text-sm font-medium text-zinc-200">Forged Carbon</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<button className="w-full h-10 rounded-lg bg-zinc-100 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-white transition-colors mt-4">
                            Run Generation
                        </button>
</div>

<div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="glass-panel rounded-2xl p-4 flex flex-col group cursor-pointer hover:bg-white/[0.03] transition-colors">
<div className="w-full aspect-square rounded-xl bg-zinc-900/50 mb-4 overflow-hidden relative flex items-center justify-center">
<img alt="Watch Iteration" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-zinc-300 border border-white/10">ID: AET-9X2</div>
</div>
<div className="flex justify-between items-end">
<div>
<h4 className="text-sm font-medium text-zinc-200">Iteration Alpha</h4>
<p className="text-xs text-zinc-500 mt-1 font-mono">Score: 98.4%</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
<iconify-icon icon="solar:maximize-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-2xl p-4 flex flex-col group cursor-pointer hover:bg-white/[0.03] transition-colors">
<div className="w-full aspect-square rounded-xl bg-zinc-900/50 mb-4 overflow-hidden relative flex items-center justify-center">
<img alt="Watch Iteration" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-zinc-300 border border-white/10">ID: AET-4F8</div>
</div>
<div className="flex justify-between items-end">
<div>
<h4 className="text-sm font-medium text-zinc-200">Iteration Beta</h4>
<p className="text-xs text-zinc-500 mt-1 font-mono">Score: 92.1%</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-zinc-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
<iconify-icon icon="solar:maximize-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950/50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-100">Neural Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Our AI models are trained on centuries of horological data, understanding not just aesthetics, but mechanical viability and structural integrity.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-100">Voxel to Metal</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Generated 3D meshes are optimized for advanced additive manufacturing. Titanium and ceramic powder fused with micron precision.</p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 shadow-sm">
<iconify-icon className="text-xl" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-100">Absolute Uniqueness</h3>
<p className="text-sm text-zinc-400 leading-relaxed">The cryptographic seed used to generate your watch is burned upon completion. One algorithm, one watch, zero duplicates.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-zinc-950 z-10 relative mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-sm uppercase text-zinc-500">AETHR</span>
<span className="text-xs text-zinc-600 border-l border-zinc-800 pl-2">Generative Horology Lab</span>
</div>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a>
</div>
</div>
</footer>

    </>
  );
}
