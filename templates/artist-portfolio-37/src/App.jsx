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
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-xl border border-neutral-800/70 bg-neutral-900/60 px-3 py-3 backdrop-blur">

<a className="group inline-flex items-center gap-2" href="#accueil">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-100">
<span className="text-[10px] font-semibold tracking-tight">NOVA</span>
</div>
<span className="hidden text-sm font-medium tracking-tight text-neutral-300 group-hover:text-white sm:inline">Artiste</span>
</a>

<nav className="mx-2 hidden items-center gap-2 md:flex">
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#accueil">Accueil</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#portfolio">Portfolio</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#dates">Dates</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#apropos">À propos</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#musique">Musique</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#boutique">Boutique</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:outline hover:outline-1 hover:outline-neutral-700" href="#bandcamp">Bandcamp</a>
</nav>

<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-white hover:shadow-sm" href="#contact">

<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
              Booking
            </a>
</div>
</div>
</div>
</header>
<main className="pt-28 sm:pt-32" id="accueil">

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl border border-neutral-800">
<img alt="Performance scénique" className="h-[56vh] w-full object-cover sm:h-[62vh]" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
<div className="max-w-3xl">
<h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Musiques immersives entre électronique et acoustique.</h1>
<p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">NOVA est une artiste pluridisciplinaire: live sets, compositions originales, performances audiovisuelles.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 hover:shadow-sm" href="#musique">

<svg className="h-4 w-4" fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                    Écouter maintenant
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-100 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700" href="#dates">

<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Voir les dates
                  </a>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between rounded-xl border border-neutral-800 px-4 py-3">
<p className="text-xs text-neutral-400">Suivre NOVA</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
                Spotify
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="currentColor" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                YouTube
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                Bandcamp
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M14.31 8l5.74 9.94"></path>
<path d="M9.69 8h11.48"></path>
<path d="M7.38 12l5.74-9.94"></path>
<path d="M9.69 16L3.95 6.06"></path>
<path d="M14.31 16H2.83"></path>
</svg>
                Instagram
              </a>
</div>
</div>
</div>
</section>

<section className="relative mt-14 scroll-mt-24" id="portfolio">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Portfolio</h2>
<p className="mt-1 text-sm text-neutral-400">Présentations visuelles, extraits de performances et clips.</p>
</div>
<a className="hidden items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white md:inline-flex" href="#musique">
              Tout voir
              
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
<figure className="group relative overflow-hidden rounded-xl border border-neutral-800">
<img alt="Studio session" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-neutral-950/80 to-transparent p-4">
<div>
<p className="text-sm font-medium">Studio session</p>
<p className="text-xs text-neutral-400">Textures et synthés modulaires</p>
</div>
<span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[10px] text-neutral-300">Photo</span>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-xl border border-neutral-800">
<img alt="Live performance" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-neutral-950/80 to-transparent p-4">
<div>
<p className="text-sm font-medium">Live performance</p>
<p className="text-xs text-neutral-400">Festival — scène principale</p>
</div>
<span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[10px] text-neutral-300">Performance</span>
</figcaption>
</figure>
<figure className="group relative overflow-hidden rounded-xl border border-neutral-800">
<img alt="Clip vidéo" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-neutral-950/80 to-transparent p-4">
<div>
<p className="text-sm font-medium">Clip vidéo</p>
<p className="text-xs text-neutral-400">Réalisé par le collectif LUX</p>
</div>
<span className="rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-[10px] text-neutral-300">Clip</span>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative mt-16 scroll-mt-24" id="dates">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight">Prochaines dates de concert</h2>
<p className="mt-1 text-sm text-neutral-400">Tournée 2025 — réservez vos billets.</p>
<div className="mt-6 divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800">

<div className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 flex-col items-center justify-center rounded-md border border-neutral-800 bg-neutral-900">
<span className="text-sm font-semibold tracking-tight">12</span>
<span className="text-[10px] text-neutral-400">DEC</span>
</div>
<div>
<p className="text-sm font-medium">Le Trianon — Paris, FR</p>
<p className="text-xs text-neutral-400">Avec invité spécial</p>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
                  Billets
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                  iCal
                </a>
</div>
</div>

<div className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 flex-col items-center justify-center rounded-md border border-neutral-800 bg-neutral-900">
<span className="text-sm font-semibold tracking-tight">28</span>
<span className="text-[10px] text-neutral-400">JAN</span>
</div>
<div>
<p className="text-sm font-medium">AB — Bruxelles, BE</p>
<p className="text-xs text-neutral-400">Showcase album</p>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
                  Billets
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                  iCal
                </a>
</div>
</div>

<div className="flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 flex-col items-center justify-center rounded-md border border-neutral-800 bg-neutral-900">
<span className="text-sm font-semibold tracking-tight">15</span>
<span className="text-[10px] text-neutral-400">MAR</span>
</div>
<div>
<p className="text-sm font-medium">Elbphilharmonie — Hambourg, DE</p>
<p className="text-xs text-neutral-400">AV set</p>
</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
                  Billets
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                  iCal
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16 scroll-mt-24" id="apropos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
<div className="overflow-hidden rounded-2xl border border-neutral-800">
<img alt="Portrait de l'artiste" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight">À propos</h2>
<p className="mt-3 text-sm leading-relaxed text-neutral-300">NOVA est une compositrice, productrice et performeuse basée entre Paris et Berlin. Son univers marie rythmiques organiques, textures granuleuses et mélodies cinématiques.</p>
<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Parcours musical</p>
<p className="mt-1 text-sm text-neutral-400">Conservatoire (piano, harmonie), sound design, résidences artistiques, tournées européennes.</p>
</div>
<div className="rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Influences</p>
<p className="mt-1 text-sm text-neutral-400">Electronica, ambient, bass music, minimalisme, musiques de films.</p>
</div>
<div className="rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Projets</p>
<p className="mt-1 text-sm text-neutral-400">Album “Noctiluca”, EP collaboratif, bande originale pour court-métrage, installation immersive.</p>
</div>
<div className="rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Presse</p>
<p className="mt-1 text-sm text-neutral-400">Sélection “Découverte” — radios indé, playlists éditoriales, critiques spécialisées.</p>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#contact">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 6-10 7L2 6"></path>
</svg>
                  Bio complète (PDF)
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" href="#musique">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
                  Musique &amp; Vidéos
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16 scroll-mt-24" id="musique">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Musique</h2>
<p className="mt-1 text-sm text-neutral-400">Écoutez des extraits, regardez les clips et retrouvez les plateformes.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#boutique">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
                Boutique
              </a>
</div>
</div>

<div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-neutral-800 p-4 hover:border-neutral-700">
<div className="flex items-center gap-3">
<img alt="Artwork Noctiluca" className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">Noctiluca</p>
<p className="text-xs text-neutral-400">Single — 3:42</p>
</div>
</div>
<div className="mt-3 rounded-lg border border-neutral-800 p-3">
<audio className="w-full" controls="">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
</audio>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  Bandcamp
                </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                  Acheter 1,29€
                </a>
</div>
</div>

<div className="group rounded-xl border border-neutral-800 p-4 hover:border-neutral-700">
<div className="flex items-center gap-3">
<img alt="Artwork Tidal Forms" className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Tidal Forms</p>
<p className="text-xs text-neutral-400">EP — 5 titres</p>
</div>
</div>
<div className="mt-3 rounded-lg border border-neutral-800 p-3">
<audio className="w-full" controls="">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg"/>
</audio>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  Bandcamp
                </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                  Acheter 4,99€
                </a>
</div>
</div>

<div className="group rounded-xl border border-neutral-800 p-4 hover:border-neutral-700">
<div className="flex items-center gap-3">
<img alt="Artwork Echoes" className="h-14 w-14 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">Echoes</p>
<p className="text-xs text-neutral-400">Single — 4:10</p>
</div>
</div>
<div className="mt-3 rounded-lg border border-neutral-800 p-3">
<audio className="w-full" controls="">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg"/>
</audio>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  Bandcamp
                </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                  Acheter 1,29€
                </a>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
<div className="overflow-hidden rounded-xl border border-neutral-800">
<div className="aspect-video w-full">
<iframe allow="autoplay; fullscreen; picture-in-picture" className="h-full w-full" src="https://player.vimeo.com/video/76979871?h=8272103f6e&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<div className="flex items-center justify-between p-4">
<div>
<p className="text-sm font-medium">Performance live — extrait</p>
<p className="text-xs text-neutral-400">Lecteur intégré (Vimeo)</p>
</div>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  YouTube
                </a>
</div>
</div>
<div className="rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Liens vers les plateformes</p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                  Spotify
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                  YouTube
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  Bandcamp
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m4 12 16-8"></path>
<circle cx="20" cy="14" r="2"></circle>
<path d="M4 20h16v-6L4 20Z"></path>
</svg>
                  Apple Music
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6c3 0 3 6 6 6s3-6 6-6 3 6 6 6"></path>
<path d="M2 18c3 0 3-6 6-6s3 6 6 6 3-6 6-6"></path>
</svg>
                  Deezer
                </a>
</div>
<div className="mt-4 rounded-lg border border-neutral-800 p-3">
<p className="text-xs text-neutral-400">Téléchargement ou achat direct</p>
<div className="mt-2 flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                    Payer par carte
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#checkout">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="6"></rect>
<circle cx="12" cy="12" r="3"></circle>
<path d="M18 6a3 3 0 0 1-3 3"></path>
<path d="M6 18a3 3 0 0 1 3-3"></path>
</svg>
                    PayPal
                  </a>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-xl border border-neutral-800 p-5" id="bandcamp">
<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
<div>
<p className="text-sm font-medium">Page Bandcamp liée au site</p>
<p className="mt-1 text-sm text-neutral-400">Ventes directes, versions digitales, merch et cassettes.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" href="#">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                Visiter la page Bandcamp
              </a>
</div>
</div>
</div>
</section>

<section className="relative mt-16 scroll-mt-24" id="boutique">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight">Boutique</h2>
<p className="mt-1 text-sm text-neutral-400">Vendre musique et produits dérivés directement.</p>
</div>
<p className="text-xs text-neutral-500">Paiements par carte et PayPal</p>
</div>
<div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col overflow-hidden rounded-xl border border-neutral-800">
<img alt="Album Noctiluca" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-1 flex-col p-4">
<p className="text-sm font-medium">Album — Noctiluca</p>
<p className="mt-1 text-xs text-neutral-400">Digital (WAV/MP3) + livret PDF</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold text-white">9,99€</span>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                      Carte
                    </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#checkout">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="6"></rect>
<circle cx="12" cy="12" r="3"></circle>
<path d="M18 6a3 3 0 0 1-3 3"></path>
<path d="M6 18a3 3 0 0 1 3-3"></path>
</svg>
                      PayPal
                    </a>
</div>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden rounded-xl border border-neutral-800">
<img alt="EP Tidal Forms" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-1 flex-col p-4">
<p className="text-sm font-medium">EP — Tidal Forms</p>
<p className="mt-1 text-xs text-neutral-400">Digital (MP3) + bonus track</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold text-white">4,99€</span>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                      Carte
                    </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="6"></rect>
<circle cx="12" cy="12" r="3"></circle>
<path d="M18 6a3 3 0 0 1-3 3"></path>
<path d="M6 18a3 3 0 0 1 3-3"></path>
</svg>
                      PayPal
                    </a>
</div>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden rounded-xl border border-neutral-800">
<img alt="T-shirt NOVA" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex flex-1 flex-col p-4">
<p className="text-sm font-medium">T-shirt — NOVA Logo</p>
<p className="mt-1 text-xs text-neutral-400">Coton bio noir — S à XL</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm font-semibold text-white">24,00€</span>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-neutral-100" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                      Carte
                    </a>
<a className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#checkout">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="6"></rect>
<circle cx="12" cy="12" r="3"></circle>
<path d="M18 6a3 3 0 0 1-3 3"></path>
<path d="M6 18a3 3 0 0 1 3-3"></path>
</svg>
                      PayPal
                    </a>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-xl border border-neutral-800 p-4">
<ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
<li className="flex items-center gap-2 text-xs text-neutral-400">

<svg className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Téléchargement instantané (MP3/WAV)
              </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Paiements sécurisés
              </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="h-3.5 w-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Reçus et liens par email
              </li>
</ul>
</div>
</div>
</section>

<section className="relative mt-16 scroll-mt-24" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="rounded-2xl border border-neutral-800 p-6">
<h3 className="text-xl font-semibold tracking-tight">Booking / Contact professionnel</h3>
<p className="mt-2 text-sm text-neutral-400">Demandes de concerts, résidences, collaborations, synchronisations.</p>
<div className="mt-5 space-y-3">
<div className="flex items-center gap-3">

<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 6-10 7L2 6"></path>
</svg>
<a className="text-sm text-neutral-300 hover:text-white" href="mailto:booking@nova.art">booking@nova.art</a>
</div>
<div className="flex items-center gap-3">

<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.42 19.42 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.42 19.42 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.31 1.6.57 2.36a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 6 6l1.8-1.23a2 2 0 0 1 2.11-.45c.76.26 1.55.45 2.36.57A2 2 0 0 1 22 16.92z"></path>
</svg>
<a className="text-sm text-neutral-300 hover:text-white" href="tel:+33123456789">+33 1 23 45 67 89</a>
</div>
<div className="flex items-center gap-3">

<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<p className="text-sm text-neutral-300">Paris / Berlin</p>
</div>
</div>
<div className="mt-6 rounded-xl border border-neutral-800 p-4">
<p className="text-sm font-medium">Documents de booking</p>
<div className="mt-3 space-y-2">
<a className="flex items-center justify-between rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<span>Fiche technique (PDF)</span>

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</a>
<a className="flex items-center justify-between rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<span>Dossier de presse (PDF)</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</a>
<a className="flex items-center justify-between rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">
<span>Rider hospitalité (PDF)</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</a>
</div>
</div>
</div>

<div className="lg:col-span-2">
<form action="#" className="rounded-2xl border border-neutral-800 p-6" method="post">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="text-xs text-neutral-400">Nom complet</label>
<input className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Email</label>
<input className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="vous@domaine.com" type="email"/>
</div>
<div>
<label className="text-xs text-neutral-400">Société / Organisation</label>
<input className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Agence, salle, label..." type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Objet</label>
<input className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Booking, collaboration..." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Message</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700" placeholder="Détaillez votre demande (dates, lieu, conditions...)" rows="6"></textarea>
</div>
</div>
<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
<p className="text-xs text-neutral-500">Réponse sous 48h — dossier complet envoyé sur demande.</p>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" type="submit">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path>
<path d="M22 2 15 22 11 13 2 9l20-7z"></path>
</svg>
                    Envoyer
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="relative mt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-800 p-6">
<div className="flex flex-wrap items-center justify-between gap-4">
<div>
<p className="text-sm font-medium">Réseaux sociaux</p>
<p className="mt-1 text-xs text-neutral-400">Suivez l’actualité, les coulisses et les annonces.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M14.31 8l5.74 9.94"></path>
<path d="M9.69 8h11.48"></path>
</svg>
                  Instagram
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path>
<path d="M22 2 15 22 11 13 2 9l20-7z"></path>
</svg>
                  Twitter/X
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11h18v10H3z"></path>
<path d="M3 7h18v4H3z"></path>
<path d="M8 7l2-3 2 3 2-3 2 3"></path>
</svg>
                  YouTube
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
<polyline points="15 3 21 3 21 9"></polyline>
<line x1="10" x2="21" y1="14" y2="3"></line>
</svg>
                  Bandcamp
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 1 7 7l-3 3"></path>
<path d="M14 11a5 5 0 0 1-7-7l3-3"></path>
</svg>
                  Linktree
                </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative mt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-800 p-6">
<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900">
<span className="text-[10px] font-semibold tracking-tight">NOVA</span>
</div>
<div>
<p className="text-sm font-medium">NOVA — Artiste</p>
<p className="text-xs text-neutral-500">© 2025 — Tous droits réservés</p>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-400 hover:text-white" href="#apropos">À propos</a>
<a className="text-xs text-neutral-400 hover:text-white" href="#musique">Musique</a>
<a className="text-xs text-neutral-400 hover:text-white" href="#boutique">Boutique</a>
<a className="text-xs text-neutral-400 hover:text-white" href="#contact">Booking</a>
</div>
</div>
</div>
<div className="h-8"></div>
</div>
</footer>
</main>

    </>
  );
}
