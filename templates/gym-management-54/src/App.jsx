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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Ce code s'exécute immédiatement sans attendre d'événement extérieur pour garantir son fonctionnement
        (function initNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pageSections = document.querySelectorAll('.page-section');
            const pageTitle = document.getElementById('page-title');
            
            // Elements du menu mobile
            const sidebar = document.getElementById('sidebar');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeSidebarBtn = document.getElementById('close-sidebar-btn');
            const overlay = document.getElementById('sidebar-overlay');

            // Fonction pour basculer le menu mobile
            function toggleSidebar() {
                const isClosed = sidebar.classList.contains('-translate-x-full');
                if (isClosed) {
                    // Ouvrir
                    overlay.classList.remove('hidden');
                    // Délai minimal pour permettre à la transition d'opérer après le retrait de 'hidden'
                    setTimeout(() => {
                        overlay.classList.remove('opacity-0');
                        sidebar.classList.remove('-translate-x-full');
                    }, 10);
                } else {
                    // Fermer
                    sidebar.classList.add('-translate-x-full');
                    overlay.classList.add('opacity-0');
                    setTimeout(() => {
                        overlay.classList.add('hidden');
                    }, 300);
                }
            }

            // Attacher les événements du menu mobile
            if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
            if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', toggleSidebar);
            if (overlay) overlay.addEventListener('click', toggleSidebar);

            // Gérer le clic sur les liens de navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('data-target');
                    const title = this.getAttribute('data-title');

                    // 1. Mettre à jour le titre
                    if (pageTitle) pageTitle.textContent = title;

                    // 2. Cacher toutes les sections
                    pageSections.forEach(section => {
                        section.classList.add('hidden');
                    });

                    // 3. Afficher la section ciblée
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) targetSection.classList.remove('hidden');

                    // 4. Réinitialiser le style de tous les liens
                    navLinks.forEach(l => {
                        l.classList.remove('bg-gray-100', 'text-gray-900', 'bg-orange-50', 'text-orange-600');
                        l.classList.add('text-gray-600');
                    });

                    // 5. Appliquer le style actif au lien cliqué
                    if (targetId === 'page-analytics') {
                        this.classList.remove('text-gray-600');
                        this.classList.add('bg-orange-50', 'text-orange-600');
                    } else {
                        this.classList.remove('text-gray-600');
                        this.classList.add('bg-gray-100', 'text-gray-900');
                    }

                    // 6. Fermer le menu sur mobile après un clic
                    if (window.innerWidth < 768 && !sidebar.classList.contains('-translate-x-full')) {
                        toggleSidebar();
                    }
                });
            });
        })();
    
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
      

<div className="fixed inset-0 bg-gray-900/50 z-40 hidden md:hidden transition-opacity duration-300 opacity-0" id="sidebar-overlay"></div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform -translate-x-full md:translate-x-0 md:relative transition-transform duration-300 shrink-0" id="sidebar">
<div className="h-16 flex items-center justify-between px-6 border-b border-gray-100 shrink-0">
<div>
<span className="text-xl tracking-tighter font-semibold text-orange-500">TERANGA</span>
<span className="text-xl tracking-tighter font-medium text-gray-900">GYMSOFT</span>
</div>

<button className="md:hidden text-gray-500 hover:text-gray-900" id="close-sidebar-btn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1" id="main-nav">
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-900 transition-colors" data-target="page-overview" data-title="Vue d'ensemble" href="#">
<iconify-icon className="text-lg" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Vue d'ensemble
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="page-members" data-title="Gestion des Membres" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Membres
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="page-inventory" data-title="Inventaire &amp; Stock" href="#">
<iconify-icon className="text-lg" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Inventaire
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" data-target="page-pos" data-title="Caisse (POS)" href="#">
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Caisse (POS)
            </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Analytique</p>
</div>
<a className="nav-link flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" data-target="page-analytics" data-title="Rapports &amp; Analytique" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Rapports Détaillés
            </a>
</nav>
<div className="p-4 border-t border-gray-100 shrink-0">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium text-sm">
                    AD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Admin Teranga</p>
<p className="text-xs text-gray-500 truncate">admin@teranga.sn</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<h1 className="text-xl tracking-tight font-medium text-gray-900 hidden sm:block" id="page-title">Vue d'ensemble</h1>
</div>
<div className="flex items-center gap-4 lg:gap-6">

<div className="relative hidden sm:block w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder-gray-400" placeholder="Rechercher..." type="text"/>
</div>
<button className="relative p-1.5 text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 relative">

<div className="page-section space-y-8" id="page-overview">
<div className="flex flex-col gap-2">
<h2 className="text-2xl tracking-tight font-semibold text-gray-900">Bonjour, Admin 👋</h2>
<p className="text-sm text-gray-500">Voici ce qui se passe dans votre salle de sport aujourd'hui.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-blue-50 rounded-md text-blue-600">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600">Présences Auj.</span>
</div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900">124</h3>
<p className="text-xs text-gray-500 mt-1">+12% par rapport à hier</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-orange-50 rounded-md text-orange-600">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600">Nouveaux Membres</span>
</div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900">8</h3>
<p className="text-xs text-gray-500 mt-1">Ce mois-ci</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-green-50 rounded-md text-green-600">
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600">Renouvellements</span>
</div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900">45</h3>
<p className="text-xs text-gray-500 mt-1">À prévoir cette semaine</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-purple-50 rounded-md text-purple-600">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600">Stock Faible</span>
</div>
<h3 className="text-2xl tracking-tight font-medium text-gray-900">3</h3>
<p className="text-xs text-gray-500 mt-1">Articles nécessitant réassort</p>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
<h3 className="text-sm font-medium text-gray-900">Activité Récente</h3>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900">Tout voir</button>
</div>
<div className="divide-y divide-gray-100">
<div className="px-6 py-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-gray-900"><span className="font-medium">Moussa Diop</span> a scanné son badge (Entrée).</p>
<p className="text-xs text-gray-500">Il y a 2 minutes</p>
</div>
</div>
<div className="px-6 py-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
<iconify-icon icon="solar:cart-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-gray-900">Nouvelle vente POS : <span className="font-medium">Whey Protein (x1)</span>.</p>
<p className="text-xs text-gray-500">Il y a 15 minutes</p>
</div>
</div>
<div className="px-6 py-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm text-gray-900"><span className="font-medium">Aïssatou Fall</span> a renouvelé son abonnement Premium.</p>
<p className="text-xs text-gray-500">Il y a 1 heure</p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden space-y-6" id="page-members">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="relative w-full sm:w-80">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm" placeholder="Rechercher un membre..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-transparent rounded-md text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap">
<iconify-icon className="text-lg" icon="solar:user-plus-linear"></iconify-icon>
                        Nouveau Membre
                    </button>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Membre</th>
<th className="px-6 py-3 font-medium">Plan</th>
<th className="px-6 py-3 font-medium">Statut</th>
<th className="px-6 py-3 font-medium text-right">Expiration</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">MD</div>
<div>
<div className="font-medium text-gray-900">Moussa Diop</div>
<div className="text-xs text-gray-500">+221 77 123 45 67</div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium text-gray-700">Premium</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Actif</span>
</td>
<td className="px-6 py-4 text-right text-gray-600">12 Oct 2024</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">AF</div>
<div>
<div className="font-medium text-gray-900">Aïssatou Fall</div>
<div className="text-xs text-gray-500">+221 76 987 65 43</div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium text-gray-700">VIP</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Actif</span>
</td>
<td className="px-6 py-4 text-right text-gray-600">05 Jan 2025</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">KS</div>
<div>
<div className="font-medium text-gray-900">Karim Sy</div>
<div className="text-xs text-gray-500">+221 70 456 78 90</div>
</div>
</div>
</td>
<td className="px-6 py-4 font-medium text-gray-700">Basic</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">Expiré</span>
</td>
<td className="px-6 py-4 text-right text-red-600 font-medium">Il y a 3 jours</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs text-gray-500">Affichage de 1 à 3 sur 842 membres</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled="">Précédent</button>
<button className="px-3 py-1 border border-gray-200 rounded text-xs font-medium text-gray-600 hover:bg-gray-50">Suivant</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden space-y-6" id="page-inventory">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-2">
<select className="px-3 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm">
<option>Toutes les catégories</option>
<option>Suppléments</option>
<option>Équipements</option>
<option>Boissons</option>
</select>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-transparent rounded-md text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                        Ajouter Produit
                    </button>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Produit</th>
<th className="px-6 py-3 font-medium">SKU</th>
<th className="px-6 py-3 font-medium">Prix</th>
<th className="px-6 py-3 font-medium">Stock</th>
<th className="px-6 py-3 font-medium text-right">Statut</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon className="text-xl" icon="solar:bottle-linear"></iconify-icon>
</div>
<span className="font-medium text-gray-900">Whey Protein Gold 2kg</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500">SUP-WPG-01</td>
<td className="px-6 py-4 font-medium text-gray-900">35,000 F</td>
<td className="px-6 py-4 text-gray-700">24 unités</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">En stock</span>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<span className="font-medium text-gray-900">Eau Minérale 1.5L</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500">BOI-EAU-15</td>
<td className="px-6 py-4 font-medium text-gray-900">500 F</td>
<td className="px-6 py-4 text-red-600 font-medium">2 unités</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200">Stock Faible</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="page-section hidden h-full" id="page-pos">
<div className="flex flex-col lg:flex-row gap-6 h-full pb-6">

<div className="flex-1 flex flex-col gap-4">
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-medium">Tous</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Boissons</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">Suppléments</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto pr-2 pb-2">

<button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-orange-500 transition-colors shadow-sm text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-3xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Eau Minérale 1.5L</h4>
<p className="text-sm text-gray-500 mt-1">500 F</p>
</div>
</button>
<button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-orange-500 transition-colors shadow-sm text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-3xl" icon="solar:bottle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Whey Shaker</h4>
<p className="text-sm text-gray-500 mt-1">2,500 F</p>
</div>
</button>
<button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-orange-500 transition-colors shadow-sm text-center group">
<div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
<iconify-icon className="text-3xl" icon="solar:t-shirt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">T-Shirt Teranga</h4>
<p className="text-sm text-gray-500 mt-1">10,000 F</p>
</div>
</button>
</div>
</div>

<div className="w-full lg:w-80 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-[600px] lg:h-auto shrink-0">
<div className="p-4 border-b border-gray-100 flex items-center justify-between">
<h3 className="font-medium text-gray-900">Ticket actuel</h3>
<button className="text-xs text-gray-400 hover:text-red-500"><iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-gray-900">Eau Minérale 1.5L</h4>
<p className="text-xs text-gray-500">500 F x 2</p>
</div>
<span className="text-sm font-medium text-gray-900">1,000 F</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-gray-900">Whey Shaker</h4>
<p className="text-xs text-gray-500">2,500 F x 1</p>
</div>
<span className="text-sm font-medium text-gray-900">2,500 F</span>
</div>
</div>
<div className="p-4 bg-gray-50/50 border-t border-gray-100 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-gray-500">Sous-total</span>
<span className="font-medium text-gray-900">3,500 F</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">TVA (18%)</span>
<span className="font-medium text-gray-900">630 F</span>
</div>
<div className="pt-3 border-t border-gray-200 flex justify-between">
<span className="font-medium text-gray-900">Total</span>
<span className="text-lg font-semibold text-gray-900">4,130 F</span>
</div>
<button className="w-full py-3 mt-4 bg-orange-500 text-white rounded-lg font-medium text-sm hover:bg-orange-600 transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
                                Encaisser
                            </button>
</div>
</div>
</div>
</div>

<div className="page-section hidden space-y-8" id="page-analytics">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Revenus du mois</span>
<div className="p-2 bg-green-50 rounded-lg text-green-600">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl tracking-tight font-medium text-gray-900">2.4M FCFA</h2>
<span className="text-xs font-medium text-green-600 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                12%
                            </span>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Membres Actifs</span>
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<iconify-icon className="text-lg" icon="solar:user-check-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl tracking-tight font-medium text-gray-900">842</h2>
<span className="text-xs font-medium text-green-600 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                4%
                            </span>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Ventes POS (Auj.)</span>
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon className="text-lg" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl tracking-tight font-medium text-gray-900">45,000 F</h2>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Alertes Stock</span>
<div className="p-2 bg-red-50 rounded-lg text-red-600">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-2xl tracking-tight font-medium text-gray-900">12</h2>
<span className="text-sm text-gray-500">articles</span>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg tracking-tight font-medium text-gray-900">Analyse Détaillée</h2>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500 hidden sm:block">Période:</span>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                                6 Mois
                                <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="ml-1 sm:ml-2 flex items-center gap-2 px-3 py-1.5 bg-orange-500 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-600 transition-colors shadow-sm">
<iconify-icon icon="solar:export-linear"></iconify-icon>
<span className="hidden sm:block">Exporter</span>
</button>
</div>
</div>
<div className="border-b border-gray-200 mb-6">
<nav className="-mb-px flex space-x-8">
<a className="border-orange-500 text-orange-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" href="#">
                                Aperçu Financier
                            </a>
<a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" href="#">
                                Fréquentation
                            </a>
</nav>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col">
<h3 className="text-sm font-medium text-gray-900 mb-6">Évolution des Revenus (Abonnements vs POS)</h3>
<div className="flex-1 flex items-end gap-2 sm:gap-4 mt-auto pt-4 relative min-h-[240px]">
<div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 pb-8">
<span>3M</span><span>2M</span><span>1M</span><span>0</span>
</div>
<div className="flex-1 flex items-end justify-between pl-8 h-full pb-8 relative">
<div className="absolute inset-0 pl-8 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-gray-100 h-0"></div>
<div className="w-full border-t border-gray-100 h-0"></div>
<div className="w-full border-t border-gray-100 h-0"></div>
<div className="w-full border-t border-gray-200 h-0"></div>
</div>

<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '65%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '25%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Jan</span>
</div>
<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '70%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '20%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Fév</span>
</div>
<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '60%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '30%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Mar</span>
</div>
<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '85%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '22%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Avr</span>
</div>
<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '80%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '35%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Mai</span>
</div>
<div className="w-full max-w-[40px] flex flex-col justify-end group z-10 h-full relative">
<div className="w-full bg-orange-500 rounded-t-sm transition-all group-hover:opacity-90" style={{height: '95%'}}></div>
<div className="w-full bg-gray-800 rounded-t-sm transition-all group-hover:opacity-90 absolute bottom-0" style={{height: '28%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Juin</span>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-6 mt-6">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span><span className="text-xs text-gray-600">Abonnements</span></div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gray-800"></span><span className="text-xs text-gray-600">Ventes POS</span></div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-4">Répartition Abonnements</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium text-gray-700">VIP</span><span className="text-gray-500">35%</span></div>
<div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gray-800 h-2 rounded-full" style={{width: '35%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium text-gray-700">Premium</span><span className="text-gray-500">45%</span></div>
<div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-medium text-gray-700">Basic</span><span className="text-gray-500">20%</span></div>
<div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gray-300 h-2 rounded-full" style={{width: '20%'}}></div></div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl border border-orange-400 p-6 shadow-sm text-white">
<h3 className="text-sm font-medium text-orange-100 mb-2">Insight du mois</h3>
<p className="text-sm leading-relaxed mb-4">Les renouvellements <span className="font-medium">Premium</span> ont augmenté de 18% par rapport au mois précédent.</p>
<button className="text-xs font-medium text-white hover:text-orange-100 flex items-center gap-1 transition-colors">Voir les détails <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
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
