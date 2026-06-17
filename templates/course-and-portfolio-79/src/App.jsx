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
    


      document.addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch('https://hooks.zapier.com/hooks/catch/27809803/43iim0q/', {
          method: 'POST',
          body: formData
        })
        .then(() => {
          alert('Wiadomość została wysłana!');
          form.reset();
          const modal = document.getElementById('consultationModal');
          if(modal) modal.classList.add('hidden');
        })
        .catch(error => {
          console.error('Błąd:', error);
          alert('Wystąpił błąd podczas wysyłania.');
        });
      });
    
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
      

<header className="bg-[#031722] border-b border-white/5 py-8 px-6 lg:px-12 relative overflow-hidden min-h-screen flex flex-col">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/gcyd65u2ve?seo=false&amp;videoFoam=false&amp;autoPlay=true&amp;loop=true&amp;endVideoBehavior=loop&amp;muted=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;playButton=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenButton=false" title="Video Background"></iframe>

</div>

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#42e1ec]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="flex-1 flex flex-col w-full max-w-7xl mx-auto relative z-20">
<div className="flex justify-between items-center mb-8 lg:mb-12 w-full">
<div className="text-[#8ca6b5] uppercase tracking-widest text-base font-medium">
            Martyna Włodarczyk
          </div>
<div className="text-[#42e1ec]">
<i className="w-8 h-8" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex-1 flex flex-col justify-center pb-20 w-full items-start text-left">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight uppercase leading-tight mb-8 max-w-5xl text-white drop-shadow-2xl">
            Marketing, który
            <span className="text-[#42e1ec]">rozwala system</span>
</h1>
<p className="text-lg text-[#8ca6b5] max-w-2xl mb-12 font-normal">
            Poznaj sprawdzone metody i dołącz do grona osób, które już
            zrewolucjonizowały swoją ścieżkę kariery.
          </p>
<button className="bg-[#42e1ec] text-[#031722] px-12 py-5 mt-4 rounded font-semibold text-xl uppercase tracking-wide hover:bg-[#2bc9d4] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(66,225,236,0.4)] relative z-20">
            Dołącz Teraz
          </button>
</div>
</div>
</header>
<style className="wistia_injected_style" id="wistia_22_style" type="text/css">
      @font-face {
      font-family: 'WistiaPlayerInterNumbersSemiBold';
      font-feature-settings: 'tnum' 1;
      src: url(data:application/x-font-woff;charset=utf-8;base64,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);
      }
    </style>
<style className="wistia_injected_style" id="wistia_22_style" type="text/css">
      @font-face {
      font-family: 'WistiaPlayerInterNumbersSemiBold';
      font-feature-settings: 'tnum' 1;
      src: url(data:application/x-font-woff;charset=utf-8;base64,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);
      }
    </style>
<style className="wistia_injected_style" id="wistia_22_style" type="text/css">
      @font-face {
      font-family: 'WistiaPlayerInterNumbersSemiBold';
      font-feature-settings: 'tnum' 1;
      src: url(data:application/x-font-woff;charset=utf-8;base64,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);
      }
    </style>
<style className="wistia_injected_style" id="wistia_22_style" type="text/css">
      @font-face {
      font-family: 'WistiaPlayerInterNumbersSemiBold';
      font-feature-settings: 'tnum' 1;
      src: url(data:application/x-font-woff;charset=utf-8;base64,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);
      }
    </style>
<section className="bg-[#031722] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white uppercase mb-4">
            Zobacz, jak to działa
          </h2>
<p className="text-xl text-[#42e1ec] font-medium mb-8">
            Odkryj kulisy naszego procesu
          </p>
<div className="text-lg text-[#8ca6b5] space-y-6 leading-relaxed">
<p className="">
              Przygotowaliśmy dla Ciebie wideo, które pokazuje, jak w praktyce
              wygląda nauka w naszym programie. Skupiamy się na sprawdzonych
              rozwiązaniach, które przynoszą realne efekty i pomagają
              błyskawicznie osiągnąć wyznaczone cele.
            </p>
<p className="">
              Obejrzyj materiał, by zapoznać się z najważniejszymi elementami i
              przekonać się, czy to odpowiedni krok dla Twojego rozwoju i
              kariery. Nie czekaj, zrób pierwszy krok już teraz.
            </p>
</div>
</div>
<div className="relative w-full aspect-video rounded overflow-hidden shadow-2xl border border-white/10 bg-[#062130]">
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute inset-0 w-full h-full" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/gcyd65u2ve?seo=false&amp;videoFoam=false" title="Wideo promocyjne"></iframe>

</div>
</div>
</section>

<section className="bg-[#062130] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white text-center uppercase mb-16">
          Moje Kursy
        </h2>
<div className="flex items-center justify-center gap-4 lg:gap-12">
<button className="text-[#42e1ec] hover:text-white transition-colors p-2">
<i className="w-10 h-10" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="bg-[#031722] border border-[#42e1ec]/30 p-10 lg:p-16 rounded w-full max-w-2xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#42e1ec] to-transparent opacity-50"></div>
<i className="w-16 h-16 text-[#42e1ec] mb-8" data-lucide="monitor-play" strokeWidth="1.5"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6 uppercase">
              Masterclass Designu
            </h3>
<p className="text-lg text-[#8ca6b5] mb-10">
              Kompleksowy program przygotowujący do wejścia na wyższy poziom
              projektowania.
            </p>
<button className="border border-[#42e1ec] text-[#42e1ec] px-8 py-3 uppercase text-base font-medium hover:bg-[#42e1ec]/10 transition-colors">
              Dlaczego warto!
            </button>
</div>
<button className="text-[#42e1ec] hover:text-white transition-colors p-2">
<i className="w-10 h-10" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="bg-[#031722] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white text-center uppercase mb-16">
          Darmowe Produkty
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center p-6">
<div className="w-20 h-20 rounded-full bg-[#062130] flex items-center justify-center mb-6 border border-[#42e1ec]/20">
<i className="w-8 h-8 text-[#42e1ec]" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">
              E-book Startowy
            </h3>
<p className="text-lg text-[#8ca6b5]">
              Podstawy, które musisz znać zanim zaczniesz.
            </p>
</div>

<div className="flex flex-col items-center text-center p-6">
<div className="w-20 h-20 rounded-full bg-[#062130] flex items-center justify-center mb-6 border border-[#42e1ec]/20">
<i className="w-8 h-8 text-[#42e1ec]" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">
              Szablony UI
            </h3>
<p className="text-lg text-[#8ca6b5]">
              Gotowe elementy do wykorzystania w projektach.
            </p>
</div>

<div className="flex flex-col items-center text-center p-6">
<div className="w-20 h-20 rounded-full bg-[#062130] flex items-center justify-center mb-6 border border-[#42e1ec]/20">
<i className="w-8 h-8 text-[#42e1ec]" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">
              Zestaw Pędzli
            </h3>
<p className="text-lg text-[#8ca6b5]">
              Ekskluzywne narzędzia dla cyfrowych artystów.
            </p>
</div>

<div className="flex flex-col items-center text-center p-6">
<div className="w-20 h-20 rounded-full bg-[#062130] flex items-center justify-center mb-6 border border-[#42e1ec]/20">
<i className="w-8 h-8 text-[#42e1ec]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">
              Checklista
            </h3>
<p className="text-lg text-[#8ca6b5]">
              Krok po kroku przed oddaniem projektu klientowi.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#062130] py-24 px-6 lg:px-12 border-t border-white/5 relative">
<div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-[#42e1ec]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white text-center uppercase mb-20">
          Opinie Innych
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="border border-[#42e1ec]/40 bg-[#031722] p-8 md:mt-12 relative">
<i className="w-8 h-8 text-[#42e1ec] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-[#8ca6b5] mb-8 leading-relaxed">
              "Ten kurs całkowicie zmienił moje podejście do pracy. Materiały są
              konkretne, a wiedza przekazana w bardzo przystępny sposób."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-medium text-lg">
                AK
              </div>
<div className="text-base text-white font-medium uppercase">
                Anna Kowalska
              </div>
</div>
</div>

<div className="border border-[#42e1ec]/40 bg-[#031722] p-8 relative">
<i className="w-8 h-8 text-[#42e1ec] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-[#8ca6b5] mb-8 leading-relaxed">
              "Najlepiej zainwestowane pieniądze w mój rozwój zawodowy. Już w
              trakcie trwania kursu zdobyłem pierwszych klientów."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-medium text-lg">
                MN
              </div>
<div className="text-base text-white font-medium uppercase">
                Michał Nowak
              </div>
</div>
</div>

<div className="border border-[#42e1ec]/40 bg-[#031722] p-8 md:mt-24 relative">
<i className="w-8 h-8 text-[#42e1ec] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-[#8ca6b5] mb-8 leading-relaxed">
              "Wiedza merytoryczna na najwyższym poziomie. Społeczność wokół
              kursu to dodatkowy, ogromny atut tej inwestycji."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-medium text-lg">
                PW
              </div>
<div className="text-base text-white font-medium uppercase">
                Piotr Wiśniewski
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#031722] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white uppercase mb-12">
          Dla kogo to nie jest?
        </h2>
<div className="text-lg text-[#8ca6b5] space-y-6 leading-relaxed">
<p className="">
            Ten program nie jest magiczną pigułką, która rozwiąże wszystkie
            Twoje problemy bez Twojego zaangażowania. Wymaga pracy, czasu i
            chęci do nauki.
          </p>
<p className="">
            Jeśli szukasz dróg na skróty, nie jesteś otwarty na konstruktywną
            krytykę lub uważasz, że wiesz już wszystko – te materiały
            prawdopodobnie nie spełnią Twoich oczekiwań i lepiej zainwestować
            swój czas w coś innego.
          </p>
</div>
</div>
</section>

<section className="bg-[#062130] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#42e1ec] uppercase mb-8">
            O Mnie
          </h2>
<div className="text-lg text-[#8ca6b5] space-y-6 leading-relaxed">
<p className="text-white font-medium text-xl">
              Cześć, nazywam się Martyna Włodarczyk.
            </p>
<p>
              Od lat zajmuję się projektowaniem i pomaganiem innym w wejściu do
              branży. Moja droga nie była prosta, popełniłam wiele błędów,
              dlatego teraz chcę Ci pokazać, jak ich uniknąć.
            </p>
<p>
              Wierzę w praktyczne podejście do nauki i budowanie solidnych
              fundamentów, które pozwolą Ci na długotrwały rozwój i sukces na
              rynku.
            </p>
</div>
</div>

<div className="bg-[#031722] border border-[#42e1ec]/20 aspect-[4/5] rounded flex flex-col items-center justify-center text-[#8ca6b5] relative overflow-hidden group">
<img alt="Martyna Włodarczyk" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://i.postimg.cc/QtLRkkG5/DSC06026.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#031722] to-transparent opacity-40 z-10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="bg-[#031722] py-24 px-6 lg:px-12 border-t border-white/5 relative">

<div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#42e1ec]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white uppercase text-center mb-16 max-w-3xl mx-auto leading-tight">
          Formularz - Wolisz pracować indywidualnie?
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<form className="flex flex-col gap-6 bg-[#062130] p-8 lg:p-12 rounded border border-white/5 shadow-xl relative z-10">
<div className="flex flex-col gap-2">
<label className="text-base text-[#8ca6b5] font-medium uppercase tracking-wide">
                Imię
              </label>
<input className="bg-[#031722] border border-white/10 text-white p-4 rounded focus:outline-none focus:border-[#42e1ec] transition-colors text-lg" name="firstName" placeholder="Wpisz swoje imię" required="true" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base text-[#8ca6b5] font-medium uppercase tracking-wide">
                Nazwisko
              </label>
<input className="bg-[#031722] border border-white/10 text-white p-4 rounded focus:outline-none focus:border-[#42e1ec] transition-colors text-lg" name="lastName" placeholder="Wpisz swoje nazwisko" required="true" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base text-[#8ca6b5] font-medium uppercase tracking-wide">
                Tel
              </label>
<input className="bg-[#031722] border border-white/10 text-white p-4 rounded focus:outline-none focus:border-[#42e1ec] transition-colors text-lg" name="phone" placeholder="Twój numer telefonu" required="true" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-base text-[#8ca6b5] font-medium uppercase tracking-wide">
                Mail
              </label>
<input className="bg-[#031722] border border-white/10 text-white p-4 rounded focus:outline-none focus:border-[#42e1ec] transition-colors text-lg" name="email" placeholder="Twój adres email" required="true" type="email"/>
</div>
<button className="bg-[#42e1ec] text-[#031722] px-8 py-4 mt-6 rounded font-semibold text-lg uppercase tracking-wide hover:bg-[#2bc9d4] transition-colors w-full" type="submit">
              Wyślij Zgłoszenie
            </button>
</form>

<div className="bg-[#062130] border border-[#42e1ec]/20 aspect-square rounded flex flex-col items-center justify-center text-[#8ca6b5] relative overflow-hidden group h-full max-h-[600px]">
<i className="w-16 h-16 mb-4 z-20 opacity-50 group-hover:text-[#42e1ec] transition-colors" data-lucide="camera" strokeWidth="1.5"></i>
<span className="text-2xl font-medium tracking-tight uppercase z-20 opacity-50">
              Grafika (PH)
            </span>
</div>
</div>
</div>
</section>

<section className="bg-[#062130] py-24 px-6 lg:px-12 border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="w-full lg:w-2/3">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white uppercase mb-12">
            Sekcja Pytań i Odpowiedzi
          </h2>
<div className="flex flex-col">

<div className="border-b border-white/10 py-6 flex justify-between items-center cursor-pointer group">
<span className="text-xl text-white font-medium group-hover:text-[#42e1ec] transition-colors pr-8">
                Kiedy otrzymam dostęp do materiałów?
              </span>
<i className="w-6 h-6 text-[#42e1ec] shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="border-b border-white/10 py-6 flex justify-between items-center cursor-pointer group">
<span className="text-xl text-white font-medium group-hover:text-[#42e1ec] transition-colors pr-8">
                Czy kurs jest dla osób zupełnie początkujących?
              </span>
<i className="w-6 h-6 text-[#42e1ec] shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="border-b border-white/10 py-6 flex justify-between items-center cursor-pointer group">
<span className="text-xl text-white font-medium group-hover:text-[#42e1ec] transition-colors pr-8">
                Jak długo mam dostęp do platformy?
              </span>
<i className="w-6 h-6 text-[#42e1ec] shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</div>

<div className="border-b border-white/10 py-6 flex justify-between items-center cursor-pointer group">
<span className="text-xl text-white font-medium group-hover:text-[#42e1ec] transition-colors pr-8">
                Czy otrzymam fakturę VAT?
              </span>
<i className="w-6 h-6 text-[#42e1ec] shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="hidden lg:flex w-1/3 justify-center items-center opacity-30 mt-20">
<svg className="text-[#42e1ec]" fill="none" height="300" viewbox="0 0 200 300" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20 C 50 -20, 150 50, 80 100 S 180 150, 100 200 S 200 280, 50 290" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M50 20 C 90 0, 190 70, 120 120 S 220 170, 140 220 S 240 300, 90 310" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</section>

<footer className="bg-[#031722] pt-12 pb-28 px-6 border-t border-white/10 text-center text-[#8ca6b5] text-base">
<p>© 2023 Martyna Włodarczyk. Wszelkie prawa zastrzeżone.</p>
</footer>

<div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex justify-center items-center pointer-events-none w-full px-4">
<button className="md:px-12 md:py-5 md:text-xl flex gap-3 hover:bg-[#2bc9d4] hover:-translate-y-1 transition-all duration-300 pointer-events-auto md:w-auto md:max-w-none text-lg font-semibold text-[#031722] bg-[#42e1ec] w-full max-w-[400px] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_10px_40px_rgba(66,225,236,0.35)] gap-x-3 gap-y-3 items-center justify-center" onclick="document.getElementById('consultationModal').classList.remove('hidden')">
        Zarezerwuj darmową pierwszą konsultacje
        <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="2.5"></i>
</button>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden" id="consultationModal">
<div className="absolute inset-0 bg-[#031722]/80 backdrop-blur-sm" onclick="document.getElementById('consultationModal').classList.add('hidden')"></div>
<div className="bg-[#062130] border border-[#42e1ec]/30 p-8 rounded shadow-2xl relative z-10 w-full max-w-md mx-4">
<button className="absolute top-4 right-4 text-[#8ca6b5] hover:text-[#42e1ec] transition-colors" onclick="document.getElementById('consultationModal').classList.add('hidden')">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<h3 className="text-2xl font-semibold text-white tracking-tight uppercase mb-6 text-center">
          Zarezerwuj termin
        </h3>
<form className="flex flex-col gap-5">
<div className="flex flex-col gap-2">
<label className="text-sm text-[#8ca6b5] font-medium uppercase tracking-wide">
              Imię
            </label>
<input className="bg-[#031722] border border-white/10 text-white p-3 rounded focus:outline-none focus:border-[#42e1ec] transition-colors w-full" name="firstName" placeholder="Twoje imię" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-[#8ca6b5] font-medium uppercase tracking-wide">
              E-mail
            </label>
<input className="bg-[#031722] border border-white/10 text-white p-3 rounded focus:outline-none focus:border-[#42e1ec] transition-colors w-full" name="email" placeholder="Twój e-mail" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm text-[#8ca6b5] font-medium uppercase tracking-wide">
              Numer telefonu
            </label>
<input className="bg-[#031722] border border-white/10 text-white p-3 rounded focus:outline-none focus:border-[#42e1ec] transition-colors w-full" name="phone" placeholder="Twój telefon" required="" type="tel"/>
</div>
<div className="flex items-start gap-3 mt-1">
<input className="mt-1.5 w-4 h-4 accent-[#42e1ec] shrink-0" id="marketingConsent" name="consent" required="" type="checkbox"/>
<label className="text-sm text-[#8ca6b5] leading-snug cursor-pointer" htmlFor="marketingConsent">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych.
            </label>
</div>
<button className="bg-[#42e1ec] text-[#031722] px-6 py-3 mt-2 rounded font-semibold text-base uppercase tracking-wide hover:bg-[#2bc9d4] transition-colors w-full shadow-[0_0_15px_rgba(66,225,236,0.2)]" onclick="" type="submit">
            Zarezerwuj termin
          </button>
</form>
</div>
</div>



    </>
  );
}
