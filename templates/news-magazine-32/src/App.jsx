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
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">

<div className="hidden lg:flex items-center justify-between px-8 py-3 text-xs border-b border-gray-100">
<div className="flex items-center space-x-6 text-gray-500 font-medium">
<a className="flex items-center hover:text-gray-900 transition-colors" href="#">
<span className="mr-2">Le journal</span>
</a>
<a className="flex items-center hover:text-gray-900 transition-colors" href="#">
<span>Services</span>
</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-gray-500 hover:text-gray-900 font-semibold" href="#">FR</a>
<span className="text-gray-300">|</span>
<a className="text-gray-400 hover:text-gray-900" href="#">EN</a>
<a className="flex items-center font-semibold bg-[var(--lm-yellow)] hover:bg-[var(--lm-yellow-hover)] text-[var(--lm-dark)] px-4 py-2 rounded transition-colors" href="#">
                    S’abonner
                </a>
<a className="flex items-center font-medium hover:text-[var(--lm-blue)] transition-colors gap-2" href="#">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                    Se connecter
                </a>
</div>
</div>

<div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white">
<button className="text-gray-700">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="font-logo text-3xl tracking-tight" href="/">Le Monde</a>
<a className="font-semibold bg-[var(--lm-yellow)] text-xs text-[var(--lm-dark)] px-3 py-2 rounded" href="#">
                S’abonner
            </a>
</div>

<div className="hidden lg:block bg-white pt-6 pb-0">
<div className="flex justify-center items-center mb-6">
<a className="font-logo text-6xl tracking-tight text-[var(--lm-dark)]" href="/">Le Monde</a>
</div>
<div className="border-t border-gray-100 shadow-sm">
<nav className="max-w-[1200px] mx-auto flex items-center h-12 text-sm overflow-x-auto hide-scrollbar px-4">
<a className="flex items-center font-bold uppercase text-[11px] tracking-wider mr-6 text-red-700 whitespace-nowrap" href="#">
<span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span> En continu
                    </a>
<div className="flex space-x-6 text-[var(--lm-dark)] font-sans whitespace-nowrap">
<a className="hover:text-[var(--lm-blue)]" href="#">International</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Politique</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Société</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Économie</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Idées</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Culture</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Le Goût du Monde</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Sciences</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Sport</a>
<a className="hover:text-[var(--lm-blue)]" href="#">Pixels</a>
</div>
<div className="ml-auto pl-4 flex items-center space-x-4 border-l border-gray-200">
<button className="text-gray-600 hover:text-[var(--lm-blue)]">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</nav>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-[1200px] mx-auto bg-white lg:my-8 lg:p-0 shadow-sm lg:shadow-none">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8">

<section className="lg:col-span-8 p-4 lg:p-0 border-b lg:border-b-0 border-gray-200">
<article className="group cursor-pointer">

<span className="inline-flex items-center mb-2">
<iconify-icon className="text-[var(--lm-yellow)] mr-1" icon="solar:star-bold" width="16"></iconify-icon>
<span className="sr-only">Article réservé aux abonnés</span>
</span>

<h1 className="font-serif-lm font-bold text-3xl lg:text-4xl leading-tight mb-4 group-hover:text-[var(--lm-blue)] transition-colors">
                        Affaire Epstein : la justice française au défi d’exploiter les nouvelles pistes
                    </h1>

<div className="relative w-full aspect-[3/2] mb-2 overflow-hidden bg-gray-100">
<img alt="Jean-Luc Brunel et Daniel Siad" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://img.lemde.fr/2026/02/18/0/0/1920/1280/800/533/75/0/57867ed_upload-1-272y9ir6obh9-47.jpg"/>
</div>
<div className="text-[10px] text-gray-500 uppercase tracking-wide mb-4 text-right">D’APRÈS WIKIPEDIA/FRANCETV</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<p className="font-serif-lm text-lg text-gray-800 leading-snug">
                                Deux « enquêtes cadres » ont été ouvertes par le parquet, mercredi, l’une portant sur l’« infraction de traite des êtres humains » et l’autre sur les « infractions financières ». Cinq magistrats référents doivent faire le tri dans les plaintes.
                            </p>
</div>
<div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6">
<ul className="space-y-3">
<li>
<a className="font-sans text-sm font-medium text-[var(--lm-blue)] hover:text-[#005b85] leading-snug" href="#">
<span className="inline-block align-middle mr-1 text-[var(--lm-yellow)]"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
                                        Affaire Epstein : les 100 000 euros promis par le criminel sexuel à une association fantôme créée par Jack Lang
                                    </a>
</li>
</ul>
</div>
</div>
</article>
</section>

<section className="lg:col-span-4 border-l border-gray-200 bg-white">
<div className="flex flex-col divide-y divide-gray-200">

<article className="p-4 flex flex-row-reverse lg:flex-col gap-4 group cursor-pointer hover:bg-gray-50 transition-colors">
<div className="w-1/3 lg:w-full aspect-[3/2] overflow-hidden bg-gray-100 relative">
<img alt="" className="object-cover w-full h-full" src="https://img.lemde.fr/2026/02/18/0/0/6807/4538/398/265/75/0/f7ab617_ftp-1-x9vudhp4mikx-5220203-01-06.jpg"/>
</div>
<div className="w-2/3 lg:w-full">
<span className="inline-block align-middle mb-1 text-[var(--lm-yellow)]"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></span>
<h2 className="font-serif-lm font-bold text-lg leading-tight group-hover:text-[var(--lm-blue)]">
                                Après la mort de Quentin Deranque, la récupération du RN pour transférer la « diabolisation » sur LFI
                            </h2>
</div>
</article>

<article className="p-4 flex flex-row-reverse lg:flex-col gap-4 group cursor-pointer hover:bg-gray-50 transition-colors">
<div className="w-1/3 lg:w-full aspect-[3/2] overflow-hidden bg-gray-100 relative">
<img alt="" className="object-cover w-full h-full" src="https://img.lemde.fr/2026/02/18/0/0/5779/3853/398/265/75/0/3f53498_ftp-1-rrk90wyt4yf5-5216936-01-06.jpg"/>
</div>
<div className="w-2/3 lg:w-full">
<div className="flex items-center space-x-2 mb-2">
<span className="bg-[var(--lm-red)] w-2 h-2 rounded-full animate-pulse"></span>
<span className="uppercase text-[10px] font-bold text-[var(--lm-red)] tracking-wider">En direct</span>
</div>
<h2 className="font-serif-lm font-bold text-lg leading-tight group-hover:text-[var(--lm-blue)]">
                                Tempête Pedro : quatre départements de l’Ouest toujours en vigilance rouge jeudi et dix autres placés en vigilance orange
                            </h2>
</div>
</article>
</div>
</section>
</div>

<div className="border-t border-gray-200 my-0"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-gray-200 border-b border-gray-200">

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 overflow-hidden aspect-[3/2]">
<img alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://img.lemde.fr/2026/02/19/50/0/4873/3248/398/265/75/0/7500a57_ftp-1-vjijyf4uonr3-5226603-01-06.jpg"/>
</div>
<h3 className="font-serif-lm font-bold text-base leading-snug mb-2 group-hover:text-[var(--lm-blue)]">
                    Mark Zuckerberg se défend d’avoir cherché à rendre Facebook et Instagram addictifs
                </h3>
<p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    Auditionné mercredi devant un jury à Los Angeles, le PDG de Meta a toutefois reconnu qu’il n’avait pas été assez prompt à interdire aux enfants l’accès à ses plateformes.
                </p>
</article>

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 overflow-hidden aspect-[3/2]">
<img alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://img.lemde.fr/2026/02/18/0/0/4131/2754/398/265/75/0/46a779a_ftp-1-7lnydy447jud-5220196-01-06.jpg"/>
</div>
<h3 className="font-serif-lm font-bold text-base leading-snug mb-2 group-hover:text-[var(--lm-blue)]">
                    Habib Beye nouvel entraîneur de Marseille, chargé d’éteindre le feu qui embrase l’OM
                </h3>
<p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    L’Olympique de Marseille a annoncé, mercredi, la nomination de l’ancien entraîneur de Rennes et ancien capitaine du club marseillais.
                </p>
</article>

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 overflow-hidden aspect-[3/2]">
<img alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://img.lemde.fr/2026/02/18/77/0/5742/3828/398/265/75/0/890bb8d_upload-1-knh5ebqlmm3b-salle-3-ne-plus-etre-une-muse-20.JPG"/>
</div>
<span className="inline-block mb-1 text-[var(--lm-yellow)]"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-base leading-snug mb-2 group-hover:text-[var(--lm-blue)]">
                    L’exposition « La Marrade », à Dunkerque, sonde l’humour dans les luttes féministes
                </h3>
<p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    Le LAAC rassemble des œuvres de plasticiennes qui ont fait voler en éclats les stéréotypes et les injonctions liés au genre.
                </p>
</article>
</div>

<section className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">

<article className="md:col-span-3 p-6 flex flex-col md:flex-row gap-6 group cursor-pointer">
<div className="md:w-2/3 relative aspect-[3/2] md:aspect-auto">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://img.lemde.fr/2026/02/13/0/0/7728/5152/664/442/75/0/390cd01_upload-1-uob60wju3anc-coriovallum-gameboard-plus-pieces.JPG"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
</div>
<div className="md:w-1/3 flex flex-col justify-center">
<div className="text-[var(--lm-dark)] uppercase text-xs font-bold tracking-widest mb-2">Récit</div>
<div className="text-gray-500 text-xs mb-3 font-medium">Florence Rosier</div>
<span className="inline-block mb-1 text-[var(--lm-yellow)]"><iconify-icon icon="solar:star-bold" width="14"></iconify-icon></span>
<h2 className="font-serif-lm font-bold text-2xl mb-3 leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">
                        La règle d’un jeu romain débloquée par l’IA
                    </h2>
<p className="text-gray-600 font-serif-lm text-base leading-relaxed mb-4">
                        Des chercheurs ont eu recours à des agents d’intelligence artificielle pour percer le secret d’un plateau en calcaire présenté au Musée Het Romeins à Heerlen.
                    </p>
<div className="text-xs text-gray-400 mt-auto">1 min de lecture</div>
</div>
</article>

<div className="md:col-span-1 p-4 bg-[#fcfcfd] border-l border-gray-200 flex flex-col justify-center items-center text-center">
<div className="border border-gray-200 p-4 w-full">
<p className="text-[var(--lm-blue)] font-bold text-xs uppercase mb-2 border-b-2 border-[var(--lm-blue)] inline-block pb-1">Boutique</p>
<h4 className="font-bold text-sm uppercase tracking-wide mb-1">Le Bilan du Monde 2026</h4>
<p className="font-serif-lm text-sm italic text-gray-600 mb-4">Géopolitique, Environnement et Economie</p>
<button className="bg-transparent border border-gray-300 text-gray-800 px-4 py-2 text-xs font-semibold hover:bg-gray-100 rounded transition">Acheter</button>
</div>
</div>
</section>

<section className="p-0">
<div className="border-b border-gray-200 py-3 px-4 md:px-6">
<h4 className="font-bold text-lg text-gray-900">Sélection de la rédaction</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200">

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 relative">
<img alt="" className="w-full aspect-[3/2] object-cover" src="https://img.lemde.fr/2025/07/17/0/0/5899/3933/664/442/75/0/34a307f_upload-1-onq6hia1fhkt-jmug250715047.jpg"/>
</div>
<div className="mb-1 text-xs font-bold uppercase text-gray-500 tracking-wider">Décryptage</div>
<span className="inline-block text-[var(--lm-yellow)] mr-1"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-lg leading-tight mb-2 group-hover:text-[var(--lm-blue)]">
                        Ces 13 335 millionnaires qui ne paient aucun impôt sur le revenu
                    </h3>
<p className="text-sm text-gray-600 font-serif-lm leading-relaxed">
                        Un document de Bercy confirme les déclarations de l’ancien ministre Eric Lombard. De quoi relancer le débat sur la fiscalité.
                    </p>
</article>

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 relative">
<img alt="" className="w-full aspect-[3/2] object-cover" src="https://img.lemde.fr/2026/02/11/0/0/3999/2666/664/442/75/0/cd3cef2_ftp-1-cz35semxdl38-ea17ada9268346d6b3e15df185a07cd8-0-9a87756559d64e99ab55de97e7073891.jpg"/>
</div>
<div className="mb-1 text-xs font-bold uppercase text-gray-500 tracking-wider">Décryptage</div>
<span className="inline-block text-[var(--lm-yellow)] mr-1"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-lg leading-tight mb-2 group-hover:text-[var(--lm-blue)]">
                        L’affaire Epstein déchire le monde MAGA et fragilise Donald Trump
                    </h3>
<p className="text-sm text-gray-600 font-serif-lm leading-relaxed">
                        Depuis la dernière publication d’archives sur le prédateur sexuel, des soutiens du président américain s’interrogent.
                    </p>
</article>

<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="mb-3 relative">
<img alt="" className="w-full aspect-[3/2] object-cover" src="https://img.lemde.fr/2026/02/18/329/0/1456/970/664/442/75/0/4580c4a_upload-1-rvaeeo0dv81u-1994-02-25t120000z-1273126566-pbeahungbca-rtrmadp-3-shahid.JPG"/>
</div>
<div className="mb-1 text-xs font-bold uppercase text-gray-500 tracking-wider">Les faits</div>
<span className="inline-block text-[var(--lm-yellow)] mr-1"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-lg leading-tight mb-2 group-hover:text-[var(--lm-blue)]">
                        Leïla Shahid, ancienne représentante de la Palestine en France, est morte
                    </h3>
<p className="text-sm text-gray-600 font-serif-lm leading-relaxed">
                        L’ancienne diplomate avait représenté son pays en France à partir de 1993 puis à Bruxelles.
                    </p>
</article>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200">

<div className="md:col-span-1 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 flex items-center justify-center md:justify-start">
<h4 className="font-bold text-2xl font-serif-lm text-[var(--lm-dark)]">Idées</h4>
</div>

<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Éditorial</div>
<h3 className="font-serif-lm font-bold text-xl leading-tight mb-3 text-[var(--lm-dark)] group-hover:text-[var(--lm-blue)]">
                        Exposition des Français au cadmium : la carence fautive de l’Etat
                    </h3>
<div className="text-xs font-bold text-[var(--lm-dark)]">Le Monde</div>
</article>
<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Chronique</div>
<span className="inline-block text-[var(--lm-yellow)] mb-1"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-lg leading-tight mb-3 text-[var(--lm-dark)] group-hover:text-[var(--lm-blue)]">
                        « Depuis dix ans, la droite républicaine est tiraillée entre le centre et l’extrême droite »
                    </h3>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://img.lemde.fr/2017/06/12/0/0/0/0/100/100/60/0/73f3cca_40.jpg"/>
</div>
<div>
<div className="text-xs font-bold text-[var(--lm-dark)]">Françoise Fressoz</div>
<div className="text-[10px] text-gray-500">Editorialiste</div>
</div>
</div>
</article>
<article className="p-4 group cursor-pointer hover:bg-gray-50">
<div className="text-[10px] uppercase font-bold text-gray-500 mb-2">Chronique</div>
<span className="inline-block text-[var(--lm-yellow)] mb-1"><iconify-icon icon="solar:star-bold" width="12"></iconify-icon></span>
<h3 className="font-serif-lm font-bold text-lg leading-tight mb-3 text-[var(--lm-dark)] group-hover:text-[var(--lm-blue)]">
                        Gaza : avec le Conseil de la paix de Donald Trump, « c’est comme si la mémoire de ce conflit avait été supprimée »
                    </h3>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://img.lemde.fr/2017/09/22/0/0/0/0/100/100/60/0/f2df5fa_237.jpg"/>
</div>
<div>
<div className="text-xs font-bold text-[var(--lm-dark)]">Gilles Paris</div>
<div className="text-[10px] text-gray-500">Editorialiste</div>
</div>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-gray-200">

<div className="lg:col-span-8 border-r border-gray-200">

<article className="flex flex-row-reverse p-4 border-b border-gray-100 group cursor-pointer hover:bg-gray-50">
<div className="w-[120px] ml-4 shrink-0">
<img alt="" className="w-full h-auto rounded-sm border border-gray-100" src="https://img.lemde.fr/2025/06/13/0/0/3000/2000/198/132/95/0/91e03c3_upload-1-bogydesh9pn1-frame-989.jpg"/>
</div>
<div className="flex-grow">
<h3 className="font-serif-lm font-bold text-lg leading-snug group-hover:text-[var(--lm-blue)]">
                            Katy Spicher assigne l’Etat pour déni de justice, 43 ans après le meurtre non élucidé de sa mère
                        </h3>
<div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
<span className="text-gray-500 font-medium">Société</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>14h02</span>
</div>
</div>
</article>

<article className="flex flex-row-reverse p-4 border-b border-gray-100 group cursor-pointer hover:bg-gray-50">
<div className="w-[120px] ml-4 shrink-0">
<img alt="" className="w-full h-auto rounded-sm border border-gray-100" src="https://img.lemde.fr/2026/02/18/43/0/1024/682/198/132/95/0/91afbb3_ftp-1-rgh0fmtv5fxy-5225733-01-06.jpg"/>
</div>
<div className="flex-grow">
<h3 className="font-serif-lm font-bold text-lg leading-snug group-hover:text-[var(--lm-blue)]">
                            Le chef du commandement militaire américain pour l’Amérique latine a visité le Venezuela et rencontré sa présidente
                        </h3>
<div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
<span className="text-gray-500 font-medium">International</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>13h45</span>
</div>
</div>
</article>

<article className="flex flex-row-reverse p-4 border-b border-gray-100 group cursor-pointer hover:bg-gray-50">
<div className="w-[120px] ml-4 shrink-0">
<img alt="" className="w-full h-auto rounded-sm border border-gray-100" src="https://img.lemde.fr/2026/01/20/1/0/8192/5461/198/132/95/0/133cdaa_ftp-1-is9iz8p0fyty-5936567-01-06.jpg"/>
</div>
<div className="flex-grow">
<h3 className="font-serif-lm font-bold text-lg leading-snug group-hover:text-[var(--lm-blue)]">
                            Le Sénat vote un nouveau régime de police environnementale des élevages
                        </h3>
<div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
<span className="text-gray-500 font-medium">Politique</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>13h30</span>
</div>
</div>
</article>
</div>

<div className="lg:col-span-4 bg-gray-50/50">
<div className="p-4 border-b border-gray-200">
<h4 className="font-bold text-lg">Les plus lus</h4>
</div>
<ol className="list-none">
<li className="border-b border-gray-200 last:border-0 relative group">
<a className="block p-4 pl-12 hover:bg-white transition-colors" href="#">
<span className="absolute left-4 top-4 text-3xl font-light text-gray-200 italic font-serif-lm group-hover:text-[var(--lm-yellow)] transition-colors">1</span>
<h5 className="text-base font-serif-lm leading-snug group-hover:text-[var(--lm-blue)]">Plus de 13 000 millionnaires ne paient aucun impôt sur le revenu, selon une note inédite de Bercy</h5>
</a>
</li>
<li className="border-b border-gray-200 last:border-0 relative group">
<a className="block p-4 pl-12 hover:bg-white transition-colors" href="#">
<span className="absolute left-4 top-4 text-3xl font-light text-gray-200 italic font-serif-lm group-hover:text-[var(--lm-yellow)] transition-colors">2</span>
<h5 className="text-base font-serif-lm leading-snug group-hover:text-[var(--lm-blue)]">L’affaire Epstein déchire le monde MAGA et fragilise Donald Trump</h5>
</a>
</li>
<li className="border-b border-gray-200 last:border-0 relative group">
<a className="block p-4 pl-12 hover:bg-white transition-colors" href="#">
<span className="absolute left-4 top-4 text-3xl font-light text-gray-200 italic font-serif-lm group-hover:text-[var(--lm-yellow)] transition-colors">3</span>
<h5 className="text-base font-serif-lm leading-snug group-hover:text-[var(--lm-blue)]">SCAF : Friedrich Merz estime que l’Allemagne « n’a pas besoin » du même avion de combat que la France</h5>
</a>
</li>
<li className="border-b border-gray-200 last:border-0 relative group">
<a className="block p-4 pl-12 hover:bg-white transition-colors" href="#">
<span className="absolute left-4 top-4 text-3xl font-light text-gray-200 italic font-serif-lm group-hover:text-[var(--lm-yellow)] transition-colors">4</span>
<h5 className="text-base font-serif-lm leading-snug group-hover:text-[var(--lm-blue)]">Leïla Shahid, ancienne représentante de la Palestine en France, est morte</h5>
</a>
</li>
<li className="border-b border-gray-200 last:border-0 relative group">
<a className="block p-4 pl-12 hover:bg-white transition-colors" href="#">
<span className="absolute left-4 top-4 text-3xl font-light text-gray-200 italic font-serif-lm group-hover:text-[var(--lm-yellow)] transition-colors">5</span>
<h5 className="text-base font-serif-lm leading-snug group-hover:text-[var(--lm-blue)]">Onze interpellations dans l’enquête sur la mort de Quentin Deranque, la Jeune Garde mise en cause</h5>
</a>
</li>
</ol>
</div>
</section>
</main>

<footer className="bg-[var(--lm-dark)] text-gray-400 text-sm mt-auto">
<div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

<div>
<h3 className="text-white font-bold uppercase text-xs tracking-wider mb-4 font-sans">Services Le Monde</h3>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Les ateliers du Monde</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mémorable</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mots croisés</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sudoku</a></li>
<li><a className="hover:text-white transition-colors" href="#">Résultats élections</a></li>
<li><a className="hover:text-white transition-colors" href="#">Archives</a></li>
<li><a className="hover:text-white transition-colors" href="#">Boutique</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-bold uppercase text-xs tracking-wider mb-4 font-sans">Guides d'achat</h3>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Meilleurs robots pâtissiers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meilleurs aspirateurs robots</a></li>
<li><a className="hover:text-white transition-colors" href="#">Imprimantes laser</a></li>
<li><a className="hover:text-white transition-colors" href="#">Jeux de société</a></li>
</ul>
</div>

<div>
<h3 className="text-white font-bold uppercase text-xs tracking-wider mb-4 font-sans">Sites du groupe</h3>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Courrier International</a></li>
<li><a className="hover:text-white transition-colors" href="#">Télérama</a></li>
<li><a className="hover:text-white transition-colors" href="#">La Vie</a></li>
<li><a className="hover:text-white transition-colors" href="#">Le HuffPost</a></li>
<li><a className="hover:text-white transition-colors" href="#">Le Monde Diplomatique</a></li>
<li><a className="hover:text-white transition-colors" href="#">Le Nouvel Obs</a></li>
</ul>
</div>

<div className="flex flex-col space-y-4">
<h3 className="text-white font-bold uppercase text-xs tracking-wider mb-2 font-sans">Newsletters</h3>
<a className="flex items-center justify-between bg-white text-[var(--lm-dark)] px-4 py-3 rounded font-medium hover:bg-gray-100 transition-colors" href="#">
<span>Recevoir les newsletters</span>
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<h3 className="text-white font-bold uppercase text-xs tracking-wider mb-2 mt-6 font-sans">Applications</h3>
<div className="flex space-x-2">
<a className="flex-1 bg-[#464f5f] hover:bg-[#565e70] text-center py-2 rounded text-white text-xs transition-colors" href="#">iPhone</a>
<a className="flex-1 bg-[#464f5f] hover:bg-[#565e70] text-center py-2 rounded text-white text-xs transition-colors" href="#">Android</a>
</div>
</div>
</div>
<div className="border-t border-[#464f5f] pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
<a className="hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-white" href="#">Charte du Groupe</a>
<a className="hover:text-white" href="#">Politique de confidentialité</a>
<a className="hover:text-white" href="#">Gestion des cookies</a>
<a className="hover:text-white" href="#">CGV</a>
<a className="hover:text-white" href="#">Aide (FAQ)</a>
</div>
<div className="flex items-center space-x-4">
<span className="uppercase tracking-widest text-[10px]">Suivez Le Monde</span>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:youtube-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
