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



        // Simple Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
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
      

<header className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-bold tracking-tight text-slate-900 uppercase" href="#">
                        Serra
                    </a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#entreprise">L'Entreprise</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#avis">Avis</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#blog">Conseils</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contact">
                        Demander un devis
                        <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-16 shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1">
<a className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md" href="#services">Services</a>
<a className="block px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md" href="#entreprise">L'Entreprise</a>
<a className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md" href="#contact">Contactez-nous</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Plomberie moderne" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide">Disponible pour urgences 24/7</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                L'art du confort thermique <br className="hidden md:block"/> et sanitaire par <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Serra.</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 font-light leading-relaxed">
                Plomberie, chauffage, climatisation et VMC. Nous apportons une expertise technique rigoureuse et des finitions haut de gamme à votre habitat.
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20" href="#contact">
                    Prendre rendez-vous
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all" href="#services">
                    Découvrir nos services
                </a>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="px-4 py-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 mb-4">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Garantie Décennale</h3>
<p className="mt-2 text-sm text-slate-500">Toutes nos interventions sont couvertes et certifiées RGE pour votre tranquillité d'esprit.</p>
</div>
<div className="px-4 py-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 mb-4">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Réactivité Maximale</h3>
<p className="mt-2 text-sm text-slate-500">Une fuite d'eau ou une panne de chauffage ? Nous intervenons dans les plus brefs délais.</p>
</div>
<div className="px-4 py-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50 text-amber-600 mb-4">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Transparence Tarifaire</h3>
<p className="mt-2 text-sm text-slate-500">Devis clair et détaillé avant chaque intervention. Pas de surprise sur la facture finale.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50/50" id="entreprise">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-12 lg:mb-0 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-2xl"></div>
<img alt="Artisan au travail" className="relative rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 z-10 w-full object-cover" src="https://images.unsplash.com/photo-1709432767122-d3cb5326911a?w=1600&amp;q=80"/>
</div>
<div>
<h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">À propos de Serra</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">L'exigence d'un travail bien fait, depuis plus de 15 ans.</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Fondée sur des valeurs de confiance et de technicité, la société Serra accompagne particuliers et professionnels dans leurs projets de rénovation et d'installation thermique.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Nous ne sommes pas de simples installateurs ; nous sommes des conseillers énergétiques dédiés à l'optimisation de votre confort et à la réduction de votre consommation. Chaque chantier est réalisé avec le souci du détail qui caractérise l'artisanat premium.
                    </p>
<div className="flex items-center gap-x-6">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm">
<p className="font-medium text-slate-900">Plus de 500 clients</p>
<p className="text-slate-500">Satisfaits en Île-de-France</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos domaines d'expertise</h2>
<p className="text-slate-500">Des solutions complètes pour un habitat sain, confortable et économe en énergie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Plomberie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Plomberie &amp; Sanitaire</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Installation de salles de bain clé en main, recherche de fuites, robinetterie haut de gamme et traitement de l'eau.</p>
<a className="inline-flex items-center text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#contact">
                            En savoir plus <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Chauffage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chauffage</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Pompes à chaleur, chaudières à condensation, planchers chauffants. Optimisation de votre performance énergétique.</p>
<a className="inline-flex items-center text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#contact">
                            En savoir plus <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-48 overflow-hidden">
<img alt="Climatisation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Climatisation &amp; VMC</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Systèmes réversibles, gainables discrets et ventilation mécanique contrôlée pour une qualité d'air irréprochable.</p>
<a className="inline-flex items-center text-xs font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#contact">
                            En savoir plus <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100" id="avis">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">La confiance de nos clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"L'équipe Serra a transformé notre salle de bain vieillissante en un espace moderne. Finitions impeccables et chantier très propre."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">TB</div>
<div className="ml-3">
<p className="text-sm font-medium text-slate-900">Thomas B.</p>
<p className="text-xs text-slate-400">Rénovation complète</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Installation d'une pompe à chaleur. Conseils très pertinents sur le choix du modèle et installation rapide. Je recommande."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">MP</div>
<div className="ml-3">
<p className="text-sm font-medium text-slate-900">Marie P.</p>
<p className="text-xs text-slate-400">Installation PAC</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-3">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Intervention en urgence pour une fuite un dimanche. Réactivité au top et tarif annoncé à l'avance. Merci Serra."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
<div className="ml-3">
<p className="text-sm font-medium text-slate-900">Jean D.</p>
<p className="text-xs text-slate-400">Dépannage Urgence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">Questions fréquentes</h2>
<div className="space-y-4">

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left" onclick="document.getElementById('faq1').classList.toggle('hidden')">
<span className="text-sm font-medium text-slate-900">Intervenez-vous pour les urgences le week-end ?</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 py-4 bg-slate-50 text-sm text-slate-600 leading-relaxed border-t border-slate-200" id="faq1">
                        Oui, nous disposons d'une équipe d'astreinte disponible 7j/7 et 24h/24 pour les urgences critiques (fuites importantes, panne totale de chauffage en hiver).
                    </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left" onclick="document.getElementById('faq2').classList.toggle('hidden')">
<span className="text-sm font-medium text-slate-900">Vos travaux sont-ils couverts par une garantie ?</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 py-4 bg-slate-50 text-sm text-slate-600 leading-relaxed border-t border-slate-200" id="faq2">
                        Absolument. Tous nos travaux d'installation bénéficient de la garantie décennale. Les pièces et équipements sont couverts par les garanties constructeurs.
                    </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left" onclick="document.getElementById('faq3').classList.toggle('hidden')">
<span className="text-sm font-medium text-slate-900">Quel est votre secteur d'intervention ?</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 py-4 bg-slate-50 text-sm text-slate-600 leading-relaxed border-t border-slate-200" id="faq3">
                        Nous nous déplaçons principalement dans un rayon de 30km autour de notre siège. Pour des chantiers de rénovation complets, nous pouvons étudier des déplacements plus lointains.
                    </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left" onclick="document.getElementById('faq4').classList.toggle('hidden')">
<span className="text-sm font-medium text-slate-900">Faites-vous l'entretien des chaudières ?</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 py-4 bg-slate-50 text-sm text-slate-600 leading-relaxed border-t border-slate-200" id="faq4">
                        Oui, nous proposons des contrats d'entretien annuels pour chaudières gaz, fioul et pompes à chaleur, incluant le ramonage et la vérification des organes de sécurité.
                    </div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left" onclick="document.getElementById('faq5').classList.toggle('hidden')">
<span className="text-sm font-medium text-slate-900">Comment obtenir un devis ?</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="hidden px-6 py-4 bg-slate-50 text-sm text-slate-600 leading-relaxed border-t border-slate-200" id="faq5">
                        Vous pouvez remplir le formulaire en bas de page ou nous appeler directement. Pour les petits travaux, un devis peut être estimé par téléphone. Pour les gros chantiers, une visite technique gratuite est nécessaire.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Conseils &amp; Actualités</h2>
<p className="mt-2 text-slate-500">L'expertise de nos techniciens à votre service.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">
                    Voir tous les articles <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl h-56 mb-4">
<img alt="Pompe à chaleur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=800&amp;q=80"/>
</div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Chauffage</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Pourquoi passer à la pompe à chaleur en 2024 ?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Découvrez les avantages économiques et écologiques d'un système thermodynamique pour votre maison.</p>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl h-56 mb-4">
<img alt="Robinetterie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521207418485-99c705420785?w=800&amp;q=80"/>
</div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Plomberie</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">Comment réduire sa facture d'eau ?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Astuces simples et installations innovantes pour contrôler votre consommation sans perdre en confort.</p>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl h-56 mb-4">
<img alt="Entretien climatisation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1553265381-674034b34554?w=800&amp;q=80"/>
</div>
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Maintenance</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">L'importance de l'entretien de votre VMC</h3>
<p className="text-sm text-slate-500 line-clamp-2">Un air sain est vital. Apprenez à reconnaître les signes d'une ventilation défaillante.</p>
</article>
</div>
</div>
</section>

<section className="relative py-20 lg:py-28 bg-slate-900 text-white overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-slate-400 mb-8">Remplissez ce formulaire pour une demande de devis ou une prise de rendez-vous. Nous vous répondons sous 24h.</p>
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">Nom complet</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-sm" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">Email</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-sm" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="subject">Sujet</label>
<div className="relative">
<select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-sm appearance-none cursor-pointer" id="subject">
<option>Demande de devis</option>
<option>Dépannage / Urgence</option>
<option>Entretien</option>
<option>Autre</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-sm" id="message" placeholder="Décrivez votre besoin..." rows="4"></textarea>
</div>
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-slate-600 rounded bg-slate-800 focus:ring-2 focus:ring-blue-500 custom-checkbox appearance-none cursor-pointer" id="terms" type="checkbox"/>
</div>
<div className="ml-3 text-sm">
<label className="text-slate-400" htmlFor="terms">J'accepte d'être recontacté par l'équipe Serra.</label>
</div>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm" type="button">
                            Envoyer le message
                        </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="bg-slate-800/50 rounded-2xl p-2 border border-slate-700 flex-grow relative overflow-hidden min-h-[300px]">

<div className="absolute inset-0 bg-slate-800 w-full h-full flex items-center justify-center">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.55364867909!2d2.3488!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzEyLjIiTiAywrAyMCc1NS43IkU!5e0!3m2!1sfr!2sfr!4v1629891234567!5m2!1sfr!2sfr" style={{border: '0', filter: 'grayscale(1) contrast(1.2) invert(1)'}} width="100%"></iframe>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 text-blue-400">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-white">Téléphone</h3>
<p className="mt-1 text-sm text-slate-400">+33 1 23 45 67 89</p>
<p className="text-xs text-slate-500 mt-1">Lun-Ven, 8h-19h</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 text-blue-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-white">Bureaux</h3>
<p className="mt-1 text-sm text-slate-400">15 Rue de l'Artisanat,75000 Paris</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-bold tracking-tight text-slate-900 uppercase" href="#">Serra</a>
<p className="mt-4 text-sm text-slate-500 leading-relaxed">
                        L'excellence technique au service de votre confort thermique et sanitaire.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Plomberie</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Chauffage</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Climatisation</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Rénovation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Entreprise</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">À propos</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Nos réalisations</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Avis clients</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Carrières</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Légal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Mentions légales</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Confidentialité</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-slate-400">© 2024 Serra. Tous droits réservés.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
