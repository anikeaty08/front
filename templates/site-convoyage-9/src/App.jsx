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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
          PCA
        </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#convoyage">
            Services Convoyage
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#fonctionnement">
            Comment ça marche
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#vente">
            Vente
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#avis">
            Avis
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 hover:text-slate-900 text-sm font-medium text-slate-500" href="tel:+33123456789">01 00 00 00 00</a>
<a className="hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="/#devis">
            Demander un devis
          </a>
</div>
</div>
</header>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-8 border border-blue-100/50">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Service disponible dans toute la France
            </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Votre spécialiste du convoyage de véhicules en France.
            </h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              Transport sécurisé de votre véhicule par des professionnels
              expérimentés et sélection rigoureuse de voitures fiables à la
              vente.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-base font-medium text-white bg-blue-600 rounded-full pt-3.5 pr-7 pb-3.5 pl-7 shadow-sm" href="/#devis">
                Demander un devis
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-base font-medium py-3.5 px-7 rounded-full transition-all flex items-center justify-center" href="#vente">
                Voir les véhicules
              </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
<img alt="Voiture de sport moderne sur route" className="lg:h-[600px] w-full h-[500px] object-cover rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8cc7f46-c9a6-4c57-b410-1773a1a57eba_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="services">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Nos services sur-mesure
          </h2>
<p className="text-base text-slate-500">
            Des solutions complètes pour le transport et l'acquisition de votre
            prochain véhicule, conçues pour votre tranquillité d'esprit.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-48 overflow-hidden">
<img alt="Transporteur de voitures" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d416a25-bc85-40a8-b160-a44204549855_3840w.jpg"/>
</div>
<div className="p-8">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                Convoyage de véhicules
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Transport sécurisé de votre voiture partout en France par nos
                chauffeurs professionnels qualifiés.
              </p>
<span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-48 overflow-hidden">
<img alt="Showroom de véhicules premium" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25f583a7-b793-449a-9597-082c3888dfe8_800w.jpg"/>
</div>
<div className="p-8">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:key-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                Vente de véhicules
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Large sélection de voitures d'occasion premium, rigoureusement
                contrôlées et garanties.
              </p>
<span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir le catalogue
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
<div className="h-48 overflow-hidden">
<img alt="Voiture livrée devant une maison" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc6f51c-2bdb-41e0-8173-0d23a54845a7_800w.jpg"/>
</div>
<div className="p-8">
<div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                Livraison à domicile
              </h3>
<p className="text-sm text-slate-500 mb-6">
                Un service clé en main : nous livrons votre nouveau véhicule ou
                le vôtre directement devant chez vous.
              </p>
<span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section><section className="py-24 bg-white" id="devis">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
        Obtenir un devis de convoyage
      </h2>
<p className="text-base text-slate-500">
        Remplissez le formulaire ci-dessous pour recevoir rapidement un devis pour le convoyage de votre véhicule partout en France.
      </p>
</div>

<div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
<div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
<div className="h-12 w-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-5 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Devis 100% gratuit</h3>
<p className="text-sm text-slate-500 leading-relaxed">Recevez rapidement une estimation pour le transport de votre véhicule, sans engagement.</p>
</div>
<div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
<div className="h-12 w-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-5 shadow-sm">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Réponse rapide</h3>
<p className="text-sm text-slate-500 leading-relaxed">Notre équipe traite votre demande en priorité et vous recontacte sous quelques heures.</p>
</div>
</div>

<div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
<form className="space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="prenom">Prénom</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="prenom" placeholder="Jean" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="nom">Nom</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="nom" placeholder="Dupont" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="telephone">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="telephone" placeholder="06 12 34 56 78" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="email" placeholder="jean.dupont@email.com" type="email"/>
</div>
</div>
<hr className="border-slate-100"/>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="depart">Lieu de départ</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="depart" placeholder="Ville ou code postal" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="arrivee">Lieu d'arrivée / livraison</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="arrivee" placeholder="Ville ou code postal" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="date">Date souhaitée</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-500" id="date" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="vehicule">Marque et modèle</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
<circle cx="7" cy="17" r="2"></circle>
<path d="M9 17h6"></path>
<circle cx="17" cy="17" r="2"></circle>
</svg>
</div>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400" id="vehicule" placeholder="Ex: Renault Clio 5" type="text"/>
</div>
</div>
</div>

<div className="">
<label className="block sm:text-left text-sm font-medium text-slate-700 text-center mb-3">Le véhicule est-il prêt à être récupéré ?</label>
<div className="flex flex-col sm:flex-row items-center gap-4">
<label className="w-full flex-1 cursor-pointer">
<input checked="" className="peer sr-only" name="roulant" type="radio" value="oui"/>
<div className="flex peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:bg-slate-50 peer-checked:hover:bg-slate-800 transition-all text-sm font-medium text-slate-600 bg-white border-slate-200 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 gap-x-2 gap-y-2 items-center justify-center">Oui</div>
</label>
<label className="w-full flex-1 cursor-pointer">
<input className="peer sr-only" name="roulant" type="radio" value="non"/>
<div className="flex peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:bg-slate-50 peer-checked:hover:bg-slate-800 transition-all text-sm font-medium text-slate-600 bg-white border-slate-200 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 gap-x-2 gap-y-2 items-center justify-center">Non</div>
</label>
</div>
</div>

<div className="">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Informations complémentaires</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400 resize-none" id="message" placeholder="Précisions sur l'accès, l'état du véhicule, particularités du trajet..." rows="3"></textarea>
</div>

<div className="pt-4 flex flex-col items-center">
<button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="button">
            Demander mon devis
            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="mt-5 text-xs text-slate-500 flex items-center justify-center gap-1.5 text-center">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
            Vos informations sont confidentielles. Nous vous recontactons rapidement avec une estimation du transport.
          </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">
              L'excellence au service de votre mobilité
            </h2>
<p className="text-base text-slate-400 mb-10 max-w-lg">
              Notre engagement est de vous fournir une prestation irréprochable,
              basée sur la sécurité, la transparence et le professionnalisme.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium mb-1">
                    Transport 100% sécurisé et assuré
                  </h4>
<p className="text-sm text-slate-400">
                    Une couverture complète durant tout le trajet de votre
                    véhicule.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1">
                    Convoyeurs professionnels certifiés
                  </h4>
<p className="text-sm text-slate-400">
                    Une équipe expérimentée sélectionnée pour sa conduite
                    irréprochable.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1">
                    Ponctualité et suivi en temps réel
                  </h4>
<p className="text-sm text-slate-400">
                    Des délais respectés et une communication transparente à
                    chaque étape.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1">
                    Couverture nationale
                  </h4>
<p className="text-sm text-slate-400">
                    Nous intervenons partout en France métropolitaine, sans
                    exception.
                  </p>
</div>
</li>
</ul>
</div>
<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-3xl -z-10"></div>
<img alt="Flotte de véhicules premium" className="bg-center object-cover border-slate-800 border rounded-2xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/531ef145-0c41-40b2-a14d-84da3300d09c_3840w.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="fonctionnement">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Un processus simple et transparent
          </h2>
<p className="text-base text-slate-500">
            De la demande à la livraison, nous gérons chaque détail pour vous
            offrir une expérience sans stress.
          </p>
</div>
<div className="space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10"></div>
<img alt="Demande de devis en ligne sur ordinateur" className="w-full h-80 object-cover rounded-2xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1181069d-b4e6-4bab-a975-92ed59f8c89e_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
                1
              </div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                Demande de convoyage
              </h3>
<p className="text-base text-slate-500 leading-relaxed">
                Remplissez notre formulaire en ligne ou contactez-nous par
                téléphone. Nous établissons un devis précis et gratuit en
                quelques heures, adapté à votre véhicule et au trajet.
              </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
                2
              </div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                Prise en charge du véhicule
              </h3>
<p className="text-base text-slate-500 leading-relaxed">
                Notre convoyeur se présente au lieu convenu. Un état des lieux
                détaillé et photographique est réalisé avant de prendre la
                route, pour une transparence totale.
              </p>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10"></div>
<img alt="Inspection et état des lieux du véhicule" className="w-full h-80 object-cover rounded-2xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42e0d047-50ac-4b0a-b2cb-69b00b71e9c7_1600w.jpg"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10"></div>
<img alt="Voiture transportée sur route dégagée" className="w-full h-80 object-cover rounded-2xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b7df3f8-f2e4-4450-b92c-c5e461d6185c_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
                3
              </div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                Transport sécurisé
              </h3>
<p className="text-base text-slate-500 leading-relaxed">
                Votre véhicule est conduit avec le plus grand soin par notre
                professionnel, en respectant scrupuleusement le code de la
                route. Vous êtes informé de la progression du trajet.
              </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-semibold mb-6 shadow-sm">
                4
              </div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">
                Livraison au client
              </h3>
<p className="text-base text-slate-500 leading-relaxed">
                Remise en main propre de votre véhicule à la destination finale.
                Un nouvel état des lieux est effectué ensemble pour valider la
                prestation avant la remise des clés.
              </p>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10"></div>
<img alt="Remise des clés du véhicule au client" className="object-center w-full h-80 object-cover rounded-2xl shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa33c7e5-9237-4486-a97d-475e495e5746_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="vente">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end mb-16 gap-x-6 gap-y-6 justify-between">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Véhicules d'exception disponibles
            </h2>
<p className="text-base text-slate-500">
              Une sélection rigoureuse de véhicules premium, révisés et
              garantis, prêts à prendre la route.
            </p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-2 pb-1" href="#">
            Voir tout le catalogue
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
<div className="relative h-56 overflow-hidden">
<img alt="Renault Clio 5" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/329ef0f9-d146-4120-b2fb-37c48fb944f0_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">
                Renault Clio V
              </h3>
<p className="text-sm text-slate-500 mb-4">1.0 TCe 90ch Evolution</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                  2023
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:speedometer-linear"></iconify-icon>
                  12 500 km
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:gas-station-linear"></iconify-icon>
                  Essence
                </div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
<span className="text-xl font-semibold tracking-tight text-slate-900">
                  17 900 €
                </span>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors shadow-sm" href="#">
                  Voir le véhicule
                </a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
<div className="relative h-56 overflow-hidden">
<img alt="Mercedes Classe A 2024" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a78543c-0630-435e-8a25-efde42469183_800w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900 shadow-sm">
                Nouveau
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">
                Mercedes-Benz Classe A
              </h3>
<p className="text-sm text-slate-500 mb-4">A 200 AMG Line 7G-DCT</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                  2024
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:speedometer-linear"></iconify-icon>
                  1 200 km
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:gas-station-linear"></iconify-icon>
                  Hybride
                </div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
<span className="text-xl font-semibold tracking-tight text-slate-900">
                  43 500 €
                </span>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors shadow-sm" href="#">
                  Voir le véhicule
                </a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
<div className="relative h-56 overflow-hidden">
<img alt="BMW Série 1" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b134189-9bd7-4070-b7cf-8e6686c528fb_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">
                BMW Série 1
              </h3>
<p className="text-sm text-slate-500 mb-4">118i 136ch M Sport BVA8</p>
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                  2022
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:speedometer-linear"></iconify-icon>
                  28 000 km
                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100">
<iconify-icon icon="solar:gas-station-linear"></iconify-icon>
                  Essence
                </div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
<span className="text-xl font-semibold tracking-tight text-slate-900">
                  31 900 €
                </span>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-colors shadow-sm" href="#">
                  Voir le véhicule
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="avis">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            La satisfaction de nos clients
          </h2>
<p className="text-base text-slate-500">
            Découvrez les retours de ceux qui nous ont fait confiance pour leur
            véhicule.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">
              "Service impeccable du début à la fin. Ma voiture de collection
              est arrivée parfaitement en état à Nice. Chauffeur très
              professionnel qui donne des nouvelles durant le trajet."
            </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
                MR
              </div>
<div>
<p className="text-sm font-medium text-slate-900">Marc R.</p>
<p className="text-xs text-slate-500">Convoyage Paris - Nice</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">
              "Très professionnel et rapide, je recommande les yeux fermés.
              Achat d'un véhicule à distance avec livraison à domicile, aucune
              mauvaise surprise. Véhicule conforme."
            </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
                SL
              </div>
<div>
<p className="text-sm font-medium text-slate-900">Sophie L.</p>
<p className="text-xs text-slate-500">Achat &amp; Livraison</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-slate-700 mb-6 italic">
              "En tant que concessionnaire, je fais régulièrement appel à PCA
              pour mes transferts inter-sites. Toujours ponctuels, réactifs et
              sérieux. Un vrai partenaire de confiance."
            </p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
                GD
              </div>
<div>
<p className="text-sm font-medium text-slate-900">Garage Dubois</p>
<p className="text-xs text-slate-500">Client Professionnel</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-600 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
          Besoin de transporter un véhicule ?
        </h2>
<p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          Obtenez une estimation précise et rapide pour le convoyage de votre
          voiture partout en France, ou découvrez nos véhicules en vente.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-base font-medium text-blue-600 bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="/#devis">
            Demander un devis gratuit
          </a>
<a className="bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 text-base font-medium py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2" href="tel:+33123456789">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
            01 23 45 67 89
          </a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-24 pb-12 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 block" href="#">
              PCA
            </a>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Prestige Convoyage Auto. Votre partenaire de confiance pour le
              transport sécurisé et l'achat de véhicules haut de gamme dans
              toute la France. Plus de 10 ans d'expertise automobile.
            </p>
</div>

<div>
<h4 className="text-white font-medium mb-6">Navigation</h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Accueil
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                  Convoyage de véhicules
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#vente">
                  Vente de voitures
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#fonctionnement">
                  Notre fonctionnement
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+33123456789">01 00 00 00 00</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-slate-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contact@pca-auto.fr">
                  contact@pca-auto.fr
                </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-slate-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="">
                  123 Avenue des Champs-Élysées
                  <br/>
                  75008 Paris, France
                </span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Devis rapide</h4>
<form className="space-y-3">
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Ville de départ" type="text"/>
<input className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Ville d'arrivée" type="text"/>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors" type="button">
                Demander un devis
              </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<p>© 2023 Prestige Convoyage Auto. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Mentions légales
            </a>
<a className="hover:text-white transition-colors" href="#">
              Politique de confidentialité
            </a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
