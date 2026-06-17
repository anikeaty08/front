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
    


      (function() {
        const initModal = () => {
          const modal = document.getElementById('booking-modal');
          const openBtn = document.getElementById('open-modal-btn');
          const closeBtn = document.getElementById('close-modal-btn');
          const overlay = document.getElementById('booking-modal-overlay');

          if (!modal || !openBtn) return;

          const toggleModal = () => {
            if (modal.classList.contains('hidden')) {
              modal.classList.remove('hidden');
              modal.classList.add('flex');
              document.body.style.overflow = 'hidden';
            } else {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
              document.body.style.overflow = '';
            }
          };

          openBtn.addEventListener('click', toggleModal);
          if(closeBtn) closeBtn.addEventListener('click', toggleModal);
          if(overlay) overlay.addEventListener('click', toggleModal);
        };

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initModal);
        } else {
          initModal();
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
      

<header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight" href="#">
          Growth House Polska
        </a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            O Nas
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Opinie
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Oferta
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Terminy
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Media
          </a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
            Kontakt
          </a>
</nav>
<div className="flex items-center gap-4 text-slate-400 hidden sm:flex">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>
<main>

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-32 pb-24">

<div className="absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/f14t4je1fmz6i88?seo=false&amp;videoFoam=false&amp;autoPlay=true&amp;loop=true&amp;muted=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;playButton=false&amp;smallPlayButton=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenButton=false&amp;endVideoBehavior=loop"></iframe>
</div>

<div className="absolute inset-0 bg-slate-950/75 -z-10"></div>

<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-8">
            Zbuduj firmę
            <span className="text-green-500">przyszłości</span>
</h1>
<p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Skorzystaj ze sprawdzonych metod, aby rozwinąć swój biznes i zyskać
            przewagę na rynku.
          </p>
<button className="bg-green-500 hover:bg-green-400 text-slate-950 px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-xl shadow-green-500/30 flex items-center gap-2" onclick="document.getElementById('open-modal-btn').click()">
            Zarezerwuj termin
            <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-16">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight">
              Dlaczego warto
            </h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="aspect-square md:aspect-[4/3] rounded-2xl bg-slate-900 border border-white/10 overflow-hidden relative shadow-xl shadow-black/20">
<img alt="Dlaczego warto" className="absolute inset-0 w-full h-full object-cover" src="https://i.postimg.cc/ZnH2SG9Q/magnific-spokojny-ogrod-w-stylu-an-Kj8Qs-Gnkqp-(1).png"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-transparent opacity-20"></div>
</div>
<div className="flex flex-col gap-10">
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 shadow-sm">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Sprawdzone metody
                  </h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Opieramy się na danych i doświadczeniu, eliminując
                    zgadywanie z Twojego procesu rozwoju.
                  </p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 shadow-sm">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Szybkie wdrożenie
                  </h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Otrzymujesz gotowe schematy działania, które możesz
                    zaimplementować niemal natychmiast.
                  </p>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-white/10 shadow-sm">
<i className="w-4 h-4 text-green-500" data-lucide="check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Ciągłe wsparcie
                  </h3>
<p className="text-lg text-slate-400 leading-relaxed">
                    Jesteśmy z Tobą na każdym etapie, analizując wyniki i
                    wprowadzając niezbędne korekty.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-slate-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-16">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight">
              Poznaj pakiety
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-950 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col h-full shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20">
<div className="aspect-video rounded-xl bg-slate-900 mb-8 border border-white/5 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-slate-700" data-lucide="box" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                Opcja Podstawowa
              </h3>
<p className="text-lg text-slate-400 mb-8 flex-grow leading-relaxed">
                Idealny start dla osób potrzebujących solidnego fundamentu i
                jasnego planu działania.
              </p>
<a className="inline-flex items-center font-medium transition-colors text-green-500 group-hover:text-green-400" href="#">
                Wybierz pakiet
                <i className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-slate-950 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col h-full shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 relative">
<div className="absolute -top-3 right-6 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full tracking-tight bg-green-500">
                Rekomendowane
              </div>
<div className="aspect-video rounded-xl bg-slate-900 mb-8 border border-white/5 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-slate-700" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                Opcja Rozszerzona
              </h3>
<p className="text-lg text-slate-400 mb-8 flex-grow leading-relaxed">
                Kompleksowe rozwiązanie z dodatkowymi konsultacjami i bieżącą
                analizą wyników.
              </p>
<a className="inline-flex items-center font-medium transition-colors text-green-500 group-hover:text-green-400" href="#">
                Wybierz pakiet
                <i className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-slate-950 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col h-full shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20">
<div className="aspect-video rounded-xl bg-slate-900 mb-8 border border-white/5 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-slate-700" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                Opcja Premium
              </h3>
<p className="text-lg text-slate-400 mb-8 flex-grow leading-relaxed">
                Pełne zaangażowanie naszego zespołu, priorytetowe wsparcie i
                dedykowane strategie.
              </p>
<a className="inline-flex items-center font-medium transition-colors text-green-500 group-hover:text-green-400" href="#">
                Wybierz pakiet
                <i className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-16">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h2 className="text-3xl font-semibold text-white tracking-tight">
                Opinie
              </h2>
</div>
<div className="flex gap-3">
<button className="w-11 h-11 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-all">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-11 h-11 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/10 transition-all">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-green-500">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "Współpraca przeszła moje najśmielsze oczekiwania. Wyniki
                  pojawiły się znacznie szybciej niż zakładałem."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Michał K.</div>
<div className="text-xs text-slate-500 mt-0.5">
                    Przedsiębiorca
                  </div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col justify-between hidden md:flex">
<div>
<div className="flex gap-1 mb-6 text-green-500">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "Pełen profesjonalizm i świetny kontakt. Proces jest bardzo
                  poukładany i zrozumiały na każdym etapie."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Anna W.</div>
<div className="text-xs text-slate-500 mt-0.5">
                    Dyrektor Sprzedaży
                  </div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col justify-between hidden lg:flex">
<div>
<div className="flex gap-1 mb-6 text-green-500">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "Otrzymałem konkretne wskazówki, które natychmiast poprawiły
                  moje codzienne funkcjonowanie w firmie."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Tomasz R.</div>
<div className="text-xs text-slate-500 mt-0.5">CEO</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col justify-between hidden lg:flex">
<div>
<div className="flex gap-1 mb-6 text-green-500">
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="star" fill="currentColor" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  "Zdecydowanie polecam. Wartość, jaką dostarczają, znacznie
                  przewyższa koszt inwestycji."
                </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10"></div>
<div>
<div className="text-sm font-medium text-white">Katarzyna L.</div>
<div className="text-xs text-slate-500 mt-0.5">Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-24 pb-32 sm:pb-28 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex justify-center gap-6 mb-20">
<a className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:border-white/10 transition-all duration-300 group shadow-sm hover:text-green-500" href="#">
<i className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" data-lucide="music-2" strokeWidth="1.5"></i>
</a>
<a className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:border-white/10 transition-all duration-300 group shadow-sm hover:text-green-500" href="#">
<i className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-16 h-16 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:border-white/10 transition-all duration-300 group shadow-sm hover:text-green-500" href="#">
<i className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Adres</h4>
<ul className="space-y-4">
<li className="text-lg text-slate-400">ul. Biznesowa 42</li>
<li className="text-lg text-slate-400">00-123 Warszawa</li>
<li className="text-lg text-slate-400">Polska</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">Kontakt</h4>
<ul className="space-y-4">
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  hello@growthhouse.pl
                </a>
</li>
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  +48 500 600 700
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">O nas</h4>
<ul className="space-y-4">
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Historia firmy
                </a>
</li>
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Nasz zespół
                </a>
</li>
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Kariera
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 tracking-tight">
              Informacje
            </h4>
<ul className="space-y-4">
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Regulamin serwisu
                </a>
</li>
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Polityka prywatności
                </a>
</li>
<li>
<a className="text-lg text-slate-400 transition-colors hover:text-green-500" href="#">
                  Ustawienia cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<a className="flex items-center gap-2 text-white font-semibold tracking-tight" href="#">
            Growth House Polska
          </a>
<p className="text-slate-500 text-sm">
            © 2024 Wszelkie prawa zastrzeżone.
          </p>
</div>
</div>
</footer>


<div className="fixed bottom-4 sm:bottom-0 left-0 w-full z-40 p-4 sm:p-5 flex justify-center items-center pointer-events-none sm:pointer-events-auto sm:bg-slate-900/95 sm:backdrop-blur-md sm:border-t sm:border-white/10 sm:shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<div className="max-w-7xl mx-auto w-full flex justify-center sm:justify-between items-center sm:px-6 pointer-events-auto">
<span className="hidden sm:block text-white font-semibold text-xl tracking-tight">
          Umów się na rozmowę
        </span>
<button className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-slate-950 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full font-semibold transition-colors shadow-xl shadow-green-500/30 text-center text-lg sm:text-base" id="open-modal-btn">
          Zarezerwuj termin
        </button>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" id="booking-modal-overlay"></div>
<div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl">
<button className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 p-2 rounded-full" id="close-modal-btn" type="button">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
          Zarezerwuj termin
        </h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="modal-name">
              Imię
            </label>
<input className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600" id="modal-name" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="modal-email">
              E-mail
            </label>
<input className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600" id="modal-email" placeholder="jan@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="modal-phone">
              Numer telefonu
            </label>
<input className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-slate-600" id="modal-phone" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
<div className="flex items-start gap-3 pt-2">
<div className="flex items-center h-5 mt-0.5">
<input className="w-5 h-5 rounded border border-white/20 bg-slate-950 accent-green-500 cursor-pointer" id="modal-consent" required="" type="checkbox"/>
</div>
<label className="text-sm text-slate-400 leading-relaxed cursor-pointer" htmlFor="modal-consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych.
            </label>
</div>
<button className="w-full bg-green-500 hover:bg-green-400 text-slate-950 px-6 py-4 rounded-xl font-semibold transition-all mt-4 shadow-lg shadow-green-500/20" type="submit">
            Zarezerwuj termin
          </button>
</form>
</div>
</div>


    </>
  );
}
