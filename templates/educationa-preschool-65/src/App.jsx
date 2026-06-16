import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<section className="pt-24 pb-20 px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 bg-[#ef9f53]/20"></div>
<div className="absolute top-12 -right-24 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-50 bg-[#6ca4a3]/20"></div>
</div>
<div className="text-center max-w-3xl mx-auto mb-12">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
          Najlepsze miejsce dla Twojego dziecka
        </h1>
<p className="text-xl text-slate-600">
          Odkryj przestrzeń, w której nauka spotyka się z zabawą, a rozwój
          odbywa się w bezpiecznym i przyjaznym środowisku.
        </p>
</div>

<div className="w-full max-w-5xl aspect-video bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center relative group cursor-pointer mb-16 overflow-hidden">
<div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-slate-400">
<i className="w-16 h-16 mb-4 opacity-20" data-lucide="image" strokeWidth="1.5"></i>
<span className="text-base font-medium">Miejsce na wideo</span>
</div>
<button className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 text-[#ef9f53]">
<i className="w-8 h-8 ml-1 block" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#ef9f53]/10 text-[#ef9f53]">
<i className="w-7 h-7" data-lucide="puzzle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
            Nauka przez zabawę
          </h3>
<p className="text-base text-slate-600">
            Nowoczesne metody wspierające kreatywność.
          </p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#6ca4a3]/10 text-[#6ca4a3]">
<i className="w-7 h-7" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
            Pełne bezpieczeństwo
          </h3>
<p className="text-base text-slate-600">
            Certyfikowana kadra i bezpieczna przestrzeń.
          </p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#244053]/10 text-[#244053]">
<i className="w-7 h-7" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
            Rozwój społeczny
          </h3>
<p className="text-base text-slate-600">
            Zajęcia w grupach budujące relacje rówieśnicze.
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-10 text-center">
          Informacje o naszych zajęciach
        </h2>
<div className="space-y-6 text-slate-600">
<p>
            Stworzyliśmy to miejsce z myślą o harmonijnym rozwoju najmłodszych.
            Nasz program edukacyjny opiera się na sprawdzonych metodach, które
            zachęcają dzieci do aktywnego poznawania świata. Skupiamy się na
            indywidualnym podejściu do każdego podopiecznego.
          </p>
<p>
            Zajęcia prowadzone są przez wykwalifikowanych pedagogów z
            wieloletnim doświadczeniem, którzy z pasją przekazują wiedzę i dbają
            o dobrą atmosferę. Oferujemy szeroki wachlarz aktywności
            dopasowanych do różnych grup wiekowych.
          </p>
</div>
</div>
</section>


<section className="py-24 px-6 lg:px-8 bg-[#ef9f53]">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center text-white">
          Wybierz pakiet dla siebie
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex flex-col p-8 bg-white rounded-3xl border border-slate-200">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
              Pół dnia
            </h3>
<p className="text-sm text-slate-500 mb-6">Dla szukających balansu.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                450
              </span>
<span className="text-base text-slate-500">zł / mc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base text-slate-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Opieka do 5 godzin</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Podstawowe materiały</span>
</li>
<li className="flex items-start gap-3 text-slate-400">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="minus" strokeWidth="1.5"></i>
<span>Brak wyżywienia</span>
</li>
</ul>
<button className="w-full py-3 px-4 bg-slate-50 text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
              Wybierz pakiet
            </button>
</div>

<div className="flex flex-col p-8 bg-white rounded-3xl border border-slate-200">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
              Standard
            </h3>
<p className="text-sm text-slate-500 mb-6">Najpopularniejszy wybór.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                800
              </span>
<span className="text-base text-slate-500">zł / mc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base text-slate-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Opieka pełnowymiarowa</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Wszystkie materiały</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Podstawowe wyżywienie</span>
</li>
</ul>
<button className="w-full py-3 px-4 bg-slate-50 text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
              Wybierz pakiet
            </button>
</div>

<div className="flex flex-col p-8 rounded-3xl border shadow-xl relative transform md:-translate-y-2 bg-[#244053] border-[#244053] shadow-slate-900/20">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider bg-[#6ca4a3]">
              Polecane
            </div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">
              Premium
            </h3>
<p className="text-sm mb-6 text-slate-300">Pełen komfort i rozwój.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                1200
              </span>
<span className="text-base text-slate-400">zł / mc</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base text-white">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#6ca4a3]" data-lucide="check" strokeWidth="1.5"></i>
<span>Rozszerzony pakiet godzin</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#6ca4a3]" data-lucide="check" strokeWidth="1.5"></i>
<span>Zajęcia dodatkowe (angielski)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#6ca4a3]" data-lucide="check" strokeWidth="1.5"></i>
<span>Pełne wyżywienie bio</span>
</li>
</ul>
<button className="w-full py-3 px-4 bg-white font-medium rounded-xl transition-colors text-[#244053] hover:bg-slate-200">
              Wybierz pakiet
            </button>
</div>

<div className="flex flex-col p-8 bg-white rounded-3xl border border-slate-200">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">
              Elastyczny
            </h3>
<p className="text-sm text-slate-500 mb-6">Dopasowany do Ciebie.</p>
<div className="mb-6">
<span className="text-2xl font-semibold tracking-tight text-slate-900 mt-2 block">
                Ustalany
                <br/>
                indywidualnie
              </span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-base text-slate-700">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Wybór konkretnych dni</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Zmienne godziny</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-[#ef9f53]" data-lucide="check" strokeWidth="1.5"></i>
<span>Opcjonalne posiłki</span>
</li>
</ul>
<button className="w-full py-3 px-4 bg-slate-50 text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
              Kontakt
            </button>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-8 text-white flex flex-col items-center justify-center text-center bg-[#244053]">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#ef9f53]" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">
        Gwarancja Satysfakcji
      </h2>
<p className="text-slate-300 max-w-2xl text-lg">
        Jesteśmy pewni jakości naszych usług. Jeśli w ciągu pierwszych dwóch
        tygodni uznasz, że to nie jest miejsce dla Twojego dziecka, zwrócimy Ci
        100% kosztów czesnego.
      </p>
</section>

<section className="py-24 px-6 lg:px-8 bg-[#6ca4a3] border-none">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center text-white">
          Dla kogo jest nasza oferta?
        </h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/10">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 bg-white/20">
<i className="w-5 h-5 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="font-semibold mb-1 text-xl tracking-tight text-white">
                Dla dzieci od 2 do 6 lat
              </h4>
<p className="text-base text-teal-50">
                Grupy wiekowe są odpowiednio dopasowane, aby wspierać naturalny
                rozwój.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/10">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 bg-white/20">
<i className="w-5 h-5 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="font-semibold mb-1 text-xl tracking-tight text-white">
                Dla pracujących rodziców
              </h4>
<p className="text-base text-teal-50">
                Elastyczne godziny otwarcia ułatwiające organizację dnia.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/10">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 bg-white/20">
<i className="w-5 h-5 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="font-semibold mb-1 text-xl tracking-tight text-white">
                Ceniących rozwój
              </h4>
<p className="text-base text-teal-50">
                Dla tych, którzy stawiają na naukę przez kreatywną zabawę.
              </p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/10">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1 bg-white/20">
<i className="w-5 h-5 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="font-semibold mb-1 text-xl tracking-tight text-white">
                Wymagających jakości
              </h4>
<p className="text-base text-teal-50">
                Rodziców poszukujących certyfikowanej opieki i świetnych
                warunków.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-[#fdf8f4]">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12">
          Zdjęcia z naszych zajęć
        </h2>
<div className="flex justify-center">
<div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-sm border border-slate-100 relative group">
<img alt="Zdjęcie z zajęć" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" src="https://i.postimg.cc/qq4SWJ7c/los-ecos-de-jude-joana-marcus.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
          Pytania i odpowiedzi
        </h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-sm open:border-slate-200 transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-900">
<span>W jakich godzinach otwarta jest placówka?</span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400 group-open:text-[#ef9f53]">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 pt-0">
              Jesteśmy otwarci od poniedziałku do piątku w godzinach 7:00 -
              17:30. Istnieje możliwość indywidualnego ustalenia godzin w ramach
              pakietu elastycznego.
            </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-sm open:border-slate-200 transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-900">
<span>Czy zapewniacie wyżywienie?</span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400 group-open:text-[#ef9f53]">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 pt-0">
              Tak, współpracujemy z certyfikowaną firmą cateringową
              specjalizującą się w posiłkach dla dzieci. Oferujemy również opcje
              dietetyczne (bezglutenowa, wegańska).
            </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-sm open:border-slate-200 transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-900">
<span>Jak wygląda proces adaptacji?</span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400 group-open:text-[#ef9f53]">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 pt-0">
              Proces adaptacji trwa zazwyczaj około tygodnia i jest dopasowany
              do indywidualnych potrzeb dziecka. W pierwszych dniach zachęcamy
              rodziców do towarzyszenia dziecku na sali.
            </div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-100 open:bg-white open:shadow-sm open:border-slate-200 transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-slate-900">
<span>Czy organizujecie zajęcia dodatkowe?</span>
<span className="transition-transform duration-200 group-open:-rotate-180 text-slate-400 group-open:text-[#ef9f53]">
<i data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-slate-600 pt-0">
              Tak, w naszej ofercie znajdują się m.in. język angielski, rytmika,
              zajęcia plastyczne oraz warsztaty z robotyki. Część z nich jest
              wliczona w pakiety premium.
            </div>
</details>
</div>
<div className="mt-12 text-center">
<div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-full py-2 px-6">
<span className="text-base text-slate-600">Masz inne pytanie?</span>
<div className="w-px h-4 bg-slate-300"></div>
<input className="bg-transparent border-none outline-none text-base text-slate-900 placeholder:text-slate-400 w-48 md:w-64" placeholder="Wpisz swoje pytanie..." type="text"/>
<button className="font-medium transition-colors text-[#ef9f53] hover:text-[#e08f43]">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</section>
<div className="fixed bottom-8 left-6 lg:left-8 z-40 flex pointer-events-none">
<button className="bg-[#ef9f53] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#e08f43] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 pointer-events-auto" onclick="document.getElementById('enrollModal').classList.remove('hidden')">
        Zapisz dziecko
      </button>
</div>
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" id="enrollModal">
<div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors" onclick="document.getElementById('enrollModal').classList.add('hidden')">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">
          Formularz zapisu
        </h2>
<form className="space-y-5" onsubmit="event.preventDefault(); document.getElementById('enrollModal').classList.add('hidden'); alert('Dziękujemy za przesłanie formularza!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                Imię i nazwisko rodzica
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                Imię i nazwisko dziecka
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                Numer telefonu rodzica
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                Email rodzica
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                PESEL rodzica
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" pattern="\d{11}" required="" title="PESEL powinien składać się z 11 cyfr" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">
                PESEL dziecka
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" pattern="\d{11}" required="" title="PESEL powinien składać się z 11 cyfr" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-slate-700 mb-1">
                Adres
              </label>
<input className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#ef9f53]/50 focus:border-[#ef9f53] outline-none transition-shadow text-slate-900" required="" type="text"/>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="w-full md:w-auto px-8 py-3 bg-[#ef9f53] text-white font-medium rounded-xl hover:bg-[#e08f43] transition-colors" type="submit">
              Wyślij zgłoszenie
            </button>
</div>
</form>
</div>
</div>


    </>
  );
}
