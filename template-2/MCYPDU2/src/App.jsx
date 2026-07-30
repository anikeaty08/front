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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50 animate-fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-4">
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={(e) => { history.back() }}>
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<h1 className="text-lg font-semibold text-gray-900">Ferme du Soleil</h1>
</div>
<div className="flex items-center space-x-3">
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
<button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
<i className="w-5 h-5" data-lucide="share"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-80 bg-gradient-to-r from-green-500 to-green-600 animate-fade-in delay-100">
<div className="absolute inset-0 bg-black bg-opacity-20"></div>
<img alt="Ferme du Soleil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h1 className="text-3xl font-bold tracking-tight mb-2">Ferme du Soleil</h1>
<p className="text-lg opacity-90">Agriculture biologique depuis 1995</p>
</div>
</section>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="bg-white rounded-2xl p-8 border border-gray-200 animate-slide-up delay-200">
<div className="flex items-start space-x-4 mb-6">
<img alt="Jean Dupont" className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" />
<div>
<h2 className="text-xl font-semibold text-gray-900">Jean Dupont</h2>
<p className="text-gray-600">Agriculteur bio passionné</p>
<div className="flex items-center space-x-4 mt-2">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">4.9 (127 avis)</span>
</div>
</div>
</div>
</div>
<p className="text-gray-700 leading-relaxed">
                        Située au cœur de l'Eure, notre ferme familiale cultive depuis plus de 25 ans des légumes biologiques de saison. Nous privilégions les méthodes traditionnelles et respectueuses de l'environnement pour vous offrir des produits d'exception.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 animate-slide-up delay-300">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-gray-900">Nos Produits</h2>
<button className="text-green-600 hover:text-green-700 text-sm font-medium">Voir tout</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-3">
<img alt="Légumes de saison" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" />
<div className="absolute top-3 left-3">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Bio</span>
</div>
</div>
<h3 className="font-medium text-gray-900 mb-1">Panier de légumes de saison</h3>
<p className="text-gray-600 text-sm mb-2">Sélection hebdomadaire de légumes frais</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900">25€</span>
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
<span>Ajouter</span>
</button>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden mb-3">
<img alt="Œufs fermiers" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" />
<div className="absolute top-3 left-3">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Fermier</span>
</div>
</div>
<h3 className="font-medium text-gray-900 mb-1">Œufs fermiers (x12)</h3>
<p className="text-gray-600 text-sm mb-2">Poules élevées en plein air</p>
<div className="flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900">6€</span>
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 animate-slide-up delay-400">
<h2 className="text-xl font-semibold text-gray-900 mb-6">Avis Clients</h2>
<div className="space-y-6">
<div className="flex space-x-4">
<img alt="Marie L." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108755-2616b612b2ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" />
<div className="flex-1">
<div className="flex items-center space-x-2 mb-2">
<h4 className="font-medium text-gray-900">Marie L.</h4>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-500">Il y a 2 jours</span>
</div>
<p className="text-gray-700">Excellents légumes, très frais et savoureux. Jean est toujours de bon conseil pour choisir les produits de saison. Je recommande vivement !</p>
</div>
</div>
<div className="flex space-x-4">
<img alt="Pierre M." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80" />
<div className="flex-1">
<div className="flex items-center space-x-2 mb-2">
<h4 className="font-medium text-gray-900">Pierre M.</h4>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-500">Il y a 1 semaine</span>
</div>
<p className="text-gray-700">Service client exemplaire et produits d'une qualité exceptionnelle. La livraison est toujours ponctuelle.</p>
</div>
</div>
</div>
<button className="mt-6 text-green-600 hover:text-green-700 text-sm font-medium">Voir tous les avis</button>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl p-6 border border-gray-200 animate-slide-up delay-500">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Informations</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 mt-0.5" data-lucide="map-pin"></i>
<div>
<p className="text-sm font-medium text-gray-900">Adresse</p>
<p className="text-sm text-gray-600">123 Route de la Ferme<br />27000 Évreux, Eure</p>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 mt-0.5" data-lucide="phone"></i>
<div>
<p className="text-sm font-medium text-gray-900">Téléphone</p>
<p className="text-sm text-gray-600">02 32 XX XX XX</p>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-400 mt-0.5" data-lucide="clock"></i>
<div>
<p className="text-sm font-medium text-gray-900">Horaires</p>
<p className="text-sm text-gray-600">Lun-Sam: 8h-18h<br />Dim: 9h-12h</p>
</div>
</div>
</div>
<button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
<i className="w-4 h-4" data-lucide="phone"></i>
<span>Appeler</span>
</button>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-200 animate-slide-up delay-600">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">Agriculture Biologique</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">Circuit Court</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i>
</div>
<span className="text-sm text-gray-700">Producteur Local</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
