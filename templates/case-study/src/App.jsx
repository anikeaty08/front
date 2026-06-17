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
      

<section className="relative pt-12 md:pt-24 pb-16 md:pb-24 overflow-hidden border-b border-neutral-800/50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-400 mb-5">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Case Study dostępne od zaraz
          </div>
<h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tighter font-semibold text-white leading-[1.1] mb-5 uppercase">
            To
            <span className="text-red-600">nie</span>
            są magiczne ustawienia.
            <br/>
            To jest
            <span className="relative inline-block whitespace-nowrap z-10 mt-2 mx-1">
<span className="absolute inset-y-1 -inset-x-3 bg-red-600 -z-10 transform -rotate-2 skew-x-[-8deg] rounded-sm"></span>
<span className="text-yellow-400">case study</span>
</span>
            realnej kampanii.
          </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl leading-relaxed">
            Zobacz, jak kampania Meta Ads wygenerowała
            <span className="font-medium text-yellow-400">159 leadów</span>
            ,
            <span className="font-medium text-yellow-400">70 000 zł obrotu</span>
            i koszt leada na poziomie
            <span className="text-white font-medium">13 zł</span>
            przy budżecie
            <span className="text-white font-medium">2 007 zł</span>
            .
          </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10 border-y border-neutral-800/60 py-6">
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-yellow-400">
                159
              </div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Leadów
              </div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-yellow-400">
                70k
              </div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Obrotu
              </div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-yellow-400">
                13 zł
              </div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Koszt leada
              </div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-yellow-400">
                2 007
              </div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Budżet (zł)
              </div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold tracking-tight transition-colors duration-200 whitespace-nowrap" href="#" onclick="event.preventDefault(); document.getElementById('checkout-popup').classList.remove('hidden');">
              Kup case study za
              <span className="text-yellow-400">19 zł</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 border border-neutral-800 whitespace-nowrap" href="#co-w-srodku">
              Zobacz, co dokładnie pokazuję w środku
            </a>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Nie pokazuję magicznego guzika w Meta Ads.
            </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Pokazuję kampanię, która realnie dowiozła wynik.
            </li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
              Internet jest pełen teorii. Tu dostajesz praktykę.
            </li>
</ul>
</div>

<div className="md:col-span-5 relative hidden md:block">
<div className="aspect-[4/5] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent z-10"></div>
<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold uppercase tracking-widest rounded mb-3 transform -rotate-2">
                Pełne case study dostępne za 19 zł
              </div>
</div>

<img alt="Autor case study" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47959f2f-f26c-4584-89f8-7e183dbe7122_800w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
            Większość osób szuka problemu w złym miejscu
          </h2>
<p className="text-lg text-neutral-400 mb-12">
            Kiedy kampania nie działa, większość osób zaczyna grzebać w
            ustawieniach. Zmienia targetowanie, budżet, grupy reklam,
            harmonogramy i placementy. Problem w tym, że bardzo często kampania
            nie przegrywa przez ustawienia.
            <span className="text-white font-medium">
              Przegrywa przez słabą ofertę, zły komunikat, nieprzekonującą
              kreację albo formularz, który zbiera przypadkowych ludzi.
            </span>
</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Kampania ma kliknięcia, ale nie ma leadów.
            </p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Leady są, ale niskiej jakości.
            </p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Koszt zapytania jest za wysoki.
            </p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Nie wiadomo, czy problemem jest reklama, oferta czy formularz.
            </p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Każdy mówi co innego, a Ty dalej przepalasz budżet.
            </p>
</div>
<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-red-600/10 p-2 rounded-lg shrink-0">
<iconify-icon className="text-red-500 text-2xl" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-300">
              Zmieniasz grupy docelowe, a koszty i tak rosną.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50 bg-neutral-900/20">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
            W tym case study zobaczysz, co naprawdę dowiozło wynik
          </h2>
<p className="text-neutral-400 text-lg mb-8">
            Nie dostajesz ogólnego poradnika o reklamach. Dostajesz rozbiór
            realnej kampanii: od założenia, przez kreacje, po wynik. Pokazuję,
            jakie elementy miały znaczenie, co warto analizować i jak myśleć o
            kampanii, żeby nie podejmować decyzji na ślepo.
          </p>
<div className="space-y-4">
<div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">
                Jak wyglądała struktura kampanii
              </span>
</div>
<div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Jaką rolę odegrała oferta</span>
</div>
<div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">
                Jakie komunikaty zostały użyte w reklamach
              </span>
</div>
<div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">
                Co wpływało na koszt leada
              </span>
</div>
<div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">
                Jak patrzeć na wynik bez złudzenia, że zależy od „magicznych
                ustawień”
              </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-400 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">
                Jakie błędy najczęściej psują kampanie Meta Ads
              </span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-red-600/10 blur-3xl rounded-full"></div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 relative z-10 shadow-2xl">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-1">
                  Wynik kampanii
                </div>
<div className="text-4xl font-semibold tracking-tighter text-yellow-400">
                  70 000 zł
                </div>
</div>
<iconify-icon className="text-4xl text-amber-400" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Wygenerowane leady</span>
<span className="font-medium text-white">159</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-400 w-[85%] h-full rounded-full"></div>
</div>
<div className="flex justify-between text-sm pt-2">
<span className="text-neutral-400">Budżet wydany</span>
<span className="font-medium text-white">2 007 zł</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-red-600 w-[15%] h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
          Zobacz krótkie wprowadzenie do case study
        </h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
          W kilku minutach pokażę Ci, czego możesz spodziewać się w środku i
          dlaczego ten materiał może pomóc Ci spojrzeć na swoje kampanie
          inaczej.
        </p>
<div className="aspect-video bg-neutral-900 border border-neutral-800 rounded-2xl relative flex items-center justify-center group cursor-pointer overflow-hidden shadow-2xl mb-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-900 to-neutral-900"></div>
<iconify-icon className="text-7xl text-white opacity-80 group-hover:scale-110 group-hover:text-red-500 transition-all duration-300 relative z-10" icon="solar:play-circle-linear" strokeWidth="1"></iconify-icon>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="bg-black/50 backdrop-blur text-xs px-2 py-1 rounded text-white font-medium border border-white/10">
              Wprowadzenie
            </span>
<span className="bg-black/50 backdrop-blur text-xs px-2 py-1 rounded text-white font-medium border border-white/10">
              03:45
            </span>
</div>
</div>
<a className="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-semibold tracking-tight transition-colors duration-200" href="#" onclick="event.preventDefault(); document.getElementById('checkout-popup').classList.remove('hidden');">
          Chcę zobaczyć pełne case study
        </a>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-800/50">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-16 text-center">
          Co zyskasz po przerobieniu case study?
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Zrozumiesz, co wpływa na wynik kampanii
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Zobaczysz, że Meta Ads to nie tylko ustawienia. To połączenie
              oferty, komunikatu, kreacji, formularza i jakości ruchu.
            </p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Nauczysz się patrzeć na kampanię jak marketer
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Zamiast losowo zmieniać elementy, zaczniesz analizować, gdzie
              naprawdę może leżeć problem.
            </p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Zobaczysz realne liczby
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              159 leadów, 70 000 zł obrotu, 13 zł za leada i 2 007 zł budżetu.
              Bez pustych obietnic i bez oderwanych teorii.
            </p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Porównasz to ze swoją kampanią
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Materiał pomoże Ci sprawdzić, czy Twoja kampania ma problem w
              ustawieniach, kreacji, ofercie czy formularzu.
            </p>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Dostaniesz praktyczne spojrzenie
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              To nie jest akademicka teoria. To rozbiór kampanii, która realnie
              pracowała na sprzedaż.
            </p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-colors">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-amber-400" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
              Zoptymalizujesz swój proces
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Przestaniesz tracić czas na testowanie wszystkiego na ślepo i
              zaczniesz wdrażać rozwiązania, które bezpośrednio przekładają się
              na wyniki.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50 bg-neutral-900/20">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-6">
<iconify-icon className="text-2xl text-green-500" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white mb-8">
            Dla kogo jest to case study?
          </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla przedsiębiorców, którzy samodzielnie ustawiają reklamy Meta
                Ads.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla właścicieli lokalnych firm.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla freelancerów obsługujących kampanie klientów.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla marketerów, którzy chcą lepiej rozumieć kampanie lead
                generation.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla osób, które mają już uruchomione reklamy, ale nie wiedzą, co
                poprawić.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-green-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-300 leading-relaxed">
                Dla osób, które wolą realne przykłady zamiast ogólnych
                poradników.
              </span>
</li>
</ul>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl rounded-full"></div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mb-6">
<iconify-icon className="text-2xl text-red-500" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white mb-8">
            To nie jest dla Ciebie, jeśli…
          </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5 opacity-80" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-400 leading-relaxed">
                Szukasz jednego magicznego ustawienia, które naprawi każdą
                kampanię.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5 opacity-80" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-400 leading-relaxed">
                Oczekujesz gwarancji, że skopiujesz kampanię 1:1 i uzyskasz
                identyczny wynik.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5 opacity-80" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-400 leading-relaxed">
                Nie chcesz analizować oferty, kreacji i komunikatu.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5 opacity-80" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-400 leading-relaxed">
                Interesuje Cię tylko teoria, a nie praktyka.
              </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl shrink-0 mt-0.5 opacity-80" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-neutral-400 leading-relaxed">
                Uważasz, że wynik kampanii zależy wyłącznie od kliknięcia
                odpowiedniego przycisku w Menedżerze Reklam.
              </span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 items-center mb-20">
<div className="md:col-span-5 order-2 md:order-1">
<div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-2xl relative overflow-hidden">
<img alt="Autor case study" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47959f2f-f26c-4584-89f8-7e183dbe7122_800w.png"/>
</div>
</div>
<div className="md:col-span-7 order-1 md:order-2">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
              Kto pokazuje Ci to case study?
            </h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Nazywam się Bartek i pomagam firmom zdobywać klientów online przez
              strony internetowe, Meta Ads i skuteczne komunikaty sprzedażowe.
              Pracuję z kampaniami lead generation i analizuję nie tylko
              ustawienia reklam, ale cały proces:
              <span className="text-white font-medium">
                od oferty, przez kreację, aż po jakość zapytań.
              </span>
</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
<div className="text-amber-400 mb-1">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-300">
                  Praktyka w lead generation
                </div>
</div>
<div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
<div className="text-amber-400 mb-1">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-300">
                  Praca z lokalnymi biznesami
                </div>
</div>
<div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
<div className="text-amber-400 mb-1">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-300">
                  Nacisk na realny wynik
                </div>
</div>
<div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
<div className="text-amber-400 mb-1">
<iconify-icon className="text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-300">
                  Oferta + komunikat + kampania
                </div>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto text-center bg-neutral-900/30 border border-neutral-800/50 p-8 md:p-12 rounded-2xl relative">
<iconify-icon className="absolute top-6 left-6 text-4xl text-neutral-800" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl md:text-3xl tracking-tight font-semibold text-white mb-6 relative z-10">
            Dlaczego stworzyłem ten materiał?
          </h3>
<p className="text-base md:text-lg text-neutral-400 leading-relaxed relative z-10">
            Bo zbyt wiele osób przepala budżety reklamowe, szukając problemu
            tam, gdzie go nie ma. Widzę przedsiębiorców, którzy zmieniają
            targetowanie, duplikują zestawy reklam i grzebią w detalach, a nie
            mają dobrze opisanej oferty, mocnej kreacji ani jasnego komunikatu.
            Ten materiał powstał po to, żeby pokazać kampanię od kuchni i pomóc
            Ci myśleć o reklamach bardziej strategicznie.
          </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-neutral-800/50" id="co-w-srodku">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-4">
            Co dokładnie znajduje się w środku?
          </h2>
<p className="text-neutral-400">
            Praktyczne moduły oparte na rozbiorze jednej kampanii.
          </p>
</div>
<div className="space-y-4">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
<div className="text-3xl font-bold text-neutral-800 shrink-0 select-none">
              01
            </div>
<div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Kontekst kampanii
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Zobaczysz, dla jakiego typu usługi była prowadzona kampania,
                jaki był cel i jakie założenia przyjęliśmy na starcie.
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
<div className="text-3xl font-bold text-neutral-800 shrink-0 select-none">
              02
            </div>
<div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Oferta i komunikat
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Pokazuję, dlaczego sama reklama nie wystarczy, jeśli oferta nie
                trafia w realny problem klienta.
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
<div className="text-3xl font-bold text-neutral-800 shrink-0 select-none">
              03
            </div>
<div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Kreacje reklamowe
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Omawiam, jaką rolę odegrały kreacje i dlaczego tekst oraz
                grafika muszą prowadzić do konkretnej decyzji.
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
<div className="text-3xl font-bold text-neutral-800 shrink-0 select-none">
              04
            </div>
<div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Formularz leadowy
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Zobaczysz, jak formularz wpływa na ilość i jakość zapytań.
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
<div className="text-3xl font-bold text-amber-500/30 shrink-0 select-none">
              05
            </div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Wyniki kampanii
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Rozbicie liczb: leady, koszt leada, budżet, obrót i wnioski.
              </p>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
<div className="text-3xl font-bold text-red-600/30 shrink-0 select-none">
              06
            </div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Najważniejsze lekcje
              </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                Co warto wyciągnąć z tej kampanii i jak możesz użyć tych
                wniosków u siebie.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50 bg-neutral-900/20">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
          Zobacz fragment materiału
        </h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
          W darmowym fragmencie zobaczysz, jak podchodzę do analizy kampanii i
          na co zwracam uwagę, zanim zacznę zmieniać ustawienia.
        </p>
<div className="aspect-[16/9] md:aspect-[21/9] bg-neutral-900 border border-neutral-800 rounded-2xl mb-10 overflow-hidden relative shadow-2xl">
<div className="absolute inset-0 bg-neutral-950/50 flex flex-col items-center justify-center">
<iconify-icon className="text-4xl text-neutral-500 mb-4" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">
              Zablokowana zawartość
            </span>
<a className="inline-flex justify-center items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200" href="#" onclick="event.preventDefault(); document.getElementById('checkout-popup').classList.remove('hidden');">
              Odblokuj pełne case study
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
            Ile może kosztować Cię dalsze zgadywanie?
          </h2>
<p className="text-lg text-neutral-400 leading-relaxed">
            Jeśli samodzielnie prowadzisz kampanie, każda błędna decyzja
            kosztuje. Nie tylko pieniądze wydane na reklamę, ale też czas,
            frustrację i utracone zapytania. Za 19 zł możesz zobaczyć realny
            przykład kampanii, która dowiozła wynik, i porównać go ze swoim
            podejściem.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
<div className="text-neutral-500 text-sm font-medium uppercase tracking-widest mb-4">
              Opcja 1
            </div>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              Dalej zgadujesz
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                zmieniasz ustawienia bez pewności
              </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                przepalasz budżet
              </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm">
<iconify-icon className="text-red-500 text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                nie wiesz, czy problemem jest oferta, kreacja czy kampania
              </li>
</ul>
</div>

<div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 relative overflow-hidden ring-1 ring-white/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
<div className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-4">
              Opcja 2
            </div>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
              Oglądasz case study
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-amber-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                widzisz realną kampanię
              </li>
<li className="flex items-start gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-amber-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                analizujesz konkretne liczby
              </li>
<li className="flex items-start gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-amber-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                rozumiesz, co mogło wpłynąć na wynik
              </li>
<li className="flex items-start gap-3 text-neutral-300 text-sm">
<iconify-icon className="text-amber-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                wyciągasz wnioski do własnych kampanii
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800/50 relative bg-neutral-950" id="cennik">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white mb-6">
            Odbierz dostęp do pełnego case study
          </h2>
<p className="text-lg text-neutral-400 leading-relaxed">
            Praktyczna wiedza za ułamek budżetu, który prawdopodobnie przepalisz
            na zgadywanie i testowanie na ślepo.
          </p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl ring-1 ring-white/5 mt-12">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-xs font-semibold text-red-500 uppercase tracking-widest mb-6">
              Ograniczona czasowo oferta
            </div>
<div className="flex items-end justify-center gap-4 mb-4">
<span className="text-6xl md:text-7xl font-semibold tracking-tighter text-yellow-400">
                19 zł
              </span>
<span className="text-2xl text-neutral-500 line-through mb-2 font-medium">
                99 zł
              </span>
</div>
<p className="text-neutral-400 mb-10">
              Płatność jednorazowa. Natychmiastowy dostęp do materiału wideo.
            </p>
<a className="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-xl font-semibold tracking-tight transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto text-lg shadow-lg shadow-red-600/20 whitespace-nowrap" href="#" onclick="event.preventDefault(); document.getElementById('checkout-popup').classList.remove('hidden');">
              Kup case study za
              <span className="text-yellow-400">19 zł</span>
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span>Bezpieczna płatność</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:flash-linear"></iconify-icon>
<span>Natychmiastowy dostęp</span>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-neutral-800/50 bg-neutral-950 text-center">
<div className="max-w-6xl mx-auto px-6">
<p className="text-neutral-500 text-sm">
          © 2024. Wszelkie prawa zastrzeżone.
        </p>
<div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-300 transition-colors" href="#">
            Regulamin
          </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
            Polityka prywatności
          </a>
<a className="hover:text-neutral-300 transition-colors" href="#">
            Kontakt
          </a>
</div>
</div>
</footer>
<div className="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" id="checkout-popup">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors duration-200" onclick="document.getElementById('checkout-popup').classList.add('hidden')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="mb-6 text-center">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">
            Odbierz dostęp
          </h3>
<p className="text-sm text-neutral-400">
            Wypełnij poniższe dane, aby opłacić i odblokować case study.
          </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); const form = event.target; const btn = form.querySelector('button'); const originalText = btn.innerHTML; btn.innerHTML = 'Przetwarzanie...'; btn.disabled = true; fetch('https://woolf1717.app.n8n.cloud/webhook/005d5373-672d-44a8-8800-73857cdd914c', { method: 'POST', body: new FormData(form) }).then(() =&gt; { alert('Dane zostały pomyślnie wysłane!'); document.getElementById('checkout-popup').classList.add('hidden'); form.reset(); }).catch(() =&gt; { alert('Wystąpił błąd. Spróbuj ponownie.'); }).finally(() =&gt; { btn.innerHTML = originalText; btn.disabled = false; });">
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1">
              Imię
            </label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" name="name" placeholder="Twoje imię" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1">
              Adres e-mail
            </label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" name="email" placeholder="Twój adres e-mail" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-300 mb-1">
              Numer telefonu
            </label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors" name="phone" placeholder="Twój numer telefonu" required="" type="tel"/>
</div>
<div className="pt-2">
<button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2" type="submit">
              Przejdź do płatności za
              <span className="text-yellow-400">19 zł</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="text-xs text-neutral-500 text-center mt-4">
            Bezpieczna płatność. Natychmiastowy dostęp do wideo.
          </p>
</form>
</div>
</div>

    </>
  );
}
