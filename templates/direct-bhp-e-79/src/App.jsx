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

        // Modal Logic
        const modal = document.getElementById('contactModal');
        const modalPanel = document.getElementById('modalPanel');

        function openModal() {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('scale-95', 'opacity-0');
                modalPanel.classList.add('scale-100', 'opacity-100');
            }, 10);
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('scale-100', 'opacity-100');
            modalPanel.classList.add('scale-95', 'opacity-0');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    
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
      

<div className="bg-blue-950 text-white py-3">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-lg">
<span className="mb-2 sm:mb-0 font-normal tracking-tight text-xl">szkolenia bhp on-line</span>
<div className="flex items-center space-x-6">
<a className="hover:text-amber-400 transition-colors font-normal" href="#">Zaloguj</a>
<div className="h-4 w-[1px] bg-white/20"></div>
<button className="hover:text-amber-400 transition-colors font-normal">PL / UA</button>
</div>
</div>
</div>

<header className="bg-white border-b border-slate-100 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="flex flex-col items-start justify-center pt-1 pb-1" href="#">
<span className="font-medium text-3xl tracking-tight text-blue-950 leading-none uppercase">Direct BHP</span>
<span className="font-normal text-xs text-amber-500 tracking-widest uppercase mt-1">www.directbhp.pl</span>
</a>

<nav className="hidden lg:flex items-center space-x-8 text-xl font-normal text-slate-700">
<a className="text-amber-500" href="#">Home</a>
<a className="hover:text-amber-500 transition-colors" href="#">Platforma e-learning</a>
<a className="hover:text-amber-500 transition-colors" href="#">Strefa medyczna</a>
<a className="hover:text-amber-500 transition-colors" href="#">Kontakt</a>
</nav>

<button className="lg:hidden text-blue-950 hover:text-amber-500 transition-colors">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="bg-blue-950 py-16 md:py-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-amber-500 rounded-3xl translate-x-4 translate-y-4"></div>
<img alt="Aneta Hellberg - specjalista ds BHP" className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] lg:h-[700px] border-4 border-white/10" src="https://i.postimg.cc/rmLPtVxb/Whats-App-Image-2026.jpg"/>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4">
<div className="w-12 h-12 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-medium text-blue-950 text-xl tracking-tight">Aneta Hellberg</p>
<p className="text-lg text-slate-500">Specjalista ds. BHP</p>
</div>
</div>
</div>

<div className="space-y-10 order-1 lg:order-2">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                    Szkolenia BHP dla pracowników
                </h1>

<div className="grid sm:grid-cols-2 gap-6">
<a className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center" href="#">
<div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="monitor-play" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-blue-950 mb-2">Kup szkolenie online</h3>
<p className="text-lg text-slate-500 mb-6">Szybko i wygodnie</p>
<span className="inline-flex items-center justify-center w-full bg-amber-500 text-white px-6 py-3 rounded-xl font-normal text-xl group-hover:bg-amber-600 transition-colors">
                            Wybierz
                        </span>
</a>
<a className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center" href="#">
<div className="w-16 h-16 bg-slate-50 text-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-blue-950 mb-2">Medycyna pracy</h3>
<p className="text-lg text-slate-500 mb-6">Badania profilaktyczne</p>
<span className="inline-flex items-center justify-center w-full bg-blue-950 text-white px-6 py-3 rounded-xl font-normal text-xl group-hover:bg-blue-900 transition-colors">
                            Sprawdź
                        </span>
</a>
</div>

<div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
<div className="flex items-center space-x-3 mb-6">
<i className="w-6 h-6 text-amber-400" data-lucide="help-circle" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-white">Poproś o pomoc</h3>
</div>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<input className="w-full bg-white rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow border-0" placeholder="Imię" type="text"/>
<input className="w-full bg-white rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow border-0" placeholder="Telefon" type="tel"/>
</div>
<textarea className="w-full bg-white rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-shadow border-0 resize-none" placeholder="Treść pytania" rows="3"></textarea>
<button className="bg-amber-500 text-white px-8 py-4 rounded-xl font-normal text-xl hover:bg-amber-600 transition-colors w-full flex items-center justify-center space-x-2" type="button">
<span>Wyślij zapytanie</span>
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-8">
<i className="w-8 h-8" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-blue-950 mb-4">Ocena ryzyka zawodowego</h3>
<p className="text-xl leading-relaxed text-slate-600">Przygotowujemy kompleksową dokumentację oceny ryzyka dla wszystkich stanowisk w Twojej firmie.</p>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
<i className="w-8 h-8" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-blue-950 mb-4">Ochrona P.POŻ</h3>
<p className="text-xl leading-relaxed text-slate-600">Instrukcje bezpieczeństwa pożarowego, szkolenia z użycia gaśnic oraz procedury ewakuacyjne.</p>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-16 h-16 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-8">
<i className="w-8 h-8" data-lucide="heart-pulse" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-blue-950 mb-4">Pierwsza pomoc</h3>
<p className="text-xl leading-relaxed text-slate-600">Praktyczne kursy udzielania pierwszej pomocy przedmedycznej dla wyznaczonych pracowników.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center space-x-4 mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-blue-950">Nowe na blogu</h2>
<div className="h-px flex-1 bg-slate-100"></div>
</div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 group cursor-pointer">
<div className="grid sm:grid-cols-2 gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100 transition-colors group-hover:bg-slate-100">
<div className="relative overflow-hidden rounded-2xl aspect-square sm:aspect-auto sm:h-full">
<img alt="Praca biurowa" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="py-4 pr-4">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-base font-normal mb-4">
                                Artykuł
                            </div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-blue-950 mb-4 leading-snug group-hover:text-amber-500 transition-colors">
                                Zmiany w prawie pracy i BHP w 2024 roku
                            </h3>
<p className="text-xl text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                                Dowiedz się, jakie nowe obowiązki czekają pracodawców w nadchodzącym roku. Przygotowaliśmy kompleksowe zestawienie najważniejszych zmian prawnych, które musisz wdrożyć.
                            </p>
<span className="inline-flex items-center text-amber-500 font-normal text-xl">
                                Czytaj pełny artykuł
                                <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-blue-950 rounded-3xl p-10 text-white shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"></div>
<h3 className="text-3xl font-medium tracking-tight mb-10 relative">Kontakt</h3>
<div className="space-y-6 relative flex-1">
<a className="group flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="#">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-xl font-normal text-white">Facebook</span>
<span className="block text-lg text-blue-200 group-hover:text-white transition-colors">Zaobserwuj nas</span>
</div>
</a>
<a className="group flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="#">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-xl font-normal text-white">Instagram</span>
<span className="block text-lg text-blue-200 group-hover:text-white transition-colors">Codzienna dawka wiedzy</span>
</div>
</a>
<a className="group flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="#">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-xl font-normal text-white">Napisz e-mail</span>
<span className="block text-lg text-blue-200 group-hover:text-white transition-colors">biuro@directbhp.pl</span>
</div>
</a>
<a className="group flex items-center space-x-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10" href="#">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
<i className="w-7 h-7 text-white" data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-xl font-normal text-white">WhatsApp</span>
<span className="block text-lg text-blue-200 group-hover:text-white transition-colors">Szybki kontakt</span>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-white relative border-t border-blue-900">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Opinie o nas</h2>
<p className="text-2xl text-blue-200">Co mówią klienci, którzy nam zaufali</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-blue-900/40 border border-blue-800 p-8 rounded-3xl hover:bg-blue-900/60 transition-colors">
<div className="flex text-amber-400 mb-6 space-x-1">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-blue-100 mb-8 leading-relaxed">"Szkolenia e-learningowe są bardzo intuicyjne. Pracownicy szybko przyswajają wiedzę. Duża oszczędność czasu."</p>
<div>
<div className="font-normal text-xl text-white">Anna Wiśniewska</div>
<div className="text-lg text-blue-300 mt-1">Dyrektor HR, TechCorp</div>
</div>
</div>

<div className="bg-blue-900/40 border border-blue-800 p-8 rounded-3xl hover:bg-blue-900/60 transition-colors">
<div className="flex text-amber-400 mb-6 space-x-1">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-blue-100 mb-8 leading-relaxed">"Pełen profesjonalizm przy ocenie ryzyka zawodowego na hali produkcyjnej. Dokumentacja bez zarzutu."</p>
<div>
<div className="font-normal text-xl text-white">Piotr Kowalczyk</div>
<div className="text-lg text-blue-300 mt-1">Kierownik Produkcji</div>
</div>
</div>

<div className="bg-blue-900/40 border border-blue-800 p-8 rounded-3xl hover:bg-blue-900/60 transition-colors">
<div className="flex text-amber-400 mb-6 space-x-1">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-xl text-blue-100 mb-8 leading-relaxed">"Szkolenie z pierwszej pomocy było rewelacyjne. Dużo praktyki i świetne podejście instruktora."</p>
<div>
<div className="font-normal text-xl text-white">Marta Nowak</div>
<div className="text-lg text-blue-300 mt-1">Office Manager</div>
</div>
</div>

<div className="bg-blue-900/40 border border-blue-800 p-8 rounded-3xl hover:bg-blue-900/60 transition-colors flex flex-col justify-center items-center text-center group cursor-pointer">
<div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
<i className="w-8 h-8 text-white" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-2 text-white">Dodaj opinię</h4>
<p className="text-lg text-blue-300">Podziel się swoim doświadczeniem</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 py-10 border-t border-slate-900 text-center text-slate-500 text-lg">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Direct BHP - Szkolenia BHP On-line. Wszelkie prawa zastrzeżone.</p>
<div className="flex space-x-6 text-base">
<a className="hover:text-amber-500 transition-colors" href="#">Polityka Prywatności</a>
<a className="hover:text-amber-500 transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none flex flex-col justify-end">

<div className="md:hidden p-6 flex justify-center pointer-events-auto w-full pb-8">
<button className="w-full bg-amber-500 text-white px-6 py-5 rounded-2xl shadow-[0_10px_40px_rgba(245,158,11,0.3)] hover:bg-amber-600 transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 text-xl font-normal" onclick="openModal()">
<span>Zadaj pytanie</span>
<i className="w-6 h-6" data-lucide="message-square-plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden md:block w-full bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] pointer-events-auto">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<span className="text-2xl font-medium tracking-tight text-blue-950">Umów się na rozmowę</span>
<button className="bg-amber-500 text-white px-8 py-4 rounded-xl font-normal text-xl hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-3 duration-200" onclick="openModal()">
<span>Zadaj pytanie</span>
<i className="w-5 h-5" data-lucide="message-square-plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden opacity-0 transition-opacity duration-300" id="contactModal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="closeModal()"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 flex justify-center">

<div className="bg-white rounded-[2rem] shadow-2xl w-full relative scale-95 opacity-0 transition-all duration-300 flex flex-col" id="modalPanel">
<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors z-10" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="p-8 sm:p-10 flex-1 overflow-y-auto">
<h3 className="text-3xl font-medium tracking-tight text-blue-950 mb-3">Zadaj pytanie</h3>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">Zostaw swoje dane, a my skontaktujemy się z Tobą najszybciej jak to możliwe.</p>
<form className="space-y-5">
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Imię" required="" type="text"/>
</div>
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="E-mail" required="" type="email"/>
</div>
<div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-blue-950 text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Numer telefonu" required="" type="tel"/>
</div>

<label className="flex items-start space-x-4 cursor-pointer group mt-6">
<div className="relative flex-shrink-0 mt-1">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-6 h-6 border-2 border-slate-300 rounded-lg peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-all flex items-center justify-center group-hover:border-amber-400">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2.5"></i>
</div>
</div>
<span className="text-base text-slate-500 leading-relaxed select-none">
                                Wyrażam zgodę na przetwarzanie moich danych osobowych w celach marketingowych zgodnie z <a className="text-amber-500 hover:underline" href="#">Polityką Prywatności</a>.
                            </span>
</label>
<button className="w-full bg-blue-950 text-white px-8 py-4 rounded-xl font-normal text-xl hover:bg-blue-900 transition-colors mt-8 flex items-center justify-center space-x-2" onclick="closeModal()" type="button">
<span>Napisz</span>
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}
