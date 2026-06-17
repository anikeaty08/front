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



            document.getElementById('current-year').textContent = new Date().getFullYear();
          


      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
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
      

<a aria-label="Napisz na WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300 group animate-whatsapp-hop" href="https://wa.me/48603649736" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path className="" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
</svg>
<span aria-hidden="true" className="pointer-events-none absolute left-[18px] top-[18px] h-[8px] w-[3px] -rotate-12 rounded-full bg-white/90"></span>
<span className="absolute right-20 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-montserrat">
        Kontakt przez WhatsApp
      </span>
</a>

<nav className="sticky top-0 z-40 bg-gray-900 border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0 flex items-center gap-2">
<a className="flex items-center" href="#">
<img alt="Holver Instalacje" className="h-14 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dca9bb39-97de-48b8-8615-733aa0063c7e_800w.png"/>
</a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-lg text-gray-300 hover:text-white transition-colors font-montserrat" href="#uslugi">
              Usługi
            </a>
<a className="text-lg text-gray-300 hover:text-white transition-colors font-montserrat" href="#o-nas">
              O nas
            </a>
<a className="text-lg text-gray-300 hover:text-white transition-colors font-montserrat" href="#realizacje">
              Realizacje
            </a>
<a className="text-lg text-gray-300 hover:text-white transition-colors font-montserrat" href="#faq">
              FAQ
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-lg font-medium text-white hover:text-blue-400 transition-colors font-montserrat" href="tel:+48603649736">
<i className="w-5 h-5 text-blue-400" data-lucide="phone"></i>
              603 649 736
            </a>
<a className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-lg font-medium hover:bg-blue-500 transition-colors font-montserrat" href="tel:+48603649736">
              ZADZWOŃ
            </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8 font-montserrat">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
              Szybkie terminy montażu w tym miesiącu
            </div>
<h1 className="text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6 leading-tight font-manrope font-medium">
              Komfort przez cały rok.
              <br/>
<span className="text-blue-600 font-manrope font-medium">
                Klimatyzacja i pompy ciepła.
              </span>
</h1>
<p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-manrope font-medium">
              Zapewniamy profesjonalny dobór, montaż i serwis urządzeń w Twoim
              domu lub biurze. Postaw na liderów w branży HVAC.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-sm font-montserrat" href="#kontakt">
                Zamów bezpłatną wycenę
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto font-montserrat" href="tel:+48603649736">
<i className="w-5 h-5 text-gray-500" data-lucide="phone-call"></i>
                Zadzwoń teraz
              </a>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
<img alt="Technik po naprawie klimatyzacji pokazuje kciuk w górę" className="rounded-3xl shadow-lg object-cover w-full h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d911f2d4-55b6-4f1f-a678-5414e520944d_1600w.jpg"/>

<a className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 z-20" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x471b356ccbee99e5:0xa112eee6563c5a3c?sa=X&amp;ved=1t:8290&amp;hl=en&amp;ictx=111" id="trust-badge" rel="noopener noreferrer" target="_blank">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center shadow-sm">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path className="" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
<div className="h-12 px-3 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-sm font-bold text-white shadow-sm z-10 whitespace-nowrap font-montserrat">
                  5/5
                </div>
</div>
<div className="">
<div className="flex text-yellow-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-sm font-medium mt-1 text-gray-900 font-montserrat">
                  Na podstawie 48 opinii
                </p>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-2xl tracking-tight text-white mb-2 font-manrope font-medium">
            Szukasz sprawdzonego instalatora?
          </h2>
<p className="text-lg text-gray-400 font-montserrat">
            Nasz zespół jest gotowy do działania. Umów się na darmowy pomiar.
          </p>
</div>
<a className="shrink-0 bg-blue-600 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-blue-500 transition-colors font-montserrat" href="#kontakt">
          Przejdź do formularza
        </a>
</div>
</section>

<section className="py-24 bg-gray-50" id="uslugi">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl tracking-tight text-gray-900 mb-6 font-manrope font-medium">
            W czym możemy Ci pomóc?
          </h2>
<p className="text-xl text-gray-600 font-manrope font-medium">
            Specjalizujemy się w nowoczesnych systemach kontroli temperatury. Od
            domów jednorodzinnych po obiekty komercyjne.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="snowflake"></i>
</div>
<h3 className="text-2xl tracking-tight text-gray-900 mb-4 font-manrope font-medium">
              Klimatyzacja
            </h3>
<p className="text-lg text-gray-600 mb-6 font-montserrat">
              Sprzedaż, dobór i montaż klimatyzacji czołowych producentów.
              Zadbaj o idealną temperaturę latem i dogrzewanie zimą.
            </p>
<ul className="space-y-3 mb-8 text-lg text-gray-600">
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
                Split i Multi-Split
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
                Klimatyzatory kanałowe
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
                Integracja Smart Home
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="sun"></i>
</div>
<h3 className="text-2xl tracking-tight text-gray-900 mb-4 font-manrope font-medium">
              Pompy Ciepła
            </h3>
<p className="text-lg text-gray-600 mb-6 font-montserrat">
              Energooszczędne systemy grzewcze dla Twojego domu. Oszczędzaj na
              rachunkach z nowoczesną technologią.
            </p>
<ul className="space-y-3 mb-8 text-lg text-gray-600">
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
                Pompy powietrze-woda
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
                Pompy powietrze-powietrze
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
                Pomoc w dotacjach
              </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="wrench"></i>
</div>
<h3 className="text-2xl tracking-tight text-gray-900 mb-4 font-manrope font-medium">
              Serwis i Przeglądy
            </h3>
<p className="text-lg text-gray-600 mb-6 font-montserrat">
              Regularne przeglądy i czyszczenie urządzeń, aby zapewnić ich długą
              żywotność i zdrowe powietrze w pomieszczeniach.
            </p>
<ul className="space-y-3 mb-8 text-lg text-gray-600">
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-green-600" data-lucide="check"></i>
                Odgrzybianie i ozonowanie
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-green-600" data-lucide="check"></i>
                Uzupełnianie czynnika
              </li>
<li className="flex items-center gap-3 font-montserrat">
<i className="w-5 h-5 text-green-600" data-lucide="check"></i>
                Szybka naprawa usterek
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 gap-16 items-center">
<div className="relative mb-12 lg:mb-0">
<img alt="Montażysta przy pracy" className="rounded-3xl shadow-lg w-full object-cover h-[600px]" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
<i className="w-10 h-10 mb-4" data-lucide="shield-check"></i>
<h4 className="text-xl mb-2 font-manrope font-medium">
                Gwarancja jakości
              </h4>
<p className="text-blue-100 font-montserrat">
                Certyfikowani instalatorzy z wieloletnim doświadczeniem.
              </p>
</div>
</div>
<div>
<h2 className="text-4xl tracking-tight text-gray-900 mb-6 font-manrope font-medium">
              Dlaczego warto wybrać Holver?
            </h2>
<p className="text-xl text-gray-600 mb-8 leading-relaxed font-manrope font-medium">
              Nie jesteśmy tylko sprzedawcami sprzętu. Jesteśmy doradcami
              technicznymi. Zależy nam na tym, aby zaproponowane rozwiązanie
              idealnie wpisywało się w Twoje potrzeby i budżet. Dbamy o estetykę
              montażu i porządek po pracy.
            </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-gray-900" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-xl text-gray-900 mb-1 font-manrope font-medium">
                    Krótkie terminy realizacji
                  </h4>
<p className="text-lg text-gray-600 font-montserrat">
                    Szanujemy Twój czas. Od wyceny do montażu często mijają
                    zaledwie dni, a nie tygodnie.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-gray-900" data-lucide="brush"></i>
</div>
<div>
<h4 className="text-xl text-gray-900 mb-1 font-manrope font-medium">
                    Czystość podczas montażu
                  </h4>
<p className="text-lg text-gray-600 font-montserrat">
                    Zabezpieczamy meble i podłogi. Używamy odkurzaczy
                    przemysłowych w trakcie wiercenia.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-gray-900" data-lucide="headphones"></i>
</div>
<div>
<h4 className="text-xl text-gray-900 mb-1 font-manrope font-medium">
                    Opieka posprzedażowa
                  </h4>
<p className="text-lg text-gray-600 font-montserrat">
                    Nie znikamy po instalacji. Zawsze służymy pomocą techniczną
                    i przypominamy o serwisach.
                  </p>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-gray-100">
<p className="text-lg text-gray-600 mb-6 font-montserrat">
                Chcesz zobaczyć, co możemy dla Ciebie zrobić?
              </p>
<a className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors font-montserrat" href="#kontakt">
                Napisz do nas
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="realizacje">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl tracking-tight text-gray-900 mb-4 font-manrope font-medium">
              Nasze ostatnie realizacje
            </h2>
<p className="text-xl text-gray-600 font-manrope font-medium">
              Estetyka montażu jest dla nas równie ważna co poprawne działanie
              sprzętu.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square">
<img alt="Montaż pompy ciepła" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e1add61-05e8-441b-beaa-e92436fd4d70_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white text-xl font-manrope font-medium">
                Montaż pompy ciepła
              </span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square">
<img alt="Pompa ciepła Kaisai" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4705e4d-ec0a-44fa-b046-cb573d459af5_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white text-xl font-manrope font-medium">
                Pompa ciepła Kaisai
              </span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-square">
<img alt="Nowoczesna pompa ciepła" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fbb026a-7ed4-4004-b1f2-31785306218c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<span className="text-white text-xl font-manrope font-medium">
                Nowoczesna pompa ciepła
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white" id="opinie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight text-gray-900 mb-6 font-manrope font-medium">
            Co mówią o nas klienci?
          </h2>
<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-manrope font-medium">
            Jakość naszych usług potwierdzają dziesiątki pozytywnych opinii.
            Sprawdź, co piszą o nas klienci w wizytówce Google.
          </p>
<div className="flex flex-col items-center justify-center gap-2">
<div className="flex items-center gap-4">
<div className="text-4xl md:text-5xl text-gray-900 whitespace-nowrap font-manrope font-medium">
                5/5
              </div>
<div className="flex flex-col items-start">
<div className="flex text-yellow-400">
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-6 h-6 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="text-sm text-gray-500 mt-1 font-medium font-montserrat">
                  Na podstawie 48 opinii
                </div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 mt-1 font-montserrat" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x471b356ccbee99e5:0xa112eee6563c5a3c?sa=X&amp;ved=1t:8290&amp;hl=en&amp;ictx=111" rel="noopener noreferrer" target="_blank">
                  Zobacz wizytówkę w Google
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div>
<h4 className="text-lg font-medium text-gray-900 font-montserrat">
                  Michał
                </h4>
<p className="text-sm text-gray-500 font-montserrat">
                  Opinia z Google
                </p>
</div>
<svg className="w-6 h-6 absolute top-8 right-8" fill="none" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
<div className="flex text-yellow-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-gray-600 text-lg leading-relaxed font-montserrat">
              "Pełen profesjonalizm! Montaż klimatyzacji przebiegł bardzo szybko
              i czysto. Panowie doradzili najlepsze rozwiązanie do mojego
              mieszkania. Polecam każdemu."
            </p>
</div>
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div>
<h4 className="text-lg font-medium text-gray-900 font-montserrat">
                  Anna
                </h4>
<p className="text-sm text-gray-500 font-montserrat">
                  Opinia z Google
                </p>
</div>
<svg className="w-6 h-6 absolute top-8 right-8" fill="none" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
<div className="flex text-yellow-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-gray-600 text-lg leading-relaxed font-montserrat">
              "Świetna ekipa, doradztwo na najwyższym poziomie. Zdecydowaliśmy
              się na pompę ciepła i to był strzał w dziesiątkę. Rachunki w końcu
              spadły."
            </p>
</div>
<div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-6">
<div>
<h4 className="text-lg font-medium text-gray-900 font-montserrat">
                  Tomasz
                </h4>
<p className="text-sm text-gray-500 font-montserrat">
                  Opinia z Google
                </p>
</div>
<svg className="w-6 h-6 absolute top-8 right-8" fill="none" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
</div>
<div className="flex text-yellow-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-gray-600 text-lg leading-relaxed font-montserrat">
              "Bardzo solidna firma. Punktualnie, zgodnie z ustaleniami, a po
              montażu zostawili po sobie idealny porządek. W 100% polecam ich
              usługi."
            </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight text-gray-900 mb-6 font-manrope font-medium">
            Często zadawane pytania
          </h2>
<p className="text-xl text-gray-600 font-manrope font-medium">
            Rozwiewamy wątpliwości przed podjęciem decyzji o montażu.
          </p>
</div>
<div className="space-y-4">

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium text-gray-900">
<span className="font-manrope font-medium">
                Ile trwa standardowy montaż klimatyzacji?
              </span>
<span className="ml-6 flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-lg text-gray-600 leading-relaxed font-montserrat">
              Standardowy montaż jednostki typu split (jedna jednostka
              wewnętrzna i jedna zewnętrzna) zazwyczaj zajmuje od 4 do 6 godzin.
              W przypadku bardziej skomplikowanych instalacji czas ten może ulec
              wydłużeniu, o czym zawsze informujemy podczas darmowych oględzin.
            </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium text-gray-900">
<span className="font-manrope font-medium">
                Czy pomagacie w uzyskaniu dofinansowania na pompę ciepła?
              </span>
<span className="ml-6 flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-lg text-gray-600 leading-relaxed font-montserrat">
              Tak, oferujemy doradztwo w zakresie dostępnych programów
              dotacyjnych (np. Mój Prąd, Czyste Powietrze). Pomagamy przygotować
              niezbędną dokumentację techniczną potrzebną do złożenia wniosku.
            </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium text-gray-900">
<span className="font-manrope font-medium">
                Jak często należy serwisować klimatyzację?
              </span>
<span className="ml-6 flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-lg text-gray-600 leading-relaxed font-montserrat">
              Zalecamy przeprowadzanie profesjonalnego serwisu minimum dwa razy
              w roku – przed sezonem letnim (chłodzenie) oraz przed zimowym
              (ogrzewanie). Regularny serwis to podstawa do utrzymania gwarancji
              producenta oraz zapewnienia czystego powietrza w domu.
            </div>
</details>

<details className="group bg-gray-50 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 text-xl font-medium text-gray-900">
<span className="font-manrope font-medium">
                Czy wycena jest płatna?
              </span>
<span className="ml-6 flex-shrink-0 bg-white w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-lg text-gray-600 leading-relaxed font-montserrat">
              Nie, pierwsza wizyta polegająca na pomiarach, doborze urządzenia i
              sporządzeniu oferty jest u nas całkowicie darmowa i
              niezobowiązująca.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 gap-16 items-start">
<div className="mb-12 lg:mb-0">
<h2 className="text-4xl tracking-tight text-white mb-6 font-manrope font-medium">
              Rozpocznijmy współpracę
            </h2>
<p className="text-xl text-gray-400 mb-10 leading-relaxed font-manrope font-medium">
              Zostaw swoje dane, a nasz specjalista skontaktuje się z Tobą
              najszybciej jak to możliwe, aby omówić szczegóły darmowej wyceny.
            </p>
<div className="space-y-8">
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm text-gray-400 font-medium mb-1 font-montserrat">
                    Zadzwoń do nas
                  </p>
<a className="text-2xl hover:text-blue-400 transition-colors font-manrope font-medium" href="tel:+48603649736">
                    603 649 736
                  </a>
</div>
</div>
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm text-gray-400 font-medium mb-1 font-montserrat">
                    Napisz e-mail
                  </p>
<a className="text-xl hover:text-blue-400 transition-colors font-manrope font-medium" href="mailto:biuro@holver.pl">
                    biuro@holver.pl
                  </a>
</div>
</div>
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm text-gray-400 font-medium mb-1 font-montserrat">
                    Adres
                  </p>
<p className="text-lg font-medium font-montserrat">
                    ul. Spółdzielców 9
                    <br/>
                    62-510 Konin
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
<h3 className="text-2xl tracking-tight text-gray-900 mb-8 font-manrope font-medium">
              Wypełnij formularz
            </h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900 font-montserrat" htmlFor="firstName">
                    Imię i nazwisko
                  </label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="firstName" name="firstName" placeholder="Jan Kowalski" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900 font-montserrat" htmlFor="phone">
                    Numer telefonu
                  </label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" id="phone" name="phone" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900 font-montserrat" htmlFor="service">
                  Jakiej usługi szukasz?
                </label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all appearance-none" id="service" name="service">
<option className="font-montserrat">
                      Klimatyzacja (montaż)
                    </option>
<option className="font-montserrat">
                      Pompa ciepła (montaż)
                    </option>
<option className="font-montserrat">Serwis / naprawa</option>
<option className="font-montserrat">Inne</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900 font-montserrat" htmlFor="message">
                  Wiadomość (opcjonalnie)
                </label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none" id="message" name="message" placeholder="Krótko opisz swój budynek lub preferencje..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 text-white rounded-xl px-4 py-4 text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-sm font-montserrat" type="submit">
                Wyślij zapytanie
              </button>
<p className="text-sm text-gray-500 text-center mt-4 font-montserrat">
                Wysyłając formularz akceptujesz politykę prywatności.
              </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white">
<a className="flex items-center" href="#">
<img alt="Holver Instalacje" className="h-10 w-auto object-contain brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dca9bb39-97de-48b8-8615-733aa0063c7e_800w.png"/>
</a>
</div>
<div className="text-gray-400 text-sm font-montserrat">
          ©
          <span className="font-montserrat" id="current-year">2026</span>
          Holver. Wszelkie prawa zastrzeżone.
          
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-white transition-colors text-sm font-montserrat" href="#">
            Polityka prywatności
          </a>
<a className="text-gray-400 hover:text-white transition-colors text-sm font-montserrat" href="#">
            Regulamin
          </a>
</div>
</div>
</footer>



    </>
  );
}
