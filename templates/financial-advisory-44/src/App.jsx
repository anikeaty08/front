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
      

<nav className="absolute top-0 left-0 w-full z-50 py-8 px-6 lg:px-12 flex justify-between items-center animate-fade-up">

<div className="text-xl font-normal tracking-tighter uppercase w-48">
            K&amp;V
        </div>

<div className="hidden lg:flex items-center gap-10 text-sm text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#">O nás</a>
<a className="hover:text-black transition-colors duration-300" href="#">Jak to funguje</a>
<a className="hover:text-black transition-colors duration-300" href="#">Služby</a>
<a className="hover:text-black transition-colors duration-300" href="#">Kontakt</a>
</div>

<div className="w-48 flex justify-end">
<a className="text-sm font-medium border border-gray-200 hover:border-black px-6 py-2.5 rounded transition-all duration-300 text-center" href="#">
                Domluvit schůzku
            </a>
</div>
</nav>

<main className="flex-1 flex flex-col w-full max-w-[90rem] mx-auto pt-32 lg:pt-48">

<div className="grid lg:grid-cols-12 gap-16 lg:gap-8 px-6 lg:px-12 items-start w-full">

<div className="lg:col-span-7 flex flex-col w-full max-w-3xl">

<div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-10 animate-fade-up delay-100">
<span className="text-xs text-gray-500 tracking-widest uppercase">Certifikace EFA</span>
<span className="text-gray-300 text-xs">•</span>
<span className="text-xs text-gray-500 tracking-widest uppercase">Licence ČNB</span>
<span className="text-gray-300 text-xs">•</span>
<span className="text-xs text-gray-500 tracking-widest uppercase">Partners Financial Services</span>
</div>

<h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tighter text-black leading-[1.05] mb-8 animate-fade-up delay-200">
                    Vaše finance.<br/>Náš plán.
                </h1>

<p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-md animate-fade-up delay-300 font-light">
                    Jsme tým finančních poradců z Valašska. Pomůžeme vám mít ve financích jasno — bez tlaku, bez závazku.
                </p>

<div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-14 animate-fade-up delay-400">

<a className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-sm font-medium rounded hover:opacity-80 transition-opacity duration-300 w-full sm:w-auto" href="#">
                        Domluvit bezplatnou schůzku
                        <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<div className="flex flex-col border-l border-gray-200 pl-6 max-w-[240px]">
<p className="text-sm text-gray-600 font-light leading-relaxed">
                            „Konečně máme ve financích jasno. Všechno dává smysl.“
                        </p>
<span className="text-xs text-gray-400 mt-2">— Klient, 38 let</span>
</div>
</div>

<div className="flex items-center gap-5 animate-fade-up delay-500">
<div className="flex -space-x-3">
<img alt="Klient" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Klient" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Klient" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Klient" className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale text-sm bg-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-sm text-gray-600 font-light">
<strong className="font-medium text-black">459+</strong> domácností nám důvěřuje
                    </span>
</div>
</div>

<div className="lg:col-span-5 flex justify-end lg:pt-24 animate-fade-up delay-400">
<div className="relative w-full max-w-[26rem] aspect-[4/5] rounded-xl overflow-hidden bg-gray-50 ml-auto">
<img alt="Poradci v kanceláři" className="object-cover w-full h-full grayscale contrast-125 brightness-95" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 border-t border-gray-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:px-12 py-16 lg:py-20 animate-fade-up delay-500 w-full">
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-normal tracking-tighter text-black">15+</span>
<span className="text-sm text-gray-500 font-light">let praxe v oboru</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-normal tracking-tighter text-black">459</span>
<span className="text-sm text-gray-500 font-light">spokojených domácností</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-normal tracking-tighter text-black">205<span className="text-3xl lg:text-4xl tracking-tight ml-1">mil.</span></span>
<span className="text-sm text-gray-500 font-light">Kč pod naší správou</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-normal tracking-tighter text-black">145</span>
<span className="text-sm text-gray-500 font-light">vyřízených hypoték</span>
</div>
</div>
</div>
</main>

    </>
  );
}
