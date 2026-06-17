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
      

<header className="w-full max-w-5xl mx-auto px-6 py-8 flex items-center justify-between z-10 relative">
<div className="text-xl font-medium tracking-tighter select-none">STRT.</div>
<nav className="hidden md:flex gap-8 text-sm text-slate-400 font-medium">
<a className="hover:text-white transition-colors" href="#features">
          Możliwości
        </a>
<a className="hover:text-white transition-colors" href="#opinie">Opinie</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="md:hidden text-slate-400">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none"></div>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800/60 text-xs text-slate-300 font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
        Wersja 2.0 jest już dostępna
      </div>

<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl">
        Zbuduj coś wspaniałego
        <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
          w mgnieniu oka
        </span>
</h1>

<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
        Zdobądź natychmiastowy dostęp do narzędzi, które zrewolucjonizują Twój
        proces twórczy. Prosta integracja, najwyższa wydajność i pełna kontrola.
      </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<button className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 px-8 py-3.5 rounded-lg text-sm font-medium shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group" data-easycart-popup="99cacfc4-68bb-42c7-b72a-00bb08e78823" type="button">
          Kup teraz
          <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>

<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all duration-200 flex items-center justify-center gap-2" href="#demo">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
          Zobacz demo
        </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col items-center">
<p className="text-xs text-slate-500 font-medium mb-4 uppercase tracking-widest">
          Zaufali nam najlepsi
        </p>
<div className="flex gap-8 opacity-50 grayscale">
<iconify-icon height="24" icon="solar:figma-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:framer-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
</div>
</main>

<section className="w-full max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10" id="features">

<div className="flex flex-col gap-4 group cursor-default">
<div className="h-10 w-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-100">
          Błyskawiczne działanie
        </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
          Zoptymalizowana architektura zapewnia natychmiastowe ładowanie i
          płynną pracę w każdych warunkach sieciowych.
        </p>
</div>

<div className="flex flex-col gap-4 group cursor-default">
<div className="h-10 w-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-100">
          Prywatność by design
        </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
          Twoje dane są chronione nowoczesnymi algorytmami. Nie śledzimy Cię i
          nie udostępniamy informacji stronom trzecim.
        </p>
</div>

<div className="flex flex-col gap-4 group cursor-default">
<div className="h-10 w-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon height="20" icon="solar:devices-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-100">
          Zawsze w synchronizacji
        </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
          Dostęp z każdego urządzenia, niezależnie gdzie jesteś. Pełna
          synchronizacja w czasie rzeczywistym.
        </p>
</div>
</section>

<footer className="w-full border-t border-slate-900 mt-auto relative z-10">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-light">
<div className="flex items-center gap-2 mb-4 md:mb-0 text-slate-400 font-medium tracking-tighter">
          STRT.
        </div>
<p>© 2024. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">
            Prywatność
          </a>
<a className="hover:text-slate-300 transition-colors" href="#">
            Regulamin
          </a>
<a className="hover:text-slate-300 transition-colors" href="#">Kontakt</a>
</div>
</div>
</footer>

    </>
  );
}
