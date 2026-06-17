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



                        // Pour condenser le code HTML tout en respectant l'ajout massif de composants répétitifs
                        const partis = [
                            { name: "Renaissance", init: "REN", color: "orange", pub: 58, dons: 32 },
                            { name: "Rassemblement National", init: "RN", color: "indigo", pub: 75, dons: 15 },
                            { name: "La France Insoumise", init: "LFI", color: "red", pub: 60, dons: 40 },
                            { name: "Les Républicains", init: "LR", color: "blue", pub: 65, dons: 25 },
                            { name: "Ensemble pour la République", init: "ENS", color: "amber", pub: 50, dons: 40 },
                            { name: "Les Écologistes", init: "LE", color: "emerald", pub: 55, dons: 35 },
                            { name: "Horizons", init: "HOR", color: "cyan", pub: 40, dons: 50 },
                            { name: "Parti communiste français", init: "PCF", color: "rose", pub: 45, dons: 20 },
                            { name: "UDR", init: "UDR", color: "blue", pub: 30, dons: 60 },
                            { name: "Utiles", init: "UTL", color: "zinc", pub: 20, dons: 70 },
                            { name: "Parti socialiste", init: "PS", color: "pink", pub: 70, dons: 20 }
                        ];

                        document.write(partis.map(p => `
                            <div class="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col hover:border-indigo-300 transition-all">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 class="text-base tracking-tight font-semibold text-zinc-900">${p.name}</h3>
                                        <a href="#" class="text-[11px] text-indigo-600 hover:text-indigo-700 mt-0.5 inline-block font-medium">Voir la page du parti</a>
                                    </div>
                                    <div class="w-10 h-10 rounded-lg bg-${p.color}-50 text-${p.color}-600 flex items-center justify-center font-semibold text-xs border border-${p.color}-100">${p.init}</div>
                                </div>
                                
                                <div class="space-y-4 mb-5 flex-1">
                                    <div>
                                        <p class="text-[11px] text-zinc-500 mb-1.5 flex items-center gap-1"><iconify-icon icon="solar:wallet-linear"></iconify-icon> Financement CNCCFP</p>
                                        <div class="flex h-1.5 rounded-full overflow-hidden mb-1.5 bg-zinc-100">
                                            <div class="bg-indigo-500" style="width: ${p.pub}%"></div>
                                            <div class="bg-sky-400" style="width: ${p.dons}%"></div>
                                            <div class="bg-amber-400" style="width: ${100 - p.pub - p.dons}%"></div>
                                        </div>
                                        <div class="flex justify-between text-[10px] text-zinc-600">
                                            <span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-indigo-500"></span>Public</span>
                                            <span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-sky-400"></span>Dons</span>
                                            <span class="flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-amber-400"></span>Cotis.</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="pt-4 border-t border-zinc-100 flex items-center gap-2">
                                    <button class="p-2 border border-zinc-200 text-zinc-400 rounded-lg hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-colors" title="Suivre">
                                        <iconify-icon icon="solar:star-linear" class="text-lg"></iconify-icon>
                                    </button>
                                    <button class="flex-1 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors">Rejoindre</button>
                                </div>
                            </div>
                        `).join(''));
                    


        function switchTab(tabId) {
            // Cacher toutes les sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('block');
            });
            // Afficher la section demandée
            document.getElementById('section-' + tabId).classList.remove('hidden');
            document.getElementById('section-' + tabId).classList.add('block');

            // Réinitialiser les liens de navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('bg-indigo-50/80', 'text-indigo-700');
                link.classList.add('text-zinc-600', 'hover:bg-zinc-100/50', 'hover:text-zinc-900');
            });
            
            // Activer le lien cliqué
            let activeLink = document.getElementById('nav-' + tabId);
            if(activeLink) {
                activeLink.classList.remove('text-zinc-600', 'hover:bg-zinc-100/50', 'hover:text-zinc-900');
                activeLink.classList.add('bg-indigo-50/80', 'text-indigo-700');
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
      

<nav className="h-16 border-b border-zinc-200/80 bg-white/70 backdrop-blur-md flex items-center justify-between px-4 md:px-6 z-50 flex-shrink-0 sticky top-0 shadow-sm">
<div className="flex items-center gap-6 xl:gap-10 overflow-hidden">

<div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onclick="switchTab('actualite')">
<div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
<iconify-icon className="text-white text-lg" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="hidden md:block text-xl tracking-tighter font-semibold text-zinc-900">AGORA</span>
</div>

<div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 -mb-1">
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50/80 text-indigo-700 font-medium text-sm transition-colors whitespace-nowrap" id="nav-actualite" onclick="switchTab('actualite')">
<iconify-icon className="text-lg" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Actualité</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100/50 hover:text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap" id="nav-elus" onclick="switchTab('elus')">
<iconify-icon className="text-lg" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Élus</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100/50 hover:text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap" id="nav-partis" onclick="switchTab('partis')">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Partis Politiques</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100/50 hover:text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap" id="nav-petitions" onclick="switchTab('petitions')">
<iconify-icon className="text-lg" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Pétitions</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100/50 hover:text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap" id="nav-medias" onclick="switchTab('medias')">
<iconify-icon className="text-lg" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden lg:block">Médias</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100/50 hover:text-zinc-900 font-medium text-sm transition-colors whitespace-nowrap" id="nav-journalistes" onclick="switchTab('journalistes')">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden xl:block">Journalistes</span>
</button>
</div>
</div>

<div className="flex items-center gap-4 flex-shrink-0 pl-2">
<div className="relative hidden md:flex items-center group w-48 lg:w-64">
<iconify-icon className="absolute left-3 text-zinc-400 text-lg group-focus-within:text-indigo-500 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 bg-zinc-100/50 hover:bg-zinc-100 focus:bg-white border border-transparent focus:border-zinc-200 rounded-full text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" placeholder="Rechercher..." type="text"/>
</div>
<div className="h-6 w-px bg-zinc-200 hidden md:block"></div>
<button className="flex items-center gap-2 rounded-full hover:bg-zinc-100/50 transition-colors group">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-indigo-700 group-hover:bg-indigo-200 transition-colors border border-indigo-200/50">
                    JD
                </div>
</button>
</div>
</nav>

<div className="flex-1 flex overflow-hidden relative">
<main className="flex-1 overflow-y-auto no-scrollbar bg-white scroll-smooth pb-24">

<section className="page-section block" id="section-actualite">
<div className="px-4 md:px-6 pt-6 pb-2 border-b border-zinc-100 bg-zinc-50/30">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Fil d'actualité</h1>
<p className="text-xs text-zinc-500 mt-1">Lois, pétitions, et suivi de vos élus</p>
</div>
<div className="p-4 md:p-6 flex flex-col gap-4 max-w-4xl">

<article className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-zinc-900">Législation</span>
<span className="text-xs text-zinc-500">• Proposition de loi</span>
</div>
<span className="text-xs text-zinc-400">Il y a 3h</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mt-1">Loi Yadan</h3>
</div>
</div>
<p className="text-sm text-zinc-700 mb-4 leading-relaxed">
                            Proposition de loi visant à pénaliser les propos contestant l'existence de l'État d'Israël. Le texte propose d'assimiler certaines formes d'antisionisme à de l'antisémitisme dans le code pénal. Débats en cours à l'Assemblée.
                        </p>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 border-t border-zinc-100 pt-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:info-circle-linear"></iconify-icon> Statut : En discussion</span>
<button className="px-3 py-1.5 bg-zinc-100 text-zinc-700 rounded-lg hover:bg-zinc-200 transition-colors" onclick="switchTab('petitions')">Voir les pétitions liées</button>
</div>
</article>

<article className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-xl text-zinc-500" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-zinc-900">Information Élu</span>
<span className="text-xs text-zinc-500">• Activité Parlementaire</span>
</div>
<span className="text-xs text-zinc-400">Hier</span>
</div>
<p className="text-xs text-zinc-500">Sébastien Delogu (LFI)</p>
</div>
</div>
<p className="text-sm text-zinc-700 mb-4 leading-relaxed">
                            Intervention remarquée concernant le financement des services publics en commission des finances. Le député a déposé 3 nouveaux amendements visant à réallouer des budgets vers les infrastructures des quartiers prioritaires.
                        </p>
</article>

<article className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 hover:border-rose-300 transition-colors group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-zinc-900">Nouvelle Pétition</span>
<span className="text-xs text-zinc-500">• Médias &amp; ARCOM</span>
</div>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mt-1">Suppression de la chaîne d'information CNews</h3>
</div>
</div>
<p className="text-sm text-zinc-700 mb-4 leading-relaxed">
                            Demande de non-renouvellement de l'agrément de diffusion de la chaîne par l'ARCOM, invoquant des manquements répétés aux obligations de pluralisme et de rigueur de l'information.
                        </p>
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 border-t border-rose-100/50 pt-3">
<span className="text-rose-600 font-semibold">Tendance en hausse</span>
<button className="px-4 py-1.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors" onclick="switchTab('petitions')">Signer la pétition</button>
</div>
</article>

<article className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold text-zinc-900">Pétition Citoyenne</span>
</div>
<span className="text-xs text-zinc-400">En cours</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mt-1">Sauvegarde du patrimoine forestier national</h3>
</div>
</div>
<p className="text-sm text-zinc-700 mb-4 leading-relaxed">
                            Nous demandons l'arrêt immédiat des coupes rases dans les forêts domaniales et une transition vers une sylviculture douce, respectueuse de la biodiversité.
                        </p>
<div className="w-full bg-zinc-50 border border-zinc-100 rounded-lg p-3 mb-4">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-900">184 200 signatures</span>
<span className="text-zinc-500">Objectif: 200 000</span>
</div>
<div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</article>
</div>
</section>

<section className="page-section hidden" id="section-elus">
<div className="px-4 md:px-6 pt-6 pb-6 border-b border-zinc-100">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Trombinoscope des Élus</h1>
<p className="text-xs text-zinc-500 mt-1">Transparence, déclarations HATVP et activités judiciaires &amp; législatives</p>
</div>
<div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">


<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Éric Zemmour</h3>
<p className="text-xs text-zinc-500">Reconquête! • Ancien candidat</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (Déclaré)</span>
<p className="text-xs font-medium text-zinc-900">~4,2 Millions €</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Non parlementaire</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-red-600">Condamnations:</span> <span>Plusieurs (Provocation à la haine)</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-amber-600">Procédures en cours:</span> <span>En cours (Appels divers)</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2021 : Fondation Reconquête!</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2019-2021 : Éditorialiste (CNews)</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Sarah Knafo</h3>
<p className="text-xs text-zinc-500">Reconquête! • Eurodéputée</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">Enregistré</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Mandat récent</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Condamnations:</span> <span>Aucune publique</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Procédures en cours:</span> <span>Aucune</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2024 : Élue Eurodéputée</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2020 : Magistrate Cour des comptes</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Jordan Bardella</h3>
<p className="text-xs text-zinc-500">RN • Eurodéputé / Président Parti</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">Enregistré</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Votes Parlement UE</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Condamnations:</span> <span>Aucune</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Procédures en cours:</span> <span>Aucune</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2022 : Président du RN</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2019 : Élu Eurodéputé</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Marine Le Pen</h3>
<p className="text-xs text-zinc-500">RN • Députée</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">~1,2 Millions €</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Présidente de groupe</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-red-600">Condamnations:</span> <span>Oui (Diffamation, etc.)</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-amber-600">Procédures en cours:</span> <span>Assistants Parlementaires UE</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2017/2022 : Candidate Présidentielle</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">1998 : Avocate / Service Juridique FN</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Alma Dufour</h3>
<p className="text-xs text-zinc-500">LFI • Députée</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">Enregistré</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Commission Écologie</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Condamnations:</span> <span>Aucune pénale lourde</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Procédures en cours:</span> <span>Liées au militantisme</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2022 : Élue Députée (NUPES/LFI)</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2017-2021 : Militante Les Amis de la Terre</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Sébastien Delogu</h3>
<p className="text-xs text-zinc-500">LFI • Député</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">Enregistré</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Multiples interventions</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Condamnations:</span> <span>Aucune (Sanctions AN)</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Procédures en cours:</span> <span>Aucune</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2022 : Élu Député (BDR)</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2017 : Militant LFI / Chauffeur</li>
</ul>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4 shadow-sm hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden"><iconify-icon className="text-2xl" icon="solar:user-bold"></iconify-icon></div>
<div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900">Raphaël Glucksmann</h3>
<p className="text-xs text-zinc-500">Place Publique (PS) • Eurodéputé</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Patrimoine (HATVP)</span>
<p className="text-xs font-medium text-zinc-900">Enregistré</p>
</div>
<div>
<span className="block text-[10px] uppercase text-zinc-500 font-semibold mb-0.5">Lois (Activité)</span>
<p className="text-xs font-medium text-zinc-900">Rapports UE (Ingérences)</p>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Justice &amp; Transparence</span>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Condamnations:</span> <span>Aucune</span></p>
<p className="text-xs text-zinc-700 flex justify-between"><span className="font-medium text-zinc-900">Procédures en cours:</span> <span>Aucune</span></p>
</div>
<div className="flex flex-col gap-2 mt-auto">
<span className="text-xs font-semibold text-zinc-900 border-b border-zinc-100 pb-1">Curriculum Vitae</span>
<ul className="text-[11px] text-zinc-600 space-y-1.5 relative pl-3 border-l border-zinc-200 ml-1">
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2019/2024 : Élu Eurodéputé</li>
<li className="relative before:absolute before:w-1.5 before:h-1.5 before:bg-zinc-300 before:rounded-full before:-left-[15px] before:top-1">2018 : Fondation Place Publique</li>
</ul>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="section-partis">
<div className="px-4 md:px-6 pt-6 pb-6 border-b border-zinc-100">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Partis Politiques</h1>
<p className="text-xs text-zinc-500 mt-1">Tous les partis représentés, leurs élus et financements</p>
</div>
<div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">



</div>
</section>

<section className="page-section hidden" id="section-petitions">
<div className="px-4 md:px-6 pt-6 pb-6 border-b border-zinc-100">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Pétitions et Initiatives Législatives</h1>
<p className="text-xs text-zinc-500 mt-1">Découvrez, soutenez ou opposez-vous aux textes en cours</p>
</div>
<div className="p-4 md:p-6 flex flex-col gap-4 max-w-4xl">

<div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold uppercase tracking-wider">Proposition de Loi</span>
<span className="text-xs text-zinc-500">Déposée à l'Assemblée</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Loi Yadan (Pénalisation de l'antisionisme)</h3>
<p className="text-sm text-zinc-700 mb-4">
                            Texte visant à créer de nouvelles sanctions pénales assimilant la contestation de l'existence de l'État d'Israël à de l'antisémitisme. Cette proposition suscite des pétitions de soutien et d'opposition concernant la liberté d'expression.
                        </p>
<div className="flex gap-3">
<button className="flex-1 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-medium hover:bg-emerald-100 transition-colors">Soutenir le texte</button>
<button className="flex-1 py-2 bg-rose-50 text-rose-700 border border-rose-200 rounded-lg text-xs font-medium hover:bg-rose-100 transition-colors">S'y opposer</button>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded bg-rose-50 text-rose-700 text-[10px] font-semibold uppercase tracking-wider">Pétition Citoyenne</span>
<span className="text-xs text-zinc-500">Destinée à l'ARCOM</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Suppression de la chaîne d'information CNews</h3>
<p className="text-sm text-zinc-700 mb-4">
                            Demande massive de citoyens et d'associations pour le non-renouvellement de l'agrément de la fréquence TNT de la chaîne CNews, suite aux multiples mises en demeure et amendes de l'ARCOM pour manquements à l'indépendance de l'information.
                        </p>
<div className="flex items-center justify-between mt-2 pt-4 border-t border-zinc-100">
<div className="text-xs text-zinc-500"><span className="font-semibold text-zinc-900">En forte croissance</span> (Objectif : 100k)</div>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors">Signer la pétition</button>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-indigo-200 transition-colors group">
<div className="flex items-center justify-between mb-3">
<span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider">Pétition Citoyenne</span>
<span className="text-xs text-zinc-500">Destinée au Ministère de l'Écologie</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Sauvegarde du patrimoine forestier national</h3>
<p className="text-sm text-zinc-700 mb-4">
                            Nous demandons l'arrêt immédiat des coupes rases dans les forêts domaniales et une transition vers une sylviculture douce, respectueuse de la biodiversité.
                        </p>
<div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 pt-2">
<div className="text-xs text-zinc-500"><span className="font-semibold text-zinc-900">184 200 signatures</span> / 200 000</div>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors">Signer la pétition</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="section-medias">
<div className="px-4 md:px-6 pt-6 pb-6 border-b border-zinc-100">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Observatoire des Médias</h1>
<p className="text-xs text-zinc-500 mt-1">Données factuelles, ARCOM et historique financier</p>
</div>
<div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col h-full hover:border-indigo-200 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">TF1</div>
<div>
<h3 className="font-semibold text-zinc-900 text-sm">Groupe TF1</h3>
<p className="text-[10px] text-zinc-500">Bouygues • Généraliste</p>
</div>
</div>
<div className="mt-auto pt-3 border-t border-zinc-100">
<p className="text-[11px] text-zinc-500 mb-1">Condamnations ARCOM cumulées</p>
<p className="text-base font-semibold text-zinc-900">45 000 € <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-1">Faible</span></p>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col h-full hover:border-indigo-200 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded bg-sky-500 text-white flex items-center justify-center font-bold text-xs">BFM</div>
<div>
<h3 className="font-semibold text-zinc-900 text-sm">BFMTV</h3>
<p className="text-[10px] text-zinc-500">CMA CGM • Info en continu</p>
</div>
</div>
<div className="mt-auto pt-3 border-t border-zinc-100">
<p className="text-[11px] text-zinc-500 mb-1">Condamnations ARCOM cumulées</p>
<p className="text-base font-semibold text-zinc-900">280 000 € <span className="text-[10px] font-normal text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded ml-1">Modéré</span></p>
</div>
</div>

<div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col h-full hover:border-indigo-200 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">CNews</div>
<div>
<h3 className="font-semibold text-zinc-900 text-sm">CNews</h3>
<p className="text-[10px] text-zinc-500">Groupe Canal+ (Bolloré) • Info et Débats</p>
</div>
</div>
<div className="mt-auto pt-3 border-t border-zinc-100">
<p className="text-[11px] text-zinc-500 mb-1">Condamnations ARCOM cumulées</p>
<p className="text-base font-semibold text-zinc-900">~ 1 300 000 € <span className="text-[10px] font-normal text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded ml-1">Élevé</span></p>
</div>
</div>
</div>
</section>

<section className="page-section hidden" id="section-journalistes">
<div className="px-4 md:px-6 pt-6 pb-6 border-b border-zinc-100">
<h1 className="text-2xl tracking-tight font-semibold text-zinc-900">Journalistes et Éditorialistes</h1>
<p className="text-xs text-zinc-500 mt-1">Trombinoscope et affiliations médiatiques</p>
</div>
<div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="bg-white border border-zinc-200 rounded-xl p-4 text-center hover:border-indigo-300 transition-colors">
<div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 mb-3 flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:microphone-3-bold"></iconify-icon></div>
<h3 className="text-sm font-semibold text-zinc-900">Léa Salamé</h3>
<p className="text-[11px] text-zinc-500 mt-1">France Inter / France 2</p>
<span className="inline-block mt-3 px-2 py-1 bg-zinc-50 border border-zinc-100 text-[10px] rounded text-zinc-600">Interviews Politiques</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 text-center hover:border-indigo-300 transition-colors">
<div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 mb-3 flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:microphone-3-bold"></iconify-icon></div>
<h3 className="text-sm font-semibold text-zinc-900">Pascal Praud</h3>
<p className="text-[11px] text-zinc-500 mt-1">CNews / Europe 1</p>
<span className="inline-block mt-3 px-2 py-1 bg-zinc-50 border border-zinc-100 text-[10px] rounded text-zinc-600">Débats / Édito</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 text-center hover:border-indigo-300 transition-colors">
<div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 mb-3 flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:microphone-3-bold"></iconify-icon></div>
<h3 className="text-sm font-semibold text-zinc-900">Apolline de Malherbe</h3>
<p className="text-[11px] text-zinc-500 mt-1">BFMTV / RMC</p>
<span className="inline-block mt-3 px-2 py-1 bg-zinc-50 border border-zinc-100 text-[10px] rounded text-zinc-600">Matinales / Politique</span>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-4 text-center hover:border-indigo-300 transition-colors">
<div className="w-16 h-16 mx-auto rounded-full bg-zinc-100 mb-3 flex items-center justify-center text-zinc-400"><iconify-icon className="text-2xl" icon="solar:microphone-3-bold"></iconify-icon></div>
<h3 className="text-sm font-semibold text-zinc-900">Élise Lucet</h3>
<p className="text-[11px] text-zinc-500 mt-1">France 2</p>
<span className="inline-block mt-3 px-2 py-1 bg-zinc-50 border border-zinc-100 text-[10px] rounded text-zinc-600">Investigation</span>
</div>
</div>
</section>
</main>

<aside className="hidden lg:flex w-80 bg-zinc-50/50 border-l border-zinc-200 flex-col flex-shrink-0 p-6 overflow-y-auto no-scrollbar">
<div className="bg-white rounded-xl border border-zinc-200 p-5 mb-6 shadow-sm shadow-zinc-100/50">
<h3 className="text-sm font-semibold text-zinc-900 mb-4 tracking-tight">Sujets à la Une</h3>
<div className="flex flex-col gap-4">
<a className="group flex flex-col gap-1" href="#" onclick="switchTab('petitions')">
<span className="text-xs font-medium text-rose-500 group-hover:text-rose-600 transition-colors">Pétition active</span>
<span className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Suppression de CNews</span>
<span className="text-xs text-zinc-400">Croissance forte</span>
</a>
<a className="group flex flex-col gap-1" href="#" onclick="switchTab('petitions')">
<span className="text-xs font-medium text-blue-500 group-hover:text-blue-600 transition-colors">Législatif</span>
<span className="text-sm font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Loi Yadan à l'étude</span>
<span className="text-xs text-zinc-400">Débats sous tension</span>
</a>
</div>
</div>
<div className="bg-indigo-950 text-white rounded-xl p-5 relative overflow-hidden shadow-md shadow-indigo-900/10">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-500 rounded-full opacity-40 blur-2xl"></div>
<h3 className="text-sm font-semibold mb-1 relative z-10 flex items-center gap-2">
                    Élections 2027
                    <span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
</h3>
<p className="text-xs text-indigo-200 mb-4 relative z-10">Bientôt la campagne</p>
<button className="block w-full py-2 bg-white text-indigo-900 text-center text-xs font-semibold rounded-lg hover:bg-indigo-50 transition-colors relative z-10 shadow-sm" onclick="switchTab('partis')">
                    Voir les partis
                </button>
</div>
</aside>
</div>



    </>
  );
}
