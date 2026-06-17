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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-neutral-900 text-white w-8 h-8 flex items-center justify-center rounded-md">
<span className="font-bold text-lg tracking-tighter">A</span>
</div>
<span className="text-lg font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">AURA<span className="text-neutral-400 font-normal">GROUP</span></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#brands">Our Brands</a>
<a className="hover:text-neutral-900 transition-colors" href="#categories">Sectors</a>
<a className="hover:text-neutral-900 transition-colors" href="#products">Products</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-700 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Contact Us
                    <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="md:hidden text-neutral-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-neutral-100 to-transparent opacity-50 blur-3xl rounded-bl-full"></div>
<div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-neutral-100 to-transparent opacity-50 blur-3xl rounded-tr-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Innovating Daily Essentials
                    </div>
<h1 className="text-5xl md:text-7xl font-medium text-neutral-900 tracking-tighter leading-[1.1] mb-8 fade-in-up delay-100">
                        Curating quality for <br/> <span className="text-neutral-400">modern living.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-light max-w-xl leading-relaxed mb-10 fade-in-up delay-200">
                        A multi-brand conglomerate reshaping the FMCG landscape through sustainable sourcing, minimalist design, and consumer-centric innovation.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
<a className="inline-flex justify-center items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#products">
                            Explore Products
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-neutral-200 text-neutral-700 px-6 py-3 rounded-full text-sm font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-all" href="#about">
                            Company Vision
                        </a>
</div>
</div>

<div className="relative hidden lg:block fade-in-up delay-300">
<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/10 to-transparent pointer-events-none"></div>
<img alt="Minimalist Lifestyle" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-3 fade-in-up delay-500 z-20">
<div className="bg-green-100 text-green-700 p-2 rounded-lg">
<span className="iconify" data-icon="lucide:leaf" data-width="20"></span>
</div>
<div>
<p className="text-xs font-semibold text-neutral-900">100% Sustainable</p>
<p className="text-[10px] text-neutral-500">Sourced ethically</p>
</div>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-100 bg-white overflow-hidden" id="brands">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400">Our Portfolio of Trusted Brands</span>
</div>
<div className="marquee-container w-full overflow-hidden relative">
<div className="marquee-content flex gap-16 whitespace-nowrap w-max px-4">

<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:droplet" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">PURE<span className="font-light">LIFE</span></span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:wheat" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-serif italic tracking-tight text-neutral-800">Harvest &amp; Co.</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-bold tracking-tight text-neutral-800">LUMIÈRE</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-black tracking-tighter text-neutral-800">VOLT</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:home" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-medium tracking-tight text-neutral-800">NEST<span className="text-neutral-400">ify</span></span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:bean" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-semibold tracking-tight text-neutral-800">BeanStalk</span>
</div>

<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:droplet" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-semibold tracking-tighter text-neutral-800">PURE<span className="font-light">LIFE</span></span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:wheat" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-serif italic tracking-tight text-neutral-800">Harvest &amp; Co.</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-bold tracking-tight text-neutral-800">LUMIÈRE</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-black tracking-tighter text-neutral-800">VOLT</span>
</div>
<div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="iconify text-neutral-800" data-icon="lucide:home" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-xl font-medium tracking-tight text-neutral-800">NEST<span className="text-neutral-400">ify</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-6">
                    Redefining the <br/> supply chain of tomorrow.
                </h2>
<div className="space-y-6 text-neutral-500 font-light leading-relaxed">
<p>
                        At Aura Group, we believe that FMCG products shouldn't just be consumed; they should be experienced. We meticulously craft brands that align with the values of the modern consumer: transparency, sustainability, and aesthetic simplicity.
                    </p>
<p>
                        From farm to shelf, our integrated logistics and data-driven market analysis ensure that every product we launch fills a genuine gap in the market while minimizing environmental impact.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-100 flex gap-12">
<div>
<span className="block text-3xl font-medium text-neutral-900 tracking-tight">12+</span>
<span className="text-sm text-neutral-500">Global Markets</span>
</div>
<div>
<span className="block text-3xl font-medium text-neutral-900 tracking-tight">500k</span>
<span className="text-sm text-neutral-500">Daily Consumers</span>
</div>
<div>
<span className="block text-3xl font-medium text-neutral-900 tracking-tight">6</span>
<span className="text-sm text-neutral-500">Core Brands</span>
</div>
</div>
</div>
<div className="bg-neutral-100 rounded-2xl p-8 h-full min-h-[400px] relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent)] z-10"></div>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-emerald-600" data-icon="lucide:leaf" data-width="28" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Eco-First Packaging</span>
</div>
<div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 flex flex-col justify-between mt-8 group-hover:translate-y-2 transition-transform duration-500">
<span className="iconify text-blue-600" data-icon="lucide:microscope" data-width="28" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">R&amp;D Labs</span>
</div>
<div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500 delay-100">
<span className="iconify text-amber-600" data-icon="lucide:truck" data-width="28" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Agile Distribution</span>
</div>
<div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 flex flex-col justify-between mt-8 group-hover:translate-y-2 transition-transform duration-500 delay-100">
<span className="iconify text-purple-600" data-icon="lucide:users" data-width="28" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Community Focus</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200" id="categories">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight">Sectors</h2>
<p className="text-neutral-500 mt-2 font-light">Areas where we make a difference.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#">
                    View all sectors <span className="iconify" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:utensils" data-width="100" style={{strokeWidth: '1'}}></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-600">
<span className="iconify" data-icon="lucide:carrot" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Food &amp; Beverage</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Organic snacks, premium hydration, and pantry staples sourced from sustainable farms.</p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:sparkles" data-width="100" style={{strokeWidth: '1'}}></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600">
<span className="iconify" data-icon="lucide:droplet" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Personal Care</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Dermatologically tested skincare and hygiene products with zero harsh chemicals.</p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:home" data-width="100" style={{strokeWidth: '1'}}></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600">
<span className="iconify" data-icon="lucide:flower" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Home Care</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Eco-friendly cleaning solutions and home ambiance products for a healthier living space.</p>
<div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="products">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">Featured Products</h2>
<p className="text-neutral-500 mt-3 font-light max-w-lg mx-auto">Discover our latest innovations designed to elevate your everyday routines.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="bg-neutral-100 rounded-lg aspect-[4/5] w-full mb-4 relative overflow-hidden flex items-center justify-center">

<div className="w-32 h-48 bg-gradient-to-tr from-stone-200 to-stone-50 rounded shadow-inner border border-stone-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-stone-400" data-icon="lucide:wheat" data-width="48" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-md text-neutral-900 hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900">Harvest Oats</h3>
<p className="text-xs text-neutral-500 mt-1">Brand: Harvest &amp; Co.</p>
<p className="text-sm text-neutral-900 mt-2 font-medium">$6.50</p>
</div>

<div className="group">
<div className="bg-neutral-100 rounded-lg aspect-[4/5] w-full mb-4 relative overflow-hidden flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-b from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-blue-300" data-icon="lucide:droplet" data-width="40" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-md text-neutral-900 hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900">Hydra Serum</h3>
<p className="text-xs text-neutral-500 mt-1">Brand: LUMIÈRE</p>
<p className="text-sm text-neutral-900 mt-2 font-medium">$24.00</p>
</div>

<div className="group">
<div className="bg-neutral-100 rounded-lg aspect-[4/5] w-full mb-4 relative overflow-hidden flex items-center justify-center">
<div className="w-32 h-40 bg-gradient-to-br from-green-100 to-white rounded-xl border border-green-50 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-green-400" data-icon="lucide:spray-can" data-width="40" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-md text-neutral-900 hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900">Botanical Surface Spray</h3>
<p className="text-xs text-neutral-500 mt-1">Brand: NESTify</p>
<p className="text-sm text-neutral-900 mt-2 font-medium">$12.95</p>
</div>

<div className="group">
<div className="bg-neutral-100 rounded-lg aspect-[4/5] w-full mb-4 relative overflow-hidden flex items-center justify-center">
<div className="w-20 h-44 bg-gradient-to-t from-gray-200 to-gray-50 rounded-sm border border-gray-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:coffee" data-width="32" style={{strokeWidth: '1'}}></span>
</div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white p-2 rounded-full shadow-md text-neutral-900 hover:bg-neutral-50">
<span className="iconify" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900">Cold Brew Reserve</h3>
<p className="text-xs text-neutral-500 mt-1">Brand: BeanStalk</p>
<p className="text-sm text-neutral-900 mt-2 font-medium">$4.50</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-200 rounded-full text-sm font-medium text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors">
                Load More Products
                <span className="iconify" data-icon="lucide:chevron-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neutral-800 rounded-full blur-3xl opacity-20"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Partner with us.</h2>
<p className="text-neutral-400 font-light mb-8">
                        Whether you are a retailer, distributor, or looking for investor relations, we are ready to scale together.
                    </p>
<div className="space-y-4 text-sm text-neutral-300">
<div className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:map-pin" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>100 Innovation Drive, Tech City</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
<a className="hover:text-white transition-colors" href="mailto:hello@auragroup.com">hello@auragroup.com</a>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>+1 (555) 000-0000</span>
</div>
</div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">First Name</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder-neutral-600" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder-neutral-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder-neutral-600" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all placeholder-neutral-600 resize-none" placeholder="Tell us about your inquiry..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-neutral-900 font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Send Message
                         <span className="iconify" data-icon="lucide:send" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-neutral-900 text-white w-6 h-6 flex items-center justify-center rounded text-xs font-bold">A</div>
<span className="text-sm font-medium text-neutral-900">Aura Holdings</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Sitemap</a>
</div>
<p className="text-xs text-neutral-400">© 2023 Aura Holdings. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
