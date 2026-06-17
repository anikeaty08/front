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
      

<section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 lg:px-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 bg-[#ef9f53]/20"></div>
<div className="absolute top-12 -right-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 bg-[#6ca4a3]/20"></div>
</div>
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
          Opinie
        </h1>
<p className="text-xl text-slate-600">
          Przeczytaj, co mówią inni, i podziel się swoją opinią.
        </p>
</div>
<div className="w-full max-w-5xl mx-auto mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#ef9f53]/10 text-[#ef9f53] font-semibold text-2xl">
                A
              </div>
<div>
<h4 className="font-semibold tracking-tight text-slate-900 text-lg">
                  Anna K.
                </h4>
<div className="flex gap-1 text-amber-400 mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-slate-600 flex-1">
              Bardzo polecam! Świetna strona, mnóstwo przydatnych informacji i
              super obsługa. Zdecydowanie warto.
            </p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#6ca4a3]/10 text-[#6ca4a3] font-semibold text-2xl">
                M
              </div>
<div>
<h4 className="font-semibold tracking-tight text-slate-900 text-lg">
                  Michał T.
                </h4>
<div className="flex gap-1 text-amber-400 mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-slate-600 flex-1">
              Pełen profesjonalizm. Korzystam od dawna i za każdym razem jestem
              bardzo zadowolony z rezultatów.
            </p>
</div>
</div>
</div>
<div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6 text-center">
          Zostaw swoją opinię
        </h3>
<form className="flex flex-col gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="nickname">
              Twój nick
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6ca4a3]/50 focus:border-[#6ca4a3] bg-slate-50 transition-colors" id="nickname" name="nickname" placeholder="Wpisz swój nick" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="review">
              Twoja opinia
            </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#6ca4a3]/50 focus:border-[#6ca4a3] bg-slate-50 transition-colors resize-none" id="review" name="review" placeholder="Podziel się swoimi wrażeniami..." required="" rows="4"></textarea>
</div>
<button className="mt-2 w-full flex items-center justify-center gap-2 bg-[#244053] hover:bg-[#1a2f3d] text-white px-6 py-3.5 rounded-xl transition-colors font-semibold tracking-tight text-lg" type="submit">
            Wyślij opinię
            <i className="w-5 h-5" data-lucide="send" strokeWidth="2"></i>
</button>
</form>
</div>
</section>







<div className="fixed bottom-0 left-0 w-full bg-white py-4 px-6 z-50 flex flex-col sm:flex-row justify-center items-center gap-4 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] border-t border-slate-100">
<span className="font-semibold tracking-tight text-lg text-slate-900">
        Skontaktuj się z nami:
      </span>
<div className="flex gap-3">
<a className="flex items-center gap-2 bg-[#6ca4a3] hover:bg-[#5b8e8d] text-white px-5 py-2.5 rounded-full transition-colors font-medium" href="tel:+48123456789">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="2"></i>
          Zadzwoń
        </a>
<a className="flex items-center gap-2 bg-[#244053] hover:bg-[#1a2f3d] text-white px-5 py-2.5 rounded-full transition-colors font-medium" href="mailto:kontakt@strona.pl">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="2"></i>
          Napisz email
        </a>
</div>
</div>


    </>
  );
}
