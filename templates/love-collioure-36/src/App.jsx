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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fdf8f6',
100: '#f2e8e5',
500: '#e1ad9f', // Terracotta muted
900: '#1a1a1a',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
                LOVE<span className="text-neutral-400">COLLIOURE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#villa">La Villa</a>
<a className="hover:text-neutral-900 transition-colors" href="#appartements">Les Appartements</a>
<a className="hover:text-neutral-900 transition-colors" href="#collioure">Collioure</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-sm ring-1 ring-white/20" href="#reserver">
                    Réserver
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="relative rounded-3xl overflow-hidden h-[80vh] min-h-[600px] w-full group">
<img alt="Vue sur Collioure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium mb-6">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> Côte Vermeille, France
                    </span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-4">
                        Une villa d'exception face à la baie de Collioure.
                    </h1>
<p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-lg mb-8">
                        Quatre appartements rénovés avec soin, alliant confort moderne et charme méditerranéen.
                    </p>

<div className="bg-white p-2 rounded-2xl md:rounded-full max-w-3xl flex flex-col md:flex-row items-center gap-2 shadow-xl shadow-black/10">
<div className="flex-1 w-full px-4 py-2 md:py-1 border-b md:border-b-0 md:border-r border-neutral-100">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Arrivée</label>
<div className="flex items-center gap-2 text-neutral-800 text-sm font-medium">
<iconify-icon className="text-neutral-400" icon="lucide:calendar"></iconify-icon>
<span>Sélectionner</span>
</div>
</div>
<div className="flex-1 w-full px-4 py-2 md:py-1 border-b md:border-b-0 md:border-r border-neutral-100">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Départ</label>
<div className="flex items-center gap-2 text-neutral-800 text-sm font-medium">
<iconify-icon className="text-neutral-400" icon="lucide:calendar"></iconify-icon>
<span>Sélectionner</span>
</div>
</div>
<div className="flex-1 w-full px-4 py-2 md:py-1">
<label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">Voyageurs</label>
<div className="flex items-center gap-2 text-neutral-800 text-sm font-medium">
<iconify-icon className="text-neutral-400" icon="lucide:users"></iconify-icon>
<span>2 adultes</span>
</div>
</div>
<button className="w-full md:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 md:py-4 rounded-xl md:rounded-full font-medium text-sm transition-colors flex items-center justify-center gap-2">
                            Rechercher
                            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6" id="villa">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-neutral-900">Le luxe de la simplicité,<br/>les pieds dans l'eau.</h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                        Située à quelques minutes à pied du centre historique et des plages, la Villa Love Collioure offre un cadre idyllique pour votre séjour. Chaque appartement a été pensé pour capturer la lumière unique du Roussillon et offrir une vue imprenable sur les paysages environnants.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 mb-1">
<iconify-icon icon="lucide:wifi" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Wifi Fibre</h3>
<p className="text-xs text-neutral-500">Haut débit dans toute la villa.</p>
</div>
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 mb-1">
<iconify-icon icon="lucide:wind" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Climatisation</h3>
<p className="text-xs text-neutral-500">Confort optimal été comme hiver.</p>
</div>
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 mb-1">
<iconify-icon icon="lucide:car" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Parking Privé</h3>
<p className="text-xs text-neutral-500">Un luxe rare à Collioure.</p>
</div>
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 mb-1">
<iconify-icon icon="lucide:sun" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900">Terrasses</h3>
<p className="text-xs text-neutral-500">Espaces extérieurs privatifs.</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-neutral-100 to-neutral-50 rounded-[2rem] -z-10 transform rotate-2"></div>
<img alt="Intérieur Villa" className="rounded-2xl shadow-lg border border-neutral-100 w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-neutral-100" id="appartements">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-2">Nos Appartements</h2>
<p className="text-neutral-500">Quatre ambiances uniques pour votre séjour.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-200 pb-0.5 hover:border-neutral-900 transition-all flex items-center gap-1" href="#">
                    Voir les disponibilités <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4 border border-neutral-200/60">
<img alt="Le Clocher" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&amp;w=1600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                            2 Personnes
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">L'Atelier</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Un studio lumineux avec vue sur les toits et une décoration artistique soignée.</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-neutral-900">dès 90€</span>
<span className="text-xs text-neutral-400">/ nuit</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Climatisation</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Vue Mer</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4 border border-neutral-200/60">
<img alt="La Baie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=1600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                            4 Personnes
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">La Terrasse</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Grand appartement T3 avec une terrasse panoramique surplombant la baie.</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-neutral-900">dès 140€</span>
<span className="text-xs text-neutral-400">/ nuit</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Terrasse 20m²</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Lave-vaisselle</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4 border border-neutral-200/60">
<img alt="Le Jardin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=1600"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                            2-3 Personnes
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">Le Patio</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Un havre de paix en rez-de-jardin, idéal pour les couples cherchant la fraîcheur.</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-neutral-900">dès 110€</span>
<span className="text-xs text-neutral-400">/ nuit</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Jardin Privé</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Calme</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3] mb-4 border border-neutral-200/60">
<img alt="L'Horizon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-neutral-900 shadow-sm">
                            4-5 Personnes
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">L'Horizon</h3>
<p className="text-sm text-neutral-500 line-clamp-2">L'appartement le plus spacieux, offrant une double exposition et un confort premium.</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-neutral-900">dès 160€</span>
<span className="text-xs text-neutral-400">/ nuit</span>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Suite Parentale</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] text-neutral-600 font-medium">Machine à laver</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50" id="collioure">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">Vivre Collioure</h2>
<p className="text-neutral-500">Un village de peintres, de saveurs et de couleurs. Profitez de votre séjour pour explorer les joyaux de la côte catalane.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-neutral-200">
<img alt="Château Royal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium mb-1">Le Château Royal</h3>
<p className="text-sm text-white/80">Histoire et architecture face à la mer.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col justify-center items-start">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-800" icon="lucide:anchor" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Activités Nautiques</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Kayak, plongée ou simple baignade dans les criques cristallines accessibles à pied.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col justify-center items-start">
<div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-neutral-800" icon="lucide:utensils" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Gastronomie</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Découvrez les anchois de Collioure et les vins de Banyuls dans les restaurants du port.</p>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-neutral-200">
<img alt="Ruelles Collioure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium mb-1">Les Ruelles Colorées</h3>
<p className="text-sm text-white/80">Flânez dans le Mouré, l'ancien quartier des pêcheurs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto text-center">
<iconify-icon className="text-neutral-300 mb-6" icon="lucide:quote" width="32"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-8 max-w-3xl mx-auto leading-tight">
                "Un séjour inoubliable. L'appartement était impeccable, décoré avec goût et la vue depuis la terrasse est tout simplement magique. Nous reviendrons."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">S</div>
<div className="text-sm font-medium text-neutral-900">Sophie &amp; Marc</div>
<div className="w-1 h-1 rounded-full bg-neutral-300"></div>
<div className="text-sm text-neutral-500">Séjour en Juillet 2023</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto bg-neutral-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Prêt pour votre évasion ?</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto">Réservez directement sur notre site pour bénéficier des meilleurs tarifs et d'un accueil personnalisé.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-neutral-900 px-8 py-3 rounded-full font-medium text-sm hover:bg-neutral-100 transition-colors">
                        Vérifier les disponibilités
                    </button>
<button className="bg-neutral-800 border border-neutral-700 text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-neutral-700 transition-colors">
                        Nous contacter
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-tighter uppercase mb-6 inline-block" href="#">
                        LOVE<span className="text-neutral-400">COLLIOURE</span>
</a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Location d'appartements de standing à Collioure. Une expérience authentique au cœur de la côte vermeille.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-4">Navigation</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Appartements</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">La Région</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon icon="lucide:mail" width="14"></iconify-icon> bonjour@lovecollioure.fr</li>
<li className="flex items-center gap-2"><iconify-icon icon="lucide:phone" width="14"></iconify-icon> +33 6 00 00 00 00</li>
<li className="flex items-center gap-2"><iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> 66190 Collioure, France</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 Love Collioure. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-neutral-900 transition-colors" href="#">CGV</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
