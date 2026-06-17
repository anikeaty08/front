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
      

<nav className="fixed bg-white/80 w-full z-50 border-slate-200/50 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-slate-900">GEO.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-slate-900 transition-colors" href="#dlaczego-my">O nas</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:+48123456789">
<iconify-icon className="text-lg" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>+48 123 456 789</span>
</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm hidden sm:block" href="#kontakt">
            Darmowa wycena
          </a>
<button className="md:hidden text-slate-900 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative min-h-[80vh] flex items-center" style={{backgroundImage: 'url(\'https://i.postimg.cc/3xYXTKBD/Gemini-Generated-Image-jmswdjjmswdjjmsw.png\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
<div className="absolute inset-0 bg-slate-900/50 z-0"></div>
<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at top center, rgba(79, 70, 229, 0.05) 0%, transparent 50%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Lokalny geodeta w Twoim regionie</span>
</div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto drop-shadow-md">
          Precyzja, na której <br className="hidden md:block"/> możesz budować.
        </h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-sm">
          Kompleksowe pomiary geodezyjne dla klientów indywidualnych, firm budowlanych i biur projektowych. Rzetelnie, terminowo i zgodnie z aktualnym prawem.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium px-6 py-3 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2" href="#kontakt">
            Skontaktuj się z nami
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white text-base font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2" href="#uslugi">
            Zobacz nasze usługi
          </a>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-100 pt-20 pb-20" id="uslugi">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">W czym możemy pomóc?</h2>
<p className="text-slate-500 max-w-2xl mx-auto text-base">Zapewniamy pełen zakres usług geodezyjnych na każdym etapie procesu inwestycyjnego – od projektu po odbiór budynku.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm bg-slate-50/50 hover:bg-white transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-indigo-600 transition-colors" icon="solar:map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Mapy projektowe</h3>
<p className="text-sm text-slate-500 leading-relaxed">Opracowujemy aktualne mapy do celów projektowych, niezbędne do uzyskania pozwolenia na budowę.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm bg-slate-50/50 hover:bg-white transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-indigo-600 transition-colors" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Tyczenie budynków i sieci</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precyzyjne wyznaczanie w terenie lokalizacji obiektów budowlanych oraz przyłączy instalacyjnych.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm bg-slate-50/50 hover:bg-white transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-indigo-600 transition-colors" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Inwentaryzacje</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pomiary powykonawcze budynków i uzbrojenia terenu wymagane do zgłoszenia zakończenia budowy.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm bg-slate-50/50 hover:bg-white transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-indigo-600 transition-colors" icon="solar:signpost-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Podziały nieruchomości</h3>
<p className="text-sm text-slate-500 leading-relaxed">Zapewniamy profesjonalną obsługę prawną przy podziałach i rozgraniczeniach działek ewidencyjnych.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-sm bg-slate-50/50 hover:bg-white transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-indigo-600 transition-colors" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Obsługa inwestycji</h3>
<p className="text-sm text-slate-500 leading-relaxed">Kompleksowa obsługa geodezyjna placów budowy, pomiary objętości mas ziemnych i badanie przemieszczeń.</p>
</div>
<div className="p-6 rounded-2xl bg-indigo-600 border border-indigo-700 text-white flex flex-col justify-center items-start group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon className="text-9xl" icon="solar:compass-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium tracking-tight mb-2">Inne zlecenie?</h3>
<p className="text-sm text-indigo-100 mb-6 leading-relaxed">Realizujemy również niestandardowe zlecenia pomiarowe. Zadzwoń i zapytaj o wycenę.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium bg-white text-indigo-900 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors" href="#kontakt">
                Napisz do nas
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="dlaczego-my">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Mierzymy wyżej,<br/>aby ułatwić Ci proces.</h2>
<p className="text-slate-500 text-base mb-8 leading-relaxed">Geodezja to fundament każdej udanej inwestycji. Rozumiemy, jak ważne są detale i czas w procesie budowlanym. Nasze doświadczenie pozwala nam przewidywać problemy zanim się pojawią.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-indigo-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div>
<h4 className="text-base font-medium text-slate-900">Nowoczesny sprzęt</h4>
<p className="text-sm text-slate-500 mt-1">Pracujemy na precyzyjnych tachimetrach i odbiornikach GNSS najnowszej generacji.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-indigo-600" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div>
<h4 className="text-base font-medium text-slate-900">Szybki czas realizacji</h4>
<p className="text-sm text-slate-500 mt-1">Szanujemy Twój czas. Dokumentację przygotowujemy bez zbędnej zwłoki.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-indigo-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div>
<h4 className="text-base font-medium text-slate-900">Uprawnienia zawodowe</h4>
<p className="text-sm text-slate-500 mt-1">Posiadamy niezbędne państwowe uprawnienia w dziedzinie geodezji i kartografii.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative">
<img alt="Zdjęcie" className="absolute inset-0 w-full h-full object-cover" src="https://i.postimg.cc/FzrTn9w7/Gemini-Generated-Image-7hyyd97hyyd97hyy.png"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">10+</div>
<div>
<p className="text-sm font-medium text-slate-900">Lat doświadczenia</p>
<p className="text-xs text-slate-500">Na lokalnym rynku</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-20 pb-20" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Rozpocznijmy współpracę</h2>
<p className="text-slate-400 text-base mb-10">Potrzebujesz wyceny lub konsultacji? Zadzwoń lub napisz maila. Odpowiadamy zazwyczaj w ciągu 24 godzin.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-indigo-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-300">Biuro</h4>
<p className="text-base text-white mt-1">Wyspiańskiego <br/> Warszawa</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-indigo-400" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-300">Telefon</h4>
<a className="text-base text-white mt-1 hover:text-indigo-400 transition-colors inline-block" href="tel:+48123456789">+48 123 456 789</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
<iconify-icon className="text-xl text-indigo-400" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-300">Email</h4>
<a className="hover:text-indigo-400 transition-colors inline-block text-base text-white mt-1" href="mailto:b2geodeta@gmail.com">geo@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-slate-700 relative" style={{minHeight: '400px'}}>

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.3!2d22.0082!3d50.0182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfae21bca8bad%3A0x1!2sal.%20gen.%20W.%20Sikorskiego%20121%2C%2035-304%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}}>
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">GEO.</span>
<span className="text-slate-500 text-sm">© 2025 Wszystkie prawa zastrzeżone.</span>
</div>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Polityka prywatności</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>

    </>
  );
}
