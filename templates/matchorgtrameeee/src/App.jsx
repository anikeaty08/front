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



        document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.counter');
            
            const animateCounter = (counter) => {
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // Animation duration in ms
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current).toLocaleString('fr-FR');
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target.toLocaleString('fr-FR');
                    }
                };
                updateCount();
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        animateCounter(counter);
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => observer.observe(counter));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-medium text-xs tracking-tighter">M</span>
</div>
<span className="font-medium tracking-tight text-zinc-900">MatchOrg</span>
</div>
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Fonctionnalités</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Pourquoi nous</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Roadmap</a>
</div>
<button className="text-sm font-medium bg-zinc-900 text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-colors shadow-sm ring-1 ring-transparent hover:ring-zinc-200">
                Commencer
            </button>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white opacity-60 -z-10"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-600">Nouvelle plateforme disponible</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-8 text-balance">
                Simplifiez l’organisation <br className="hidden md:block"/> de vos matchs.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto mb-10 text-balance font-normal">
                L'organisation de matchs au sein d'une association sportive est souvent une tâche complexe, chronophage et source de stress. Libérez-vous de la charge mentale et concentrez-vous sur l'essentiel : le sport.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200/50 flex items-center justify-center gap-2">
                    Créer un événement
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-700 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Voir la démo
                </button>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50" id="stats-section">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200/60">

<div className="flex flex-col items-center justify-center p-4">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 counter" data-target="250">2</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-900">+</span>
</div>
<span className="text-sm font-medium text-zinc-500">Clubs inscrits</span>
</div>

<div className="flex flex-col items-center justify-center p-4">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 counter" data-target="15000">120</span>
</div>
<span className="text-sm font-medium text-zinc-500">Adhérents actifs</span>
</div>

<div className="flex flex-col items-center justify-center p-4">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-4xl font-semibold tracking-tight text-zinc-900 counter" data-target="98">1</span>
<span className="text-4xl font-semibold tracking-tight text-zinc-900">%</span>
</div>
<span className="text-sm font-medium text-zinc-500">Utilisateurs satisfaits</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
                        Gagnez du temps précieux, sans la moindre frustration.
                    </h2>
<div className="prose prose-zinc prose-lg text-zinc-500 leading-relaxed">
<p className="mb-6">
                            Entre la planification des rencontres, la gestion des disponibilités des joueurs et des terrains, et la coordination des bénévolats, les responsables se retrouvent rapidement submergés. Cette charge mentale peut freiner l'enthousiasme et la motivation.
                        </p>
<p>
                            Imaginez pouvoir orchestrer toutes ces étapes en un clin d'œil. Notre solution est conçue pour automatiser les aspects les plus répétitifs. L'objectif est clair : vous libérer des contraintes administratives pour l'épanouissement de vos membres.
                        </p>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 md:p-10 border border-zinc-100 relative overflow-hidden group hover:border-zinc-200 transition-all">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="lucide:hexagon" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-white rounded-lg border border-zinc-200 shadow-sm">
<iconify-icon className="text-zinc-900" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Pourquoi MatchOrg ?</h3>
</div>
<p className="text-zinc-600 mb-6 leading-relaxed text-sm md:text-base">
                        MatchOrg est né de la volonté de transformer la manière dont les clubs gèrent leurs activités. Nous avons développé une plateforme intuitive pour répondre aux défis quotidiens.
                    </p>
<p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                        Bien plus qu'une simple application, c'est un partenaire. Fini les échanges interminables par SMS, place à une gestion centralisée. Créez des événements en quelques clics, suivez les confirmations et gérez les imprévus avec une facilité déconcertante.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                    Une suite complète pour une gestion sereine.
                </h2>
<p className="text-zinc-400 text-lg">
                    Adoptez MatchOrg et dites adieu au stress. Améliorez la coordination et offrez une expérience moderne à vos équipes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-zinc-800/50 border border-white/5 rounded-2xl p-8 md:p-10 hover:bg-zinc-800/80 transition-colors">
<div className="flex items-start justify-between mb-8">
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Planification sans effort</h3>
<p className="text-zinc-400 text-sm max-w-md">Définissez les dates, heures et lieux en quelques instants. L'étape la plus complexe devient un jeu d'enfant.</p>
</div>
<div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 flex flex-col gap-3 opacity-90">
<div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
<span>Calendrier Matchs - Octobre</span>
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/50 border border-white/5">
<div className="h-10 w-10 rounded bg-indigo-500/20 text-indigo-400 flex flex-col items-center justify-center text-[10px] font-bold border border-indigo-500/20">
<span>14</span>
<span>OCT</span>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-zinc-700 rounded mb-2"></div>
<div className="h-1.5 w-20 bg-zinc-800 rounded"></div>
</div>
<div className="px-3 py-1 bg-green-500/10 text-green-400 text-[10px] rounded-full border border-green-500/20">Confirmé</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/30 border border-transparent">
<div className="h-10 w-10 rounded bg-zinc-700/50 text-zinc-500 flex flex-col items-center justify-center text-[10px] font-bold">
<span>21</span>
<span>OCT</span>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-zinc-800 rounded mb-2"></div>
<div className="h-1.5 w-16 bg-zinc-800/50 rounded"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 bg-zinc-800/50 border border-white/5 rounded-2xl p-8 hover:bg-zinc-800/80 transition-colors flex flex-col">
<div className="mb-6">
<div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Gestion des bénévoles</h3>
<p className="text-zinc-400 text-sm">
                            Libre choix aux bénévoles. Accueil, buvette, arbitrage : chacun se désigne sur le rôle qui lui convient.
                        </p>
</div>

<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-white/5">
<div className="w-5 h-5 rounded border border-zinc-600 bg-zinc-800 flex items-center justify-center text-zinc-900">

</div>
<span className="text-sm text-zinc-400">Arbitrage</span>
<div className="ml-auto flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-indigo-500/30 shadow-[0_0_15px_-3px_rgba(99,102,241,0.15)]">
<div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center text-white">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
<span className="text-sm text-white">Tenue de la buvette</span>
<div className="ml-auto text-[10px] text-indigo-400 font-medium">Complet</div>
</div>
</div>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-800/50 border border-white/5 rounded-2xl p-8 md:p-10 hover:bg-zinc-800/80 transition-colors">
<div className="flex flex-col justify-center">
<div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Communication centralisée</h3>
<p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                            Fini les chaînes de messages interminables. Tout est centralisé sur une seule plateforme.
                            Les joueurs reçoivent des rappels, les bénévoles leurs horaires. Transparence et réactivité garanties.
                        </p>
<div className="flex gap-2 mt-2">
<span className="px-2 py-1 rounded bg-zinc-700/50 text-[10px] text-zinc-300 border border-zinc-700">Notifications</span>
<span className="px-2 py-1 rounded bg-zinc-700/50 text-[10px] text-zinc-300 border border-zinc-700">Rappels auto</span>
</div>
</div>

<div className="bg-zinc-900 border border-white/10 rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="flex flex-col gap-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0"></div>
<div className="flex flex-col gap-1">
<div className="bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-zinc-300 border border-zinc-700/50">
                                        Changement de terrain pour le match de samedi ?
                                    </div>
<span className="text-[10px] text-zinc-600">Coach Thomas • 14:02</span>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-xs text-white">MO</div>
<div className="flex flex-col gap-1 items-end">
<div className="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm">
                                        Oui, terrain B confirmé. Notification envoyée à l'équipe.
                                    </div>
<span className="text-[10px] text-zinc-600">Admin • 14:05</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-zinc-50/50 border-zinc-100 border-t pt-20 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 default">Trouvez l'offre adaptée à votre club</h2>
<p className="text-neutral-500 mb-8" style={{}}>Des tarifs transparents qui évoluent avec vos besoins.</p>

<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-neutral-500" id="monthly-label" style={{}}>Mensuel</span>
<button className="w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none bg-neutral-200" id="billing-toggle-btn" onclick="togglePricing()" style={{}}>
<div className="absolute left-1 top-1 w-4 h-4 rounded-full shadow-sm transition-transform duration-200 bg-white" id="toggle-circle"></div>
</button>
<span className="text-sm font-medium default" id="yearly-label">Annuel <span className="text-xs ml-1 font-medium text-indigo-600">-15%</span></span>
</div>
</div>

<div className="overflow-x-auto no-scrollbar pb-4">
<div className="min-w-[900px]">

<div className="grid grid-cols-4 gap-6 mb-8 border-b pb-8 sticky top-0 z-10 border-neutral-100 bg-white" style={{}}>
<div className="flex flex-col justify-end">
<span className="text-sm font-medium text-neutral-400" style={{}}>Fonctionnalités</span>
</div>

<div className="flex flex-col gap-4">
<div className="">
<h3 className="text-lg font-medium default">Starter</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight price-starter default">4,90 €</span>
<span className="text-sm text-neutral-500 price-period" style={{}}>/mois</span>
</div>
<p className="text-xs mt-2 font-medium text-indigo-600">✨ 1 mois d'essai gratuit</p>
</div>
<button className="w-full py-2 px-4 rounded-lg border text-sm font-medium transition-all border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" style={{}}>
                                Choisir Starter
                            </button>
</div>

<div className="flex flex-col gap-4 relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-medium px-3 py-1 rounded-full tracking-wide uppercase bg-[#DD6B2F] text-white">Populaire</div>
<div className="">
<h3 className="text-lg font-medium default">Essentiel</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight price-essentiel default">14,90 €</span>
<span className="text-sm text-neutral-500 price-period" style={{}}>/mois</span>
</div>
<p className="text-xs mt-2 font-medium text-indigo-600">✨ 1 mois d'essai gratuit</p>
</div>
<button className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-all shadow-md bg-[#DD6B2F] text-white hover:bg-neutral-800 shadow-neutral-200" style={{}}>
                                Choisir Essentiel
                            </button>
</div>

<div className="flex flex-col gap-4">
<div className="">
<h3 className="text-lg font-medium default">Max</h3>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight price-max default">29,90 €</span>
<span className="text-sm text-neutral-500 price-period" style={{}}>/mois</span>
</div>
<p className="text-xs mt-2 font-medium text-indigo-600">✨ 1 mois d'essai gratuit</p>
</div>
<button className="w-full py-2 px-4 rounded-lg border text-sm font-medium transition-all border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300" style={{}}>
                                Choisir Max
                            </button>
</div>
</div>

<div className="space-y-0 text-sm">

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Équipes gérées</div>
<div className="font-medium default">Jusqu'à 5 équipes</div>
<div className="font-medium default">Jusqu'à 15 équipes</div>
<div className="font-medium default">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Rôles actifs</div>
<div className="default">5</div>
<div className="default">15</div>
<div className="font-medium default">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Bénévoles</div>
<div className="default">Illimité</div>
<div className="default">Illimité</div>
<div className="default">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Matchs / semaine</div>
<div className="default">3 maximum</div>
<div className="default">8 maximum</div>
<div className="default font-medium">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Notifications</div>
<div className="flex items-center gap-2 default"><iconify-icon className="text-neutral-400" icon="lucide:smartphone" style={{}}></iconify-icon> Push</div>
<div className="flex items-center gap-2 default"><iconify-icon className="text-neutral-400" icon="lucide:smartphone" style={{}}></iconify-icon> Push</div>
<div className="font-medium flex items-center gap-2 default"><iconify-icon className="text-neutral-400" icon="lucide:mail" style={{}}></iconify-icon> E-mail + Push</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Chat &amp; Communication</div>
<div className="default">Par match</div>
<div className="default">Par match</div>
<div className="font-medium default">Avancé (club)</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Stats &amp; Tableaux</div>
<div className="text-neutral-400" style={{}}><iconify-icon icon="lucide:minus" width="16"></iconify-icon></div>
<div className="default">Tableaux de bord</div>
<div className="font-medium default">Exports + Multi-saisons</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>App Mobile</div>
<div className="default"><iconify-icon className="default" icon="lucide:check" width="16"></iconify-icon></div>
<div className="default"><iconify-icon className="default" icon="lucide:check" width="16"></iconify-icon></div>
<div className="default"><iconify-icon className="default" icon="lucide:check" width="16"></iconify-icon></div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Historique</div>
<div className="default">3 mois</div>
<div className="default">1 saison</div>
<div className="font-medium default">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Événements (stages)</div>
<div className="default">1 / saison</div>
<div className="default">5 / saison</div>
<div className="font-medium default">Illimité</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Personnalisation</div>
<div className="default">Basique</div>
<div className="default">Standard</div>
<div className="font-medium default">Avancée (thème, visuels)</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 border-b transition-colors border-neutral-50 hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Support client</div>
<div className="default">Communautaire</div>
<div className="default">Standard (48h)</div>
<div className="font-medium default">Prioritaire (24h)</div>
</div>

<div className="grid grid-cols-4 gap-6 py-4 transition-colors hover:bg-neutral-50/50" style={{}}>
<div className="text-neutral-500 font-medium" style={{}}>Publicités</div>
<div className="default">Non</div>
<div className="default">Non</div>
<div className="default">Non</div>
</div>
</div>
</div>
</div>
</div><div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 mb-4 text-indigo-600">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase">Plus tard</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">
                Données et statistiques avancées
            </h2>
<p className="text-zinc-500 leading-relaxed mb-8">
                Le suivi des présences, des scores et des classements sera également automatisé, offrant une vue d'ensemble claire et à jour de toutes les activités. Un atout majeur pour la planification future et l'évaluation des performances.
            </p>

<div className="h-32 w-full max-w-sm mx-auto flex items-end justify-center gap-2 opacity-50">
<div className="w-4 bg-zinc-300 rounded-t-sm h-[40%]"></div>
<div className="w-4 bg-zinc-300 rounded-t-sm h-[60%]"></div>
<div className="w-4 bg-indigo-400 rounded-t-sm h-[85%] shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
<div className="w-4 bg-zinc-300 rounded-t-sm h-[70%]"></div>
<div className="w-4 bg-zinc-300 rounded-t-sm h-[50%]"></div>
</div>
</div>
<section className="bg-zinc-50/50 pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
                        Une question ?  Notre équipe vous répond.
                    </h2>
<p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                        Que vous souhaitiez une démonstration personnalisée pour votre club ou que vous ayez une question technique, nous sommes là pour vous aider.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm shrink-0">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Email</h4>
<p className="text-sm text-zinc-500">bonjour@matchorg.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-sm shrink-0">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-1">Bureau</h4>
<p className="text-sm text-zinc-500">12 Rue du Sport, 75000 Paris</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700" htmlFor="name">Nom</label>
<input className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400" id="name" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700" htmlFor="club">Club</label>
<input className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400" id="club" placeholder="Nom du club" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700" htmlFor="email">Email professionnel</label>
<input className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400" id="email" placeholder="vous@exemple.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700" htmlFor="message">Message</label>
<textarea className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all placeholder:text-zinc-400 resize-none" id="message" placeholder="Comment pouvons-nous vous aider ?" rows="4"></textarea>
</div>
<button className="w-full py-2.5 bg-zinc-900 text-white font-medium rounded-lg text-sm hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200/50" type="submit">
                            Envoyer le message
                        </button>
</form>
</div>
</div>
</div>
</section></section><footer className="bg-white border-zinc-200 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="font-medium text-[10px] tracking-tighter">M</span>
</div>
<span className="font-medium text-zinc-900 text-sm tracking-tight">MatchOrg</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Support</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Conditions</a>
</div>
<p className="text-xs text-zinc-400">
                © 2024 MatchOrg. Tous droits réservés.
            </p>
</div>
</footer>



    </>
  );
}
