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
      

<nav className="border-b border-gray-200 px-6 py-5 flex justify-between items-center text-xs uppercase tracking-widest font-medium sticky top-0 bg-white/90 backdrop-blur-sm z-50">
<div className="hidden md:flex gap-10">
<a className="hover:text-[#1b25e3] transition-colors" href="#">Home</a>
<a className="hover:text-[#1b25e3] transition-colors" href="#">About</a>
<a className="hover:text-[#1b25e3] transition-colors" href="#">Shop</a>
</div>
<div className="w-10 h-10 rounded-full border-[3px] border-black flex items-center justify-center font-semibold text-lg">
        V
      </div>
<div className="flex gap-10 items-center">
<a className="hidden md:block hover:text-[#1b25e3] transition-colors" href="#">
          Contact
        </a>
<a className="hover:text-[#1b25e3] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<header className="relative pt-16 pb-24 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center bg-[#fcfbf9]">

<div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium uppercase tracking-widest text-gray-400 origin-left">
        2025 EST. COLLECTION
      </div>
<div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
<div className="flex flex-col justify-center pl-0 xl:pl-12">
<h1 className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tighter uppercase leading-[0.85] text-[#1b25e3]">
            Studio
            <br/>
<span className="text-black ml-12 sm:ml-24">Tkanin</span>
</h1>
<div className="mt-16 max-w-lg">
<p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Jestem projektantką tkanin, która z pasją łączy tradycyjne
              rzemiosło z nowoczesnym designem. Tworzę autorskie wzory i
              starannie selekcjonuję najwyższej jakości materiały, by nadawać
              przestrzeniom unikalny, osobisty charakter i dbać o każdy detal
              Twojego wnętrza.
            </p>
<a className="inline-flex items-center justify-center px-10 py-4 border border-black text-xs font-medium uppercase tracking-widest hover:bg-[#1b25e3] hover:text-white hover:border-[#1b25e3] transition-all" href="#portfolio">
              Portfolio
            </a>
</div>
</div>
<div className="relative h-[60vh] lg:h-[75vh] w-full">
<img alt="Fashion Editorial" className="w-full h-full object-cover grayscale opacity-90" src="https://i.postimg.cc/4yf2BW88/magnific-stworz-mi-sesje-zdjeciowa-vucojf-Ca47.png"/>

<div className="absolute bottom-10 right-10 text-right mix-blend-difference text-white">
<div className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter uppercase leading-[0.85]">
              Van
              <br/>
              Couver
            </div>
<div className="font-serif italic text-4xl mt-4 lowercase tracking-normal font-normal">
              signature
            </div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-[#1b25e3] py-3 overflow-hidden bg-white text-[#1b25e3] text-xs font-medium uppercase tracking-widest">
<div className="flex w-[200%] gap-4">
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
<span>/ COLLECTION</span>
</div>
</div>

<section className="px-6 py-24 max-w-[1500px] mx-auto" id="portfolio">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter uppercase text-black">
          Portfolio
        </h2>
</div>
<div className="border-t-2 border-x-2 border-[#1b25e3] grid grid-cols-1 lg:grid-cols-3">

<div className="border-b-2 lg:border-b-0 lg:border-r-2 border-[#1b25e3] p-5 flex flex-col bg-white group cursor-pointer hover:bg-[#fcfbf9] transition-colors">
<h3 className="text-xs font-semibold tracking-widest uppercase mb-8 text-[#1b25e3]">
            / Projekt A
          </h3>
<div className="aspect-[4/5] bg-gray-100 relative mb-6 overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-end mt-auto">
<button className="w-12 h-12 bg-[#1b25e3] text-white flex items-center justify-center hover:bg-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="border-b-2 lg:border-b-0 lg:border-r-2 border-[#1b25e3] p-5 flex flex-col bg-white group cursor-pointer hover:bg-[#fcfbf9] transition-colors">
<h3 className="text-xs font-semibold tracking-widest uppercase mb-8 text-[#1b25e3]">
            / Projekt B
          </h3>
<div className="aspect-[4/5] bg-gray-100 relative mb-6 overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-end mt-auto">
<button className="w-12 h-12 bg-[#1b25e3] text-white flex items-center justify-center hover:bg-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="p-5 flex flex-col bg-white group cursor-pointer hover:bg-[#fcfbf9] transition-colors relative overflow-hidden border-b-2 border-[#1b25e3] lg:border-b-0">
<h3 className="text-xs font-semibold tracking-widest uppercase mb-8 text-[#1b25e3]">
            / Projekt C
          </h3>
<div className="aspect-[4/5] bg-gray-100 relative mb-6 overflow-hidden z-10">
<img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-end mt-auto relative z-10">
<button className="w-12 h-12 bg-[#1b25e3] text-white flex items-center justify-center hover:bg-black transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 -rotate-90 text-[#1b25e3] text-8xl font-semibold tracking-tighter uppercase opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
            Vancouver
          </div>
</div>
</div>

<div className="border-x-2 border-b-2 border-[#1b25e3] grid grid-cols-1 md:grid-cols-2">
<div className="border-b-2 md:border-b-0 md:border-r-2 border-[#1b25e3] p-8 bg-[#fcfbf9] relative min-h-[350px] flex items-end">
<h3 className="absolute top-6 left-6 text-xs font-semibold tracking-widest uppercase z-10 text-black">
            / Quality
          </h3>
<img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8 bg-black relative min-h-[350px] flex items-end">
<h3 className="absolute top-6 left-6 text-xs font-semibold tracking-widest uppercase text-white z-10">
            / Lookbook
          </h3>
<img className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative z-10 w-full text-right pb-4">
<span className="text-white text-5xl font-semibold tracking-tighter uppercase">
              Punk
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 bg-[#fcfbf9]">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16 relative">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter uppercase z-10 relative">
            Współpraca
          </h2>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-serif italic text-black opacity-5 pointer-events-none whitespace-nowrap">
            nasi partnerzy
          </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200">
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 1
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 2
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 3
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 4
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 5
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 6
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 7
            </span>
</div>
<div className="aspect-[3/2] border border-gray-100 flex items-center justify-center bg-white p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Brand 8
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white relative overflow-hidden border-t-2 border-[#1b25e3]">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
<span className="text-[25vw] leading-none font-semibold text-[#1b25e3] tracking-tighter uppercase whitespace-nowrap">
          PROCESS
        </span>
</div>
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="flex flex-col items-center mb-28 relative">
<h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-black uppercase text-center relative z-10">
            Twój
            <br/>
            Projekt
          </h2>
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-serif italic text-[#1b25e3] opacity-80 mt-10 ml-16 md:ml-24 whitespace-nowrap">
            krok po kroku
          </span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

<div className="w-full md:w-5/12 bg-[#fcfbf9] p-8 md:p-12 relative group">
<div className="absolute top-0 right-0 w-24 h-24 border-t-[3px] border-r-[3px] border-[#1b25e3] -mt-6 -mr-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"></div>
<div className="aspect-square bg-gray-200 relative overflow-hidden mb-10">
<img className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-gray-400 block mb-4">
                Faza 01
              </span>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mb-6 text-black">
                Koncepcja
              </h3>
<p className="text-lg text-gray-500 leading-relaxed">
                Analizujemy Twoje potrzeby i tworzymy wstępny zarys projektu.
                Dbamy o spójność wizji z Twoimi oczekiwaniami od samego
                początku.
              </p>
</div>
</div>

<div className="flex items-center justify-center text-[#1b25e3] shrink-0">
<i className="hidden md:block w-20 h-20" data-lucide="move-right" strokeWidth="1.5"></i>
<i className="md:hidden w-16 h-16" data-lucide="move-down" strokeWidth="1.5"></i>
</div>

<div className="w-full md:w-5/12 bg-[#fcfbf9] p-8 md:p-12 relative group">
<div className="absolute bottom-0 left-0 w-24 h-24 border-b-[3px] border-l-[3px] border-[#1b25e3] -mb-6 -ml-6 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
<div className="aspect-square bg-gray-200 relative overflow-hidden mb-10">
<img className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-[#1b25e3] block mb-4">
                Faza 02
              </span>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mb-6 text-black">
                Realizacja
              </h3>
<p className="text-lg text-gray-500 leading-relaxed">
                Przenosimy wizję do rzeczywistości. Skupiamy się na detalach,
                dobierając najwyższej jakości materiały.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#1b25e3] text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 relative z-10">

<div className="flex flex-col justify-center">
<h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter uppercase mb-12 leading-[0.9]">
            Zamów
            <br/>
            Próbkę
          </h2>
<p className="text-lg text-white/70 mb-16 max-w-md leading-relaxed">
            Wybierz materiały, które chcesz przetestować. Wyślemy je do Ciebie
            bezpłatnie w wygodnym boxie w ciągu 48 godzin.
          </p>

<div className="space-y-8">
<label className="flex items-center gap-8 cursor-pointer group">
<div className="relative w-10 h-10 border-2 border-white flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-colors">
<input className="peer sr-only" type="checkbox"/>
<i className="w-6 h-6 text-white opacity-0 peer-checked:opacity-100 transition-opacity absolute" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">
                Próbki Tkanin
              </span>
</label>
<label className="flex items-center gap-8 cursor-pointer group">
<div className="relative w-10 h-10 border-2 border-white flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-colors">
<input checked="" className="peer sr-only" type="checkbox"/>
<i className="w-6 h-6 text-white opacity-0 peer-checked:opacity-100 transition-opacity absolute" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">
                Wykończenia Drewna
              </span>
</label>
<label className="flex items-center gap-8 cursor-pointer group">
<div className="relative w-10 h-10 border-2 border-white flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-colors">
<input className="peer sr-only" type="checkbox"/>
<i className="w-6 h-6 text-white opacity-0 peer-checked:opacity-100 transition-opacity absolute" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">
                Paleta Kolorów
              </span>
</label>
</div>
</div>

<div className="bg-white text-black p-12 md:p-16 lg:p-20 relative">
<h3 className="text-3xl font-semibold tracking-tighter uppercase mb-12">
            Dane wysyłki
          </h3>
<form className="space-y-12">
<div className="relative">
<input className="peer w-full border-b-2 border-gray-200 py-3 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent bg-transparent" id="name" placeholder="Imię i nazwisko" type="text"/>
<label className="absolute left-0 -top-5 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="name">
                Imię i nazwisko
              </label>
</div>
<div className="relative">
<input className="peer w-full border-b-2 border-gray-200 py-3 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent bg-transparent" id="email" placeholder="Adres email" type="email"/>
<label className="absolute left-0 -top-5 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="email">
                Adres email
              </label>
</div>
<div className="relative pt-4">
<textarea className="peer w-full border-b-2 border-gray-200 py-3 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent resize-none bg-transparent" id="address" placeholder="Adres dostawy" rows="3"></textarea>
<label className="absolute left-0 top-0 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="address">
                Pełny adres dostawy
              </label>
</div>
<button className="w-full bg-black text-white py-6 text-sm font-semibold tracking-widest uppercase hover:bg-[#1b25e3] transition-colors mt-8 group flex items-center justify-center gap-4" type="button">
<span>Wyślij Zamówienie</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</form>

<div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#1b25e3] m-4 pointer-events-none"></div>
</div>
</div>
</section>

<footer className="bg-[#fcfbf9] pt-24 pb-12 px-6">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 border-b-2 border-gray-200 pb-20">

<div className="md:col-span-4 flex flex-col items-start">
<div className="w-20 h-20 rounded-full border-[3px] border-black flex items-center justify-center font-semibold text-3xl mb-10">
            V
          </div>
<p className="text-xs text-gray-500 uppercase tracking-widest max-w-[250px] leading-loose">
            Vancouver Design Studio
            <br/>
            ul. Przykładowa 12/34
            <br/>
            00-000 Warszawa, Polska
          </p>
</div>

<div className="md:col-span-3">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#1b25e3] mb-10">
            Sklep
          </h4>
<ul className="space-y-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
<li>
<a className="hover:text-black transition-colors block" href="#">
                Kolekcja 2025
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                Lookbook
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                Bestsellery
              </a>
</li>
</ul>
</div>

<div className="md:col-span-3">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#1b25e3] mb-10">
            Menu
          </h4>
<ul className="space-y-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
<li>
<a className="hover:text-black transition-colors block" href="#">
                Home
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                O nas
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#portfolio">
                Portfolio
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                Proces
              </a>
</li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#1b25e3] mb-10">
            Kontakt
          </h4>
<ul className="space-y-5 text-xs font-semibold uppercase tracking-widest text-gray-400">
<li>
<a className="hover:text-black transition-colors block" href="#">
                Instagram
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                Facebook
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                hello@studio.v
              </a>
</li>
<li>
<a className="hover:text-black transition-colors block" href="#">
                +48 000 000
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-xs font-semibold uppercase tracking-widest text-gray-400">
<p>© 2025 Vancouver Studio</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-black transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-black transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>

<div className="h-24 w-full"></div>
<div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">

<div className="hidden md:flex w-full bg-[#1b25e3] text-white py-4 px-8 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] justify-between items-center pointer-events-auto border-t border-[#1b25e3]/20">
<div className="text-sm font-semibold uppercase tracking-widest">
          Umów się na rozmowę
        </div>
<button className="bg-white text-black px-10 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-gray-100 transition-colors" onclick="document.getElementById('booking-modal').classList.remove('opacity-0', 'pointer-events-none'); document.getElementById('booking-modal-content').classList.remove('scale-95'); document.getElementById('booking-modal-content').classList.add('scale-100');">
          Zarezerwuj termin
        </button>
</div>

<div className="md:hidden w-full p-4 pointer-events-auto">
<button className="w-full bg-[#1b25e3] text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest shadow-[0_8px_30px_rgba(27,37,227,0.4)] hover:bg-black transition-colors" onclick="document.getElementById('booking-modal').classList.remove('opacity-0', 'pointer-events-none'); document.getElementById('booking-modal-content').classList.remove('scale-95'); document.getElementById('booking-modal-content').classList.add('scale-100');">
          Zarezerwuj termin
        </button>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 p-4" id="booking-modal" onclick="if(event.target === this) { this.classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-modal-content').classList.remove('scale-100'); document.getElementById('booking-modal-content').classList.add('scale-95'); }">
<div className="bg-white text-black p-8 md:p-14 max-w-xl w-full relative transform scale-95 transition-transform duration-300 shadow-2xl border-t-4 border-[#1b25e3] max-h-[90vh] overflow-y-auto" id="booking-modal-content">
<button className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors" onclick="document.getElementById('booking-modal').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-modal-content').classList.remove('scale-100'); document.getElementById('booking-modal-content').classList.add('scale-95');" type="button">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter uppercase mb-4 text-black">
          Rezerwacja
        </h3>
<p className="text-sm md:text-base text-gray-500 mb-10 leading-relaxed">
          Zostaw swoje dane, a my skontaktujemy się z Tobą w celu umówienia
          najdogodniejszego terminu.
        </p>
<form className="space-y-10" onsubmit="event.preventDefault(); document.getElementById('booking-modal').classList.add('opacity-0', 'pointer-events-none'); document.getElementById('booking-modal-content').classList.remove('scale-100'); document.getElementById('booking-modal-content').classList.add('scale-95');">
<div className="relative">
<input className="peer w-full border-b-2 border-gray-200 py-2 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent bg-transparent" id="modal-name" placeholder="Imię i nazwisko" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="modal-name">
              Imię i nazwisko
            </label>
</div>
<div className="relative">
<input className="peer w-full border-b-2 border-gray-200 py-2 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent bg-transparent" id="modal-email" placeholder="Adres e-mail" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="modal-email">
              Adres e-mail
            </label>
</div>
<div className="relative">
<input className="peer w-full border-b-2 border-gray-200 py-2 text-xl focus:outline-none focus:border-[#1b25e3] transition-colors placeholder-transparent bg-transparent" id="modal-phone" placeholder="Numer telefonu" required="" type="tel"/>
<label className="absolute left-0 -top-5 text-xs font-semibold tracking-widest uppercase text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#1b25e3] peer-focus:font-semibold" htmlFor="modal-phone">
              Numer telefonu
            </label>
</div>
<label className="flex items-start gap-4 cursor-pointer group mt-8">
<div className="relative w-6 h-6 border-2 border-gray-300 flex-shrink-0 flex items-center justify-center bg-white group-hover:border-[#1b25e3] transition-colors mt-0.5">
<input className="peer sr-only" required="" type="checkbox"/>
<svg className="w-4 h-4 text-[#1b25e3] opacity-0 peer-checked:opacity-100 transition-opacity absolute" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs text-gray-500 leading-relaxed">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
              marketingowych.
            </span>
</label>
<button className="w-full bg-[#1b25e3] text-white py-5 text-sm font-semibold tracking-widest uppercase hover:bg-black transition-colors mt-8 flex items-center justify-center gap-4 group" type="submit">
<span>Zarezerwuj termin</span>
<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
</form>
</div>
</div>

    </>
  );
}
