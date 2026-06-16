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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-sm uppercase text-zinc-950">
          Giant Protect
        </div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="https://www.giantfabryczna.pl/pl" target="_blank">
            Sklep
          </a>
<a className="text-xs font-medium bg-zinc-950 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#katalog">
            Aktywuj ochronę
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs font-medium mb-8 shadow-sm">
          Dostępne wyłącznie w Giant Store Warszawa
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-950 max-w-4xl text-balance leading-tight mb-8">
          Twój nowy Giant.
          <br className="hidden md:block"/>
          Twoje pełne bezpieczeństwo.
        </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl text-balance mb-12">
          Poznaj Giant Protect – rewolucyjny program ochrony wbudowany
          bezpośrednio w cenę Twojego nowego roweru. Od pierwszego obrotu korbą
          jedziesz z absolutnym spokojem ducha.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20" href="#katalog">
            Wybierz model i aktywuj ochronę
          </a>
<a className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#dlaczego">
            Dowiedz się więcej
          </a>
</div>
<div className="mt-16 flex items-center gap-8 text-sm font-medium text-zinc-400">
<div className="flex items-center gap-2">Bez dodatkowych składek</div>
<div className="flex items-center gap-2">Bez ukrytych haczyków</div>
<div className="flex items-center gap-2">Bez papierologii</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="dlaczego">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-6 text-balance">
              Zmieniamy reguły gry w ubezpieczeniach rowerowych.
            </h2>
<p className="text-base text-zinc-500 leading-relaxed">
              Tradycyjne ubezpieczenia wymagają wypełniania formularzy,
              wyceniania sprzętu i opłacania kolejnych, rocznych składek. W
              Giant Protect ochrona staje się integralną częścią roweru – tak
              samo jak rama, zawieszenie Maestro czy przerzutki. Kupujesz rower
              i automatycznie zyskujesz tarczę ochronną na cały rok.
            </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex flex-col items-start gap-4">
<div className="">
<div className="text-sm font-medium text-zinc-950 mb-1">
                  Pełna ochrona
                </div>
<div className="text-xs text-zinc-500">
                  Zabezpieczenie od kradzieży i awarii
                </div>
</div>
</div>
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex flex-col items-start gap-4 mt-8">
<div>
<div className="text-sm font-medium text-zinc-950 mb-1">
                  Natychmiast
                </div>
<div className="text-xs text-zinc-500">
                  Działa od momentu wyjazdu ze sklepu
                </div>
</div>
</div>
</div>
</div>
<div className="mt-24"></div>
</div>
</section>

<section className="py-32 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-6 text-balance">
            Maksimum ochrony. Poznaj pełną listę ryzyk, przed którymi chroni Cię
            Giant Protect.
          </h2>
<p className="text-base text-zinc-500 leading-relaxed">
            Niezależnie od tego, czy wybierasz się na wymagający trail w górach,
            dynamiczny trening szosowy, czy dojeżdżasz do pracy – zabezpieczamy
            Twój sprzęt przed każdym czarnym scenariuszem.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-zinc-950 mb-4">
              1. Utrata roweru
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="">
<span className="text-sm text-zinc-500">
                    Piwnica, balkon, posesja, czy stojak pod biurem.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="">
<span className="text-sm text-zinc-500">
                    Uchwyt dachowy lub platforma na hak podczas postoju.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="">
<span className="text-sm text-zinc-500">
                    Pociąg, stacja przesiadkowa, publiczny schowek.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="">
<span className="text-sm text-zinc-500">
                    Ochrona w przypadku napaści i odebrania sprzętu siłą.
                  </span>
</div>
</li>
</ul>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-zinc-950 mb-4">
              2. Uszkodzenia i awarie
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Upadek na trasie, skok, zderzenie. Pokrywamy koszty naprawy
                    ramy i komponentów.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Pęknięcie przerzutki, blokada amortyzatora (nie wynikające
                    ze zużycia).
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Upuszczenie podczas montażu, uszkodzenia przez kuriera.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Celowe zniszczenie lub porysowanie zaparkowanego roweru.
                  </span>
</div>
</li>
</ul>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-zinc-950 mb-4">
              3. Ochrona E-Bike (E+ / Hybrid)
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Odmowa jednostki SyncDrive, błędy systemowe, uszkodzenia
                    przekładni.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="">
<span className="text-sm text-zinc-500">
                    Przepięcia w sieci podczas ładowania EnergyPak, awarie
                    komputera.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Ekstremalne warunki, woda w silniku, uszkodzony RideControl
                    lub wyświetlacz.
                  </span>
</div>
</li>
</ul>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-xl font-medium tracking-tight text-zinc-950 mb-4">
              4. Części i akcesoria
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Ochrona poszczególnych części: kół, siodełka, amortyzatora,
                    oświetlenia.
                  </span>
</div>
</li>
<li className="flex items-start gap-3">
<div>
<span className="text-sm text-zinc-500">
                    Obejmuje akcesoria zakupione z rowerem i zamontowane na
                    stałe (liczniki, koszyki, torby).
                  </span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>


<section className="py-32 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-950 mb-16 text-center text-balance">
          Jak to działa? To prostsze niż myślisz.
        </h2>
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-zinc-200 -z-10"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-lg font-semibold text-zinc-950 mb-6 shadow-sm">
              1
            </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Wybierasz
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Kupujesz dowolny rower z gamy Giant objęty programem Giant Protect
              u autoryzowanego dealera lub online.
            </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center text-lg font-semibold mb-6 shadow-md shadow-zinc-900/20">
              2
            </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Odbierasz
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Ochrona jest wliczona w cenę – nie dopłacasz ani grosza. Polisa
              aktywuje się automatycznie po wystawieniu faktury.
            </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-lg font-semibold text-zinc-950 mb-6 shadow-sm">
              3
            </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
              Jedziesz
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Cieszysz się czystą radością z jazdy. W razie kłopotów, szkodę
              zgłaszasz intuicyjnie przez panel online w 3 minuty.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white overflow-hidden relative" id="katalog">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 text-balance">
          Nie kupuj po prostu roweru.
          <br className="hidden md:block"/>
          Kup absolutną wolność.
        </h2>
<p className="text-lg text-zinc-400 mb-12 text-balance leading-relaxed">
          Wybierz legendarną technologię Giant i zyskaj niewidzialnego partnera,
          który dba o Twój sprzęt w każdej sekundzie. Znajdź swój idealny model
          z pakietem Giant Protect.
        </p>
<a className="h-14 px-8 inline-flex items-center justify-center gap-3 rounded-full bg-white text-zinc-950 text-base font-medium hover:bg-zinc-100 transition-all" href="https://www.giantfabryczna.pl/pl" target="_blank">
          Znajdź rower z wbudowaną ochroną
        </a>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-semibold tracking-tighter text-sm uppercase text-zinc-950">
          Giant Protect
        </div>
<div className="flex items-center gap-8 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="https://www.giantfabryczna.pl/pl" target="_blank">
            Giant Store Warszawa
          </a>
<a className="flex items-center gap-2 hover:text-zinc-900 transition-colors" href="https://www.facebook.com/GiantFabryczna/" target="_blank">
            Facebook
          </a>
</div>
</div>
</footer>

    </>
  );
}
