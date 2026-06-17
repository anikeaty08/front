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



      // Initialize Lucide Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Tab Switching Logic
      function switchTab(tabId) {
        // Hide all content sections
        document.querySelectorAll('.tab-content').forEach(el => {
          el.classList.remove('block');
          el.classList.add('hidden');
        });

        // Reset all buttons styling
        document.querySelectorAll('.tab-btn').forEach(el => {
          el.classList.remove('border-slate-900', 'text-slate-900');
          el.classList.add('border-transparent', 'text-gray-500');
        });

        // Show target content
        const targetContent = document.getElementById(`content-${tabId}`);
        if(targetContent) {
            targetContent.classList.remove('hidden');
            targetContent.classList.add('block');
        }

        // Highlight active button
        const targetBtn = document.getElementById(`tab-${tabId}`);
        if(targetBtn) {
            targetBtn.classList.remove('border-transparent', 'text-gray-500');
            targetBtn.classList.add('border-slate-900', 'text-slate-900');
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
      

<aside className="w-[240px] flex-shrink-0 flex flex-col h-full bg-[#111111] hidden md:flex border-r border-gray-800">

<div className="bg-[#111111] text-white flex flex-col py-4 border-b border-gray-800">
<a className="flex items-center gap-3 px-6 py-2 text-base hover:bg-gray-800 transition-colors" href="#">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
<div className="w-3 h-3 bg-black"></div>
</div>
<span className="font-medium tracking-tight">BKW</span>
</a>
</div>

<nav className="flex-1 flex flex-col py-6 text-gray-400 gap-1">
<a className="flex items-center gap-3 px-6 py-2.5 text-base hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
<span>Tableau de bord</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-base hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="activity"></i>
<span>Actions</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-base bg-[#222222] text-white rounded-r-full mr-4 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span className="font-medium">Entreprises</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-base hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Sites</span>
</a>
<a className="flex items-center gap-3 px-6 py-2.5 text-base hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Contrats</span>
</a>
</nav>

<div className="mt-auto py-4 px-4">
<a className="flex items-center gap-3 px-3 py-2 text-base hover:bg-gray-800 text-gray-400 hover:text-white rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-medium border border-gray-700">
            JD
          </div>
<div className="flex flex-col">
<span className="font-medium text-sm text-white">Jean Dupont</span>
<span className="text-xs">Mon profil</span>
</div>
</a>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-white border-l border-gray-200 shadow-[-10px_0_20px_rgba(0,0,0,0.02)] z-10 rounded-l-2xl">

<header className="flex-shrink-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="h-14 flex items-center justify-between px-6 lg:px-10">
<div className="flex items-center gap-4">

<nav className="flex items-center text-sm text-gray-500 gap-2 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">
                Gestion
              </a>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
<a className="hover:text-slate-900 transition-colors" href="#">
                Entreprises
              </a>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-right"></i>
<span className="text-slate-900">Acme Corporation SAS</span>
</nav>
</div>
<div className="flex items-center gap-4 text-gray-400">
<button className="hover:text-slate-900 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="hover:text-slate-900 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 mb-1">
<div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 shadow-sm">
<i className="w-6 h-6" data-lucide="building"></i>
</div>
<h1 className="text-3xl font-normal tracking-tight text-slate-900">
                  Acme Corporation SAS
                </h1>
</div>
<p className="text-base text-gray-500 ml-15">
                Détails et gestion de l'entreprise
              </p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-gray-200 text-slate-700 hover:bg-gray-50 hover:text-slate-900 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-5 shadow-sm">
<i className="w-4 h-4" data-lucide="edit-2"></i>
                Modifier
              </button>
</div>
</div>

<div className="border-b border-gray-200 mb-8">
<nav aria-label="Tabs" className="-mb-px flex space-x-6 overflow-x-auto">
<button className="tab-btn border-slate-900 text-slate-900 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-details" onclick="switchTab('details')">
                Détails
              </button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-sites" onclick="switchTab('sites')">
                Sites
              </button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-contrats" onclick="switchTab('contrats')">
                Contrats
              </button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-documents" onclick="switchTab('documents')">
                Documents
              </button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-contacts" onclick="switchTab('contacts')">
                Contacts
              </button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors flex items-center gap-2" id="tab-taches" onclick="switchTab('taches')">
                Tâches
                <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                  3
                </span>
</button>
<button className="tab-btn border-transparent text-gray-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-base transition-colors" id="tab-factures" onclick="switchTab('factures')">
                Factures
              </button>
</nav>
</div>

<div className="tab-content block pb-24 animate-in fade-in duration-300" id="content-details">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="flex flex-col gap-4">
<h2 className="text-lg font-medium tracking-tight text-slate-900">
                  Informations légales
                </h2>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-0">
<dl className="divide-y divide-gray-100">
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Raison sociale
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 font-medium">
                          Acme Corporation SAS
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Forme juridique
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0">
                          Société par actions simplifiée
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          SIREN
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 font-mono text-sm">
                          123 456 789
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          N° TVA
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 font-mono text-sm">
                          FR 12 123456789
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Code NAF
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0">
                          6201Z - Programmation informatique
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Adresse du siège
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 text-right">
                          124 Boulevard de la Villette
                          <br/>
                          75019 Paris, France
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Représentant légal
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0">
                          Marie Dubois
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Signataire
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 text-gray-500 italic">
                          Identique au représentant
                        </dd>
</div>
</dl>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<h2 className="text-lg font-medium tracking-tight text-slate-900">
                  Suivi commercial
                </h2>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-0">
<dl className="divide-y divide-gray-100">
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </dt>
<dd className="mt-1 sm:mt-0">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                            Client Actif
                          </span>
</dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Source du lead
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0">
                          Formulaire Web (Inbound)
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          Commercial référent
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium">
                            TL
                          </div>
                          Thomas Leroy
                        </dd>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:gap-4 hover:bg-gray-50/50 transition-colors">
<dt className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                          PNL associé
                        </dt>
<dd className="mt-1 text-base text-slate-900 sm:mt-0">
                          Industrie / Grand compte
                        </dd>
</div>
</dl>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-sites">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Sites rattachés
              </h2>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
                Créer un site
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:border-gray-300 hover:shadow-md transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-gray-50 rounded-lg text-slate-700 border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="factory"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 leading-tight">
                        Usine Nord
                      </h3>
<span className="text-sm text-gray-500">Actif</span>
</div>
</div>
<button className="text-gray-400 hover:text-slate-900 transition-colors p-1">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<div className="flex flex-col gap-2.5 mt-1">
<div className="flex items-start gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400 mt-0.5" data-lucide="map-pin"></i>
<span className="leading-snug">
                      Zone Industrielle La Fosse
                      <br/>
                      59000 Lille
                    </span>
</div>
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="hash"></i>
<span className="font-mono text-sm bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      PRM: 12345678901234
                    </span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    Enedis
                  </span>
<button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 group-hover:underline">
                    Voir le site
                    <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:border-gray-300 hover:shadow-md transition-all group">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-gray-50 rounded-lg text-slate-700 border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 leading-tight">
                        Siège Social
                      </h3>
<span className="text-sm text-gray-500">Actif</span>
</div>
</div>
<button className="text-gray-400 hover:text-slate-900 transition-colors p-1">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<div className="flex flex-col gap-2.5 mt-1">
<div className="flex items-start gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400 mt-0.5" data-lucide="map-pin"></i>
<span className="leading-snug">
                      124 Boulevard de la Villette
                      <br/>
                      75019 Paris
                    </span>
</div>
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="hash"></i>
<span className="font-mono text-sm bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                      PRM: 98765432109876
                    </span>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    Enedis
                  </span>
<button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 group-hover:underline">
                    Voir le site
                    <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-contrats">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Contrats en cours et passés
              </h2>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
                Créer un contrat
              </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-medium">
<th className="px-6 py-4">Réf. Contrat</th>
<th className="px-6 py-4">Site lié</th>
<th className="px-6 py-4">Type / Sous-type</th>
<th className="px-6 py-4">Période</th>
<th className="px-6 py-4">Statut</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-base text-slate-900">
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="file-text"></i>
                        CTR-2023-089
                      </td>
<td className="px-6 py-4 text-gray-600">Usine Nord</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Fourniture</span>
<span className="text-sm text-gray-500">
                            Soutirage classique
                          </span>
</div>
</td>
<td className="px-6 py-4 text-gray-600">
                        01/01/2024 - 31/12/2026
                      </td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                          En cours
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors px-3 py-1.5 rounded hover:bg-gray-100">
                          Voir
                        </button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-6 py-4 font-medium flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="file-text"></i>
                        CTR-2023-090
                      </td>
<td className="px-6 py-4 text-gray-600">Siège Social</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Fourniture</span>
<span className="text-sm text-gray-500">
                            Soutirage vert
                          </span>
</div>
</td>
<td className="px-6 py-4 text-gray-600">
                        01/06/2024 - 31/05/2027
                      </td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20">
                          Signé
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors px-3 py-1.5 rounded hover:bg-gray-100">
                          Voir
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-documents">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Documents attachés
              </h2>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-gray-200 text-slate-700 hover:bg-gray-50 h-10 px-4 shadow-sm">
<i className="w-4 h-4 text-red-500" data-lucide="trash-2"></i>
                  Retirer
                </button>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="upload"></i>
                  Importer un document
                </button>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<ul className="divide-y divide-gray-100">
<li className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">

<div className="flex items-center h-5">
<input className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-pointer appearance-none checked:bg-slate-900 checked:border-slate-900 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[1px]" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-type-2"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-900 cursor-pointer hover:underline">
                        KBIS_Acme_2024.pdf
                      </span>
<span className="text-sm text-gray-500">
                        Ajouté le 12 Mars 2024 • 1.2 MB
                      </span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                      Administratif
                    </span>
<button className="text-gray-400 hover:text-slate-900 p-2 rounded-md hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</li>
<li className="p-4 sm:px-6 hover:bg-gray-50/50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="flex items-center h-5">
<input className="h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-pointer appearance-none checked:bg-slate-900 checked:border-slate-900 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5px] after:top-[1px]" type="checkbox"/>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="flex flex-col">
<span className="text-base font-medium text-slate-900 cursor-pointer hover:underline">
                        Contrat_Signe_CTR-2023-089.pdf
                      </span>
<span className="text-sm text-gray-500">
                        Ajouté le 05 Fév 2024 • 3.4 MB
                      </span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">
                      Contrat
                    </span>
<button className="text-gray-400 hover:text-slate-900 p-2 rounded-md hover:bg-gray-100 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</li>
</ul>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-contacts">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Répertoire des contacts
              </h2>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                Ajouter un contact
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute top-4 right-4 flex gap-1">
<button className="text-gray-400 hover:text-slate-900 p-1 rounded hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="edit-2"></i>
</button>
<button className="text-gray-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-lg font-medium border border-gray-200">
                    MD
                  </div>
<div>
<h3 className="text-lg font-medium text-slate-900">
                      Marie Dubois
                    </h3>
<p className="text-sm text-gray-500">Directrice Générale</p>
</div>
</div>
<div className="flex flex-col gap-3 text-base">
<div className="flex items-center gap-3 text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="mail"></i>
<a className="hover:text-slate-900 hover:underline truncate" href="mailto:m.dubois@acme.fr">
                      m.dubois@acme.fr
                    </a>
</div>
<div className="flex items-center gap-3 text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="phone"></i>
<span>+33 6 12 34 56 78</span>
</div>
</div>
<div className="mt-2 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-600/10">
                    Signataire
                  </span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Siège Social
                  </span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute top-4 right-4 flex gap-1">
<button className="text-gray-400 hover:text-slate-900 p-1 rounded hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="edit-2"></i>
</button>
<button className="text-gray-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
<div className="flex items-center gap-4 mb-2">
<div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-lg font-medium border border-gray-200">
                    PL
                  </div>
<div>
<h3 className="text-lg font-medium text-slate-900">
                      Pierre Laurent
                    </h3>
<p className="text-sm text-gray-500">Responsable Énergie</p>
</div>
</div>
<div className="flex flex-col gap-3 text-base">
<div className="flex items-center gap-3 text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="mail"></i>
<a className="hover:text-slate-900 hover:underline truncate" href="mailto:p.laurent@acme.fr">
                      p.laurent@acme.fr
                    </a>
</div>
<div className="flex items-center gap-3 text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="phone"></i>
<span>+33 6 98 76 54 32</span>
</div>
</div>
<div className="mt-2 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/10">
                    Technique
                  </span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Usine Nord
                  </span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-taches">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Tâches à traiter
              </h2>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="check-square"></i>
                Créer une tâche
              </button>
</div>
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="divide-y divide-gray-100">

<div className="relative flex items-start p-5 hover:bg-gray-50/50 transition-colors group">
<div className="flex items-center h-6 mt-0.5">
<input className="h-4.5 w-4.5 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-pointer appearance-none checked:bg-slate-900 checked:border-slate-900 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5.5px] after:top-[2px] transition-all" id="task-1" type="checkbox"/>
</div>
<div className="ml-4 min-w-0 flex-1">
<div className="flex items-center justify-between gap-4">
<label className="font-medium text-slate-900 cursor-pointer text-base group-hover:text-blue-600 transition-colors" htmlFor="task-1">
                        Relancer pour la signature de l'avenant
                      </label>
<div className="flex gap-2 shrink-0">
<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                          Aujourd'hui
                        </span>
</div>
</div>
<p className="text-gray-500 text-sm mt-1 mb-3">
                      Le client doit nous renvoyer l'avenant signé pour la
                      modification de puissance sur l'Usine Nord.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Assigné à: Jean Dupont
                      </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                        Contrat CTR-2023-089
                      </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="paperclip"></i>
                        1 doc
                      </div>
</div>
</div>
</div>

<div className="relative flex items-start p-5 hover:bg-gray-50/50 transition-colors group">
<div className="flex items-center h-6 mt-0.5">
<input className="h-4.5 w-4.5 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-pointer appearance-none checked:bg-slate-900 checked:border-slate-900 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5.5px] after:top-[2px] transition-all" id="task-2" type="checkbox"/>
</div>
<div className="ml-4 min-w-0 flex-1">
<div className="flex items-center justify-between gap-4">
<label className="font-medium text-slate-900 cursor-pointer text-base group-hover:text-blue-600 transition-colors" htmlFor="task-2">
                        Vérifier les données de relève Enedis
                      </label>
<div className="flex gap-2 shrink-0">
<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                          Ven 24 Nov
                        </span>
</div>
</div>
<p className="text-gray-500 text-sm mt-1 mb-3">
                      Incohérence détectée sur le mois de Septembre pour le
                      siège social.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-gray-500">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Assigné à: Alice Martin
                      </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
                        Site: Siège Social
                      </div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-10">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Historique des tâches
              </h2>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
<div className="divide-y divide-gray-200">
<div className="relative flex items-start p-5 opacity-75">
<div className="flex items-center h-6 mt-0.5">
<input checked="" className="h-4.5 w-4.5 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-default appearance-none checked:bg-slate-400 checked:border-slate-400 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5.5px] after:top-[2px]" disabled="" type="checkbox"/>
</div>
<div className="ml-4 min-w-0 flex-1">
<div className="flex items-center justify-between gap-4">
<label className="font-medium text-gray-500 line-through text-base">
                        Validation du KBIS
                      </label>
<div className="flex gap-2 shrink-0">
<span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20">
                          Terminé le 12 Mars
                        </span>
</div>
</div>
<p className="text-gray-400 text-sm mt-1 mb-3">
                      Vérification de la conformité du KBIS fourni lors de
                      l'onboarding.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-gray-400">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Assigné à: Alice Martin
                      </div>
</div>
</div>
</div>
<div className="relative flex items-start p-5 opacity-75">
<div className="flex items-center h-6 mt-0.5">
<input checked="" className="h-4.5 w-4.5 rounded border-gray-300 text-slate-900 focus:ring-slate-900 cursor-default appearance-none checked:bg-slate-400 checked:border-slate-400 relative after:content-[''] after:absolute after:hidden checked:after:block after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:left-[5.5px] after:top-[2px]" disabled="" type="checkbox"/>
</div>
<div className="ml-4 min-w-0 flex-1">
<div className="flex items-center justify-between gap-4">
<label className="font-medium text-gray-500 line-through text-base">
                        Signature du contrat CTR-2023-089
                      </label>
<div className="flex gap-2 shrink-0">
<span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/20">
                          Terminé le 05 Fév
                        </span>
</div>
</div>
<p className="text-gray-400 text-sm mt-1 mb-3">
                      Contrat de fourniture pour l'Usine Nord signé par la
                      direction.
                    </p>
<div className="flex items-center gap-4 text-xs font-medium text-gray-400">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                        Assigné à: Thomas Leroy
                      </div>
<div className="w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                        Contrat CTR-2023-089
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden pb-24 animate-in fade-in duration-300" id="content-factures">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Historique de facturation
              </h2>
<button className="inline-flex items-center gap-2 justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 shadow-sm">
<i className="w-4 h-4" data-lucide="receipt"></i>
                Créer une facture
              </button>
</div>

<div className="bg-white border border-gray-200 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
<i className="w-8 h-8" data-lucide="receipt"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
                Aucune facture émise
              </h3>
<p className="text-base text-gray-500 max-w-sm mb-6">
                Il n'y a pas encore de factures associées à cette entreprise.
                Créez-en une pour commencer.
              </p>
<button className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 border border-gray-200 text-slate-900 hover:bg-gray-50 h-10 px-5 shadow-sm">
                Générer la première facture
              </button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
