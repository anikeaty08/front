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
      

<div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
<div className="h-full bg-emerald-500 w-1/3 rounded-r-full"></div>
</div>

<header className="fixed top-1 left-0 w-full z-40 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="bg-emerald-500 p-1.5 rounded-lg">
<svg fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<span className="text-2xl font-semibold tracking-tight text-emerald-950">
            mindthera
          </span>
</div>
<nav className="hidden md:flex gap-8 text-lg font-medium text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#">
            Program
          </a>
<a className="hover:text-emerald-600 transition-colors" href="#czego-sie-dowiesz">
            Moduły
          </a>
<a className="hover:text-emerald-600 transition-colors" href="#o-mnie">
            O mnie
          </a>
<a className="hover:text-emerald-600 transition-colors" href="#opinie">
            Opinie
          </a>
</nav>
<button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-emerald-500/30">
          Kup Teraz
        </button>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">

<div className="absolute inset-0 z-0">
<img alt="Forest background" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/90"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center w-full">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Ekskluzywny Program Wideo
        </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-tight">
          Zrozum swoje emocje i rozpocznij
          <span className="text-emerald-400">wewnętrzną podróż</span>
</h1>
<p className="text-xl text-emerald-50/80 mb-12 max-w-2xl font-normal">
          Odkryj profesjonalne narzędzia psychologiczne w naszym nowym,
          kompleksowym materiale wideo.
        </p>

<div className="w-full max-w-4xl relative group cursor-pointer">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
<svg className="ml-2" fill="white" height="36" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
</div>

<p className="mt-6 text-slate-500 font-medium">
          Czas trwania: 45 minut • Dostęp dożywotni
        </p>
</div>
</section>

<section className="py-24 bg-white relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Transformacja, której doświadczysz
          </h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Zobacz, jak zmieni się Twoje podejście po wdrożeniu naszych metod.
          </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">

<div className="w-full md:w-2/5 bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<div className="inline-block bg-slate-200 text-slate-600 px-4 py-1.5 rounded-full font-medium mb-6">
              Przed
            </div>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4 text-slate-600">
<svg className="text-slate-400 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
<span>
                  Ciągłe uczucie przytłoczenia codziennymi obowiązkami.
                </span>
</li>
<li className="flex items-start gap-4 text-slate-600">
<svg className="text-slate-400 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
<span>
                  Trudności w zarządzaniu stresem w kryzysowych momentach.
                </span>
</li>
<li className="flex items-start gap-4 text-slate-600">
<svg className="text-slate-400 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg>
<span>
                  Brak jasnego kierunku i poczucia wewnętrznego spokoju.
                </span>
</li>
</ul>
</div>

<div className="hidden md:flex flex-col items-center justify-center gap-2 text-emerald-300">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<div className="md:hidden text-emerald-300 rotate-90">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>

<div className="w-full md:w-2/5 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl shadow-emerald-900/5">
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="text-emerald-500" fill="none" height="120" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="inline-block bg-emerald-500 text-white px-4 py-1.5 rounded-full font-medium mb-6 shadow-sm shadow-emerald-500/20">
              Po
            </div>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4 text-emerald-950">
<svg className="text-emerald-500 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>Głębokie zrozumienie swoich mechanizmów obronnych.</span>
</li>
<li className="flex items-start gap-4 text-emerald-950">
<svg className="text-emerald-500 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>
                  Praktyczne techniki radzenia sobie z emocjami na co dzień.
                </span>
</li>
<li className="flex items-start gap-4 text-emerald-950">
<svg className="text-emerald-500 shrink-0 mt-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span>
                  Odzyskanie kontroli i długotrwałe poczucie harmonii.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="czego-sie-dowiesz">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16 uppercase tracking-wider">
          Czego się dowiesz
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">
              Źródła stresu
            </h3>
<p className="text-slate-600 text-lg">
              Zidentyfikujesz ukryte wyzwalacze emocjonalne, które blokują Twój
              potencjał w życiu zawodowym i prywatnym.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h4l3-9 5 18 3-9h5"></path>
</svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">
              Zarządzanie energią
            </h3>
<p className="text-slate-600 text-lg">
              Poznasz techniki optymalizacji swojej codziennej energii, aby
              unikać wypalenia i chronicznego zmęczenia.
            </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">
              Budowanie odporności
            </h3>
<p className="text-slate-600 text-lg">
              Nauczysz się, jak szybko wracać do równowagi po trudnych
              sytuacjach i budować psychiczną elastyczność.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 uppercase">
              Co dokładnie w środku
            </h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-semibold">
                  1
                </div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">
                    Moduł Wstępny: Diagnoza
                  </h4>
<p className="text-slate-600">
                    Rozpoczniesz od głębokiego testu oceniającego Twój obecny
                    stan i główne blokady.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-semibold">
                  2
                </div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">
                    Część Główna: Metodyka
                  </h4>
<p className="text-slate-600">
                    4 godziny materiałów wideo z konkretnymi, możliwymi do
                    wdrożenia od zaraz narzędziami.
                  </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-semibold">
                  3
                </div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">
                    Materiały Dodatkowe
                  </h4>
<p className="text-slate-600">
                    Zeszyty ćwiczeń w formacie PDF, check-listy i nagrania audio
                    do medytacji.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-emerald-200 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-50"></div>
<img alt="Materiały kursu" className="relative rounded-3xl shadow-xl border border-slate-100 w-full object-cover aspect-[4/3] z-10" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
<div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<div>
<p className="text-slate-900 font-medium tracking-tight text-xl">
                  Ponad 20+
                </p>
<p className="text-slate-500 text-sm font-medium">materiałów PDF</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="o-mnie">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-emerald-200 rounded-[2.5rem] transform -translate-x-4 translate-y-4 opacity-50"></div>
<img alt="Sławomir" className="relative rounded-3xl shadow-xl border border-slate-100 w-full object-cover aspect-[4/5] z-10" src="https://i.postimg.cc/ZRrXfB4Q/Slawomir.jpg"/>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 uppercase">
              O mnie
            </h2>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
              Cześć, tu Sławomir
            </h3>
<div className="space-y-6 text-slate-600 text-lg">
<p>
                Trener mentalny, przedsiębiorca. Moderator i organizator kręgów
                męskich, współorganizator kręgów kobiet i mężczyzn.
                <br/>
                Z zawodu elektronik i specjalista w branży OZE.
                <br/>
                Z pasji: absolwent Akademii Trenerów Mentalnych Mówców, Szkoły
                Ustawień Systemowych, Akademii Neurohackingu, Kursów Ustawień w
                Biznesie, Metody Silvy, Szkoły Oddechu, kursów Przedsiębiorczy
                Umysł i Akademia Liderów Przyszłości oraz wielu innych.
                <br/>
                Jako trener mentalny uczestniczę regularnie w superwizjach
                podnoszących jakość mojej pracy.
                <br/>
                Prywatnie ojciec dwójki dorosłych dzieci.
              </p>
<p>
                Od lat pomagam ludziom odzyskiwać równowagę emocjonalną i
                budować odporność psychiczną w przebodźcowanym świecie. Moja
                droga rozpoczęła się od własnych poszukiwań spokoju i
                skutecznych metod radzenia sobie z codzienną presją.
              </p>
<p>
                Zebrałem sprawdzone i poparte wiedzą psychologiczną narzędzia, z
                których na co dzień korzystam w swojej pracy. Teraz udostępniam
                je w formie kompleksowego programu wideo, aby każdy mógł
                doświadczyć autentycznej zmiany w swoim życiu.
              </p>
<p>
                Wierzę, że głęboka transformacja jest na wyciągnięcie ręki. W
                programie Mindthera poprowadzę Cię krok po kroku, pokazując
                konkretne sposoby na zrozumienie swoich emocji i długotrwałe
                odzyskanie życiowej harmonii.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-20 h-20 mx-auto bg-emerald-800 rounded-2xl flex items-center justify-center mb-8 rotate-3">
<svg className="text-emerald-300 -rotate-3" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 uppercase">
          Gwarancja Satysfakcji
        </h2>
<p className="text-xl md:text-2xl font-light text-emerald-100 mb-8 leading-relaxed">
          Jesteśmy w 100% pewni skuteczności naszych materiałów. Jeśli w ciągu
          30 dni uznasz, że to nie dla Ciebie, zwrócimy Ci całą kwotę. Bez
          zadawania pytań.
        </p>
<button className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-medium transition-colors shadow-lg text-lg">
          Dołącz bez ryzyka
        </button>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="opinie">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16 uppercase">
          Opinie
        </h2>
<div className="flex items-center justify-center gap-4 lg:gap-8">

<button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-emerald-400 mb-4">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 italic">
                "Ten materiał całkowicie zmienił moje podejście do stresu.
                Proste techniki, które od razu mogłam wdrożyć."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<h5 className="font-medium text-slate-900">Anna K.</h5>
<span className="text-sm text-slate-500">Przedsiębiorca</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-md border border-emerald-100 relative transform md:-translate-y-4">
<div className="flex gap-1 text-emerald-400 mb-4">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 italic">
                "Nigdy nie myślałem, że wideo w internecie może dać mi więcej
                niż miesiące poszukiwań. Profesjonalne ujęcie i wspaniała
                jakość."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<h5 className="font-medium text-slate-900">Michał W.</h5>
<span className="text-sm text-slate-500">Menedżer IT</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hidden md:block">
<div className="flex gap-1 text-emerald-400 mb-4">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 italic">
                "Polecam każdemu, kto czuje, że utknął. Mindthera daje
                narzędzia, których brakuje w tradycyjnej edukacji."
              </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<div>
<h5 className="font-medium text-slate-900">Kasia M.</h5>
<span className="text-sm text-slate-500">Studentka</span>
</div>
</div>
</div>
</div>

<button className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm border border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-colors z-10">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>

<div className="flex justify-center gap-2 mt-8 md:hidden">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center p-4 bg-emerald-50 rounded-full text-emerald-600 mb-6">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
<path d="M12 8v4l3 3"></path>
</svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 uppercase">
          Certyfikat Ukończenia
        </h2>
<p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
          Po ukończeniu wszystkich modułów i ćwiczeń otrzymasz imienny
          certyfikat poświadczający zdobyte umiejętności w zakresie zarządzania
          emocjami i stresem.
        </p>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">mindthera</span>
</div>
<div className="text-sm">
          © 2024 Mindthera. Wszelkie prawa zastrzeżone.
        </div>
</div>
</footer>
<div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none flex flex-col justify-end p-4 md:p-0">

<a className="md:hidden flex justify-center text-center pointer-events-auto w-full max-w-sm mx-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-emerald-500/30 transition-colors" href="https://app.zencal.io/o/slawomir-smagacz/slawomirsmagacz/konsultacja-wstepna" target="_blank">
        Zarezerwuj termin
      </a>

<div className="hidden md:flex pointer-events-auto bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] w-full px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center w-full">
<span className="text-xl font-medium tracking-tight text-slate-900">
            Umów się na rozmowę
          </span>
<a className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-emerald-500/30 inline-block" href="https://app.zencal.io/o/slawomir-smagacz/slawomirsmagacz/konsultacja-wstepna" target="_blank">
            Zarezerwuj termin
          </a>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="document.getElementById('booking-modal').classList.add('hidden'); document.getElementById('booking-modal').classList.remove('flex');"></div>
<div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl p-6 md:p-8 flex flex-col z-10">
<button className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-slate-600 transition-colors p-2" onclick="document.getElementById('booking-modal').classList.add('hidden'); document.getElementById('booking-modal').classList.remove('flex');" type="button">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
          Zarezerwuj termin
        </h3>
<p className="text-slate-500 mb-6">
          Wypełnij poniższe dane, a skontaktujemy się z Tobą w celu ustalenia
          szczegółów rozmowy.
        </p>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('booking-modal').classList.add('hidden'); document.getElementById('booking-modal').classList.remove('flex'); alert('Dziękujemy! Odezwiemy się wkrótce.');">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
              Imię
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" placeholder="Twoje imię" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
              E-mail
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" placeholder="twoj@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
              Numer telefonu
            </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow bg-slate-50 focus:bg-white" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer accent-emerald-500" id="marketing-consent" required="" type="checkbox"/>
<label className="text-sm text-slate-500 leading-tight cursor-pointer select-none" htmlFor="marketing-consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych oraz kontakt telefoniczny.
            </label>
</div>
<div className="pt-4">
<button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/30 text-lg" type="submit">
              Zarezerwuj termin
            </button>
</div>
</form>
</div>
</div>

    </>
  );
}
