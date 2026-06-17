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



        document.addEventListener('DOMContentLoaded', () => {
            const slider = document.getElementById('services-slider');
            const prevBtn = document.getElementById('slider-prev');
            const nextBtn = document.getElementById('slider-next');
            const progressBar = document.getElementById('slider-progress');

            if (!slider) return;

            // Met à jour la barre de progression
            const updateProgress = () => {
                if (!progressBar) return;
                const maxScroll = slider.scrollWidth - slider.clientWidth;
                if (maxScroll <= 0) {
                    progressBar.style.width = '100%';
                    return;
                }
                
                // Calcul du pourcentage (min 20% pour correspondre à 1/5 des cartes initiales)
                const percentage = (slider.scrollLeft / maxScroll) * 100;
                const baseWidth = (slider.clientWidth / slider.scrollWidth) * 100;
                
                // Formule pour adapter la barre visuellement 
                const finalWidth = baseWidth + (percentage * (100 - baseWidth) / 100);
                progressBar.style.width = `${Math.max(baseWidth, finalWidth)}%`;
            };

            // Écouteurs d'événements pour la barre
            slider.addEventListener('scroll', updateProgress, { passive: true });
            window.addEventListener('resize', updateProgress, { passive: true });
            
            // Initialisation
            setTimeout(updateProgress, 100);

            // Calculer la valeur de défilement (largeur d'une carte + l'espace gap-6)
            const getScrollAmount = () => {
                const card = slider.firstElementChild;
                const gap = 24; // 24px = gap-6 dans Tailwind
                return card ? card.offsetWidth + gap : 300;
            };

            // Actions des boutons
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
                });
            }
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
      

<header className="fixed w-full top-0 z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors" href="#">
<iconify-icon className="text-2xl text-blue-600" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="uppercase text-xl font-semibold tracking-tighter">Decap'Toiture 81</span>
</a>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-blue-600 transition-colors text-sm font-medium text-slate-900" href="#accueil">Accueil</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#avis">Avis clients</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#a-propos">À propos</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors group" href="tel:0600000000">
</a>
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-colors hover:shadow text-sm font-medium text-white bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="/#deviss">
                        Obtenir un devis gratuit
                    </a>
</div>

<div className="flex md:hidden items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900" href="tel:0600000000">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="text-slate-900 p-2" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="accueil">

<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex text-xs font-medium text-blue-700 bg-blue-50 border-blue-100/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Intervention rapide à Coufouleux et dans le Tarn</div>
<h1 className="leading-[1.1] md:text-5xl lg:text-5xl text-4xl font-semibold text-slate-900 tracking-tight mb-6">Decap'Toiture 81 – Travaux de toiture et rénovation</h1>
<p className="leading-relaxed text-lg text-slate-600 max-w-xl mb-8">Decap'Toiture 81 accompagne les particuliers pour tous leurs travaux de toiture : réparation, rénovation, zinguerie et entretien de toiture. Un savoir-faire reconnu pour protéger votre habitat.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors hover:shadow text-sm font-medium text-white bg-blue-600 rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="/#deviss">
                            Obtenir un devis gratuit
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-colors text-sm font-medium text-slate-900 bg-white border-slate-200 border rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="#realisations">
                            Voir nos réalisations
                        </a>
</div>

<div className="flex bg-slate-50 max-w-md border-slate-100 border rounded-2xl mb-8 pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-xl text-blue-600" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm text-slate-600 mb-1">Besoin d’un couvreur rapidement ?</p>
<a className="hover:text-blue-600 transition-colors text-base font-semibold text-slate-900" href="tel:0600000000">Appelez-nous : 07 87 09 46 42</a>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex gap-1 text-amber-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Artisan couvreur recommandé par ses clients</span>
</div>
</div>

<div className="relative lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50">
<img alt="Couvreur travaillant sur un toit en rénovation" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/deac8f7d-82c6-422f-969f-8ef0e95f4abf_1600w.jpg"/>
<div className="ring-inset ring-black/10 ring-1 rounded-[2rem] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
<div className="flex items-center gap-4 sm:px-6 first:pl-0 last:pr-0 pt-6 sm:pt-0 first:pt-0">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-blue-600" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Travail soigné</h3>
<p className="text-xs text-slate-500 mt-0.5">Finitions professionnelles</p>
</div>
</div>
<div className="flex items-center gap-4 sm:px-6 pt-6 sm:pt-0">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-blue-600" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Devis gratuit</h3>
<p className="text-xs text-slate-500 mt-0.5">Clair et transparent</p>
</div>
</div>
<div className="flex items-center gap-4 sm:px-6 pt-6 sm:pt-0">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-blue-600" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Intervention rapide</h3>
<p className="text-xs text-slate-500 mt-0.5">Dépannage d'urgence</p>
</div>
</div>
<div className="flex items-center gap-4 sm:px-6 pt-6 sm:pt-0">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-blue-600" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Couvreur expérimenté</h3>
<p className="text-xs text-slate-500 mt-0.5">Artisan qualifié</p>
</div>
</div>
</div>
</div>
</section><section className="py-24 bg-slate-50 overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nos services de couverture</h2>
<p className="text-base text-slate-600 leading-relaxed">Une expertise complète pour assurer la solidité et l'étanchéité de votre toiture en Haute-Garonne.</p>
</div>

</div>

<div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 -my-4 [&amp;::-webkit-scrollbar]:hidden" id="services-slider" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img alt="Réparation de toiture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 sm:p-8 flex flex-col grow">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Réparation de toiture</h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed grow">Intervention rapide sur tuiles cassées ou infiltrations afin de garantir l’étanchéité et la sécurité de votre toiture.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto" href="#devis">
                            En savoir plus
                            <iconify-icon className="ml-1.5 text-base transition-transform group-hover/btn:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img alt="Rénovation de toiture" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fbe87f0-95aa-47e4-9311-136d38815347_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 flex flex-col grow">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Rénovation de toiture</h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed grow">Rénovation complète ou partielle de votre couverture pour améliorer l’isolation et prolonger la durée de vie de votre maison.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto" href="#devis">
                            En savoir plus
                            <iconify-icon className="ml-1.5 text-base transition-transform group-hover/btn:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img alt="Zinguerie et gouttières" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c91456db-f5a3-49f5-8b18-6c75dc690726_800w.webp"/>
</div>
<div className="p-6 sm:p-8 flex flex-col grow">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Zinguerie</h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed grow">Pose et réparation de gouttières, chéneaux et éléments de zinguerie pour une bonne évacuation des eaux de pluie.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto" href="#devis">
                            En savoir plus
                            <iconify-icon className="ml-1.5 text-base transition-transform group-hover/btn:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img alt="Nettoyage et démoussage de toiture" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cc31e64-89c6-4f2a-a2b8-1f2c06bfc125_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 flex flex-col grow">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Nettoyage et démoussage</h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed grow">Nettoyage et traitement de votre toiture pour éliminer mousses, lichens et saletés et préserver son état.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto" href="#devis">
                            En savoir plus
                            <iconify-icon className="ml-1.5 text-base transition-transform group-hover/btn:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden">
<div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
<img alt="Pose de toiture neuve" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59f69b85-6577-4611-b290-146fa9ad520c_800w.jpg"/>
</div>
<div className="p-6 sm:p-8 flex flex-col grow">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Pose de toiture neuve</h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed grow">Installation de toiture pour constructions neuves ou extensions avec des matériaux durables.</p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto" href="#devis">
                            En savoir plus
                            <iconify-icon className="ml-1.5 text-base transition-transform group-hover/btn:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="mt-8 md:mt-10 max-w-sm mx-auto">
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out" id="slider-progress" style={{width: '59.417706%'}}></div>
</div>
</div>
</div>


</section><section className="overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 pt-24 pb-24 relative" id="demande-devis">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">

<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    Obtenir un devis gratuit
                </h2>
<p className="text-base text-slate-400 mb-12 leading-relaxed">
                    Remplissez le formulaire ci-dessous pour nous parler de votre projet de toiture. Un artisan couvreur vous recontactera rapidement pour vous conseiller et établir un devis sur-mesure, sans engagement.
                </p>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="flex shrink-0 bg-white/5 w-12 h-12 border-white/10 border rounded-full mt-0.5 shadow-inner items-center justify-center">
<iconify-icon className="text-xl text-blue-400" height="20" icon="lucide:map-pin" style={{color: 'rgb(96, 165, 250)'}} width="20"></iconify-icon>
</div>
<div className="">
<p className="text-base font-medium text-white mb-1">Zone d'intervention</p>
<p className="leading-relaxed text-sm text-slate-400">Coufouleux et tout le Tarn (81)</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="flexicon icon= bg-white/5 w-12 h-12 border-white/10 border rounded-full" lucide:phone"="">
<div className="flex shrink-0 bg-white/5 w-12 h-12 border-white/10 border rounded-full mt-0.5 shadow-inner items-center justify-center">
<iconify-icon className="text-xl text-blue-400" height="20" icon="lucide:smartphone-nfc" style={{color: 'rgb(96, 165, 250)'}} width="20"></iconify-icon>
</div></div>
<div className="">
<p className="text-base font-medium text-white mb-1">Nous contacter</p>
<a className="hover:text-white transition-colors text-sm text-slate-400" href="/tel:07 87 09 46 42">07 87 09 46 42</a>
</div>
</div>
</div>
</div>

<div className="sm:p- method= bg-white rounded-[2rem] pt-6 pr-6 pb-6 pl-6" id="deviss" post"="">
<div className="grid grid-cols-1 sm:grid-cols-2">
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_nom">Nom et Prénom</label>
<input className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm" id="new_nom" name="nom" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_telephone">Téléphone</label>
<input className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm" id="new_telephone" name="telephone" placeholder="06 00 00 00 00" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_email">Email</label>
<input className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm" id="new_email" name="email" placeholder="jean@exemple.com" type="email"/>
</div>
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_ville">Ville du projet</label>
<input className="block w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm" id="new_ville" name="ville" placeholder="Toulouse (31000)" required="" type="text"/>
</div>
</div>
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_type_travaux">Type de travaux</label>
<div className="relative">
<select className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm cursor-pointer" id="new_type_travaux" name="type_travaux" required="">
<option disabled="" selected="" value="">Sélectionnez un service</option>
<option value="reparation">Réparation de toiture</option>
<option value="renovation">Rénovation de toiture</option>
<option value="zinguerie">Zinguerie</option>
<option value="nettoyage">Nettoyage et démoussage</option>
<option value="pose_neuve">Pose de toiture neuve</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
<iconify-icon className="text-lg" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
</div>
<div className="">
<label className="block text-[13px] font-medium text-slate-700 mb-2" htmlFor="new_description">Description du projet</label>
<textarea className="block w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 hover:bg-slate-50 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 shadow-sm" id="new_description" name="description" placeholder="Décrivez brièvement vos besoins..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="submit">
                            Demander mon devis
                        </button>
<div className="mt-5 flex items-center justify-center gap-2 text-slate-500">
<iconify-icon className="text-sm" icon="lucide:lock"></iconify-icon>
<p className="text-[12px]">Vos informations sont strictement confidentielles.</p>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="bg-white border-slate-200/60 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comment ça marche ?</h2>
<p className="text-base text-slate-600">Un processus simple et transparent pour mener à bien votre projet de toiture.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-1/8 right-1/8 h-0.5 bg-slate-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-medium mb-6 shadow-sm ring-4 ring-white">1</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Demande de devis</h3>
<p className="text-sm text-slate-600">Remplissez le formulaire en ligne ou contactez-nous directement pour nous expliquer votre projet.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white">2</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Analyse du projet</h3>
<p className="text-sm text-slate-600">Nous étudions votre demande afin de comprendre vos besoins et l’état de votre toiture.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white">3</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Intervention</h3>
<p className="text-sm text-slate-600">Nos couvreurs professionnels réalisent les travaux avec sérieux, précision et sécurité.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-900 flex items-center justify-center text-lg font-medium mb-6 ring-4 ring-white">4</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Fin des travaux</h3>
<p className="text-sm text-slate-600">Une fois terminés, nous vérifions l’ensemble de la toiture afin de garantir un résultat durable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60" id="realisations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nos réalisations</h2>
<p className="text-base text-slate-600">Découvrez quelques-uns de nos récents chantiers de couverture en région toulousaine.</p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors shrink-0 shadow-sm" href="#devis">
                    Voir toutes nos réalisations
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
<img alt="Rénovation de toiture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbf3c62f-4d59-40a0-af23-f86fc62ffeb9_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent flex flex-col justify-end p-6">
<span className="text-sm font-medium text-white">Rénovation complète</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
<img alt="Réparation de toiture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0dcc4d6-e23d-4d6e-a411-45b21da91899_800w.png"/>
<div className="flex flex-col bg-gradient-to-t from-black/70 via-black/0 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-white font-medium text-sm">Réparation d'urgence</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
<img alt="Zinguerie et gouttières" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c8002ed-8288-4cc3-97ec-803d9163ca3f_800w.png"/>
<div className="flex flex-col bg-gradient-to-t from-black/70 via-black/0 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-white font-medium text-sm">Travaux de zinguerie</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
<img alt="Nettoyage de toiture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b493dec3-c1ab-4084-a434-5d293137329a_800w.jpg"/>
<div className="flex flex-col bg-gradient-to-t from-black/70 via-black/0 to-transparent pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-white font-medium text-sm">Nettoyage &amp; Démoussage</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-slate-200/60 border-t pt-24 pb-24 relative" id="avis">
<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Ils nous font confiance</h2>
<div className="flex flex-col items-center gap-2">
<div className="flex gap-1 text-amber-400">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700">Note moyenne : 5/5 basée sur les avis clients</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-slate-700 mb-6">"Très bon couvreur, intervention rapide et travail impeccable suite à une tempête. Je recommande vivement l'entreprise pour leur professionnalisme."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">JM</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Jean-Marc D.</p>
<p className="text-xs text-slate-500">Gaillac</p>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Devis respecté, chantier laissé propre tous les soirs. La rénovation de notre toiture s'est parfaitement déroulée. Une équipe sérieuse à l'écoute."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">SL</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Sophie L.</p>
<p className="text-xs text-slate-500">Rabastens</p>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Contactés pour un nettoyage complet et un traitement hydrofuge. Le résultat est bluffant, on dirait que les tuiles sont neuves. Artisan de confiance."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">PB</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Pierre B.</p>
<p className="text-xs text-slate-500">Albi</p>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors text-sm font-medium text-slate-900" href="https://www.google.com/search?client=safari&amp;hs=ABYp&amp;sca_esv=f818ef0c6d37c692&amp;rls=en&amp;si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOShXBLEiMGhY_EvcQwB9T1Ja4faf0BBDKyqvmVPPlzPUqdytpzv0fMQJQa6-s-LkLKeyYweNBZA48y6wsKRw3bSUaM6T&amp;q=Decap%27Toiture+81+Avis&amp;sa=X&amp;ved=2ahUKEwjux7SHnKyTAxXwSKQEHVQMEusQ0bkNegQIVhAF&amp;biw=1778&amp;bih=1017&amp;dpr=2">
<iconify-icon icon="logos:google-icon"></iconify-icon>
                    Voir tous nos avis Google
                    <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div><section className="bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-10">
                    Nous contacter
                </h2>
<div className="space-y-8">

<div className="flex items-start gap-5">
<div className="flex shrink-0 w-12 h-12 bg-slate-100 rounded-2xl items-center justify-center border border-slate-200/50 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="phone"></i>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Téléphone</h3>
<p className="text-base font-medium text-slate-800 mb-1">07 87 09 46 42</p>
<p className="text-sm text-slate-500">Du lundi au vendredi, de 8h à 18h</p>
</div>
</div>

<div className="flex items-start gap-5">
<div className="flex shrink-0 w-12 h-12 bg-slate-100 rounded-2xl items-center justify-center border border-slate-200/50 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="mail"></i>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Mail</h3>
<a className="block hover:text-blue-600 transition-colors text-base font-medium text-slate-800" href="mailto:contact@couvreur31.fr">contact@decaptoiture81.fr</a>
</div>
</div>

<div className="flex items-start gap-5">
<div className="flex shrink-0 w-12 h-12 bg-slate-100 rounded-2xl items-center justify-center border border-slate-200/50 shadow-sm">
<i className="w-5 h-5 text-slate-700" data-lucide="map-pin"></i>
</div>
<div className="pt-1">
<h3 className="text-lg font-semibold text-slate-900 mb-1">Zone d'intervention</h3>
<p className="leading-relaxed text-sm text-slate-600 max-w-sm">Intervention à Coufouleux et dans tout le Tarn (81)</p>
</div>
</div>
</div>
</div>

<div className="w-full">
<img alt="Carte de la zone d'intervention - Toulouse et Haute-Garonne" className="w-full h-[420px] object-cover rounded-[2rem] ring-slate-900/5 ring-1 shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc87a371-bbf7-4505-b994-5d1c20dd1602_1600w.jpg"/>
</div>
</div>
</div>
</section>
</section>


<section className="py-20 bg-blue-600 relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply">
<img alt="Toiture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/><section className="py-24 bg-white relative overflow-hidden border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-12">
                    Nous contacter
                </h2>
<div className="space-y-8">

<div className="flex items-start gap-5 group">
<div className="flex shrink-0 w-12 h-12 bg-slate-50 rounded-2xl items-center justify-center border border-slate-200/60 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors shadow-sm">
<iconify-icon className="text-xl text-blue-600" icon="lucide:phone"></iconify-icon>
</div>
<div className="pt-0.5">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Téléphone</h3>
<p className="text-base font-medium text-slate-800 mb-1">06 XX XX XX XX</p>
<p className="text-sm text-slate-500 leading-relaxed">Du lundi au vendredi, de 8h à 18h</p>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="flex shrink-0 w-12 h-12 bg-slate-50 rounded-2xl items-center justify-center border border-slate-200/60 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors shadow-sm">
<iconify-icon className="text-xl text-blue-600" icon="lucide:mail"></iconify-icon>
</div>
<div className="pt-0.5">
<h3 className="text-sm font-semibold text-slate-900 mb-1">E-mail</h3>
<a className="block text-base font-medium text-blue-600 hover:text-blue-700 transition-colors mb-1" href="mailto:contact@couvreur31.fr">contact@couvreur31.fr</a>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="flex shrink-0 w-12 h-12 bg-slate-50 rounded-2xl items-center justify-center border border-slate-200/60 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors shadow-sm">
<iconify-icon className="text-xl text-blue-600" icon="lucide:map-pin"></iconify-icon>
</div>
<div className="pt-0.5">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Zone d'intervention</h3>
<p className="text-sm text-slate-600 leading-relaxed max-w-sm">Intervention à Toulouse et dans toute la Haute-Garonne (31)</p>
</div>
</div>
</div>
</div>

<div className="relative w-full h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden bg-slate-100 shadow-md border border-slate-200/60">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289569263!2d1.3132561937582062!3d43.60068407425884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e00000!5m2!1sfr!2sfr">
</iframe>
</div></div></div></section>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Besoin d’un couvreur pour votre toiture ?</h2>
<p className="text-lg text-blue-100 max-w-2xl mr-auto mb-8 ml-auto">Contactez Decap'Toiture 81 dès maintenant pour obtenir un devis gratuit pour vos travaux de toiture dans le Tarn</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-colors sm:w-auto text-sm font-medium text-blue-600 bg-white w-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="/#deviss">
                    Obtenir mon devis gratuit
                </a>
<span className="text-blue-200 text-sm hidden sm:block">ou</span>
<a className="inline-flex items-center gap-2 hover:text-blue-100 transition-colors sm:w-auto justify-center text-sm font-medium text-white w-full" href="/tel:07 87 09 46 42">Appelez-nous : 07 87 09 46 42</a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200/60" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 text-slate-900 mb-4" href="#">
<iconify-icon className="text-2xl text-blue-600" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="uppercase text-xl font-semibold tracking-tighter">Decap'Toiture 81</span>
</a>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Votre entreprise de couverture de confiance intervenant sur Toulouse et l'ensemble de la Haute-Garonne.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<iconify-icon icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors" href="#">
<iconify-icon className="" icon="mdi:instagram"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Menu rapide</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#accueil">Accueil</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#services">Nos services</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#realisations">Réalisations</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#avis">Avis clients</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#devis">Demande de devis</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Interventions</h3>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Réparation toiture</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Rénovation toiture</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Zinguerie</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Nettoyage toiture</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-400 mt-0.5 shrink-0" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm text-slate-500">07 87 09 46 42</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-400 mt-0.5 shrink-0" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-slate-500">contact@decaptoiture81.fr</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-400 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-500">Coufouleux et dans tous le Tarn (81)</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 Decap'Toiture 81. Tous droits réservés. Artisan couvreur Coufouleux.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Mentions légales</a>
<span className="text-slate-300">·</span>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Politique de confidentialité</a>
<span className="text-slate-300">·</span>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Conditions générales</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
