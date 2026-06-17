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
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<img alt="Bauarbeiten Hintergrund" className="object-cover w-full h-full opacity-40" src="https://i.postimg.cc/1RJZT1Md/magnific-stworz-identyczna-grafike-z-odwzorowaniem-wszystki-40074.png"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
</div>

<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:px-6 lg:px-8">
<div className="w-full max-w-4xl mx-auto space-y-14 text-center">

<header className="max-w-3xl mx-auto space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Alles ist reibungslos verlaufen!
          </h1>
<p className="text-xl text-gray-300 sm:text-2xl tracking-tight">
            Wir lesen gerade Ihre Anfrage und werden uns in Kürze bei Ihnen
            melden.
          </p>
</header>

<div className="relative w-full max-w-3xl mx-auto">
<style>
            .wistia_embed .w-big-play-button {
              background: linear-gradient(to right, #ff8c00, #ff3b00) !important;
              box-shadow: 0 4px 15px rgba(255,140,0,0.3) !important;
              border-radius: 9999px !important;
            }
            .wistia_embed .w-big-play-button:hover {
              background: linear-gradient(to right, #e67e00, #cc2f00) !important;
              box-shadow: 0 6px 20px rgba(255,140,0,0.5) !important;
            }
            .wistia_embed .w-play-bar {
              background: linear-gradient(to right, #ff8c00, #ff3b00) !important;
            }
          </style>
<div className="wistia_responsive_padding rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(255,140,0,0.4)]" style={{padding: '56.25% 0 0 0', position: 'relative', background: 'linear-gradient(#000000, #000000) padding-box, linear-gradient(to right, #ff8c00, #ff3b00) border-box', border: '2px solid transparent'}}>
<div className="wistia_responsive_wrapper" style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
<div className="wistia_embed wistia_async_7mgfxx5yko videoFoam=true playerColor=ff8c00" style={{height: '100%', position: 'relative', width: '100%'}}>
<div className="wistia_swatch" style={{height: '100%', left: '0', opacity: '0', overflow: 'hidden', position: 'absolute', top: '0', transition: 'opacity 200ms', width: '100%'}}>
<img alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" src="https://fast.wistia.com/embed/medias/7mgfxx5yko/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}}/>
</div>
</div>
</div>
</div>


</div>

<div className="flex flex-col items-center gap-12 pt-4">

<a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff8c00] to-[#ff3b00] text-white text-lg font-medium rounded-full hover:from-[#e67e00] hover:to-[#cc2f00] transition-all duration-300 shadow-[0_8px_30px_rgba(255,140,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,140,0,0.6)] transform hover:-translate-y-1" href="https://wa.me/4915153616186">
<iconify-icon className="text-2xl" icon="logos:whatsapp-icon"></iconify-icon>
<span>Zu WhatsApp gehen</span>
</a>

<div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7 pb-4">

<div className="flex items-center -space-x-4">
<img alt="Kunde" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kundin" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kunde" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900 grayscale-[20%]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop"/>
<img alt="Kundin" className="w-14 h-14 rounded-full border-2 border-black object-cover bg-gray-900" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center gap-2 sm:items-start">

<div className="flex gap-1.5">
<iconify-icon className="text-[#f5a623] text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#f5a623] text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#f5a623] text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#f5a623] text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-[#f5a623] text-xl" icon="solar:star-bold"></iconify-icon>
</div>

<p className="text-lg text-gray-400">
                Schon bald gehören Sie zu über
                <strong className="text-white font-medium">500+</strong>
                zufriedenen Kunden.
              </p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
