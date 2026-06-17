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
      

<div className="bg-stone-800 text-stone-100 py-2.5 text-center text-xs font-medium tracking-wide uppercase">
        Free shipping on orders over $50
    </div>

<header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<button className="md:hidden text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter text-stone-900 flex-1 text-center md:text-left md:flex-none" href="#">
                STL.
            </a>

<nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#">Recipes</a>
<a className="hover:text-stone-900 transition-colors" href="#">Wholesale</a>
</nav>

<div className="flex items-center gap-4 flex-1 justify-end md:flex-none text-stone-600">
<a className="hover:text-stone-900 transition-colors hidden sm:block" href="#">
<iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
</a>
<a className="hover:text-stone-900 transition-colors relative flex items-center" href="#">
<iconify-icon height="24" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-amber-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium shadow-sm">2</span>
</a>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-7 flex flex-row gap-3 sm:gap-4 sticky top-24 items-start">

<div className="flex flex-col gap-3 sm:gap-4 w-16 sm:w-20 shrink-0">
<button className="aspect-square bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-800 transition-all">
<img alt="Thumb 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/218bc9a9-1b4f-4f8e-9ef3-35cb0bd07a16_1600w.jpg"/>
</button>
<button className="aspect-square bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-200 hover:border-stone-800 transition-colors opacity-70 hover:opacity-100">
<img alt="Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</button>
<button className="aspect-square bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-200 hover:border-stone-800 transition-colors opacity-70 hover:opacity-100">
<img alt="Ingredients" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</button>
<button className="aspect-square bg-stone-100 rounded-xl overflow-hidden border-2 border-stone-200 hover:border-stone-800 transition-colors opacity-70 hover:opacity-100 flex items-center justify-center bg-stone-200/50">
<iconify-icon className="text-stone-500" height="28" icon="solar:play-circle-linear" width="28"></iconify-icon>
</button>
</div>

<div className="aspect-[4/5] sm:aspect-square flex-1 bg-stone-100 rounded-2xl overflow-hidden border-2 border-stone-800 group relative">
<img alt="Naked Organic Peanut Butter Jar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/218bc9a9-1b4f-4f8e-9ef3-35cb0bd07a16_1600w.jpg"/>

<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className="bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-stone-200 tracking-tight uppercase">Best Seller</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col">

<div className="mb-6">
<nav aria-label="Breadcrumb" className="flex text-xs text-stone-500 mb-3 font-medium">
<a className="hover:text-stone-800" href="#">Home</a>
<span className="mx-2">/</span>
<a className="hover:text-stone-800" href="#">Nut Butters</a>
</nav>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900 mb-3">NAKED PB</h1>
<div className="flex items-center gap-2">
<div className="flex text-amber-500">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors" href="#reviews">
                            4.9 (1,284 reviews)
                        </a>
</div>
</div>

<p className="text-base text-stone-600 mb-6 leading-relaxed">
                    Just one ingredient: Organic dry-roasted peanuts. No palm oil, no added sugar, no salt. Creamy, nutrient-dense, and crafted in Los Angeles.
                </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-100/80 text-xs font-medium text-stone-700 border border-stone-200">
<iconify-icon className="text-green-600" icon="solar:leaf-bold"></iconify-icon> USDA Organic
                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-100/80 text-xs font-medium text-stone-700 border border-stone-200">
<iconify-icon className="text-stone-400" icon="solar:shield-check-bold"></iconify-icon> Non-GMO
                    </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-100/80 text-xs font-medium text-stone-700 border border-stone-200">
<iconify-icon className="text-stone-400" icon="solar:close-circle-bold"></iconify-icon> No Seed Oils
                    </span>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-base font-semibold text-stone-900 tracking-tight">1. Choose quantity</h3>
<span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/50 px-2.5 py-1 rounded-full">Stock up &amp; save</span>
</div>
<div className="grid grid-cols-3 gap-2 sm:gap-3">

<label className="cursor-pointer relative jar-label group">
<input className="peer sr-only" name="bundle" type="radio" value="1"/>
<div className="h-full rounded-xl border-2 border-stone-200 bg-white p-2 text-center hover:border-amber-300 peer-checked:border-amber-800 peer-checked:bg-amber-50/30 transition-all flex flex-col items-center pb-3">
<div className="w-full aspect-square rounded-lg bg-stone-100 mb-2 overflow-hidden border border-stone-200/50 flex items-center justify-center relative">
<div className="jar-anim-target relative z-10">

<div className="flex flex-col items-center drop-shadow-md">
<div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div>
<div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20">

<div className="absolute -right-[4px] top-0 w-[5px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out h-0 group-hover:h-8 z-30 rounded-b-sm">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-3 bg-amber-500 rounded-full shadow-sm"></div>
</div>
<div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50">
<span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span>
</div>
</div>
</div>
</div>
</div>
<div className="text-sm font-semibold text-stone-900 mb-0.5">1 Jar</div>
<div className="text-xs text-stone-500 font-medium">$14.99/ea</div>
</div>
</label>

<label className="cursor-pointer relative jar-label group">
<input checked="" className="peer sr-only" name="bundle" type="radio" value="3"/>
<div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full z-20 whitespace-nowrap shadow-sm">Popular</div>
<div className="h-full rounded-xl border-2 border-stone-200 bg-white p-2 text-center hover:border-amber-300 peer-checked:border-amber-800 peer-checked:bg-amber-50/30 transition-all flex flex-col items-center pb-3">
<div className="w-full aspect-square rounded-lg bg-stone-100 mb-2 overflow-hidden border border-stone-200/50 flex items-center justify-center relative">
<div className="jar-anim-target flex items-end justify-center -space-x-4 relative z-10">

<div className="transform -rotate-12 translate-y-1 opacity-90 scale-90">
<div className="flex flex-col items-center drop-shadow-md"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
<div className="z-10">
<div className="flex flex-col items-center drop-shadow-lg">
<div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div>
<div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20">

<div className="absolute -right-[4px] top-0 w-[5px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out h-0 group-hover:h-8 z-30 rounded-b-sm">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-3 bg-amber-500 rounded-full shadow-sm"></div>
</div>
<div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div>
</div>
</div>
</div>
<div className="transform rotate-12 translate-y-1 opacity-90 scale-90">
<div className="flex flex-col items-center drop-shadow-md"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
</div>
</div>
<div className="text-sm font-semibold text-stone-900 mb-0.5">3 Jars</div>
<div className="text-[10px] text-stone-400 line-through mb-0.5">$14.99</div>
<div className="text-xs font-semibold text-amber-800">$13.49/ea</div>
</div>
</label>

<label className="cursor-pointer relative jar-label group">
<input className="peer sr-only" name="bundle" type="radio" value="6"/>
<div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full z-20 whitespace-nowrap shadow-sm">Save 15%</div>
<div className="h-full rounded-xl border-2 border-stone-200 bg-white p-2 text-center hover:border-amber-300 peer-checked:border-amber-800 peer-checked:bg-amber-50/30 transition-all flex flex-col items-center pb-3">
<div className="w-full aspect-square rounded-lg bg-stone-100 mb-2 overflow-hidden border border-stone-200/50 flex items-center justify-center relative">
<div className="jar-anim-target flex flex-col items-center justify-center -space-y-6 mt-4 scale-[0.85] relative z-10">


<div className="flex items-end justify-center -space-x-3 opacity-90 scale-[0.85]">
<div className="transform -rotate-6">
<div className="flex flex-col items-center drop-shadow-md"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
<div className="z-10">
<div className="flex flex-col items-center drop-shadow-md"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
<div className="transform rotate-6">
<div className="flex flex-col items-center drop-shadow-md"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
</div>

<div className="flex items-end justify-center -space-x-3 z-10">
<div className="transform -rotate-12 translate-y-1">
<div className="flex flex-col items-center drop-shadow-lg"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
<div className="z-10">
<div className="flex flex-col items-center drop-shadow-xl">
<div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div>
<div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20">

<div className="absolute -right-[4px] top-0 w-[5px] bg-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out h-0 group-hover:h-8 z-30 rounded-b-sm">
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-3 bg-amber-500 rounded-full shadow-sm"></div>
</div>
<div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div>
</div>
</div>
</div>
<div className="transform rotate-12 translate-y-1">
<div className="flex flex-col items-center drop-shadow-lg"><div className="w-8 h-2 bg-stone-800 rounded-t-sm z-10 border-b border-stone-900"></div><div className="w-10 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-b-xl rounded-t-sm relative flex items-center justify-center -mt-[1px] shadow-inner border border-amber-900/20"><div className="w-7 h-6 bg-stone-50 rounded shadow-sm flex items-center justify-center border border-stone-200/50"><span className="text-[6px] font-bold tracking-tighter text-stone-900">STL.</span></div></div></div>
</div>
</div>
</div>
</div>
<div className="text-sm font-semibold text-stone-900 mb-0.5">6 Jars</div>
<div className="text-[10px] text-stone-400 line-through mb-0.5">$14.99</div>
<div className="text-xs font-semibold text-amber-800">$12.74/ea</div>
</div>
</label>
</div>
</div>

<div className="mb-8">
<h3 className="text-base font-semibold text-stone-900 tracking-tight mb-3">2. Choose purchase type</h3>
<div className="flex flex-col gap-3">

<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only" name="purchase_type" type="radio" value="subscribe"/>

<div className="absolute inset-0 rounded-xl ring-2 ring-transparent peer-checked:ring-amber-800 pointer-events-none transition-all z-10"></div>
<div className="relative rounded-xl border border-stone-200 bg-white overflow-hidden transition-all peer-checked:border-transparent">

<div className="bg-amber-100/80 px-4 py-2 border-b border-amber-200/50 flex justify-between items-center hidden peer-checked:flex">
<span className="text-xs font-semibold text-amber-900 uppercase tracking-wide">Most Popular</span>
<span className="text-xs font-semibold text-amber-900">Save an extra 15%</span>
</div>
<div className="p-4 sm:p-5 group-hover:bg-stone-50 peer-checked:bg-amber-50/30 transition-colors">
<div className="flex items-start gap-3 sm:gap-4">

<div className="w-5 h-5 rounded-full border-2 border-stone-300 mt-0.5 flex items-center justify-center group-hover:border-amber-500 peer-checked:border-amber-800 transition-colors shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-amber-800 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1">
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
<span className="text-base font-semibold text-stone-900 tracking-tight">Subscribe &amp; Save</span>
<div className="flex items-baseline gap-1.5 mt-1 sm:mt-0">
<span className="text-[11px] text-stone-400 line-through">$40.47</span>
<span className="text-lg font-semibold text-stone-900">$34.40</span>
</div>
</div>
<p className="text-xs text-stone-500 mb-4 font-medium">Cancel anytime. Never run out of PB.</p>

<div className="hidden peer-checked:block animate-fade-in relative">
<label className="sr-only">Delivery frequency</label>
<select className="w-full appearance-none bg-white border border-stone-200 text-stone-800 text-sm font-medium rounded-lg focus:ring-amber-800 focus:border-amber-800 block px-3 py-2.5 pr-8 shadow-sm">
<option>Ships every 30 days</option>
<option>Ships every 45 days</option>
<option>Ships every 60 days</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer relative group">
<input className="peer sr-only" name="purchase_type" type="radio" value="onetime"/>
<div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-5 hover:border-stone-300 peer-checked:border-stone-800 peer-checked:ring-2 peer-checked:ring-stone-800 transition-all">
<div className="flex items-center gap-3 sm:gap-4">

<div className="w-5 h-5 rounded-full border-2 border-stone-300 flex items-center justify-center group-hover:border-stone-500 peer-checked:border-stone-800 transition-colors shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-stone-800 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
<span className="text-sm font-semibold text-stone-900">One-time purchase</span>
<span className="text-base font-semibold text-stone-900 mt-1 sm:mt-0">$40.47</span>
</div>
</div>
</div>
</label>
</div>
</div>

<button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-5 px-6 rounded-xl text-lg transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2 mb-4">
                    Add to Cart — <span className="tracking-tight">$34.40</span>
</button>

<div className="bg-stone-100/50 border border-stone-200 rounded-xl p-4 flex items-start gap-3 mt-4">
<div className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon icon="solar:smile-circle-bold" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-0.5">100% Happiness Guarantee</h4>
<p className="text-xs text-stone-600 leading-relaxed">Not perfectly satisfied with your PB? Let us know within 30 days and we'll refund you in full. No questions asked.</p>
</div>
</div>
</div>
</div>
</main>

<section className="bg-stone-100/50 border-y border-stone-200 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200">
<img alt="Peanuts scattered" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-stone-100 max-w-[200px] hidden sm:block">
<div className="text-amber-800 mb-1"><iconify-icon icon="solar:star-fall-minimalistic-2-bold" width="24"></iconify-icon></div>
<p className="text-xs font-semibold text-stone-800">"The cleanest, best tasting peanut butter I've ever had."</p>
</div>
</div>
<div className="order-1 md:order-2 flex flex-col justify-center">
<h2 className="text-sm font-semibold tracking-wide text-amber-800 uppercase mb-3">Single Ingredient</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Nothing added.<br/>Nothing to hide.</h3>
<p className="text-base text-stone-600 mb-6 leading-relaxed">
                        We believe food should be simple. Our NAKED Organic Peanut Butter is made with exactly one ingredient: premium organic dry-roasted peanuts. 
                    </p>
<ul className="space-y-3 text-sm text-stone-700 font-medium mb-8">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
                            Zero palm oil or stabilizers
                        </li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
                            No added sugar or salt
                        </li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
                            Family owned, made in Los Angeles
                        </li>
</ul>
<a className="text-sm font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-colors inline-flex items-center gap-1 w-fit" href="#">
                        Read our story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900">Perfect Pairings</h2>
</div>
<div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

<div className="flex-1 flex flex-col sm:flex-row gap-6 w-full">

<div className="flex items-center gap-4 flex-1">
<div className="w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0 border border-stone-200">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1">This item</div>
<h4 className="text-sm font-semibold text-stone-900">NAKED Peanut Butter</h4>
<p className="text-sm text-stone-500 font-medium">$14.99</p>
</div>
</div>
<div className="hidden sm:flex items-center text-stone-300">
<iconify-icon icon="solar:add-circle-bold" width="24"></iconify-icon>
</div>

<label className="flex items-center gap-4 flex-1 cursor-pointer group">
<div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0 border border-stone-200 group-hover:border-stone-400 transition-colors">
<img alt="Raspberry Jam" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-stone-900">Artisan Raspberry Jam</h4>
<p className="text-sm text-stone-500 font-medium mb-2">$12.00</p>

<div className="flex items-center gap-2">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-stone-300 flex items-center justify-center bg-white peer-checked:bg-amber-800 peer-checked:border-amber-800 transition-colors">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs font-semibold text-stone-600">Add to bundle</span>
</div>
</div>
</label>
</div>

<div className="w-full md:w-auto bg-stone-50 p-5 rounded-xl border border-stone-200 flex flex-col gap-3 min-w-[240px]">
<div className="flex justify-between items-center text-sm">
<span className="text-stone-600 font-medium">Total price:</span>
<span className="font-semibold text-stone-900 text-lg">$26.99</span>
</div>
<button className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-colors shadow-sm">
                        Add both to cart
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-200">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8 text-center">How we love to spread it</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<a className="group block" href="#">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4 relative">
<img alt="Toast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-1">The Perfect Toast</h3>
<p className="text-sm text-stone-500 font-medium">Thick sourdough, generous spread, sea salt.</p>
</a>
<a className="group block" href="#">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4 relative">
<img alt="Smoothie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Protein Power Smoothie</h3>
<p className="text-sm text-stone-500 font-medium">A daily boost without the chalky powders.</p>
</a>
<a className="group block" href="#">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4 relative">
<img alt="Baking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Guilt-free Baking</h3>
<p className="text-sm text-stone-500 font-medium">Replaces butter in your favorite cookie recipes.</p>
</a>
</div>
</section>

<section className="bg-stone-900 text-stone-50 py-16 lg:py-24" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Loved by the community</h2>
<div className="flex items-center justify-center gap-2 mb-2">
<div className="flex text-amber-500">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold">4.9/5 Average</span>
</div>
<p className="text-sm text-stone-400 font-medium">Based on over 1,200 reviews</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 flex flex-col">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<h4 className="text-base font-semibold mb-2">Finally, a real peanut butter.</h4>
<p className="text-sm text-stone-300 flex-1 mb-6 leading-relaxed">
                        "I was so tired of finding palm oil in 'natural' peanut butters. This is literally just peanuts. The texture is incredibly smooth, and it separates naturally but stirs easily. On my 4th jar."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-semibold">S</div>
<div>
<div className="text-xs font-semibold">Sarah M.</div>
<div className="text-[10px] text-stone-400 flex items-center gap-1 font-medium"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 flex flex-col">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<h4 className="text-base font-semibold mb-2">The bundle is a lifesaver.</h4>
<p className="text-sm text-stone-300 flex-1 mb-6 leading-relaxed">
                        "With 3 kids, we go through peanut butter like water. Getting the 6-pack on subscription saves us money and means I never have to make a panic run to the store. Tastes amazing."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-semibold">J</div>
<div>
<div className="text-xs font-semibold">Jessica T.</div>
<div className="text-[10px] text-stone-400 flex items-center gap-1 font-medium"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-stone-800 rounded-2xl p-6 border border-stone-700 flex flex-col">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<h4 className="text-base font-semibold mb-2">Perfect for my smoothies.</h4>
<p className="text-sm text-stone-300 flex-1 mb-6 leading-relaxed">
                        "Because it's quite drippy and smooth, it blends into my morning shakes perfectly without clumping up at the bottom of the blender. Will definitely buy again."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-semibold">D</div>
<div>
<div className="text-xs font-semibold">David K.</div>
<div className="text-[10px] text-stone-400 flex items-center gap-1 font-medium"><iconify-icon icon="solar:verified-check-bold"></iconify-icon> Verified Buyer</div>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="px-6 py-3 rounded-xl border border-stone-600 text-sm font-semibold hover:bg-stone-800 transition-colors">
                    Read all reviews
                </button>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-stone-900 mb-4 block" href="#">STL.</a>
<p className="text-sm text-stone-500 mb-6 max-w-sm font-medium">
                        Bootstrapped, woman and minority-owned. Crafting clean, premium nut butters and artisan jams in Los Angeles since 2012.
                    </p>

<form className="flex gap-2 max-w-sm">
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800" placeholder="Email address for 10% off" type="email"/>
<button className="bg-stone-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-800 transition-colors shadow-sm" type="submit">Join</button>
</form>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-stone-500 font-medium">
<li><a className="hover:text-stone-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Peanut Butter</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Almond Butter</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Artisan Jams</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Merch</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-stone-500 font-medium">
<li><a className="hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Manage Subscription</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Wholesale Portal</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-medium text-stone-400">© 2024 Spread The Love. All rights reserved.</p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:play-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
