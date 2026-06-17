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



        function showPage(pageId) {
            // Cacher toutes les pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Afficher la page demandée
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }
        }
    
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
      

<nav className="sticky w-full z-50 top-0 start-0 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="text-teal-700 transition-transform group-hover:scale-110 duration-300">
<iconify-icon height="26" icon="solar:paw-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<span className="self-center text-lg font-semibold tracking-tight text-slate-900">VETOLINK</span>
</a>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
<a className="hover:text-teal-700 transition-colors" href="#" onclick="showPage('search')">Trouver un vétérinaire</a>
<a className="hover:text-teal-700 transition-colors" href="#">Urgences</a>
</div>
<div className="h-6 w-px bg-slate-200 hidden md:block"></div>
<div className="flex gap-2">
<button className="text-slate-900 hover:bg-slate-100 font-medium rounded-lg text-sm px-4 py-2 transition-all" onclick="showPage('login')">
                        Se connecter
                    </button>
<button className="text-white bg-slate-900 hover:bg-slate-800 font-medium rounded-lg text-sm px-4 py-2 transition-all shadow-sm" onclick="showPage('register')">
                        S'inscrire
                    </button>
</div>

<button className="md:hidden p-2 text-slate-500 hover:text-teal-700" onclick="showPage('dashboard')">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="flex-grow relative">

<div className="page-section active" id="home">
<section className="relative pt-20 pb-20 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight">
                        La santé de votre animal,<br/>
<span className="text-teal-700">notre priorité absolue.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
                        Trouvez le meilleur vétérinaire près de chez vous et prenez rendez-vous en quelques clics, 24h/24 et 7j/7.
                    </p>
<div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 max-w-2xl mx-auto flex flex-col md:flex-row gap-2">
<div className="relative flex-1">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3 bg-transparent text-sm outline-none text-slate-900 placeholder-slate-400" placeholder="Vétérinaire, spécialité..." type="text"/>
</div>
<div className="w-px bg-slate-100 hidden md:block"></div>
<div className="relative flex-1">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3 bg-transparent text-sm outline-none text-slate-900 placeholder-slate-400" placeholder="Ville ou code postal" type="text"/>
</div>
<button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-lg shadow-teal-700/20" onclick="showPage('search')">
                            Rechercher
                        </button>
</div>
<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
<div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-teal-200 transition-colors shadow-sm cursor-pointer" onclick="showPage('search')">
<iconify-icon className="text-teal-600 mb-2" icon="solar:cat-linear" width="24"></iconify-icon>
<h3 className="font-medium text-slate-900">Chats</h3>
<p className="text-xs text-slate-500">Spécialistes félins</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-teal-200 transition-colors shadow-sm cursor-pointer" onclick="showPage('search')">
<iconify-icon className="text-teal-600 mb-2" icon="solar:dog-linear" width="24"></iconify-icon>
<h3 className="font-medium text-slate-900">Chiens</h3>
<p className="text-xs text-slate-500">Généralistes &amp; Spé.</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-teal-200 transition-colors shadow-sm cursor-pointer" onclick="showPage('search')">
<iconify-icon className="text-teal-600 mb-2" icon="solar:bone-linear" width="24"></iconify-icon>
<h3 className="font-medium text-slate-900">Ostéopathie</h3>
<p className="text-xs text-slate-500">Manipulations</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-teal-200 transition-colors shadow-sm cursor-pointer" onclick="showPage('search')">
<iconify-icon className="text-teal-600 mb-2" icon="solar:hospital-linear" width="24"></iconify-icon>
<h3 className="font-medium text-slate-900">Urgences</h3>
<p className="text-xs text-slate-500">24/7 Cliniques</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="search">
<div className="bg-white border-b border-slate-200 py-4 px-6 sticky top-[65px] z-40 shadow-sm">
<div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 whitespace-nowrap">Date: Aujourd'hui</button>
<button className="px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm font-medium whitespace-nowrap">Espèce: Chien</button>
<button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 whitespace-nowrap">Visite à domicile</button>
<button className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 whitespace-nowrap">Vidéo consultation</button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">

<div className="w-full md:w-1/3 h-64 md:h-[calc(100vh-200px)] bg-slate-200 rounded-2xl sticky top-32 overflow-hidden relative group">
<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.3522,48.8566,12,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xsbmN5Z20wMHBmMnBwYzZ5Z2c4cWc5In0.example')] bg-cover bg-center grayscale opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white px-4 py-2 rounded-lg shadow-md font-medium text-sm text-slate-700 hover:text-teal-700">Voir la carte</button>
</div>
</div>

<div className="flex-1 space-y-4">
<h2 className="text-lg font-semibold text-slate-900 mb-4">32 Vétérinaires à proximité</h2>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group" onclick="showPage('profile')">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden">
<iconify-icon className="w-full h-full text-slate-300 p-2" icon="solar:user-bold" width="100%"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">Dr. Sarah Martin</h3>
<p className="text-sm text-slate-500">Vétérinaire généraliste • 1.2km</p>
<div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.9 (124 avis)
                                        </div>
</div>
<iconify-icon className="text-slate-400 hover:text-red-500 transition-colors" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
<button className="flex-shrink-0 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium hover:bg-teal-100 transition-colors">14:30</button>
<button className="flex-shrink-0 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium hover:bg-teal-100 transition-colors">15:00</button>
<button className="flex-shrink-0 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium hover:bg-teal-100 transition-colors">16:15</button>
<button className="flex-shrink-0 px-3 py-2 bg-slate-50 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-100 transition-colors">Demain</button>
</div>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group" onclick="showPage('profile')">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden">
<iconify-icon className="w-full h-full text-slate-300 p-2" icon="solar:user-circle-bold" width="100%"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">Clinique des Tilleuls</h3>
<p className="text-sm text-slate-500">Centre Hospitalier • 2.5km</p>
<div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
<iconify-icon icon="solar:star-bold"></iconify-icon> 4.7 (850 avis)
                                        </div>
</div>
<iconify-icon className="text-slate-400 hover:text-red-500 transition-colors" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<div className="mt-4">
<p className="text-xs text-slate-400 mb-2">Prochaine disponibilité :</p>
<button className="px-3 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium w-full text-center">Lundi 24 Octobre</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="profile">
<div className="max-w-5xl mx-auto px-6 py-10">
<button className="text-sm text-slate-500 hover:text-slate-900 mb-6 flex items-center gap-1" onclick="showPage('search')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour aux résultats
                </button>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
<div className="w-24 h-24 rounded-full bg-slate-100 flex-shrink-0 overflow-hidden">
<iconify-icon className="w-full h-full text-slate-300 p-3" icon="solar:user-bold" width="100%"></iconify-icon>
</div>
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Dr. Sarah Martin</h1>
<p className="text-slate-500 mb-2">Vétérinaire comportementaliste</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Conventionné</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">CB acceptée</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Parking</span>
</div>
<div className="text-sm text-slate-500 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                    12 Rue de la République, 75011 Paris
                                </div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-4">Présentation</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Diplômée de l'École Nationale Vétérinaire d'Alfort, je vous accueille dans mon cabinet pour le suivi médical de vos compagnons. Spécialisée en comportement, je propose également des consultations dédiées aux troubles anxieux.
                            </p>
<h3 className="font-semibold text-slate-900 mb-4 mt-8">Tarifs</h3>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Consultation générale</span> <span className="font-medium">45 €</span></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Vaccination (complet)</span> <span className="font-medium">65 €</span></li>
<li className="flex justify-between border-b border-slate-100 pb-2"><span>Consultation comportementale</span> <span className="font-medium">80 €</span></li>
</ul>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
<h3 className="font-semibold text-slate-900 mb-4">Prendre rendez-vous</h3>
<div className="mb-4">
<label className="block text-xs font-medium text-slate-700 mb-1">Motif de consultation</label>
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5">
<option>Première consultation</option>
<option>Vaccination</option>
<option>Urgence</option>
</select>
</div>
<div className="text-center mb-4">
<div className="flex items-center justify-between mb-2">
<button className="p-1 hover:bg-slate-100 rounded"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<span className="text-sm font-medium">Octobre 2023</span>
<button className="p-1 hover:bg-slate-100 rounded"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 px-1 bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white rounded-lg text-xs font-medium transition-colors">
                                        Lun 23<br/><span className="font-bold text-sm">09:30</span>
</button>
<button className="py-2 px-1 bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white rounded-lg text-xs font-medium transition-colors">
                                        Lun 23<br/><span className="font-bold text-sm">11:00</span>
</button>
<button className="py-2 px-1 bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white rounded-lg text-xs font-medium transition-colors">
                                        Mar 24<br/><span className="font-bold text-sm">14:00</span>
</button>
</div>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all" onclick="showPage('dashboard')">
                                Confirmer le rendez-vous
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="login">
<div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6 bg-slate-50">
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8">
<div className="text-center mb-8">
<iconify-icon className="text-teal-700 mb-2" icon="solar:paw-linear" width="40"></iconify-icon>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Bon retour parmi nous</h2>
<p className="text-sm text-slate-500">Connectez-vous pour gérer vos rendez-vous.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); showPage('dashboard');">
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Email</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" placeholder="nom@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Mot de passe</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required="" type="password"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-start">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-teal-300" type="checkbox"/>
</div>
<label className="ml-2 text-sm font-medium text-slate-500">Se souvenir de moi</label>
</div>
<a className="text-sm font-medium text-teal-600 hover:underline" href="#">Mot de passe oublié ?</a>
</div>
<button className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors" type="submit">Se connecter</button>
</form>
<div className="mt-6 text-center text-sm text-slate-500">
                        Pas encore de compte ? <a className="font-medium text-teal-600 hover:underline" href="#" onclick="showPage('register')">S'inscrire</a>
</div>
</div>
</div>
</div>

<div className="page-section" id="register">
<div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-6 bg-slate-50">
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Créer un compte</h2>
<p className="text-sm text-slate-500">Gérez la santé de vos animaux simplement.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); showPage('dashboard');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Prénom</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Nom</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required="" type="text"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Email</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required="" type="email"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-900">Mot de passe</label>
<input className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5" required="" type="password"/>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors" type="submit">Créer mon compte</button>
</form>
<div className="mt-6 text-center text-sm text-slate-500">
                        Déjà inscrit ? <a className="font-medium text-teal-600 hover:underline" href="#" onclick="showPage('login')">Se connecter</a>
</div>
</div>
</div>
</div>



<div className="page-section" id="dashboard">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)]">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
<div className="flex items-center gap-3 mb-6 px-2">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">TM</div>
<div>
<p className="text-sm font-semibold text-slate-900">Thomas M.</p>
<p className="text-xs text-slate-500">Propriétaire</p>
</div>
</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-teal-50 text-teal-700" onclick="showPage('dashboard')">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon> Accueil
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Mes rendez-vous
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('pets')">
<iconify-icon icon="solar:cat-linear" width="18"></iconify-icon> Mes animaux
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('documents')">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon> Documents
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Paramètres
                            </button>
</nav>
</div>
</aside>

<div className="flex-1">
<h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Vue d'ensemble</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
<div className="flex items-start justify-between mb-2">
<iconify-icon className="text-indigo-600" icon="solar:bell-bing-bold" width="24"></iconify-icon>
<span className="bg-indigo-200 text-indigo-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Rappel</span>
</div>
<h4 className="font-semibold text-indigo-900">Vaccin Nala</h4>
<p className="text-xs text-indigo-700 mt-1">À faire avant le 15 Nov.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200">
<div className="flex items-start justify-between mb-2">
<iconify-icon className="text-teal-600" icon="solar:calendar-bold" width="24"></iconify-icon>
<span className="text-slate-400 text-xs">J-2</span>
</div>
<h4 className="font-semibold text-slate-900">Dr. Martin</h4>
<p className="text-xs text-slate-500 mt-1">Lundi, 14:00</p>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4">Mes Animaux</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer" onclick="showPage('pets')">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-2xl">🐱</div>
<div>
<h4 className="font-medium text-slate-900">Nala</h4>
<p className="text-xs text-slate-500">Européen • 4 ans</p>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 bg-slate-50">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-500">Ajouter</h4>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="appointments">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)]">

<aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
<div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('dashboard')">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon> Accueil
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-teal-50 text-teal-700" onclick="showPage('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Mes rendez-vous
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('pets')">
<iconify-icon icon="solar:cat-linear" width="18"></iconify-icon> Mes animaux
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('documents')">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon> Documents
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Paramètres
                            </button>
</nav>
</div>
</aside>
<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Rendez-vous</h2>
<button className="text-sm text-teal-700 font-medium">Historique</button>
</div>
<div className="space-y-4">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6">
<div className="flex flex-col items-center justify-center bg-teal-50 text-teal-800 rounded-xl px-4 py-2 min-w-[80px]">
<span className="text-xs font-bold uppercase">Oct</span>
<span className="text-2xl font-bold">24</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h3 className="font-semibold text-slate-900">Dr. Sarah Martin</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Confirmé</span>
</div>
<p className="text-sm text-slate-500 mb-2">Consultation générale • Nala</p>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 14:00
                                    <span className="text-slate-300">|</span>
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 12 Rue de la République
                                </div>
</div>
<div className="flex sm:flex-col gap-2 justify-center">
<button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Modifier</button>
<button className="px-4 py-2 border border-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50">Annuler</button>
</div>
</div>

<div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-6 opacity-75">
<div className="flex flex-col items-center justify-center bg-slate-200 text-slate-600 rounded-xl px-4 py-2 min-w-[80px]">
<span className="text-xs font-bold uppercase">Sep</span>
<span className="text-2xl font-bold">10</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h3 className="font-semibold text-slate-900">Clinique des Tilleuls</h3>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-600">Terminé</span>
</div>
<p className="text-sm text-slate-500 mb-2">Vaccination • Rex</p>
</div>
<div className="flex sm:flex-col gap-2 justify-center">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Reprendre RDV</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="documents">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)]">

<aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
<div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('dashboard')">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon> Accueil
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Mes rendez-vous
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('pets')">
<iconify-icon icon="solar:cat-linear" width="18"></iconify-icon> Mes animaux
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-teal-50 text-teal-700" onclick="showPage('documents')">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon> Documents
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Paramètres
                            </button>
</nav>
</div>
</aside>
<div className="flex-1">
<h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Documents médicaux</h2>
<div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
<table className="w-full text-sm text-left text-slate-500">
<thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-4" scope="col">Nom du fichier</th>
<th className="px-6 py-4" scope="col">Animal</th>
<th className="px-6 py-4" scope="col">Date</th>
<th className="px-6 py-4 text-right" scope="col">Action</th>
</tr>
</thead>
<tbody>
<tr className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<iconify-icon className="text-red-400" icon="solar:file-text-bold" width="20"></iconify-icon> Ordonnance.pdf
                                    </td>
<td className="px-6 py-4">Nala</td>
<td className="px-6 py-4">24/10/2023</td>
<td className="px-6 py-4 text-right">
<a className="text-teal-600 hover:underline" href="#">Télécharger</a>
</td>
</tr>
<tr className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:file-text-bold" width="20"></iconify-icon> Facture_102.pdf
                                    </td>
<td className="px-6 py-4">Nala</td>
<td className="px-6 py-4">24/10/2023</td>
<td className="px-6 py-4 text-right">
<a className="text-teal-600 hover:underline" href="#">Télécharger</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="page-section" id="pets">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)]">

<aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
<div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('dashboard')">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon> Accueil
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Mes rendez-vous
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-teal-50 text-teal-700" onclick="showPage('pets')">
<iconify-icon icon="solar:cat-linear" width="18"></iconify-icon> Mes animaux
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('documents')">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon> Documents
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Paramètres
                            </button>
</nav>
</div>
</aside>
<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Carnet de santé</h2>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Ajouter</button>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-6">
<div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-4xl shadow-inner">
                            🐱
                        </div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-slate-900">Nala</h3>
<p className="text-slate-500 text-sm mb-4">Chat Européen • Femelle • 4 ans</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl mb-4">
<div>
<span className="text-xs text-slate-400 block">Poids</span>
<span className="font-medium text-slate-700">4.2 kg</span>
</div>
<div>
<span className="text-xs text-slate-400 block">Puce</span>
<span className="font-medium text-slate-700">250 26...</span>
</div>
<div>
<span className="text-xs text-slate-400 block">Stérilisée</span>
<span className="font-medium text-slate-700 text-green-600">Oui</span>
</div>
<div>
<span className="text-xs text-slate-400 block">Dernier vaccin</span>
<span className="font-medium text-slate-700">10/2022</span>
</div>
</div>
<div className="flex gap-2">
<button className="text-sm text-teal-700 font-medium hover:underline">Voir carnet complet</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="settings">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)]">

<aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
<div className="bg-white rounded-xl border border-slate-200 p-4 sticky top-24">
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('dashboard')">
<iconify-icon icon="solar:home-linear" width="18"></iconify-icon> Accueil
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('appointments')">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Mes rendez-vous
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('pets')">
<iconify-icon icon="solar:cat-linear" width="18"></iconify-icon> Mes animaux
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50" onclick="showPage('documents')">
<iconify-icon icon="solar:file-text-linear" width="18"></iconify-icon> Documents
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-teal-50 text-teal-700" onclick="showPage('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon> Paramètres
                            </button>
</nav>
</div>
</aside>
<div className="flex-1">
<h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Paramètres du compte</h2>
<div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-8">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-4">Informations personnelles</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" type="email" value="thomas.m@example.com"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" type="tel" value="06 12 34 56 78"/>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-6">
<h3 className="text-lg font-medium text-slate-900 mb-4">Notifications</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-900">Rappels de rendez-vous</p>
<p className="text-xs text-slate-500">Recevoir un SMS 24h avant</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-900">Rappels de santé</p>
<p className="text-xs text-slate-500">Vaccins, anti-parasitaires...</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300" id="toggle2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle2"></label>
</input></div>
</div>
</div>
</div>
<div className="pt-6">
<button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Enregistrer les modifications</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-10 pb-6">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-teal-700"><iconify-icon icon="solar:paw-bold"></iconify-icon></span>
<span className="font-semibold text-slate-900">VETOLINK</span>
</div>
<p className="text-xs text-slate-400">© 2023 Vetolink SAS. Fait avec passion pour les animaux.</p>
</div>
</div>
</footer>



<div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-full z-50 shadow-2xl flex gap-3 overflow-x-auto max-w-[90vw] no-scrollbar">
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('home')">1.Accueil</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('search')">2.Rech</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('profile')">3.Profil</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('login')">4.Login</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('register')">5.Inscr</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('dashboard')">6.Dash</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('appointments')">7.RDV</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('documents')">8.Docs</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('pets')">9.Animaux</button>
<button className="text-xs hover:text-teal-400 whitespace-nowrap" onclick="showPage('settings')">10.Param</button>
</div>

    </>
  );
}
