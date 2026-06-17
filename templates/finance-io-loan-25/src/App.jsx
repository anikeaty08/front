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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">FINANCE.IO</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Banques</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Cartes</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Assurances</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Crypto</a>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="bg-white text-slate-950 hover:bg-slate-200 transition-colors text-xs font-medium px-4 py-2 rounded-full" href="#">
                    Connexion
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>Mise à jour des offres : Octobre 2023</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500">
                L'expertise bancaire,<br/>sans compromis.
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Comparez instantanément les offres de banques en ligne, les cartes premium et les couvertures d'assurance associées. Une analyse impartiale basée sur la data.
            </p>

<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
<div className="p-1 rounded-full bg-slate-900 border border-slate-800 flex items-center relative">
<button className="px-6 py-2 rounded-full bg-slate-800 text-white text-xs font-medium shadow-sm transition-all">Particuliers</button>
<button className="px-6 py-2 rounded-full text-slate-500 hover:text-white text-xs font-medium transition-all">Professionnels</button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-slate-500">Mensuel</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-800 cursor-pointer border border-slate-700" htmlFor="toggle"></label>
</div>
<span className="text-xs font-medium text-white">Annuel <span className="text-emerald-500">(-15%)</span></span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 flex flex-col relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-white text-lg font-medium tracking-tight mb-1">Essentiel</h3>
<div className="text-slate-500 text-xs">Idéal pour le quotidien</div>
</div>
<div className="mb-8 relative h-40 w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-4 flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="text-white/50 text-xs tracking-widest uppercase">Debit</div>
<iconify-icon className="text-white/30" icon="solar:wifi-linear" width="20"></iconify-icon>
</div>
<div className="text-white/80 font-mono text-sm tracking-widest">**** 4291</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">0€</span>
<span className="text-sm text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Paiements gratuits en euros</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Carte physique incluse</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-500">
<iconify-icon className="text-slate-700 shrink-0" icon="solar:close-circle-linear" width="16"></iconify-icon>
<span>Assurances voyage limitées</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-700 text-white text-xs font-medium hover:bg-slate-800 transition-colors">
                    Sélectionner
                </button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col relative group border-indigo-500/30 bg-indigo-900/5">
<div className="absolute -top-px left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 rounded-b-lg text-[10px] font-semibold text-white tracking-wide uppercase">
                    Recommandé
                </div>
<div className="mb-6 mt-2">
<h3 className="text-white text-lg font-medium tracking-tight mb-1">Premium Metal</h3>
<div className="text-indigo-200/60 text-xs">Pour les voyageurs fréquents</div>
</div>
<div className="mb-8 relative h-40 w-full rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 border border-white/10 p-4 flex flex-col justify-between shadow-2xl shadow-indigo-500/10 group-hover:scale-[1.02] transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="text-white/50 text-xs tracking-widest uppercase">Metal</div>
<iconify-icon className="text-white/50" icon="solar:wifi-linear" width="20"></iconify-icon>
</div>
<div className="flex justify-between items-end">
<div className="text-white font-mono text-sm tracking-widest">**** 8821</div>
<iconify-icon className="text-white" icon="solar:card-2-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">14€</span>
<span className="text-sm text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs text-indigo-100">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>0 frais à l'étranger (illimité)</span>
</li>
<li className="flex items-start gap-3 text-xs text-indigo-100">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="border-b border-dashed border-indigo-500/50 cursor-help" title="Détails de l'assurance">Assurance Voyage Complète</span>
</li>
<li className="flex items-start gap-3 text-xs text-indigo-100">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Protection achats &amp; Smartphone</span>
</li>
<li className="flex items-start gap-3 text-xs text-indigo-100">
<iconify-icon className="text-indigo-400 shrink-0" icon="solar:star-linear" width="16"></iconify-icon>
<span>Accès Lounge Aéroport</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-slate-950 text-xs font-medium hover:bg-indigo-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Choisir l'offre Metal
                </button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-white text-lg font-medium tracking-tight mb-1">Infinite</h3>
<div className="text-slate-500 text-xs">L'excellence et la conciergerie</div>
</div>
<div className="mb-8 relative h-40 w-full rounded-xl bg-black border border-slate-800 p-4 flex flex-col justify-between shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl"></div>
<div className="flex justify-between items-start z-10">
<div className="text-white/50 text-xs tracking-widest uppercase">Infinite</div>
<iconify-icon className="text-yellow-500/50" icon="solar:crown-linear" width="20"></iconify-icon>
</div>
<div className="text-white/80 font-mono text-sm tracking-widest z-10">**** 9900</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">29€</span>
<span className="text-sm text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Conciergerie 24/7</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Assurances Neige et Montagne</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Plafonds de paiements élevés</span>
</li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-700 text-white text-xs font-medium hover:bg-slate-800 transition-colors">
                    Sélectionner
                </button>
</div>
</div>

<div className="max-w-7xl mx-auto mt-24">
<div className="flex items-center gap-3 mb-8">
<div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1"></div>
<h2 className="text-white text-xl font-medium tracking-tight">Détails des Assurances</h2>
<div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1"></div>
</div>
<div className="glass-card rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-800">
<th className="p-6 text-xs font-medium text-slate-500 uppercase tracking-wider w-1/3">Garanties</th>
<th className="p-6 text-xs font-medium text-slate-300 w-1/5 text-center">Essentiel</th>
<th className="p-6 text-xs font-medium text-indigo-400 w-1/5 text-center">Premium</th>
<th className="p-6 text-xs font-medium text-white w-1/5 text-center">Infinite</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">

<tr className="group hover:bg-slate-800/20 transition-colors">
<td className="p-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-800 rounded text-slate-400">
<iconify-icon icon="solar:plane-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">Retard d'avion</div>
<div className="text-xs text-slate-500">Indemnisation repas &amp; hôtel</div>
</div>
</div>
</td>
<td className="p-6 text-center text-xs text-slate-600">
<iconify-icon icon="solar:minus-circle-linear" width="20"></iconify-icon>
</td>
<td className="p-6 text-center text-xs text-slate-300">Jusqu'à 400€</td>
<td className="p-6 text-center text-xs text-white font-medium">Jusqu'à 900€</td>
</tr>

<tr className="group hover:bg-slate-800/20 transition-colors">
<td className="p-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-800 rounded text-slate-400">
<iconify-icon icon="solar:medical-kit-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">Frais médicaux (Étranger)</div>
<div className="text-xs text-slate-500">Avance et remboursement</div>
</div>
</div>
</td>
<td className="p-6 text-center text-xs text-slate-600">11 000€ max</td>
<td className="p-6 text-center text-xs text-slate-300">155 000€ max</td>
<td className="p-6 text-center text-xs text-white font-medium">Illimité</td>
</tr>

<tr className="group hover:bg-slate-800/20 transition-colors">
<td className="p-6">
<div className="flex items-center gap-3">
<div className="p-2 bg-slate-800 rounded text-slate-400">
<iconify-icon icon="solar:bag-check-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-200 font-medium">Protection des achats</div>
<div className="text-xs text-slate-500">Contre le vol et la casse</div>
</div>
</div>
</td>
<td className="p-6 text-center text-xs text-slate-600">
<iconify-icon icon="solar:minus-circle-linear" width="20"></iconify-icon>
</td>
<td className="p-6 text-center text-xs text-slate-300">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
</td>
<td className="p-6 text-center text-xs text-white font-medium">
<div className="flex flex-col items-center">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-[10px] text-slate-500 mt-1">+ Extension garantie</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<footer className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-800">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:graph-up-linear" width="12"></iconify-icon>
</div>
<span className="text-slate-500 font-medium text-xs tracking-tight">FINANCE.IO © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-slate-400 text-xs transition-colors" href="#">Mentions légales</a>
<a className="text-slate-600 hover:text-slate-400 text-xs transition-colors" href="#">Confidentialité</a>
<a className="text-slate-600 hover:text-slate-400 text-xs transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
