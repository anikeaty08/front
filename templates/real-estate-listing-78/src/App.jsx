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
      

<header className="bg-white border-b border-zinc-200 sticky top-0 z-30">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tight">OG Estate</div>
<nav className="hidden md:flex gap-8 text-lg font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#">Accueil</a>
<a className="text-zinc-900" href="#">Biens</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Agence</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Contact</a>
</nav>
<button className="md:hidden">
<i className="w-6 h-6 text-zinc-900" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="bg-white border-b border-zinc-200 pt-16 pb-16 md:pt-24 md:pb-20">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4 max-w-3xl">
                Biens immobiliers à Marrakech
            </h1>
<p className="text-xl md:text-2xl text-zinc-500 font-normal max-w-2xl">
                Découvrez nos propriétés d'exception à la vente et à la location dans les quartiers les plus prisés.
            </p>
</div>
</section>

<div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">

<div className="lg:hidden mb-8">
<label className="flex items-center justify-center gap-2 w-full bg-white border border-zinc-300 rounded-xl py-3.5 text-lg font-medium text-zinc-900 shadow-sm cursor-pointer hover:bg-zinc-50 transition-colors" htmlFor="mobile-filter-toggle">
<i className="w-5 h-5" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
                Filtrer les résultats
            </label>
</div>
<div className="flex flex-col lg:flex-row gap-10">

<input className="peer sr-only" id="mobile-filter-toggle" type="checkbox"/>

<label className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-40 hidden peer-checked:block lg:hidden cursor-pointer" htmlFor="mobile-filter-toggle"></label>

<aside className="fixed inset-y-0 left-0 w-full max-w-sm bg-white z-50 transform -translate-x-full peer-checked:translate-x-0 lg:translate-x-0 lg:static lg:block lg:w-1/4 lg:max-w-none lg:bg-transparent lg:z-0 transition-transform duration-300 ease-in-out border-r border-zinc-200 lg:border-none shadow-2xl lg:shadow-none h-full lg:h-auto overflow-y-auto lg:overflow-visible">
<div className="p-6 lg:p-0 flex flex-col gap-10">

<div className="flex items-center justify-between lg:hidden mb-2">
<span className="text-2xl font-semibold tracking-tight">Filtres</span>
<label className="cursor-pointer p-2 hover:bg-zinc-100 rounded-full transition-colors" htmlFor="mobile-filter-toggle">
<i className="w-6 h-6 text-zinc-500" data-lucide="x" strokeWidth="1.5"></i>
</label>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-5">Statut</h3>
<div className="flex flex-col gap-4">
<label className="relative flex items-center gap-4 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">À vendre</span>
<span className="text-base text-zinc-400 font-medium">(107)</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">À louer</span>
<span className="text-base text-zinc-400 font-medium">(41)</span>
</label>
</div>
</div>
<div className="h-px bg-zinc-200/60 w-full"></div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-5">Type de bien</h3>
<div className="flex flex-col gap-4">
<label className="relative flex items-center gap-4 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">Villa</span>
<span className="text-base text-zinc-400 font-medium">(81)</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">Appartement</span>
<span className="text-base text-zinc-400 font-medium">(79)</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">Terrain</span>
<span className="text-base text-zinc-400 font-medium">(19)</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">Commerce</span>
<span className="text-base text-zinc-400 font-medium">(7)</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors flex-1">Riad</span>
<span className="text-base text-zinc-400 font-medium">(2)</span>
</label>
</div>
</div>
<div className="h-px bg-zinc-200/60 w-full"></div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-5">Quartier / Zone</h3>
<div className="flex flex-col gap-4 max-h-[280px] overflow-y-auto custom-scrollbar pr-4">
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Agdal</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Gueliz</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Hivernage</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Palmeraie</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Targa</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Amelkis</span>
</label>
<label className="relative flex items-center gap-4 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-zinc-300 rounded-md bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors flex items-center justify-center group-hover:border-zinc-500 shadow-sm">
<i className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg text-zinc-600 peer-checked:text-zinc-900 peer-checked:font-medium transition-colors">Route de l'Ourika</span>
</label>
</div>
</div>

<div className="pt-6 mt-auto lg:mt-0">
<button className="w-full py-3.5 px-4 bg-zinc-100 text-zinc-700 rounded-xl text-lg font-medium hover:bg-zinc-200 transition-colors">
                            Réinitialiser
                        </button>
</div>
</div>
</aside>

<main className="w-full lg:w-3/4 flex flex-col gap-8">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
                        148 propriétés trouvées
                    </h2>

<div className="relative group z-20 w-full sm:w-auto">
<button className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 border border-zinc-200 rounded-xl px-4 py-2.5 text-lg font-medium text-zinc-700 bg-white hover:bg-zinc-50 transition-colors focus:ring-2 focus:ring-zinc-900 focus:outline-none">
<span>Trier par: <span className="text-zinc-900">Plus récent</span></span>
<i className="w-5 h-5 text-zinc-500 group-focus-within:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute right-0 top-[calc(100%+8px)] w-full sm:w-56 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all origin-top-right">
<a className="block px-4 py-2.5 text-lg text-zinc-900 bg-zinc-50 font-medium" href="#">Plus récent</a>
<a className="block px-4 py-2.5 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Prix croissant</a>
<a className="block px-4 py-2.5 text-lg text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">Prix décroissant</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

<article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-zinc-300 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Villa moderne" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-base font-medium text-zinc-900 shadow-sm">
                                À vendre
                            </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-1.5 mb-3 text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium">Palmeraie, Marrakech</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-2 tracking-tight line-clamp-1 group-hover:text-amber-700 transition-colors">Villa Jnane Fiestan</h3>
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6 mt-1">28 500 000 MAD</p>
<div className="flex items-center justify-between text-zinc-600 text-lg border-t border-zinc-100 pt-5 mt-auto mb-6">
<div className="flex items-center gap-2" title="Chambres">
<i className="w-5 h-5" data-lucide="bed-double" strokeWidth="1.5"></i>
<span className="font-medium">6</span>
</div>
<div className="flex items-center gap-2" title="Salles de bain">
<i className="w-5 h-5" data-lucide="bath" strokeWidth="1.5"></i>
<span className="font-medium">6</span>
</div>
<div className="flex items-center gap-2" title="Surface">
<i className="w-5 h-5" data-lucide="scaling" strokeWidth="1.5"></i>
<span className="font-medium">3,200 m²</span>
</div>
</div>
<a className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-zinc-900 text-white rounded-xl text-lg font-medium hover:bg-zinc-800 transition-colors" href="#">
                                Voir détail
                            </a>
</div>
</article>

<article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-zinc-300 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Appartement Gueliz" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-base font-medium text-zinc-900 shadow-sm">
                                À louer
                            </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-1.5 mb-3 text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium">Gueliz, Marrakech</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-2 tracking-tight line-clamp-1 group-hover:text-amber-700 transition-colors">Appartement Premium</h3>
<div className="flex items-baseline gap-1 mb-6 mt-1">
<p className="text-2xl font-semibold tracking-tight text-zinc-900">15 000 MAD</p>
<span className="text-base text-zinc-500 font-medium">/ mois</span>
</div>
<div className="flex items-center justify-between text-zinc-600 text-lg border-t border-zinc-100 pt-5 mt-auto mb-6">
<div className="flex items-center gap-2" title="Chambres">
<i className="w-5 h-5" data-lucide="bed-double" strokeWidth="1.5"></i>
<span className="font-medium">2</span>
</div>
<div className="flex items-center gap-2" title="Salles de bain">
<i className="w-5 h-5" data-lucide="bath" strokeWidth="1.5"></i>
<span className="font-medium">2</span>
</div>
<div className="flex items-center gap-2" title="Surface">
<i className="w-5 h-5" data-lucide="scaling" strokeWidth="1.5"></i>
<span className="font-medium">110 m²</span>
</div>
</div>
<a className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-zinc-900 text-white rounded-xl text-lg font-medium hover:bg-zinc-800 transition-colors" href="#">
                                Voir détail
                            </a>
</div>
</article>

<article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-zinc-300 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Villa Route Ourika" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-base font-medium text-zinc-900 shadow-sm">
                                À vendre
                            </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-1.5 mb-3 text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium">Route de l'Ourika</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-2 tracking-tight line-clamp-1 group-hover:text-amber-700 transition-colors">Domaine Ibtissam</h3>
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6 mt-1">12 000 000 MAD</p>
<div className="flex items-center justify-between text-zinc-600 text-lg border-t border-zinc-100 pt-5 mt-auto mb-6">
<div className="flex items-center gap-2" title="Chambres">
<i className="w-5 h-5" data-lucide="bed-double" strokeWidth="1.5"></i>
<span className="font-medium">4</span>
</div>
<div className="flex items-center gap-2" title="Salles de bain">
<i className="w-5 h-5" data-lucide="bath" strokeWidth="1.5"></i>
<span className="font-medium">4</span>
</div>
<div className="flex items-center gap-2" title="Surface">
<i className="w-5 h-5" data-lucide="scaling" strokeWidth="1.5"></i>
<span className="font-medium">1,500 m²</span>
</div>
</div>
<a className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-zinc-900 text-white rounded-xl text-lg font-medium hover:bg-zinc-800 transition-colors" href="#">
                                Voir détail
                            </a>
</div>
</article>

<article className="group flex flex-col bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-zinc-300 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Riad Medina" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-base font-medium text-zinc-900 shadow-sm">
                                À vendre
                            </div>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center gap-1.5 mb-3 text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base font-medium">Médina, Marrakech</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-2 tracking-tight line-clamp-1 group-hover:text-amber-700 transition-colors">Riad Authentique</h3>
<p className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6 mt-1">4 500 000 MAD</p>
<div className="flex items-center justify-between text-zinc-600 text-lg border-t border-zinc-100 pt-5 mt-auto mb-6">
<div className="flex items-center gap-2" title="Chambres">
<i className="w-5 h-5" data-lucide="bed-double" strokeWidth="1.5"></i>
<span className="font-medium">5</span>
</div>
<div className="flex items-center gap-2" title="Salles de bain">
<i className="w-5 h-5" data-lucide="bath" strokeWidth="1.5"></i>
<span className="font-medium">5</span>
</div>
<div className="flex items-center gap-2" title="Surface">
<i className="w-5 h-5" data-lucide="scaling" strokeWidth="1.5"></i>
<span className="font-medium">220 m²</span>
</div>
</div>
<a className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-zinc-900 text-white rounded-xl text-lg font-medium hover:bg-zinc-800 transition-colors" href="#">
                                Voir détail
                            </a>
</div>
</article>
</div>

<div className="hidden flex-col items-center justify-center py-24 px-6 text-center bg-white border border-zinc-200 rounded-2xl">
<div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8 text-zinc-400" data-lucide="search-x" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Aucune propriété trouvée</h3>
<p className="text-lg text-zinc-500 max-w-md">Nous n'avons trouvé aucun bien correspondant à vos critères actuels. Essayez de modifier vos filtres.</p>
<button className="mt-8 py-3 px-6 bg-white border border-zinc-300 text-zinc-900 rounded-xl text-lg font-medium hover:bg-zinc-50 transition-colors">
                        Effacer les filtres
                    </button>
</div>
</main>
</div>
</div>

<footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-lg text-zinc-500">© 2024 OG Estate. Tous droits réservés.</p>
</div>
</footer>


    </>
  );
}
