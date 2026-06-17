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
      

<header className="relative isolate overflow-hidden">
<div className="relative h-screen min-h-[600px] w-full overflow-hidden" id="hero">
<div aria-hidden="false" className="hero-slide absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-out opacity-100" data-index="0" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(\'https: //images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp', transform: 'scale(1)'}}></div>
<div aria-hidden="true" className="hero-slide absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-out opacity-0" data-index="1" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(\'https: //images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp', transform: 'scale(1.05)'}}></div>
<div aria-hidden="true" className="hero-slide absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-out opacity-0" data-index="2" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(\'https: //images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&amp', transform: 'scale(1.05)'}}></div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent from-black/40 to-black/80"></div>
<nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between">
<a className="inline-flex items-center gap-2.5 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                  CEL
                </span>
</a>
<div className="hidden md:flex items-center gap-1 rounded-full backdrop-blur-xl px-2 py-2 border bg-white/5 border-white/10">
<a className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-neutral-300 hover:text-white hover:bg-white/5" href="#evenements">
                  Événements
                </a>
<a className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-neutral-300 hover:text-white hover:bg-white/5" href="#avantages">
                  Avantages
                </a>
<a className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-neutral-300 hover:text-white hover:bg-white/5" href="#avis">
                  Avis
                </a>
<a className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 text-neutral-300 hover:text-white hover:bg-white/5" href="#contact">
                  Contact
                </a>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 from-cyan-600 via-indigo-600 to-blue-600 text-white" href="#contact">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                Nous contacter
              </a>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl backdrop-blur-xl border transition-all duration-200 bg-white/5 border-white/10 hover:bg-white/10" id="mobileMenuBtn">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
<div className="hidden md:hidden mt-4 mx-auto max-w-7xl" id="mobileMenu">
<div className="rounded-2xl backdrop-blur-xl border p-2 shadow-2xl bg-black/60 border-white/10">
<a className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-neutral-200 hover:bg-white/5 hover:text-white" href="#evenements">
                Événements
              </a>
<a className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-neutral-200 hover:bg-white/5 hover:text-white" href="#avantages">
                Avantages
              </a>
<a className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-neutral-200 hover:bg-white/5 hover:text-white" href="#avis">
                Avis
              </a>
<a className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-neutral-200 hover:bg-white/5 hover:text-white" href="#contact">
                Contact
              </a>
<div className="my-2 h-px bg-white/10"></div>
<a className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r px-4 py-3 text-sm font-medium shadow-lg from-cyan-600 via-indigo-600 to-blue-600 text-white" href="#contact">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                Nous contacter
              </a>
</div>
</div>
</nav>
<div className="absolute inset-0 flex items-center">
<div className="mx-auto max-w-7xl px-4 w-full">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-4 py-2 mb-6 border animate-fade-in bg-white/10 border-white/20">
<span className="w-2 h-2 rounded-full animate-pulse bg-indigo-400"></span>
<span className="text-sm font-medium text-white">
                  Dernier événement : Festival Lumières 2024
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none text-white" style={{textShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
                Créateurs
                
                d'expériences
                
                <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 via-indigo-400 to-blue-400">
                  inoubliables
                </span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-neutral-200">
                Nous concevons et produisons des événements immersifs qui
                marquent les esprits et créent des souvenirs mémorables.
              </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3.5 text-base font-medium shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 from-cyan-600 via-indigo-600 to-blue-600 text-white" href="#evenements">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Découvrir nos événements
                </a>
<a className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm px-6 py-3.5 text-base font-medium border hover:scale-105 transition-all duration-300 bg-white/10 text-white border-white/20 hover:bg-white/20" href="#contact">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                  Demander un devis
                </a>
</div>
</div>
</div>
</div>
<button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-sm border flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl bg-white/10 border-white/20 text-white hover:bg-white/20" id="prevBtn">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-sm border flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl bg-white/10 border-white/20 text-white hover:bg-white/20" id="nextBtn">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
<button aria-label="Slide 1" className="dot w-3 h-3 rounded-full shadow-lg transition-all duration-300 bg-white" data-to="0"></button>
<button aria-label="Slide 2" className="dot w-3 h-3 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50" data-to="1"></button>
<button aria-label="Slide 3" className="dot w-3 h-3 rounded-full transition-all duration-300 bg-white/30 hover:bg-white/50" data-to="2"></button>
</div>
</div>
</header>

<section className="relative py-24 md:py-32 bg-gradient-to-b from-black via-neutral-950 to-black" id="avantages">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent_50%)]"></div>
<div className="mx-auto max-w-7xl px-4 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-blue-500/10 border border-indigo-500/20 px-4 py-2 mb-6">
<svg className="w-4 h-4 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m15 5-3-3-3 3"></path>
<path d="m15 19 3-3-3-3"></path>
</svg>
<span className="text-sm font-medium text-indigo-300">
              Pourquoi nous choisir
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Ce qui nous rend
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 via-indigo-400 to-blue-400">
              parfaits
            </span>
</h2>
<p className="text-lg leading-relaxed text-neutral-300">
            Une expertise complète pour transformer vos idées en événements
            exceptionnels qui captivent et inspirent votre audience.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Créativité Sans Limites
              </h3>
<p className="leading-relaxed text-neutral-400">
                Des concepts innovants et une direction artistique unique pour
                créer des expériences mémorables et différenciantes.
              </p>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Exécution Parfaite
              </h3>
<p className="leading-relaxed text-neutral-400">
                Une coordination technique irréprochable et une attention aux
                détails pour garantir le succès de chaque événement.
              </p>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-rose-500/0 group-hover:from-blue-500/5 group-hover:to-rose-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-rose-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-pink-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Accompagnement Complet
              </h3>
<p className="leading-relaxed text-neutral-400">
                Un suivi personnalisé de A à Z, de la conception initiale
                jusqu'au débriefing post-événement.
              </p>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-violet-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Technologies Immersives
              </h3>
<p className="leading-relaxed text-neutral-400">
                Mapping vidéo, son spatialisé, éclairages dynamiques et
                installations interactives de dernière génération.
              </p>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m15 5-3-3-3 3"></path>
<path d="m15 19 3-3-3-3"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Réseau d'Excellence
              </h3>
<p className="leading-relaxed text-neutral-400">
                Des partenariats avec les meilleurs prestataires et artistes
                pour des prestations haut de gamme.
              </p>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 from-neutral-900/50 to-neutral-900/30 border-white/10">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-rose-500/0 group-hover:from-blue-500/5 group-hover:to-rose-500/5 transition-all duration-500"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-rose-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
<svg className="w-7 h-7 text-pink-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                Satisfaction Garantie
              </h3>
<p className="leading-relaxed text-neutral-400">
                Plus de 150 événements réussis et un taux de satisfaction client
                de 98% sur les 3 dernières années.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 bg-black" id="evenements">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.08),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.08),transparent_50%)]"></div>
<div className="mx-auto max-w-7xl px-4 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-blue-500/10 border border-indigo-500/20 px-4 py-2 mb-6">
<svg className="w-4 h-4 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="text-sm font-medium text-indigo-300">
              Nos réalisations 2024
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Événements de
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 via-indigo-400 to-blue-400">
              l'année
            </span>
</h2>
<p className="text-lg leading-relaxed text-neutral-300">
            Découvrez nos dernières créations qui ont marqué 2024 et captivé des
            milliers de participants.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
<article className="md:col-span-8 group relative rounded-3xl overflow-hidden border hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 bg-neutral-900 border-white/10">
<div className="aspect-[16/9] overflow-hidden relative">
<img alt="Festival Lumières 2024" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60 from-black via-black/20"></div>
<div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-indigo-500 px-3 py-1.5 text-xs font-medium shadow-lg text-white">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white"></span>
                Nouveau
              </div>
</div>
<div className="p-6 md:p-8">
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-xs font-medium text-cyan-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Décembre 2024
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 text-xs font-medium text-indigo-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                  12 000 visiteurs
                </span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight text-white">
                Festival Lumières 2024
              </h3>
<p className="leading-relaxed mb-4 text-neutral-300">
                Un parcours urbain immersif mêlant installations lumineuses,
                mapping architectural et performances live. Une expérience
                nocturne magique qui a transformé la ville.
              </p>
<div className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all duration-300 text-indigo-400">
<span className="text-sm">Voir le projet</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</article>
<article className="md:col-span-4 group relative rounded-3xl overflow-hidden border hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 bg-neutral-900 border-white/10">
<div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden relative">
<img alt="Gala Innovation" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 px-2.5 py-1 text-xs font-medium text-cyan-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Oct. 2024
                </span>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-white">
                Gala Innovation Tech
              </h3>
<p className="text-sm leading-relaxed mb-3 text-neutral-200">
                Soirée de gala corporate avec scénographie futuriste et
                performances audiovisuelles.
              </p>
<div className="flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all duration-300 text-cyan-400">
<span>Découvrir</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</article>
<article className="md:col-span-4 group relative rounded-3xl overflow-hidden border hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 bg-neutral-900 border-white/10">
<div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden relative">
<img alt="Concert Immersif" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1514517220017-8b0e0a1a4e96?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-2.5 py-1 text-xs font-medium text-blue-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Sept. 2024
                </span>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-white">
                Concert 360° Immersif
              </h3>
<p className="text-sm leading-relaxed mb-3 text-neutral-200">
                Expérience musicale avec son spatialisé et projections
                panoramiques.
              </p>
<div className="flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all duration-300 text-blue-400">
<span>Découvrir</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</article>
<article className="md:col-span-4 group relative rounded-3xl overflow-hidden border hover:border-indigo-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 bg-neutral-900 border-white/10">
<div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden relative">
<img alt="Exposition Interactive" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-500/30 px-2.5 py-1 text-xs font-medium text-indigo-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Juil. 2024
                </span>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-white">
                Expo Art Numérique
              </h3>
<p className="text-sm leading-relaxed mb-3 text-neutral-200">
                Installation interactive mêlant art contemporain et technologies
                immersives.
              </p>
<div className="flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all duration-300 text-indigo-400">
<span>Découvrir</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</article>
<article className="md:col-span-4 group relative rounded-3xl overflow-hidden border hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 bg-neutral-900 border-white/10">
<div className="aspect-[4/5] md:aspect-auto md:h-full overflow-hidden relative">
<img alt="Lancement Produit" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 px-2.5 py-1 text-xs font-medium text-cyan-300">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Juin 2024
                </span>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-white">
                Lancement Produit XR
              </h3>
<p className="text-sm leading-relaxed mb-3 text-neutral-200">
                Reveal spectaculaire avec mapping vidéo et chorégraphie
                lumineuse synchronisée.
              </p>
<div className="flex items-center gap-2 font-medium text-sm group-hover:gap-3 transition-all duration-300 text-cyan-400">
<span>Découvrir</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 bg-gradient-to-b overflow-hidden from-black via-neutral-950 to-black" id="avis">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_70%)]"></div>
<div className="mx-auto max-w-7xl px-4 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-blue-500/10 border border-indigo-500/20 px-4 py-2 mb-6">
<svg className="w-4 h-4 text-fuchsia-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
<span className="text-sm font-medium text-indigo-300">
              Témoignages clients
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Ce qu'ils disent
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 via-indigo-400 to-blue-400">
              de nous
            </span>
</h2>
<p className="text-lg leading-relaxed text-neutral-300">
            La satisfaction de nos clients et participants est notre plus belle
            récompense.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 from-neutral-900/60 to-neutral-900/40 border-white/10">
<div className="absolute top-6 right-6 group-hover:text-cyan-400/30 transition-colors duration-500 text-cyan-400/20">
<svg fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8H7v6h3V8zm6 0h-3v6h3V8z"></path>
</svg>
</div>
<div className="relative">
<div className="flex items-center gap-1 mb-4">
<svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="leading-relaxed mb-6 italic text-neutral-200">
                « Une équipe exceptionnelle qui a su transformer notre vision en
                une expérience immersive inoubliable. Le Festival Lumières a
                dépassé toutes nos attentes. »
              </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center font-semibold text-lg text-white">
                  MC
                </div>
<div>
<div className="font-semibold text-white">Marie Courtois</div>
<div className="text-sm text-neutral-400">
                    Directrice Culture, Ville de Lyon
                  </div>
</div>
</div>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 from-neutral-900/60 to-neutral-900/40 border-white/10">
<div className="absolute top-6 right-6 group-hover:text-indigo-400/30 transition-colors duration-500 text-indigo-400/20">
<svg fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8H7v6h3V8zm6 0h-3v6h3V8z"></path>
</svg>
</div>
<div className="relative">
<div className="flex items-center gap-1 mb-4">
<svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="leading-relaxed mb-6 italic text-neutral-200">
                « Professionnalisme, créativité et exécution parfaite. Notre
                gala corporate a été un succès retentissant grâce à leur
                expertise. »
              </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center font-semibold text-lg text-white">
                  TD
                </div>
<div>
<div className="font-semibold text-white">Thomas Dubois</div>
<div className="text-sm text-neutral-400">
                    CEO, TechVision Group
                  </div>
</div>
</div>
</div>
</div>
<div className="group relative rounded-3xl bg-gradient-to-br backdrop-blur-sm border p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 from-neutral-900/60 to-neutral-900/40 border-white/10">
<div className="absolute top-6 right-6 group-hover:text-blue-400/30 transition-colors duration-500 text-blue-400/20">
<svg fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8H7v6h3V8zm6 0h-3v6h3V8z"></path>
</svg>
</div>
<div className="relative">
<div className="flex items-center gap-1 mb-4">
<svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="text-fuchsia-400" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="leading-relaxed mb-6 italic text-neutral-200">
                « L'expérience concert 360° était absolument époustouflante. Une
                immersion totale qui a créé des souvenirs impérissables pour nos
                5000 spectateurs. »
              </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-rose-500 flex items-center justify-center font-semibold text-lg text-white">
                  SL
                </div>
<div>
<div className="font-semibold text-white">Sophie Laurent</div>
<div className="text-sm text-neutral-400">
                    Productrice, Harmonic Events
                  </div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r backdrop-blur-sm border from-neutral-900/60 to-neutral-900/40 border-white/10">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                98%
              </div>
<div className="text-sm text-neutral-400">Satisfaction</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                150+
              </div>
<div className="text-sm text-neutral-400">Événements</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                200K+
              </div>
<div className="text-sm text-neutral-400">Participants</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black">
<div className="mx-auto max-w-7xl px-4 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</div>
<div>
<div className="font-semibold tracking-tight text-white">
                Concept Événements Loisirs
              </div>
<div className="text-xs text-neutral-500">
                Créateurs d'expériences inoubliables
              </div>
</div>
</div>
<div className="flex items-center gap-6">
<a className="text-sm transition-colors duration-200 text-neutral-400 hover:text-white" href="#">
              Mentions légales
            </a>
<a className="text-sm transition-colors duration-200 text-neutral-400 hover:text-white" href="#">
              Confidentialité
            </a>
<a className="text-sm transition-colors duration-200 text-neutral-400 hover:text-white" href="#">
              Cookies
            </a>
</div>
</div>
<div className="mt-8 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 border-white/5">
<p className="text-sm text-neutral-500 text-center md:text-left">
            © 2024 CEL. Tous droits réservés.
          </p>
<div className="flex items-center gap-4">
<a className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10 text-neutral-400 hover:text-white" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10 text-neutral-400 hover:text-white" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
</svg>
</a>
<a className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-white/10 border-white/10 text-neutral-400 hover:text-white" href="#">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
