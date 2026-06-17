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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-semibold tracking-tighter text-sm">
                    PV
                </div>
<span className="font-medium tracking-tight text-sm hidden sm:block">Projektové Vzdelávanie</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">O projekte</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Workshopy</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Materiály</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Blog</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hidden sm:block transition-colors" href="#">Prihlásiť sa</a>
<a className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#">
                    Začať s projektom
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nové termíny jesenných workshopov otvorené
            </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
                Zmeňte spôsob, akým <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">odovzdávate vedomosti.</span>
</h1>
<p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Platforma pre pedagógov a školy, ktorá prináša inovatívne metódy projektového vyučovania. Pripravte študentov na reálny svet prostredníctvom praktických skúseností.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all shadow-sm shadow-gray-900/10 flex items-center justify-center gap-2" href="#">
                    Prezrieť kurzy
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-gray-400" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Ako to funguje
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-400 mb-6 uppercase tracking-widest">Spolupracujeme s inštitúciami</p>
<div className="flex flex-wrap justify-center gap-8 sm:gap-16 items-center opacity-60 grayscale">
<div className="font-semibold tracking-tighter text-xl text-gray-800">UNIVERZITA</div>
<div className="font-semibold tracking-tighter text-xl text-gray-800">EDUTECH</div>
<div className="font-semibold tracking-tighter text-xl text-gray-800">MINISTERSTVO</div>
<div className="font-semibold tracking-tighter text-xl text-gray-800">INŠTITÚT</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Všetko pre moderného učiteľa</h2>
<p className="mt-4 text-base text-gray-500 leading-relaxed">Nezostávajte pri teórii. Poskytneme vám nástroje, metodiku a komunitu pre úspešné zavedenie projektov do vašich hodín.</p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-gray-900" icon="solar:lightbulb-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Inovatívna metodika</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Overené postupy, ako štruktúrovať projektové zadania tak, aby udržali pozornosť a rozvíjali kritické myslenie.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-gray-900" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Materiály na stiahnutie</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Prístup k rozsiahlej databáze šablón, pracovných listov a hodnotiacich rubrík pripravených na okamžité použitie.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-gray-900" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Workshopy a komunita</h3>
<p className="mt-3 text-sm text-gray-500 leading-relaxed">Zúčastnite sa prezenčných alebo online školení a zdieľajte skúsenosti s kolegami z celého Slovenska.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight">Vzdelávanie pre 21. storočie</h2>
<p className="mt-6 text-base text-gray-400 leading-relaxed">
                    Tradičné memorovanie ustupuje. Naším cieľom je pomôcť školám prejsť na model, kde sú študenti aktívnymi tvorcami, riešia reálne problémy a učia sa spolupráci.
                </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-300">Zvýšenie motivácie študentov</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-300">Rozvoj mäkkých zručností (soft skills)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-300">Aplikácia vedomostí v praxi</span>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2 relative">

<div className="aspect-video bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="h-8 bg-gray-700/50 rounded-lg w-1/3"></div>
<div className="flex gap-4">
<div className="h-24 bg-gray-700/50 rounded-lg w-full"></div>
<div className="h-24 bg-gray-700/50 rounded-lg w-full"></div>
</div>
<div className="h-32 bg-blue-500/10 border border-blue-500/20 rounded-lg w-full mt-auto flex items-center justify-center">
<iconify-icon className="text-blue-400/50" icon="solar:chart-square-linear" width="48"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Pripravení inovovať vaše hodiny?</h2>
<p className="mt-4 text-base text-gray-500">Pridajte sa k stovkám učiteľov, ktorí už zmenili svoj prístup k vyučovaniu.</p>
<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<a className="text-sm font-medium bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors" href="#">
                    Zaregistrovať sa zadarmo
                </a>
<a className="text-sm font-medium bg-gray-50 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200" href="#">
                    Kontaktujte nás
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="font-semibold tracking-tighter text-lg text-gray-900 mb-4">PV</div>
<p className="text-xs text-gray-500 leading-relaxed pr-4">
                        Iniciatíva pre podporu a rozvoj projektového vzdelávania na slovenských školách.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Platforma</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Kurzy</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Materiály</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Cenník</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">O nás</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Náš príbeh</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Lektori</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Právne</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Podmienky použitia</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Ochrana súkromia</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Projektové Vzdelávanie. Všetky práva vyhradené.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
