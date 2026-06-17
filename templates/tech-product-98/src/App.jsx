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
      

<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-neutral-900">
<div className="flex h-12 max-w-5xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-neutral-200 hover:text-white transition-colors" href="#">
                iP
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-light tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Przegląd</a>
<a className="hover:text-white transition-colors" href="#">Aparaty</a>
<a className="hover:text-white transition-colors" href="#">Wydajność</a>
<a className="hover:text-white transition-colors" href="#">Specyfikacja</a>
</div>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                Kup
            </a>
</div>
</nav>

<section className="overflow-hidden flex flex-col text-center pt-32 pb-20 relative items-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-800/30 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
<h2 className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-4">Pro. Na nowo zdefiniowane.</h2>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-6">
                iPhone 17 Pro Max
            </h1>
<p className="text-xl md:text-2xl font-light tracking-tight text-neutral-400 max-w-2xl mb-10">
                Kuty w tytanie. Napędzany czipem A19 Pro. Najbardziej zaawansowany system aparatów, jaki kiedykolwiek stworzyliśmy.
            </p>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="text-sm font-medium bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Zamów w przedsprzedaży
                </a>
<a className="hover:text-white flex items-center gap-2 transition-colors text-sm font-light text-neutral-300" href="#">
    Obejrzyj film o iPhone 17 Pro <svg className="lucide lucide-play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</a>
</div>
</div>

<div className="z-10 md:w-80 shadow-white/5 flex flex-col bg-gradient-to-br from-neutral-900 to-black w-72 h-[600px] border-neutral-800 border rounded-[3rem] mt-20 pt-2 pr-2 pb-2 pl-2 relative shadow-2xl">

<div className="flex-1 rounded-[2.5rem] bg-black border border-neutral-900 overflow-hidden relative">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full border border-neutral-800 flex items-center justify-between px-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/50"></div>
</div>

<div className="bg-gradient-to-tr from-purple-900/20 via-black to-blue-900/20 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 relative rounded-3xl border border-neutral-800/50 bg-neutral-950 p-8 overflow-hidden group hover:border-neutral-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<iconify-icon className="text-neutral-400 mb-4" height="32" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">System aparatów 48 MP.</h3>
<p className="text-base font-light text-neutral-400 max-w-sm">
                            Nowy sensor wychwytuje 3x więcej światła. Portrety nowej generacji. Wideo przestrzenne, które ożywa.
                        </p>
</div>

<div className="absolute -bottom-10 -right-10 flex gap-4 opacity-30 group-hover:opacity-60 transition-opacity">
<div className="w-40 h-40 rounded-full border border-neutral-700 bg-neutral-900"></div>
<div className="w-40 h-40 rounded-full border border-neutral-700 bg-neutral-900"></div>
</div>
</div>
</div>

<div className="relative rounded-3xl border border-neutral-800/50 bg-neutral-950 p-8 overflow-hidden group hover:border-neutral-700 transition-colors">
<div className="relative z-10 flex flex-col h-full justify-between items-start">
<iconify-icon className="text-neutral-400" height="32" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Czip A19 Pro.</h3>
<p className="text-sm font-light text-neutral-400">
                            Architektura 2nm. Potwór wydajności z oszałamiającą grafiką z ray tracingiem.
                        </p>
</div>
</div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
</div>

<div className="relative rounded-3xl border border-neutral-800/50 bg-neutral-950 p-8 overflow-hidden group hover:border-neutral-700 transition-colors">
<div className="relative z-10 flex flex-col h-full justify-between items-start">
<iconify-icon className="text-neutral-400" height="32" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Tytan klasy 5.</h3>
<p className="text-sm font-light text-neutral-400">
                            Niesamowicie lekki. Ekstremalnie wytrzymały. Kosmiczna technologia w dłoni.
                        </p>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-800/20 to-transparent"></div>
</div>

<div className="md:col-span-2 relative rounded-3xl border border-neutral-800/50 bg-neutral-950 p-8 overflow-hidden group hover:border-neutral-700 transition-colors flex items-center justify-between">
<div className="relative z-10 flex flex-col justify-center max-w-md">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Bateria na cały dzień i jeszcze dłużej.</h3>
<p className="text-sm font-light text-neutral-400">
                        Do 35 godzin odtwarzania wideo. Zoptymalizowane zarządzanie energią.
                    </p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-neutral-400 transition-colors hidden sm:block" height="64" icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
</div>
</div>
</section>

<section className="border-t border-neutral-900 bg-neutral-950 py-32">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 text-white">Wyświetlacz Super Retina XDR.</h2>
<p className="text-lg md:text-xl font-light tracking-tight text-neutral-400 mb-12 max-w-2xl mx-auto">
                Częstotliwość odświeżania ProMotion 120Hz adaptująca się do Twoich potrzeb. Szczytowa jasność 3000 nitów. Ramki tak cienkie, że obraz zdaje się unosić w powietrzu.
            </p>
<img alt="Abstrakcyjna fala wyświetlacza" className="w-full opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='800' height='200'%3E%3Crect width='100%25' height='100%25' fill='%230a0a0a'/%3E%3Cpath d='M0 100 Q 400 0 800 100' fill='none' stroke='%23333' strokeWidth='2'/%3E%3Cpath d='M0 100 Q 400 200 800 100' fill='none' stroke='%23333' strokeWidth='2'/%3E%3C/svg%3E"/>
</div>
</section>

<footer className="border-t border-neutral-900 bg-black pt-16 pb-8">
<div className="max-w-5xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="text-xs font-medium text-white mb-4">Eksploruj</h4>
<ul className="space-y-2 text-xs font-light text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Mac</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">iPad</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">iPhone</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Watch</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Usługi</h4>
<ul className="space-y-2 text-xs font-light text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Apple Music</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Apple TV+</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">iCloud</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Firma</h4>
<ul className="space-y-2 text-xs font-light text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Kariera</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Inwestorzy</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Etyka</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Wartości</h4>
<ul className="space-y-2 text-xs font-light text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Prywatność</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Środowisko</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Dostępność</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs font-light text-neutral-600">
<p>Copyright © 2024 Fikcyjna Firma Inc. Wszelkie prawa zastrzeżone.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-neutral-300 transition-colors" href="#">Polityka prywatności</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Warunki korzystania</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Mapa strony</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
