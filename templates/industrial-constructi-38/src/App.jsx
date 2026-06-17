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
      

<div className="fixed top-0 left-0 h-0.5 z-[70] w-full origin-left" id="scrollProgress" style={{background: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)', transform: 'scaleX(0)'}}></div>

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 opacity-[0.35]" style={{backgroundImage: 'linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)', backgroundSize: '64px 64px', animation: 'gridMove 14s linear infinite'}}></div>

<div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.13), transparent 65%)', filter: 'blur(40px)', animation: 'orbFloat1 18s ease-in-out infinite'}}></div>
<div className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.09), transparent 65%)', filter: 'blur(50px)', animation: 'orbFloat2 22s ease-in-out infinite'}}></div>
<div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full" style={{background: 'radial-gradient(circle, rgba(120, 113, 108, 0.14), transparent 65%)', filter: 'blur(48px)', animation: 'orbFloat3 26s ease-in-out infinite'}}></div>

<canvas className="absolute inset-0 w-full h-full" id="particles"></canvas>

<div className="absolute left-0 right-0 h-px opacity-40" style={{background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)', animation: 'scanline 9s linear infinite'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent" id="siteHeader" style={{backdropFilter: 'blur(12px)', background: 'rgba(9,9,11,0.85)'}}>
<nav aria-label="Hauptnavigation" className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
<a className="flex items-center gap-2.5 group" href="#start">
<span className="relative flex items-center justify-center w-9 h-9 bg-amber-500 text-zinc-950 font-bold rounded-sm tracking-tighter text-sm overflow-hidden transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110" style={{fontFamily: '\'Archivo\', sans-serif'}}>
          KB
          <span className="absolute inset-0" style={{background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)', backgroundSize: '200% 100%', animation: 'shimmer 3.5s linear infinite'}}></span>
</span>
<span className="leading-none">
<span className="block text-zinc-100 font-semibold tracking-tight text-sm" style={{fontFamily: '\'Archivo\', sans-serif'}}>KRANNIK BAU</span>
<span className="block text-zinc-500 text-xs mt-0.5 tracking-wide">Betonstahlverlegung</span>
</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm text-zinc-400">
<a className="relative hover:text-zinc-100 transition-colors duration-200 group/nav" href="#leistungen">Leistungen<span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover/nav:w-full"></span></a>
<a className="relative hover:text-zinc-100 transition-colors duration-200 group/nav" href="#warum">Warum wir<span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover/nav:w-full"></span></a>
<a className="relative hover:text-zinc-100 transition-colors duration-200 group/nav" href="#ablauf">Ablauf<span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover/nav:w-full"></span></a>
<a className="relative hover:text-zinc-100 transition-colors duration-200 group/nav" href="#projekte">Projekte<span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover/nav:w-full"></span></a>
<a className="relative hover:text-zinc-100 transition-colors duration-200 group/nav" href="#faq">FAQ<span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover/nav:w-full"></span></a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 text-sm text-zinc-300 hover:text-amber-400 transition-colors duration-200" href="tel:+495221000000">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
          05221 / 00 00 00
        </a>
<a className="magnetic hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30" href="#kontakt">
          Projekt anfragen
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button aria-label="Menü öffnen" className="lg:hidden flex items-center justify-center w-10 h-10 text-zinc-300" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<div className="hidden lg:hidden bg-zinc-950/95 border-t border-zinc-800 px-5 py-4" id="mobileMenu" style={{backdropFilter: 'blur(12px)'}}>
<div className="flex flex-col gap-1 text-sm">
<a className="mobile-link py-3 px-2 text-zinc-300 hover:text-amber-400 border-b border-zinc-900" href="#leistungen">Leistungen</a>
<a className="mobile-link py-3 px-2 text-zinc-300 hover:text-amber-400 border-b border-zinc-900" href="#warum">Warum wir</a>
<a className="mobile-link py-3 px-2 text-zinc-300 hover:text-amber-400 border-b border-zinc-900" href="#ablauf">Ablauf</a>
<a className="mobile-link py-3 px-2 text-zinc-300 hover:text-amber-400 border-b border-zinc-900" href="#projekte">Projekte</a>
<a className="mobile-link py-3 px-2 text-zinc-300 hover:text-amber-400 border-b border-zinc-900" href="#faq">FAQ</a>
<a className="mobile-link mt-3 inline-flex items-center justify-center gap-2 bg-amber-500 text-zinc-950 font-semibold py-3 rounded-sm" href="#kontakt">Projekt anfragen</a>
</div>
</div>
</header>
<main className="relative z-10" id="start">

<section aria-label="Einstieg" className="relative min-h-screen flex items-center overflow-hidden">
<div className="absolute inset-0" id="heroParallax">
<img alt="Bewehrungsarbeiten mit Betonstahl auf einer Großbaustelle – KRANNIK BAU GmbH" className="w-full h-[115%] object-cover opacity-30 will-change-transform" id="heroImg" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&amp;q=80" style={{transform: 'scale(1.08)'}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(9,9,11,0.97) 0%, rgba(9,9,11,0.75) 50%, rgba(9,9,11,0.45) 100%)'}}></div>
<div className="absolute inset-x-0 bottom-0 h-40" style={{background: 'linear-gradient(to top, rgb(9,9,11), transparent)'}}></div>
</div>

<div aria-hidden="true" className="absolute top-28 right-[8%] hidden lg:block" style={{animation: 'floatY 7s ease-in-out infinite'}}>
<div className="relative w-44 h-44 opacity-60">
<svg className="w-full h-full" style={{animation: 'spinSlow 40s linear infinite'}} viewbox="0 0 176 176"><circle cx="88" cy="88" fill="none" r="84" stroke="rgba(245,158,11,0.25)" stroke-dasharray="6 8" strokeWidth="1" style={{animation: 'dashMove 3s linear infinite'}}></circle></svg>
<svg className="absolute inset-6 w-32 h-32" style={{animation: 'spinSlowRev 28s linear infinite'}} viewbox="0 0 176 176"><circle cx="88" cy="88" fill="none" r="84" stroke="rgba(245,158,11,0.4)" stroke-dasharray="2 10" strokeWidth="1" style={{animation: 'dashMove 2s linear infinite'}}></circle></svg>
<iconify-icon className="absolute inset-0 m-auto text-amber-500/70" icon="solar:settings-linear" style={{animation: 'spinSlow 16s linear infinite'}} width="34"></iconify-icon>
</div>
</div>
<div aria-hidden="true" className="absolute bottom-44 right-[22%] hidden xl:flex items-center gap-3 bg-zinc-900/70 border border-zinc-800 rounded-md px-4 py-3" style={{backdropFilter: 'blur(8px)', animation: 'floatY2 9s ease-in-out infinite'}}>
<span className="relative flex w-2.5 h-2.5">
<span className="absolute inset-0 rounded-full bg-amber-500" style={{animation: 'pulseRing 1.8s ease-out infinite'}}></span>
<span className="relative w-2.5 h-2.5 rounded-full bg-amber-500"></span>
</span>
<span className="text-xs text-zinc-300">Kolonne im Einsatz · Bielefeld</span>
</div>
<div aria-hidden="true" className="absolute top-[38%] right-[14%] hidden xl:flex items-center gap-3 bg-zinc-900/70 border border-zinc-800 rounded-md px-4 py-3" style={{backdropFilter: 'blur(8px)', animation: 'floatY 8s ease-in-out 1.5s infinite'}}>
<iconify-icon className="text-amber-500" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-xs text-zinc-300">Abnahme bestanden · 0 Mängel</span>
</div>
<div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 w-full">
<div className="max-w-3xl">
<div className="reveal inline-flex items-center gap-2 border border-zinc-700/80 bg-zinc-900/60 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-7" style={{backdropFilter: 'blur(8px)'}}>
<span className="relative flex w-1.5 h-1.5">
<span className="absolute inset-0 rounded-full bg-amber-500" style={{animation: 'pulseRing 1.6s ease-out infinite'}}></span>
<span className="relative w-1.5 h-1.5 rounded-full bg-amber-500"></span>
</span>
            Kurzfristig einsatzbereit in NRW &amp; Niedersachsen
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-50 tracking-tight leading-[1.08]" id="heroTitle" style={{fontFamily: '\'Archivo\', sans-serif'}}>
<span className="hero-word">Betonstahlverlegung,</span><br/>
<span className="hero-word">auf</span> <span className="hero-word">die</span> <span className="hero-word">Sie</span>
<span className="hero-word" style={{background: 'linear-gradient(90deg,#f59e0b,#fcd34d,#f59e0b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', animation: 'shimmer 4s linear infinite'}}>bauen</span>
<span className="hero-word">können.</span>
</h1>
<p className="reveal text-base sm:text-lg text-zinc-400 mt-6 max-w-xl leading-relaxed" style={{transitionDelay: '500ms'}}>
            Die KRANNIK BAU GmbH aus Herford ist Ihr Spezialist für Bewehrungsarbeiten im Roh-, Ingenieur- und Industriebau. Erfahrene Kolonnen – sauber nach Plan und Statik, abnahmebereit und termintreu.
          </p>
<div className="reveal flex flex-col sm:flex-row gap-3 mt-9" style={{transitionDelay: '620ms'}}>
<a className="magnetic relative inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-7 py-3.5 rounded-sm text-sm transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 overflow-hidden" href="#kontakt">
<span className="absolute inset-0" style={{background: 'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></span>
<span className="relative">Projekt anfragen</span>
<iconify-icon className="relative" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="magnetic inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 font-medium px-7 py-3.5 rounded-sm text-sm transition-all duration-200 hover:bg-zinc-900" href="#leistungen">
              Leistungen ansehen
            </a>
</div>
<div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 mt-14 pt-8 border-t border-zinc-800/80" style={{transitionDelay: '740ms'}}>
<div className="flex items-center gap-2.5 text-sm text-zinc-300">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:bolt-linear" style={{animation: 'floatY 4s ease-in-out infinite'}} width="20"></iconify-icon>
              Kurzfristig verfügbar
            </div>
<div className="flex items-center gap-2.5 text-sm text-zinc-300">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:users-group-two-rounded-linear" style={{animation: 'floatY 4s ease-in-out 0.4s infinite'}} width="20"></iconify-icon>
              Erfahrene Kolonnen
            </div>
<div className="flex items-center gap-2.5 text-sm text-zinc-300">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:document-text-linear" style={{animation: 'floatY 4s ease-in-out 0.8s infinite'}} width="20"></iconify-icon>
              Nach Plan &amp; Statik
            </div>
<div className="flex items-center gap-2.5 text-sm text-zinc-300">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:verified-check-linear" style={{animation: 'floatY 4s ease-in-out 1.2s infinite'}} width="20"></iconify-icon>
              Abnahmebereit
            </div>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
<span className="text-xs tracking-widest uppercase">Scrollen</span>
<div className="w-px h-10 overflow-hidden bg-zinc-800 relative">
<div className="absolute w-px h-4 bg-amber-500" style={{animation: 'scanline 1.8s ease-in-out infinite'}}></div>
</div>
</div>
</section>

<section aria-label="Leistungsband" className="border-y border-zinc-800/70 bg-zinc-900/60 overflow-hidden py-4 relative" style={{backdropFilter: 'blur(4px)'}}>
<div className="flex whitespace-nowrap will-change-transform" id="marqueeTrack" style={{animation: 'marquee 28s linear infinite', width: 'max-content'}}>
<div className="flex items-center gap-10 pr-10">
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>Bodenplatten</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:widget-4-linear" width="18"></iconify-icon>Deckenbewehrung</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:wallpaper-linear" width="18"></iconify-icon>Ortbetonwände</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:ruler-cross-pen-linear" width="18"></iconify-icon>Ingenieurbau</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:buildings-2-linear" width="18"></iconify-icon>Industrie- &amp; Gewerbebau</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:hand-shake-linear" width="18"></iconify-icon>Nachunternehmerleistungen</span>
<span className="text-amber-500/40">✦</span>
</div>
<div aria-hidden="true" className="flex items-center gap-10 pr-10">
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>Bodenplatten</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:widget-4-linear" width="18"></iconify-icon>Deckenbewehrung</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:wallpaper-linear" width="18"></iconify-icon>Ortbetonwände</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:ruler-cross-pen-linear" width="18"></iconify-icon>Ingenieurbau</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:buildings-2-linear" width="18"></iconify-icon>Industrie- &amp; Gewerbebau</span>
<span className="text-amber-500/40">✦</span>
<span className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-amber-500" icon="solar:hand-shake-linear" width="18"></iconify-icon>Nachunternehmerleistungen</span>
<span className="text-amber-500/40">✦</span>
</div>
</div>
</section>

<section aria-label="Kennzahlen" className="border-b border-zinc-800/70 bg-zinc-900/40 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="reveal group">
<p className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight transition-transform duration-300 group-hover:scale-110 origin-left" style={{fontFamily: '\'Archivo\', sans-serif'}}><span className="counter" data-target="15">0</span><span className="text-amber-500">+</span></p>
<div className="h-0.5 bg-amber-500/60 mt-3 w-12 origin-left stat-bar" style={{transform: 'scaleX(0)'}}></div>
<p className="text-sm text-zinc-500 mt-2">Jahre Erfahrung im Bewehrungsbau</p>
</div>
<div className="reveal group" style={{transitionDelay: '80ms'}}>
<p className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight transition-transform duration-300 group-hover:scale-110 origin-left" style={{fontFamily: '\'Archivo\', sans-serif'}}><span className="counter" data-target="200">0</span><span className="text-amber-500">+</span></p>
<div className="h-0.5 bg-amber-500/60 mt-3 w-12 origin-left stat-bar" style={{transform: 'scaleX(0)'}}></div>
<p className="text-sm text-zinc-500 mt-2">Abgeschlossene Projekte</p>
</div>
<div className="reveal group" style={{transitionDelay: '160ms'}}>
<p className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight transition-transform duration-300 group-hover:scale-110 origin-left" style={{fontFamily: '\'Archivo\', sans-serif'}}><span className="counter" data-target="2">0</span></p>
<div className="h-0.5 bg-amber-500/60 mt-3 w-12 origin-left stat-bar" style={{transform: 'scaleX(0)'}}></div>
<p className="text-sm text-zinc-500 mt-2">Bundesländer im Einsatzgebiet</p>
</div>
<div className="reveal group" style={{transitionDelay: '240ms'}}>
<p className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight transition-transform duration-300 group-hover:scale-110 origin-left" style={{fontFamily: '\'Archivo\', sans-serif'}}><span className="counter" data-target="24">0</span><span className="text-amber-500">h</span></p>
<div className="h-0.5 bg-amber-500/60 mt-3 w-12 origin-left stat-bar" style={{transform: 'scaleX(0)'}}></div>
<p className="text-sm text-zinc-500 mt-2">Rückmeldung auf Anfragen</p>
</div>
</div>
</section>

<section aria-label="Leistungen" className="py-20 sm:py-28 relative" id="leistungen">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="max-w-2xl reveal">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3">
<span className="block w-8 h-px bg-amber-500/60"></span>Unsere Leistungen
          </p>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Bewehrungsarbeiten aus einer Hand</h2>
<p className="text-zinc-400 mt-4 leading-relaxed">Vom Fundament bis zur Decke: Wir verlegen Betonstahl exakt nach Bewehrungsplan – für Bauunternehmen, Generalunternehmer und Projektleiter, die sich auf ihren Nachunternehmer verlassen müssen.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden">
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Bodenplatten</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Untere und obere Lage, Randeinfassungen, Zulagen – maßhaltig verlegt und sauber dokumentiert. Die Basis für jedes Bauwerk.</p>
</article>
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden" style={{transitionDelay: '60ms'}}>
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:widget-4-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Deckenbewehrung</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Komplette Deckenbewehrung inklusive Durchstanzbewehrung, Abstandhaltern und Anschlüssen – termingerecht zur Betonage.</p>
</article>
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden" style={{transitionDelay: '120ms'}}>
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:wallpaper-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Ortbetonwände</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Wandbewehrung mit exakten Übergreifungen, Eckausbildungen und Aussparungen – passgenau für die Schalung.</p>
</article>
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden">
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Ingenieurbau</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Anspruchsvolle Bewehrung für Sonderbauwerke: hohe Bewehrungsgrade, komplexe Geometrien, präzise Ausführung.</p>
</article>
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden" style={{transitionDelay: '60ms'}}>
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:buildings-2-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Industrie- &amp; Gewerbebau</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Großflächige Bewehrung für Hallen, Logistikzentren und Gewerbeobjekte – mit der Kapazität für enge Taktpläne.</p>
</article>
<article className="tilt reveal group relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden" style={{transitionDelay: '120ms'}}>
<div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:hand-shake-linear" width="22"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Nachunternehmerleistungen</h3>
<p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">Verlässlicher Partner für Bauunternehmen und GU: klare Kommunikation, saubere Schnittstellen, vertragstreue Abwicklung.</p>
</article>
<article className="reveal group sm:col-span-2 lg:col-span-3 relative bg-zinc-900/60 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'linear-gradient(110deg, transparent 40%, rgba(245,158,11,0.05) 50%, transparent 60%)', backgroundSize: '200% 100%', animation: 'shimmer 2.5s linear infinite'}}></div>
<div className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm shrink-0 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors duration-300">
<iconify-icon icon="solar:box-linear" width="22"></iconify-icon>
</div>
<div className="flex-1 relative">
<h3 className="text-zinc-100 font-semibold text-lg tracking-tight">Logistik-Management &amp; Baustellen-Support</h3>
<p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-2xl">Materialkoordination, Stahlannahme, Lagerorganisation und Unterstützung im Bauablauf – damit Ihre Baustelle im Takt bleibt.</p>
</div>
<a className="relative inline-flex items-center gap-2 text-sm font-medium text-amber-500 hover:text-amber-400 transition-all shrink-0 group-hover:translate-x-1 duration-300" href="#kontakt">
              Anfrage stellen <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section aria-label="Warum KRANNIK BAU" className="py-20 sm:py-28 bg-zinc-900/40 border-y border-zinc-800/70 relative overflow-hidden" id="warum">
<div aria-hidden="true" className="absolute -left-24 top-1/4 w-72 h-72 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08), transparent 70%)', filter: 'blur(30px)', animation: 'orbFloat2 16s ease-in-out infinite'}}></div>
<div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
<div className="reveal relative order-2 lg:order-1 group">
<div aria-hidden="true" className="absolute -inset-3 rounded-md border border-amber-500/20 pointer-events-none" style={{animation: 'floatY 9s ease-in-out infinite'}}></div>
<div className="overflow-hidden rounded-md">
<img alt="Eisenflechter der KRANNIK BAU GmbH bei Bewehrungsarbeiten auf der Baustelle" className="w-full h-[420px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" id="warumImg" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&amp;q=80"/>
</div>
<div className="absolute -bottom-5 -right-3 sm:-right-5 bg-zinc-950 border border-zinc-800 rounded-md px-5 py-4 shadow-2xl" style={{animation: 'floatY2 7s ease-in-out infinite'}}>
<p className="text-2xl font-semibold text-amber-500 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}><span className="counter" data-target="100">0</span>%</p>
<p className="text-xs text-zinc-500 mt-1">Ausführung nach Bewehrungsplan</p>
</div>
</div>
<div className="order-1 lg:order-2">
<p className="reveal text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3"><span className="block w-8 h-px bg-amber-500/60"></span>Warum KRANNIK BAU?</p>
<h2 className="reveal text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Weil Ihre Betonage nicht warten kann.</h2>
<p className="reveal text-zinc-400 mt-4 leading-relaxed">Verzögerungen in der Bewehrung kosten Geld, Takt und Nerven. Wir sorgen dafür, dass Ihre Abnahme planmäßig läuft – mit eingespielten Teams und klarer Kommunikation.</p>
<ul className="mt-8 space-y-5">
<li className="reveal flex gap-4 group/li hover:translate-x-1 transition-transform duration-300">
<iconify-icon className="text-amber-500 shrink-0 mt-0.5 group-hover/li:scale-125 transition-transform duration-300" icon="solar:medal-ribbons-star-linear" width="24"></iconify-icon>
<div>
<p className="text-zinc-100 font-medium text-sm">Meistergeführte Kolonnen</p>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Erfahrene Vorarbeiter mit Verantwortung – auch bei komplexen Bewehrungsgraden.</p>
</div>
</li>
<li className="reveal flex gap-4 group/li hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '80ms'}}>
<iconify-icon className="text-amber-500 shrink-0 mt-0.5 group-hover/li:scale-125 transition-transform duration-300" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<p className="text-zinc-100 font-medium text-sm">Termintreue</p>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Wir halten Taktpläne ein – und melden uns frühzeitig, wenn etwas zu klären ist.</p>
</div>
</li>
<li className="reveal flex gap-4 group/li hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '160ms'}}>
<iconify-icon className="text-amber-500 shrink-0 mt-0.5 group-hover/li:scale-125 transition-transform duration-300" icon="solar:checklist-minimalistic-linear" width="24"></iconify-icon>
<div>
<p className="text-zinc-100 font-medium text-sm">Saubere Ausführung nach Bewehrungsplan</p>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Lagen, Übergreifungen, Abstände – exakt nach Statik. Abnahmebereit, ohne Nacharbeit.</p>
</div>
</li>
<li className="reveal flex gap-4 group/li hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: '240ms'}}>
<iconify-icon className="text-amber-500 shrink-0 mt-0.5 group-hover/li:scale-125 transition-transform duration-300" icon="solar:map-point-wave-linear" width="24"></iconify-icon>
<div>
<p className="text-zinc-100 font-medium text-sm">Einsatz in NRW &amp; Niedersachsen</p>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Von Herford aus schnell auf Ihrer Baustelle – auch kurzfristig.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section aria-label="Zielgruppen" className="py-20 sm:py-28 relative">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="max-w-2xl mx-auto text-center reveal">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">Für wen arbeiten wir?</p>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Ihr Partner im Rohbau</h2>
</div>
<div className="grid sm:grid-cols-3 gap-5 mt-12">
<div className="tilt reveal bg-zinc-900/60 border border-zinc-800 rounded-md p-7 text-center hover:border-amber-500/40 transition-colors duration-300 group">
<div className="inline-flex" style={{animation: 'floatY 5s ease-in-out infinite'}}><iconify-icon className="text-amber-500 group-hover:scale-125 transition-transform duration-300" icon="solar:buildings-3-linear" width="32"></iconify-icon></div>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Bauunternehmen</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Verstärkung für Ihre Rohbauprojekte – flexibel und eingespielt.</p>
</div>
<div className="tilt reveal bg-zinc-900/60 border border-zinc-800 rounded-md p-7 text-center hover:border-amber-500/40 transition-colors duration-300 group" style={{transitionDelay: '80ms'}}>
<div className="inline-flex" style={{animation: 'floatY 5s ease-in-out 0.6s infinite'}}><iconify-icon className="text-amber-500 group-hover:scale-125 transition-transform duration-300" icon="solar:case-round-linear" width="32"></iconify-icon></div>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Generalunternehmer</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Verlässlicher Nachunternehmer mit sauberer Vertragsabwicklung.</p>
</div>
<div className="tilt reveal bg-zinc-900/60 border border-zinc-800 rounded-md p-7 text-center hover:border-amber-500/40 transition-colors duration-300 group" style={{transitionDelay: '160ms'}}>
<div className="inline-flex" style={{animation: 'floatY 5s ease-in-out 1.2s infinite'}}><iconify-icon className="text-amber-500 group-hover:scale-125 transition-transform duration-300" icon="solar:user-check-rounded-linear" width="32"></iconify-icon></div>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Projektleiter</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Ein Ansprechpartner, schnelle Rückmeldung, klare Absprachen.</p>
</div>
</div>
</div>
</section>

<section aria-label="Ablauf einer Anfrage" className="py-20 sm:py-28 bg-zinc-900/40 border-y border-zinc-800/70 relative overflow-hidden" id="ablauf">
<div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
<div className="max-w-2xl reveal">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3"><span className="block w-8 h-px bg-amber-500/60"></span>So einfach geht's</p>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Von der Anfrage zur Abnahme</h2>
</div>

<div aria-hidden="true" className="hidden lg:block absolute left-8 right-8 top-[200px] h-px bg-zinc-800">
<div className="h-px bg-amber-500/60 origin-left" id="ablaufLine" style={{transform: 'scaleX(0)', transition: 'transform 2s cubic-bezier(0.16,1,0.3,1)'}}></div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
<div className="tilt reveal relative bg-zinc-950 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300">
<span className="text-4xl font-semibold text-zinc-800 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>01</span>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Anfrage senden</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Pläne, Mengen oder Eckdaten an uns – per Formular, E-Mail oder Telefon.</p>
</div>
<div className="tilt reveal relative bg-zinc-950 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300" style={{transitionDelay: '120ms'}}>
<span className="text-4xl font-semibold text-zinc-800 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>02</span>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Rückmeldung in 24h</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Wir prüfen Ihr Projekt und melden uns schnell mit Verfügbarkeit und Angebot.</p>
</div>
<div className="tilt reveal relative bg-zinc-950 border border-zinc-800 rounded-md p-7 hover:border-amber-500/40 transition-colors duration-300" style={{transitionDelay: '240ms'}}>
<span className="text-4xl font-semibold text-zinc-800 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>03</span>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Ausführung nach Plan</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Unsere Kolonne verlegt exakt nach Bewehrungsplan und Statik – im Takt Ihrer Baustelle.</p>
</div>
<div className="tilt reveal relative bg-zinc-950 border border-amber-500/30 rounded-md p-7 overflow-hidden" style={{transitionDelay: '360ms'}}>
<div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(110deg, transparent 40%, rgba(245,158,11,0.07) 50%, transparent 60%)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></div>
<span className="text-4xl font-semibold text-amber-500/30 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>04</span>
<h3 className="text-zinc-100 font-semibold mt-4 tracking-tight">Abnahmebereit</h3>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">Saubere Übergabe zur Bewehrungsabnahme – bereit für die Betonage.</p>
</div>
</div>
</div>
</section>

<section aria-label="Projektgalerie" className="py-20 sm:py-28" id="projekte">
<div className="max-w-7xl mx-auto px-5 sm:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
<div className="max-w-2xl">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3"><span className="block w-8 h-px bg-amber-500/60"></span>Projektgalerie</p>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Einblicke in unsere Arbeit</h2>
</div>
<div aria-label="Galerie filtern" className="flex flex-wrap gap-2" role="tablist">
<button className="filter-btn active text-xs font-medium px-4 py-2 rounded-full border border-amber-500 bg-amber-500 text-zinc-950 transition-all duration-200 hover:scale-105" data-filter="alle">Alle</button>
<button className="filter-btn text-xs font-medium px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200 hover:scale-105" data-filter="bodenplatten">Bodenplatten</button>
<button className="filter-btn text-xs font-medium px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200 hover:scale-105" data-filter="decken">Decken</button>
<button className="filter-btn text-xs font-medium px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200 hover:scale-105" data-filter="waende">Wände</button>
<button className="filter-btn text-xs font-medium px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all duration-200 hover:scale-105" data-filter="ingenieurbau">Ingenieurbau</button>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10" id="gallery">
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="bodenplatten" data-desc="Untere und obere Lage mit Zulagen – Industrieprojekt in NRW." data-title="Bodenplatte Gewerbehalle">
<img alt="Bewehrung einer Bodenplatte für eine Gewerbehalle in NRW" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Bodenplatten</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Bodenplatte Gewerbehalle</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="decken" data-desc="Komplette Geschossdecke inkl. Durchstanzbewehrung – termingerecht zur Betonage." data-title="Deckenbewehrung Wohnbau" style={{transitionDelay: '60ms'}}>
<img alt="Deckenbewehrung im Wohnungsbau – Betonstahlverlegung durch KRANNIK BAU" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Decken</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Deckenbewehrung Wohnbau</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="waende" data-desc="Wandbewehrung mit exakten Übergreifungen und Aussparungen." data-title="Ortbetonwand Kellergeschoss" style={{transitionDelay: '120ms'}}>
<img alt="Bewehrung einer Ortbetonwand im Kellergeschoss" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Wände</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Ortbetonwand Kellergeschoss</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="ingenieurbau" data-desc="Hoher Bewehrungsgrad, komplexe Geometrie – präzise nach Statik ausgeführt." data-title="Ingenieurbauwerk">
<img alt="Bewehrungsarbeiten im Ingenieurbau – komplexes Bauwerk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1541976590-713941681591?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Ingenieurbau</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Ingenieurbauwerk</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="bodenplatten" data-desc="Großflächige Bewehrung im engen Taktplan – Industrie- und Gewerbebau." data-title="Fundamentplatte Logistikzentrum" style={{transitionDelay: '60ms'}}>
<img alt="Fundamentplatte eines Logistikzentrums mit Betonstahlbewehrung" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Bodenplatten</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Fundamentplatte Logistikzentrum</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
<button className="gallery-item reveal group relative overflow-hidden rounded-md aspect-[4/3] text-left" data-cat="decken" data-desc="Deckenbewehrung mit Anschlüssen und Abstandhaltern – abnahmebereit übergeben." data-title="Geschossdecke Bürogebäude" style={{transitionDelay: '120ms'}}>
<img alt="Geschossdecke eines Bürogebäudes mit verlegtem Betonstahl" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&amp;q=75"/>
<div className="absolute inset-0 flex flex-col justify-end p-5" style={{background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent 60%)'}}>
<span className="text-xs text-amber-400 font-medium uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Decken</span>
<p className="text-zinc-100 font-semibold text-sm mt-1 tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Geschossdecke Bürogebäude</p>
</div>
<span className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-amber-500 text-zinc-950 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="17"></iconify-icon></span>
</button>
</div>
</div>
</section>

<section aria-label="Einsatzgebiete" className="py-16 sm:py-20 bg-zinc-900/40 border-y border-zinc-800/70 relative overflow-hidden">
<div aria-hidden="true" className="absolute right-0 top-0 w-80 h-80 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07), transparent 70%)', filter: 'blur(30px)', animation: 'orbFloat1 14s ease-in-out infinite'}}></div>
<div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 relative">
<div className="reveal max-w-xl">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3"><span className="block w-8 h-px bg-amber-500/60"></span>Einsatzgebiete</p>
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Von Herford aus in ganz NRW &amp; Niedersachsen</h2>
<p className="text-zinc-400 mt-4 text-sm leading-relaxed">Unser Standort in Herford liegt zentral in Ostwestfalen – ideal für schnelle Einsätze in Bielefeld, Osnabrück, Hannover, Münster, dem Ruhrgebiet und darüber hinaus. Auch überregionale Projekte nach Absprache.</p>
</div>
<div className="reveal flex flex-wrap gap-2.5" style={{transitionDelay: '120ms'}}>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Herford</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Bielefeld</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Osnabrück</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Hannover</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Münster</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Paderborn</span>
<span className="city-chip text-xs text-zinc-300 border border-zinc-700 rounded-full px-4 py-2 bg-zinc-950 hover:border-amber-500/50 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-default">Ruhrgebiet</span>
<span className="city-chip text-xs text-amber-400 border border-amber-500/40 rounded-full px-4 py-2 bg-amber-500/5 hover:-translate-y-1 transition-all duration-300 cursor-default" style={{animation: 'blink 2.5s ease-in-out infinite'}}>+ auf Anfrage</span>
</div>
</div>
</section>

<section aria-label="Häufige Fragen" className="py-20 sm:py-28" id="faq">
<div className="max-w-3xl mx-auto px-5 sm:px-8">
<div className="text-center reveal">
<p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
<h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Häufige Fragen</h2>
</div>
<div className="mt-10 space-y-3">
<details className="faq-item reveal group bg-zinc-900/60 border border-zinc-800 rounded-md open:border-amber-500/30 transition-colors duration-300">
<summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-sm font-medium text-zinc-100 list-none hover:text-amber-400 transition-colors">
              Wie schnell können Sie auf der Baustelle sein?
              <iconify-icon className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">Je nach Auslastung sind wir oft kurzfristig einsatzbereit. Senden Sie uns Ihre Anfrage – wir melden uns in der Regel innerhalb von 24 Stunden mit einer konkreten Verfügbarkeit zurück.</p>
</details>
<details className="faq-item reveal group bg-zinc-900/60 border border-zinc-800 rounded-md open:border-amber-500/30 transition-colors duration-300" style={{transitionDelay: '60ms'}}>
<summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-sm font-medium text-zinc-100 list-none hover:text-amber-400 transition-colors">
              Arbeiten Sie als Nachunternehmer für Generalunternehmer?
              <iconify-icon className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">Ja, Nachunternehmerleistungen sind unser Kerngeschäft. Wir arbeiten für Bauunternehmen und Generalunternehmer – mit klaren Schnittstellen, sauberer Dokumentation und vertragstreuer Abwicklung.</p>
</details>
<details className="faq-item reveal group bg-zinc-900/60 border border-zinc-800 rounded-md open:border-amber-500/30 transition-colors duration-300" style={{transitionDelay: '120ms'}}>
<summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-sm font-medium text-zinc-100 list-none hover:text-amber-400 transition-colors">
              Welche Unterlagen benötigen Sie für ein Angebot?
              <iconify-icon className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">Ideal sind Bewehrungspläne und Stahllisten. Für eine erste Einschätzung reichen auch Eckdaten wie Bauteilart, Stahltonnage und Ausführungszeitraum.</p>
</details>
<details className="faq-item reveal group bg-zinc-900/60 border border-zinc-800 rounded-md open:border-amber-500/30 transition-colors duration-300" style={{transitionDelay: '180ms'}}>
<summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-sm font-medium text-zinc-100 list-none hover:text-amber-400 transition-colors">
              Übernehmen Sie auch große Tonnagen und Taktbaustellen?
              <iconify-icon className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">Ja. Unsere Kolonnen sind auf Industrie- und Gewerbeprojekte mit engen Taktplänen eingestellt und skalieren je nach Projektgröße.</p>
</details>
<details className="faq-item reveal group bg-zinc-900/60 border border-zinc-800 rounded-md open:border-amber-500/30 transition-colors duration-300" style={{transitionDelay: '240ms'}}>
<summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-sm font-medium text-zinc-100 list-none hover:text-amber-400 transition-colors">
              In welchen Regionen sind Sie tätig?
              <iconify-icon className="text-zinc-500 shrink-0 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</summary>
<p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">Unser Schwerpunkt liegt in Nordrhein-Westfalen und Niedersachsen – insbesondere Ostwestfalen-Lippe, Hannover, Osnabrück und Münster. Überregionale Einsätze sind nach Absprache möglich.</p>
</details>
</div>
</div>
</section>

<section aria-label="Handlungsaufruf" className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="Betonstahl-Bewehrung im Detail auf einer Baustelle" className="w-full h-[120%] object-cover opacity-20 will-change-transform" id="ctaImg" loading="lazy" src="https://images.unsplash.com/photo-1590496793929-36417d3117de?w=1600&amp;q=75"/>
<div className="absolute inset-0 bg-zinc-950/70"></div>
</div>
<div aria-hidden="true" className="absolute top-10 left-[10%] w-24 h-24 border border-amber-500/20 rounded-full pointer-events-none" style={{animation: 'floatY 8s ease-in-out infinite'}}></div>
<div aria-hidden="true" className="absolute bottom-12 right-[12%] w-16 h-16 border border-amber-500/25 rounded-sm pointer-events-none" style={{animation: 'floatY2 10s ease-in-out infinite'}}></div>
<div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
<h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-50 tracking-tight leading-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Ihr nächstes Projekt braucht<br className="hidden sm:block"/> eine <span style={{background: 'linear-gradient(90deg,#f59e0b,#fcd34d,#f59e0b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', animation: 'shimmer 4s linear infinite'}}>starke Bewehrung</span>?</h2>
<p className="reveal text-zinc-400 mt-5 max-w-xl mx-auto leading-relaxed" style={{transitionDelay: '100ms'}}>Senden Sie uns Ihre Pläne oder Eckdaten – wir melden uns schnell mit Verfügbarkeit und Angebot.</p>
<div className="reveal flex flex-col sm:flex-row justify-center gap-3 mt-9" style={{transitionDelay: '200ms'}}>
<a className="magnetic relative inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-4 rounded-sm text-sm transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 overflow-hidden" href="#kontakt">
<span className="absolute inset-0" style={{background: 'linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></span>
<span className="relative">Jetzt Kontakt aufnehmen</span>
<iconify-icon className="relative" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="magnetic inline-flex items-center justify-center gap-2 border border-zinc-600 hover:border-amber-500/50 text-zinc-200 font-medium px-8 py-4 rounded-sm text-sm transition-all duration-200 hover:bg-zinc-900/60" href="tel:+495221000000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
            Direkt anrufen
          </a>
</div>
</div>
</section>

<section aria-label="Kontakt" className="py-20 sm:py-28 bg-zinc-900/40 border-t border-zinc-800/70 relative overflow-hidden" id="kontakt">
<div aria-hidden="true" className="absolute -left-20 bottom-0 w-72 h-72 rounded-full pointer-events-none" style={{background: 'radial-gradient(circle, rgba(245, 158, 11, 0.07), transparent 70%)', filter: 'blur(30px)', animation: 'orbFloat3 18s ease-in-out infinite'}}></div>
<div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 relative">
<div className="lg:col-span-2">
<p className="reveal text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-3"><span className="block w-8 h-px bg-amber-500/60"></span>Kontakt</p>
<h2 className="reveal text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Projekt anfragen</h2>
<p className="reveal text-zinc-400 mt-4 text-sm leading-relaxed">Schnelle Rückmeldung garantiert: Wir antworten in der Regel innerhalb von 24 Stunden – auch bei kurzfristigen Anfragen.</p>
<div className="mt-8 space-y-4">
<a className="reveal flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-md p-5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 group" href="tel:+495221000000">
<span className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 transition-all duration-300">
<iconify-icon icon="solar:phone-calling-linear" width="22"></iconify-icon>
</span>
<span>
<span className="block text-xs text-zinc-500">Telefon</span>
<span className="block text-sm font-medium text-zinc-100 mt-0.5">05221 / 00 00 00</span>
</span>
</a>
<a className="reveal flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-md p-5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 group" href="mailto:info@krannikbau.de" style={{transitionDelay: '80ms'}}>
<span className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:rotate-6 transition-all duration-300">
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</span>
<span>
<span className="block text-xs text-zinc-500">E-Mail</span>
<span className="block text-sm font-medium text-zinc-100 mt-0.5">info@krannikbau.de</span>
</span>
</a>
<div className="reveal flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-md p-5 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300" style={{transitionDelay: '160ms'}}>
<span className="w-11 h-11 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-sm">
<iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon>
</span>
<span>
<span className="block text-xs text-zinc-500">Standort</span>
<span className="block text-sm font-medium text-zinc-100 mt-0.5">32049 Herford, Nordrhein-Westfalen</span>
</span>
</div>
</div>
</div>
<div className="lg:col-span-3 reveal" style={{transitionDelay: '120ms'}}>
<form className="relative bg-zinc-950 border border-zinc-800 rounded-md p-6 sm:p-9 overflow-hidden" onsubmit="event.preventDefault(); this.innerHTML='&lt;div class=\'text-center py-16\'&gt;&lt;p class=\'text-amber-500 text-lg font-semibold tracking-tight\'&gt;Vielen Dank für Ihre Anfrage!&lt;/p&gt;&lt;p class=\'text-zinc-400 text-sm mt-2\'&gt;Wir melden uns innerhalb von 24 Stunden bei Ihnen.&lt;/p&gt;&lt;/div&gt;';">
<div className="absolute top-0 inset-x-0 h-0.5" style={{background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.6), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 4s linear infinite'}}></div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="name">Name / Firma *</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-200" id="name" placeholder="Mustermann Bau GmbH" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="email">E-Mail *</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-200" id="email" placeholder="name@firma.de" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="phone">Telefon</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-200" id="phone" placeholder="0151 / 123 456 78" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="ort">Projektstandort</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-200" id="ort" placeholder="z. B. Bielefeld" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="msg">Ihr Projekt *</label>
<textarea className="w-full bg-zinc-900 border border-zinc-700 rounded-sm px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:shadow-lg focus:shadow-amber-500/10 transition-all duration-200 resize-none" id="msg" placeholder="Bauteilart, Tonnage, Zeitraum – oder einfach kurz Ihr Anliegen beschreiben." required="" rows="5"></textarea>
</div>
</div>
<button className="magnetic mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-sm text-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30" type="submit">
              Anfrage senden
              <iconify-icon icon="solar:plain-linear" width="17"></iconify-icon>
</button>
<p className="text-xs text-zinc-600 mt-4">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-zinc-800 bg-zinc-950 pb-24 lg:pb-0">
<div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-2.5">
<span className="flex items-center justify-center w-9 h-9 bg-amber-500 text-zinc-950 font-bold rounded-sm tracking-tighter text-sm" style={{fontFamily: '\'Archivo\', sans-serif'}}>KB</span>
<span className="text-zinc-100 font-semibold tracking-tight text-sm" style={{fontFamily: '\'Archivo\', sans-serif'}}>KRANNIK BAU GmbH</span>
</div>
</div></div></footer>
    </>
  );
}
