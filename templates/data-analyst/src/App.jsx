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



        // Charge le logo si disponible, sinon conserve le fallback "DA"
        function loadLogo(imgId, fallbackId, src) {
            const imgEl = document.getElementById(imgId);
            const fallbackEl = document.getElementById(fallbackId);
            if (!imgEl || !fallbackEl) return;

            const test = new Image();
            test.onload = () => {
                imgEl.src = src;
                imgEl.classList.remove('hidden');
                fallbackEl.classList.add('hidden');
            };
            test.onerror = () => {
                // Si le fichier est introuvable, on garde le fallback (rien à faire)
            };
            test.src = src;
        }

        document.addEventListener('DOMContentLoaded', () => {
            loadLogo('brandLogoNav', 'brandFallbackNav', 'logo-data-analyst.png');
            loadLogo('brandLogoFooter', 'brandFallbackFooter', 'logo-data-analyst.png');
            lucide.createIcons();
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center">
<a aria-label="Accueil Data-Analyst.be" className="flex items-center gap-3" href="#">
<span className="relative inline-flex items-center justify-center">
<img alt="Logo Data Analyst" className="h-7 w-7 rounded-sm hidden" decoding="async" id="brandLogoNav" loading="eager"/>
<span className="grid place-items-center text-[10px] select-none font-medium text-white tracking-wide bg-blue-600 w-7 h-7 rounded-sm" id="brandFallbackNav">DA</span>
</span>
<span className="text-xl font-semibold tracking-tight text-gray-900">DATA-ANALYST<span className="text-blue-600">.BE</span></span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors" href="#about">À propos</a>
<a className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" href="#contact">
                        Demander un devis
                    </a>
</div>
<button aria-label="Ouvrir le menu" className="md:hidden p-2">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white pt-32 pr-4 pb-20 pl-4">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="">
<div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full mb-6">
<svg className="lucide lucide-zap w-3 h-3 mr-1.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
                    Expert Power BI à Bruxelles
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                    Transformez vos données en
                    <span className="text-blue-600">insights actionnables</span>
</h1>
<p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                    Création de rapports et tableaux de bord Power BI sur mesure pour optimiser vos décisions business
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" href="#contact">
                        Demander un devis gratuit
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors" href="#realisations">
                        Voir mes réalisations
                    </a>
</div>
<div className="mt-12 flex items-center gap-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5 text-green-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-gray-600">Dashboards interactifs</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-5 h-5 text-green-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-gray-600">Données temps réel</span>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-br from-blue-50 to-gray-100 border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<img alt="Dashboard Power BI" className="w-full rounded-lg shadow-2xl" src="https://data-analyst.be/wp-content/uploads/2023/10/logodataanayst.svg"/>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trending-up w-6 h-6 text-blue-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div className="">
<p className="text-xs text-gray-500 font-normal">ROI moyen</p>
<p className="text-2xl font-semibold text-gray-900">+247%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Services</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Des solutions complètes pour valoriser vos données et accélérer votre croissance</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
<svg className="lucide lucide-layout-dashboard w-6 h-6 text-blue-600 group-hover:text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Rapports Power BI</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                        Tableaux de bord interactifs et personnalisés avec visualisations avancées et automatisation complète
                    </p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#contact">
                        En savoir plus
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-purple-600 group-hover:text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Analyse de données</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                        Analyses exploratoires, statistiques prédictives et identification de tendances pour vos données
                    </p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#contact">
                        En savoir plus
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
<svg className="lucide lucide-lightbulb w-6 h-6 text-green-600 group-hover:text-white" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Conseil &amp; Formation</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                        Audit de rapports existants, recommandations best practices et formation Power BI sur mesure
                    </p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#contact">
                        En savoir plus
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
<svg className="lucide lucide-database w-6 h-6 text-orange-600 group-hover:text-white" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">Data Engineering</h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                        Nettoyage, ETL, modélisation et optimisation de vos sources de données pour une analyse optimale
                    </p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700" href="#contact">
                        En savoir plus
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Pourquoi choisir Power BI ?</h2>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                        Power BI est la plateforme de Business Intelligence leader qui transforme vos données brutes en insights stratégiques pour votre entreprise.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-eye w-5 h-5 text-blue-600" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Visualisations interactives</h3>
<p className="text-sm text-gray-600 font-light">Explorez vos données avec des graphiques dynamiques et intuitifs</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-refresh-cw w-5 h-5 text-blue-600" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Données en temps réel</h3>
<p className="text-sm text-gray-600 font-light">Connexion directe à vos sources pour des insights toujours à jour</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-share-2 w-5 h-5 text-blue-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Partage facilité</h3>
<p className="text-sm text-gray-600 font-light">Diffusez vos rapports à toute votre organisation en quelques clics</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-target w-5 h-5 text-blue-600" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Décisions data-driven</h3>
<p className="text-sm text-gray-600 font-light">Basez vos choix stratégiques sur des données fiables et actualisées</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Analytics Dashboard" className="rounded-2xl shadow-2xl border border-gray-200" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-200 hidden lg:block">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-activity w-8 h-8 text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<p className="text-sm text-gray-500 font-normal">Gain de temps</p>
<p className="text-3xl font-semibold text-gray-900">75%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Mon processus de travail</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Une méthodologie éprouvée pour garantir des résultats exceptionnels</p>
</div>
<div className="grid md:grid-cols-5 gap-6">
<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl font-semibold">1</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Consultation</h3>
<p className="text-sm text-gray-600 font-light">Analyse de vos besoins et objectifs business</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200"></div>
</div>
<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl font-semibold">2</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Analyse</h3>
<p className="text-sm text-gray-600 font-light">Audit de vos données et définition du scope</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200"></div>
</div>
<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl font-semibold">3</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Développement</h3>
<p className="text-sm text-gray-600 font-light">Création du rapport et des visualisations</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200"></div>
</div>
<div className="relative">
<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl font-semibold">4</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Validation</h3>
<p className="text-sm text-gray-600 font-light">Tests, ajustements et optimisation</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200"></div>
</div>
<div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl font-semibold">5</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Livraison</h3>
<p className="text-sm text-gray-600 font-light">Formation et support post-livraison</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="realisations">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Réalisations</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Découvrez quelques exemples de tableaux de bord créés pour mes clients</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
<img alt="Dashboard financier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md mb-3">Finance</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Financier</h3>
<p className="text-sm text-gray-600 font-light mb-4">Suivi KPIs financiers en temps réel avec analyses de rentabilité et prévisions budgétaires</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Power BI</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">SQL</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">DAX</span>
</div>
</div>
</div>
<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-purple-50 to-gray-100 overflow-hidden">
<img alt="Dashboard retail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="inline-flex items-center px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-md mb-3">Retail</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Analyse des Ventes</h3>
<p className="text-sm text-gray-600 font-light mb-4">Dashboard e-commerce avec analyse des performances produits et comportement client</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Power BI</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Excel</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">API</span>
</div>
</div>
</div>
<div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="aspect-video bg-gradient-to-br from-green-50 to-gray-100 overflow-hidden">
<img alt="Dashboard RH" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-md mb-3">RH</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard RH</h3>
<p className="text-sm text-gray-600 font-light mb-4">Suivi des effectifs, turnover, recrutement et analytics des talents pour optimiser la gestion RH</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Power BI</span>
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">Python</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors" href="#contact">
                    Voir plus de réalisations
                    <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Ce que disent mes clients</h2>
<p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">La satisfaction client au cœur de chaque projet</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 font-light mb-6 leading-relaxed">"Un travail exceptionnel sur nos dashboards financiers. Les rapports sont clairs, interactifs et nous font gagner un temps précieux dans nos analyses."</p>
<div className="flex items-center gap-3">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Marc Dubois</p>
<p className="text-sm text-gray-600">CFO, TechCorp</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 font-light mb-6 leading-relaxed">"Professionnel, réactif et à l'écoute. Les dashboards Power BI créés ont transformé notre façon d'analyser nos données de ventes."</p>
<div className="flex items-center gap-3">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Sophie Laurent</p>
<p className="text-sm text-gray-600">Directrice Marketing, RetailPlus</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 font-light mb-6 leading-relaxed">"Un expert Power BI de premier plan. Les insights fournis ont directement impacté nos décisions stratégiques. Je recommande vivement."</p>
<div className="flex items-center gap-3">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="font-medium text-gray-900">Thomas Delvaux</p>
<p className="text-sm text-gray-600">CEO, DataFlow Solutions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">À propos</h2>
<p className="text-lg text-gray-700 font-light mb-6 leading-relaxed">
                        Data analyst passionné basé à <strong className="font-medium text-gray-900">Bruxelles</strong>, j'aide les entreprises à exploiter la puissance de leurs données pour prendre des décisions éclairées et stratégiques.
                    </p>
<p className="text-base text-gray-600 font-light mb-8 leading-relaxed">
                        Avec une expertise approfondie en Power BI, SQL, Python et Excel, je transforme des données complexes en visualisations claires et actionnables. Ma mission : rendre vos données accessibles et utiles pour tous vos collaborateurs.
                    </p>
<div className="mb-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences techniques</h3>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">Power BI</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">DAX</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">SQL</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">Python</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">Excel VBA</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">Azure</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">ETL</span>
<span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg">Data Modeling</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors" href="https://linkedin.com" target="_blank">
<svg className="lucide lucide-linkedin w-4 h-4 mr-2" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </a>
<a className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" href="#contact">
                            Me contacter
                            <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<img alt="Data Analyst" className="rounded-2xl shadow-2xl border border-gray-200" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&amp;h=1000&amp;fit=crop"/>
<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
<div className="flex items-center gap-3">
<svg className="lucide lucide-briefcase w-6 h-6 text-blue-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div>
<p className="text-sm text-gray-500 font-normal">Projets réalisés</p>
<p className="text-3xl font-semibold text-gray-900">50+</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Questions fréquentes</h2>
<p className="text-xl text-gray-600 font-light">Tout ce que vous devez savoir sur mes services</p>
</div>
<div className="space-y-4">
<details className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="text-base font-semibold text-gray-900">Combien de temps faut-il pour créer un dashboard Power BI ?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-gray-600 font-light leading-relaxed">
                        Le délai dépend de la complexité du projet. Un dashboard simple peut être réalisé en 1-2 semaines, tandis qu'une solution complète avec plusieurs sources de données peut prendre 4-6 semaines.
                    </p>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="text-base font-semibold text-gray-900">Quels types de données pouvez-vous analyser ?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-gray-600 font-light leading-relaxed">
                        Je travaille avec tous types de données : financières, commerciales, RH, marketing, opérationnelles. Power BI peut se connecter à plus de 100 sources de données différentes (Excel, SQL, Azure, APIs, etc.).
                    </p>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="text-base font-semibold text-gray-900">Proposez-vous de la formation Power BI ?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-gray-600 font-light leading-relaxed">
                        Oui, je propose des formations sur mesure pour vos équipes, allant de l'initiation à Power BI jusqu'aux techniques avancées de DAX et de modélisation de données.
                    </p>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="text-base font-semibold text-gray-900">Travaillez-vous uniquement à Bruxelles ?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-gray-600 font-light leading-relaxed">
                        Basé à Bruxelles, je travaille principalement en Belgique mais également à distance pour des clients internationaux. La plupart des projets peuvent être réalisés en télétravail.
                    </p>
</details>
<details className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="text-base font-semibold text-gray-900">Quel est le coût d'un projet type ?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm text-gray-600 font-light leading-relaxed">
                        Chaque projet est unique. Je propose un devis personnalisé après une première consultation gratuite. Les tarifs varient selon la complexité, le nombre de sources de données et les fonctionnalités souhaitées.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Discutons de votre projet</h2>
<p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                        Vous avez un projet d'analyse de données ou souhaitez créer des dashboards Power BI ? Contactez-moi pour une consultation gratuite.
                    </p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5 text-blue-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 mb-1">Email</p>
<a className="text-base text-gray-600 hover:text-blue-600 transition-colors" href="mailto:contact@data-analyst.be">contact@data-analyst.be</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-phone w-5 h-5 text-blue-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 mb-1">Téléphone</p>
<a className="text-base text-gray-600 hover:text-blue-600 transition-colors" href="tel:+32123456789">+32 1 23 45 67 89</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<svg className="lucide lucide-map-pin w-5 h-5 text-blue-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 mb-1">Localisation</p>
<p className="text-base text-gray-600">Bruxelles, Belgique</p>
</div>
</div>
</div>
<div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
<div className="flex gap-3">
<svg className="lucide lucide-clock w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<p className="text-sm font-medium text-gray-900 mb-1">Temps de réponse</p>
<p className="text-sm text-gray-600 font-light">Je réponds généralement sous 24h aux demandes de devis et questions.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-gray-200 p-8">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="name">Nom complet</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="name" name="name" placeholder="Jean Dupont" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="email" name="email" placeholder="jean@entreprise.be" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="company">Entreprise</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="company" name="company" placeholder="Nom de l'entreprise" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="phone">Téléphone</label>
<input className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="phone" name="phone" placeholder="+32 1 23 45 67 89" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="project">Type de projet</label>
<select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" id="project" name="project">
<option>Création de dashboard Power BI</option>
<option>Analyse de données</option>
<option>Formation Power BI</option>
<option>Conseil en data visualisation</option>
<option>Nettoyage de données</option>
<option>Autre</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" id="message" name="message" placeholder="Décrivez votre projet et vos besoins..." rows="5"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" type="submit">
                            Envoyer ma demande
                            <svg className="lucide lucide-send w-4 h-4 ml-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p className="text-xs text-gray-500 font-light text-center">
                            En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="relative inline-flex items-center justify-center">
<img alt="Logo Data Analyst" className="h-7 w-7 rounded-sm hidden" decoding="async" id="brandLogoFooter" loading="lazy"/>
<span className="h-7 w-7 rounded-sm bg-blue-600 text-white grid place-items-center text-[10px] font-medium tracking-wide select-none" id="brandFallbackFooter">DA</span>
</span>
<h3 className="text-white text-lg font-semibold tracking-tight">DATA-ANALYST<span className="text-blue-500">.BE</span></h3>
</div>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                        Expert Power BI et analyse de données à Bruxelles. Transformez vos données en décisions stratégiques.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Rapports Power BI</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Analyse de données</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Conseil &amp; Formation</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#services">Data Engineering</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Liens rapides</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#realisations">Réalisations</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#about">À propos</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>Bruxelles, Belgique</li>
<li><a className="hover:text-white transition-colors" href="mailto:contact@data-analyst.be">contact@data-analyst.be</a></li>
<li><a className="hover:text-white transition-colors" href="tel:+32123456789">+32 1 23 45 67 89</a></li>
</ul>
<div className="flex gap-3 mt-4">
<a aria-label="LinkedIn" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="https://linkedin.com" target="_blank">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Email" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" href="mailto:contact@data-analyst.be">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Data-Analyst.be. Tous droits réservés.</p>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
