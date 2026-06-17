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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="bg-rose-700 text-white p-2 rounded-xl flex items-center justify-center">
<svg className="text-xl" data-icon-set="solar" data-solar="home-angle-linear" height="20" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></path><path d="M15 18H9" strokeLinecap="round"></path></g></svg>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight">SL rénovation</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-700 transition-colors" href="#apropos">À propos</a>
<a className="hover:text-rose-700 transition-colors text-sm font-medium text-slate-600" href="#avis">Avis clients</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                        Devis Gratuit
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div><div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex -ml-0.5 pointer-events-auto bg-white w-10 h-10 border-slate-100 border rounded-xl pt-1 pr-1 pb-1 pl-1 shadow-sm items-center justify-center">
<img alt="Vino Toiture Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2394136-339a-4343-9616-38bf28eea153_320w.png"/>
</div>
</div><div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden md:flex">
<div className="flex -translate-x-4 cursor-pointer pointer-events-auto mr-[145px] translate-x-8 gap-x-1 gap-y-1 items-center" onclick="window.location.href='https://www.facebook.com/people/Vino-Toiture/pfbid0S3F6BsjTCHqS9GLaxnNGn2qLywUVXMznkyFAaEtYBapSshhn8LukgSEXUYU8wuBHl/'" role="button">
<a aria-label="Page Facebook" className="flex items-center justify-center hover:text-slate-900 hover:bg-slate9 rounded-full" href="https://www.facebook.com/people/Vino-Toiture/pfbid0S3F6BsjTCHqS9GLaxnNGn2qLywUVXMznkyFAaEtYBapSshhn8LukgSEXUYU8wuBHl/" rel="noopener noreferrer" target="_blank">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(16, 24, 43)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a aria-label="Page Instagram" className="flex items-center justify-center hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none text-slate-400 w-9 h-9 rounded-full" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
<svg className="" fill="none" height="18" rx="5" ry="5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" y="2"></svg>
<path 17.5"="" d="M16 11.37A4 4 0 1 1 12.63 8 4 =" x2="17.51" y1="6.5" y2="6.5">
</path></a>
</div>
</div>
</div>
</header>
<main className="">

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex text-xs font-medium text-rose-700 bg-rose-50 border-rose-100 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Intervention à Rodez et dans l'Aveyron</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">SL rénovation – Couvreur à Rodez</h1>
<p className="sm:text-xl leading-relaxed text-lg text-slate-500 mb-8">Rodez n, réparation et entretien de toiture dans l'Aveyron. Confiez votre maison à des artisans expérimentés pour un résultat durable et esthétique.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-rose-700 hover:bg-rose-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                                Obtenir un devis gratuit
                            </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm" href="#realisations">
                                Voir nos réalisations
                            </a>
</div>
<div className="mt-10 flex items-center gap-6 pt-6 border-t border-slate-200/60">
<div className="flex text-amber-500 gap-x-1 gap-y-1 items-center">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" height="18" icon="solar:star-bold" style={{color: 'rgb(245, 158, 11)'}} width="18"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-slate-500 font-medium">Artisan recommandé dans la région</span>
</div>
</div>
<div className="relative lg:ml-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-slate-100 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>
<img alt="Couvreur au travail sur un toit" className="w-full h-[500px] object-cover border-white/50 border rounded-[2rem] shadow-xl" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4">
<div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Garantie Décennale</p>
<p className="text-xs text-slate-500">Travaux 100% assurés</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Nos services de couverture</h2>
<p className="text-base text-slate-500">Nous intervenons pour tous vos besoins liés à la toiture, avec le même souci du détail et de la qualité.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-50 rounded-3xl p-2 border border-slate-100 transition-all hover:shadow-md">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Rénovation de toiture" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/581b5d74-1759-45bf-b1ac-30d4598cca2a_800w.jpg"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Rénovation de toiture</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Rénovation complète ou partielle pour redonner une seconde jeunesse à votre habitation.</p>
<a className="inline-flex items-center gap-1 hover:text-rose-800 text-sm font-medium text-rose-700" href="#contact">
                                En savoir plus <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 rounded-3xl p-2 border border-slate-100 transition-all hover:shadow-md">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Réparation de toiture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d109e54c-4b9d-4c83-bde1-156ad29bcb87_800w.jpg"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Réparation &amp; Tuiles</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Intervention rapide pour fuites, remplacement de tuiles cassées et mise hors d'eau.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-800" href="#contact">
                                En savoir plus <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 rounded-3xl p-2 border border-slate-100 transition-all hover:shadow-md">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Nettoyage et démoussage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa119ba-25a3-4bae-b6b3-dd67b6e11712_800w.webp"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Nettoyage &amp; Démoussage</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Traitement hydrofuge et nettoyage en profondeur pour prolonger la durée de vie de votre toit.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-800" href="#contact">
                                En savoir plus <iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-slate-50 rounded-3xl p-2 border border-slate-100 transition-all hover:shadow-md">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
<img alt="Travaux de zinguerie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/470f645a-35a3-4b51-ba6c-38979f35a5f6_800w.jpg"/>
</div>
<div className="p-4 pt-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Travaux de zinguerie</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Gouttières, descentes, habillage de rives. Une évacuation optimale des eaux pluviales.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-rose-700 hover:text-rose-800" href="#contact">
                                En savoir plus <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200/60 border-t pt-24 pb-24" id="contact">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">

<div className="">
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Obtenir un devis gratuit</h2>
<p className="text-base text-slate-500 mb-10">Remplissez le formulaire pour nous faire part de votre projet. Nous vous recontacterons dans les plus brefs délais pour planifier une visite technique gratuite.</p>
<div className="mb-10 space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Zone d'intervention</h3>
<p className="text-sm text-slate-600">Basée à Rodez, l’entreprise Sl Rénovation intervient dans tout l'Aveyron</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Téléphone</h3>
<p className="text-sm text-slate-600">06.43.60.85.88</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Email</h3>
<p className="text-sm text-slate-600">contact@Slrenovation.fr</p>
</div>
</div>
</div>

<div className="flex overflow-hidden bg-slate-200 w-full h-48 border-slate-300 border rounded-2xl relative items-center justify-center">
<div className="bg-center cursor-pointer bg-stone-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a64bcbd8-0bdc-4f51-9286-510fd0eeaf63_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale" onclick="window.location.href='https://www.google.com/maps/place/Mazamet/@43.4666264,2.3450943,13z/data=!3m1!4b1!4m6!3m5!1s0x12ae18d0b68e0165:0x4b4b131c7e76e80d!8m2!3d43.490103!4d2.376579!16zL20vMDR0ODc2?entry=ttu&amp;g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D'" role="button"></div>
<div className="flex cursor-pointer text-sm font-medium text-[#ff2600] bg-white/90 z-10 border-slate-200 border rounded-lg pt-2 pr-4 pb-2 pl-4 relative shadow-sm backdrop-blur-sm translate-y-12 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://www.google.com/maps/place/Vino+toiture+:+Couvreur+Gaillac/@43.9119264,1.848564,13z/data=!4m10!1m2!2m1!1sGaillac+vino+toiture!3m6!1s0xa49fc273e492ec99:0xa03ee057c8c8afb1!8m2!3d43.911872!4d1.8897634!15sChRHYWlsbGFjIHZpbm8gdG9pdHVyZVoWIhRnYWlsbGFjIHZpbm8gdG9pdHVyZZIBEnJvb2ZpbmdfY29udHJhY3RvcpoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQycGtNR05zT1VoUFZYaDNXVEJyZW1KWVkzcFVNbVI1WlVaS05HTXhSUkFC4AEA-gEECAAQQw!16s%2Fg%2F11yrw0ksv2?entry=ttu&amp;g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D'" role="button">Voir sur la Carte</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="prenom">Prénom</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all text-sm" id="prenom" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="nom">Nom</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all text-sm" id="nom" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="telephone">Téléphone</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all text-sm" id="telephone" placeholder="06 00 00 00 00" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="ville">Ville du chantier</label>
<input className="focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all text-sm bg-slate-50 w-full border-slate-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" id="ville" placeholder="Ex: Gaillac" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Description de votre besoin</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all text-sm resize-none" id="message" placeholder="Décrivez les travaux souhaités (rénovation, fuite, nettoyage...)" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm" type="button">
                                Demander un devis
                            </button>
<p className="text-xs text-slate-500 text-center mt-4">Vos données sont sécurisées. Nous vous recontacterons sous 48h.</p>
</form>
</div>
</div>
</div>
</section><section className="bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-12 items-center">
<div className="lg:col-span-1">
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Pourquoi choisir Sl Rénovation ?</h2>
<p className="text-base text-slate-400 mb-8">Entreprise locale basée à Rodez, SL Rénovation accompagne les particuliers due la Haute-Garonne pour tous leurs travaux de toiture. Réparation, démoussage ou rénovation complète : nous réalisons un travail soigné avec des solutions adaptées à votre maison et à votre budget. Notre objectif : vous garantir une toiture solide et durable.</p>
<a className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-sm font-medium rounded-full text-white bg-white/5 hover:bg-white/10 transition-colors" href="#contact">
                            Contactez-nous
                        </a>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Savoir-faire artisanal</h3>
<p className="text-sm text-slate-400">Chaque chantier est réalisé avec soin et précision, en utilisant des matériaux de qualité pour garantir une toiture durable et résistante.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Devis gratuit et transparent</h3>
<p className="text-sm text-slate-400">Avant chaque intervention, nous vous proposons un devis clair et détaillé, afin que vous sachiez exactement ce qui sera réalisé.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Intervention rapide</h3>
<p className="text-sm text-slate-400">En cas d'urgence ou de fuite, nous intervenons rapidement dans tout le département du Tarn.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
<div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:hearts-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Satisfaction client</h3>
<p className="text-sm text-slate-400">Nous mettons un point d’honneur à fournir un travail sérieux et soigné, avec des clients satisfaits qui nous font confiance pour leurs travaux de toiture.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="realisations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Nos dernières réalisations</h2>
<p className="text-base text-slate-500">Découvrez nos récents chantiers de rénovation, réparation et nettoyage dans la région de Mazamet.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200">
<img alt="Rénovation toiture Gaillac" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df9782b1-1599-4d4e-80d9-d3a928b76502_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-0 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4">
<h4 className="text-white font-medium text-lg tracking-tight">Rénovation complète</h4>
<p className="text-sm text-slate-200">Rodez</p>
</div>
</div>

<div className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200">
<img alt="Pose de tuiles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/577e6a54-028d-4ec5-abab-2ba2374d4e2f_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-0 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4">
<h4 className="text-lg font-medium text-white tracking-tight">Remplacement de tuiles</h4>
<p className="text-sm text-slate-200">Albi</p>
</div>
</div>

<div className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200">
<img alt="Zinguerie et charpente" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9f636aa-4602-4160-a020-9d8db4ad9a7c_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 opacity-0 pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 left-0 translate-y-4">
<h4 className="text-white font-medium text-lg tracking-tight">Travaux de zinguerie</h4>
<p className="text-sm text-slate-200">Carmaux</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y -translate-x-2 -translate-y-2 bg-white border-slate-100 pt-24 pb-24 space-y-12" id="avis">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Ce que pensent nos clients</h2>
<p className="text-base text-slate-500">La confiance de nos clients est notre plus belle réussite.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-medium text-slate-700 mb-6">« Très satisfait du travail réalisé ! Entreprise de couverture sérieuse et professionnelle à Rodez. Intervention rapide, chantier propre et travail soigné du début à la fin. L’équipe est à l’écoute, donne de bons conseils et respecte les délais annoncés. Le résultat est impeccable. Je recommande sans hésitation !»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold text-sm">
                                MP
                            </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Willy Grs</p>
<p className="text-xs text-slate-500">Rodez</p>
</div>
</div>
</div>

<div className="bg-slate-50 border-slate-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-medium text-slate-700 mb-6">« J’ai fait appel à Sl Rénovation pour des travaux de couverture et je suis entièrement satisfait. Entreprise sérieuse, réactive et professionnelle. Le travail a été réalisé proprement et dans les délais. Je recommande vivement ce couvreur pour son sérieux et la qualité de son travail.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                                SL
                            </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Philippe Gos</p>
<p className="text-xs text-slate-500">Albi</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hidden lg:block">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-medium text-slate-700 mb-6">« J’ai confié la rénovation de ma toiture à ce couvreur, les travaux a été respecté et très bien fait, je les remercie »</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold text-sm">
                                JD
                            </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Dessin Shana</p>
<p className="text-xs text-slate-500">Gaillac</p>
</div>
</div>
</div>
</div>
</div><div className="sm:px-6 lg:px-8 flex flex-col max-w-7xl border-slate-100 border-t mt-16 mr-auto ml-auto pt-12 pr-4 pl-4 -translate-y-12 items-center justify-center">
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="flex items-center gap-4 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
<svg className="w-8 h-8" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.627.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" fill="#EA4335"></path>
<path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" fill="#4285F4"></path>
<path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" fill="#FBBC05"></path>
<path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" fill="#34A853"></path>
</svg>
<div className="">
<div className="flex gap-1 text-amber-400 mb-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700">Note de 5.0/5</p>
</div>
</div>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-all hover:.org/2000/svg text-sm font-medium text-slate-700 bg-white border-slate-200 border rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" fill="none" height="16" href="https://www.google.com/maps/place/SL+rénovation/@44.3591825,2.5587205,17z/data=!4m8!3m7!1s0x12b27d0bdc3b4adb:0xea6b19627ba4aef0!8m2!3d44.3591787!4d2.5612954!9m1!1b1!16s%2Fg%2F11mrcy7r3w?entry=ttu&amp;g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" target="_blank" viewbox="0 0 24 24" width="16">Ajouter un avis </a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="apropos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
<img alt="Équipe Vino Toiture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d4b6319-6912-47c4-bb7b-86b1d7b77151_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
<div className="text-4xl font-semibold text-rose-700 tracking-tight mb-1">10+</div>
<div className="text-sm text-slate-500 font-medium">Années d'expérience</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-6">
                            À propos de nous
                        </div>
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Votre couvreur professionnel à Rodez dans l'Aveyron</h2>
<div className="space-y-4 text-base text-slate-600">
<p className="">Sl Rénovation est une entreprise locale établie à Labarthe-Inard, spécialisée dans tous les travaux de couverture, charpente et zinguerie. Forts de notre expérience, nous mettons notre savoir-faire au service des particuliers et professionnels de la région Occitanie.</p>
<p className="">Notre philosophie repose sur le travail bien fait, le respect des traditions artisanales et l'utilisation de matériaux durables. Chaque toiture est unique, c'est pourquoi nous proposons des solutions sur-mesure, adaptées à votre budget et à l'architecture de votre maison.</p>
<p className="">Que ce soit pour un dépannage urgent, un démoussage régulier ou une rénovation complète, notre équipe intervient avec rigueur et professionnalisme.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-700">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm text-slate-500">Appelez-nous pour un conseil</p>
<p className="text-lg font-semibold text-slate-900 tracking-tight">06.43.60.85.88</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-20 bg-rose-800 relative overflow-hidden">
<div className="bg-center bg-stone-500 opacity-10 mix-blend-overlay bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1885d444-0e89-4f62-b78d-050ac1862d36_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="sm:px-6 lg:px-8 text-center max-w-4xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">Besoin d’un couvreur dans à Rodez et ses alentours ?</h2>
<p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">N'attendez pas que les problèmes s'aggravent. Demandez une inspection et un devis sans engagement pour vos travaux de toiture.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-rose-900 bg-white hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                    Demander mon devis gratuit
                </a>
</div>
</section>


</main>

<footer className="text-slate-400 bg-slate-900 border-slate-800 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-rose-700 text-white p-1.5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-lg" height="18" icon="solar:home-angle-linear" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Sl Rénovation</span>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="">© 2026 Sl Rénovation. Artisan Couvreur à Rodez (Aveyron).</p>
<p className=""></p>
</div>
</div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
<div className="flex items-center justify-center gap-4 py-3 px-6 rounded-full bg-slate-800/40 border border-slate-700/50 w-fit mx-auto shadow-sm">
<span className="text-sm font-medium text-slate-300 tracking-tight">Suivez nos réalisations</span>
<div className="w-px h-4 bg-slate-600"></div>
<a aria-label="Page Facebook de Vino Toiture" className="text-slate-400 hover:text-rose-400 transition-colors hover:scale-110 transform duration-200" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
