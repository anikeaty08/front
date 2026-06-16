import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // Show target view
            document.getElementById('view-' + viewName).classList.remove('hidden');
            
            // Update Navigation Styles
            document.querySelectorAll('.nav-item').forEach(btn => {
                btn.classList.remove('bg-stone-50', 'text-stone-900');
                btn.classList.add('text-stone-500');
            });
            
            const activeBtn = document.getElementById('nav-' + viewName);
            if(activeBtn) {
                activeBtn.classList.remove('text-stone-500');
                activeBtn.classList.add('bg-stone-50', 'text-stone-900');
            }

            // Update Page Title
            const titles = {
                'dashboard': 'Tableau de bord',
                'orders': 'Historique des Commandes',
                'products': 'Catalogue Produits',
                'customers': 'Clients',
                'finances': 'Finances & Transactions',
                'marketing': 'Marketing & Promo',
                'inventory': 'Inventaire & Stocks',
                'logistics': 'Logistique & Stock',
                'deliveries': 'Gestion des Livraisons',
                'drivers': 'Gestion des Livreurs',
                'settings': 'Paramètres'
            };
            document.getElementById('page-title').textContent = titles[viewName] || 'ASN Admin';
        }

        // Toggle Inventory List/Form
        function toggleInventoryView() {
            const list = document.getElementById('inventory-list');
            const form = document.getElementById('inventory-form');
            const btn = document.getElementById('btn-toggle-inventory');

            if(list.classList.contains('hidden')) {
                // Show List
                list.classList.remove('hidden');
                form.classList.add('hidden');
                btn.innerHTML = '<i data-lucide="plus" class="w-4 h-4"></i> Nouveau Produit';
            } else {
                // Show Form
                list.classList.add('hidden');
                form.classList.remove('hidden');
                btn.innerHTML = '<i data-lucide="list" class="w-4 h-4"></i> Voir Liste';
            }
            lucide.createIcons();
        }

        // Specific function for Delivery Tabs
        function switchDeliveryTab(tabName) {
            // Hide all tabs content
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            
            // Show specific tab
            document.getElementById('tab-content-' + tabName).classList.add('active');

            // Reset buttons styles
            const btnManagement = document.getElementById('tab-btn-management');
            const btnTracking = document.getElementById('tab-btn-tracking');

            if(tabName === 'management') {
                btnManagement.className = "px-4 py-2 text-sm font-medium text-stone-900 border-b-2 border-stone-900 transition-colors focus:outline-none";
                btnTracking.className = "px-4 py-2 text-sm font-medium text-stone-500 border-b-2 border-transparent hover:text-stone-700 transition-colors focus:outline-none";
            } else {
                btnManagement.className = "px-4 py-2 text-sm font-medium text-stone-500 border-b-2 border-transparent hover:text-stone-700 transition-colors focus:outline-none";
                btnTracking.className = "px-4 py-2 text-sm font-medium text-stone-900 border-b-2 border-stone-900 transition-colors focus:outline-none";
            }
        }

        // Toggle Delivery Details (Accordion)
        function toggleDeliveryDetails(id) {
            const element = document.getElementById(id);
            if(element.classList.contains('open')) {
                element.classList.remove('open');
            } else {
                element.classList.add('open');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-stone-200 flex flex-col justify-between h-full flex-shrink-0 z-20">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white font-medium text-xs tracking-tighter">ASN</div>
<h1 className="font-medium text-stone-900 tracking-tight text-sm">ASN ADMIN</h1>
</div>
<nav className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2 pl-2">Vue Globale</div>
<button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-stone-900 bg-stone-50 rounded-md transition-colors" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="w-4 h-4 text-stone-500" data-lucide="layout-dashboard"></i> Tableau de bord
                    </button>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2 pl-2">Gestion Boutique</div>
<ul className="space-y-0.5">
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-orders" onclick="switchView('orders')"><i className="w-4 h-4" data-lucide="shopping-bag"></i>Commandes</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-products" onclick="switchView('products')"><i className="w-4 h-4" data-lucide="tag"></i>Produits</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-customers" onclick="switchView('customers')"><i className="w-4 h-4" data-lucide="users"></i>Clients</button></li>
</ul>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2 pl-2">Finance &amp; Marketing</div>
<ul className="space-y-0.5">
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-finances" onclick="switchView('finances')"><i className="w-4 h-4" data-lucide="wallet"></i>Finances</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-marketing" onclick="switchView('marketing')"><i className="w-4 h-4" data-lucide="megaphone"></i>Marketing</button></li>
</ul>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2 pl-2">Logistique &amp; Stock</div>
<ul className="space-y-0.5">
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-inventory" onclick="switchView('inventory')"><i className="w-4 h-4" data-lucide="clipboard-list"></i> Inventaire</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-logistics" onclick="switchView('logistics')"><i className="w-4 h-4" data-lucide="package-search"></i> Logistique</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-deliveries" onclick="switchView('deliveries')"><i className="w-4 h-4" data-lucide="truck"></i>Livraisons</button></li>
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-drivers" onclick="switchView('drivers')"><i className="w-4 h-4" data-lucide="bike"></i>Livreurs</button></li>
</ul>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-stone-400 mb-2 pl-2">Configuration</div>
<ul className="space-y-0.5">
<li><button className="nav-item w-full flex items-center gap-3 px-2 py-1.5 text-sm font-normal text-stone-500 hover:text-stone-900 hover:bg-stone-50 rounded-md transition-colors" id="nav-settings" onclick="switchView('settings')"><i className="w-4 h-4" data-lucide="settings"></i>Paramètres</button></li>
</ul>
</div>
</nav>
</div>
<div className="p-4 border-t border-stone-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600">AS</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Admin ASN</span>
<span className="text-xs text-stone-400">Propriétaire</span>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col h-full overflow-hidden relative">
<header className="h-16 border-b border-stone-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-8 sticky top-0 z-10 flex-shrink-0">
<div className="flex flex-col justify-center">
<h2 className="text-base font-medium text-stone-900 tracking-tight" id="page-title">Tableau de bord</h2>
<span className="text-xs text-stone-400" id="page-date">Mardi 25 novembre 2025</span>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 text-sm bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-300 placeholder:text-stone-400 w-64 transition-all" placeholder="Rechercher..." type="text"/>
</div>
<button className="relative p-1.5 hover:bg-stone-50 rounded-md transition-colors text-stone-500">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full border border-white"></span>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-8 bg-[#fcfaf8]">

<div className="view-section fade-in space-y-6 max-w-7xl mx-auto" id="view-dashboard">
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2"><span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Chiffre d'Affaires</span><i className="w-3.5 h-3.5 text-stone-300" data-lucide="banknote"></i></div>
<div><div className="text-2xl font-semibold text-stone-900 tracking-tight">0 FCFA</div><span className="text-xs font-medium text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded mt-2 inline-block">vs mois dernier 0%</span></div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden">
<div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-amber-400"></div>
<div className="flex justify-between items-start mb-2"><span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Commandes</span></div>
<div><div className="text-2xl font-semibold text-stone-900 tracking-tight">24</div><span className="text-xs font-medium text-amber-600 mt-1 block">+4 nouvelles</span></div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start mb-2"><span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Clients</span><i className="w-3.5 h-3.5 text-stone-300" data-lucide="users"></i></div>
<div><div className="text-2xl font-semibold text-stone-900 tracking-tight">1,204</div><span className="text-xs font-medium text-stone-400 mt-1 block">+12%</span></div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-16 h-16 bg-orange-50 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-2 relative z-10"><span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Stock Total</span><i className="w-3.5 h-3.5 text-orange-200" data-lucide="package"></i></div>
<div className="relative z-10"><div className="text-2xl font-semibold text-stone-900 tracking-tight">4,523</div><span className="text-xs font-medium text-stone-400 mt-1 block">Unités</span></div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start mb-2"><span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Points Relais</span><i className="w-3.5 h-3.5 text-stone-300" data-lucide="map-pin"></i></div>
<div><div className="text-2xl font-semibold text-stone-900 tracking-tight">4</div><span className="text-xs font-medium text-emerald-600 mt-1 block">Actifs</span></div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-stone-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-stone-900">Commandes Récentes</h3>
<button className="text-xs text-stone-400 hover:text-stone-900 transition-colors" onclick="switchView('orders')">Voir tout</button>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-stone-400 text-[10px] uppercase tracking-wider bg-stone-50/50 border-b border-stone-50">
<tr>
<th className="px-6 py-3 font-medium">Client</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Montant</th>
<th className="px-6 py-3 font-medium text-right">Statut</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-50">
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 font-medium text-stone-900">Fatou Diop</td>
<td className="px-6 py-4 text-stone-500">25 Nov, 10:23</td>
<td className="px-6 py-4 text-stone-600">45,000 FCFA</td>
<td className="px-6 py-4 text-right"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Livré</span></td>
</tr>
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 font-medium text-stone-900">Amadou Sy</td>
<td className="px-6 py-4 text-stone-500">25 Nov, 09:15</td>
<td className="px-6 py-4 text-stone-600">12,500 FCFA</td>
<td className="px-6 py-4 text-right"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">En cours</span></td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden relative">
<div className="absolute left-0 top-6 bottom-6 w-1 bg-red-500 rounded-r-full"></div>
<div className="p-6">
<h3 className="text-sm font-medium text-stone-900 flex items-center gap-2 mb-6"><i className="w-4 h-4 text-red-500" data-lucide="alert-triangle"></i> Alertes Stock</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg border border-red-50 cursor-pointer hover:bg-red-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-600">2</div>
<span className="text-sm text-stone-700">Ruptures totales</span>
</div>
<i className="w-4 h-4 text-stone-400" data-lucide="chevron-right"></i>
</div>
</div>
<button className="w-full mt-6 py-2 border border-stone-200 rounded-md text-xs font-medium text-stone-600 hover:bg-stone-50 transition-colors" onclick="switchView('logistics')">Gérer les alertes</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-finances">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center"><i className="w-4 h-4 text-emerald-600" data-lucide="trending-up"></i></div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Total Entrées</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight">850,000 FCFA</div>
<div className="text-xs text-emerald-600 mt-2 font-medium">+15% ce mois</div>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><i className="w-4 h-4 text-red-600" data-lucide="trending-down"></i></div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Total Sorties</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight">125,000 FCFA</div>
<div className="text-xs text-stone-400 mt-2 font-medium">Logistique &amp; Pub</div>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 w-20 h-20 bg-stone-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="flex items-center gap-3 mb-4 relative z-10">
<div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="wallet"></i></div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-widest">Solde Net</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight relative z-10">725,000 FCFA</div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-320px)]">
<div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-stone-900">Historique des Transactions</h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-medium rounded-md hover:bg-stone-50 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="filter"></i> Filtrer
                            </button>
<button className="px-3 py-1.5 bg-stone-900 text-white text-xs font-medium rounded-md hover:bg-stone-800 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Nouvelle Opération
                            </button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider sticky top-0 z-10 border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Libellé</th>
<th className="px-6 py-3 font-medium">Canal</th>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium text-right">Montant</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 text-stone-500 text-xs">25 Nov, 14:30</td>
<td className="px-6 py-4 font-medium text-stone-900">Commande #ORD-3201</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Orange Money
                                        </span>
</td>
<td className="px-6 py-4"><span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-0.5 rounded">Entrée</span></td>
<td className="px-6 py-4 text-right font-medium text-stone-900">+25,000 FCFA</td>
</tr>
<tr className="hover:bg-stone-50/50">
<td className="px-6 py-4 text-stone-500 text-xs">25 Nov, 12:00</td>
<td className="px-6 py-4 font-medium text-stone-900">Paiement Livreur (Moussa)</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Wave
                                        </span>
</td>
<td className="px-6 py-4"><span className="text-red-600 text-xs font-medium bg-red-50 px-2 py-0.5 rounded">Sortie</span></td>
<td className="px-6 py-4 text-right font-medium text-stone-900">-2,500 FCFA</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-marketing">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-stone-900 flex items-center gap-2"><i className="w-4 h-4 text-stone-500" data-lucide="message-circle"></i> Campagnes Messages</h3>
<button className="text-xs font-medium text-stone-900 bg-white border border-stone-200 px-3 py-1.5 rounded-md hover:bg-stone-50 shadow-sm">+ Nouvelle</button>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-stone-100 flex items-start justify-between">
<div>
<h4 className="text-sm font-medium text-stone-900">Promo Fin de Mois</h4>
<p className="text-xs text-stone-500 mt-1">Envoyé via SMS • 1,200 destinataires</p>
</div>
<span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Terminé</span>
</div>
<div className="grid grid-cols-3 divide-x divide-stone-100 bg-stone-50/50">
<div className="p-3 text-center">
<div className="text-[10px] uppercase tracking-wide text-stone-400">Ouverture</div>
<div className="text-sm font-semibold text-stone-900 mt-1">85%</div>
</div>
<div className="p-3 text-center">
<div className="text-[10px] uppercase tracking-wide text-stone-400">Clics</div>
<div className="text-sm font-semibold text-stone-900 mt-1">12%</div>
</div>
<div className="p-3 text-center">
<div className="text-[10px] uppercase tracking-wide text-stone-400">Ventes</div>
<div className="text-sm font-semibold text-stone-900 mt-1">45</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-stone-900 flex items-center gap-2"><i className="w-4 h-4 text-stone-500" data-lucide="ticket"></i> Codes Promo</h3>
<button className="text-xs font-medium text-stone-900 bg-white border border-stone-200 px-3 py-1.5 rounded-md hover:bg-stone-50 shadow-sm">+ Créer</button>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider border-b border-stone-100">
<tr>
<th className="px-4 py-2 font-medium">Code</th>
<th className="px-4 py-2 font-medium">Réduction</th>
<th className="px-4 py-2 font-medium text-right">Utilisations</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr>
<td className="px-4 py-3"><span className="font-mono font-medium text-stone-900 bg-stone-100 px-2 py-0.5 rounded border border-stone-200 text-xs">BIENVENUE10</span></td>
<td className="px-4 py-3 text-xs text-stone-600">-10%</td>
<td className="px-4 py-3 text-right text-xs text-stone-500">24/100</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-inventory">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Inventaire Global</h3>
<p className="text-sm text-stone-500">Vue d'ensemble et gestion des stocks.</p>
</div>
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 flex items-center gap-2 transition-all" id="btn-toggle-inventory" onclick="toggleInventoryView()">
<i className="w-4 h-4" data-lucide="plus"></i> Nouveau Produit
                    </button>
</div>

<div className="space-y-6" id="inventory-list">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden">
<div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-stone-100 to-transparent opacity-50 rounded-bl-full"></div>
<div className="flex items-center gap-3 mb-3 relative z-10">
<div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center border border-stone-100">
<i className="w-4 h-4 text-stone-600" data-lucide="coins"></i>
</div>
<span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Valeur Stock</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight relative z-10">14,250,000 FCFA</div>
<span className="text-xs text-emerald-600 font-medium relative z-10 mt-1 block">Prix de vente estimé</span>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-stone-50 rounded-lg flex items-center justify-center border border-stone-100">
<i className="w-4 h-4 text-stone-600" data-lucide="package"></i>
</div>
<span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Total Produits</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight">4,523</div>
<span className="text-xs text-stone-400 font-medium mt-1 block">Unités réparties sur 48 références</span>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm border-l-4 border-l-red-500">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
<i className="w-4 h-4 text-red-600" data-lucide="alert-octagon"></i>
</div>
<span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest">Alertes</span>
</div>
<div className="text-2xl font-semibold text-stone-900 tracking-tight">3</div>
<span className="text-xs text-red-500 font-medium mt-1 block">Produits en rupture ou stock faible</span>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-300px)]">
<div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/30">
<div className="flex items-center gap-4">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" data-lucide="search"></i>
<input className="pl-8 pr-4 py-1.5 text-xs bg-white border border-stone-200 rounded-md focus:outline-none focus:border-stone-400 w-64 shadow-sm" placeholder="Rechercher référence..." type="text"/>
</div>
<button className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-medium rounded-md hover:bg-stone-50 flex items-center gap-2 shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="filter"></i> Filtres
                                </button>
</div>
<div className="text-xs text-stone-500">Dernière mise à jour: <span className="font-medium text-stone-900">Il y a 2 min</span></div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider sticky top-0 z-10 border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium">Produit</th>
<th className="px-6 py-3 font-medium">Catégorie</th>
<th className="px-6 py-3 font-medium">Coût / Vente</th>
<th className="px-6 py-3 font-medium">Stock Actuel</th>
<th className="px-6 py-3 font-medium">État</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">

<tr className="hover:bg-stone-50/50 group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-400"><i className="w-4 h-4" data-lucide="image"></i></div>
<div>
<div className="font-medium text-stone-900">Sérum Vitamine C</div>
<div className="text-[10px] text-stone-400 font-mono">SKU-8821</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500">Soins Visage</td>
<td className="px-6 py-4 text-xs">
<div className="text-stone-900 font-medium">15,000 FCFA</div>
<div className="text-stone-400 text-[10px]">Coût: 8,000</div>
</td>
<td className="px-6 py-4 font-medium text-stone-900">142</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">En stock</span></td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-stone-200 rounded text-xs font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm">
<i className="w-3 h-3" data-lucide="refresh-cw"></i> Restocker
                                            </button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-400"><i className="w-4 h-4" data-lucide="image"></i></div>
<div>
<div className="font-medium text-stone-900">Crème Hydratante Bio</div>
<div className="text-[10px] text-stone-400 font-mono">SKU-9902</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500">Soins Corps</td>
<td className="px-6 py-4 text-xs">
<div className="text-stone-900 font-medium">12,500 FCFA</div>
<div className="text-stone-400 text-[10px]">Coût: 6,000</div>
</td>
<td className="px-6 py-4 font-medium text-amber-600">8</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Faible</span></td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-stone-200 rounded text-xs font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm bg-amber-50 border-amber-100 text-amber-800">
<i className="w-3 h-3" data-lucide="refresh-cw"></i> Restocker
                                            </button>
</td>
</tr>

<tr className="hover:bg-red-50/30 group transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-400"><i className="w-4 h-4" data-lucide="image"></i></div>
<div>
<div className="font-medium text-stone-900">Huile d'Argan Pure</div>
<div className="text-[10px] text-stone-400 font-mono">SKU-1022</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs text-stone-500">Cheveux</td>
<td className="px-6 py-4 text-xs">
<div className="text-stone-900 font-medium">18,000 FCFA</div>
<div className="text-stone-400 text-[10px]">Coût: 10,000</div>
</td>
<td className="px-6 py-4 font-medium text-red-600">0</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-700 border border-red-100">Rupture</span></td>
<td className="px-6 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-stone-200 rounded text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm">
<i className="w-3 h-3" data-lucide="plus"></i> Urgent
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden max-w-4xl mx-auto bg-white rounded-xl border border-stone-200 shadow-sm p-8 fade-in" id="inventory-form">
<div className="flex justify-between items-center mb-8 border-b border-stone-100 pb-4">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Ajouter un produit</h3>
<p className="text-sm text-stone-500">Créez une nouvelle fiche produit pour l'inventaire.</p>
</div>
<button className="text-sm text-stone-500 hover:text-stone-900" onclick="toggleInventoryView()">Annuler</button>
</div>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Nom du produit</label>
<input className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 placeholder:text-stone-300" placeholder="Ex: Sérum Vitaminé" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Catégorie</label>
<select className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 bg-white focus:outline-none focus:ring-1 focus:ring-stone-900">
<option>Soins Visage</option>
<option>Soins Corps</option>
<option>Cheveux</option>
<option>Accessoires</option>
</select>
</div>
</div>
<div className="grid grid-cols-3 gap-6">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Prix de vente (FCFA)</label>
<input className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-stone-900" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Coût unitaire (FCFA)</label>
<input className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-stone-900" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Stock initial</label>
<input className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-stone-900" placeholder="0" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Description</label>
<textarea className="w-full text-sm border border-stone-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-stone-900 placeholder:text-stone-300" rows="3"></textarea>
</div>
<div className="pt-4 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-stone-600 bg-stone-50 border border-stone-200 rounded-lg hover:bg-stone-100" type="button">Enregistrer brouillon</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 shadow-sm" type="button">Publier le produit</button>
</div>
</form>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-orders">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Historique des Commandes</h3>
<p className="text-sm text-stone-500">Gérez les commandes entrantes et suivez les statuts.</p>
</div>
<div className="flex gap-2">
<button className="bg-white border border-stone-200 text-stone-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-stone-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Exporter
                        </button>
<button className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-stone-800 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Créer commande
                        </button>
</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-250px)]">
<div className="px-6 py-3 border-b border-stone-100 flex items-center gap-4 bg-stone-50/50">
<div className="flex gap-2 text-sm">
<button className="px-3 py-1 bg-stone-200 text-stone-900 font-medium rounded-md">Tous</button>
<button className="px-3 py-1 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md">En attente</button>
<button className="px-3 py-1 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md">Payé</button>
</div>
<div className="ml-auto relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" data-lucide="search"></i>
<input className="pl-8 pr-4 py-1 text-xs bg-white border border-stone-200 rounded-md focus:outline-none focus:border-stone-400 w-64" placeholder="Rechercher..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider sticky top-0 z-10 border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium w-10"><input className="custom-checkbox border-stone-300 rounded" type="checkbox"/></th>
<th className="px-6 py-3 font-medium">Référence</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Client</th>
<th className="px-6 py-3 font-medium">Paiement</th>
<th className="px-6 py-3 font-medium">Total</th>
<th className="px-6 py-3 font-medium text-right">Statut</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 cursor-pointer">
<td className="px-6 py-4"><input className="custom-checkbox border-stone-300 rounded" type="checkbox"/></td>
<td className="px-6 py-4 font-mono text-xs text-stone-600">#ORD-3201</td>
<td className="px-6 py-4 text-stone-500 text-xs">Aujourd'hui, 14:30</td>
<td className="px-6 py-4 font-medium text-stone-900">Moussa Diop</td>
<td className="px-6 py-4 text-xs text-stone-500"><span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Orange Money</span></td>
<td className="px-6 py-4 font-medium">25,000 FCFA</td>
<td className="px-6 py-4 text-right"><span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">En cours</span></td>
</tr>
<tr className="hover:bg-stone-50/50 cursor-pointer">
<td className="px-6 py-4"><input className="custom-checkbox border-stone-300 rounded" type="checkbox"/></td>
<td className="px-6 py-4 font-mono text-xs text-stone-600">#ORD-3200</td>
<td className="px-6 py-4 text-stone-500 text-xs">Hier, 18:15</td>
<td className="px-6 py-4 font-medium text-stone-900">Aminata Fall</td>
<td className="px-6 py-4 text-xs text-stone-500"><span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-300"></div> Espèces</span></td>
<td className="px-6 py-4 font-medium">12,500 FCFA</td>
<td className="px-6 py-4 text-right"><span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Livré</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-products">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Catalogue Produits</h3>
<p className="text-sm text-stone-500">Gérez votre inventaire, prix et descriptions.</p>
</div>
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 flex items-center gap-2" onclick="switchView('inventory')">
<i className="w-4 h-4" data-lucide="plus"></i> Ajouter Produit
                    </button>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="px-6 py-3 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
<div className="flex items-center gap-4">
<div className="relative">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" data-lucide="search"></i>
<input className="pl-8 pr-4 py-1.5 text-xs bg-white border border-stone-200 rounded-md focus:outline-none focus:border-stone-400 w-56" placeholder="Filtrer..." type="text"/>
</div>
<select className="text-xs border-stone-200 rounded-md py-1.5 px-3 bg-white text-stone-600 focus:ring-0 focus:border-stone-400">
<option>Toutes catégories</option>
<option>Soins Visage</option>
<option>Cheveux</option>
</select>
</div>
<span className="text-xs text-stone-400">Total: 48 produits</span>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium w-16">Image</th>
<th className="px-6 py-3 font-medium">Nom Produit</th>
<th className="px-6 py-3 font-medium">Catégorie</th>
<th className="px-6 py-3 font-medium">Prix</th>
<th className="px-6 py-3 font-medium">Stock</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 group">
<td className="px-6 py-3"><div className="w-10 h-10 rounded bg-stone-200 border border-stone-100"></div></td>
<td className="px-6 py-3 font-medium text-stone-900">Sérum Éclat Or 24K</td>
<td className="px-6 py-3 text-stone-500 text-xs">Soins Visage</td>
<td className="px-6 py-3 font-medium">18,000 FCFA</td>
<td className="px-6 py-3"><span className="text-emerald-600 text-xs font-medium">124 unités</span></td>
<td className="px-6 py-3 text-right">
<button className="text-stone-400 hover:text-stone-900 p-1"><i className="w-3.5 h-3.5" data-lucide="edit-2"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-customers">
<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 text-center text-stone-500">
                    Liste des clients (inchangé)
                </div>
</div>

<div className="view-section hidden fade-in space-y-8 max-w-7xl mx-auto pb-12" id="view-logistics">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-stone-900">Logistique &amp; Stock</h3>
<p className="text-sm text-stone-500">Gérez les stocks entre le Hangar et les Points Relais</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 shadow-sm">
<i className="w-4 h-4" data-lucide="history"></i> Historique
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 shadow-sm shadow-stone-900/10" onclick="alert('Nouveau point relais')">
<i className="w-4 h-4" data-lucide="map-pin"></i> Nouveau Point Relais
                        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
<h3 className="text-sm font-medium text-stone-900 flex items-center gap-2"><i className="w-4 h-4 text-stone-400" data-lucide="building-2"></i> Stock par Emplacement</h3>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium">Emplacement</th>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium text-center">Volume</th>
<th className="px-6 py-3 font-medium">État de stock</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="group hover:bg-stone-50/50 cursor-pointer">
<td className="px-6 py-4 font-medium text-stone-900">Hangar Principal (Yoff)</td>
<td className="px-6 py-4 text-stone-500 text-xs">Entrepôt Central</td>
<td className="px-6 py-4 text-center font-medium">3,450 unités</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Optimal</span></td>
<td className="px-6 py-4 text-right"><button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">
<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 relative overflow-hidden" id="transfer-form">
<div className="absolute top-0 right-0 w-20 h-20 bg-stone-50 rounded-bl-full -mr-10 -mt-10"></div>
<h3 className="text-sm font-semibold text-stone-900 mb-6 flex items-center gap-2 relative z-10"><i className="w-4 h-4 text-amber-500" data-lucide="arrow-right-left"></i> Effectuer un Transfert</h3>
<form className="space-y-4 relative z-10">
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">De (Origine)</label>
<select className="w-full text-sm border-stone-200 rounded-lg py-2.5 px-3 bg-stone-50 focus:ring-1 focus:ring-stone-900 outline-none">
<option>Hangar Principal (Yoff)</option>
</select>
</div>
<div className="flex justify-center -my-2 relative z-20">
<div className="bg-white p-1.5 rounded-full border border-stone-200 shadow-sm"><i className="w-3 h-3 text-stone-400" data-lucide="arrow-down"></i></div>
</div>
<div>
<label className="block text-xs font-medium text-stone-500 mb-1.5 uppercase tracking-wide">Vers (Destination)</label>
<select className="w-full text-sm border-stone-200 rounded-lg py-2.5 px-3 bg-stone-50 focus:ring-1 focus:ring-stone-900 outline-none">
<option>Point Relais Plateau</option>
</select>
</div>
<div className="pt-2 border-t border-stone-100 mt-2">
<label className="block text-xs font-medium text-stone-500 mb-1.5">Produit à transférer</label>
<select className="w-full text-sm border-stone-200 rounded-lg py-2 text-stone-700 mb-3 bg-white outline-none"><option>Sérum Éclat Or (Ref: #SKU-001)</option></select>
<label className="block text-xs font-medium text-stone-500 mb-1.5">Quantité</label>
<input className="w-full text-sm border border-stone-200 rounded-lg py-2 px-3 bg-white outline-none focus:border-stone-400" placeholder="0" type="number"/>
</div>
<button className="w-full bg-stone-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-stone-800 transition-colors shadow-sm mt-2" type="button">Valider le transfert</button>
</form>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-deliveries">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Livraisons</h3>
<p className="text-sm text-stone-500">Suivi et attribution des courses.</p>
</div>
</div>

<div className="flex border-b border-stone-200">
<button className="px-4 py-2 text-sm font-medium text-stone-900 border-b-2 border-stone-900 transition-colors focus:outline-none" id="tab-btn-management" onclick="switchDeliveryTab('management')">Gestion des Livraisons</button>
<button className="px-4 py-2 text-sm font-medium text-stone-500 border-b-2 border-transparent hover:text-stone-700 transition-colors focus:outline-none" id="tab-btn-tracking" onclick="switchDeliveryTab('tracking')">Livraisons en cours</button>
</div>

<div className="tab-content active space-y-4" id="tab-content-management">
<div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
<span className="text-xs text-stone-500">Assignation rapide :</span>
<div className="flex items-center gap-2">
<select className="text-sm bg-white border border-stone-200 rounded-md py-1.5 px-3 text-stone-700 focus:ring-1 focus:ring-stone-900">
<option>Moussa Fall (Zone Nord)</option>
<option>Alioune Diouf (Plateau)</option>
</select>
<button className="bg-stone-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-stone-800">Assigner sélection</button>
</div>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-350px)]">
<div className="px-6 py-3 border-b border-stone-100 flex items-center gap-4 bg-stone-50/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-stone-400" data-lucide="filter"></i>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Filtre Secteur:</span>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="px-3 py-1 bg-stone-900 text-white text-xs font-medium rounded-full shadow-sm">Tout voir</button>
<button className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs font-medium rounded-full hover:border-stone-300">Dakar Plateau</button>
<button className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs font-medium rounded-full hover:border-stone-300">Maristes / Hann</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider sticky top-0 z-10 border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium w-10"><input className="custom-checkbox border-stone-300 rounded" type="checkbox"/></th>
<th className="px-6 py-3 font-medium">Commande</th>
<th className="px-6 py-3 font-medium">Client &amp; Contact</th>
<th className="px-6 py-3 font-medium">Secteur</th>
<th className="px-6 py-3 font-medium">Adresse</th>
<th className="px-6 py-3 font-medium text-right">Assignation</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 group">
<td className="px-6 py-4"><input checked="" className="custom-checkbox border-stone-300 rounded" type="checkbox"/></td>
<td className="px-6 py-4 font-mono text-xs text-stone-500">#ORD-2455</td>
<td className="px-6 py-4">
<div className="font-medium text-stone-900">Aïda Koné</div>
<div className="text-xs text-stone-400">77 654 22 11</div>
</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Maristes</span></td>
<td className="px-6 py-4 text-stone-500 text-xs">Cité Douane, Villa 45</td>
<td className="px-6 py-4 text-right"><span className="text-xs text-stone-400 italic">Non assigné</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-content space-y-6" id="tab-content-tracking">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-sm font-bold text-stone-600">AD</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Alioune Diouf</h4>
<p className="text-xs text-stone-500">En route vers Plateau</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> En cours</span>
</div>
<div className="space-y-3 pl-5 border-l-2 border-stone-100 ml-5 relative">
<div className="relative">
<div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-stone-200 border-2 border-white"></div>
<p className="text-xs text-stone-400">14:00 • Prise en charge Hangar</p>
</div>
<div className="relative">
<div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-stone-900 border-2 border-white shadow-sm"></div>
<p className="text-sm text-stone-900 font-medium">Livraison chez Sokhna Diarra</p>
<p className="text-xs text-stone-500">34 Rue Carnot</p>
</div>
</div>

<div className="details-expand border-t border-stone-100 bg-stone-50/50 -mx-5 px-5 mt-4" id="details-alioune">
<div className="pt-4 pb-2">
<div className="grid grid-cols-2 gap-4 text-xs">
<div>
<h5 className="font-medium text-stone-900 mb-2 uppercase tracking-wide text-[10px]">Client</h5>
<div className="text-stone-600 font-medium">Sokhna Diarra</div>
<div className="text-stone-400">77 555 12 34</div>
<div className="text-stone-400 italic mt-1">"Appeler avant d'arriver"</div>
</div>
<div>
<h5 className="font-medium text-stone-900 mb-2 uppercase tracking-wide text-[10px]">Articles (2)</h5>
<ul className="space-y-1.5 text-stone-600 border-l border-stone-200 pl-3">
<li className="flex justify-between items-center"><span>1x Sérum Or</span> <span className="text-stone-400">18k</span></li>
<li className="flex justify-between items-center"><span>1x Crème Bio</span> <span className="text-stone-400">12k</span></li>
</ul>
</div>
</div>
<div className="mt-3 pt-2 border-t border-stone-200/50 flex justify-between items-center">
<span className="text-stone-500 text-xs">Total à encaisser</span>
<span className="font-bold text-stone-900 text-sm">30,000 FCFA</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
<span className="text-xs text-stone-500">Est. arrivée: 15min</span>
<button className="text-xs font-medium text-stone-900 hover:text-amber-600 transition-colors flex items-center gap-1 group" onclick="toggleDeliveryDetails('details-alioune')">
                                    Détails <i className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm relative overflow-hidden opacity-75">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-sm font-bold text-stone-600">MF</div>
<div>
<h4 className="text-sm font-semibold text-stone-900">Moussa Fall</h4>
<p className="text-xs text-stone-500">Zone Nord</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Terminé</span>
</div>
<div className="text-center py-4 text-xs text-stone-400">Course terminée à 13:45</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-7xl mx-auto" id="view-drivers">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Gestion des Livreurs</h3>
<p className="text-sm text-stone-500">Liste des livreurs actifs et gestion des zones.</p>
</div>
<button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="user-plus"></i> Ajouter Livreur
                    </button>
</div>
<div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500 text-[10px] uppercase tracking-wider border-b border-stone-100">
<tr>
<th className="px-6 py-3 font-medium">Livreur</th>
<th className="px-6 py-3 font-medium">Contact</th>
<th className="px-6 py-3 font-medium">Zone Principale</th>
<th className="px-6 py-3 font-medium">Courses Actives</th>
<th className="px-6 py-3 font-medium">Statut</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">MF</div>
<span className="font-medium text-stone-900">Moussa Fall</span>
</div>
</td>
<td className="px-6 py-4 text-stone-500 text-xs">77 654 00 01</td>
<td className="px-6 py-4"><span className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Zone Nord / Yoff</span></td>
<td className="px-6 py-4 font-medium">3 livraisons</td>
<td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Actif</span></td>
<td className="px-6 py-4 text-right"><button className="text-stone-400 hover:text-stone-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-3xl mx-auto" id="view-settings">
<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 text-center text-stone-500">
                    Paramètres (inchangé)
                </div>
</div>
</div>
</main>


    </>
  );
}
