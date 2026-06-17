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



(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "x3wdnxseen");



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
      
<main className="w-full max-w-4xl flex flex-col items-center text-center space-y-16">

<div className="space-y-6 max-w-3xl">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Based on your assessment, you have a founder dependency problem. Here's what to do next.
            </h1>
<p className="text-base sm:text-lg text-amber-400 font-medium">
                You qualified. Here is what happens now.
            </p>
</div>

<div className="w-full max-w-3xl space-y-4">
<p className="text-sm font-medium text-slate-400 tracking-wide">
                Watch this before booking your call
            </p>
<div className="relative w-full aspect-video bg-[#111827] border border-[#1F2937] rounded-2xl flex items-center justify-center group cursor-pointer hover:border-amber-500/40 hover:bg-[#151D2C] transition-all duration-300 shadow-2xl shadow-black/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0"></div>
<iconify-icon className="text-6xl sm:text-7xl text-slate-300 group-hover:scale-110 transition-all duration-300 group-hover:text-amber-400 z-10 drop-shadow-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<a className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#0A101C] bg-amber-500 hover:bg-amber-400 rounded-xl transition-all duration-200 shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.4)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0A101C]" href="https://calendly.com/imrana-creativegrowthlab/30min">
            Book My Strategy Call
        </a>

<div className="w-full pt-8 space-y-10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Founders like you have already solved this
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 flex flex-col space-y-4 hover:bg-[#151D2C] hover:border-[#374151] transition-colors duration-300">
<div className="text-4xl font-semibold text-amber-400 tracking-tight">150%</div>
<p className="text-sm text-slate-300 leading-relaxed flex-grow">Revenue increase in 6 months.</p>
<div className="pt-5 border-t border-[#1F2937]">
<p className="text-sm font-medium text-slate-100">Phil George</p>
<p className="text-xs text-slate-500 mt-0.5">MentorcliQ</p>
</div>
</div>

<div className="bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 flex flex-col space-y-4 hover:bg-[#151D2C] hover:border-[#374151] transition-colors duration-300">
<div className="text-4xl font-semibold text-amber-400 tracking-tight">4x</div>
<p className="text-sm text-slate-300 leading-relaxed flex-grow">Pipeline growth and 2x win rates.</p>
<div className="pt-5 border-t border-[#1F2937]">
<p className="text-sm font-medium text-slate-100">Paul Fuller</p>
<p className="text-xs text-slate-500 mt-0.5">Membrain</p>
</div>
</div>

<div className="bg-[#111827]/80 backdrop-blur-sm border border-[#1F2937] rounded-2xl p-8 flex flex-col space-y-4 hover:bg-[#151D2C] hover:border-[#374151] transition-colors duration-300">
<div className="text-4xl font-semibold text-amber-400 tracking-tight">350%</div>
<p className="text-sm text-slate-300 leading-relaxed flex-grow">SDR conversion growth.</p>
<div className="pt-5 border-t border-[#1F2937]">
<p className="text-sm font-medium text-slate-100">Nate Dart</p>
<p className="text-xs text-slate-500 mt-0.5">Safety Mojo</p>
</div>
</div>
</div>
</div>

<div className="w-full flex flex-col items-center space-y-8 pt-8">
<div className="inline-flex items-center space-x-3 bg-[#111827] border border-[#1F2937] rounded-full px-5 py-2.5">
<iconify-icon className="text-xl text-amber-400" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-slate-300">
                    180 days or we keep working for free.
                </p>
</div>
<a className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#0A101C] bg-amber-500 hover:bg-amber-400 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#0A101C]" href="https://calendly.com/imrana-creativegrowthlab/30min">
                Book My Strategy Call
            </a>
</div>
</main>

    </>
  );
}
