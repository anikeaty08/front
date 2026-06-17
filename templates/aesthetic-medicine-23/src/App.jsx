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
      

<nav className="fixed top-0 w-full bg-[#FAFAF9]/90 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="text-xl font-medium tracking-tight font-serif text-2xl">
          Swiss Esthetic.
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-stone-500">
<span>Praha</span>
<span className="w-1 h-1 bg-stone-300 rounded-none"></span>
<span>Brno</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-stone-50 text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-full" href="#konzultace">
          Nezávazná konzultace
        </a>

<button className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
<div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] font-normal text-[#1A1A1A]">
            Vypadejte odpočatě.
            <br/>
<span className="text-stone-400">Ne 'po zákroku'.</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-md">
            Decentní estetická medicína pod vedením zkušených lékařů. Zítra se
            vrátíte do práce a nikdo nepozná, že jste tu byli.
          </p>
<div className="mt-12">
<a className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-stone-50 text-sm font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-full" href="#konzultace">
              Nezávazná konzultace
            </a>
</div>
</div>
<div className="md:col-span-6 lg:col-span-7 w-full">

<div className="aspect-[4/5] md:aspect-[3/4] w-full bg-stone-200 overflow-hidden relative">
<img alt="Přirozená krása" className="object-cover w-full h-full object-center grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="mt-24 md:mt-32 pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-8 text-sm md:text-base text-stone-500 font-medium tracking-widest uppercase">
<div className="flex items-center gap-4">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
<span>15 let praxe</span>
</div>
<div className="hidden md:block w-px h-6 bg-stone-200"></div>
<div className="flex items-center gap-4">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>3 prémiové kliniky</span>
</div>
<div className="hidden md:block w-px h-6 bg-stone-200"></div>
<div className="flex items-center gap-4">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
<span>40 000+ klientů</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-stone-100">
<div className="max-w-4xl mx-auto text-center">
<h2 className="tracking-tight text-stone-900 mb-8 font-normal text-4xl md:text-5xl">
          Jsme průkopníci decentního přístupu k estetice.
        </h2>
<p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
          Nestavíme náš úspěch na dramatických proměnách, které mění vaše rysy.
          Věříme v medicínu, která respektuje vaši individualitu. Naším jediným
          cílem je, abyste při pohledu do zrcadla viděli sami sebe — jen v té
          nejlepší, odpočaté formě.
        </p>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
<div className="flex flex-col">
<span className="text-4xl font-light mb-6 font-serif tracking-tight text-[#BBA88E]">
            01
          </span>
<p className="text-lg text-stone-900 font-medium leading-snug">
            Pozoruje vaše okolí, že vypadáte unaveně, i když se cítíte plní
            energie a odpočatí jste?
          </p>
</div>
<div className="flex flex-col">
<span className="text-4xl font-light mb-6 font-serif tracking-tight text-[#BBA88E]">
            02
          </span>
<p className="text-lg text-stone-900 font-medium leading-snug">
            Chcete se vrátit ke svému obrazu před lety — bez toho, aby kdokoliv
            věděl, jak jste toho dosáhli?
          </p>
</div>
<div className="flex flex-col">
<span className="text-4xl font-light mb-6 font-serif tracking-tight text-[#BBA88E]">
            03
          </span>
<p className="text-lg text-stone-900 font-medium leading-snug">
            Hledali jste místo, kde vás nebudou přesvědčovat o nutnosti zákroků,
            které ve skutečnosti nepotřebujete?
          </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-5">
<h2 className="tracking-tight text-stone-900 leading-[1.1] sticky top-32 font-normal text-4xl md:text-5xl">
            "Decentnost není absence efektu — je to absence okázalosti."
          </h2>
</div>
<div className="md:col-span-7 flex flex-col gap-8">
<p className="text-lg text-stone-600 font-light leading-relaxed">
            V dnešní době je snadné sklouznout k trendům, které velí uniformnímu
            vzhledu. Věnujeme extrémní pozornost detailu, abychom se tomuto
            vyhnuli. Naše filozofie stojí na precizní znalosti anatomie a citu
            pro proporce.
          </p>
<p className="text-lg text-stone-600 font-light leading-relaxed">
            Nepoužíváme šablony. Během úvodní konzultace trávíme čas pochopením
            vaší představy, vašeho životního stylu a vašich obav. Zákrok samotný
            je pak už jen technickým provedením pečlivě sestaveného plánu.
          </p>
<p className="text-lg text-stone-600 font-light leading-relaxed">
            Vážíme si vaší důvěry a garantujeme naprostou diskrétnost. Naše
            kliniky jsou navrženy tak, aby poskytovaly maximální soukromí od
            vašeho příchodu až po odchod.
          </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-900 text-stone-50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
<h2 className="tracking-tight max-w-lg leading-[1.1] font-normal text-4xl md:text-5xl">
            Vybrané postupy pro přirozený výsledek.
          </h2>
<a className="inline-flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-stone-300 hover:text-white transition-colors group" href="#konzultace">
            Probrat možnosti
            <i className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-stone-800 mb-6 relative">
<img alt="Omlazení obličeje" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="border-t border-stone-700 pt-6 flex justify-between items-start">
<div>
<h3 className="tracking-tight mb-3 font-normal text-3xl">
                  Omlazení obličeje
                </h3>
<p className="text-lg text-stone-400 font-light">
                  Práce s botulotoxinem a výplněmi s absolutním respektem k
                  mimice.
                </p>
</div>
<i className="w-6 h-6 text-stone-500 transition-colors mt-1 group-hover:text-[#BBA88E]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-stone-800 mb-6 relative">
<img alt="Lifting bez skalpelu" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="border-t border-stone-700 pt-6 flex justify-between items-start">
<div>
<h3 className="tracking-tight mb-3 font-normal text-3xl">
                  Lifting bez skalpelu
                </h3>
<p className="text-lg text-stone-400 font-light">
                  Pozvednutí kontur pomocí nití a fokusovaného ultrazvuku s
                  minimální rekonvalescencí.
                </p>
</div>
<i className="w-6 h-6 text-stone-500 transition-colors mt-1 group-hover:text-[#BBA88E]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-stone-800 mb-6 relative">
<img alt="Kvalita pleti" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="border-t border-stone-700 pt-6 flex justify-between items-start">
<div>
<h3 className="tracking-tight mb-3 font-normal text-3xl">
                  Kvalita pleti
                </h3>
<p className="text-lg text-stone-400 font-light">
                  Laserové technologie a mezoterapie pro sjednocenou a
                  rozzářenou texturu.
                </p>
</div>
<i className="w-6 h-6 text-stone-500 transition-colors mt-1 group-hover:text-[#BBA88E]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-stone-800 mb-6 relative">
<img alt="Tvarování postavy" className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="border-t border-stone-700 pt-6 flex justify-between items-start">
<div>
<h3 className="tracking-tight mb-3 font-normal text-3xl">
                  Tvarování postavy
                </h3>
<p className="text-lg text-stone-400 font-light">
                  Šetrná laserová liposukce a lymfodrenážní procesy pro finální
                  definici siluety.
                </p>
</div>
<i className="w-6 h-6 text-stone-500 transition-colors mt-1 group-hover:text-[#BBA88E]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-stone-200 border-y border-stone-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="tracking-tight text-stone-900 font-normal text-3xl md:text-4xl">
          Dobře se o vás postaráme — od první konzultace až po bezpečný návrat
          domů.
        </h2>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-20 text-center font-normal">
        Vedení kliniky
      </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col text-center">
<div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-8 mx-auto w-full max-w-[300px]">
<img alt="MUDr. Jan Novotný" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="tracking-tight text-stone-900 font-normal text-2xl">
            MUDr. Jan Novotný
          </h3>
<p className="text-sm text-stone-500 font-medium tracking-widest uppercase mt-2 mb-6">
            Zakladatel &amp; Hlavní chirurg
          </p>
<p className="text-lg text-stone-600 font-light italic px-4">
            "Mým měřítkem úspěchu je, když mi klientka řekne, že jí známí
            chválí, jak dobře si odpočinula na dovolené."
          </p>
</div>

<div className="flex flex-col text-center">
<div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-8 mx-auto w-full max-w-[300px]">
<img alt="MUDr. Klára Dvořáková" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="tracking-tight text-stone-900 font-normal text-2xl">
            MUDr. Klára Dvořáková
          </h3>
<p className="text-sm text-stone-500 font-medium tracking-widest uppercase mt-2 mb-6">
            Vedoucí dermatologie
          </p>
<p className="text-lg text-stone-600 font-light italic px-4">
            "Zdravá a sjednocená pleť je základ. Vše ostatní je jen jemné
            doladění detailů."
          </p>
</div>

<div className="flex flex-col text-center">
<div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-8 mx-auto w-full max-w-[300px]">
<img alt="MUDr. Petr Svoboda" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="tracking-tight text-stone-900 font-normal text-2xl">
            MUDr. Petr Svoboda
          </h3>
<p className="text-sm text-stone-500 font-medium tracking-widest uppercase mt-2 mb-6">
            Specialista na laserovou medicínu
          </p>
<p className="text-lg text-stone-600 font-light italic px-4">
            "Moderní technologie nám dnes umožňují dosáhnout výsledků, kvůli
            kterým se dříve muselo na sál."
          </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-100">
<div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24">
<div className="text-center mb-10">
<h2 className="tracking-tight text-stone-900 font-normal text-4xl md:text-5xl">
            Reálné příběhy, decentní výsledky.
          </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
<div className="md:col-span-5 order-2 md:order-1">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-px bg-stone-400"></span>
<span className="text-xs font-medium uppercase tracking-widest text-stone-500">
                Katarína, 42 let, Praha
              </span>
</div>
<div className="space-y-6">
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Co řešila
                </h4>
<p className="text-lg text-stone-600 font-light">
                  "Při náročném pracovním tempu jsem začala působit ztrhaně.
                  Chtěla jsem vypadat svěže na schůzkách, ale měla jsem panický
                  strach z 'nafouknutého' vzhledu."
                </p>
</div>
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Jak jsme to vyřešili
                </h4>
<p className="text-lg text-stone-600 font-light">
                  Zvolili jsme velmi jemnou aplikaci kyseliny hyaluronové do
                  oblastí kruhů pod očima a mírný lifting nitěmi v dolní třetině
                  obličeje.
                </p>
</div>
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Výsledek
                </h4>
<p className="text-lg text-stone-900 font-medium italic">
                  "Druhý den v kanceláři se mě kolegyně ptala, jestli jsem o
                  víkendu byla ve spa. Přesně to jsem chtěla."
                </p>
</div>
</div>
</div>
<div className="md:col-span-7 order-1 md:order-2">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden">
<img alt="Detail pleti" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
<div className="w-full h-px bg-stone-300"></div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
<div className="md:col-span-7">
<div className="aspect-[4/3] bg-stone-200 overflow-hidden">
<img alt="Relaxace" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
<div className="md:col-span-5">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-px bg-stone-400"></span>
<span className="text-xs font-medium uppercase tracking-widest text-stone-500">
                Martin, 51 let, Brno
              </span>
</div>
<div className="space-y-6">
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Co řešil
                </h4>
<p className="text-lg text-stone-600 font-light">
                  "Hluboká vráska mračivka mi dodávala přísný a naštvaný výraz,
                  což mi komplikovalo komunikaci s klienty."
                </p>
</div>
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Jak jsme to vyřešili
                </h4>
<p className="text-lg text-stone-600 font-light">
                  Precizní mikro-dávkování botulotoxinu pouze do specifických
                  svalů tak, aby byla plně zachována hybnost obočí a přirozená
                  maskulinita.
                </p>
</div>
<div>
<h4 className="font-medium tracking-widest uppercase mb-2 text-xs text-[#BBA88E]">
                  Výsledek
                </h4>
<p className="text-lg text-stone-900 font-medium italic">
                  "Působím teď mnohem přístupněji a uvolněněji. Nikdo doma
                  nepoznal, že jde o zákrok."
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-stone-200">
<h2 className="tracking-tight text-stone-900 mb-16 text-center font-normal text-4xl md:text-5xl">
        Vaše cesta ke svěžejšímu já
      </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-stone-200 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-[#FAFAF9] border border-stone-300 rounded-full flex items-center justify-center mb-6 text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="tracking-tight text-stone-900 mb-3 font-normal text-2xl">
            1. Nezávazná konzultace
          </h3>
<p className="text-lg text-stone-600 font-light">
            V klidu probereme vaše představy, obavy a společně zjistíme, co je
            pro vás vhodné.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-[#FAFAF9] border border-stone-300 rounded-full flex items-center justify-center mb-6 text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="file-signature" strokeWidth="1.5"></i>
</div>
<h3 className="tracking-tight text-stone-900 mb-3 font-normal text-2xl">
            2. Plán na míru
          </h3>
<p className="text-lg text-stone-600 font-light">
            Navrhneme postup, který respektuje vaši anatomii a garantuje
            absolutně přirozený výsledek.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-[#FAFAF9] border border-stone-300 rounded-full flex items-center justify-center mb-6 text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="tracking-tight text-stone-900 mb-3 font-normal text-2xl">
            3. Diskrétní zákrok
          </h3>
<p className="text-lg text-stone-600 font-light">
            Ve vašem tempu, v prostředí maximálního soukromí a s využitím
            prémiových materiálů.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 bg-[#FAFAF9] border border-stone-300 rounded-full flex items-center justify-center mb-6 text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="tracking-tight text-stone-900 mb-3 font-normal text-2xl">
            4. Návrat k životu
          </h3>
<p className="text-lg text-stone-600 font-light">
            Díky našim postupům se často do 24 hodin vracíte do běžného režimu
            bez viditelných stop.
          </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
<h2 className="tracking-tight text-stone-900 mb-12 font-normal text-4xl md:text-5xl">
        Časté otázky
      </h2>
<div className="space-y-6">

<details className="group border-b border-stone-200 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none tracking-tight text-stone-900 font-normal text-2xl">
            Bude to na mně vidět?
            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-stone-600 font-light text-lg mt-4 leading-relaxed pr-12">
            Naším cílem je pravý opak. Specializujeme se na decentní estetiku.
            Okolí zaznamená, že vypadáte odpočatě, zdravě a svěže, ale nepozná
            konkrétní zákrok. Strach z "přeplastovaného" vzhledu u nás můžete
            nechat přede dveřmi.
          </div>
</details>

<details className="group border-b border-stone-200 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none tracking-tight text-stone-900 font-normal text-2xl">
            Jsou zákroky bolestivé?
            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-stone-600 font-light text-lg mt-4 leading-relaxed pr-12">
            Pohodlí klienta je pro nás absolutní prioritou. Využíváme špičková
            anestetika – od krémů nejvyšší řady po moderní techniky chlazení.
            Většina našich klientů popisuje zákroky pouze jako mírně
            diskomfortní, nikoliv bolestivé.
          </div>
</details>

<details className="group border-b border-stone-200 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none tracking-tight text-stone-900 font-normal text-2xl">
            Kolik mě to bude stát?
            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-stone-600 font-light text-lg mt-4 leading-relaxed pr-12">
            Nekonkurujeme cenou, ale kvalitou, bezpečím a garantovaným
            výsledkem. Finální cena se vždy odvíjí od individuálního plánu
            sestaveného na nezávazné konzultaci, kde vám vše transparentně
            vysvětlíme.
          </div>
</details>

<details className="group border-b border-stone-200 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none tracking-tight text-stone-900 font-normal text-2xl">
            Jak dlouho výsledky vydrží?
            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-stone-600 font-light text-lg mt-4 leading-relaxed pr-12">
            To závisí na typu ošetření a vašem metabolismu. Například prémiové
            dermální výplně vydrží 12–18 měsíců. Naším cílem není jednorázová
            radikální změna, ale dlouhodobý plán údržby vaší přirozené krásy.
          </div>
</details>

<details className="group border-b border-stone-200 pb-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none tracking-tight text-stone-900 font-normal text-2xl">
            Co když nebudu spokojen/á s výsledkem?
            <span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-stone-600 font-light text-lg mt-4 leading-relaxed pr-12">
            Právě proto volíme decentní, postupný přístup. Je mnohem snazší na
            další návštěvě mírně přidat, než řešit přehnaný výsledek. V případě
            kyseliny hyaluronové navíc disponujeme enzymem (hyaluronidázou),
            kterým lze materiál v případě potřeby bezpečně rozpustit. Vaše
            jistota je pro nás klíčová.
          </div>
</details>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-stone-900 text-stone-50 relative overflow-hidden" id="konzultace">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<h2 className="tracking-tight mb-8 leading-[1.1] font-normal text-5xl md:text-6xl">
          Najděte znovu svou odpočatou tvář.
        </h2>
<p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mb-12">
          Zarezervujte si čas jen pro sebe. Úvodní konzultace je prostorem pro
          naslouchání, nikoliv prodej.
        </p>
<form className="w-full max-w-md mx-auto flex flex-col gap-4">
<input className="w-full bg-stone-800 border border-stone-700 text-stone-100 px-6 py-4 placeholder:text-stone-500 focus:outline-none focus:border-stone-400 font-light transition-colors rounded-full" placeholder="Vaše jméno" type="text"/>
<input className="w-full bg-stone-800 border border-stone-700 text-stone-100 px-6 py-4 placeholder:text-stone-500 focus:outline-none focus:border-stone-400 font-light transition-colors rounded-full" placeholder="Telefonní číslo" type="tel"/>
<button className="w-full bg-stone-50 text-stone-900 px-6 py-4 font-medium text-sm uppercase tracking-widest hover:bg-stone-200 transition-colors mt-2 rounded-full" type="button">
            Začněte nezávaznou konzultací
          </button>
<p className="text-xs text-stone-500 mt-4 font-light">
            Odesláním souhlasíte se zpracováním osobních údajů. Ozveme se vám
            diskrétně do 24 hodin.
          </p>
</form>
</div>
</section>

<footer className="bg-[#FAFAF9] py-20 px-6 md:px-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-1">
<div className="text-xl font-medium tracking-tight mb-6 text-stone-900 font-serif text-2xl">
            Swiss Esthetic.
          </div>
<p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs">
            Klinika decentní estetické medicíny.
            <br/>
            Looking like yourself, just rested.
          </p>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-stone-900 mb-6">
            Praha
          </h4>
<address className="text-sm text-stone-600 font-light not-italic space-y-2">
<p>Pařížská 22</p>
<p>110 00 Praha 1</p>
<p className="pt-2">
<a className="hover:text-stone-900 transition-colors" href="tel:+420777000000">
                +420 777 000 000
              </a>
</p>
</address>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-stone-900 mb-6">
            Brno
          </h4>
<address className="text-sm text-stone-600 font-light not-italic space-y-2">
<p>Pellicova 11</p>
<p>602 00 Brno-střed</p>
<p className="pt-2">
<a className="hover:text-stone-900 transition-colors" href="tel:+420777111111">
                +420 777 111 111
              </a>
</p>
</address>
</div>
<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-stone-900 mb-6">
            Informace
          </h4>
<ul className="text-sm text-stone-600 font-light space-y-3">
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                Ceník výkonů
              </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                Tým lékařů
              </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                Zpracování údajů
              </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                Certifikace
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-200 text-xs text-stone-400 font-light flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Swiss Esthetic. Všechna práva vyhrazena.</p>
<div className="flex items-center gap-6">
<a className="hover:text-stone-900 transition-colors" href="#">
            Instagram
          </a>
<a className="hover:text-stone-900 transition-colors" href="#">
            LinkedIn
          </a>
</div>
</div>
</footer>


    </>
  );
}
