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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<span className="w-2 h-6 bg-white block"></span>
                INFINITY
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#presentation">L'Agence</a>
<a className="hover:text-white transition-colors" href="#services">Expertise</a>
<a className="hover:text-white transition-colors" href="#projects">Réalisations</a>
<a className="hover:text-white transition-colors" href="#blog">Journal</a>
</nav>
<a className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Démarrer un projet
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Architecture Hero" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-white/80">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponible pour nouveaux projets 2024
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Au-delà de <br className="hidden md:block"/>l'architecture.
            </h1>
<p className="max-w-xl mx-auto text-lg text-neutral-400 font-light mb-10 leading-relaxed">
                Nous concevons des espaces vivants qui transcendent la fonction pour devenir de véritables expériences émotionnelles.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Nous contacter
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#presentation">
                    Découvrir l'agence
                </a>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-16">Pourquoi choisir INFINITY ?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="bg-neutral-950 p-10 group hover:bg-neutral-900/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Précision Absolue</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Chaque millimètre compte. Nos plans sont d'une rigueur chirurgicale pour garantir une exécution sans faille sur le chantier.</p>
</div>

<div className="bg-neutral-950 p-10 group hover:bg-neutral-900/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Éco-Conception</h3>
<p className="text-neutral-400 text-sm leading-relaxed">L'architecture durable n'est pas une option. Nous intégrons les matériaux biosourcés et l'efficacité énergétique dès l'esquisse.</p>
</div>

<div className="bg-neutral-950 p-10 group hover:bg-neutral-900/50 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Garantie &amp; Confiance</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Un suivi transparent, des budgets respectés et une garantie décennale. Votre sérénité est notre fondation.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="presentation">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-30"></div>
<img alt="Agence Infinity" className="relative w-full h-[600px] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?w=1600&amp;q=80"/>
<div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-lg border border-white/10">
<div className="flex items-start gap-4">
<iconify-icon className="text-white mt-1" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="text-white font-medium">Une équipe de 15 experts</p>
<p className="text-xs text-neutral-400 mt-1">Architectes, Ingénieurs, Designers</p>
</div>
</div>
</div>
</div>
<div>
<span className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-4 block">Notre Philosophie</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                        Sculpter la lumière, 
                        Structurer le vide.
                    </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-6 font-light">
                        Depuis 2010, INFINITY Architecture repousse les limites de la construction traditionnelle. Nous ne construisons pas seulement des murs, nous créons des environnements qui influencent positivement la vie de leurs occupants.
                    </p>
<p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light">
                        Notre approche "Design-First" alliée à une rigueur technique sans faille nous a permis de livrer plus de 150 projets d'exception à travers l'Europe.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Études de faisabilité approfondies
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Modélisation BIM 3D avancée
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Maîtrise d'œuvre complète
                        </li>
</ul>
<a className="text-white border-b border-white/30 hover:border-white pb-1 inline-flex items-center gap-2 transition-all" href="#services">
                        Voir nos services
                        <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Nos Domaines d'Expertise</h2>
<span className="hidden md:block text-neutral-500 text-sm">Solutions sur mesure</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5]">
<img alt="Residentiel" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-xl font-medium text-white">Résidentiel Haut de Gamme</h3>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Villas contemporaines, rénovations de prestige et extensions modernes.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5]">
<img alt="Commercial" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-xl font-medium text-white">Espaces Commerciaux</h3>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Sièges sociaux, bureaux open-space et retail design pour marques innovantes.</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5]">
<img alt="Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<h3 className="text-xl font-medium text-white">Architecture d'Intérieur</h3>
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="mt-2 text-sm text-neutral-400">Design de mobilier sur mesure, études d'éclairage et curation de matériaux.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-2xl font-medium text-white tracking-tight">Ils nous font confiance</h2>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/5 rounded-xl p-8 backdrop-blur-sm">
<div className="flex gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"INFINITY a transformé notre vision floue en une réalité époustouflante. Leur gestion du projet a été irréprochable du début à la fin."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white font-medium">JL</div>
<div>
<p className="text-white text-xs font-medium">Jean Laurent</p>
<p className="text-neutral-500 text-[10px] uppercase tracking-wider">CEO, TechStart</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-8 backdrop-blur-sm">
<div className="flex gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"L'équipe a su marier l'esthétique moderne avec les contraintes écologiques que nous avions imposées. Un travail d'orfèvre."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white font-medium">SB</div>
<div>
<p className="text-white text-xs font-medium">Sophie Bernard</p>
<p className="text-neutral-500 text-[10px] uppercase tracking-wider">Propriétaire Villa K</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-8 backdrop-blur-sm">
<div className="flex gap-1 text-white mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Une écoute rare dans ce milieu. Ils ont compris nos besoins opérationnels pour nos bureaux tout en gardant un design premium."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white font-medium">MD</div>
<div>
<p className="text-white text-xs font-medium">Marc Dubois</p>
<p className="text-neutral-500 text-[10px] uppercase tracking-wider">Directeur Immobilier</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
<span>Quelles sont les étapes d'un projet avec INFINITY ?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Notre processus se divise en 4 phases : Esquisse (faisabilité), Avant-projet (plans détaillés et permis), Projet technique (consultation des entreprises) et enfin la Supervision de chantier jusqu'à la remise des clés.
                    </div>
</details>
<details className="group bg-neutral-900/30 rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
<span>Travaillez-vous sur des projets de rénovation ?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Absolument. La réhabilitation de l'existant est au cœur de notre démarche écologique. Nous transformons des bâtiments anciens en espaces contemporains tout en préservant leur âme.
                    </div>
</details>
<details className="group bg-neutral-900/30 rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
<span>Quel est le budget moyen pour une maison d'architecte ?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Le budget varie énormément selon la complexité et les matériaux. En général, nos projets résidentiels débutent autour de 2500€/m². Nous établissons une estimation précise dès la première rencontre.
                    </div>
</details>
<details className="group bg-neutral-900/30 rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
<span>Gérez-vous les démarches administratives (Permis de construire) ?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Oui, nous prenons en charge l'intégralité du volet administratif : dépôt de permis, relations avec l'urbanisme et conformité aux normes RT2020/RE2020.
                    </div>
</details>
<details className="group bg-neutral-900/30 rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
<span>Dans quelles régions intervenez-vous ?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        Notre agence est basée à Paris, mais nous intervenons dans toute la France et ponctuellement en Europe pour des projets d'envergure.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight">Le Journal</h2>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">Voir tous les articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-lg mb-4 border border-white/10">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
<span>12 Oct 2023</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Tendances</span>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">Le retour du brutalisme dans l'habitat moderne</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-lg mb-4 border border-white/10">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
<span>28 Sept 2023</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Matériaux</span>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">Pourquoi le bois brûlé (Shou Sugi Ban) séduit les architectes</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-lg mb-4 border border-white/10">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
<span>15 Sept 2023</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Innovation</span>
</div>
<h3 className="text-lg font-medium text-white group-hover:text-neutral-300 transition-colors">La maison passive : Investissement ou coût ?</h3>
</article>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-neutral-400 mb-10 font-light">Remplissez le formulaire ci-dessous, notre équipe vous répondra sous 24h.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Nom</label>
<input className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white focus:outline-none transition-colors text-sm placeholder-neutral-700" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Prénom</label>
<input className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white focus:outline-none transition-colors text-sm placeholder-neutral-700" placeholder="Votre prénom" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Email</label>
<input className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white focus:outline-none transition-colors text-sm placeholder-neutral-700" placeholder="nom@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Type de projet</label>
<div className="flex gap-4 pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-neutral-600 flex items-center justify-center group-hover:border-white transition-colors">
<div className="w-2 h-2 rounded-full bg-white opacity-0 input-radio-checked"></div>
</div>
<input className="hidden" name="type" onclick="this.previousElementSibling.children[0].classList.remove('opacity-0'); this.parentElement.parentElement.querySelectorAll('.input-radio-checked').forEach(el =&gt; el !== this.previousElementSibling.children[0] ? el.classList.add('opacity-0') : null)" type="radio"/>
<span className="text-sm text-neutral-300">Résidentiel</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-neutral-600 flex items-center justify-center group-hover:border-white transition-colors">
<div className="w-2 h-2 rounded-full bg-white opacity-0 input-radio-checked"></div>
</div>
<input className="hidden" name="type" onclick="this.previousElementSibling.children[0].classList.remove('opacity-0'); this.parentElement.parentElement.querySelectorAll('.input-radio-checked').forEach(el =&gt; el !== this.previousElementSibling.children[0] ? el.classList.add('opacity-0') : null)" type="radio"/>
<span className="text-sm text-neutral-300">Commercial</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:border-white focus:outline-none transition-colors text-sm placeholder-neutral-700 resize-none" placeholder="Dites-nous en plus sur vos besoins..." rows="4"></textarea>
</div>
<button className="group w-full py-4 bg-white text-black font-medium text-sm rounded-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 mt-4" type="button">
                            Envoyer la demande
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="h-full min-h-[400px] relative rounded-2xl overflow-hidden border border-white/10">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.349014!3d48.8583701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center">
<div>
<p className="text-white font-medium text-sm">INFINITY Architecture</p>
<p className="text-neutral-400 text-xs">12 Avenue de l'Opéra, 75001 Paris</p>
</div>
<a className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition-transform" href="mailto:contact@infinity-arch.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-1.5 h-4 bg-white block"></span>
<span className="text-lg font-medium tracking-tighter text-white uppercase">INFINITY</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Pinterest</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 INFINITY Architecture. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
