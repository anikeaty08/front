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
      
<nav className="fixed w-full top-0 z-50 bg-stone-900/80 backdrop-blur-md border-b border-stone-800">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
<a className="font-serif tracking-tighter text-xl font-medium text-white" href="#">
          G A B I N E T   M E D Y C Z N Y
        </a>
<div className="hidden md:flex space-x-8 items-center text-sm font-medium text-stone-400">
<a className="transition-colors duration-300 hover:text-white" href="#o-nas">
            O nas
          </a>
<a className="transition-colors duration-300 hover:text-white" href="#uslugi">
            Usługi
          </a>
<a className="transition-colors duration-300 hover:text-white" href="#opinie">
            Opinie
          </a>
<a className="transition-colors duration-300 hover:text-white" href="#kontakt">
            Kontakt
          </a>
<a className="bg-white text-stone-900 px-5 py-2.5 rounded-full hover:bg-stone-200 transition-colors duration-300" data-tally-layout="modal" data-tally-open="yPvkY0" data-tally-width="700" href="#">
            Umów wizytę
          </a>
</div>
<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-900">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center space-x-2 bg-stone-800 px-3 py-1 rounded-full mb-8 shadow-sm border border-stone-700">
<span className="w-2 h-2 rounded-full bg-gold"></span>
<span className="text-xs font-medium text-stone-300 uppercase tracking-wider">
              Medycyna Estetyczna Premium
            </span>
</div>
<h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
            Odkryj swoje
            <span className="italic text-gold">naturalne piękno</span>
            w sercu Warszawy.
          </h1>
<p className="text-lg text-stone-400 mb-10 leading-relaxed font-light">
            Indywidualne podejście, nowoczesne technologie i bezkompromisowe
            bezpieczeństwo pod okiem wykwalifikowanych ekspertów.
          </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<a className="bg-gold text-white px-8 py-4 rounded-full text-center hover-bg-gold-dark transition-all duration-300 font-medium text-sm shadow-lg shadow-[#C5A059]/20" data-tally-layout="modal" data-tally-open="yPvkY0" data-tally-width="700" href="https://tally.so/r/yPvkY0" target="_blank">
              Umów bezpłatną konsultację
            </a>
<a className="px-8 py-4 rounded-full text-center border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-all duration-300 font-medium text-sm" href="#uslugi">
              Poznaj usługi
            </a>
</div>
</div>
<div className="relative hidden lg:block h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Ekskluzywny zabieg" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-stone-900" id="o-nas">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-800">
<img alt="Lekarz medycyny estetycznej" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-stone-800 p-6 rounded-3xl shadow-xl shadow-black/20 border border-stone-700">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center text-gold">
<iconify-icon className="text-2xl" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">
                  Certyfikowany Ekspert
                </p>
<p className="text-xs text-stone-400 mt-0.5">
                  Ponad 15 lat doświadczenia
                </p>
</div>
</div>
</div>
</div>
<div>
<h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight mb-6">
            Harmonia nauki i sztuki wydobywania piękna.
          </h2>
<p className="text-stone-400 mb-6 leading-relaxed font-light text-sm sm:text-base">
            Jako główny specjalista i właścicielka gabinetu, wierzę, że
            prawdziwa elegancja tkwi w subtelności. Moim celem nie jest zmiana
            Twoich rysów, lecz przywrócenie skórze blasku, jędrności i
            młodzieńczego wyglądu, przy zachowaniu pełnej naturalności.
          </p>
<p className="text-stone-400 mb-10 leading-relaxed font-light text-sm sm:text-base">
            Dzięki wieloletniemu doświadczeniu oraz ciągłemu doskonaleniu
            umiejętności w światowych centrach szkoleniowych, oferuję pacjentkom
            z Warszawy protokoły zabiegowe oparte wyłącznie na certyfikowanych
            preparatach klasy premium i najnowocześniejszych technologiach.
          </p>
<a className="inline-flex items-center space-x-2 text-white font-medium text-sm group" data-tally-layout="modal" data-tally-open="yPvkY0" data-tally-width="700" href="https://tally.so/r/yPvkY0" target="_blank">
<span>Zaplanuj swój zabieg</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-stone-950" id="uslugi">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Nasza oferta
          </h2>
<p className="text-stone-400 text-sm sm:text-base font-light">
            Wyselekcjonowane terapie łączące innowacyjność, bezpieczeństwo i
            spektakularne efekty, dobrane indywidualnie do potrzeb Twojej skóry.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-stone-900 p-8 rounded-3xl shadow-sm border border-stone-800 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-gold mb-6">
<iconify-icon className="text-2xl" icon="solar:hourglass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white tracking-tight mb-3">
              Zabiegi Anti-Aging
            </h3>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
              Zaawansowane terapie spowalniające procesy starzenia, wygładzające
              zmarszczki i przywracające gęstość skóry za pomocą stymulatorów
              tkankowych i toksyny botulinowej.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl shadow-sm border border-stone-800 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-gold mb-6">
<iconify-icon className="text-2xl" icon="solar:face-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white tracking-tight mb-3">
              Modelowanie twarzy
            </h3>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
              Poprawa wolumetrii, podkreślenie kości policzkowych, linii żuchwy
              oraz konturowanie ust przy użyciu kwasu hialuronowego najwyższej
              jakości.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl shadow-sm border border-stone-800 hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-gold mb-6">
<iconify-icon className="text-2xl" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white tracking-tight mb-3">
              Laseroterapia
            </h3>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
              Precyzyjne usuwanie przebarwień, blizn, zamykanie naczynek i
              fotoodmładzanie przy użyciu certyfikowanych platform laserowych.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl shadow-sm border border-stone-800 hover:shadow-md transition-shadow duration-300 lg:col-span-1 sm:col-span-2 lg:col-start-auto">
<div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-gold mb-6">
<iconify-icon className="text-2xl" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white tracking-tight mb-3">
              Kosmetologia Hi-Tech
            </h3>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6">
              Bezinwazyjny lifting, ujędrnianie skóry i redukcja tkanki
              tłuszczowej wykorzystujące fale radiowe, ultradźwięki i
              technologie HIFU.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl shadow-sm border border-stone-800 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-2">
<div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-gold mb-6">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-white tracking-tight mb-3">
              Rewitalizacja skóry
            </h3>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6 max-w-2xl">
              Głębokie nawilżenie i odżywienie skóry dzięki mezoterapii igłowej,
              peelingom chemicznym i osoczu bogatopłytkowemu. Kompleksowe
              podeście do zdrowia skóry, które przywraca jej naturalny blask,
              wyrównuje koloryt i zapobiega przedwczesnemu starzeniu w
              całkowicie komfortowych warunkach.
            </p>
<a className="inline-flex items-center text-gold font-medium text-sm transition-colors hover:text-white" data-tally-layout="modal" data-tally-open="yPvkY0" data-tally-width="700" href="https://tally.so/r/yPvkY0" target="_blank">
              Skonsultuj się z ekspertem
              <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-stone-900">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="mb-16">
<h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Dlaczego warto nam zaufać?
          </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="border-t border-stone-800 pt-6">
<iconify-icon className="text-3xl text-gold mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">
              Najwyższe standardy medyczne
            </h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">
              Rygorystyczne procedury higieniczne i aseptyczne gwarantujące
              pełne bezpieczeństwo każdego zabiegu.
            </p>
</div>
<div className="border-t border-stone-800 pt-6">
<iconify-icon className="text-3xl text-gold mb-4" icon="solar:diamond-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">
              Preparaty premium
            </h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">
              Pracujemy wyłącznie na certyfikowanych, sprawdzonych klinicznie
              produktach renomowanych światowych marek.
            </p>
</div>
<div className="border-t border-stone-800 pt-6">
<iconify-icon className="text-3xl text-gold mb-4" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">
              Indywidualne protokoły
            </h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">
              Każdy plan leczenia jest szyty na miarę, poprzedzony wnikliwą
              konsultacją i diagnozą potrzeb skóry.
            </p>
</div>
<div className="border-t border-stone-800 pt-6">
<iconify-icon className="text-3xl text-gold mb-4" icon="solar:incognito-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">
              Dyskrecja i komfort
            </h3>
<p className="text-sm text-stone-400 font-light leading-relaxed">
              Zapewniamy kameralną atmosferę, pełną poufność oraz luksusowe
              wnętrza sprzyjające relaksowi.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-stone-950" id="opinie">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight text-center mb-16">
          Zaufanie, którym obdarzyły nas Pacjentki
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 shadow-sm relative">
<iconify-icon className="text-4xl text-stone-800 absolute top-6 right-8" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex space-x-1 mb-4 text-gold text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6 italic">
              "Pani Doktor to profesjonalistka w każdym calu. Miałam obawy przed
              zabiegami medycyny estetycznej, bałam się nienaturalnego efektu.
              Dziś moja skóra wygląda o 10 lat młodziej, jest promienna, a
              znajomi pytają, czy byłam na długim urlopie. Pełne zaufanie."
            </p>
<p className="text-xs font-medium text-white uppercase tracking-wide">
              Magdalena W.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 shadow-sm relative">
<iconify-icon className="text-4xl text-stone-800 absolute top-6 right-8" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex space-x-1 mb-4 text-gold text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6 italic">
              "Ekskluzywne miejsce na mapie Warszawy. Atmosfera sprzyja
              relaksowi, a podejście do pacjenta jest na absolutnie najwyższym
              poziomie. Zabieg powiększania ust wykonany tak perfekcyjnie i
              delikatnie, że efekt jest zmysłowy, ale w stu procentach
              naturalny."
            </p>
<p className="text-xs font-medium text-white uppercase tracking-wide">
              Anna S.
            </p>
</div>
<div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 shadow-sm relative">
<iconify-icon className="text-4xl text-stone-800 absolute top-6 right-8" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex space-x-1 mb-4 text-gold text-sm">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6 italic">
              "Korzystam z terapii laserowych i stymulatorów tkankowych. Pani
              Doktor ułożyła dla mnie indywidualny plan, który konsekwentnie
              realizujemy. Higiena, dbałość o detal i to ciepło, z jakim wita
              pacjentki... Nie zamieniłabym tego gabinetu na żaden inny."
            </p>
<p className="text-xs font-medium text-white uppercase tracking-wide">
              Karolina M.
            </p>
</div>
</div>
</div>
</section>
<footer className="bg-black pt-24 pb-12 border-t border-stone-800" id="kontakt">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="bg-[#1C1C1C] rounded-[2.5rem] p-10 md:p-16 text-center border border-stone-800 mb-20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
<h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 relative z-10">
            Zrób pierwszy krok ku lepszej wersji siebie.
          </h2>
<p className="text-stone-400 text-sm sm:text-base font-light mb-10 max-w-2xl mx-auto relative z-10">
            Niezależnie od tego, czy potrzebujesz odświeżenia skóry, czy
            kompleksowej terapii anti-aging, jesteśmy tu, aby Ci pomóc.
          </p>
<a className="inline-block bg-gold text-white px-10 py-5 rounded-full text-center hover-bg-gold-dark transition-all duration-300 font-medium text-sm sm:text-base relative z-10" data-tally-layout="modal" data-tally-open="yPvkY0" data-tally-width="700" href="https://tally.so/r/yPvkY0" target="_blank">
            Zarezerwuj termin
          </a>
</div>
<div className="grid md:grid-cols-12 gap-12 lg:gap-8 border-b border-stone-800 pb-16">
<div className="md:col-span-4">
<span className="font-serif tracking-tighter text-2xl font-medium text-white block mb-6">
              G A B I N E T   M E D Y C Z N Y
            </span>
<p className="text-stone-400 text-sm font-light leading-relaxed mb-6 pr-4">
              Ekskluzywna Klinika Medycyny Estetycznej w Warszawie. Gwarancja
              bezpieczeństwa, dyskrecji i najwyższych standardów opieki.
            </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-gold transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-gold transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-4 lg:col-span-3 lg:col-start-6">
<h4 className="text-white text-sm font-medium mb-6 uppercase tracking-wider">
              Kontakt
            </h4>
<ul className="space-y-4">
<li className="flex items-start space-x-3 text-stone-400 text-sm font-light">
<iconify-icon className="text-gold text-xl shrink-0 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>
                  ul. Przykładowa 12/4
                  <br/>
                  00-001 Warszawa, Śródmieście
                </span>
</li>
<li className="flex items-center space-x-3 text-stone-400 text-sm font-light">
<iconify-icon className="text-gold text-xl shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span>+48 500 000 000</span>
</li>
<li className="flex items-center space-x-3 text-stone-400 text-sm font-light">
<iconify-icon className="text-gold text-xl shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span>kontakt@klinikagrazyna.pl</span>
</li>
</ul>
</div>
<div className="md:col-span-4 lg:col-span-3">
<h4 className="text-white text-sm font-medium mb-6 uppercase tracking-wider">
              Godziny otwarcia
            </h4>
<ul className="space-y-3 text-sm text-stone-400 font-light">
<li className="flex justify-between">
<span>Poniedziałek - Piątek</span>
<span>09:00 - 20:00</span>
</li>
<li className="flex justify-between">
<span>Sobota</span>
<span>10:00 - 15:00</span>
</li>
<li className="flex justify-between text-stone-500">
<span>Niedziela</span>
<span>Zamknięte</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light">
<p>© 2024 Gabinet Medyczny. Wszelkie prawa zastrzeżone.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-stone-300 transition-colors" href="#">
              Polityka prywatności
            </a>
<a className="hover:text-stone-300 transition-colors" href="#">
              Regulamin gabinetu
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
