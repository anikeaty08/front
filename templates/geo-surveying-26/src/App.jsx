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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="md:text-2xl text-xl font-semibold text-red-600 tracking-tighter border-0 ring-0 shadow-sm" href="#start">GEO-PROJEKT</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors text-gray-50" href="#start">Start</a>
<a className="hover:text-white transition-colors text-gray-50" href="#o-nas">O nas</a>
<a className="hover:text-white transition-colors text-gray-50" href="#oferta">Oferta</a>
<a className="hover:text-white transition-colors text-gray-50" href="#opinie">Opinie</a>
<a className="hover:text-white transition-colors text-gray-50" href="#kontakt">Kontakt</a>
</div>
<a className="inline-flex items-center justify-center hover:bg-BLACK-100 transition-colors text-sm font-medium text-gray-50 bg-red-600 h-10 rounded-full px-4 shadow-sm" href="tel:+48123456789">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
  Zadzwoń
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden" id="start">

<div className="absolute inset-0 z-0">
<img alt="Geodezja w terenie" className="w-full h-full object-cover object-center" src="https://i.postimg.cc/bwZSHKCM/Gemini-Generated-Image-lzicvilzicvilzic.png"/>
<div className="backdrop-blur-[2px] bg-zinc-950/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-4xl mr-auto ml-auto relative items-center">
<div className="inline-flex gap-2 text-lg font-bold text-red-500 bg-white/10 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Działamy na terenie całego województwa
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-6">
                Precyzja, na której <br className="hidden md:block"/> możesz budować.
            </h1>
<p className="md:text-xl leading-relaxed text-base font-normal text-stone-50 max-w-2xl mb-10">
                Nowoczesne usługi geodezyjne dla klientów indywidualnych i biznesowych. Wykorzystujemy najnowsze technologie, aby dostarczać dokładne dane w najkrótszym czasie.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-zinc-900 text-base font-medium hover:bg-zinc-100 transition-colors shadow-lg" href="tel:+48123456789">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    +48 123 456 789
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border border-white/20 text-white text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm" href="mailto:biuro@geo-nowoczesna.pl">
<iconify-icon className="mr-2 text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                    Napisz e-mail
                </a>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pr-6 pb-24 pl-6" id="o-nas">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="md:text-4xl text-3xl font-semibold text-zinc-900 tracking-tight mb-6">Mierzymy rzeczywistość z milimetrową dokładnością.</h2>
<p className="leading-relaxed text-base text-zinc-500 mb-6">
                        Jesteśmy zespołem doświadczonych geodetów, dla których praca to nie tylko pomiary, ale przede wszystkim pasja do przestrzeni. Wykorzystujemy innowacyjny sprzęt (drony, skanery 3D, precyzyjne odbiorniki GNSS), co pozwala nam realizować zlecenia szybciej i dokładniej niż tradycyjne biura.
                    </p>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                        Naszym priorytetem jest jasna komunikacja z klientem i terminowość. Wiemy, że od naszej pracy zależą kolejne etapy Twojej inwestycji.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
<iconify-icon className="text-xl text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Ponad 10 lat doświadczenia w branży
                        </div>
<div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
<iconify-icon className="text-xl text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Najnowocześniejszy sprzęt pomiarowy
                        </div>
<div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
<iconify-icon className="text-xl text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Brak ukrytych kosztów
                        </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tighter text-zinc-900 mb-2">1500+</span>
<span className="text-sm font-medium text-zinc-500">Zrealizowanych projektów</span>
</div>
<div className="bg-zinc-900 rounded-2xl p-6 text-white flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tighter mb-2">100%</span>
<span className="text-sm font-medium text-zinc-400">Zadowolonych klientów</span>
</div>
<div className="col-span-2 rounded-2xl overflow-hidden h-48 relative border border-zinc-100">
<img alt="Sprzęt geodezyjny" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-zinc-50 border-t border-zinc-200/50" id="oferta">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Pełen zakres usług</h2>
<p className="text-base text-zinc-500">Zapewniamy kompleksową obsługę geodezyjną na każdym etapie inwestycji – od pierwszej mapy po inwentaryzację końcową.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Mapy do celów projektowych</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Tworzymy dokładne mapy sytuacyjno-wysokościowe, niezbędne do uzyskania pozwolenia na budowę i przygotowania projektu architektonicznego.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Tyczenie budynków i sieci</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Precyzyjnie przenosimy projekt w teren. Wyznaczamy osie konstrukcyjne budynków oraz trasy przyłączy i sieci uzbrojenia terenu.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Inwentaryzacje powykonawcze</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Wykonujemy pomiary kontrolne po zakończeniu budowy, niezbędne do oddania obiektu do użytku i aktualizacji baz danych państwowych.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Podziały i rozgraniczenia</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Prowadzimy kompleksowe procedury prawne związane z podziałami działek, wznawianiem znaków granicznych oraz rozgraniczeniami nieruchomości.
                    </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pr-6 pb-24 pl-6" id="opinie">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Co mówią nasi klienci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                        "Współpraca na najwyższym poziomie. Mapa do celów projektowych została wykonana przed ustalonym terminem. Świetny kontakt i pełen profesjonalizm. Zdecydowanie polecam."
                    </p>
<div className="text-sm font-medium text-zinc-900">Kamil S.</div>
<div className="text-xs text-zinc-400 mt-1">Inwestor prywatny</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                        "Jako biuro architektoniczne stale współpracujemy z GEO. Zawsze dostajemy czyste, precyzyjne pliki, a ekipa w terenie działa szybko i bezproblemowo. Niezawodny partner."
                    </p>
<div className="text-sm font-medium text-zinc-900">Anna K.</div>
<div className="text-xs text-zinc-400 mt-1">Architekt</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex gap-1 mb-4 text-zinc-900">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                        "Bardzo sprawny podział działki, mimo skomplikowanej sytuacji prawnej. Panowie z GEO poprowadzili całą procedurę w urzędzie za mnie. Oszczędność czasu i nerwów."
                    </p>
<div className="text-sm font-medium text-zinc-900">Michał T.</div>
<div className="text-xs text-zinc-400 mt-1">Właściciel nieruchomości</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-white bg-slate-700 pt-24 pr-6 pb-24 pl-6" id="kontakt">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="flex flex-col">
<span className="uppercase text-sm font-medium text-zinc-50 tracking-wide mb-4">Szybki kontakt</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-8 leading-tight">
                        Zacznijmy pracę <br/> nad Twoim projektem.
                    </h2>
<p className="leading-relaxed text-base text-gray-50 max-w-md mb-12">
                        Nie trać czasu na wypełnianie formularzy. Zadzwoń do nas bezpośrednio lub wyślij e-mail z opisem zlecenia. Otrzymasz darmową wycenę.
                    </p>
<div className="space-y-8">
<div className="">
<div className="text-sm text-zinc-50 mb-2">Zadzwoń do nas (Pn - Pt: 8:00 - 16:00)</div>
<a className="group flex items-center w-fit" href="tel:+48123456789">
<span className="group-hover:text-zinc-300 transition-colors md:text-4xl text-3xl font-semibold text-red-600 tracking-tight">+48 123 456 789</span>
<iconify-icon className="ml-3 text-2xl text-zinc-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="">
<div className="text-sm text-zinc-50 mb-2">Napisz do nas</div>
<a className="group flex items-center w-fit" href="mailto:biuro@geo-nowoczesna.pl">
<span className="group-hover:text-zinc-300 transition-colors group-hover:border-zinc-300 text-2xl font-medium text-red-600 tracking-tight border-zinc-700 border-b pb-1">biuro@geo-nowoczesna.pl</span>
</a>
</div>
<div className="pt-8 border-t border-zinc-800 flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-500 mt-1" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div className="">
<div className="text-base font-medium text-red-600">GEO. Usługi Geodezyjne</div>
<div className="text-zinc-400 text-sm mt-1">ul. Innowacyjna 12<br/>00-001 Warszawa</div>
</div>
</div>
</div>
</div>

<div bg-zinc-800="" border="" border-zinc-800="" className="" h-[400px]="" lg:h-full="" map-container="" min-h-[400px]="" overflow-hidden="" relative"="" rounded-3xl="" w-full="">

<iframe allowfullscreen="" className="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98227042882!2d20.896615935515793!3d52.23288709783956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1777280777939!5m2!1spl!2spl" style={{border: '0'}} width="600"></iframe>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-800 bg-zinc-900 text-center text-xs text-zinc-500">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-semibold tracking-tighter text-zinc-400 text-sm">GEO.</div>
<div className="">© 2026 Wszelkie prawa zastrzeżone.</div>
</div>
</footer>

    </>
  );
}
