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
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-semibold tracking-tighter uppercase text-neutral-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-[#e22400] text-white flex items-center justify-center rounded-lg text-lg">L</span>
                Lobry
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-[#e22400] transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-[#e22400] transition-colors" href="#services">Services</a>
<a className="hover:text-[#e22400] transition-colors" href="#realisations">Réalisations</a>
<a className="hover:text-[#e22400] transition-colors" href="#avis">Avis</a>
<a className="hover:text-[#e22400] transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#e22400] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#c41f00] transition-all hover:shadow-lg hover:shadow-orange-500/20" href="#contact">
<span>Devis Gratuit</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="accueil">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#e22400] text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e22400] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#e22400]"></span>
</span>
                    Disponible pour intervention rapide
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                    L'art de la <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e22400] to-orange-600">toiture durable.</span>
</h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed max-w-lg">
                    Expert couvreur zingueur. Nous protégeons votre habitat avec des matériaux premium et un savoir-faire artisanal de précision.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all" href="#contact">
                        Contactez-nous
                    </a>
<a className="flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-50 transition-all" href="#services">
                        Voir nos services
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-neutral-100 pt-8">
<div>
<p className="text-2xl font-semibold text-neutral-900 tracking-tight">15+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Années d'expérience</p>
</div>
<div>
<p className="text-2xl font-semibold text-neutral-900 tracking-tight">500+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide">Chantiers livrés</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-orange-100 to-neutral-100 rounded-[2rem] transform rotate-2"></div>
<img alt="Toiture moderne" className="relative w-full h-[600px] object-cover rounded-[1.5rem] shadow-2xl shadow-neutral-200/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62c936a0-d219-4bcd-a0b5-25cab5f6aa57_1600w.jpg"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-100 text-green-600 p-2 rounded-lg">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Garantie Décennale</p>
<p className="text-xs text-neutral-500 mt-1">Tous nos travaux sont assurés pour votre tranquillité.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 text-[#e22400] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Intervention Rapide</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        En cas d'urgence ou de fuite, notre équipe se mobilise dans les plus brefs délais pour sécuriser votre toiture.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 text-[#e22400] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Matériaux Premium</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Nous sélectionnons rigoureusement nos tuiles, zinc et ardoises pour une longévité maximale.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 text-[#e22400] rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Devis Transparent</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Aucune surprise. Nos devis sont détaillés et respectés au centime près.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="relative">
<img alt="Artisan Lobry" className="rounded-2xl object-cover h-[500px] w-full shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0154e186-eeca-442d-8880-1b760e5cf8ee_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl border border-neutral-100 shadow-lg hidden md:block">
<p className="font-handwriting text-neutral-400 text-sm mb-2">Fondateur</p>
<img alt="Signature" className="h-8 opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">L'Entreprise Lobry :Une tradition d'excellence.</h2>
<p className="text-neutral-500 mb-6 leading-relaxed">
                        Depuis plus d'une décennie, l'entreprise Lobry s'impose comme une référence dans la couverture et la zinguerie. Nous ne sommes pas de simples poseurs de tuiles, nous sommes des artisans passionnés par la protection et l'esthétique de votre patrimoine.
                    </p>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        Spécialisés dans la rénovation complexe et le façonnage du zinc sur-mesure, nous apportons une attention méticuleuse à chaque détail, de l'étanchéité aux finitions esthétiques.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#e22400] text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-700 text-sm font-medium">Artisans certifiés RGE</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#e22400] text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-700 text-sm font-medium">Respect des normes DTU</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#e22400] text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-700 text-sm font-medium">Suivi de chantier personnalisé</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#e22400] font-medium text-sm tracking-wide uppercase">Nos Expertises</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">Solutions complètes pour votre toit</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-[#e22400]/50">
<div className="h-48 overflow-hidden">
<img alt="Couverture Zinguerie" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-[#e22400]/10 text-[#e22400] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Couverture &amp; Zinguerie</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Rénovation complète, pose de tuiles, ardoises et travaux de zinguerie sur-mesure (gouttières, chêneaux) pour une étanchéité parfaite.
                        </p>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-[#e22400] transition-colors" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-[#e22400]/50">
<div className="h-48 overflow-hidden">
<img alt="Velux" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0a073dc-113c-4567-bc44-e67a00f44791_800w.jpg"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-[#e22400]/10 text-[#e22400] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:window-frame-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Pose de Velux</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Illuminez vos combles. Installation, remplacement et motorisation de fenêtres de toit Velux avec isolation thermique renforcée.
                        </p>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-[#e22400] transition-colors" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-[#e22400]/50">
<div className="h-48 overflow-hidden">
<img alt="Ramonage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0154e186-eeca-442d-8880-1b760e5cf8ee_800w.jpg"/>
</div>
<div className="p-8">
<div className="w-10 h-10 bg-[#e22400]/10 text-[#e22400] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:flame-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Ramonage</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Entretien obligatoire de vos conduits de fumée, poêles et cheminées. Délivrance du certificat de ramonage pour votre assurance.
                        </p>
<a className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-[#e22400] transition-colors" href="#contact">
                            En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100" id="avis">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-2">Ils nous font confiance</h2>
<p className="text-neutral-500">La satisfaction de nos clients est notre meilleure publicité.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex text-[#e22400]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="font-semibold text-neutral-900">4.9/5</span>
<span className="text-neutral-400 text-sm">(124 avis)</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-50 p-6 rounded-2xl">
<div className="flex text-[#e22400] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"Travail remarquable pour le remplacement de ma toiture en ardoise. L'équipe Lobry est ponctuelle, polie et le chantier a été laissé impeccable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-500">M</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Marc D.</p>
<p className="text-xs text-neutral-400">Rénovation complète</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-6 rounded-2xl">
<div className="flex text-[#e22400] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"J'ai fait appel à Lobry pour la pose de 3 Velux. Le conseil sur la luminosité était parfait. Le devis a été respecté. Je recommande."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-500">S</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Sophie L.</p>
<p className="text-xs text-neutral-400">Installation Velux</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-6 rounded-2xl">
<div className="flex text-[#e22400] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-neutral-600 text-sm mb-6 leading-relaxed">"Intervention rapide suite à une fuite après une tempête. Très professionnels et réactifs. Le tarif était très correct."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-500">P</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Pierre V.</p>
<p className="text-xs text-neutral-400">Dépannage urgence</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">

<details className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 open:border-orange-100 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-neutral-900">
                        Le devis est-il payant ?
                        <span className="transform transition-transform group-open:rotate-180 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                        Non, tous nos devis sont 100% gratuits et sans engagement. Nous nous déplaçons pour évaluer les travaux nécessaires.
                    </div>
</details>

<details className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 open:border-orange-100 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-neutral-900">
                        Intervenez-vous en urgence ?
                        <span className="transform transition-transform group-open:rotate-180 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                        Oui, pour les fuites importantes ou les dégâts suite aux intempéries, nous disposons d'un service de mise hors d'eau rapide sous 24/48h.
                    </div>
</details>

<details className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 open:border-orange-100 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-neutral-900">
                        Vos travaux sont-ils garantis ?
                        <span className="transform transition-transform group-open:rotate-180 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                        Absolument. Nous sommes couverts par une assurance décennale. Tous nos travaux de gros œuvre sont garantis 10 ans.
                    </div>
</details>

<details className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 open:border-orange-100 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-neutral-900">
                        Dans quelle zone intervenez-vous ?
                        <span className="transform transition-transform group-open:rotate-180 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                        Nous intervenons dans un rayon de 40km autour de notre siège. Contactez-nous pour vérifier si votre commune est desservie.
                    </div>
</details>

<details className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-100 open:border-orange-100 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-neutral-900">
                        Quel est le meilleur moment pour démousser sa toiture ?
                        <span className="transform transition-transform group-open:rotate-180 text-neutral-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">
                        Idéalement au printemps ou à la fin de l'automne, pour éviter les périodes de gel ou de fortes chaleurs qui peuvent altérer l'efficacité des traitements.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Actualités &amp; Conseils</h2>
<a className="text-sm font-medium text-[#e22400] hover:text-orange-700 hidden md:block" href="#">Voir tous les articles</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4">
<img alt="Blog" className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62c936a0-d219-4bcd-a0b5-25cab5f6aa57_800w.jpg"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<span>12 Oct 2023</span>
<span>•</span>
<span>Conseils</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-[#e22400] transition-colors">Comment repérer une infiltration d'eau ?</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Les signes précurseurs ne trompent pas : taches au plafond, peinture qui cloque...</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4">
<img alt="Blog" className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<span>05 Nov 2023</span>
<span>•</span>
<span>Rénovation</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-[#e22400] transition-colors">Ardoise ou Tuile : que choisir ?</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Le choix du matériau dépend de votre région, de la pente du toit et de votre budget.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4">
<img alt="Blog" className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0a073dc-113c-4567-bc44-e67a00f44791_800w.jpg"/>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
<span>20 Nov 2023</span>
<span>•</span>
<span>Entretien</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-[#e22400] transition-colors">L'importance du nettoyage de gouttières</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Des gouttières bouchées peuvent causer des dégâts considérables sur vos façades.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Discutons de votre projet</h2>
<p className="text-neutral-500 mb-8">Remplissez le formulaire ci-dessous. Nous vous répondrons sous 24h.</p>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Nom</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e22400] focus:border-transparent transition-all placeholder:text-neutral-400" placeholder="Votre nom" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Téléphone</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e22400] focus:border-transparent transition-all placeholder:text-neutral-400" placeholder="06 00 00 00 00" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e22400] focus:border-transparent transition-all placeholder:text-neutral-400" placeholder="vous@email.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Type de projet</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
<input className="accent-[#e22400] w-4 h-4" name="project" type="radio"/>
<span className="text-sm text-neutral-600">Rénovation</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
<input className="accent-[#e22400] w-4 h-4" name="project" type="radio"/>
<span className="text-sm text-neutral-600">Fuite / Urgence</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
<input className="accent-[#e22400] w-4 h-4" name="project" type="radio"/>
<span className="text-sm text-neutral-600">Velux</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
<input className="accent-[#e22400] w-4 h-4" name="project" type="radio"/>
<span className="text-sm text-neutral-600">Entretien</span>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e22400] focus:border-transparent transition-all placeholder:text-neutral-400" placeholder="Décrivez votre besoin..." rows="4"></textarea>
</div>
<button className="w-full bg-neutral-900 text-white font-medium py-3.5 rounded-lg hover:bg-[#e22400] transition-colors duration-300" type="button">
                            Envoyer ma demande
                        </button>
</form>
</div>

<div className="flex flex-col h-full">
<div className="bg-neutral-900 text-white p-8 rounded-2xl mb-8">
<h3 className="text-lg font-semibold mb-6">Coordonnées</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#e22400] text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="font-medium">Siège Social</p>
<p className="text-neutral-400 text-sm">12 Rue des Artisans75000 Ville-Exemple</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#e22400] text-xl mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<p className="font-medium">Téléphone</p>
<p className="text-neutral-400 text-sm">01 23 45 67 89</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#e22400] text-xl mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<p className="font-medium">Email</p>
<p className="text-neutral-400 text-sm">contact@lobry-couverture.fr</p>
</div>
</div>
</div>
</div>
<div className="flex-grow bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 relative h-64 lg:h-auto">

<iframe allowfullscreen="" className="map-filter" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647526786354!5m2!1sfr!2sfr" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter uppercase text-white flex items-center gap-2 mb-6" href="#">
<span className="w-8 h-8 bg-[#e22400] text-white flex items-center justify-center rounded-lg text-lg">L</span>
                        Lobry
                    </a>
<p className="text-sm leading-relaxed max-w-sm mb-6">
                        Artisan couvreur zingueur de père en fils. Nous mettons notre expertise au service de la longévité de votre habitat. Qualité, sécurité et esthétisme.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-[#e22400] transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-white hover:text-[#e22400] transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="text-white hover:text-[#e22400] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#e22400] transition-colors" href="#">Couverture Ardoise</a></li>
<li><a className="hover:text-[#e22400] transition-colors" href="#">Couverture Tuile</a></li>
<li><a className="hover:text-[#e22400] transition-colors" href="#">Zinguerie</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Entreprise</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#e22400] transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-[#e22400] transition-colors" href="#">Nos réalisations</a></li>
<li><a className="hover:text-[#e22400] transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Lobry Couverture. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Site sécurisé</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
