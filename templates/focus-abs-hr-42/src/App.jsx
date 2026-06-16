import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Navigation Logic ---
        const navButtons = document.querySelectorAll('.nav-btn');
        const views = document.querySelectorAll('.app-view');
        const viewTitle = document.getElementById('view-title');

        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const targetTitle = btn.innerText.trim();

                // Update UI active states for navigation
                navButtons.forEach(b => {
                    b.classList.remove('bg-slate-800', 'text-white');
                    b.classList.add('text-slate-400');
                    b.querySelector('iconify-icon').classList.remove('text-blue-500');
                });
                btn.classList.remove('text-slate-400');
                btn.classList.add('bg-slate-800', 'text-white');
                btn.querySelector('iconify-icon').classList.add('text-blue-500');

                // Update Header Title
                viewTitle.innerText = targetTitle;

                // Switch Views
                views.forEach(view => {
                    view.classList.remove('active');
                    // Small delay to allow fade out before hiding, simplified for this snippet
                    setTimeout(() => { view.style.display = 'none'; }, 50); 
                });

                const targetView = document.getElementById(`view-${targetId}`);
                setTimeout(() => { 
                    targetView.style.display = 'block';
                    // Force reflow
                    void targetView.offsetWidth;
                    targetView.classList.add('active'); 
                }, 50);

                // Close mobile menu if open
                if (!sidebar.classList.contains('-translate-x-full')) {
                    toggleMobileMenu();
                }
            });
        });

        // --- Mobile Menu Logic ---
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const openBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-close-btn');

        function toggleMobileMenu() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.replace('opacity-0', 'opacity-100'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.replace('opacity-100', 'opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        openBtn.addEventListener('click', toggleMobileMenu);
        closeBtn.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);

        // --- Modal Logic ---
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('div[id$="-content"]');
            modal.classList.remove('hidden');
            // Trigger animation
            setTimeout(() => {
                modal.classList.replace('opacity-0', 'opacity-100');
                content.classList.replace('scale-95', 'scale-100');
            }, 10);
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('div[id$="-content"]');
            modal.classList.replace('opacity-100', 'opacity-0');
            content.classList.replace('scale-100', 'scale-95');
            setTimeout(() => modal.classList.add('hidden'), 200);
        }

        // Close modal when clicking outside
        document.getElementById('import-modal').addEventListener('click', function(e) {
            if(e.target === this) closeModal('import-modal');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 hidden md:hidden transition-opacity opacity-0" id="sidebar-overlay" style={{transition: 'opacity 0.3s ease'}}></div>

<aside className="w-64 bg-slate-900 text-slate-300 flex-col justify-between fixed inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-300 ease-in-out z-50 flex border-r border-slate-800 flex-shrink-0 h-full" id="sidebar">
<div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">

<div className="flex items-center justify-between mb-8 px-2">
<div className="flex items-center gap-3 cursor-pointer">
<div className="bg-blue-600 p-1.5 rounded-lg text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<div>
<h1 className="text-xl font-semibold text-white tracking-tight leading-tight">Focus_Abs</h1>
<p className="text-xs text-slate-500 uppercase tracking-widest font-medium mt-0.5">Suivi RH</p>
</div>
</div>
<button className="md:hidden text-slate-400 hover:text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="mobile-close-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<nav className="space-y-1 mt-6" id="main-nav">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors focus:outline-none" data-target="dashboard">
<iconify-icon className="text-xl text-blue-500" icon="solar:widget-linear"></iconify-icon>
                    Tableau de bord
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-800/50 hover:text-white text-slate-400 rounded-lg text-sm font-medium transition-colors focus:outline-none" data-target="absences">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                    Registre des Absences
                </button>
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-800/50 hover:text-white text-slate-400 rounded-lg text-sm font-medium transition-colors focus:outline-none" data-target="retards">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
                    Suivi des Retards
                </button>
</nav>

<div className="mt-8">
<h2 className="px-3 text-xs uppercase tracking-widest font-semibold text-slate-500 mb-3">Administration</h2>
<nav className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-3 py-2.5 hover:bg-slate-800/50 hover:text-white text-slate-400 rounded-lg text-sm font-medium transition-colors focus:outline-none" data-target="settings">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
                        Paramètres Modèles
                    </button>
</nav>
</div>
</div>

<div className="p-4 border-t border-slate-800 space-y-2 bg-slate-900">
<button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-slate-800/50 text-slate-400 hover:text-white rounded-lg text-sm font-medium transition-colors text-left focus:outline-none">
<iconify-icon className="text-lg" icon="solar:box-download-linear"></iconify-icon>
                Exporter données
            </button>
<div className="flex items-center gap-3 px-3 mt-4 pt-4 border-t border-slate-800/50">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold text-xs border border-slate-600">AD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Admin RH</p>
<p className="text-xs text-slate-500 truncate">admin@entreprise.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 relative">

<header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm border border-gray-200 flex items-center justify-center" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<h2 className="text-xl font-semibold tracking-tight text-gray-900" id="view-title">Tableau de bord</h2>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none" onclick="openModal('import-modal')">
<iconify-icon className="text-lg text-emerald-600" icon="solar:document-add-linear"></iconify-icon>
                    Importer
                </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-blue-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 transition-colors focus:outline-none">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
<span className="hidden sm:inline">Nouveau</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
<div className="max-w-[1600px] w-full mx-auto">

<div className="app-view active space-y-6" id="view-dashboard">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                            12 Avril 2026 - 18 Avril 2026
                        </span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Synchronisé il y a 5 min</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between h-36 group hover:border-red-200 transition-colors">
<div className="absolute top-6 right-6 p-2 rounded-xl bg-red-50 text-red-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:user-cross-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Absences Totales</h3>
<div>
<span className="text-4xl font-semibold text-gray-900 tracking-tight">52</span>
<span className="text-xs font-medium text-red-500 ml-2">↑ 12% vs mois prec.</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between h-36 group hover:border-orange-200 transition-colors">
<div className="absolute top-6 right-6 p-2 rounded-xl bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Retards</h3>
<div>
<span className="text-4xl font-semibold text-gray-900 tracking-tight">14</span>
<span className="text-xs font-medium text-emerald-500 ml-2">↓ 5% vs mois prec.</span>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between h-36">
<div className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-white">
<iconify-icon className="text-xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Heures Perdues</h3>
<div>
<span className="text-4xl font-semibold text-white tracking-tight">42h</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col min-h-[300px]">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Évolution sur 7 jours</h3>
<div className="flex-1 relative flex">
<div className="flex flex-col justify-between text-xs font-medium text-gray-400 pr-4 pb-6">
<span>15</span><span>10</span><span>5</span><span>0</span>
</div>
<div className="flex-1 border-b border-gray-100 flex items-end justify-around pb-0 relative">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
<div className="border-t border-gray-100/80 w-full border-dashed"></div>
<div className="border-t border-gray-100/80 w-full border-dashed"></div>
<div className="border-t border-gray-100/80 w-full border-dashed"></div>
<div className="w-full"></div>
</div>
<div className="w-full h-full flex justify-around items-end relative z-10 pb-1">

<div className="flex flex-col items-center gap-3 w-full group relative cursor-pointer h-full justify-end">
<div className="w-8 bg-blue-100 rounded-t-md transition-all duration-300 group-hover:bg-blue-200" style={{height: '80%'}}>
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600" style={{height: '60%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500 absolute -bottom-6">Lun</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group relative cursor-pointer h-full justify-end">
<div className="w-8 bg-blue-100 rounded-t-md transition-all duration-300 group-hover:bg-blue-200" style={{height: '40%'}}>
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600" style={{height: '80%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500 absolute -bottom-6">Mar</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group relative cursor-pointer h-full justify-end">
<div className="w-8 bg-blue-100 rounded-t-md transition-all duration-300 group-hover:bg-blue-200" style={{height: '60%'}}>
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600" style={{height: '50%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500 absolute -bottom-6">Mer</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group relative cursor-pointer h-full justify-end">
<div className="w-8 bg-blue-100 rounded-t-md transition-all duration-300 group-hover:bg-blue-200" style={{height: '20%'}}>
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600" style={{height: '30%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500 absolute -bottom-6">Jeu</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group relative cursor-pointer h-full justify-end">
<div className="w-8 bg-blue-100 rounded-t-md transition-all duration-300 group-hover:bg-blue-200" style={{height: '90%'}}>
<div className="w-full bg-blue-500 rounded-t-md transition-all duration-300 group-hover:bg-blue-600" style={{height: '40%'}}></div>
</div>
<span className="text-xs font-medium text-gray-500 absolute -bottom-6">Ven</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Top 4 - Absences</h3>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">Voir tout</button>
</div>
<div className="space-y-3 flex-1">
<div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-semibold">1</div>
<div>
<span className="text-sm font-medium text-gray-900 block">AIDOU POMAGNIA</span>
<span className="text-xs text-gray-500">Direction technique</span>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">6 jrs</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-semibold">2</div>
<div>
<span className="text-sm font-medium text-gray-900 block">GANKI IBARA</span>
<span className="text-xs text-gray-500">Logistique</span>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">4 jrs</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-semibold">3</div>
<div>
<span className="text-sm font-medium text-gray-900 block">MASSALA Charmant</span>
<span className="text-xs text-gray-500">Ventes</span>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">3 jrs</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-semibold">4</div>
<div>
<span className="text-sm font-medium text-gray-900 block">ONGOUYA C.</span>
<span className="text-xs text-gray-500">Marketing</span>
</div>
</div>
<span className="text-sm font-semibold text-gray-900">2 jrs</span>
</div>
</div>
</div>
</div>
</div>

<div className="app-view space-y-4" id="view-absences">

<div className="bg-white border border-gray-200 rounded-xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-sm">
<div className="relative flex-1 w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border-none text-sm text-gray-900 bg-transparent focus:ring-0 placeholder-gray-400" placeholder="Rechercher un employé..." type="text"/>
</div>
<div className="w-px h-6 bg-gray-200 hidden md:block"></div>
<select className="w-full md:w-auto bg-transparent border-none text-sm font-medium text-gray-600 py-2 pl-3 pr-8 focus:ring-0 cursor-pointer appearance-none">
<option>Tous les motifs</option>
<option>Maladie</option>
<option>Congé Sans Solde</option>
<option>Injustifié</option>
</select>
<select className="w-full md:w-auto bg-transparent border-none text-sm font-medium text-gray-600 py-2 pl-3 pr-8 focus:ring-0 cursor-pointer appearance-none">
<option>Ce mois-ci</option>
<option>Mois dernier</option>
<option>Cette année</option>
</select>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-200 bg-gray-50/50">
<th className="py-3 px-4 w-12 text-center"><input className="custom-checkbox" type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">Employé</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">Département</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">Date</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">Motif</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">Statut</th>
<th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 font-medium text-gray-900">AIDOU POMAGNIA</td>
<td className="py-3 px-4 text-gray-500">Direction Technique</td>
<td className="py-3 px-4 text-gray-600">12 Avr 2026</td>
<td className="py-3 px-4 text-gray-600">Maladie</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">Justifié</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"><iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 font-medium text-gray-900">GANKI IBARA Jairus</td>
<td className="py-3 px-4 text-gray-500">Logistique</td>
<td className="py-3 px-4 text-gray-600">10 Avr 2026</td>
<td className="py-3 px-4 text-gray-600">Problème personnel</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-200">Injustifié</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"><iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-3 px-4 text-center"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4 font-medium text-gray-900">MASSALA Charmant</td>
<td className="py-3 px-4 text-gray-500">Ventes</td>
<td className="py-3 px-4 text-gray-600">08 Avr 2026</td>
<td className="py-3 px-4 text-gray-600">Congé sans solde</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">En attente</span>
</td>
<td className="py-3 px-4 text-right">
<button className="text-gray-400 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100"><iconify-icon className="text-lg" icon="solar:pen-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between text-sm">
<span className="text-gray-500">Affichage de 1 à 3 sur 52 résultats</span>
<div className="flex gap-1">
<button className="px-3 py-1 border border-gray-200 rounded bg-white text-gray-400 cursor-not-allowed">Préc</button>
<button className="px-3 py-1 border border-gray-200 rounded bg-white text-gray-600 hover:bg-gray-50">Suiv</button>
</div>
</div>
</div>
</div>

<div className="app-view space-y-4" id="view-retards">

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-12 flex flex-col items-center justify-center text-center mt-8">
<div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-3xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun retard enregistré</h3>
<p className="text-sm text-gray-500 max-w-sm mb-6">Tous les employés sont arrivés à l'heure sur la période sélectionnée. Importez un nouveau rapport de pointage pour mettre à jour.</p>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 rounded-lg shadow-sm text-sm font-medium text-white hover:bg-blue-700 transition-colors" onclick="openModal('import-modal')">
<iconify-icon className="text-lg" icon="solar:document-add-linear"></iconify-icon>
                            Importer des pointages
                        </button>
</div>
</div>

<div className="app-view max-w-3xl mx-auto space-y-8" id="view-settings">

<div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200">
<h3 className="text-base font-semibold text-gray-900">Paramètres Généraux</h3>
<p className="text-xs text-gray-500 mt-1">Gérez le comportement par défaut de l'application.</p>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div>
<label className="text-sm font-medium text-gray-900 block">Notifications par email</label>
<span className="text-xs text-gray-500">Envoyer un récapitulatif hebdomadaire aux managers.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="border-t border-gray-100 pt-6 flex items-center justify-between">
<div>
<label className="text-sm font-medium text-gray-900 block">Mode de calcul des retards</label>
<span className="text-xs text-gray-500">Tolérance de minutes avant de marquer comme retard.</span>
</div>
<div className="w-32 relative">
<input className="w-full text-sm border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right pr-8" type="number" value="15"/>
<span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-500 pointer-events-none">min</span>
</div>
</div>
<div className="border-t border-gray-100 pt-6 flex items-center justify-between">
<div>
<label className="text-sm font-medium text-gray-900 block">Archive Automatique</label>
<span className="text-xs text-gray-500">Archiver les données vieilles de plus de 12 mois.</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 flex justify-end">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">Enregistrer les modifications</button>
</div>
</div>

<div className="border border-red-200 rounded-2xl overflow-hidden bg-white">
<div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h3 className="text-base font-semibold text-red-600">Réinitialiser les données</h3>
<p className="text-xs text-gray-500 mt-1">Supprimer définitivement tous les enregistrements du système. Cette action est irréversible.</p>
</div>
<button className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm whitespace-nowrap">
                                Effacer tout
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>


<div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[60] hidden flex items-center justify-center p-4 transition-opacity opacity-0" id="import-modal" style={{transition: 'opacity 0.2s ease'}}>
<div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden transform scale-95 transition-transform duration-200" id="import-modal-content">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Importer des données</h3>
<button className="text-gray-400 hover:text-gray-600 rounded-md p-1" onclick="closeModal('import-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6">

<div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50 p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-blue-400 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-blue-500">
<iconify-icon className="text-2xl" icon="solar:file-upload-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-gray-900">Cliquez ou glissez un fichier Excel</p>
<p className="text-xs text-gray-500 mt-1">Formats acceptés : .xlsx, .csv (Max 5MB)</p>
</div>
<div className="mt-5">
<label className="text-sm font-medium text-gray-900 block mb-2">Type de données</label>
<select className="w-full text-sm border border-gray-200 rounded-lg py-2.5 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none shadow-sm cursor-pointer">
<option>Rapport des Absences</option>
<option>Pointages (Retards)</option>
<option>Liste des Employés</option>
</select>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" onclick="closeModal('import-modal')">Annuler</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">Démarrer l'import</button>
</div>
</div>
</div>



    </>
  );
}
