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
                            blue: '#2563EB',
                            dark: '#1A171B',
                            coral: '#FF5F6D',
                            gray: '#F3F4F6'
                        }
                    },
                    letterSpacing: {
                        tighter: '-0.04em',
                        tight: '-0.02em',
                    },
                    fontSize: {
                        xxs: '0.65rem',
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
      



<nav className="fixed top-0 w-full z-50 glass-panel border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-blue rounded-md flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-brand-dark">HypeMi</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-brand-dark transition-colors" href="#marques">Marques</a>
<a className="hover:text-brand-dark transition-colors" href="#createurs">Créateurs</a>
<a className="hover:text-brand-dark transition-colors" href="#technologie">Data &amp; Tech</a>
<a className="hover:text-brand-dark transition-colors" href="#apropos">À propos</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-500 hover:text-brand-dark" href="#">Connexion</a>
<a className="bg-brand-dark text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-sm" href="#">
                    Rejoindre la beta
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 -z-10 hero-grid opacity-60"></div>

<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/40 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-brand-coral"></span>
                Le futur de l'influence au Cameroun
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-brand-dark mb-6 leading-[1.1]">
                Investissez dans la visibilité,<br/>
<span className="text-neutral-400">pas dans le hasard.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                HypeMi est le pont stratégique entre marques et influenceurs. 
                Nous remplaçons l'incertitude par la <span className="text-brand-blue font-medium">data</span> et transformons chaque collaboration en une alliance durable.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="group flex items-center gap-2 bg-brand-blue text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20" href="#">
                    Je suis une Marque
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center gap-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-all shadow-sm" href="#">
                    Je suis un Créateur
                </a>
</div>

<div className="relative max-w-4xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-transparent to-brand-coral opacity-20 blur-lg rounded-2xl"></div>
<div className="relative bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden">

<div className="h-10 border-b border-neutral-100 flex items-center px-4 gap-2 bg-neutral-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="col-span-2 space-y-6">
<div className="flex justify-between items-center">
<div>
<h3 className="text-sm font-medium text-neutral-900">Performance de Campagne</h3>
<p className="text-xs text-neutral-400 mt-1">Derniers 30 jours</p>
</div>
<div className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">+24.5%</div>
</div>

<div className="h-32 flex items-end justify-between gap-2">
<div className="w-full bg-neutral-50 rounded-t h-[40%]"></div>
<div className="w-full bg-neutral-50 rounded-t h-[60%]"></div>
<div className="w-full bg-neutral-100 rounded-t h-[50%]"></div>
<div className="w-full bg-neutral-100 rounded-t h-[30%]"></div>
<div className="w-full bg-brand-blue/10 rounded-t h-[70%]"></div>
<div className="w-full bg-brand-blue/20 rounded-t h-[85%]"></div>
<div className="w-full bg-brand-blue rounded-t h-[100%]"></div>
</div>
</div>

<div className="col-span-1 space-y-4">
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-brand-blue" data-lucide="users"></i>
<span className="text-xs font-medium text-neutral-500">Audience Réelle</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">245k</div>
<div className="text-xxs text-neutral-400 mt-1">Vérifié par HypeMi AI</div>
</div>
<div className="p-4 rounded-xl border border-neutral-100 bg-neutral-50/50">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-brand-coral" data-lucide="target"></i>
<span className="text-xs font-medium text-neutral-500">Taux d'Engagement</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">4.8%</div>
<div className="text-xxs text-neutral-400 mt-1">Supérieur à la moyenne</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">La nouvelle norme de confiance</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tight">VERCEL</span>
<span className="text-lg font-semibold tracking-tight italic font-serif">Stripe</span>
<span className="text-xl font-bold tracking-tighter">Acme Corp</span>
<span className="text-lg font-medium tracking-wide">LINEAR</span>
<span className="text-lg font-bold tracking-tight flex items-center gap-1"><div className="w-4 h-4 rounded-full bg-current"></div>Raycast</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="technologie">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-brand-dark">Plus qu'une plateforme,<br/>un écosystème de confiance.</h2>
<p className="text-neutral-500 font-light">
                    HypeMi agit comme un tiers de confiance. Nous structurons le marché informel de l'influence grâce à la technologie.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-brand-blue/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue mb-6">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">Data &amp; Transparence</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Fini les "vanity metrics". Accédez aux scores publics, statistiques réelles d'audience et historique vérifié. Nous nettoyons les données pour ne garder que l'authenticité.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-brand-coral/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-brand-coral mb-6">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">Équité &amp; Matching</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Notre algorithme connecte les marques et créateurs selon leurs valeurs et audiences, pas seulement le nombre d'abonnés. Une juste valorisation pour chaque profil.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 transition-colors">
<div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center text-brand-dark mb-6">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-brand-dark">Stratégie &amp; ROI</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Transformez l'influence en levier de croissance mesurable. Suivi de performance, contrats clairs et reporting automatisé pour des décisions éclairées.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8" id="marques">
<div className="inline-flex items-center gap-2 text-brand-blue font-medium text-sm">
<i className="w-4 h-4" data-lucide="briefcase"></i>
                        POUR LES ENTREPRISES
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark">
                        Pilotez votre influence avec la précision d'un directeur financier.
                    </h2>
<p className="text-neutral-500 font-light text-lg">
                        Que vous soyez une PME en quête de visibilité ou une grande marque protégeant sa réputation, HypeMi sécurise vos investissements.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-blue mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Filtrage Intelligent</strong>
<span className="text-sm text-neutral-500">Trouvez le profil qui partage vos valeurs et touche votre cible.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-blue mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Paiements Sécurisés</strong>
<span className="text-sm text-neutral-500">Traçabilité complète des transactions et contrats.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-blue mt-0.5" data-lucide="check-circle-2"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Reporting Automatisé</strong>
<span className="text-sm text-neutral-500">Exports PDF prêts pour vos comités de direction.</span>
</div>
</li>
</ul>
<a className="inline-flex text-sm font-medium text-brand-dark border-b border-brand-dark pb-0.5 hover:text-brand-blue hover:border-brand-blue transition-colors" href="#">
                        Découvrir les solutions marques
                    </a>
</div>

<div className="relative bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="absolute -top-4 -right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                        ROI x5.2
                    </div>
<div className="space-y-4">

<div className="flex items-center justify-between pb-4 border-b border-neutral-100">
<span className="text-sm font-medium text-neutral-700">Audit de réputation</span>
<div className="w-10 h-6 bg-brand-blue rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<div className="w-24 h-3 bg-neutral-200 rounded mb-1"></div>
<div className="w-16 h-2 bg-neutral-100 rounded"></div>
</div>
</div>
<div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">98% Match</div>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-neutral-100 rounded-lg opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100"></div>
<div>
<div className="w-20 h-3 bg-neutral-200 rounded mb-1"></div>
<div className="w-12 h-2 bg-neutral-100 rounded"></div>
</div>
</div>
<div className="text-xs text-neutral-400 font-medium">72% Match</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-32" id="createurs">

<div className="relative bg-brand-dark rounded-2xl p-6 shadow-2xl order-2 lg:order-1 -rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="absolute -top-4 -left-4 bg-brand-coral text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                        Opportunités Premium
                    </div>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div>
<p className="text-xs text-neutral-400">Revenus ce mois</p>
<p className="text-2xl font-medium text-white tracking-tight">2 450.000 FCFA</p>
</div>
<div className="text-green-400 text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> +12%
                            </div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
<div className="w-8 h-8 rounded bg-brand-blue flex items-center justify-center text-white text-xs">B</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Briefing Campagne</div>
<div className="text-xs text-neutral-400">Lancement Produit Tech</div>
</div>
<div className="w-2 h-2 rounded-full bg-brand-coral"></div>
</div>
<div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
<div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center text-white text-xs">A</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Contrat Signé</div>
<div className="text-xs text-neutral-400">Agence Digitale</div>
</div>
<i className="w-3 h-3 text-neutral-400" data-lucide="check"></i>
</div>
</div>
</div>
</div>

<div className="space-y-8 order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-brand-coral font-medium text-sm">
<i className="w-4 h-4" data-lucide="zap"></i>
                        POUR LES CRÉATEURS
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark">
                        Votre influence mérite d'être reconnue et structurée.
                    </h2>
<p className="text-neutral-500 font-light text-lg">
                        Du Micro au Macro influenceur, HypeMi vous apporte les outils pour gérer votre image comme une véritable entreprise.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-coral mt-0.5" data-lucide="shield-check"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Crédibilité Professionnelle</strong>
<span className="text-sm text-neutral-500">Un Media Kit généré automatiquement et certifié par nos données.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-coral mt-0.5" data-lucide="shield-check"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Gestion Simplifiée</strong>
<span className="text-sm text-neutral-500">Facturation, contrats et calendriers en un seul endroit.</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-brand-coral mt-0.5" data-lucide="shield-check"></i>
<div>
<strong className="block text-brand-dark text-sm font-medium">Opportunités Ciblées</strong>
<span className="text-sm text-neutral-500">Recevez des offres qui correspondent à vos valeurs, pas du spam.</span>
</div>
</li>
</ul>
<a className="inline-flex text-sm font-medium text-brand-dark border-b border-brand-dark pb-0.5 hover:text-brand-coral hover:border-brand-coral transition-colors" href="#">
                        Rejoindre en tant que créateur
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-brand-dark">De la connexion à l'impact</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-neutral-100 -z-10"></div>
<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-bold text-neutral-200">01</span>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Connecter</h3>
<p className="text-sm text-neutral-500 px-6">
                        Matching intelligent basé sur la pertinence des audiences et l'alignement des valeurs.
                    </p>
</div>
<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-bold text-neutral-200">02</span>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Mesurer</h3>
<p className="text-sm text-neutral-500 px-6">
                        Suivi en temps réel des KPI. Transparence totale sur les engagements et conversions.
                    </p>
</div>
<div className="text-center bg-white">
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-2xl font-bold text-neutral-200">03</span>
</div>
<h3 className="text-lg font-medium text-brand-dark mb-2">Élever</h3>
<p className="text-sm text-neutral-500 px-6">
                        Optimisation continue pour transformer une campagne ponctuelle en stratégie long terme.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-50 -z-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-white to-transparent -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-dark mb-6">
                Prêt à voir au-delà du Hype ?
            </h2>
<p className="text-neutral-500 text-lg mb-10 max-w-2xl mx-auto font-light">
                Rejoignez HypeMi dès aujourd'hui et participez à la construction d'un écosystème d'influence transparent et performant en Afrique.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#">
                    Commencer maintenant
                </a>
<a className="text-neutral-600 px-8 py-3.5 rounded-full font-medium hover:bg-white hover:shadow-sm border border-transparent hover:border-neutral-200 transition-all" href="#">
                    Contacter l'équipe
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-brand-blue rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i>
</div>
<span className="font-semibold tracking-tight text-brand-dark">HypeMi</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Le pont entre l’influenceur et la marque idéale. Une vision fondée sur la donnée, la transparence et l'humain.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-400 hover:text-brand-blue transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-brand-dark text-sm mb-4">Produit</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Pour les marques</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Pour les créateurs</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Agences</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Tarifs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-brand-dark text-sm mb-4">Entreprise</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-brand-dark text-sm mb-4">Légal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">CGU</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 HypeMi. Fait avec passion au Cameroun.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-neutral-500 font-medium">Systèmes opérationnels</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
