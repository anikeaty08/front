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



      lucide.createIcons({
          strokeWidth: 1.5
      });
    
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
      

<nav className="fixed w-full top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="flex items-center justify-center" href="#">
<img alt="DOMO Nieruchomości" className="h-12 md:h-14 w-auto object-contain" src="https://i.postimg.cc/qqKYtN5k/DOMO-PROFILOWE-BASIC-5-(1).png"/>
</a>
<button className="text-neutral-400 transition-colors hover:text-[#e31e24]">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="pt-32">

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="aspect-[4/3] bg-neutral-900 border border-white/10 relative group cursor-pointer flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 z-10 group-hover:border-[#e31e24] group-hover:text-[#e31e24]">
<i className="w-8 h-8 ml-1" data-lucide="play"></i>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="flex flex-col gap-4">
<div className="w-16 h-px bg-[#e31e24]"></div>
<div className="w-24 h-px bg-[#e31e24]/70"></div>
<div className="w-12 h-px bg-[#e31e24]/40"></div>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Odkryj nową jakość przestrzeni
            </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              Tworzymy unikalne doświadczenia wizualne, łącząc ponadczasową
              elegancję z nowoczesnym rzemiosłem. Poznaj nasze podejście do
              detali.
            </p>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col gap-12">
<div className="grid grid-cols-3 gap-6">
<div className="aspect-square border border-white/10 bg-neutral-900/50 flex flex-col items-center justify-center gap-4 p-6 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-[#e31e24]" data-lucide="camera"></i>
</div>
<div className="aspect-square border border-white/10 bg-neutral-900/50 flex flex-col items-center justify-center gap-4 p-6 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-[#e31e24]" data-lucide="aperture"></i>
</div>
<div className="aspect-square border border-white/10 bg-neutral-900/50 flex flex-col items-center justify-center gap-4 p-6 hover:bg-neutral-900 transition-colors">
<i className="w-8 h-8 text-[#e31e24]" data-lucide="film"></i>
</div>
</div>
<div className="space-y-6">
<h3 className="text-3xl font-medium tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Kompleksowa obsługa
                </h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                  Każdy projekt traktujemy indywidualnie. Nasze doświadczenie
                  pozwala nam przewidywać potrzeby i dostarczać rozwiązania,
                  które przekraczają oczekiwania, zachowując najwyższe standardy
                  estetyczne.
                </p>
</div>
</div>

<div className="flex flex-col gap-12">
<div className="flex items-center justify-between border-b border-white/10 pb-6">
<h2 className="text-3xl font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  Formularz
                </h2>
<span className="text-base text-neutral-500 uppercase tracking-widest">
                  Wypełnij
                </span>
</div>

<div className="aspect-video bg-neutral-900 border border-white/10 relative group cursor-pointer flex items-center justify-center overflow-hidden">
<span className="absolute top-4 left-4 text-xs tracking-widest text-white/50 uppercase z-10">
                  Film Promocyjny
                </span>
<div className="w-16 h-16 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 z-10 group-hover:bg-[#e31e24] group-hover:border-[#e31e24]">
<i className="w-6 h-6 ml-1" data-lucide="play"></i>
</div>
</div>

<form className="flex flex-col gap-8">
<div className="flex flex-col gap-2">
<label className="text-base text-neutral-500 uppercase tracking-widest">
                    Imię i Nazwisko
                  </label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none transition-colors font-light focus:border-[#e31e24]" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base text-neutral-500 uppercase tracking-widest">
                    Adres Email
                  </label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none transition-colors font-light focus:border-[#e31e24]" type="email"/>
</div>
<button className="mt-4 border border-white/20 py-5 px-8 text-base tracking-widest text-white uppercase transition-colors duration-300 w-fit hover:bg-[#e31e24] hover:border-[#e31e24] hover:text-white" type="button">
                  Wyślij zapytanie
                </button>
</form>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-white/5">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-20" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Czym się zajmujemy
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="aspect-[3/4] bg-neutral-900 border border-white/10 relative overflow-hidden flex items-center justify-center group">
<span className="text-2xl text-neutral-700 tracking-widest uppercase font-light group-hover:scale-105 transition-transform duration-700">
              Foto
            </span>
<div className="absolute inset-0 border-[16px] border-[#0a0a0a] z-10 pointer-events-none"></div>
</div>

<div className="flex flex-col gap-8">
<div className="flex flex-col gap-6 text-lg text-neutral-400 font-light leading-relaxed">
<p>
                Specjalizujemy się w kreowaniu wizerunku marek premium. Nasze
                portfolio obejmuje kompleksowe realizacje wizualne, od
                fotografii produktowej po zaawansowane kampanie wideo.
              </p>
<p>
                Dbamy o spójność komunikacji i unikalny charakter każdego
                materiału. Wykorzystujemy najnowsze technologie, zachowując przy
                tym klasyczne, rzemieślnicze podejście do obrazu.
              </p>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="w-full h-px bg-gradient-to-r from-[#e31e24] to-transparent"></div>
<div className="w-3/4 h-px bg-gradient-to-r from-[#e31e24]/70 to-transparent"></div>
<div className="w-1/2 h-px bg-gradient-to-r from-[#e31e24]/40 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-16" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Co gwarantujemy
          </h2>

<div className="w-full aspect-[21/9] bg-neutral-900 border border-white/10 relative group cursor-pointer flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 to-transparent"></div>
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 z-10 backdrop-blur-sm group-hover:bg-[#e31e24] group-hover:border-[#e31e24]">
<i className="w-10 h-10 ml-2" data-lucide="play"></i>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-20" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Nasz Zespół
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

<div className="flex flex-col gap-6 group">
<div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden">
<img alt="Maja Bańkowska" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://i.postimg.cc/GpTWygNc/magnific-naoz-na-plik-magnificzrob-g-JEx-R8XSXO.png"/>
</div>
<div className="text-center">
<h4 className="text-xl text-white font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Maja Bańkowska
              </h4>
<p className="text-base mt-1 uppercase tracking-widest text-xs text-[#e31e24]">
                Office menager
              </p>
</div>
</div>

<div className="flex flex-col gap-6 group mt-0 md:mt-12">
<div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden">
<div className="w-full h-full bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="text-center">
<h4 className="text-xl text-white font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Anna Nowak
              </h4>
<p className="text-base mt-1 uppercase tracking-widest text-xs text-[#e31e24]">
                Fotograf
              </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden">
<div className="w-full h-full bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="text-center">
<h4 className="text-xl text-white font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Piotr Wiśniewski
              </h4>
<p className="text-base mt-1 uppercase tracking-widest text-xs text-[#e31e24]">
                Producent
              </p>
</div>
</div>

<div className="flex flex-col gap-6 group mt-0 md:mt-12">
<div className="aspect-square bg-neutral-900 border border-white/10 overflow-hidden">
<div className="w-full h-full bg-neutral-800 group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="text-center">
<h4 className="text-xl text-white font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Maria Wójcik
              </h4>
<p className="text-base mt-1 uppercase tracking-widest text-xs text-[#e31e24]">
                Dyrektor Art.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-white/5 py-24 md:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-20" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Opinie
          </h2>
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">

<button className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-white/20 items-center justify-center text-white transition-colors hover:bg-[#e31e24] hover:border-[#e31e24] hover:text-white">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

<div className="border border-white/10 bg-[#0a0a0a] p-10 md:p-14 flex flex-col gap-8">
<div className="flex gap-1 text-[#e31e24]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl md:text-2xl text-neutral-300 leading-relaxed italic font-light" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  "Współpraca na najwyższym poziomie. Otrzymany materiał
                  przewyższył nasze najśmielsze oczekiwania, idealnie oddając
                  luksusowy charakter naszej marki."
                </p>
<div className="mt-auto pt-8 border-t border-white/10">
<p className="text-base text-white uppercase tracking-widest">
                    Katarzyna L.
                  </p>
<p className="text-sm text-neutral-500 mt-1">
                    Dyrektor Marketingu
                  </p>
</div>
</div>

<div className="border border-white/10 bg-[#0a0a0a] p-10 md:p-14 flex flex-col gap-8">
<div className="flex gap-1 text-[#e31e24]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl md:text-2xl text-neutral-300 leading-relaxed italic font-light" style={{fontFamily: '\'Playfair Display\', serif'}}>
                  "Niesamowita dbałość o detale i profesjonalizm na każdym
                  etapie produkcji. Zdecydowanie polecam każdemu, kto szuka
                  bezkompromisowej jakości."
                </p>
<div className="mt-auto pt-8 border-t border-white/10">
<p className="text-base text-white uppercase tracking-widest">
                    Michał S.
                  </p>
<p className="text-sm text-neutral-500 mt-1">
                    CEO, Premium Real Estate
                  </p>
</div>
</div>
</div>

<button className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full border border-white/20 items-center justify-center text-white transition-colors hover:bg-[#e31e24] hover:border-[#e31e24] hover:text-white">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>

<div className="flex md:hidden gap-4 mt-8">
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#e31e24] hover:border-[#e31e24] transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#e31e24] hover:border-[#e31e24] transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-20" style={{fontFamily: '\'Playfair Display\', serif'}}>
          Pytania i Odpowiedzi
        </h2>
<div className="flex flex-col">

<div className="border-b border-white/10 py-8 cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                Jak długo trwa realizacja projektu?
              </h3>
<i className="w-6 h-6 text-neutral-500 transition-colors group-hover:text-[#e31e24]" data-lucide="plus"></i>
</div>
</div>

<div className="border-b border-white/10 py-8 cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                Czy pracujecie poza granicami kraju?
              </h3>
<i className="w-6 h-6 text-neutral-500 transition-colors group-hover:text-[#e31e24]" data-lucide="plus"></i>
</div>
</div>

<div className="border-b border-white/10 py-8 cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                Jakie są warunki płatności?
              </h3>
<i className="w-6 h-6 text-neutral-500 transition-colors group-hover:text-[#e31e24]" data-lucide="plus"></i>
</div>
</div>

<div className="border-b border-white/10 py-8 cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="text-xl text-neutral-200 font-light group-hover:text-white transition-colors">
                Czy materiały surowe (RAW) są przekazywane klientowi?
              </h3>
<i className="w-6 h-6 text-neutral-500 transition-colors group-hover:text-[#e31e24]" data-lucide="plus"></i>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 text-center pt-12 pb-28 md:pb-24">
<p className="text-base text-neutral-600 font-light tracking-widest uppercase text-sm">
        © 2024 Wszelkie prawa zastrzeżone.
      </p>
</footer>


<div className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 z-40 p-4 md:px-8 md:py-4 flex justify-center md:justify-between items-center transition-transform shadow-[0_-10px_40px_rgba(0,0,0,0.5)]" id="sticky-cta-bar">
<div className="hidden md:block text-xl text-white font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
        Umów się na rozmowę
      </div>
<button className="w-full md:w-auto border border-white/20 py-4 px-8 text-base tracking-widest text-white uppercase transition-colors duration-300 bg-[#e31e24] hover:bg-[#c8191f] hover:border-[#c8191f]" onclick="document.getElementById('booking-modal').classList.remove('hidden')">
        Zarezerwuj termin
      </button>
</div>

<div className="fixed inset-0 z-[100] hidden" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="document.getElementById('booking-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4">
<div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 w-full flex flex-col gap-8 shadow-2xl relative">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-[#e31e24] transition-colors p-2" onclick="document.getElementById('booking-modal').classList.add('hidden')" type="button">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<div className="flex flex-col gap-2 pr-8">
<h2 className="text-3xl font-medium tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>
              Zarezerwuj termin
            </h2>
<p className="text-base text-neutral-400 font-light">
              Zostaw swoje dane, a my skontaktujemy się z Tobą.
            </p>
</div>
<form className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm text-neutral-500 uppercase tracking-widest">
                Imię i Nazwisko
              </label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-lg text-white focus:outline-none transition-colors font-light focus:border-[#e31e24]" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-neutral-500 uppercase tracking-widest">
                Adres E-mail
              </label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-lg text-white focus:outline-none transition-colors font-light focus:border-[#e31e24]" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-neutral-500 uppercase tracking-widest">
                Numer Telefonu
              </label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-lg text-white focus:outline-none transition-colors font-light focus:border-[#e31e24]" required="" type="tel"/>
</div>
<div className="flex gap-4 items-start mt-2">
<input className="mt-1.5 w-5 h-5 accent-[#e31e24] bg-transparent border-white/20 cursor-pointer shrink-0" id="marketing-consent" required="" type="checkbox"/>
<label className="text-sm text-neutral-400 font-light cursor-pointer select-none leading-relaxed" htmlFor="marketing-consent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
                marketingowych.
              </label>
</div>
<button className="mt-4 border border-white/20 py-5 px-8 text-base tracking-widest text-white uppercase transition-colors duration-300 w-full hover:bg-[#e31e24] hover:border-[#e31e24] text-center" onclick="event.preventDefault(); document.getElementById('booking-modal').classList.add('hidden');" type="submit">
              Zarezerwuj termin
            </button>
</form>
</div>
</div>
</div>

    </>
  );
}
