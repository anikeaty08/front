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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-zinc-200/80">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg text-sm font-semibold tracking-tighter shadow-sm">
                        ML
                    </div>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-sm font-medium text-zinc-900 bg-zinc-100/80 rounded-md" href="#">Présentation</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">Menu</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">Avis</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-md transition-colors" href="#">À propos</a>
</div>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:bookmark-linear"></iconify-icon>
<span className="hidden sm:inline">Enregistrer</span>
</button>
</div>
</nav>

<main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-10">

<header className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900">Mrist Lmima</h1>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 mt-2">

<div className="flex items-center gap-1.5">
<span className="font-medium text-zinc-900">4.4</span>
<div className="flex text-yellow-500 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<a className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-500 transition-colors" href="#">(194)</a>
</div>
<span className="text-zinc-300 hidden sm:inline">•</span>

<div className="flex items-center gap-2">
<span className="font-medium">Restaurant</span>
<span className="text-zinc-400">·</span>
<span>50–100 MAD</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm active:scale-95">
<iconify-icon className="text-lg" icon="solar:routing-2-linear"></iconify-icon>
                    Itinéraires
                </button>
<button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm active:scale-95">
<iconify-icon className="text-lg text-zinc-500" icon="solar:smartphone-linear"></iconify-icon>
<span className="hidden sm:inline">Envoyer</span>
</button>
<button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm active:scale-95">
<iconify-icon className="text-lg text-zinc-500" icon="solar:share-linear"></iconify-icon>
<span className="hidden sm:inline">Partager</span>
</button>
<button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm active:scale-95">
<iconify-icon className="text-lg text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
<span className="hidden sm:inline">À proximité</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 flex flex-col gap-6">

<section className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
<h2 className="text-lg font-semibold tracking-tighter text-zinc-900 mb-1">Informations pratiques</h2>
<div className="flex flex-col gap-4">

<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col pt-1.5">
<span className="text-sm text-zinc-700 leading-snug">Rue DE LA GENDARMERIE<br/>Khémisset, Maroc</span>
</div>
</div>
<div className="h-px w-full bg-zinc-100 ml-12"></div>

<div className="flex items-start gap-4 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col pt-1.5">
<div className="flex items-center gap-2 text-sm">
<span className="font-medium text-red-600">Fermé</span>
<span className="text-zinc-400">·</span>
<span className="text-zinc-600">Ouvre à 12:00 lun.</span>
<iconify-icon className="text-zinc-400 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="h-px w-full bg-zinc-100 ml-12"></div>

<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-colors shrink-0">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-700 font-medium">05 37 55 05 51</span>
</div>
</div>
</div>
</section>

<section className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
<h2 className="text-lg font-semibold tracking-tighter text-zinc-900">Services &amp; Budget</h2>
<div className="flex flex-col gap-6">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 bg-zinc-50/50 px-4 py-3 rounded-xl border border-zinc-100">
<iconify-icon className="text-zinc-900 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-700">Repas sur place</span>
</div>
<div className="flex items-center gap-3 bg-zinc-50/50 px-4 py-3 rounded-xl border border-zinc-100">
<iconify-icon className="text-zinc-900 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-700">Vente à emporter</span>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between py-2 border-b border-zinc-100">
<div className="flex items-center gap-3 text-zinc-600">
<iconify-icon className="text-lg text-zinc-400" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm">Budget moyen</span>
</div>
<span className="text-sm font-medium text-zinc-900">50–100 MAD</span>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-3 text-zinc-600">
<iconify-icon className="text-lg text-zinc-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm">Signalé par</span>
</div>
<span className="text-sm font-medium text-zinc-900">49 personnes</span>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">

<div className="bg-white border border-zinc-200/80 rounded-2xl p-2 shadow-sm relative overflow-hidden group">
<div className="w-full aspect-square sm:aspect-video lg:aspect-[4/3] bg-zinc-50 rounded-xl border border-zinc-200/50 bg-grid relative overflow-hidden flex items-center justify-center">

<div className="absolute z-10 flex flex-col items-center animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center shadow-lg text-white">
<iconify-icon className="text-sm" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="w-1.5 h-6 bg-zinc-900 -mt-1 rounded-b-full shadow-lg"></div>
<div className="w-4 h-1 bg-black/20 rounded-[100%] mt-1 blur-[1px]"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-zinc-200/80 rounded-lg p-3 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" icon="solar:copy-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-zinc-600 uppercase">RWFM+J8 Khémisset</span>
</div>
</div>
</div>

<div className="flex flex-col gap-2">
<button className="w-full flex items-center justify-between p-4 bg-white border border-zinc-200/80 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Votre historique Maps</span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 bg-white border border-zinc-200/80 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all text-left group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-white group-hover:shadow-sm transition-all">
<iconify-icon className="text-lg" icon="solar:tag-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Ajouter un libellé</span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-zinc-200/80 bg-white mt-auto">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded text-xs font-semibold tracking-tighter">ML</div>
<span className="text-xs text-zinc-500 font-medium tracking-tight">© Mrist Lmima.</span>
</div>
<div className="flex gap-4 text-xs text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Conditions</a>
</div>
</div>
</footer>

    </>
  );
}
