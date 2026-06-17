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



        // Init Lucide Icons with specific stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Init AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-quart'
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
      

<header :className="isOpen ? 'rounded-xl' : 'rounded-full'" className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center px-6 py-3 md:px-10 md:py-4 backdrop-blur-md border border-white/20 bg-[#8598aa]/80 w-[calc(100%-2rem)] lg:w-max max-w-full transition-[border-radius] duration-300 ease-in-out shadow-lg" x-data="{ isOpen: false }">
<div className="flex items-center justify-between w-full gap-x-6 md:gap-x-12 lg:gap-x-16">

<a className="flex items-center gap-1" href="#">
<span className="font-sans font-medium text-xl tracking-tight text-white">EMA</span>
<span className="font-sans font-normal text-xl tracking-tight text-white/80">VGP</span>
</a>

<nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-base">

<div @mouseenter="open = true" @mouseleave="open = false" className="relative group cursor-pointer" x-data="{ open: false }">
<button className="group relative inline-flex overflow-hidden h-6 items-center text-base gap-1 focus:outline-none whitespace-nowrap">
<div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
<span className="text-white/80 h-6 flex items-center gap-1 whitespace-nowrap">Nos Prestations <i className="w-4 h-4 shrink-0" data-lucide="chevron-down"></i></span>
<span className="text-white h-6 flex items-center gap-1 whitespace-nowrap">Nos Prestations <i className="w-4 h-4 shrink-0" data-lucide="chevron-down"></i></span>
</div>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-max min-w-[16rem]" x-show="open" x-transition="">
<div className="bg-[#8598aa] backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-2 flex flex-col gap-1">
<a className="px-5 py-3 text-base text-white/90 hover:text-slate-900 hover:bg-white rounded-xl transition-colors whitespace-nowrap" href="#">VGP</a>
<a className="px-5 py-3 text-base text-white/90 hover:text-slate-900 hover:bg-white rounded-xl transition-colors whitespace-nowrap" href="#">Mise en Service</a>
</div>
</div>
</div>
<a className="group relative inline-flex overflow-hidden h-6 items-center text-base whitespace-nowrap" href="#">
<div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
<span className="text-white/80 h-6 flex items-center whitespace-nowrap">Engins</span>
<span className="text-white h-6 flex items-center whitespace-nowrap">Engins</span>
</div>
</a>
<a className="group relative inline-flex overflow-hidden h-6 items-center text-base whitespace-nowrap" href="#">
<div className="flex flex-col transition-transform duration-500 ease-out transform group-hover:-translate-y-1/2">
<span className="text-white/80 h-6 flex items-center whitespace-nowrap">L'Arrêté 2004</span>
<span className="text-white h-6 flex items-center whitespace-nowrap">L'Arrêté 2004</span>
</div>
</a>
</nav>

<div className="hidden md:flex items-center gap-2 sm:gap-3">
<div className="relative group w-full sm:w-auto">
<div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-white opacity-20 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-40 group-hover:blur-xl group-hover:-m-3"></div>
<a className="relative z-10 px-6 py-2.5 text-sm sm:text-base font-medium text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto flex items-center gap-2 whitespace-nowrap" href="tel:0621952517">
<i className="w-4 h-4 shrink-0" data-lucide="phone"></i>
                     06 21 95 25 17
                   </a>
</div>
</div>

<button :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'" @click="isOpen = !isOpen" className="md:hidden flex items-center justify-center w-8 h-8 text-white/80 hover:text-white focus:outline-none transition-colors">
<i className="w-6 h-6" data-lucide="menu" x-show="!isOpen"></i>
<i className="w-6 h-6" data-lucide="x-circle" style={{display: 'none'}} x-show="isOpen"></i>
</button>
</div>

<div :className="isOpen ? 'max-h-[1000px] opacity-100 pt-6' : 'max-h-0 opacity-0 pt-0 pointer-events-none'" className="md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden">
<nav className="flex flex-col items-center space-y-5 text-lg w-full">
<a className="text-white/80 hover:text-white transition-colors w-full text-center" href="#">Nos Prestations</a>
<a className="text-white/80 hover:text-white transition-colors w-full text-center" href="#">Engins</a>
<a className="text-white/80 hover:text-white transition-colors w-full text-center" href="#">L'Arrêté 2004</a>
</nav>
<div className="flex flex-col items-center space-y-4 mt-8 w-full">
<a className="px-5 py-3.5 text-base font-medium text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-all duration-200 w-full text-center flex justify-center items-center gap-2" href="tel:0621952517">
<i className="w-5 h-5" data-lucide="phone"></i>
                    06 21 95 25 17
                </a>
</div>
</div>
</header>

<section className="relative w-full h-[90vh] min-h-[600px] mt-4 px-4 sm:px-6 flex justify-center">
<div className="w-full max-w-[98%] h-full rounded-[2rem] overflow-hidden relative bg-[#8598aa]">
<img alt="Chantier de construction" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#8598aa] via-[#8598aa]/40 to-transparent"></div>
<div className="absolute top-28 left-8 sm:top-32 sm:left-12">
<div className="bg-white rounded-full px-5 py-2.5 inline-flex items-center gap-2 shadow-lg animate-pulse">
<i className="w-4 h-4 text-[#8598aa]" data-lucide="zap"></i>
<span className="text-base font-medium text-slate-900 tracking-tight">Intervention sous 24h</span>
</div>
</div>
<div className="absolute bottom-12 left-8 sm:bottom-20 sm:left-16 max-w-2xl" data-aos="fade-up">
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8">
<span className="font-serif font-light text-white block">Partenaire de votre</span>
<span className="font-sans font-medium text-white block mt-2">sécurité industrielle</span>
</h1>
<div className="flex flex-wrap gap-2 mb-8">
<span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 text-sm tracking-wide">VGP</span>
<span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 text-sm tracking-wide">Mise en Service</span>
<span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 text-sm tracking-wide hidden sm:inline-block">Remise en Service</span>
<span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 text-sm tracking-wide hidden sm:inline-block">Engins TP</span>
</div>
<a className="rounded-full bg-transparent border border-white text-white px-8 py-3.5 text-base hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center gap-2" href="#prestations">
                    Nos Prestations <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="hidden lg:block absolute bottom-12 right-12 w-[340px]" data-aos="fade-left" data-aos-delay="200">
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6" x-data="{ slide: 1 }">
<div className="flex justify-between items-center text-white/70 text-sm font-mono mb-4 border-b border-white/20 pb-4">
<div className="flex gap-4">
<button :className="{ 'text-white font-medium': slide === 1 }" @click="slide = 1">01</button>
<button :className="{ 'text-white font-medium': slide === 2 }" @click="slide = 2">02</button>
<button :className="{ 'text-white font-medium': slide === 3 }" @click="slide = 3">03</button>
</div>
<div className="w-8 h-[1px] bg-white/40"></div>
</div>
<div className="relative h-24">
<div className="absolute inset-0" x-show="slide === 1" x-transition.opacity="">
<p className="text-white text-xl font-medium tracking-tight mb-1">VGP Chariot élévateur</p>
<p className="text-white/70 text-base font-light">Vérification périodique</p>
</div>
<div className="absolute inset-0" style={{display: 'none'}} x-show="slide === 2" x-transition.opacity="">
<p className="text-white text-xl font-medium tracking-tight mb-1">Nacelle élévatrice</p>
<p className="text-white/70 text-base font-light">Mise en service</p>
</div>
<div className="absolute inset-0" style={{display: 'none'}} x-show="slide === 3" x-transition.opacity="">
<p className="text-white text-xl font-medium tracking-tight mb-1">Engins TP</p>
<p className="text-white/70 text-base font-light">Contrôle réglementaire</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto" x-data="{
        activeStep: 2,
        steps: [
            { id: 1, title: 'Prise de contact &amp; Devis', desc: 'Analyse de votre parc matériel et proposition commerciale adaptée.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop' },
            { id: 2, title: 'Inspection sur site', desc: 'Notre technicien se déplace sur votre site pour inspecter chaque équipement de levage. Il vérifie la conformité aux normes en vigueur et rédige un rapport.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2000&amp;auto=format&amp;fit=crop' },
            { id: 3, title: 'Vérification réglementaire', desc: 'Contrôle minutieux des organes de sécurité et tests en charge selon l\'Arrêté.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop' },
            { id: 4, title: 'Remise du rapport', desc: 'Délivrance immédiate du rapport d\'intervention et enregistrement dans votre registre.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2000&amp;auto=format&amp;fit=crop' }
        ]
    }">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 justify-between items-start" data-aos="fade-up">
<div className="md:w-1/4">
<span className="rounded-full border border-slate-200 text-slate-900 px-5 py-2 text-sm uppercase tracking-widest font-normal">Notre processus</span>
</div>
<div className="md:w-3/4 max-w-3xl">
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6">
<span className="font-serif font-light text-slate-900 block">Nous garantissons la conformité de vos équipements</span>
<span className="font-sans font-medium text-slate-900 block mt-2">étape par étape</span>
</h2>
<p className="text-xl text-slate-500 font-light">De l'inspection au rapport final</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col">
<template :key="step.id" x-htmlFor="(step, index) in steps">
<div :className="{ 'bg-slate-50 border-transparent': activeStep === step.id, 'hover:bg-slate-50/50': activeStep !== step.id }" @click="activeStep = step.id" className="group cursor-pointer border-b border-slate-200 py-8 px-4 rounded-xl transition-all duration-300 flex items-center justify-between">
<div className="flex items-center gap-8">
<span className="text-base font-mono text-slate-400" x-text="'0' + step.id"></span>
<h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight transition-colors" x-text="step.title"></h3>
</div>
<div :className="{ 'bg-[#8598aa] text-white': activeStep === step.id, 'bg-slate-900 text-white': activeStep !== step.id }" className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</template>
</div>
<div className="relative h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-50" data-aos="fade-left">
<template :key="step.id" x-htmlFor="step in steps">
<div className="absolute inset-0 flex flex-col" x-show="activeStep === step.id" x-transition.opacity.duration.500ms="">
<img :alt="step.title" :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-1/2 object-cover"/>
<div className="p-10 h-1/2 bg-white flex flex-col justify-center">
<p className="text-xl text-slate-700 font-light leading-relaxed" x-text="step.desc"></p>
</div>
</div>
</template>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 bg-[#8598aa] text-white rounded-[2.5rem] mx-4 sm:mx-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col gap-6" data-aos="fade-up">
<div>
<span className="rounded-full border border-white/30 px-5 py-2 text-sm uppercase tracking-widest font-normal">Obligation légale</span>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] max-w-4xl">
<span className="font-serif font-light block">La VGP n'est pas une option, c'est une obligation</span>
<span className="font-sans font-medium block mt-2 text-white/90">sous peine de sanctions</span>
</h2>
<p className="text-white/60 text-base font-mono mt-4">Art. L.4321-1 du Code du Travail</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/10 border-t-2 border-white rounded-3xl p-10 hover:bg-white/20 transition-colors" data-aos="fade-up" data-aos-delay="100">
<div className="flex justify-between items-start mb-12">
<i className="w-8 h-8 text-white" data-lucide="alert-triangle"></i>
<span className="rounded-full border border-white/30 px-3 py-1.5 text-xs uppercase tracking-wider">Sanction administrative</span>
</div>
<div className="text-5xl font-medium mb-6 tracking-tight">3 750€</div>
<p className="text-xl text-white/80 font-light mb-10">D'amende par salarié concerné en cas de défaut de vérification.</p>
<button className="rounded-full bg-white text-[#8598aa] px-8 py-3 text-base hover:bg-slate-50 transition-colors inline-flex items-center gap-2">
                        En savoir plus <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="bg-white/10 border-t-2 border-white/30 rounded-3xl p-10 hover:bg-white/20 transition-colors" data-aos="fade-up" data-aos-delay="200">
<div className="flex justify-between items-start mb-12">
<i className="w-8 h-8 text-white" data-lucide="shield-alert"></i>
<span className="rounded-full border border-white/30 px-3 py-1.5 text-xs uppercase tracking-wider">Accident corporel</span>
</div>
<div className="text-5xl font-medium mb-6 tracking-tight">5 ans</div>
<p className="text-xl text-white/80 font-light mb-10">D'emprisonnement potentiel pour le chef d'entreprise en cas d'accident grave.</p>
<button className="rounded-full border border-white text-white px-8 py-3 text-base hover:bg-white hover:text-[#8598aa] transition-colors inline-flex items-center gap-2">
                        En savoir plus <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="bg-white/10 border-t-2 border-white/30 rounded-3xl p-10 hover:bg-white/20 transition-colors" data-aos="fade-up" data-aos-delay="300">
<div className="flex justify-between items-start mb-12">
<i className="w-8 h-8 text-white" data-lucide="scale"></i>
<span className="rounded-full border border-white/30 px-3 py-1.5 text-xs uppercase tracking-wider">Responsabilité</span>
</div>
<div className="text-5xl font-medium mb-6 tracking-tight">75 000€</div>
<p className="text-xl text-white/80 font-light mb-10">D'amende pénale pour mise en danger de la vie d'autrui.</p>
<button className="rounded-full border border-white text-white px-8 py-3 text-base hover:bg-white hover:text-[#8598aa] transition-colors inline-flex items-center gap-2">
                        En savoir plus <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto" id="prestations">
<div className="mb-20 flex flex-col items-center text-center gap-6" data-aos="fade-up">
<span className="rounded-full border border-slate-200 text-slate-900 px-5 py-2 text-sm uppercase tracking-widest font-normal">Nos Prestations</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] max-w-3xl font-serif font-light">
                Un contrôle complet, de la mise en service au rapport de vérification
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group bg-slate-50 rounded-[2rem] p-10 lg:p-12 border border-transparent hover:border-[#8598aa] hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[420px]" data-aos="fade-up" data-aos-delay="100">
<div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-slate-100">
<i className="w-7 h-7 text-slate-900" data-lucide="search"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4">VGP</h3>
<p className="text-xl text-slate-600 font-light leading-relaxed">Vérification Générale Périodique obligatoire (tous les 6 ou 12 mois) pour s'assurer du maintien en état de conformité.</p>
</div>
<div className="mt-10">
<button className="rounded-full border border-slate-900 text-slate-900 px-8 py-3 text-base group-hover:bg-[#8598aa] group-hover:border-[#8598aa] group-hover:text-white transition-colors inline-flex items-center gap-2">
                        Découvrir <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="group bg-slate-50 rounded-[2rem] p-10 lg:p-12 border border-transparent hover:border-[#8598aa] hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[420px]" data-aos="fade-up" data-aos-delay="200">
<div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-slate-100">
<i className="w-7 h-7 text-slate-900" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4">Mise en Service</h3>
<p className="text-xl text-slate-600 font-light leading-relaxed">Examen d'adéquation, de montage et d'installation avant la première utilisation d'un équipement neuf ou d'occasion.</p>
</div>
<div className="mt-10">
<button className="rounded-full border border-slate-900 text-slate-900 px-8 py-3 text-base group-hover:bg-[#8598aa] group-hover:border-[#8598aa] group-hover:text-white transition-colors inline-flex items-center gap-2">
                        Découvrir <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="group bg-slate-50 rounded-[2rem] p-10 lg:p-12 border border-transparent hover:border-[#8598aa] hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[420px]" data-aos="fade-up" data-aos-delay="300">
<div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-slate-100">
<i className="w-7 h-7 text-slate-900" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4">Remise en Service</h3>
<p className="text-xl text-slate-600 font-light leading-relaxed">Contrôle suite à un démontage, une réparation importante ou une modification de la configuration de l'engin.</p>
</div>
<div className="mt-10">
<button className="rounded-full border border-slate-900 text-slate-900 px-8 py-3 text-base group-hover:bg-[#8598aa] group-hover:border-[#8598aa] group-hover:text-white transition-colors inline-flex items-center gap-2">
                        Découvrir <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8" data-aos="fade-up">
<div className="max-w-2xl">
<span className="rounded-full border border-slate-200 bg-white text-slate-900 px-5 py-2 text-sm uppercase tracking-widest font-normal mb-8 inline-block">Équipements</span>
<h2 className="text-5xl md:text-6xl tracking-tight leading-[1.1] font-sans font-medium">
                        Les engins que nous contrôlons
                    </h2>
</div>
<button className="rounded-full bg-[#8598aa] text-white px-8 py-3 text-base hover:bg-slate-700 transition-colors inline-flex items-center gap-2">
                    Voir la liste complète <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up">
<img alt="Chariots élévateurs" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">Levage industriel</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Chariots<br/>élévateurs</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
<img alt="Nacelles élévatrices" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">PEMP</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Nacelles<br/>élévatrices</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
<img alt="Engins de chantier TP" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610642372651-fe6e7bc209ef?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">Travaux Publics</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Engins de<br/>chantier TP</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up">
<img alt="Matériel de garage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">Automobile</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Matériel<br/>de garage</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
<img alt="Grues et Portiques" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">Lourd</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Grues &amp;<br/>Portiques</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
<img alt="Accessoires de levage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-8 left-8">
<span className="rounded-full bg-white/20 backdrop-blur-md text-white px-4 py-1.5 text-xs uppercase tracking-wider">Accessoires</span>
</div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<h3 className="text-3xl text-white font-medium tracking-tight">Accessoires<br/>de levage</h3>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8598aa] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto">
<div className="text-center mb-24" data-aos="fade-up">
<span className="rounded-full border border-slate-200 px-5 py-2 text-sm uppercase tracking-widest font-normal inline-block mb-8">Pourquoi EMA VGP ?</span>
<h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] max-w-4xl mx-auto">
<span className="font-serif font-light block">Rigueur, proximité et expertise</span>
<span className="font-sans font-medium block mt-2">au service de votre sécurité</span>
</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20">
<div className="flex flex-col items-center text-center" data-aos="fade-up">
<div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
<i className="w-8 h-8 text-slate-900" data-lucide="award"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Professionnalisme</h3>
<p className="text-slate-600 font-light text-base">Une éthique irréprochable dans chaque intervention.</p>
</div>
<div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
<div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
<i className="w-8 h-8 text-slate-900" data-lucide="book-open-check"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Compétence</h3>
<p className="text-slate-600 font-light text-base">Des techniciens formés continuellement aux normes.</p>
</div>
<div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
<div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
<i className="w-8 h-8 text-slate-900" data-lucide="clipboard-list"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Rigueur</h3>
<p className="text-slate-600 font-light text-base">Des contrôles exhaustifs sans aucun compromis.</p>
</div>
<div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
<div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
<i className="w-8 h-8 text-slate-900" data-lucide="map-pin"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Proximité</h3>
<p className="text-slate-600 font-light text-base">Une réactivité locale pour vos urgences.</p>
</div>
</div>
<div className="mt-24 text-center" data-aos="fade-up">
<p className="font-serif font-light italic text-2xl md:text-3xl text-slate-700 max-w-3xl mx-auto">
                "Optez pour EMA VGP, c'est choisir la rigueur comme gage de fiabilité et de tranquillité d'esprit."
            </p>
</div>
</section>

<section className="py-24 sm:py-32 px-6 bg-[#8598aa] text-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div data-aos="fade-right">
<span className="rounded-full border border-white/30 px-5 py-2 text-sm uppercase tracking-widest font-normal mb-8 inline-block">Secteur géographique</span>
<h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-10">
<span className="font-serif font-light block">Nous intervenons partout</span>
<span className="font-serif font-light block mt-2">en Hauts-de-France</span>
<span className="font-sans font-medium block mt-2 text-white">et en Île-de-France</span>
</h2>
<div className="mt-16">
<p className="text-base text-white/60 uppercase tracking-widest mb-6">Départements couverts</p>
<div className="flex flex-wrap gap-3">
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Nord (59)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Pas-de-Calais (62)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Somme (80)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Oise (60)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Aisne (02)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Seine-et-Marne (77)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Essonne (91)</span>
<span className="rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-base font-light">Hauts-de-Seine (92)</span>
</div>
</div>
<div className="mt-12">
<p className="text-sm text-white/50 font-mono">Villes clés : Compiègne · Beauvais · Lille · Meaux · Cergy · Saint-Quentin</p>
</div>
</div>
<div className="relative h-[500px] lg:h-[700px] bg-white/5 rounded-[3rem] border border-white/20 flex items-center justify-center overflow-hidden p-8" data-aos="fade-left">

<div className="relative w-full h-full max-w-lg">
<div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
<div className="w-full h-full border border-white/20 rounded-3xl relative backdrop-blur-sm">
<div className="absolute top-[20%] left-[30%] flex items-center gap-3">
<div className="w-4 h-4 bg-white rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-white rounded-full relative z-10"></div>
<span className="text-sm font-mono text-white/90">Hauts-de-France</span>
</div>
<div className="absolute top-[60%] left-[45%] flex items-center gap-3">
<div className="w-4 h-4 bg-white/60 rounded-full relative z-10"></div>
<span className="text-sm font-mono text-white/70">Île-de-France</span>
</div>

<svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
<path d="M 150 150 C 180 250, 250 300, 220 400" fill="transparent" stroke="#ffffff" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white overflow-hidden">
<div className="px-6 max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-10" data-aos="fade-up">
<div>
<span className="rounded-full border border-slate-200 px-5 py-2 text-sm uppercase tracking-widest font-normal mb-8 inline-block">Avis clients</span>
<h2 className="text-5xl md:text-6xl tracking-tight leading-[1.1]">
<span className="font-serif font-light block">Ce qu'ils pensent</span>
<span className="font-sans font-medium block mt-2">de nos interventions</span>
</h2>
</div>
<div className="flex items-center gap-4 bg-slate-50 rounded-full px-8 py-4 border border-slate-100">
<img alt="Google" className="w-7 h-7" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"/>
<div className="flex text-[#8598aa]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="font-medium text-base">5.0</span>
</div>
</div>

<div className="w-full flex gap-8 overflow-x-auto hide-scrollbar snap-x px-6 pb-10" style={{paddingLeft: 'max(1.5rem, calc((100% - 80rem) / 2))', paddingRight: 'max(1.5rem, calc((100% - 80rem) / 2))'}}>

<div className="min-w-[360px] md:min-w-[440px] bg-slate-50 rounded-[2.5rem] p-10 snap-start flex-shrink-0 border border-slate-100">
<div className="flex text-[#8598aa] mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-slate-700 font-light leading-relaxed mb-10">"Intervention rapide et rapport détaillé. Technicien très pédagogue qui a pris le temps d'expliquer les points de contrôle sur notre chariot."</p>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-lg">D</div>
<div>
<p className="font-medium text-base">Dumeige Rosie</p>
<p className="text-sm text-slate-500">Access-Ability</p>
</div>
</div>
</div>

<div className="min-w-[360px] md:min-w-[440px] bg-slate-50 rounded-[2.5rem] p-10 snap-start flex-shrink-0 border border-slate-100">
<div className="flex text-[#8598aa] mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-slate-700 font-light leading-relaxed mb-10">"Entreprise sérieuse, rendez-vous pris facilement. La vérification de nos nacelles a été faite avec beaucoup de professionnalisme."</p>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-lg">G</div>
<div>
<p className="font-medium text-base">Gavel M.</p>
<p className="text-sm text-slate-500">Chef de chantier</p>
</div>
</div>
</div>

<div className="min-w-[360px] md:min-w-[440px] bg-slate-50 rounded-[2.5rem] p-10 snap-start flex-shrink-0 border border-slate-100">
<div className="flex text-[#8598aa] mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-slate-700 font-light leading-relaxed mb-10">"Nous travaillons avec EMA VGP depuis 2 ans pour tout notre parc matériel. Rien à redire, c'est carré et le suivi administratif est top."</p>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-lg">A</div>
<div>
<p className="font-medium text-base">Alain T.</p>
<p className="text-sm text-slate-500">SIE LEVAGE</p>
</div>
</div>
</div>

<div className="min-w-[360px] md:min-w-[440px] bg-slate-50 rounded-[2.5rem] p-10 snap-start flex-shrink-0 border border-slate-100">
<div className="flex text-[#8598aa] mb-8">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-xl text-slate-700 font-light leading-relaxed mb-10">"Excellente prestation pour la mise en service de notre nouveau portique. Rigueur au rendez-vous."</p>
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-lg">C</div>
<div>
<p className="font-medium text-base">Charlotte Masson</p>
<p className="text-sm text-slate-500">Logistique Industrielle</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8" data-aos="fade-up">
<div>
<span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm uppercase tracking-widest font-normal mb-8 inline-block">Actualités</span>
<h2 className="text-5xl md:text-6xl tracking-tight leading-[1.1] font-sans font-medium">
                        Nos derniers articles
                    </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<article className="group cursor-pointer" data-aos="fade-up">
<div className="relative h-72 rounded-[2rem] overflow-hidden mb-8">
<img alt="Réglementation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-5 left-5">
<span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs uppercase font-medium tracking-wider">Réglementation</span>
</div>
</div>
<p className="text-sm text-slate-400 font-mono mb-4">12 Octobre 2023</p>
<h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-[#8598aa] transition-colors">Comprendre l'Arrêté du 1er mars 2004</h3>
<p className="text-slate-600 font-light text-base mb-6 line-clamp-2">Tout ce qu'il faut savoir sur les obligations de vérification des appareils et accessoires de levage.</p>
<span className="text-base font-normal inline-flex items-center gap-1 group-hover:text-[#8598aa]">Lire l'article <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</article>

<article className="group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
<div className="relative h-72 rounded-[2rem] overflow-hidden mb-8">
<img alt="Guide VGP" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-5 left-5">
<span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs uppercase font-medium tracking-wider">Guide Pratique</span>
</div>
</div>
<p className="text-sm text-slate-400 font-mono mb-4">28 Septembre 2023</p>
<h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-[#8598aa] transition-colors">Comment préparer votre VGP ?</h3>
<p className="text-slate-600 font-light text-base mb-6 line-clamp-2">Nos conseils pour faciliter l'intervention du technicien et éviter les contre-visites.</p>
<span className="text-base font-normal inline-flex items-center gap-1 group-hover:text-[#8598aa]">Lire l'article <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</article>

<article className="group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
<div className="relative h-72 rounded-[2rem] overflow-hidden mb-8">
<img alt="Sécurité" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-5 left-5">
<span className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs uppercase font-medium tracking-wider">Sécurité</span>
</div>
</div>
<p className="text-sm text-slate-400 font-mono mb-4">15 Septembre 2023</p>
<h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-[#8598aa] transition-colors">Les risques liés aux accessoires de levage usagés</h3>
<p className="text-slate-600 font-light text-base mb-6 line-clamp-2">Élingues, chaînes, crochets : pourquoi leur contrôle régulier est vital sur un chantier.</p>
<span className="text-base font-normal inline-flex items-center gap-1 group-hover:text-[#8598aa]">Lire l'article <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</article>
</div>
<div className="mt-20 text-center">
<button className="rounded-full border border-slate-900 text-slate-900 px-10 py-4 text-base hover:bg-slate-900 hover:text-white transition-colors inline-flex items-center gap-2">
                    Voir tous les articles <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 bg-[#8598aa]">
<div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-white tracking-tight mb-8">
                Besoin d'un contrôle VGP ?
            </h2>
<p className="text-2xl text-white/90 font-light mb-14">Intervention possible sous 24h sur vos chantiers.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="w-full sm:w-auto rounded-full bg-white text-[#8598aa] px-10 py-5 text-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10" href="tel:0621952517">
<i className="w-6 h-6" data-lucide="phone"></i>
                    Appeler maintenant
                </a>
<a className="w-full sm:w-auto rounded-full border-2 border-white text-white bg-transparent px-10 py-5 text-lg hover:bg-white hover:text-[#8598aa] transition-colors inline-flex items-center justify-center gap-3" href="#contact">
<i className="w-6 h-6" data-lucide="mail"></i>
                    Demander un devis
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white/70 py-20 px-6 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
<div className="md:col-span-1">
<a className="flex flex-col mb-8 inline-block" href="#">
<div className="flex items-center gap-1">
<span className="font-sans font-medium text-3xl tracking-tight text-white">EMA</span>
<span className="font-sans font-normal text-3xl tracking-tight text-white/60">VGP</span>
</div>
</a>
<p className="font-light text-base mb-8 max-w-sm">Partenaire de votre sécurité industrielle. Contrôle réglementaire de vos équipements de levage et de TP.</p>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-lg tracking-tight">Coordonnées</h4>
<ul className="space-y-5 font-light text-base">
<li className="flex items-start gap-4">
<i className="w-5 h-5 shrink-0 text-white/40 mt-1" data-lucide="map-pin"></i>
<span>7 Rte de Bouillancourt,<br/>80500 Gratibus</span>
</li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 shrink-0 text-white/40" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:0621952517">06 21 95 25 17</a>
</li>
<li className="flex items-center gap-4">
<i className="w-5 h-5 shrink-0 text-white/40" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:contact@emavgp.fr">contact@emavgp.fr</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-lg tracking-tight">Navigation</h4>
<ul className="space-y-4 font-light text-base">
<li><a className="hover:text-white transition-colors" href="#">Nos Prestations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Engins couvrts</a></li>
<li><a className="hover:text-white transition-colors" href="#">L'Arrêté 2004</a></li>
<li><a className="hover:text-white transition-colors" href="#">Zones d'intervention</a></li>
<li><a className="hover:text-white transition-colors" href="#">Actualités</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-lg tracking-tight">Horaires</h4>
<ul className="space-y-4 font-light text-base">
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Lundi - Vendredi</span>
<span className="text-white">8h-12h / 13h30-17h</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Samedi - Dimanche</span>
<span className="text-white/50">Fermé</span>
</li>
<li className="pt-3 text-white/60 text-sm">
                            *Intervention d'urgence possible le week-end sur devis.
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light">
<p>© 2023 EMA VGP. Tous droits réservés.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-50" x-data="{ openForm: false }">
<button @click="openForm = true" className="rounded-full bg-[#8598aa] text-white px-6 py-4 text-base font-medium shadow-2xl hover:scale-105 transition-transform flex items-center gap-3" x-show="!openForm" x-transition="">
            Me rappeler <i className="w-5 h-5" data-lucide="phone-call"></i>
</button>

<div className="absolute bottom-0 right-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 p-8" x-show="openForm" x-transition="">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-slate-900 text-lg">Être rappelé</h3>
<button @click="openForm = false" className="text-slate-400 hover:text-slate-900 transition-colors">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">Laissez vos coordonnées, un technicien vous rappelle sous 2h.</p>
<form className="space-y-4">
<input className="w-full bg-slate-50 border border-slate-200 focus:border-[#8598aa] rounded-xl px-5 py-3 text-base outline-none transition-colors" placeholder="Votre nom" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 focus:border-[#8598aa] rounded-xl px-5 py-3 text-base outline-none transition-colors" placeholder="Votre numéro" type="tel"/>
<button className="w-full bg-[#8598aa] text-white rounded-xl px-5 py-3.5 text-base hover:bg-slate-700 transition-colors" type="button">
                    Envoyer
                </button>
</form>
</div>
</div>





    </>
  );
}
