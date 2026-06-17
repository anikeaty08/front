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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-orange-200">
<span className="iconify" data-height="20" data-icon="lucide:wheat" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">SIDHU INDIAN FOODS</span>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-zinc-400 group-focus-within:text-orange-600 transition-colors" data-height="18" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-zinc-200 rounded-lg leading-5 bg-zinc-50/50 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all" placeholder="Search for brands, spices, rice..." type="text"/>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#catalog">Catalog</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#logistics">Logistics</a>
<div className="h-4 w-px bg-zinc-200"></div>
<a className="text-sm font-medium text-zinc-900 hover:text-orange-600 transition-colors" href="#register">Login</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 transition-all shadow-sm" href="#register">
                        Register Shop
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-zinc-500 hover:text-zinc-900 focus:outline-none">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
<div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-[-1]">
<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-zinc-50 via-white to-transparent"></div>
<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-100/30 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Now delivering to 500+ locations in Germany
            </div>
<h1 className="text-4xl sm:text-6xl font-semibold text-zinc-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.15]">
                Germany's Premier B2B Marketplace for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Indian FMCG</span>
</h1>
<p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Connect directly with top Indian brands. We simplify procurement for ethnic grocery stores, supermarkets, and restaurants with our dedicated logistics fleet.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2" href="#register">
                    Start Buying Wholesale
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-sm" href="#catalog">
<span className="iconify" data-height="16" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="16"></span>
                    View Catalog
                </a>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12 group">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-200 via-amber-100 to-orange-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>

<div className="relative rounded-xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-200/80 bg-white ring-1 ring-zinc-900/5">

<div className="h-8 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
<div className="ml-4 h-4 w-64 bg-zinc-100 rounded-full"></div>
</div>

<div className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-100">
<img alt="Sidhu Indian Foods Modern Warehouse and Distribution Center" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-zinc-200/50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-4 animate-fade-in-up">
<div className="bg-green-100 p-2 rounded-md text-green-700">
<span className="iconify" data-icon="lucide:package-check" data-width="20"></span>
</div>
<div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Stock Status</div>
<div className="text-sm font-semibold text-zinc-900">12,400+ Units Ready</div>
</div>
</div>
<div className="absolute top-6 right-6 hidden md:flex bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 px-4 py-2 rounded-lg shadow-lg items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-white">Live Logistics Hub</span>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-zinc-100/50">
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">500+</div>
<div className="text-sm text-zinc-500 font-medium mt-1">Retail Partners</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">1200+</div>
<div className="text-sm text-zinc-500 font-medium mt-1">SKUs Available</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">24-48h</div>
<div className="text-sm text-zinc-500 font-medium mt-1">Delivery Time</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">100%</div>
<div className="text-sm text-zinc-500 font-medium mt-1">Authentic Brands</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-zinc-50/80 border-y border-zinc-200/60" id="register">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">How to register as a Retailer</h2>
<p className="mt-4 text-lg text-zinc-500">Three simple steps to access wholesale prices and bulk ordering.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-200 border-t border-dashed border-zinc-300 z-0"></div>

<div className="relative z-10 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-zinc-900/10 ring-4 ring-zinc-50">
<span className="iconify" data-height="24" data-icon="lucide:user-plus" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 text-center mb-2">Create Account</h3>
<p className="text-base text-zinc-500 text-center leading-relaxed">
                        Fill in your business details including company name, owner name, and contact information.
                    </p>
</div>

<div className="relative z-10 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-orange-600/20 ring-4 ring-orange-50">
<span className="iconify" data-height="24" data-icon="lucide:file-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 text-center mb-2">Verify Business</h3>
<p className="text-base text-zinc-500 text-center leading-relaxed">
                        Upload your <strong>Gewerbeschein</strong> (Business License) and Tax ID for verification. Approval within 24 hours.
                    </p>
</div>

<div className="relative z-10 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-zinc-900/10 ring-4 ring-zinc-50">
<span className="iconify" data-height="24" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 text-center mb-2">Order Wholesale</h3>
<p className="text-base text-zinc-500 text-center leading-relaxed">
                        Access our full catalog with B2B pricing, credit facilities, and schedule your first delivery.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="catalog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Popular Categories</h2>
<p className="mt-2 text-lg text-zinc-500">Sourced directly from manufacturers.</p>
</div>
<a className="hidden sm:flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors bg-orange-50 px-4 py-2 rounded-lg hover:bg-orange-100" href="#">
                    View all categories 
                    <span className="iconify ml-1" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">

<a className="group relative overflow-hidden rounded-2xl border border-zinc-100 shadow-sm bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300" href="#">
<div className="aspect-[4/3] bg-zinc-50 overflow-hidden relative">
<img alt="Spices" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="p-5">
<h3 className="font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Spices &amp; Masalas</h3>
<p className="text-sm text-zinc-500 mt-1">Turmeric, Chili, Garam Masala</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-100 shadow-sm bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300" href="#">
<div className="aspect-[4/3] bg-zinc-50 overflow-hidden relative">
<img alt="Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="p-5">
<h3 className="font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Rice &amp; Flours</h3>
<p className="text-sm text-zinc-500 mt-1">Basmati, Atta, Besan</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-100 shadow-sm bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300" href="#">
<div className="aspect-[4/3] bg-zinc-50 overflow-hidden relative">
<img alt="Lentils" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515543904379-3d757afe72e3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="p-5">
<h3 className="font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Lentils &amp; Pulses</h3>
<p className="text-sm text-zinc-500 mt-1">Toor Dal, Moong, Chana</p>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-zinc-100 shadow-sm bg-white hover:border-orange-200 hover:shadow-md transition-all duration-300" href="#">
<div className="aspect-[4/3] bg-zinc-50 overflow-hidden relative">
<img alt="Snacks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="p-5">
<h3 className="font-medium text-zinc-900 group-hover:text-orange-600 transition-colors">Snacks &amp; Ready to Eat</h3>
<p className="text-sm text-zinc-500 mt-1">Namkeen, Biscuits, Sweets</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden relative" id="logistics">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-orange-400 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:truck" data-width="14"></span>
                        Own Logistics Network
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Why German Retailers Choose Sidhu</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        We don't just sell products; we deliver them. With our own fleet of trucks and vans, we ensure your stock arrives fresh and on time, every time.
                    </p>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-orange-500/50 group-hover:bg-orange-900/10 transition-colors text-orange-400">
<span className="iconify" data-height="24" data-icon="lucide:map" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-100 group-hover:text-orange-400 transition-colors">Nationwide Coverage</h4>
<p className="text-base text-zinc-400 mt-1">From Hamburg to Munich, our logistics network covers key German cities with weekly routes.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-orange-500/50 group-hover:bg-orange-900/10 transition-colors text-orange-400">
<span className="iconify" data-height="24" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-100 group-hover:text-orange-400 transition-colors">Reliable Timelines</h4>
<p className="text-base text-zinc-400 mt-1">Integrated supply chain allows for next-day dispatch on in-stock items.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700 group-hover:border-orange-500/50 group-hover:bg-orange-900/10 transition-colors text-orange-400">
<span className="iconify" data-height="24" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-zinc-100 group-hover:text-orange-400 transition-colors">Quality Assurance</h4>
<p className="text-base text-zinc-400 mt-1">Strict handling protocols during transit to prevent damage and ensure food safety.</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2">
<div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-3xl opacity-30"></div>
<div className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">

<img alt="Sidhu Logistics Truck" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent p-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<span className="iconify text-white" data-icon="lucide:truck" data-width="20"></span>
</div>
<div>
<p className="text-white font-medium">Sidhu Logistics Fleet</p>
<p className="text-zinc-400 text-xs">Operating daily across EU</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-zinc-800 border border-zinc-700 p-4 rounded-xl shadow-xl hidden sm:block">
<div className="flex items-center gap-3">
<div className="bg-green-500/20 text-green-500 p-2 rounded-lg">
<span className="iconify" data-icon="lucide:check-circle" data-width="18"></span>
</div>
<div>
<div className="text-xs text-zinc-400 uppercase font-semibold">On-Time Rate</div>
<div className="text-lg font-bold text-white">98.5%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-height="18" data-icon="lucide:wheat" data-width="18"></span>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-900">SIDHU INDIAN FOODS</span>
</div>
<p className="text-base text-zinc-500 mb-6 leading-relaxed">
                        Connecting India's finest flavors with Germany's retail market through robust logistics and technology.
                    </p>
<div className="flex gap-4 text-zinc-400">
<span className="iconify hover:text-zinc-900 cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="20"></span>
<span className="iconify hover:text-zinc-900 cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="20"></span>
<span className="iconify hover:text-zinc-900 cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-6">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Our Fleet</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-6">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Retailer Help</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Return Policy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Shipping Areas</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<span className="iconify mt-0.5" data-icon="lucide:map-pin" data-width="16"></span>
<span>Berlin, Germany<br/>Hauptstraße 15, 10115</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            sales@sidhufoods.de
                        </li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            +49 30 1234567
                        </li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-zinc-400">© 2024 Sidhu Indian Foods GmbH. All rights reserved.</p>
<div className="flex gap-8 text-sm text-zinc-400">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Imprint</a>
<a className="hover:text-zinc-600" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
