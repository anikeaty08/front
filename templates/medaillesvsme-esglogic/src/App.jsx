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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="glass-panel mx-auto max-w-7xl mt-4 mx-4 md:mx-auto rounded-full px-6 py-3 flex items-center justify-between shadow-sm">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#31543A] flex items-center justify-center text-white group-hover:bg-[#3F8A84] transition-colors">
<span className="font-serif text-lg italic">V</span>
</div>
<span className="font-sans text-sm tracking-widest font-medium uppercase text-[#31543A]">VSME</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#la-vsme">La VSME</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#medailles">Médailles</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#gouvernance">Gouvernance</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#processus">Processus</a>
<a className="text-xs font-medium uppercase tracking-wide text-[#2A2A2A] hover:text-[#3F8A84] transition-colors" href="#partenaires">Partenaires</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-[#31543A] hover:bg-[#3F8A84] text-white px-5 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105" href="#contact">
<span>On en discute ?</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>

<button className="md:hidden text-[#31543A]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-100">

<div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#6CA8C2] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E4B756] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
<div className="bg-grid-pattern absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#31543A] text-xs font-medium mb-8 animate-fade-in-up shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#3F8A84]"></span>
<span>Reconnaissance ESG européenne pour PME</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#31543A] mb-8 leading-[1.05]">
                Structurez votre <br/>
                démarche <span className="italic font-light text-[#3F8A84]">ESG</span>.
            </h1>
<p className="text-lg md:text-xl text-[#2A2A2A]/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                Donnez du poids à votre démarche ESG grâce aux médailles VSME. Positionnez et attestez votre niveau d’engagement en vous appuyant sur le standard de reporting volontaire européen pour les PME.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#31543A] text-white rounded-full font-medium transition-all hover:bg-[#2A2A2A] hover:shadow-lg flex items-center justify-center gap-2" href="#medailles">
                    Découvrez les médailles
                    <iconify-icon icon="solar:medal-star-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 border-b border-gray-100 bg-white" id="la-vsme">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
<div className="max-w-2xl">
<span className="section-label text-[#E4B756]">01 — Le Cadre</span>
<h2 className="text-3xl md:text-4xl text-[#31543A] mt-2 tracking-tight">Pourquoi viser une médaille VSME ?</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#31543A] hover:opacity-70 transition-opacity" href="#processus">
                    Voir le processus <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative">
<div className="aspect-[3/4] rounded-2xl bg-[#E8EAE9] overflow-hidden relative border border-gray-100 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#31543A]/5 to-transparent"></div>
<iconify-icon className="text-[#31543A]/30" icon="solar:document-medicine-linear" strokeWidth="1.5" width="80"></iconify-icon>
</div>
</div>
<div className="lg:col-span-7 space-y-8">
<p className="text-xl md:text-2xl font-serif text-[#31543A] leading-relaxed tracking-tight">
                        "Volontaire mais structuré, le référentiel VSME permet aux entreprises non soumises à la CSRD de valoriser <span className="italic text-[#3F8A84]">chaque étape</span> de leur engagement ESG."
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
<div>
<h4 className="text-sm font-medium text-[#2A2A2A] uppercase tracking-wide mb-2">Conformité</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">S'aligner avec les futures réglementations et anticiper les risques pour piloter vos impacts.</p>
</div>
<div>
<h4 className="text-sm font-medium text-[#2A2A2A] uppercase tracking-wide mb-2">Compétitivité</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Gagner en compétitivité, répondre aux exigences des clients et optimiser l'accès aux financements.</p>
</div>
<div>
<h4 className="text-sm font-medium text-[#2A2A2A] uppercase tracking-wide mb-2">Transparence</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Prouver la sincérité de vos démarches à travers un reporting clair, vérifié et standardisé.</p>
</div>
<div>
<h4 className="text-sm font-medium text-[#2A2A2A] uppercase tracking-wide mb-2">Impact</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Mesurer, piloter et améliorer concrètement votre empreinte sociale et environnementale.</p>
</div>
<div>
<h4 className="text-sm font-medium text-[#2A2A2A] uppercase tracking-wide mb-2">Finance</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Faciliter l'accès aux financements verts et rassurer vos partenaires financiers et investisseurs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFA] border-b border-gray-100" id="medailles">
<div className="max-w-7xl mx-auto px-6">
<span className="section-label text-[#6CA8C2]">02 — Les Niveaux</span>
<h2 className="text-3xl md:text-5xl text-[#31543A] mt-2 mb-4 tracking-tight">Une reconnaissance crédible</h2>
<p className="text-gray-500 font-light mb-12 max-w-2xl text-lg">
                Chaque médaille reflète un niveau de maturité ESG, défini selon des critères et des objectifs concrets à chaque étape de votre progression.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-white p-10 rounded-3xl border border-[#C89A8F]/30 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#C89A8F] transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#C89A8F]/10 flex items-center justify-center text-[#C89A8F] mb-6">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#31543A] mb-4 tracking-tight">Médaille Bronze</h3>
<p className="text-gray-600 mb-8 font-light leading-relaxed">
<strong className="font-medium text-[#2A2A2A]">Formaliser les bases :</strong> premières données ESG structurées sur le format <span className="italic">VSME basic</span>, priorités identifiées, démarche initiée.
                        </p>
</div>
</div>

<div className="group bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-[0.03] text-gray-400 transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mb-6">
<iconify-icon icon="solar:star-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#31543A] mb-4 tracking-tight">Médaille Silver</h3>
<p className="text-gray-600 mb-8 font-light leading-relaxed">
<strong className="font-medium text-[#2A2A2A]">Répondre au marché :</strong> indicateurs en place, approfondir la démarche sur le format <span className="italic">VSME comprehensive</span>, dialogue avec les parties prenantes engagé.
                        </p>
</div>
</div>

<div className="group bg-white p-10 rounded-3xl border border-[#E4B756]/50 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-[0.05] text-[#E4B756] transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-[#E4B756]/10 flex items-center justify-center text-[#E4B756] mb-6">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#31543A] mb-4 tracking-tight">Médaille Gold</h3>
<p className="text-gray-600 mb-8 font-light leading-relaxed">
<strong className="font-medium text-[#2A2A2A]">Ancrer la progression :</strong> reporting consolidé, actions correctives engagées, avec une démarche pleinement intégrée sur le format <span className="italic">mid caps SRS</span>.
                        </p>
</div>
</div>

<div className="group bg-[#31543A] p-10 rounded-3xl border border-[#31543A] shadow-lg transition-all relative overflow-hidden text-white">
<div className="absolute top-0 right-0 p-8 opacity-10 text-white transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-white mb-4 tracking-tight">Médaille Platine</h3>
<p className="text-white/80 mb-8 font-light leading-relaxed">
<strong className="font-medium text-white">Devenir une référence :</strong> stratégie ESG aboutie, gouvernance exemplaire et position de leader qui fait de votre entreprise une source d’inspiration.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100 bg-white" id="processus">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
<div className="max-w-xl">
<span className="section-label text-[#E4B756]">03 — Méthodologie</span>
<h2 className="text-3xl md:text-5xl text-[#31543A] mt-2 mb-4 tracking-tight">Votre parcours VSME en 5 étapes</h2>
<p className="text-gray-500 font-light">Un processus clair et accompagné pour certifier votre démarche.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

<div className="p-8 bg-[#F9FAFA] rounded-2xl border border-gray-100 relative">
<div className="text-[8rem] font-serif text-gray-100 absolute right-4 top-0 leading-none -z-0 select-none">1</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-[#2A2A2A] mb-4 tracking-tight">Questionnaire médailles</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Répondez à un questionnaire d’auto-évaluation pour situer votre niveau de maturité ESG. Vous recevrez une liste de partenaires accrédités pour la suite.</p>
</div>
</div>

<div className="p-8 bg-[#F9FAFA] rounded-2xl border border-gray-100 relative">
<div className="text-[8rem] font-serif text-gray-100 absolute right-4 top-0 leading-none -z-0 select-none">2</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-[#2A2A2A] mb-4 tracking-tight">Mise à niveau ESG</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Mise en place des outils et politiques. Collecte de données alignées avec les exigences de la médaille visée, avec l'accompagnement d'un partenaire.</p>
</div>
</div>

<div className="p-8 bg-[#F9FAFA] rounded-2xl border border-gray-100 relative">
<div className="text-[8rem] font-serif text-gray-100 absolute right-4 top-0 leading-none -z-0 select-none">3</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-[#2A2A2A] mb-4 tracking-tight">Préparation à l'audit SMT</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Un partenaire accrédité vérifie la complétude, la cohérence et la traçabilité des éléments fournis ainsi que la conformité des preuves.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 bg-[#31543A] text-white rounded-2xl relative overflow-hidden">
<div className="text-[8rem] font-serif text-white/5 absolute right-4 top-0 leading-none -z-0 select-none">4</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-4 tracking-tight">Audit documentaire SMT</h3>
<p className="text-sm text-white/70 font-light leading-relaxed">Audit documentaire indépendant réalisé par SMT Lab. À l’issue, une médaille VSME vous est attribuée, reflétant votre engagement réel.</p>
</div>
</div>

<div className="p-8 bg-[#3F8A84] text-white rounded-2xl relative overflow-hidden">
<div className="text-[8rem] font-serif text-white/10 absolute right-4 top-0 leading-none -z-0 select-none">5</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-4 tracking-tight">Attribution &amp; Certificat</h3>
<p className="text-sm text-white/80 font-light leading-relaxed">Remise officielle du certificat des Médailles VSME et de tous les supports de communication officiels associés pour valoriser votre démarche.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100 bg-[#E8EAE9]" id="tarification">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="section-label text-[#C89A8F]">04 — Transparence</span>
<h2 className="text-3xl md:text-4xl text-[#31543A] mt-2 mb-4 tracking-tight">Investissement SMT Lab</h2>
<p className="text-gray-500 max-w-xl mx-auto font-light">Une tarification claire adaptée à la taille de votre structure et au niveau visé.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="bg-white p-8 md:rounded-l-2xl border-r border-gray-100 hover:bg-gray-50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A] tracking-tight">Pré-audit SMT</h3>
<iconify-icon className="text-[#C89A8F] group-hover:scale-110 transition-transform" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px] font-light">Tarifs indicatifs par niveau de médaille visé (par un partenaire).</p>
<ul className="space-y-3 text-sm text-[#2A2A2A] mb-8">
<li className="flex justify-between"><span className="font-medium">Bronze</span> <span>495 €</span></li>
<li className="flex justify-between"><span className="font-medium">Silver</span> <span>990 €</span></li>
<li className="flex justify-between"><span className="font-medium">Gold</span> <span>1 485 €</span></li>
<li className="flex justify-between"><span className="font-medium">Platine</span> <span>1 980 €</span></li>
</ul>
</div>

<div className="bg-white p-8 border-r border-gray-100 hover:bg-gray-50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A] tracking-tight">Frais d'Audit SMT</h3>
<iconify-icon className="text-[#3F8A84] group-hover:scale-110 transition-transform" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px] font-light">Audit documentaire indépendant selon la taille de l'entreprise.</p>
<ul className="space-y-3 text-sm text-[#2A2A2A] mb-8">
<li className="flex flex-col"><span className="font-medium">TPE</span> <span className="text-gray-500 font-light">595 € – 1 195 €</span></li>
<li className="flex flex-col mt-2"><span className="font-medium">PME</span> <span className="text-gray-500 font-light">895 € – 1 795 €</span></li>
<li className="flex flex-col mt-2"><span className="font-medium">Grande Entreprise</span> <span className="text-gray-500 font-light">1 395 € – 2 395 €</span></li>
</ul>
</div>

<div className="bg-white p-8 md:rounded-r-2xl hover:bg-gray-50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-[#31543A] tracking-tight">Cotisation Annuelle</h3>
<iconify-icon className="text-[#E4B756] group-hover:scale-110 transition-transform" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-500 mb-6 min-h-[40px] font-light">Maintien de la reconnaissance et accès au réseau SMT.</p>
<ul className="space-y-3 text-sm text-[#2A2A2A] mb-8">
<li className="flex justify-between"><span className="font-medium">TPE</span> <span>395 €</span></li>
<li className="flex justify-between"><span className="font-medium">PME</span> <span>595 €</span></li>
<li className="flex justify-between"><span className="font-medium">Grande Entreprise</span> <span>895 €</span></li>
</ul>
</div>
</div>
<p className="text-xs text-gray-400 text-center mt-6">* Les frais de préparation à l’audit sont indicatifs. Les partenaires définissent leurs tarifs selon l'accompagnement.</p>
</div>
</section>

<footer className="bg-[#2A2A2A] text-white pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">

<div className="col-span-1 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-[#31543A] flex items-center justify-center text-white">
<span className="font-serif italic text-lg">V</span>
</div>
<span className="font-sans text-lg tracking-widest font-medium uppercase">VSME</span>
</div>
<h2 className="text-3xl font-serif mb-6 max-w-sm tracking-tight">Prêt à valoriser votre démarche ESG ?</h2>
<a className="inline-block px-8 py-4 bg-white text-[#2A2A2A] rounded-full font-medium hover:bg-[#E4B756] transition-colors" href="mailto:hello@vsme-medals.eu">
                        Initier ma démarche
                    </a>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-6">Navigation</h4>
<ul className="space-y-4 text-sm text-white/80 font-light">
<li><a className="hover:text-[#E4B756] transition-colors" href="#la-vsme">La VSME</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#medailles">Les Médailles</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#processus">Le Processus</a></li>
<li><a className="hover:text-[#E4B756] transition-colors" href="#tarification">Tarification</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-6">SMT Lab</h4>
<ul className="space-y-4 text-sm text-white/80 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E4B756] mt-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            hello@vsme-medals.eu
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#E4B756] mt-1" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>84 Rue Américaine,<br/>1050 Bruxelles</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
<p>© 2025 SMT, All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Conditions générales</a>
<a className="hover:text-white transition-colors" href="https://www.linkedin.com/company/médailles-vsme" target="_blank">LinkedIn</a>
</div>
</div>
</div>
</footer>

<style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    </style>

    </>
  );
}
