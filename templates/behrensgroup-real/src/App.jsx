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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
<div className="flex flex-col">
<a className="font-display text-xl tracking-tighter font-semibold" href="#">BEHRENS GROUP</a>
<span className="text-[10px] uppercase tracking-widest text-stone-400">Compass Real Estate</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
<a className="hover:opacity-50 transition-opacity" href="#listings">Listings</a>
<a className="hover:opacity-50 transition-opacity" href="#communities">Communities</a>
<a className="hover:opacity-50 transition-opacity" href="#contact">Contact</a>
</div>
<button className="flex items-center gap-2 group">
<span className="text-xs uppercase tracking-widest group-hover:opacity-50 transition-opacity">Menu</span>
<div className="space-y-1">
<span className="block w-4 h-[1px] bg-white group-hover:w-6 transition-all duration-300"></span>
<span className="block w-4 h-[1px] bg-white group-hover:w-2 transition-all duration-300 ml-auto"></span>
</div>
</button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 border-b border-white/5 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-900/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-screen-2xl w-full mx-auto relative z-10 h-full flex flex-col justify-center">
<div className="space-y-8">
<div className="flex items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-[0.3em] animate-pulse">
<span className="w-2 h-2 rounded-full bg-white"></span>
                    Spring, Texas
                </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-stone-100 leading-[0.9] tracking-tight">
                    Elevating <br/>
<span className="text-stone-700">Lifestyle</span>, Curating <br/>
<span className="italic font-serif text-stone-100">Legacy.</span>
</h1>
</div>
</div>
<div className="max-w-screen-2xl w-full mx-auto flex justify-between items-end relative z-10">
<p className="max-w-xs text-sm text-stone-500 leading-relaxed font-light">
                Jill Behrens. Representing the finest properties in Spring, The Woodlands, and Greater Houston.
            </p>
<div className="animate-bounce text-stone-600">
<i className="w-6 h-6" data-lucide="arrow-down"></i>
</div>
</div>
</header>

<div className="border-b border-white/5 py-4 overflow-hidden bg-[#050505]">
<div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-stone-800 text-sm md:text-base font-display uppercase tracking-widest">
<span>Spring</span> <span>The Woodlands</span> <span>Houston</span> <span>Compass</span> <span>Luxury</span> <span>Estates</span>
<span>Spring</span> <span>The Woodlands</span> <span>Houston</span> <span>Compass</span> <span>Luxury</span> <span>Estates</span>
<span>Spring</span> <span>The Woodlands</span> <span>Houston</span> <span>Compass</span> <span>Luxury</span> <span>Estates</span>
</div>
</div>

<section className="relative border-b border-white/5" id="listings">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 flex flex-col justify-center border-r border-white/5 bg-[#050505] z-10">
<span className="text-xs text-white uppercase tracking-widest mb-6 block">Featured Collection</span>
<h2 className="text-3xl md:text-5xl font-display text-white mb-6 leading-tight">Curated<br/>Residences.</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm">
                    A portfolio of distinction. From gated estates in Carlton Woods to sprawling retreats in Spring, we present homes that define exceptional living.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>RESIDENTIAL</span>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>ESTATES</span>
</div>
<div className="flex items-center gap-4 text-xs text-stone-400 font-mono">
<span className="w-12 h-[1px] bg-stone-700"></span>
<span>LAND</span>
</div>
</div>
</div>

<div className="lg:w-2/3 bg-[#080808]">

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">01. The Reserve</h3>
<span className="text-xs font-mono text-stone-600">Spring / Active</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Luxury Home" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">5 Beds • 6 Baths</p>
<p className="text-stone-300 font-mono text-xs">$2,450,000</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">A masterwork of contemporary design situated on 2 acres of manicured grounds. Featuring a private pool and guest casita.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">02. Carlton Woods</h3>
<span className="text-xs font-mono text-stone-600">The Woodlands / Sold</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Estate" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600596542815-6ad4572c32fd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">Golf Course Frontage</p>
<p className="text-stone-300 font-mono text-xs">Off-Market</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">Mediterranean inspired estate overlooking the Jack Nicklaus Signature Course. Sold represents the highest price per sqft in the enclave.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-white/5 hover:bg-[#0a0a0a] transition-colors duration-500">
<div className="w-full">
<div className="flex justify-between items-baseline mb-6">
<h3 className="text-3xl md:text-5xl font-display text-stone-200 group-hover:text-white transition-colors">03. Benders Landing</h3>
<span className="text-xs font-mono text-stone-600">Spring / Active</span>
</div>
<div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
<img alt="Modern Farmhouse" className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
<div className="flex justify-between items-end">
<p className="text-white text-xs tracking-widest uppercase">New Construction</p>
<p className="text-stone-300 font-mono text-xs">$1,890,000</p>
</div>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-6">
<p className="text-stone-500 text-sm max-w-md">Sprawling single-story modern farmhouse on 1 acre. Features an entertainer's kitchen and outdoor summer kitchen.</p>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-[60vh] w-full overflow-hidden">
<div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
<h2 className="text-4xl md:text-6xl font-display text-white tracking-tight text-center px-4">
                Expertise in <br/> <span className="italic font-serif">Motion.</span>
</h2>
</div>
<img alt="Interior Architecture" className="w-full h-full object-cover fixed-attachment" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<section className="py-24 bg-[#050505] border-b border-white/5" id="interiors">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div>
<span className="text-xs text-stone-500 uppercase tracking-widest mb-2 block">Interior Details</span>
<h2 className="text-3xl md:text-4xl font-display text-white">Refined Spaces</h2>
</div>
<div className="hidden md:flex gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest self-center">Scroll</span>
<i className="w-5 h-5 text-stone-500 animate-pulse" data-lucide="arrow-right"></i>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-6 md:px-12 pb-8 hide-scrollbar">

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Great Room • Spring</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Primary Suite • Woodlands</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Entry • Carlton Woods</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-900">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-10">
<span className="px-3 py-1 bg-black/50 backdrop-blur text-white text-[10px] uppercase tracking-wider border border-white/10">Kitchen • Creekside</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#050505] border-b border-white/5">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div>
<span className="text-xs text-stone-500 uppercase tracking-widest mb-6 block">The Broker</span>
<h3 className="text-3xl font-display text-white leading-tight mb-8">
                    Jill Behrens <span className="text-stone-500">//</span> Compass
                </h3>
</div>
<div className="space-y-8">
<p className="text-stone-400 text-sm leading-7">
                    With deep-rooted connections in Spring and The Woodlands, Jill Behrens brings a strategic, data-driven approach to luxury real estate. As part of Compass, the Behrens Group leverages proprietary technology and a nationwide network to ensure your property reaches the right audience.
                </p>
<p className="text-stone-400 text-sm leading-7">
                    Whether you are acquiring a legacy estate or divesting a high-value asset, our focus remains on discretion, precision, and maximizing value.
                </p>
<div className="flex gap-12 border-t border-white/10 pt-8 mt-8">
<div>
<span className="block text-3xl font-display text-white mb-1">15+</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Years Exp</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">Top 1%</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Production</span>
</div>
<div>
<span className="block text-3xl font-display text-white mb-1">24/7</span>
<span className="text-xs text-stone-600 uppercase tracking-widest">Service</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#050505] overflow-hidden" id="communities">
<div className="px-6 md:px-12 mb-12 flex justify-between items-end">
<div>
<span className="text-xs text-stone-500 uppercase tracking-widest mb-2 block">Areas of Expertise</span>
<h2 className="text-3xl md:text-4xl font-display text-white">Communities</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-stone-400">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-stone-400">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar">

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-white/10 text-white rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Spring, TX</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        A vibrant community known for excellent schools, historic charm, and proximity to major business hubs.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>94 Active Listings</span>
<span className="group-hover:text-white transition-colors">Explore ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-white/10 text-white rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="trees"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">The Woodlands</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        A world-class master planned community integrating nature with luxury retail and corporate HQs.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Master Planned</span>
<span className="group-hover:text-white transition-colors">Explore ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-white/10 text-white rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Benders Landing</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        Large acreage estates offering privacy, custom builds, and low tax rates in a wooded setting.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Acreage Homes</span>
<span className="group-hover:text-white transition-colors">Explore ⤨</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center bg-stone-900/30 border border-white/5 p-8 flex flex-col justify-between group hover:border-white/20 transition-all cursor-pointer">
<div className="mb-12">
<div className="w-10 h-10 bg-white/10 text-white rounded flex items-center justify-center mb-6">
<i className="w-5 h-5" data-lucide="palmtree"></i>
</div>
<h3 className="text-xl font-display text-white mb-3">Carlton Woods</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        The premier gated community featuring a Jack Nicklaus Signature Golf Course and opulent estates.
                    </p>
</div>
<div className="flex justify-between items-center text-xs font-mono text-stone-600 border-t border-white/5 pt-4">
<span>Gated / Guarded</span>
<span className="group-hover:text-white transition-colors">Explore ⤨</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="col-span-1 md:col-span-2 row-span-2 relative bg-stone-900 rounded-lg overflow-hidden group">
<img alt="Meeting" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-3xl font-display text-white mb-2">Behrens Group</h3>
<p className="text-stone-300 text-sm font-light">Navigating the complexities of the Texas real estate market.</p>
</div>
</div>

<div className="bg-stone-900/40 border border-white/5 p-8 rounded-lg flex flex-col justify-center items-center text-center hover:bg-stone-900/60 transition-colors">
<span className="text-4xl md:text-5xl text-white font-light font-display mb-2">100%</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Client Satisfaction</span>
</div>

<div className="bg-stone-900/40 border border-white/5 p-8 rounded-lg flex flex-col justify-center items-center text-center hover:bg-stone-900/60 transition-colors">
<span className="text-4xl md:text-5xl text-white font-light font-display mb-2">Local</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Spring, TX Experts</span>
</div>

<a className="col-span-1 md:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 rounded-lg flex items-center justify-between group cursor-pointer hover:border-white/20 transition-all" href="mailto:jill.behrens@compass.com">
<div>
<span className="text-xs text-stone-500 uppercase tracking-widest mb-2 block">Connect</span>
<h4 className="text-lg text-white font-light">Schedule a private consultation.</h4>
</div>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</section>

<footer className="bg-stone-950 pt-32 pb-12 border-t border-white/10" id="contact">
<div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-6xl md:text-8xl font-display text-stone-100 tracking-tighter mb-8 leading-[0.8]">
                        Work with <br/> <span className="text-stone-700">The Best.</span>
</h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end">
<a className="group flex items-center gap-4 text-2xl md:text-3xl text-white font-light mb-2" href="mailto:jill.behrens@compass.com">
                        jill.behrens@compass.com
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
</a>
<p className="text-stone-500 text-xl font-light mt-2">(281) 797-5293</p>
<p className="text-stone-600 text-sm mt-4">Behrens Group | Compass</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Navigation</span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#listings">Featured Listings</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#communities">Communities</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Connect</span>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">Facebook</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">Brokerage</span>
<span className="text-sm text-stone-300">Compass RE Texas, LLC</span>
<span className="text-sm text-stone-300">Spring, TX</span>
</div>
<div className="flex flex-col gap-4 justify-end">
<span className="text-xs text-stone-600 uppercase tracking-widest">© 2024 Jill Behrens</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
