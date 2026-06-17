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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                    VO
                </div>
<span className="font-semibold text-slate-900 tracking-tight">VOCALOPS</span>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white transition-colors bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#demo">
                Essayer gratuitement
            </a>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Nouvelle technologie IA vocale
                    </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Dictez. Photographiez.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">C'est généré.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Créez des rapports d'intervention professionnels en 2 minutes chrono. Depuis votre téléphone, entre deux chantiers. Juste à la voix.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center justify-center transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base font-medium text-white bg-indigo-600 h-12 rounded-full pr-8 pl-8" href="#demo">
                            Voir en action
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<p className="text-sm text-slate-400 mt-2 sm:mt-0">Démo gratuite de 15 min • Sans engagement</p>
</div>
</div>

<div className="flex-1 relative w-full flex justify-center lg:justify-end">

<div className="absolute -top-12 -right-12 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="relative w-full max-w-md h-[500px]">

<div className="absolute top-0 right-0 lg:right-4 w-64 md:w-80 h-96 bg-white rounded-xl shadow-xl border border-slate-100 p-6 rotate-3 z-10 transition-transform hover:rotate-6 duration-500">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded bg-slate-100"></div>
<div className="h-3 w-24 bg-slate-100 rounded"></div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-5/6 bg-slate-50 rounded"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-24 w-full bg-indigo-50/50 rounded border border-indigo-50 mt-4 flex items-center justify-center">
<span className="text-xs text-indigo-300">Image analysée</span>
</div>
</div>
<div className="absolute bottom-6 right-6">
<div className="h-8 w-24 bg-slate-900 rounded-md"></div>
</div>
</div>

<div className="absolute bottom-0 left-4 lg:left-0 w-64 h-[420px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl z-20 overflow-hidden flex flex-col items-center justify-between py-8">

<div className="w-full px-6 pt-4 flex-1 flex flex-col items-center justify-center">
<div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 relative">
<iconify-icon className="text-indigo-400 relative z-10" icon="lucide:mic" width="32"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-indigo-500/40 animate-ping"></div>
</div>
<div className="flex items-center gap-1 h-8">
<div className="w-1 h-3 bg-indigo-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 h-5 bg-indigo-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1 h-8 bg-indigo-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></div>
<div className="w-1 h-4 bg-indigo-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
<div className="w-1 h-2 bg-indigo-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]"></div>
</div>
<p className="text-slate-400 text-xs mt-4 text-center">Enregistrement...</p>
</div>

<div className="w-20 h-1 bg-slate-700 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="lg:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Le rapport d'intervention,<br/> ce n'est pas votre métier.
            </h2>
<p className="text-lg text-slate-600 mb-12">
                Vous et vos équipes êtes des experts sur le terrain. Mais la paperasse est un frein constant.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4 text-red-600">
<iconify-icon icon="lucide:moon" width="20"></iconify-icon>
</div>
<p className="font-medium text-slate-900 mb-2">Soirées sacrifiées</p>
<p className="text-sm text-slate-500">Vous passez vos soirées à déchiffrer des notes griffonnées sur un coin de table.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600">
<iconify-icon icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<p className="font-medium text-slate-900 mb-2">Perte de temps</p>
<p className="text-sm text-slate-500">Écrire, relire, corriger... des heures perdues qui ne sont pas sur le chantier.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-4 text-amber-600">
<iconify-icon icon="lucide:receipt" width="20"></iconify-icon>
</div>
<p className="font-medium text-slate-900 mb-2">Retards de facturation</p>
<p className="text-sm text-slate-500">Les délais administratifs s'allongent et votre trésorerie en pâtit.</p>
</div>
</div>
<div className="mt-12 inline-flex items-center gap-2 text-slate-900 font-medium bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="text-green-600" icon="lucide:check-circle-2" width="20"></iconify-icon>
                La réalité : Moins de temps administratif = Plus de temps facturable.
            </div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">On simplifie la vie de vos collaborateurs. Et la vôtre.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-indigo-600" icon="lucide:mic" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">1. Vous parlez, l'IA écrit</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Le technicien raconte son intervention comme à un collègue. L'IA structure le tout, sans fautes.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-indigo-600" icon="lucide:scan-eye" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">2. Ils photographient, l'IA analyse</h3>
<p className="leading-relaxed text-sm text-slate-500 max-w-xs">
                        Une photo de la fuite ? L'IA analyse l'image et suggère automatiquement des pistes de diagnostic.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 shadow-lg flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-indigo-600" icon="lucide:file-check" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">3. Le client reçoit un PDF pro</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Votre logo, vos coordonnées, le détail technique. Un document propre, archivé instantanément.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Ce que ça change au quotidien</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<h3 className="text-xl font-medium text-indigo-400 mb-8 flex items-center gap-3">
<iconify-icon icon="lucide:hard-hat" width="24"></iconify-icon>
                        Pour vos équipes (Terrain)
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-500 mt-1" icon="lucide:check" width="20"></iconify-icon>
<div className="">
<p className="text-slate-400 text-sm">Tout est fait sur place, avant même de redémarrer le camion.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-500 mt-1" icon="lucide:check" width="20"></iconify-icon>
<div className="">
<p className="text-slate-400 text-sm">2 minutes par rapport au lieu de 20 minutes de rédaction manuelle.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-500 mt-1" icon="lucide:check" width="20"></iconify-icon>
<div className="">
<p className="text-slate-400 text-sm">Ils parlent normalement, l'IA s'occupe de la mise en forme.</p>
</div>
</li>
</ul>
</div>

<div>
<h3 className="text-xl font-medium text-emerald-400 mb-8 flex items-center gap-3">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
                        Pour vous (Gestion)
                    </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:trending-up" width="20"></iconify-icon>
<div>
<p className="text-slate-400 text-sm">Des rapports qui partent dans les temps pour une facturation accélérée.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:star" width="20"></iconify-icon>
<div>
<p className="text-slate-400 text-sm">Des documents impeccables et standardisés pour vos clients.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-emerald-500 mt-1" icon="lucide:folder-search" width="20"></iconify-icon>
<div>
<p className="text-slate-400 text-sm">Tout est archivé, lisible et retrouvable en un clic.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Sur le terrain, ça donne quoi ?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="mb-6 text-indigo-500">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-slate-700 text-lg mb-6">"Avant, je passais mes soirées à reformuler les CR de mes gars. Maintenant, ils envoient tout depuis le camion et c'est parfait."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">T</div>
<div>
<p className="font-medium text-slate-900">Thierry</p>
<p className="text-xs text-slate-500">Gérant Plomberie (4 salariés)</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="mb-6 text-indigo-500">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-slate-700 text-lg mb-6">"J'avais un technicien qui détestait l'administratif. Depuis qu'il dicte ses rapports, il les fait systématiquement."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">N</div>
<div>
<p className="font-medium text-slate-900">Nadia</p>
<p className="text-xs text-slate-500">Responsable Maintenance</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-12 sm:py-16 text-center shadow-2xl">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 border border-indigo-500/30">
                        Offre de lancement
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Testez grandeur nature, sans risque.
                    </h2>
<p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
                        Les 3 premiers mois sont <span className="text-white font-semibold">GRATUITS</span>.
                        
                        <span className="text-sm opacity-80 mt-2 block">Partagez votre retour et obtenez +3 mois offerts. Soit 6 mois pour voir l'impact réel.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 text-base font-medium text-slate-900 bg-white w-full h-12 rounded-full pr-8 pl-8" href="https://cal.com/aurelien-priet/app-rapports">
                            Réserver ma place
                        </a>
<span className="text-slate-400 text-sm flex items-center gap-1">
<iconify-icon className="" icon="lucide:alert-circle" width="14"></iconify-icon> Places limitées
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Un prix pensé pour les artisans</h2>
<p className="text-slate-500">Pas pour les multinationales.</p>
<div className="mt-8 inline-flex bg-slate-100 p-1 rounded-full relative">
<div className="w-full absolute inset-0 flex items-center justify-center pointer-events-none">

</div>
<button className="px-6 py-2 rounded-full bg-white text-slate-900 text-sm font-medium shadow-sm z-10">Mensuel</button>
<button className="px-6 py-2 rounded-full text-slate-500 text-sm font-medium hover:text-slate-900 z-10 transition-colors">Annuel <span className="text-xs text-green-600 font-semibold ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-slate-200 bg-white">
<h3 className="text-lg font-medium text-slate-900 mb-2">Solo Artisan</h3>
<p className="text-sm text-slate-500 mb-6">Pour les indépendants</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">29€ HT</span>
<span className="text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 1 utilisateur</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 100 rapports/mois</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 5 Go de stockage</li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-50 text-slate-900 text-center rounded-lg font-medium hover:bg-slate-100 transition-colors" href="#">Choisir</a>
</div>

<div className="p-8 rounded-2xl border-2 border-indigo-600 bg-white relative shadow-xl">
<div className="-top-4 -translate-x-1/2 uppercase text-xs font-medium text-white tracking-wide bg-indigo-600 rounded-full pt-1 pr-3 pb-1 pl-3 absolute left-1/2">Le + choisi</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Équipe</h3>
<p className="text-sm text-slate-500 mb-6">Pour harmoniser les pratiques</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">79€ HT</span>
<span className="text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> </li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 500 rapports/mois</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 20 Go de stockage</li>
</ul>
<a className="block w-full py-3 px-4 bg-indigo-600 text-white text-center rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200" href="#demo">Choisir</a>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white">
<h3 className="text-lg font-medium text-slate-900 mb-2">Entreprise</h3>
<p className="text-sm text-slate-500 mb-6">Pour standardiser à grande échelle</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">149€ HT</span>
<span className="text-slate-500">/mois</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 10 utilisateurs et +</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> Rapports illimités</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="lucide:check"></iconify-icon> 60 Go de stockage</li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-50 text-slate-900 text-center rounded-lg font-medium hover:bg-slate-100 transition-colors" href="#">Nous contacter</a>
</div>
</div>
<p className="text-center text-sm text-slate-400 mt-8">Besoin de plus d'espace ? +10€/mois pour 5 Go supplémentaires.</p>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">On configure tout. Vos équipes n'ont qu'à utiliser.</h2>
</div>
<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-lg font-medium text-slate-900 mb-1">Pack Installation &amp; Personnalisation</h3>
<p className="text-2xl font-semibold text-indigo-600 mb-6">497€ HT <span className="text-sm font-normal text-slate-500">(Paiement unique)</span></p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]"><iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon></div>
                            Mise en ligne complète (domaine + hébergement)
                        </li>
<li className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]"><iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon></div>
                            Configuration de votre espace et import de votre logo
                        </li>
<li className="flex items-start gap-3">
<div className="mt-0.5 min-w-[16px]"><iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon></div>
                            Création du modèle PDF à vos couleurs
                        </li>
</ul>
</div>
<div className="w-full md:w-auto flex flex-col items-center justify-center p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
<iconify-icon className="text-indigo-600 mb-2" icon="lucide:user-check" width="32"></iconify-icon>
<span className="text-sm font-medium text-indigo-900">Interlocuteur dédié</span>
<span className="text-xs text-indigo-700">pour le lancement</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-colors">
<summary className="flex items-center justify-between font-medium text-slate-900">
                        Mes techniciens vont-ils réussir à s'en servir ?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">
                        Oui. S'ils savent envoyer un message vocal sur WhatsApp, ils savent utiliser l'application. L'interface est épurée au maximum.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-colors">
<summary className="flex items-center justify-between font-medium text-slate-900">
                        Et si certains sont réticents au changement ?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">
                        L'adoption est souvent rapide car cela supprime leur tâche la plus pénible : écrire. Une fois qu'ils voient le gain de temps (finir plus tôt), ils ne veulent plus revenir en arrière.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-colors">
<summary className="flex items-center justify-between font-medium text-slate-900">
                        Les données sont-elles sécurisées ?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">
                        Oui. Hébergement en France, données chiffrées, accès strictement limité. Nous prenons la confidentialité de vos clients très au sérieux.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-colors">
<summary className="flex items-center justify-between font-medium text-slate-900">
                        On peut personnaliser les rapports ?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">
                        Absolument. Votre logo, vos couleurs et la structure sont adaptés lors de l'installation pour que les documents reflètent parfaitement votre image.
                    </p>
</details>
<details className="group bg-slate-50 rounded-xl px-6 py-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer hover:bg-slate-100 transition-colors">
<summary className="flex items-center justify-between font-medium text-slate-900">
                        Je peux annuler quand je veux ?
                        <iconify-icon className="text-slate-400 transition group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">
                        Oui. Sans engagement et sans frais cachés. Vous restez maître de votre abonnement.
                    </p>
</details>
</div>
</div>
</section>

<footer className="text-white bg-slate-900 pt-24 pb-12" id="demo">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Envie de voir ce que ça donne avec vos équipes ?</h2>
<p className="text-slate-400 text-lg mb-12">15 minutes de démo. On vous montre l'outil en situation réelle, avec un cas concret de votre métier.</p>
<a className="inline-flex items-center justify-center transition-all hover:bg-indigo-500 hover:scale-105 shadow-indigo-900/50 text-lg font-medium text-white bg-indigo-600 h-14 rounded-full mb-16 pr-8 pl-8 shadow-xl" href="https://cal.com/aurelien-priet/app-rapports">
                Je réserve mon créneau
                <iconify-icon className="ml-3" icon="lucide:calendar-days" width="20"></iconify-icon>
</a>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-slate-900 font-bold text-xs">VO</div>
<span className="font-semibold text-white">VOCALOPS</span>
</div>
<p>© 2023 VocalOps. Tous droits réservés.</p>
</div>
</div>
</footer>

    </>
  );
}
