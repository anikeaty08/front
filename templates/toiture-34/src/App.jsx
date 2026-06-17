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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2" href="#">
<span className="uppercase text-xl font-semibold text-slate-900 tracking-tighter">Toiture 34</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-orange-500 transition-colors" href="#">Accueil</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#avis">Avis clients</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#apropos">À propos</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-orange-500 transition-colors text-sm font-medium text-slate-900" href="/tel:06 34 62 48 51">06 34 62 48 51</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-all hover:shadow" href="#devis">
                        Obtenir un devis gratuit
                    </a>
</div>

<button className="md:hidden flex items-center text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative bg-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Toiture moderne" className="w-full h-full object-cover opacity-30 object-center" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex text-xs font-medium text-white bg-white/10 border-white/20 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">Intervention rapide à Marseillan et dans l'Hérault</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6">Couvreur à Marseillan <br className="hidden sm:block"/> <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl block mt-2 font-medium">Réparation &amp; Rénovation</span></h1>
<p className="leading-relaxed text-lg text-slate-300 max-w-xl mb-10">Toiture 34 intervient pour tous vos travaux de toiture : recherche de fuite, réparation, rénovation, zinguerie et entretien. Un travail soigné garanti par des artisans passionnés.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-all hover:shadow-md" href="#devis">
                            Obtenir un devis gratuit
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all backdrop-blur-sm" href="#realisations">
                            Voir nos réalisations
                        </a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-orange-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-white">Noté 5/5 sur Google</p>
</div>
</div>

<div className="w-full max-w-md mx-auto lg:ml-auto" id="devis">
<div className="sm:p-8 bg-white border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Demander un devis</h3>
<p className="text-sm text-slate-500 mt-1">Réponse rapide garantie.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 gap-4">
<div className="">
<label className="sr-only">Nom complet</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors" placeholder="Nom complet" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="sr-only">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors" placeholder="Téléphone" type="tel"/>
</div>
<div className="">
<label className="sr-only">Ville</label>
<input className="focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Ville (ex: Agde)" type="text"/>
</div>
</div>
<div className="">
<label className="sr-only">Email</label>
<input className="focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Adresse email" type="email"/>
</div>
<div className="">
<label className="sr-only">Type de travaux</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
<option disabled="" selected="" value="">Type de travaux...</option>
<option>Réparation de toiture</option>
<option>Rénovation complète</option>
<option>Zinguerie &amp; Gouttières</option>
<option>Recherche de fuite</option>
<option>Nettoyage &amp; Démoussage</option>
<option>Autre</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="sr-only">Description du projet</label>
<textarea className="focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors resize-none text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Décrivez brièvement votre besoin..." rows="3"></textarea>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all mt-2" type="button">
                                Demander mon devis
                            </button>
<div className="flex gap-2 text-xs text-slate-500 mt-4 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
            Données confidentielles &amp; sécurisées
        </div>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 border-b border-slate-200 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
                    Travail soigné
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
                    Devis gratuit
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
                    Intervention rapide
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
                    Artisan local
                </div>
</div>
</div>
</div>

<section className="py-24 lg:py-32 bg-white overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos services de couverture</h2>
<p className="text-lg text-slate-500">Des solutions complètes et sur-mesure pour tous vos besoins en toiture en Hérault.</p>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory custom-scrollbar">

<div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden group snap-center hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
<div className="h-48 overflow-hidden relative bg-slate-100">
<img alt="Réparation de toiture" className="group-hover:scale-105 transition duration-500 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4340d0e2-f7dd-458f-9c6c-446be243d918_800w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Réparation de toiture</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Intervention rapide pour fuites, tuiles cassées et problèmes d’étanchéité pour protéger votre habitat.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors" href="#devis">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden group snap-center hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
<div className="h-48 overflow-hidden relative bg-slate-100">
<img alt="Rénovation de toiture" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53be873c-3f15-4586-bece-028324875a51_800w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Rénovation de toiture</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Rénovation complète ou partielle pour améliorer l'esthétique, la durabilité et l'isolation de votre maison.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors" href="#devis">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden group snap-center hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
<div className="h-48 overflow-hidden relative bg-slate-100">
<img alt="Zinguerie" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81047edd-ff6a-4ef7-ba14-78eec3874480_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Zinguerie</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Pose et réparation de gouttières, cheneaux et abergements pour une évacuation parfaite des eaux de pluie.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors" href="#devis">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden group snap-center hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
<div className="h-48 overflow-hidden relative bg-slate-100">
<img alt="Nettoyage et démoussage" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb72e47c-5092-452b-8a1c-c95cbb99d771_800w.webp"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Nettoyage &amp; Démoussage</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Élimination professionnelle des mousses et lichens pour protéger et prolonger la durée de vie de votre toit.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors" href="#devis">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 bg-white rounded-2xl border border-slate-200 overflow-hidden group snap-center hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
<div className="h-48 overflow-hidden relative bg-slate-100">
<img alt="Recherche de fuite" className="group-hover:scale-105 transition duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b63c1dc2-1740-4572-b1f6-3a7999b207f1_800w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Recherche de fuite</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Détection précise et rapide des infiltrations d’eau pour une réparation ciblée et efficace.</p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors" href="#devis">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610486851613-205fb161405e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] opacity-5 bg-cover bg-center"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Obtenir un devis gratuit</h2>
<p className="text-lg text-slate-400 mb-8 max-w-md">
                        Un projet de rénovation de toiture ou une urgence fuite ? Contactez votre artisan couvreur zingueur pour une estimation rapide.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-xl text-orange-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-300">Zone d'intervention</p>
<p className="text-base font-semibold text-white">Marseillan, Agde, Sète et alentours (34)</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-xl text-orange-400" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-300">Ligne directe</p>
<p className="text-base font-semibold text-white">06 34 62 48 51</p>
</div>
</div>
</div>
</div>

<div className="sm:p-8 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-1 gap-4 gap-x-4 gap-y-4">
<div className="">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors" placeholder="Nom complet" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors" placeholder="Téléphone" type="tel"/>
</div>
<div className="">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors" placeholder="Ville (ex : Sète)" type="text"/>
</div>
</div>
<input className="focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Adresse email" type="email"/>
<div className="">
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
<option disabled="" selected="" value="">Type de travaux...</option>
<option>Réparation de toiture</option>
<option>Rénovation complète</option>
<option>Zinguerie &amp; Gouttières</option>
<option>Autre</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="">
<textarea className="focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors resize-none text-sm text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Décrivez brièvement votre besoin..." rows="3"></textarea>
</div>
</div>
<button className="inline-flex hover:bg-orange-600 transition-all text-sm font-medium text-white bg-orange-500 w-full rounded-lg mt-2 pt-3.5 pr-5 pb-3.5 pl-5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="button">Demander mon devis gratuit </button>
</form>
<div className="flex gap-2 text-xs text-slate-500 mt-4 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
            Données confidentielles &amp; sécurisées
        </div></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comment ça marche ?</h2>
<p className="text-lg text-slate-500">Un processus simple et transparent pour mener à bien vos travaux de couverture.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-orange-200 text-orange-500 rounded-full flex items-center justify-center font-semibold text-lg mb-4 shadow-sm">1</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Demande de devis</h3>
<p className="text-sm text-slate-500">Contactez-nous via le formulaire ou par téléphone pour exposer votre besoin.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-orange-200 text-orange-500 rounded-full flex items-center justify-center font-semibold text-lg mb-4 shadow-sm">2</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Analyse du projet</h3>
<p className="text-sm text-slate-500">Déplacement sur site, diagnostic de la toiture et proposition détaillée chiffrée.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-white border border-orange-200 text-orange-500 rounded-full flex items-center justify-center font-semibold text-lg mb-4 shadow-sm">3</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Intervention</h3>
<p className="text-sm text-slate-500">Réalisation des travaux dans les règles de l'art et les délais convenus.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-12 h-12 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-lg mb-4 shadow-sm">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Travaux finalisés</h3>
<p className="text-sm text-slate-500">Nettoyage du chantier, vérification finale et remise de la garantie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="realisations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos dernières réalisations</h2>
<p className="text-lg text-slate-500">Découvrez la qualité de nos interventions en couverture et zinguerie.</p>
</div>
<a className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap" href="#">
                    Voir toutes les réalisations
                </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer">
<img alt="Rénovation toiture tuile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d1e3708-72bf-4d35-baf1-a3895fae07a8_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="">
<p className="text-white font-medium text-lg">Rénovation complète</p>
<p className="text-sm text-slate-300">Avant / Après - Sète </p>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer">
<img alt="Zinguerie gouttière" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/224a8f66-3489-4460-8ddd-68d5f1e96695_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="">
<p className="text-white font-medium text-lg">Pose de zinguerie</p>
<p className="text-sm text-slate-300">Cheneaux et gouttières - Vias Plage</p>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer md:hidden lg:block">
<img alt="Réparation toiture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a02e2a30-4890-471d-af01-d11e0cae5231_800w.webp"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a02e2a30-4890-471d-af01-d11e0cae5231_800w.webp)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="">
<p className="text-lg font-medium text-white">Démoussage toiture</p>
<p className="text-sm text-slate-300">Changement tuiles - Frontignan</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" id="avis">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Ils nous font confiance</h2>
<div className="flex items-center justify-center gap-2 mb-2">
<div className="flex text-orange-400">
<iconify-icon className="" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold text-slate-900">5.0</span>
</div>
<p className="text-sm text-slate-500">Note moyenne basée sur les avis Google.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Intervention très rapide suite à une fuite sur notre toit. Artisan sérieux, qui explique bien ce qu'il fait. Le devis était clair et le travail a été réalisé proprement. Je recommande les yeux fermés."</p>
<p className="text-sm font-medium text-slate-900">— Jean-Marc D. Sète</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-slate-600 mb-6">"Nous avons fait appel à Toiture 34 pour refaire toute la zinguerie de notre maison. Le résultat est parfait. L'équipe est ponctuelle, professionnelle et très respectueuse des lieux."</p>
<p className="text-sm font-medium text-slate-900">— Sophie L. Vias Plage </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="flex text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Excellente prestation pour un démoussage et traitement hydrofuge. Mon toit est comme neuf. Tarif compétitif par rapport aux autres devis reçus. Merci pour votre professionnalisme."</p>
<p className="text-sm font-medium text-slate-900">— Pierre M. frontignan</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900 bg-white border-slate-300 border rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="https://www.google.com/search?client=safari&amp;hs=D2xU&amp;sca_esv=483bff7be855fde4&amp;rls=en&amp;si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOW0W86TI7W-98Vzxwr_vXz4sPNgKFTGN3AMYPI-ue8eTjytCn1MrpRu0aA93V2cVgd25f6KB8Bm0Mzpm7mtULbtmA1uu&amp;q=Toiture+34+Avis&amp;sa=X&amp;ved=2ahUKEwj6wuyMhs-TAxWjNPsDHWdbFewQ0bkNegQIPRAF&amp;biw=1778&amp;bih=1017&amp;dpr=2" target="_blank">
<svg height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                    Voir tous nos avis sur Google
                </a>
</div>
</div>
</section>

<section className="lg:py-32 bg-white border-slate-200 border-t pt-24 pb-24" id="apropos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Votre couvreur à Marseillan</h2>
<p className="leading-relaxed text-slate-600 mb-6">Toiture 34 est une entreprise locale spécialisée en couverture et zinguerie. Forts de notre expérience, nous accompagnons les particuliers pour tous leurs travaux de toiture avec sérieux, professionnalisme et réactivité.</p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Que ce soit pour une réparation d'urgence, une rénovation complète ou l'entretien régulier de votre toit, notre objectif est de vous fournir un résultat durable qui protège efficacement votre patrimoine.
                    </p>
<div className="p-6 bg-slate-50 border border-slate-200 rounded-xl inline-block">
<p className="text-sm font-medium text-slate-500 mb-1">Besoin d'un conseil ?</p>
<a className="hover:text-orange-500 transition-colors text-xl font-semibold text-slate-900 tracking-tight" href="/tel:06 34 62 48 51">06 34 62 48 51</a>
</div>
</div>

<div className="sm:p-10 text-white bg-slate-900 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-2xl font-semibold tracking-tight mb-8">Informations de contact</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-orange-400" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-400 mb-1">Téléphone</p>
<a className="hover:text-orange-400 transition-colors text-lg font-medium" href="/tel:06 34 62 48 51">06 34 62 48 51</a>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-orange-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-400 mb-1">Adresse</p>
<p className="text-base text-slate-200">Chem. du Rec de Gascou, 34340 Marseillan</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1">
<iconify-icon className="text-2xl text-orange-400" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-400 mb-1">Email</p>
<a className="hover:text-orange-400 transition-colors text-base text-slate-200" href="mailto:contact@kyrenovation.fr">contact@toiturer34.fr</a>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-orange-500 py-16">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-8">Besoin d’un couvreur en urgence ou pour un projet ?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-50 rounded-lg shadow-sm transition-all" href="#devis">
                    Demander un devis
                </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-orange-700 transition-all text-sm font-medium text-white bg-orange-600 w-full border-orange-400 border rounded-lg pt-3.5 pr-6 pb-3.5 pl-6" href="/tel:06 34 62 48 51">
<iconify-icon className="" icon="solar:phone-linear"></iconify-icon>
                    Appeler maintenant
                </a>
</div>
</div>
</section>

<footer className="text-slate-400 bg-slate-950 border-slate-900 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8 mb-8">
<div className="">
<span className="uppercase block text-lg font-semibold text-white tracking-tighter mb-4">Toiture 34</span>
<p className="text-sm text-slate-500 max-w-xs">Artisan couvreur zingueur intervenant à Marseillan, Sète et dans toute l'Hérault.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Navigation</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#realisations">Réalisations</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Informations</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
<p className="">© Toiture 34. Tous droits réservés.</p>
<p className="mt-2 md:mt-0 text-slate-600">Conception optimisée SEO</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
<a aria-label="Appeler" className="flex items-center justify-center hover:bg-green-600 transition-transform hover:scale-105 text-white bg-green-500 w-14 h-14 rounded-full shadow-lg" href="/tel:06 34 62 48 51">
<iconify-icon className="" height="24" icon="solar:phone-linear" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
<a aria-label="Demander un devis" className="flex items-center justify-center hover:bg-orange-600 transition-transform hover:scale-105 text-white bg-orange-500 w-14 h-14 rounded-full shadow-lg" href="#devis">
<iconify-icon className="" icon="solar:document-text-linear" strokeWidth="2" width="24"></iconify-icon>
</a>
</div>

    </>
  );
}
