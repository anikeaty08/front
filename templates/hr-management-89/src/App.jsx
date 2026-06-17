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



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Sidebar Tabs Navigation & SPA Logic
            const navItems = document.querySelectorAll('.nav-item');
            const pageTitle = document.getElementById('page-title');
            const appViews = document.querySelectorAll('.app-view');

            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Reset styling for all nav items
                    navItems.forEach(nav => {
                        nav.dataset.active = "false";
                        nav.className = "nav-item flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-black rounded-md transition-colors" + (nav.classList.contains('justify-between') ? ' justify-between' : '') + (nav.classList.contains('mb-2') ? ' mb-2' : '');
                    });
                    
                    // Set active styling for clicked item
                    e.currentTarget.dataset.active = "true";
                    let newClass = "nav-item flex items-center gap-3 px-3 py-2 bg-gray-100/80 text-black rounded-md font-medium transition-colors" + (e.currentTarget.classList.contains('justify-between') ? ' justify-between' : '') + (e.currentTarget.classList.contains('mb-2') ? ' mb-2' : '');
                    e.currentTarget.className = newClass;
                    
                    // Change Header Title
                    let text = e.currentTarget.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
                    text = text.replace(/[0-9]+$/, '').trim(); 
                    pageTitle.innerText = text;

                    // Switch View Content
                    const targetId = e.currentTarget.dataset.target;
                    if(targetId) {
                        appViews.forEach(view => view.classList.add('hidden'));
                        const activeView = document.getElementById(targetId);
                        if(activeView) {
                            activeView.classList.remove('hidden');
                        }
                    }
                });
            });

            // 2. Filiale Dropdown
            const filialeBtn = document.getElementById('filiale-btn');
            const filialeMenu = document.getElementById('filiale-menu');
            const filialeIcon = document.getElementById('filiale-icon');
            const filialeText = document.getElementById('filiale-text');
            const filialeOptions = document.querySelectorAll('.filiale-option');

            filialeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                filialeMenu.classList.toggle('hidden');
                filialeIcon.style.transform = filialeMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });

            filialeOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    filialeOptions.forEach(opt => {
                        opt.querySelector('span:first-child').className = "w-1.5 h-1.5 rounded-full bg-gray-300";
                        opt.classList.add('text-gray-600');
                    });
                    
                    e.currentTarget.querySelector('span:first-child').className = "w-1.5 h-1.5 rounded-full bg-green-500";
                    e.currentTarget.classList.remove('text-gray-600');
                    
                    filialeText.innerText = e.currentTarget.querySelector('span:last-child').innerText;
                });
            });

            // 3. Notifications Dropdown
            const notifBtn = document.getElementById('notif-btn');
            const notifMenu = document.getElementById('notif-menu');

            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                notifMenu.classList.toggle('hidden');
            });

            document.addEventListener('click', () => {
                filialeMenu.classList.add('hidden');
                filialeIcon.style.transform = 'rotate(0deg)';
                notifMenu.classList.add('hidden');
            });

            // 4. Import Modal Logic
            const modal = document.getElementById('import-modal');
            const modalContent = document.getElementById('import-modal-content');
            const btnOpenModal = document.getElementById('open-import');
            const btnCloseModal = document.getElementById('close-modal');
            const btnCancelModal = document.getElementById('cancel-modal');
            const btnConfirmModal = document.getElementById('confirm-modal');

            function openModal() {
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalContent.classList.remove('scale-95');
                    modalContent.classList.add('scale-100');
                }, 10);
            }

            function closeModal() {
                modal.classList.add('opacity-0');
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 200);
            }

            btnOpenModal.addEventListener('click', openModal);
            btnCloseModal.addEventListener('click', closeModal);
            btnCancelModal.addEventListener('click', closeModal);
            btnConfirmModal.addEventListener('click', () => {
                triggerAction('Fichier importé avec succès');
                closeModal();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            setTimeout(() => {
                document.getElementById('progress-presence').style.width = '94.2%';
            }, 500);

        });

        // 5. Global Action/Toast system
        function triggerAction(message) {
            const container = document.getElementById('toast-container');
            
            const toast = document.createElement('div');
            toast.className = "bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300";
            toast.innerHTML = `
                <iconify-icon icon="solar:check-circle-linear" class="text-green-400 text-lg"></iconify-icon>
                ${message}
            `;
            
            container.appendChild(toast);
            
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            });

            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
            
            if(event) {
                event.stopPropagation();
                event.preventDefault();
            }
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
      
<div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2" id="toast-container"></div>
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm opacity-0 transition-opacity duration-200" id="import-modal">
<div className="bg-white rounded-xl shadow-xl border border-[#EAEAEA] w-full max-w-md transform scale-95 transition-transform duration-200" id="import-modal-content">
<div className="p-5 border-b border-[#EAEAEA] flex justify-between items-center">
<h3 className="font-semibold tracking-tight text-base">Importer des données</h3>
<button className="text-gray-400 hover:text-black transition-colors" id="close-modal">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-5 space-y-4">
<div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
<iconify-icon className="text-3xl text-gray-400 mb-2" icon="solar:file-download-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-medium text-sm">Glissez-déposez votre fichier ici</p>
<p className="text-xs text-gray-500 mt-1">CSV, Excel ou XML (Max 10MB)</p>
</div>
</div>
<div className="p-4 bg-gray-50/50 border-t border-[#EAEAEA] flex justify-end gap-2 rounded-b-xl">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors" id="cancel-modal">Annuler</button>
<button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors flex items-center gap-2" id="confirm-modal">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Importer
                </button>
</div>
</div>
</div>
<aside className="w-64 bg-white border-r border-[#EAEAEA] flex-col hidden md:flex shrink-0">
<div className="p-4 border-b border-[#EAEAEA]">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center font-semibold tracking-tighter">
                    RH
                </div>
<span className="font-semibold tracking-tight text-base">NexusHR</span>
</div>
<div className="relative w-full">
<button className="w-full flex items-center justify-between px-3 py-2 bg-[#F7F7F8] border border-[#EAEAEA] rounded-md hover:bg-gray-100 transition-colors" id="filiale-btn">
<div className="flex items-center gap-2 truncate">
<iconify-icon className="text-gray-500" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate font-medium" id="filiale-text">Filiale Paris (FR)</span>
</div>
<iconify-icon className="text-gray-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="filiale-icon" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden absolute top-full left-0 w-full mt-1 bg-white border border-[#EAEAEA] rounded-lg shadow-lg z-50 py-1 overflow-hidden" id="filiale-menu">
<button className="filiale-option w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="font-medium">Filiale Paris (FR)</span>
</button>
<button className="filiale-option w-full flex items-center gap-2 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<span>Filiale Lyon (FR)</span>
</button>
<button className="filiale-option w-full flex items-center gap-2 px-3 py-2 text-left text-gray-600 hover:bg-gray-50 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
<span>Filiale Madrid (ES)</span>
</button>
</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto p-3 space-y-6" id="main-nav">
<div>
<p className="px-3 text-xs font-medium text-gray-400 mb-2 uppercase tracking-widest">Vue d'ensemble</p>
<div className="space-y-1">
<a className="nav-item flex items-center gap-3 px-3 py-2 bg-gray-100/80 text-black rounded-md font-medium transition-colors" data-active="true" data-target="view-dashboard" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                        Dashboard RH
                    </a>
</div>
</div>
<div>
<p className="px-3 text-xs font-medium text-gray-400 mb-2 uppercase tracking-widest">Gestion</p>
<div className="space-y-1 text-gray-600">
<a className="nav-item flex items-center gap-3 px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-employes" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        Employés
                    </a>
<a className="nav-item flex items-center justify-between px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-presences" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Présences &amp; Shifts
                        </div>
</a>
<a className="nav-item flex items-center justify-between px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-absences" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                            Absences &amp; Congés
                        </div>
<span className="flex items-center justify-center w-5 h-5 bg-red-100 text-red-600 rounded-full text-xs font-medium">3</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-contrats" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                        Contrats &amp; Docs
                    </a>
</div>
</div>
<div>
<p className="px-3 text-xs font-medium text-gray-400 mb-2 uppercase tracking-widest">Évaluation</p>
<div className="space-y-1 text-gray-600">
<a className="nav-item flex items-center gap-3 px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-performance" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
                        Performance
                    </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 hover:bg-gray-50 hover:text-black rounded-md transition-colors" data-active="false" data-target="view-disciplinaire" href="#">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
                        Disciplinaire
                    </a>
</div>
</div>
</nav>
<div className="p-4 border-t border-[#EAEAEA]">
<a className="nav-item flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-black rounded-md transition-colors mb-2" data-active="false" data-target="view-admin" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Administration
            </a>
<div className="flex items-center gap-3 px-3 py-2 mt-1">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-medium">JD</div>
<div className="flex-1 min-w-0">
<p className="truncate font-medium">Jean Dupont</p>
<p className="truncate text-xs text-gray-500">Admin Global</p>
</div>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-[#FAFAFA]">
<header className="h-16 bg-white border-b border-[#EAEAEA] flex items-center justify-between px-6 shrink-0 sticky top-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold tracking-tight" id="page-title">Dashboard RH</h1>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 border border-[#EAEAEA] rounded-md text-xs font-medium text-gray-600">
<span>FR</span>
<div className="w-px h-3 bg-gray-300 mx-1"></div>
<span className="text-indigo-600">Vue Admin</span>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" onclick="window.print()" title="Imprimer le rapport">
<iconify-icon className="text-xl" icon="solar:printer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="relative">
<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative" id="notif-btn">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-72 bg-white border border-[#EAEAEA] rounded-xl shadow-lg z-50 overflow-hidden" id="notif-menu">
<div className="p-3 border-b border-[#EAEAEA] flex justify-between items-center bg-gray-50">
<span className="font-medium text-xs">Notifications (1)</span>
<button className="text-xs text-gray-500 hover:text-black">Tout marquer lu</button>
</div>
<div className="p-3 hover:bg-gray-50 cursor-pointer border-b border-[#EAEAEA]">
<p className="font-medium text-xs">Alerte Système</p>
<p className="text-xs text-gray-500 mt-1">Date limite des évaluations dans 2 jours.</p>
</div>
</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors ml-2" id="open-import">
<iconify-icon icon="solar:import-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Import Données</span>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 relative" id="main-scroll-area">

<div className="app-view max-w-7xl mx-auto space-y-6" id="view-dashboard">
<div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg text-blue-800" id="flash-message">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex-1">
<p className="font-medium text-sm">Rappel : Campagne d'évaluation</p>
<p className="text-xs text-blue-600/80 mt-0.5">La date limite pour la soumission des fiches d'évaluation de la filiale Paris est fixée au vendredi 15.</p>
</div>
<button className="text-blue-400 hover:text-blue-800" onclick="document.getElementById('flash-message').style.display='none'">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-5 rounded-xl border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="text-gray-500 font-medium">Employés Actifs</span>
<div className="p-1.5 bg-gray-50 rounded-md text-gray-600">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-2xl font-semibold tracking-tight">1,248</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                2.4%
                            </span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="text-gray-500 font-medium">Taux de Présence</span>
<div className="p-1.5 bg-green-50 rounded-md text-green-600">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-2xl font-semibold tracking-tight">94.2%</span>
<span className="text-xs text-gray-400">Obj: 95%</span>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-green-500 h-full rounded-full transition-all duration-1000" id="progress-presence" style={{width: '0%'}}></div>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="text-gray-500 font-medium">Taux d'Absentéisme</span>
<div className="p-1.5 bg-red-50 rounded-md text-red-600">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-2xl font-semibold tracking-tight text-red-600">4.1%</span>
<span className="text-xs font-medium text-red-600 flex items-center bg-red-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                0.5%
                            </span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-[#EAEAEA] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<span className="text-gray-500 font-medium">Turnover Global</span>
<div className="p-1.5 bg-orange-50 rounded-md text-orange-600">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-baseline gap-2 mt-auto">
<span className="text-2xl font-semibold tracking-tight">8.5%</span>
<span className="text-xs text-gray-400">Sur 12 mois glissants</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-5">
<div className="flex items-center justify-between mb-6">
<h2 className="font-semibold tracking-tight">Évolution Heures Théoriques vs Réalisées</h2>
<div className="flex items-center gap-2 text-xs">
<span className="flex items-center gap-1 text-gray-500"><div className="w-2 h-2 rounded-full bg-gray-200"></div> Théorique</span>
<span className="flex items-center gap-1 text-gray-500"><div className="w-2 h-2 rounded-full bg-black"></div> Réalisé</span>
</div>
</div>
<div className="h-64 relative flex items-end justify-between gap-2">
<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400 pr-2 pb-2">
<span>10k</span><span>7.5k</span><span>5k</span><span>2.5k</span><span>0</span>
</div>
<div className="absolute left-8 right-0 top-0 bottom-6 flex flex-col justify-between z-0">
<div className="w-full border-t border-gray-100"></div>
<div className="w-full border-t border-gray-100"></div>
<div className="w-full border-t border-gray-100"></div>
<div className="w-full border-t border-gray-100"></div>
<div className="w-full border-t border-gray-100"></div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 ml-8 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[80%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[75%] hover:bg-gray-800 transition-colors"></div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[85%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[82%] hover:bg-gray-800 transition-colors"></div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[90%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[85%] hover:bg-gray-800 transition-colors"></div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[88%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[80%] relative hover:bg-gray-800 transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Baisse constatée</div>
</div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[95%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[92%] hover:bg-gray-800 transition-colors"></div>
</div>
<div className="flex-1 flex items-end justify-center gap-1 z-10 group">
<div className="w-8 bg-gray-100 rounded-t-sm h-[92%] hover:bg-gray-200 transition-colors"></div>
<div className="w-8 bg-black rounded-t-sm h-[90%] hover:bg-gray-800 transition-colors"></div>
</div>
<div className="absolute left-8 right-0 bottom-0 flex justify-around text-xs text-gray-400 pt-2 border-t border-[#EAEAEA]">
<span className="flex-1 text-center">Jan</span>
<span className="flex-1 text-center">Fév</span>
<span className="flex-1 text-center">Mar</span>
<span className="flex-1 text-center">Avr</span>
<span className="flex-1 text-center">Mai</span>
<span className="flex-1 text-center">Juin</span>
</div>
</div>
</div>
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-5 flex flex-col">
<h2 className="font-semibold tracking-tight mb-6">Mix Contrat &amp; CRCD</h2>
<div className="flex-1 flex flex-col items-center justify-center">
<div className="relative w-40 h-40 hover:scale-105 transition-transform duration-300">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#F3F4F6" strokeWidth="15"></circle>
<circle className="hover:stroke-gray-800 transition-colors cursor-pointer" cx="50" cy="50" fill="transparent" r="40" stroke="#111827" stroke-dasharray="251.2" stroke-dashoffset="87.92" strokeWidth="15"></circle>
<circle className="hover:stroke-gray-500 transition-colors cursor-pointer" cx="50" cy="50" fill="transparent" r="40" stroke="#9CA3AF" stroke-dasharray="251.2" stroke-dashoffset="200.96" strokeWidth="15" transform="rotate(234 50 50)"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-2xl font-semibold tracking-tight">1.2k</span>
<span className="text-xs text-gray-500">Total</span>
</div>
</div>
<div className="w-full mt-6 space-y-3">
<div className="flex items-center justify-between text-sm group cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-black"></div>
<span className="text-gray-600 group-hover:text-black">Agents (CRCD)</span>
</div>
<span className="font-medium">65%</span>
</div>
<div className="flex items-center justify-between text-sm group cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-gray-400"></div>
<span className="text-gray-600 group-hover:text-black">CDI / CDD Standard</span>
</div>
<span className="font-medium">20%</span>
</div>
<div className="flex items-center justify-between text-sm group cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded bg-gray-100 border border-gray-200"></div>
<span className="text-gray-600 group-hover:text-black">Stagiaires &amp; Autres</span>
</div>
<span className="font-medium">15%</span>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-[#EAEAEA] flex justify-between items-center bg-gray-50/50">
<h2 className="font-semibold tracking-tight">Alertes &amp; Workflows</h2>
<span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">3 actions</span>
</div>
<div className="p-0 overflow-y-auto max-h-72">
<div className="p-4 border-b border-[#EAEAEA] hover:bg-gray-50 transition-colors flex gap-4 group cursor-pointer" onclick="triggerAction('Notification envoyée aux managers')">
<div className="mt-0.5 p-2 bg-red-50 text-red-600 rounded-lg shrink-0 group-hover:bg-red-100 transition-colors">
<iconify-icon icon="solar:document-medicine-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-medium text-gray-900 truncate">12 Contrats à échéance (&lt;60J)</p>
<span className="text-xs text-gray-500 whitespace-nowrap ml-2">Aujourd'hui</span>
</div>
<p className="text-xs text-gray-500 truncate mb-2">Fin de CDD / Période d'essai approchante.</p>
<button className="action-btn text-xs font-medium text-black hover:underline flex items-center gap-1">
                                        Générer notification <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 border-b border-[#EAEAEA] hover:bg-gray-50 transition-colors flex gap-4 group cursor-pointer" onclick="triggerAction('Dossier de congés ouvert')">
<div className="mt-0.5 p-2 bg-orange-50 text-orange-600 rounded-lg shrink-0 group-hover:bg-orange-100 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-medium text-gray-900 truncate">3 Demandes de congés en attente</p>
<span className="text-xs text-gray-500 whitespace-nowrap ml-2">Il y a 2h</span>
</div>
<p className="text-xs text-gray-500 truncate mb-2">Validation hiérarchique requise (Manager Opérations).</p>
<button className="action-btn text-xs font-medium text-black hover:underline flex items-center gap-1">
                                        Examiner <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors flex gap-4 group cursor-pointer" onclick="triggerAction('Documents de sortie générés')">
<div className="mt-0.5 p-2 bg-gray-100 text-gray-600 rounded-lg shrink-0 group-hover:bg-gray-200 transition-colors">
<iconify-icon icon="solar:user-cross-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<p className="font-medium text-gray-900 truncate">Offboarding : A. Martin</p>
<span className="text-xs text-gray-500 whitespace-nowrap ml-2">Hier</span>
</div>
<p className="text-xs text-gray-500 truncate mb-2">Générer solde de tout compte et certificat.</p>
<button className="action-btn text-xs font-medium text-black hover:underline flex items-center gap-1">
                                        Créer documents <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-[#EAEAEA] flex justify-between items-center bg-gray-50/50">
<h2 className="font-semibold tracking-tight">Historique Système &amp; Imports</h2>
<button className="text-xs font-medium text-gray-500 hover:text-black transition-colors" onclick="triggerAction('Redirection vers historique complet')">Voir tout</button>
</div>
<div className="p-5">
<div className="relative border-l border-gray-200 ml-3 space-y-6 pb-2">
<div className="relative pl-6 group cursor-default">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-white group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div>
<p className="font-medium text-gray-900 text-sm">Import Badgeuse réussi</p>
<p className="text-xs text-gray-500 mt-0.5">Fichier: <span className="font-medium text-gray-700">presences_S42.xlsx</span></p>
<p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:user-linear"></iconify-icon> Importé par Système
                                            </p>
</div>
<span className="text-xs text-gray-400">09:41</span>
</div>
</div>
<div className="relative pl-6 group cursor-default">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div>
<p className="font-medium text-gray-900 text-sm">Sanction disciplinaire ajoutée</p>
<p className="text-xs text-gray-500 mt-0.5">Avertissement généré pour Emp_ID: 1042.</p>
<p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:user-linear"></iconify-icon> Par: J. Dupont (Admin)
                                            </p>
</div>
<span className="text-xs text-gray-400">Hier</span>
</div>
</div>
<div className="relative pl-6 group cursor-default">
<div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div>
<p className="font-medium text-gray-900 text-sm">Nouvelle intégration (Onboarding)</p>
<p className="text-xs text-gray-500 mt-0.5">Identifiants automatiques envoyés par email.</p>
<p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:user-linear"></iconify-icon> Module: Employés
                                            </p>
</div>
<span className="text-xs text-gray-400">Mar 12</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-employes">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="relative w-full sm:w-96">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 bg-white border border-[#EAEAEA] rounded-md text-sm focus:outline-none focus:border-gray-400 transition-colors" placeholder="Rechercher un employé..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Ajouter un employé
                    </button>
</div>
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-[#EAEAEA] text-xs text-gray-500 uppercase tracking-widest">
<th className="px-5 py-3 font-medium w-10"><input className="custom-checkbox" type="checkbox"/></th>
<th className="px-5 py-3 font-medium">Employé</th>
<th className="px-5 py-3 font-medium">Rôle &amp; Département</th>
<th className="px-5 py-3 font-medium">Statut</th>
<th className="px-5 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-[#EAEAEA]">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-medium">AM</div>
<div>
<p className="font-medium text-gray-900">Alice Martin</p>
<p className="text-xs text-gray-500">ID: EMP-001</p>
</div>
</div>
</td>
<td className="px-5 py-4">
<p className="font-medium text-gray-900">Manager Opérations</p>
<p className="text-xs text-gray-500">Logistique</p>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">Actif</span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-gray-400 hover:text-black transition-colors" onclick="triggerAction('Édition employé')">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-5 py-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-medium">TB</div>
<div>
<p className="font-medium text-gray-900">Thomas Bernard</p>
<p className="text-xs text-gray-500">ID: EMP-002</p>
</div>
</div>
</td>
<td className="px-5 py-4">
<p className="font-medium text-gray-900">Agent de Tri</p>
<p className="text-xs text-gray-500">Exploitation</p>
</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">Actif</span>
</td>
<td className="px-5 py-4 text-right">
<button className="text-gray-400 hover:text-black transition-colors" onclick="triggerAction('Édition employé')">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-presences">
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-5">
<h2 className="font-semibold tracking-tight mb-4">Planning du Jour</h2>
<div className="flex items-center gap-4 mb-6 text-sm">
<span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-full"></div> Présent</span>
<span className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-400 rounded-full"></div> Retard</span>
<span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-full"></div> Absent</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
<div className="flex items-center gap-3">
<div className="w-2 h-10 bg-green-500 rounded-full"></div>
<div>
<p className="font-medium">Équipe Matin (06:00 - 14:00)</p>
<p className="text-xs text-gray-500">45/45 employés pointés</p>
</div>
</div>
<span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">Terminé</span>
</div>
<div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
<div className="flex items-center gap-3">
<div className="w-2 h-10 bg-yellow-400 rounded-full"></div>
<div>
<p className="font-medium">Équipe Après-midi (14:00 - 22:00)</p>
<p className="text-xs text-gray-500">42/45 employés pointés (3 retards signalés)</p>
</div>
</div>
<span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">En cours</span>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-absences">
<h2 className="font-semibold tracking-tight text-lg mb-2">Demandes en attente</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-white border border-[#EAEAEA] rounded-xl p-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium text-xs">SL</div>
<div>
<p className="font-medium">Sophie Laurent</p>
<p className="text-xs text-gray-500">Congés payés</p>
</div>
</div>
<span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-md font-medium">En attente</span>
</div>
<p className="text-sm mb-1"><span className="text-gray-500">Du:</span> 12/08/2024</p>
<p className="text-sm mb-4"><span className="text-gray-500">Au:</span> 26/08/2024</p>
<div className="flex gap-2">
<button className="flex-1 py-1.5 border border-[#EAEAEA] rounded-md text-sm font-medium hover:bg-gray-50 transition-colors" onclick="triggerAction('Demande refusée')">Refuser</button>
<button className="flex-1 py-1.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors" onclick="triggerAction('Demande approuvée')">Approuver</button>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-contrats">
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden">
<div className="px-5 py-4 border-b border-[#EAEAEA] bg-gray-50/50">
<h2 className="font-semibold tracking-tight">Documents Récents</h2>
</div>
<div className="divide-y divide-[#EAEAEA]">
<div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-gray-400" icon="solar:document-text-linear"></iconify-icon>
<div>
<p className="font-medium text-sm">Contrat_CDI_Dubois_J.pdf</p>
<p className="text-xs text-gray-500">Généré le 10/10/2023</p>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-black transition-colors" onclick="triggerAction('Téléchargement démarré')">
<iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-performance">
<div className="bg-white p-8 border border-[#EAEAEA] rounded-xl text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<iconify-icon className="text-4xl text-gray-300 mb-3" icon="solar:chart-square-linear"></iconify-icon>
<h2 className="font-semibold tracking-tight mb-2">Campagne d'évaluation en cours</h2>
<p className="text-gray-500 text-sm mb-4">La campagne de fin d'année est ouverte jusqu'au 15 décembre.</p>
<button className="px-4 py-2 bg-black text-white rounded-md font-medium text-sm hover:bg-gray-800 transition-colors" onclick="triggerAction('Accès module performance')">Voir les statistiques détaillées</button>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-disciplinaire">
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden">
<div className="px-5 py-4 border-b border-[#EAEAEA] flex justify-between items-center bg-gray-50/50">
<h2 className="font-semibold tracking-tight">Dossiers Récents</h2>
<button className="text-xs font-medium flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Nouveau dossier
                        </button>
</div>
<div className="p-8 text-center text-gray-500 text-sm">
<p>Aucun dossier disciplinaire actif pour cette filiale.</p>
</div>
</div>
</div>

<div className="app-view hidden max-w-7xl mx-auto space-y-6" id="view-admin">
<h2 className="font-semibold tracking-tight text-lg mb-4">Paramètres de la filiale</h2>
<div className="bg-white border border-[#EAEAEA] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] p-6 space-y-6">
<div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
<div>
<p className="font-medium text-sm">Notifications automatiques</p>
<p className="text-xs text-gray-500 mt-1">Envoi d'e-mails de rappel pour les fins de contrats</p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
<div>
<p className="font-medium text-sm">Validation à double niveau</p>
<p className="text-xs text-gray-500 mt-1">Nécessite RH + Manager pour les congés</p>
</div>
<input checked="" className="custom-toggle" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="font-medium text-sm">Mode de saisie restreint</p>
<p className="text-xs text-gray-500 mt-1">Verrouille les pointages manuels après 48h</p>
</div>
<input className="custom-toggle" type="checkbox"/>
</div>
</div>
</div>
<footer className="mt-8 pt-4 border-t border-[#EAEAEA] text-center text-xs text-gray-400 absolute bottom-4 left-0 right-0">
<p>NexusHR - Core System © 2023. Tous droits réservés.</p>
</footer>
</div>
</main>


    </>
  );
}
