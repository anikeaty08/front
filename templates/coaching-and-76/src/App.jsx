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



const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;



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
      

<header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-[#E6DCCB] transition-colors duration-[400ms]">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['Manrope',sans-serif] text-xl font-medium tracking-tighter text-[#1C1712] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="/">
        RUCH <span className="text-[#E07B2E]">/</span> DO ZMIAN
      </a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Oferta dla firm</a>
<a className="text-sm font-medium text-[#A8761A] hover:text-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Coaching i mentoring</a>
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Metody</a>
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Wydarzenia</a>
</nav>
<div className="hidden lg:block">
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-7 py-3 text-sm font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:outline-none" href="#rezerwacja">
          Umów rozmowę
        </a>
</div>
<button aria-label="Otwórz menu" className="lg:hidden p-2 text-[#1C1712] hover:text-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>
<main>

<section className="relative bg-[#FAF6EF] pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(224,123,46,0.06)_0%,rgba(250,246,239,0)_70%)] rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(156,61,20,0.05)_0%,rgba(250,246,239,0)_70%)] rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
<span className="font-['Manrope',sans-serif] text-xs font-medium tracking-widest text-[#9C3D14] uppercase mb-6 block">Coaching i Mentoring</span>
<h1 className="font-['Manrope',sans-serif] text-5xl md:text-6xl font-extralight leading-tight tracking-tight text-[#1C1712] uppercase mb-8 max-w-4xl relative">
          Poznaj siebie. <br className="hidden md:block"/> Rozpoznaj kierunek.
          
<span className="absolute -bottom-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-24 h-[3px] bg-[linear-gradient(90deg,#9C3D14,#E07B2E,#C8901F,#F2C94C)] rounded-full"></span>
</h1>
<p className="text-lg font-light text-[#3A322A] max-w-[720px] leading-relaxed mb-10">
          Indywidualny proces pracy z ciałem, umysłem, emocjami i relacjami — dla osób, które osiągnęły wiele, a wciąż szukają ożywiającego kontaktu ze sobą.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="inline-flex w-full sm:w-auto items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-8 py-4 text-base font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EF] focus-visible:outline-none" href="#rezerwacja">
            Umów bezpłatną rozmowę wstępną
          </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center bg-transparent text-[#A8761A] rounded-full px-6 py-4 text-base font-medium hover:bg-[#F2E9DA] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none" href="#jak-pracuje">
            Zobacz, jak pracuję
          </a>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32 border-b border-[#FAF6EF]">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="lg:col-span-5">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-6">Partnerstwo w procesie zmiany</h2>
<p className="text-base font-light text-[#6B6258] leading-relaxed mb-6">
            Proces coachingowy to przestrzeń pełnego skupienia. Zależy mi na ekskluzywności i głębokiej, szczerej relacji, dlatego <strong className="font-medium text-[#1C1712]">przyjmuję maksymalnie 3 osoby jednocześnie</strong>.
          </p>
</div>
<div className="lg:col-span-7 flex flex-col gap-4 lg:gap-6">
<div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FAF6EF] border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<iconify-icon className="text-[#E07B2E] flex-shrink-0 mt-0.5" height="28" icon="solar:user-speak-linear" strokeWidth="1.5" width="28"></iconify-icon>
<p className="text-base font-light text-[#3A322A] leading-relaxed">
              Dla liderów i managerów z doświadczeniem w rozwoju osobistym, którzy potrzebują partnera do rozmowy na wyższym poziomie.
            </p>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FAF6EF] border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<iconify-icon className="text-[#E07B2E] flex-shrink-0 mt-0.5" height="28" icon="solar:routing-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<p className="text-base font-light text-[#3A322A] leading-relaxed">
              Dla osób w drodze zmiany – stojących przed nowym etapem, trudną decyzją w życiu zawodowym lub osobistym.
            </p>
</div>
<div className="flex items-start gap-5 p-6 rounded-2xl bg-[#FAF6EF] border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<iconify-icon className="text-[#E07B2E] flex-shrink-0 mt-0.5" height="28" icon="solar:battery-charge-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
<p className="text-base font-light text-[#3A322A] leading-relaxed">
              Dla ludzi, którzy obiektywnie osiągnęli dużo (kariera, rodzina), ale czują wewnętrzną pustkę, brak energii i utratę ożywiającego kontaktu ze sobą.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
<span className="font-['Manrope',sans-serif] text-xs font-medium tracking-widest text-[#9C3D14] uppercase mb-4 block">Co się zmieni?</span>
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight">Zamiast poszukiwać na zewnątrz, uporządkujesz wnętrze</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.04)] border border-[#E6DCCB] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.08)] transition-shadow duration-[400ms]">
<div className="w-12 h-12 rounded-full bg-[#FAF6EF] flex items-center justify-center mb-6">
<iconify-icon className="text-[#C8901F]" height="26" icon="solar:eye-scan-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Większa świadomość</h3>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Rozpoznasz swoje prawdziwe potrzeby, uwalniając się od oczekiwań narzuconych przez otoczenie.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.04)] border border-[#E6DCCB] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.08)] transition-shadow duration-[400ms]">
<div className="w-12 h-12 rounded-full bg-[#FAF6EF] flex items-center justify-center mb-6">
<iconify-icon className="text-[#C8901F]" height="26" icon="solar:bolt-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Więcej energii</h3>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Odzyskasz siły witalne, zrzucając z siebie ciężar przewlekłego przeciążenia, schematów i napięć.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.04)] border border-[#E6DCCB] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.08)] transition-shadow duration-[400ms]">
<div className="w-12 h-12 rounded-full bg-[#FAF6EF] flex items-center justify-center mb-6">
<iconify-icon className="text-[#C8901F]" height="26" icon="solar:compass-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Klarowność decyzji</h3>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Zyskasz realną sprawczość, podejmując decyzje w 100% zgodzie ze swoim wewnętrznym kierunkiem.</p>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.04)] border border-[#E6DCCB] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.08)] transition-shadow duration-[400ms]">
<div className="w-12 h-12 rounded-full bg-[#FAF6EF] flex items-center justify-center mb-6">
<iconify-icon className="text-[#C8901F]" height="26" icon="solar:shield-check-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Autentyczne relacje</h3>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Zbudujesz psychofizyczną odporność i nawiążesz głębsze, bardziej żywe relacje z innymi ludźmi.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32" id="jak-pracuje">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
<div className="max-w-2xl">
<span className="font-['Manrope',sans-serif] text-xs font-medium tracking-widest text-[#9C3D14] uppercase mb-4 block">Metoda I_GO_SYSTEM</span>
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight">Praca w czterech wymiarach ludzkiego doświadczenia</h2>
</div>
<p className="text-base font-light text-[#6B6258] max-w-md leading-relaxed lg:pb-2">
            Proces coachingowy opieram na własnej, sprawdzonej przez ponad 30 lat metodologii, która integruje wszystkie obszary ludzkiego funkcjonowania w jeden spójny system.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-[#FAF6EF] rounded-xl p-8 flex flex-col h-full border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#9C3D14]" height="24" icon="solar:accessibility-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#1C1712]">Ciało</h3>
</div>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Rozpoznawanie sygnałów płynących z ciała i uwalnianie zapisanych w nim schematów oraz wieloletnich napięć.</p>
</div>
<div className="bg-[#FAF6EF] rounded-xl p-8 flex flex-col h-full border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#E07B2E]" height="24" icon="solar:brain-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#1C1712]">Umysł</h3>
</div>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Świadoma praca z przekonaniami, porządkowanie myśli, redukcja hałasu informacyjnego i poszerzanie perspektywy poznawczej.</p>
</div>
<div className="bg-[#FAF6EF] rounded-xl p-8 flex flex-col h-full border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#C8901F]" height="24" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#1C1712]">Emocje</h3>
</div>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Nauka zdrowego przeżywania, wyrażania i transformowania trudnych stanów emocjonalnych w paliwo do zmiany.</p>
</div>
<div className="bg-[#FAF6EF] rounded-xl p-8 flex flex-col h-full border border-transparent hover:border-[#E6DCCB] transition-colors duration-[400ms]">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-[#F2C94C]" height="24" icon="solar:users-group-two-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="font-['Manrope',sans-serif] text-xl font-medium tracking-tight text-[#1C1712]">Relacje</h3>
</div>
<p className="text-sm font-light text-[#6B6258] leading-relaxed">Budowanie autentycznego kontaktu ze sobą, który w naturalny sposób przenosi się na głębsze relacje z innymi.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-6">Jak wygląda nasza droga?</h2>
<p className="text-base font-light text-[#6B6258] leading-relaxed mb-8">
            Cały proces to zazwyczaj 6–12 sesji dopasowanych do Twojego tempa. Spotykamy się online lub na żywo w Warszawie.
          </p>
<a className="inline-flex items-center justify-center bg-white border border-[#1C1712] text-[#1C1712] rounded-full px-7 py-3 text-sm font-medium hover:bg-[#1C1712] hover:text-[#FFFFFF] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EF] focus-visible:outline-none" href="#rezerwacja">
            Sprawdź warianty poniżej
          </a>
</div>
<div className="lg:col-span-7 flex flex-col gap-10 lg:pl-10 relative">

<div className="absolute left-4 lg:left-14 top-4 bottom-4 w-px bg-[#E6DCCB]"></div>
<div className="relative pl-12 lg:pl-16">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-[#C8901F] flex items-center justify-center z-10 text-xs font-medium text-[#1C1712]">1</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Bezpłatna rozmowa wstępna</h3>
<p className="text-base font-light text-[#6B6258] leading-relaxed">To czas na wzajemne poznanie się. Weryfikujemy, czy to właściwy moment na rozpoczęcie pracy, ustalamy cel i sprawdzamy, czy między nami „kliknie”.</p>
</div>
<div className="relative pl-12 lg:pl-16">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#C8901F] flex items-center justify-center z-10 text-xs font-medium text-[#1C1712]">2</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Właściwy proces 1:1</h3>
<p className="text-base font-light text-[#6B6258] leading-relaxed">Cykl 6 do 12 regularnych sesji (co 2–3 tygodnie), podczas których prowadzimy pracę mentalną, emocjonalną i fizyczną. Formuła online lub gabinetowa.</p>
</div>
<div className="relative pl-12 lg:pl-16">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-[#E6DCCB] flex items-center justify-center z-10 text-xs font-medium text-[#1C1712]">3</div>
<h3 className="font-['Manrope',sans-serif] text-2xl font-normal tracking-tight text-[#1C1712] mb-3">Integracja i samodzielność</h3>
<p className="text-base font-light text-[#6B6258] leading-relaxed">Ostatni etap to zebranie doświadczeń, wdrożenie nowych nawyków w życie codzienne i odzyskanie pełnej sprawczości do samodzielnego działania.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32" id="rezerwacja">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-4">Wybierz format pracy</h2>
<p className="text-base font-light text-[#6B6258]">Cały proces to zwykle 6–12 sesji. Płatność odbywa się za każdą sesję osobno.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">

<div className="bg-white border border-[#E6DCCB] rounded-[20px] p-8 lg:p-10 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.14)] transition-shadow duration-[400ms] flex flex-col">
<h3 className="font-['Manrope',sans-serif] text-3xl font-medium tracking-tight text-[#1C1712] mb-2">Proces Coachingu</h3>
<p className="text-sm font-light text-[#6B6258] mb-8 h-12">Fokus na realizacji Twojego konkretnego celu i wydobyciu wewnętrznego potencjału.</p>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="font-['Manrope',sans-serif] text-4xl font-light tracking-tight text-[#1C1712]">400 zł</span>
<span className="text-sm font-light text-[#6B6258] mb-1">/ sesja</span>
</div>
<p className="text-sm font-medium text-[#A8761A]">Czas trwania: 60–90 min</p>
</div>
<ul className="flex flex-col gap-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Klaryfikacja osobistego celu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Praca technikami I_GO_SYSTEM</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Online lub gabinet (Warszawa)</span>
</li>
</ul>
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-7 py-3.5 text-base font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:outline-none w-full" href="#">
              Zarezerwuj sesję
            </a>
</div>

<div className="bg-white border border-[#E6DCCB] rounded-[20px] p-8 lg:p-10 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] hover:shadow-[0px_16px_48px_rgba(28,23,18,0.14)] transition-shadow duration-[400ms] flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(200,144,31,0.1)_0%,rgba(255,255,255,0)_70%)] rounded-bl-full pointer-events-none"></div>
<h3 className="font-['Manrope',sans-serif] text-3xl font-medium tracking-tight text-[#1C1712] mb-2">Proces Mentoringu</h3>
<p className="text-sm font-light text-[#6B6258] mb-8 h-12">Prowadzenie po ścieżce rozwoju w oparciu o moje wieloletnie doświadczenie życiowe i biznesowe.</p>
<div className="mb-8">
<div className="flex items-end gap-2 mb-2">
<span className="font-['Manrope',sans-serif] text-4xl font-light tracking-tight text-[#1C1712]">500 zł</span>
<span className="text-sm font-light text-[#6B6258] mb-1">/ sesja</span>
</div>
<p className="text-sm font-medium text-[#A8761A]">Czas trwania: 90–120 min</p>
</div>
<ul className="flex flex-col gap-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Dzielenie się wiedzą i perspektywą</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Poszerzony czas trwania i analiza case studies</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#5C7A4A] flex-shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light text-[#3A322A]">Online lub gabinet (Warszawa)</span>
</li>
</ul>
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-7 py-3.5 text-base font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:outline-none w-full" href="#">
              Zarezerwuj sesję
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32 border-t border-[#E6DCCB]">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="aspect-square bg-[#E6DCCB] rounded-[20px] flex items-center justify-center overflow-hidden shadow-[0px_8px_24px_rgba(28,23,18,0.08)] relative">
<iconify-icon className="text-[#6B6258] opacity-50" height="64" icon="solar:user-rounded-linear" width="64"></iconify-icon>
<span className="absolute bottom-4 left-0 w-full text-center text-xs text-[#6B6258] uppercase tracking-widest">Portret Michała</span>
</div>
<div>
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-6">Michał Ratajski</h2>
<p className="text-lg font-light text-[#3A322A] leading-relaxed mb-6">
            Od ponad 30 lat wspieram ludzi i organizacje w świadomej pracy nad pełnią ich potencjału. Autentyczność to rdzeń mojej pracy — uczę tylko tego, co sam zweryfikowałem w doświadczeniu.
          </p>
<p className="text-base font-light text-[#6B6258] leading-relaxed mb-8">
            Stworzyłem system I_GO_SYSTEM, aby dać narzędzia pozwalające nie tylko zrozumieć siebie, ale realnie wprowadzić zmianę poprzez działanie. Prowadzę procesy dla osób gotowych zmierzyć się z tym, co trudne, by osiągnąć lekkość, klarowność i moc w codziennym życiu.
          </p>
<div className="flex items-center gap-6 pt-4 border-t border-[#E6DCCB]">
<div>
<span className="block font-['Manrope',sans-serif] text-3xl font-medium text-[#C8901F] mb-1">30+</span>
<span className="block text-xs font-medium uppercase tracking-widest text-[#6B6258]">lat doświadczenia</span>
</div>
<div className="w-px h-12 bg-[#E6DCCB]"></div>
<div>
<span className="block font-['Manrope',sans-serif] text-3xl font-medium text-[#C8901F] mb-1">1:1</span>
<span className="block text-xs font-medium uppercase tracking-widest text-[#6B6258]">praca autorska</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-16 text-center">Historie transformacji</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#FAF6EF] rounded-2xl p-8 border border-[#E6DCCB]">
<iconify-icon className="text-[#C8901F] mb-6 opacity-60" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-base font-light text-[#3A322A] leading-relaxed mb-8 italic">
              "Rozmowy z Michałem były dla mnie momentem zwrotnym. Przyszedłem, czując wypalenie po kilkunastu latach prowadzenia biznesu. W trakcie procesu nie dostałem tanich rad — dostałem przestrzeń, w której mogłem po raz pierwszy od lat usłyszeć, czego ja sam właściwie chcę. Odzyskałem energię do pracy i do życia rodzinnego."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#E6DCCB] flex items-center justify-center">
<span className="font-['Manrope',sans-serif] text-sm font-medium text-[#1C1712]">T</span>
</div>
<div>
<p className="font-['Manrope',sans-serif] text-base font-medium text-[#1C1712]">Tomasz</p>
<p className="text-xs font-light text-[#6B6258]">Przedsiębiorca (Proces Mentoringu)</p>
</div>
</div>
</div>

<div className="bg-[#FAF6EF] rounded-2xl p-8 border border-[#E6DCCB] flex flex-col">
<div aria-label="Odtwórz opinię wideo – Marcin" className="aspect-video bg-[#1C1712] rounded-xl flex items-center justify-center relative overflow-hidden mb-6 group cursor-pointer" role="button">

<iconify-icon className="text-white relative z-10 group-hover:scale-110 transition-transform duration-[400ms]" height="48" icon="solar:play-circle-linear" width="48"></iconify-icon>
<div className="absolute inset-0 bg-[#3A322A] opacity-50 mix-blend-multiply"></div>
</div>
<div className="mt-auto">
<p className="font-['Manrope',sans-serif] text-base font-medium text-[#1C1712]">Marcin</p>
<p className="text-xs font-light text-[#6B6258]">Uczestnik cyklu coachingowego</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#1C1712] leading-tight mb-12 text-center">Masz pytania?</h2>
<div className="flex flex-col gap-4">
<details className="group bg-white rounded-xl border border-[#E6DCCB] open:shadow-[0px_8px_24px_rgba(28,23,18,0.04)] transition-shadow">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-base text-[#1C1712] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-xl">
<span className="pr-6">Online czy na żywo?</span>
<span className="transition group-open:rotate-180 flex-shrink-0">
<iconify-icon className="text-[#A8761A]" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6258] font-light text-base mt-2 leading-relaxed px-6 pb-6">
              Pracuję w obu formatach. Sesje gabinetowe odbywają się w Warszawie, w spokojnej i bezpiecznej przestrzeni. Jeśli logistyka na to nie pozwala, równie efektywnie prowadzimy proces online. Format ustalamy podczas bezpłatnej rozmowy wstępnej.
            </div>
</details>
<details className="group bg-white rounded-xl border border-[#E6DCCB] open:shadow-[0px_8px_24px_rgba(28,23,18,0.04)] transition-shadow">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-base text-[#1C1712] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-xl">
<span className="pr-6">Ile trwa proces?</span>
<span className="transition group-open:rotate-180 flex-shrink-0">
<iconify-icon className="text-[#A8761A]" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6258] font-light text-base mt-2 leading-relaxed px-6 pb-6">
              Standardowy, domknięty cykl to zazwyczaj od 6 do 12 spotkań. Tempo pracy ustalamy indywidualnie — najczęściej widzimy się co 2 lub 3 tygodnie. Zależy mi na tym, by dać czas na integrację zmian w życiu pomiędzy spotkaniami.
            </div>
</details>
<details className="group bg-white rounded-xl border border-[#E6DCCB] open:shadow-[0px_8px_24px_rgba(28,23,18,0.04)] transition-shadow">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-base text-[#1C1712] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-xl">
<span className="pr-6">Czym różni się coaching od mentoringu?</span>
<span className="transition group-open:rotate-180 flex-shrink-0">
<iconify-icon className="text-[#A8761A]" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6258] font-light text-base mt-2 leading-relaxed px-6 pb-6">
              W <strong>Coachingu</strong> pełnię rolę lustra i narzędzia – pomagam Ci znaleźć Twoje własne odpowiedzi i zrealizować wybrany przez Ciebie cel, głównie poprzez trafne pytania i pracę ciałem. W <strong>Mentoringu</strong> wkraczam też w rolę przewodnika – aktywnie dzielę się wiedzą, doświadczeniem (m.in. biznesowym) oraz sugeruję ścieżki na podstawie analizy Twojego przypadku.
            </div>
</details>
<details className="group bg-white rounded-xl border border-[#E6DCCB] open:shadow-[0px_8px_24px_rgba(28,23,18,0.04)] transition-shadow">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-base text-[#1C1712] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-xl">
<span className="pr-6">Czy to dla mnie, jeśli nie jestem w głębokim kryzysie?</span>
<span className="transition group-open:rotate-180 flex-shrink-0">
<iconify-icon className="text-[#A8761A]" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="text-[#6B6258] font-light text-base mt-2 leading-relaxed px-6 pb-6">
              Zdecydowanie tak. Kryzys jest mocnym katalizatorem zmiany, ale często pracuję z osobami, którym w obiektywnym ujęciu świetnie się wiedzie, jednak odczuwają "pustkę", brak sensu, czy wyczerpanie. Proces ten pomaga przejść z trybu przetrwania do trybu ożywiającego, pełnego życia kontaktu ze sobą.
            </div>
</details>
</div>
</div>
</section>

<section className="bg-[#1C1712] py-24 lg:py-32 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#9C3D14,#E07B2E,#C8901F,#F2C94C)]"></div>
<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
<h2 className="font-['Manrope',sans-serif] text-4xl lg:text-5xl font-light tracking-tight text-[#FFFFFF] leading-tight mb-6">Gotowy na pierwszy krok?</h2>
<p className="text-lg font-light text-[#E6DCCB] leading-relaxed mb-10 max-w-2xl mx-auto">
          Zarezerwuj termin bezpłatnej, 30-minutowej rozmowy, podczas której sprawdzimy, czy moja metoda jest odpowiedzią na Twoje potrzeby.
        </p>
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] rounded-full px-8 py-4 text-base font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1712] focus-visible:outline-none" href="#rezerwacja">
          Umów bezpłatną rozmowę wstępną
        </a>
</div>
</section>

<section className="bg-white py-24 lg:py-32">
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="font-['Manrope',sans-serif] text-3xl lg:text-4xl font-light tracking-tight text-[#1C1712] leading-tight mb-4">Jeszcze nie teraz? Zostań w kontakcie.</h2>
<p className="text-base font-light text-[#6B6258] leading-relaxed mb-6">
            Dołącz do naszej społeczności poza hałasem social mediów. Dzielę się tam przemyśleniami o pracy, ciele i relacjach bezpośrednio z gabinetu.
          </p>
<a className="text-sm font-medium text-[#A8761A] underline decoration-1 underline-offset-4 hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">
            Czytaj artykuły na Substack
          </a>
</div>
<div className="bg-[#FAF6EF] p-8 rounded-[20px]">
<form action="#" className="flex flex-col gap-4" method="POST">
<label className="sr-only text-[15px] font-semibold text-[#1C1712]" htmlFor="email">Adres e-mail</label>
<div className="flex flex-col sm:flex-row gap-4">
<input className="w-full bg-white text-[#1C1712] border border-[#E6DCCB] rounded-[12px] px-4 py-3 text-base placeholder-[#6B6258] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:border-transparent focus-visible:outline-none transition-shadow" id="email" name="email" placeholder="Twój adres e-mail" required="" type="email"/>
<button className="inline-flex items-center justify-center flex-shrink-0 bg-[#C8901F] text-[#1C1712] rounded-full px-7 py-3 text-[15px] font-medium hover:bg-[#A8761A] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EF] focus-visible:outline-none" type="submit">
                Zapisz się
              </button>
</div>
<p className="text-[13px] font-light text-[#6B6258] mt-2">
              Szanuję Twoją prywatność. Zero spamu, możliwość wypisania w każdej chwili. Zapisując się, akceptujesz <a className="underline hover:text-[#A8761A] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Politykę Prywatności</a>.
            </p>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-[#1C1712] text-[#FFFFFF] py-16 lg:py-24 border-t-4 border-[#C8901F]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="md:col-span-1">
<a className="block font-['Manrope',sans-serif] text-xl font-medium tracking-tighter text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm mb-6 inline-block" href="/">
            RUCH <span className="text-[#E07B2E]">/</span> DO ZMIAN
          </a>
<p className="text-sm font-light text-[#E6DCCB] leading-relaxed">
            Poruszamy ludzi. Uruchamiamy zmianę.
          </p>
</div>
<div>
<h4 className="font-['Inter',sans-serif] text-sm font-semibold text-[#FFFFFF] mb-6 tracking-wide">Oferta</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Oferta dla firm</a></li>
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Coaching i mentoring</a></li>
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Wyprawy (TRU MAN)</a></li>
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Metoda I_GO_SYSTEM</a></li>
</ul>
</div>
<div>
<h4 className="font-['Inter',sans-serif] text-sm font-semibold text-[#FFFFFF] mb-6 tracking-wide">Kontakt</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="mailto:kontakt@ruchdozmian.pl">kontakt@ruchdozmian.pl</a></li>
<li><span className="text-sm font-light text-[#E6DCCB]">Warszawa, Polska</span></li>
<li className="mt-2 flex gap-4">
<a aria-label="LinkedIn" className="text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">
<iconify-icon height="24" icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a aria-label="Substack" className="text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</a>
</li>
</ul>
</div>
<div>
<h4 className="font-['Inter',sans-serif] text-sm font-semibold text-[#FFFFFF] mb-6 tracking-wide">Firma</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Polityka Prywatności</a></li>
<li><a className="text-sm font-light text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="#">Regulamin</a></li>
<li><span className="text-sm font-light text-[#E6DCCB]">NIP: 1234567890</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#3A322A] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-light text-[#6B6258]">
          © 2023 Ruch do Zmian. Wszelkie prawa zastrzeżone.
        </p>
<p className="text-xs font-light text-[#6B6258]">
          Vibe-coded by <a className="text-[#E6DCCB] hover:text-[#C8901F] transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-[#A8761A] focus-visible:outline-none rounded-sm" href="https://heartmade.pl" rel="noopener noreferrer" target="_blank">Heartmade</a>
</p>
</div>
</div>
</footer>

    </>
  );
}
