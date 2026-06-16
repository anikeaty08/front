import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex w-64 flex-col border-r border-gray-200 bg-white z-20">
<div className="h-14 flex items-center px-5 border-b border-gray-100">
<div className="flex items-center gap-2 text-orange-600">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="font-semibold tracking-tight text-gray-900">MatchOrg</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Principal</div>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100/80 rounded-md group" href="#">
<i className="w-4 h-4 text-gray-500 group-hover:text-gray-900" data-lucide="calendar-days"></i>
                Planning
            </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="user-check"></i>
                Mes Convocations
            </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="users"></i>
                Équipes
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Filtres Rapides</div>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Non complets
            </a>
<a className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Confirmés
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-semibold">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Jean Dupont</p>
<p className="text-xs text-gray-500 truncate">Coach U13</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-700">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Saison 2024-2025</span>
<i className="w-4 h-4 mx-2 text-gray-300" data-lucide="chevron-right"></i>
<span className="font-medium text-gray-900">Planning Décembre</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
<button className="px-3 py-1 text-xs font-medium bg-white shadow-sm text-gray-900 rounded-md">Semaine</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md">Mois</button>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Matchs de la semaine</h1>
<p className="text-sm text-gray-500 mt-1">Gérez les convocations et les officiels de table.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:bg-gray-50 shadow-sm transition-all">
<i className="w-3 h-3" data-lucide="filter"></i>
                        Filtres
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-800 shadow-sm transition-all">
<i className="w-3 h-3" data-lucide="download"></i>
                        Exporter
                    </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl border border-gray-200 bg-white shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)]">
<div className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-1">Total Matchs</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">3</span>
<span className="text-xs text-gray-400">cette semaine</span>
</div>
</div>
<div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30">
<div className="text-rose-600 text-xs font-medium uppercase tracking-wide mb-1">À Compléter</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-rose-700 tracking-tight">9</span>
<span className="text-xs text-rose-600/80">postes vacants</span>
</div>
</div>
<div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/30">
<div className="text-emerald-600 text-xs font-medium uppercase tracking-wide mb-1">Couverture</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-emerald-700 tracking-tight">45%</span>
<span className="text-xs text-emerald-600/80">optimale</span>
</div>
</div>
<div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
<div className="text-blue-600 text-xs font-medium uppercase tracking-wide mb-1">Mes Rôles</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold text-blue-700 tracking-tight">0</span>
<span className="text-xs text-blue-600/80">à venir</span>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-3 mb-4 sticky top-0 bg-gray-50 py-2 z-10 backdrop-blur-sm">
<span className="text-sm font-semibold text-gray-900 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-sm">Mardi 16 Déc.</span>
<div className="h-px flex-1 bg-gray-200"></div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-0 shadow-sm hover:shadow-md transition-all duration-200 mb-3 overflow-hidden">
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-32 bg-gray-50/50 border-b md:border-b-0 md:border-r border-gray-100 p-4 flex md:flex-col items-center md:justify-center justify-between gap-1">
<span className="text-lg font-semibold text-gray-900 tracking-tight">09:00</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700 border border-emerald-200/50">
                                Complet
                            </span>
</div>

<div className="flex-1 p-4 md:px-6 md:py-4 flex flex-col justify-center">
<div className="flex items-start justify-between mb-2">
<div>
<h3 className="text-base font-medium text-gray-900 group-hover:text-orange-600 transition-colors">Team National <span className="text-gray-400 font-light mx-1">vs</span> Bondues</h3>
<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Salle MatchOrg 1
                                    </div>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50/50 text-xs text-gray-500 opacity-60">
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i> Resp. Salle
                                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50/50 text-xs text-gray-500 opacity-60">
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i> Emarque
                                </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-gray-200 bg-gray-50/50 text-xs text-gray-500 opacity-60">
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i> Chrono
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-3 mb-4 sticky top-0 bg-gray-50 py-2 z-10">
<span className="text-sm font-semibold text-gray-900 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-sm">Mercredi 17 Déc.</span>
<div className="h-px flex-1 bg-gray-200"></div>
</div>

<div className="relative bg-white rounded-xl border border-orange-200 p-0 shadow-[0_2px_12px_rgba(249,115,22,0.06)] mb-3 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-32 bg-white border-b md:border-b-0 md:border-r border-gray-100 p-4 flex md:flex-col items-center md:justify-center justify-between gap-1">
<span className="text-lg font-semibold text-gray-900 tracking-tight">18:30</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-100">
                                5 Manquants
                            </span>
</div>

<div className="flex-1 p-4 md:px-6 md:py-4">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-base font-medium text-gray-900">Team National <span className="text-gray-400 font-light mx-1">vs</span> LILLE</h3>
<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Salle 1
                                    </div>
</div>
<button className="hidden md:flex px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded hover:bg-orange-100 transition-colors">
                                    Gérer le match
                                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">

<button className="group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-gray-400 group-hover:text-orange-500">Resp. Salle</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-400 text-gray-300 group-hover:text-orange-500">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs text-gray-400 group-hover:text-orange-600">Ajouter</span>
</div>
</button>

<button className="group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-gray-400 group-hover:text-orange-500">Emarque</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-400 text-gray-300 group-hover:text-orange-500">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs text-gray-400 group-hover:text-orange-600">Ajouter</span>
</div>
</button>

<button className="group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-gray-400 group-hover:text-orange-500">Chrono</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-400 text-gray-300 group-hover:text-orange-500">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs text-gray-400 group-hover:text-orange-600">Ajouter</span>
</div>
</button>

<button className="group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-gray-400 group-hover:text-orange-500">Arbitre</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-400 text-gray-300 group-hover:text-orange-500">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs text-gray-400 group-hover:text-orange-600">Ajouter</span>
</div>
</button>

<button className="group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-gray-300 hover:border-orange-300 hover:bg-orange-50/50 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-gray-400 group-hover:text-orange-500">Buvette</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center group-hover:border-orange-400 text-gray-300 group-hover:text-orange-500">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs text-gray-400 group-hover:text-orange-600">Ajouter</span>
</div>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mb-12">
<div className="flex items-center gap-3 mb-4 sticky top-0 bg-gray-50 py-2 z-10">
<span className="text-sm font-semibold text-gray-900 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-sm">Samedi 20 Déc.</span>
<div className="h-px flex-1 bg-gray-200"></div>
</div>
<div className="relative bg-white rounded-xl border border-orange-200 p-0 shadow-[0_2px_12px_rgba(249,115,22,0.06)] mb-3 overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="flex flex-col md:flex-row">

<div className="w-full md:w-32 bg-white border-b md:border-b-0 md:border-r border-gray-100 p-4 flex md:flex-col items-center md:justify-center justify-between gap-1">
<span className="text-lg font-semibold text-gray-900 tracking-tight">15:00</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-100">
                                4 Manquants
                            </span>
</div>

<div className="flex-1 p-4 md:px-6 md:py-4">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-base font-medium text-gray-900">Team U13 3 <span className="text-gray-400 font-light mx-1">vs</span> Lomme</h3>
<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Salle MatchOrg 1
                                    </div>
</div>
<button className="hidden md:flex px-3 py-1.5 bg-orange-50 text-orange-700 text-xs font-medium rounded hover:bg-orange-100 transition-colors">
                                    Gérer le match
                                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">

<div className="flex flex-col items-start gap-1 p-2 rounded border border-gray-200 bg-gray-50/50">
<span className="text-[10px] uppercase font-semibold text-gray-400">Resp. Salle</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-xs font-medium text-gray-700">Pourvu</span>
</div>
</div>

<button className="col-span-1 md:col-span-1 group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-orange-200 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-300 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-orange-600/70">Emarque</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-orange-700">M'inscrire</span>
</div>
</button>

<button className="col-span-1 md:col-span-1 group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-orange-200 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-300 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-orange-600/70">Chrono</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-orange-700">M'inscrire</span>
</div>
</button>

<button className="col-span-1 md:col-span-1 group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-orange-200 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-300 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-orange-600/70">Buvette</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-orange-700">M'inscrire</span>
</div>
</button>

<button className="col-span-1 md:col-span-1 group flex flex-col items-start gap-1 p-2 rounded border border-dashed border-orange-200 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-300 transition-all text-left">
<span className="text-[10px] uppercase font-semibold text-orange-600/70">Arbitre</span>
<div className="flex items-center gap-1.5">
<div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<span className="text-xs font-medium text-orange-700">M'inscrire</span>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
