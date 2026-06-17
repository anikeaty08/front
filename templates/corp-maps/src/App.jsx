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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



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
      

<header className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2" href="#">
<i className="text-amber-500 w-6 h-6" data-lucide="crown" strokeWidth="1.5"></i>
<span className="text-xl tracking-tight font-medium">ROYAL T <span className="text-slate-400 text-sm font-normal tracking-normal ml-1 hidden sm:inline-block">MANAGEMENT</span></span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-base text-slate-300">
<a className="text-white font-medium" href="#">Find a Home</a>
<a className="hover:text-white transition-colors" href="#">Residents</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="flex items-center gap-6">
<button className="hidden sm:flex items-center gap-2 text-base text-slate-300 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
<span>Saved (2)</span>
</button>
<button className="flex items-center gap-2 text-base text-slate-300 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
<span className="hidden sm:block">Menu</span>
</button>
</div>
</header>

<section className="bg-slate-100 border-b border-slate-200">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
<div className="p-8 md:p-12 lg:p-16 flex-1 w-full text-center md:text-left z-10">
<h1 className="text-4xl lg:text-5xl tracking-tight font-medium text-slate-900 leading-tight mb-4">
                    Communities Across <br className="hidden lg:block"/>The Central Valley
                </h1>
<p className="text-lg lg:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
                    Find the perfect place to call home. Browse our curated selection of premium properties.
                </p>
</div>
<div className="flex-1 w-full h-64 md:h-auto md:self-stretch relative overflow-hidden">
<img alt="Modern Apartment Building" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/50 to-transparent hidden md:block"></div>
</div>
</div>
</section>

<div className="sticky top-[68px] z-40 bg-white shadow-sm border-b border-slate-200">

<div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<span className="text-lg font-medium tracking-tight">43 Communities Available</span>
<div className="flex flex-wrap items-center gap-2">

<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-base text-slate-700">
                        Fresno, CA
                        <button className="hover:bg-slate-200 rounded-full p-0.5 transition-colors"><i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i></button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-base text-slate-700">
                        Pet Friendly
                        <button className="hover:bg-slate-200 rounded-full p-0.5 transition-colors"><i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i></button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-base text-slate-700">
                        2 Bedrooms
                        <button className="hover:bg-slate-200 rounded-full p-0.5 transition-colors"><i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i></button>
</span>
<button className="text-base text-slate-500 hover:text-slate-900 underline underline-offset-4 ml-2 transition-colors">Clear all</button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-base font-medium text-slate-700 hover:text-slate-900 transition-colors">
                    Save Search <i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-xl text-base font-medium transition-colors w-full md:w-auto shadow-sm">
                    Get Email Alerts
                </button>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 border-t border-slate-100 flex items-center gap-4 overflow-x-auto no-scrollbar">
<span className="text-base font-medium text-slate-900 whitespace-nowrap shrink-0">Quick Filters</span>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-base text-slate-700 whitespace-nowrap shrink-0 transition-all shadow-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="dog" strokeWidth="1.5"></i> Pet Friendly
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-base text-slate-700 whitespace-nowrap shrink-0 transition-all shadow-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="users" strokeWidth="1.5"></i> Senior Living
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-base text-slate-700 whitespace-nowrap shrink-0 transition-all shadow-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="circle-dollar-sign" strokeWidth="1.5"></i> Affordable
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-base text-slate-700 whitespace-nowrap shrink-0 transition-all shadow-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="calendar-check" strokeWidth="1.5"></i> Move-In Ready
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-base text-slate-700 whitespace-nowrap shrink-0 transition-all shadow-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="tag" strokeWidth="1.5"></i> Under $1,500
            </button>
</div>
</div>

<main className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3">
<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-[220px]">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl tracking-tight font-medium text-slate-900">Filters</h2>
<button className="text-base text-slate-500 hover:text-slate-900 transition-colors">Reset</button>
</div>

<div className="mb-8">
<label className="block text-base font-medium text-slate-900 mb-3">Location</label>
<div className="relative">
<input className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow" placeholder="City, Zip, or Neighborhood" type="text" value="Fresno, CA"/>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<label className="block text-base font-medium text-slate-900">Price Range</label>
</div>
<div className="flex items-center justify-between text-base text-slate-600 mb-4">
<span>$0</span>
<span>$3,000+</span>
</div>
<div className="relative py-4">

<div className="h-1.5 w-full bg-slate-200 rounded-full"></div>

<div className="absolute top-1/2 -translate-y-1/2 h-1.5 bg-amber-600 rounded-full left-0 right-[20%]"></div>

<button className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-slate-300 rounded-full shadow-sm left-0 -ml-1 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all"></button>
<button className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-slate-300 rounded-full shadow-sm right-[20%] -mr-3 focus:outline-none focus:ring-4 focus:ring-amber-500/20 transition-all"></button>
</div>
</div>

<div className="mb-8">
<label className="block text-base font-medium text-slate-900 mb-3">Bedrooms</label>
<div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200">
<button className="flex-1 py-2 text-center text-base text-slate-600 hover:text-slate-900 rounded-lg transition-colors">Studio</button>
<button className="flex-1 py-2 text-center text-base text-slate-600 hover:text-slate-900 rounded-lg transition-colors">1</button>
<button className="flex-1 py-2 text-center text-base font-medium bg-white text-slate-900 shadow-sm rounded-lg transition-colors">2</button>
<button className="flex-1 py-2 text-center text-base text-slate-600 hover:text-slate-900 rounded-lg transition-colors">3+</button>
</div>
</div>

<div className="mb-8">
<label className="block text-base font-medium text-slate-900 mb-4">Pets</label>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border-2 border-slate-300 peer-checked:bg-amber-600 peer-checked:border-amber-600 flex items-center justify-center transition-colors group-hover:border-amber-500">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900 transition-colors">Pet Friendly</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border-2 border-slate-300 peer-checked:bg-amber-600 peer-checked:border-amber-600 flex items-center justify-center transition-colors group-hover:border-amber-500">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base text-slate-700 group-hover:text-slate-900 transition-colors">No Pets</span>
</label>
</div>
</div>

<div className="border-t border-slate-200 pt-6">
<h3 className="text-base font-medium text-slate-900 mb-2">Advanced Filters</h3>
<details className="group py-3 border-b border-slate-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-slate-700 group-hover:text-slate-900 transition-colors focus:outline-none">
                                Affordable Housing
                                <i className="w-4 h-4 text-slate-400 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="w-4 h-4 text-slate-400 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</summary>
<div className="pt-4 pb-2 flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer"><input className="w-4 h-4 rounded text-amber-600" type="checkbox"/><span className="text-base text-slate-600">Low Income</span></label>
<label className="flex items-center gap-3 cursor-pointer"><input className="w-4 h-4 rounded text-amber-600" type="checkbox"/><span className="text-base text-slate-600">Section 8</span></label>
</div>
</details>
<details className="group py-3 border-b border-slate-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-slate-700 group-hover:text-slate-900 transition-colors focus:outline-none">
                                Senior Housing
                                <i className="w-4 h-4 text-slate-400 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="w-4 h-4 text-slate-400 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</summary>
<div className="pt-4 pb-2 text-base text-slate-600">55+ Community options available.</div>
</details>
<details className="group py-3 border-b border-slate-100 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-base text-slate-700 group-hover:text-slate-900 transition-colors focus:outline-none">
                                Amenities
                                <i className="w-4 h-4 text-slate-400 group-open:hidden" data-lucide="plus" strokeWidth="2"></i>
<i className="w-4 h-4 text-slate-400 hidden group-open:block" data-lucide="minus" strokeWidth="2"></i>
</summary>
<div className="pt-4 pb-2 flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer"><input className="w-4 h-4 rounded text-amber-600" type="checkbox"/><span className="text-base text-slate-600">In-Unit Washer/Dryer</span></label>
<label className="flex items-center gap-3 cursor-pointer"><input className="w-4 h-4 rounded text-amber-600" type="checkbox"/><span className="text-base text-slate-600">Pool</span></label>
<label className="flex items-center gap-3 cursor-pointer"><input className="w-4 h-4 rounded text-amber-600" type="checkbox"/><span className="text-base text-slate-600">Fitness Center</span></label>
</div>
</details>
</div>
</div>
</aside>

<div className="col-span-1 lg:col-span-5 flex flex-col gap-6">

<div className="flex items-center justify-between lg:hidden mb-2">
<h2 className="text-2xl tracking-tight font-medium text-slate-900">43 Communities</h2>
<div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
<button className="p-2 bg-white rounded-lg shadow-sm text-slate-900"><i className="w-5 h-5" data-lucide="list" strokeWidth="1.5"></i></button>
<button className="p-2 text-slate-500 hover:text-slate-900"><i className="w-5 h-5" data-lucide="map" strokeWidth="1.5"></i></button>
</div>
</div>

<article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
<img alt="The Orchard Apartments exterior pool area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide">Featured</div>
<button aria-label="Save property" className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-slate-400 hover:text-rose-500 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-1">The Orchard Apartments</h3>
<p className="text-base text-slate-500">1234 Orchard Dr, Fresno, CA 93720</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-base text-slate-600 mb-4 mt-2">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="dog" strokeWidth="1.5"></i> Pet Friendly</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="washing-machine" strokeWidth="1.5"></i> In-Unit W/D</span>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<p className="text-base text-slate-600 mb-0.5">1 - 3 Bedrooms</p>
<p className="text-lg font-medium text-slate-900">$1,295 - $2,195 <span className="text-base font-normal text-slate-500">/mo</span></p>
</div>
<button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-colors shadow-sm text-center">
                                View Availability
                            </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
<img alt="River Park Villas interior kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button aria-label="Save property" className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-slate-400 hover:text-rose-500 transition-colors shadow-sm focus:outline-none">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-1">River Park Villas</h3>
<p className="text-base text-slate-500">500 River Park Way, Fresno, CA 93720</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-base text-slate-600 mb-4 mt-2">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="dog" strokeWidth="1.5"></i> Pet Friendly</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="waves" strokeWidth="1.5"></i> Pool</span>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<p className="text-base text-slate-600 mb-0.5">2 - 3 Bedrooms</p>
<p className="text-lg font-medium text-slate-900">$1,450 - $2,350 <span className="text-base font-normal text-slate-500">/mo</span></p>
</div>
<button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-colors shadow-sm text-center">
                                View Availability
                            </button>
</div>
</div>
</article>

<article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group cursor-pointer">
<div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
<img alt="Copper River Apartments building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button aria-label="Save property" className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-slate-400 hover:text-rose-500 transition-colors shadow-sm focus:outline-none">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 flex flex-col grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-1">Copper River Apartments</h3>
<p className="text-base text-slate-500">780 W Copper Ave, Fresno, CA 93711</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-base text-slate-600 mb-4 mt-2">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="dog" strokeWidth="1.5"></i> Pet Friendly</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-slate-400" data-lucide="dumbbell" strokeWidth="1.5"></i> Fitness Center</span>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<p className="text-base text-slate-600 mb-0.5">1 - 2 Bedrooms</p>
<p className="text-lg font-medium text-slate-900">$1,195 - $1,895 <span className="text-base font-normal text-slate-500">/mo</span></p>
</div>
<button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl text-base font-medium transition-colors shadow-sm text-center">
                                View Availability
                            </button>
</div>
</div>
</article>

<div className="py-4 flex justify-center">
<button className="px-8 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm">Show More Results</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-4">
<div className="sticky top-[220px] h-[calc(100vh-250px)] min-h-[600px] bg-slate-200 rounded-2xl border border-slate-300 overflow-hidden relative shadow-inner">

<div className="absolute inset-0 bg-[#e5e3df] opacity-60 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgyMHYyMEgyMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')]"></div>

<div className="absolute top-4 right-4 flex bg-white rounded-xl shadow-sm border border-slate-200 p-1 z-10">
<button className="px-3 py-1.5 bg-slate-100 text-slate-900 font-medium rounded-lg text-base">Map</button>
<button className="px-3 py-1.5 text-slate-600 hover:text-slate-900 rounded-lg text-base transition-colors">Satellite</button>
</div>
<div className="absolute bottom-6 right-4 flex flex-col gap-2 z-10">
<div className="flex flex-col bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
<button aria-label="Zoom in" className="p-3 text-slate-700 hover:bg-slate-50 border-b border-slate-100 transition-colors focus:outline-none"><i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i></button>
<button aria-label="Zoom out" className="p-3 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"><i className="w-5 h-5" data-lucide="minus" strokeWidth="1.5"></i></button>
</div>
<button aria-label="My location" className="p-3 bg-white rounded-xl shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none">
<i className="w-5 h-5" data-lucide="navigation" strokeWidth="1.5"></i>
</button>
</div>

<div className="absolute top-1/4 left-1/3 flex flex-col items-center group cursor-pointer">
<div className="bg-amber-600 text-white text-base font-medium px-2 py-1 rounded-full shadow-md z-10 scale-110 border-2 border-white">5</div>
<div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-600 -mt-1 z-0"></div>

<div className="absolute bottom-full mb-2 bg-white p-3 rounded-xl shadow-xl border border-slate-200 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<img alt="Preview" className="rounded-lg mb-2 w-full h-20 object-cover" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?w=200&amp;h=100&amp;fit=crop"/>
<p className="font-medium text-base text-slate-900 truncate">The Orchard Apts</p>
<p className="text-sm text-slate-500">From $1,295</p>
</div>
</div>
<div className="absolute top-1/2 left-1/4 flex flex-col items-center group cursor-pointer">
<div className="bg-amber-600 text-white text-base font-medium px-2 py-1 rounded-full shadow-md z-10 border-2 border-white">8</div>
<div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-600 -mt-1 z-0"></div>
</div>
<div className="absolute bottom-1/3 right-1/3 flex flex-col items-center group cursor-pointer">
<div className="bg-amber-600 text-white text-base font-medium px-2 py-1 rounded-full shadow-md z-10 border-2 border-white">12</div>
<div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-amber-600 -mt-1 z-0"></div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white border-t border-slate-200 py-16 mt-8">
<div className="max-w-[1400px] mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors group">
<div className="p-3 bg-white rounded-xl shadow-sm text-amber-600 group-hover:bg-amber-50 transition-colors">
<i className="w-6 h-6" data-lucide="bell-ring" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Save Search</h4>
<p className="text-base text-slate-600 leading-relaxed">Get notified instantly when new communities match your criteria.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors group">
<div className="p-3 bg-white rounded-xl shadow-sm text-amber-600 group-hover:bg-amber-50 transition-colors">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Email Alerts</h4>
<p className="text-base text-slate-600 leading-relaxed">Be the first to know about new listings, specials, and price drops.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors group">
<div className="p-3 bg-white rounded-xl shadow-sm text-amber-600 group-hover:bg-amber-50 transition-colors">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">AI Search</h4>
<p className="text-base text-slate-600 leading-relaxed">Describe what you're looking for in natural language to find matches.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors group">
<div className="p-3 bg-white rounded-xl shadow-sm text-amber-600 group-hover:bg-amber-50 transition-colors">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Explore Neighborhoods</h4>
<p className="text-base text-slate-600 leading-relaxed">See schools, transit, shopping and more near our communities.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 text-center text-base border-t border-slate-900 hidden lg:block">
<div className="max-w-[1400px] mx-auto px-6">
<p>© 2023 Royal T Management. All rights reserved. Equal Housing Opportunity.</p>
</div>
</footer>

<div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden z-50 pb-safe">
<div className="flex justify-around items-center p-2">
<button className="flex flex-col items-center justify-center w-full py-2 text-amber-600 focus:outline-none">
<i className="w-6 h-6 mb-1" data-lucide="list" strokeWidth="1.5"></i>
<span className="text-xs font-medium">List</span>
</button>
<div className="w-px h-8 bg-slate-200"></div>
<button className="flex flex-col items-center justify-center w-full py-2 text-slate-500 hover:text-slate-900 transition-colors focus:outline-none">
<i className="w-6 h-6 mb-1" data-lucide="map" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Map</span>
</button>
<div className="w-px h-8 bg-slate-200"></div>

<button className="flex flex-col items-center justify-center w-full py-2 text-slate-500 hover:text-slate-900 transition-colors focus:outline-none relative">
<div className="absolute top-1 right-[30%] w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white"></div>
<i className="w-6 h-6 mb-1" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Filters</span>
</button>
</div>
</div>



    </>
  );
}
