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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach((el) => {
                observer.observe(el);
            });
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
      

<header className="fixed top-0 w-full z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800 transition-all" id="header">
<div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

<a className="text-base font-bold text-white tracking-tight hover:text-indigo-400 transition-colors" href="#">
                WORDPRESSDEV.TN
            </a>

<nav className="hidden md:flex items-center space-x-8" role="navigation">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#processus">Processus</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#projets">Projets</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">À propos</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<a className="btn-primary hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-all" href="https://wa.me/21622367325">
                    Contact
                </a>
<button aria-label="Menu Principal" className="md:hidden text-neutral-400 hover:text-white">

<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>
<main>

<section className="section relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950/0 to-neutral-950/0 pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto reveal-up">

<div className="badge mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Disponible pour freelancing</span>
</div>

<h1 className="section-title text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Développeur Web &amp; <br/> <span className="text-indigo-500">Expert WordPress</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed">
                        Je conçois des solutions digitales performantes, sécurisées et sur-mesure pour propulser votre activité en ligne.
                    </p>

<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<a className="btn-primary inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-full backdrop-blur-sm" href="#projets">
                            Voir mes projets
                        </a>
<a className="btn-secondary inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-neutral-300 bg-transparent border border-neutral-800 rounded-full" href="#services">
                            Mes services
                        </a>
</div>
</div>
</div>
</section>

<section className="section py-24 bg-black border-t border-neutral-900" id="services">
<div className="container mx-auto px-6">

<div className="max-w-2xl mb-16 reveal-up">
<h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Mes Expertises</h2>
<p className="text-neutral-500 text-lg">Des solutions techniques adaptées à vos besoins de croissance.</p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<article className="card service-card p-8 rounded-2xl bg-neutral-950 border border-neutral-800 reveal-up">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-indigo-500 border border-neutral-800">

<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Thèmes Sur Mesure</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Développement de thèmes WordPress légers et performants, sans constructeurs de pages lourds.</p>
</article>

<article className="card service-card p-8 rounded-2xl bg-neutral-950 border border-neutral-800 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-indigo-500 border border-neutral-800">

<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">E-commerce WooCommerce</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Boutiques en ligne optimisées pour la conversion, passerelles de paiement et gestion de stocks.</p>
</article>

<article className="card service-card p-8 rounded-2xl bg-neutral-950 border border-neutral-800 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-indigo-500 border border-neutral-800">

<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Optimisation &amp; Vitesse</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Audit de performance, optimisation Core Web Vitals et sécurisation de votre infrastructure.</p>
</article>
</div>
</div>
</section>

<section className="section py-24 bg-neutral-950 border-t border-neutral-900" id="processus">
<div className="container mx-auto px-6">

<div className="text-center mb-16 reveal-up">
<h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Comment je travaille</h2>
</div>

<div className="grid md:grid-cols-4 gap-6">

<div className="card p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 reveal-up">
<span className="text-4xl font-bold text-neutral-800 mb-4 block">01</span>
<h4 className="text-lg font-semibold text-white mb-2">Analyse</h4>
<p className="text-sm text-neutral-500">Étude de vos besoins et définition des objectifs techniques.</p>
</div>

<div className="card p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 reveal-up" style={{transitionDelay: '100ms'}}>
<span className="text-4xl font-bold text-neutral-800 mb-4 block">02</span>
<h4 className="text-lg font-semibold text-white mb-2">Design &amp; UI</h4>
<p className="text-sm text-neutral-500">Maquettage et validation de l'interface utilisateur.</p>
</div>

<div className="card p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 reveal-up" style={{transitionDelay: '200ms'}}>
<span className="text-4xl font-bold text-neutral-800 mb-4 block">03</span>
<h4 className="text-lg font-semibold text-white mb-2">Développement</h4>
<p className="text-sm text-neutral-500">Codage propre, respectant les standards WordPress.</p>
</div>

<div className="card p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 reveal-up" style={{transitionDelay: '300ms'}}>
<span className="text-4xl font-bold text-neutral-800 mb-4 block">04</span>
<h4 className="text-lg font-semibold text-white mb-2">Livraison</h4>
<p className="text-sm text-neutral-500">Mise en ligne, formation et suivi post-lancement.</p>
</div>
</div>
</div>
</section>

<section className="section py-24 bg-black border-t border-neutral-900" id="projets">
<div className="container mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-up">
<div>
<h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Réalisations Récentes</h2>
<p className="text-neutral-500 text-lg">Une sélection de projets web modernes.</p>
</div>
<a className="text-indigo-400 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors" href="#">
                        Voir tout sur GitHub 
                        
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="card project-card group block bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden reveal-up">
<div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">

<div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-2 py-1 text-xs font-medium bg-black/80 text-white border border-white/10 rounded">WordPress</span>
<span className="px-2 py-1 text-xs font-medium bg-black/80 text-white border border-white/10 rounded">ACF</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Site Corporate Finance</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Refonte complète d'un site institutionnel avec un back-office sur mesure.</p>
</div>
</article>

<article className="card project-card group block bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden reveal-up" style={{transitionDelay: '100ms'}}>
<div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-2 py-1 text-xs font-medium bg-black/80 text-white border border-white/10 rounded">WooCommerce</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">E-shop Mode</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Boutique haute performance avec filtres avancés et panier AJAX.</p>
</div>
</article>

<article className="card project-card group block bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden reveal-up" style={{transitionDelay: '200ms'}}>
<div className="aspect-video w-full bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
<div className="absolute bottom-4 left-4 flex gap-2">
<span className="px-2 py-1 text-xs font-medium bg-black/80 text-white border border-white/10 rounded">React</span>
<span className="px-2 py-1 text-xs font-medium bg-black/80 text-white border border-white/10 rounded">Headless</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">Dashboard SaaS</h3>
<p className="text-sm text-neutral-400 line-clamp-2">Application web connectée à l'API WordPress pour la gestion de contenu.</p>
</div>
</article>
</div>
</div>
</section>

<section className="section py-24 bg-neutral-950 border-t border-neutral-900" id="about">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-up">
<h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Plus qu'un développeur, un partenaire technique.</h2>
<div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
<p>
                                Basé en Tunisie, je collabore avec des agences et des entreprises à l'international. Mon approche combine rigueur technique et sensibilité design.
                            </p>
<p>
                                Je ne me contente pas d'installer des plugins : je construis des architectures durables, optimisées pour le SEO et faciles à maintenir.
                            </p>
</div>

<div className="mt-8 pt-8 border-t border-neutral-900 flex gap-8">
<div>
<span className="block text-3xl font-bold text-white">5+</span>
<span className="text-sm text-neutral-500">Années d'expérience</span>
</div>
<div>
<span className="block text-3xl font-bold text-white">50+</span>
<span className="text-sm text-neutral-500">Projets livrés</span>
</div>
<div>
<span className="block text-3xl font-bold text-white">100%</span>
<span className="text-sm text-neutral-500">Satisfaction</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 reveal-up">
<div className="stat-card flex flex-col aspect-square text-center bg-neutral-900/50 border-neutral-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5 items-center justify-center">

<svg className="w-8 h-8 text-indigo-500 mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
</svg>
<span className="font-semibold text-white">Code Propre</span>
</div>
<div className="stat-card p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 flex flex-col items-center text-center justify-center aspect-square translate-y-8">

<svg className="w-8 h-8 text-indigo-500 mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-semibold text-white">Sécurité</span>
</div>
<div className="stat-card p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 flex flex-col items-center text-center justify-center aspect-square">

<svg className="w-8 h-8 text-indigo-500 mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path>
</svg>
<span className="font-semibold text-white">Responsive</span>
</div>
<div className="stat-card p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800 flex flex-col items-center text-center justify-center aspect-square translate-y-8">

<svg className="w-8 h-8 text-indigo-500 mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
<span className="font-semibold text-white">Performance</span>
</div>
</div>
</div>
</div>
</section>

<section className="section py-24 bg-black border-t border-neutral-900" id="faq">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight reveal-up">Questions Fréquentes</h2>
<div className="space-y-4 reveal-up">

<details className="group bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden open:border-neutral-700 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-neutral-900/50 transition-colors">
                            Combien coûte un site WordPress ?
                            <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">

<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-900 pt-4">
                            Chaque projet est unique. Un site vitrine simple démarre généralement autour de 800€, tandis qu'une boutique complexe ou une plateforme sur-mesure nécessitera un devis détaillé après analyse du cahier des charges.
                        </div>
</details>

<details className="group bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden open:border-neutral-700 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-neutral-900/50 transition-colors">
                            Proposez-vous de la maintenance ?
                            <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-900 pt-4">
                            Oui, je propose des forfaits de maintenance mensuels incluant les mises à jour de sécurité, les sauvegardes journalières et le monitoring de performance pour garantir la pérennité de votre site.
                        </div>
</details>

<details className="group bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden open:border-neutral-700 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-neutral-900/50 transition-colors">
                            Travaillez-vous en marque blanche ?
                            <span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-900 pt-4">
                            Absolument. Je collabore régulièrement avec des agences de communication en tant que partenaire technique invisible, respectant vos processus et vos délais.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="section py-12 bg-neutral-950 border-t border-neutral-900 text-sm">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<span className="font-bold text-white">WORDPRESSDEV.TN</span>
<span className="text-neutral-500">© 2024 Tous droits réservés.</span>
</div>
<div className="flex gap-8">
<a className="text-neutral-400 hover:text-white transition-colors" href="mailto:contact@wordpressdev.tn">Email</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
