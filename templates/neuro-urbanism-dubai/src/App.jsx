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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-medium tracking-tighter text-white group-hover:text-zinc-200 transition-colors">NEURO<span className="text-zinc-500">/</span>URBAN</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#research">Research</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<button className="bg-zinc-100 hover:bg-zinc-200 text-black text-xs font-medium px-3 py-1.5 rounded-full transition-all">
                    Early Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">

<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen"></div>
<div className="absolute bottom-[20%] right-[10%] w-[40rem] h-[40rem] bg-violet-500/10 rounded-full blur-3xl mix-blend-screen"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-indigo-200/80">The Future of Civic Design</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1] fade-in-up delay-100">
                Cities designed for<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">cognitive resonance.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                We bridge neuroscience and architecture to reduce cognitive load, improve mental health, and foster flow states in urban environments.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Analyzing
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors backdrop-blur-sm">
                    Read the Manifesto
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto fade-in-up delay-300">
<div className="glass-panel rounded-xl p-1 relative overflow-hidden shadow-2xl shadow-indigo-500/5">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto text-[10px] text-zinc-500 font-mono">analysis_v2.0.json</div>
</div>

<div className="bg-[#050507] aspect-[16/9] relative rounded-b-lg overflow-hidden group">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-64 border border-indigo-500/20 rounded-full flex items-center justify-center animate-pulse">
<div className="absolute w-48 h-48 border border-indigo-500/30 rounded-full"></div>
<div className="absolute w-32 h-32 border border-indigo-500/40 rounded-full"></div>
<div className="w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(129,140,248,1)]"></div>
</div>
</div>

<div className="absolute top-8 left-8 space-y-4">
<div className="flex items-center gap-3 text-xs text-zinc-400">
<iconify-icon className="text-indigo-400" icon="solar:soundwave-square-linear"></iconify-icon>
<span>Noise Pollution</span>
<span className="text-white font-mono ml-auto">12db</span>
</div>
<div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[20%] h-full bg-indigo-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-400 mt-2">
<iconify-icon className="text-emerald-400" icon="solar:leaf-linear"></iconify-icon>
<span>Biophilic Density</span>
<span className="text-white font-mono ml-auto">84%</span>
</div>
<div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-[84%] h-full bg-emerald-500 rounded-full"></div>
</div>
</div>

<div className="absolute bottom-8 right-8 glass-panel px-4 py-2 rounded-lg flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-white font-medium">Neuro-Optimal Zone</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Research backed by</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-sm font-semibold text-zinc-300">M.I.T. Media Lab</span>
<span className="text-sm font-semibold text-zinc-300">Stanford Neuroscience</span>
<span className="text-sm font-semibold text-zinc-300">Foster + Partners</span>
<span className="text-sm font-semibold text-zinc-300">Urban Land Institute</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="solutions">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Architecture for the subconscious.</h2>
<p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
                    Our platform analyzes urban environments against 140+ biomarkers to predict human emotional response and cognitive load.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 glass-panel p-8 rounded-2xl relative group overflow-hidden hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-indigo-500 rotate-12" icon="solar:brain-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cognitive Load Modeling</h3>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                            Simulate how pedestrians process visual information complexity. Identify stress hotspots in architectural blueprints before construction begins.
                        </p>
</div>
</div>

<div className="md:row-span-2 glass-panel p-8 rounded-2xl relative group overflow-hidden hover:border-zinc-700 transition-colors flex flex-col justify-end">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-emerald-400">
<iconify-icon icon="solar:city-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Biophilic Integration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Optimize green space distribution based on cortisol recovery rates and attention restoration theory.
                        </p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-violet-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Social Friction</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Analyze spatial configurations that encourage or inhibit spontaneous social interaction.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl relative group overflow-hidden hover:border-zinc-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-orange-400">
<iconify-icon icon="solar:streets-map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Wayfinding Flux</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Reduce navigational anxiety through intuitive spatial cues and visual hierarchy analysis.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#040406]">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Visualizing the intangible.</h2>
<p className="text-zinc-400 text-sm">Real-time overlay of neuro-architectural parameters on existing infrastructure.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
<span>View Case Studies</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/5 bg-zinc-900">
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] text-zinc-300 font-mono">
                                ID: 84-B
                            </div>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div>
<div className="mb-4 space-y-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex items-center justify-between text-xs text-zinc-300">
<span>Symmetry Index</span>
<span className="text-white">98%</span>
</div>
<div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-emerald-500"></div>
</div>
</div>
<h3 className="text-lg font-medium text-white">Structural Harmony</h3>
<p className="text-xs text-zinc-400 mt-1">Reduction in visual noise.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/5 bg-zinc-900 lg:mt-12">
<img alt="Urban City" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 opacity-50" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=2144&amp;auto=format&amp;fit=crop"/>
<div className="scan-line"></div>
<div className="absolute inset-0 image-overlay"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-end">
<iconify-icon className="text-indigo-400" icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="flex items-start gap-3">
<div className="p-2 bg-indigo-500/20 rounded text-indigo-400">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">High Cognitive Load</h4>
<p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">Density exceeds optimal processing limits by 24%. Recommended intervention: Vertical green breaks.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/5 bg-zinc-900">
<img alt="Abstract Concrete" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://images.unsplash.com/photo-1518005068251-37900150dfca?q=80&amp;w=1933&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay"></div>

<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded text-[10px] text-zinc-300 font-mono">
                                FLOW STATE
                            </div>
</div>
<div>
<div className="flex gap-2 mb-3">
<span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300">Calm</span>
<span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-300">Open</span>
</div>
<h3 className="text-lg font-medium text-white">Fluid Navigation</h3>
<p className="text-xs text-zinc-400 mt-1">Spatial cues guide subconscious movement.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950/50">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="flex-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Quantifiable calm.</h2>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between mb-2">
<span className="text-sm text-zinc-300 font-medium">Attention Span Recovery</span>
<span className="text-sm text-zinc-500 font-mono group-hover:text-indigo-400 transition-colors">+42%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[70%] group-hover:bg-indigo-500 transition-colors duration-500"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between mb-2">
<span className="text-sm text-zinc-300 font-medium">Cortisol Reduction</span>
<span className="text-sm text-zinc-500 font-mono group-hover:text-emerald-400 transition-colors">-28%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[55%] group-hover:bg-emerald-500 transition-colors duration-500"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between mb-2">
<span className="text-sm text-zinc-300 font-medium">Community Trust Index</span>
<span className="text-sm text-zinc-500 font-mono group-hover:text-violet-400 transition-colors">8.4/10</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[84%] group-hover:bg-violet-500 transition-colors duration-500"></div>
</div>
</div>
</div>
<div className="mt-10 flex gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-[10px] text-white">JP</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-8 h-8 rounded-full bg-zinc-500 border border-black flex items-center justify-center text-[10px] text-white">MR</div>
</div>
<p className="text-xs text-zinc-500 self-center">Used by 4,000+ urban planners</p>
</div>
</div>

<div className="flex-1 w-full max-w-sm">
<div className="glass-panel p-6 rounded-xl border border-zinc-800">
<div className="flex items-center justify-between mb-6">
<div className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Parameter Control</div>
<iconify-icon className="text-zinc-500" icon="solar:settings-linear"></iconify-icon>
</div>

<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-3">
<span className="text-white">Visual Complexity</span>
<span className="text-zinc-500">High</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400" max="100" min="0" type="range" value="75"/>
</div>
<div>
<div className="flex justify-between text-xs mb-3">
<span className="text-white">Traffic Noise Filter</span>
<span className="text-zinc-500">Active</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 border border-zinc-800">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:soundwave-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300">Suppression</span>
</div>

<div className="w-8 h-4 bg-indigo-500/20 rounded-full relative cursor-pointer border border-indigo-500/50">
<div className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-sm"></div>
</div>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50">
<button className="w-full py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-zinc-200 transition-colors">
                                Apply Simulation
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/5 pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Build for the human experience.</h2>
<p className="text-zinc-400 text-lg mb-8">Join the collective of architects, neuroscientists, and developers reshaping our cities.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="flex-1 bg-zinc-900/50 border border-zinc-800 text-white text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 placeholder-zinc-600 transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]" type="submit">
                    Get Access
                </button>
</form>
<p className="mt-4 text-[10px] text-zinc-600">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030305] py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
<span className="text-xs font-medium text-zinc-300 tracking-tight">NEURO URBANISM</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Methodology</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Case Studies</a>
<a className="hover:text-zinc-300 transition-colors" href="#">API</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-[10px] text-zinc-600">© 2026 Neuro Urbanism Labs Inc.</p>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
<span className="text-[10px] text-zinc-600">All systems normal</span>
</div>
</div>
</footer>

    </>
  );
}
