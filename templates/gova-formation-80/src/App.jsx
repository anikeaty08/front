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
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
}
}
}
}



        // --- 1. MOCK DATA ---
        const formationData = {
            modules: [
                {
                    id: 1,
                    title: "Les fondamentaux du marché",
                    level: "Débutant",
                    levelColor: "emerald",
                    duration: "45 min",
                    summary: "Comprendre la cote, les tendances et comment repérer une voiture sous-cotée en moins de 5 minutes.",
                    completed: true
                },
                {
                    id: 2,
                    title: "Sourcing : Où chasser ?",
                    level: "Débutant",
                    levelColor: "emerald",
                    duration: "1h 10",
                    summary: "LeBonCoin, Marketplace, Enchères. Configurer ses alertes pour être le premier sur le coup.",
                    completed: true
                },
                {
                    id: 3,
                    title: "L'inspection mécanique express",
                    level: "Intermédiaire",
                    levelColor: "amber",
                    duration: "55 min",
                    summary: "Checklist en 20 points pour éliminer les merguez sans être mécanicien. Bruits, fumées, historique.",
                    completed: true
                },
                {
                    id: 4,
                    title: "Négociation d'achat",
                    level: "Intermédiaire",
                    levelColor: "amber",
                    duration: "40 min",
                    summary: "Les scripts exacts pour faire baisser le prix au téléphone et devant le véhicule.",
                    completed: false
                },
                {
                    id: 5,
                    title: "Administratif & Carte Grise",
                    level: "Débutant",
                    levelColor: "emerald",
                    duration: "30 min",
                    summary: "Gérer la paperasse : certificat de cession, non-gage, ANTS. Éviter les pièges administratifs.",
                    completed: false
                },
                {
                    id: 6,
                    title: "La préparation esthétique (Detailing)",
                    level: "Intermédiaire",
                    levelColor: "amber",
                    duration: "1h 30",
                    summary: "Comment 50€ de produits de nettoyage peuvent augmenter la valeur perçue de 500€.",
                    completed: false
                },
                {
                    id: 7,
                    title: "Photos & Annonce parfaite",
                    level: "Intermédiaire",
                    levelColor: "amber",
                    duration: "50 min",
                    summary: "Cadrage, lumière, description. Le copywriting appliqué à la vente auto.",
                    completed: false
                },
                {
                    id: 8,
                    title: "Gestion des appels acheteurs",
                    level: "Avancé",
                    levelColor: "rose",
                    duration: "45 min",
                    summary: "Filtrer les curieux, verrouiller un RDV, créer un sentiment d'urgence.",
                    completed: false
                },
                {
                    id: 9,
                    title: "Closing & Vente",
                    level: "Avancé",
                    levelColor: "rose",
                    duration: "40 min",
                    summary: "L'essai routier, la négociation finale, le paiement sécurisé (chèque de banque, virement instantané).",
                    completed: false
                },
                {
                    id: 10,
                    title: "Fiscalité & Passage en Pro",
                    level: "Expert",
                    levelColor: "violet",
                    duration: "1h 00",
                    summary: "Quand passer en société ? TVA sur marge vs TVA totale. Structuration juridique.",
                    completed: false
                }
            ],
            moduleContent: {
                title: "Négociation d'achat",
                intro: "L'argent se gagne à l'achat, pas à la revente. Apprenez à déconstruire le prix du vendeur avec méthode et froideur.",
                sections: [
                    {
                        title: "La psychologie du vendeur",
                        content: "<p class='text-zinc-400 mb-4'>La plupart des vendeurs particuliers veulent trois choses : rapidité, sécurité, et simplicité. Le prix n'est souvent que le 4ème critère.</p><p class='text-zinc-400'>Votre rôle n'est pas de dénigrer la voiture, mais de rassurer le vendeur sur la transaction tout en justifiant logiquement votre offre.</p>"
                    },
                    {
                        title: "Les 3 leviers de négociation",
                        content: `
                            <ul class='space-y-4 mb-6'>
                                <li class='flex gap-3 text-zinc-400'><span class='text-white font-medium min-w-[80px]'>1. Défauts</span> Liste factuelle des frais à prévoir (pneus, distribution, carrosserie).</li>
                                <li class='flex gap-3 text-zinc-400'><span class='text-white font-medium min-w-[80px]'>2. Marché</span> Comparaison avec des annonces similaires moins chères.</li>
                                <li class='flex gap-3 text-zinc-400'><span class='text-white font-medium min-w-[80px]'>3. Immédiateté</span> \"Je vous la prends tout de suite, sans contrôle technique, paiement instantané.\"</li>
                            </ul>
                            <div class='p-4 border-l-2 border-emerald-500 bg-emerald-500/5 rounded-r my-6'>
                                <h4 class='text-emerald-400 font-medium text-xs uppercase tracking-wide mb-1'>Conseil Pro</h4>
                                <p class='text-zinc-300 text-sm'>N'arrondissez jamais vos offres. Au lieu de proposer 4000€, proposez 4150€. Cela donne l'impression d'un calcul précis basé sur des frais réels.</p>
                            </div>
                        `
                    },
                    {
                        title: "Erreurs à ne pas commettre",
                        content: `
                            <div class='p-4 border border-red-900/50 bg-red-900/10 rounded my-6'>
                                <h4 class='text-red-400 font-medium text-xs uppercase tracking-wide mb-2 flex items-center gap-2'><span class="iconify" data-icon="lucide:alert-triangle" data-width="14"></span> Danger</h4>
                                <p class='text-zinc-300 text-sm mb-2'>Ne négociez pas agressivement au téléphone si vous n'êtes pas sûr d'y aller. Cela braque le vendeur avant même la rencontre.</p>
                                <p class='text-zinc-300 text-sm'>Ne dites jamais \"C'est trop cher\". Dites \"Mon budget ne me permet pas d'aller au-delà de X car je dois prévoir Y et Z\".</p>
                            </div>
                        `
                    }
                ]
            },
            cases: [
                { id: 101, title: "Renault Clio IV dCi", level: "Débutant", budget: "4 500 €", margin: "850 €", duration: "4j" },
                { id: 102, title: "Audi A3 S-Line", level: "Intermédiaire", budget: "12 500 €", margin: "1 950 €", duration: "8j" },
                { id: 103, title: "BMW Série 1 (F20)", level: "Intermédiaire", budget: "14 000 €", margin: "1 200 €", duration: "12j" },
                { id: 104, title: "Peugeot 3008 GT", level: "Avancé", budget: "19 000 €", margin: "2 400 €", duration: "15j" },
                { id: 105, title: "Mini Cooper S", level: "Intermédiaire", budget: "9 000 €", margin: "1 100 €", duration: "6j" },
                { id: 106, title: "VW Golf 7 GTI", level: "Expert", budget: "22 000 €", margin: "3 100 €", duration: "21j" },
                { id: 107, title: "Fiat 500 Lounge", level: "Débutant", budget: "5 500 €", margin: "900 €", duration: "3j" },
                { id: 108, title: "Mercedes Classe A", level: "Avancé", budget: "18 500 €", margin: "1 800 €", duration: "10j" }
            ],
            caseDetail: {
                title: "Audi A3 S-Line 2018",
                context: "Véhicule repéré sur Marketplace un mardi soir à 23h. Annonce avec 2 photos floues, description succincte : 'Vend Audi A3 propre'. Le prix était affiché à 13 000€, soit environ 2000€ sous la cote moyenne pour ce kilométrage (110 000km).",
                strategy: "L'objectif était de jouer sur la rapidité. Appel le lendemain 8h00. Le vendeur a besoin d'argent pour un apport immobilier urgent. Le véhicule est sain mais sale, avec 2 pneus à changer et une révision à faire. Négociation axée sur les consommables à remplacer immédiatement.",
                lessons: [
                    "<li class='text-zinc-400 text-sm pl-4 border-l border-zinc-700'>Les pires annonces cachent souvent les meilleures affaires (vendeurs pressés ou peu soigneux sur la forme).</li>",
                    "<li class='text-zinc-400 text-sm pl-4 border-l border-zinc-700'>Le carnet d'entretien incomplet a été utilisé comme levier de négociation (-500€), alors que l'historique était vérifiable via le VIN.</li>"
                ],
                buy: "12 500 €",
                fees: "- 450 €",
                sell: "14 900 €",
                duration: "8 jours",
                margin: "+ 1 950 €",
                roi: "15.6%"
            }
        };

        // --- 2. RENDER FUNCTIONS ---
        
        // Helper: Level Colors
        const getColors = (color) => {
            const map = {
                'emerald': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
                'amber': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
                'rose': 'bg-rose-500/10 text-rose-500 border-rose-500/20',
                'violet': 'bg-violet-500/10 text-violet-500 border-violet-500/20',
            };
            return map[color] || map['emerald'];
        }

        // Render Modules Grid
        function renderModules(limit = null) {
            const container = limit ? document.getElementById('continue-learning-container') : document.getElementById('modules-grid');
            container.innerHTML = '';
            
            const data = limit ? [formationData.modules.find(m => !m.completed)] : formationData.modules;
            
            data.forEach(m => {
                if(!m) return;
                const card = document.createElement('div');
                card.className = `group relative p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all cursor-pointer hover:border-zinc-700`;
                card.onclick = () => router.navigate('module-detail', m.id);
                
                const statusIcon = m.completed 
                    ? '<span class="text-emerald-500"><span class="iconify" data-icon="lucide:check-circle-2" data-width="18"></span></span>'
                    : '<span class="text-zinc-600 group-hover:text-zinc-400"><span class="iconify" data-icon="lucide:circle" data-width="18"></span></span>';

                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-2 py-1 rounded text-[10px] font-medium tracking-wide uppercase border ${getColors(m.levelColor)}">${m.level}</span>
                        ${statusIcon}
                    </div>
                    <h3 class="text-lg font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">${m.title}</h3>
                    <p class="text-sm text-zinc-500 line-clamp-2 mb-4">${m.summary}</p>
                    <div class="flex items-center text-xs text-zinc-600 font-medium">
                        <span class="iconify mr-1.5" data-icon="lucide:clock" data-width="14"></span> ${m.duration}
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Render Cases Grid
        function renderCases() {
            const container = document.getElementById('cases-grid');
            container.innerHTML = '';
            formationData.cases.forEach(c => {
                const card = document.createElement('div');
                card.className = 'group p-5 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-600 transition-all cursor-pointer flex flex-col justify-between h-48';
                card.onclick = () => router.navigate('case-detail', c.id);
                
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-3">
                            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">${c.level}</span>
                            <span class="text-xs font-mono text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">${c.duration}</span>
                        </div>
                        <h3 class="text-base font-medium text-white group-hover:text-indigo-400 transition-colors">${c.title}</h3>
                    </div>
                    <div class="border-t border-zinc-800 pt-3 mt-2 grid grid-cols-2 gap-2">
                        <div>
                            <div class="text-[10px] text-zinc-500">Budget</div>
                            <div class="text-sm font-medium text-zinc-300">${c.budget}</div>
                        </div>
                        <div class="text-right">
                            <div class="text-[10px] text-zinc-500">Marge</div>
                            <div class="text-sm font-semibold text-emerald-400">${c.margin}</div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Render Module Detail
        function renderModuleDetail(id) {
            const m = formationData.modules.find(mod => mod.id == id) || formationData.modules[3]; // Default fallback
            const content = formationData.moduleContent;

            document.getElementById('module-title').innerText = m.title;
            document.getElementById('module-desc').innerText = content.intro;
            
            const badge = document.getElementById('module-badge');
            badge.innerText = m.level;
            badge.className = `px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase border ${getColors(m.levelColor)}`;
            
            document.getElementById('module-duration').innerHTML = `<span class="iconify" data-icon="lucide:clock" data-width="12"></span> ${m.duration}`;

            // Body
            const bodyContainer = document.getElementById('module-content-body');
            bodyContainer.innerHTML = '';
            
            // TOC
            const tocContainer = document.getElementById('module-toc');
            tocContainer.innerHTML = '';

            content.sections.forEach((sec, idx) => {
                // Add to Body
                const sectionHtml = `
                    <div id="sec-${idx}" class="mb-10 scroll-mt-24">
                        <h2 class="text-xl font-medium text-white mb-4">${sec.title}</h2>
                        <div class="text-base leading-relaxed text-zinc-300 font-light">
                            ${sec.content}
                        </div>
                    </div>
                `;
                bodyContainer.insertAdjacentHTML('beforeend', sectionHtml);

                // Add to TOC
                const li = document.createElement('li');
                li.innerHTML = `<a href="#sec-${idx}" class="text-xs text-zinc-400 hover:text-white transition-colors block pl-4 py-1 border-l-2 border-transparent hover:border-zinc-600">${sec.title}</a>`;
                tocContainer.appendChild(li);
            });
        }

        // Render Case Detail
        function renderCaseDetail() {
            const c = formationData.caseDetail;
            document.getElementById('case-title-detail').innerText = c.title;
            document.getElementById('case-context').innerText = c.context;
            document.getElementById('case-strategy').innerText = c.strategy;
            document.getElementById('case-lessons').innerHTML = c.lessons.join('');
            
            document.getElementById('case-price-buy').innerText = c.buy;
            document.getElementById('case-fees').innerText = c.fees;
            document.getElementById('case-price-sell').innerText = c.sell;
            document.getElementById('case-duration').innerText = c.duration;
            document.getElementById('case-margin').innerText = c.margin;
            document.getElementById('case-roi').innerText = c.roi;
        }

        // --- 3. ROUTER LOGIC ---
        const router = {
            current: 'overview',
            navigate: function(view, id = null) {
                // Hide all pages
                ['page-overview', 'page-modules', 'page-module-detail', 'page-cases', 'page-case-detail'].forEach(p => {
                    document.getElementById(p).classList.add('hidden');
                });

                // Update Breadcrumbs & Active Nav
                this.updateUI(view, id);
                document.getElementById('main-scroll').scrollTop = 0;

                // Show target
                switch(view) {
                    case 'overview':
                        renderModules(true); // Show only next module
                        document.getElementById('page-overview').classList.remove('hidden');
                        break;
                    case 'modules':
                        renderModules();
                        document.getElementById('page-modules').classList.remove('hidden');
                        break;
                    case 'module-detail':
                        renderModuleDetail(id);
                        document.getElementById('page-module-detail').classList.remove('hidden');
                        break;
                    case 'cases':
                        renderCases();
                        document.getElementById('page-cases').classList.remove('hidden');
                        break;
                    case 'case-detail':
                        renderCaseDetail();
                        document.getElementById('page-case-detail').classList.remove('hidden');
                        break;
                }
            },
            updateUI: function(view, id) {
                // Active Sidebar state
                document.querySelectorAll('nav button').forEach(b => b.classList.remove('bg-zinc-900', 'text-zinc-100'));
                
                const crumbs = document.getElementById('breadcrumbs');
                let path = '';
                
                if (view === 'overview') {
                    document.getElementById('nav-overview').classList.add('bg-zinc-900', 'text-zinc-100');
                    path = '<span class="text-white">Vue d\'ensemble</span>';
                } else if (view === 'modules') {
                    document.getElementById('nav-modules').classList.add('bg-zinc-900', 'text-zinc-100');
                    path = '<span class="cursor-pointer hover:text-white" onclick="router.navigate(\'overview\')">Formation</span> <span class="text-zinc-600">/</span> <span class="text-white">Modules</span>';
                } else if (view === 'module-detail') {
                    document.getElementById('nav-modules').classList.add('bg-zinc-900', 'text-zinc-100');
                    path = '<span class="cursor-pointer hover:text-white" onclick="router.navigate(\'modules\')">Modules</span> <span class="text-zinc-600">/</span> <span class="text-white">Détail</span>';
                } else if (view.includes('case')) {
                    document.getElementById('nav-cases').classList.add('bg-zinc-900', 'text-zinc-100');
                    path = '<span class="cursor-pointer hover:text-white" onclick="router.navigate(\'cases\')">Cas concrets</span>';
                    if(view === 'case-detail') path += ' <span class="text-zinc-600">/</span> <span class="text-white">Analyse</span>';
                }
                
                crumbs.innerHTML = path;
            }
        };

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            router.navigate('overview');
        });

    
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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-950 flex flex-col justify-between shrink-0 z-50">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<span className="font-semibold text-lg tracking-tight text-white flex items-center gap-2">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
                    GOVA.
                </span>
</div>

<nav className="p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" id="nav-overview" onclick="router.navigate('overview')">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Vue d'ensemble</span>
</button>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Formation</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" id="nav-modules" onclick="router.navigate('modules')">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Modules</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors group" id="nav-cases" onclick="router.navigate('cases')">
<span className="iconify group-hover:text-white transition-colors" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="18"></span>
<span className="font-medium">Cas concrets</span>
</button>
</nav>
</div>

<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 px-2 py-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs font-medium text-white border border-zinc-600">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Membre Premium</p>
</div>
<span className="iconify text-zinc-500 cursor-pointer hover:text-white transition-colors" data-icon="lucide:settings" data-width="16"></span>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative bg-zinc-950" id="main-scroll">

<div className="sticky top-0 z-40 glass border-b border-zinc-800/50 px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-500 text-xs font-medium" id="breadcrumbs">

</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>

<div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 fade-in hidden" id="page-overview">
<header className="space-y-2">
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white">Tableau de bord</h1>
<p className="text-zinc-400">Suivez votre progression vers votre première revente rentable.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-md bg-zinc-800/50 text-white">
<span className="iconify" data-icon="lucide:target" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">En bonne voie</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">34%</div>
<div className="text-xs text-zinc-500 mt-1">Progression globale de la formation</div>
<div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-white h-full rounded-full" style={{width: '34%'}}></div>
</div>
</div>
<div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-md bg-zinc-800/50 text-white">
<span className="iconify" data-icon="lucide:book-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="text-2xl font-medium text-white tracking-tight">3/10</div>
<div className="text-xs text-zinc-500 mt-1">Modules complétés</div>
</div>
<div className="p-5 rounded-lg border border-zinc-800 bg-zinc-900/30">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-md bg-zinc-800/50 text-white">
<span className="iconify" data-icon="lucide:trophy" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="text-2xl font-medium text-white tracking-tight">0 €</div>
<div className="text-xs text-zinc-500 mt-1">Bénéfice généré (simulé)</div>
</div>
</div>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white">Reprendre la formation</h2>
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1" onclick="router.navigate('modules')">
                        Tout voir <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
<div className="grid grid-cols-1 gap-4" id="continue-learning-container">

</div>
</section>
</div>

<div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 fade-in hidden" id="page-modules">
<header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="space-y-1">
<h1 className="text-2xl font-medium tracking-tight text-white">Modules</h1>
<p className="text-zinc-400 text-sm">Parcours structuré : de la théorie à la pratique.</p>
</div>
<div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-md border border-zinc-800">
<button className="px-3 py-1.5 text-xs font-medium rounded bg-zinc-800 text-white shadow-sm">Tous</button>
<button className="px-3 py-1.5 text-xs font-medium rounded text-zinc-400 hover:text-zinc-200 transition-colors">Débutant</button>
<button className="px-3 py-1.5 text-xs font-medium rounded text-zinc-400 hover:text-zinc-200 transition-colors">Avancé</button>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="modules-grid">

</div>
</div>

<div className="fade-in hidden" id="page-module-detail">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

<article className="flex-1 p-6 md:p-10 lg:pr-16 min-w-0">
<div className="mb-8 pb-8 border-b border-zinc-800">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase border" id="module-badge">
                                Badge
                            </span>
<span className="text-xs text-zinc-500 flex items-center gap-1" id="module-duration">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> Duration
                            </span>
</div>
<h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4" id="module-title">Title</h1>
<p className="text-lg text-zinc-400 leading-relaxed font-light" id="module-desc">Description</p>
</div>
<div className="prose prose-invert prose-zinc max-w-none" id="module-content-body">

</div>

<div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
<button className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
<div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
</div>
<span className="text-sm font-medium">Précédent</span>
</button>
<button className="group flex items-center gap-3 text-white hover:text-zinc-200 transition-colors">
<span className="text-sm font-medium">Suivant</span>
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</button>
</div>
</article>

<aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-zinc-800 bg-zinc-950/50 p-6 md:p-10 lg:h-[calc(100vh-3.5rem)] lg:sticky lg:top-14 overflow-y-auto">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-6">Sommaire</h3>
<ul className="space-y-4 border-l border-zinc-800 ml-1" id="module-toc">

</ul>
<div className="mt-10 p-4 rounded bg-zinc-900 border border-zinc-800">
<h4 className="text-sm font-medium text-white mb-2">Cas concret lié</h4>
<p className="text-xs text-zinc-400 mb-3">Appliquez ce module avec l'étude de cas #04.</p>
<button className="w-full py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium rounded transition-colors border border-zinc-700" onclick="router.navigate('cases')">
                            Voir le cas
                        </button>
</div>
</aside>
</div>
</div>

<div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 fade-in hidden" id="page-cases">
<header className="space-y-1">
<h1 className="text-2xl font-medium tracking-tight text-white">Cas Concrets</h1>
<p className="text-zinc-400 text-sm">Analyses détaillées d'achats-reventes réels.</p>
</header>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 w-64 transition-colors" placeholder="Rechercher un modèle..." type="text"/>
</div>

<select className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs rounded px-3 py-2 outline-none focus:border-zinc-600 cursor-pointer">
<option>Budget: Tous</option>
<option>&lt; 5k€</option>
<option>5k€ - 15k€</option>
<option>+ 15k€</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="cases-grid">

</div>
</div>

<div className="fade-in hidden" id="page-case-detail">

<div className="h-48 md:h-64 bg-zinc-900 border-b border-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950/0 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-8">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase border w-fit mb-3" id="case-badge-detail">
                        Intermédiaire
                    </span>
<h1 className="text-3xl md:text-4xl font-medium text-white tracking-tight" id="case-title-detail">Audi A3 S-Line 2018</h1>
</div>
</div>
<div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2 space-y-10">
<section>
<h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:file-search" data-width="20"></span> Contexte
                        </h2>
<div className="text-zinc-400 text-sm leading-relaxed space-y-4" id="case-context">

</div>
</section>
<section className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/30">
<h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:lightbulb" data-width="20"></span> Stratégie
                        </h2>
<div className="text-zinc-400 text-sm leading-relaxed" id="case-strategy">

</div>
</section>
<section>
<h2 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:check-circle-2" data-width="20"></span> Enseignements
                        </h2>
<ul className="space-y-3" id="case-lessons">

</ul>
</section>
</div>

<div className="lg:col-span-1">
<div className="sticky top-20 bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl shadow-black/50">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-4">Bilan Financier</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500">Prix d'achat</span>
<span className="font-medium text-zinc-300" id="case-price-buy">12 500 €</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500">Frais (CG, remise en état)</span>
<span className="font-medium text-red-400/80" id="case-fees">- 450 €</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500">Prix de revente</span>
<span className="font-medium text-zinc-300" id="case-price-sell">14 900 €</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-500">Délai de vente</span>
<span className="font-medium text-zinc-300" id="case-duration">8 jours</span>
</div>
<div className="pt-4 mt-4 border-t border-zinc-800 flex justify-between items-end">
<span className="text-sm font-medium text-white">Marge Nette</span>
<span className="text-2xl font-semibold text-emerald-400 tracking-tight" id="case-margin">+ 1 950 €</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-zinc-800 text-center">
<span className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold">Rentabilité</span>
<div className="text-lg font-medium text-white mt-1" id="case-roi">15.6%</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
