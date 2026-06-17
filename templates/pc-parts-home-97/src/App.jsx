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



        lucide.createIcons();
    
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
      

<div className="flex text-sm font-normal text-white text-center bg-red-600 pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center justify-center">
<span className="">Free Baguio City Delivery &amp; Pickup</span>
<span className="opacity-50">•</span>
<span className="">Cash on Delivery Available</span>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="sm:px-6 lg:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-3" href="#">
<img alt="PC ni Juan" className="bg-center w-auto h-16 object-cover drop-shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c2e1de4-0a05-439b-82fa-2bf02fe52fbe_800w.png"/>
<span className="text-xl font-semibold text-gray-900 tracking-tight">PC ni JUAN</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-normal text-gray-600 hover:text-gray-900 transition-colors" href="#">Shop Parts</a>
<a className="hover:text-blue-800 transition-colors flex items-center gap-1 text-base font-normal text-red-700" href="#">
<i data-lucide="wand-2" height="18" strokeWidth="1.5" width="18"></i>
                    PC Builder
                </a>
<a className="hover:text-gray-900 transition-colors text-base font-normal text-gray-600" href="#">Services</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden sm:flex focus-within:ring-2 focus-within:ring-blue-500 transition-all bg-gray-100 rounded-full pt-2 pr-3 pb-2 pl-3 items-center">
<i className="text-gray-400" data-lucide="search" height="18" strokeWidth="1.5" width="18"></i>
<input className="border-none focus:outline-none placeholder-gray-400 text-base text-gray-700 bg-transparent w-48 pr-2 pl-2" placeholder="Search GPUs, CPUs..." type="text"/>
</div>
<button className="p-2 text-gray-500 hover:text-gray-900 transition-colors relative">
<i data-lucide="shopping-cart" height="24" strokeWidth="1.5" width="24"></i>
<span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
<i data-lucide="user" height="24" strokeWidth="1.5" width="24"></i>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="overflow-hidden bg-white border-gray-200 border-b relative">
<div className="sm:px-6 lg:px-8 md:py-24 grid md:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 gap-x-12 gap-y-12 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-800 text-sm font-normal mb-6 border border-yellow-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                        New RTX 40-Series Restock
                    </div>
<h1 className="md:text-5xl leading-tight text-4xl font-medium text-gray-900 tracking-tight font-google-sans-flex mb-6">Build your dream rig!<br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#f43e3e] to-red-600">Walang drama, puro frames!</span></h1>
<p className="leading-relaxed text-lg font-normal text-gray-500 mb-8">
                        Baguio's trusted source for premium PC components. Fast local pickup, reliable warranty, and honest advice. Wag na pag-isipan, let's build!
                    </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="bg-gray-900 text-white px-6 py-3.5 rounded-xl text-base font-normal hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2">
                            Shop Components
                            <i data-lucide="arrow-right" height="18" strokeWidth="1.5" width="18"></i>
</button>
<button className="hover:bg-gray-50 transition-all flex gap-2 text-base font-normal text-gray-700 bg-white border-gray-200 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 gap-x-2 gap-y-2 items-center justify-center">Open PC Builder<i data-lucide="settings" height="18" strokeWidth="1.5" width="18"></i></button>
</div>
</div>

<div className="relative w-full h-72 md:h-[400px] rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 shadow-inner overflow-hidden flex items-center justify-center">
<div className="bg-red-700 opacity-[0.03] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="flex flex-col transform hover:rotate-0 transition-transform duration-500 z-10 bg-white w-60 h-80 border-gray-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative shadow-xl rotate-[-6deg]">
<div className="flex bg-blue-200 w-full h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10ed5559-3618-409d-aa0d-e571ddfedc27_800w.png)] bg-cover rounded-xl mb-5 items-center justify-center">
</div>
<div className="bg-gray-200 w-3/4 h-3 rounded-full mb-3">Intel i 9900k</div>
<div className="bg-gray-100 w-1/2 h-3 rounded-full">RTX 5090</div>
<div className="flex mt-auto items-center justify-between">
<div className="text-base font-medium tracking-tight">₱25,000</div>
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">
<i data-lucide="plus" height="16" strokeWidth="1.5" width="16"></i>
</div>
</div>
</div>
<div className="flex transform bg-center z-0 bg-white/60 w-36 h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13614a25-9e44-4204-a76c-2ed3a6712c30_320w.jpg)] bg-contain border-white/40 border rounded-2xl absolute top-12 right-8 shadow-lg backdrop-blur-md rotate-[12deg] items-center justify-center">
</div>
</div>
</div>
</section>

<section className="border-b border-gray-200 bg-white">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
<div className="flex flex-col items-center gap-3">
<div className="flex text-red-700 bg-blue-50 w-12 h-12 rounded-full items-center justify-center">
<i data-lucide="map-pin" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base font-normal tracking-tight text-gray-900">Baguio Local Pickup</h3>
<p className="text-sm text-gray-500">Get it today at our store</p>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<i data-lucide="banknote" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base font-normal tracking-tight text-gray-900">Cash on Delivery</h3>
<p className="text-sm text-gray-500">Pay when it arrives</p>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<i data-lucide="shield-check" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base font-normal tracking-tight text-gray-900">Official Warranty</h3>
<p className="text-sm text-gray-500">1-year minimum on all parts</p>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
<i data-lucide="message-circle" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="text-base font-normal tracking-tight text-gray-900">Fast Support</h3>
<p className="text-sm text-gray-500">Message us on Viber/FB</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="flex items-center justify-between mb-10">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Fresh Drops &amp; Bestsellers</h2>
<p className="text-base text-gray-500 mt-2">Sought-after parts. Limit 2 per customer.</p>
</div>

<div className="hidden sm:flex items-center gap-3">
<span className="text-sm font-normal text-gray-500">Sort by:</span>
<button className="flex gap-1.5 hover:bg-gray-50 transition-colors text-base font-normal text-gray-900 bg-white border-gray-200 border rounded-lg pt-2 pr-4 pb-2 pl-4 gap-x-1.5 gap-y-1.5 items-center">
                        Popularity
                        <i data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
<span className="bg-red-100 text-red-700 text-sm font-medium px-2.5 py-1 rounded-md tracking-tight">Last 2 Pcs</span>
</div>
<div className="aspect-square flex bg-gray-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="flex transform group-hover:scale-105 transition-transform duration-300 bg-white w-3/4 h-3/4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb52f2de-d2f7-4947-bfbb-6bd1bfcbf895_320w.jpg)] bg-cover border-gray-100 border rounded-xl shadow-sm items-center justify-center">
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-sm text-gray-500 mb-2">Graphics Card</div>
<h3 className="leading-tight line-clamp-2 text-base font-normal text-gray-900 h-12 mb-3">NVIDIA GeForce RTX 4060 Ti 8GB Dual Fan</h3>
<div className="mt-auto flex items-end justify-between mb-5">
<span className="text-xl font-medium tracking-tight text-gray-900">₱24,950</span>
<span className="text-sm text-green-600 font-normal flex items-center gap-1.5">
<i data-lucide="check-circle-2" height="16" strokeWidth="1.5" width="16"></i> In Stock
                            </span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-normal hover:bg-gray-50 transition-colors">Details</button>
<button className="w-full bg-gray-900 text-white rounded-xl py-2.5 text-sm font-normal hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
<i data-lucide="shopping-cart" height="18" strokeWidth="1.5" width="18"></i> Add
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
<span className="bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-1 rounded-md tracking-tight">Bestseller</span>
</div>
<div className="aspect-square flex bg-gray-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="flex transform group-hover:scale-105 transition-transform duration-300 bg-white w-3/4 h-3/4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7885c9e0-e4a5-469a-ae1a-7ba06a7c4943_320w.jpg)] bg-contain border-gray-100 border rounded-xl shadow-sm items-center justify-center">
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-sm text-gray-500 mb-2">Processor</div>
<h3 className="text-base font-normal text-gray-900 mb-3 leading-tight h-12 line-clamp-2">AMD Ryzen 5 7600X 6-Core 12-Thread AM5</h3>
<div className="mt-auto flex items-end justify-between mb-5">
<span className="text-xl font-medium tracking-tight text-gray-900">₱13,200</span>
<span className="text-sm text-green-600 font-normal flex items-center gap-1.5">
<i data-lucide="check-circle-2" height="16" strokeWidth="1.5" width="16"></i> In Stock
                            </span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-normal hover:bg-gray-50 transition-colors">Details</button>
<button className="w-full bg-gray-900 text-white rounded-xl py-2.5 text-sm font-normal hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
<i data-lucide="shopping-cart" height="18" strokeWidth="1.5" width="18"></i> Add
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative">
<div className="aspect-square flex bg-gray-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="flex transform group-hover:scale-105 transition-transform duration-300 bg-white w-3/4 h-3/4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a9ab937-6782-4f9d-883b-a08ee1f74d3d_800w.jpg)] bg-cover bg-center border-gray-100 border rounded-xl shadow-sm items-center justify-center">
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-sm text-gray-500 mb-2">Memory (RAM)</div>
<h3 className="text-base font-normal text-gray-900 mb-3 leading-tight h-12 line-clamp-2">Corsair Vengeance 32GB (2x16GB) DDR5 6000MHz</h3>
<div className="mt-auto flex items-end justify-between mb-5">
<span className="text-xl font-medium tracking-tight text-gray-900">₱7,150</span>
<span className="text-sm text-green-600 font-normal flex items-center gap-1.5">
<i data-lucide="check-circle-2" height="16" strokeWidth="1.5" width="16"></i> In Stock
                            </span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-normal hover:bg-gray-50 transition-colors">Details</button>
<button className="w-full bg-gray-900 text-white rounded-xl py-2.5 text-sm font-normal hover:bg-gray-800 transition-colors flex items-center justify-center gap-1.5">
<i data-lucide="shopping-cart" height="18" strokeWidth="1.5" width="18"></i> Add
                            </button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
<span className="bg-gray-100 text-gray-600 text-sm font-medium px-2.5 py-1 rounded-md tracking-tight">Pre-order</span>
</div>
<div className="aspect-square flex bg-gray-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
<i className="text-gray-300" data-lucide="monitor" height="64" strokeWidth="1.5" width="64"></i>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-sm text-gray-500 mb-2">Monitor</div>
<h3 className="text-base font-normal text-gray-900 mb-3 leading-tight h-12 line-clamp-2">LG UltraGear 27" 165Hz 1440p IPS Gaming Monitor</h3>
<div className="mt-auto flex items-end justify-between mb-5">
<span className="text-xl font-medium tracking-tight text-gray-900">₱16,500</span>
<span className="text-sm text-amber-600 font-normal flex items-center gap-1.5">
<i data-lucide="clock" height="16" strokeWidth="1.5" width="16"></i> ETA: 5 Days
                            </span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-normal hover:bg-gray-50 transition-colors">Details</button>
<button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 text-sm font-normal hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                                Reserve
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
<div className="bg-gray-900 rounded-3xl overflow-hidden relative border border-gray-800">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent"></div>
<div className="z-10 md:py-24 md:px-20 flex flex-col md:flex-row gap-10 bg-red-700 pt-20 pr-8 pb-20 pl-8 relative gap-x-10 gap-y-10 items-center justify-between">
<div className="md:text-left text-center max-w-xl">
<h2 className="md:text-4xl text-3xl font-medium text-amber-200 tracking-tight mb-5">Not sure if it's compatible?</h2>
<p className="md:text-lg text-base font-normal text-orange-200 mb-10">
                            Our smart PC Builder tool ensures all your selected parts work perfectly together. Skip the Google searches and build with confidence.
                        </p>
<button className="hover:bg-gray-100 transition-colors inline-flex text-base font-normal text-gray-900 bg-white rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2.5 gap-y-2.5 items-center">
<i data-lucide="wand-2" height="20" strokeWidth="1.5" width="20"></i>
                            Start Smart Builder
                        </button>
</div>
<div className="hidden md:flex flex-col gap-5">
<div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full p-2.5 pr-8 border border-white/10">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<i data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
</div>
<span className="text-base font-normal text-white tracking-tight">Motherboard Compatible</span>
</div>
<div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full p-2.5 pr-8 border border-white/10 ml-10">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<i data-lucide="check" height="20" strokeWidth="1.5" width="20"></i>
</div>
<span className="text-base font-normal text-white tracking-tight">PSU Wattage Sufficient</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-gray-200 border-t mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
<div className="md:col-span-1">
<img alt="PC ni Juan Logo" className="w-auto h-16 mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/859aff03-cc7c-46e1-b310-16805b53d981_800w.png"/>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">
                        Baguio's friendly neighborhood PC store. We build machines that last, with zero drama and maximum performance.
                    </p>
<div className="flex gap-5">
<a className="text-gray-400 hover:text-blue-700 transition-colors" href="#">
<i data-lucide="phone" height="24" strokeWidth="1.5" width="24"></i>
</a>
<a className="text-gray-400 hover:text-blue-700 transition-colors" href="#">
<i data-lucide="mail" height="24" strokeWidth="1.5" width="24"></i>
</a>
</div>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-5">Shop Categories</h4>
<ul className="space-y-4 text-base text-gray-500 font-normal">
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Processors (CPU)</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Graphics Cards (GPU)</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Motherboards</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Memory &amp; Storage</a></li>
</ul>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-5">Customer Care</h4>
<ul className="space-y-4 text-base text-gray-500 font-normal">
<li><a className="hover:text-gray-900 transition-colors" href="#">Track Order</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Warranty &amp; Returns</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Shipping Info</a></li>
<li className=""><a className="hover:text-gray-900 transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
<div className="">
<h4 className="text-base font-medium tracking-tight text-gray-900 mb-5">Visit Us</h4>
<ul className="space-y-4 text-base text-gray-500 font-normal">
<li className="flex items-start gap-3">
<i className="mt-0.5 text-gray-400 shrink-0" data-lucide="map-pin" height="20" strokeWidth="1.5" width="20"></i>
<span>Session Road, Baguio City<br/>Benguet, Philippines 2600</span>
</li>
<li className="flex items-center gap-3">
<i className="text-gray-400 shrink-0" data-lucide="clock" height="20" strokeWidth="1.5" width="20"></i>
                            Mon-Sat: 9AM - 6PM
                        </li>
</ul>
</div>
</div>
<div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-gray-400 font-normal">© 2023 PC ni Juan. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-gray-400 font-normal">
<span>Accepting:</span>
<span className="px-2.5 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-gray-600 tracking-tight">GCash</span>
<span className="px-2.5 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-gray-600 tracking-tight">Maya</span>
<span className="px-2.5 py-1.5 border border-gray-200 rounded-md bg-gray-50 text-gray-600 tracking-tight">COD</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
