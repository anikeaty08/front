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
      

<nav className="w-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">
          EduPro.
        </span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
<a className="hover:text-purple-600 transition-colors" href="#">Program</a>
<a className="hover:text-purple-600 transition-colors" href="#">Dla kogo</a>
<a className="hover:text-purple-600 transition-colors" href="#">Cennik</a>
<a className="hover:text-purple-600 transition-colors" href="contact.html">
          Kontakt
        </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium text-slate-600 hover:text-purple-600" href="#">
          Zaloguj
        </a>
<a className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-medium hover:opacity-90 transition-opacity shadow-sm" href="#">
          Dołącz teraz
        </a>
</div>
</nav>


<section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-screen">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-900">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2" frameborder="0" src="https://www.youtube.com/embed/xnsxllY5VPw?autoplay=1&amp;loop=1&amp;playlist=xnsxllY5VPw&amp;mute=1&amp;controls=0&amp;showinfo=0&amp;rel=0"></iframe>
</div>
<div className="absolute inset-0 bg-slate-900/30 z-10"></div>
<div className="relative z-20 max-w-5xl mx-auto px-6">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-tight drop-shadow-xl">
          Zbuduj kompetencje przyszłości
        </h1>
<p className="mt-6 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Sprawdzony system krok po kroku, który pozwoli Ci opanować nowe
          kompetencje i przyspieszyć Twoją karierę bez zbędnego stresu.
        </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto shadow-xl" href="#">
            Zacznij naukę
          </a>
<a className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-medium hover:bg-white/20 transition-colors w-full sm:w-auto flex items-center justify-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
            Pobierz syllabus
          </a>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Transformacja
          </h2>
<p className="mt-4 text-lg text-slate-600">
            Zobacz różnicę, jaką sprawi ten program.
          </p>
</div>
<div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center max-w-5xl mx-auto">

<div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<i className="w-24 h-24" data-lucide="frown" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-6 flex items-center gap-2">
<span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                Przed
              </span>
</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span>Brak jasnej ścieżki rozwoju i chaos informacyjny.</span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span>
                  Stracony czas na poszukiwanie niezweryfikowanych materiałów.
                </span>
</li>
<li className="flex items-start gap-3 text-lg text-slate-600">
<i className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" data-lucide="x" strokeWidth="1.5"></i>
<span>
                  Uczucie stagnacji i brak pewności siebie w działaniu.
                </span>
</li>
</ul>
</div>

<div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-slate-50 z-10 -mx-4 text-purple-500">
<i className="w-8 h-8" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="md:hidden flex justify-center text-purple-500 py-4">
<i className="w-8 h-8" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>

<div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-8 shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 text-purple-900">
<i className="w-24 h-24" data-lucide="smile" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-purple-900 mb-6 flex items-center gap-2">
<span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">
                Po
              </span>
</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-purple-800">
<i className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  Klarowny plan działania krok po kroku.
                </span>
</li>
<li className="flex items-start gap-3 text-lg text-purple-800">
<i className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  Praktyczne umiejętności gotowe do wdrożenia.
                </span>
</li>
<li className="flex items-start gap-3 text-lg text-purple-800">
<i className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="font-medium">
                  Pewność siebie i widoczne rezultaty pracy.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Czego się dowiesz
          </h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-800 mb-8">
              Co dokładnie w środku:
            </h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-pink-600" data-lucide="monitor-play" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-slate-900 mb-1">
                    Over 50 lekcji wideo
                  </h4>
<p className="text-lg text-slate-600 leading-relaxed">
                    Praktyczne nagrania ekranu i wykłady, które możesz oglądać
                    we własnym tempie z dowolnego miejsca.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-purple-600" data-lucide="file-check-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-slate-900 mb-1">
                    Materiały dodatkowe
                  </h4>
<p className="text-lg text-slate-600 leading-relaxed">
                    Szablony, checklisty i notatki w formacie PDF, które ułatwią
                    Ci wdrażanie wiedzy w życie.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-orange-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-slate-900 mb-1">
                    Dostęp do społeczności
                  </h4>
<p className="text-lg text-slate-600 leading-relaxed">
                    Zamknięta grupa wsparcia, gdzie możesz zadawać pytania i
                    wymieniać się doświadczeniami.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>
<div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 relative">

<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-blue-100 mb-4 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
</div>
<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-green-100 mb-4 flex items-center justify-center">
<i className="w-5 h-5 text-green-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
</div>
<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-purple-100 mb-4 flex items-center justify-center">
<i className="w-5 h-5 text-purple-600" data-lucide="code" strokeWidth="1.5"></i>
</div>
<div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
</div>
<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-pink-100 mb-4 flex items-center justify-center">
<i className="w-5 h-5 text-pink-600" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 w-64 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white ml-0.5" data-lucide="play" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                    Moduł 1: Wprowadzenie
                  </p>
<p className="text-xs text-slate-500">12 min • Wideo</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-pink-300 opacity-20 blur-3xl"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/30">
<i className="w-10 h-10 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
              GWARANCJA
            </h2>
<p className="text-xl md:text-2xl text-purple-50 max-w-2xl font-medium">
              100% Satysfakcji albo zwrot pieniędzy
            </p>
<p className="mt-6 text-lg text-purple-100/90 max-w-2xl leading-relaxed">
              Jesteśmy tak pewni jakości naszych materiałów, że dajemy Ci 30 dni
              na przetestowanie kursu. Jeśli uznasz, że to nie dla Ciebie,
              zwrócimy Ci 100% środków bez zadawania pytań.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            OPINIE
          </h2>

<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition-colors">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-6 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
              "Ten kurs całkowicie zmienił moje podejście do nauki. Materiały są
              podane w tak przystępny sposób, że przyswajanie wiedzy to czysta
              przyjemność."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">
                AK
              </div>
<div>
<p className="font-semibold text-slate-900 text-lg">
                  Anna Kowalska
                </p>
<p className="text-base text-slate-500">Studentka</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-6 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
              "Szukałem konkretów bez lania wody i dokładnie to dostałem.
              Struktura krok po kroku jest fenomenalna. Gorąco polecam każdemu."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">
                MN
              </div>
<div>
<p className="font-semibold text-slate-900 text-lg">Michał Nowak</p>
<p className="text-base text-slate-500">Przedsiębiorca</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow hidden md:block">
<div className="flex gap-1 mb-6 text-yellow-400">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
              "Zwróciło się szybciej niż myślałam. Społeczność wokół kursu jest
              niesamowita, a wsparcie ze strony twórców bezcenne."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium">
                KW
              </div>
<div>
<p className="font-semibold text-slate-900 text-lg">
                  Karolina Wiśniewska
                </p>
<p className="text-base text-slate-500">Freelancerka</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-base">
<p>© 2024 EduPro. Wszelkie prawa zastrzeżone.</p>
</div>
</footer>


    </>
  );
}
