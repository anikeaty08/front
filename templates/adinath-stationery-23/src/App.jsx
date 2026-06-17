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
      

<main className="w-full max-w-md bg-white min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden border-x border-zinc-100">

<header className="pt-6 pb-2 px-5 sticky top-0 bg-white z-40">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">

<div className="bg-zinc-900 text-white w-7 h-7 rounded flex items-center justify-center">
<span className="font-semibold text-sm">A</span>
</div>
<span className="tracking-tighter font-semibold text-lg text-zinc-900">ADINATH</span>
</div>
<div className="flex items-center gap-4 text-zinc-600">
<button className="relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
</button>
<button className="relative">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full leading-none">3</span>
</button>
</div>
</div>

<div className="flex gap-2">
<div className="flex-1 bg-zinc-100/80 hover:bg-zinc-100 transition-colors rounded-xl flex items-center px-4 py-3 border border-zinc-200/50 focus-within:border-zinc-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-zinc-100">
<iconify-icon className="text-zinc-400 mr-2" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none w-full text-sm placeholder-zinc-400 text-zinc-800" placeholder="Search A4 reams, pens, bulk..." type="text"/>
</div>
<button className="bg-zinc-100/80 hover:bg-zinc-100 border border-zinc-200/50 rounded-xl px-4 flex items-center justify-center text-zinc-600 transition-colors">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar pb-24">

<section className="mt-2 mb-4">
<div className="flex overflow-x-auto no-scrollbar gap-2 px-5 py-1">
<button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm shadow-zinc-200">All Items</button>
<button className="bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-zinc-50">Wholesale &amp; Bulk</button>
<button className="bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-zinc-50">Student</button>
<button className="bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-zinc-50">Office</button>
<button className="bg-white border border-zinc-200 text-zinc-600 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-zinc-50">Lamination</button>
</div>
</section>

<section className="px-5 mb-8">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 p-6 flex flex-col justify-between items-start aspect-[2/1]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
<div className="relative z-10">
<span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-md tracking-wide uppercase border border-blue-500/30">Bulk Offer</span>
<h2 className="text-white text-xl font-semibold tracking-tight mt-3 leading-snug">Stock up on A4 Reams<br/>for the new quarter.</h2>
</div>
<div className="relative z-10 mt-4 flex items-center gap-2 text-zinc-300 text-sm">
<span>Extra 5% off on Cartons</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</section>

<section className="px-5 mb-6">
<div className="flex items-end justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Recommended for you</h3>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="#">See all</a>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl border border-zinc-100 p-4 flex items-center justify-center overflow-hidden transition-all group-hover:border-zinc-200">

<div className="absolute top-2.5 left-2.5 bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-700 text-xs flex items-center gap-1 px-1.5 py-0.5 rounded-md shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="12"></iconify-icon>
<span className="font-medium">4.8</span>
</div>

<iconify-icon className="text-zinc-300" icon="solar:documents-linear" strokeWidth="1" width="64"></iconify-icon>

<button className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shadow-sm hover:scale-105 transition-transform">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col px-1">
<span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">JK Copier</span>
<h4 className="text-sm font-medium text-zinc-800 leading-snug mt-1 line-clamp-2">A4 Paper Ream 70 GSM - 500 Sheets</h4>

<div className="mt-2 flex flex-col gap-1.5">
<div className="flex items-end gap-1.5">
<span className="text-base font-semibold text-zinc-900">₹350</span>
<span className="text-xs text-zinc-400">/unit</span>
</div>

<div className="inline-flex items-center self-start gap-1 rounded bg-blue-50/80 border border-blue-100 px-1.5 py-1">
<iconify-icon className="text-blue-600" icon="solar:box-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-blue-700 tracking-tight">₹280 wholesale (10+)</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl border border-zinc-100 p-4 flex items-center justify-center overflow-hidden transition-all group-hover:border-zinc-200">
<div className="absolute top-2.5 left-2.5 bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-700 text-xs flex items-center gap-1 px-1.5 py-0.5 rounded-md shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="12"></iconify-icon>
<span className="font-medium">4.5</span>
</div>
<iconify-icon className="text-zinc-300" icon="solar:layers-linear" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shadow-sm hover:scale-105 transition-transform">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col px-1">
<span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Excel</span>
<h4 className="text-sm font-medium text-zinc-800 leading-snug mt-1 line-clamp-2">A4 Lamination Pouch 125 Micron</h4>
<div className="mt-2 flex flex-col gap-1.5">
<div className="flex items-end gap-1.5">
<span className="text-base font-semibold text-zinc-900">₹450</span>
<span className="text-xs text-zinc-400">/pack</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3 mt-2">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl border border-zinc-100 p-4 flex items-center justify-center overflow-hidden transition-all group-hover:border-zinc-200">
<div className="absolute top-2.5 left-2.5 bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-700 text-xs flex items-center gap-1 px-1.5 py-0.5 rounded-md shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="12"></iconify-icon>
<span className="font-medium">4.9</span>
</div>
<iconify-icon className="text-zinc-300" icon="solar:notebook-minimalistic-linear" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shadow-sm hover:scale-105 transition-transform">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col px-1">
<span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Classmate</span>
<h4 className="text-sm font-medium text-zinc-800 leading-snug mt-1 line-clamp-2">Student Notebook 120 Pages Single Rule</h4>
<div className="mt-2 flex flex-col gap-1.5">
<div className="flex items-end gap-1.5">
<span className="text-base font-semibold text-zinc-900">₹40</span>
<span className="text-xs text-zinc-400">/unit</span>
</div>
<div className="inline-flex items-center self-start gap-1 rounded bg-blue-50/80 border border-blue-100 px-1.5 py-1">
<iconify-icon className="text-blue-600" icon="solar:copy-linear" width="12"></iconify-icon>
<span className="text-xs font-medium text-blue-700 tracking-tight">₹28 bundle (10+)</span>
</div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3 mt-2">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-2xl border border-zinc-100 p-4 flex items-center justify-center overflow-hidden transition-all group-hover:border-zinc-200">
<div className="absolute top-2.5 left-2.5 bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-700 text-xs flex items-center gap-1 px-1.5 py-0.5 rounded-md shadow-sm">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="12"></iconify-icon>
<span className="font-medium">4.2</span>
</div>

<iconify-icon className="text-zinc-300" icon="solar:magic-stick-2-linear" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white border border-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shadow-sm hover:scale-105 transition-transform">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col px-1">
<span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Pidilite</span>
<h4 className="text-sm font-medium text-zinc-800 leading-snug mt-1 line-clamp-2">Fevistik Glue Stick - Large 15g</h4>
<div className="mt-2 flex flex-col gap-1.5">
<div className="flex items-end gap-1.5">
<span className="text-base font-semibold text-zinc-900">₹35</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-5 mt-8 border-t border-zinc-100 pt-6">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-4">Browse by Category</h3>
<ul className="flex flex-col gap-3">
<li>
<a className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center text-zinc-600 shadow-sm">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-zinc-900">Wholesale &amp; Bulk</span>
<span className="block text-xs text-zinc-500 mt-0.5">Cartons, Reams, Bulk Pens</span>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</li>
<li>
<a className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center text-zinc-600 shadow-sm">
<iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-zinc-900">Office Essentials</span>
<span className="block text-xs text-zinc-500 mt-0.5">Files, Folders, Diaries, Markers</span>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</li>
</ul>
</section>
</div>

<nav className="absolute bottom-0 w-full glass-nav border-t border-zinc-200/60 px-6 py-3 pb-8 z-50">
<div className="flex justify-between items-center">
<a className="flex flex-col items-center gap-1 text-zinc-900" href="#">
<iconify-icon icon="solar:home-smile-bold" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:widget-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Catalog</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors relative" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Orders</span>

<span className="absolute top-0 right-1 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Account</span>
</a>
</div>
</nav>
</main>

    </>
  );
}
