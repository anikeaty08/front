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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-md">
<iconify-icon icon="solar:routing-linear" width="20"></iconify-icon>
</div>
<span className="tracking-tighter text-lg font-medium">NOVELTY</span>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
<div className="h-8 w-px bg-gray-200"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium leading-none group-hover:text-gray-600 transition-colors">Thomas Dubois</p>
<p className="text-xs text-gray-500 mt-1">Intermittent</p>
</div>
<div className="h-9 w-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8">
<h1 className="text-2xl tracking-tight font-medium text-gray-900">Bonjour, Thomas</h1>
<p className="text-sm text-gray-500 mt-1">Gérez vos disponibilités et consultez vos prochaines missions.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base tracking-tight font-medium">Prochaine Mission</h2>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Confirmée
                        </span>
</div>
<div className="space-y-4">
<div>
<p className="text-sm font-medium">Tournée Montage - Dôme de Paris</p>
<p className="text-xs text-gray-500 mt-0.5">Demain, 06:00 - 15:00</p>
</div>
<div className="flex items-center gap-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
<iconify-icon className="text-gray-400" icon="solar:bus-linear"></iconify-icon>
<span>Utilitaire 20m3 (AB-123-CD)</span>
</div>
<div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
<div className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<div>
<span className="block text-xs text-gray-400">Départ</span>
<span>Dépôt Novelty, Longjumeau</span>
</div>
</div>
<div className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5" icon="solar:flag-linear"></iconify-icon>
<div>
<span className="block text-xs text-gray-400">Arrivée</span>
<span>Palais des Sports, Paris</span>
</div>
</div>
</div>
</div>
<button className="w-full mt-5 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-lg border border-gray-200 transition-colors">
                        Voir la feuille de route
                    </button>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h2 className="text-base tracking-tight font-medium mb-4">Légende Calendrier</h2>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-gray-200 bg-white"></div>
<span>À déclarer</span>
</li>
<li className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-black"></div>
<span>Disponible (Sélectionné)</span>
</li>
<li className="flex items-center gap-3">
<div className="w-4 h-4 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
</div>
<span>Indisponible</span>
</li>
<li className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-green-200 bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span>Mission assignée</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-8">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full">

<div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg tracking-tight font-medium text-gray-900">Novembre 2023</h2>
<p className="text-sm text-gray-500 mt-0.5">Sélectionnez les jours où vous êtes disponible.</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="px-3 py-1.5 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                                Aujourd'hui
                            </button>
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md border border-transparent hover:border-gray-200 transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
<label className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2 block">Préférence horaire pour la sélection</label>
<div className="inline-flex p-1 bg-gray-100 rounded-lg border border-gray-200">
<button className="px-4 py-1.5 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 transition-colors">Matin</button>
<button className="px-4 py-1.5 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 transition-colors">Après-midi</button>
<button className="px-4 py-1.5 text-sm font-medium rounded-md bg-white text-gray-900 shadow-sm border border-gray-200 transition-all">Journée entière</button>
</div>
</div>

<div className="p-6 flex-1">

<div className="grid grid-cols-7 mb-2">
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Lun</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Mar</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Mer</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Jeu</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Ven</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Sam</div>
<div className="text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Dim</div>
</div>
<div className="calendar-grid">

<div className="calendar-cell empty bg-gray-50"></div>
<div className="calendar-cell empty bg-gray-50"></div>

<div className="calendar-cell flex flex-col justify-between">
<span className="text-sm text-gray-400">1</span>
</div>
<div className="calendar-cell flex flex-col justify-between bg-gray-50 text-gray-400 cursor-not-allowed">
<span className="text-sm">2</span>
<div className="w-full h-1 bg-gray-200 rounded-full mt-2"></div>
</div>
<div className="calendar-cell flex flex-col justify-between bg-green-50 border border-green-100 relative">
<span className="text-sm text-green-800 font-medium">3</span>
<iconify-icon className="absolute top-2 right-2 text-green-600" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-xs text-green-600 mt-auto truncate">Tournée...</span>
</div>
<div className="calendar-cell flex flex-col justify-between">
<span className="text-sm text-gray-700">4</span>
</div>
<div className="calendar-cell flex flex-col justify-between">
<span className="text-sm text-gray-700">5</span>
</div>
<div className="calendar-cell flex flex-col justify-between text-red-400 bg-gray-50">
<span className="text-sm">6</span>
</div>
<div className="calendar-cell flex flex-col justify-between text-red-400 bg-gray-50">
<span className="text-sm">7</span>
</div>
<div className="calendar-cell flex flex-col justify-between selected">
<span className="text-sm">8</span>
<span className="text-xs opacity-70 mt-auto">Complet</span>
</div>
<div className="calendar-cell flex flex-col justify-between selected">
<span className="text-sm">9</span>
<span className="text-xs opacity-70 mt-auto">Complet</span>
</div>
<div className="calendar-cell flex flex-col justify-between selected">
<span className="text-sm">10</span>
<span className="text-xs opacity-70 mt-auto">Complet</span>
</div>
<div className="calendar-cell flex flex-col justify-between">
<span className="text-sm text-gray-700">11</span>
</div>
<div className="calendar-cell flex flex-col justify-between">
<span className="text-sm text-gray-700">12</span>
</div>
<div className="calendar-cell flex flex-col justify-between bg-gray-50">
<span className="text-sm text-gray-400">13</span>
</div>
<div className="calendar-cell flex flex-col justify-between bg-gray-50">
<span className="text-sm text-gray-400">14</span>
</div>

<div className="calendar-cell"><span className="text-sm text-gray-700">15</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">16</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">17</span></div>
<div className="calendar-cell selected"><span className="text-sm">18</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">19</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">20</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">21</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">22</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">23</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">24</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">25</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">26</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">27</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">28</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">29</span></div>
<div className="calendar-cell"><span className="text-sm text-gray-700">30</span></div>

<div className="calendar-cell empty bg-gray-50"></div>
<div className="calendar-cell empty bg-gray-50"></div>
<div className="calendar-cell empty bg-gray-50"></div>
<div className="calendar-cell empty bg-gray-50"></div>
<div className="calendar-cell empty bg-gray-50"></div>
</div>
</div>

<div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
<span className="text-sm text-gray-500">4 jours sélectionnés</span>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                Réinitialiser
                            </button>
<button className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:disk-linear"></iconify-icon>
                                Enregistrer mes disponibilités
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
