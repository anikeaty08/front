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
      

<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[128px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[128px] pointer-events-none"></div>
<main className="relative z-10 flex min-h-screen items-center justify-center py-20 px-6 sm:px-12 lg:px-24">
<div className="w-full max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative w-full max-w-md mx-auto lg:max-w-full flex justify-center order-2 lg:order-1">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] bg-emerald-500/20 blur-[70px] rounded-[100%] pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[50%] bg-teal-400/20 blur-[40px] rounded-[100%] pointer-events-none"></div>

<img alt="Grafika wiadomości WhatsApp" className="relative z-10 w-full h-auto object-contain max-h-[75vh] drop-shadow-2xl" src="https://i.postimg.cc/g0MZr8kf/Whats-App-Lead-Graphic.png"/>
</div>

<div className="flex flex-col flex-1 order-1 lg:order-2 space-y-8">

<div className="space-y-5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                Sukces
              </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                Wszystko przebiegło pomyślnie!
                <span className="block mt-3 text-zinc-400 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                  Twoje miejsce na szkolenie zostało zarezerwowane.
                </span>
</h1>
</div>

<div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md shadow-sm">
<p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed flex items-start gap-4">
<i className="w-7 h-7 text-emerald-400 shrink-0 mt-0.5" data-lucide="smartphone" strokeWidth="1.5"></i>
                Sprawdź swój Whatsapp, właśnie wysyłam do Ciebie wiadomość
                prywatną na wskazany numer.
              </p>
</div>

<p className="text-lg text-zinc-500 font-normal leading-relaxed pl-2 border-l border-zinc-800">
              Jeśli nic Ci nie przychodzi możesz po prostu teraz do mnie napisać
              klikając poniższy przycisk, a system sam przekieruje Cię do mojego
              whatsappa.
            </p>

<div className="pt-4">
<a className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-lg font-medium rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(16,185,129,0.15)] hover:shadow-[0_0_32px_rgba(16,185,129,0.3)] transform hover:-translate-y-0.5" href="https://wa.me/48602727263">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
                Przejdź do Whatsappa
              </a>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
