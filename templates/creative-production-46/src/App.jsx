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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute -bottom-[30%] -left-[30%] w-[150vw] h-[150vw] lg:w-[100vw] lg:h-[100vw] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)] blur-[100px] mix-blend-screen opacity-100"></div>

<div className="absolute -bottom-[15%] -left-[15%] w-[100vw] h-[100vw] lg:w-[70vw] lg:h-[70vw] rounded-full bg-black shadow-[0_0_120px_60px_rgba(255,255,255,0.5)] border border-white/10"></div>
</div>
<div className="relative z-10 flex flex-col min-h-screen max-w-screen-2xl mx-auto px-6 py-10 md:px-12 md:py-16">

<header className="w-full mb-16 md:mb-24">
<nav>
<ul className="flex flex-wrap gap-x-8 gap-y-4 text-base tracking-widest text-zinc-500 uppercase font-light">
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">Bio</a>
</li>
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">
                Production
              </a>
</li>
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">
                Event
              </a>
</li>
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">
                Sport
              </a>
</li>
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">
                Impact
              </a>
</li>
<li>
<a className="hover:text-zinc-100 transition-colors" href="#">
                Contact
              </a>
</li>
</ul>
</nav>
</header>

<main className="flex-1 flex flex-col lg:flex-row gap-12 w-full">

<div className="flex-1 flex flex-col items-center lg:items-start w-full">
<div className="mb-12 md:mb-20 text-center lg:text-left w-full pl-0 lg:pl-16">
<h1 className="text-5xl md:text-7xl font-light text-zinc-100 mb-2 uppercase" style={{fontFamily: 'Syncopate, sans-serif'}}>
              Creative
            </h1>
<h2 className="text-4xl md:text-6xl font-light text-zinc-400 ml-0 lg:ml-24 uppercase" style={{fontFamily: 'Syncopate, sans-serif'}}>
              Production
            </h2>
</div>

<div className="flex flex-col gap-6 md:gap-10 w-full max-w-3xl px-0 md:px-8 mx-auto lg:mx-0">
<div className="group relative aspect-[21/9] w-full border border-white/10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-10 h-10 md:w-12 md:h-12 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="group relative aspect-[21/9] w-full border border-white/10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-10 h-10 md:w-12 md:h-12 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div className="group relative aspect-[21/9] w-full border border-white/10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-10 h-10 md:w-12 md:h-12 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col justify-start items-center w-24 pt-10">
<div className="flex flex-col items-center gap-y-3 text-2xl font-light text-zinc-500 uppercase tracking-widest leading-none">
<span>I</span>
<span>M</span>
<span>P</span>
<span>A</span>
<span>C</span>
<span>T</span>
<div className="h-10"></div>
<span>C</span>
<span>O</span>
<span>L</span>
<span>L</span>
<span>E</span>
<span>C</span>
<span>T</span>
<span>I</span>
<span>V</span>
<span>E</span>
</div>
</div>
</main>

<footer className="mt-24 w-full flex flex-col items-center justify-center gap-4 pb-8">
<a className="text-xl md:text-2xl tracking-tight text-zinc-500 uppercase font-light hover:text-zinc-200 transition-colors" href="#">
          Dane Kontaktowe
        </a>
<div className="text-4xl md:text-5xl tracking-tight text-zinc-100 uppercase font-light mt-2">
          Logotyp
        </div>
</footer>
</div>


    </>
  );
}
