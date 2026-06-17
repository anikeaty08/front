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
            
            // 1. Sidebar Navigation Toggle
            const navLinks = document.querySelectorAll('#sidebar-nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    
                    // Reset all links to inactive state
                    navLinks.forEach(l => {
                        l.className = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors";
                        const icon = l.querySelector('iconify-icon');
                        if (icon) icon.classList.replace('text-slate-700', 'text-slate-400');
                    });

                    // Set active state on clicked link
                    link.className = "flex items-center gap-3 px-3 py-2 transition-colors text-sm font-medium text-slate-900 bg-slate-100 rounded-lg";
                    const activeIcon = link.querySelector('iconify-icon');
                    if (activeIcon) activeIcon.classList.replace('text-slate-400', 'text-slate-700');
                });
            });

            // 2. Modal Interactions
            const modal = document.getElementById('devis-modal');
            const btnGenerer = document.getElementById('btn-generer');
            const btnAnnuler = document.getElementById('btn-annuler');
            const btnContinuer = document.getElementById('btn-continuer');

            if (btnGenerer && modal) {
                btnGenerer.addEventListener('click', () => modal.classList.remove('hidden'));
            }
            if (btnAnnuler) {
                btnAnnuler.addEventListener('click', () => modal.classList.add('hidden'));
            }
            if (btnContinuer) {
                btnContinuer.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    alert("Ouverture du document PDF : Devis_PREV_REQ-2023-089.pdf");
                });
            }

            // 3. Simple Button Feedbacks
            document.getElementById('btn-modifier')?.addEventListener('click', () => {
                alert("Mode édition activé.");
            });

            document.getElementById('btn-suivi-trajet')?.addEventListener('click', () => {
                alert("Ouverture de la carte de géolocalisation en temps réel...");
            });

            document.getElementById('btn-nouvelle-demande')?.addEventListener('click', () => {
                alert("Création d'une nouvelle demande...");
            });

            // 4. File Upload Simulation
            const btnAjouterPhoto = document.getElementById('btn-ajouter-photo');
            const fileInput = document.getElementById('file-upload');
            if (btnAjouterPhoto && fileInput) {
                btnAjouterPhoto.addEventListener('click', () => fileInput.click());
                fileInput.addEventListener('change', () => {
                    if (fileInput.files.length > 0) {
                        alert("Nouvelle photo téléchargée : " + fileInput.files[0].name);
                    }
                });
            }

            // 5. Toast Notification Close
            const toast = document.getElementById('toast-notification');
            const btnCloseToast = document.getElementById('btn-close-toast');
            if (btnCloseToast && toast) {
                btnCloseToast.addEventListener('click', () => {
                    toast.classList.add('opacity-0');
                    setTimeout(() => toast.style.display = 'none', 300);
                });
            }

            // Prevent default jump for any remaining dead links
            document.querySelectorAll('a[href="#"]').forEach(link => {
                if(!link.closest('#sidebar-nav')) {
                    link.addEventListener('click', e => e.preventDefault());
                }
            });
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
      

<aside className="hidden lg:flex w-64 flex-col border-r border-slate-200 bg-white z-10">

<div className="h-16 flex items-center px-6 border-b border-slate-200 gap-3">
<div className="w-8 h-8 bg-slate-800 text-white flex items-center justify-center rounded-md flex-shrink-0">
<iconify-icon className="w-5 h-5" icon="solar:city-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight leading-tight text-slate-800">LENA</span>
<span className="text-xs font-medium tracking-widest text-slate-500 leading-none mt-0.5">CONSTRUCTION</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3 space-y-1" id="sidebar-nav">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:widget-linear"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 transition-colors text-sm font-medium text-slate-900 bg-slate-100 rounded-lg" href="#">
<iconify-icon className="w-4 h-4 text-slate-700" icon="solar:clipboard-list-linear"></iconify-icon>
                Demandes
                <span className="ml-auto bg-slate-200 text-slate-700 py-0.5 px-2 rounded-full text-xs">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:calendar-linear"></iconify-icon>
                Planning
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                Prestataires
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:bill-list-linear"></iconify-icon>
                Devis &amp; Factures
            </a>
</nav>
<div className="p-4 border-t border-slate-200">
<button className="flex items-center gap-3 w-full text-left hover:bg-slate-50 p-2 rounded-lg transition-colors -mx-2">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<img alt="Avatar" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=32&amp;h=32&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Marc Dubois</p>
<p className="text-xs text-slate-500 truncate">marc.d@lenaconstruction.fr</p>
</div>
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 z-10 sticky top-0">
<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden text-slate-500 hover:text-slate-900">
<iconify-icon className="w-5 h-5" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<nav className="hidden sm:flex items-center text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Demandes</a>
<iconify-icon className="w-4 h-4 mx-2 text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900">REQ-2023-089</span>
</nav>
</div>
<div className="flex items-center gap-3 sm:gap-4">

<div className="hidden md:flex relative group">
<iconify-icon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors" icon="solar:magnifier-linear"></iconify-icon>
<input className="w-64 pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all placeholder:text-slate-400" placeholder="Rechercher..." type="text"/>
</div>
<button className="relative text-slate-500 hover:text-slate-900 transition-colors p-1.5 rounded-lg hover:bg-slate-50">
<iconify-icon className="w-5 h-5" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 border-2 border-white"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" id="btn-nouvelle-demande">
<iconify-icon className="w-4 h-4" icon="solar:add-circle-linear"></iconify-icon>
                    Nouvelle demande
                </button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">

<div className="max-w-5xl mx-auto mb-8">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="">
<div className="flex items-center gap-3 mb-2">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Fuite d'eau importante - Cuisine</h1>
</div>
<div className="flex flex-wrap items-center gap-2 text-sm">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                Intervention en cours
                            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200 font-medium">
<iconify-icon className="w-3.5 h-3.5" icon="solar:danger-triangle-linear"></iconify-icon>
                                Urgence Haute
                            </span>
<span className="text-slate-500 flex items-center gap-1.5 ml-2">
<iconify-icon className="w-3.5 h-3.5" icon="solar:clock-circle-linear"></iconify-icon>
                                Créée hier à 08:30
                            </span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="btn-modifier">
                            Modifier
                        </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm" id="btn-generer">
<iconify-icon className="w-4 h-4" icon="solar:document-text-linear"></iconify-icon>
                            Voir Facture
                        </button>
<button className="p-2 text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon className="w-5 h-5" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="lg:col-span-2 space-y-6">

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:user-linear"></iconify-icon>
                                Informations Client
                            </h2>
</div>
<div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Nom complet</label>
<div className="text-sm text-slate-900 font-medium">Mme. Sophie Laurent</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
<div className="text-sm text-slate-900">s.laurent@exemple.fr</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Téléphone</label>
<div className="text-sm text-slate-900 flex items-center gap-2">
                                    06 12 34 56 78
                                    <button className="text-slate-400 hover:text-blue-600 transition-colors"><iconify-icon className="w-3.5 h-3.5" icon="solar:phone-linear"></iconify-icon></button>
</div>
</div>
<div className="sm:col-span-2 pt-2">
<label className="block text-xs font-medium text-slate-500 mb-1">Adresse d'intervention</label>
<div className="text-sm text-slate-900 flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
<iconify-icon className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Résidence Les Cèdres, Bâtiment A, Apt 42<br/>15 Rue des Lilas<br/>75020 Paris</span>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
                                Détails du problème
                            </h2>
<span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                                Plomberie
                            </span>
</div>
<div className="p-5 space-y-5">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Description</label>
<p className="text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    Forte fuite d'eau constatée sous l'évier de la cuisine depuis ce matin. L'eau s'écoule rapidement, j'ai dû couper l'arrivée d'eau principale de l'appartement. Le meuble sous évier commence à être sérieusement endommagé.
                                </p>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Photos jointes (2)</label>
<div className="flex gap-3 overflow-x-auto pb-2">
<div className="relative w-32 h-32 rounded-lg border border-slate-200 bg-slate-100 overflow-hidden group cursor-pointer flex-shrink-0">
<img alt="Tuyauterie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=300"/>
</div>
<div className="relative w-32 h-32 rounded-lg border border-slate-200 bg-slate-100 overflow-hidden group cursor-pointer flex-shrink-0">
<img alt="Dégât des eaux" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=300"/>
</div>
<button className="w-32 h-32 rounded-lg border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors flex-shrink-0" id="btn-ajouter-photo">
<iconify-icon className="w-5 h-5 mb-1" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-xs font-medium">Ajouter</span>
</button>
<input accept="image/*" className="hidden" id="file-upload" type="file"/>
</div>
</div>
</div>
</section>
</div>

<div className="space-y-6">

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100">
<h2 className="text-base font-semibold text-slate-900">Suivi d'avancement</h2>
</div>
<div className="p-5">
<div className="relative border-l-2 border-emerald-500 ml-3 space-y-6 pb-6">
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center">
<iconify-icon className="w-2.5 h-2.5 text-white" icon="solar:check-read-linear"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Demande reçue</span>
<span className="text-xs text-slate-500">Hier, 08:30</span>
</div>
</div>
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center">
<iconify-icon className="w-2.5 h-2.5 text-white" icon="solar:check-read-linear"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Qualification</span>
<span className="text-xs text-slate-500">Hier, 09:15 - Par Marc D.</span>
</div>
</div>
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center">
<iconify-icon className="w-2.5 h-2.5 text-white" icon="solar:check-read-linear"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Devis prévisionnel</span>
<span className="text-xs text-slate-500">Hier, 10:30 - Envoyé au client</span>
</div>
</div>
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center">
<iconify-icon className="w-2.5 h-2.5 text-white" icon="solar:check-read-linear"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Validation client</span>
<span className="text-xs text-slate-500">Hier, 14:05 - Signé électroniquement</span>
</div>
</div>
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center">
<iconify-icon className="w-2.5 h-2.5 text-white" icon="solar:check-read-linear"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Affectation prestataire</span>
<span className="text-xs text-slate-500">Aujourd'hui, 08:15 - Plomberie Express</span>
</div>
</div>
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-50 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
</span>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Intervention</span>
<span className="text-xs text-blue-600 font-medium mt-0.5">En cours - Arrivée prévue 14h30</span>
</div>

<div className="absolute left-[-2px] top-5 bottom-[-24px] w-0.5 bg-slate-100"></div>
</div>
<div className="relative pl-6 mt-6">
<span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-slate-200 ring-4 ring-white"></span>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-400">Clôture &amp; Facturation</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900">Intervenant assigné</h2>
<span className="inline-flex items-center px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                                Confirmé
                            </span>
</div>
<div className="p-5">
<div className="flex items-center gap-4 mb-5">
<img alt="Laurent Martin" className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<h3 className="text-sm font-semibold text-slate-900">Laurent Martin</h3>
<p className="text-xs text-slate-500">Plomberie Express 75</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-5">
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Téléphone</div>
<div className="text-sm font-medium text-slate-900">06 98 76 54 32</div>
</div>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Évaluation</div>
<div className="text-sm font-medium text-slate-900 flex items-center gap-1">
<iconify-icon className="text-amber-400 w-4 h-4" icon="solar:star-bold"></iconify-icon>
                                        4.8 <span className="text-slate-400 font-normal">(124)</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="btn-suivi-trajet">
<iconify-icon className="w-4 h-4" icon="solar:routing-linear"></iconify-icon>
                                Suivre le trajet
                            </button>
</div>
</section>
</div>
</div>
</main>
</div>

<div className="fixed top-4 right-4 z-50 animate-fade-in-down transition-opacity duration-300 hidden" id="toast-notification">
<div className="bg-white border border-emerald-200 rounded-lg shadow-lg p-4 flex items-start gap-3 w-80">
<div className="shrink-0 text-emerald-500 mt-0.5">
<iconify-icon className="w-5 h-5" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900">Demande qualifiée</h3>
<p className="text-xs text-slate-500 mt-1">Le statut a été mis à jour avec succès.</p>
</div>
<button className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors" id="btn-close-toast">
<iconify-icon className="w-4 h-4" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity" id="devis-modal">
<div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
<div className="p-6">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="w-6 h-6" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Consulter la facture ?</h3>
<p className="text-sm text-slate-500">La facture n'est pas encore éditée car l'intervention est toujours en cours. Voulez-vous voir le devis prévisionnel signé ?</p>
</div>
<div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" id="btn-annuler">Annuler</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm" id="btn-continuer">Voir le devis</button>
</div>
</div>
</div>



    </>
  );
}
