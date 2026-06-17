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



        // Init icons if necessary, though Iconify handles web components automatically
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
<div className="flex items-center gap-8">
<a className="font-display font-semibold text-lg tracking-tight flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full"></div>
                Store
            </a>
<div className="hidden lg:flex gap-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#categories">Categories</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-white/60 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</button>
<button className="text-white/60 hover:text-white transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
<button className="lg:hidden text-white/60 hover:text-white">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-white/10 bg-grid">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-white/70 uppercase">New Collection 2024</span>
</div>
<h1 className="font-display text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
                    Everyday Products,<br/>Designed Better.
                </h1>
<p className="text-lg text-white/50 font-light leading-relaxed max-w-md mb-8">
                    Discover a curated selection of quality items engineered for modern lifestyles. Minimalism meets function.
                </p>
<div className="flex flex-wrap gap-4">
<a className="group px-8 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-sm hover:bg-white/90 transition-all flex items-center gap-2" href="#shop">
                        Shop Now
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-white/10 transition-all" href="#about">
                        View Lookbook
                    </a>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full rounded-sm overflow-hidden border border-white/10 group">
<img alt="Hero Product" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-sm flex items-center justify-between">
<div>
<p className="text-xs text-white/40 uppercase tracking-widest">Featured</p>
<p className="text-sm font-medium text-white">Mono Lamp Gen 2</p>
</div>
<span className="text-sm font-medium text-white">$129.00</span>
</div>
</div>
</div>
</section>

<section className="border-b border-white/10 bg-[#0A0A0A]" id="categories">
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 h-auto lg:h-[500px]">

<div className="group relative flex flex-col justify-end p-8 lg:p-12 h-[400px] lg:h-full overflow-hidden cursor-pointer">
<img alt="New Arrivals" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">New Arrivals</h3>
<p className="text-sm text-white/50">Fresh from the studio.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-end p-8 lg:p-12 h-[400px] lg:h-full overflow-hidden cursor-pointer">
<img alt="Best Sellers" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Best Sellers</h3>
<p className="text-sm text-white/50">Community favorites.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-end p-8 lg:p-12 h-[400px] lg:h-full overflow-hidden cursor-pointer">
<img alt="Essentials" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1617529497471-9218633199c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1">Essentials</h3>
<p className="text-sm text-white/50">Daily drivers.</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Featured Products</h2>
<p className="text-white/40 font-light">Meticulously crafted for longevity.</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
                    View all products <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden mb-4 border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">New</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white/90">Urban Sneaker</h3>
<p className="text-xs text-white/40 mt-1">Footwear</p>
</div>
<span className="text-sm font-medium text-white">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden mb-4 border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white/90">Classic Runner</h3>
<p className="text-xs text-white/40 mt-1">Footwear</p>
</div>
<span className="text-sm font-medium text-white">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden mb-4 border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white/90">Analog Camera</h3>
<p className="text-xs text-white/40 mt-1">Electronics</p>
</div>
<span className="text-sm font-medium text-white">$450</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden mb-4 border border-white/5">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1507473888900-52e1adad8d69?q=80&amp;w=1934&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm backdrop-blur-md">Sale</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white/90">Aroma Diffuser</h3>
<p className="text-xs text-white/40 mt-1">Home</p>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-medium text-red-400">$29</span>
<span className="text-xs text-white/30 line-through">$45</span>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center sm:hidden">
<a className="px-6 py-3 border border-white/10 rounded-sm text-sm font-medium hover:bg-white/5 w-full text-center" href="#">View All Products</a>
</div>
</div>
</section>

<section className="border-b border-white/10 bg-[#080808]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-12 flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">High Quality</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">Sourced from top-tier manufacturers with rigorous quality control standards.</p>
</div>
</div>

<div className="p-12 flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Secure Payment</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">Encrypted transactions and trusted payment gateways for your peace of mind.</p>
</div>
</div>

<div className="p-12 flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight mb-2">Fast Delivery</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">Global logistics network ensuring your items arrive on time, every time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-sm p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 backdrop-blur-sm">
<div className="max-w-xl">
<div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:timer" width="14"></iconify-icon> Limited Time Offer
                </div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter mb-6">Winter Clearance Sale</h2>
<p className="text-lg text-white/60 font-light mb-8">Save up to 50% on selected items. Offer ends when stock runs out.</p>

<div className="flex gap-4 mb-8">
<div className="flex flex-col items-center">
<span className="text-2xl font-mono font-medium">02</span>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Days</span>
</div>
<span className="text-2xl text-white/20">:</span>
<div className="flex flex-col items-center">
<span className="text-2xl font-mono font-medium">14</span>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Hours</span>
</div>
<span className="text-2xl text-white/20">:</span>
<div className="flex flex-col items-center">
<span className="text-2xl font-mono font-medium">35</span>
<span className="text-[10px] text-white/40 uppercase tracking-wider">Mins</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-sm rounded-sm hover:bg-gray-200 transition-colors" href="#">
                    Shop Deals
                </a>
</div>
<div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-square max-w-[400px]">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
<img alt="Product Bundle" className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/10 bg-[#050505]">
<div className="max-w-7xl mx-auto text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Seamless Experience</h2>
<p className="text-white/40 font-light max-w-lg mx-auto">From selection to your doorstep in three simple steps.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
<iconify-icon className="text-white/80" icon="lucide:mouse-pointer-2" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Browse</h3>
<p className="text-sm text-white/50 leading-relaxed font-light max-w-xs">Explore our curated catalog of premium goods designed for modern life.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
<iconify-icon className="text-white/80" icon="lucide:shopping-cart" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Order</h3>
<p className="text-sm text-white/50 leading-relaxed font-light max-w-xs">Select your items and checkout securely with our encrypted payment system.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
<iconify-icon className="text-white/80" icon="lucide:package-check" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Deliver</h3>
<p className="text-sm text-white/50 leading-relaxed font-light max-w-xs">Track your package in real-time as it ships directly to your doorstep.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/10 bg-grid">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center">What People Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-white/70 font-light leading-relaxed mb-6">"The build quality is exceptional. It's refreshing to find products that actually last. Shipping was surprisingly fast too."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<div className="text-sm font-medium">Alex M.</div>
<div className="text-xs text-white/40">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-white/70 font-light leading-relaxed mb-6">"Minimalist design at its finest. Fits perfectly with my apartment's aesthetic. I've already ordered a second one."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=5"/>
</div>
<div>
<div className="text-sm font-medium">Sarah K.</div>
<div className="text-xs text-white/40">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-white" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-white/20" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-white/70 font-light leading-relaxed mb-6">"Great customer support. I had a question about sizing and they responded within minutes. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full overflow-hidden">
<img className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=8"/>
</div>
<div>
<div className="text-sm font-medium">James P.</div>
<div className="text-xs text-white/40">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/10">
<div className="max-w-2xl mx-auto text-center">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Join the Inner Circle</h2>
<p className="text-white/50 font-light mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors" type="button">
                    Subscribe
                </button>
</form>
<p className="text-xs text-white/30 mt-4">We respect your privacy. Unsubscribe at any time.</p>
</div>
</section>

<footer className="bg-[#050505] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="font-display font-semibold text-lg tracking-tight flex items-center gap-2 mb-6" href="#">
<div className="w-4 h-4 bg-white rounded-full"></div>
                    Store
                </a>
<p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
                    Designing the future of everyday objects. Built for function, aesthetic, and longevity.
                </p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6">Support</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2024 Store Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<iconify-icon className="text-white/20" icon="lucide:credit-card" width="20"></iconify-icon>
<iconify-icon className="text-white/20" icon="simple-icons:applepay" width="32"></iconify-icon>
<iconify-icon className="text-white/20" icon="simple-icons:paypal" width="20"></iconify-icon>
</div>
</div>
</footer>


    </>
  );
}
