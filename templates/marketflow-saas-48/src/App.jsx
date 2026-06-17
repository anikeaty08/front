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
      

<aside className="w-64 border-r border-gray-200 bg-white/80 backdrop-blur-sm hidden lg:flex flex-col justify-between h-screen fixed left-0 top-0 z-50">
<div>
<div className="p-6 flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-semibold text-lg tracking-tight">MarketFlow</span>
</div>
<nav className="px-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-900 bg-gray-100 rounded-lg group" href="#">
<i className="w-5 h-5 text-gray-900" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Vue d'ensemble</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-gray-900" data-lucide="shopping-bag"></i>
<span className="text-sm font-medium">Annonces</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-gray-900" data-lucide="message-square"></i>
<span className="text-sm font-medium">Messages</span>
<span className="ml-auto bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-semibold">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-gray-900" data-lucide="bar-chart-2"></i>
<span className="text-sm font-medium">Statistiques</span>
</a>
</nav>
<div className="px-4 mt-8">
<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Catégories</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="music"></i>
<span className="text-sm">Instruments</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
<span className="text-sm">Immobilier</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shirt"></i>
<span className="text-sm">Mode</span>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer">
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Antoine D.</span>
<span className="text-xs text-gray-500">Pro Seller</span>
</div>
<i className="w-4 h-4 text-gray-400 ml-auto" data-lucide="more-vertical"></i>
</div>
</div>
</aside>

<main className="flex-1 ml-0 lg:ml-64 relative">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-full max-w-md">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-900 transition-all placeholder:text-gray-400" placeholder="Rechercher une annonce, un client..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex gap-1">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs text-gray-400 font-sans">⌘K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-all shadow-sm active:scale-95">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Déposer une annonce</span>
</button>
</div>
</header>

<div className="p-6 max-w-7xl mx-auto space-y-10">

<section className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group">

<div className="absolute inset-0 z-0 opacity-30">
<svg className="absolute right-0 top-0 h-full w-1/2 text-gray-50 fill-current" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z"></path>
</svg>
<svg className="absolute left-0 bottom-0 h-64 w-64 text-gray-50 fill-current -translate-x-1/2 translate-y-1/2 rounded-full" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="50"></circle>
</svg>
</div>
<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900"></span>
</span>
<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Q4 - Opportunité de vente</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-4">
                        C'est le moment d'accélérer vos ventes.
                    </h1>
<p className="text-lg text-gray-500 mb-8 max-w-md leading-relaxed">
                        L'activité des acheteurs est en hausse de <span className="text-gray-900 font-medium">+24%</span> cette semaine sur la catégorie Instruments de Musique.
                    </p>
<div className="flex gap-4">
<button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black transition-all shadow-lg shadow-gray-200">
                            Analyser mes stocks
                        </button>
<button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all">
                            Voir les tendances
                        </button>
</div>
</div>

<div className="relative z-10 w-full md:w-auto flex-shrink-0">
<div className="bg-white border border-gray-200 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 w-full md:w-80">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-gray-500">Vues (7 jours)</span>
<span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">+12.5%</span>
</div>
<div className="h-24 flex items-end gap-2">
<div className="w-full bg-gray-100 rounded-t-sm h-[40%] hover:bg-gray-900 transition-colors cursor-pointer relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">240 vues</div>
</div>
<div className="w-full bg-gray-100 rounded-t-sm h-[55%] hover:bg-gray-900 transition-colors cursor-pointer"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[45%] hover:bg-gray-900 transition-colors cursor-pointer"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[70%] hover:bg-gray-900 transition-colors cursor-pointer"></div>
<div className="w-full bg-gray-100 rounded-t-sm h-[60%] hover:bg-gray-900 transition-colors cursor-pointer"></div>
<div className="w-full bg-gray-900 rounded-t-sm h-[90%] shadow-lg shadow-gray-200"></div>
</div>
<div className="mt-4 flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"/>
</div>
<span className="text-xs text-gray-500 font-medium">3 nouveaux leads</span>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Insights du marché</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                        Tout voir <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-300 transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-gray-900 transform rotate-12" data-lucide="flame"></i>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200 mb-4 shadow-sm">
<i className="w-5 h-5 text-gray-900" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Tendances</h3>
<p className="text-sm text-gray-500 leading-snug">Produits avec la plus forte demande cette semaine.</p>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-4">
<i className="w-5 h-5 text-gray-900" data-lucide="snowflake"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Saisonnalité</h3>
<p className="text-sm text-gray-500 leading-snug">Préparez vos stocks pour la période hivernale.</p>
<div className="mt-4 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-gray-900 h-full w-3/4"></div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-4">
<i className="w-5 h-5 text-gray-900" data-lucide="utensils"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Équipement Maison</h3>
<p className="text-sm text-gray-500 leading-snug">Forte rotation sur les appareils de cuisine.</p>
<div className="mt-3 flex gap-2">
<span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">Raclette</span>
<span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">Fondue</span>
</div>
</div>

<div className="bg-gray-900 rounded-xl p-6 border border-gray-900 text-white cursor-pointer hover:bg-black transition-all group">
<div className="flex justify-between items-start mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="thermometer"></i>
<span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">Conseil</span>
</div>
<h3 className="text-lg font-semibold text-white mb-1">Gestion du Froid</h3>
<p className="text-sm text-gray-400 leading-snug mb-4">Optimisez les prix des équipements de chauffage.</p>
<div className="flex items-center text-xs font-medium text-white group-hover:underline">
                            Appliquer les prix auto <i className="w-3 h-3 ml-1" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="pb-10">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Annonces actives</h2>
<span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">Musique</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-900 hover:border-gray-300">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
<button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-900 hover:border-gray-300">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x">

<div className="min-w-[280px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group snap-start">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">

<div className="absolute inset-0 flex items-center justify-center text-gray-300">
<i className="w-12 h-12" data-lucide="speaker"></i>
</div>

<img alt="Ampli" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-2 right-2">
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-black/5 shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-500">En ligne</span>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-1 truncate">Ampli Line 6 Spider Jam 75W</h4>
<div className="flex justify-between items-end mt-3">
<div>
<p className="text-lg font-bold text-gray-900">149 €</p>
<p className="text-xs text-gray-400">Lyon, 69003</p>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-gray-100 border border-white flex items-center justify-center text-[10px] font-bold">Ly</div>
</div>
</div>
</div>
</div>

<div className="min-w-[280px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group snap-start">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
<img alt="Pedale" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 right-2">
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-black/5 shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="text-xs font-medium text-gray-500">En attente</span>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-1 truncate">Pédale d'effet STRYMON</h4>
<div className="flex justify-between items-end mt-3">
<div>
<p className="text-lg font-bold text-gray-900">300 €</p>
<p className="text-xs text-gray-400">Paris, 75011</p>
</div>
<div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-[10px] border border-white">V</div>
</div>
</div>
</div>

<div className="min-w-[280px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group snap-start">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
<img alt="Guitare" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute top-2 right-2">
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-black/5 shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-500">En ligne</span>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-1 truncate">Guitare électro acoustic</h4>
<div className="flex justify-between items-end mt-3">
<div>
<p className="text-lg font-bold text-gray-900">250 €</p>
<p className="text-xs text-gray-400">Livraison possible</p>
</div>
<div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] border border-white">M</div>
</div>
</div>
</div>

<div className="min-w-[280px] bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-gray-300 transition-all group snap-start">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
<img alt="Mixer" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 right-2">
<button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors border border-black/5 shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
</div>
<div className="px-1">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
<span className="text-xs font-medium text-gray-500">Brouillon</span>
</div>
<h4 className="text-base font-semibold text-gray-900 mb-1 truncate">Platine Pioneer DDJ-FLX4</h4>
<div className="flex justify-between items-end mt-3">
<div>
<p className="text-lg font-bold text-gray-900">290 €</p>
<p className="text-xs text-gray-400">Marseille, 13008</p>
</div>
<div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] border border-white">T</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
