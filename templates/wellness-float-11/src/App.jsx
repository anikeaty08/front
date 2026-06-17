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



        // Gallery Filtering Logic
        function filterGallery(category) {
            const items = document.querySelectorAll('.gallery-item');
            const buttons = document.querySelectorAll('.filter-btn');

            // Update button styles
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes(category)) {
                    btn.classList.remove('bg-zinc-100', 'text-zinc-600');
                    btn.classList.add('bg-zinc-900', 'text-white');
                } else {
                    btn.classList.add('bg-zinc-100', 'text-zinc-600');
                    btn.classList.remove('bg-zinc-900', 'text-white');
                }
            });

            // Filter grid items
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    // Trigger reflow for fade animation
                    item.classList.remove('fade-in');
                    void item.offsetWidth; 
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
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
      

<nav className="fixed top-0 w-full z-40 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-md bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:droplet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 tracking-tight uppercase">Les Bulles à Flotter</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-normal transition-colors text-zinc-600 hover:text-zinc-900" href="#experience">L'Expérience</a>
<a className="text-sm font-normal transition-colors text-zinc-600 hover:text-zinc-900" href="#process">Déroulement</a>
<a className="text-sm font-normal transition-colors text-zinc-600 hover:text-zinc-900" href="#pricing">Tarifs &amp; Cadeaux</a>
<a className="text-sm font-normal transition-colors text-zinc-600 hover:text-zinc-900" href="#faq">FAQ</a>
<a className="text-sm font-normal transition-colors text-zinc-600 hover:text-zinc-900" href="#contact">Accès</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-sm font-normal text-zinc-500 mr-2 border-r border-zinc-200 pr-4">
<span className="cursor-pointer text-zinc-900">FR</span>
<span className="cursor-pointer hover:text-zinc-900">EN</span>
</div>
<a className="text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm bg-zinc-900 hover:bg-zinc-800 text-white inline-block" href="#pricing">
                    Réserver
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Spa and Wellness" className="w-full h-full object-cover object-center lg:object-right opacity-60 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/593be48c-7934-4d4e-886e-c25889112e21_3840w.png"/>
<div className="md:bg-gradient-to-r md:from-[#FAFAFA] md:via-[#FAFAFA]/95 md:to-transparent bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/95 to-[#FAFAFA]/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-zinc-600 tracking-[0.2em] bg-white/50 border-zinc-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Centre de Bruxelles
                </span>
<h1 className="leading-[1] uppercase md:text-6xl lg:text-7xl text-4xl font-medium text-zinc-950 tracking-tighter mb-8">L'expérience<br className=""/>du lâcher-prise absolu.</h1>
<p className="leading-relaxed text-lg md:text-xl text-zinc-600 mb-10 max-w-xl font-light">
                    Votre oasis de sérénité et de relaxation en plein cœur du Sablon. Découvrez l'isolation sensorielle par flottaison pour apaiser le corps et revitaliser l'esprit.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium text-white bg-zinc-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-md text-sm" href="#pricing">Réserver une séance</a>
<a className="inline-flex items-center justify-center transition-all hover:bg-zinc-50 font-medium text-zinc-900 bg-white border-zinc-200 border rounded-full pt-4 pr-8 pb-4 pl-8 text-sm" href="#experience">Découvrir les bienfaits</a>
</div>
<div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-zinc-200/60">
<div className="">
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon className="w-5 h-5 text-xl text-zinc-900 fill-zinc-900" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-2xl font-semibold tracking-tight text-zinc-900">4.9</span>
</div>
<p className="leading-tight text-sm font-normal text-zinc-500">Avis clients (TripAdvisor)</p>
</div>
<div className="w-px h-12 bg-zinc-200/60"></div>
<div className="">
<div className="flex items-center gap-1 mb-1">
<span className="text-2xl font-semibold tracking-tight text-zinc-900">3</span>
</div>
<p className="leading-tight text-sm font-normal text-zinc-500">Bulles privatives</p>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#FAFAFA] pt-24 pb-24 border-t border-zinc-200" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-4">Notre Centre</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 leading-tight text-zinc-900">UN CADRE PENSÉ POUR LA DÉTENTE.</h2>
<p className="leading-relaxed text-lg text-zinc-600 mb-8 font-light">
                        Entrez dans notre espace d’accueil chaleureux, où s'accordent design, nature et tranquillité. Chaque détail est conçu pour vous garantir la meilleure expérience de relaxation, de méditation et d’introspection.
                    </p>
<a className="inline-flex items-center text-sm font-medium border-b pb-1 text-zinc-900 hover:text-zinc-600 border-zinc-900 transition-colors" href="#portfolio">
                        Voir les installations <iconify-icon className="w-4 h-4 text-lg ml-2" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-zinc-100 p-8 rounded-2xl hover:shadow-md transition-shadow duration-300 group cursor-pointer">
<div className="mb-8 text-zinc-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-900">La Bulle de Flottaison</h3>
<p className="text-base text-zinc-500 font-light">Une capsule d'isolation sensorielle contenant de l'eau chauffée à température corporelle et saturée en sel d'Epsom pour une apesanteur totale.</p>
</div>
<div className="p-8 rounded-2xl border border-zinc-100 hover:shadow-md transition-shadow duration-300 group cursor-pointer bg-white">
<div className="mb-8 text-zinc-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:bath-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-900">Espace Privatif</h3>
<p className="text-base text-zinc-500 font-light">Chaque bulle est située dans une salle privée équipée d'un vestiaire et d'une douche à l'italienne pour votre confort et intimité.</p>
</div>
<div className="p-8 rounded-2xl border border-zinc-100 hover:shadow-md transition-shadow duration-300 group cursor-pointer bg-zinc-50 md:col-span-2 lg:col-span-1">
<div className="mb-8 text-zinc-800"><iconify-icon className="w-10 h-10 text-4xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-zinc-900">Espace Détente</h3>
<p className="text-base text-zinc-500 font-light">Prolongez votre voyage dans notre salon. Dégustez une infusion bio de notre herboriste, bercé par les couleurs de notre mur lumineux relaxant.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-white border-zinc-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b pb-12 gap-8 border-zinc-100">
<div className="max-w-2xl">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-2">Le Déroulement</span>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-900">Votre Rituel de Détente</h2>
<p className="text-lg text-zinc-600 font-light">Une expérience guidée pas à pas pour un lâcher-prise en toute confiance.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-8 rounded-2xl border bg-zinc-50 border-zinc-100 relative overflow-hidden group">
<div className="text-6xl font-medium text-zinc-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">1</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-900 mb-3 mt-4">L'Accueil</h3>
<p className="leading-relaxed text-zinc-500 text-sm font-light">Briefing personnalisé avec notre équipe. Nous vous expliquons le fonctionnement de la bulle pour dissiper toute appréhension.</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-zinc-50 border-zinc-100 relative overflow-hidden group">
<div className="text-6xl font-medium text-zinc-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">2</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-900 mb-3 mt-4">La Préparation</h3>
<p className="leading-relaxed text-zinc-500 text-sm font-light">Dans votre espace privatif, prenez une douche tiède et préparez-vous à entrer dans la bulle en toute intimité.</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-zinc-50 border-zinc-100 relative overflow-hidden group">
<div className="text-6xl font-medium text-zinc-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">3</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-900 mb-3 mt-4">La Flottaison</h3>
<p className="leading-relaxed text-zinc-500 text-sm font-light">Profitez de 60 minutes de flottaison. L'eau saturée en sel d'Epsom vous porte sans effort, induisant une relaxation profonde.</p>
</div>
</div>
<div className="p-8 rounded-2xl border bg-zinc-50 border-zinc-100 relative overflow-hidden group">
<div className="text-6xl font-medium text-zinc-200 absolute -top-4 -right-4 group-hover:scale-110 transition-transform">4</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-zinc-900 mb-3 mt-4">Le Retour</h3>
<p className="leading-relaxed text-zinc-500 text-sm font-light">Après une douche pour rincer le sel, atterrissez doucement dans notre espace détente autour d'une infusion chaude.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] border-zinc-200 border-t pt-24 pb-24" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row mb-12 items-start md:items-end justify-between">
<div className="">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-2">Galerie</span>
<h2 className="text-3xl font-medium text-zinc-900 text-left tracking-tight">Le Centre de Bruxelles</h2>
</div>
<div className="mt-6 md:mt-0 relative w-full md:w-auto">
<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none md:hidden z-10"></div>
<div className="flex gap-2 overflow-x-auto hide-scroll pb-2 md:pb-0 w-full md:w-auto pr-4 md:pr-0">
<button className="filter-btn active whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all bg-zinc-900 text-white flex-shrink-0" onclick="filterGallery('all')">Tout voir</button>
<button className="filter-btn whitespace-nowrap transition-all hover:bg-zinc-200 flex-shrink-0 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full pt-2 pr-4 pb-2 pl-4" onclick="filterGallery('bulles')">Les Bulles</button>
<button className="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium transition-all bg-zinc-100 text-zinc-600 hover:bg-zinc-200 flex-shrink-0" onclick="filterGallery('detente')">Espace Détente</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4" id="gallery-grid">

<div className="gallery-item group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" data-category="bulles">
<img alt="Bulle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a5d8f89-d702-40ec-b595-481b51fac808_1600w.png"/>
<div className="group-hover:bg-zinc-900/10 transition-colors duration-300 bg-zinc-900/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="gallery-item group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" data-category="detente">
<img alt="Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d866cb05-a71b-4793-8304-ea0047925d60_800w.png"/>
<div className="group-hover:bg-zinc-900/10 transition-colors duration-300 bg-zinc-900/0 absolute inset-0"></div>
</div>
<div className="gallery-item group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" data-category="bulles">
<img alt="Soin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/654cb7e8-b601-479e-967b-d673d45543e1_1600w.png"/>
<div className="group-hover:bg-zinc-900/10 transition-colors duration-300 bg-zinc-900/0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="group-hover:bg-zinc-900/10 transition-colors duration-300 bg-zinc-900/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden" id="pricing">
<div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 bg-zinc-100 -mr-40 -mt-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-2">Réserver ou Offrir</span>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight">Tarifs des Séances</h2>
<p className="text-zinc-500 mt-4 font-light">Toutes nos séances durent 60 minutes et sont valables 1 an.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col justify-between">
<div>
<span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-medium uppercase tracking-wider rounded-md mb-3">En ligne uniquement</span>
<h3 className="text-lg font-medium text-zinc-900 mb-1">Tarif Découverte</h3>
<p className="text-sm text-zinc-500 font-light mb-4">Pour votre 1ère séance. Nominative, utilisable une fois.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium tracking-tight text-zinc-900">69€</span>
<span className="text-sm text-zinc-500">/ séance</span>
</div>
</div>
<a className="w-full text-center py-2.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">Acheter</a>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col justify-between">
<div className="">
<div className="h-[22px] mb-3"></div> 
<h3 className="text-lg font-medium text-zinc-900 mb-1">Plein Tarif</h3>
<p className="text-sm text-zinc-500 font-light mb-4">Séance standard de 60 minutes en isolation sensorielle.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium tracking-tight text-zinc-900">75€</span>
<span className="text-sm text-zinc-500">/ séance</span>
</div>
</div>
<a className="w-full text-center py-2.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">Acheter</a>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-1">Pack 2 Séances</h3>
<p className="text-sm text-zinc-500 font-light mb-4">Venez à deux, ou seul deux fois. (Soit 69,5€ la séance)</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium tracking-tight text-zinc-900">139€</span>
<span className="text-sm text-zinc-500">/ pack</span>
</div>
</div>
<a className="w-full text-center py-2.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">Acheter</a>
</div>
<div className="p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-1">Tarif Réduit</h3>
<p className="text-sm text-zinc-500 font-light mb-4">Étudiants &amp; demandeurs d'emploi. Lundi-Vendredi avant 18h.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium tracking-tight text-zinc-900">59€</span>
<span className="text-sm text-zinc-500">/ séance</span>
</div>
</div>
<a className="w-full text-center py-2.5 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">Acheter</a>
</div>
</div>

<div className="lg:col-span-4 sticky top-24">
<div className="p-8 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden bg-zinc-900 text-white h-full flex flex-col">
<div className="mb-8 relative z-10">
<iconify-icon className="w-8 h-8 text-3xl mb-4 text-zinc-300" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight mb-3">Cartes Cadeaux</h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed">
                                Offrez à un proche le temps de prendre le temps. Valable un an et utilisable 7j/7 dans notre centre.
                            </p>
</div>
<div className="space-y-4 mb-8 relative z-10 flex-grow">
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<div>
<span className="block text-sm font-medium">Session 60 min</span>
</div>
<span className="text-lg">75€</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<div>
<span className="block text-sm font-medium">Pack 2 Séances</span>
<span className="block text-xs text-zinc-500 mt-0.5">Soit 69.5€ / séance</span>
</div>
<span className="text-lg">139€</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-zinc-800">
<div>
<span className="block text-sm font-medium">Pack 3 Séances</span>
<span className="block text-xs text-zinc-500 mt-0.5">Soit 60€ / séance</span>
</div>
<span className="text-lg">180€</span>
</div>
</div>
<a className="transition-colors hover:bg-zinc-100 font-medium text-sm text-zinc-900 bg-white w-full z-10 rounded-lg pt-3 pb-3 relative inline-flex items-center justify-center" href="#">
                            Offrir une carte cadeau
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-zinc-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-2">Informations Utiles</span>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Questions Fréquentes</h2>
</div>
<div className="space-y-3">
<details className="group rounded-2xl border overflow-hidden transition-all bg-white border-zinc-200 hover:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-base font-medium select-none text-zinc-900">
                        Dois-je apporter un maillot de bain ?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 leading-relaxed text-zinc-500 font-light text-sm">
                        Non, la flottaison se pratique idéalement nu(e) pour ne ressentir aucun contact sur la peau et maximiser l'isolation sensorielle. Chaque bulle est située dans une salle 100% privative avec douche.
                    </div>
</details>
<details className="group rounded-2xl border overflow-hidden transition-all bg-white border-zinc-200 hover:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-base font-medium select-none text-zinc-900">
                        Et si je suis claustrophobe ?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 leading-relaxed text-zinc-500 font-light text-sm">
                        Vous gardez le contrôle total de votre expérience. La porte de la bulle ne se verrouille pas et s'ouvre d'une simple poussée. Vous contrôlez également la lumière et la musique à l'intérieur de la bulle.
                    </div>
</details>
<details className="group rounded-2xl border overflow-hidden transition-all bg-white border-zinc-200 hover:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-base font-medium select-none text-zinc-900">
                        L'hygiène de l'eau est-elle garantie ?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 leading-relaxed text-zinc-500 font-light text-sm">
                        Absolument. La concentration extrême en sel d'Epsom crée un environnement où aucune bactérie ne peut survivre. De plus, l'eau est filtrée 4 fois entre chaque séance (filtre 1 micron, UV, H2O2).
                    </div>
</details>
<details className="group rounded-2xl border overflow-hidden transition-all bg-white border-zinc-200 hover:border-zinc-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-base font-medium select-none text-zinc-900">
                        Puis-je flotter si je suis enceinte ?
                        <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="w-5 h-5 text-xl text-zinc-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 leading-relaxed text-zinc-500 font-light text-sm">
                        Oui, la flottaison est particulièrement recommandée pour les femmes enceintes car elle soulage immédiatement la pression exercée sur le dos et les articulations, procurant une sensation de légèreté incroyable.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="flex flex-col justify-between">
<div className="">
<span className="uppercase block text-xs font-medium text-zinc-500 tracking-[0.2em] mb-2">Venir au centre</span>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-6">Nous Trouver à Bruxelles</h2>
<div className="space-y-8 mt-10">
<div className="flex items-start gap-4">
<div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-base mb-1 text-zinc-900">Adresse</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                                        Rue du Pépin 40<br/>1000 Bruxelles
                                    </p>
<p className="text-xs text-zinc-400 mt-2 font-light">À 2 minutes à pied de la Porte de Namur.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-base mb-1 text-zinc-900">Accès</h4>
<ul className="text-sm text-zinc-500 space-y-1.5 font-light">
<li><strong>Métro :</strong> Lignes 2 et 6 (Porte de Namur)</li>
<li><strong>Parking :</strong> Interparking 2 Portes</li>
<li><strong>Bus :</strong> 80, 71, 64, 54, 34, 33</li>
</ul>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-base mb-1 text-zinc-900">Horaires</h4>
<p className="text-sm text-zinc-500 font-light">
                                        Lundi au Dimanche<br/>
                                        De 09h30 à 22h00
                                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-base mb-1 text-zinc-900">Contact</h4>
<a className="block text-sm text-zinc-500 font-light hover:text-zinc-900 transition-colors" href="tel:+3224655443">02 465 54 43</a>
<a className="block text-sm text-zinc-500 font-light hover:text-zinc-900 transition-colors" href="mailto:contact@lesbullesaflotter.be">contact@lesbullesaflotter.be</a>
</div>
</div>
</div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl border shadow-sm h-full bg-[#FAFAFA] border-zinc-200">
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-6">Nous écrire</h3>
<form className="space-y-5" onsubmit="return false;">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Nom &amp; Prénom</label>
<input className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all border-zinc-300 bg-white text-sm" placeholder="Votre nom" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Téléphone</label>
<input className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all border-zinc-300 bg-white text-sm" placeholder="04 XX XX XX XX" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all border-zinc-300 bg-white text-sm" placeholder="exemple@domaine.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all border-zinc-300 bg-white text-sm resize-none" placeholder="Comment pouvons-nous vous aider ?" rows="4"></textarea>
</div>
<button className="w-full font-medium text-sm py-3 rounded-lg transition-all shadow-sm bg-zinc-900 text-white hover:bg-zinc-800 mt-2" type="submit">
                            Envoyer le message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-zinc-200 border-t pt-16 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4 text-zinc-900">
<div className="p-1 rounded bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon className="w-4 h-4" icon="solar:droplet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight uppercase">Les Bulles à Flotter</span>
</div>
<p className="text-xs text-zinc-500 font-light leading-relaxed">Le premier centre spécialisé en isolation sensorielle par flottaison à Bruxelles.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div className="">
<h4 className="font-medium mb-4 text-sm text-zinc-900">Le Centre</h4>
<ul className="space-y-3 text-zinc-500 text-xs font-light">
<li><a className="transition-colors hover:text-zinc-900" href="#experience">L'Expérience</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#process">Déroulement</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#portfolio">Galerie</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-zinc-900">Réservations</h4>
<ul className="space-y-3 text-zinc-500 text-xs font-light">
<li><a className="transition-colors hover:text-zinc-900" href="#pricing">Tarifs</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#pricing">Cartes Cadeaux</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#">Mon Compte</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-zinc-900">Légal</h4>
<ul className="space-y-3 text-zinc-500 text-xs font-light">
<li><a className="transition-colors hover:text-zinc-900" href="#">Mentions Légales</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#">CGV</a></li>
<li><a className="transition-colors hover:text-zinc-900" href="#faq">FAQ</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-100 pt-8 gap-4">
<div className="flex flex-col gap-1 text-center md:text-left">
<span className="text-xs text-zinc-400 font-light">© 2025 Les Bulles à Flotter. Tous droits réservés.</span>
</div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="w-5 h-5 text-xl" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="w-5 h-5 text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 w-[90%] md:w-auto">
<a className="flex items-center justify-center gap-2 transition-transform hover:scale-105 bg-zinc-900 text-white rounded-full py-3.5 px-8 shadow-xl hover:shadow-2xl border border-zinc-800 w-full text-sm font-medium tracking-wide" href="#pricing">
<iconify-icon className="w-4 h-4" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Réserver une séance
        </a>
</div>


    </>
  );
}
