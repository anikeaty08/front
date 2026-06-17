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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold text-red-600 tracking-tighter" href="#">GEO-PROJEKT</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#start">Start</a>
<a className="hover:text-zinc-900 transition-colors" href="#o-nas">O nas</a>
<a className="hover:text-zinc-900 transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-zinc-900 transition-colors" href="#galeria">Galeria</a>
<a className="hover:text-zinc-900 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<a className="hidden sm:inline-flex items-center justify-center hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-50 bg-red-600 h-9 rounded-md pr-4 pl-4" href="tel:+48123456789">
                +48 123 456 789
            </a>
</div>
</header>
<main className="">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="start" style={{backgroundImage: 'url(\'https://i.postimg.cc/3wLM8vBX/Gemini-Generated-Image-1l7fyo1l7fyo1l7f.png\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>

<div className="bg-zinc-900/55 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col z-10 text-center max-w-3xl mr-auto ml-auto relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-zinc-200 mb-8">
<span className="w-2 h-2 rounded-full bg-green-400"></span>
    Dostępni do zleceń
  </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
    Precyzja pomiaru.<br/>Pewność inwestycji.
  </h1>
<p className="text-lg text-zinc-300 mb-10 max-w-2xl font-normal leading-relaxed">
  Profesjonalne usługi geodezyjne dla klientów indywidualnych i biznesowych. Szybka realizacja, nowoczesny sprzęt i
  pełne wsparcie dokumentacyjne na każdym etapie budowy.
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-white/20 transition-colors gap-2 text-sm font-medium text-white bg-red-600/95 w-full h-12 rounded-lg pr-8 pl-8" href="tel:+48123456789"><iconify-icon className="text-lg" height="18" icon="solar:phone-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon> Zadzwoń teraz
  </a>
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-white/20 transition-colors gap-2 text-sm font-medium text-white bg-red-600/95 w-full h-12 rounded-lg pr-8 pl-8" href="mailto:biuro@geo-pomiary.pl">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
      Napisz e-mail
    </a>
</div>
</div>
</section>

<section className="border-y bg-white border-zinc-100 pt-24 pb-24" id="o-nas">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Lokalny zespół, globalne standardy</h2>
<div className="space-y-4 text-zinc-600 font-normal leading-relaxed">
<p className="">Od ponad dekady dostarczamy usługi geodezyjne najwyższej jakości na terenie całego powiatu i okolic. Znamy lokalne uwarunkowania, co pozwala nam działać sprawnie i bez zbędnych opóźnień.</p>
<p className="">Wykorzystujemy najnowocześniejsze instrumenty pomiarowe – tachimetry robotyczne i odbiorniki GNSS, co gwarantuje milimetrową dokładność naszych opracowań.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6 pt-8 border-t border-zinc-100">
<div className="">
<div className="text-2xl font-semibold tracking-tight text-zinc-900">10+</div>
<div className="text-sm text-zinc-500 mt-1">Lat na rynku</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">500+</div>
<div className="text-sm text-zinc-500 mt-1">Zrealizowanych projektów</div>
</div>
</div>
</div>
<div className="relative h-[400px] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/50">
<img absolute="" alt="Sprzęt geodezyjny" bottom-0="" className="" grayscale"="" left-0="" object-cover="" right-0="" src="https://i.postimg.cc/FzrTn9w7/Gemini-Generated-Image-7hyyd97hyyd97hyy.png" top-0=""/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="oferta">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">W czym możemy pomóc?</h2>
<p className="text-zinc-500 max-w-xl mx-auto">Kompleksowa obsługa inwestycji budowlanych oraz doradztwo geodezyjne.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-white border border-zinc-200/60 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Mapy do celów projektowych</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Aktualizacja map zasadniczych niezbędna do rozpoczęcia prac projektowych i uzyskania pozwolenia na budowę.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200/60 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:ruler-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Wytyczenia budynków</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Precyzyjne wytyczanie osi konstrukcyjnych budynków, sieci uzbrojenia terenu i przyłączy w terenie.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200/60 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:document-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Inwentaryzacje powykonawcze</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Pomiary zrealizowanych obiektów w celu ich wpisania do państwowego zasobu i odbioru budynku.</p>
</div>
<div className="p-6 rounded-2xl bg-white border border-zinc-200/60 hover:border-zinc-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 text-zinc-900">
<iconify-icon className="text-xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Podziały nieruchomości</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Obsługa prawna granic, podziały, rozgraniczenia i wznowienia znaków granicznych działek.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50 px-6" id="galeria">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Galeria realizacji</h2>
<p className="text-zinc-400">Zobacz jak pracujemy w terenie.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
<div className="aspect-square rounded-xl overflow-hidden bg-zinc-800">
<img alt="Praca w terenie" className="hover:opacity-100 hover:scale-105 transition-all duration-500 opacity-80 w-full h-full object-cover" src="https://i.postimg.cc/v8PF5gw8/IMG-20241213-123103412-3.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-zinc-800">
<img alt="Pomiary" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://i.postimg.cc/wvCspKpQ/1731847530594.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden bg-zinc-800">
<img alt="Budowa" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" src="https://i.postimg.cc/wB4SKnxj/IMG-20240718-154811914.jpg"/>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="kontakt">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Skontaktuj się z nami</h2>
<p className="text-zinc-500 mb-10 max-w-md leading-relaxed">
                            Potrzebujesz wyceny lub konsultacji? Jesteśmy do Twojej dyspozycji. Zadzwoń bezpośrednio lub wyślij wiadomość e-mail. Odpowiadamy najszybciej jak to możliwe.
                        </p>
<div className="space-y-8">
<a className="group flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-zinc-100/50 transition-colors" href="tel:+48123456789">
<div className="w-12 h-12 rounded-full bg-zinc-100 group-hover:bg-white flex items-center justify-center border border-zinc-200/50 text-zinc-900 shrink-0 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-500 mb-1">Telefon</div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">+48 123 456 789</div>
</div>
</a>
<a className="group flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-zinc-100/50 transition-colors" href="mailto:biuro@geo-pomiary.pl">
<div className="w-12 h-12 rounded-full bg-zinc-100 group-hover:bg-white flex items-center justify-center border border-zinc-200/50 text-zinc-900 shrink-0 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-500 mb-1">E-mail</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight">biuro@geo-projekt.pl</div>
</div>
</a>
<div className="flex items-start gap-4 p-4 -ml-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-200/50 text-zinc-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-medium text-zinc-500 mb-1">Biuro</div>
<div className="text-base font-medium text-zinc-900">Warszawa</div>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 relative">
<iframe allowfullscreen="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156390.0250619096!2d20.749622477013162!3d52.2325911042294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1777275824100!5m2!1spl!2spl" style={{border: '0'}} width="600"></iframe>
</div>
</div>
</div>
</section>
</main>
<footer className="py-8 border-t border-zinc-200 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-xl font-semibold text-zinc-900 tracking-tighter">GEO-PROJEKT</div>
<p className="text-xs font-medium text-zinc-500">© 2026 GEO-PROJEKT Usługi Geodezyjne. Wszelkie prawa zastrzeżone.</p>
</div>
</footer>

    </>
  );
}
