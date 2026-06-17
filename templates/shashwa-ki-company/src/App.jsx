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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center md:hidden">
<button className="text-gray-500 hover:text-black">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center">
<a className="uppercase text-xl font-semibold text-black tracking-tight" href="#">Shashwat ki company</a>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-900 hover:text-red-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#shop">Shop</a>
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#featured">New Arrivals</a>
<a className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors" href="#about">About</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-gray-500 hover:text-black transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-black transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 rounded-full border border-white"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-32 lg:pb-24 overflow-hidden pt-24 pb-12 relative" id="home">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 space-y-8">
<div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
<span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Summer Collection 2024</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                        Step Into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">True Style.</span>
</h1>
<p className="text-lg text-gray-500 max-w-md leading-relaxed">
                        Engineered for comfort, designed for the modern professional. Experience the perfect fusion of aesthetics and performance.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-all shadow-lg shadow-gray-200" href="#shop">
                            Shop Collection
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center px-8 py-3 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all" href="#about">
                            Our Story
                        </a>
</div>
<div className="pt-8 flex items-center space-x-8 text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium text-gray-500">Authentic</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium text-gray-500">Free Shipping</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gray-100 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
<div className="bg-gray-50 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 aspect-[4/5] lg:aspect-square relative group">
<img alt="Premium Shoe" className="object-center group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/50 shadow-sm">
<p className="text-xs text-gray-500 uppercase tracking-wide">Featured</p>
<p className="text-sm font-medium text-gray-900">Nike Metcon 8</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-gray-50/50 border-t border-gray-100" id="shop">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-8 lg:gap-12">

<div className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Categories</h3>
<div className="space-y-3">
<label className="flex items-center group cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 peer-checked:text-gray-900 group-hover:text-gray-900">Men's Sneakers</span>
</label>
<label className="flex items-center group cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 peer-checked:text-gray-900 group-hover:text-gray-900">Running</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 peer-checked:text-gray-900 group-hover:text-gray-900">Casual</span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm text-gray-600 peer-checked:text-gray-900 group-hover:text-gray-900">Formal</span>
</label>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Price Range</h3>
<div className="pr-1 pl-1">
<input className="w-full" max="500" min="0" type="range" value="250"/>
<div className="flex justify-between mt-2">
<span className="text-xs text-gray-500">$0</span>
<span className="text-xs text-gray-900 font-medium">$250</span>
<span className="text-xs text-gray-500">$500+</span>
</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Size</h3>
<div className="grid grid-cols-4 gap-2">
<button className="h-8 w-full border border-gray-200 rounded text-xs font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">7</button>
<button className="h-8 w-full border border-gray-200 rounded text-xs font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">8</button>
<button className="h-8 w-full border border-black bg-black text-white rounded text-xs font-medium">9</button>
<button className="h-8 w-full border border-gray-200 rounded text-xs font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">10</button>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">New Arrivals</h2>
<p className="text-sm text-gray-500 mt-1">Showing 1-6 of 24 products</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-500">Sort by:</span>
<div className="relative group">
<button className="text-xs font-medium text-gray-900 flex items-center gap-1">
                                    Featured <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<span className="absolute top-3 left-3 bg-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm text-gray-900 z-10">New</span>
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Air Jordan 1 High</h3>
<p className="text-xs text-gray-500 mt-1">Men's Lifestyle</p>
<p className="text-sm font-semibold text-gray-900 mt-2">$180.00</p>
</div>

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Nike Air Max 97</h3>
<p className="text-xs text-gray-500 mt-1">Men's Running</p>
<p className="text-sm font-semibold text-gray-900 mt-2">$160.00</p>
</div>

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<span className="absolute top-3 left-3 bg-red-600 text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-sm text-white z-10">-20%</span>
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Puma RS-X3</h3>
<p className="text-xs text-gray-500 mt-1">Unisex Casual</p>
<div className="flex items-center gap-2 mt-2">
<p className="text-sm font-semibold text-gray-900">$88.00</p>
<p className="text-xs text-gray-400 line-through">$110.00</p>
</div>
</div>

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Nike Red Limit</h3>
<p className="text-xs text-gray-500 mt-1">Sport Performance</p>
<p className="text-sm font-semibold text-gray-900 mt-2">$145.00</p>
</div>

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Vans Old Skool</h3>
<p className="text-xs text-gray-500 mt-1">Skateboarding</p>
<p className="text-sm font-semibold text-gray-900 mt-2">$75.00</p>
</div>

<div className="group">
<div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5] mb-4">
<img alt="Shoe" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">Ultraboost Light</h3>
<p className="text-xs text-gray-500 mt-1">Marathon Ready</p>
<p className="text-sm font-semibold text-gray-900 mt-2">$190.00</p>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="text-sm font-medium text-gray-900 border-b border-black pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors">Load More Products</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="featured">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 bg-gray-50 rounded-2xl overflow-hidden">
<img alt="Main View" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="bg-gray-50 rounded-2xl overflow-hidden">
<img alt="Side View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gray-50 rounded-2xl overflow-hidden relative flex items-center justify-center cursor-pointer group">
<img alt="Video Thumb" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Nike Air Zoom Pegasus 40</h2>
<div className="flex items-center gap-4">
<p className="text-xl font-medium text-gray-900">$130.00</p>
<div className="flex items-center text-yellow-500 text-xs gap-1">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-gray-500 ml-1 text-xs">(142 Reviews)</span>
</div>
</div>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-8">
                        A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has more responsiveness and neutral support, featuring breathable mesh and premium cushioning.
                    </p>

<div className="mb-6">
<p className="text-xs font-medium text-gray-900 uppercase tracking-wide mb-3">Color: <span className="text-gray-500 font-normal">Royal Blue</span></p>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-blue-600 ring-2 ring-offset-2 ring-gray-900"></button>
<button className="w-8 h-8 rounded-full bg-black ring-1 ring-gray-200 hover:ring-black transition-all"></button>
<button className="w-8 h-8 rounded-full bg-white border border-gray-300 hover:border-gray-900 transition-all"></button>
</div>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<p className="text-xs font-medium text-gray-900 uppercase tracking-wide">Select Size</p>
<button className="text-xs text-gray-500 underline hover:text-black">Size Guide</button>
</div>
<div className="grid grid-cols-5 gap-2">
<button className="h-10 border border-gray-200 rounded-lg text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all">US 7</button>
<button className="h-10 border border-gray-200 rounded-lg text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all">US 8</button>
<button className="h-10 border border-black bg-black text-white rounded-lg text-sm font-medium">US 9</button>
<button className="h-10 border border-gray-200 rounded-lg text-sm font-medium text-gray-500 hover:border-black hover:text-black transition-all">US 10</button>
<button className="h-10 border border-gray-200 bg-gray-50 text-gray-300 rounded-lg text-sm font-medium cursor-not-allowed">US 11</button>
</div>
</div>

<div className="flex gap-4 mb-8">
<div className="w-32 relative">
<button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<input className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg text-center text-sm font-medium focus:outline-none" type="number" value="1"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-12 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-gray-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear" width="18"></iconify-icon> Add to Cart
                        </button>
<button className="h-12 w-12 border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-100 transition-all">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>

<div className="border-t border-gray-100">
<div className="py-4 flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium text-gray-900">Delivery &amp; Returns</span>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="py-4 border-t border-gray-100 flex justify-between items-center cursor-pointer group">
<span className="text-sm font-medium text-gray-900">Product Features</span>
<iconify-icon className="text-gray-400 group-hover:text-black transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white" id="about">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Designed for Motion</h2>
<p className="text-lg text-gray-400 leading-relaxed font-light mb-10">
                At AuraSteps, we believe footwear should be an extension of your body. We combine biomechanical engineering with contemporary aesthetics to create shoes that not only look stunning but feel weightless. Sustainable materials, ethical production, and uncompromising quality are the pillars of our brand.
            </p>
<div className="grid grid-cols-3 gap-8 border-t border-gray-800 pt-10">
<div>
<h4 className="text-3xl font-semibold text-white">50k+</h4>
<p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Happy Customers</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-white">100%</h4>
<p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Recycled Box</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-white">365</h4>
<p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">Days Warranty</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-12 text-center">What People Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">"Hands down the most comfortable sneakers I've ever owned. The shipping was incredibly fast, and the packaging felt very premium."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Alex M.</p>
<p className="text-xs text-gray-400">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">"Great style, fits true to size. I use them for my daily commute and occasional runs. Very versatile design."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah J.</p>
<p className="text-xs text-gray-400">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">"Customer service was excellent when I needed to exchange sizes. The process was seamless. Will buy again."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-gray-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">David K.</p>
<p className="text-xs text-gray-400">Verified Buyer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Join the AuraSteps Club</h2>
<p className="text-gray-500 text-sm mb-6">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
<form className="flex gap-2">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Subscribe</button>
</form>
</div>

<div className="flex flex-col justify-center">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Get in Touch</h2>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
</div>
<span className="text-sm text-gray-600" id="home" style={{}}>teri maaa kaaa naaaka</span>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<span className="text-sm text-gray-600">support@aurasteps.com</span>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<span className="text-sm text-gray-600">123 Fashion Ave, New York, NY 10001</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-gray-500">© 2024 AuraSteps Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
<div className="flex gap-4">
<iconify-icon className="text-gray-300" icon="solar:card-linear" width="24"></iconify-icon>
<iconify-icon className="text-gray-300" icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
