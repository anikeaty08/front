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
      

<div className="absolute top-0 left-0 right-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
<img alt="Bauarbeiten Hintergrund" className="object-cover w-full h-full opacity-40" src="https://i.postimg.cc/1RJZT1Md/magnific-stworz-identyczna-grafike-z-odwzorowaniem-wszystki-40074.png"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
</div>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:px-6 lg:px-8">
<div className="w-full max-w-4xl mx-auto space-y-14 text-center">

<header className="max-w-3xl mx-auto space-y-5">
<h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Alles ist reibungslos verlaufen!
          </h1>
<p className="text-xl font-light text-gray-300 sm:text-2xl">
            Wir lesen gerade Ihre Anfrage und werden uns in Kürze bei Ihnen
            melden.
          </p>
</header>

<div className="relative w-full max-w-3xl mx-auto overflow-hidden shadow-2xl rounded-2xl bg-[#0a0a0a] ring-1 ring-white/5">


<div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
<div className="wistia_responsive_wrapper" style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
<div className="wistia_embed wistia_async_7mgfxx5yko videoFoam=true playerColor=f5a623" style={{height: '100%', position: 'relative', width: '100%'}}>
<div className="wistia_swatch" style={{height: '100%', left: '0', opacity: '0', overflow: 'hidden', position: 'absolute', top: '0', transition: 'opacity 200ms', width: '100%'}}>
<img alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" src="https://fast.wistia.com/embed/medias/7mgfxx5yko/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}}/>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-12 pt-6">

<a className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-normal text-black transition-all duration-300 transform rounded-full bg-[#f5a623] hover:bg-[#e0961c] hover:-translate-y-0.5 shadow-[0_0_40px_-10px_rgba(245,166,35,0.3)] active:scale-[0.98]" href="https://wa.me/48724735894">
<span>Zu WhatsApp gehen</span>
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7 pb-4">

<div className="flex items-center -space-x-4">
<img alt="Kunde" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kundin" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kunde" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900 grayscale-[20%]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kundin" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center gap-2 sm:items-start">

<div className="flex gap-1">
<i className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-[#f5a623] fill-[#f5a623]" data-lucide="star" strokeWidth="1.5"></i>
</div>

<p className="text-lg font-light text-gray-400">
                Schon bald gehören Sie zu über 500++ zufriedenen Kunden.
              </p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
