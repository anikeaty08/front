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
      

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 mb-8 font-medium">
<i className="w-4 h-4 text-red-500" data-lucide="target" strokeWidth="1.5"></i>
                Dla właścicieli firm usługowych
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Zdobądź <span className="text-red-500">20-50 leadów</span> miesięcznie z kampanii META
            </h1>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Skaluj swoją firmę lokalną bez zgadywania. Przewidywalny system pozyskiwania klientów, który generuje zapytania każdego dnia.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2" href="#pakiety">
                    Sprawdź pakiety
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-y border-zinc-800/50 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
                Znasz ten problem ze swojego biznesu?
            </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Brak zapytań</h3>
<p className="text-zinc-400">Poczta milczy, a telefon nie dzwoni. Zależysz tylko od poleceń.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Słabe leady</h3>
<p className="text-zinc-400">Osoby, które pytają, szukają tylko "najtaniej" i nie kupują.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Przepalony budżet</h3>
<p className="text-zinc-400">Agencje brały pieniądze, ale nie dowoziły żadnych wyników.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl lg:col-span-1 md:col-span-2">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Brak czasu na marketing</h3>
<p className="text-zinc-400">Jesteś fachowcem od usług, nie masz czasu klikać w menedżerze reklam.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl lg:col-span-2 md:col-span-2">
<div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
<i className="w-6 h-6" data-lucide="trending-down" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Niepewność jutra</h3>
<p className="text-zinc-400">Stresujesz się, czy w przyszłym miesiącu uda się opłacić koszty stałe bez nowych zleceń.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
                Co otrzymasz w ramach współpracy?
            </h2>
<div className="grid md:grid-cols-2 gap-4">
<div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
<i className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Gotowy system reklamowy</h4>
<p className="text-zinc-400 text-base">Tworzę, konfiguruję i optymalizuję kampanie META pod kątem maksymalizacji zapytań.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
<i className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Jakościowa selekcja</h4>
<p className="text-zinc-400 text-base">Filtruję zapytania, aby trafiali do Ciebie klienci zainteresowani zakupem, a nie "tylko pytający".</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
<i className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Wyręczenie z testów</h4>
<p className="text-zinc-400 text-base">Biorę na siebie tworzenie kreacji, pisanie tekstów i testowanie tego, co działa na rynku.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
<i className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Raportowanie i optymalizacja</h4>
<p className="text-zinc-400 text-base">Pełna przejrzystość działań. Wiesz, na co idzie budżet i ile kosztuje pozyskanie klienta.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800 px-6">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Od walki o klienta do <span className="text-red-500">przewidywalnego wzrostu</span>
</h2>
<div className="space-y-4 text-zinc-400 text-base">
<p>
                        Przez 4 lata w marketingu widziałem, jak firmy usługowe marnują budżety na "magiczne ustawienia" i ogólne kampanie bez celu. Sam na początku zderzałem się ze ścianą, szukając idealnego sposobu na leady.
                    </p>
<p>
                        Dopiero gdy przestałem skupiać się na polubieniach, a zacząłem budować proste, sprzedażowe systemy META z precyzyjnym targetowaniem – wyniki wystrzeliły.
                    </p>
<p>
                        Teraz pokazuję praktykę. Dowożę realny wynik dla biznesów takich jak Twój.
                    </p>
</div>
</div>

<div className="bg-black border-2 border-zinc-800 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl shadow-red-900/10">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="mb-8">
<span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider mb-2 transform -skew-x-12">
                        Case Study z realnej kampanii
                    </span>
<h3 className="text-2xl font-semibold tracking-tight text-white mt-4">
                        To nie są "magiczne ustawienia". To liczby.
                    </h3>
</div>
<div className="space-y-6">
<div className="border-b border-zinc-800 pb-6">
<p className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-medium">Pozyskane kontakty</p>
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-white">159 <span className="text-2xl text-zinc-500">leadów</span></p>
</div>
<div className="border-b border-zinc-800 pb-6">
<p className="text-zinc-500 text-sm mb-1 uppercase tracking-wider font-medium">Wygenerowany obrót w 3 tygodnie</p>
<p className="text-4xl md:text-5xl font-semibold tracking-tight text-yellow-500">70 000 zł</p>
</div>
<div className="grid grid-cols-2 gap-4 pt-2 text-base">
<div>
<p className="text-zinc-500 text-sm">Koszt leada</p>
<p className="text-xl font-semibold text-white mt-1">13 zł</p>
</div>
<div>
<p className="text-zinc-500 text-sm">Budżet</p>
<p className="text-xl font-semibold text-white mt-1">2 007 zł</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pakiety">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">
                Wybierz pakiet dla swojej firmy
            </h2>
<p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
                Proste zasady, przewidywalne efekty. Wybierz skalę, której potrzebujesz w tym miesiącu.
            </p>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-2">START</h3>
<p className="text-zinc-400 text-base mb-6">Dla firm zaczynających z reklamą.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">2500 zł</span>
<span className="text-zinc-500">/msc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-zinc-300">Cel: <strong>15-25 leadów</strong></span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Konfiguracja kampanii</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Podstawowe kreacje</span>
</li>
</ul>
<a className="w-full py-3 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-center font-medium transition-colors" href="#">Wybieram START</a>
</div>

<div className="bg-zinc-900 border-2 border-red-600 rounded-3xl p-8 flex flex-col relative transform lg:-translate-y-4 shadow-xl shadow-red-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                        Najczęściej wybierany
                    </div>
<h3 className="text-xl font-semibold tracking-tight text-red-500 mb-2">PRO</h3>
<p className="text-zinc-400 text-base mb-6">Optymalny wzrost i stabilny strumień.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">3500 zł</span>
<span className="text-zinc-500">/msc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-zinc-300">Cel: <strong>30-45 leadów</strong></span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Zaawansowane testy A/B</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Retargeting</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Priorytetowe wsparcie</span>
</li>
</ul>
<a className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-center font-medium transition-colors" href="#">Wybieram PRO</a>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-2">PREMIUM</h3>
<p className="text-zinc-400 text-base mb-6">Maksymalne skalowanie dla liderów.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">4500 zł</span>
<span className="text-zinc-500">/msc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-zinc-300">Cel: <strong>50+ leadów</strong></span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Wszystko z PRO</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Złożone lejki sprzedażowe</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-red-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-zinc-300">Cotygodniowe konsultacje</span>
</li>
</ul>
<a className="w-full py-3 rounded-lg border border-zinc-700 hover:bg-zinc-800 text-center font-medium transition-colors" href="#">Wybieram PREMIUM</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 text-red-500 mb-6">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Gotowy na nowe zlecenia?
            </h2>
<p className="text-xl text-zinc-400 mb-10">
                Przestań zgadywać. Odbierz darmową strategię podczas krótkiej konsultacji. Dowiesz się, ile leadów możemy wygenerować w Twojej branży.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-zinc-950 rounded-lg font-semibold transition-colors text-lg" href="#">
                Umów darmową konsultację
                <i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
<p className="text-sm text-zinc-500 mt-6 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                Bez zobowiązań. Rozmawiamy tylko o faktach.
            </p>
</div>
</section>

<footer className="py-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
<p>© 2024 Kampanie Leadowe META. Wszystkie prawa zastrzeżone.</p>
</footer>


    </>
  );
}
