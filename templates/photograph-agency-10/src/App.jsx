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



        // Carousel Logic
        const slides = document.querySelectorAll('#carousel [data-index]');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            });
            slides[index].classList.remove('opacity-0');
            slides[index].classList.add('opacity-100');
            currentSlide = index;
        }

        function nextSlide() { showSlide((currentSlide + 1) % totalSlides); }
        function prevSlide() { showSlide((currentSlide - 1 + totalSlides) % totalSlides); }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Auto play
        let slideInterval = setInterval(nextSlide, 5000);
        document.querySelector('#carousel').addEventListener('mouseenter', () => clearInterval(slideInterval));
        document.querySelector('#carousel').addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

        // Simple interactivity for Quote buttons (Simulating state)
        document.querySelectorAll('#devis button').forEach(btn => {
            btn.addEventListener('click', function() {
                // If it's a selection grid
                if(this.parentElement.classList.contains('grid')) {
                    this.parentElement.querySelectorAll('button').forEach(b => {
                        b.classList.remove('ring-2', 'ring-white', 'bg-neutral-800');
                        b.classList.add('bg-neutral-800/50');
                        b.querySelector('iconify-icon').classList.remove('text-white');
                        b.querySelector('iconify-icon').classList.add('text-neutral-400');
                    });
                    this.classList.remove('bg-neutral-800/50');
                    this.classList.add('bg-neutral-800', 'ring-2', 'ring-white');
                    this.querySelector('iconify-icon').classList.remove('text-neutral-400');
                    this.querySelector('iconify-icon').classList.add('text-white');
                }
            });
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-neutral-100"></div>
<div className="min-h-screen pb-12">

<header className="sticky top-0 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex bg-neutral-900/95 backdrop-blur-md rounded-3xl mt-4 py-4 px-6 items-center justify-between shadow-2xl shadow-neutral-900/10 border border-neutral-800">
<div className="flex items-center gap-3">
<a className="text-lg font-medium text-white tracking-tight uppercase flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold">C</span>
                            CREATIMEDIAS
                        </a>
</div>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition" href="#services">Prestations</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition" href="#devis">Devis en ligne</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition" href="#client">Espace Client</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-200 transition" href="#booking">
<iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
<span>Réserver</span>
</a>
<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 space-y-4">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[650px]">

<div className="lg:col-span-2 relative h-[500px] lg:h-full rounded-3xl overflow-hidden group bg-neutral-200">
<div className="absolute inset-0 w-full h-full" id="carousel">

<div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100" data-index="0">
<img alt="Drone View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
</div>

<div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-index="1">
<img alt="Studio Setup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
</div>

<div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-index="2">
<img alt="Wedding" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 z-10 text-white">
<span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-3 border border-white/10">Expertise Visuelle</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">Au sol ou dans les airs,<br/>nous valorisons votre moment.</h2>
</div>

<div className="absolute bottom-8 right-8 z-20 flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition" id="prev">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center transition hover:scale-105" id="next">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="bg-white rounded-3xl p-8 flex flex-col justify-between h-full border border-neutral-200">
<div>
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
<iconify-icon icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Disponible
                            </span>
</div>
<h1 className="text-3xl font-medium tracking-tight mb-2">CREATIMEDIAS</h1>
<p className="text-neutral-500 text-sm mb-6">Institutionnel · Corporate · Mariage · Immobilier</p>
<p className="text-neutral-600 text-sm leading-relaxed font-manrope">
                            Nous sommes créateurs de contenus visuels qu'ils soient photographiques ou vidéos, qu'il s'agisse de tournage en studio ou à l'extérieur. Notre expertise technique vous accompagnera pour valoriser VOTRE produit ou VOTRE moment solennel.
                        </p>
</div>
<div className="space-y-4 mt-8">
<div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
<p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Contact Direct</p>
<a className="text-lg font-medium text-neutral-900 hover:text-neutral-600 transition flex items-center gap-2" href="tel:0782521880">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                07 82 52 18 80
                            </a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition flex items-center gap-2 mt-1" href="mailto:contact@creatimedias.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                                contact@creatimedias.com
                            </a>
</div>
<a className="block w-full py-4 bg-neutral-900 text-white text-center rounded-xl text-sm font-medium hover:bg-black transition" href="#devis">
                            Demander un devis
                        </a>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-200" id="services">
<div className="flex items-end justify-between mb-8">
<div>
<h3 className="text-2xl font-light tracking-tight text-neutral-900">Nos Prestations</h3>
<p className="text-neutral-500 text-sm mt-1">Solutions visuelles complètes pour professionnels et particuliers.</p>
</div>
<a className="hidden sm:flex text-xs font-medium uppercase tracking-wide text-neutral-500 hover:text-neutral-900 items-center gap-1" href="#">
                        Voir le portfolio <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium text-sm drop-shadow-md">Corporate &amp; Inst.</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium text-sm drop-shadow-md">Mariage</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium text-sm drop-shadow-md">Pack Shot</p>
</div>
</div>

<div className="group relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<p className="text-white font-medium text-sm drop-shadow-md">Drone &amp; 360°</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4" id="devis">
<div className="lg:col-span-8 bg-neutral-900 rounded-3xl p-8 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-light tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                            Devis en Direct
                        </h3>

<div className="mb-8">
<p className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">1. Quel est votre projet ?</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button className="h-24 rounded-xl border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 hover:border-white transition flex flex-col items-center justify-center gap-2 group focus:ring-2 focus:ring-white">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="solar:camera-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 group-hover:text-white">Photo</span>
</button>
<button className="h-24 rounded-xl border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 hover:border-white transition flex flex-col items-center justify-center gap-2 group focus:ring-2 focus:ring-white">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 group-hover:text-white">Vidéo</span>
</button>
<button className="h-24 rounded-xl border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 hover:border-white transition flex flex-col items-center justify-center gap-2 group focus:ring-2 focus:ring-white">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="solar:drone-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 group-hover:text-white">Drone</span>
</button>
<button className="h-24 rounded-xl border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 hover:border-white transition flex flex-col items-center justify-center gap-2 group focus:ring-2 focus:ring-white">
<iconify-icon className="text-neutral-400 group-hover:text-white" icon="solar:shop-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 group-hover:text-white">Immo/360</span>
</button>
</div>
</div>

<div className="mb-8">
<p className="text-sm text-neutral-400 mb-3 uppercase tracking-wide">2. Options &amp; Durée</p>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-neutral-500">
<input className="accent-white" type="checkbox"/>
<span className="text-sm text-neutral-300">Retouche Avancée</span>
</label>
<label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-neutral-500">
<input className="accent-white" type="checkbox"/>
<span className="text-sm text-neutral-300">Montage Vidéo</span>
</label>
<label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:border-neutral-500">
<input className="accent-white" type="checkbox"/>
<span className="text-sm text-neutral-300">Droits de cession</span>
</label>
</div>
<div className="mt-4">
<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer" max="10" min="1" type="range" value="4"/>
<div className="flex justify-between text-xs text-neutral-500 mt-2">
<span>1h</span>
<span>Demi-journée</span>
<span>Journée+</span>
</div>
</div>
</div>

<div className="flex items-center justify-between border-t border-white/10 pt-6">
<div>
<p className="text-xs text-neutral-400">Estimation (Indicatif)</p>
<p className="text-2xl font-light text-white">~ 450 €</p>
</div>
<button className="bg-white text-neutral-900 px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-200 transition">
                                Finaliser le devis
                            </button>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-4" id="client">

<div className="bg-white rounded-3xl p-6 border border-neutral-200 flex-1 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium tracking-tight">Espace Retouche</h3>
<p className="text-xs text-neutral-500 mt-1">Uploadez vos fichiers RAW pour traitement.</p>
</div>
<div className="flex-1 border-2 border-dashed border-neutral-200 rounded-xl bg-neutral-50 flex flex-col items-center justify-center p-6 text-center group hover:border-neutral-400 transition cursor-pointer">
<div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-neutral-400 group-hover:text-blue-600 group-hover:scale-110 transition mb-3">
<iconify-icon icon="solar:cloud-upload-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-700">Glissez vos fichiers ici</p>
<p className="text-xs text-neutral-400 mt-1">ou cliquez pour parcourir</p>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-3 bg-neutral-50 p-2 rounded-lg border border-neutral-100">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium truncate">Shooting_Mariage_01.zip</p>
<div className="w-full bg-neutral-200 h-1 rounded-full mt-1">
<div className="bg-blue-600 h-1 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<button className="text-neutral-400 hover:text-red-500"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-blue-900">Accès Galerie Privée</p>
<p className="text-xs text-blue-600/80">Téléchargez vos photos HD</p>
</div>
<button className="w-10 h-10 bg-white rounded-full text-blue-600 flex items-center justify-center shadow-sm hover:scale-105 transition">
<iconify-icon icon="solar:login-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-200 mt-4">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="text-xs font-medium uppercase tracking-wide text-neutral-400">Tarifs Transparents</span>
<h3 className="text-3xl font-light tracking-tight text-neutral-900 mt-2">Investissez dans votre image</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50">
<h4 className="text-lg font-medium">Portrait / Packshot</h4>
<p className="text-3xl font-light mt-4">299€ <span className="text-sm text-neutral-400">/séance</span></p>
<p className="text-xs text-neutral-500 mt-2">Idéal pour les artisans et produits.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> 1h de shooting</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> 10 photos retouchées</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Galerie privée</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg border border-neutral-300 text-center text-sm font-medium hover:bg-white transition" href="#devis">Choisir</a>
</div>

<div className="p-6 rounded-2xl border border-neutral-900 bg-neutral-900 text-white relative shadow-xl shadow-neutral-900/10">
<div className="absolute top-0 right-0 bg-white text-neutral-900 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">POPULAIRE</div>
<h4 className="text-lg font-medium">Corporate / Event</h4>
<p className="text-3xl font-light mt-4">590€ <span className="text-sm text-neutral-400">/demi-journée</span></p>
<p className="text-xs text-neutral-400 mt-2">Reportage complet pour entreprise.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-sm text-neutral-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> 4h de présence</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Photo + Capsules Vidéo</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon> Droits inclus (Web)</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg bg-white text-neutral-900 text-center text-sm font-medium hover:bg-neutral-200 transition" href="#devis">Choisir</a>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 bg-neutral-50/50">
<h4 className="text-lg font-medium">Mariage / Drone</h4>
<p className="text-3xl font-light mt-4">Sur devis <span className="text-sm text-neutral-400">/journée</span></p>
<p className="text-xs text-neutral-500 mt-2">Couverture intégrale et aérienne.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Journée complète</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Prises de vues Drone</li>
<li className="flex items-center gap-2 text-sm text-neutral-600"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Album &amp; Film 4K</li>
</ul>
<a className="mt-8 block w-full py-2 rounded-lg border border-neutral-300 text-center text-sm font-medium hover:bg-white transition" href="#devis">Contacter</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4" id="booking">
<div className="bg-white rounded-3xl p-8 border border-neutral-200">
<h3 className="text-xl font-medium tracking-tight mb-6">Réserver une séance</h3>
<div className="grid grid-cols-7 gap-2 text-center mb-4 text-xs font-medium text-neutral-400">
<span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
</div>
<div className="grid grid-cols-7 gap-2">

<button className="aspect-square rounded-lg text-sm text-neutral-300 hover:bg-neutral-50">28</button>
<button className="aspect-square rounded-lg text-sm text-neutral-300 hover:bg-neutral-50">29</button>
<button className="aspect-square rounded-lg text-sm text-neutral-300 hover:bg-neutral-50">30</button>
<button className="aspect-square rounded-lg text-sm font-medium text-neutral-900 hover:bg-neutral-100">1</button>
<button className="aspect-square rounded-lg text-sm font-medium text-neutral-900 bg-neutral-900 text-white shadow-lg">2</button>
<button className="aspect-square rounded-lg text-sm font-medium text-neutral-900 hover:bg-neutral-100">3</button>
<button className="aspect-square rounded-lg text-sm text-red-300 bg-red-50 cursor-not-allowed">4</button>
</div>
<div className="mt-6">
<p className="text-xs font-medium text-neutral-500 mb-2">Horaires disponibles le 2 Mai :</p>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="px-4 py-2 rounded-lg border border-neutral-200 text-sm hover:border-neutral-900 hover:bg-neutral-50 whitespace-nowrap">09:00</button>
<button className="px-4 py-2 rounded-lg border border-neutral-900 bg-neutral-900 text-white text-sm whitespace-nowrap">14:00</button>
<button className="px-4 py-2 rounded-lg border border-neutral-200 text-sm hover:border-neutral-900 hover:bg-neutral-50 whitespace-nowrap">16:30</button>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col justify-center">
<h3 className="text-xl font-medium tracking-tight mb-4">Paiement d'acompte</h3>
<p className="text-sm text-neutral-500 mb-6">Pour valider votre réservation du 2 Mai à 14:00, un acompte de 30% est requis.</p>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 mb-6">
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-600">Séance Portrait</span>
<span className="font-medium">299.00 €</span>
</div>
<div className="flex justify-between text-sm pt-2 border-t border-neutral-200">
<span className="text-neutral-900 font-medium">Acompte à régler</span>
<span className="font-bold text-neutral-900">89.70 €</span>
</div>
</div>
<button className="w-full py-3 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-black transition flex items-center justify-center gap-2">
<iconify-icon icon="solar:card-linear"></iconify-icon>
                        Payer l'acompte sécurisé
                    </button>
</div>
</div>

<div className="flex justify-center py-4">
<a className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition" href="/admin">
<iconify-icon icon="solar:shield-user-linear"></iconify-icon>
                    Accès Staff / Admin
                </a>
</div>
</main>

<footer className="mt-12 max-w-7xl mx-auto px-4 sm:px-6">
<div className="bg-neutral-900 rounded-3xl p-10 text-white">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<h2 className="text-4xl font-light tracking-tight mb-4">CREATIMEDIAS</h2>
<p className="text-neutral-400 text-sm max-w-md">
                            Expertise technique et artistique pour vos projets visuels.
                            Photographie, Vidéo, Drone, Retouche.
                        </p>
</div>
<div>
<h4 className="font-medium mb-4 text-neutral-200">Navigation</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#">Accueil</a></li>
<li><a className="hover:text-white" href="#">Portfolio</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-neutral-200">Légal</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#">Mentions Légales</a></li>
<li><a className="hover:text-white" href="#">CGV</a></li>
<li><a className="hover:text-white" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between text-xs text-neutral-500">
<p>© 2025 Creatimedias. Tous droits réservés.</p>
<p className="mt-2 sm:mt-0">Design &amp; Code inspired by Node.js architecture</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
