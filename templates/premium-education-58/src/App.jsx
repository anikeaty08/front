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
      

<nav className="fixed w-full top-0 z-50 bg-[#f4f3f0]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-zinc-900">
          Odkryj
          <span className="text-[#c87a41]">Potencjał</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#program">
            Program
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#opinie">
            Opinie
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#cennik">
            Cennik
          </a>
</div>
<button className="hidden md:block bg-zinc-900 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors">
          Dołącz teraz
        </button>
<button className="md:hidden text-zinc-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900 pointer-events-none">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowtransparency="true" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/w3vm8fau6cmlb3z?seo=false&amp;videoFoam=false&amp;autoPlay=true&amp;endVideoBehavior=loop&amp;muted=true&amp;playsinline=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;playButton=false&amp;volumeControl=false&amp;fullscreenButton=false&amp;settingsControl=false&amp;transparent=true" style={{maxWidth: 'none'}}></iframe>
</div>
<div className="absolute inset-0 bg-zinc-900/40 z-10 pointer-events-none"></div>
<div className="relative z-20 px-6 max-w-7xl mx-auto text-center mt-16">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-8 shadow-lg">
<span className="w-2 h-2 rounded-full bg-[#c87a41] animate-pulse"></span>
          Nowa edycja już dostępna
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-tight">
          Zbuduj firmę
          <br className="hidden md:block"/>
<span className="text-[#c87a41]">przyszłości</span>
</h1>
<p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Kompleksowy program, który przeprowadzi Cię od podstaw do
          zaawansowanych technik. Dołącz do społeczności ekspertów i zacznij
          działać.
        </p>
<a className="inline-flex bg-[#c87a41] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#b06a38] transition-colors shadow-xl shadow-[#c87a41]/20" href="#cennik">
          Rozpocznij teraz
        </a>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
            Metamorfoza Twoich wyników
          </h2>
<p className="text-lg text-zinc-500">
            Zobacz różnicę, jaką robi odpowiednie podejście.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="relative h-[400px] rounded-3xl overflow-hidden group">
<img alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
<span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium w-fit mb-4 border border-white/10">
                Przed
              </span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">
                Chaos i brak strategii
              </h3>
<p className="text-base text-zinc-300">
                Tracisz czas na działania, które nie przynoszą mierzalnych
                efektów. Brak struktury hamuje Twój rozwój.
              </p>
</div>
</div>

<div className="relative h-[400px] rounded-3xl overflow-hidden group">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#c87a41]/90 via-[#c87a41]/40 to-transparent"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
<span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium w-fit mb-4 border border-white/20">
                Po wdrożeniu
              </span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">
                Klarowny plan i wzrost
              </h3>
<p className="text-base text-white/90">
                Wiesz dokładnie, co robić każdego dnia. Procesy są
                zautomatyzowane, a wyniki rosną z miesiąca na miesiąc.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white rounded-[3rem] mx-4 md:mx-6 my-12">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
          Czego dokładnie się dowiesz?
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="border-t border-zinc-700/50 pt-8">
<div className="flex items-center gap-4 mb-4 text-[#c87a41]">
<i className="w-8 h-8" data-lucide="target" strokeWidth="1.5"></i>
<span className="text-4xl font-semibold tracking-tighter">01</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
              Strategia fundamentów
            </h3>
<p className="text-base text-zinc-400">
              Jak zbudować solidne podstawy, które wytrzymają skalowanie biznesu
              w trudnych warunkach.
            </p>
</div>
<div className="border-t border-zinc-700/50 pt-8">
<div className="flex items-center gap-4 mb-4 text-[#c87a41]">
<i className="w-8 h-8" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-4xl font-semibold tracking-tighter">02</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
              Automatyzacja procesów
            </h3>
<p className="text-base text-zinc-400">
              Wdróż systemy, które pracują za Ciebie 24/7, uwalniając Twój cenny
              czas.
            </p>
</div>
<div className="border-t border-zinc-700/50 pt-8">
<div className="flex items-center gap-4 mb-4 text-[#c87a41]">
<i className="w-8 h-8" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-4xl font-semibold tracking-tighter">03</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">
              Skalowanie wyników
            </h3>
<p className="text-base text-zinc-400">
              Praktyczne metody na bezpieczne i przewidywalne zwiększanie
              obrotów krok po kroku.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="program">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
<span className="text-sm font-medium text-[#c87a41] uppercase tracking-widest mb-2 block">
            Program
          </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Co dokładnie
            <br/>
            znajdziesz w środku
          </h2>
<p className="text-lg text-zinc-500 mb-8">
            Moduł po module, przeprowadzimy Cię przez cały proces. Bez lania
            wody, sama praktyczna wiedza poparta przykładami z życia.
          </p>
<button className="bg-[#c87a41] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#b06a38] transition-colors w-full sm:w-auto">
            Pobierz pełną agendę
          </button>
</div>
<div className="lg:col-span-7 space-y-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-[#f4f3f0] flex items-center justify-center shrink-0 text-zinc-900 font-semibold">
              1
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">
                Wprowadzenie i Mindset
              </h3>
<p className="text-base text-zinc-500 mb-4">
                Zrozumienie kluczowych pojęć i przygotowanie mentalne do
                intensywnego rozwoju. Wyznaczenie mierzalnych celów.
              </p>
<ul className="space-y-2 text-base text-zinc-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#c87a41]" data-lucide="check"></i>
                  3 godziny materiału wideo
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#c87a41]" data-lucide="check"></i>
                  Arkusze ćwiczeń PDF
                </li>
</ul>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-[#f4f3f0] flex items-center justify-center shrink-0 text-zinc-900 font-semibold">
              2
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">
                Budowa Oferty Premium
              </h3>
<p className="text-base text-zinc-500 mb-4">
                Jak stworzyć produkt lub usługę, za którą klienci będą chcieli
                zapłacić więcej bez negocjacji cenowych.
              </p>
<ul className="space-y-2 text-base text-zinc-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#c87a41]" data-lucide="check"></i>
                  Analiza rynku i konkurencji
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-[#c87a41]" data-lucide="check"></i>
                  Szablony wyceny
                </li>
</ul>
</div>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex gap-6 items-start opacity-70">
<div className="w-12 h-12 rounded-full bg-[#f4f3f0] flex items-center justify-center shrink-0 text-zinc-900 font-semibold">
              3
            </div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">
                Sprzedaż i Marketing
              </h3>
<p className="text-base text-zinc-500">
                Kluczowe kanały dotarcia i skrypty rozmów sprzedażowych o
                wysokiej konwersji.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c87a41]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
<i className="w-10 h-10 text-[#c87a41]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          100% Gwarancji Satysfakcji
        </h2>
<p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10">
          Jesteśmy tak pewni wartości tego materiału, że dajemy Ci 30 dni na
          testy. Jeśli uznasz, że to nie dla Ciebie, zwrócimy Ci każdą złotówkę.
          Bez zadawania pytań.
        </p>
</div>
</section>

<section className="py-24 px-6 bg-[#f4f3f0]" id="opinie">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
              Co mówią uczestnicy
            </h2>
<p className="text-lg text-zinc-500">
              Dołącz do ponad 1200 zadowolonych osób.
            </p>
</div>

<div className="hidden md:flex gap-3">
<button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5 text-zinc-600" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-white transition-colors">
<i className="w-5 h-5 text-zinc-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col justify-between h-[320px]">
<div>
<div className="flex text-[#c87a41] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                "Ten program całkowicie zmienił moje podejście. Po wdrożeniu
                pierwszego modułu moje wyniki skoczyły o 40%. Najlepsza
                inwestycja."
              </p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-medium text-zinc-900">Anna Kowalska</p>
<p className="text-sm text-zinc-500">Przedsiębiorca</p>
</div>
</div>
</div>

<div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-sm flex flex-col justify-between h-[320px]">
<div>
<div className="flex text-[#c87a41] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                "Struktura, konkret i brak lania wody. Dokładnie tego szukałem.
                Moduł o automatyzacji to absolutny game-changer."
              </p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-medium text-white">Michał Nowak</p>
<p className="text-sm text-zinc-400">Dyrektor Sprzedaży</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col justify-between h-[320px] hidden md:flex">
<div>
<div className="flex text-[#c87a41] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                "Materiały są przygotowane na najwyższym poziomie. Czuć, że to
                produkt premium z ogromną wartością merytoryczną."
              </p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-base font-medium text-zinc-900">
                  Karolina Wiśniewska
                </p>
<p className="text-sm text-zinc-500">Freelancer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="aspect-[4/3] bg-zinc-100 rounded-3xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center relative shadow-inner">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-3xl"></div>
<i className="w-16 h-16 text-[#c87a41] mb-6" data-lucide="award" strokeWidth="1.5"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2 font-serif">
              Certyfikat Ukończenia
            </h3>
<p className="text-sm text-zinc-500 max-w-[200px]">
              Potwierdzenie zdobytych umiejętności i wiedzy.
            </p>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Zdobądź oficjalny certyfikat
          </h2>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Po ukończeniu wszystkich modułów i zdaniu egzaminu końcowego,
            otrzymasz imienny certyfikat w języku polskim i angielskim. Stanowi
            on mocny atut w Twoim CV lub portfolio.
          </p>
<ul className="space-y-4 text-base text-zinc-700 font-medium">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#c87a41]" data-lucide="check-circle-2"></i>
              Weryfikowalny online
            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#c87a41]" data-lucide="check-circle-2"></i>
              Format PDF gotowy do druku
            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#c87a41]" data-lucide="check-circle-2"></i>
              Łatwe udostępnienie na LinkedIn
            </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f4f3f0]" id="cennik">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
            Wybierz pakiet dla siebie
          </h2>
<p className="text-lg text-zinc-500">
            Przejrzyste ceny, zero ukrytych kosztów.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-3xl p-10 border border-zinc-200 flex flex-col">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">
              Pakiet Podstawowy
            </h3>
<p className="text-base text-zinc-500 mb-8">
              Idealny na start dla osób uczących się we własnym tempie.
            </p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tighter text-zinc-900">
                997
              </span>
<span className="text-lg text-zinc-500">PLN</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-zinc-700">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                Dostęp do wszystkich materiałów VOD
              </li>
<li className="flex items-start gap-3 text-base text-zinc-700">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                Arkusze ćwiczeń PDF
              </li>
<li className="flex items-start gap-3 text-base text-zinc-700">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                Certyfikat ukończenia
              </li>
</ul>
<button className="w-full py-4 rounded-full border border-zinc-300 text-zinc-900 text-base font-medium hover:bg-zinc-50 transition-colors">
              Wybieram Podstawowy
            </button>
</div>

<div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 flex flex-col relative overflow-hidden">
<div className="absolute top-6 right-6 bg-[#c87a41] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Najpopularniejszy
            </div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
              Pakiet Premium
            </h3>
<p className="text-base text-zinc-400 mb-8">
              Kompleksowe wsparcie i bezpośredni kontakt z mentorem.
            </p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tighter text-white">
                1997
              </span>
<span className="text-lg text-zinc-400">PLN</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
<span className="text-white font-medium">
                  Wszystko z pakietu Podstawowego
                </span>
</li>
<li className="flex items-start gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                3 grupowe sesje Q&amp;A na żywo
              </li>
<li className="flex items-start gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                Zamknięta społeczność na Discord
              </li>
<li className="flex items-start gap-3 text-base text-zinc-300">
<i className="w-5 h-5 text-[#c87a41] shrink-0 mt-0.5" data-lucide="check"></i>
                Indywidualna analiza jednego projektu
              </li>
</ul>
<button className="w-full py-4 rounded-full bg-[#c87a41] text-white text-base font-medium hover:bg-[#b06a38] transition-colors shadow-lg shadow-[#c87a41]/20">
              Wybieram Premium
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden">
<img alt="Autor" className="w-full h-full object-cover" src="https://i.postimg.cc/sgLF1CTc/magnific-stworz-mi-identyczne-zdje-rlmq-NB2xtc.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-2xl font-medium tracking-tight">Tomasz Guzik</p>
<p className="text-base text-zinc-300">Ekspert &amp; Mentor</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-sm font-medium text-[#c87a41] uppercase tracking-widest mb-2 block">
            O autorze
          </span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
            Tomasz Guzik, szkolenie AI
          </h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
<p>
              Od ponad 10 lat pomagam firmom i osobom prywatnym osiągać
              skalowalne wyniki. Przeszedłem drogę od freelancera do zbudowania
              prężnie działającej agencji.
            </p>
<p>
              W tym programie zawarłem esencję tego, co u mnie zadziałało. Bez
              bullshitu, tylko strategie przetestowane w boju na dziesiątkach
              projektów.
            </p>
</div>
<div className="flex gap-8 mt-10">
<div>
<p className="text-3xl font-semibold tracking-tighter text-zinc-900">
                10+
              </p>
<p className="text-sm text-zinc-500 font-medium">Lat doświadczenia</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tighter text-zinc-900">
                500+
              </p>
<p className="text-sm text-zinc-500 font-medium">Projektów</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#f4f3f0]">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">
          Częste pytania
        </h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl p-6 border border-zinc-200">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium text-zinc-900">
                Jak długo mam dostęp do kursu?
              </h3>
<i className="w-5 h-5 text-zinc-400 shrink-0" data-lucide="minus"></i>
</div>
<p className="mt-4 text-base text-zinc-600 leading-relaxed">
              Otrzymujesz dożywotni dostęp do wszystkich materiałów wideo,
              aktualizacji oraz arkuszy ćwiczeń z wybranego pakietu. Możesz
              wracać do wiedzy kiedy tylko potrzebujesz.
            </p>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium text-zinc-900">
                Dla kogo dokładnie jest ten program?
              </h3>
<i className="w-5 h-5 text-zinc-400 shrink-0" data-lucide="plus"></i>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200">
<div className="flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-medium text-zinc-900">
                Czy mogę otrzymać fakturę VAT?
              </h3>
<i className="w-5 h-5 text-zinc-400 shrink-0" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xl text-zinc-600 mb-8">
            Nie znalazłeś odpowiedzi? Masz wątpliwości?
          </p>
<button className="bg-zinc-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors shadow-xl shadow-zinc-900/20">
            Napisz do nas
          </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-12 pb-28 md:pb-24 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-semibold tracking-tight text-zinc-900">
          Odkryj
          <span className="text-[#c87a41]">Potencjał</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900" href="#">Regulamin</a>
<a className="hover:text-zinc-900" href="#">Polityka Prywatności</a>
</div>
<p className="text-sm text-zinc-400">© 2024 Wszelkie prawa zastrzeżone.</p>
</div>
</footer>

<div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 bg-zinc-900 rounded-2xl shadow-2xl p-2 flex items-center justify-between w-[calc(100%-2rem)] md:w-auto border border-zinc-800" id="sticky-cta-bar">
<div className="flex items-center gap-3 md:gap-6 pl-4 md:pl-6 pr-2 text-white font-medium text-sm md:text-base whitespace-nowrap">
<span className="hidden sm:inline">Umów się na rozmowę</span>
<span className="sm:hidden">Umów rozmowę</span>
<svg className="text-[#c87a41]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<button className="bg-[#c87a41] text-white px-6 md:px-8 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-[#b06a38] transition-colors whitespace-nowrap ml-2 shadow-lg shadow-[#c87a41]/20" onclick="document.getElementById('booking-popup').classList.remove('opacity-0', 'pointer-events-none'); document.getElementById('booking-popup-inner').classList.remove('scale-95')">
        Zarezerwuj termin
      </button>
</div>
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="booking-popup" onclick="if(event.target === this) { this.classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-popup-inner').classList.add('scale-95'); }">
<div className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl scale-95 transition-transform duration-300 transform" id="booking-popup-inner">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-900 transition-colors" onclick="document.getElementById('booking-popup').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-popup-inner').classList.add('scale-95')">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
          Umów się na rozmowę
        </h3>
<p className="text-base text-zinc-500 mb-6">
          Zostaw swoje dane, a skontaktujemy się z Tobą w celu umówienia
          terminu.
        </p>
<form className="space-y-4" onsubmit="event.preventDefault(); fetch('https://hooks.zapier.com/hooks/catch/19140629/43iimam/', { method: 'POST', body: JSON.stringify({ name: document.getElementById('booking-name').value, email: document.getElementById('booking-email').value, phone: document.getElementById('booking-phone').value, consent: document.getElementById('booking-consent').checked }) }).then(() =&gt; { document.getElementById('booking-popup').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-popup-inner').classList.add('scale-95'); alert('Dziękujemy! Skontaktujemy się wkrótce.'); });">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="booking-name">
              Imię
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c87a41]/20 focus:border-[#c87a41] transition-all" id="booking-name" placeholder="Twoje imię" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="booking-email">
              E-mail
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c87a41]/20 focus:border-[#c87a41] transition-all" id="booking-email" placeholder="twojadres@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1" htmlFor="booking-phone">
              Numer telefonu
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c87a41]/20 focus:border-[#c87a41] transition-all" id="booking-phone" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
<div className="flex items-start gap-3 mt-4">
<input className="mt-1 w-4 h-4 rounded border-zinc-300 text-[#c87a41] focus:ring-[#c87a41] bg-white accent-[#c87a41]" id="booking-consent" required="" type="checkbox"/>
<label className="text-sm text-zinc-500 leading-relaxed" htmlFor="booking-consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych.
            </label>
</div>
<button className="w-full mt-6 bg-zinc-900 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20" type="submit">
            Zarezerwuj termin
          </button>
</form>
</div>
</div>

    </>
  );
}
