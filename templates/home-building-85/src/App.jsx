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
      
<div className="max-w-md mx-auto bg-white min-h-screen flex flex-col shadow-2xl relative">

<header className="px-6 pt-6 pb-4 bg-white sticky top-0 z-20">
<div className="flex justify-between items-center">
<div className="flex flex-col">
<h1 className="text-xl font-bold tracking-tight text-slate-900">Khan Home</h1>
<span className="text-xs text-slate-500 font-medium tracking-tight">Building Materials UAE</span>
</div>
<div className="flex space-x-2">
<a className="p-2 rounded-full bg-amber-50 text-amber-600 border border-amber-100" href="tel:0503581566">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<button className="p-2 rounded-full bg-slate-50 text-slate-600 border border-slate-100 relative">
<iconify-icon height="20" icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</div>

<div className="mt-4 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition duration-150 ease-in-out" placeholder="Search sinks, mirrors, tiles..." type="text"/>
</div>
</header>

<main className="flex-1 px-6 pb-24 overflow-y-auto">

<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 text-white mb-6 shadow-lg relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
<div className="flex flex-col relative z-10">
<div className="flex items-start justify-between">
<div>
<div className="inline-flex items-center space-x-1 bg-white/10 px-2 py-1 rounded-lg backdrop-blur-sm mb-3">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide uppercase">Premium Quality</span>
</div>
<h3 className="font-semibold text-lg leading-tight mb-1">Dragon Mart Showroom</h3>
<p className="text-sm text-slate-300 opacity-90 leading-snug max-w-[200px]">
                Shop# DHFF-11 18-19<br/>International City, Dubai
              </p>
</div>
<div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">
<iconify-icon height="24" icon="solar:shop-2-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400 mb-0.5">Sales &amp; Support</span>
<a className="text-xl font-bold tracking-tight text-white flex items-center gap-1" href="tel:0503581566">
                050 358 1566
                <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<a className="bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-semibold hover:bg-slate-100 transition-colors" href="tel:0503581566">
              Call Now
            </a>
</div>
</div>
</div>

<div className="flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Our Collections</h2>
<a className="text-xs font-medium text-amber-600 hover:text-amber-700" href="#">View All</a>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">

<a className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300" href="#">
<div className="h-28 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url(\'https://khan-home.s3.ap-south-1.amazonaws.com/category/thumbnail/thumbnail-5Z4l9Ba1693749027.jpg\')'}}></div>
<div className="p-3 bg-white relative">
<h3 className="font-medium text-slate-900 text-sm">Stone Items</h3>
<p className="text-[10px] text-slate-500 mt-0.5">Marble &amp; Granite</p>
<div className="absolute right-3 top-3 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</a>

<a className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300" href="#">
<div className="h-28 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url(\'https://khan-home.s3.ap-south-1.amazonaws.com/category/thumbnail/thumbnail-74MprNj1694596293.jpg\')'}}></div>
<div className="p-3 bg-white relative">
<h3 className="font-medium text-slate-900 text-sm">Modern WC</h3>
<p className="text-[10px] text-slate-500 mt-0.5">Ceramic &amp; Smart</p>
<div className="absolute right-3 top-3 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</a>

<a className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300" href="#">
<div className="h-28 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url(\'https://khan-home.s3.ap-south-1.amazonaws.com/category/thumbnail/thumbnail-12OFFuvG1695558026.jpg\')'}}></div>
<div className="p-3 bg-white relative">
<h3 className="font-medium text-slate-900 text-sm">Cabinets</h3>
<p className="text-[10px] text-slate-500 mt-0.5">Marble, MDF, Steel</p>
<div className="absolute right-3 top-3 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</a>

<a className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300" href="#">
<div className="h-28 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{backgroundImage: 'url(\'https://khan-home.s3.ap-south-1.amazonaws.com/category/thumbnail/thumbnail-283RyKsB1697119901.jpg\')'}}></div>
<div className="p-3 bg-white relative">
<h3 className="font-medium text-slate-900 text-sm">Mirrors</h3>
<p className="text-[10px] text-slate-500 mt-0.5">LED &amp; Decorative</p>
<div className="absolute right-3 top-3 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</a>
</div>

<h2 className="text-lg font-semibold mb-4 text-slate-900 tracking-tight">Trending Now</h2>
<div className="space-y-3">

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200">
<img alt="Stone 004M" className="w-full h-full object-cover" src="https://khan-home.s3.ap-south-1.amazonaws.com/products/picture/picture-10MnpiQT1693755840.jpg"/>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-sm text-slate-900">Stone Item 004M</h3>
<p className="text-xs text-slate-500 mt-0.5">Natural Stone Finish</p>
</div>
<span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">New</span>
</div>
<div className="mt-2 flex items-center text-xs font-medium text-slate-600">
<span className="text-slate-400">Code:</span> 004M
            </div>
</div>
<div className="ml-2 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200">
<img alt="WC Ivory" className="w-full h-full object-cover" src="https://khan-home.s3.ap-south-1.amazonaws.com/products/picture/picture-240L1UhpR1694596847.jpg"/>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-sm text-slate-900">WC A3005 Ivory</h3>
<p className="text-xs text-slate-500 mt-0.5">L-175 Series</p>
</div>
</div>
<div className="mt-2 flex items-center text-xs font-medium text-slate-600">
<span className="text-slate-400">In Stock</span>
</div>
</div>
<div className="ml-2 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center hover:bg-slate-50 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden border border-slate-200">
<img alt="Cabinet" className="w-full h-full object-cover" src="https://khan-home.s3.ap-south-1.amazonaws.com/products/picture/picture-297utBQOA1695558151.jpg"/>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-sm text-slate-900">MDF Cabinet 1204</h3>
<p className="text-xs text-slate-500 mt-0.5">Marble Top + MDF</p>
</div>
</div>
<div className="mt-2 flex items-center text-xs font-medium text-slate-600">
<span className="text-slate-400">Size:</span> 120cm
            </div>
</div>
<div className="ml-2 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="mt-6 bg-amber-50 rounded-2xl p-4 border border-amber-100">
<div className="flex items-center space-x-3">
<div className="p-2 bg-white rounded-full text-amber-500 shadow-sm">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Product Demos</h4>
<p className="text-xs text-slate-600">Watch our latest installation videos</p>
</div>
<div className="ml-auto">
<iconify-icon className="text-amber-500" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 z-30 pb-safe">
<div className="flex justify-between items-center max-w-md mx-auto">
<button className="flex flex-col items-center text-amber-600">
<iconify-icon height="24" icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:widget-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1">Categories</span>
</button>
<div className="relative -top-5">
<a className="flex items-center justify-center w-14 h-14 bg-slate-900 rounded-full text-white shadow-lg shadow-slate-900/20 hover:scale-105 transition-transform" href="tel:0503581566">
<iconify-icon height="24" icon="solar:phone-calling-bold" width="24"></iconify-icon>
</a>
</div>
<button className="flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1">Orders</span>
</button>
<button className="flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon height="24" icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium mt-1">Account</span>
</button>
</div>
</nav>
</div>

    </>
  );
}
