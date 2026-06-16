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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-teal-800 flex items-center gap-2">
<i className="w-6 h-6" data-lucide="palmtree" strokeWidth="1.5"></i>
          Palmer Travel
        </div>
<div className="hidden md:flex gap-8">
<a className="text-lg text-slate-600 hover:text-teal-600 transition-colors" href="#home">
            Home
          </a>
<a className="text-lg text-slate-600 hover:text-teal-600 transition-colors" href="#o-nas">
            O nas
          </a>
<a className="text-lg text-slate-600 hover:text-teal-600 transition-colors" href="#produkty">
            Produkty
          </a>
<a className="text-lg text-slate-600 hover:text-teal-600 transition-colors" href="#cennik">
            Cennik
          </a>
<a className="text-lg text-slate-600 hover:text-teal-600 transition-colors" href="#kontakt">
            Kontakt
          </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
            Dream Travel -
            <span className="text-teal-600">twoje wakacje</span>
</h1>
<p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            Od pierwszych pomysłów po ostateczne plany podróży. Zadbamy o każdy
            detal, abyś mógł po prostu spakować walizki i cieszyć się przygodą.
          </p>
<div className="flex flex-wrap items-center gap-6">
<button className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
              Umów wizytę
              <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<span className="text-slate-500 text-lg uppercase tracking-widest text-xs">
              Kliknij
            </span>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-teal-100 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
<img alt="Piękna plaża" className="rounded-[2rem] shadow-xl object-cover aspect-[4/3] w-full border border-white/20" src="https://i.postimg.cc/rpRBrZbR/Gemini-Generated-Image-8omzne8omzne8omz.png-stworz-mi-identyczne-zdje-rlmq-NB2xtc.png"/>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            O nas
          </h2>
<p className="text-lg text-slate-600">
            Zaufanie buduje się latami. Sprawdź, dlaczego warto powierzyć nam
            swoje plany urlopowe.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center group hover:bg-teal-50 transition-colors">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-teal-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">
              300 K
            </div>
<div className="text-lg text-slate-500 font-medium">
              Zadowolonych klientów
            </div>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center group hover:bg-teal-50 transition-colors">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-teal-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="calendar-days" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">
              6 Lat
            </div>
<div className="text-lg text-slate-500 font-medium">
              Doświadczenia na rynku
            </div>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center group hover:bg-teal-50 transition-colors">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-teal-600 group-hover:scale-110 transition-transform">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">
              2 Lata
            </div>
<div className="text-lg text-slate-500 font-medium">
              Pełnej gwarancji
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="produkty">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16">
          Nasze Produkty
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-shadow flex flex-col group">
<div className="relative h-64 overflow-hidden">
<img alt="Produkt A" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                Egzotyczne Wakacje
              </h3>
<p className="text-lg text-slate-600 mb-8 flex-grow">
                Odkryj najpiękniejsze plaże świata. Zapewniamy pełen komfort i
                relaks z dala od zgiełku.
              </p>
<a className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 text-lg" href="#">
                Szczegóły
                <i className="w-5 h-5 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-shadow flex flex-col group">
<div className="relative h-64 overflow-hidden">
<img alt="Produkt B" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                Aktywny Wypoczynek
              </h3>
<p className="text-lg text-slate-600 mb-8 flex-grow">
                Dla tych, którzy nie lubią siedzieć w miejscu. Wycieczki
                górskie, nurkowanie i wiele innych atrakcji.
              </p>
<a className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 text-lg" href="#">
                Szczegóły
                <i className="w-5 h-5 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-shadow flex flex-col group">
<div className="relative h-64 overflow-hidden">
<img alt="Produkt C" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                City Break
              </h3>
<p className="text-lg text-slate-600 mb-8 flex-grow">
                Krótkie wypady do najciekawszych miast Europy. Poznaj kulturę,
                sztukę i lokalną kuchnię.
              </p>
<a className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 text-lg" href="#">
                Szczegóły
                <i className="w-5 h-5 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="text-center relative">
<button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors shadow-sm inline-flex items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
            Umów rozmowę
          </button>
<div className="hidden lg:block absolute top-1/2 left-1/2 transform translate-x-32 -translate-y-1/2 pointer-events-none">
<svg className="w-24 h-12 text-slate-300" fill="none" viewbox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
<path d="M100 25L90 19.2265V30.7735L100 25ZM0 26H91V24H0V26Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-12">
            Dlaczego nasze produkty?
          </h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-xl font-medium text-teal-300">
                1
              </div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">
                  Indywidualne podejście
                </h3>
<p className="text-lg text-teal-100/80">
                  Każda oferta jest dopasowana do Twoich unikalnych potrzeb i
                  oczekiwań.
                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-xl font-medium text-teal-300">
                2
              </div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">
                  Sprawdzeni partnerzy
                </h3>
<p className="text-lg text-teal-100/80">
                  Współpracujemy tylko z licencjonowanymi i zaufanymi
                  przewoźnikami oraz hotelami.
                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-teal-500 flex items-center justify-center text-xl font-medium text-teal-300">
                3
              </div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">
                  Całodobowe wsparcie
                </h3>
<p className="text-lg text-teal-100/80">
                  Jesteśmy do Twojej dyspozycji 24/7 na każdym etapie podróży.
                </p>
</div>
</div>
</div>
<div className="mt-14 flex items-center gap-6">
<button className="px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 bg-pink-200 text-slate-900 hover:bg-pink-300">
              Umów rozmowę
              <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<span className="text-lg text-teal-200">
              lub
              <a className="underline hover:text-white transition-colors" href="#">
                zadzwoń
              </a>
</span>
</div>
</div>
<div className="relative lg:h-[600px] rounded-[2rem] overflow-hidden">
<img alt="Relaks" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="cennik">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            Cennik usług
          </h2>
<p className="text-lg text-slate-600">
            Przejrzyste zasady, brak ukrytych kosztów.
          </p>
</div>
<div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8 lg:p-12">
<div className="space-y-6">
<div className="flex items-center justify-between pb-6 border-b border-slate-100">
<div className="flex items-center gap-4">
<i className="text-teal-500 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                  Konsultacja podróżnicza (1h)
                </span>
</div>
<div className="text-xl font-medium text-slate-900">Darmowa</div>
</div>
<div className="flex items-center justify-between pb-6 border-b border-slate-100">
<div className="flex items-center gap-4">
<i className="text-teal-500 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                  Przygotowanie planu wycieczki
                </span>
</div>
<div className="text-xl font-medium text-slate-900">od 490 zł</div>
</div>
<div className="flex items-center justify-between pb-6 border-b border-slate-100">
<div className="flex items-center gap-4">
<i className="text-teal-500 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                  Rezerwacja lotów i hoteli
                </span>
</div>
<div className="text-xl font-medium text-slate-900">200 zł</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<i className="text-teal-500 w-5 h-5" data-lucide="check" strokeWidth="2"></i>
<span className="text-lg text-slate-700">
                  Opieka pilota na miejscu
                </span>
</div>
<div className="text-xl font-medium text-slate-900">
                Wycena indyw.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100/50 border-y border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16">
          Opinie klientów
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 flex-grow">
              "Wspaniała organizacja wyjazdu na Malediwy. Wszystko dopięte na
              ostatni guzik. Gorąco polecam!"
            </p>
<div className="font-medium text-slate-900">Anna K.</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-slate-200 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 flex-grow">
              "Super kontakt z biurem, szybko rozwiązali nasz problem z lotem.
              Na pewno wrócimy."
            </p>
<div className="font-medium text-slate-900">Piotr N.</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 flex-grow">
              "Wycieczka objazdowa po Włoszech była strzałem w dziesiątkę.
              Przewodnik rewelacyjny."
            </p>
<div className="font-medium text-slate-900">Marta S.</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
<div className="flex gap-1 text-teal-500 mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-slate-600 mb-8 flex-grow">
              "Dzięki nim spełniłem swoje marzenie o podróży do Japonii. Pełen
              profesjonalizm."
            </p>
<div className="font-medium text-slate-900">Tomasz W.</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-12">
          FAQ
        </h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-xl font-medium text-slate-900 list-none">
              Czy muszę mieć własne ubezpieczenie?
              <i className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Podstawowe ubezpieczenie zdrowotne jest wliczone w cenę każdej
              naszej wycieczki. Zalecamy jednak wykupienie dodatkowego
              ubezpieczenia kosztów rezygnacji.
            </p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-xl font-medium text-slate-900 list-none">
              Jak długo czeka się na wycenę indywidualną?
              <i className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Staramy się odpowiadać najszybciej jak to możliwe. Standardowy
              czas przygotowania wstępnej oferty to 48 godzin roboczych.
            </p>
</details>
<details className="group bg-white rounded-2xl border border-slate-200/60 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer text-xl font-medium text-slate-900 list-none">
              Czy organizujecie wyjazdy firmowe?
              <i className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tak, zajmujemy się również obsługą klienta biznesowego,
              organizując wyjazdy integracyjne oraz podróże służbowe.
            </p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-12" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-20">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Adres</h2>
<div className="flex flex-col sm:flex-row gap-8 items-start">
<div className="text-lg text-slate-300 space-y-2">
<p className="font-medium text-white text-xl mb-4">
                  Wymarzone Podróże Sp. z o.o.
                </p>
<p>ul. Słoneczna 42</p>
<p>00-123 Warszawa</p>
<p className="pt-4 text-teal-400">Pon - Pt: 9:00 - 17:00</p>
</div>
<div className="w-full sm:w-64 h-48 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 border border-slate-700/50 relative overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<i className="w-6 h-6 text-teal-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="font-medium tracking-widest text-xs uppercase">
                    Mapa
                  </span>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Kontakt</h2>
<div className="space-y-6 text-lg text-slate-300">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs tracking-widest uppercase text-slate-500 mb-1">
                    Tel.
                  </div>
<a className="text-xl font-medium text-white hover:text-teal-400 transition-colors" href="tel:+48123456789">
                    +48 123 456 789
                  </a>
</div>
</div>
<div className="pt-6 border-t border-slate-800">
<ul className="space-y-4">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500" data-lucide="shield-check" strokeWidth="1.5"></i>
                    Gwarancja bezpiecznej podróży
                  </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-teal-500" data-lucide="truck" strokeWidth="1.5"></i>
                    Dostawa dokumentów kurierem
                  </li>
</ul>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-800 text-slate-400 gap-4">
<div className="text-lg">
            © 2024 Palmer Travel. Wszelkie prawa zastrzeżone.
          </div>
<div className="flex gap-8 text-lg">
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
<a className="hover:text-white transition-colors" href="#">
              Polityka prywatności
            </a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-teal-700 hover:scale-105 transition-all duration-300 z-50 group">
<i className="w-7 h-7 group-hover:hidden" data-lucide="message-square-text" strokeWidth="1.5"></i>
<i className="w-7 h-7 hidden group-hover:block" data-lucide="x" strokeWidth="1.5"></i>
</button>


    </>
  );
}
