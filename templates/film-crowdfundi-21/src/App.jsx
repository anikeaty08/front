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
      

<nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center bg-zinc-900 text-white">
<iconify-icon icon="solar:clapperboard-edit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-bold tracking-tight uppercase text-zinc-900">CINEFEEL</span>
<span className="text-[10px] font-medium tracking-widest uppercase text-zinc-500">Mécénat</span>
</div>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Projets</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Notre Mission</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Entreprises</a>
</div>

<div className="flex items-center gap-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<div className="h-5 w-px bg-zinc-200"></div>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
<span>Mon compte</span>
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

<nav className="mb-10 flex items-center text-xs font-medium text-zinc-500 uppercase tracking-wide">
<a className="hover:text-zinc-900 transition-colors" href="#">Accueil</a>
<iconify-icon className="mx-2 text-zinc-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors" href="#">Films</a>
<iconify-icon className="mx-2 text-zinc-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900">Anatomie d'une chute</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7 flex flex-col gap-12">

<div className="flex flex-col gap-4">
<div className="group relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 shadow-sm">
<img alt="Film Cover" className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<button className="absolute inset-0 flex items-center justify-center bg-zinc-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur-[1px]">
<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-zinc-900 shadow-2xl transition-transform hover:scale-105">
<iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</button>
<div className="absolute bottom-6 left-6">
<span className="inline-flex items-center bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-900 shadow-sm">Campagne en cours</span>
</div>
</div>
</div>

<div className="sticky top-20 z-10 -mx-4 overflow-x-auto bg-white/95 px-4 backdrop-blur-sm sm:mx-0 sm:px-0 sm:bg-white sm:backdrop-blur-none border-b border-zinc-100 no-scrollbar">
<div className="flex gap-8 min-w-max pb-4">
<a className="text-sm font-semibold text-zinc-900 border-b-2 border-zinc-900 pb-4 -mb-[17px]" href="#projet">Le Projet</a>
<a className="hover:text-zinc-900 transition-colors text-sm font-medium text-zinc-500 pb-4" href="#intention">Note d'intention</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-4 transition-colors" href="#equipe">L'Équipe</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 pb-4 transition-colors" href="#budget">Budget</a>
</div>
</div>

<section className="scroll-mt-40" id="projet">
<h3 className="text-xl font-medium text-zinc-900 mb-6 font-serif">Synopsis</h3>
<div className="prose prose-zinc prose-sm max-w-none text-zinc-600 leading-relaxed text-justify">
<p className="">
<span className="font-semibold text-zinc-900">Palme d'Or 2023.</span> Sandra, Samuel et leur fils malvoyant de 11 ans, Daniel, vivent depuis un an loin de tout, à la montagne. Un jour, Samuel est retrouvé mort au pied de leur maison. Une enquête pour mort suspecte est ouverte. Sandra est bientôt inculpée malgré le doute : suicide ou homicide ?
                        </p>
<p className="mt-4">
                            Un an plus tard, Daniel assiste au procès de sa mère, véritable dissection du couple. Le film explore les dynamiques de pouvoir, la vérité subjective et la complexité des relations humaines à travers le prisme d'un drame judiciaire intense.
                        </p>
</div>
</section>

<section className="scroll-mt-40 border-t border-zinc-100 pt-12" id="intention">
<h3 className="text-xl font-medium text-zinc-900 mb-6 font-serif">Le mot de la réalisatrice</h3>
<div className="flex gap-6">
<div className="hidden sm:block w-1 bg-zinc-900/10"></div>
<div>
<blockquote className="text-lg italic text-zinc-800 leading-relaxed font-serif">
                                "Je voulais faire un film sur la défaite d'un couple. L'idée était de raconter la chute d'un corps, de manière technique, pour en faire l'image de la chute d'une histoire d'amour."
                            </blockquote>
<div className="mt-6 flex items-center gap-4">
<img className="h-10 w-10 rounded-full object-cover grayscale" src="https://image.tmdb.org/t/p/w200/h2513412.jpg"/>
<div>
<p className="text-sm font-semibold text-zinc-900">Justine Triet</p>
<p className="text-xs text-zinc-500">Réalisatrice &amp; Scénariste</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-40 border-t border-zinc-100 pt-12" id="equipe">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-medium text-zinc-900 font-serif">Distribution</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-3">
<img alt="Sandra Hüller" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" src="https://image.tmdb.org/t/p/w400/od3f3fV7a2a1a1a.jpg"/>
</div>
<h4 className="text-sm font-semibold text-zinc-900">Sandra Hüller</h4>
<p className="text-xs text-zinc-500">Sandra</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-3">
<img alt="Swann Arlaud" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" src="https://image.tmdb.org/t/p/w400/2a1a1a1a.jpg"/>
</div>
<h4 className="text-sm font-semibold text-zinc-900">Swann Arlaud</h4>
<p className="text-xs text-zinc-500">Vincent</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-3">
<img alt="Milo Machado" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" src="https://image.tmdb.org/t/p/w400/3a1a1a1a.jpg"/>
</div>
<h4 className="text-sm font-semibold text-zinc-900">Milo M. Graner</h4>
<p className="text-xs text-zinc-500">Daniel</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-3">
<img alt="Antoine Reinartz" className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" src="https://image.tmdb.org/t/p/w400/4a1a1a1a.jpg"/>
</div>
<h4 className="text-sm font-semibold text-zinc-900">Antoine Reinartz</h4>
<p className="text-xs text-zinc-500">L'avocat</p>
</div>
</div>
</section>

<section className="border-t border-zinc-100 pt-12">
<div className="bg-zinc-50 p-8">
<div className="flex items-start gap-5">
<iconify-icon className="text-zinc-900 shrink-0" icon="solar:verified-check-linear" width="32"></iconify-icon>
<div className="">
<h4 className="text-base font-bold text-zinc-900 mb-2">Garantie Cinefeel Mécénat</h4>
<p className="text-sm text-zinc-600 leading-relaxed">
                                    Ce projet a été validé par notre comité de sélection pour sa qualité artistique et son impact culturel. Les fonds collectés sont sécurisés et reversés directement à la société de production <span className="font-medium text-zinc-900">Les Films Pelléas</span>.
                                </p>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5">
<div className="sticky top-28 space-y-8">

<div className="">
<div className="flex items-start justify-between gap-4">
<h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl leading-tight">Anatomie d'une chute</h1>
<button className="flex-shrink-0 rounded-full border border-zinc-200 p-2.5 text-zinc-400 transition hover:border-zinc-900 hover:text-zinc-900">
<iconify-icon className="" icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
<span className="font-medium text-zinc-900">Justine Triet</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>Drame, Thriller</span>
<span className="h-1 w-1 rounded-full bg-zinc-300"></span>
<span>2023</span>
</div>
</div>

<div className="space-y-2">
<div className="flex items-end justify-between">
<div className="flex flex-col">
<span className="text-3xl font-bold text-zinc-900">42 850 €</span>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">Collectés sur 50 000 €</span>
</div>
<span className="text-xl font-bold text-zinc-900">85%</span>
</div>
<div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-100">
<div className="absolute left-0 top-0 h-full w-[85%] bg-zinc-900"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500 pt-1">
<span className=""> mécènes</span>
<span> jours restants</span>
</div>
</div>

<div className="relative overflow-hidden bg-zinc-900 p-8 shadow-xl text-white">

<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-zinc-800/50 blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="solar:heart-angle-bold"></iconify-icon>
                                Soutenir ce film
                            </h2>

<div className="mb-6">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Je donne</label>
<div className="relative">
<input className="block w-full border-b border-zinc-700 bg-transparent py-2 text-3xl font-bold text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none focus:ring-0 transition-colors" placeholder="0" type="number" value="100"/>
<span className="absolute right-0 bottom-3 text-lg text-zinc-400 font-medium">EUR</span>
</div>
</div>

<div className="mb-8 rounded bg-zinc-800/50 p-4 border border-zinc-700/50">
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-zinc-300">Coût réel après déduction</span>
<span className="text-lg font-bold text-white">34 €</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-zinc-400">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
<span className="">Déduction fiscale de 66% (Particuliers)</span>
</div>
</div>

<button className="w-full group relative flex items-center justify-center gap-2 overflow-hidden bg-white px-8 py-4 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-200">
<span className="relative z-10">Valider mon don</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="mt-4 text-center text-xs text-zinc-500">Paiement sécurisé par Stripe</p>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wide">Contreparties</h3>

<div className="group relative cursor-pointer border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-900 hover:shadow-md">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-bold text-zinc-900">Pour 50 € et plus</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:ticket-star-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-3">Le DVD du film + Votre nom au générique des contributeurs.</p>
<div className="text-xs font-medium text-amber-600 uppercase tracking-wider">47 contributeurs</div>
</div>

<div className="group relative cursor-pointer border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-900 hover:shadow-md">
<div className="flex justify-between items-start mb-2">
<span className="text-sm font-bold text-zinc-900">Pour 200 € et plus</span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:clapperboard-text-linear" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 mb-3">2 places pour l'avant-première à Paris + Rencontre avec l'équipe + Affiche dédicacée.</p>
<div className="text-xs font-medium text-amber-600 uppercase tracking-wider">12 contributeurs</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t border-zinc-100 pt-16">
<div className="mb-10 flex items-center justify-between">
<h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Autres projets à soutenir</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1" href="#">
                    Voir tout
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-200 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-3 right-3 bg-white px-2 py-1 text-[10px] font-bold text-zinc-900 uppercase tracking-wide">J-5</div>
</div>
<h3 className="text-base font-bold text-zinc-900">Le Règne Animal</h3>
<p className="text-sm text-zinc-500 mt-1">Thomas Cailley</p>
<div className="mt-3 h-1 w-full bg-zinc-100">
<div className="h-full w-3/4 bg-zinc-900"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-200 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-base font-bold text-zinc-900">Je verrai toujours vos visages</h3>
<p className="text-sm text-zinc-500 mt-1">Jeanne Herry</p>
<div className="mt-3 h-1 w-full bg-zinc-100">
<div className="h-full w-1/2 bg-zinc-900"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-200 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-base font-bold text-zinc-900">Sur l'Adamant</h3>
<p className="text-sm text-zinc-500 mt-1">Nicolas Philibert</p>
<div className="mt-3 h-1 w-full bg-zinc-100">
<div className="h-full w-[15%] bg-zinc-900"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-200 mb-4">
<img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-3 right-3 bg-zinc-900 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide">Nouveau</div>
</div>
<h3 className="text-base font-bold text-zinc-900">Yannick</h3>
<p className="text-sm text-zinc-500 mt-1">Quentin Dupieux</p>
<div className="mt-3 h-1 w-full bg-zinc-100">
<div className="h-full w-0 bg-zinc-900"></div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="flex justify-center items-center gap-2 mb-6">
<iconify-icon className="text-zinc-900" icon="solar:clapperboard-edit-bold" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-zinc-900">CINEFEEL MECENAT</span>
</div>
<p className="text-sm text-zinc-500 max-w-md mx-auto">Soutenez le cinéma indépendant et participez à la création des œuvres de demain. Plateforme reconnue d'utilité publique.</p>
<div className="mt-8 flex justify-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900" href="#">Mentions Légales</a>
<a className="hover:text-zinc-900" href="#">CGU</a>
<a className="hover:text-zinc-900" href="#">Contact</a>
</div>
<p className="mt-8 text-xs text-zinc-400">© 2024 Cinefeel. Tous droits réservés.</p>
</div>
</footer>

    </>
  );
}
