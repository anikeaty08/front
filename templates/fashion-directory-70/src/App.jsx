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
      

<nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between z-10 relative bg-[#FFF4E0] border-b-4 border-black">

<div className="flex items-center gap-6">
<button className="hover:text-[#FF6B6B] transition-colors hover:scale-110">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="2.5"></i>
</button>
</div>

<div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
<div className="flex gap-8 text-lg font-bold tracking-wide text-black uppercase">
<a className="hover:text-[#FF6B6B] hover:-translate-y-1 transition-all inline-block" href="#">
            Directory
          </a>
<a className="hover:text-[#FF6B6B] hover:-translate-y-1 transition-all inline-block" href="#">
            Stories
          </a>
</div>
<a className="text-4xl font-black tracking-tighter flex items-baseline hover:scale-105 transition-transform text-black" href="#">
          polka
          <span className="text-[#FF6B6B] text-5xl leading-none">.</span>
</a>
<div className="flex gap-8 text-lg font-bold tracking-wide text-black uppercase">
<a className="hover:text-[#FF6B6B] hover:-translate-y-1 transition-all inline-block" href="#">
            About
          </a>
<a className="flex items-center gap-1 hover:text-[#FF6B6B] transition-colors hover:-translate-y-1 inline-block" href="#">
            Submit
            <span className="bg-[#4D96FF] border-2 border-black text-white font-bold text-[10px] px-2 py-0.5 ml-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[10deg] inline-block">
              NEW
            </span>
</a>
</div>
</div>

<a className="md:hidden text-3xl font-black tracking-tighter flex items-baseline absolute left-1/2 -translate-x-1/2 text-black" href="#">
        polka
        <span className="text-[#FF6B6B] text-4xl leading-none">.</span>
</a>

<div className="flex items-center gap-6">
<button className="hover:text-[#FF6B6B] transition-colors hover:scale-110">
<i className="w-8 h-8" data-lucide="search" strokeWidth="2.5"></i>
</button>
<button className="hover:text-[#FF6B6B] transition-colors hover:scale-110 relative">
<i className="w-8 h-8" data-lucide="heart" strokeWidth="2.5"></i>
<span className="absolute -top-2 -right-2 bg-[#FF6B6B] border-2 border-black text-white font-bold text-xs w-6 h-6 flex items-center justify-center rounded-full">
            3
          </span>
</button>
</div>
</nav>

<main className="flex-grow">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 py-8">
<div className="bg-[#FFD460] w-full min-h-[60vh] rounded-3xl flex flex-col md:flex-row items-center overflow-hidden relative border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">

<div className="w-full md:w-1/2 px-8 py-16 md:p-20 lg:p-32 z-10">
<span className="text-sm font-bold tracking-[0.2em] text-black bg-white inline-block px-4 py-1.5 border-2 border-black rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              Made in Poland
            </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-[1.1] mb-10 drop-shadow-[3px_3px_0px_rgba(255,255,255,1)]">
              Discover
              <br/>
              Local Style
            </h1>
<a className="inline-block border-4 border-black bg-[#FF6B6B] text-white px-8 py-4 text-lg font-bold uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-xl" href="#directory">
              Explore Brands
            </a>
</div>

<div className="w-full md:w-1/2 h-64 md:h-full min-h-[60vh] relative border-t-4 md:border-t-0 md:border-l-4 border-black">
<img alt="Fun, colorful, and expressive fashion style" className="object-center block w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>
</div>

<div className="md:px-12 md:py-12 flex flex-col md:flex-row md:items-center max-w-[90rem] border-black border-b-4 mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 gap-x-8 gap-y-8 justify-between" id="directory">

<div className="flex items-center gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
<button className="text-xl font-black tracking-tight text-black border-b-4 border-black pb-1 whitespace-nowrap">
            All Brands
          </button>
<button className="text-xl font-bold tracking-tight text-gray-500 hover:text-black pb-1 whitespace-nowrap transition-colors">
            Streetwear
          </button>
<button className="text-xl font-bold tracking-tight text-gray-500 hover:text-black pb-1 whitespace-nowrap transition-colors">
            Minimalist
          </button>
<button className="text-xl font-bold tracking-tight text-gray-500 hover:text-black pb-1 whitespace-nowrap transition-colors">
            Sustainable
          </button>
</div>

<div className="flex items-center gap-3 bg-white border-4 border-black rounded-xl px-4 py-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-all shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
<span className="text-sm font-bold text-black uppercase tracking-widest">
            Sort By
          </span>
<i className="w-6 h-6 text-black" data-lucide="chevron-down" strokeWidth="2.5"></i>
</div>
</div>

<div className="max-w-[90rem] mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Minimalist fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-[#4D96FF] px-3 py-1.5 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 -rotate-3">
<span className="text-xs font-black tracking-tight text-white uppercase">
                  Eco-Friendly
                </span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  Nago
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Timeless, sustainable basics made from organic materials.
                </p>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Streetwear fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  MISBHV
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Global luxury streetwear rooted in post-soviet club culture.
                </p>
</div>
<span className="text-xs font-bold tracking-widest text-black mt-1 uppercase border-2 border-black px-2 py-1 rounded-md bg-[#FFD460] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Streetwear
              </span>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Bags accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  Chylak
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Elegant, high-quality leather bags with distinct embossed
                  numbers.
                </p>
</div>
<span className="text-xs font-bold tracking-widest text-black mt-1 uppercase border-2 border-black px-2 py-1 rounded-md bg-[#FFD460] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Accessories
              </span>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Casual fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  The Odder Side
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Effortless, feminine silhouettes focused on comfort and style.
                </p>
</div>
<span className="text-xs font-bold tracking-widest text-black mt-1 uppercase border-2 border-black px-2 py-1 rounded-md bg-[#FFD460] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Casual
              </span>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Tailored coats" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-[#4D96FF] px-3 py-1.5 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 rotate-3">
<span className="text-xs font-black tracking-tight text-white uppercase">
                  Local Sourcing
                </span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  Elementy
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Transparent pricing and ethical production of modern classics.
                </p>
</div>
<span className="text-xs font-bold tracking-widest text-black mt-1 uppercase border-2 border-black px-2 py-1 rounded-md bg-[#FFD460] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Minimalist
              </span>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-[3/4] bg-white mb-4 overflow-hidden relative border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
<img alt="Comfort fashion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl font-black tracking-tight text-black mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  Risk Made in Warsaw
                </h3>
<p className="text-lg text-gray-800 font-medium">
                  Transforming classic tailoring into comfortable grey melange
                  pieces.
                </p>
</div>
<span className="text-xs font-bold tracking-widest text-black mt-1 uppercase border-2 border-black px-2 py-1 rounded-md bg-[#FFD460] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Everyday
              </span>
</div>
</a>
</div>

<div className="mt-20 flex justify-center">
<button className="flex items-center gap-2 text-xl font-bold tracking-tight text-white bg-[#4D96FF] border-4 border-black px-8 py-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all group">
            View Complete Directory
            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</main>

<footer className="w-full px-6 md:px-12 py-12 border-t-4 border-black flex justify-between items-center text-lg font-bold text-black bg-white">
<p className="text-black">© 2024 Polka Directory.</p>
<div className="flex gap-6">
<a className="text-black hover:text-[#FF6B6B] hover:-translate-y-1 transition-all inline-block" href="#">
<i className="w-7 h-7" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-black hover:text-[#FF6B6B] hover:-translate-y-1 transition-all inline-block" href="#">
<i className="w-7 h-7" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</footer>


    </>
  );
}
