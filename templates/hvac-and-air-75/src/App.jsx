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



      document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          menu.classList.add('flex');
        } else {
          menu.classList.add('hidden');
          menu.classList.remove('flex');
        }
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="index.html">
<img alt="ThermoVIBE HVACR Systems" className="h-12 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/007ba1fd-c3a0-436b-9bd4-e0b88c976b5a_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="index.html">
            Home
          </a>
<a className="text-blue-600 font-medium" href="oferta.html">Oferta</a>
<a className="hover:text-slate-900 transition-colors" href="o-nas.html">
            O nas
          </a>
<a className="hover:text-slate-900 transition-colors" href="realizacje.html">
            Realizacje
          </a>
<a className="hover:text-slate-900 transition-colors" href="kontakt.html">
            Kontakt
          </a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors" href="tel:+48512598211">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
            512 598 211
          </a>
</div>
<button className="md:hidden text-slate-600" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
<div className="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-6 flex-col gap-6 absolute w-full left-0 top-full shadow-xl" id="mobile-menu">
<a className="block text-lg font-medium text-slate-600 hover:text-slate-900" href="index.html">
          Home
        </a>
<a className="block text-lg font-medium text-blue-600" href="oferta.html">
          Oferta
        </a>
<a className="block text-lg font-medium text-slate-600 hover:text-slate-900" href="o-nas.html">
          O nas
        </a>
<a className="block text-lg font-medium text-slate-600 hover:text-slate-900" href="realizacje.html">
          Realizacje
        </a>
<a className="block text-lg font-medium text-slate-600 hover:text-slate-900" href="kontakt.html">
          Kontakt
        </a>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors mt-2" href="tel:+48512598211">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
          512 598 211
        </a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight mb-8">
          Klimatyzacja, chłodnictwo i systemy HVAC z
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            doświadczeniem serwisowym
          </span>
</h1>
<p className="text-xl md:text-2xl font-normal text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          Montaż, serwis i diagnostyka klimatyzacji, wentylacji, pomp ciepła
          oraz większych systemów chłodniczych. Pracujemy zarówno przy prostych
          instalacjach typu split, jak i przy bardziej rozbudowanych układach
          dla firm, biur i obiektów technicznych.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-red-700 hover:to-blue-700 transition-colors shadow-sm" href="kontakt.html">
            Zadzwoń i omów instalację
            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-colors shadow-sm" href="kontakt.html">
            Poproś o wycenę
          </a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto text-left">
<div className="flex items-start gap-3">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-slate-700 font-medium">
              Ponad 20 lat doświadczenia w branży
            </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-slate-700 font-medium">
              Montaż i serwis systemów split, multi, VRF/VRV
            </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-slate-700 font-medium">
              Diagnostyka usterek i usuwanie przyczyn awarii
            </span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-2xl text-blue-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg text-slate-700 font-medium">
              Obsługa klientów indywidualnych, firm i obiektów
            </span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-50/50 to-blue-50/50 rounded-full blur-3xl -z-10"></div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              Nie tylko montaż. Pełne zrozumienie systemu.
            </h2>
<div className="space-y-6 text-lg text-slate-600 font-normal">
<p>
                ThermoVibe powstało na bazie ponad 20 lat doświadczenia w pracy
                z klimatyzacją, chłodnictwem, wentylacją i systemami HVAC. Przez
                lata zdobywaliśmy praktykę przy montażach, serwisie oraz
                obsłudze większych układów — od prostych klimatyzatorów
                ściennych po rozbudowane systemy dla biur, serwerowni i obiektów
                technicznych.
              </p>
<p>
                Naszą przewagą jest podejście serwisowe.
                <span className="text-slate-900 font-medium">
                  Nie kończymy pracy na odczytaniu błędu z urządzenia.
                </span>
                Szukamy przyczyny problemu, sprawdzamy pracę całego układu i
                dobieramy rozwiązanie, które ma działać długoterminowo.
              </p>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
<iconify-icon className="text-9xl text-slate-300" icon="solar:settings-linear"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    Podejście
                  </p>
<p className="text-xl font-semibold text-slate-900 tracking-tight">
                    Głęboka diagnoza
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Czym się zajmujemy?
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
<iconify-icon className="text-2xl" icon="solar:home-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Klimatyzacja do domu i mieszkania
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Dobór, montaż i serwis klimatyzatorów typu split oraz multi split.
              Pomagamy dobrać urządzenie do pomieszczenia, oczekiwań i budżetu.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Klimatyzacja dla biur i firm
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Rozwiązania dla lokali, biur, gabinetów, małych obiektów
              usługowych i przestrzeni użytkowych. Wykonujemy instalacje
              pojedyncze oraz bardziej rozbudowane układy z kilkoma jednostkami.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
<iconify-icon className="text-2xl" icon="solar:network-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Systemy VRF/VRV i większe instalacje
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Obsługa większych systemów klimatyzacji, w tym układów
              przeznaczonych dla biurowców, urzędów, obiektów technicznych i
              inwestycji wymagających większej wiedzy wykonawczej.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-red-200 shadow-md shadow-red-100/50 hover:shadow-lg hover:shadow-red-200/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                Specjalizacja
              </span>
</div>
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 border border-red-100">
<iconify-icon className="text-2xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Serwis i diagnostyka
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Diagnozujemy awarie, sprawdzamy przyczyny problemów i wykonujemy
              naprawy. Pomagamy tam, gdzie sama wymiana części nie rozwiązuje
              problemu.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
<iconify-icon className="text-2xl" icon="solar:wind-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Wentylacja i centrale wentylacyjne
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Obsługa central wentylacyjnych, systemów wentylacyjnych i
              rozwiązań związanych z wymianą oraz kontrolą powietrza w
              budynkach.
            </p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-700 mb-6 border border-slate-100">
<iconify-icon className="text-2xl" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Pompy ciepła i chłodnictwo
            </h3>
<p className="text-lg text-slate-600 font-normal flex-grow">
              Serwis, doradztwo i obsługa urządzeń chłodniczych, pomp ciepła,
              agregatów wody lodowej oraz instalacji technicznych.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Diagnozujemy przyczynę, nie tylko objaw
            </h2>
<p className="text-xl text-slate-300 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
              W wielu przypadkach awaria urządzenia nie wynika wyłącznie z
              uszkodzonej części. Czasem problem leży głębiej — w pracy zaworów,
              przepływie czynnika, konfiguracji układu, błędnym montażu albo w
              nieprawidłowej pracy całego systemu. Dlatego w ThermoVibe patrzymy
              na instalację całościowo. Sprawdzamy, co naprawdę doprowadziło do
              awarii, zamiast ograniczać się do wymiany elementu wskazanego
              przez kod błędu. Takie podejście pozwala ograniczyć ryzyko
              powracających usterek i niepotrzebnych kosztów.
            </p>
<div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
<p className="text-lg md:text-xl font-medium text-white tracking-tight">
                "Dobra diagnoza to często większa oszczędność niż szybka
                naprawa."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
              Dla klientów indywidualnych, firm i obiektów technicznych
            </h2>
<div className="text-lg text-slate-600 font-normal mb-8 space-y-4">
<p>
                Realizujemy zlecenia dla osób prywatnych, które szukają
                klimatyzacji do mieszkania lub domu, ale obsługujemy również
                firmy, biura, lokale usługowe, serwerownie i większe obiekty.
              </p>
<p>
                Możemy pomóc przy prostym montażu jednej jednostki, przy
                rozbudowie instalacji w biurze, przy serwisie istniejącego
                systemu oraz przy większych rozwiązaniach wymagających
                doświadczenia technicznego.
              </p>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
<ul className="space-y-5">
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Domy i mieszkania
                </span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Biura i lokale usługowe
                </span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Serwerownie
                </span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Obiekty techniczne
                </span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Większe instalacje HVAC
                </span>
</li>
<li className="flex items-center gap-4">
<iconify-icon className="text-2xl text-blue-600 shrink-0" icon="solar:check-read-linear"></iconify-icon>
<span className="text-lg text-slate-800 font-medium">
                  Systemy wymagające serwisu i diagnostyki
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
          Jak wygląda realizacja?
        </h2>
<div className="space-y-10 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-12 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm relative z-10 font-medium text-lg order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              1
            </div>
<div className="md:w-1/2 order-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Kontakt i rozmowa o potrzebach
              </h4>
<p className="text-base text-slate-600 font-normal">
                Najpierw ustalamy, czego dotyczy zlecenie: montażu, serwisu,
                modernizacji, awarii lub doboru urządzenia.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-12 group">
<div className="md:w-1/2 md:text-right order-3 md:order-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Ocena warunków
              </h4>
<p className="text-base text-slate-600 font-normal">
                Przy wycenie bierzemy pod uwagę m.in. długość instalacji,
                miejsce montażu, typ urządzenia, oczekiwania klienta i warunki
                techniczne.
              </p>
</div>
<div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm relative z-10 font-medium text-lg order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              2
            </div>
<div className="md:w-1/2 order-2 md:order-3 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-12 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm relative z-10 font-medium text-lg order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              3
            </div>
<div className="md:w-1/2 order-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Dobór rozwiązania
              </h4>
<p className="text-base text-slate-600 font-normal">
                Proponujemy urządzenie lub system dopasowany do realnych
                potrzeb. Możemy dobrać rozwiązania z różnych półek cenowych — od
                ekonomicznych po urządzenia premium.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-12 group">
<div className="md:w-1/2 md:text-right order-3 md:order-1 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Montaż lub serwis
              </h4>
<p className="text-base text-slate-600 font-normal">
                Wykonujemy prace techniczne zgodnie z ustalonym zakresem. Przy
                serwisie skupiamy się nie tylko na usunięciu usterki, ale też na
                znalezieniu jej przyczyny.
              </p>
</div>
<div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm relative z-10 font-medium text-lg order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              4
            </div>
<div className="md:w-1/2 order-2 md:order-3 hidden md:block"></div>
</div>

<div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 md:gap-12 group">
<div className="md:w-1/2 md:text-right order-2 md:order-1 hidden md:block"></div>
<div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm relative z-10 font-medium text-lg order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
              5
            </div>
<div className="md:w-1/2 order-3 bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-slate-200 transition-colors">
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">
                Dalsza obsługa
              </h4>
<p className="text-base text-slate-600 font-normal">
                Po realizacji można skorzystać z przeglądów, serwisu i wsparcia
                przy dalszej eksploatacji urządzeń.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
          Pracujemy na wielu markach urządzeń
        </h2>
<div className="max-w-3xl mx-auto text-lg text-slate-600 font-normal mb-12 space-y-4">
<p>
            Nie ograniczamy się do jednej marki. Dobieramy urządzenia do potrzeb
            klienta, budżetu i warunków montażowych. Obsługujemy zarówno
            popularne rozwiązania ekonomiczne, jak i urządzenia z wyższej półki.
          </p>
<p>
            W rozmowie z klientem wyjaśniamy różnice między markami,
            dostępnością części, jakością podzespołów oraz opłacalnością danego
            wyboru w dłuższej perspektywie.
          </p>
</div>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-2xl font-semibold tracking-tight text-slate-400">
<span className="hover:text-slate-800 transition-colors cursor-default">
            Fujitsu
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Daikin
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Mitsubishi
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            LG
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Haier
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Hisense
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Midea
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Kaisai
          </span>
<span className="hover:text-slate-800 transition-colors cursor-default">
            Gree
          </span>
<span className="text-xl text-slate-300 font-medium cursor-default">
            i inne
          </span>
</div>
</div>
</section>

<section className="py-24 bg-slate-900" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="text-white">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Potrzebujesz montażu, serwisu albo diagnozy systemu?
            </h2>
<p className="text-xl text-slate-300 font-normal mb-12">
              Opowiedz, czego dotyczy problem lub jaka instalacja Cię
              interesuje. Sprawdzimy, jakie rozwiązanie będzie najlepsze i
              przygotujemy indywidualną propozycję.
            </p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group" href="tel:+48512598211">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-white/10">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-medium">
                    Zadzwoń do nas
                  </p>
<p className="text-2xl font-semibold tracking-tight">
                    512 598 211
                  </p>
</div>
</a>
<a className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group" href="mailto:biuro@termovibe.pl">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors border border-white/10">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-medium">
                    Napisz e-mail
                  </p>
<p className="text-xl font-medium tracking-tight">
                    biuro@termovibe.pl
                  </p>
</div>
</a>
<div className="flex items-center gap-4 text-white pt-4">
<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
<iconify-icon className="text-2xl text-slate-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-medium">Adres firmy</p>
<p className="text-lg font-medium text-slate-300">
                    Nowodworska 44G
                    <br/>
                    05-119 Michałów-Reginów
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
              Wyślij zapytanie
            </h3>
<p className="text-base text-slate-600 font-normal mb-8">
              Opisz krótko, czego dotyczy zgłoszenie. Im więcej informacji
              podasz, tym łatwiej będzie ocenić zakres prac.
            </p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="name">
                    Imię i nazwisko
                  </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all text-base text-slate-900" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="phone">
                    Numer telefonu
                  </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all text-base text-slate-900" id="phone" placeholder="500 000 000" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="email">
                  Adres e-mail
                </label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all text-base text-slate-900" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="subject">
                  Czego dotyczy zgłoszenie?
                </label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all text-base text-slate-900 appearance-none" id="subject">
<option disabled="" selected="" value="">
                      Wybierz temat...
                    </option>
<option value="montaz">Montaż nowej instalacji</option>
<option value="serwis">Serwis / Naprawa</option>
<option value="przeglad">Przegląd okresowy</option>
<option value="inne">Inne / Doradztwo</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">
                  Wiadomość
                </label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all text-base text-slate-900 resize-y" id="message" placeholder="Opisz swój problem lub potrzebę..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white px-6 py-4 rounded-xl text-lg font-medium hover:from-red-700 hover:to-blue-700 transition-colors shadow-sm flex justify-center items-center gap-2" type="button">
                Wyślij wiadomość
                <iconify-icon className="text-xl" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-white/10 text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="flex items-center" href="index.html">
<img alt="ThermoVIBE Corporate" className="h-10 w-auto opacity-75 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f424e3d-d34a-4d8c-bb42-a80b6fa42ac0_320w.png"/>
</a>
<div className="text-sm font-normal text-slate-500">
          © 2024 ThermoVibe HVAC Systems. Wszelkie prawa zastrzeżone.
        </div>
<div className="flex gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">
            Polityka prywatności
          </a>
</div>
</div>
</footer>


    </>
  );
}
