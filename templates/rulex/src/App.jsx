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



      try {
        window.history.replaceState(null, 'Brand Manual', '/brandmanual');
      } catch(e) {}
    
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-[90rem] mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="/brandmanual">
<img alt="Rulex Invest" className="h-8 w-auto object-contain" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
<div className="hidden sm:flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md border border-slate-200 ml-3">
            Design System
          </div>
</a>

<div className="flex items-center gap-4">
<div className="hidden md:flex text-sm font-medium text-slate-500 gap-6 mr-4">
<a className="hover:text-slate-900 transition-colors" href="#ui-components">
              Komponenten
            </a>
<a className="hover:text-slate-900 transition-colors" href="#assets">
              Ressourcen
            </a>
</div>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-2" href="#assets">
<iconify-icon height="16" icon="solar:download-linear" width="16"></iconify-icon>
            Kit herunterladen
          </a>
<button className="md:hidden p-2 text-slate-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<div className="max-w-[90rem] mx-auto px-6 lg:px-8 w-full flex-grow flex">

<aside className="hidden md:block w-64 shrink-0 py-10 pr-8 border-r border-slate-200 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar sticky top-16">
<nav className="space-y-8 pb-10">
<div className="">
<h5 className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-3">
              Markenstrategie
            </h5>
<ul className="space-y-2">
<li className="">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#introduction">
                  Einführung
                </a>
</li>
<li className="">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#tone-of-voice">
                  Kommunikationsstil
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-3">
              Visuelle Identität
            </h5>
<ul className="space-y-2">
<li>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#logo">
                  Logo
                </a>
</li>
<li>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#colors">
                  Farbsystem
                </a>
</li>
<li>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#typography">
                  Typografie
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-3">
              Digitales System
            </h5>
<ul className="space-y-2">
<li>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#layout">
                  Layout &amp; Abstände
                </a>
</li>
<li className="">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#ui-components">
                  UI-Komponenten
                </a>
</li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-3">
              Anwendung
            </h5>
<ul className="space-y-2">
<li className="">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#mockups">
                  Mockups
                </a>
</li>
<li className="">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors block" href="#assets">
                  Ressourcen-Bibliothek
                </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 min-w-0 py-10 lg:py-16 md:pl-12 lg:pl-20 pb-32 max-w-5xl">

<section className="mb-20" id="introduction">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Einführung
            </h2>
<p className="text-slate-600">
              Die Grundlage unserer visuellen Identität.
            </p>
</div>
<p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            Dieses Design-System legt fest, wie Rulex Invest visuell und
            funktional kommuniziert. Es sorgt für Konsistenz, beschleunigt die
            Entwicklung und garantiert ein erstklassiges, institutionelles
            Erlebnis an allen Kontaktpunkten.
          </p>
</section>

<section className="mb-20" id="logo">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Logo
            </h2>
<p className="text-slate-600">
              Regeln für die Anwendung unseres bekanntesten Assets.
            </p>
</div>
<div className="space-y-12">

<div className="grid lg:grid-cols-2 gap-6">
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Primäres Logo
                </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 flex items-center justify-center h-48">
<img alt="Rulex Invest" className="h-20 w-auto object-contain" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
</div>
</div>
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Einfarbig (Hell/Dunkel)
                </h3>
<div className="grid grid-cols-2 h-48 rounded-2xl overflow-hidden border border-slate-200">
<div className="bg-white p-6 flex items-center justify-center">
<img alt="Rulex Invest" className="h-8 w-auto object-contain" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
</div>
<div className="bg-slate-900 p-6 flex items-center justify-center">
<img alt="Rulex Invest" className="h-8 w-auto object-contain brightness-0 invert" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Symbol / Bildmarke
                </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 flex items-center justify-around h-40">
<div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center shadow-sm">
<span className="text-2xl font-medium text-white tracking-tight">
                      R
                    </span>
</div>
<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
<span className="text-2xl font-medium text-white tracking-tight">
                      R
                    </span>
</div>
<div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
<span className="text-2xl font-medium text-slate-900 tracking-tight">
                      R
                    </span>
</div>
</div>
</div>
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Favicon Min. Größe
                </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 flex flex-col items-center justify-center h-40 gap-4">
<div className="flex items-end gap-8">
<div className="flex flex-col items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center shadow-sm">
<span className="text-base font-medium text-white tracking-tight leading-none">
                          R
                        </span>
</div>
<span className="text-xs text-slate-500 font-mono">
                        32x32
                      </span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-4 h-4 bg-slate-900 rounded-[4px] flex items-center justify-center shadow-sm">
<span className="text-[9px] font-medium text-white tracking-tight leading-none">
                          R
                        </span>
</div>
<span className="text-xs text-slate-500 font-mono">
                        16x16
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-8">
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Schutzraum
                </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 flex items-center justify-center relative">
<div className="relative border border-blue-300 border-dashed p-8 bg-blue-50/50">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 text-xs font-medium text-blue-600">
                      x
                    </div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-1rem] text-xs font-medium text-blue-600">
                      x
                    </div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 text-xs font-medium text-blue-600">
                      x
                    </div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 text-xs font-medium text-blue-600">
                      x
                    </div>
<img alt="Rulex Invest" className="h-12 w-auto object-contain" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
</div>
</div>
</div>
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Falsche Verwendung
                </h3>
<div className="grid grid-cols-2 gap-4">
<div className="border border-red-100 bg-red-50/30 rounded-xl p-6 flex flex-col items-center justify-center relative h-32">
<div className="absolute top-3 left-3 text-red-500">
<iconify-icon height="20" icon="solar:close-circle-bold" width="20"></iconify-icon>
</div>
<img alt="Keine Schlagschatten" className="h-6 w-auto object-contain drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)] mb-3 mt-2" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
<span className="text-xs font-medium text-red-800 text-center">
                      Keine Schlagschatten
                    </span>
</div>
<div className="border border-red-100 bg-red-50/30 rounded-xl p-6 flex flex-col items-center justify-center relative h-32">
<div className="absolute top-3 left-3 text-red-500">
<iconify-icon height="20" icon="solar:close-circle-bold" width="20"></iconify-icon>
</div>
<img alt="Kein Verzerren" className="h-6 w-auto object-contain scale-y-150 scale-x-75 mb-3 mt-2" src="https://rulex.weboptim.eu/wp-content/uploads/rulex-logo-black.svg"/>
<span className="text-xs font-medium text-red-800 text-center">
                      Kein Verzerren
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="colors">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Farbsystem
            </h2>
<p className="text-slate-600">
              Verwendet für Hintergründe (50-100), Rahmen (200), sekundären Text
              (400-600).
            </p>
</div>
</section>

<section className="mb-20" id="typography">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Typografie
            </h2>
<p className="text-slate-600">
              Inter treibt unsere Schnittstelle an. Sauber, neutral und gut
              lesbar.
            </p>
</div>
<div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-12 bg-slate-50">
<div className="p-8 border-b border-slate-200">Primäre Schriftart</div>
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 bg-white">
<div className="p-6 text-center">
<span className="block text-2xl font-normal text-slate-900">
                  Ag
                </span>
<span className="block text-xs text-slate-500 mt-2">
                  Regular 400
                </span>
</div>
<div className="p-6 text-center">
<span className="block text-2xl font-medium text-slate-900">
                  Ag
                </span>
<span className="block text-xs text-slate-500 mt-2">
                  Medium 500
                </span>
</div>
</div>
</div>
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-6">
              Desktop-Skalierung
            </h3>
<div className="space-y-0 border-y border-slate-200">
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Display 1
                </div>
<div className="col-span-6 text-5xl font-medium tracking-tight text-slate-900">
                  Investieren weitergedacht.
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  48px / Tight
                </div>
</div>
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Heading 1
                </div>
<div className="col-span-6 text-4xl font-medium tracking-tight text-slate-900">
                  Dashboard-Übersicht
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  36px / Tight
                </div>
</div>
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Heading 2
                </div>
<div className="col-span-6 text-2xl font-medium tracking-tight text-slate-900">
                  Aktuelle Transaktionen
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  24px / Tight
                </div>
</div>
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Heading 3
                </div>
<div className="col-span-6 text-lg font-medium text-slate-900">
                  Kontodetails
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  18px / Normal
                </div>
</div>
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Body Large
                </div>
<div className="col-span-6 text-lg font-normal text-slate-600 leading-relaxed">
                  Unsere Plattform bietet institutionelle Tools für
                  Privatanleger.
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  18px / Relaxed
                </div>
</div>
<div className="grid grid-cols-12 py-5 border-b border-slate-100 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Body Base
                </div>
<div className="col-span-6 text-base font-normal text-slate-600 leading-relaxed">
                  Bitte überprüfen Sie die allgemeinen Geschäftsbedingungen,
                  bevor Sie mit der Transaktion fortfahren.
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  16px / Relaxed
                </div>
</div>
<div className="grid grid-cols-12 py-5 items-baseline gap-4 hover:bg-slate-50 px-2 transition-colors">
<div className="col-span-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Caption
                </div>
<div className="col-span-6 text-xs font-normal text-slate-500">
                  Zuletzt aktualisiert am 24. Okt. 2024.
                </div>
<div className="col-span-3 text-right text-xs font-mono text-slate-500">
                  12px / Normal
                </div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="ui-components">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              UI-Komponenten
            </h2>
<p className="text-slate-600">
              Die Bausteine des digitalen Erlebnisses von Rulex Invest.
            </p>
</div>
<div className="space-y-12">

<div>
<h3 className="text-base font-medium text-slate-900 mb-4">
                Schaltflächen
              </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-wrap gap-8 items-end">
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-slate-500">Primär</span>
<button className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    Aktion ausführen
                  </button>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-slate-500">
                    Sekundär
                  </span>
<button className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    Aktion ausführen
                  </button>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-slate-500">Ghost</span>
<button className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                    Aktion ausführen
                  </button>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium text-slate-900 mb-4">
                Formularelemente
              </h3>
<div className="bg-white border border-slate-200 rounded-2xl p-8 grid md:grid-cols-2 gap-8 shadow-sm">

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-900">
                    Betrag (USD)
                  </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-slate-500 sm:text-sm">$</span>
</div>
<input className="block w-full pl-7 pr-12 py-2 border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors text-slate-900 placeholder:text-slate-400 outline-none" placeholder="0.00" type="text" value="10,000"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-900">
                    Portfolio-Strategie
                  </label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors appearance-none text-slate-900 outline-none bg-white">
                      Hohe Rendite
                    </select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between col-span-full pt-5 mt-2 border-t border-slate-100">
<div>
<h4 className="text-sm font-medium text-slate-900">
                      Reinvestition
                    </h4>
<p className="text-sm text-slate-500 mt-0.5">
                      Mit Auszahlungen automatisch weitere Anteile kaufen.
                    </p>
</div>
<button aria-checked="true" className="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" role="switch" type="button">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Abzeichen
                </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-wrap gap-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Neue Funktion
                  </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Abgeschlossen
                  </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    Entwurf
                  </span>
</div>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 mb-4">
                  Warnhinweis
                </h3>
<div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
<iconify-icon className="text-blue-600 mt-0.5" height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-blue-900">
                      Update verfügbar
                    </h4>
<p className="text-sm text-blue-700 mt-1">
                      Eine neue Version des Handelsterminals ist bereit.
                      <a className="font-medium underline hover:text-blue-800" href="#">
                        Jetzt aktualisieren
                      </a>
</p>
</div>
</div>
</div>
</div>

<div className="">
<h3 className="text-base font-medium text-slate-900 mb-4">
                Karten (Datenanzeige)
              </h3>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden max-w-sm">
<div className="p-5 border-b border-slate-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">
                        S&amp;P 500 Index
                      </h4>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                      +1.2%
                    </span>
</div>
<div className="p-5">
<div className="text-2xl font-medium tracking-tight text-slate-900">
                      $5,123.45
                    </div>
<div className="text-xs text-slate-500 mt-1">
                      Vor 2 Min. aktualisiert
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="layout">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Layout &amp; Abstände
            </h2>
<p className="text-slate-600">
              Gleichmäßige Abstände schaffen Rhythmus und Hierarchie.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div>
<h3 className="text-base font-medium text-slate-900 mb-4">
                Abstandsskala (Tailwind)
              </h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-2 h-8 bg-blue-100 rounded"></div>
<span className="text-xs font-mono w-16">2 (8px)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-4 h-8 bg-blue-200 rounded"></div>
<span className="text-xs font-mono w-16">4 (16px)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-8 bg-blue-300 rounded"></div>
<span className="text-xs font-mono w-16">6 (24px)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 bg-blue-400 rounded"></div>
<span className="text-xs font-mono w-16">8 (32px)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-blue-500 rounded"></div>
<span className="text-xs font-mono w-16">12 (48px)</span>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-8 bg-blue-600 rounded"></div>
<span className="text-xs font-mono w-16">16 (64px)</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-medium text-slate-900 mb-4">
                Schatten &amp; Radien
              </h3>
<p className="text-slate-600 leading-relaxed">
                Wir verwenden ausschließlich dezente Schatten, um eine flache,
                moderne Ästhetik beizubehalten.
              </p>
</div>
</div>
</section>

<section className="mb-20" id="tone-of-voice">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Kommunikationsstil
            </h2>
<p className="text-slate-600">
              Professionell, objektiv und motivierend.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h4 className="font-medium text-slate-900 mb-2">Vertrauenswürdig</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Wir befassen uns mit Finanzen. Jedes Wort muss Stabilität und
                Sicherheit vermitteln. Keine Übertreibungen.
              </p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h4 className="font-medium text-slate-900 mb-2">
                Klar &amp; Präzise
              </h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Wir respektieren die Intelligenz unserer Nutzer. Wir erklären
                komplexe Konzepte klar, ohne sie zu vereinfachen.
              </p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h4 className="font-medium text-slate-900 mb-2">Objektiv</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                Märkte sind volatil; unsere Benutzeroberfläche nicht. Wir
                verwenden objektive Sprache und vermeiden Ausrufezeichen.
              </p>
</div>
</div>
<div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-red-800">
<strong className="block mb-2 font-medium">Vermeiden:</strong>
            "Keine Panik! Der Markt spielt gerade verrückt."
          </div>
</section>




<section className="mb-20" id="mockups">
<div className="mb-8 border-b border-slate-200 pb-5">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
              Mockups
            </h2>
<p className="text-slate-600">
              Wie das System in der Praxis zusammenwirkt.
            </p>
</div>
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 mockup-grid overflow-hidden">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

<div className="w-full max-w-lg bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">

<div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="mx-auto w-1/2 bg-white border border-slate-200 rounded text-[10px] text-center text-slate-400 py-1 font-mono">
                    app.rulex-invest.com
                  </div>
</div>

<div className="p-6">+2,4 % diese Woche</div>
</div>

<div className="w-72 h-[500px] bg-white rounded-[2.5rem] shadow-xl border-[6px] border-slate-900 overflow-hidden relative shrink-0">

<div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-xl w-32 mx-auto"></div>

<div className="pt-12 px-5 pb-6 h-full flex flex-col">
<div className="flex justify-between items-center mb-8">
<iconify-icon className="text-slate-900" height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<span className="text-sm font-medium text-slate-600">JD</span>
</div>
</div>
<div className="bg-slate-900 rounded-2xl p-5 text-white mb-6">
<p className="text-xs text-slate-400 mb-1">Gesamtsaldo</p>
<h4 className="text-2xl font-medium tracking-tight mb-4">
                      $45,231.89
                    </h4>
<button className="w-full bg-blue-600 text-sm font-medium py-2 rounded-lg">
                      Einzahlen
                    </button>
</div>
<h5 className="text-sm font-medium text-slate-900 mb-4">
                    Schnellaktionen
                  </h5>
<div className="grid grid-cols-2 gap-3 mb-auto">
<div className="border border-slate-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
