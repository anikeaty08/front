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
      

<div className="min-h-screen w-full" id="app">

<section className="min-h-screen flex items-center justify-center px-6" id="page-login">
<div className="w-full max-w-md">
<div className="flex flex-col items-center mb-8">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-[#2E3269] flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-white" data-lucide="badge-check"></i>
</div>
<div>
<h1 className="text-2xl tracking-tight font-semibold text-[#1E293B]">ECOBASE</h1>
<p className="text-sm text-slate-500">Ministère de l’Intégration et de la Coopération</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
<h2 className="text-xl tracking-tight font-semibold text-[#1E293B] mb-4">Connexion</h2>
<form className="space-y-4" id="login-form">
<div>
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="login-username">Identifiant</label>
<div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 transition rounded-lg border border-slate-200 px-3">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
<input className="w-full h-11 bg-transparent outline-none text-[15px] placeholder:text-slate-400" id="login-username" name="username" placeholder="ex: admin@ecobase.gov" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-600 mb-1" htmlFor="login-password">Mot de passe</label>
<div className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 transition rounded-lg border border-slate-200 px-3">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
<input className="w-full h-11 bg-transparent outline-none text-[15px] placeholder:text-slate-400" id="login-password" name="password" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full h-11 rounded-lg bg-[#22C55E] text-white font-medium hover:brightness-95 transition flex items-center justify-center gap-2" type="submit">
<i className="w-4 h-4" data-lucide="log-in"></i> Se connecter
              </button>
</form>
</div>
<p className="text-center text-xs text-slate-500 mt-4">Plateforme privée – Contactez l’administrateur</p>
</div>
</section>

<section className="hidden" id="app-shell">

<aside className="fixed inset-y-0 left-0 w-72 bg-[#2E3269] text-white flex flex-col">
<div className="px-5 pt-6 pb-4">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="clipboard-check"></i>
</div>
<div>
<div className="text-xl tracking-tight font-semibold">Ecobase</div>
<div className="text-xs text-white/70">Coopération régionale</div>
</div>
</div>
</div>
<nav className="px-3 space-y-1 overflow-y-auto">
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="dashboard">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i> <span>Tableau de bord</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="projets">
<i className="w-5 h-5" data-lucide="folder-kanban"></i> <span>Projets</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="initiateurs">
<i className="w-5 h-5" data-lucide="users"></i> <span>Initiateurs</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="cadres">
<i className="w-5 h-5" data-lucide="library"></i> <span>Cadres</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="institutions">
<i className="w-5 h-5" data-lucide="building-2"></i> <span>Institutions</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="partenaires">
<i className="w-5 h-5" data-lucide="handshake"></i> <span>Partenaires</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="orgs">
<i className="w-5 h-5" data-lucide="globe-2"></i> <span>Organisations Régionales</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="recherche">
<i className="w-5 h-5" data-lucide="search"></i> <span>Recherche</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="stats">
<i className="w-5 h-5" data-lucide="line-chart"></i> <span>Statistiques</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="indicateurs">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i> <span>Indicateurs</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="rapports">
<i className="w-5 h-5" data-lucide="file-text"></i> <span>Rapports</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="logs">
<i className="w-5 h-5" data-lucide="activity"></i> <span>Logs</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="users">
<i className="w-5 h-5" data-lucide="shield-check"></i> <span>Utilisateurs</span>
</button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10" data-route="settings">
<i className="w-5 h-5" data-lucide="settings"></i> <span>Paramètres</span>
</button>
</nav>
<div className="mt-auto p-4">
<div className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/80 flex items-center justify-between">
<span>v1.0.0</span>
<button className="flex items-center gap-1 hover:text-white transition" id="logout-btn">
<i className="w-4 h-4" data-lucide="log-out"></i> Déconnexion
              </button>
</div>
</div>
</aside>

<div className="lg:pl-72">

<header className="sticky top-0 z-30 bg-white border-b border-slate-200">
<div className="px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<nav className="text-sm text-slate-500">
<span className="text-slate-400">Tableau de bord</span> <span className="mx-2">/</span> <span className="font-medium text-[#1E293B]" id="breadcrumb">Accueil</span>
</nav>
</div>
<div className="flex items-center gap-4 w-full max-w-2xl mx-6">
<div className="relative flex-1">
<i className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white outline-none" id="global-search" placeholder="Recherche"/>
</div>
<button className="relative h-10 w-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center" id="notify-btn">
<i className="w-5 h-5 text-slate-600" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#22C55E] text-white text-[10px] flex items-center justify-center">3</span>
</button>
<div className="flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=128&amp;auto=format&amp;fit=crop"/>
<div className="hidden sm:block">
<div className="text-sm font-medium">Sery ABEDA</div>
<div className="text-xs text-slate-500">Administrateur</div>
</div>
</div>
</div>
</div>
</header>

<main className="p-6 space-y-6">

<section className="space-y-6" data-page="dashboard">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="briefcase"></i>
</div>
<div>
<div className="text-sm text-slate-500">Projets</div>
<div className="text-2xl tracking-tight font-semibold">2</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
<i className="w-5 h-5 text-amber-600" data-lucide="notebook-tabs"></i>
</div>
<div>
<div className="text-sm text-slate-500">Cadres</div>
<div className="text-2xl tracking-tight font-semibold">2</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
<i className="w-5 h-5 text-cyan-600" data-lucide="list-checks"></i>
</div>
<div>
<div className="text-sm text-slate-500">Tâches</div>
<div className="text-2xl tracking-tight font-semibold">2</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="p-4 flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Listes des tableaux de performances</h3>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Recherche:</span>
<input className="h-9 rounded-md border border-slate-200 px-3 text-sm bg-slate-50 focus:bg-white outline-none" id="perf-search" placeholder="Filtrer..."/>
</div>
</div>
<div className="px-4 pb-4 overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-slate-500">
<tr className="text-left">
<th className="py-3">Titre</th>
<th className="py-3">Date début</th>
<th className="py-3">Date fin</th>
<th className="py-3">Leader</th>
<th className="py-3">Niveau</th>
<th className="py-3">Action</th>
</tr>
</thead>
<tbody className="align-top" id="perf-tbody">
<tr className="border-t border-slate-100 hover:bg-slate-50/60">
<td className="py-3 font-medium">Administration Générale</td>
<td className="py-3">10-01-2021</td>
<td className="py-3">31-12-2021</td>
<td className="py-3">
<span className="inline-flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<span>Innocent KONAN</span>
</span>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">51%</span>
<div className="h-2 w-24 bg-slate-100 rounded">
<div className="h-2 bg-blue-600 rounded" style={{width: '51%'}}></div>
</div>
</div>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<button className="px-3 h-9 rounded-md bg-[#22C55E] text-white text-xs font-medium hover:brightness-95 flex items-center gap-1" data-open="project-detail">
<i className="w-4 h-4" data-lucide="eye"></i> Consulter
                            </button>
<button className="px-3 h-9 rounded-md bg-rose-500/10 text-rose-600 border border-rose-200 text-xs font-medium hover:bg-rose-50 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trash-2"></i> Supprimer
                            </button>
</div>
</td>
</tr>
<tr className="border-t border-slate-100 hover:bg-slate-50/60">
<td className="py-3 font-medium">Intégration Régionale</td>
<td className="py-3">10-01-2021</td>
<td className="py-3">28-12-2021</td>
<td className="py-3">
<span className="inline-flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<span>Innocent KONAN</span>
</span>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<span className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded">78%</span>
<div className="h-2 w-24 bg-slate-100 rounded">
<div className="h-2 bg-indigo-600 rounded" style={{width: '78%'}}></div>
</div>
</div>
</td>
<td className="py-3">
<div className="flex items-center gap-2">
<button className="px-3 h-9 rounded-md bg-[#22C55E] text-white text-xs font-medium hover:brightness-95 flex items-center gap-1" data-open="project-detail">
<i className="w-4 h-4" data-lucide="eye"></i> Consulter
                            </button>
<button className="px-3 h-9 rounded-md bg-rose-500/10 text-rose-600 border border-rose-200 text-xs font-medium hover:bg-rose-50 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="trash-2"></i> Supprimer
                            </button>
</div>
</td>
</tr>
</tbody>
</table>
<div className="flex items-center justify-between mt-4">
<div className="text-xs text-slate-500">Vu 1 de 2 sur 2 entrées</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50">Précédent</button>
<button className="h-8 w-8 rounded-md bg-[#2E3269] text-white text-sm">1</button>
<button className="h-8 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50">Prochain</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="projets">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Projets</h2>
<button className="px-3 h-10 rounded-lg bg-[#22C55E] text-white text-sm font-medium hover:brightness-95 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Nouveau projet
                </button>
</div>
<div className="bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="p-4">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm">
<div className="flex items-center justify-between">
<div className="font-medium">Administration Générale</div>
<span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700">En attente</span>
</div>
<p className="text-sm text-slate-500 mt-1">Modernisation et pilotage administratif.</p>
<div className="mt-3 flex items-center justify-between">
<div className="h-2 w-1/2 bg-slate-100 rounded"><div className="h-2 bg-blue-600 rounded" style={{width: '51%'}}></div></div>
<button className="text-[#22C55E] text-sm hover:underline flex items-center gap-1" data-open="project-detail">
<i className="w-4 h-4" data-lucide="arrow-right"></i> Détail
                        </button>
</div>
</div>
<div className="border border-slate-200 rounded-lg p-4 hover:shadow-sm">
<div className="flex items-center justify-between">
<div className="font-medium">Intégration Régionale</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">Validé</span>
</div>
<p className="text-sm text-slate-500 mt-1">Programmes de convergence régionale.</p>
<div className="mt-3 flex items-center justify-between">
<div className="h-2 w-1/2 bg-slate-100 rounded"><div className="h-2 bg-indigo-600 rounded" style={{width: '78%'}}></div></div>
<button className="text-[#22C55E] text-sm hover:underline flex items-center gap-1" data-open="project-detail">
<i className="w-4 h-4" data-lucide="arrow-right"></i> Détail
                        </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="institutions">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Institutions</h2>
<button className="px-3 h-10 rounded-lg bg-[#22C55E] text-white text-sm font-medium hover:brightness-95 flex items-center gap-2" id="btn-open-add-institution">
<i className="w-4 h-4" data-lucide="plus"></i> Ajouter une institution
                </button>
</div>
<div className="bg-white rounded-lg border border-slate-200 shadow-sm">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm text-slate-600">Vue</span>
<div className="relative">
<button className="h-9 px-3 rounded-md border border-slate-200 text-sm bg-white flex items-center gap-2" id="inst-size-btn">
<span id="inst-page-size">10</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-1 bg-white border border-slate-200 rounded-md shadow-sm w-24" id="inst-size-dd">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-size="5">5</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-size="10">10</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50" data-size="20">20</button>
</div>
</div>
<span className="text-sm text-slate-600">entrées</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Recherche:</span>
<input className="h-9 rounded-md border border-slate-200 px-3 text-sm bg-slate-50 focus:bg-white outline-none" id="inst-search" placeholder="Filtrer..."/>
</div>
</div>
<div className="px-4 pb-4 overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-slate-500">
<tr className="text-left">
<th className="py-3">Nom</th>
<th className="py-3">Type</th>
<th className="py-3">Responsable</th>
<th className="py-3">Contact</th>
<th className="py-3">Statut</th>
<th className="py-3">Actions</th>
</tr>
</thead>
<tbody className="align-top" id="inst-tbody"></tbody>
</table>
<div className="flex items-center justify-between mt-4">
<div className="text-xs text-slate-500" id="inst-count"></div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50" id="inst-prev">Précédent</button>
<span className="h-8 px-3 rounded-md bg-[#2E3269] text-white text-sm flex items-center justify-center" id="inst-page"></span>
<button className="h-8 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50" id="inst-next">Prochain</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="partenaires">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Partenaires</h2>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="filter-pill active h-9 px-3 rounded-full border border-slate-200 bg-white text-sm hover:bg-slate-50" data-filter="Tous">Tous</button>
<button className="filter-pill h-9 px-3 rounded-full border border-slate-200 bg-white text-sm hover:bg-slate-50" data-filter="PTF">PTF</button>
<button className="filter-pill h-9 px-3 rounded-full border border-slate-200 bg-white text-sm hover:bg-slate-50" data-filter="Organisation">Organisation</button>
<button className="filter-pill h-9 px-3 rounded-full border border-slate-200 bg-white text-sm hover:bg-slate-50" data-filter="Entreprise">Entreprise</button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="partner-grid"></div>
</section>

<section className="hidden space-y-4" data-page="orgs">
<h2 className="text-xl tracking-tight font-semibold">Organisations Régionales</h2>
<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="flex items-center gap-3">
<img alt="CEDEAO" className="h-6 w-6 rounded" src="https://flagcdn.com/w40/sn.png"/>
<div className="font-medium">CEDEAO</div>
</div>
<p className="text-sm text-slate-500 mt-2">Siège: Abuja, Nigéria</p>
<div className="mt-3 text-xs text-slate-600">Programmes: Intégration économique, libre circulation</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="flex items-center gap-3">
<img alt="UEMOA" className="h-6 w-6 rounded" src="https://flagcdn.com/w40/ne.png"/>
<div className="font-medium">UEMOA</div>
</div>
<p className="text-sm text-slate-500 mt-2">Siège: Ouagadougou, Burkina Faso</p>
<div className="mt-3 text-xs text-slate-600">Programmes: Union économique, convergence</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="flex items-center gap-3">
<img alt="UA" className="h-6 w-6 rounded" src="https://flagcdn.com/w40/et.png"/>
<div className="font-medium">UA</div>
</div>
<p className="text-sm text-slate-500 mt-2">Siège: Addis-Abeba, Éthiopie</p>
<div className="mt-3 text-xs text-slate-600">Programmes: Agenda 2063, paix et sécurité</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="flex items-center gap-3">
<img alt="CILSS" className="h-6 w-6 rounded" src="https://flagcdn.com/w40/ml.png"/>
<div className="font-medium">CILSS</div>
</div>
<p className="text-sm text-slate-500 mt-2">Siège: Ouagadougou, Burkina Faso</p>
<div className="mt-3 text-xs text-slate-600">Programmes: Sécurité alimentaire, lutte contre la sécheresse</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="recherche">
<h2 className="text-xl tracking-tight font-semibold">Recherche</h2>
<div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
<div className="grid md:grid-cols-3 gap-4">
<div>
<label className="text-sm text-slate-600">Mot-clé</label>
<input className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 bg-slate-50 focus:bg-white outline-none" placeholder="ex: intégration"/>
</div>
<div>
<label className="text-sm text-slate-600">Période</label>
<input className="mt-1 h-10 w-full rounded-lg border border-slate-200 px-3 bg-slate-50 focus:bg-white outline-none" type="month"/>
</div>
<div>
<label className="text-sm text-slate-600">Statut</label>
<div className="relative mt-1">
<button className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3 text-left flex items-center justify-between">
<span>Tout</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="h-10 px-4 rounded-lg bg-[#22C55E] text-white text-sm font-medium hover:brightness-95">Rechercher</button>
<button className="h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm hover:bg-slate-50">Effacer</button>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="stats">
<h2 className="text-xl tracking-tight font-semibold">Statistiques</h2>
<div className="grid lg:grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<h3 className="text-sm font-medium">Évolution des projets</h3>
<p className="text-xs text-slate-500">Taux d’avancement mensuel</p>
<div className="mt-4">
<div className="relative h-64"><div className="absolute inset-0"><canvas id="lineChart"></canvas></div></div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<h3 className="text-sm font-medium">Répartition par statut</h3>
<p className="text-xs text-slate-500">En attente vs Validé vs Rejeté</p>
<div className="mt-4">
<div className="relative h-64"><div className="absolute inset-0"><canvas id="doughnutChart"></canvas></div></div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="indicateurs">
<h2 className="text-xl tracking-tight font-semibold">Indicateurs</h2>
<div className="grid md:grid-cols-3 gap-4">
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="text-sm text-slate-500">Taux de réalisation</div>
<div className="mt-2 text-3xl tracking-tight font-semibold">64%</div>
<div className="h-2 bg-slate-100 rounded mt-3"><div className="h-2 bg-[#22C55E] rounded" style={{width: '64%'}}></div></div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="text-sm text-slate-500">Délai moyen (jours)</div>
<div className="mt-2 text-3xl tracking-tight font-semibold">32</div>
<div className="text-xs text-slate-500 mt-1 flex items-center gap-1"><i className="w-4 h-4 text-emerald-500" data-lucide="trending-up"></i> +4 vs mois dernier</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="text-sm text-slate-500">Budget engagé</div>
<div className="mt-2 text-3xl tracking-tight font-semibold">2,4 Md</div>
<div className="text-xs text-slate-500 mt-1">devise locale</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="rapports">
<h2 className="text-xl tracking-tight font-semibold">Rapports</h2>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex items-center justify-between">
<div>
<div className="font-medium">Rapport trimestriel</div>
<div className="text-xs text-slate-500">Q2 2025</div>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Exporter
                  </button>
<button className="h-9 px-3 rounded-md bg-[#22C55E] text-white text-sm hover:brightness-95">Générer</button>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="logs">
<h2 className="text-xl tracking-tight font-semibold">Logs</h2>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-500" data-lucide="clock"></i><span><span className="font-medium">12:02</span> Connexion de Sery ABEDA</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="edit-3"></i><span>Mise à jour d’un indicateur</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-rose-600" data-lucide="trash-2"></i><span>Suppression d’un document</span></div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="users">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Gestion utilisateurs</h2>
<button className="px-3 h-10 rounded-lg bg-[#22C55E] text-white text-sm font-medium hover:brightness-95 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="user-plus"></i> Nouvel utilisateur
                </button>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="p-4 overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-slate-500">
<tr className="text-left">
<th className="py-3">Nom</th>
<th className="py-3">Email</th>
<th className="py-3">Rôle</th>
<th className="py-3">Statut</th>
<th className="py-3">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-slate-100 hover:bg-slate-50/60">
<td className="py-3 font-medium">Sery ABEDA</td>
<td className="py-3">sery.abeda@gouv.ci</td>
<td className="py-3">
<span className="px-2 py-1 text-xs rounded bg-indigo-50 text-indigo-700">Admin</span>
</td>
<td className="py-3"><span className="px-2 py-1 text-xs rounded bg-emerald-50 text-emerald-700">Actif</span></td>
<td className="py-3 flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50">Modifier</button>
<button className="h-9 px-3 rounded-md bg-rose-500/10 text-rose-600 border border-rose-200 text-sm hover:bg-rose-50">Désactiver</button>
</td>
</tr>
<tr className="border-t border-slate-100 hover:bg-slate-50/60">
<td className="py-3 font-medium">Awa KOFFI</td>
<td className="py-3">awa.koffi@gouv.ci</td>
<td className="py-3"><span className="px-2 py-1 text-xs rounded bg-amber-50 text-amber-700">Analyste</span></td>
<td className="py-3"><span className="px-2 py-1 text-xs rounded bg-emerald-50 text-emerald-700">Actif</span></td>
<td className="py-3 flex items-center gap-2">
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50">Modifier</button>
<button className="h-9 px-3 rounded-md bg-rose-500/10 text-rose-600 border border-rose-200 text-sm hover:bg-rose-50">Désactiver</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
<h3 className="text-sm font-medium">Rôles et permissions</h3>
<div className="mt-2 grid md:grid-cols-4 gap-3 text-sm">
<div className="rounded-lg border border-slate-200 p-3">
<div className="font-medium">Administrateur</div>
<div className="text-xs text-slate-500 mt-1">Accès complet</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="font-medium">Analyste</div>
<div className="text-xs text-slate-500 mt-1">Lecture + export</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="font-medium">Contributeur</div>
<div className="text-xs text-slate-500 mt-1">Saisie + édition limitée</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="font-medium">Lecteur</div>
<div className="text-xs text-slate-500 mt-1">Lecture seule</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="settings">
<h2 className="text-xl tracking-tight font-semibold">Paramètres</h2>
<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="font-medium">Configuration des indicateurs</div>
<div className="mt-3 space-y-3">
<div>
<label className="text-sm text-slate-600">Fréquence de mise à jour</label>
<div className="relative mt-1">
<button className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3 text-left flex items-center justify-between">
<span>Mensuelle</span>
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>
<div>
<label className="text-sm text-slate-600">Sauvegarde automatique</label>
<div className="mt-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-full border border-slate-200 bg-white text-sm" id="toggle-backup">
<span className="h-4 w-7 rounded-full bg-slate-200 relative">
<span className="absolute top-1/2 -translate-y-1/2 left-0.5 h-3 w-3 rounded-full bg-white shadow" id="toggle-dot"></span>
</span>
<span id="toggle-label">Désactivée</span>
</button>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="font-medium">Base de données</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Tables</div>
<div className="text-lg tracking-tight font-semibold">8</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Sauvegardes</div>
<div className="text-lg tracking-tight font-semibold">3</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="h-9 px-3 rounded-md bg-[#22C55E] text-white text-sm hover:brightness-95">Sauvegarder</button>
<button className="h-9 px-3 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50">Restaurer</button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" data-page="project-detail">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-semibold">Détail du projet</h2>
<p className="text-sm text-slate-500">Administration Générale</p>
</div>
<div className="flex items-center gap-2">
<button className="h-10 px-3 rounded-lg bg-[#22C55E] text-white text-sm font-medium hover:brightness-95">Valider</button>
<button className="h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm hover:bg-slate-50">Modifier</button>
<button className="h-10 px-3 rounded-lg bg-rose-500/10 text-rose-600 border border-rose-200 text-sm hover:bg-rose-50">Supprimer</button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
<div className="text-sm font-medium mb-3">Workflow de validation</div>
<div className="flex items-center justify-between gap-2">
<div className="flex-1">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-600" data-lucide="user-check"></i>
</div>
<div>
<div className="font-medium">Point Focal</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700">Validé</span>
</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-right"></i>
<div className="flex-1">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center">
<i className="w-5 h-5 text-amber-600" data-lucide="user"></i>
</div>
<div>
<div className="font-medium">Directeur Central</div>
<span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700">En attente</span>
</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevron-right"></i>
<div className="flex-1">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-slate-500" data-lucide="award"></i>
</div>
<div>
<div className="font-medium">DG</div>
<span className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600">En attente</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg shadow-sm">
<div className="p-4 border-b border-slate-200 flex items-center gap-2">
<button className="tab-btn active h-9 px-3 rounded-md text-sm bg-slate-100" data-tab="info">Informations générales</button>
<button className="tab-btn h-9 px-3 rounded-md text-sm hover:bg-slate-50" data-tab="indics">Indicateurs</button>
<button className="tab-btn h-9 px-3 rounded-md text-sm hover:bg-slate-50" data-tab="docs">Documents</button>
<button className="tab-btn h-9 px-3 rounded-md text-sm hover:bg-slate-50" data-tab="history">Historique de validation</button>
</div></div></section></main></div></section></div>
    </>
  );
}
