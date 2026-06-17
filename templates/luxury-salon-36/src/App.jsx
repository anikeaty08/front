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
deepBlack: '#0A0A0A',
charcoal: '#121212',
gold: '#F3E5AB', // Champagne Gold
},
backgroundImage: {
'luxury-gradient': 'linear-gradient(135deg, #4c1d95 0%, #a78bfa 50%, #fef3c7 100%)',
'glow-gradient': 'conic-gradient(from 90deg at 50% 50%, #0A0A0A 0%, #171717 50%, #0A0A0A 100%)',
}
}
}
}



      lucide.createIcons();
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-violet-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-indigo-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-deepBlack/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-violet-600 to-amber-200 rounded-md"></div>
<span className="text-sm font-semibold tracking-[0.2em] text-white">
            LE LOCAL DIGITAL
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-gray-400">
<a className="hover:text-white transition-colors" href="#">EXPERTISE</a>
<a className="hover:text-white transition-colors" href="#">OFFRES</a>
<a className="hover:text-white transition-colors" href="#">CONTACT</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-200 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
            Digital Dark V2
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6 text-glow">
            Créateur de Systèmes
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-amber-100">
              (Page Web + Appli de Gestion)
            </span>
<br/>
            Pour les Entreprises locales
          </h1>
<p className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
            Propulsez votre établissement avec un design d'agence de luxe et un
            système de réservation ultra-performant. Gardez vos clients. Divisez
            vos frais par deux.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                DÉCOUVRIR L'OFFRE BEAUTÉ
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
<button className="px-8 py-4 text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Voir la démo
            </button>
</div>
</div>

<div className="relative z-10 hidden lg:block perspective-1000">

<div className="relative w-full aspect-square">

<div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-amber-500/10 blur-[80px] rounded-full"></div>

<div className="absolute right-0 top-10 w-64 h-[500px] bg-charcoal border border-white/10 rounded-[3rem] shadow-2xl rotate-[-12deg] z-20 overflow-hidden neon-glow transform transition hover:-translate-y-2 duration-700">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>
<div className="w-full h-full bg-charcoal relative">

<div className="absolute inset-2 bg-[#050505] rounded-[2.5rem] overflow-hidden flex flex-col">
<div className="h-1/2 bg-gradient-to-b from-gray-800 to-black p-6 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur mb-4"></div>
<div className="w-3/4 h-4 bg-white/20 rounded-md mb-2"></div>
<div className="w-1/2 h-4 bg-white/10 rounded-md"></div>
</div>
<div className="h-1/2 p-6 grid grid-cols-2 gap-3">
<div className="bg-gray-800/50 rounded-xl"></div>
<div className="bg-gray-800/50 rounded-xl"></div>
<div className="col-span-2 bg-violet-600/20 rounded-xl border border-violet-500/30 flex items-center justify-center text-violet-300 text-xs">
                      Réserver
                    </div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 bottom-20 w-[500px] h-[320px] bg-[#1a1a1a] border border-white/5 rounded-xl shadow-2xl rotate-[6deg] z-10 flex flex-col overflow-hidden opacity-90">
<div className="flex-1 bg-black p-4 relative">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

<div className="relative z-10 flex gap-4 h-full">
<div className="w-1/4 h-full bg-white/5 rounded-lg border border-white/5"></div>
<div className="w-3/4 h-full flex flex-col gap-3">
<div className="h-8 w-full bg-white/5 rounded border border-white/5"></div>
<div className="flex-1 bg-white/5 rounded border border-white/5 grid grid-cols-3 gap-2 p-2">
<div className="bg-white/5 rounded"></div>
<div className="bg-white/5 rounded"></div>
<div className="bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
<div className="h-4 bg-[#2a2a2a] border-t border-white/10"></div>
</div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm py-8">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-30 grayscale mix-blend-screen">

<span className="text-lg font-bold tracking-widest">VOGUE</span>
<span className="text-lg font-bold tracking-widest">ELLE</span>
<span className="text-lg font-bold tracking-widest">L'ORÉAL</span>
<span className="text-lg font-bold tracking-widest">SEPHORA</span>
<span className="text-lg font-bold tracking-widest">DYSON</span>
</div>
</div>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/5 transition-colors duration-500">
<div className="mb-8">
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">
                Économies immédiates
              </h3>
<p className="text-sm text-gray-400">
                Coût de Votre Site &amp; Outils Digitaux Divisé par 2 (minimum)
              </p>
</div>
<div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              +480€
              <span className="text-sm text-gray-500 font-normal">
                économisés/an
              </span>
</div>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/5 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 blur-[50px] rounded-full"></div>
<div className="mb-8 relative z-10">
<div className="w-12 h-12 rounded-full bg-violet-900/30 border border-violet-500/20 flex items-center justify-center mb-6 text-violet-300 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Fidélisation</h3>
<p className="text-sm text-gray-400">
                Design Haut de Gamme + Simplification de l’expérience client
              </p>
</div>
<div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400 relative z-10">
              +21%
              <span className="text-sm text-gray-500 font-normal">
                de clients récurrents
              </span>
</div>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/5 transition-colors duration-500">
<div className="mb-8">
<div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Gain de Temps</h3>
<p className="text-sm text-gray-400">
                Tâches &amp; Organisations Journalières Automatisées.
              </p>
</div>
<div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              +1h
              <span className="text-sm text-gray-500 font-normal">
                gagnée par jour.
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t border-white/5 bg-deepBlack relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-16 text-center">
          NOTRE PROCESSUS
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

<div className="glass-card p-8 rounded-2xl border-t border-violet-500/20">
<div className="text-violet-400 font-mono text-sm mb-4">
              01. ANALYSE
            </div>
<p className="text-gray-300">
              On étudie votre situation à la fois pour comprendre ce qui
              fonctionne et les points qui doivent être améliorés.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="text-violet-400 font-mono text-sm mb-4">
              02. RECHERCHE
            </div>
<p className="text-gray-300">
              On cherche la solution la plus adaptée (On la développe si elle
              n’existe pas).
            </p>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="text-violet-400 font-mono text-sm mb-4">
              03. PRÉSENTATION
            </div>
<p className="text-gray-300">
              On vous présente notre solution avec un design et des
              fonctionnalités pensés pour vous et vos client(e)s.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl bg-violet-900/10">
<div className="text-white font-mono text-sm mb-4">04. VALIDATION</div>
<p className="text-white font-medium">
              Vous ne payez rien jusqu’à ce que vous validiez la solution
              proposée.
            </p>
</div>

<div className="glass-card p-8 rounded-2xl border border-green-500/20">
<div className="text-green-400 font-mono text-sm mb-4">
              05. GARANTIE
            </div>
<p className="text-gray-300">
              Vous avez 14 jours pour tester le système et demander votre
              remboursement (100%) si vous n’êtes pas satisfait(e).
            </p>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="text-amber-200 font-mono text-sm mb-4">
              06. TRANQUILLITÉ
            </div>
<p className="text-gray-300">
              1 an de Tranquillité (avec un Grand ‘T’)
            </p>
</div>

<div className="lg:col-span-3 glass-card p-8 rounded-2xl text-center mt-4">
<h4 className="text-white font-medium mb-4">
              Dans 1 an vous aurez 3 options :
            </h4>
<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
<span className="px-3 py-1 bg-white/5 rounded-full">
                Nous confier à nouveau la gestion
              </span>
<span className="text-gray-600">|</span>
<span className="px-3 py-1 bg-white/5 rounded-full">
                Faire cavalier(ère) seul(e)
              </span>
<span className="text-gray-600">|</span>
<span className="px-3 py-1 bg-white/5 rounded-full">
                Vous former auprès de nos experts
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-charcoal/50">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
            L'ARMURE DIGITALE
            <br/>
<span className="text-gray-500">DE VOTRE SALON.</span>
</h2>
<div className="space-y-6">
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-400">
<i className="w-4 h-4" data-lucide="layout"></i>
</div>
<div>
<h4 className="text-white font-medium">Site Premium</h4>
<p className="text-sm text-gray-400 mt-1">
                  Design sur-mesure qui reflète le standing de votre
                  établissement.
                </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-200">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
</div>
<div>
<h4 className="text-white font-medium">Moteur de Réservation</h4>
<p className="text-sm text-gray-400 mt-1">
                  Système propriétaire sans commission. Synchronisation temps
                  réel.
                </p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="mt-1 p-1 rounded bg-gray-800 border border-gray-700 text-gray-300">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-white font-medium">Gestion Totale</h4>
<p className="text-sm text-gray-400 mt-1">
                  Hébergement, maintenance et sécurité inclus. Zéro stress.
                </p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative w-full aspect-[4/3] glass-card rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="absolute w-[150%] h-[150%] bg-gradient-to-t from-violet-900/20 via-transparent to-transparent animate-pulse"></div>

<div className="relative z-10 w-2/3 bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="text-[10px] text-gray-600 font-mono">
                  DASHBOARD_V2.0
                </div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>Remplissage Agenda</span>
<span className="text-white">78%</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="bg-gray-900 border border-white/5 p-3 rounded lg">
<div className="text-[10px] text-gray-500">CA Mensuel</div>
<div className="text-sm text-white font-mono">12,450€</div>
</div>
<div className="bg-gray-900 border border-white/5 p-3 rounded lg">
<div className="text-[10px] text-gray-500">Nvx Clients</div>
<div className="text-sm text-amber-200 font-mono">+24</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<div id="pricing">

<section className="py-24 px-6 bg-deepBlack border-b border-white/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              NOTRE OFFRE DU MOMENT
            </h2>
<p className="text-lg text-gray-400">
              (Pour salons de coiffure, barber shops, massage, onglerie, coachs
              sportifs…)
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

<div className="relative p-8 rounded-2xl border border-violet-500/30 bg-charcoal shadow-[0_0_30px_-10px_rgba(124,58,237,0.15)] flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-bold text-white">Votre Page Web</h3>
<p className="text-sm text-violet-300 font-medium tracking-wide uppercase mt-1">
                  Haut de gamme
                </p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
                  Visuel (UI/UX) Luxueux (Digne des Meilleurs Designers)
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
                  Optimisée Prise de Contact &amp; Rendez-vous Clients
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
                  Fluide &amp; Rapide (la Lenteur fait fuir vos clients)
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
                  Contenu Sur Mesure (Vos Photos, Vidéos…)
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" data-lucide="check"></i>
                  Modifications basiques Illimitées
                </li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-violet-500/30 bg-charcoal shadow-[0_0_30px_-10px_rgba(124,58,237,0.15)] flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-bold text-white">
                  Votre Système de Réservation
                </h3>
<p className="text-sm text-violet-300 font-medium tracking-wide uppercase mt-1">
                  Gestion d’Établissement Complète
                </p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-amber-200 shrink-0 mt-0.5" data-lucide="check"></i>
                  Intégré à Votre page → Votre Client Réserve en 20s
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-amber-200 shrink-0 mt-0.5" data-lucide="check"></i>
                  Alertes - Confirmations ‘Prise de Rendez-vous’ Automatisées
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-amber-200 shrink-0 mt-0.5" data-lucide="check"></i>
                  Résumés Journaliers &amp; Hebdomadaires Automatisés
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-amber-200 shrink-0 mt-0.5" data-lucide="check"></i>
                  Agenda, Horaires, Équipe, Absences…
                </li>
<li className="flex gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-amber-200 shrink-0 mt-0.5" data-lucide="check"></i>
                  Rappels Clients Automatisés
                </li>
</ul>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] grid md:grid-cols-2 gap-8 items-center">
<div className="space-y-2">
<h4 className="text-lg font-medium text-white">
                1 an de Tranquillité
              </h4>
<div className="flex flex-wrap gap-2 text-sm text-gray-400">
<span>Hébergement</span>
<span className="text-gray-600">|</span>
<span>Nom de Domaine</span>
<span className="text-gray-600">|</span>
<span>Maintenance</span>
</div>
</div>
<div className="md:text-right space-y-1">
<div className="text-3xl font-bold text-white">
                Paiement Unique de 300€
                <span className="text-base font-normal text-gray-500">TTC</span>
</div>
<div className="text-sm text-green-400">
                Satisfait(e) ou Remboursé(e) 14 Jours
              </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-b border-white/5">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-16">
            EN 3 CLICS,
            <br className="md:hidden"/>
            VOTRE AGENDA SE REMPLIT.
          </h2>

<div className="mx-auto max-w-4xl mb-12">
<div className="relative bg-[#1d1d1f] rounded-t-2xl border-[1px] border-gray-700 border-b-0 p-[2px] shadow-2xl neon-glow">
<div className="bg-black rounded-t-xl overflow-hidden aspect-video border-[4px] border-black relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-b-lg z-20"></div>
<div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 cursor-pointer hover:scale-105 transition-transform z-10">
<i className="w-6 h-6 text-white ml-1 fill-white" data-lucide="play"></i>
</div>
<div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\'https: //images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&amp'}}></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
<div className="flex flex-col items-center gap-2">
<div className="w-3 h-3 rounded-full bg-violet-500"></div>
<span className="text-[10px] text-gray-400">Service</span>
</div>
<div className="w-12 h-[1px] bg-gray-700 mt-1.5"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse"></div>
<span className="text-[10px] text-white">Horaire</span>
</div>
<div className="w-12 h-[1px] bg-gray-700 mt-1.5"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gray-700"></div>
<span className="text-[10px] text-gray-600">
                        Confirmation
                      </span>
</div>
</div>
</div>
</div>
</div>
<div className="relative bg-[#2d2d2f] h-4 rounded-b-xl border-t border-[#3d3d3f] mx-auto w-full shadow-lg flex justify-center">
<div className="w-32 h-1.5 bg-[#1a1a1a] rounded-b-md"></div>
</div>
</div>
<p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Système de Réservations Client(e)s &amp; Gestion de votre
            établissement. Créé sur conseils de gérant(e)s de salon de coiffure,
            spécialistes “nails art” &amp; acteurs du secteur bien-être.
          </p>
</div>
</section>

<section className="py-24 px-6 bg-deepBlack">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              OFFRE LANDING PAGE PREMIUM
            </h2>
<p className="text-lg text-gray-400">Sur Mesure selon votre activité</p>
</div>
<div className="glass-card p-12 rounded-3xl border border-white/10 overflow-hidden">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative flex justify-center perspective-1000">
<div className="relative w-[280px] h-[550px] bg-black rounded-[40px] border-[8px] border-gray-800 shadow-2xl rotate-[-6deg] overflow-hidden transform hover:rotate-0 transition-transform duration-500">
<div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl z-20 mx-auto w-32"></div>

<div className="w-full h-full bg-white relative overflow-hidden">
<div className="absolute inset-0 animate-scroll-vertical flex flex-col">

<div className="h-[550px] bg-rose-50 p-6 flex flex-col justify-center items-center text-center">
<div className="text-rose-900 font-serif text-2xl mb-2">
                          PARFUMERIE
                        </div>
<div className="w-24 h-24 bg-rose-200 rounded-full mb-4"></div>
<div className="w-32 h-3 bg-rose-200 rounded mb-2"></div>
</div>

<div className="h-[550px] bg-green-900 p-6 flex flex-col justify-center items-center text-center">
<div className="text-green-100 font-mono text-2xl mb-2">
                          CBD SHOP
                        </div>
<div className="w-24 h-24 bg-green-800 border border-green-500 rounded mb-4"></div>
<div className="w-32 h-3 bg-green-800 rounded mb-2"></div>
</div>

<div className="h-[550px] bg-orange-50 p-6 flex flex-col justify-center items-center text-center">
<div className="text-orange-900 font-serif text-2xl mb-2">
                          FLEURISTE
                        </div>
<div className="w-24 h-24 bg-orange-200 rounded-full mb-4"></div>
<div className="w-32 h-3 bg-orange-200 rounded mb-2"></div>
</div>

<div className="h-[550px] bg-yellow-500 p-6 flex flex-col justify-center items-center text-center">
<div className="text-black font-bold text-2xl mb-2">
                          ÉPICERIE
                        </div>
<div className="w-24 h-24 bg-yellow-800/20 rounded mb-4"></div>
<div className="w-32 h-3 bg-yellow-800/20 rounded mb-2"></div>
</div>

<div className="h-[550px] bg-rose-50 p-6 flex flex-col justify-center items-center text-center">
<div className="text-rose-900 font-serif text-2xl mb-2">
                          PARFUMERIE
                        </div>
<div className="w-24 h-24 bg-rose-200 rounded-full mb-4"></div>
<div className="w-32 h-3 bg-rose-200 rounded mb-2"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full justify-center">
<ul className="space-y-6 mb-10">
<li className="flex gap-4 text-base text-white">
<i className="w-6 h-6 text-violet-400 shrink-0" data-lucide="check-circle"></i>
                    Pensée pour plaire à votre clientèle cible
                  </li>
<li className="flex gap-4 text-base text-white">
<i className="w-6 h-6 text-violet-400 shrink-0" data-lucide="message-circle"></i>
                    Chat en Direct avec vos client(e)s intégré (WhatsApp)
                  </li>
<li className="flex gap-4 text-base text-white">
<i className="w-6 h-6 text-violet-400 shrink-0" data-lucide="star"></i>
                    Design de très Haute Qualité qui souligne vos Différences
                  </li>
<li className="flex gap-4 text-base text-white">
<i className="w-6 h-6 text-violet-400 shrink-0" data-lucide="map-pin"></i>
                    Avis Google Inclus directement sur Votre Page
                  </li>
<li className="flex gap-4 text-base text-white">
<i className="w-6 h-6 text-violet-400 shrink-0" data-lucide="shield"></i>
                    Hébergement, Nom de Domaine, Maintenance (Inclus 1 an)
                  </li>
</ul>
<div className="mt-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-6 justify-between items-center text-sm">
<div className="text-violet-300 font-medium">
<i className="w-4 h-4 inline mr-1" data-lucide="check"></i>
                    Garantie 1 an de Tranquillité
                  </div>
<div className="text-green-400 font-medium">
<i className="w-4 h-4 inline mr-1" data-lucide="check"></i>
                    Satisfait(e) ou Remboursé(e) pendant 14 Jours
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-24 px-6 bg-charcoal/30 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">
          Questions Fréquentes
        </h2>
<div className="space-y-4">

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                Comment résilier si je ne suis pas satisfait ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              0 conditions, sans engagement, vous pouvez résilier à tout moment
              (faites le dans les 14 jours suivant la mise en ligne de votre
              site pour être intégralement remboursé(e))
            </div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                À qui s’adresse votre offre ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Notre offre phare du moment s’adresse aux professionnels du
              secteur de la beauté/bien-être, néanmoins nous travaillons avec
              tout type d’entreprise dîtes “locale”/avec une clientèle de
              proximité.
            </div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                Pourquoi s’adresser uniquement aux entreprises locales ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Car les entreprises locales sont trop souvent, soit en ‘retard’
              sur les outils digitaux qu’elles utilisent, soit paient beaucoup
              trop cher pour des outils qui ne sont pas adaptés à leur taille
              car ils ont été pensés pour de grosses structures.
            </div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                Une fois mis en ligne, qu’est ce que que je dois faire pour
                entretenir mon site ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Rien du tout, tous nos services incluent hébergement, maintenance
              et modifications pendant minimum 1 an
            </div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                J’ai déjà un site web, comment savoir si vous pouvez faire mieux
                ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Vous ne pouvez pas le savoir, on vous le montre, on prépare votre
              nouveau site, on vous fait une démonstration, si vous aimez, on le
              met en ligne, sinon vous continuez avec votre site actuel.
            </div>
</details>

<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">
                À quel moment est-ce que je devrai payer la prestation ?
              </span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              On créer votre site complètement avant de vous facturer quoi que
              ce soit, si vous validez, vous payez pour la mise en ligne, sinon,
              vous ne nous devez rien du tout.
            </div>
</details>
</div>
</div>
</section>
<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-gray-500">
<span className="text-white font-medium">LE LOCAL DIGITAL</span>
          © 2024
        </div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">
            Mentions Légales
          </a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-gray-600 flex items-center gap-2">
          Propulsée par
          <span className="text-gray-400 font-medium">ROI Marketing Digital</span>
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
</div>
</footer>


    </>
  );
}
