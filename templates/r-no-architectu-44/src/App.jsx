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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-panel transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

<a className="text-xl tracking-tighter font-semibold flex items-center gap-1" href="#">
                RÉNO<span className="text-slate-400">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#projets">Réalisations</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#processus">Processus</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                    Demander un devis
                </a>

<button className="md:hidden text-slate-900 p-1">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] right-[10%] w-96 h-96 bg-slate-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-[30%] left-[10%] w-72 h-72 bg-gray-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Disponible pour projets 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-slate-900 mb-6 leading-[0.95]">
                    L'art de rénover <br/>
<span className="text-slate-400">votre habitat.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed font-light">
                    Nous transformons les espaces résidentiels et commerciaux avec une précision architecturale. Du gros œuvre aux finitions d'exception.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200 group" href="#contact">
                        Parlez-nous de votre projet
                        <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all" href="#projets">
                        Voir nos réalisations
                    </a>
</div>
</div>

<div className="mt-20 relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 aspect-[16/9] md:aspect-[21/9] group">
<img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 flex items-center gap-4">
<div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
<span className="text-slate-900 font-medium text-xs tracking-wide uppercase flex items-center gap-2">
<iconify-icon icon="solar:ruler-pen-linear"></iconify-icon> Architecture &amp; Design
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-4">Notre expertise</h2>
<p className="text-slate-500 text-lg max-w-xl">Une approche globale pour simplifier vos travaux. Un seul interlocuteur pour l'ensemble de votre chantier.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 hover:border-slate-300 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:home-smile-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 text-slate-900 shadow-sm">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Rénovation Complète</h3>
<p className="text-slate-500 leading-relaxed max-w-md">
                            Transformation intégrale d'appartements, maisons et bureaux. Nous gérons la démolition, la structure, et la remise à neuf clé en main.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Peinture &amp; Finitions</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Enduits, peinture décorative, pose de papiers peints. Une finition impeccable pour sublimer vos murs.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Cuisines &amp; Bains</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Conception et installation. Plomberie, carrelage et agencement sur mesure pour vos pièces d'eau.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Électricité &amp; Domotique</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Remise aux normes, éclairage architectural et solutions connectées pour une maison intelligente.
                    </p>
</div>

<div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-between group cursor-pointer">
<div>
<h3 className="text-xl font-medium mb-2">Projet sur mesure ?</h3>
<p className="text-slate-400 text-sm">Discutons de vos besoins spécifiques.</p>
</div>
<div className="flex items-center gap-2 mt-8 text-sm font-medium group-hover:text-slate-200">
                        Nous contacter
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="projets">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-4">Dernières réalisations</h2>
<p className="text-slate-500 text-lg max-w-xl">Découvrez une sélection de nos chantiers récemment livrés.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-300 pb-1 hover:border-slate-900 transition-all inline-flex items-center gap-2 group" href="#contact">
                    Voir tout le portfolio 
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Salon Moderne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-lg font-medium">Appartement Haussmannien</h3>
<p className="text-slate-200 text-xs mt-1">Paris 16ème • Rénovation totale</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Cuisine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912173-3db996ea0622?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<h3 className="text-sm font-medium">Cuisine Ouverte</h3>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Salle de bain" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<h3 className="text-sm font-medium">Salle de Bain</h3>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Chambre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-sm font-medium">Maison de Ville</h3>
<p className="text-slate-200 text-xs mt-0.5">Bordeaux • Extension bois</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">15+</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Années d'expérience</span>
</div>
<div className="flex flex-col">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">250+</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projets livrés</span>
</div>
<div className="flex flex-col">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">100%</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Respect des délais</span>
</div>
<div className="flex flex-col">
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">10</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Garantie décennale</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="processus">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-6">Un processus clair, <br/>sans surprises.</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        La rénovation ne devrait pas être source de stress. Nous avons optimisé chaque étape pour vous garantir sérénité et transparence.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-semibold shadow-sm">1</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Étude &amp; Devis</h4>
<p className="text-slate-500 text-sm">Visite technique, écoute de vos besoins et chiffrage détaillé sous 48h.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-semibold shadow-sm">2</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Planification</h4>
<p className="text-slate-500 text-sm">Validation des matériaux, établissement du calendrier et protection du chantier.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-semibold shadow-sm">3</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1">Réalisation &amp; Suivi</h4>
<p className="text-slate-500 text-sm">Travaux supervisés par un chef de chantier dédié. Rapports hebdomadaires.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100/50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Jean D.</div>
<div className="text-xs text-slate-400">Rénovation Appartement Haussmannien</div>
</div>
<div className="ml-auto flex text-amber-400 gap-0.5">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<p className="text-slate-600 italic leading-relaxed">
                            "L'équipe de RÉNO a fait preuve d'un professionnalisme rare. Les finitions sont impeccables et le chantier a été rendu propre chaque soir. Un vrai plaisir."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium mb-4">Démarrons votre projet</h2>
<p className="text-slate-500">Remplissez le formulaire ci-dessous, nous vous répondrons dans la journée.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Nom complet</label>
<input className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Email</label>
<input className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Type de projet</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">

<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-slate-50 transition-all hover:border-slate-300">
                                Complet
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-slate-50 transition-all hover:border-slate-300">
                                Cuisine
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-slate-50 transition-all hover:border-slate-300">
                                Peinture
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="project_type" type="radio"/>
<div className="px-4 py-3 border border-slate-200 rounded-lg text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-slate-50 transition-all hover:border-slate-300">
                                Autre
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 resize-none" placeholder="Décrivez brièvement votre projet..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group" type="submit">
                        Envoyer la demande
                        <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">Gratuit et sans engagement.</p>
</div>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter">RÉNO.</span>
<span className="text-slate-400 text-sm">© 2024</span>
</div>
<div className="flex gap-8">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
