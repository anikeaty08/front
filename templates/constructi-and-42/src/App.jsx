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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">MTC</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#expertises">Expertises</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#realisations">Réalisations</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#processus">Notre approche</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#temoignages">Témoignages</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="tel:+33500000000">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    05 61 00 00 00
                </a>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" href="#contact">
                    Demander un devis
                </a>
</div>
</div>
</header>

<section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-24 overflow-hidden">

<div className="absolute inset-0 -z-20">
<img alt="Maison contemporaine MTC" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>

<div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30"></div>
<div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-auto md:mt-0">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-tight mb-6 max-w-4xl">
                Votre projet immobilier, conçu et construit par <span className="text-gray-300">un seul interlocuteur.</span>
</h1>
<p className="text-base md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-medium">
                Construction, rénovation et aménagement sur mesure à Toulouse. De l'étude de faisabilité à la remise des clés.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-md bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900" href="#contact">
                    Démarrer mon projet
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-md bg-transparent border border-gray-300 text-white text-sm font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-900" href="#realisations">
                    Voir nos réalisations
                </a>
</div>
</div>
</section>

<section className="border-b border-gray-100 bg-white py-6">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">+150 chantiers livrés</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon className="text-xl" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">15 ans d'expérience</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">100% délais respectés</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
<div className="flex items-center gap-2 text-gray-600">
<iconify-icon className="text-xl" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Certifié Qualibat &amp; RGE</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="expertises">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Nos expertises.</h2>
<p className="text-base text-gray-500 leading-relaxed">
                    Une maîtrise globale de votre projet, du gros œuvre aux finitions intérieures, pour les particuliers comme pour les professionnels.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
<div className="h-48 overflow-hidden">
<img alt="Construction de maison" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-1">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">Construction</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                            Maisons individuelles contemporaines ou traditionnelles. Nous gérons l'intégralité du chantier, des fondations à la toiture.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors" href="#">
                            En savoir plus <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
<div className="h-48 overflow-hidden">
<img alt="Rénovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-1">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">Rénovation</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                            Rénovation lourde, extension ou surélévation. Nous redonnons vie aux bâtiments anciens en respectant leur histoire.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors" href="#">
                            En savoir plus <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
<div className="h-48 overflow-hidden">
<img alt="Aménagement professionnel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-1">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-3">Aménagement pro</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                            Bureaux, commerces, restaurants. Des espaces optimisés et livrés clés en main, pensés pour votre activité.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors" href="#">
                            En savoir plus <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="realisations">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Nos réalisations.</h2>
<p className="text-base text-gray-500 leading-relaxed">
                        Découvrez une sélection de nos derniers chantiers livrés en région toulousaine.
                    </p>
</div>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 shrink-0" href="#">
                    Voir tous nos projets
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Villa contemporaine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Villa contemporaine</h4>
<p className="text-sm text-gray-500">Construction neuve · Balma</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900">Avant / Après</div>
<img alt="Rénovation Haussmannien" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Appartement Haussmannien</h4>
<p className="text-sm text-gray-500">Rénovation intégrale · Les Carmes</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Bureaux Open Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Bureaux "La Serre"</h4>
<p className="text-sm text-gray-500">Aménagement pro · Labège</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Maison de plain-pied" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Maison Cubique</h4>
<p className="text-sm text-gray-500">Construction · Tournefeuille</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-900">Avant / Après</div>
<img alt="Rénovation Cuisine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Pièce de vie &amp; Cuisine</h4>
<p className="text-sm text-gray-500">Rénovation · Blagnac</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
<img alt="Extension bois" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center justify-between">
<div>
<h4 className="text-base font-semibold tracking-tight text-gray-900">Extension ossature bois</h4>
<p className="text-sm text-gray-500">Extension · Pibrac</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Pourquoi confier votre projet à MTC ?</h2>
<p className="text-base text-gray-400 leading-relaxed">
                    Un projet immobilier est un investissement majeur. Nous mettons en place toutes les garanties pour sécuriser votre démarche.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Interlocuteur unique</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Fini la gestion de multiples artisans. Nous coordonnons l'ensemble des corps d'état pour vous.
                    </p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Garantie décennale</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Vos travaux sont couverts pendant 10 ans par notre assurance professionnelle de premier plan.
                    </p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Transparence des prix</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Des devis détaillés ligne par ligne. Pas de mauvaises surprises ni de surcoûts cachés en cours de chantier.
                    </p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Respect strict des délais</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Un planning d'intervention précis, validé en amont et respecté à la lettre grâce à notre suivi rigoureux.
                    </p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Matériaux premium</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Sélection de fournisseurs reconnus pour des matériaux durables, esthétiques et respectueux des normes RT2020.
                    </p>
</div>

<div>
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 text-gray-300">
<iconify-icon className="text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-100 mb-2">Suivi de chantier continu</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Des points réguliers et des comptes rendus photographiques pour suivre l'avancée de votre projet pas à pas.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-b border-gray-100" id="processus">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-16 text-center">Un déroulement sans accroc.</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-200"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-4 border-gray-50 shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center text-sm font-semibold text-gray-900 mb-6 z-10">
                            01
                        </div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Étude gratuite</h4>
<p className="text-sm text-gray-500">Rendez-vous sur place, relevé de mesures et écoute attentive de vos besoins.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-4 border-gray-50 shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center text-sm font-semibold text-gray-900 mb-6 z-10">
                            02
                        </div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Devis détaillé</h4>
<p className="text-sm text-gray-500">Chiffrage précis, plans 3D si nécessaire et validation du planning d'exécution.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-4 border-gray-50 shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center text-sm font-semibold text-gray-900 mb-6 z-10">
                            03
                        </div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Suivi de chantier</h4>
<p className="text-sm text-gray-500">Coordination des artisans, contrôle qualité continu et points d'étape réguliers.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-4 border-gray-50 shadow-[0_0_0_1px_rgba(229,231,235,1)] flex items-center justify-center text-sm font-semibold text-gray-900 mb-6 z-10">
                            04
                        </div>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Livraison &amp; garanties</h4>
<p className="text-sm text-gray-500">Réception des travaux, remise du dossier des ouvrages exécutés et activation des garanties.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-100" id="temoignages">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-16">Ils ont construit avec nous.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-gray-100 bg-white">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8">
                        "Un accompagnement exceptionnel pour la rénovation complète de notre appartement aux Carmes. L'équipe a su respecter l'ancien tout en modernisant l'espace. Le budget et les délais ont été tenus au jour près."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
<img alt="Projet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sophie &amp; Marc D.</p>
<p className="text-xs text-gray-500">Rénovation appartement</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-gray-100 bg-white">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8">
                        "Nous avions très peur de faire construire vu les retours qu'on peut lire. Avec MTC, l'expérience a été sereine du début à la fin. Notre conducteur de travaux était toujours disponible et transparent."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
<img alt="Projet" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Laurent P.</p>
<p className="text-xs text-gray-500">Construction Villa</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-gray-100 bg-white md:hidden lg:block">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-8">
                        "En tant que gérante, je devais refaire les bureaux sans interrompre l'activité trop longtemps. MTC a proposé un phasage parfait. Résultat magnifique et chantier très propre. Je recommande."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
<img alt="Projet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Claire T.</p>
<p className="text-xs text-gray-500">Aménagement Bureaux</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Étude de faisabilité gratuite <br className="hidden md:block"/>— Parlons de votre projet.</h2>
<p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
                Vous avez une idée en tête ? Un terrain ? Un bien à rénover ? Échangeons de vive voix avec l'un de nos experts pour dessiner les premiers contours de votre projet.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="group flex items-center justify-center h-14 px-8 rounded-md bg-white border border-gray-200 text-gray-900 text-base font-semibold hover:border-gray-300 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 w-full sm:w-auto" href="tel:+33500000000">
<iconify-icon className="text-xl mr-3 text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    05 61 00 00 00
                </a>
<span className="text-sm text-gray-400">ou</span>
<a className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-gray-900 text-white text-base font-semibold hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 w-full sm:w-auto" href="#">
                    Demander un devis en ligne
                </a>
</div>
<p className="text-xs text-gray-400 mt-6">Devis sans engagement. Réponse sous 48h.</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">

<div>
<span className="text-xl font-semibold tracking-tighter text-gray-900 block mb-4">MTC</span>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Entreprise générale de bâtiment. Construction, rénovation et aménagement sur mesure pour particuliers et professionnels.
                    </p>
<div className="flex items-center gap-2 text-sm text-gray-900 font-medium">
<iconify-icon className="text-lg text-gray-400" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
                        Certifié Qualibat &amp; RGE
                    </div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Zones d'intervention</h4>
<ul className="space-y-3">
<li><span className="text-sm text-gray-500">Toulouse Centre</span></li>
<li><span className="text-sm text-gray-500">Balma &amp; Est Toulousain</span></li>
<li><span className="text-sm text-gray-500">Blagnac &amp; Ouest Toulousain</span></li>
<li><span className="text-sm text-gray-500">Labège &amp; Sud-Est</span></li>
<li><span className="text-sm text-gray-500">Haute-Garonne (31)</span></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-gray-500">15 Avenue de l'Architecture<br/>31000 Toulouse</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-gray-400" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="tel:+33500000000">05 61 00 00 00</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-gray-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="mailto:contact@mtc-construction.fr">contact@mtc.fr</a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Légal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Mentions légales</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">CGV &amp; Garanties</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">
                    © 2024 MTC Construction. Tous droits réservés.
                </p>
<div className="flex items-center gap-4">
<a aria-label="Instagram" className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
