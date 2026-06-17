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
      

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<header className="flex gap-4 bg-[rgb(15,16,20)]/80 border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md items-start justify-between border-white/5">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/10 tracking-tight font-medium text-indigo-400">PR</span>
<div aria-label="Titre du projet (éditable)" className="text-2xl sm:text-3xl tracking-tight font-semibold outline-none focus:ring-2 focus:ring-indigo-500/30 focus:rounded-md px-1 text-slate-100" contenteditable="true" role="textbox" spellcheck="false">Maison unifamiliale — Rénovation &amp; Extension</div>
</div>
<div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
<span>34 Rue de la Gare, 4800 Verviers</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="layers"></i>
<span>Parcelles: B123d, B124a</span>
</div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="user-2"></i>
<span>Client: J. Dupont</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3">
<div className="flex items-center gap-3">
<div className="rounded-lg border px-3.5 py-2 text-sm border-white/5 bg-black/20">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span className="text-slate-300">Progression</span>
<span className="font-medium text-slate-100"><span id="progress-delivered">7</span>/<span id="progress-total">18</span> livrées</span>
</div>
<div className="mt-1 h-1.5 w-48 overflow-hidden rounded bg-slate-800">
<div className="h-full bg-emerald-500 transition-all duration-500" id="progress-bar" style={{width: '40%'}}></div>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-sm hover:bg-indigo-500/15 hover:border-indigo-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 text-indigo-300 hover:text-indigo-200" id="export-zip">
<i className="h-4 w-4" data-lucide="package"></i>
                Exporter le pack
              </button>
<button className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/40 border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" id="print-all">
<i className="h-4 w-4" data-lucide="printer"></i>
                Imprimer
              </button>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-amber-300/90">
<i className="h-4 w-4" data-lucide="triangle-alert"></i>
<span className="">WoM temporairement indisponible — mode dégradé activé. Marquez “À valider” et complétez manuellement si nécessaire.</span>
</div>
</div>
</header>

<section className="rounded-xl border bg-[rgb(15,16,20)]/80 backdrop-blur-md p-4 shadow-sm space-y-3 border-white/5">
<div className="flex flex-col md:flex-row md:items-center gap-3">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full rounded-md border pl-10 pr-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/30 border-white/10 bg-black/20 text-slate-200" id="search" placeholder="Rechercher (nom/abréviation, ex. “PEB”, “SOLS”)" type="text"/>
</div>

<div className="flex items-center gap-2">
<label className="text-xs text-slate-400" htmlFor="sort">Tri</label>
<select className="rounded-md border px-2.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/30 border-white/10 bg-black/20 text-slate-200" id="sort">
<option value="priority">Priorité</option>
<option value="group">Groupe</option>
<option value="name">Nom</option>
</select>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-3 justify-between">
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-slate-400">Statut</span>
<button className="filter-chip data-[active=true]:bg-emerald-500/15 data-[active=true]:text-emerald-300" data-active="true" data-filter="a_fournir" data-filter-type="status">
              À fournir
            </button>
<button className="filter-chip data-[active=true]:bg-amber-500/15 data-[active=true]:text-amber-300" data-active="true" data-filter="en_cours" data-filter-type="status">
              En cours
            </button>
<button className="filter-chip data-[active=true]:bg-indigo-500/15 data-[active=true]:text-indigo-300" data-active="true" data-filter="fournis" data-filter-type="status">
              Fournis
            </button>
<button className="filter-chip data-[active=true]:bg-slate-500/15 data-[active=true]:text-slate-300" data-active="true" data-filter="na" data-filter-type="status">
              Non applicables
            </button>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-slate-400">Origine</span>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="obligatoire" data-filter-type="origin">Obligatoire</button>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="regle" data-filter-type="origin">Règle</button>
<button className="filter-chip data-[active=true]:bg-white/10 data-[active=true]:text-slate-200" data-active="true" data-filter="manuel" data-filter-type="origin">Ajout manuel</button>
<button className="inline-flex items-center gap-2 rounded-md border bg-transparent px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-slate-500/30 border-white/10 text-slate-300 hover:bg-white/5" id="reset-filters">
<i className="h-3.5 w-3.5" data-lucide="rotate-ccw"></i> Réinitialiser
            </button>
</div>
</div>
</section>

<div className="hidden sticky top-3 z-40 rounded-lg border border-indigo-500/20 bg-indigo-500/10 backdrop-blur px-3.5 py-2.5 shadow-sm" id="batch-bar">
<div className="flex items-center justify-between gap-3 text-sm">
<div className="flex items-center gap-2 text-indigo-200">
<i className="h-4 w-4" data-lucide="check-square"></i>
<span><span id="batch-count">0</span> sélectionné(s)</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm hover:bg-emerald-500/15 text-emerald-200" id="batch-provide">Marquer fourni</button>
<button className="inline-flex items-center gap-2 rounded-md border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-sm hover:bg-amber-500/15 text-amber-200" id="batch-request">Demander au client</button>
<button className="inline-flex items-center gap-2 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm hover:bg-indigo-500/15 text-indigo-200" id="batch-export">
<i className="h-4 w-4" data-lucide="download"></i> Exporter
            </button>
</div>
</div>
</div>

<main className="rounded-xl border bg-[rgb(15,16,20)]/80 backdrop-blur-md p-4 sm:p-5 shadow-sm border-white/5" id="panel">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-slate-100">Documents à fournir</h2>
<p className="hidden text-sm text-slate-400" id="empty-conditional">Aucune pièce conditionnelle pour ce projet. Fournissez les pièces obligatoires ci-dessous.</p>
</div>

<div className="space-y-3" id="groups">

<section className="group rounded-lg border border-white/5 bg-black/20">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors hover:bg-white/5" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90 text-slate-400" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Obligatoires</span>
<span className="text-xs text-slate-400">toujours visibles</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
<span className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] border-white/10 bg-white/5 text-slate-300">
<i className="h-3.5 w-3.5" data-lucide="list-checks"></i> MVP
                </span>
</div>
</header>
<div className="divide-y divide-white/5" data-group-body="">

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="demande" data-origin="obligatoire" data-priority="1" data-search="formulaire de demande demande administrative" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-demande" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire de demande</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis" title="Nécessaire avant dépôt — refus probable si absent.">Requis</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis (CoDT)</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer fourni</button>
<button className="menu-item danger" data-action="disable"><i className="h-4 w-4" data-lucide="slash"></i> Désactiver (NA)</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Formulaire de demande" className="doc-details" id="details-demande" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Formulaire officiel signé.</li>
<li>Cohérence des informations cadastrales.</li>
<li>Coordonnées complètes du demandeur.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide interne — Formulaire</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Dernier ajout: —</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div aria-label="Glisser-déposer ici" className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="photos" data-origin="obligatoire" data-priority="2" data-search="reportage photographique photos" data-status="brouillon">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-photos" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Reportage photographique</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis" title="Nécessaire avant dépôt — refus probable si absent.">Requis</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis</div>
</div>
<div className="state">
<span className="state-pill state-brouillon">Brouillon</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer fourni</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Reportage photographique" className="doc-details" id="details-photos" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>2 vues front de voirie + vis-à-vis</li>
<li>3 vues limites/parcelles</li>
<li>3 vues éloignées avec implantation</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide — Reportage photo</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Autosave actif — 10:12</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="requis" data-group="obligatoires" data-id="plans" data-origin="obligatoire" data-priority="3" data-search="plans cadre 7 planches cadre7" data-status="envoye">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-plans" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Plans (Cadre 7)</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4*" role="button" tabindex="0">4* ex.</span>
<span className="badge badge-requis">Requis</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="external-link"></i> Voir Plans requis</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Toujours requis</div>
</div>
<div className="state">
<span className="state-pill state-envoye">Envoyé</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="provided"><i className="h-4 w-4" data-lucide="check"></i> Marquer validé</button>
<button className="menu-item" data-action="replace"><i className="h-4 w-4" data-lucide="arrow-up-from-line"></i> Remplacer</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input checked="" className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Plans" className="doc-details" id="details-plans" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Échelles conformes (1/50 à 1/500)</li>
<li>Coupe(s), façades, implantation</li>
<li>Cadre 7 — légende standardisée</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Section “Cadre 7”</a>
<p>Origine: CoDT</p>
</div>
<h4 className="details-title mt-3">Contributeurs &amp; journal</h4>
<p className="details-text">Dernier ajout: 10:31 — A. Martin</p>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments="">
<span className="file-pill"><i className="h-3.5 w-3.5" data-lucide="file"></i> plan_implantation.pdf</span>
<span className="file-pill"><i className="h-3.5 w-3.5" data-lucide="file"></i> facades_01.pdf</span>
</div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="incidences" data-origin="regle" data-priority="4" data-search="notice etude incidences environnement code environnement" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-incidences" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Notice/Étude d’incidences</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="4" role="button" tabindex="0">4 ex.</span>
<span className="badge badge-cond" title="Demandé selon contexte réglementaire détecté.">Conditionnel</span>
<span className="badge badge-na line-through" title="Non applicable au projet actuel.">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Non activé — Code de l’environnement</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload" disabled=""><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
<button className="menu-item" data-action="force"><i className="h-4 w-4" data-lucide="toggle-right"></i> Forcer comme applicable</button>
</div>
</div>
</div>
</div>
</div>
<div aria-label="Détails — Notice/Étude d’incidences" className="doc-details" id="details-incidences" role="region">
<div className="details-inner">
<p className="text-sm text-slate-400">Ce document est non applicable. Cliquez pour afficher les critères ou activer manuellement si nécessaire.</p>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="sols" data-origin="regle" data-priority="5" data-search="decret sols bdes sol" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-sols" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Décret SOLS (BDES)</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="3" role="button" tabindex="0">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<div className="relative inline-flex">
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par historique d’activités (WoM)</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Décret SOLS (BDES)" className="doc-details" id="details-sols" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>3 exemplaires.</li>
<li>Rapport conforme BDES.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Aide — Décret SOLS</a>
<p>Origine: BDES</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="peb" data-origin="regle" data-priority="6" data-search="formulaire peb energie &gt;25% declaration responsable" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-peb" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire PEB</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="2" role="button" tabindex="0">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par &gt;25% et type d’intervention</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Générer modèle</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Formulaire PEB" className="doc-details" id="details-peb" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>2 exemplaires.</li>
<li>Responsable PEB vs déclaration selon contexte.</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> PEB — Aide interne</a>
<p>Origine: Règle PEB</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="obligatoires" data-id="statbel" data-origin="regle" data-priority="7" data-search="formulaire statbel modele i ii habitation autres batiments" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-statbel" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Formulaire Statbel</span>
<span aria-haspopup="dialog" className="exemplaires" data-ex="2" role="button" tabindex="0">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Pas requis si pas de bâtiment</div>
</div>
<div className="state">
<span className="state-pill state-afaire">À faire</span>
</div>
<div className="quick-actions">
<button aria-label="Téléverser" className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<button aria-label="Joindre lien" className="btn ghost link"><i className="h-4 w-4" data-lucide="link-2"></i></button>
<div className="menu">
<button aria-haspopup="menu" className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="generate"><i className="h-4 w-4" data-lucide="file-text"></i> Choisir modèle I/II</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle" title="Marquer fourni rapidement">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div aria-label="Détails — Statbel" className="doc-details" id="details-statbel" role="region">
<div className="details-inner">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Modèle I (habitation) ou modèle II (autres bâtiments)</li>
<li>Non requis si pas de bâtiment</li>
</ul>
</div>
<div>
<h4 className="details-title">Référence &amp; source</h4>
<div className="details-text">
<a className="link" href="#"><i className="h-3.5 w-3.5" data-lucide="link"></i> Guide Statbel</a>
<p>Origine: Statbel</p>
</div>
</div>
<div>
<h4 className="details-title">Pièces jointes</h4>
<div className="attachments" data-attachments=""></div>
<div className="dropzone">Glisser-déposer (PDF/JPG/PNG/DWG/ZIP)</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors hover:bg-white/5" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90 text-slate-400" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Patrimoine</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</div>
</header>
<div className="divide-y hidden divide-white/5" data-group-body="">

<article className="doc-card" data-badge="requis" data-group="patrimoine" data-id="patrimoine_autorisation" data-origin="regle" data-priority="2" data-search="autorisation patrimoine classe protection unesco zone" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-patrimoine-aut" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Autorisation patrimoniale</span>
<span className="badge badge-requis">Requis</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Classé/assimilé/zone de protection/UNESCO</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="request"><i className="h-4 w-4" data-lucide="send"></i> Demander au client</button>
</div>
</div>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-patrimoine-aut">
<div className="details-inner">
<h4 className="details-title">Exigences</h4>
<ul className="details-list">
<li>Joindre l’autorisation valide</li>
<li>Référence du bien</li>
</ul>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="patrimoine" data-id="archeo" data-origin="regle" data-priority="3" data-search="avis archeologique ha zone 1ha" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-archeo" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Avis archéologique préalable</span>
<span className="exemplaires" data-ex="2">2 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<span className="badge badge-na line-through">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Seuil ≥ 1 ha</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
</div>
</div>
</div>
</div>
</div>
<div className="doc-details" id="details-archeo">
<div className="details-inner">
<p className="text-sm text-slate-400">Surface du projet &lt; 1 ha.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors hover:bg-white/5" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90 text-slate-400" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Conservation de la nature</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</div>
</header>
<div className="divide-y hidden divide-white/5" data-group-body="">

<article className="doc-card" data-badge="conditionnel" data-group="nature" data-id="natura_eval" data-origin="regle" data-priority="2" data-search="evaluation appropriee natura2000 espece protegee" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-natura" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Évaluation appropriée</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<a className="mini-link" href="#"><i className="h-3.5 w-3.5" data-lucide="map"></i> voir la couche/risque</a>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Natura 2000 / espèces protégées</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-natura">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: évaluer l’impact sur sites Natura 2000 selon méthode SPW.</p>
</div>
</div>
</article>

<article className="doc-card" data-badge="conditionnel" data-group="nature" data-id="dnf_derog" data-origin="regle" data-priority="3" data-search="derogation protection nature dnf" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-dnf" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Dérogation protection de la nature (DNF)</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Atteinte possible aux espèces protégées</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-dnf">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: motiver la dérogation, impacts, mesures compensatoires.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="true">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors hover:bg-white/5" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90 text-slate-400" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Voirie (communal/régional)</span>
</div>
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</header>
<div className="divide-y hidden divide-white/5" data-group-body="">
<article className="doc-card" data-badge="conditionnel" data-group="voirie" data-id="voirie_dossier" data-origin="regle" data-priority="2" data-search="dossier voirie creation modification suppression" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-voirie-dossier" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Dossier voirie</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Création/modif/suppression d’accès</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
<div className="doc-details" id="details-voirie-dossier">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: plan d’accès, coupes, intégration cyclable si voirie régionale.</p>
</div>
</div>
</div></article>
<article className="doc-card" data-badge="conditionnel" data-group="voirie" data-id="voirie_cyclables" data-origin="regle" data-priority="3" data-search="note amenagements cyclables voirie regionale" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-cyclables" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Note aménagements cyclables</span>
<span className="exemplaires" data-ex="3">3 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Voirie régionale</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-cyclables">
<div className="details-inner">
<p className="text-sm text-slate-300">Exigences: démontrer la continuité et la sécurité des modes actifs.</p>
</div>
</div>
</article>
</div>
</section>

<section className="group rounded-lg border border-white/5 bg-black/20" data-collapsed="false">
<header className="flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors hover:bg-white/5" data-group-toggle="">
<div className="flex items-center gap-3">
<i className="h-4 w-4 transition-transform duration-200 group-[&amp;[data-collapsed=true]]:-rotate-90 text-slate-400" data-lucide="chevron-down"></i>
<span className="text-sm font-medium text-slate-100">Risques naturels</span>
</div>
<span className="text-xs text-slate-400" data-group-counter="">0 sur 0 fournis</span>
</header>
<div className="divide-y divide-white/5" data-group-body="">
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="non_aggravation" data-origin="regle" data-priority="2" data-search="non aggravation inondable faible moyenne" data-status="brouillon">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-nonaggrav" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Non-aggravation (inondable faible/moyenne)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par carte WoM</div>
</div>
<div className="state"><span className="state-pill state-brouillon">Brouillon</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-nonaggrav">
<div className="details-inner">
<p className="text-sm text-slate-300">Assurer l’absence d’aggravation des écoulements.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="requis" data-group="risques" data-id="faisabilite" data-origin="regle" data-priority="1" data-search="faisabilite inondable elevee requis bloquant" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button>
<button aria-controls="details-faisabilite" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Faisabilité (inondable élevée)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-requis">Requis</span>
<span className="badge badge-blocking"><i className="h-3.5 w-3.5" data-lucide="shield-alert"></i> Bloquant</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Déclenché par Inondation — niveau élevé (WoM)</div>
</div>
<div className="state"><span className="state-pill state-afaire">À faire</span></div>
<div className="quick-actions">
<button className="btn ghost upload"><i className="h-4 w-4" data-lucide="file-up"></i></button>
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="see-req"><i className="h-4 w-4" data-lucide="list"></i> Voir exigences</button>
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Détails de la règle</button>
</div>
</div>
<label className="toggle">
<input className="toggle-input" type="checkbox"/>
<span className="toggle-track"></span>
</label>
</div>
</div>
</div>
<div className="doc-details" id="details-faisabilite">
<div className="details-inner">
<p className="text-sm text-slate-300">Requis bloquant: nécessaire avant dépôt — refus probable si absent.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="projet_non_aggravant" data-origin="regle" data-priority="3" data-search="projet non aggravant zone deja inondee" data-status="na">
<div className="doc-row opacity-60">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select" disabled=""></button>
<button aria-controls="details-projetnonag" aria-expanded="false" className="row-expand">
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
<span className="doc-name">Projet non aggravant (zone déjà inondée)</span>
<span className="exemplaires" data-ex="4">4 ex.</span>
<span className="badge badge-cond">Conditionnel</span>
<span className="badge badge-na line-through">Non applicable</span>
</div>
<div className="doc-right">
<div className="rule flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<div className="tooltip">Zone non marquée “déjà inondée”</div>
</div>
<div className="state"><span className="state-pill state-na">N/A</span></div>
<div className="quick-actions">
<div className="menu">
<button className="btn ghost more"><i className="h-4 w-4" data-lucide="more-vertical"></i></button>
<div className="menu-panel">
<button className="menu-item" data-action="why"><i className="h-4 w-4" data-lucide="info"></i> Pourquoi non applicable ?</button>
</div>
</div>
</div>
</div>
</div>
<div className="doc-details" id="details-projetnonag">
<div className="details-inner">
<p className="text-sm text-slate-300">Non applicable car zone non identifiée comme “déjà inondée”.</p>
</div>
</div>
</article>
<article className="doc-card" data-badge="conditionnel" data-group="risques" data-id="servitudes_ecoulement" data-origin="regle" data-priority="4" data-search="servitudes ecoulement absence obstacle" data-status="a_faire">
<div className="doc-row">
<div className="doc-left">
<button aria-label="Sélectionner" className="row-select"></button></div></div></article></div></section></div></main></div>
    </>
  );
}
