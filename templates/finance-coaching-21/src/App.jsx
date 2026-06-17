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
brand: {
DEFAULT: '#B11F24', // AlumnEye Red
dark: '#90181C',
soft: '#FEF2F2',
},
onyx: '#1d1d1f', // Apple Dark
smoke: '#86868b', // Apple Grey
surface: '#fbfbfd', // Apple Background
card: '#ffffff',
},
fontFamily: {
sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.015em',
},
borderRadius: {
'3xl': '1.5rem',
'4xl': '2rem',
},
boxShadow: {
'glow': '0 0 20px rgba(177, 31, 36, 0.15)',
'soft': '0 4px 20px rgba(0,0,0,0.04)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 150;
                
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
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
      

<header className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/50 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-lg font-bold tracking-tight text-onyx flex items-center gap-2" href="#">
                ALUMNEYE
            </a>
<nav className="hidden md:flex items-center gap-6 text-xs font-medium text-smoke">
<a className="hover:text-brand transition-colors" href="#methode">La Méthode</a>
<a className="hover:text-brand transition-colors" href="#ecosysteme">Écosystème</a>
<a className="hover:text-brand transition-colors" href="#bootcamps">Bootcamps</a>
<a className="hover:text-brand transition-colors" href="#prix">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<a className="bg-onyx text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-brand transition-colors duration-300" href="#prix">
                    S'inscrire
                </a>
</div>
</div>
</header>

<section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[11px] font-medium text-brand mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                Nouvelle session d'inscriptions ouverte
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 text-gradient bg-gradient-to-br from-gray-900 to-gray-600">
                Du premier CV <br/>
                jusqu'au CDI.
            </h1>
<p className="text-lg md:text-2xl text-smoke font-medium max-w-2xl mx-auto leading-relaxed mb-10">
                L'unique préparation Finance continue. Roadmap personnalisée, bootcamps illimités et accès réseau à vie.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-brand text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-dark hover:scale-[1.02] transition-all duration-300 shadow-glow w-full sm:w-auto" onclick="document.getElementById('prix').scrollIntoView({behavior: 'smooth'})">
                    Démarrer la Prépa
                </button>
<button className="text-brand font-medium hover:text-brand-dark flex items-center gap-1 transition-colors px-6 py-4" onclick="document.getElementById('methode').scrollIntoView({behavior: 'smooth'})">
                    Découvrir la méthode <iconify-icon className="text-lg" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative reveal active">
<div className="aspect-[16/9] bg-white rounded-3xl md:rounded-4xl shadow-2xl border border-gray-100 overflow-hidden relative group">

<div className="h-12 border-b border-gray-100 flex items-center px-6 gap-2 bg-gray-50/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/30"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/30"></div>
<div className="w-3 h-3 rounded-full bg-green-400/30"></div>
</div>
</div>

<div className="p-8 md:p-12 grid md:grid-cols-12 gap-12 h-full">

<div className="hidden md:block col-span-3 space-y-6">
<div className="h-8 w-24 bg-gray-100 rounded-lg"></div>
<div className="space-y-3">
<div className="h-4 w-full bg-gray-50 rounded-md"></div>
<div className="h-4 w-3/4 bg-gray-50 rounded-md"></div>
<div className="h-4 w-5/6 bg-gray-50 rounded-md"></div>
</div>
<div className="pt-8 space-y-3">
<div className="flex items-center gap-3 text-sm font-semibold text-brand bg-brand/5 p-3 rounded-xl">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
                                Roadmap
                             </div>
</div>
</div>

<div className="col-span-12 md:col-span-9">
<div className="flex justify-between items-end mb-8">
<div>
<div className="text-xs font-bold text-brand uppercase tracking-widest mb-2">Semaine 1</div>
<div className="text-3xl font-semibold text-onyx">Préparation Technique</div>
</div>
<div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-6 rounded-2xl bg-surface border border-gray-100 group-hover:border-brand/20 transition-colors">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-2xl text-brand" icon="solar:play-circle-linear"></iconify-icon>
<div className="px-2 py-1 rounded-md bg-white text-[10px] font-medium border border-gray-100 shadow-sm">45 min</div>
</div>
<div className="font-medium text-onyx mb-1">M&amp;A Fundamentals</div>
<div className="text-xs text-smoke">Module vidéo 1.2</div>
</div>

<div className="p-6 rounded-2xl bg-surface border border-gray-100 group-hover:border-brand/20 transition-colors">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-2xl text-onyx" icon="solar:dumbbell-large-linear"></iconify-icon>
<div className="px-2 py-1 rounded-md bg-white text-[10px] font-medium border border-gray-100 shadow-sm">1h00</div>
</div>
<div className="font-medium text-onyx mb-1">Bootcamp Fit</div>
<div className="text-xs text-smoke">Session Live 18h</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm animate-bounce">
<iconify-icon className="text-green-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                    Roadmap mise à jour
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="ecosysteme">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Tout est inclus.<br/><span className="text-smoke">Rien à assembler.</span></h2>
<p className="text-lg text-smoke">Une plateforme unique où chaque action (ressource, bootcamp, réseau) est interconnectée.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 bg-surface rounded-3xl p-8 md:p-10 border border-gray-100 relative overflow-hidden group hover:shadow-soft transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand mb-6 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Roadmap Intelligente</h3>
<p className="text-smoke max-w-sm">Un plan d'action jour par jour, généré suite à ton premier rendez-vous de cadrage.</p>
</div>
<iconify-icon className="absolute -bottom-10 -right-10 text-[200px] text-gray-100 -rotate-12 group-hover:rotate-0 transition-transform duration-700" icon="solar:map-point-bold"></iconify-icon>
</div>

<div className="md:row-span-2 bg-onyx text-white rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group">
<div>
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:dumbbell-large-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Bootcamps Illimités</h3>
<p className="text-gray-400 text-sm leading-relaxed">
                            Fit, Technique, Networking.<br/><br/>
                            Reviens autant de fois que nécessaire. Off-cycles, Summer, CDI.
                        </p>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<div className="flex items-center gap-2 text-xs font-mono text-brand mb-2">PROCHAINE SESSION</div>
<div className="text-lg font-medium">Samedi 14:00</div>
</div>
</div>

<div className="bg-surface rounded-3xl p-8 md:p-10 border border-gray-100 group hover:shadow-soft transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-onyx mb-6 shadow-sm">
<iconify-icon icon="solar:library-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Ressources</h3>
<p className="text-sm text-smoke">+12h vidéos, Formations Python &amp; Excel, Polycopiés.</p>
</div>

<div className="bg-surface rounded-3xl p-8 md:p-10 border border-gray-100 group hover:shadow-soft transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-onyx mb-6 shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Réseau &amp; Forum</h3>
<p className="text-sm text-smoke">+15 000 comptes rendus d'entretien. Mises en relation ciblées.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface md:bg-white" id="methode">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-20 text-center">Un parcours linéaire.</h2>
<div className="relative">

<div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-24 mb-24 items-center">
<div className="md:text-right order-2 md:order-1">
<h3 className="text-2xl font-semibold mb-2 text-onyx">1. Inscription</h3>
<p className="text-smoke leading-relaxed">
                            Accès immédiat à la plateforme. Tu réserves ton créneau pour le rendez-vous de cadrage dans les 24h.
                        </p>
</div>
<div className="relative order-1 md:order-2 flex md:justify-start">
<div className="absolute left-[27px] md:left-0 top-1/2 w-4 h-4 bg-white border-4 border-brand rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 md:-translate-x-1/2"></div>
<div className="ml-16 md:ml-0 md:pl-12">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-xs">
<div className="text-xs font-bold text-gray-400 mb-2 uppercase">Status</div>
<div className="flex items-center gap-2 text-green-600 font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Compte actif
                                </div>
</div>
</div>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-24 mb-24 items-center">
<div className="md:text-right order-2 md:order-1 md:block hidden">
<div className="flex justify-end">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-xs w-full text-left">
<div className="text-xs font-bold text-gray-400 mb-2 uppercase">Livrable</div>
<div className="font-medium text-onyx">Roadmap 14 jours</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2">
<div className="absolute left-[27px] md:left-0 top-1/2 w-4 h-4 bg-white border-4 border-brand rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 md:-translate-x-1/2"></div>
<div className="ml-16 md:ml-12">
<h3 className="text-2xl font-semibold mb-2 text-onyx">2. Cadrage</h3>
<p className="text-smoke leading-relaxed">
                                Analyse du profil, choix des cibles, définition de la stratégie. Ta feuille de route est générée.
                            </p>
</div>
</div>

<div className="order-3 md:hidden ml-16">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-xs w-full">
<div className="text-xs font-bold text-gray-400 mb-2 uppercase">Livrable</div>
<div className="font-medium text-onyx">Roadmap 14 jours</div>
</div>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-24 mb-24 items-center">
<div className="md:text-right order-2 md:order-1">
<h3 className="text-2xl font-semibold mb-2 text-onyx">3. Exécution</h3>
<p className="text-smoke leading-relaxed">
                            Tu consommes les vidéos, tu participes aux bootcamps, tu actives le réseau. Feedback constant.
                        </p>
</div>
<div className="relative order-1 md:order-2 flex md:justify-start">
<div className="absolute left-[27px] md:left-0 top-1/2 w-4 h-4 bg-white border-4 border-brand rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 md:-translate-x-1/2"></div>
<div className="ml-16 md:ml-0 md:pl-12">
<div className="flex gap-2">
<div className="bg-onyx text-white px-3 py-1 rounded-lg text-xs">Bootcamp</div>
<div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs">Afterwork</div>
</div>
</div>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-center">
<div className="md:text-right order-2 md:order-1 md:block hidden">
<div className="flex justify-end">
<div className="bg-brand text-white p-6 rounded-2xl shadow-glow max-w-xs w-full text-left">
<div className="text-xs font-bold text-white/60 mb-2 uppercase">Objectif</div>
<div className="font-bold text-xl">Offre Signée</div>
</div>
</div>
</div>
<div className="relative order-1 md:order-2">
<div className="absolute left-[27px] md:left-0 top-1/2 w-4 h-4 bg-brand border-4 border-brand rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 md:-translate-x-1/2"></div>
<div className="ml-16 md:ml-12">
<h3 className="text-2xl font-semibold mb-2 text-onyx">4. Signatures</h3>
<p className="text-smoke leading-relaxed">
                                Tu valides tes stages intermédiaires jusqu'au CDI final. On ne s'arrête pas avant.
                            </p>
</div>
</div>

<div className="order-3 md:hidden ml-16">
<div className="bg-brand text-white p-6 rounded-2xl shadow-glow max-w-xs w-full text-left">
<div className="text-xs font-bold text-white/60 mb-2 uppercase">Objectif</div>
<div className="font-bold text-xl">Offre Signée</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-surface border-t border-gray-200" id="prix">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Investir dans votre carrière.</h2>
<p className="text-lg text-smoke">Un accès unique. Trois facilités de paiement.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col hover:border-brand/30 transition-colors duration-300">
<h3 className="text-lg font-semibold text-onyx mb-2">Comptant</h3>
<div className="mb-6">
<span className="text-3xl font-bold tracking-tight">2 700 €</span>
</div>
<p className="text-sm text-smoke mb-8">Paiement unique. Économie immédiate de 300 €.</p>
<button className="mt-auto w-full py-3 rounded-full border border-gray-200 text-onyx font-medium hover:border-brand hover:text-brand transition-colors">Choisir</button>
</div>

<div className="bg-white p-8 rounded-3xl border-2 border-brand shadow-glow flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Recommandé</div>
<h3 className="text-lg font-semibold text-brand mb-2">Mensuel (10x)</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-onyx">300 €</span>
<span className="text-smoke text-sm">/mois</span>
</div>
<p className="text-sm text-smoke mb-8">Engagement total de 3 000 €. Sans frais cachés.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-onyx">
<iconify-icon className="text-brand" icon="solar:check-circle-bold"></iconify-icon> Accès immédiat
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-onyx">
<iconify-icon className="text-brand" icon="solar:check-circle-bold"></iconify-icon> Bootcamps illimités
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-onyx">
<iconify-icon className="text-brand" icon="solar:check-circle-bold"></iconify-icon> Réseau à vie
                        </li>
</ul>
<button className="mt-auto w-full py-3.5 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition-colors shadow-sm">Commencer</button>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col hover:border-brand/30 transition-colors duration-300">
<h3 className="text-lg font-semibold text-onyx mb-2">Trimestriel (3x)</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-bold tracking-tight">1 000 €</span>
<span className="text-smoke text-sm">/mois</span>
</div>
<p className="text-sm text-smoke mb-8">Total de 3 000 €. Étalé sur 3 mois.</p>
<button className="mt-auto w-full py-3 rounded-full border border-gray-200 text-onyx font-medium hover:border-brand hover:text-brand transition-colors">Choisir</button>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-smoke flex items-center justify-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    Garantie satisfaction : Premier RDV effectué ou remboursé.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Questions fréquentes</h2>
<div className="space-y-2">
<details className="group p-4 rounded-2xl bg-surface open:bg-white open:shadow-sm border border-transparent open:border-gray-100 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-onyx list-none">
<span>Quelle est la différence avec un Master Spécialisé ?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-smoke text-sm mt-4 leading-relaxed pr-8">
                        Le Master délivre un diplôme académique. AlumnEye délivre un emploi. Nous nous concentrons à 100% sur le processus de recrutement (Fit, Technique, Networking) qui n'est pas enseigné à l'école.
                    </div>
</details>
<details className="group p-4 rounded-2xl bg-surface open:bg-white open:shadow-sm border border-transparent open:border-gray-100 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-onyx list-none">
<span>Puis-je suivre la Prépa en parallèle de mes études/stage ?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-smoke text-sm mt-4 leading-relaxed pr-8">
                        Oui, c'est conçu pour ça. La Roadmap s'adapte à ton emploi du temps. Les ressources sont disponibles 24/7 et les bootcamps ont lieu les soirs et week-ends.
                    </div>
</details>
<details className="group p-4 rounded-2xl bg-surface open:bg-white open:shadow-sm border border-transparent open:border-gray-100 transition-all duration-300">
<summary className="flex justify-between items-center font-medium cursor-pointer text-onyx list-none">
<span>Quand l'accès s'arrête-t-il ?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-smoke text-sm mt-4 leading-relaxed pr-8">
                        Jamais avant la signature de ton CDI. Même après, tu gardes l'accès au réseau AlumnEye à vie.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-surface pt-16 pb-10 border-t border-gray-200">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
<div className="text-lg font-bold text-onyx">ALUMNEYE</div>
<div className="flex gap-6 text-xs text-smoke font-medium">
<a className="hover:text-onyx transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-onyx transition-colors" href="#">Confidentialité</a>
<a className="hover:text-onyx transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-center md:text-left text-[11px] text-gray-400">
                © 2024 AlumnEye. Conçu pour l'excellence.
            </div>
</div>
</footer>



    </>
  );
}
