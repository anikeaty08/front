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
      

<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] backdrop-blur-md bg-white/90">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-8">

<div className="flex-shrink-0">
<a className="text-2xl tracking-tight font-semibold text-[#1f3f77] flex items-center gap-2" href="#">
<iconify-icon className="text-3xl" icon="solar:shop-2-linear" strokeWidth="1.5"></iconify-icon>
                    eClassify
                </a>
</div>

<div className="flex-1 max-w-3xl hidden md:flex items-center border border-gray-200 rounded-full bg-white hover:border-gray-300 transition-colors shadow-sm focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 overflow-hidden h-12">
<div className="relative h-full">
<select className="h-full pl-5 pr-10 bg-gray-50/50 border-r border-gray-200 text-sm text-gray-600 outline-none appearance-none cursor-pointer font-medium hover:bg-gray-100 transition-colors">
<option>All Categories</option>
<option>Cars</option>
<option>Real Estate</option>
<option>Electronics</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="flex-1 h-full px-5 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent" placeholder="Search for cars, properties, electronics..." type="text"/>
<button className="h-full px-8 bg-[#1f3f77] text-white flex items-center justify-center hover:bg-[#162d55] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-6 text-sm font-medium text-gray-600">
<button className="hidden lg:flex items-center gap-2 hover:text-[#1f3f77] transition-colors">
<iconify-icon className="text-lg text-[#1f3f77]" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    Add location
                </button>
<div className="w-px h-5 bg-gray-200 hidden lg:block"></div>
<button className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                    EN
                </button>
<div className="hidden md:flex items-center gap-4">
<a className="hover:text-[#1f3f77] transition-colors" href="#">Login</a>
<a className="hover:text-[#1f3f77] transition-colors" href="#">Register</a>
</div>
<button className="bg-[#1f3f77] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#162d55] transition-all duration-200 shadow-sm hover:shadow active:scale-95 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Post Ad
                </button>
</div>
</div>
</header>

<nav className="border-b border-gray-100 bg-white">
<div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar">
<ul className="flex items-center gap-8 py-3.5 text-sm font-medium text-gray-500">
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors text-[#1f3f77]" href="#"><iconify-icon className="text-base" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>Cars</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>Real Estate</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:cat-linear" strokeWidth="1.5"></iconify-icon>Pets</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:washing-machine-linear" strokeWidth="1.5"></iconify-icon>Home Appliances</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:armchair-linear" strokeWidth="1.5"></iconify-icon>Furniture</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:hanger-2-linear" strokeWidth="1.5"></iconify-icon>Clothing</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>Electronics</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>Services</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>Jobs</a></li>
<li className="flex-shrink-0"><a className="flex items-center gap-2 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-base" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>Other</a></li>
</ul>
</div>
</nav>
<main className="min-h-screen pb-20">

<section className="max-w-[1400px] mx-auto px-6 py-10">
<div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row items-stretch">

<div className="p-10 md:p-16 flex flex-col justify-center w-full md:w-[55%]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#1f3f77] text-xs font-semibold mb-6 border border-blue-100/50 w-fit">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                        New Marketplace Experience
                    </div>
<h1 className="text-4xl md:text-5xl tracking-tight font-semibold text-gray-900 mb-5 leading-[1.15]">
                        Find exactly what you are looking for.
                    </h1>
<p className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed">
                        Buy, sell, and discover exclusive deals in your local area. From real estate to electronics, we connect you with the best.
                    </p>
<div className="flex items-center gap-4">
<button className="bg-[#1f3f77] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#162d55] transition-all shadow-sm">
                            Start Browsing
                        </button>
<button className="bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm">
                            How it works
                        </button>
</div>
</div>

<div className="w-full md:w-[45%] bg-gray-200 min-h-[300px] relative overflow-hidden">
<img alt="Marketplace" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent hidden md:block w-32"></div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-12">
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6">

<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white group-hover:border-[#1f3f77] transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_8px_20px_-6px_rgba(31,63,119,0.3)]">
<iconify-icon className="text-3xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Classifieds</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:wheel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Automotive</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:cat-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Pets</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Real Estate</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:washing-machine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Appliances</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:armchair-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Furniture</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:hanger-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Clothing</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Vehicles</span>
</a>
<a className="flex flex-col items-center gap-3 group" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#1f3f77] group-hover:bg-[#1f3f77] group-hover:text-white transition-all duration-300 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<iconify-icon className="text-3xl" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-600 group-hover:text-[#1f3f77] text-center transition-colors tracking-wide">Electronics</span>
</a>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-12">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-gray-900 mb-1">Top Cars Near You</h2>
<p className="text-sm text-gray-500">Discover recently listed vehicles in your area.</p>
</div>
<a className="text-sm font-semibold text-[#1f3f77] hover:underline mb-1 hidden sm:inline-block" href="#">View all</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-semibold text-gray-700 shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 5
                        </div>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Mercedes-Benz C-Class 2022</h3>
<p className="text-xs text-gray-500 mb-3">Automatic • 15,000 km • Petrol</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$45,000</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> New York</span>
<span>2 hours ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Chevrolet Corvette Stingray</h3>
<p className="text-xs text-gray-500 mb-3">Automatic • 5,200 km • Petrol</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$68,500</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Los Angeles</span>
<span>5 hours ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">BMW 4 Series Gran Coupe</h3>
<p className="text-xs text-gray-500 mb-3">Automatic • 22,000 km • Hybrid</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$41,200</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Chicago</span>
<span>1 day ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Audi e-tron GT 2023</h3>
<p className="text-xs text-gray-500 mb-3">Automatic • 1,500 km • Electric</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$95,000</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Miami</span>
<span>2 days ago</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-12">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-semibold text-gray-900 mb-1">Popular Properties</h2>
<p className="text-sm text-gray-500">Find your dream home or next investment.</p>
</div>
<a className="text-sm font-semibold text-[#1f3f77] hover:underline mb-1 hidden sm:inline-block" href="#">View all</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Modern Villa with Pool</h3>
<p className="text-xs text-gray-500 mb-3">4 Beds • 3 Baths • 2,500 sqft</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$850,000</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Beverly Hills</span>
<span>1 week ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Luxury Downtown Apartment</h3>
<p className="text-xs text-gray-500 mb-3">2 Beds • 2 Baths • 1,200 sqft</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$3,500 / mo</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Seattle</span>
<span>3 days ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Minimalist Family House</h3>
<p className="text-xs text-gray-500 mb-3">3 Beds • 2 Baths • 1,800 sqft</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$420,000</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Austin</span>
<span>5 hours ago</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer flex flex-col">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="House" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-1">Cozy Suburban Cottage</h3>
<p className="text-xs text-gray-500 mb-3">2 Beds • 1 Bath • 950 sqft</p>
<div className="text-xl font-semibold text-[#1f3f77] mb-5 mt-auto tracking-tight">$280,000</div>
<div className="flex items-center justify-between text-[11px] font-medium text-gray-400 pt-4 border-t border-gray-50 uppercase tracking-wider">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Portland</span>
<span>1 day ago</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-16">
<div className="bg-[#1f3f77] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-lg border border-blue-900">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-white mb-4 leading-tight">
                        Experience the Magic of the eClassify App
                    </h2>
<p className="text-blue-100 text-sm md:text-base mb-0">
                        Buy, sell, and chat on the go. Download our free app and never miss a great deal again. Available on iOS and Android.
                    </p>
</div>
<div className="relative z-10 flex flex-col sm:flex-row gap-4">

<button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-gray-800 shadow-md">
<iconify-icon className="text-2xl" icon="ic:baseline-apple"></iconify-icon>
<div className="text-left flex flex-col justify-center">
<span className="text-[10px] uppercase tracking-wider text-gray-300 leading-none mb-1">Download on the</span>
<span className="text-sm font-semibold leading-none">App Store</span>
</div>
</button>

<button className="bg-black text-white px-5 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors border border-gray-800 shadow-md">
<iconify-icon className="text-2xl text-white" icon="ion:logo-google-playstore"></iconify-icon>
<div className="text-left flex flex-col justify-center">
<span className="text-[10px] uppercase tracking-wider text-gray-300 leading-none mb-1">GET IT ON</span>
<span className="text-sm font-semibold leading-none">Google Play</span>
</div>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-xl tracking-tight font-semibold text-[#1f3f77] flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-2xl" icon="solar:shop-2-linear" strokeWidth="1.5"></iconify-icon>
                    eClassify
                </a>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    The leading global classifieds marketplace platform. We connect buyers and sellers in local communities to buy, sell and find just about everything.
                </p>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide uppercase">Company</h4>
<ul className="flex flex-col gap-3 text-sm text-gray-500">
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Subscription</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Our Blog</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">FAQs</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide uppercase">Quick Links</h4>
<ul className="flex flex-col gap-3 text-sm text-gray-500">
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Post an Ad</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Find a Store</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Promote your Ad</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#1f3f77] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-6 tracking-wide uppercase">Get in touch</h4>
<ul className="flex flex-col gap-4 text-sm text-gray-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#1f3f77] transition-colors" href="mailto:hello@eclassify.com">hello@eclassify.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#1f3f77] transition-colors" href="tel:+1234567890">+1 (234) 567-890</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>123 Marketplace Ave,<br/>San Francisco, CA 94103</span>
</li>
</ul>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-6">
<p className="text-xs text-gray-400">
                © 2024 eClassify Marketplace. All rights reserved.
            </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:twitter"></iconify-icon></a>
<a className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:facebook"></iconify-icon></a>
<a className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon></a>
<a className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 hover:text-[#1f3f77] transition-colors" href="#"><iconify-icon className="text-lg" icon="mdi:linkedin"></iconify-icon></a>
</div>
<div className="flex items-center gap-3">

<button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
<iconify-icon className="text-base" icon="ic:baseline-apple"></iconify-icon>
<div className="text-left flex flex-col justify-center">
<span className="text-[7px] uppercase tracking-wider text-gray-300 leading-none">Download on</span>
<span className="text-[10px] font-semibold leading-none mt-0.5">App Store</span>
</div>
</button>
<button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
<iconify-icon className="text-base" icon="ion:logo-google-playstore"></iconify-icon>
<div className="text-left flex flex-col justify-center">
<span className="text-[7px] uppercase tracking-wider text-gray-300 leading-none">Get it on</span>
<span className="text-[10px] font-semibold leading-none mt-0.5">Google Play</span>
</div>
</button>
</div>
</div>
</footer>

    </>
  );
}
