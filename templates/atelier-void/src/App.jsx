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
      

<div className="max-w-[1800px] mx-auto border-x border-zinc-100 min-h-screen flex flex-col relative">

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="flex items-stretch h-16">

<div className="w-full md:w-64 flex-shrink-0 border-r border-zinc-100 flex items-center px-6">
<a className="font-semibold tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 3V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M3 12H21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
                        ATELIER VÖID
                    </a>
</div>

<nav className="hidden md:flex flex-1 items-center px-8 gap-8 text-xs font-medium uppercase tracking-wide text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Architecture</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Interiors</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Objects</a>
<a className="hover:text-zinc-900 transition-colors text-zinc-900" href="#">Journal</a>
</nav>

<div className="hidden md:flex items-center">
<div className="h-full border-l border-zinc-100 px-6 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer">
<svg className="text-zinc-900" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M18.5 18.5L22 22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="h-full border-l border-zinc-100 px-6 flex items-center justify-center hover:bg-zinc-50 transition-colors cursor-pointer">
<svg className="text-zinc-900" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9V20.2595C2 20.6234 2.31174 20.9086 2.67323 20.8732L21.3268 19.0478C21.7145 19.0098 22 18.6811 22 18.2917V9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M2 9H22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 15C12 15 16 15 16 11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 15C12 15 8 15 8 11" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M8 5C8 5 8 2 12 2C16 2 16 5 16 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</header>
<main className="flex-1 flex flex-col">

<section className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] border-zinc-100 border-b">

<div className="md:col-span-7 md:p-20 flex flex-col md:border-b-0 border-zinc-100 border-b pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-10">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                            New Collection 04
                        </div>
<h1 className="text-6xl md:text-8xl tracking-tighter font-medium text-zinc-900 leading-[0.9] mb-10">
                            Volume <br/>
<span className="text-zinc-300">&amp;</span> Void
                        </h1>
</div>
<div className="max-w-md">
<p className="text-zinc-500 text-lg leading-relaxed mb-10 font-light">
                            Defining space through the absence of clutter. We explore the balance between heavy raw materials and ethereal light in our latest study.
                        </p>
<a className="inline-flex items-center gap-4 text-sm font-medium hover:opacity-70 transition-opacity" href="#">
                            View the Lookbook
                            <svg className="" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14 6L20 12L14 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>

<div className="md:col-span-5 relative md:border-l border-zinc-100 bg-zinc-100 h-full w-full">
<img alt="Architectural Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd8dbf1-8628-4556-8e87-3ef1bf77485c_1600w.webp"/>
<div className="absolute bottom-0 left-0 w-full border-t border-zinc-100/20 bg-white/10 backdrop-blur-md p-6 flex justify-between items-center text-white">
<span className="text-xs uppercase tracking-widest font-medium">Osaka, JP</span>
<span className="text-xs font-mono">34.6937° N</span>
</div>
</div>
</section>

<div className="border-b border-zinc-100 py-4 px-6 md:px-0 flex flex-col md:flex-row md:divide-x divide-zinc-100">
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M7 2L17 22" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Global Shipping</span>
</div>
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M12 22C12 18 12 16 15 13C18 10 21 11 22 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 18V13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Carbon Neutral</span>
</div>
<div className="flex-1 md:px-6 flex items-center gap-3 py-2 md:py-0">
<svg className="text-zinc-400" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">5 Year Warranty</span>
</div>
</div>

<section className="flex-1 grid grid-cols-1 lg:grid-cols-4 md:divide-x divide-zinc-100">

<div className="p-6 md:p-8 space-y-8 border-b lg:border-b-0 border-zinc-100">
<div className="">
<h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M6 12H18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M10 17H14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
                            Category
                        </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
<div className="w-2 h-2 rounded-full bg-zinc-900"></div>
</div>
<span className="text-sm text-zinc-900">Seating</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900">Lighting</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">08</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 group-hover:border-zinc-900 flex items-center justify-center transition-colors">
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900">Tables</span>
<span className="text-xs text-zinc-400 ml-auto tabular-nums">04</span>
</label>
</div>
</div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900 mb-6 uppercase tracking-wider flex items-center gap-2">
                            Material
                        </h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Oak</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Steel</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Concrete</button>
<button className="px-3 py-1.5 border border-zinc-200 text-xs font-medium text-zinc-600 rounded-sm hover:border-zinc-900 hover:text-zinc-900 transition-colors">Linen</button>
</div>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-100">

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Chair" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4c1977f-e69e-4828-b2ab-1bfc6c81f6e2_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Plywood Lounge</h4>
<p className="text-xs text-zinc-500 mt-1">Molded Ash</p>
</div>
<span className="text-sm font-medium">€2,400</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<div className="absolute top-4 right-4 z-10">
<span className="px-2 py-0.5 border border-zinc-900 text-[10px] font-bold uppercase tracking-wide text-zinc-900 bg-white">Sold Out</span>
</div>
<img alt="Lamp" className="transition-transform duration-500 group-hover:scale-105 opacity-70 mix-blend-multiply w-full h-full object-contain grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac4748af-4667-40b5-8efa-25ae0fc56901_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-semibold text-zinc-900">Arc Lamp 02</h4>
<p className="text-xs text-zinc-500 mt-1">Brushed Nickel</p>
</div>
<span className="text-sm font-medium text-zinc-400 line-through">€850</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b border-zinc-100 lg:border-b-0 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<div className="absolute top-4 left-4 z-10">
<svg className="text-zinc-900" fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14.4 7.2L20 8.5L16 13.5L17.5 19L12 16.5L6.5 19L8 13.5L4 8.5L9.6 7.2L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<img alt="Chair" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b27a57-7b1c-41e9-b8f9-377802f7ce0c_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Bauhaus 90</h4>
<p className="text-xs text-zinc-500 mt-1">Canvas &amp; Steel</p>
</div>
<span className="text-sm font-medium">€1,100</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Table" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a16d45dd-b6ca-4600-bee0-7cefba0c965c_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-zinc-900">Low Plinth</h4>
<p className="text-xs text-zinc-500 mt-1">Carrara Marble</p>
</div>
<span className="text-sm font-medium">€3,200</span>
</div>
</div>
</div>

<div className="group flex flex-col border-b md:border-b-0 border-zinc-100 hover:bg-zinc-50 transition-colors">
<div className="aspect-square w-full relative flex items-center justify-center p-8 border-b border-zinc-100 overflow-hidden bg-white">
<img alt="Vase" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adb40faa-c523-44f7-9f91-cdc8f6182daf_1600w.webp"/>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-sm font-semibold text-zinc-900">Vase 'Echo'</h4>
<p className="text-xs text-zinc-500 mt-1">Hand-blown Glass</p>
</div>
<span className="text-sm font-medium">€320</span>
</div>
</div>
</div>

<div className="group bg-zinc-900 text-white flex flex-col justify-center p-8 relative overflow-hidden h-full min-h-[400px]">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<svg className="text-zinc-500 mb-4" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M7 10L12 14L17 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<h4 className="text-xl font-medium tracking-tight mb-2">The Archive</h4>
<p className="text-zinc-400 text-xs leading-relaxed mb-6">
                                    Join our newsletter for early access to limited material studies.
                                </p>
</div>
<form className="flex border-b border-zinc-700 pb-2">
<input className="bg-transparent text-sm w-full outline-none placeholder:text-zinc-600" placeholder="Email Address" type="email"/>
<button className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors" type="submit">Join</button>
</form>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<svg fill="none" height="200" viewbox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M10.269 3.09062L5.45037 4.16781C3.59379 4.58288 2.6655 4.79042 2.15286 5.56585C1.64023 6.34127 1.83921 7.23126 2.23719 9.01124L2.83406 11.6811C3.12513 12.9831 3.27067 13.634 3.65586 14.1292C4.04106 14.6244 4.63435 14.9084 5.82092 15.4764C7.00749 16.0443 8.16335 16.5976 10.4751 17.7042L11.7766 18.3272C15.8239 20.2645 17.8475 21.2332 19.3444 20.2541C20.8413 19.2751 21.0543 16.8407 21.4802 11.972L21.5796 10.8361C21.7511 8.87522 21.8369 7.89476 21.2828 7.18247C20.7287 6.47018 19.824 6.11586 18.0147 5.40723L16.2942 4.73339C13.8863 3.79038 12.6823 3.31888 11.5544 3.09139C11.1302 3.00583 10.7001 3.00557 10.276 3.09062H10.269Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</section><section className="md:px-8 bg-white border-zinc-200 border-t pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px]">

<div className="group relative bg-zinc-100 rounded-3xl p-6 flex flex-col justify-between overflow-hidden lg:col-span-1 lg:row-span-1 border border-zinc-200/50">
<div className="absolute inset-0 flex items-center justify-center p-8">
<img alt="Chair" className="transition-transform duration-500 group-hover:scale-105 mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1f3cc83-ae24-4ba5-b7b0-744f31484916_800w.webp"/>
</div>

<div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full border border-zinc-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<button className="w-3 h-3 rounded-full bg-orange-800 ring-1 ring-white"></button>
<button className="w-3 h-3 rounded-full bg-zinc-800 ring-1 ring-white"></button>
<button className="w-3 h-3 rounded-full bg-stone-400 ring-1 ring-white"></button>
</div>
<div className="relative z-10 mt-auto flex items-center justify-between w-full">
<span className="text-sm font-semibold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-zinc-100">Lounge Chair 04</span>
<button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors shadow-sm border border-zinc-100">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
</button>
</div>
</div>

<div className="relative bg-zinc-50 rounded-3xl p-6 flex items-center overflow-hidden lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="grid grid-cols-2 gap-8 w-full h-full">

<div className="flex flex-wrap content-center gap-2">
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Seating</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Lighting</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Tables</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Storage</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Outdoor</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Textiles</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Ceramics</span>
<span className="px-3 py-1.5 rounded-full bg-white text-xs text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer border border-zinc-200 shadow-sm">Archival</span>
</div>

<div className="relative h-full flex items-center justify-center">
<div className="bg-white rounded-2xl p-4 w-4/5 aspect-[4/5] relative overflow-hidden group cursor-pointer shadow-lg border border-zinc-100">
<img alt="Preview" className="group-hover:opacity-100 transition-opacity opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/301c0a92-60ce-48df-9d33-d9872a120bcc_800w.jpg"/>
<div className="absolute bottom-3 right-3 w-6 h-6 bg-white/40 backdrop-blur rounded-full flex items-center justify-center border border-white/50">
<svg className="text-zinc-900 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#B6B5AC] rounded-3xl p-8 flex flex-col relative overflow-hidden lg:col-span-1 lg:row-span-2 shadow-lg">
<div className="flex justify-between items-start mb-4">
<h3 className="text-3xl font-medium text-white tracking-tight leading-none">ModularShelving</h3>
</div>
<div className="flex-1 relative flex items-center justify-center py-8">
<img alt="Shelving Unit" className="mix-blend-multiply w-full h-full object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed00ec9a-5d77-4727-aba4-5157f9ab8c06_800w.webp"/>

<div className="absolute top-[30%] left-[40%] group">
<div className="w-3 h-3 bg-white rounded-full animate-ping absolute opacity-75"></div>
<div className="w-3 h-3 bg-white rounded-full relative shadow-md cursor-help"></div>
<div className="absolute left-1/2 -translate-x-1/2 top-5 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">Aluminum Joinery</div>
</div>
</div>
<div className="space-y-6">

<div className="flex justify-center gap-4 text-zinc-700 text-xs font-semibold tracking-wide">
<span className="cursor-pointer hover:text-zinc-900">2-TIER</span>
<span className="cursor-pointer text-zinc-900 underline underline-offset-4">3-TIER</span>
<span className="cursor-pointer hover:text-zinc-900">4-TIER</span>
<span className="cursor-pointer hover:text-zinc-900">CUSTOM</span>
</div>

<div className="flex items-center justify-between pt-4 border-t border-white/20">
<span className="text-white text-sm font-medium">Configure</span>
<button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#B6B5AC] flex items-center justify-center transition-all">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="11" cy="11" r="8"></circle><path d="M21 21L16.65 16.65"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-3xl p-6 flex flex-col justify-between lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="flex gap-4 h-[240px] w-full">
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detail 1" className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bd827ea-f545-4ce9-8509-5eb912435f1b_800w.webp"/>
</div>
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detail 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 rounded-2xl overflow-hidden relative group shadow-sm">
<img alt="Detail 3" className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/911a0611-0591-46e3-9af4-552d90f6a325_800w.webp"/>
</div>
</div>
<div className="flex justify-center gap-2 mt-5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
</div>
</div>

<div className="bg-[#E4F578] rounded-3xl p-8 flex flex-col justify-between lg:col-span-1 lg:row-span-1 text-zinc-900 relative group overflow-hidden shadow-lg">
<h3 className="text-4xl font-medium tracking-tight leading-[0.9]">InteriorObjects</h3>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
<img alt="Decor" className="w-32 h-auto mix-blend-multiply" src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-4 mt-auto relative z-10">

<div className="bg-zinc-900/10 rounded-full p-1 flex items-center gap-1 cursor-pointer">
<span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">Home</span>
<span className="px-3 py-1 rounded-full text-zinc-700 text-[10px] font-bold uppercase tracking-wide hover:bg-black/5 transition-colors">Office</span>
</div>
</div>
<div className="flex justify-between items-end mt-4">
<span className="text-sm font-medium">New Arrivals</span>
<svg className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
</div>
</div>

<div className="relative bg-zinc-50 rounded-3xl p-6 flex flex-col justify-center items-center overflow-hidden lg:col-span-1 lg:row-span-1 group border border-zinc-200">
<img alt="Vase" className="h-[80%] w-auto object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 flex items-center gap-2">
<span className="text-xs font-semibold text-zinc-400">H: 45cm</span>
</div>
<div className="absolute bottom-6 right-6">
<svg className="text-zinc-300 fill-current hover:text-red-500 transition-colors cursor-pointer" height="20" viewbox="0 0 24 24" width="20"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
</div>
</div>

<div className="bg-zinc-100 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden lg:col-span-2 lg:row-span-1 border border-zinc-200">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-zinc-100 to-zinc-200"></div>

<div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/40 backdrop-blur-md rounded-2xl border border-zinc-900/5 rotate-12 z-0"></div>
<div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/60 backdrop-blur-md rounded-xl border border-zinc-900/5 -rotate-6 z-0"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tighter mb-2">Essential<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500">Living</span></h2>
<p className="text-zinc-500 text-sm max-w-xs mx-auto mt-4 leading-relaxed">Fashion from chic objects and stylish tops to versatile bottoms and cozy outerwear.</p>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden lg:col-span-1 lg:row-span-1 border border-zinc-800/50 group shadow-xl">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-none mb-1">ArchiveLamp</h3>
<p className="text-zinc-500 text-xs">Limited Edition</p>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center p-8">
<img alt="Lamp" className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 w-full h-full object-contain drop-shadow-2xl scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e5b736c-193d-4984-a2c6-7004034f28e4_800w.webp"/>
</div>
<div className="flex items-center justify-between mt-auto relative z-10">
<span className="text-white text-sm font-medium">Pre-order</span>
<button className="w-10 h-10 rounded-full bg-[#E4F578] text-zinc-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#E4F578]/20">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" x2="21" y1="6" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section><section className="md:py-32 overflow-hidden text-zinc-500 bg-white border-zinc-200 border-t pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white opacity-50 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-zinc-900 tracking-tighter mb-6">The Atelier Standard</h2>
<p className="text-base md:text-lg text-zinc-500 font-light leading-relaxed">
                Our service infrastructure supports every stage of the acquisition process. From bespoke material sourcing to archival management for private collections.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-auto">
<h3 className="text-base font-semibold text-zinc-900 mb-3">Bespoke Fabrication</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Modify dimensions and finishes directly through our studio. We accommodate specific spatial requirements without compromising structural integrity.
                    </p>
</div>

<div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-5 select-none">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Specifications</span>
</div>
<div className="space-y-5">
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Width</span>
<span className="font-mono text-zinc-900">2400mm</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[70%] bg-zinc-800 rounded-full group-hover:bg-zinc-900 transition-colors duration-500"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-500">Depth</span>
<span className="font-mono text-zinc-900">950mm</span>
</div>
<div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full w-[40%] bg-zinc-400 rounded-full group-hover:bg-zinc-500 transition-colors duration-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-zinc-900 hover:bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 flex flex-col shadow-xl">
<div className="mb-auto">
<h3 className="text-base font-semibold text-white mb-3">Spatial Consultation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Connect with our interior architects. Share floor plans and receive curated placement proposals directly within your workspace.
                    </p>
</div>

<div className="mt-12 space-y-3 select-none">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] text-zinc-500 font-bold border border-zinc-700">MK</div>
<div className="bg-zinc-800/40 border border-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%]">
<p className="text-xs text-zinc-400">Attached the floor plan. Would the Arc Lamp fit in the alcove?</p>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="bg-zinc-100 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
<p className="text-xs text-zinc-900 font-medium">Yes, the 2.4m clearance is perfect for that model.</p>
</div>
</div>
</div>
</div>

<div className="group bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-auto">
<h3 className="text-base font-semibold text-zinc-900 mb-3">Material Provenance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Trace the origin of every component. From the quarry to the kiln, we provide full transparency on material sourcing and sustainability.
                    </p>
</div>

<div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-5 select-none relative overflow-hidden flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-zinc-200">
<svg className="text-zinc-500" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="">
<div className="text-xs font-medium text-zinc-900 mb-0.5">Carrara Quarry #04</div>
<div className="text-[10px] text-zinc-500 mb-2">Tuscany, Italy</div>
<div className="flex items-center gap-2">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wide font-medium">Verified</span>
</div>
</div>
</div>
</div>

<div className="group hover:bg-zinc-950 hover:border-zinc-700 transition-all duration-300 flex flex-col bg-slate-800 border-zinc-800 border rounded-2xl px-8 py-8 shadow-xl">
<div className="mb-auto">
<h3 className="text-base font-semibold text-white mb-3">Project Specifications</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Generate comprehensive PDF specifications for contractors, including electrical requirements, 3D assets, and installation guides.
                    </p>
</div>

<div className="mt-12 bg-black/40 border border-zinc-800/60 rounded-xl p-5 select-none">
<div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">Downloads</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800/50 transition-colors cursor-pointer group/item border border-transparent hover:border-zinc-800">
<svg className="text-zinc-600 group-hover/item:text-zinc-300" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<span className="text-xs text-zinc-400 group-hover/item:text-zinc-200">Installation_Guide_v2.pdf</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-800/50 transition-colors cursor-pointer group/item border border-transparent hover:border-zinc-800">
<svg className="text-zinc-600 group-hover/item:text-zinc-300" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
<span className="text-xs text-zinc-400 group-hover/item:text-zinc-200">3D_Model_Assets.zip</span>
</div>
</div>
</div>
</div>

<div className="group bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-8 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-auto">
<h3 className="text-base font-semibold text-zinc-900 mb-3">Trade Accounts</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Add your team to shared project boards. Enable your most important clients to view curated selections and approve finishes directly.
                    </p>
</div>

<div className="mt-12 bg-zinc-50 border border-zinc-200 rounded-xl p-5 select-none">
<div className="flex items-center gap-3 mb-5">
<div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">AS</div>
<div>
<div className="text-xs font-medium text-zinc-900">Atelier Studio</div>
<div className="text-[10px] text-zinc-500">Enterprise License</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-400"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-500"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-600 flex items-center justify-center text-[8px] text-white">+3</div>
</div>
<div className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] uppercase font-bold tracking-wide rounded border border-green-200">Active</div>
</div>
</div>
</div>

<div className="group hover:bg-zinc-950 hover:border-zinc-700 transition-all duration-300 flex flex-col bg-neutral-600 border-zinc-800 border rounded-2xl px-8 py-8 shadow-xl">
<div className="mb-auto">
<h3 className="text-base font-semibold text-white mb-3">Private Archive</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Create private requests for discontinued pieces. Access our vault of vintage acquisitions available only to members.
                    </p>
</div>

<div className="mt-12 bg-black/40 border border-zinc-800/60 rounded-xl p-5 select-none flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800/60 flex items-center justify-center shrink-0 border border-zinc-700/50">
<svg className="text-zinc-500 group-hover:text-zinc-300 transition-colors" fill="none" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="11"></rect><path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
<div>
<div className="text-xs font-medium text-white mb-0.5">Vault Access</div>
<div className="text-[10px] text-zinc-500">Authentication required</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 bg-white">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
<div className="p-8">
<a className="font-semibold tracking-tighter text-sm uppercase flex items-center gap-2 mb-4" href="#">
<span className="w-2 h-2 bg-zinc-900 rounded-full"></span>
                        ATELIER VÖID
                    </a>
<p className="text-xs text-zinc-400">
                        © 2024. All rights reserved.<br/>
                        Designed in Kyoto.
                    </p>
</div>
<div className="p-8 flex flex-col gap-2">
<h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-2">Studio</h5>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">About</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Sustainability</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Careers</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Press</a>
</div>
<div className="p-8 flex flex-col gap-2">
<h5 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-2">Support</h5>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Shipping</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Returns</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Care Guide</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Contact</a>
</div>
<div className="p-8 flex items-end justify-end">
<a className="p-2 border border-zinc-200 rounded-full hover:border-zinc-900 hover:text-zinc-900 text-zinc-400 transition-colors" href="#">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L12 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M5 11L12 4L19 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
