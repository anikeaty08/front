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
      

<div className="w-full max-w-md bg-white sm:min-h-[800px] sm:h-[850px] sm:rounded-3xl sm:shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:border sm:border-neutral-100 flex flex-col relative overflow-hidden">

<header className="flex justify-between items-center px-6 pt-8 pb-4">
<div className="font-bold tracking-tighter text-xl uppercase bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
          vocalize
        </div>
<button className="text-neutral-400 hover:text-neutral-800 transition-colors">
<iconify-icon height="24" icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col pb-12">

<section className="px-6 grid grid-cols-2 gap-3 mt-2">

<div className="border rounded-2xl p-5 flex flex-col justify-between bg-indigo-50 border-indigo-100">
<div className="flex items-center gap-1.5 mb-2 text-indigo-600">
<iconify-icon height="16" icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Remaining</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">
                1,240
              </span>
<span className="text-sm font-medium text-neutral-500">/ 2,400</span>
<span className="text-xs text-neutral-500 ml-0.5">kcal</span>
</div>
<div className="w-full h-1 rounded-full mt-3 overflow-hidden bg-indigo-200/60">
<div className="h-full rounded-full bg-indigo-600" style={{width: '45%'}}></div>
</div>
</div>

<div className="border rounded-2xl p-5 flex flex-col justify-between bg-orange-50 border-orange-100">
<div className="flex items-center gap-1.5 mb-2 text-orange-600">
<iconify-icon height="16" icon="solar:fire-linear" width="16"></iconify-icon>
<span className="text-xs font-medium">Burned</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">
                2,450
              </span>
<span className="text-xs text-neutral-500">kcal</span>
</div>
<div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-medium">
<span className="text-neutral-500">
<span className="text-neutral-400">BMR</span>
                2,000
              </span>
<span className="text-orange-500">
<span className="text-orange-400">Active</span>
                450
              </span>
</div>
</div>
</section>


<section className="px-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-semibold tracking-tight text-neutral-900">
              Today's Log
            </h2>
<span className="text-xs font-medium text-neutral-400">
              1,585 kcal total
            </span>
</div>
<div className="bg-white border border-neutral-100 rounded-2xl overflow-y-auto hide-scrollbar max-h-[220px] shadow-sm">

<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 last:border-0">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
<iconify-icon height="18" icon="solar:soundwave-linear" width="18"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-neutral-800 truncate">
                    5 chicken fingers, 2 sauces and large fries
                  </p>
<p className="text-xs text-neutral-400 mt-0.5">1:15 PM</p>
</div>
</div>
<div className="text-right pl-3 flex-shrink-0">
<p className="text-sm font-semibold text-neutral-900 leading-none">
                  950
                </p>
<p className="text-xs text-neutral-400 mt-1 leading-none">kcal</p>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 last:border-0">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
<iconify-icon height="18" icon="solar:soundwave-linear" width="18"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-neutral-800 truncate">
                    Protein shake with whole milk
                  </p>
<p className="text-xs text-neutral-400 mt-0.5">12:00 PM</p>
</div>
</div>
<div className="text-right pl-3 flex-shrink-0">
<p className="text-sm font-semibold text-neutral-900 leading-none">
                  220
                </p>
<p className="text-xs text-neutral-400 mt-1 leading-none">kcal</p>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 last:border-0">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
<iconify-icon height="18" icon="solar:soundwave-linear" width="18"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-neutral-800 truncate">
                    Medium banana
                  </p>
<p className="text-xs text-neutral-400 mt-0.5">10:15 AM</p>
</div>
</div>
<div className="text-right pl-3 flex-shrink-0">
<p className="text-sm font-semibold text-neutral-900 leading-none">
                  105
                </p>
<p className="text-xs text-neutral-400 mt-1 leading-none">kcal</p>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 last:border-0">
<div className="flex items-center gap-3 min-w-0">
<div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
<iconify-icon height="18" icon="solar:soundwave-linear" width="18"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium text-neutral-800 truncate">
                    Oatmeal with berries and black coffee
                  </p>
<p className="text-xs text-neutral-400 mt-0.5">8:30 AM</p>
</div>
</div>
<div className="text-right pl-3 flex-shrink-0">
<p className="text-sm font-semibold text-neutral-900 leading-none">
                  310
                </p>
<p className="text-xs text-neutral-400 mt-1 leading-none">kcal</p>
</div>
</div>
</div>
</section>

<section className="mt-8 mb-4 py-4">
<div className="px-6 mb-3">
<h2 className="text-base font-semibold tracking-tight text-neutral-900">
              Quick Predict
            </h2>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-4 px-6 snap-x pb-4">

<div className="min-w-[220px] snap-start bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-orange-100 text-orange-600">
<iconify-icon height="14" icon="solar:shop-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-neutral-800">
                    Chipotle
                  </span>
</div>
<p className="text-sm font-medium text-neutral-900">
                  Chicken Burrito Bowl
                </p>
<p className="text-xs text-neutral-500 mt-0.5">850 kcal</p>
</div>
<div className="mt-4 pt-3 border-t border-neutral-100">
<div className="flex justify-between items-center mb-3">
<span className="text-xs text-neutral-500">
                    If eaten, remaining:
                  </span>
<span className="text-xs font-semibold text-neutral-900">
                    390 kcal
                  </span>
</div>
<button className="w-full py-2 transition-colors rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200">
<iconify-icon height="16" icon="solar:add-circle-linear" width="16"></iconify-icon>
                  Log meal
                </button>
</div>
</div>

<div className="min-w-[220px] snap-start bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-600">
<iconify-icon height="14" icon="solar:shop-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-neutral-800">
                    Sweetgreen
                  </span>
</div>
<p className="text-sm font-medium text-neutral-900">Harvest Bowl</p>
<p className="text-xs text-neutral-500 mt-0.5">685 kcal</p>
</div>
<div className="mt-4 pt-3 border-t border-neutral-100">
<div className="flex justify-between items-center mb-3">
<span className="text-xs text-neutral-500">
                    If eaten, remaining:
                  </span>
<span className="text-xs font-semibold text-neutral-900">
                    555 kcal
                  </span>
</div>
<button className="w-full py-2 border transition-colors rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
<iconify-icon height="16" icon="solar:calculator-linear" width="16"></iconify-icon>
                  Calculate
                </button>
</div>
</div>
</div>
</section>
</div>
<nav className="bg-white border-t border-neutral-100 flex items-center justify-between px-6 pt-3 pb-8 sm:pb-4 relative shrink-0 z-20">
<button className="text-indigo-600 p-2 transition-colors">
<iconify-icon height="26" icon="solar:home-smile-bold" width="26"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-indigo-500 p-2 transition-colors">
<iconify-icon height="26" icon="solar:chart-square-linear" width="26"></iconify-icon>
</button>
<div className="w-16 flex-shrink-0"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-6">
<div className="relative w-16 h-16">
<div className="absolute -top-2 -left-2 w-20 h-20 rounded-full mic-pulse pointer-events-none bg-indigo-100"></div>
<button className="absolute inset-0 w-full h-full text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-10 group bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-xl shadow-indigo-500/30">
<iconify-icon className="group-hover:hidden" height="28" icon="solar:microphone-3-linear" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" height="28" icon="solar:plain-linear" width="28"></iconify-icon>
</button>
</div>
</div>
<button className="text-neutral-400 hover:text-indigo-500 p-2 transition-colors">
<iconify-icon height="26" icon="solar:notebook-minimalistic-linear" width="26"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-indigo-500 p-2 transition-colors">
<iconify-icon height="26" icon="solar:user-circle-linear" width="26"></iconify-icon>
</button>
</nav>
</div>

    </>
  );
}
