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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="sm:px-6 lg:px-8 flex h-16 max-w-[90rem] mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-lg font-semibold tracking-tighter text-gray-900 uppercase font-geist" href="#">RVINYL</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-geist" href="#">Automotive</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-geist" href="#">Architectural</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-geist" href="#">Craft</a>
</nav>
</div>
<div className="flex items-center gap-5 text-gray-500">
<button className="hover:text-gray-900 transition-colors"><iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="hover:text-gray-900 transition-colors"><iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon></button>
<button className="hover:text-gray-900 transition-colors relative">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[0.6rem] font-medium border border-white font-geist">2</span>
</button>
</div>
</div>
</header>

<main className="flex-1 sm:px-6 lg:px-8 lg:py-10 w-full max-w-[90rem] mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">

<nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 tracking-wide">
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Home</a>
<span className="font-geist">/</span>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Vinyl Wraps</a>
<span className="font-geist">/</span>
<a className="hover:text-gray-900 transition-colors font-geist" href="#">Gloss Series</a>
<span className="font-geist">/</span>
<span className="text-gray-900 font-geist">Nardo Gray</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-4">

<div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden group flex items-center justify-center" style={{backgroundImage: 'var(--bg-grid)', backgroundSize: '24px 24px'}}>

<img alt="Vehicle previewing wrap" className="transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<div className="flex flex-col bg-white/90 backdrop-blur shadow-sm border border-gray-200 rounded-lg overflow-hidden">
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-100" title="Zoom In"><iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon></button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" title="Zoom Out"><iconify-icon className="text-lg" icon="solar:minus-circle-linear"></iconify-icon></button>
</div>
<button className="p-2 bg-white/90 backdrop-blur shadow-sm border border-gray-200 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center" title="Fullscreen">
<iconify-icon className="text-lg" icon="solar:maximize-square-linear"></iconify-icon>
</button>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center p-1.5 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-sm">
<button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-emerald-600 border border-gray-100 transition-all font-geist">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Front 3/4
                        </button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 transition-all font-geist">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Side
                        </button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 transition-all font-geist">
<iconify-icon icon="solar:camera-linear"></iconify-icon> Rear
                        </button>
</div>
</div>

<div className="flex items-center justify-between px-2">
<p className="text-xs text-gray-400 flex items-center gap-1.5 font-geist">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Colors may vary slightly based on display settings.
                    </p>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-gray-500 font-geist">Lighting</span>
<div className="flex items-center bg-gray-100 rounded-md p-0.5">
<button className="px-3 py-1 bg-white rounded shadow-sm text-xs font-medium text-gray-900 font-geist">Studio</button>
<button className="px-3 py-1 rounded text-xs font-medium text-gray-500 hover:text-gray-900 font-geist">Daylight</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col">

<div className="mb-8">
<h1 className="text-3xl tracking-tight text-gray-900 mb-2 font-geist font-semibold">Gloss Nardo Gray</h1>
<p className="text-sm text-gray-500 leading-relaxed mb-4 font-geist">Premium cast vinyl film offering a high-gloss, paint-like finish. Engineered for extreme conformability and precise application.</p>
<div className="flex items-end gap-3">
<span className="text-2xl tracking-tight text-gray-900 font-geist font-semibold">$24.99</span>
<span className="text-sm text-gray-400 mb-1 font-geist">/ linear foot</span>
</div>
</div>

<div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-8">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-gray-400 text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
<h2 className="text-sm font-medium text-gray-900 font-geist">Configure Vehicle Preview</h2>
</div>

<div className="flex p-1 bg-gray-200/50 rounded-lg mb-5">
<button className="flex-1 py-1.5 text-xs font-medium bg-white text-gray-900 rounded-md shadow-sm border border-gray-100 flex flex-col items-center gap-1 font-geist">
                            Car
                        </button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md flex flex-col items-center gap-1 transition-colors font-geist">
                            SUV
                        </button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md flex flex-col items-center gap-1 transition-colors font-geist">
                            Truck
                        </button>
</div>

<div className="space-y-4">
<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1.5 font-geist">Make</label>
<button className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 hover:border-gray-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
<span className="font-geist">Audi</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-1.5 font-geist">Model</label>
<button className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 hover:border-gray-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500">
<span className="font-geist">RS6 Avant</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="space-y-6">
<div className="">
<div className="flex items-center justify-between mb-3">
<label className="block text-sm font-medium text-gray-900 font-geist">Select Roll Size</label>
<a className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors font-geist" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-2 gap-3">

<label className="relative flex flex-col cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="p-3 bg-white border-2 border-emerald-500 rounded-lg shadow-sm peer-focus:ring-2 peer-focus:ring-emerald-500/20">
<span className="block text-sm font-medium text-gray-900 font-geist">5ft x 1ft</span>
<span className="block text-xs text-gray-500 mt-0.5 font-geist">$24.99</span>
</div>
<div className="absolute top-2 right-2 text-emerald-500">
<iconify-icon className="text-base" icon="solar:check-circle-bold"></iconify-icon>
</div>
</label>

<label className="relative flex flex-col cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<span className="block text-sm font-medium text-gray-900 font-geist">5ft x 5ft</span>
<span className="block text-xs text-gray-500 mt-0.5 font-geist">$119.99</span>
</div>
</label>
<label className="relative flex flex-col cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<span className="block text-sm font-medium text-gray-900 font-geist">5ft x 10ft</span>
<span className="block text-xs text-gray-500 mt-0.5 font-geist">$229.99</span>
</div>
</label>
<label className="relative flex flex-col cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
<span className="block text-sm font-medium text-gray-900 font-geist">5ft x 25ft</span>
<span className="block text-xs text-gray-500 mt-0.5 font-geist">$549.99</span>
</div>
</label>
</div>
</div>

<div className="flex gap-3 pt-4 border-t border-gray-100">

<div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm h-12">
<button className="px-3 text-gray-400 hover:text-gray-900 transition-colors h-full flex items-center justify-center">
<iconify-icon icon="solar:minus-linear"></iconify-icon>
</button>
<input className="w-10 text-center text-sm font-medium text-gray-900 focus:outline-none bg-transparent" min="1" type="number" value="1"/>
<button className="px-3 text-gray-400 hover:text-gray-900 transition-colors h-full flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</button>
</div>

<button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all shadow-sm active:scale-[0.98] font-geist">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
                            Add to Cart
                        </button>
</div>

<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-900 text-xs font-geist">Thickness</span>
<span className="text-xs font-geist">3.2 mil dual-cast film</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-900 text-xs font-geist">Durability</span>
<span className="text-xs font-geist">Up to 7 years outdoor</span>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-8 h-8 rounded bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-medium text-gray-900 text-xs font-geist">Technology</span>
<span className="text-xs font-geist">Air-release adhesive channels</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
