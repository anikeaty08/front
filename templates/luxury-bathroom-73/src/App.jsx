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



        document.addEventListener('DOMContentLoaded', () => {
            // Image Comparison Logic
            const container = document.getElementById('image-compare-container');
            const beforeImg = document.getElementById('image-compare-before');
            const slider = document.getElementById('image-compare-slider');

            if (container && beforeImg && slider) {
                const handleDrag = (e) => {
                    const rect = container.getBoundingClientRect();
                    const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
                    const x = clientX - rect.left;
                    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
                    
                    beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
                    slider.style.left = `${percentage}%`;
                };

                container.addEventListener('mousemove', handleDrag);
                container.addEventListener('touchmove', handleDrag, { passive: true });
            }

            // Hover Footer Logic (Vanilla JS implementation of framer-motion approach)
            const footerSvg = document.getElementById('hover-footer-svg');
            const footerMask = document.getElementById('footerRevealMask');
            const footerBaseText = document.getElementById('footer-base-text');
            const footerAnimatedText = document.getElementById('footer-animated-text');
            const footerTextGradient = document.getElementById('footerTextGradient');
            
            if(footerSvg) {
                // Initialize stroke animation after a short delay
                setTimeout(() => {
                    footerAnimatedText.style.transition = 'stroke-dashoffset 4s ease-in-out';
                    footerAnimatedText.style.strokeDashoffset = '0';
                }, 500);

                footerSvg.addEventListener('mousemove', (e) => {
                    const rect = footerSvg.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    footerMask.setAttribute('cx', `${x}%`);
                    footerMask.setAttribute('cy', `${y}%`);
                });

                footerSvg.addEventListener('mouseenter', () => {
                    footerBaseText.style.opacity = '0.7';
                    // Inject gradient stops on hover
                    footerTextGradient.innerHTML = `
                        <stop offset="0%" stop-color="#eab308" />
                        <stop offset="25%" stop-color="#ef4444" />
                        <stop offset="50%" stop-color="#80eeb4" />
                        <stop offset="75%" stop-color="#06b6d4" />
                        <stop offset="100%" stop-color="#8b5cf6" />
                    `;
                });

                footerSvg.addEventListener('mouseleave', () => {
                    footerBaseText.style.opacity = '0';
                    footerTextGradient.innerHTML = '';
                });
            }
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
      

<header className="w-full bg-slate-900 border-b border-white/10 z-50">
<div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:waterdrop-linear" width="32"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">Kreabain</span>
</div>
<nav className="hidden md:flex gap-10">
<a className="text-lg text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-lg text-slate-300 hover:text-white transition-colors" href="#expertise">Notre Expertise</a>
<a className="text-lg text-slate-300 hover:text-white transition-colors" href="#realisations">Réalisations</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors" href="#devis">
                    Devis Gratuit
                </a>
</div>
<button className="md:hidden text-white flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="bg-slate-900 pt-16 pb-20 md:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

<div className="hidden lg:block h-[520px]">
<img alt="Salle de bain moderne" className="hover:opacity-100 transition-opacity duration-500 opacity-90 w-full h-full object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&amp;q=80"/>
</div>

<div className="col-span-1 lg:col-span-2 text-center flex flex-col items-center z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-base font-medium mb-8 border border-blue-500/20">
<iconify-icon icon="solar:stars-linear" width="16"></iconify-icon>
<span className="">Spécialiste en rénovation haut de gamme</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-6">
                        Transformez votre salle de bain en un espace d'exception.
                    </h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                        Rénovation complète, matériaux premium et accompagnement sur-mesure. Confiez votre projet aux experts Kreabain pour une sérénité totale.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 group" href="#devis">
                        Démarrer mon projet
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="hidden lg:block h-[520px]">
<img alt="Artisan au travail" className="hover:opacity-100 transition-opacity duration-500 opacity-90 w-full h-full object-cover rounded-[2rem]" src="https://images.unsplash.com/photo-1604769319166-010643ace337?w=800&amp;q=80"/>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="text-lg font-medium text-white">Garantie Décennale</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:star-linear" width="32"></iconify-icon>
<span className="text-lg font-medium text-white">4.9/5 Avis Clients</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:pen-linear" width="32"></iconify-icon>
<span className="text-lg font-medium text-white">Projet Sur-Mesure</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
<span className="text-lg font-medium text-white">Matériaux Premium</span>
</div>
</div>
</div>
</section>

<section className="md:pt-32 bg-white pt-24 pb-16" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                        L'exigence au cœur de chaque rénovation.
                    </h2>
<p className="text-lg text-slate-600 mb-12 leading-relaxed">
                        Chez Kreabain, nous ne faisons aucun compromis sur la qualité. Notre équipe qualifiée sélectionne les meilleurs matériaux pour vous garantir une salle de bain qui allie esthétique contemporaine et longévité exceptionnelle.
                    </p>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Interlocuteur unique</h4>
<p className="text-base text-slate-600">Un chef de projet dédié qui supervise l'ensemble des travaux.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-1">Devis transparent</h4>
<p className="text-base text-slate-600">Pas de mauvaises surprises. Tout est chiffré avec précision.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Propreté garantie</h4>
<p className="text-base text-slate-600">Protection des lieux et nettoyage complet en fin de chantier.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Respect des délais</h4>
<p className="text-base text-slate-600">Intervention rapide, planifiée et respectée à la lettre.</p>
</div>
</div>
</div>
</div>
<div className="relative grid grid-cols-2 gap-6">
<img alt="Détail salle de bain" className="shadow-slate-200/50 w-full h-96 object-cover rounded-[2rem] mt-16 shadow-xl" src="https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&amp;q=80"/>
<img alt="Robinetterie premium" className="w-full h-96 object-cover rounded-[2rem] shadow-xl shadow-slate-200/50" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="pb-24 md:pb-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">La transformation en images</h2>
<p className="text-lg text-slate-600">Glissez le curseur pour visualiser l'impact de nos rénovations. Un changement radical pour un confort absolu au quotidien.</p>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-slate-200/50 group" id="image-compare-container">

<img alt="Après rénovation" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<img alt="Avant rénovation" className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" id="image-compare-before" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{clipPath: 'inset(0 50% 0 0)'}}/>

<div className="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm pointer-events-none" id="image-compare-slider" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.15)]">
<div className="flex gap-0.5 text-slate-400">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-6 left-6 px-5 py-2 bg-slate-900/40 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Avant</div>
<div className="absolute top-6 right-6 px-5 py-2 bg-slate-900/40 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">Après</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Nos services d'aménagement</h2>
<p className="text-lg text-slate-600 leading-relaxed">De la conception à la pose, nous gérons l'intégralité de votre projet pour vous offrir une salle de bain moderne, esthétique et parfaitement fonctionnelle.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Rénovation complète</h3>
<p className="text-base text-slate-600">Refonte totale de votre espace : plomberie, électricité, carrelage et installation sanitaire.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
<iconify-icon icon="solar:smart-home-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Remplacement baignoire</h3>
<p className="text-base text-slate-600">Transformez votre ancienne baignoire en une douche à l'italienne moderne, sûre et accessible.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
<iconify-icon icon="solar:full-screen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Optimisation d'espace</h3>
<p className="text-base text-slate-600">Agencement intelligent et mobilier sur-mesure pour maximiser le confort des petites surfaces.</p>
</div>

<div className="bg-blue-500 p-8 rounded-[2rem] shadow-lg shadow-blue-500/20 flex flex-col justify-between">
<div>
<div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Un projet en tête ?</h3>
<p className="text-base text-blue-100">Discutons de vos envies et obtenez une estimation détaillée et gratuite.</p>
</div>
<a className="mt-8 bg-white text-blue-600 text-lg font-medium py-4 px-6 rounded-full text-center hover:bg-slate-50 transition-colors" href="#devis">
                        Demander un devis
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-16 lg:p-20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 relative z-10">Engagement &amp; Satisfaction</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
<div className="flex flex-col gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Expertise Reconnue</h4>
<p className="text-base text-slate-400">Des artisans qualifiés et passionnés par leur métier.</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Proximité</h4>
<p className="text-base text-slate-400">Intervention rapide sur l'ensemble de votre secteur.</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Planification Flexible</h4>
<p className="text-base text-slate-400">Nous nous adaptons à vos contraintes d'agenda.</p>
</div>
</div>
<div className="flex flex-col gap-5">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">100% Satisfaction</h4>
<p className="text-base text-slate-400">Notre priorité : un résultat à la hauteur de vos attentes.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="realisations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Inspirations &amp; Réalisations</h2>
<p className="text-lg text-slate-600">Découvrez nos dernières transformations d'espaces et laissez-vous inspirer pour votre futur aménagement.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 aspect-[16/9] md:aspect-auto md:h-[480px] rounded-[2.5rem] overflow-hidden relative group">
<img alt="Réalisation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="aspect-square md:aspect-auto md:h-[480px] rounded-[2.5rem] overflow-hidden relative group">
<img alt="Réalisation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="pt-24 md:pt-32 pb-12 bg-slate-50 border-t border-slate-200/50" id="devis">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-start">

<div className="lg:sticky lg:top-32">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-12">Comment fonctionne Kreabain ?</h2>
<div className="space-y-12">
<div className="flex gap-6">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl font-medium text-slate-900 shrink-0 shadow-sm">1</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Demande de devis</h3>
<p className="text-lg text-slate-600">Remplissez le formulaire ci-contre. Un de nos experts analyse votre demande et vous recontacte sous 24h.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl font-medium text-slate-900 shrink-0 shadow-sm">2</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Visite &amp; Conception</h3>
<p className="text-lg text-slate-600">Nous nous déplaçons chez vous pour étudier l'espace, écouter vos envies et concevoir un projet sur-mesure.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl font-medium text-slate-900 shrink-0 shadow-sm">3</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Réalisation des travaux</h3>
<p className="text-lg text-slate-600">Nos artisans qualifiés transforment votre salle de bain avec minutie, en respectant les délais convenus.</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 mb-12">
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-8">Obtenir une estimation gratuite</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-base text-slate-700" htmlFor="name">Nom &amp; Prénom</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base text-slate-700" htmlFor="phone">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" id="phone" placeholder="06 12 34 56 78" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base text-slate-700" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-base text-slate-700" htmlFor="project-type">Type de projet</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors cursor-pointer" id="project-type">
<option disabled="" selected="" value="">Sélectionnez un projet...</option>
<option value="complete">Rénovation complète</option>
<option value="douche">Remplacement Baignoire par Douche</option>
<option value="neuf">Création salle de bain</option>
<option value="autre">Autre aménagement</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-base text-slate-700" htmlFor="message">Description du projet (optionnel)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-lg rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none" id="message" placeholder="Parlez-nous de vos envies, des dimensions..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-4 text-lg font-medium transition-all shadow-sm flex justify-center items-center gap-2 mt-4" type="button">
                            Demander mon devis
                            <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<div className="px-4 md:px-8 pb-4 md:pb-8 bg-slate-50">
<footer className="bg-slate-900 relative h-fit rounded-[2.5rem] overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(125% 125% at 50% 10%, rgba(15, 15, 17, 0.4) 50%, rgba(59, 130, 246, 0.2) 100%)'}}></div>
<div className="max-w-7xl mx-auto p-10 md:p-14 z-40 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

<div className="flex flex-col space-y-4">
<div className="flex items-center space-x-2">
<iconify-icon className="text-blue-500" icon="solar:waterdrop-linear" width="32"></iconify-icon>
<span className="text-white text-3xl font-semibold tracking-tight">Kreabain</span>
</div>
<p className="text-sm text-slate-300 leading-relaxed">
                            Votre spécialiste en rénovation de salle de bain haut de gamme. Conception, réalisation et accompagnement sur-mesure.
                        </p>
</div>

<div>
<h4 className="text-white text-lg font-medium mb-6">À propos</h4>
<ul className="space-y-3">
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">Notre Histoire</a></li>
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">Notre Équipe</a></li>
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">Nos Garanties</a></li>
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">Carrières</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-medium mb-6">Liens utiles</h4>
<ul className="space-y-3">
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">FAQ</a></li>
<li><a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#">Support client</a></li>
<li className="relative inline-block">
<a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="#devis">Devis gratuit</a>
<span className="absolute top-0 -right-3 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
</li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-medium mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-center space-x-3">
<iconify-icon className="text-blue-500" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="mailto:hello@kreabain.fr">hello@kreabain.fr</a>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-blue-500" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="text-slate-300 hover:text-blue-500 transition-colors text-sm" href="tel:+33123456789">01 23 45 67 89</a>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-slate-300 text-sm">Paris, France</span>
</li>
</ul>
</div>
</div>
<hr className="border-t border-slate-700 my-8"/>

<div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
<div className="flex space-x-6 text-slate-400">
<a aria-label="Facebook" className="hover:text-blue-500 transition-colors font-medium" href="#">Facebook</a>
<a aria-label="Instagram" className="hover:text-blue-500 transition-colors font-medium" href="#">Instagram</a>
<a aria-label="Houzz" className="hover:text-blue-500 transition-colors font-medium" href="#">Houzz</a>
</div>
<p className="text-center md:text-left text-slate-400">
                        © 2024 Kreabain. Tous droits réservés.
                    </p>
</div>
</div>

<div className="hidden lg:flex h-[24rem] -mt-32 -mb-28 z-10 relative pointer-events-auto">
<svg className="select-none uppercase cursor-default" height="100%" id="hover-footer-svg" viewbox="0 0 300 100" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient cx="50%" cy="50%" gradientunits="userSpaceOnUse" id="footerTextGradient" r="25%">

</lineargradient>
<radialgradient cx="50%" cy="50%" gradientunits="userSpaceOnUse" id="footerRevealMask" r="20%">
<stop offset="0%" stop-color="white"></stop>
<stop offset="100%" stop-color="black"></stop>
</radialgradient>
<mask id="footerTextMask">
<rect fill="url(#footerRevealMask)" height="100%" width="100%" x="0" y="0"></rect>
</mask>
</defs>

<text className="fill-transparent stroke-slate-800 text-7xl font-semibold transition-opacity duration-300" dominant-baseline="middle" id="footer-base-text" strokeWidth="0.3" style={{opacity: '0'}} text-anchor="middle" x="50%" y="50%">
                        KREABAIN
                    </text>

<text className="fill-transparent stroke-blue-500/80 text-7xl font-semibold" dominant-baseline="middle" id="footer-animated-text" stroke-dasharray="1000" stroke-dashoffset="1000" strokeWidth="0.3" text-anchor="middle" x="50%" y="50%">
                        KREABAIN
                    </text>

<text className="fill-transparent text-7xl font-semibold" dominant-baseline="middle" mask="url(#footerTextMask)" stroke="url(#footerTextGradient)" strokeWidth="0.3" text-anchor="middle" x="50%" y="50%">
                        KREABAIN
                    </text>
</svg>
</div>
</footer>
</div>



    </>
  );
}
