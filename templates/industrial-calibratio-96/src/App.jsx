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



              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


      (() => {
        const init = () => {
          const elements = document.querySelectorAll('.rolling-number');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                const duration = 2000;
                let startTime = null;
                const updateNumber = (currentTime) => {
                  if (!startTime) startTime = currentTime;
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                  const current = Math.floor(target * easeOut);
                  el.innerText = current.toLocaleString();
                  if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                  } else {
                    el.innerText = target.toLocaleString();
                  }
                };
                requestAnimationFrame(updateNumber);
                observer.unobserve(el);
              }
            });
          }, { threshold: 0.1 });
          elements.forEach(el => observer.observe(el));
        };
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
        } else {
          init();
        }
      })();
    
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
      


<div className="bg-[#0066FF] text-white px-4 py-3 text-center font-sans text-sm z-50 relative shadow-md flex items-center justify-center gap-2">
<iconify-icon icon="solar:info-circle-bold" width="20"></iconify-icon>
<span>
<strong>To use this in GoHighLevel:</strong>
        Copy the entire HTML code and paste it into a
        <em>Custom HTML/JS</em>
        element within your GHL Funnel or Website builder.
      </span>
</div>
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 transition-all">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-12">
<span className="flex items-center gap-3 text-3xl tracking-wider text-zinc-900 font-sans font-semibold">
<img alt="GBTEST Logo" className="h-10 w-10 rounded-lg" src="https://placehold.co/40x40/0066FF/FFFFFF?text=GB"/>
              GBTEST
              <sup className="text-sm font-normal font-sans">®</sup>
</span>
<div className="hidden md:flex items-baseline space-x-6">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Products
              </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Industries
              </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Only in Asean
              </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Resources
              </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Company
              </a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
                Contact
              </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors font-sans" href="#">
              Search
            </a>
<a className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0066FF] to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all font-sans" href="#">
              Get a Quote
            </a>
</div>
</div>
</div>
</nav>
<main className="">

<div className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16 border-b border-zinc-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold mb-8 tracking-wide border bg-blue-50/80 text-[#0066FF] border-[#0066FF]/20 backdrop-blur-sm font-sans">
<iconify-icon height="12" icon="solar:map-point-bold" width="12"></iconify-icon>
                Singapore-based • GBPI-backed • 23 years of R&amp;D
              </div>
<h1 className="text-5xl tracking-tight text-zinc-900 sm:text-6xl lg:text-[72px] leading-[1.05] font-sans font-semibold">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-500">
                  Precision packaging
                </span>
<br className="hidden lg:block"/>
                testing —
                <br className="hidden lg:block"/>
<span className="text-zinc-400 font-sans font-semibold">
                  ASEAN manufacturers
                </span>
</h1>
<p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-lg font-sans font-semibold">
                5 exclusive products with zero ASEAN competitor equivalent.
                English-speaking support, demos, and delivery direct from
                Singapore. Trusted by 50,000+ laboratories worldwide via GBPI.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all w-full sm:w-auto bg-gradient-to-r from-[#0066FF] to-blue-600 shadow-lg shadow-blue-500/25 border border-transparent hover:shadow-blue-500/40 hover:-translate-y-0.5 font-sans" href="#">
                  Request a demo
                </a>
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition-all w-full sm:w-auto hover:ring-zinc-300 hover:shadow-md hover:-translate-y-0.5 font-sans" href="#">
                  Send us your sample
                </a>
</div>
</div>

<div className="relative w-full p-3 sm:p-5 flex items-center justify-center h-full min-h-[400px] bg-transparent cursor-pointer" onclick="window.location.href='https://assets.cdn.filesafe.space/4MzObvRH8y0aN333eSDn/media/0d54500e-b1bf-4a1c-a80d-2f3d7fff491f.png'" role="button">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/30 to-blue-400/20 blur-[80px] -z-10 rounded-full scale-75 opacity-70 animate-pulse">
</div>
<img alt="Precision testing equipment" className="w-full h-[300px] sm:h-[400px] object-contain drop-shadow-2xl" src="https://assets.cdn.filesafe.space/4MzObvRH8y0aN333eSDn/media/0d54500e-b1bf-4a1c-a80d-2f3d7fff491f.png"/>
</div>
</div>

<div className="mt-24 border-t border-zinc-100 pt-12 pb-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 lg:gap-y-0 text-zinc-500 lg:divide-x lg:divide-zinc-200">
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:folder-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 tabular-nums rolling-number font-sans font-semibold" data-target="50000">
                    50,000
                  </span>
<span className="text-xl text-[#0066FF] font-sans font-semibold">
                    +
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  labs worldwide
                </span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:diploma-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 tabular-nums rolling-number font-sans font-semibold" data-target="60">
                    60
                  </span>
<span className="text-xl text-[#0066FF] font-sans font-semibold">
                    +
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  patents
                </span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 tabular-nums rolling-number font-sans font-semibold" data-target="23">
                    23
                  </span>
<span className="text-xl text-[#0066FF] font-sans font-semibold">
                    yrs
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  R&amp;D via GBPI
                </span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 tabular-nums rolling-number font-sans font-semibold" data-target="5">
                    5
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  exclusive products
                </span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 font-sans font-semibold">
                    Singapore
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  direct support
                </span>
</div>
<div className="flex flex-col items-center justify-center px-4 text-center group">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50/80 text-[#0066FF] mb-4 group-hover:scale-110 transition-transform group-hover:bg-blue-100/80">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl tracking-tight text-zinc-900 font-sans font-semibold">
                    CNAS
                  </span>
</div>
<span className="text-sm text-zinc-500 font-medium mt-1 font-sans">
                  accredited lab
                </span>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
<div className="absolute inset-0 w-full h-full z-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)'}}>
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-zinc-50 z-10 pointer-events-none"></div>

<div className="absolute inset-0 flex justify-between px-10 opacity-30 font-mono text-[10px] sm:text-xs text-[#0066FF] pointer-events-none" style={{animation: 'scrollData 60s linear infinite'}}>
<div className="flex flex-col space-y-6 pt-10">
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
</div>
<div className="flex flex-col space-y-6 pt-24 hidden sm:flex">
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
</div>
<div className="flex flex-col space-y-6 pt-4 hidden md:flex">
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
</div>
<div className="flex flex-col space-y-6 pt-32 hidden lg:flex">
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
<div className="font-sans">GBW(E) State Cert.</div>
<div className="font-sans">CE · FCC</div>
<div className="font-sans">Quality management</div>
<div className="font-sans">Accredited test lab</div>
<div className="font-sans">Reference calibration material</div>
<div className="font-sans">EU &amp; US market conformity</div>
<div className="font-sans">ISO 9001:2015</div>
<div className="font-sans">CNAS L8185</div>
</div>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32 border-y border-zinc-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="text-[#0066FF] text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              FEATURED INSTRUMENTS
            </div>
<h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl max-w-4xl font-sans font-semibold">
              13-product portfolio - barrier, physical, sealing, chemical &amp;
              specialty
            </h2>
<div className="mt-8 flex flex-wrap gap-3">
<button className="rounded-full px-5 py-2 text-sm font-medium text-white transition-colors bg-gradient-to-r from-[#0066FF] to-blue-600 shadow-md shadow-blue-500/20 font-sans">
                All
              </button>
<button className="rounded-full bg-white border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 transition-colors font-sans">
                Barrier &amp; Permeation
              </button>
<button className="rounded-full bg-white border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 transition-colors font-sans">
                Physical &amp; Mechanical
              </button>
<button className="rounded-full bg-white border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 transition-colors font-sans">
                Sealing &amp; Integrity
              </button>
<button className="rounded-full bg-white border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 transition-colors inline-flex items-center gap-1.5 font-sans">
                Specialty
                <iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Food &amp; Beverage
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                WVTR · OTR · MAP · Heat seal
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Pharmaceuticals
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                CCIT · WVTR · USP &lt;1207&gt;
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Medical Devices
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                ISO 11607 · BFE/PFE · Tensile
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Cosmetics
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Migration · WVTR · BPJPH halal
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Battery / EV
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Separator QC · Electrolytic WVTR
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Sustainable Packaging
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                ISO 14855 · EPR · PLA / PBAT
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Agrochemicals
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Leak testing · Gas permeability
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                E-Commerce
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                BCT · Falling dart · Tensile
              </p>
<div className="absolute bottom-6 right-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#0066FF]">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-semibold text-[#0066FF] hover:text-blue-700 transition-colors inline-flex items-center font-sans" href="#">
              View all 13 instruments →
            </a>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32 border-y border-zinc-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="text-[#0066FF] text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              Solutions by industry
            </div>
<h2 className="text-3xl tracking-tight text-zinc-900 sm:text-4xl font-sans font-semibold">
              What do you manufacture?
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Food &amp; Beverage
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                WVTR · OTR · MAP · Heat seal
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Pharmaceuticals
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                CCIT · WVTR · USP &lt;1207&gt;
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Medical Devices
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                ISO 11607 · BFE/PFE · Tensile
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Cosmetics
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Migration · WVTR · BPJPH halal
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Battery / EV
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Separator QC · Electrolytic WVTR
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Sustainable Packaging
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                ISO 14855 · EPR · PLA / PBAT
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                Agrochemicals
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                Leak testing · Gas permeability
              </p>
</a>
<a className="flex flex-col p-6 rounded-xl border border-zinc-100 bg-white hover:border-zinc-300 hover:shadow-md transition-all shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30" href="#">
<h3 className="text-base text-zinc-900 mb-2 font-sans font-semibold">
                E-Commerce
              </h3>
<p className="text-sm text-zinc-500 font-sans">
                BCT · Falling dart · Tensile
              </p>
</a>
</div>
</div>
</div>

<div className="bg-white py-24 sm:py-32 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<div className="text-[#0066FF] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              LIVE WEBINARS &amp; ON-DEMAND RECORDINGS
            </div>
<h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl max-w-4xl font-sans font-semibold">
              Learn from Singapore's packaging testing specialists
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
<div className="lg:col-span-7 flex flex-col rounded-2xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50/20 hover:border-blue-200 hover:shadow-lg">
<div className="flex items-center justify-between mb-8">
<span className="inline-flex items-center rounded-full bg-[#F0F5FF] px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-800 font-sans">
                  Next session
                </span>
<span className="text-xs sm:text-sm font-medium text-zinc-500 font-sans">
                  Thu 19 Jun · 2:00 PM SGT
                </span>
</div>
<h3 className="text-2xl sm:text-[28px] tracking-tight text-slate-900 mb-4 leading-[1.2] font-sans font-semibold">
                Packaging barrier testing for ASEAN manufacturers - WVTR, OTR,
                and what your export buyer requires
              </h3>
<p className="text-sm font-medium text-zinc-500 mb-8 font-sans">
                Hosted by GBTest Singapore · 45 min + Q&amp;A · Free · Zoom
              </p>
<div className="flex flex-wrap gap-2 mb-12">
<span className="inline-flex items-center rounded-full bg-[#F0F5FF] px-4 py-1.5 text-xs font-semibold text-slate-800 font-sans">
                  WVTR
                </span>
<span className="inline-flex items-center rounded-full bg-[#F0F5FF] px-4 py-1.5 text-xs font-semibold text-slate-800 font-sans">
                  OTR
                </span>
<span className="inline-flex items-center rounded-full bg-[#F0F5FF] px-4 py-1.5 text-xs font-semibold text-slate-800 font-sans">
                  Food &amp; Pharma
                </span>
</div>
<div className="flex flex-wrap items-center gap-4 mt-auto">
<button className="inline-flex items-center justify-center rounded-full bg-[#0066FF] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors font-sans">
                  Register free
                  <iconify-icon className="ml-1.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors font-sans">
                  Add to calendar
                </button>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
<div className="flex flex-col rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-[#F0F5FF] px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-800 font-sans">
                    Upcoming
                  </span>
<span className="text-xs sm:text-sm font-medium text-zinc-500 font-sans">
                    Thu 17 Jul · 2 PM SGT
                  </span>
</div>
<h3 className="text-lg sm:text-[20px] tracking-tight text-slate-900 mb-3 leading-snug font-sans font-semibold">
                  EPR compliance &amp; biodegradability testing - Vietnam,
                  Indonesia &amp; EU
                </h3>
<p className="text-sm font-medium text-zinc-500 mb-8 font-sans">
                  45 min · Free · GBDA-180
                </p>
<div className="mt-auto">
<button className="inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 px-5 py-2 text-xs sm:text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors font-sans">
                    Notify me
                    <iconify-icon className="ml-1.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-zinc-600 font-sans">
                    On demand
                  </span>
<span className="text-xs sm:text-sm font-medium text-zinc-500 font-sans">
                    Recorded · Available now
                  </span>
</div>
<h3 className="text-lg sm:text-[20px] tracking-tight text-slate-900 mb-3 leading-snug font-sans font-semibold">
                  USP &lt;1207&gt; CCIT for injectables - EU GMP Annex 1
                  compliance
                </h3>
<p className="text-sm font-medium text-zinc-500 mb-8 font-sans">
                  44 min recording · Free access
                </p>
<div className="mt-auto">
<button className="inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 px-5 py-2 text-xs sm:text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 transition-colors font-sans">
                    Watch now
                    <iconify-icon className="ml-1.5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-16 rounded-xl border border-zinc-100 p-8 sm:p-10 max-w-5xl mx-auto bg-gradient-to-br from-white to-zinc-50 shadow-2xl shadow-zinc-200/50">
<h3 className="text-2xl tracking-tight text-slate-900 mb-2 font-sans font-semibold">
              Get notified of all upcoming webinars
            </h3>
<p className="text-sm font-medium text-[#0066FF] mb-6 font-sans">
              Join 500+ ASEAN packaging professionals - no spam, unsubscribe
              anytime
            </p>
<form className="flex flex-col sm:flex-row gap-4 mb-4">
<input className="flex-1 rounded-md border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0066FF] focus:outline-none focus:ring-1 focus:ring-[#0066FF]" placeholder="Your name" type="text"/>
<input className="flex-1 rounded-md border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#0066FF] focus:outline-none focus:ring-1 focus:ring-[#0066FF]" placeholder="Work email address" type="email"/>
<button className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors whitespace-nowrap bg-gradient-to-r from-[#0066FF] to-blue-600 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 font-sans" type="button">
                Notify me →
              </button>
</form>
<p className="text-[11px] text-zinc-400 font-sans">
              GBTest will only use your email for webinar notifications.
            </p>
</div>
</div>
</div>
<div className="py-16 bg-gradient-to-br from-slate-900 via-[#0B1B34] to-slate-900 relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="max-w-2xl text-left">
<h2 className="text-[28px] sm:text-3xl tracking-tight text-white mb-3 font-sans font-semibold">
              Not ready to invest? Send us your sample.
            </h2>
<p className="text-sm text-slate-300 leading-relaxed font-sans">
              CNAS L8185 accredited lab · OTR · WVTR · Seal integrity · CO₂
              evolution · Results within 5 business days
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
<a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-zinc-50 transition-colors whitespace-nowrap w-full sm:w-auto hover:scale-105 font-sans" href="#">
              Submit a sample →
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-transparent border border-slate-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors whitespace-nowrap w-full sm:w-auto font-sans" href="#">
              Learn more
            </a>
</div>
</div>
</div>
<div className="bg-white pt-24 pb-32">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<div className="text-[#0066FF] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              CERTIFICATIONS &amp; ACCREDITATIONS
            </div>
<h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl max-w-4xl font-sans font-semibold">
              Manufactured and accredited to the highest global standards
            </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
<div className="flex flex-col rounded-xl border border-zinc-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
<div className="bg-zinc-50/80 py-10 px-6 text-center border-b border-zinc-100 flex-1 flex items-center justify-center">
<h3 className="text-[15px] font-bold text-zinc-900 font-sans">
                  ISO 9001:2015
                </h3>
</div>
<div className="py-8 px-6 text-center bg-white flex flex-col items-center gap-5">
<p className="text-xs text-zinc-500 font-medium font-sans">
                  Quality management
                </p>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 font-sans" href="#">
                  Download
                  <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col rounded-xl border border-zinc-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
<div className="bg-zinc-50/80 py-10 px-6 text-center border-b border-zinc-100 flex-1 flex items-center justify-center">
<h3 className="text-[15px] font-bold text-zinc-900 font-sans">
                  CNAS L8185
                </h3>
</div>
<div className="py-8 px-6 text-center bg-white flex flex-col items-center gap-5">
<p className="text-xs text-zinc-500 font-medium font-sans">
                  Accredited test lab
                </p>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 font-sans" href="#">
                  Download
                  <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col rounded-xl border border-zinc-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
<div className="bg-zinc-50/80 py-10 px-6 text-center border-b border-zinc-100 flex-1 flex items-center justify-center">
<h3 className="text-[15px] font-bold text-zinc-900 font-sans">
                  GBW(E) State Cert.
                </h3>
</div>
<div className="py-8 px-6 text-center bg-white flex flex-col items-center gap-5">
<p className="text-xs text-zinc-500 font-medium font-sans">
                  Reference calibration material
                </p>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 font-sans" href="#">
                  Download
                  <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col rounded-xl border border-zinc-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
<div className="bg-zinc-50/80 py-10 px-6 text-center border-b border-zinc-100 flex-1 flex items-center justify-center">
<h3 className="text-[15px] font-bold text-zinc-900 font-sans">
                  CE · FCC
                </h3>
</div>
<div className="py-8 px-6 text-center bg-white flex flex-col items-center gap-5">
<p className="text-xs text-zinc-500 font-medium font-sans">
                  EU &amp; US market conformity
                </p>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 font-sans" href="#">
                  Download
                  <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#1C1F26] py-16 mt-auto">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
<div className="lg:col-span-2 flex flex-col gap-6">
<span className="text-[22px] tracking-tight text-white font-sans font-semibold">
              GBTest
            </span>
<p className="text-xs text-zinc-400 max-w-[280px] leading-relaxed font-sans">
              Singapore's dedicated packaging testing specialist backed by
              GBPI's 23 years of R&amp;D.
            </p>
<p className="text-xs text-zinc-400 mt-4 font-sans">
              info@gbtest.sg - www.gbtest.com.sg
            </p>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-1 font-sans">
              Products
            </h4>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Barrier &amp; Permeation
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Physical &amp; Mechanical
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Sealing &amp; Integrity
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Chemical Analysis
            </a>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-400 transition-colors flex items-center gap-1.5 mt-1 font-sans" href="#">
              5 Exclusive Products
              <iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-1 font-sans">
              Industries
            </h4>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Food &amp; Beverage
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Pharmaceuticals
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Medical Devices
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Battery / EV
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Sustainable Packaging
            </a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-1 font-sans">
              Resources
            </h4>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Application notes
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Regulatory guides
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Webinars
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Events
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Certificates
            </a>
</div>
<div className="flex flex-col gap-5">
<h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-1 font-sans">
              Company
            </h4>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              About GBTest
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Lab testing services
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Book a demo
            </a>
<a className="text-[13px] font-semibold text-[#0066FF] hover:text-blue-400 transition-colors mt-1 font-sans" href="#">
              WhatsApp us
            </a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors font-sans" href="#">
              Contact
            </a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl transition-all duration-300" href="#">
<iconify-icon height="32" icon="ic:baseline-whatsapp" width="32"></iconify-icon>
</a>

    </>
  );
}
