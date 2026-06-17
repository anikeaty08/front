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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<nav className="fixed z-50 bg-white/80 w-full border-slate-200/60 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-bold">SM</div>
<span className="">Subventions.io</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-slate-900 transition-colors" href="#solution">Solution</a>
<button className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/5 hover:shadow-md">
                    Espace Mairie
                </button>
</div>
</div>
</nav>

<header className="md:pt-40 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-4">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
<span>Nouveau : Export comptable automatique</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
      Pilotez les aides aux associations <br className="hidden md:block"/>
<span className="text-slate-400">simplement et sans erreur.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
      Un outil centralisé et sécurisé pour moderniser le suivi des subventions municipales. Finies les feuilles de
      calcul complexes.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-lg shadow-indigo-500/20 ring-1 ring-slate-900 flex items-center justify-center gap-2 group">
                    Demander une démo
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Voir la vidéo
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto mt-16 md:mt-24 relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000">
</div>
<div className="relative bg-white rounded-xl border border-slate-200/80 shadow-2xl overflow-hidden">

<div className="border-b border-slate-100 bg-slate-50/50 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="mx-auto text-xs text-slate-400 font-medium">dashboard.mairie.fr</div>
</div>

<div className="p-6 md:p-8 grid gap-6 grid-cols-1 md:grid-cols-3">
<div className="md:col-span-3 flex justify-between items-end mb-2">
<div className="">
<div className="text-sm text-slate-500 font-medium">Budget Global 2024</div>
<div className="text-3xl font-medium tracking-tight text-slate-900">450 000,00 €</div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</div>
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-indigo-600" icon="lucide:pie-chart" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Engagé</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '72%'}}></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">324k € dépensés</span>
<span className="text-indigo-700 font-medium">72%</span>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-emerald-600" icon="lucide:users" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Associations</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-slate-900 tracking-tight">42</span>
<span className="text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+3 demandes</span>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-amber-600" icon="lucide:clock" width="18"></iconify-icon>
<span className="text-sm font-medium text-slate-700">En attente</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-slate-900 tracking-tight">8</span>
<span className="text-xs text-slate-400">dossiers</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y bg-white border-slate-200/60 pt-24 pb-24" id="solution">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Le problème du suivi traditionnel</h2>
<p className="leading-relaxed font-light text-slate-500">Le suivi des subventions sur tableur est souvent source d'erreurs,
  chronophage et manque de visibilité.<br/>
<br/>
  Les informations sont dispersées, le contrôle budgétaire est difficile et la communication avec les associations est
  fragmentée.</p>
<ul className="pt-4 space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Perte de temps dans la ressaisie de données</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-slate-600 text-sm">Risque d'erreurs dans les formules budgétaires</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="lucide:x-circle" width="18"></iconify-icon>
<span className="text-sm text-slate-600">Manque d'historique centralisé</span>
</li>
</ul>
</div>
<div className="relative pl-8 md:pl-0">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
<div className="space-y-6 md:pl-16">
<div className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm">
<iconify-icon className="" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span className="">Notre solution</span>
</div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight">Une clarté retrouvée</h2>
<p className="text-slate-500 leading-relaxed font-light">
                            Notre plateforme web centralisée transforme votre processus. Obtenez une vision en temps réel des budgets, automatisez les tâches administratives et sécurisez vos décisions financières.
                        </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
<div className="text-2xl font-medium text-slate-900 tracking-tight">-40%</div>
<div className="text-xs text-slate-500 mt-1">de temps administratif</div>
</div>
<div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
<div className="text-2xl font-medium text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-500 mt-1">de traçabilité</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pr-6 pb-24 pl-6" id="features">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Tout pour piloter sereinement</h2>
<p className="text-slate-500 font-light">
        Des outils conçus spécifiquement pour les besoins des mairies et des collectivités territoriales.
      </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg hover:shadow-indigo-500/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-indigo-600" icon="lucide:file-text" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:file-signature" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Gestion des subventions</h3>
<p className="text-sm text-slate-500 leading-relaxed">Centralisez les demandes, les votes et les versements dans un
          dossier numérique unique.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg hover:shadow-indigo-500/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-indigo-600" icon="lucide:activity" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Suivi des dépenses</h3>
<p className="text-sm text-slate-500 leading-relaxed">Visualisez l'état des versements effectués et à venir pour
          anticiper la trésorerie.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg hover:shadow-indigo-500/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-indigo-600" icon="lucide:calculator" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:calculator" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Budgets automatiques</h3>
<p className="text-sm text-slate-500 leading-relaxed">Le reliquat budgétaire est calculé en temps réel après chaque
          vote de subvention.</p>
</div>

<div className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all hover:shadow-lg hover:shadow-indigo-500/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-indigo-600" icon="lucide:bar-chart-2" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:pie-chart" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight">Rapports &amp; Analyses</h3>
<p className="text-sm text-slate-500 leading-relaxed">Générez des graphiques clairs pour vos conseils municipaux et
          commissions.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden bg-[#0f172a] text-center px-6 py-16 md:py-20 shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                    Prêt à moderniser votre gestion ?
                </h2>
<p className="text-slate-400 max-w-lg mx-auto text-lg font-light">
                    Rejoignez les mairies qui ont simplifié le pilotage de leurs aides associatives. Démonstration gratuite sans engagement.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
<button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
                        Contacter l'équipe
                    </button>
<button className="px-8 py-3 bg-transparent border border-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 hover:border-slate-600 transition-all">
                        En savoir plus
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-[10px] font-bold">SM</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Subventions.io</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-slate-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
