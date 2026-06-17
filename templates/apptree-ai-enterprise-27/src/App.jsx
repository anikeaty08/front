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
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
850: '#1c1917',
900: '#0c0a09',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<div className="bg-stone-100 border-b border-stone-200 py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-stone-600 tracking-wide">
                Apptree annonce une nouvelle étape dans le développement de sa plateforme d’IA documentaire enterprise.
                <a className="inline-flex items-center ml-2 text-stone-900 hover:text-stone-600 transition-colors underline underline-offset-2" href="#">
                    En savoir plus <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</p>
</div>
</div>

<nav className="sticky top-0 w-full z-40 bg-[#FDFCF8]/80 backdrop-blur-xl border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

<a className="font-serif text-2xl tracking-tighter text-stone-900 hover:text-stone-600 transition-colors" href="#">
                Apptree
            </a>

<div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 tracking-wide gap-x-8 gap-y-8 items-center">
<a className="hover:text-stone-900 transition-colors" href="/produit">Produit</a>

<div className="group pt-4 pb-4 relative">
<button className="flex gap-1 hover:text-stone-900 transition-colors gap-x-1 gap-y-1 items-center">
                        Solutions 
                        <iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-stone-200 shadow-lg rounded-md p-1.5 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 flex flex-col gap-0.5">
<a className="block hover:text-stone-900 hover:bg-stone-50 text-sm text-stone-600 rounded-sm py-2 px-3 transition-colors" href="/finance">Finance</a>
<a className="block hover:text-stone-900 hover:bg-stone-50 text-sm text-stone-600 rounded-sm py-2 px-3 transition-colors" href="/juridique">Juridique</a>
<a className="block hover:text-stone-900 hover:bg-stone-50 text-sm text-stone-600 rounded-sm py-2 px-3 transition-colors" href="/sante">Santé et Pharma</a>
<a className="block hover:text-stone-900 hover:bg-stone-50 text-sm text-stone-600 rounded-sm py-2 px-3 transition-colors" href="/operations">Opérations</a>
</div>
</div>
<a className="hover:text-stone-900 transition-colors" href="#blog">Blog</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium tracking-wide hover:bg-stone-800 transition-all shadow-sm" href="#demo">
                    Demander une démo
                </a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:pt-32 md:pb-24 overflow-hidden text-center pt-24 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-stone-900 mb-8">
                La plateforme d’IA documentaire pour les décisions critiques.
            </h1>
<p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Ajoutez la puissance de l’intelligence artificielle à la manière dont votre entreprise analyse, comprend et exploite ses documents.
            </p>
<div className="flex justify-center">
<a className="px-6 py-3 bg-stone-900 text-white rounded text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="#demo">
                    Demander une démo
                </a>
</div>
</div>
</header>

<section className="py-12 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-stone-400 font-medium uppercase tracking-widest mb-8">
                Ils utilisent Apptree pour analyser l’information à grande échelle
            </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-serif text-2xl text-stone-800">Acme Corp</span>
<span className="font-serif text-2xl text-stone-800">Global Fin</span>
<span className="font-serif text-2xl text-stone-800">Stratos</span>
<span className="font-serif text-2xl text-stone-800">Legal AI</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-5xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-6xl text-stone-900 tracking-tight leading-tight mb-4">
                Arrêtez d’expérimenter avec l’IA. <br/>
<span className="text-stone-400">Commencez à travailler avec elle.</span>
</h2>
<p className="text-xl text-stone-600 font-light">
                Créez de la valeur dès le premier jour.
            </p>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-3xl mb-12">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-6">
                    Des centaines de cas d’usage en production, avec un impact réel.
                </h2>
<p className="leading-relaxed text-lg font-light text-stone-500">
                    Avec Apptree, les équipes explorent et exploitent des milliers de cas d’usage concrets, directement liés à leurs enjeux métier.
                </p>
</div>

<div className="flex flex-wrap gap-2 md:gap-3">
<span className="px-4 py-2 rounded-full border border-stone-300 bg-white text-stone-600 text-sm font-medium hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors">Finance</span>
<span className="hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors text-sm font-medium text-stone-600 bg-white border-stone-300 border rounded-full pt-2 pr-4 pb-2 pl-4">Opérations</span>
<span className="px-4 py-2 rounded-full border border-stone-300 bg-white text-stone-600 text-sm font-medium hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors">Conseil</span>
<span className="hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors text-sm font-medium text-stone-600 bg-white border-stone-300 border rounded-full pt-2 pr-4 pb-2 pl-4">Corporate</span>
<span className="px-4 py-2 rounded-full border border-stone-300 bg-white text-stone-600 text-sm font-medium hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors">Gestion d’actifs</span>
<span className="px-4 py-2 rounded-full border border-stone-300 bg-white text-stone-600 text-sm font-medium hover:border-stone-900 hover:text-stone-900 cursor-default transition-colors">M&amp;A</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" style={{filter: 'invert(1)'}}></div>
<div className="max-w-5xl mx-auto relative z-10">

<div className="bg-stone-850 rounded-lg border border-stone-700 p-8 md:p-12 shadow-2xl">

<div className="flex gap-4 mb-8">
<div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0 text-stone-300">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="">
<p className="text-stone-400 text-xs uppercase tracking-widest mb-2">Requête Utilisateur</p>
<p className="font-serif text-xl md:text-2xl text-white leading-snug">
                            "Nous préparons une nouvelle acquisition côté acheteur. Quels leviers de négociation ont été utilisés dans des opérations similaires par le passé ?"
                        </p>
</div>
</div>
<div className="h-px w-full bg-stone-700 mb-8"></div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
</div>
<div className="">
<p className="text-stone-400 text-xs uppercase tracking-widest mb-2">Analyse Apptree</p>
<div className="prose prose-invert max-w-none">
<p className="text-stone-300 font-light leading-relaxed">
<span className="text-white font-medium">Analyse terminée (240 documents).</span><br/>
                                Apptree a identifié 3 clauses récurrentes utilisées comme leviers : 
                                <br/><br/>
                                1. <span className="text-white underline decoration-stone-600 underline-offset-4">Garantie de passif (GAP)</span> : Plafonds ajustés entre 10% et 15% du prix de cession dans les dossiers tech 2023.
                                <br/>
                                2. <span className="text-white underline decoration-stone-600 underline-offset-4">Earn-out</span> : Indexé sur l'EBITDA post-acquisition dans 85% des cas comparables.
                                <br/>
                                3. <span className="text-white underline decoration-stone-600 underline-offset-4">Indemnisation</span> : Franchise de 50k€ systématiquement négociée par les acheteurs du secteur.
                            </p>
</div>
<div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                            Sources vérifiées: SPA_Projet_Alpha.pdf (p.12), Due_Diligence_Beta.xlsx (Cell E45)...
                        </div>
</div>
</div>
</div>

<p className="mt-12 text-center text-stone-400 font-light max-w-2xl mx-auto">
                Apptree analyse automatiquement l’ensemble des documents fournis, compare les clauses clés et met en évidence les points de négociation pertinents, sans lecture manuelle ligne par ligne.
            </p>
</div>
</section>

<section className="py-24 px-6 border-b border-stone-200">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-stone-300 mb-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<blockquote className="font-serif text-3xl md:text-5xl text-stone-900 leading-tight mb-8">
                « Avec Apptree, je transforme des montagnes d’informations en réponses exploitables, sans friction. »
            </blockquote>
</div>
</section>

<section className="py-24 px-6 bg-[#FDFCF8]" id="product">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-16 border-b border-stone-200 pb-8">
                Conçu pour le travail sérieux.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="group">
<div className="w-10 h-10 border border-stone-200 rounded-sm flex items-center justify-center text-stone-400 mb-6 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<span className="font-serif italic">1</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Toutes les tâches</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Exécutez des workflows complexes, multi-étapes, sans simplification excessive.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 border border-stone-200 rounded-sm flex items-center justify-center text-stone-400 mb-6 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<span className="font-serif italic">2</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Toutes les données</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Raisonnez sur n’importe quel volume et format de données, sans limite de contexte effective.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 border border-stone-200 rounded-sm flex items-center justify-center text-stone-400 mb-6 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<span className="font-serif italic">3</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Transparence totale</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Visualisez le raisonnement de l’IA et tracez chaque réponse jusqu’à ses sources.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 border border-stone-200 rounded-sm flex items-center justify-center text-stone-400 mb-6 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
<span className="font-serif italic">4</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Sécurité enterprise</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Apptree est conçu pour répondre aux exigences des organisations les plus réglementées.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-y border-stone-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight leading-none mb-6">
                    Ce que votre entreprise fait le mieux, <span className="italic text-stone-400">amplifié</span>.
                </h2>
<p className="text-stone-500 text-lg font-light">
                    L’IA ne doit pas être standardisée. Elle doit s’adapter à vos méthodes de travail.
                </p>
</div>
<div className="lg:col-span-7 space-y-8">
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-stone-600 leading-relaxed">Synthétise de grands volumes d’information en réponses claires et exploitables</p>
</div>
<div className="h-px bg-stone-200 w-full"></div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-stone-600 leading-relaxed">Structure les workflows de recherche pour révéler les zones de risque et d’incertitude</p>
</div>
<div className="h-px bg-stone-200 w-full"></div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-stone-600 leading-relaxed">Automatise les analyses récurrentes sans perdre en fiabilité</p>
</div>
<div className="h-px bg-stone-200 w-full"></div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-stone-900 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-stone-600 leading-relaxed">Améliore la qualité des livrables produits par les équipes</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl text-stone-900 tracking-tight mb-16 text-center md:text-left">
                Une IA enterprise, déjà éprouvée.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="border-l border-stone-300 pl-6 py-2">
<span className="block text-3xl font-serif text-stone-900 mb-2">100+</span>
<span className="text-sm text-stone-500">Des centaines d’équipes actives</span>
</div>
<div className="border-l border-stone-300 pl-6 py-2">
<span className="block text-3xl font-serif text-stone-900 mb-2">1000s</span>
<span className="text-sm text-stone-500">Des milliers de cas d’usage en production</span>
</div>
<div className="border-l border-stone-300 pl-6 py-2">
<span className="block text-3xl font-serif text-stone-900 mb-2">3+ ans</span>
<span className="text-sm text-stone-500">Années de déploiement en enterprise</span>
</div>
<div className="border-l border-stone-300 pl-6 py-2">
<span className="block text-3xl font-serif text-stone-900 mb-2">1Mds+</span>
<span className="text-sm text-stone-500">Documents analysés</span>
</div>
</div>
</div>
</section>

<section className="text-stone-100 bg-stone-900 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-stone-800 pb-8">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
                Des cas réels. <br/><span className="text-stone-500">De la valeur concrète.</span>
</h2>
<a className="mt-6 md:mt-0 text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                Voir les solutions finance
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="p-6 rounded border border-stone-800 bg-stone-850 hover:bg-stone-800 transition-colors text-center cursor-pointer group">
<iconify-icon className="text-stone-500 group-hover:text-white mb-3 transition-colors" icon="solar:chart-square-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-stone-300 group-hover:text-white">Finance</h4>
</div>
<div className="p-6 rounded border border-stone-800 bg-stone-850 hover:bg-stone-800 transition-colors text-center cursor-pointer group">
<iconify-icon className="text-stone-500 group-hover:text-white mb-3 transition-colors" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-stone-300 group-hover:text-white">Conseil</h4>
</div>
<div className="hover:bg-stone-800 transition-colors cursor-pointer group text-center bg-stone-850 border-stone-800 border rounded pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="text-stone-500 group-hover:text-white mb-3 transition-colors" icon="solar:scale-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-stone-300 group-hover:text-white">Juridique</h4>
</div>
<div className="p-6 rounded border border-stone-800 bg-stone-850 hover:bg-stone-800 transition-colors text-center cursor-pointer group">
<iconify-icon className="text-stone-500 group-hover:text-white mb-3 transition-colors" icon="solar:city-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-stone-300 group-hover:text-white">Immobilier</h4>
</div>
<div className="p-6 rounded border border-stone-800 bg-stone-850 hover:bg-stone-800 transition-colors text-center cursor-pointer group">
<iconify-icon className="text-stone-500 group-hover:text-white mb-3 transition-colors" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-stone-300 group-hover:text-white">Corporate</h4>
</div>
</div>
</section>

<section className="border-stone-200 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center">
<blockquote className="font-serif text-2xl md:text-4xl text-stone-900 leading-tight mb-8">
                « Si la donnée est une ressource stratégique, alors disposer d’un outil comme Apptree pour l’analyser revient à passer d’un travail manuel à une capacité industrielle de compréhension. »
            </blockquote>
</div>
</section>

<section className="py-32 px-6 bg-stone-50" id="demo">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-8">
                Découvrez comment Apptree transforme l’analyse documentaire dans votre organisation.
            </h2>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded text-sm font-medium tracking-wide hover:bg-stone-800 transition-all shadow-md">
                    Demander une démo
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded text-sm font-medium tracking-wide hover:border-stone-400 transition-colors">
                    Contacter les ventes
                </button>
</div>
</div>
</section>

<footer className="bg-[#FDFCF8] pt-16 pb-8 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-stone-400 text-xs">
                © 2024 Apptree Technologies.
            </div>
<div className="flex gap-6 text-xs text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-stone-900 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-stone-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-stone-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
