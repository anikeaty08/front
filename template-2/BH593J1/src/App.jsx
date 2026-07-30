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
      {

        lucide.createIcons();

        // View toggle functionality
        const gridView = document.getElementById('gridView');
        const mapView = document.getElementById('mapView');
        const gridContent = document.getElementById('gridContent');
        const mapContent = document.getElementById('mapContent');
        const loadMore = document.getElementById('loadMore');

        let map;

        // Initialize map
        function initMap() {
            if (!map) {
                // Center on Évreux, Eure
                map = L.map('map').setView([49.0244, 1.1510], 10);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // Add markers for producers
                const producers = [
                    { name: 'Ferme des Trois Chênes', lat: 49.0944, lng: 1.4844, type: 'Bio' },
                    { name: 'Boulangerie Artisanale Martin', lat: 49.0244, lng: 1.1510, type: 'Artisan' },
                    { name: 'Élevage du Val d\'Eure', lat: 49.2144, lng: 1.1710, type: 'Local' },
                    { name: 'Fromagerie de la Vallée', lat: 49.3544, lng: 0.5110, type: 'Fermier' },
                    { name: 'Rucher des Coteaux', lat: 49.2444, lng: 1.4010, type: 'Apiculteur' },
                    { name: 'Ferme Avicole Durand', lat: 49.0844, lng: 0.5910, type: 'Plein Air' }
                ];

                producers.forEach(producer => {
                    const icon = L.divIcon({
                        html: `<div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                                 <i class="lucide-leaf w-4 h-4 text-white"></i>
                               </div>`,
                        className: 'custom-marker',
                        iconSize: [32, 32],
                        iconAnchor: [16, 16]
                    });

                    L.marker([producer.lat, producer.lng], { icon })
                        .addTo(map)
                        .bindPopup(`
                            <div class="p-2">
                                <h3 class="font-semibold text-gray-900 mb-1">${producer.name}</h3>
                                <span class="inline-flex items-center px-2 py-0.5 rounded text`)})}}
}
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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50 fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="leaf"></i>
</div>
<h1 className="text-xl font-semibold tracking-tight">Bien Manger Eure</h1>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-gray-600 hover:text-gray-900 font-medium" href="#">Accueil</a>
<a className="text-green-600 font-medium" href="#">Producteurs</a>
<a className="text-gray-600 hover:text-gray-900 font-medium" href="#">Marchés</a>
<a className="text-gray-600 hover:text-gray-900 font-medium" href="#">À propos</a>
</nav>
<button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 fade-in fade-in-delay-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
                Découvrez nos <span className="text-green-600">Producteurs Locaux</span>
</h1>
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Mangez sainement et soutenez l'économie locale de l'Eure. Découvrez plus de 120 producteurs passionnés près de chez vous.
            </p>
</div>
</section>

<section className="bg-white border-b border-gray-200 py-6 fade-in fade-in-delay-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-gray-500" data-lucide="filter"></i>
<span className="font-medium text-gray-900">Filtrer par :</span>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
                            Tous
                        </button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            Légumes
                        </button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            Fruits
                        </button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            Viandes
                        </button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            Fromages
                        </button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                            Boulangerie
                        </button>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<i className="w-5 h-5 text-gray-500" data-lucide="map-pin"></i>
<select className="border-0 bg-transparent font-medium text-gray-700 focus:ring-0">
<option>Toute l'Eure</option>
<option>Évreux</option>
<option>Vernon</option>
<option>Louviers</option>
</select>
</div>
<div className="flex items-center bg-gray-100 rounded-lg p-1">
<button className="px-3 py-1.5 rounded-md text-sm font-medium transition-all view-toggle-active" id="gridView">
<i className="w-4 h-4" data-lucide="grid-3x3"></i>
</button>
<button className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 transition-all" id="mapView">
<i className="w-4 h-4" data-lucide="map"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="gridContent">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-3">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Ferme des Trois Chênes</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Bio</span>
</div>
<p className="text-gray-600 text-sm mb-4">Légumes de saison, fruits et aromates cultivés en agriculture biologique depuis 3 générations.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Vernon • 12 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Légumes</span>
<span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Fruits</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Aromates</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(24)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-4">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Boulangerie Artisanale Martin</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Artisan</span>
</div>
<p className="text-gray-600 text-sm mb-4">Pain au levain naturel, viennoiseries et pâtisseries faites main avec des farines locales.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Évreux • 8 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Pain</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Viennoiseries</span>
<span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Pâtisseries</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(31)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-5">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1517456837804-d4d9d8b6f03c?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Élevage du Val d'Eure</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Local</span>
</div>
<p className="text-gray-600 text-sm mb-4">Viandes bovines et porcines élevées en plein air, nourries aux céréales locales.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Louviers • 15 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Bœuf</span>
<span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Porc</span>
<span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Charcuterie</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(18)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-6">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Fromagerie de la Vallée</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Fermier</span>
</div>
<p className="text-gray-600 text-sm mb-4">Fromages au lait cru de vache et de chèvre, affinés dans nos caves naturelles.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Pont-Audemer • 18 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Fromage</span>
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Lait</span>
<span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Yaourts</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(12)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-3">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Rucher des Coteaux</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Apiculteur</span>
</div>
<p className="text-gray-600 text-sm mb-4">Miels de tilleul, acacia, toutes fleurs et produits de la ruche récoltés localement.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Les Andelys • 20 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded">Miel</span>
<span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Pollen</span>
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Propolis</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(27)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover fade-in fade-in-delay-4">
<div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=300&fit=crop')`}}></div>
<div className="p-6">
<div className="flex items-start justify-between mb-3">
<h3 className="text-lg font-semibold text-gray-900">Ferme Avicole Durand</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Plein Air</span>
</div>
<p className="text-gray-600 text-sm mb-4">Œufs frais et volailles fermières élevées en liberté sur 5 hectares de prairie.</p>
<div className="flex items-center space-x-2 mb-4">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span className="text-sm text-gray-600">Bernay • 25 km</span>
</div>
<div className="flex flex-wrap gap-1 mb-4">
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Œufs</span>
<span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Poulet</span>
<span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Canard</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-1">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<span className="text-sm text-gray-600">(15)</span>
</div>
<button className="text-sm font-medium text-green-600 hover:text-green-700">Voir plus</button>
</div>
</div>
</div>
</div>

<div className="hidden" id="mapContent">
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<div id="map"></div>
</div>
</div>

<div className="text-center mt-12" id="loadMore">
<button className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                    Charger plus de producteurs
                </button>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Vous êtes producteur dans l'Eure ?
            </h2>
<p className="text-xl text-green-100 mb-8">
                Rejoignez notre communauté et faites découvrir vos produits aux Eurois
            </p>
<button className="px-8 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Devenir partenaire
            </button>
</div>
</section>

    </>
  );
}
