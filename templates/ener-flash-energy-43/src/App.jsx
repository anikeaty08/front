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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#0B1121', // Anthracite très foncé
surface: '#151E32', // Surface légèrement plus claire
accent: '#3B82F6', // Bleu électrique
orange: '#F97316', // Orange maîtrisé
green: '#10B981', // Vert succès
}
},
letterSpacing: {
tightest: '-0.035em',
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="text-white font-semibold text-xl tracking-tight flex items-center gap-1 group-hover:text-brand-accent transition-colors">
<iconify-icon className="text-brand-accent" icon="solar:bolt-linear" width="24"></iconify-icon>
                    ENER-FLASH
                </div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-brand-accent hover:text-white transition-colors" href="#visio">Visio offerte</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#methode">Méthode</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#rapport">Rapport</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#tarifs">Tarif</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-brand-accent text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20" href="#visio">
                Réserver ma visio offerte (15 min)
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden hero-glow">
<div className="max-w-5xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Découvrez en 48h où votre bâtiment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">gaspille de l'énergie</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Analyse de vos factures et informations bâtiment, assistée par algorithmes et validée par un ingénieur énergie. Avant de lancer le diagnostic, une visio de cadrage de 15 minutes est offerte.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent hover:bg-blue-600 text-white text-base font-medium rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2" href="#visio">
                    Réserver ma visio offerte (15 min)
                    <iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-white/10 text-base font-medium rounded-xl transition-all flex items-center justify-center gap-2" href="#rapport">
                    Voir un exemple de rapport
                </a>
</div>
<p className="text-xs text-slate-500 mb-10 font-medium">
                Sans engagement. Objectif : cadrer votre contexte, vérifier les données disponibles et confirmer la pertinence du diagnostic.
            </p>

<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs md:text-sm text-slate-400 font-medium">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<iconify-icon className="text-brand-accent" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-white">15 min offertes</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<iconify-icon className="text-brand-accent" icon="solar:global-linear" width="16"></iconify-icon>
<span>100% en ligne</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<iconify-icon className="text-brand-accent" icon="solar:bolt-circle-linear" width="16"></iconify-icon>
<span>Compatible tous fournisseurs</span>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
<iconify-icon className="text-brand-accent" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Données protégées (RGPD)</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-dark border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white mb-3">Pour quels bâtiments ?</h2>
<p className="text-slate-400 text-sm">Si vous avez des factures et une exploitation régulière, Ener-flash peut détecter des leviers.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex flex-col items-center text-center hover:border-brand-accent/30 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:buildings-linear" width="32"></iconify-icon>
<span className="text-white font-medium">Bureaux</span>
</div>
<div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex flex-col items-center text-center hover:border-brand-accent/30 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:shop-linear" width="32"></iconify-icon>
<span className="text-white font-medium">Commerces</span>
</div>
<div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex flex-col items-center text-center hover:border-brand-accent/30 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:bed-linear" width="32"></iconify-icon>
<span className="text-white font-medium">Hôtels</span>
</div>
<div className="p-6 bg-brand-surface border border-white/5 rounded-xl flex flex-col items-center text-center hover:border-brand-accent/30 transition-colors">
<iconify-icon className="text-slate-300 mb-3" icon="solar:box-linear" width="32"></iconify-icon>
<span className="text-white font-medium font-tight">Entrepôts &amp; Logistique</span>
</div>
</div>
<div className="mt-8 p-4 bg-brand-surface/50 border border-dashed border-white/10 rounded-lg text-center">
<p className="text-sm text-slate-400"><span className="text-white font-medium">Multi-sites :</span> foncières, gestionnaires, SCI/SCPI souhaitant un screening rapide du parc.</p>
</div>
</div>
</section>

<section className="py-20 bg-brand-surface border-y border-white/5" id="methode">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">La méthode Ener-flash</h2>
<p className="text-slate-400 mt-2">Un processus technique, fluide, sans intrusion.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent border-t border-dashed border-white/20"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-brand-dark border border-brand-accent/30 flex items-center justify-center mb-6 shadow-xl shadow-blue-900/10 z-10 relative">
<div className="absolute inset-0 bg-brand-accent/5 rounded-2xl animate-pulse"></div>
<iconify-icon className="text-brand-accent" icon="solar:videocamera-record-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">1. Visio offerte (15 min)</h3>
<p className="text-slate-400 text-xs leading-relaxed max-w-[220px] mx-auto">
                        On comprend votre enjeu, l'usage du site et l'état général. On valide le périmètre et la pertinence du diagnostic.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl z-10">
<iconify-icon className="text-slate-400" icon="solar:upload-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">2. Envoi des documents</h3>
<p className="text-slate-400 text-xs leading-relaxed max-w-[220px] mx-auto">
                        Vous déposez vos factures (électricité et/ou gaz) et remplissez un court formulaire bâtiment.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl z-10">
<iconify-icon className="text-slate-400" icon="solar:graph-up-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">3. Analyse experte</h3>
<p className="text-slate-400 text-xs leading-relaxed max-w-[220px] mx-auto">
                        Détection de dérives, talon, cohérences d'usage, puissance souscrite. Analyse assistée par algorithmes, revue par un ingénieur.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl z-10">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">4. Rapport + restitution</h3>
<p className="text-slate-400 text-xs leading-relaxed max-w-[220px] mx-auto">
                        Rapport 10 à 15 pages + visio de restitution 30 min pour prioriser les actions.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<p className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/5 text-blue-400 rounded-lg text-sm border border-blue-500/10">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                    Aucun déplacement requis pour ce diagnostic.
                </p>
</div>
</div>
</section>

<section className="bg-brand-dark py-12 border-b border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-brand-surface border-l-4 border-brand-orange p-6 rounded-r-xl shadow-lg flex flex-col md:flex-row gap-6 items-start">
<div className="flex-shrink-0 pt-1">
<iconify-icon className="text-brand-orange" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Important : ce diagnostic n'est pas un audit réglementaire</h3>
<div className="text-sm text-slate-400 space-y-2">
<p>Ener-flash est un service de conseil rapide basé sur des données. Ce n'est pas un DPE ni un audit énergétique réglementaire.</p>
<p className="pt-1 text-slate-300">Pour des obligations réglementaires, une mission dédiée est proposée séparément.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-slate-900" id="rapport">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-brand-dark">Ce que vous recevez</h2>
<p className="text-slate-600 mb-8 text-lg">Un rapport de 10 à 15 pages conçu pour la prise de décision opérationnelle.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-700">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-brand-dark">Périmètre cadré</h4>
<p className="text-sm text-slate-600 mt-1">Contexte et objectifs validés lors de la visio de 15 min (offerte).</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-brand-accent">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-brand-dark">Synthèse Exécutive</h4>
<p className="text-sm text-slate-600 mt-1">Indicateurs clés (kWh, €, kWh/m²) et priorités immédiates sur une page.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-brand-orange">
<iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-brand-dark">Détection de Dérives</h4>
<p className="text-sm text-slate-600 mt-1">Analyse du talon (nuit), des week-ends et comparaison aux benchmarks.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-brand-dark">Plan d'action chiffré</h4>
<p className="text-sm text-slate-600 mt-1">Actions sans travaux (réglages) et pistes macro-chiffrées pour investissements.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent pointer-events-none"></div>
<div className="text-center mb-8">
<h3 className="font-medium text-slate-900 mb-1">À quoi ressemble le rapport ?</h3>
<p className="text-xs text-slate-500">Aperçu du document PDF final</p>
</div>
<div className="flex justify-center gap-4 perspective-1000">

<div className="w-32 h-44 bg-white shadow-lg border border-slate-200 rounded p-2 transform -rotate-6 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
<div className="h-2 w-16 bg-brand-dark mb-3 rounded-sm"></div>
<div className="space-y-1.5">
<div className="h-1 w-full bg-slate-100 rounded"></div>
<div className="h-1 w-20 bg-slate-100 rounded"></div>
<div className="h-1 w-24 bg-slate-100 rounded"></div>
</div>
<div className="mt-4 h-16 w-full bg-slate-50 rounded border border-slate-100"></div>
</div>

<div className="w-32 h-44 bg-white shadow-xl border border-slate-200 rounded p-2 z-10 transform group-hover:scale-105 transition-transform duration-500">
<div className="h-2 w-10 bg-brand-accent mb-3 rounded-sm"></div>
<div className="grid grid-cols-2 gap-2 mb-3">
<div className="h-8 bg-blue-50 rounded"></div>
<div className="h-8 bg-blue-50 rounded"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-slate-100 rounded"></div>
<div className="h-1 w-full bg-slate-100 rounded"></div>
</div>
<div className="mt-4 flex items-end gap-1 h-10 px-2 justify-between">
<div className="w-2 h-4 bg-brand-dark rounded-t"></div>
<div className="w-2 h-6 bg-brand-dark rounded-t"></div>
<div className="w-2 h-8 bg-brand-accent rounded-t"></div>
<div className="w-2 h-5 bg-brand-dark rounded-t"></div>
</div>
</div>

<div className="w-32 h-44 bg-white shadow-lg border border-slate-200 rounded p-2 transform rotate-6 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
<div className="h-2 w-12 bg-green-600 mb-3 rounded-sm"></div>
<div className="space-y-2">
<div className="flex gap-1 items-center">
<div className="w-3 h-3 rounded-full bg-green-100 border border-green-200"></div>
<div className="h-1 w-20 bg-slate-100 rounded"></div>
</div>
<div className="flex gap-1 items-center">
<div className="w-3 h-3 rounded-full bg-green-100 border border-green-200"></div>
<div className="h-1 w-16 bg-slate-100 rounded"></div>
</div>
<div className="flex gap-1 items-center">
<div className="w-3 h-3 rounded-full bg-green-100 border border-green-200"></div>
<div className="h-1 w-22 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center relative z-20">
<button className="px-5 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-accent transition-colors shadow-sm" onclick="document.getElementById('modal-report-preview').classList.add('active')">
                            Voir un extrait du rapport
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Exemples de signaux détectables</h2>
<div className="mb-12 flex items-center gap-2 p-3 bg-brand-surface border border-white/5 rounded-lg max-w-2xl">
<iconify-icon className="text-slate-400 flex-shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-slate-400 italic">Exemples indicatifs. Les résultats varient selon l'usage, les systèmes et la qualité des données.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-brand-surface border border-white/5 rounded-2xl p-6 card-hover transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Bureaux • 3 200 m²</span>
<iconify-icon className="text-slate-500" icon="solar:buildings-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg mb-2">Dérive nocturne CVC</h4>
<p className="text-sm text-slate-400 mb-6">Signal compatible avec une réduction nocturne insuffisante. À confirmer en restitution.</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs text-slate-500 uppercase mb-1">Potentiel indicatif</p>
<p className="text-xl font-semibold text-brand-accent">~ 8 500 € / an</p>
</div>
</div>

<div className="bg-brand-surface border border-white/5 rounded-2xl p-6 card-hover transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Commerce • 1 100 m²</span>
<iconify-icon className="text-slate-500" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg mb-2">Talon électrique élevé</h4>
<p className="text-sm text-slate-400 mb-6">Consommation H24 importante suggérant des équipements restés allumés.</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs text-slate-500 uppercase mb-1">Potentiel indicatif</p>
<p className="text-xl font-semibold text-brand-orange">~ 3 200 € / an</p>
</div>
</div>

<div className="bg-brand-surface border border-white/5 rounded-2xl p-6 card-hover transition-all">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Entrepôt • 4 500 m²</span>
<iconify-icon className="text-slate-500" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium text-lg mb-2">Optimisation contrat</h4>
<p className="text-sm text-slate-400 mb-6">Signal compatible avec une puissance souscrite surdimensionnée (à confirmer avec contrat).</p>
<div className="pt-4 border-t border-white/5">
<p className="text-xs text-slate-500 uppercase mb-1">Potentiel indicatif</p>
<p className="text-xl font-semibold text-brand-accent">~ 2 000 € / an</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden" id="tarifs">
<div className="absolute inset-0 bg-gradient-to-b from-brand-surface to-brand-dark pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-brand-dark border border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="mb-8 md:mb-0 md:mr-8">
<h3 className="text-2xl font-semibold text-white mb-2">Diagnostic Ener-flash</h3>
<p className="text-slate-400 mb-6 max-w-sm">Tout inclus pour identifier vos économies sans attendre.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium text-white">
<iconify-icon className="text-brand-accent flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Visio de cadrage offerte (15 min) incluse
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-accent flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Rapport expert 10-15 pages
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-accent flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Restitution Visio (30 min)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-accent flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Délai 48h ouvrées (après dossier complet)
                        </li>
</ul>
</div>
<div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 w-full md:w-auto min-w-[260px]">
<div className="text-sm text-slate-400 mb-1">Tarif unique</div>
<div className="text-4xl font-bold text-white mb-4">300€ <span className="text-lg font-normal text-slate-500">HT</span></div>
<a className="block w-full py-3 bg-brand-accent hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20" href="#visio">
                        Réserver ma visio offerte
                    </a>
<div className="text-[10px] text-slate-500 mt-3 text-center leading-tight">
                        Paiement sécurisé via Stripe après la visio<br/>et validation du dossier.
                    </div>
</div>
</div>
<p className="text-center text-xs text-slate-600 mt-6">Service de conseil technique non réglementaire.</p>
</div>
</section>

<section className="py-20 bg-brand-surface border-y border-white/5 scroll-mt-20" id="visio">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-brand-accent text-xs font-semibold mb-6">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
                        ÉTAPE 1 : CADRAGE
                    </div>
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Visio de cadrage offerte (15 minutes)</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Objectif : comprendre votre enjeu, vérifier les données disponibles et cadrer un diagnostic utile. Sans engagement.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Cadrage rapide de l'usage et des systèmes</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Vérification des documents nécessaires</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Décision claire : lancer le diagnostic ou non</span>
</li>
</ul>
<div className="p-4 bg-brand-dark rounded-lg border border-white/5 text-xs text-slate-500">
<iconify-icon className="inline align-middle mr-1 text-slate-400" icon="solar:shield-user-linear"></iconify-icon>
                        Vous pouvez anonymiser vos factures. Nous n’avons besoin que des consommations, dates et montants.
                    </div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-2xl overflow-hidden relative min-h-[420px] flex flex-col">
<div className="border-b border-slate-200 pb-4 mb-4">
<h3 className="text-slate-900 font-semibold text-lg">Réserver un créneau</h3>
<p className="text-slate-500 text-sm">Sélectionnez une date pour l'échange.</p>
</div>

<div className="space-y-4 mb-6">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Email professionnel</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-500" placeholder="vous@societe.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Type de bâtiment</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-500">
<option>Bureaux</option>
<option>Commerce</option>
<option>Autre</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Surface approx.</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-slate-900 text-sm focus:outline-none focus:border-blue-500" placeholder="ex: 500 m²" type="text"/>
</div>
</div>
</div>
<div className="flex-grow bg-slate-50 rounded border border-slate-200 flex items-center justify-center relative">

<div className="text-center">
<iconify-icon className="text-slate-300 mb-2" icon="solar:calendar-linear" width="48"></iconify-icon>
<p className="text-slate-400 text-sm font-medium">Calendrier de réservation</p>
</div>

<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
<button className="bg-brand-accent hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2">
                                Choisir un créneau
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="formulaire">

<div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-400 mb-4 border border-white/5">
                    Étape 2 (Après la visio)
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Dépôt des données</h2>
<p className="text-slate-400">Après validation lors de la visio, vous pourrez déposer vos documents ici pour lancer l'analyse.</p>
</div>
<form className="bg-brand-surface border border-white/5 rounded-2xl shadow-2xl overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-300">

<div className="bg-brand-dark/50 p-4 border-b border-white/5 text-center">
<p className="text-sm text-brand-accent font-medium">Lancer le diagnostic sans visio ?</p>
<p className="text-xs text-slate-500">Remplissez le formulaire ci-dessous. Nous vérifierons les données avant facturation.</p>
</div>

<div className="p-8 border-b border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-brand-accent text-sm font-semibold">A</div>
<h3 className="text-lg font-medium text-white">Bâtiment</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Type de bâtiment</label>
<select className="form-input w-full rounded-lg px-4 py-3 text-sm appearance-none cursor-pointer">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>Bureaux</option>
<option>Commerce</option>
<option>Hôtel</option>
<option>Entrepôt / Logistique</option>
<option>Autre</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Ville</label>
<input className="form-input w-full rounded-lg px-4 py-3 text-sm" placeholder="Ex: Lyon" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Surface (m²)</label>
<input className="form-input w-full rounded-lg px-4 py-3 text-sm" placeholder="Ex: 850" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Année construction (approx.)</label>
<input className="form-input w-full rounded-lg px-4 py-3 text-sm" placeholder="Ex: 1995" type="number"/>
</div>
</div>
</div>

<div className="p-8 border-b border-white/5 bg-brand-dark/30">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-brand-accent text-sm font-semibold">B</div>
<h3 className="text-lg font-medium text-white">Systèmes</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Chauffage principal</label>
<select className="form-input w-full rounded-lg px-4 py-3 text-sm cursor-pointer">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>Électrique (convecteurs)</option>
<option>Gaz (chaudière)</option>
<option>Pompe à chaleur / Réversible</option>
<option>Réseau urbain</option>
<option>Autre</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Climatisation</label>
<select className="form-input w-full rounded-lg px-4 py-3 text-sm cursor-pointer">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>Aucune</option>
<option>Splits / Cassettes</option>
<option>VRV / DRV</option>
<option>CTA / Groupe eau glacée</option>
<option>Autre</option>
</select>
</div>
</div>
</div>

<div className="p-8 border-b border-white/5">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-brand-accent text-sm font-semibold">C</div>
<h3 className="text-lg font-medium text-white">Documents</h3>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
<iconify-icon className="text-slate-400 group-hover:text-brand-accent mb-3 transition-colors" icon="solar:bolt-circle-linear" width="32"></iconify-icon>
<p className="text-sm font-medium text-white">Factures Électricité</p>
<p className="text-xs text-slate-500 mt-1">Glisser ou cliquer pour upload (PDF)</p>
</div>
<div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
<iconify-icon className="text-slate-400 group-hover:text-brand-orange mb-3 transition-colors" icon="solar:flame-circle-linear" width="32"></iconify-icon>
<p className="text-sm font-medium text-white">Factures Gaz (Optionnel)</p>
<p className="text-xs text-slate-500 mt-1">Glisser ou cliquer pour upload (PDF)</p>
</div>
</div>

<div className="flex items-start gap-3 mt-6 bg-blue-500/5 p-4 rounded-lg border border-blue-500/10">
<iconify-icon className="text-brand-accent flex-shrink-0 mt-0.5" icon="solar:shield-user-linear" width="20"></iconify-icon>
<div>
<p className="text-sm text-slate-300 font-medium mb-1">Anonymisation possible</p>
<p className="text-xs text-slate-400 leading-relaxed">
                                Vous pouvez masquer nom et adresse.
                                <button className="text-brand-accent hover:text-white underline ml-1" onclick="document.getElementById('modal-anon').classList.add('active')" type="button">Comment faire ?</button>
</p>
</div>
</div>
</div>

<div className="p-8">
<div className="flex items-start gap-3 mb-8">
<input className="custom-checkbox mt-0.5 flex-shrink-0" id="rgpd" type="checkbox"/>
<label className="text-xs text-slate-400 cursor-pointer select-none" htmlFor="rgpd">
                            J'autorise Ener-flash à traiter ces données pour le diagnostic. <button className="underline hover:text-white" onclick="document.getElementById('modal-privacy').classList.add('active')" type="button">Confidentialité</button>.
                        </label>
</div>
<div className="flex flex-col items-center">
<button className="w-full bg-brand-surface border border-white/20 hover:bg-white/5 text-white font-medium py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2" type="button">
                            Lancer sans visio
                            <iconify-icon icon="solar:plain-3-linear" width="24"></iconify-icon>
</button>
<p className="text-xs text-slate-500 mt-4 text-center max-w-md">
                            L'analyse débute à réception du paiement (lien envoyé après réception du dossier).
                        </p>
</div>
</div>
</form>
</div>
</section>

<section className="py-16 bg-brand-dark border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-white mb-6">Vos données sont protégées</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-400">
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
<span>Chiffrement TLS (HTTPS)</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:user-block-linear" width="20"></iconify-icon>
<span>Accès restreint</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
<span>Suppression sous 30 jours</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Aucune revente de données</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-surface" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-10 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-brand-dark border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
                        La visio de cadrage est-elle vraiment gratuite ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Oui. Elle sert à cadrer votre contexte et vérifier que le diagnostic sera utile pour vous. C'est sans engagement.
                    </div>
</details>
<details className="group bg-brand-dark border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
                        Que se passe-t-il après la visio ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Si le diagnostic est pertinent, vous recevez le lien de paiement Stripe et vous déposez vos documents. L’analyse démarre à réception du paiement et du dossier complet.
                    </div>
</details>
<details className="group bg-brand-dark border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
                        Est-ce un audit réglementaire ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Non. Ener-flash est un diagnostic de performance. Il ne remplace pas un audit réglementaire (DPE, audit grandes entreprises) mais permet d'identifier des actions concrètes plus rapidement.
                    </div>
</details>
<details className="group bg-brand-dark border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-5 cursor-pointer list-none text-slate-200 font-medium hover:text-white">
                        Puis-je anonymiser mes documents ?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Oui. Vous pouvez masquer votre nom, raison sociale et adresse précise. Nous avons seulement besoin du code postal (météo), des volumes de consommation (kWh) et des dates.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-1 text-white font-semibold text-lg tracking-tight mb-4">
<iconify-icon className="text-brand-accent" icon="solar:bolt-linear"></iconify-icon>
                        ENER-FLASH
                    </div>
<p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
                        Le diagnostic énergétique digital pour les professionnels. Identifiez vos gaspillages et réduisez vos charges sans complexité.
                    </p>
<div className="text-slate-600 text-xs mt-4 p-3 bg-brand-surface rounded border border-white/5 inline-block">
                        Service de conseil technique non réglementaire.
                    </div>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Service</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-500 hover:text-brand-accent transition-colors" href="#visio">Réserver visio offerte</a></li>
<li><a className="text-slate-500 hover:text-brand-accent transition-colors" href="#methode">Méthode</a></li>
<li><a className="text-slate-500 hover:text-brand-accent transition-colors" href="#tarifs">Tarifs</a></li>
<li><a className="text-slate-500 hover:text-brand-accent transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4 text-sm">Légal</h4>
<ul className="space-y-3 text-sm">
<li><button className="text-slate-500 hover:text-brand-accent transition-colors" onclick="document.getElementById('modal-legal').classList.add('active')">Mentions légales</button></li>
<li><button className="text-slate-500 hover:text-brand-accent transition-colors" onclick="document.getElementById('modal-privacy').classList.add('active')">Politique de confidentialité</button></li>
<li><button className="text-slate-500 hover:text-brand-accent transition-colors" onclick="document.getElementById('modal-cgv').classList.add('active')">CGV</button></li>
<li><a className="text-slate-500 hover:text-brand-accent transition-colors" href="mailto:contact@ener-flash.fr">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                © 2026 Ener-flash. Tous droits réservés.
            </div>
</div>
</footer>


<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm" id="modal-anon">
<div className="bg-brand-surface border border-white/10 rounded-2xl max-w-md w-full shadow-2xl p-8 relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="document.getElementById('modal-anon').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white mb-4">Comment anonymiser ?</h3>
<ol className="list-decimal pl-5 space-y-3 text-sm text-slate-300">
<li>Ouvrez votre facture PDF.</li>
<li>Masquez ou floutez les encarts "Nom du client", "Adresse de facturation".</li>
<li><strong>Important :</strong> Gardez visibles la ville, les consommations (kWh), les dates et les montants.</li>
<li>Enregistrez en PDF et uploadez le fichier.</li>
</ol>
<div className="mt-6 text-center">
<button className="bg-brand-accent hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors" onclick="document.getElementById('modal-anon').classList.remove('active')">
                    Fermer
                </button>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md" id="modal-report-preview">
<div className="bg-brand-surface border border-white/10 rounded-2xl max-w-4xl w-full shadow-2xl p-6 md:p-10 relative overflow-y-auto max-h-[90vh]">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="document.getElementById('modal-report-preview').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white mb-6">Extrait du rapport Ener-flash</h3>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-2 rounded shadow-lg opacity-90">
<div className="bg-slate-50 h-64 flex items-center justify-center border border-slate-100">
<span className="text-slate-400 text-xs font-semibold uppercase">1. Synthèse Exécutive</span>
</div>
<p className="text-slate-900 text-xs mt-2 text-center font-medium">Vue d'ensemble</p>
</div>
<div className="bg-white p-2 rounded shadow-lg opacity-90">
<div className="bg-slate-50 h-64 flex items-center justify-center border border-slate-100">
<span className="text-slate-400 text-xs font-semibold uppercase">2. Analyse de charge</span>
</div>
<p className="text-slate-900 text-xs mt-2 text-center font-medium">Courbes &amp; Dérives</p>
</div>
<div className="bg-white p-2 rounded shadow-lg opacity-90">
<div className="bg-slate-50 h-64 flex items-center justify-center border border-slate-100">
<span className="text-slate-400 text-xs font-semibold uppercase">3. Plan d'action</span>
</div>
<p className="text-slate-900 text-xs mt-2 text-center font-medium">Recommandations</p>
</div>
</div>
<div className="mt-8 text-center text-sm text-slate-400">
<p>Le rapport complet inclut l'analyse détaillée des contrats, l'optimisation des puissances et le benchmark sectoriel.</p>
<button className="mt-4 bg-brand-accent hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors" onclick="document.getElementById('modal-report-preview').classList.remove('active'); window.location.href='#visio'">
                    Réserver une visio pour en parler
                </button>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm" id="modal-legal">
<div className="bg-brand-surface border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl p-8 relative overflow-y-auto max-h-[80vh]">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="document.getElementById('modal-legal').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white mb-4">Mentions Légales</h3>
<div className="text-sm text-slate-400 space-y-4">
<p><strong>Éditeur du site :</strong> [Raison Sociale], [Forme Juridique] au capital de [Montant] €.</p>
<p><strong>Siège social :</strong> [Adresse complète].</p>
<p><strong>RCS :</strong> [Numéro] | <strong>TVA Intracommunautaire :</strong> [Numéro].</p>
<p><strong>Directeur de la publication :</strong> [Nom Prénom].</p>
<p><strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
<p><strong>Contact :</strong> contact@ener-flash.fr</p>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm" id="modal-privacy">
<div className="bg-brand-surface border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl p-8 relative overflow-y-auto max-h-[80vh]">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="document.getElementById('modal-privacy').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white mb-4">Politique de Confidentialité</h3>
<div className="text-sm text-slate-400 space-y-4">
<p><strong>Collecte des données :</strong> Les informations recueillies (factures, données techniques) sont nécessaires pour l'exécution du diagnostic énergétique.</p>
<p><strong>Utilisation :</strong> Ces données sont traitées par nos algorithmes et nos ingénieurs uniquement dans le but de produire le rapport.</p>
<p><strong>Sécurité :</strong> Les données sont stockées sur des serveurs sécurisés en Europe. Aucune donnée n'est revendue à des tiers.</p>
<p><strong>Durée de conservation :</strong> Les documents sources sont supprimés 30 jours après la restitution du rapport.</p>
<p><strong>Vos droits :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression. Contact : contact@ener-flash.fr.</p>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm" id="modal-cgv">
<div className="bg-brand-surface border border-white/10 rounded-2xl max-w-2xl w-full shadow-2xl p-8 relative overflow-y-auto max-h-[80vh]">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="document.getElementById('modal-cgv').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h3 className="text-xl font-medium text-white mb-4">Conditions Générales de Vente</h3>
<div className="text-sm text-slate-400 space-y-4">
<p><strong>Objet :</strong> Prestation de diagnostic énergétique à distance.</p>
<p><strong>Prix :</strong> 300 € HT. Paiement via Stripe après validation du dossier.</p>
<p><strong>Limitation de responsabilité :</strong> Ener-flash fournit une obligation de moyens. Le rapport est un outil d'aide à la décision et ne constitue pas une garantie d'économies réelles, celles-ci dépendant de la mise en œuvre effective par le client. Ce service n'est pas un audit réglementaire.</p>
<p><strong>Livraison :</strong> Rapport PDF envoyé par email sous 48h ouvrées après réception du paiement et du dossier complet.</p>
</div>
</div>
</div>

    </>
  );
}
