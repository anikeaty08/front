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
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:py-3 max-w-6xl mr-auto ml-auto pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<span className="uppercase text-[0.7rem] tracking-[0.18em] text-zinc-500">Livraison</span>
<span className="text-sm text-zinc-900">Offerte dès 30 000 CFA XOF d’achat</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<button className="hover:text-zinc-900 transition-colors">Suivi de commande</button>
<button className="hover:text-zinc-900 transition-colors">Service client</button>
<button className="hover:text-zinc-900 transition-colors">Aide &amp; FAQ</button>
</div>
</div>

<div className="border-t border-zinc-200 bg-white">
<div className="flex sm:py-4 max-w-6xl mx-auto pt-3 pr-4 pb-3 pl-4 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-rose-500 to-sky-500 p-1.5">
<div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white flex items-center justify-center ring-2 ring-zinc-900/80">
<div className="flex gap-1">
<span className="h-5 w-2 border-b-2 border-zinc-900 rounded-b-full"></span>
<span className="h-5 w-2 border-b-2 border-zinc-900 rounded-b-full"></span>
</div>
</div>
</div>
<div className="flex flex-col leading-none">
<span className="sm:text-3xl text-2xl font-semibold tracking-[0.32em] text-zinc-900">
                  DRESSINGFLOW
                </span>
<span className="text-[0.7rem] text-zinc-600 mt-1 tracking-[0.18em] uppercase">
                  Achetez vos habits en ligne, sans prise de tête
                </span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-4">
<div className="flex items-center w-full border border-zinc-200 bg-white rounded-full overflow-hidden focus-within:border-zinc-900 transition-colors">
<button className="pl-3 pr-1 text-zinc-500">
<i className="lucide lucide-search" style={{strokeWidth: '1.5'}}></i>
</button>
<input className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-400 py-1.5 text-zinc-900" placeholder="Rechercher robes, tops, nouvelles collections..." type="text"/>
</div>
</div>

<div className="flex gap-3 sm:gap-4 items-center">
<button className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-zinc-900">
<i className="lucide lucide-user-round text-zinc-900" style={{strokeWidth: '1.5'}}></i>
<span className="inline-flex items-center gap-2 text-xs font-medium">
<i className="lucide lucide-log-in text-zinc-900" style={{strokeWidth: '1.5'}}></i>
<span className="">Connexion</span>
<span className="inline-flex items-center gap-1 pl-3 border-l border-zinc-200">
<i className="lucide lucide-headset text-zinc-900" style={{strokeWidth: '1.5'}}></i>
<span className="hidden sm:inline">Service client</span>
</span>
<span className="inline-flex items-center gap-1 pl-3 border-l border-zinc-200">
<i className="lucide lucide-shopping-bag text-zinc-900" style={{strokeWidth: '1.5'}}></i>
<span className="hidden sm:inline">Panier</span>
</span>
<span className="inline-flex items-center gap-1 pl-3 border-l border-zinc-200">
<i className="lucide lucide-globe-2 text-zinc-900" style={{strokeWidth: '1.5'}}></i>
<span className="hidden sm:inline">Devise</span>
</span>
</span>
</button>
<button className="relative">
<i className="lucide lucide-heart text-zinc-900" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="relative">
<i className="lucide lucide-shopping-bag text-zinc-900" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="md:hidden border border-zinc-200 rounded-full p-1.5 bg-white">
<i className="lucide lucide-menu text-zinc-900" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<nav className="hidden md:block border-t border-zinc-200 bg-zinc-50/80">
<div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2.5 text-xs font-medium">
<div className="flex gap-5 gap-x-5 gap-y-5 items-center">
<button className="uppercase text-zinc-900 tracking-[0.18em]">ESPACES COLABORATIF</button>
<button className="uppercase hover:text-zinc-900 text-zinc-500 tracking-[0.18em]">Nouveautés</button>
<button className="uppercase hover:text-zinc-900 text-zinc-500 tracking-[0.18em]">FEMMES</button>
<button className="uppercase hover:text-zinc-900 text-zinc-500 tracking-[0.18em]" style={{}}>HOMME</button>
<button className="uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-900">
                  Accessoires
                </button>
<button className="uppercase tracking-[0.18em] text-rose-500">
                  Soldes -60%
                </button>
</div>
<div className="flex items-center gap-3 text-[0.7rem] text-zinc-500">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-sparkles text-yellow-400" style={{strokeWidth: '1.5'}}></i>
                  Exclus web
                </span>
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-badge-check text-emerald-500" style={{strokeWidth: '1.5'}}></i>
                  Retours 30 jours
                </span>
</div>
</div>
</nav>
</div>
</header>
<main className="flex-1">

<section className="border-b border-zinc-200 bg-white">
<div className="grid lg:grid-cols-[1.6fr,0.9fr] max-w-6xl mr-auto ml-auto pt-5 pr-4 pb-8 pl-4 gap-x-6 gap-y-6">

<div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-yellow-400 via-rose-500 to-sky-500 text-white">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.45)_0,_transparent_55%)]"></div>
<div className="relative flex flex-col h-full justify-between p-5 sm:p-7 lg:p-9">
<div className="flex items-center justify-between gap-4">
<div className="flex flex-col gap-3">
<span className="inline-flex items-center gap-2 rounded-full bg-black/50 border border-white/20 text-[0.7rem] tracking-[0.18em] uppercase px-3 py-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                      Drop du week-end Dressingflow
                    </span>
<h1 className="sm:text-3xl lg:text-4xl text-2xl font-semibold tracking-tight" style={{}}>Collection FLOW <span className="text-yellow-200">2025</span></h1>
<p className="sm:text-base leading-relaxed text-sm text-zinc-50 max-w-md" style={{}}>Robes fluides, ensembles coordonnés et basics ultra confort. -10% sur votre 1ère commande avec le code <span className="font-medium text-white">DRESS40</span>.</p>
<div className="flex flex-wrap items-center gap-3 pt-1">
<button className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-medium tracking-tight px-5 py-2">
                        Découvrir la collection
                      </button>
<button className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-50 hover:text-white">
                        Voir les nouveautés
                        <i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="hidden sm:flex flex-col items-end gap-3">
<div className="rounded-2xl bg-black/40 backdrop-blur border border-white/25 px-3 py-2 text-right">
<p className="text-xs text-zinc-200">
                        Jusqu’à
                      </p>
<p className="text-lg font-semibold tracking-tight">
                        -60% <span className="text-xs font-normal text-zinc-200">sur +100 articles</span>
</p>
</div>
<div className="rounded-full border border-white/30 px-3 py-1 text-[0.7rem] tracking-[0.18em] uppercase flex items-center gap-2 bg-black/40">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-300"></span>
                      Se termine dans 02j 14h
                    </div>
</div>
</div>

<div className="mt-6 sm:mt-8 flex gap-3">
<div className="flex-1 rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-900 via-black to-zinc-900 relative min-h-[9rem] sm:min-h-[12rem]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(255,255,255,0.18)_0,_transparent_45%)]"></div>
<div className="relative h-full flex items-end justify-between p-4 sm:p-5">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-300">Robes midi</span>
<p className="text-sm font-medium">
                          Drapée satinée « Nuit »
                        </p>
<p className="text-xs text-zinc-300">à partir de 10 000 FCFA</p>
</div>
<div className="flex flex-col items-end gap-1">
<span className="rounded-full bg-black/70 border border-white/25 text-[0.7rem] px-2 py-0.5">
                          Best-seller
                        </span>
<button className="mt-1 inline-flex items-center gap-1 rounded-full bg-white text-black text-[0.7rem] px-2.5 py-1">
                          Voir les modèles
                          <i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
<div className="hidden sm:flex sm:w-40 flex-col gap-3">
<div className="flex-1 rounded-2xl bg-white shadow-sm border border-zinc-200 flex flex-col justify-between p-3">
<div className="flex items-center gap-2 text-[0.7rem] text-zinc-900">
<i className="lucide lucide-truck" style={{strokeWidth: '1.5'}}></i>
<span className="">Livraison rapide</span>
</div>
<p className="text-[0.7rem] leading-relaxed text-zinc-500" style={{}}>Profitez de la livraison sur toutes les commandes</p>
</div>
<div className="flex-1 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between p-3">
<div className="flex items-center gap-2 text-[0.7rem] text-zinc-900">
<i className="lucide lucide-shield-check" style={{strokeWidth: '1.5'}}></i>
<span className="">Paiement sécurisé</span>
</div>
<p className="text-[0.7rem] leading-relaxed text-zinc-500">Cartes, PayPal,  Mobile money prochainement.</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="relative rounded-3xl overflow-hidden border border-zinc-200 bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,_rgba(255,255,255,0.4)_0,_transparent_55%)]"></div>
</div>

<div className="relative rounded-3xl overflow-hidden border border-dashed border-zinc-300 bg-zinc-50/70">
<div className="relative flex flex-col sm:flex-row h-full justify-between p-4 sm:p-5 gap-3 sm:gap-4">
<div className="flex flex-col gap-1.5">
<span className="inline-flex items-center gap-1 text-[0.7rem] tracking-[0.18em] uppercase text-zinc-500">
<i className="lucide lucide-ticket text-yellow-400" style={{strokeWidth: '1.5'}}></i>
                      Réduction de bienvenue
                    </span>
<p className="text-base font-semibold tracking-tight text-zinc-900">
                      -10% sur votre 1ère commande
                    </p>
<p className="text-sm text-zinc-500">
                      Inscrivez-vous à la newsletter pour recevoir votre code exclusif.
                    </p>
<form className="mt-2 flex flex-col sm:flex-row gap-2">
<input className="flex-1 border border-zinc-300 bg-white rounded-full text-sm px-3 py-1.5 outline-none focus:border-yellow-400 text-zinc-900 placeholder:text-zinc-400" placeholder="Votre adresse e-mail" type="email"/>
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-4 py-1.5" type="button">
                        Je m’inscris
                      </button>
</form>
</div>
<div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2 sm:gap-3 text-right">
<div className="rounded-full bg-white shadow-sm border border-zinc-300 px-3 py-1.5 text-[0.7rem] text-zinc-900">
<span className="font-medium">DRESS10</span>
</div>
<div className="text-[0.65rem] text-zinc-500 max-w-[10rem]">
                      Valable 7 jours. Non cumulable avec certaines offres.
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-200 bg-white">
<div className="lg:px-0 lg:pt-8 lg:pb-12 max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-10 pl-4 space-y-6">

<nav className="text-xs text-zinc-500 flex flex-wrap items-center gap-1">
<button className="hover:text-zinc-900">Accueil</button>
<span>/</span>
<button className="hover:text-zinc-900">Robes</button>
<span>/</span>
<button className="hover:text-zinc-900">Robes midi</button>
<span>/</span>
<span className="text-zinc-800">Robe satinée drapée dos nu « Midnight City »</span>
</nav>
<div className="grid lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] gap-x-8 gap-y-8 items-start">

<div className="space-y-4">
<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[4/5] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>

<div className="absolute top-3 left-3 flex flex-col gap-1">
<span className="inline-flex text-[0.65rem] uppercase text-white tracking-[0.18em] bg-rose-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">-20%</span>
<span className="inline-flex rounded-full bg-black/80 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5 border border-yellow-400/60">
                      Best-seller
                    </span>
</div>

<button className="absolute top-3 right-3 rounded-full bg-white/80 border border-zinc-200 p-1.5">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
<button className="relative overflow-hidden rounded-xl border-2 border-yellow-400 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
</button>
<button className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
</button>
<button className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
</button>
<button className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
</button>
<button className="hidden sm:block relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
</button>
</div>
</div>

<div className="space-y-5 lg:space-y-6">

<div className="space-y-2">
<div className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
<span>Robe midi</span>
<span className="h-0.5 w-4 bg-zinc-200"></span>
<span>Collection Printemps 2025</span>
</div>
<h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-zinc-900">
                    Robe satinée drapée dos nu « Midnight City »
                  </h1>
<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
<div className="inline-flex items-center gap-1 text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium">4,7</span>
<span className="text-zinc-500">(1 248 avis)</span>
</div>
<span className="hidden sm:inline-block h-3 w-px bg-zinc-200"></span>
<button className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900">
<i className="lucide lucide-message-circle" style={{strokeWidth: '1.5'}}></i>
<span>Voir les avis</span>
</button>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex items-baseline gap-2">
<span className="sm:text-2xl text-xl font-semibold text-zinc-900 tracking-tight" style={{}}>19 000 CFA XOF</span>
<span className="line-through text-sm text-zinc-400">30 000  CFA XOF</span>
</div>
<span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 border-emerald-200 border rounded-full pt-0.5 pr-2.5 pb-0.5 pl-2.5">Vous économisez 11 000 CFA XOF</span>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between gap-2">
<span className="text-sm sm:text-base text-zinc-800">
                      Couleur : <span className="font-medium">Noir nuit</span>
</span>
<button className="text-xs text-zinc-500 hover:text-zinc-900">
                      Voir toutes
                    </button>
</div>
<div className="flex items-center gap-2">
<button className="relative h-8 w-8 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-white">
<span className="h-6 w-6 rounded-full bg-black border border-zinc-700"></span>
</button>
<button className="relative h-8 w-8 rounded-full border border-zinc-300 flex items-center justify-center bg-white">
<span className="h-6 w-6 rounded-full bg-rose-500 border border-rose-300"></span>
</button>
<button className="relative h-8 w-8 rounded-full border border-zinc-300 flex items-center justify-center bg-white">
<span className="h-6 w-6 rounded-full bg-sky-500 border border-sky-300"></span>
</button>
<button className="relative h-8 w-8 rounded-full border border-zinc-300 flex items-center justify-center bg-white">
<span className="h-6 w-6 rounded-full bg-yellow-400 border border-yellow-300"></span>
</button>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between gap-2">
<span className="text-sm sm:text-base text-zinc-800">
                      Taille
                    </span>
<button className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900">
<i className="lucide lucide-ruler" style={{strokeWidth: '1.5'}}></i>
<span className="">Guide des tailles</span>
</button>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="h-9 rounded-full border border-yellow-400 bg-yellow-400 text-black text-xs sm:text-sm font-medium">
                      XS
                    </button>
<button className="h-9 rounded-full border border-zinc-300 bg-white text-xs sm:text-sm text-zinc-800">
                      S
                    </button>
<button className="h-9 rounded-full border border-zinc-300 bg-white text-xs sm:text-sm text-zinc-800">
                      M
                    </button>
<button className="h-9 rounded-full border border-zinc-300 bg-white text-xs sm:text-sm text-zinc-800">
                      L
                    </button>
<button className="h-9 rounded-full border border-zinc-300 bg-white text-xs sm:text-sm text-zinc-800">
                      XL
                    </button>
<button className="h-9 rounded-full border border-dashed border-zinc-400 bg-zinc-50 text-[0.7rem] col-span-2 flex items-center justify-center gap-1 text-zinc-600">
<i className="lucide lucide-bell" style={{strokeWidth: '1.5'}}></i>
<span className="">Alerte taille indisponible</span>
</button>
</div>
<p className="text-sm text-emerald-700 flex items-center gap-1.5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    En stock — expédiée sous 24h
                  </p>
</div>

<div className="space-y-2">
<div className="flex flex-col sm:flex-row gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-sm font-medium tracking-tight px-4 py-2.5">
<i className="lucide lucide-shopping-bag" style={{strokeWidth: '1.5'}}></i>
<span>Ajouter au panier</span>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white text-sm px-4 py-2.5 text-zinc-800">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<p className="text-xs text-zinc-500 flex items-center gap-2">
<i className="lucide lucide-shield-check text-emerald-500" style={{strokeWidth: '1.5'}}></i>
<span className="">Paiement sécurisé · Retours gratuits sous 30 jours</span>
</p>
</div>

<div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3 flex gap-2">
<i className="lucide lucide-truck text-zinc-800 mt-0.5" style={{strokeWidth: '1.5'}}></i>
<div className="">
<p className="font-medium text-zinc-900">Livraison</p>
<p className="text-zinc-500">Offerte dès 30 000 CFA XOF · 2-4 jours ouvrés</p>
</div>
</div>
<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3 flex gap-2">
<i className="lucide lucide-undo-2 text-zinc-800 mt-0.5" style={{strokeWidth: '1.5'}}></i>
<div className="">
<p className="font-medium text-zinc-900">Retours</p>
<p className="text-zinc-500">30 jours pour changer d’avis</p>
</div>
</div>
</div>

<div className="border border-zinc-200 rounded-2xl bg-zinc-50 p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<h2 className="text-sm font-medium tracking-tight text-zinc-900">
                      Détails du produit
                    </h2>
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                      Ref. MC-ROBE-2025
                    </span>
</div>
<p className="text-sm text-zinc-700">
                    Robe midi en satin fluide au tombé élégant, drapée sur le devant
                    avec un dos nu ajustable. Idéale pour les soirées, mariages,
                    ou événements habillés tout en restant confortable.
                  </p>
<div className="grid grid-cols-2 gap-2 text-xs text-zinc-500">
<div className="">
<p className="font-medium text-zinc-800">Composition</p>
<p className="">97% polyester recyclé · 3% élasthanne</p>
</div>
<div className="">
<p className="font-medium text-zinc-800">Entretien</p>
<p className="">Lavage délicat à 30°C · Séchage à l’air libre</p>
</div>
</div>
</div>
</div>
</div>

<div className="pt-2 border-t border-zinc-200">
<div className="flex items-center justify-between gap-2 mb-4">
<h2 className="text-sm sm:text-base font-medium tracking-tight text-zinc-900">
                  Vous aimerez aussi
                </h2>
<button className="text-xs text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1">
                  Voir tout
                  <i className="lucide lucide-arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-[0.7rem] tracking-tight px-3 py-1.5">
                        Voir le produit
                      </button>
</div>
</div>
<div className="mt-1.5 flex flex-col gap-0.5">
<p className="text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                      Robe courte
                    </p>
<h3 className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-2">
                      Robe chemise oversize « Sunday Market »
                    </h3>
<span className="text-sm font-medium text-zinc-900">30 000 CFA XOF</span>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute top-2 left-2">
<span className="inline-flex rounded-full bg-emerald-500 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5">
                        Eco
                      </span>
</div>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-[0.7rem] tracking-tight px-3 py-1.5">
                        Voir le produit
                      </button>
</div>
</div>
<div className="mt-1.5 flex flex-col gap-0.5">
<p className="text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                      Robe longue
                    </p>
<h3 className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-2">
                      Robe portefeuille en lin « Riviera »
                    </h3>
<span className="text-sm font-medium text-zinc-900" style={{}}>25 000 CFA XOF</span>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute top-2 left-2">
<span className="inline-flex text-[0.65rem] uppercase text-white tracking-[0.18em] bg-rose-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">-40%</span>
</div>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-[0.7rem] tracking-tight px-3 py-1.5">
                        Voir le produit
                      </button>
</div>
</div>
<div className="mt-1.5 flex flex-col gap-0.5">
<p className="text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                      Ensemble
                    </p>
<h3 className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-2">
                      Ensemble jupe + top « Soft Sunset »
                    </h3>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">9000 CFA XOF</span>
<span className="text-[0.7rem] line-through text-zinc-400">15 000</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-[0.7rem] tracking-tight px-3 py-1.5">
                        Voir le produit
                      </button>
</div>
</div>
<div className="mt-1.5 flex flex-col gap-0.5">
<p className="text-[0.7rem] text-zinc-500 uppercase tracking-[0.18em]">
                      Robe imprimée
                    </p>
<h3 className="text-xs sm:text-sm font-medium text-zinc-900 line-clamp-2">
                      Robe fluide imprimé fleuri « Bloom »
                    </h3>
<span className="text-sm font-medium text-zinc-900">30 000 CFA XOF</span>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="sm:py-10 max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4 bg-white">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5 sm:mb-7">
<div className="">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
                Robes tendance
              </h2>
<p className="text-sm sm:text-base text-zinc-500 mt-1">
                1 284 articles • Filtrez par style, couleur, prix, taille.
              </p>
</div>
<div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
<button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<i className="lucide lucide-sliders-horizontal text-yellow-400" style={{strokeWidth: '1.5'}}></i>
                Filtres
              </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Nouveautés
              </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span>-30% et plus</span>
</button>
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span className="text-zinc-500">Trier par</span>
<select className="outline-none cursor-pointer text-xs bg-transparent text-zinc-800">
<option>Populaires</option>
<option>Nouveautés</option>
<option>Prix croissant</option>
<option>Prix décroissant</option>
</select>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-7 text-xs">
<button className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black px-3 py-1.5">
<span>Taille S - XL</span>
<i className="lucide lucide-chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span>Couleur</span>
<div className="flex -space-x-1">
<span className="h-3 w-3 rounded-full border border-zinc-300 bg-black"></span>
<span className="h-3 w-3 rounded-full border border-zinc-300 bg-rose-500"></span>
<span className="h-3 w-3 rounded-full border border-zinc-300 bg-sky-500"></span>
</div>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span>Matière</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span>Occasion</span>
</button>
<button className="inline-flex items-center gap-1 rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-zinc-800">
<span className="">Col &amp; manches</span>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 sm:gap-5">

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>

<div className="absolute top-2 left-2 flex flex-col gap-1">
<span className="inline-flex rounded-full bg-rose-500 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5">
                    -40%
                  </span>
<span className="inline-flex rounded-full bg-black/80 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5 border border-yellow-400/60">
                    Best-seller
                  </span>
</div>

<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe midi
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe satinée drapée dos nu « Midnight City »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">9000 CFA XOF</span>
<span className="line-through text-xs text-zinc-400">15 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4,7</span>
<span className="text-zinc-500">(1 248 avis)</span>
</div>
<div className="flex items-center gap-1 mt-1">
<span className="h-3 w-3 rounded-full bg-black border border-zinc-300"></span>
<span className="h-3 w-3 rounded-full bg-rose-500 border border-zinc-300"></span>
<span className="h-3 w-3 rounded-full bg-sky-500 border border-zinc-300"></span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<div className="absolute top-2 left-2">
<span className="inline-flex rounded-full bg-black/80 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5 border border-sky-400/70">
                    Nouveauté
                  </span>
</div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe courte
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe chemise oversize en coton bio « Sunday Market »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900" style={{}}>30 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span className="">4,3</span>
<span className="text-zinc-500">(382 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<div className="absolute top-2 left-2 flex gap-1">
<span className="inline-flex rounded-full bg-emerald-500 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5">
                    Eco
                  </span>
</div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe longue
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe portefeuille en lin mélangé « Riviera »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">20 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span className="">4,9</span>
<span className="text-zinc-500">(214 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<div className="absolute top-2 left-2">
<span className="inline-flex text-[0.65rem] uppercase text-white tracking-[0.18em] bg-black/80 border-rose-500 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2">-40%</span>
</div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Ensemble
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Ensemble jupe + top côtelé « Soft Sunset »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">9000</span>
<span className="line-through text-xs text-zinc-400">15 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4,5</span>
<span className="text-zinc-500">(621 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe blazer
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe blazer structurée avec ceinture « Boardroom »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">20 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4,1</span>
<span className="text-zinc-500">(112 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<div className="absolute top-2 left-2">
<span className="inline-flex text-[0.65rem] uppercase text-white tracking-[0.18em] bg-rose-500 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">-40%</span>
</div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe bustier
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe bustier plissée « Gala Night »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900" style={{}}>9000 CFA XOF</span>
<span className="line-through text-xs text-zinc-400">15 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span className="">4,6</span>
<span className="text-zinc-500">(857 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe côtelée
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe longue côtelée col montant « Minimal »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">50 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span className="">4,4</span>
<span className="text-zinc-500">(349 avis)</span>
</div>
</div>
</article>

<article className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
<div className="aspect-[3/4] bg-gradient-to-b from-zinc-100 via-white to-zinc-100"></div>
<div className="absolute top-2 left-2">
<span className="inline-flex rounded-full bg-black/80 text-white text-[0.65rem] tracking-[0.18em] uppercase px-2 py-0.5 border border-yellow-400">
                    En stock limité
                  </span>
</div>
<button className="absolute top-2 right-2 rounded-full bg-white/80 border border-zinc-200 p-1">
<i className="lucide lucide-heart text-rose-400" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="absolute inset-x-2 bottom-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
<button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-3 py-1.5">
                    Ajouter au panier
                  </button>
</div>
</div>
<div className="mt-2 flex flex-col gap-0.5">
<p className="text-xs text-zinc-500 uppercase tracking-[0.18em]">
                  Robe imprimée
                </p>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">
                  Robe fluide imprimé fleuri « Bloom »
                </h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm font-medium text-zinc-900">25 000 CFA XOF</span>
</div>
<div className="flex items-center gap-1 mt-1 text-xs text-yellow-400">
<i className="lucide lucide-star" style={{strokeWidth: '1.5'}}></i>
<span>4,8</span>
<span className="text-zinc-500">(931 avis)</span>
</div>
</div>
</article>
</div>

<div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<p className="text-sm text-zinc-500">
              Affichage de <span className="font-medium text-zinc-900">1 – 32</span> sur
              <span className="font-medium text-zinc-900">1 284</span> robes.
            </p>
<div className="flex items-center gap-1 text-xs">
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white h-8 w-8 text-zinc-800">
<i className="lucide lucide-chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black h-8 w-8">
                1
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white h-8 w-8 text-zinc-800">
                2
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white h-8 w-8 text-zinc-800">
                3
              </button>
<span className="px-1 text-zinc-500">…</span>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white h-8 w-8 text-zinc-800">
                10
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white h-8 w-8 text-zinc-800">
<i className="lucide lucide-chevron-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 bg-white mt-6">
<div className="max-w-6xl mx-auto pt-7 pr-4 pb-7 pl-4 sm:py-9">
<div className="grid gap-6 sm:grid-cols-[1.5fr,1fr,1fr,1.2fr]">
<div className="">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-rose-500 to-sky-500 p-1.5">
<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center ring-2 ring-zinc-900/80">
<div className="flex gap-1">
<span className="h-4 w-2 border-b-2 border-zinc-900 rounded-b-full"></span>
<span className="h-4 w-2 border-b-2 border-zinc-900 rounded-b-full"></span>
</div>
</div>
</div>
<span className="text-xl font-semibold tracking-[0.32em] text-zinc-900">DRESSINGFLOW</span>
</div>
<p className="mt-3 text-sm text-zinc-600 max-w-sm">
                Une mode accessible, inspirée des tendances internationales,
                pensée pour toutes les silhouettes. Dressingflow, votre dressing sans prise de tête.
              </p>
<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-truck" style={{strokeWidth: '1.5'}}></i>
                  Livraison suivie
                </span>
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-undo-2" style={{strokeWidth: '1.5'}}></i>
                  Retours 30 jours
                </span>
<span className="inline-flex items-center gap-1">
<i className="lucide lucide-shield-check" style={{strokeWidth: '1.5'}}></i>
                  Paiement sécurisé
                </span>
</div>
</div>
<div className="text-xs">
<h4 className="text-xs font-medium tracking-[0.18em] uppercase text-zinc-500">
                Boutique
              </h4>
<ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
<li className=""><button className="hover:text-zinc-900">ESPACES COLABORATIF</button></li>
<li className=""><button className="hover:text-zinc-900">Nouveautés</button></li>
<li className=""><button className="hover:text-zinc-900">FEMMES</button></li>
<li className=""><button className="hover:text-zinc-900">HOMMES</button></li>
<li className=""><button className="hover:text-zinc-900">Accessoires</button></li>
</ul>
</div>
<div className="text-xs">
<h4 className="text-xs font-medium tracking-[0.18em] uppercase text-zinc-500">
                Aide
              </h4>
<ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
<li className=""><button className="hover:text-zinc-900">FAQ</button></li>
<li className=""><button className="hover:text-zinc-900">Livraison &amp; retours</button></li>
<li className=""><button className="hover:text-zinc-900">Suivi de commande</button></li>
<li className=""><button className="hover:text-zinc-900">Contact</button></li>
<li className=""><button className="hover:text-zinc-900">Guide des tailles</button></li>
</ul>
</div>
<div className="text-xs">
<h4 className="text-xs font-medium tracking-[0.18em] uppercase text-zinc-500">
                Newsletter
              </h4>
<p className="mt-3 text-sm text-zinc-600">
                -10% sur votre prochaine commande en vous inscrivant.
              </p>
<form className="mt-3 flex gap-2">
<input className="flex-1 border border-zinc-300 bg-white rounded-full text-sm px-3 py-1.5 outline-none focus:border-yellow-400 text-zinc-900 placeholder:text-zinc-400" placeholder="Votre e-mail" type="email"/>
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-yellow-400 to-sky-500 text-black text-xs tracking-tight px-4 py-1.5" type="button">
                  OK
                </button>
</form>
<p className="mt-2 text-[0.65rem] text-zinc-500">
                En vous inscrivant, vous acceptez de recevoir nos offres par e-mail. 
                Désabonnement en un clic.
              </p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[0.7rem] text-zinc-500">
<div className="flex flex-wrap items-center gap-3">
<span>© 2025 Dressingflow.</span>
<button className="hover:text-zinc-900">Conditions générales</button>
<button className="hover:text-zinc-900">Politique de confidentialité</button>
<button className="hover:text-zinc-900">Cookies</button>
</div>
<div className="flex items-center gap-2">
<span className="">Pays :</span>
</div></div></div></footer></div>
    </>
  );
}
