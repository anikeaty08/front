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
background: '#09090b',
surface: '#18181b',
primary: '#0ea5e9',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-white">EDIGMA</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-white transition-colors" href="#systeme">Notre Système</a>
<a className="hover:text-white transition-colors" href="#temoignages">Témoignages</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors" href="#reserver">
                Réserver mon appel
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-24">

<section className="md:pt-20 z-10 pt-10 pb-20 relative" id="accueil">
<div className="glow-bg"></div>
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Uniquement chefs d'entreprise de nettoyage de +5 salariés !
                    </div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-white tracking-tight mb-6">
                        Grâce au système EDIGMA, obtenez le travail de 10 commerciaux, <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">pour le prix d'un seul.</span>
</h1>
<p className="md:text-lg text-base text-zinc-400 max-w-2xl mr-auto mb-8 ml-auto">
                        Trouvez jusqu'à 25 prospects par semaine, sans y passer une seule minute par jour.
                    </p>
<ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-sm text-zinc-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:bolt-linear"></iconify-icon>
                            Prospects contactés en automatique
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:buildings-linear"></iconify-icon>
                            Système conçu pour le nettoyage
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:chart-square-linear"></iconify-icon>
                            Rémunération dépendante de vos résultats
                        </li>
</ul>
<div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
<button className="btn-animated" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
                                RÉSERVER MON APPEL
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-3">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Par le fondateur de</span>
<div className="flex items-center gap-2 opacity-70 grayscale">
<iconify-icon className="text-white" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-white">L'ANTISÈCHE DU BUSINESS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative bg-zinc-950/50">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl text-center mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                        Vos clients sont satisfaits. Vous avez des équipes compétentes. Vous êtes ouvert à de nouveaux chantiers.
                    </h2>
<p className="text-lg text-zinc-400">Mais votre croissance plafonne. Pourquoi ?</p>
</div>
<div className="mb-12">
<span className="text-xs font-semibold text-rose-400 tracking-widest uppercase mb-4 block text-center">Un constat inquiétant...</span>
<p className="text-center text-sm text-zinc-400 max-w-xl mx-auto mb-12">La majorité des entreprises de nettoyage ont des difficultés pour s'adapter aux évolutions du marché.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-8 rounded-2xl text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-rose-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<h3 className="text-5xl font-semibold tracking-tighter text-white mb-2">44%</h3>
<p className="text-sm text-zinc-400">Entreprises ayant vu leurs marges se réduire en 2024</p>
</div>
<div className="glass-panel p-8 rounded-2xl text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-rose-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<h3 className="text-5xl font-semibold tracking-tighter text-white mb-2">40%</h3>
<p className="text-sm text-zinc-400">Entreprises utilisant des outils numériques</p>
</div>
<div className="glass-panel p-8 rounded-2xl text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-rose-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<h3 className="text-5xl font-semibold tracking-tighter text-white mb-2">60%</h3>
<p className="text-sm text-zinc-400">Entreprises annonçant des difficultés pour générer un trafic régulier</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative items-center">

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 items-center justify-center text-zinc-400">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>

<div className="glass-panel p-8 md:p-10 rounded-3xl border-rose-500/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-3xl rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/10 text-rose-500">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</span>
                            Avant EDIGMA
                        </h3>
<ul className="space-y-4 text-sm text-zinc-400">
<li className="flex gap-3"><iconify-icon className="text-rose-500/50 mt-0.5 text-base flex-shrink-0" icon="solar:close-square-linear"></iconify-icon> Prospection manuelle sans effet de levier</li>
<li className="flex gap-3"><iconify-icon className="text-rose-500/50 mt-0.5 text-base flex-shrink-0" icon="solar:close-square-linear"></iconify-icon> Gestion des prospects à l'unité et standardisée</li>
<li className="flex gap-3"><iconify-icon className="text-rose-500/50 mt-0.5 text-base flex-shrink-0" icon="solar:close-square-linear"></iconify-icon> Marges réduites et prix tirés à la baisse</li>
</ul>
</div>

<div className="glass-panel p-8 md:p-10 rounded-3xl border-primary/30 relative overflow-hidden bg-white/[0.02]">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</span>
                            Après EDIGMA
                        </h3>
<ul className="space-y-4 text-sm text-zinc-300">
<li className="flex gap-3"><iconify-icon className="text-primary mt-0.5 text-base flex-shrink-0" icon="solar:check-square-linear"></iconify-icon> Prospection automatisée &amp; ultra-ciblée</li>
<li className="flex gap-3"><iconify-icon className="text-primary mt-0.5 text-base flex-shrink-0" icon="solar:check-square-linear"></iconify-icon> Trafic jusqu'à 25 prospects par semaine</li>
<li className="flex gap-3"><iconify-icon className="text-primary mt-0.5 text-base flex-shrink-0" icon="solar:check-square-linear"></iconify-icon> Mise en relation instantanée avec 100% des visiteurs</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<button className="btn-animated" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">RÉSERVER MON APPEL</span>
</button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-950/30 relative" id="systeme">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Les 4 piliers du système EDIGMA</h2>
<p className="text-sm text-zinc-400">*Lead = personne intéressée par vos services, mais qui n'est pas encore client</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-8 rounded-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl text-zinc-300">
                                💎
                            </div>
<div>
<span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Pilier 1</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Offres uniques &amp; "tapent à l'œil"</h3>
</div>
</div>
<ul className="space-y-3 text-sm text-zinc-400 mb-6 list-disc pl-5 marker:text-zinc-700">
<li>Présentation de prestations qui sortent du lot et attise la curiosité</li>
<li>Services complets avec alternatives pour maximiser le panier moyen</li>
<li>Image "d'expert" mis en avant pour chaque prestation</li>
</ul>
<div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary flex items-start gap-2">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
<span>Augmentez votre panier moyen jusqu'à +15%, sans changer vos services</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl text-zinc-300">
                                🎯
                            </div>
<div>
<span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Pilier 2</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Acquisition de leads*</h3>
</div>
</div>
<ul className="space-y-3 text-sm text-zinc-400 mb-6 list-disc pl-5 marker:text-zinc-700">
<li>Publicités ultra-ciblées</li>
<li>Disqualification automatique des personnes en recherche d'emploi</li>
<li>Message adapté selon vos avatars clients</li>
</ul>
<div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary flex items-start gap-2">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
<span>Votre portefeuille client se développe 7/7j</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl text-zinc-300">
                                ⚡
                            </div>
<div>
<span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Pilier 3</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Gestion de leads* automatisée</h3>
</div>
</div>
<ul className="space-y-3 text-sm text-zinc-400 mb-6 list-disc pl-5 marker:text-zinc-700">
<li>Tunnel de vente optimisé pour entreprise de nettoyage</li>
<li>Conversations engagées sur Whatsapp en 5 minutes, 24/7j</li>
<li>CRM automatisé 24/7j &amp; Séquences emails pour "garder à chaud"</li>
</ul>
<div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary flex items-start gap-2">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
<span>Plus aucun prospect n'est oublié, tout est centralisé et autonome</span>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl text-zinc-300">
                                💸
                            </div>
<div>
<span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">Pilier 4</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Closing</h3>
</div>
</div>
<ul className="space-y-3 text-sm text-zinc-400 mb-6 list-disc pl-5 marker:text-zinc-700">
<li>Formations personnalisées pour vos commerciaux</li>
<li>Levier améliorable rapidement avec des résultats directs sur le CA</li>
<li>CRM centralisé et optimisé pour l'exécution rapide</li>
</ul>
<div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary flex items-start gap-2">
<iconify-icon className="mt-0.5 flex-shrink-0" icon="solar:arrow-right-linear"></iconify-icon>
<span>Augmenter votre taux de signature de 10% revient à augmenter votre CA de 10%</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-white">Exemple de résultats d'une campagne Meta Ads</h2>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto mb-12">

<div className="glass-panel rounded-xl p-5 w-full md:w-1/2 flex items-center justify-between border-white/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Budget quotidien</p>
<p className="text-lg font-semibold text-white">50€</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 mb-0.5">Leads générés</p>
<p className="text-lg font-semibold text-emerald-400">Stable &amp; Prédictible</p>
</div>
</div>

<div className="glass-panel rounded-xl p-5 w-full md:w-1/2 flex items-center justify-between border-white/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:chart-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Budget quotidien</p>
<p className="text-lg font-semibold text-white">16€</p>
</div>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 mb-0.5">Optimisation</p>
<p className="text-lg font-semibold text-primary">Haute Performance</p>
</div>
</div>
</div>
<div className="text-center">
<button className="btn-animated" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">JE VEUX REMPLIR MON AGENDA</span>
</button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-950/50" id="temoignages">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<span className="text-xs font-semibold text-primary tracking-widest uppercase mb-4 block">Partenaires de confiance</span>
<h2 className="text-3xl font-semibold tracking-tight text-white">EDIGMA est le partenaire de croissance N°1 sur le marché francophone du nettoyage</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
<div className="mb-6">
<iconify-icon className="text-primary/40 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed">"EDIGMA a su combler mes besoins très rapidement. L'équipe est à l'écoute, force de proposition et répond à toutes mes demandes avec réactivité et honnêteté."</p>
</div>
<div>
<p className="font-semibold text-white text-sm">Nina S.</p>
<p className="text-xs text-zinc-500 mb-3">Dirigeante de Sente Sabrina, Liège</p>
<a className="text-xs text-primary hover:text-white transition-colors inline-flex items-center gap-1" href="#">Voir notre site <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
<div className="mb-6">
<iconify-icon className="text-primary/40 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed">"Audric a toujours été très professionnel. Il sait mettre en confiance et les résultats sont au rendez-vous. Je recommande à ceux qui veulent se développer."</p>
</div>
<div>
<p className="font-semibold text-white text-sm">Doris T.</p>
<p className="text-xs text-zinc-500 mb-3">Dirigeante de Kenmoe Nett Services, Paris</p>
<a className="text-xs text-primary hover:text-white transition-colors inline-flex items-center gap-1" href="#">Voir notre site <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between">
<div className="mb-6">
<iconify-icon className="text-primary/40 text-3xl mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed">"Je pensais que c'était impossible d'augmenter mes prix dans le contexte actuel. Edigma m'a prouvé le contraire avec 5 nouveaux chantiers signés dès le premier mois."</p>
</div>
<div>
<p className="font-semibold text-white text-sm">Arnaud F.</p>
<p className="text-xs text-zinc-500 mb-3">Fondateur de MyCleaners, Brest</p>
<a className="text-xs text-primary hover:text-white transition-colors inline-flex items-center gap-1" href="#">Voir notre site <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
<div className="mx-auto max-w-3xl px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Notre garantie zéro risque</h2>
<p className="text-lg text-zinc-300 mb-2">Si vous ne générez pas le double de vos dépenses dans les 90 premiers jours...</p>
<p className="text-base text-zinc-500 mb-8 font-medium">...nous arrêtons de vous facturer jusqu'à ce qu'on l'atteigne.</p>
<button className="btn-animated" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">PASSER À L'ACTION</span>
</button>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="mx-auto max-w-4xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">Pourquoi choisir EDIGMA ?</h2>
</div>
<div className="glass-panel rounded-2xl overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10 bg-white/[0.02]">
<th className="p-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-1/2"></th>
<th className="p-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-center border-l border-white/5">Agences Marketing</th>
<th className="p-4 text-xs font-semibold text-primary uppercase tracking-wider text-center border-l border-white/5 bg-primary/5">EDIGMA</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 text-zinc-300 font-medium">Spécialisés dans le marché du nettoyage</td>
<td className="p-4 text-center border-l border-white/5 text-zinc-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></td>
<td className="p-4 text-center border-l border-white/5 text-primary bg-primary/[0.02]"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 text-zinc-300 font-medium">Rémunération basée sur le CA généré</td>
<td className="p-4 text-center border-l border-white/5 text-zinc-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></td>
<td className="p-4 text-center border-l border-white/5 text-primary bg-primary/[0.02]"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 text-zinc-300 font-medium">Système construit sur-mesure</td>
<td className="p-4 text-center border-l border-white/5 text-zinc-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></td>
<td className="p-4 text-center border-l border-white/5 text-primary bg-primary/[0.02]"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 text-zinc-300 font-medium">Accompagnement axé sur l'accroissement du CA</td>
<td className="p-4 text-center border-l border-white/5 text-zinc-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></td>
<td className="p-4 text-center border-l border-white/5 text-primary bg-primary/[0.02]"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="p-4 text-zinc-300 font-medium">Retour sur investissement de 100% garanti</td>
<td className="p-4 text-center border-l border-white/5 text-zinc-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></td>
<td className="p-4 text-center border-l border-white/5 text-primary bg-primary/[0.02]"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative bg-zinc-950/50" id="contact">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Vous voulez transformer votre entreprise de nettoyage ?</h2>
<p className="text-zinc-400 mb-10">Réservez votre créneau avec le lien ci-dessous.</p>
<div className="mb-16">
<button className="btn-animated" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">RÉSERVER MON APPEL</span>
</button>
</div>
<div className="border-t border-white/10 pt-16">
<span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-4 block">Qui suis-je ?</span>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10" href="#">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
                            Me suivre sur LinkedIn
                        </a>
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10" href="#">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
                            Découvrir mon Interview complète
                        </a>
</div>

<div className="aspect-video bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="mx-auto max-w-3xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">FAQ</h2>
</div>
<div className="space-y-4">
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-zinc-300">
<h3 className="font-medium text-sm">Que vais-je devoir modifier dans mon quotidien avec le système EDIGMA ?</h3>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                            L'objectif est que vous n'aillez rien à modifier et que vous ne vous occupiez que du terrain / du développement de votre entreprise. Le système est conçu et adapté à votre entreprise et votre quotidien, pour que vous n'aillez besoin que de recontacter les personnes qui sont qualifiées et intéressées par vos services.
                        </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-zinc-300">
<h3 className="font-medium text-sm">Est-ce que l'appel de découverte est sans engagement ?</h3>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                            Oui, cet appel est 100% gratuit et sans engagement. Il nous permet d'évaluer si notre système est adapté à votre entreprise de nettoyage.
                        </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-zinc-300">
<h3 className="font-medium text-sm">Puis-je entièrement vous déléguer ma prospection ?</h3>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                            Absolument. Notre système prend en charge la génération et la qualification des leads. Vous n'intervenez qu'à l'étape finale du closing.
                        </div>
</details>
<details className="group glass-panel rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-zinc-300">
<h3 className="font-medium text-sm">Comment s'applique la garantie ?</h3>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-white/5 mt-2">
                            Si le système ne génère pas au moins le double de votre investissement dans les 90 premiers jours, nous continuons de travailler gratuitement jusqu'à atteindre cet objectif.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background py-10 mt-auto">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter text-white">EDIGMA</span>
<span className="text-xs text-zinc-500">©2025 EDIGMA Agency. Tous droits réservés</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors flex items-center gap-1" href="mailto:contact@edigma-agency.fr">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    contact@edigma-agency.fr
                </a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="tel:+33768268618">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                    +33 7 68 26 86 18
                </a>
</div>
</div>
</footer>

    </>
  );
}
