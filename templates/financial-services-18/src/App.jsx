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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center">
<span className="text-lg font-normal tracking-tighter text-gray-900">
            Zlatá
            <span className="text-amber-500"></span>
            koruna
          </span>
</div>

<nav className="hidden md:flex gap-8">
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Produkty
          </a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Kategorie
          </a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">
            O soutěži
          </a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Finanční akademie
          </a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Magazín
          </a>
</nav>
</div>
</header>

<main className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 lg:py-0 overflow-hidden">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-5 relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100/80 to-amber-50/80 border border-amber-200 shadow-sm mb-6 backdrop-blur-sm">
<iconify-icon className="text-amber-500 text-base" icon="solar:cup-star-bold"></iconify-icon>
<span className="text-xs font-semibold text-amber-800 tracking-wide uppercase">
                Hodnoceno ve Zlaté koruně
              </span>
</div>

<h1 className="text-5xl lg:text-6xl font-semibold tracking-tighter text-gray-900 mb-4 leading-[1.1]">
              Smart Konto Plus
            </h1>
<p className="text-base lg:text-lg font-normal text-gray-500 leading-relaxed mb-6">
              Moderní účet pro každodenní finance s přehlednou mobilní správou,
              rychlým založením online a službami pro pohodlné bankování.
            </p>

<ul className="space-y-3.5 mb-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal text-gray-600">
                  Přehledná mobilní aplikace
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal text-gray-600">
                  Založení účtu online během několika minut
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-normal text-gray-600">
                  Vhodné pro každodenní správu financí
                </span>
</li>
</ul>

<div className="flex flex-wrap items-center gap-3 mb-12"></div>

<div className="flex flex-wrap items-center gap-4 mb-8">
<a className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:bg-gray-800 hover:shadow-[0_12px_25px_-6px_rgba(0,0,0,0.4)] transition-all duration-300" href="#">
                Zjistit více
                <iconify-icon className="text-white" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300" href="#">
<iconify-icon className="text-gray-400 text-lg" icon="solar:global-linear"></iconify-icon>
                Web produktu
              </a>
</div>
<div className="border-t border-gray-200/60 pt-6">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight mb-5 flex items-center gap-2.5">
<iconify-icon className="text-amber-500 text-xl" icon="solar:document-text-bold-duotone"></iconify-icon>
                Související články k produktu
              </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-300" href="#">
<div className="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden shrink-0">
<img alt="Srovnání účtů" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 pt-0.5">
<h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                      Velké srovnání běžných účtů pro rok 2024
                    </h4>
<span className="text-[10px] font-semibold text-gray-400 mt-2 block uppercase tracking-wider">
                      Přečíst článek
                    </span>
</div>
</a>
<a className="group flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-300" href="#">
<div className="w-16 h-16 rounded-xl bg-gray-50 overflow-hidden shrink-0">
<img alt="Smart Konto Plus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div className="flex-1 pt-0.5">
<h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                      Recenze Smart Konto Plus: Proč si ho založit?
                    </h4>
<span className="text-[10px] font-semibold text-gray-400 mt-2 block uppercase tracking-wider">
                      Přečíst článek
                    </span>
</div>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 mt-16 lg:mt-0 relative">

<div className="absolute -top-10 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-amber-200/30 via-amber-100/20 to-transparent rounded-bl-full blur-3xl -z-10 pointer-events-none"></div>
<div className="relative w-full max-w-[480px] mx-auto bg-white rounded-[2rem] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 p-2 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
<div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-50/80 to-transparent"></div>
<div className="relative bg-white rounded-[1.75rem] border border-gray-100/50 p-8 shadow-sm">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white shadow-md">
<iconify-icon className="text-3xl" icon="solar:wallet-money-bold-duotone"></iconify-icon>
</div>
<div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-100/50 to-amber-50/50 border border-amber-200/60 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-amber-500 text-sm" icon="solar:cup-star-bold"></iconify-icon>
<span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                      Hodnoceno ve Zlaté koruně
                    </span>
</div>
</div>
<div className="mb-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200">
<svg className="lucide lucide-command" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Finvia Bank
                    </span>
<span className="w-1 h-1 rounded-full bg-gray-300 mx-1"></span>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Běžné účty
                    </span>
</div>
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight leading-tight">
                    Smart Konto Plus
                  </h3>
</div>
<div className="grid grid-cols-3 gap-3 mb-10">
<div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-amber-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-gray-500 group-hover:text-amber-500" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      Sjednání
                    </p>
<p className="text-sm font-semibold text-gray-900">Online</p>
</div>
<div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-amber-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-gray-500 group-hover:text-amber-500" icon="solar:card-2-linear"></iconify-icon>
</div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      Vedení
                    </p>
<p className="text-sm font-semibold text-gray-900">Zdarma</p>
</div>
<div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-amber-200 transition-colors group">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-2 shadow-sm group-hover:text-amber-600 transition-colors">
<iconify-icon className="text-gray-500 group-hover:text-amber-500" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                      Úročení
                    </p>
<p className="text-sm font-semibold text-gray-900">Až 4,5 %</p>
</div>
</div>
<div className="bg-gradient-to-r from-amber-50/50 to-white rounded-2xl p-4 border border-amber-100/60 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100/50 flex items-center justify-center text-amber-600">
<iconify-icon className="text-xl" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-gray-900">
                        Ověřený produkt
                      </p>
<p className="text-xs text-gray-500">
                        Hodnoceno nezávislou porotou
                      </p>
</div>
</div>
<iconify-icon className="text-amber-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>


<div className="hidden" style={{display: 'none'}}></div>
</div>
</div>
</div>
</main>

    </>
  );
}
