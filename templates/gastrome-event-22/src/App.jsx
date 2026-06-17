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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-slate-900" href="#">GASTROME</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-orange-600 transition-colors" href="#services">Services</a>
<a className="hover:text-orange-600 transition-colors" href="#philosophie">Philosophie</a>
<a className="hover:text-orange-600 transition-colors" href="#temoignages">Avis</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                Devis Express
            </a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-full">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                Disponibilités ouvertes pour 2024-2025
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                L'art de recevoir,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">signé Gastrome.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Transformez vos événements en souvenirs gustatifs inoubliables. 
                Une cuisine raffinée, locale et orchestrée avec passion pour vos mariages et séminaires.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white transition-all bg-orange-600 rounded-lg hover:bg-orange-700 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" href="#contact">
                    Demander mon devis
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 flex items-center justify-center gap-2" href="#services">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Découvrir notre carte
                </a>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-200/60 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2 text-xl font-medium tracking-tight text-slate-400">
<iconify-icon className="text-slate-400" icon="solar:wineglass-linear"></iconify-icon> VOGUE
            </div>
<div className="flex items-center justify-center gap-2 text-xl font-medium tracking-tight text-slate-400">
<iconify-icon className="text-slate-400" icon="solar:cup-first-linear"></iconify-icon> Awards
            </div>
<div className="flex items-center justify-center gap-2 text-xl font-medium tracking-tight text-slate-400">
<iconify-icon className="text-slate-400" icon="solar:star-fall-linear"></iconify-icon> MICHELIN
            </div>
<div className="flex items-center justify-center gap-2 text-xl font-medium tracking-tight text-slate-400">
<iconify-icon className="text-slate-400" icon="solar:confetti-minimalistic-linear"></iconify-icon> WEDDING
            </div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Une expérience culinaire sans compromis</h2>
<p className="text-slate-500 text-lg font-light">Nous ne nous contentons pas de nourrir vos convives, nous créons une atmosphère.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Produits de Saison</h3>
<p className="text-slate-500 leading-relaxed font-light">
                        Nous sourçons nos ingrédients exclusivement auprès de producteurs locaux, respectant le cycle naturel des récoltes pour un goût authentique.
                    </p>
</div>

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Création Sur-Mesure</h3>
<p className="text-slate-500 leading-relaxed font-light">
                        Du cocktail dînatoire au banquet assis, nos chefs élaborent un menu unique adapté à vos envies, vos contraintes et votre thème.
                    </p>
</div>

<div className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Service d'Excellence</h3>
<p className="text-slate-500 leading-relaxed font-light">
                        Une brigade discrète et professionnelle qui anticipe les besoins de vos invités pour que vous puissiez profiter pleinement de votre moment.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">La confiance se mérite</h2>
<p className="text-slate-500 font-light mb-8">
                    Depuis 5 ans, nous accompagnons les moments les plus précieux de nos clients avec une rigueur absolue.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Dégustation préalable offerte</span> pour les mariages
                    </li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Annulation flexible</span> jusqu'à 30 jours
                    </li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium">Engagement Zéro Plastique</span> sur les réceptions
                    </li>
</ul>
</div>
<div className="grid grid-cols-2 gap-6 w-full md:w-auto">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="text-4xl font-semibold text-orange-600 tracking-tight mb-1">500+</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Événements Réussis</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="text-4xl font-semibold text-orange-600 tracking-tight mb-1">4.9/5</div>
<div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Note Moyenne</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Prêt à régaler vos convives ?</h2>
<p className="text-slate-400 text-lg font-light mb-8">
                                Remplissez le formulaire ci-contre pour recevoir un devis personnalisé sous 24h. Nos chefs sont impatients de collaborer avec vous.
                            </p>
<div className="space-y-6 mt-8">
<div className="flex items-start gap-4">
<div className="p-2 bg-slate-800 rounded-lg text-orange-500">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Téléphone</div>
<div className="text-white font-medium">01 23 45 67 89</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-slate-800 rounded-lg text-orange-500">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Email</div>
<div className="text-white font-medium">bonjour@gastrome.fr</div>
</div>
</div>
</div>
</div>
<div className="mt-12 relative z-10 flex gap-4">

<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="" height="41" icon="brandico:facebook" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon></a> 
</div>
</div>

<div className="bg-white p-10 md:p-16">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="firstname">Prénom</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400" id="firstname" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="lastname">Nom</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400" id="lastname" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="email">Email professionnel</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400" id="email" placeholder="jean@entreprise.com" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="date">Date de l'événement</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 text-sm" id="date" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="guests">Nb. Invités (approx)</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 appearance-none cursor-pointer" id="guests">
<option>10 - 50</option>
<option>50 - 100</option>
<option>100 - 300</option>
<option>300+</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider">Type d'événement</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-sm text-center border border-slate-200 rounded-md text-slate-600 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">
                                            Mariage
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-sm text-center border border-slate-200 rounded-md text-slate-600 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">
                                            Entreprise
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-sm text-center border border-slate-200 rounded-md text-slate-600 peer-checked:border-orange-500 peer-checked:text-orange-600 peer-checked:bg-orange-50 transition-all">
                                            Privé
                                        </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-900 uppercase tracking-wider" htmlFor="message">Détails supplémentaires</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none" id="message" placeholder="Préférences alimentaires, lieu, ambiance souhaitée..." rows="3"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-slate-300 rounded custom-checkbox focus:ring-1 focus:ring-orange-500 focus:ring-offset-0 cursor-pointer" id="consent" type="checkbox"/>
</div>
<label className="text-xs text-slate-500 leading-tight" htmlFor="consent">
                                    J'accepte d'être recontacté pour l'élaboration de mon devis. Mes données ne seront pas partagées.
                                </label>
</div>
<button className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white transition-all bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2" type="submit">
                                Recevoir mon estimation
                                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
<div className="text-2xl font-medium tracking-tighter text-slate-900 mb-6">GASTROME</div>
<div className="flex gap-8 mb-8 text-sm text-slate-500">
<a className="hover:text-orange-600 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-orange-600 transition-colors" href="#">CGV</a>
<a className="hover:text-orange-600 transition-colors" href="#">Politique de Confidentialité</a>
</div>
<p className="text-xs text-slate-400 font-light text-center">
                © 2024 Gastrome Traiteur. Tous droits réservés. <br/>
                Designé pour l'excellence.
            </p>
</div>
</footer>

    </>
  );
}
