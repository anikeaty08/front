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



      // Initialize Lucide icons
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
      

<div className="fixed top-0 left-0 w-full md:w-[45vw] h-screen bg-floral-left pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-full md:w-[50vw] h-[70vh] bg-floral-right pointer-events-none z-0"></div>
<main className="relative z-10 flex-grow">

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 relative">
<div className="max-w-4xl mx-auto space-y-8 mt-12">
<div className="space-y-4">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-stone-200 uppercase leading-tight">
              Proces Światła
              <br/>
              i Cienia
            </h1>
<p className="text-xl md:text-2xl font-serif font-normal text-stone-300 italic">
              Symboliczny rytuał przejścia zapisany w obrazie
            </p>
</div>
<p className="text-lg font-light text-stone-400 max-w-xl mx-auto">
            Dla osób stojących na progu zmiany, zakończenia lub nowego początku.
          </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase border border-stone-500 text-stone-200 hover:bg-stone-200 hover:text-zinc-950 transition duration-500 font-medium w-full sm:w-auto" href="#kontakt">
              Umów spotkanie
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase text-stone-400 hover:text-stone-200 transition duration-500 font-medium w-full sm:w-auto group" href="#kontakt">
<span className="border-b border-transparent group-hover:border-stone-200 pb-1 transition-colors duration-500">
                Zapytaj o proces
              </span>
</a>
</div>
</div>
<div className="w-full max-w-3xl mx-auto mt-24 aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
<img alt="Fragment twarzy w cieniu" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/20"></div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-2xl mx-auto text-center space-y-12">
<p className="text-2xl md:text-3xl font-serif font-normal text-stone-300 leading-relaxed tracking-tight">
            "Być może jesteś właśnie w miejscu pomiędzy..."
          </p>
<div className="flex justify-center py-8">
<img alt="Cień" className="w-32 h-48 object-cover opacity-80" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-lg md:text-xl font-light text-stone-400">
            To próg.
            <br/>
            Czas końca i początku.
          </p>
</div>
</section>

<section className="py-32 px-6 bg-zinc-900/30 border-y border-zinc-900">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-200 mb-6">
              Czym jest proces?
            </h2>
<div className="w-px h-12 bg-zinc-800 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<i className="w-6 h-6 text-stone-500 mx-auto md:mx-0" data-lucide="book-open" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-300">
                Historie w ciele
              </h3>
<p className="text-lg font-light text-stone-400">
                Pamięć doświadczeń, emocji i dróg, które doprowadziły Cię do
                tego momentu, zapisana w gestach i spojrzeniu.
              </p>
</div>
<div className="space-y-4">
<i className="w-6 h-6 text-stone-500 mx-auto md:mx-0" data-lucide="eclipse" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-300">
                Światło i Cień
              </h3>
<p className="text-lg font-light text-stone-400">
                Dwie nieodłączne części ludzkiej natury. Odkrywamy to, co
                widoczne, i to, co dotąd pozostawało w ukryciu.
              </p>
</div>
<div className="space-y-4">
<i className="w-6 h-6 text-stone-500 mx-auto md:mx-0" data-lucide="image" strokeWidth="1.5"></i>
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-300">
                Świadectwo
              </h3>
<p className="text-lg font-light text-stone-400">
                Symboliczny portret staje się fizycznym dowodem Twojej
                wewnętrznej przemiany i akceptacji.
              </p>
</div>
</div>
<div className="mt-24 text-center">
<p className="text-xl font-serif font-normal text-stone-300 italic tracking-tight">
              Doświadczenie zapisane w obrazie.
            </p>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-200 mb-20 text-center">
            Jak przebiega proces?
          </h2>
<div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-stone-500 font-serif shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#09090b] z-10">
                1
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-6 space-y-2 text-left md:group-odd:text-right">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200">
                  Spotkanie
                </h3>
<p className="text-lg font-light text-stone-400">
                  Herbata i rozmowa wprowadzająca.
                </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-stone-500 font-serif shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#09090b] z-10">
                2
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-6 space-y-2 text-left md:group-odd:text-right">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200">
                  Odkrywanie
                </h3>
<p className="text-lg font-light text-stone-400">
                  Twoja historia, wartości i symbole.
                </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-stone-500 font-serif shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#09090b] z-10">
                3
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-6 space-y-2 text-left md:group-odd:text-right">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200">
                  Fotografowanie
                </h3>
<p className="text-lg font-light text-stone-400">
                  Obecność, przestrzeń i spontaniczność.
                </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-stone-500 font-serif shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#09090b] z-10">
                4
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-6 space-y-2 text-left md:group-odd:text-right">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200">
                  Tworzenie Artefaktu
                </h3>
<p className="text-lg font-light text-stone-400">
                  Nadawanie formy obrazom i znaczeniom.
                </p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-stone-500 font-serif shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#09090b] z-10">
                5
              </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 md:p-6 space-y-2 text-left md:group-odd:text-right">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200">
                  Integracja
                </h3>
<p className="text-lg font-light text-stone-400">
                  Ponowne spotkanie i odczytanie obrazów.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-stone-500 mb-4">
              Co otrzymasz
            </p>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-200">
              Artefakt Przejścia
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="group border border-zinc-800/60 bg-zinc-900/20 p-8 hover:border-stone-700 hover:bg-zinc-900/40 transition-all duration-500">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200 mb-4 group-hover:text-white transition-colors">
                Symboliczny Portret Artystyczny
              </h3>
<p className="text-lg font-light text-stone-400 leading-relaxed">
                Główny obraz stanowiący esencję Twojego procesu.
              </p>
</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 p-8 hover:border-stone-700 hover:bg-zinc-900/40 transition-all duration-500">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200 mb-4 group-hover:text-white transition-colors">
                Portrety Światła
              </h3>
<p className="text-lg font-light text-stone-400 leading-relaxed">
                Zapis tego, co w Tobie jasne, widoczne i gotowe na rozwój.
              </p>
</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 p-8 hover:border-stone-700 hover:bg-zinc-900/40 transition-all duration-500">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200 mb-4 group-hover:text-white transition-colors">
                Portrety Cienia
              </h3>
<p className="text-lg font-light text-stone-400 leading-relaxed">
                Uchwycenie obszarów ukrytych, wymagających integracji i uwagi.
              </p>
</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 p-8 hover:border-stone-700 hover:bg-zinc-900/40 transition-all duration-500">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200 mb-4 group-hover:text-white transition-colors">
                Przesłanie Portretu
              </h3>
<p className="text-lg font-light text-stone-400 leading-relaxed">
                Słowa, które wyłoniły się podczas procesu, zapisane jako
                drogowskaz.
              </p>
</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 p-8 hover:border-stone-700 hover:bg-zinc-900/40 transition-all duration-500 md:col-span-2 lg:col-span-1">
<h3 className="text-xl font-serif font-medium tracking-tight text-stone-200 mb-4 group-hover:text-white transition-colors">
                Notatki do Dalszej Drogi
              </h3>
<p className="text-lg font-light text-stone-400 leading-relaxed">
                Zestaw myśli i symboli otwierających kolejny etap.
              </p>
</div>
</div>
<div className="text-center">
<p className="text-xl font-serif font-normal text-stone-300 tracking-tight italic">
              Świadectwo przemiany, które pozostaje z Tobą długo po zakończeniu
              procesu.
            </p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-900 bg-zinc-900/10">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 space-y-8">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-200">
              Integracja Obrazów
            </h2>
<div className="space-y-6 text-lg font-light text-stone-400">
<p>
                To odróżnia ten proces od zwykłej sesji fotograficznej. Nie
                kończymy na zrobieniu zdjęć.
              </p>
<ul className="space-y-4 border-l border-zinc-800 pl-6">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-stone-600 mt-1 shrink-0" data-lucide="eye" strokeWidth="1.5"></i>
<span>Wspólne oglądanie powstałych fotografii.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-stone-600 mt-1 shrink-0" data-lucide="search" strokeWidth="1.5"></i>
<span>Odkrywanie ukrytych znaczeń i metafor.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-stone-600 mt-1 shrink-0" data-lucide="message-square" strokeWidth="1.5"></i>
<span>Nazwanie tego, co zostało w Tobie zobaczone.</span>
</li>
</ul>
</div>
</div>
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] relative">
<img alt="Rozłożone fotografie" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-transparent opacity-80"></div>
</div>
</div>
</section>

<section className="py-40 px-6 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Las, stare drzewa, światło" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-950/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
<p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-stone-500 mb-4">
            Miejsce Spotkania
          </p>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-100">
            Warkocz — krajobraz procesu
          </h2>
<p className="text-lg md:text-xl font-light text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Nie jest to zwykła lokalizacja. To przestrzeń transformacji. Stare
            drzewa, zarośnięte ścieżki, dzikie róże i światło przebijające
            między gałęziami tworzą schronienie dla Twojej historii.
          </p>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
<div className="w-full md:w-5/12 aspect-[3/4] relative">
<img alt="Portret autorki" className="w-full h-full object-cover opacity-90" src="https://i.postimg.cc/V6j27rzm/untitled-5013-Edit-2.jpg"/>

<div className="absolute -inset-4 bg-rose-950/40 border border-rose-900/50 z-[-1] translate-x-4 translate-y-4"></div>
</div>
<div className="w-full md:w-7/12 space-y-8">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-stone-200">
              O mnie
            </h2>
<div className="space-y-6 text-lg font-light text-stone-400">
<p>
                Od zawsze fascynowało mnie to, co ukryte pod powierzchnią.
                Historie, które nosimy w sobie. Symbole, które pojawiają się w
                naszym życiu. Sposób, w jaki ciało wyraża to, czego nie
                potrafimy jeszcze nazwać słowami.
              </p>
<p>
                Przez lata pracowałam z obrazem i ciałem, obserwując, że
                fotografia potrafi pokazać znacznie więcej niż wygląd człowieka.
                Proces Światła i Cienia narodził się z połączenia mojej
                artystycznej drogi i wrażliwości na symbole. Jest również
                wyrazem mojego przekonania, że ważne momenty życia zasługują na
                świadome przeżycie i zapamiętanie.
              </p>
<p>
                Wierzę, że każdy człowiek nosi w sobie historię wartą
                opowiedzenia. Moją rolą jest stworzenie przestrzeni, w której ta
                historia może zostać zobaczona, nazwana i zapisana w obrazie.
                Podczas spotkania wnoszę uważność, obecność i artystyczne
                spojrzenie, które pomaga dostrzec to, co często pozostaje
                niezauważone.
              </p>
<p className="text-xl font-serif font-normal text-stone-200 tracking-tight italic pt-6 border-t border-zinc-900">
                "Bo czasem jedno zdjęcie potrafi powiedzieć więcej niż wiele
                słów, a jeden obraz może stać się świadectwem całego etapu
                życia."
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-900/20 border-y border-zinc-900">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-serif font-medium tracking-tight text-stone-200 mb-16 text-center">
            Informacje Praktyczne
          </h2>
<div className="space-y-0 border-t border-zinc-800 text-lg">

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Czas trwania
              </div>
<div className="sm:w-2/3 font-light text-stone-300">
                Ok. 3-4 godziny (część fotograficzna) + 1.5 godziny (integracja)
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Lokalizacja
              </div>
<div className="sm:w-2/3 font-light text-stone-300">
                Przestrzeń "Warkocz" (dokładny adres po rezerwacji)
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Dojazd
              </div>
<div className="sm:w-2/3 font-light text-stone-300">
                Zapewniony parking. Możliwy odbiór ze stacji PKP.
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Spotkanie integracyjne
              </div>
<div className="sm:w-2/3 font-light text-stone-300">
                Online lub na żywo, 2-3 tygodnie po procesie.
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Wartość procesu
              </div>
<div className="sm:w-2/3 font-light text-stone-200 font-medium">
                2500 PLN
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors px-4 -mx-4 group">
<div className="sm:w-1/3 text-stone-500 text-sm tracking-widest uppercase font-medium mb-2 sm:mb-0 group-hover:text-stone-400 transition-colors">
                Rezerwacja
              </div>
<div className="sm:w-2/3 font-light text-stone-300">
                Wymagany zadatek 500 PLN. Reszta płatna w dniu procesu.
              </div>
</div>
</div>
</div>
</section>

<section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-32 relative" id="kontakt">
<div className="max-w-2xl mx-auto space-y-12 relative z-10">
<i className="w-8 h-8 text-stone-600 mx-auto" data-lucide="feather" strokeWidth="1.5"></i>
<p className="text-2xl md:text-3xl font-serif font-normal text-stone-200 tracking-tight leading-relaxed">
            Jeśli czujesz, że stoisz na progu zmiany, być może to moment, aby
            zatrzymać się i zobaczyć własną historię w nowym świetle.
          </p>
<div className="pt-8">
<a className="inline-flex items-center justify-center px-10 py-5 bg-stone-200 text-zinc-950 text-sm tracking-widest uppercase hover:bg-white transition duration-300 font-medium group" href="mailto:kontakt@przyklad.pl">
              Napisz do mnie
              <i className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
<i className="w-96 h-96 text-stone-100" data-lucide="sun-moon" strokeWidth="0.5"></i>
</div>
</section>
</main>
<footer className="py-8 text-center border-t border-zinc-900 bg-zinc-950 relative z-10 pb-24">
<p className="text-xs font-light text-stone-600 tracking-wider">
        © 2024 Proces Światła i Cienia. Wszelkie prawa zastrzeżone.
      </p>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 z-50 py-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]" id="sticky-bar">
<div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between">
<p className="hidden sm:block text-stone-200 font-serif text-lg md:text-xl tracking-tight">
          Umów się na rozmowę
        </p>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase bg-stone-200 text-zinc-950 hover:bg-white transition duration-300 font-medium" onclick="document.getElementById('booking-modal').classList.remove('hidden')">
          Zarezerwuj termin
        </button>
</div>
</div>
<div className="fixed inset-0 z-[60] bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center hidden p-4" id="booking-modal">
<div className="bg-zinc-900 border border-zinc-800 p-8 w-full max-w-md relative shadow-2xl">
<button className="absolute top-4 right-4 text-stone-500 hover:text-stone-300 transition-colors" onclick="document.getElementById('booking-modal').classList.add('hidden')" type="button">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h3 className="text-2xl font-serif font-medium tracking-tight text-stone-200 mb-6">
          Zarezerwuj termin
        </h3>
<form className="space-y-4" onsubmit="event.preventDefault(); this.closest('#booking-modal').classList.add('hidden'); alert('Dziękujemy za rezerwację! Skontaktujemy się z Tobą.');">
<div>
<label className="block text-sm font-light text-stone-400 mb-1" htmlFor="modal-name">
              Imię
            </label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-stone-200 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors" id="modal-name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-light text-stone-400 mb-1" htmlFor="modal-email">
              E-mail
            </label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-stone-200 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors" id="modal-email" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-light text-stone-400 mb-1" htmlFor="modal-phone">
              Numer telefonu
            </label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-stone-200 px-4 py-3 focus:outline-none focus:border-stone-500 transition-colors" id="modal-phone" required="" type="tel"/>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1.5 shrink-0 w-4 h-4 bg-zinc-950 border-zinc-800 text-stone-500 focus:ring-stone-500 focus:ring-offset-zinc-900 rounded-sm" id="modal-consent" required="" type="checkbox"/>
<label className="text-xs font-light text-stone-400 leading-relaxed cursor-pointer" htmlFor="modal-consent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych i kontaktowych.
            </label>
</div>
<div className="pt-4">
<button className="w-full inline-flex items-center justify-center px-8 py-4 bg-stone-200 text-zinc-950 text-sm tracking-widest uppercase hover:bg-white transition duration-300 font-medium" type="submit">
              Zarezerwuj termin
            </button>
</div>
</form>
</div>
</div>

    </>
  );
}
