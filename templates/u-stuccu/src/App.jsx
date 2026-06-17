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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-white rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<span className="text-black font-bold text-sm tracking-tighter">U</span>
</div>
<span className="text-base font-bold tracking-tight text-white">stucco<span className="text-red-500">.</span></span>
</a>

<div className="hidden lg:flex items-center space-x-1">
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#about">About Us</a>
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#products">Products</a>
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#technical">Technical</a>
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="px-3 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex text-xs text-gray-400 hover:text-white items-center gap-1.5 transition-colors" href="tel:+18000000000">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.05 12.05 0 0 0 .57 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                        Support
                    </a>
<a className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-black bg-white hover:bg-gray-200 transition-all rounded shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                        Get Quote
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 grid-bg h-full w-full"></div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-medium mb-6 backdrop-blur-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        Sustainable Material Technology
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] text-glow">
                        The Future of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Exterior Design.</span>
</h1>
<p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-light">
                        U-Stucco™ is an innovative, high-performance plaster made from recycled glass. It offers superior thermal insulation, fire resistance, and durability in a single lightweight coat.
                    </p>
<div className="flex flex-wrap gap-4 w-full">
<a className="h-11 px-8 rounded bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" href="#products">
                            View Products
                            <svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
<a className="h-11 px-8 rounded bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm" href="#technical">
                            Specifications
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5 w-full flex gap-8">
<div>
<p className="text-2xl font-bold text-white tracking-tight">R-2.2</p>
<p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">Thermal Value</p>
</div>
<div>
<p className="text-2xl font-bold text-white tracking-tight">Class A</p>
<p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">Fire Rating</p>
</div>
<div>
<p className="text-2xl font-bold text-white tracking-tight">35<span className="text-sm font-normal text-gray-400">lbs</span></p>
<p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1">Density / ft³</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl border border-white/10 overflow-hidden bg-white/5 shadow-2xl shadow-black/50 aspect-square lg:aspect-[4/3]">

<div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10"></div>
<img alt="Stucco Finish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg max-w-xs">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="iconify iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-9m0-9.45a2.5 2.5 0 0 1 2.45-2.45c1.66 0 2.65 1.5 1.85 2.8L12 13L7.7 3.9c-.8-1.3.2-2.8 1.85-2.8A2.5 2.5 0 0 1 12 3.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<div>
<h3 className="text-sm font-medium text-white">Eco-Friendly Composition</h3>
<p className="text-xs text-gray-400 mt-1">Contains recycled glass beads and natural minerals. No sand.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Redefining Plaster Technology</h2>
<p className="text-gray-400 leading-relaxed mb-10">
                U-Stucco is not just another building material; it is a technological leap in exterior finishing. By replacing traditional sand with <span className="text-white">recycled porous glass beads</span>, we have created a material that is 60% lighter than traditional stucco while providing industry-leading insulation and fire protection.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="p-4 rounded border border-white/5 bg-white/[0.02]">
<span className="block text-2xl font-semibold text-white mb-1">40%</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Energy Savings</span>
</div>
<div className="p-4 rounded border border-white/5 bg-white/[0.02]">
<span className="block text-2xl font-semibold text-white mb-1">100%</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Recyclable</span>
</div>
<div className="p-4 rounded border border-white/5 bg-white/[0.02]">
<span className="block text-2xl font-semibold text-white mb-1">2000°F</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Heat Resist</span>
</div>
<div className="p-4 rounded border border-white/5 bg-white/[0.02]">
<span className="block text-2xl font-semibold text-white mb-1">35dB</span>
<span className="text-xs text-gray-500 uppercase tracking-widest">Sound Proof</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-red-500 text-xs font-bold tracking-widest uppercase mb-2 block">Advantages</span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Why Choose U-Stucco?</h2>
<p className="text-gray-400 max-w-2xl text-sm">Six core advantages that make it the superior choice for modern construction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-red-500 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3l-1.47-3.22a1 1 0 0 0-1.85 0L5.23 9c-.5 1-.98 1.61-.98 3a2.5 2.5 0 0 0 5 2.5m5 0a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3l-1.47-3.22a1 1 0 0 0-1.85 0L15.23 9c-.5 1-.98 1.61-.98 3a2.5 2.5 0 0 0 5 2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Fire Resistant</h3>
<p className="text-gray-400 text-xs leading-relaxed">Rated Class-A non-combustible. Provides a critical fire barrier for residential and commercial structures, withstanding extreme temperatures.</p>
</div>

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m0 4a4 4 0 0 0-1.645 7.647M2 12h2m16 2.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0zM4.93 4.93l1.41 1.41m0 11.32l-1.41 1.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Thermal Insulation</h3>
<p className="text-gray-400 text-xs leading-relaxed">High R-Value performance minimizes thermal bridging, keeping interiors cooler in summer and warmer in winter, reducing energy costs.</p>
</div>

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Water Repellent</h3>
<p className="text-gray-400 text-xs leading-relaxed">Hydrophobic properties prevent bulk water penetration while remaining vapor permeable, allowing the building to breathe and preventing mold.</p>
</div>

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Ultra Lightweight</h3>
<p className="text-gray-400 text-xs leading-relaxed">At 35 lbs/ft³, U-Stucco is significantly lighter than traditional cement stucco (145 lbs/ft³), reducing structural dead load and application fatigue.</p>
</div>

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-green-400 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Eco-Friendly</h3>
<p className="text-gray-400 text-xs leading-relaxed">Contributes to LEED points. Made from recycled glass and natural minerals. Free from chemicals and VOCs.</p>
</div>

<div className="card-gradient border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:text-white transition-colors">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-3M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4M12 3v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">Sound Absorption</h3>
<p className="text-gray-400 text-xs leading-relaxed">The porous cellular structure of the recycled glass beads provides effective acoustic insulation, reducing noise pollution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Product Line</h2>
<p className="text-gray-400 max-w-2xl mx-auto text-sm">Engineered for versatility. Suitable for Brick, CMU, Concrete, and Cement Board.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative group rounded-xl bg-[#0a0a0a] border border-white/10 p-1">
<div className="h-64 bg-white/5 rounded-t-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="w-32 h-40 bg-gray-200 rounded-sm shadow-xl flex items-center justify-center relative z-10">
<div className="text-center">
<span className="block text-black font-bold text-xs">U-STUCCO</span>
<span className="block text-red-600 font-bold text-[10px] mt-1">BASE COAT</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2">U-Stucco Base Coat</h3>
<p className="text-gray-400 text-sm mb-6 h-10">The foundation layer providing the primary thermal and fire protection properties.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-xs text-gray-500">Coverage: ~25 sq.ft / bag</span>
<button className="text-xs font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1">
                                Spec Sheet <svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative group rounded-xl bg-[#0a0a0a] border border-white/10 p-1">
<div className="h-64 bg-white/5 rounded-t-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="w-32 h-40 bg-white rounded-sm shadow-xl flex items-center justify-center relative z-10">
<div className="text-center">
<span className="block text-black font-bold text-xs">U-STUCCO</span>
<span className="block text-gray-400 font-bold text-[10px] mt-1">FINISH COAT</span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2">U-Stucco Finish Coat</h3>
<p className="text-gray-400 text-sm mb-6 h-10">A durable, aesthetic finishing layer available in various textures and colors.</p>
<div className="flex items-center justify-between border-t border-white/5 pt-4">
<span className="text-xs text-gray-500">Texture: Fine / Medium / Coarse</span>
<button className="text-xs font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1">
                                Color Chart <svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="technical">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Technical Data</h2>
<p className="text-gray-400 text-sm">Validated according to ASTM International Standards.</p>
</div>
<div className="flex gap-3 mt-4 md:mt-0">
<button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        Download TDS
                    </button>
<button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors">
<svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        Download SDS
                    </button>
</div>
</div>
<div className="border border-white/10 rounded-lg overflow-hidden">
<table className="w-full text-sm text-left">
<thead className="bg-white/5 text-xs uppercase font-medium text-gray-500 border-b border-white/10">
<tr>
<th className="px-6 py-4 tracking-wider">Test Property</th>
<th className="px-6 py-4 tracking-wider">Test Method</th>
<th className="px-6 py-4 tracking-wider text-right">Result</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 bg-[#050505]">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Fire Resistance</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM E-84</td>
<td className="px-6 py-4 text-right text-white font-mono">Class A (Non-Combustible)</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Thermal Resistance (R-Value)</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM C-518</td>
<td className="px-6 py-4 text-right text-white font-mono">2.2 per inch</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Compressive Strength</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM C-109</td>
<td className="px-6 py-4 text-right text-white font-mono">1400 PSI</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Water Absorption</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM C-413</td>
<td className="px-6 py-4 text-right text-white font-mono">&lt; 1%</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Mold &amp; Mildew Resistance</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM D-3273</td>
<td className="px-6 py-4 text-right text-white font-mono">Rating 10 (No Growth)</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-gray-200">Freeze / Thaw</td>
<td className="px-6 py-4 text-gray-500 font-mono text-xs">ASTM C-67</td>
<td className="px-6 py-4 text-right text-white font-mono">Pass (50 Cycles)</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-10">Application Gallery</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-lg border border-white/10">
<img alt="Modern Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-medium text-sm">Private Residence</p>
<p className="text-gray-400 text-xs">Exterior Insulation Finish System</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-lg border border-white/10">
<img alt="Texture Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-medium text-sm">Texture Detail</p>
<p className="text-gray-400 text-xs">Fine Finish Coat</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-lg border border-white/10">
<img alt="Commercial Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-medium text-sm">Commercial High-Rise</p>
<p className="text-gray-400 text-xs">Fireproofing Application</p>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-lg border border-white/10">
<img alt="Restoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<p className="text-white font-medium text-sm">Historical Restoration</p>
<p className="text-gray-400 text-xs">Lightweight Replacement</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-gradient-to-b from-[#050505] to-black" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<div className="w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center mb-8 text-white">
<svg className="iconify iconify--lucide" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 15c.7 1.2 1.2 1.9 1.2 2.7c0 1.9-2.3 3.3-4.5 3.3c-7.9 0-14.8-7.8-14.8-15.6c0-2.3 1.5-4.5 3.3-4.5c.8 0 1.5.5 2.7 1.2c.4.2.6.7.5 1.1L8.5 7c-.2.7-.8 1.1-1.5 1.2c-.6.1-1.2-.1-1.6-.4c-1.3-1-1.3-1-2.4 2.4c2.8 3.5 3.5 3.5 4.6 2.4c.3-.3.9-.6 1.3-.4l4.2 1.1c.5.1 1 .5 1.2 1.1l.4 3.7c.1.5-.4 1-.9 1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Contact U-Stucco</h2>
<p className="text-gray-400 mb-8 text-sm max-w-sm">For distribution inquiries, technical support, or project estimates, please reach out to our team.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-gray-400">
<span className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle></svg></span>
                            Global Headquarters, USA
                        </div>
<div className="flex items-center gap-3 text-sm text-gray-400">
<span className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center"><svg className="iconify iconify--lucide" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline fill="none" points="22,6 12,13 2,6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg></span>
                            info@ustucco.com
                        </div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs text-gray-500 mb-1 block">First Name</label>
<input className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" type="text"/>
</div>
<div>
<label className="text-xs text-gray-500 mb-1 block">Last Name</label>
<input className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-gray-500 mb-1 block">Email Address</label>
<input className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" type="email"/>
</div>
<div>
<label className="text-xs text-gray-500 mb-1 block">Message</label>
<textarea className="w-full bg-black border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" rows="4"></textarea>
</div>
<button className="w-full py-2.5 bg-white text-black font-semibold text-sm rounded hover:bg-gray-200 transition-colors">Send Inquiry</button>
</form>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<span className="text-white font-bold text-sm tracking-tight">U-Stucco</span>
<p className="text-gray-500 text-xs mt-2 max-w-xs">Pioneering sustainable construction with recycled glass technology. The lightest, safest, and most efficient stucco on the market.</p>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-white text-xs font-semibold mb-3">Company</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#careers">Careers</a></li>
<li><a className="hover:text-white" href="#news">News</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-3">Product</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white" href="#specs">Specifications</a></li>
<li><a className="hover:text-white" href="#docs">Documentation</a></li>
<li><a className="hover:text-white" href="#distributors">Distributors</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold mb-3">Legal</h4>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center text-[10px] text-gray-600 pb-8">
                © 2024 U-Stucco. All rights reserved.
            </div>
</div>
</section>

    </>
  );
}
