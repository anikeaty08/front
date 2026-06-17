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



      // Initialize Lucide icons
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
      

<div className="w-full max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-6 h-full lg:h-[860px]">

<div className="col-span-1 lg:col-span-3 flex flex-col gap-6 h-full">

<div className="bg-white rounded-[48px] p-8 flex-1 flex flex-col shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] relative">

<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">
                Lucid Vision X
              </h2>
<p className="text-sm text-gray-500 mt-1">Car Info</p>
</div>
<button className="bg-gray-100/80 hover:bg-gray-200 transition-colors p-2.5 rounded-full">
<i className="w-5 h-5 text-gray-600" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-col gap-7 flex-1 relative">

<div className="absolute right-0 top-2 bottom-4 w-1 bg-gray-100 rounded-full">
<div className="w-full h-1/3 bg-gray-300 rounded-full"></div>
</div>

<div className="flex items-center gap-4 pr-6">
<div className="bg-gray-50/80 p-3.5 rounded-full">
<i className="w-5 h-5 text-gray-800" data-lucide="route" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">1000 km</p>
<p className="text-xs text-gray-400 mt-0.5">Range</p>
</div>
</div>

<div className="flex items-center gap-4 pr-6">
<div className="bg-gray-50/80 p-3.5 rounded-full">
<i className="w-5 h-5 text-gray-800" data-lucide="gauge" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">400 km/h</p>
<p className="text-xs text-gray-400 mt-0.5">Top Speed</p>
</div>
</div>

<div className="flex items-center gap-4 pr-6">
<div className="bg-gray-50/80 p-3.5 rounded-full">
<i className="w-5 h-5 text-gray-800" data-lucide="battery-charging" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">85 kWh</p>
<p className="text-xs text-gray-400 mt-0.5">Battery</p>
</div>
</div>

<div className="flex items-center gap-4 pr-6">
<div className="bg-gray-50/80 p-3.5 rounded-full">
<i className="w-5 h-5 text-gray-800" data-lucide="plug-zap" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">Type 1-J1y23</p>
<p className="text-xs text-gray-400 mt-0.5">Charging Type</p>
</div>
</div>

<div className="flex items-center gap-4 pr-6 opacity-60">
<div className="bg-gray-50/80 p-3.5 rounded-full">
<i className="w-5 h-5 text-gray-500" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-500">80% in 30 min</p>
<p className="text-xs text-gray-400 mt-0.5">Charging Time</p>
</div>
</div>
</div>

<button className="w-full bg-[#0A8765] hover:bg-[#087355] text-white rounded-full py-4 text-base font-medium transition-colors mt-8 shadow-sm">
            Reserve Now
          </button>
</div>

<div className="bg-white rounded-[48px] p-6 flex justify-between items-center shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] shrink-0">
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">
              My Location
            </h3>
<p className="text-sm text-gray-500 mt-1">Vermont Square, LA</p>
</div>
<button className="bg-gray-50 hover:bg-gray-100 transition-colors p-3 rounded-full">
<i className="w-5 h-5 text-gray-600" data-lucide="expand" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-6 relative flex flex-col h-full w-full">

<div className="absolute top-0 left-0 right-0 z-20 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">

<div className="bg-white rounded-full px-7 py-3.5 flex items-center gap-8 shadow-sm border border-gray-100">
<button className="text-[#0A8765] transition-colors">
<i className="w-[22px] h-[22px]" data-lucide="home" strokeWidth="1.5"></i>
</button>
<button className="text-gray-400 hover:text-gray-700 transition-colors">
<i className="w-[22px] h-[22px]" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<button className="text-gray-400 hover:text-gray-700 transition-colors">
<i className="w-[22px] h-[22px]" data-lucide="layout-grid" strokeWidth="1.5"></i>
</button>
<button className="text-gray-400 hover:text-gray-700 transition-colors">
<i className="w-[22px] h-[22px]" data-lucide="message-square" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-[#5A6370] rounded-full p-1.5 flex items-center shadow-md">
<button className="bg-[#8590A2] text-white rounded-full px-10 py-2.5 text-base font-medium shadow-sm transition-all">
              Rent
            </button>
<button className="text-white/70 hover:text-white rounded-full px-10 py-2.5 text-base font-normal transition-all">
              Buy
            </button>
<button className="text-white/70 hover:text-white rounded-full px-10 py-2.5 text-base font-normal transition-all">
              Sell
            </button>
</div>
</div>

<div className="relative flex-1 w-full h-full overflow-hidden min-h-[500px] lg:min-h-0 flex flex-col justify-between group" style={{WebkitMaskImage: 'url(&quot', data: 'image/svg+xml, %3Csvg xmlns=\'http: //www.w3.org/2000/svg\' viewBox=\'0 0 1 1\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M 0 0.3 C 0 0.18, 0.05 0.18, 0.15 0.18 L 0.38 0.18 C 0.45 0.18, 0.45 0.04, 0.52 0.04 L 0.85 0.04 C 0.95 0.04, 1 0.1, 1 0.2 L 1 0.75 C 1 0.85, 0.85 0.85, 0.85 0.95 L 0.85 1 L 0.1 1 C 0.04 1, 0 0.96, 0 0.9 Z\' fill=\'black\'/%3E%3C/svg%3E&quot', maskImage: 'url(&quot', data: 'image/svg+xml, %3Csvg xmlns=\'http: //www.w3.org/2000/svg\' viewBox=\'0 0 1 1\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M 0 0.3 C 0 0.18, 0.05 0.18, 0.15 0.18 L 0.38 0.18 C 0.45 0.18, 0.45 0.04, 0.52 0.04 L 0.85 0.04 C 0.95 0.04, 1 0.1, 1 0.2 L 1 0.75 C 1 0.85, 0.85 0.85, 0.85 0.95 L 0.85 1 L 0.1 1 C 0.04 1, 0 0.96, 0 0.9 Z\' fill=\'black\'/%3E%3C/svg%3E&quot', WebkitMaskSize: '100% 100%', maskSize: '100% 100%', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center'}}>

<img alt="Electric Car" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&amp;fit=crop&amp;q=80&amp;w=2071"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-0"></div>

<div className="relative z-10 px-10 pt-32 lg:pt-36">
<h1 className="text-5xl md:text-[64px] text-white font-medium tracking-tight leading-[1.05]">
              Explore Electric
              <br/>
              Freedom
            </h1>
</div>

<div className="relative z-10 mx-6 mb-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] flex justify-between items-center shadow-lg self-center w-full max-w-[90%] lg:max-w-[80%]">
<div>
<h3 className="text-white text-xl font-medium tracking-tight">
                My Dates
              </h3>
<p className="text-white/70 text-sm mt-1.5 font-normal">
                20th of July, 10:25 AM
              </p>
</div>
<button className="bg-[#D1FAE5] hover:bg-[#A7F3D0] transition-colors p-3.5 rounded-full shadow-sm flex items-center justify-center">
<i className="w-5 h-5 text-[#065F46]" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 flex flex-col gap-6 lg:gap-0 h-full lg:drop-shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

<div className="bg-white rounded-[40px] p-8 flex-1 flex flex-col shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] lg:shadow-none relative z-10">

<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">
                AI Assistant
              </h2>
<p className="text-sm text-gray-500 mt-1">How can I help you?</p>
</div>
<button className="bg-gray-100/80 hover:bg-gray-200 transition-colors p-2.5 rounded-full">
<i className="w-5 h-5 text-gray-600" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex flex-col gap-3 flex-1">

<button className="flex items-center gap-4 p-3.5 bg-gray-50/50 hover:bg-gray-50 rounded-3xl transition-colors w-full text-left border border-gray-100/50">
<div className="bg-white p-3 rounded-full shadow-sm border border-gray-50">
<i className="w-5 h-5 text-gray-800" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">Book a rent</p>
<p className="text-xs text-gray-400 mt-0.5">5 min</p>
</div>
</button>

<button className="flex items-center gap-4 p-3.5 hover:bg-gray-50 rounded-3xl transition-colors w-full text-left group">
<div className="bg-gray-50/80 group-hover:bg-white p-3 rounded-full group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-50">
<i className="w-5 h-5 text-gray-800" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">Analysis</p>
<p className="text-xs text-gray-400 mt-0.5">Damages</p>
</div>
</button>

<button className="flex items-center gap-4 p-3.5 hover:bg-gray-50 rounded-3xl transition-colors w-full text-left group">
<div className="bg-gray-50/80 group-hover:bg-white p-3 rounded-full group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-50">
<i className="w-5 h-5 text-gray-800" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">Insurance</p>
<p className="text-xs text-gray-400 mt-0.5">Pick a plan</p>
</div>
</button>

<button className="flex items-center gap-4 p-3.5 hover:bg-gray-50 rounded-3xl transition-colors w-full text-left group">
<div className="bg-gray-50/80 group-hover:bg-white p-3 rounded-full group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-50">
<i className="w-5 h-5 text-gray-800" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-base font-medium text-gray-900">Payment</p>
<p className="text-xs text-gray-400 mt-0.5">Calculate</p>
</div>
</button>
</div>

<div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-6">
<input className="w-full border border-gray-200 rounded-full px-6 py-4 text-base font-normal outline-none focus:border-[#0A8765]/40 focus:ring-4 focus:ring-[#0A8765]/5 transition-all placeholder:text-gray-400 bg-white shadow-sm" placeholder="Type your message..." type="text"/>
<div className="flex justify-between items-center px-2">
<div className="flex gap-2">
<button className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-50">
<i className="w-[22px] h-[22px]" data-lucide="mic" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-gray-400 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-50">
<i className="w-[22px] h-[22px]" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
</div>
<button className="bg-[#0A8765] hover:bg-[#087355] text-white px-8 py-3 rounded-full font-medium text-base transition-colors shadow-sm">
                Send
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-[40px] p-6 lg:px-8 lg:pb-8 lg:pt-14 flex justify-between items-center shadow-[0_4px_40px_-10px_rgba(0,0,0,0.03)] lg:shadow-none shrink-0 group cursor-pointer lg:-ml-8 lg:w-[calc(100%+2rem)] lg:-mt-10 relative z-0">
<div className="pr-4">
<h3 className="text-xl font-medium tracking-tight text-gray-900">
              Payment Method
            </h3>
<p className="text-sm text-gray-500 mt-1 leading-snug">
              Update your plan payment details.
            </p>
</div>
<div className="bg-gray-50 group-hover:bg-gray-100 transition-colors p-3.5 rounded-full shrink-0">
<i className="w-5 h-5 text-gray-700" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>


    </>
  );
}
