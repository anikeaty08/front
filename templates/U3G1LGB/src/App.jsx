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
      tailwind.config = {theme:{extend:{fontFamily:{sans:['Inter', 'ui-sans-serif','system-ui']}}}}


        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            // Mobile menu functionality
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
      

<header className="w-full bg-white border-b border-gray-100">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

<a className="text-lg sm:text-xl font-semibold text-green-600 whitespace-nowrap select-none" href="#">C'est fait dans l'Eure</a>

<ul className="hidden md:flex items-center gap-8 ml-10">
<li><a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">Producteurs</a></li>
<li><a className="text-sm font-medium text-green-600 hover:text-green-700 transition" href="#">Produits</a></li>
<li><a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">À propos</a></li>
</ul>

<div className="flex items-center gap-6">
<button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition">
<i className="w-5 h-5 text-green-600" data-lucide="map-pin"></i>
<span className="hidden sm:inline">Évreux, 27000</span>
</button>
<button className="p-2 rounded-md hover:bg-gray-100 transition md:ml-2">
<i className="w-5 h-5 text-gray-700" data-lucide="user"></i>
</button>

<button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition" id="mobile-menu-button">
<i className="w-5 h-5 text-gray-700" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="md:hidden px-4 pt-2 pb-4 space-y-2 hidden" id="mobile-menu">
<a className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">Producteurs</a>
<a className="block text-sm font-medium text-green-600 hover:text-green-700 transition" href="#">Produits</a>
<a className="block text-sm font-medium text-gray-700 hover:text-gray-900 transition" href="#">À propos</a>
</div>
</header>
<main className="min-h-screen">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8 fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Producteurs Locaux</h1>
<p className="text-gray-600 mb-4">Découvrez les meilleurs produits de nos producteurs de l'Eure</p>
<div className="flex items-center space-x-6 text-sm text-gray-500">
<span>247 producteurs</span>
<span>•</span>
<span>1,832 produits</span>
<span>•</span>
<span>Livraison sous 24h</span>
</div>
</div>
<div className="lg:grid lg:grid-cols-4 lg:gap-8">

<div className="mb-8 lg:mb-0 fade-in" style={{animationDelay: '0.2s'}}>
<div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
<h2 className="text-lg font-medium text-gray-900 mb-6">Filtres</h2>

<div className="mb-6">
<div className="relative">
<i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Rechercher un produit..." type="text"/>
</div>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Prix</label>
<div className="space-y-3">
<div className="flex space-x-2">
<input className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="Min" type="number"/>
<input className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="Max" type="number"/>
</div>
</div>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Distance</label>
<div className="space-y-2">
<label className="flex items-center">
<input className="text-green-600 border-gray-300 focus:ring-green-500" name="distance" type="radio"/>
<span className="ml-2 text-sm text-gray-600">Moins de 5 km</span>
</label>
<label className="flex items-center">
<input className="text-green-600 border-gray-300 focus:ring-green-500" name="distance" type="radio"/>
<span className="ml-2 text-sm text-gray-600">Moins de 15 km</span>
</label>
<label className="flex items-center">
<input className="text-green-600 border-gray-300 focus:ring-green-500" name="distance" type="radio"/>
<span className="ml-2 text-sm text-gray-600">Moins de 30 km</span>
</label>
</div>
</div>

<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Labels</label>
<div className="space-y-2">
<label className="flex items-center">
<input className="text-green-600 border-gray-300 rounded focus:ring-green-500" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Bio</span>
</label>
<label className="flex items-center">
<input className="text-green-600 border-gray-300 rounded focus:ring-green-500" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">AOC</span>
</label>
<label className="flex items-center">
<input className="text-green-600 border-gray-300 rounded focus:ring-green-500" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Fait maison</span>
</label>
<label className="flex items-center">
<input className="text-green-600 border-gray-300 rounded focus:ring-green-500" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Vegan</span>
</label>
</div>
</div>

<div className="mb-6">
<label className="flex items-center">
<input className="text-green-600 border-gray-300 rounded focus:ring-green-500" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Disponible maintenant</span>
</label>
</div>
<button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                            Appliquer les filtres
                        </button>
</div>
</div>

<div className="lg:col-span-3">

<div className="flex flex-wrap items-center justify-between mb-6 fade-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center space-x-4 mb-4 lg:mb-0">
<select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
<option>Trier par popularité</option>
<option>Prix croissant</option>
<option>Prix décroissant</option>
<option>Distance</option>
<option>Nouveautés</option>
</select>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="grid-3x3"></i>
</button>
<button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="list"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.4s'}}>
<div className="relative">
<img alt="Fromage fermier" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Bio</span>
</div>
<div className="absolute top-3 right-3">
<button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-600" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Camembert fermier</h3>
<span className="text-lg font-semibold text-gray-900">12,50€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Ferme du Vaudreuil • 2.5 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.8 (24)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.5s'}}>
<div className="relative">
<img alt="Légumes bio" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex space-x-2">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Bio</span>
<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Local</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Panier de légumes</h3>
<span className="text-lg font-semibold text-gray-900">18,00€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Les Jardins d'Évreux • 8.2 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.9 (41)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.6s'}}>
<div className="relative">
<img alt="Miel artisanal" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Artisanal</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Miel d'acacia</h3>
<span className="text-lg font-semibold text-gray-900">9,50€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Rucher des Collines • 12.1 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.7 (18)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.7s'}}>
<div className="relative">
<img alt="Pain artisanal" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">Frais</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Pain de campagne</h3>
<span className="text-lg font-semibold text-gray-900">4,20€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Boulangerie Tradition • 3.8 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.6 (32)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.8s'}}>
<div className="relative">
<img alt="Oeufs fermiers" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">Fermier</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Œufs frais (x12)</h3>
<span className="text-lg font-semibold text-gray-900">6,80€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Ferme des Prés • 5.2 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.9 (67)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>

<div className="product-card bg-white rounded-xl border border-gray-200 overflow-hidden fade-in" style={{animationDelay: '0.9s'}}>
<div className="relative">
<img alt="Pommes locales" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&amp;h=300&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex space-x-2">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Bio</span>
<span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">Saison</span>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between mb-2">
<h3 className="font-medium text-gray-900">Pommes du verger (1kg)</h3>
<span className="text-lg font-semibold text-gray-900">3,50€</span>
</div>
<p className="text-sm text-gray-600 mb-3">Verger de Normandie • 7.4 km</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<i className="w-4 h-4 text-yellow-400 fill-current" data-lucide="star"></i>
<span className="text-sm text-gray-600">4.5 (29)</span>
</div>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                                        Ajouter
                                    </button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between fade-in" style={{animationDelay: '1s'}}>
<div className="text-sm text-gray-700">
                            Affichage de <span className="font-medium">1</span> à <span className="font-medium">12</span> sur <span className="font-medium">247</span> produits
                        </div>
<div className="flex items-center space-x-2">
<button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="px-3 py-2 bg-green-600 text-white rounded-lg">1</button>
<button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
<button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
<button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t-4 border-emerald-500 bg-[#0d1623] text-gray-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

<div>
<h3 className="text-lg font-semibold text-white mb-4">C'est fait dans l'Eure</h3>
<p className="text-sm leading-relaxed mb-6">La plateforme qui met en relation consommateurs et producteurs locaux de l'Eure.</p>
<div className="flex space-x-4">
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" href="#">
<i className="w-5 h-5 text-white" data-lucide="facebook"></i>
</a>
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" href="#">
<i className="w-5 h-5 text-white" data-lucide="instagram"></i>
</a>
<a className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition" href="#">
<i className="w-5 h-5 text-white" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="text-base font-semibold text-white mb-4">Découvrir</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition" href="#">Producteurs</a></li>
<li><a className="hover:text-white transition" href="#">Produits</a></li>
<li><a className="hover:text-white transition" href="#">Marchés</a></li>
<li><a className="hover:text-white transition" href="#">Événements</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-white mb-4">Aide</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition" href="#">Comment ça marche</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
<li><a className="hover:text-white transition" href="#">FAQ</a></li>
<li><a className="hover:text-white transition" href="#">Support</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold text-white mb-4">Producteurs</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition" href="#">Inscription</a></li>
<li><a className="hover:text-white transition" href="#">Ressources</a></li>
<li><a className="hover:text-white transition" href="#">Communauté</a></li>
</ul>
</div>
</div>
<hr className="border-t border-white/10 my-10"/>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-sm">
<p>© 2024 C'est fait dans l'Eure. Tous droits réservés.</p>
<div className="flex flex-wrap gap-6">
<a className="hover:text-white transition" href="#">Mentions légales</a>
<a className="hover:text-white transition" href="#">Confidentialité</a>
<a className="hover:text-white transition" href="#">CGU</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
