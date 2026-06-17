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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight group-hover:text-neutral-600 transition-colors">
            TANWAR OVENS
            <span className="text-red-600">.</span>
</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#products">
            Ovens
          </a>
<a className="hover:text-black transition-colors" href="#features">
            Why Us
          </a>
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#gallery">
            Gallery
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#contact">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:phone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Support</span>
</a>
<a className="bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-all shadow-sm flex items-center gap-2" href="#contact">
            Get a Quote
            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 mb-6">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            India's Trusted Oven Manufacturer
          </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Premium Wood-Fired &amp;
            <br className="hidden md:block"/>
            Commercial Ovens.
          </h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-lg">
            Handcrafted in India. Engineered for high performance, durability,
            and perfect baking results. From artisan pizzerias to commercial
            bakeries.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm shadow-red-200" href="#products">
              View Products
            </a>
<a className="bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-900 px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2" href="https://wa.me/">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-height="18" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              WhatsApp Us
            </a>
</div>
<div className="mt-12 flex items-center gap-8 text-neutral-400 text-sm">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg>
<span>Made in India</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
<span>5-Year Warranty</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-red-50 to-transparent rounded-2xl opacity-50 -z-10"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-900 aspect-[4/3] group">
<img alt="Tanwar Wood Fired Oven" className="group-hover:scale-105 transition-transform duration-700 opacity-90 w-full h-full object-cover" src="https://i.postimg.cc/JnGbrRmp/commercial-oven.jpg"/>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-sm font-medium text-white/80">Featured Model</p>
<p className="text-xl font-semibold tracking-tight">
                Napoli Series 900
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50/50 border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Our Expertise
          </h2>
<p className="mt-2 text-neutral-500 text-sm">
            Specialized heating solutions for every culinary need.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all cursor-pointer">
<img alt="Pizza Oven" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" src="https://i.postimg.cc/25ppFS9r/pizza-oven.jpg"/>
<h3 className="text-base font-semibold text-neutral-900 mb-1">
              Pizza Ovens
            </h3>
<p className="text-sm text-neutral-500 mb-4">
              Authentic Neapolitan style domes.
            </p>
<span className="text-xs font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>

<div className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all cursor-pointer">
<img alt="Bakery Oven" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" src="https://i.postimg.cc/ZRVDgbH8/bakery-oven.jpg"/>
<h3 className="text-base font-semibold text-neutral-900 mb-1">
              Bakery Ovens
            </h3>
<p className="text-sm text-neutral-500 mb-4">
              Large capacity commercial decks.
            </p>
<span className="text-xs font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>

<div className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all cursor-pointer">
<img alt="Outdoor Oven" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" src="https://i.postimg.cc/sDB06Rh9/outdoor-oven.jpg"/>
<h3 className="text-base font-semibold text-neutral-900 mb-1">
              Wood-Fired
            </h3>
<p className="text-sm text-neutral-500 mb-4">
              Traditional flavour retention.
            </p>
<span className="text-xs font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>

<div className="group bg-white p-6 rounded-xl border border-neutral-200 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all cursor-pointer">
<img alt="Custom Oven" className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm" src="https://i.postimg.cc/59sZK3K7/custom-oven.jpg"/>
<h3 className="text-base font-semibold text-neutral-900 mb-1">
              Custom Ovens
            </h3>
<p className="text-sm text-neutral-500 mb-4">
              Built to your specific dimensions.
            </p>
<span className="text-xs font-medium text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Featured Ovens
            </h2>
<p className="mt-2 text-neutral-500">
              Explore our most popular models designed for performance.
            </p>
</div>
<a className="text-sm font-medium text-neutral-900 hover:text-red-600 flex items-center gap-1 transition-colors" href="#contact">
            Download Catalog
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10l5 5l5-5"></path>
</g>
</svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[5/4] bg-neutral-100 overflow-hidden">
<img alt="Napoli Pizza Oven" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/25ppFS9r/pizza-oven.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-medium">
                Best Seller
              </div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-neutral-900">
                  Napoli Dome 120
                </h3>
<p className="text-sm text-neutral-500 mt-1">
                  Professional Wood-Fired Pizza Oven
                </p>
</div>
<ul className="space-y-2 mb-6 text-sm text-neutral-600 flex-grow">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:thermometer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Max Temp: 500°C
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:pizza" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m12 14l-1 1m2.75 3.25l-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"></path>
<path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path>
</g>
</svg>
                  Capacity: 4-5 Pizzas
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:layers" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
                  Material: Refractory Brick
                </li>
</ul>
<div className="flex items-center gap-3 mt-auto">
<button className="flex-1 bg-black text-white text-sm font-medium py-2.5 rounded hover:bg-neutral-800 transition-colors">
                  Request Quote
                </button>
<button className="p-2.5 border border-neutral-200 rounded text-neutral-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[5/4] bg-neutral-100 overflow-hidden">
<img alt="Bakery Deck Oven" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/ZRVDgbH8/bakery-oven.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-neutral-900">
                  Pro-Bake Deck Series
                </h3>
<p className="text-sm text-neutral-500 mt-1">
                  Commercial Gas/Electric Bakery Oven
                </p>
</div>
<ul className="space-y-2 mb-6 text-sm text-neutral-600 flex-grow">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:layout-grid" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</g>
</svg>
                  3-Deck Configuration
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:gauge" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Digital Control Panel
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Steam Injection System
                </li>
</ul>
<div className="flex items-center gap-3 mt-auto">
<button className="flex-1 bg-black text-white text-sm font-medium py-2.5 rounded hover:bg-neutral-800 transition-colors">
                  Request Quote
                </button>
<button className="p-2.5 border border-neutral-200 rounded text-neutral-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[5/4] bg-neutral-100 overflow-hidden">
<img alt="Rotary Oven" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/59sZK3K7/custom-oven.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-neutral-900">
                  Rotary Rack 300
                </h3>
<p className="text-sm text-neutral-500 mt-1">
                  High Capacity Industrial Oven
                </p>
</div>
<ul className="space-y-2 mb-6 text-sm text-neutral-600 flex-grow">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:rotate-cw" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5"></path>
</g>
</svg>
                  Uniform Heat Distribution
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:box" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
                  Tray Size: 18x26 inches
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
                  Heavy Duty 24/7 Operation
                </li>
</ul>
<div className="flex items-center gap-3 mt-auto">
<button className="flex-1 bg-black text-white text-sm font-medium py-2.5 rounded hover:bg-neutral-800 transition-colors">
                  Request Quote
                </button>
<button className="p-2.5 border border-neutral-200 rounded text-neutral-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-0.5" href="#contact">
            View full catalog
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">
              Built for the Indian Kitchen Environment
            </h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
              Tanwar Ovens understands the rigorous demands of Indian commercial
              kitchens. Our ovens are engineered with heavy-duty materials to
              withstand continuous usage, fluctuating power conditions, and
              diverse baking requirements.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
<path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
</g>
</svg>
</div>
<h4 className="font-medium text-white mb-2">Heavy-Duty Build</h4>
<p className="text-sm text-neutral-500">
                  Reinforced steel &amp; high-grade refractory materials.
                </p>
</div>
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:indian-rupee" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3m0 0c6.667 0 6.667-10 0-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="font-medium text-white mb-2">
                  Factory Direct Pricing
                </h4>
<p className="text-sm text-neutral-500">
                  No middlemen. Best rates in India guaranteed.
                </p>
</div>
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</g>
</svg>
</div>
<h4 className="font-medium text-white mb-2">Pan-India Delivery</h4>
<p className="text-sm text-neutral-500">
                  Safe shipping and installation across all states.
                </p>
</div>
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wrench" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h4 className="font-medium text-white mb-2">After-Sales Support</h4>
<p className="text-sm text-neutral-500">
                  Dedicated service team for maintenance &amp; spares.
                </p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-white/10">
<img alt="Oven Fire Detail" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://i.postimg.cc/3RSn1Lrs/backyard-oven.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<div className="text-4xl font-semibold text-white mb-1">15+</div>
<div className="text-sm text-neutral-400">
                Years of Manufacturing Excellence
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-100" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Installations &amp; Setups
          </h2>
<p className="mt-2 text-neutral-500 text-sm">
            See our ovens in action at restaurants across India.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
<div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
<img alt="Restaurant Oven Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/sDB06Rh9/outdoor-oven.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
<img alt="Wood Burning in Oven" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/3RSn1Lrs/backyard-oven.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
<img alt="Pizza Inside Oven" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/25ppFS9r/pizza-oven.jpg"/>
</div>
<div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative group">
<img alt="Commercial Kitchen Oven Row" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/JnGbrRmp/commercial-oven.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">
          Trusted by Bakers
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
              "The heat retention on the Napoli oven is incredible. We serve
              over 200 pizzas a night and it never loses temperature. Great
              build quality."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                RS
              </div>
<div>
<p className="text-sm font-semibold text-neutral-900">
                  Rahul Sharma
                </p>
<p className="text-xs text-neutral-500">Pizzeria Owner, Mumbai</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
              "Ordered a custom size deck oven for our bakery in Jaipur. The
              team at Tanwar was very professional and delivery was on time."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                AV
              </div>
<div>
<p className="text-sm font-semibold text-neutral-900">Amit Verma</p>
<p className="text-xs text-neutral-500">Bakery Chain, Jaipur</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-6">
              "Best value for money in the Indian market. Heavy steel
              construction and very fuel efficient. Highly recommended."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                MK
              </div>
<div>
<p className="text-sm font-semibold text-neutral-900">
                  Manish Kumar
                </p>
<p className="text-xs text-neutral-500">Home Baker, Delhi</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2">
<img alt="Oven Craftsmanship" className="rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-700" src="https://i.postimg.cc/59sZK3K7/custom-oven.jpg"/>
</div>
<div className="md:w-1/2">
<div className="text-sm font-bold text-red-600 tracking-wider uppercase mb-2">
            About Tanwar Ovens
          </div>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">
            Crafting Reliability Since 2008
          </h2>
<div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
<p>
              Tanwar Ovens is a premier Indian manufacturer dedicated to the art
              of oven making. We don't just assemble; we craft. Our journey
              began with a simple mission: to provide Indian bakers and chefs
              with equipment that matches international standards without the
              import price tag.
            </p>
<p>
              From traditional wood-fired domes that perfect the leopard-spot
              crust to industrial-grade commercial bakery ovens that run 24/7,
              our products are a testament to quality craftsmanship and
              reliability.
            </p>
<p>
              We understand the local market needs—durability, serviceability,
              and efficiency. That's why every Tanwar Oven is built tough, ready
              to serve your business for years to come.
            </p>
</div>
<div className="mt-8 pt-8 border-t border-neutral-100 flex gap-12">
<div>
<div className="text-2xl font-bold text-neutral-900">500+</div>
<div className="text-xs text-neutral-500">Happy Clients</div>
</div>
<div>
<div className="text-2xl font-bold text-neutral-900">100%</div>
<div className="text-xs text-neutral-500">Made in India</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800 to-transparent opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">
              Start Your Project
            </h2>
<p className="text-neutral-400 mb-12">
              Looking for a custom oven or need a quote? Fill out the form or
              reach us directly.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Factory Address</h3>
<p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                    Plot No. 45, Industrial Area Phase 2, New Delhi, India -
                    110020
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Call Us</h3>
<p className="text-sm text-neutral-400 mt-1">+91 98765 43210</p>
<p className="text-sm text-neutral-400">+91 11 2345 6789</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Email</h3>
<p className="text-sm text-neutral-400 mt-1">
                    sales@tanwarovens.in
                  </p>
</div>
</div>
</div>
<div className="mt-12">
<div className="w-full h-48 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-500 border border-neutral-700">

<div className="text-center">
<svg aria-hidden="true" className="iconify mx-auto mb-2 opacity-50 iconify--lucide" data-icon="lucide:map" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm">Google Map Embed Placeholder</span>
</div>
</div>
</div>
</div>

<div className="bg-white text-neutral-900 rounded-xl p-8">
<h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500">
                    First Name
                  </label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500">
                    Last Name
                  </label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500">
                  Phone Number
                </label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm" placeholder="+91" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500">
                  Oven Type Interest
                </label>
<select className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm bg-white">
<option>Pizza Oven (Wood Fired)</option>
<option>Commercial Bakery Oven</option>
<option>Rotary Oven</option>
<option>Custom Requirement</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500">
                  Message
                </label>
<textarea className="w-full px-3 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-red-600 text-white font-medium py-3 rounded-md hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20" type="button">
                Send Inquiry
              </button>
</form>
<div className="mt-6 flex items-center justify-center">
<a className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium" href="https://wa.me/">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Chat directly on WhatsApp
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-base font-semibold tracking-tight text-neutral-900">
            TANWAR OVENS
          </span>
</div>
<div className="text-sm text-neutral-500 text-center md:text-right">
          © 2023 Tanwar Ovens. All rights reserved.
          <br className="md:hidden"/>
          Designed in India.
        </div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
