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
      

<div className="bg-stone-800 text-stone-100 py-2 text-center text-xs font-light tracking-wide">
      Complimentary shipping on all orders over $150
    </div>

<header className="sticky top-0 z-50 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<button className="md:hidden text-stone-800 p-1 -ml-1">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-600">
<a className="hover:text-stone-900 transition-colors duration-200" href="#">
            Shop
          </a>
<a className="hover:text-stone-900 transition-colors duration-200" href="#">
            Collections
          </a>
<a className="hover:text-stone-900 transition-colors duration-200" href="#">
            Our Story
          </a>
</nav>

<a className="text-2xl font-medium tracking-tighter text-stone-900 md:absolute md:left-1/2 md:-translate-x-1/2" href="#">
          VALA.
        </a>

<div className="flex items-center gap-5 text-stone-800">
<button className="hidden sm:block hover:text-stone-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:block hover:text-stone-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="relative hover:text-stone-500 transition-colors flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium bg-stone-100 text-stone-800 h-5 w-5 rounded-full flex items-center justify-center">
              0
            </span>
</button>
</div>
</div>
</header>
<main>

<section className="relative h-[85vh] w-full overflow-hidden">
<img alt="Linen Collection" className="absolute inset-0 w-full h-full object-cover object-[50%_30%]" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<span className="text-xs font-medium tracking-widest text-white uppercase mb-4">
            Summer Collection
          </span>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 drop-shadow-sm">
            Breathable Nature.
          </h1>
<p className="text-base md:text-lg text-white/90 mb-10 max-w-lg font-light drop-shadow-sm">
            Discover our new line of unbleached, pure European linen designed
            for effortless daily elegance.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-white text-stone-900 px-8 py-3.5 text-sm font-medium hover:bg-stone-50 transition-colors duration-300" href="#">
              Shop Women
            </a>
<a className="bg-transparent border border-white text-white px-8 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors duration-300" href="#">
              Shop Men
            </a>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<a className="group relative h-[400px] overflow-hidden bg-stone-100 flex items-end" href="#">
<img alt="Dresses" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="relative z-10 p-8 w-full flex justify-between items-center text-white">
<h3 className="text-xl font-medium tracking-tight">Dresses</h3>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="group relative h-[400px] overflow-hidden bg-stone-100 flex items-end" href="#">
<img alt="Shirts" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="relative z-10 p-8 w-full flex justify-between items-center text-white">
<h3 className="text-xl font-medium tracking-tight">
                Tops &amp; Shirts
              </h3>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="group relative h-[400px] overflow-hidden bg-stone-100 flex items-end" href="#">
<img alt="Trousers" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
<div className="relative z-10 p-8 w-full flex justify-between items-center text-white">
<h3 className="text-xl font-medium tracking-tight">Bottoms</h3>
<div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-stone-900 transition-colors duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-2">
              New Arrivals
            </h2>
<p className="text-sm font-light text-stone-500">
              The latest additions to our core collection.
            </p>
</div>

<div className="flex items-center gap-2 border-b border-stone-300 pb-1 cursor-pointer hover:border-stone-600 transition-colors text-sm text-stone-600">
<span>Sort by: Featured</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-stone-900 text-white text-[0.65rem] font-medium tracking-wider px-2 py-1 uppercase">
                New
              </div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">The Everyday Linen Shirt</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Oatmeal</p>
</div>
<span className="text-sm font-normal text-stone-900">$85</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Relaxed Drawstring Trouser</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Olive</p>
</div>
<span className="text-sm font-normal text-stone-900">$110</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574291814206-363acdf2aa79?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Lightweight Wrap Dress</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Ivory</p>
</div>
<span className="text-sm font-normal text-stone-900">$145</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Classic Linen Short</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Sand</p>
</div>
<span className="text-sm font-normal text-stone-900">$65</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Oversized Beach Tunic</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Chalk</p>
</div>
<span className="text-sm font-normal text-stone-900">$95</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 left-3 bg-stone-200 text-stone-700 text-[0.65rem] font-medium tracking-wider px-2 py-1 uppercase">
                Bestseller
              </div>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Tailored Linen Blazer</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Oatmeal</p>
</div>
<span className="text-sm font-normal text-stone-900">$180</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Breezy Lounge Set</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Slate</p>
</div>
<span className="text-sm font-normal text-stone-900">$130</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
<img alt="Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-stone-900 px-6 py-2.5 text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-stone-900 hover:text-white">
                Quick Add
              </button>
</div>
<div className="flex justify-between items-start gap-2">
<div>
<h3 className="text-sm font-medium text-stone-900">
<a href="#">Pleated Midi Skirt</a>
</h3>
<p className="text-xs text-stone-500 mt-1">Terracotta</p>
</div>
<span className="text-sm font-normal text-stone-900">$90</span>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="px-8 py-3 border border-stone-300 text-stone-900 text-sm font-medium hover:border-stone-900 transition-colors duration-300" href="#">
            View All 20 Products
          </a>
</div>
</section>

<section className="bg-stone-100 py-16 md:py-24 border-t border-stone-200/50">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 md:order-1 relative aspect-[4/5] md:aspect-square overflow-hidden bg-stone-200">
<img alt="Linen Fabric Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 max-w-lg">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-4 block">
              Material Focus
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
              The Fabric of Nature
            </h2>
<p className="text-base text-stone-600 mb-8 font-light leading-relaxed">
              Our linen is sourced from the finest European flax, woven to
              perfection for a soft, breathable finish that naturally regulates
              temperature. Designed for longevity, crafted for ultimate comfort,
              and it only gets softer with every wash.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-stone-400 text-lg" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                100% Organic European Flax
              </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-stone-400 text-lg" icon="solar:wind-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Highly breathable &amp; moisture-wicking
              </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-stone-400 text-lg" icon="solar:washing-machine-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Pre-washed for immediate softness
              </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 group" href="#">
<span className="border-b border-stone-900 pb-0.5 group-hover:border-transparent transition-colors">
                Read our sustainability report
              </span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-2 lg:col-span-1">
<div className="text-2xl font-medium tracking-tighter text-white mb-6">
              VALA.
            </div>
<p className="text-sm font-light text-stone-400 mb-6 max-w-xs">
              Elevating everyday essentials with sustainable, premium linen.
            </p>

<form className="flex flex-col sm:flex-row gap-3 max-w-sm">
<input className="bg-transparent border border-stone-700 text-sm px-4 py-2.5 text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 focus:ring-0 w-full" placeholder="Email address" required="" type="email"/>
<button className="bg-white text-stone-900 px-6 py-2.5 text-sm font-medium hover:bg-stone-200 transition-colors shrink-0" type="submit">
                Subscribe
              </button>
</form>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              Shop
            </h4>
<ul className="space-y-4 text-sm font-light text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Women's Collection
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Men's Collection
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Home Goods
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Gift Cards
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              Support
            </h4>
<ul className="space-y-4 text-sm font-light text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Shipping &amp; Returns
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Care Guide
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact Us
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">
              About
            </h4>
<ul className="space-y-4 text-sm font-light text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Sustainability
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Stores
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-stone-500 font-light flex items-center gap-4">
<span>© 2024 VALA Linen. All rights reserved.</span>
<a className="hover:text-stone-300 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-300 transition-colors" href="#">
              Privacy
            </a>
</div>
<div className="flex items-center gap-4">
<a className="text-stone-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
