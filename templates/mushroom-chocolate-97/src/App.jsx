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
      

<input className="hidden" id="cart-toggle" type="checkbox"/>

<nav className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter z-50 relative group" href="#">
                POLKADOT<span className="text-purple-600">.</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors group relative" href="#shop">
                    Shop
                    <div className="absolute top-full left-0 mt-4 w-48 bg-white rounded-xl shadow-xl border border-zinc-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
<div className="flex items-center space-x-2 p-2 hover:bg-zinc-50 rounded-lg cursor-pointer">
<iconify-icon className="text-purple-500" icon="solar:donut-bitten-linear"></iconify-icon>
<span className="text-xs font-medium">Chocolates</span>
</div>
<div className="flex items-center space-x-2 p-2 hover:bg-zinc-50 rounded-lg cursor-pointer">
<iconify-icon className="text-blue-500" icon="solar:smile-circle-linear"></iconify-icon>
<span className="text-xs font-medium">Gummies</span>
</div>
</div>
</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center space-x-4">
<button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<label className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer relative" htmlFor="cart-toggle">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-600 rounded-full"></span>
</label>
</div>
</div>
</nav>

<label className="overlay fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300" htmlFor="cart-toggle"></label>
<div className="cart-drawer fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-out border-l border-zinc-100 flex flex-col">
<div className="p-6 border-b border-zinc-100 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Your Cart</h2>
<label className="p-2 hover:bg-zinc-100 rounded-full cursor-pointer transition-colors" htmlFor="cart-toggle">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</label>
</div>
<div className="flex-1 p-6 flex flex-col items-center justify-center text-zinc-400">
<iconify-icon className="mb-4 opacity-50" icon="solar:cart-large-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p className="text-sm">Your cart is currently empty.</p>
</div>
<div className="p-6 border-t border-zinc-100 bg-zinc-50">
<button className="w-full bg-zinc-900 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center space-x-2">
<span>Continue Shopping</span>
</button>
</div>
</div>

<main className="pt-20">

<section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="z-10 animate-fade-up">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-zinc-200 rounded-full mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Restocked: Original Polkadot Bar</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-zinc-900">
                        Unlock Your <br/>
<span className="text-gradient">Potential.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-md leading-relaxed">
                        The ultimate fusion of premium Belgian chocolate and functional mushrooms. Experience focus, energy, and clarity in every snap.
                    </p>
<div className="flex items-center space-x-4">
<a className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/20" href="#shop">
                            Shop Collection
                        </a>
<button className="flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-medium text-zinc-600 hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Watch The Process</span>
</button>
</div>

<div className="mt-12 flex items-center space-x-6 border-t border-zinc-200 pt-8">
<div className="flex items-center space-x-2 text-zinc-500">
<iconify-icon className="text-green-600" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-medium">Organic</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500">
<iconify-icon className="text-blue-600" icon="solar:test-tube-linear"></iconify-icon>
<span className="text-xs font-medium">Lab Tested</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500">
<iconify-icon className="text-purple-600" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium">USA Grown</span>
</div>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center animate-fade-up delay-200">
<div className="relative w-72 h-[420px] rounded-3xl animate-levitate shadow-2xl z-20" style={{background: 'linear-gradient(135deg, #FF6B6B, #556270)'}}>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2.5px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-3xl pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-auto bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center">
<p className="text-[10px] tracking-widest uppercase text-zinc-400 mb-2">Belgian Chocolate</p>
<h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-1">POLKADOT</h3>
<p className="text-xs text-purple-600 font-medium">Penny Cup</p>
<div className="mt-4 flex justify-center space-x-1">
<div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-[10px]">4g</div>
</div>
</div>
</div>

<div className="absolute top-20 right-10 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-levitate delay-300 z-30">
<iconify-icon className="text-yellow-500 text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="absolute bottom-32 left-0 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-levitate delay-100 z-30">
<iconify-icon className="text-purple-500 text-2xl" icon="solar:brain-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="sticky top-20 z-30 py-4 overflow-x-auto no-scrollbar bg-gradient-to-b from-slate-50 to-slate-50/0">
<div className="max-w-7xl mx-auto px-6">
<div className="flex space-x-3">
<button className="px-5 py-2 rounded-full bg-zinc-900 text-white text-xs font-medium whitespace-nowrap shadow-md">All Products</button>
<button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap hover:border-zinc-300 transition-colors shadow-sm">Chocolate Bars</button>
<button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap hover:border-zinc-300 transition-colors shadow-sm">Gummies</button>
<button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap hover:border-zinc-300 transition-colors shadow-sm">Vegan Options</button>
<button className="px-5 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium whitespace-nowrap hover:border-zinc-300 transition-colors shadow-sm">Best Sellers</button>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="shop">
<div className="flex flex-col md:flex-row gap-12">

<div className="w-full md:w-64 flex-shrink-0 space-y-8 animate-fade-up">
<div>
<h3 className="text-sm font-semibold mb-4 tracking-tight">Filter by Effect</h3>
<div className="space-y-3">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center text-white transition-colors"><iconify-icon className="hidden text-xs" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Focus &amp; Creativity</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center text-white transition-colors"><iconify-icon className="hidden text-xs" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Energy Boost</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded flex items-center justify-center text-white transition-colors"><iconify-icon className="hidden text-xs" icon="solar:check-read-linear"></iconify-icon></div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Deep Sleep</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-semibold mb-4 tracking-tight">Potency</h3>
<div className="relative pt-2">
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900" max="10" min="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-zinc-400 mt-2">
<span>Mild</span>
<span>Heroic</span>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative animate-fade-up delay-100">
<div className="bg-white rounded-2xl p-4 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
<div className="relative aspect-[4/5] w-full bg-gradient-to-br from-purple-100 to-blue-50 rounded-xl overflow-hidden mb-4 box-3d flex items-center justify-center">

<div className="w-24 h-40 bg-purple-600 rounded-lg shadow-lg relative flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjN2MzYWVkIj48L3JlY3Q+CjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIxIiBmaWxsPSIjNmQyOGQ5Ij48L2NpcmNsZT4KPC9zdmc+')] opacity-20"></div>
<span className="text-white font-bold text-xs tracking-widest rotate-90">POLKADOT</span>
</div>
<button className="absolute bottom-4 right-4 bg-white text-zinc-900 w-8 h-8 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-zinc-900 tracking-tight">Acai Berry Blast</h3>
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">$24.00</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Focus • Antioxidants</p>
<div className="flex items-center text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="ml-1 text-zinc-400">(124)</span>
</div>
</div>
</div>
</div>

<div className="group relative animate-fade-up delay-200">
<div className="bg-white rounded-2xl p-4 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 h-full flex flex-col">
<div className="relative aspect-[4/5] w-full bg-gradient-to-br from-red-100 to-orange-50 rounded-xl overflow-hidden mb-4 box-3d flex items-center justify-center">
<div className="w-24 h-40 bg-red-500 rounded-lg shadow-lg relative flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZWY0NDQ0Ij48L3JlY3Q+CjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIxIiBmaWxsPSIjZGMyNjI2Ij48L2NpcmNsZT4KPC9zdmc+')] opacity-20"></div>
<span className="text-white font-bold text-xs tracking-widest rotate-90">POLKADOT</span>
</div>
<button className="absolute bottom-4 right-4 bg-white text-zinc-900 w-8 h-8 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-zinc-900 tracking-tight">Maui Mango</h3>
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">$24.00</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Energy • Mood</p>
<div className="flex items-center text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="ml-1 text-zinc-400">(89)</span>
</div>
</div>
</div>
</div>

<div className="group relative animate-fade-up delay-300">
<div className="bg-white rounded-2xl p-4 border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 h-full flex flex-col">
<div className="relative aspect-[4/5] w-full bg-gradient-to-br from-green-100 to-teal-50 rounded-xl overflow-hidden mb-4 box-3d flex items-center justify-center">
<div className="w-24 h-40 bg-teal-600 rounded-lg shadow-lg relative flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGRQNDg4Ij48L3JlY3Q+CjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIxIiBmaWxsPSIjMDQ3ODU3Ij48L2NpcmNsZT4KPC9zdmc+')] opacity-20"></div>
<span className="text-white font-bold text-xs tracking-widest rotate-90">POLKADOT</span>
</div>
<button className="absolute bottom-4 right-4 bg-white text-zinc-900 w-8 h-8 rounded-full flex items-center justify-center shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-zinc-900 tracking-tight">Matcha Green Tea</h3>
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">$26.00</span>
</div>
<p className="text-xs text-zinc-500 mb-2">Calm • Clarity</p>
<div className="flex items-center text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="ml-1 text-zinc-400">(56)</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center">
<button className="text-sm font-medium border-b border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors">View All Products</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Connecting the <span className="text-purple-600">Dots</span></h2>
<p className="text-zinc-500 max-w-2xl mx-auto">We are on a mission to combine indulgence with mental clarity, sourcing the finest ingredients to help you expand your mind.</p>
</div>
<div className="relative border-l border-zinc-200 ml-6 md:ml-12 space-y-12">

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-600 ring-4 ring-white"></span>
<h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
<p className="text-zinc-500 leading-relaxed text-sm">We partner directly with organic cacao farmers in Belgium and medicinal mushroom growers in the US. No shortcuts, just pure ingredients.</p>
</div>

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
<h3 className="text-xl font-semibold mb-2">Artisan Crafting</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Our chocolatiers precisely dose each bar to ensure consistency. The "snap" of our chocolate is a testament to the tempering process.</p>
</div>

<div className="relative pl-8 md:pl-12 group">
<span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 ring-4 ring-white"></span>
<h3 className="text-xl font-semibold mb-2">Mind Expansion</h3>
<p className="text-zinc-500 leading-relaxed text-sm">More than a sweet treat, Polkadot is a tool for creativity, holistic wellness, and breaking through mental barriers.</p>
</div>
</div>
</div>
</section>

<section className="py-12 overflow-hidden bg-zinc-50 border-y border-zinc-100">
<div className="flex space-x-8 animate-marquee whitespace-nowrap">

<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 min-w-[300px]">
<div className="flex text-yellow-400 mb-2"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-zinc-600 mb-2">"The focus I get from these is unreal."</p>
<p className="text-xs font-semibold text-zinc-900">- Sarah J. <iconify-icon className="inline text-blue-500" icon="solar:verified-check-bold"></iconify-icon></p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 min-w-[300px]">
<div className="flex text-yellow-400 mb-2"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-zinc-600 mb-2">"Best tasting mushroom chocolate hands down."</p>
<p className="text-xs font-semibold text-zinc-900">- Mike T. <iconify-icon className="inline text-blue-500" icon="solar:verified-check-bold"></iconify-icon></p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 min-w-[300px]">
<div className="flex text-yellow-400 mb-2"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-zinc-600 mb-2">"Packaging is premium, effects are smooth."</p>
<p className="text-xs font-semibold text-zinc-900">- Alex R. <iconify-icon className="inline text-blue-500" icon="solar:verified-check-bold"></iconify-icon></p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 min-w-[300px]">
<div className="flex text-yellow-400 mb-2"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-zinc-600 mb-2">"Shipping was super fast. Highly recommend."</p>
<p className="text-xs font-semibold text-zinc-900">- Jessica K. <iconify-icon className="inline text-blue-500" icon="solar:verified-check-bold"></iconify-icon></p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Get in Touch</h2>
<p className="text-zinc-500 mb-8 text-sm">Questions about dosage or wholesale? Drop us a line.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-zinc-700 block mb-1">Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-zinc-700 block mb-1">Email</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="email"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-zinc-700 block mb-1">Subject</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-zinc-700 block mb-1">Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" rows="4"></textarea>
</div>
<button className="bg-zinc-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all w-full md:w-auto">Send Message</button>
</form>

<div className="mt-12 space-y-4">
<details className="group bg-zinc-50 rounded-xl p-4 cursor-pointer">
<summary className="flex justify-between items-center text-sm font-medium list-none">
                                How long does shipping take?
                                <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">Orders typically ship within 24 hours. Delivery takes 3-5 business days within the US.</p>
</details>
<details className="group bg-zinc-50 rounded-xl p-4 cursor-pointer">
<summary className="flex justify-between items-center text-sm font-medium list-none">
                                What is the recommended dosage?
                                <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">Start with 1-2 squares (Microdose). Wait 45 minutes before consuming more. Listen to your body.</p>
</details>
</div>
</div>

<div className="relative bg-zinc-900 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="text-center z-10 p-8">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
<iconify-icon className="text-white text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg">Oakland, California</h3>
<p className="text-zinc-400 text-sm mt-2">HQ &amp; Distribution Center</p>
<p className="text-zinc-500 text-xs mt-1">support@officialpolkadot.com</p>
</div>
</div>
</div>
</section>

<section className="py-16 max-w-3xl mx-auto px-6 border-t border-zinc-100">
<h2 className="text-xl font-semibold mb-6">Refund Policy</h2>
<div className="space-y-6 text-sm text-zinc-600">
<div>
<h4 className="font-medium text-zinc-900 mb-1">Returns Eligibility</h4>
<p>We accept returns within 30 days of purchase for unopened, sealed products. Due to the perishable nature of chocolate, we cannot accept returns on opened items unless damaged.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-1">Damaged Items</h4>
<p>If your order arrives melted or damaged, please photograph the condition immediately and email support@officialpolkadot.com within 48 hours of delivery.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-1">Refund Process</h4>
<p>Once your return is inspected, a refund will be processed to your original payment method within 5-7 business days.</p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-bold tracking-tighter" href="#">POLKADOT<span className="text-purple-600">.</span></a>
<p className="text-xs text-zinc-500 mt-4 leading-relaxed">The original Belgian mushroom chocolate. Elevate your mind, body, and spirit.</p>
</div>
<div>
<h4 className="font-semibold text-sm mb-4">Shop</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">All Products</a></li>
<li><a className="hover:text-zinc-900" href="#">Bundles</a></li>
<li><a className="hover:text-zinc-900" href="#">Merch</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#about">Our Story</a></li>
<li><a className="hover:text-zinc-900" href="#contact">Wholesale</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4">Join the Inner Circle</h4>
<form className="flex gap-2">
<input className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-zinc-900" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-zinc-800">Join</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-50">
<p className="text-[10px] text-zinc-400">© 2023 Official Polkadot Mushroom Shop. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0 text-zinc-400">
<iconify-icon className="hover:text-zinc-900 cursor-pointer" icon="solar:instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-zinc-900 cursor-pointer" icon="solar:twitter-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 group">
<div className="absolute bottom-14 right-0 w-64 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-bottom-right transform translate-y-2 group-hover:translate-y-0">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold mb-1">Polkadot AI Sommelier</p>
<p className="text-[10px] text-zinc-500 leading-relaxed">Hi there! Tell me your mood, and I'll suggest the perfect chocolate flavor for you.</p>
</div>
</div>
</div>
<button className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

    </>
  );
}
