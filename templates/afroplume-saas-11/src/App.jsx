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



        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const pageViews = document.querySelectorAll('.page-view');
            const pageTitle = document.getElementById('page-title');
            
            // Mobile Menu Elements
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');

            // --- Navigation Logic ---
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    const targetId = link.getAttribute('data-target');
                    const titleText = link.getAttribute('data-title');

                    // 1. Reset all links to default styling
                    navLinks.forEach(n => {
                        n.classList.remove('text-white', 'bg-slate-800', 'border-blue-500');
                        n.classList.add('text-slate-300', 'border-transparent', 'hover:bg-slate-800', 'hover:text-white');
                        const icon = n.querySelector('iconify-icon');
                        if (icon) icon.classList.remove('text-blue-400');
                    });

                    // 2. Set active styling on clicked link
                    link.classList.remove('text-slate-300', 'border-transparent', 'hover:bg-slate-800', 'hover:text-white');
                    link.classList.add('text-white', 'bg-slate-800', 'border-blue-500');
                    const activeIcon = link.querySelector('iconify-icon');
                    if (activeIcon) activeIcon.classList.add('text-blue-400');

                    // 3. Update top title
                    if (pageTitle) pageTitle.textContent = titleText;

                    // 4. Show corresponding view, hide others
                    pageViews.forEach(view => {
                        if (view.id === targetId) {
                            view.classList.remove('hidden');
                        } else {
                            view.classList.add('hidden');
                        }
                    });

                    // 5. Close mobile menu if open
                    if(window.innerWidth < 768) {
                        closeMobileMenu();
                    }
                });
            });

            // --- Mobile Menu Logic ---
            function openMobileMenu() {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            }

            function closeMobileMenu() {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }

            if(mobileBtn) mobileBtn.addEventListener('click', openMobileMenu);
            if(overlay) overlay.addEventListener('click', closeMobileMenu);
        });
    
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
      

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden md:hidden" id="mobile-overlay"></div>

<aside className="fixed md:static inset-y-0 left-0 w-[260px] bg-slate-900 text-slate-300 flex flex-col z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out flex-shrink-0" id="sidebar">

<div className="flex flex-col justify-center h-20 px-6 border-b border-slate-800">
<span className="text-xl font-semibold tracking-tighter text-white">AFRO'PLUME</span>
<span className="text-xs text-slate-400 font-medium mt-0.5 tracking-wide">Gestion intelligente</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 space-y-1" id="nav-menu">
<a className="nav-link flex items-center px-6 py-2.5 text-white bg-slate-800 border-l-4 border-blue-500 transition-all duration-200" data-target="view-dashboard" data-title="Tableau de bord" href="#">
<iconify-icon className="text-lg mr-3 text-blue-400" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Dashboard</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-finance" data-title="Finance &amp; Comptabilité" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Finance</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-taches" data-title="Tâches &amp; Calendrier" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Tâches</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-rh" data-title="Ressources Humaines" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">RH</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-collab" data-title="Espace Collaboration" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Collaboration</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-services" data-title="État des Services" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Services</span>
</a>
<a className="nav-link flex items-center px-6 py-2.5 hover:bg-slate-800 hover:text-white transition-all duration-200 border-l-4 border-transparent text-slate-300" data-target="view-notes" data-title="Notes Rapides" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Notes</span>
</a>
</nav>

<div className="p-4 border-t border-slate-800">
<a className="flex items-center px-2 py-2 hover:bg-rose-500/10 hover:text-rose-400 rounded-lg transition-all duration-200 text-slate-400" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:logout-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Déconnexion</span>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 overflow-hidden w-full">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 z-10 flex-shrink-0">
<div className="flex items-center">
<button className="md:hidden mr-4 text-gray-500 hover:text-gray-900 transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-lg font-semibold tracking-tight text-gray-900 hidden sm:block" id="page-title">Tableau de bord</h1>
</div>
<div className="flex items-center space-x-4 md:space-x-5">
<button className="relative text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-blue-600 border-2 border-white rounded-full"></span>
</button>
<div className="flex items-center space-x-3 pl-4 md:pl-5 border-l border-gray-200 cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-medium text-xs border border-slate-200 group-hover:border-blue-300 transition-colors">
                        JS
                    </div>
<span className="font-medium text-gray-700 hidden sm:block group-hover:text-gray-900 transition-colors">Junior SANNI</span>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 md:p-6 no-scrollbar scroll-smooth relative">
<div className="max-w-7xl mx-auto pb-20">

<div className="page-view fade-in space-y-10" id="view-dashboard">
<section>
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Aperçu rapide</h2>
<p className="text-sm text-gray-500 mt-1">Résumé de vos activités récentes</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs font-medium text-gray-500 tracking-wide">Total Entrées</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-gray-900">12 500 000 FCFA</span>
<div className="text-emerald-600 text-xs font-medium mt-1 flex items-center">
<iconify-icon className="mr-1" icon="solar:trend-up-linear" strokeWidth="1.5"></iconify-icon>
                                        +12% ce mois
                                    </div>
</div>
</div>
<div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 shadow-sm flex flex-col justify-between">
<span className="text-xs font-medium text-blue-700 tracking-wide">Solde Net</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-blue-900">4 300 000 FCFA</span>
<div className="text-blue-600 text-xs font-medium mt-1 flex items-center">En caisse</div>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs font-medium text-gray-500 tracking-wide">Tâches Urgentes</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-gray-900">2 à faire</span>
<div className="text-rose-600 text-xs font-medium mt-1 flex items-center">
                                        Priorité haute
                                    </div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-finance">
<section>
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Trésorerie</h2>
<p className="text-sm text-gray-500 mt-1">Suivi des flux financiers en temps réel</p>
</div>
<div className="flex space-x-3">
<button className="px-4 py-2 bg-white border border-gray-200 text-rose-600 rounded-lg font-medium hover:bg-rose-50 hover:border-rose-200 transition-all duration-200 flex items-center shadow-sm text-xs">
<iconify-icon className="mr-1.5 text-base" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
                                    Nouvelle sortie
                                </button>
<button className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 hover:shadow transition-all duration-200 flex items-center shadow-sm text-xs border border-emerald-600">
<iconify-icon className="mr-1.5 text-base" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                                    Nouvelle entrée
                                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<span className="text-xs font-medium text-gray-500 tracking-wide">Total Entrées</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-gray-900">12 500 000 FCFA</span>
<div className="text-emerald-600 text-xs font-medium mt-1 flex items-center">
<iconify-icon className="mr-1" icon="solar:trend-up-linear" strokeWidth="1.5"></iconify-icon>
                                        +12% ce mois
                                    </div>
</div>
</div>
<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
<span className="text-xs font-medium text-gray-500 tracking-wide">Total Sorties</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-gray-900">8 200 000 FCFA</span>
<div className="text-rose-600 text-xs font-medium mt-1 flex items-center">
<iconify-icon className="mr-1" icon="solar:trend-down-linear" strokeWidth="1.5"></iconify-icon>
                                        -5% ce mois
                                    </div>
</div>
</div>
<div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between">
<span className="text-xs font-medium text-blue-700 tracking-wide">Solde Net</span>
<div className="flex flex-col mt-3">
<span className="text-2xl font-semibold tracking-tight text-blue-900">4 300 000 FCFA</span>
<div className="text-blue-600 text-xs font-medium mt-1 flex items-center">
                                        En caisse
                                    </div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-50/80 border-b border-gray-200 text-xs font-medium text-gray-500">
<th className="py-3 px-5 font-medium">Date</th>
<th className="py-3 px-5 font-medium">Libellé</th>
<th className="py-3 px-5 font-medium">Catégorie</th>
<th className="py-3 px-5 font-medium text-right">Montant</th>
<th className="py-3 px-5 font-medium text-center">Action</th>
</tr>
</thead>
<tbody className="text-gray-600 divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-3 px-5 text-gray-500">12/03/2026</td>
<td className="py-3 px-5 font-medium text-gray-900">Vente produits</td>
<td className="py-3 px-5"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Commercial</span></td>
<td className="py-3 px-5 text-right font-medium text-emerald-600">+ 500 000 FCFA</td>
<td className="py-3 px-5 text-center">
<button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded hover:bg-blue-50">
<iconify-icon className="text-lg" icon="solar:file-pdf-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-3 px-5 text-gray-500">11/03/2026</td>
<td className="py-3 px-5 font-medium text-gray-900">Achat matériel</td>
<td className="py-3 px-5"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Logistique</span></td>
<td className="py-3 px-5 text-right font-medium text-rose-600">- 200 000 FCFA</td>
<td className="py-3 px-5 text-center">
<button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded hover:bg-blue-50">
<iconify-icon className="text-lg" icon="solar:file-pdf-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-taches">
<section>
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Vos priorités</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 space-y-3">

<label className="group relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 flex items-start gap-3 cursor-pointer">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-rose-500 rounded-r"></div>
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500/30 bg-white">
<input className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white text-xs opacity-0 peer-checked:opacity-100 peer-checked:text-blue-500 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-900 leading-tight group-has-[:checked]:text-gray-400 group-has-[:checked]:line-through transition-all">Finaliser le bilan Q3</p>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[10px] font-medium px-1.5 py-0.5 bg-rose-50 text-rose-600 rounded">Urgent</span>
<span className="text-xs text-gray-400">Aujourd'hui</span>
</div>
</div>
</label>

<label className="group relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 flex items-start gap-3 cursor-pointer">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-amber-400 rounded-r"></div>
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-500/30 bg-white">
<input className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-white text-xs opacity-0 peer-checked:opacity-100 peer-checked:text-blue-500 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-900 leading-tight group-has-[:checked]:text-gray-400 group-has-[:checked]:line-through transition-all">Revue des candidatures dev</p>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[10px] font-medium px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded">Moyen</span>
<span className="text-xs text-gray-400">Demain</span>
</div>
</div>
</label>

<label className="group relative bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 flex items-start gap-3 cursor-pointer">
<div className="absolute left-0 top-3 bottom-3 w-1 bg-emerald-500 rounded-r"></div>
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-blue-500 bg-blue-50 rounded focus-within:ring-2 focus-within:ring-blue-500/30">
<input checked="" className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox"/>
<iconify-icon className="text-blue-500 text-xs opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-gray-400 line-through leading-tight transition-all">Mettre à jour les licences</p>
<div className="flex items-center gap-2 mt-1.5 opacity-60">
<span className="text-[10px] font-medium px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded">Faible</span>
<span className="text-xs text-gray-400">14 Mars</span>
</div>
</div>
</label>
</div>

<div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-[350px]">
<div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-lg">
<h3 className="font-medium text-gray-900">Mars 2026</h3>
<div className="flex space-x-1 border border-gray-200 rounded-md bg-white p-0.5">
<button className="px-2 py-1 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="px-2 py-1 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="flex-1 p-4 flex flex-col">

<div className="grid grid-cols-7 gap-1 mb-2 text-center text-[11px] font-medium text-gray-400 uppercase tracking-wider">
<div>Lun</div><div>Mar</div><div>Mer</div><div>Jeu</div><div>Ven</div><div>Sam</div><div>Dim</div>
</div>

<div className="flex-1 grid grid-cols-7 gap-1">

<div className="bg-gray-50 rounded p-1.5 border border-transparent"><span className="text-xs text-gray-400">23</span></div>
<div className="bg-gray-50 rounded p-1.5 border border-transparent"><span className="text-xs text-gray-400">24</span></div>
<div className="bg-white rounded p-1.5 border border-gray-100 hover:border-blue-200 transition-colors"><span className="text-xs text-gray-900 font-medium">1</span></div>
<div className="bg-white rounded p-1.5 border border-gray-100 hover:border-blue-200 transition-colors relative">
<span className="text-xs text-gray-900 font-medium">2</span>
</div>
<div className="bg-white rounded p-1.5 border border-blue-100 bg-blue-50/30 transition-colors relative flex flex-col">
<span className="text-xs text-blue-700 font-medium">3</span>
<div className="mt-auto bg-blue-600 text-white text-[10px] rounded px-1.5 py-0.5 truncate leading-tight shadow-sm">Point RH</div>
</div>
<div className="bg-white rounded p-1.5 border border-gray-100 hover:border-blue-200 transition-colors"><span className="text-xs text-gray-900 font-medium">4</span></div>
<div className="bg-white rounded p-1.5 border border-gray-100 hover:border-blue-200 transition-colors"><span className="text-xs text-gray-900 font-medium">5</span></div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-rh">
<section>
<div className="mb-4">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Gestion du personnel</h2>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-6">

<div className="flex border-b border-gray-200 bg-gray-50/50 px-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap">Personnel Actif</button>
<button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 transition-colors whitespace-nowrap">Candidats</button>
</div>

<div className="p-0 overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-3 px-6 flex items-center space-x-3 w-64">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="font-medium text-gray-900">Marc Dupont</span>
</td>
<td className="py-3 px-6 text-gray-500">Développeur Front-end</td>
<td className="py-3 px-6 w-1/3 min-w-[200px]">
<div className="flex items-center space-x-3">
<div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '50%'}}></div>
</div>
<span className="text-xs text-gray-500 font-medium w-14 text-right">15/30 j</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-3 border-b border-gray-100 bg-gray-50/50 flex items-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Pipelines de Recrutement</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/80 transition-colors">
<td className="py-3 px-6 font-medium text-gray-900 w-64">Koffi Jean</td>
<td className="py-3 px-6 text-gray-500">Développeur Backend</td>
<td className="py-3 px-6 text-right">
<div className="flex items-center justify-end space-x-3">
<div className="inline-flex items-center space-x-1.5 text-gray-600">
<span className="text-xs">CV:</span>
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="inline-flex items-center space-x-1.5 text-gray-600">
<span className="text-xs">Diplôme:</span>
<iconify-icon className="text-amber-500 text-sm" icon="solar:danger-circle-bold"></iconify-icon>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-collab">
<section>
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Espace de travail</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="space-y-6 flex flex-col">

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-all duration-200">
<h3 className="font-medium text-gray-900 mb-4 flex items-center text-sm">
<iconify-icon className="mr-2 text-gray-400 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                                        Dernières discussions
                                    </h3>
<ul className="space-y-1">
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-md transition-colors">
<div className="flex items-center space-x-3">
<iconify-icon className="text-amber-500 text-lg" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-sm">Idées produit Q4</span>
</div>
<div className="flex items-center text-gray-400 text-xs">
<span className="font-medium">12</span>
<iconify-icon className="ml-1" icon="solar:chat-line-linear"></iconify-icon>
</div>
</li>
<li className="flex items-center justify-between group cursor-pointer p-2 hover:bg-gray-50 rounded-md transition-colors">
<div className="flex items-center space-x-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:confetti-linear"></iconify-icon>
<span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-sm">Organisation Team Building</span>
</div>
<div className="flex items-center text-gray-400 text-xs">
<span className="font-medium">5</span>
<iconify-icon className="ml-1" icon="solar:chat-line-linear"></iconify-icon>
</div>
</li>
</ul>
</div>

<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50/50 text-center hover:bg-gray-50 hover:border-blue-400 transition-all duration-200 cursor-pointer group flex-1">
<div className="w-10 h-10 bg-white rounded shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-gray-200">
<iconify-icon className="text-xl text-blue-600" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<p className="text-gray-900 font-medium text-sm">Glissez vos fichiers ici</p>
<div className="flex space-x-6 mt-6 pt-6 border-t border-gray-200/60 w-full justify-center">
<div className="flex flex-col items-center group/file">
<iconify-icon className="text-2xl text-blue-500 group-hover/file:-translate-y-1 transition-transform" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-[11px] font-medium text-gray-600 mt-1.5">Ressources</span>
</div>
<div className="flex flex-col items-center group/file">
<iconify-icon className="text-2xl text-rose-500 group-hover/file:-translate-y-1 transition-transform" icon="solar:file-pdf-linear"></iconify-icon>
<span className="text-[11px] font-medium text-gray-600 mt-1.5">Bilan_2025.pdf</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex flex-col hover:shadow-md transition-all duration-200 h-full">
<div className="bg-black rounded border border-gray-800 aspect-video flex-1 flex flex-col items-center justify-center text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
<iconify-icon className="text-4xl opacity-50 mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" icon="solar:videocamera-record-linear"></iconify-icon>
<p className="text-gray-400 text-xs font-medium tracking-wide relative z-10">Zone vidéo</p>
</div>
<div className="pt-4 pb-1 px-1 flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 shadow-sm" placeholder="Nom de la salle..." type="text"/>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 hover:shadow transition-all duration-200 flex items-center justify-center shadow-sm text-sm whitespace-nowrap">
<iconify-icon className="mr-1.5 text-base" icon="solar:play-circle-bold"></iconify-icon>
                                        Lancer la réunion
                                    </button>
</div>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-services">
<section>
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Infrastructures IT</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-start justify-between">
<div>
<h4 className="font-medium text-gray-900">Serveur Web API</h4>
<p className="text-xs text-gray-500 mt-1">Hébergement principal de l'app.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-0.5">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
</label>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-start justify-between">
<div>
<h4 className="font-medium text-gray-900">Mailing SMTP</h4>
<p className="text-xs text-gray-500 mt-1">Notifications transactionnelles.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-0.5">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
</label>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-start justify-between opacity-80">
<div>
<h4 className="font-medium text-gray-900">Backup DB</h4>
<p className="text-xs text-gray-500 mt-1">Sauvegarde automatique.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-0.5">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
</label>
</div>
</div>
</section>
</div>

<div className="page-view hidden fade-in space-y-10" id="view-notes">
<section>
<div className="mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Éditeur de notes</h2>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row h-[500px] overflow-hidden">

<div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50/50 overflow-y-auto flex-shrink-0">
<div className="p-4 border-b border-gray-100 cursor-pointer bg-white border-l-2 border-l-blue-600 shadow-sm relative z-10">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-gray-900 text-sm">Réunion Stratégique</span>
</div>
<p className="text-xs text-gray-500 truncate">Points abordés lors du comex...</p>
<p className="text-[10px] text-gray-400 mt-2 font-medium">14 Mar 2026</p>
</div>
<div className="p-4 border-b border-gray-100 cursor-pointer hover:bg-white transition-colors border-l-2 border-l-transparent">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-gray-700 text-sm">Idées UI/UX</span>
</div>
<p className="text-xs text-gray-500 truncate">Inspirations pour la v2 du dash...</p>
<p className="text-[10px] text-gray-400 mt-2 font-medium">10 Mar 2026</p>
</div>
</div>

<div className="flex-1 bg-white p-6 md:p-8 flex flex-col overflow-y-auto">
<input className="font-semibold text-2xl tracking-tight text-gray-900 mb-6 focus:outline-none bg-transparent placeholder-gray-300 w-full" placeholder="Titre de la note..." type="text" value="Réunion Stratégique"/>
<textarea className="flex-1 w-full resize-none focus:outline-none bg-transparent text-gray-600 text-sm leading-relaxed placeholder-gray-300" placeholder="Commencez à écrire ici... Style papier épuré.">- Validation du budget Q2.
- Lancement de la campagne de recrutement pour l'équipe technique.
- Revoir les contrats prestataires logistique d'ici fin de mois.

À faire :
[ ] Envoyer compte-rendu à Junior.
[ ] Planifier point avec Koffi Jean.</textarea>
</div>
</div>
</section>
</div>
</div>
</main>
</div>



    </>
  );
}
