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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm animate-slide-in-left">
<div className="sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">


<div className="flex pt-2 pb-2 items-center justify-end">
<div className="flex items-center gap-2 text-sm">
<button className="px-2 py-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              Français
            </button>
<div className="w-px h-4 bg-gray-200"></div>
<button className="hover:text-blue-600 hover:bg-blue-50 transition-colors text-gray-700 rounded-lg pt-1 pr-2 pb-1 pl-2">
              EUR €
            </button>
</div>
</div>
<div className="flex h-20 max-w-full mr-auto ml-auto items-center justify-between">

<div className="flex items-center gap-10">
<a className="flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[1rem] flex items-center justify-center shadow-lg shadow-blue-600/20">
<span className="text-white font-bold text-xl tracking-tighter">
                  G
                </span>
</div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">
                Govoir
              </span>
</a>

<nav className="hidden lg:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="">Rechercher</span>
</a>
<a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-grid-3x3 w-4 h-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M3 15h18"></path>
<path d="M9 3v18"></path>
<path d="M15 3v18"></path>
</svg>
<span className="">Catégories</span>
</a>
<a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
<span className="">Nouveautés</span>
</a>
</nav>
</div>

<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors relative">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
<span className="">Favoris</span>
<span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                3
              </span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors relative">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<span>Alertes</span>
<span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                2
              </span>
</button>
<div className="w-px h-8 bg-gray-200 mx-2 hidden sm:block"></div>
<button className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="hidden md:inline">Se connecter</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30">
<svg className="lucide lucide-plus-circle w-4 h-4" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
<span className="hidden sm:inline">Déposer une annonce</span>
<span className="sm:hidden">Déposer</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
</div>

<div className="absolute top-20 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-[1.5rem] rotate-12 hidden lg:block animate-float"></div>
<div className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full hidden lg:block animate-float"></div>
<div className="absolute top-40 right-40 w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-[1rem] -rotate-12 hidden lg:block animate-float"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-10">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 animate-scale-in">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
<span className="text-sm font-medium">
              Plus de 2 millions d'annonces actives
            </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-slide-in-left">
            Achetez et vendez
            <br/>
<span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              près de chez vous
            </span>
</h1>
<p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto animate-slide-in-right">
            Trouvez les meilleures offres dans votre région ou vendez ce dont
            vous n'avez plus besoin
          </p>
</div>

<div className="max-w-4xl mx-auto animate-scale-in">
<div className="bg-white rounded-2xl shadow-2xl p-3 backdrop-blur-xl border border-white/20">
<div className="flex flex-col lg:flex-row gap-3">
<div className="flex-1 flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20 transition-all">
<svg className="lucide lucide-search w-5 h-5 text-gray-400 flex-shrink-0" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="flex-1 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500 text-base font-medium" placeholder="Que recherchez-vous ?" type="text"/>
</div>
<div className="flex items-center gap-3 px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20 transition-all">
<svg className="lucide lucide-map-pin w-5 h-5 text-gray-400 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<input className="w-full lg:w-48 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500 text-base font-medium" placeholder="Localisation" type="text"/>
<button className="text-gray-400 hover:text-gray-600">
<svg className="lucide lucide-crosshair w-5 h-5" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</button>
</div>
<button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 flex items-center justify-center gap-2">
<span className="">Rechercher</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-2">
<span className="text-sm text-blue-100 font-medium">
              Recherches populaires:
            </span>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all border border-white/20 hover:border-white/30" href="#">
              iPhone
            </a>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all border border-white/20 hover:border-white/30" href="#">
              Vélo électrique
            </a>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all border border-white/20 hover:border-white/30" href="#">
              Appartement
            </a>
<a className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all border border-white/20 hover:border-white/30" href="#">
              PS5
            </a>
</div>
</div>

</div>
</section>

<section className="sm:px-6 lg:px-8 sm:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex mb-8 items-center justify-between">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">
            Catégories populaires
          </h2>
<p className="text-gray-600">
            Explorez nos catégories les plus recherchées
          </p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
          Voir toutes les catégories
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

<a className="flex flex-col items-center gap-3 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105 group bg-white border-gray-200 border rounded-[1.5rem] pt-5 pr-5 pb-5 pl-5" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-[1.25rem] group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-car w-7 h-7 text-blue-600" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
<circle cx="7" cy="17" r="2"></circle>
<path d="M9 17h6"></path>
<circle cx="17" cy="17" r="2"></circle>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Véhicules
          </span>
<span className="text-xs text-gray-500">12.5k annonces</span>
</a>
<a className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-[1.25rem] group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-home w-7 h-7 text-orange-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Immobilier
          </span>
<span className="text-xs text-gray-500">8.2k annonces</span>
</a>
<a className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
<svg className="lucide lucide-smartphone w-7 h-7 text-blue-600" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Multimédia
          </span>
<span className="text-xs text-gray-500">15.3k annonces</span>
</a>
<a className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
<svg className="lucide lucide-sofa w-7 h-7 text-orange-600" data-lucide="sofa" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
<path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
<path d="M4 18v2"></path>
<path d="M20 18v2"></path>
<path d="M12 4v9"></path>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Maison
          </span>
<span className="text-xs text-gray-500">9.7k annonces</span>
</a>
<a className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
<svg className="lucide lucide-shirt w-7 h-7 text-blue-600" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Mode
          </span>
<span className="text-xs text-gray-500">18.4k annonces</span>
</a>
<a className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group" href="#">
<div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
<svg className="lucide lucide-briefcase w-7 h-7 text-orange-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
</div>
<span className="text-sm font-semibold text-gray-900 text-center">
            Emploi
          </span>
<span className="text-xs text-gray-500">6.1k annonces</span>
</a>
</div>
</section>
<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">
            Annonces récentes
          </h2>
<p className="text-gray-600">Dernières publications près de chez vous</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5H3"></path>
<path d="M12 19H3"></path>
<path d="M14 3v4"></path>
<path d="M16 17v4"></path>
<path d="M21 12h-9"></path>
<path d="M21 19h-5"></path>
<path d="M21 5h-7"></path>
<path d="M8 10v4"></path>
<path d="M8 12H3"></path>
</svg>
<span>Filtres</span>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 gap-x-4 gap-y-4">
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-[1.5rem] overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Laptop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-[0.75rem] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              MacBook Pro 14" M2 Pro
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>16 Go RAM</span>
<span className="mx-1">•</span>
<span>512 Go SSD</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">1 899 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Bordeaux</span>
</div>
<span>Il y a 30min</span>
</div>
</div>
</a>
<a className="flex-shrink-0 overflow-hidden hover:shadow-lg transition-all group bg-white w-56 border-gray-200 border rounded-xl" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Guitare" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Guitare électrique Fender Stratocaster
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>Mexicaine</span>
<span className="mx-1">•</span>
<span>Housse incl.</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">550 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Toulouse</span>
</div>
<span>Il y a 1h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Table à manger design en bois massif
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>8 personnes</span>
<span className="mx-1">•</span>
<span>Chêne massif</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">320 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Nantes</span>
</div>
<span>Il y a 2h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Appareil photo" className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover" src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Appareil photo Canon EOS R6
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>24–105 mm</span>
<span className="mx-1">•</span>
<span className="">Comme neuf</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">2 100 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Strasbourg</span>
</div>
<span className="">Il y a 3h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Chien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1604467715878-83e57e8bc129?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Chiots Golden Retriever LOF
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>LOF</span>
<span className="mx-1">•</span>
<span>Vaccinés</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">1 200 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Rennes</span>
</div>
<span>Il y a 4h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Console" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              PlayStation 5 + 2 manettes + 5 jeux
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span className="">2 manettes</span>
<span className="mx-1">•</span>
<span>5 jeux</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">550 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Nice</span>
</div>
<span>Il y a 5h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Montre" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Montre connectée Apple Watch Series 8
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span>45 mm</span>
<span className="mx-1">•</span>
<span className="">GPS</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">380 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Lille</span>
</div>
<span>Il y a 6h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Plantes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&amp;h=450&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Lot de plantes d'intérieur
            </h3>
<div className="text-xs text-gray-500 mb-1">
<span className="">5 plantes</span>
<span className="mx-1">•</span>
<span>Bon état</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">60 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Montpellier</span>
</div>
<span>Il y a 8h</span>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Voitures</h2>
<p className="text-gray-600">Découvrez les dernières annonces</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
          Voir tout
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="flex gap-4 overflow-x-auto pb-2">
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="BMW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              BMW Série 3 2020
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">28 500 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>2020</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Lyon</span>
</div>
<span>Il y a 2h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Renault" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Renault Clio 5 2021
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">15 900 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>2021</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Marseille</span>
</div>
<span>Il y a 4h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Tesla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Tesla Model 3 2022
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">42 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1">
<span>2022</span>
<span className="mx-1">•</span>
<span>Électrique</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Paris</span>
</div>
<span>Il y a 1h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Audi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Audi A4 2019
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">24 500 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>2019</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Toulouse</span>
</div>
<span>Il y a 6h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Peugeot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Peugeot 3008 2021
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">26 900 €</span>
</div>
<div className="text-xs text-gray-500 mb-1">
<span className="">2021</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Nantes</span>
</div>
<span>Il y a 3h</span>
</div>
</div>
</a>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Immobilier</h2>
<p className="text-gray-600">Découvrez les dernières annonces</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
          Voir tout
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="flex gap-4 overflow-x-auto pb-2">
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Appartement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Appartement 3 pièces
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">285 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>3 pièces</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Paris 12ème</span>
</div>
<span>Il y a 1h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Maison" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Maison 5 pièces
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">425 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>5 pièces</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Lyon</span>
</div>
<span>Il y a 2h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Villa avec piscine
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">890 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>Piscine</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Nice</span>
</div>
<span>Il y a 4h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Studio refait à neuf
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">165 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>Studio</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Marseille</span>
</div>
<span>Il y a 3h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Loft" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Loft industriel
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">520 000 €</span>
</div>
<div className="text-xs text-gray-500 mb-1"><span>Loft</span></div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Bordeaux</span>
</div>
<span>Il y a 5h</span>
</div>
</div>
</a>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Vêtements</h2>
<p className="text-gray-600">Découvrez les dernières annonces</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#">
          Voir tout
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="flex gap-4 overflow-x-auto pb-2">
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Baskets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Nike Air Max 90
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">85 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Marseille</span>
</div>
<span>Il y a 1j</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Veste" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Veste en cuir
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">120 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Paris</span>
</div>
<span className="">Il y a 2h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Robe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Robe d'été Zara
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">35 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Lyon</span>
</div>
<span className="">Il y a 4h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Sac" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1617470522359-7b4bb090e236?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Sac à main Louis Vuitton
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">650 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="">Cannes</span>
</div>
<span>Il y a 6h</span>
</div>
</div>
</a>
<a className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group" href="#">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
<img alt="Manteau" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1603217039863-aa367a6b1b5c?w=400&amp;h=300&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
<svg className="lucide lucide-heart w-3.5 h-3.5 text-gray-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
</div>
<div className="p-3">
<h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
              Manteau d'hiver H&amp;M
            </h3>
<div className="flex items-center justify-between mb-1.5">
<span className="text-lg font-bold text-blue-600">45 €</span>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>Toulouse</span>
</div>
<span>Il y a 8h</span>
</div>
</div>
</a>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[2rem] p-8 sm:p-12 lg:p-16">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20 animate-fade-in">
<svg className="lucide lucide-sparkles w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
<path d="M4 17v2"></path>
<path d="M5 18H3"></path>
</svg>
<span className="text-sm font-medium text-white">
              Gagnez de l'argent facilement
            </span>
</div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Vendez ce que vous n'utilisez plus
          </h2>
<p className="text-lg sm:text-xl text-blue-100 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Créez une annonce en quelques clics et touchez des millions
            d'acheteurs potentiels
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
<button className="group flex items-center gap-3 px-8 py-4 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-[1rem] transition-all shadow-2xl shadow-black/20 hover:shadow-3xl hover:scale-105 transform">
<svg className="lucide lucide-plus-circle w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
<span>Déposer une annonce gratuite</span>
</button>
<button className="flex items-center gap-2 px-8 py-4 text-base font-medium text-white hover:text-blue-100 transition-colors">
<span>Comment ça marche ?</span>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="mt-12 grid grid-cols-3 gap-8 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
<div>
<div className="text-3xl font-bold text-white mb-1">2M+</div>
<div className="text-sm text-blue-200">Utilisateurs actifs</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">500k+</div>
<div className="text-sm text-blue-200">Annonces par mois</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">98%</div>
<div className="text-sm text-blue-200">Satisfaction client</div>
</div>
</div>
</div>
</div>
</section>
<style>
      @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
    </style>


<section className="relative bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 border-y border-orange-200 py-16 overflow-hidden">
<div className="absolute inset-0 opacity-5">
<div className="absolute top-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="text-center">
<div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-[1.5rem] shadow-lg shadow-orange-500/30 animate-float">
<svg className="lucide lucide-shield-check w-8 h-8 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">
              Transactions sécurisées
            </h3>
<p className="text-sm text-gray-600 leading-relaxed">
              Achetez et vendez en toute confiance avec notre système de
              paiement sécurisé et notre support dédié
            </p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] shadow-lg shadow-blue-500/30 animate-float">
<svg className="lucide lucide-users w-8 h-8 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">
              Communauté active
            </h3>
<p className="text-sm text-gray-600 leading-relaxed">
              Rejoignez des millions d'utilisateurs qui font confiance à Govoir
              pour leurs achats et ventes
            </p>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg shadow-orange-500/30">
<svg className="lucide lucide-clock w-8 h-8 text-white" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">
              Support 24/7
            </h3>
<p className="text-sm text-gray-600 leading-relaxed">
              Notre équipe est disponible pour vous aider à tout moment, 7 jours
              sur 7
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-4">À propos</h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Qui sommes-nous
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Carrières
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Presse
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-4">Assistance</h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Centre d'aide
                </a>
</li>
<li className="">
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Règles de diffusion
                </a>
</li>
<li className="">
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Conseils de sécurité
                </a>
</li>
<li className="">
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Nous contacter
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">
              Professionnels
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Espace Pro
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Solutions publicité
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  API
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Devenir partenaire
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Légal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  CGU
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  CGV
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Politique de confidentialité
                </a>
</li>
<li>
<a className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                  Gestion des cookies
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[0.75rem] flex items-center justify-center">
<span className="text-white font-bold text-sm tracking-tighter">
                    G
                  </span>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">
                  Govoir
                </span>
</div>
<span className="text-sm text-gray-600">
                © 2024 Tous droits réservés
              </span>
</div>
<div className="flex items-center gap-3">
<a className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
