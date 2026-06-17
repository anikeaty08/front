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
      

<nav className="fixed w-full z-50 top-0 border-b backdrop-blur-md border-white/5 bg-slate-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-red-500 group-hover:rotate-45 transition-transform duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:compass" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
<span className="text-sm font-semibold tracking-widest uppercase text-white">Leader Aventure</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="transition-colors hover:text-white" href="#expertise">Expertise</a>
<a className="transition-colors hover:text-white" href="#formations">Formations Pro</a>
<a className="transition-colors hover:text-white" href="#stages">Stages Loisirs</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-medium transition-all bg-white/5 hover:bg-white/10 border-white/10 text-white" href="#contact">
                Réserver une session
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative md:pt-48 md:pb-32 pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Land Rover Defender Offroad" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&amp;w=2159&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>

<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/20 backdrop-blur-sm text-xs font-medium mb-8 text-red-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                École de pilotage 4x4 &amp; Tout-Terrain
            </div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-semibold text-white tracking-tight mb-6 drop-shadow-2xl">
                Maîtrisez <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-400 from-white via-slate-200">l'imprévisible.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-300 max-w-3xl mr-auto mb-10 ml-auto drop-shadow-md">
                Formation professionnelle et stages de pilotage haute technicité. 
                Une approche pédagogique rigoureuse pour dompter tous les terrains en sécurité.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 hover:bg-red-500 text-sm font-medium rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2 bg-red-600 text-white border border-transparent" href="#formations">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                    Nos Formations
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 bg-slate-950/50 hover:bg-slate-900/80 backdrop-blur-sm border-slate-600 hover:border-slate-500 text-white" href="#contact">
                    Nous Contacter
                </a>
</div>
</div>

<div className="border-y z-10 bg-slate-950/60 border-white/5 mt-20 relative backdrop-blur-md">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 gap-x-8 gap-y-8">
<div className="flex flex-col items-center justify-center text-center gap-1">
<svg aria-hidden="true" className="iconify text-slate-400 mb-2 iconify--lucide" data-icon="lucide:award" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<span className="text-2xl font-semibold tracking-tight text-white">BPJEPS</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Instructeurs Diplômés</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<svg aria-hidden="true" className="iconify text-slate-400 mb-2 iconify--lucide" data-icon="lucide:map" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white">50ha</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Terrain Privé</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<svg aria-hidden="true" className="iconify text-slate-400 mb-2 iconify--lucide" data-icon="lucide:briefcase" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
<span className="text-2xl font-semibold tracking-tight text-white">Pro</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Certification Entreprise</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-1">
<svg aria-hidden="true" className="iconify text-slate-400 mb-2 iconify--lucide" data-icon="lucide:gauge" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white">100%</span>
<span className="text-xs text-slate-400 uppercase tracking-wider">Technique &amp; Sécurité</span>
</div>
</div>
</div>
</header>

<section className="pt-0 pb-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Nos pôles d'activité</h2>
<div className="h-1 w-20 rounded-full bg-red-600"></div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative border rounded-2xl p-8 transition-all duration-300 overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700" id="formations">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100 bg-red-900/10"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border text-red-500 bg-slate-800 border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-white">Formation Professionnelle</h3>
<p className="mb-6 leading-relaxed text-slate-400">
                            Destiné aux entreprises et institutions nécessitant une maîtrise parfaite du véhicule tout-terrain en milieu hostile ou difficile.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Sécurité et prévention des risques
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Optimisation de la flotte véhicule
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Franchissement technique avancé
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium transition-colors text-white hover:text-red-400" href="#contact">
                            Demander un devis <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group relative border rounded-2xl p-8 transition-all duration-300 overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700" id="stages">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100 bg-orange-900/10"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border text-orange-500 bg-slate-800 border-slate-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mountain-snow" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m8 3l4 8l5-5l5 15H2z"></path><path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-white">Stages de Pilotage</h3>
<p className="mb-6 leading-relaxed text-slate-400">
                            Pour les passionnés d'aventure. Découvrez les capacités de votre véhicule ou de nos 4x4 préparés sur des parcours dédiés.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Initiation &amp; Perfectionnement
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Conduite sur sable, boue et rocher
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Baptêmes sensations fortes
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium transition-colors text-white hover:text-orange-400" href="#contact">
                            Réserver une date <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-slate-900/30 border-white/5" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Pourquoi choisir Leader Aventure ?</h2>
<p className="leading-relaxed mb-8 text-slate-400">
                        Nous ne vendons pas seulement des stages, nous transmettons un savoir-faire. Notre priorité est la sécurité alliée à la performance.
                    </p>
<a className="px-5 py-2.5 text-sm font-medium rounded transition-colors bg-white text-slate-950 hover:bg-slate-200" href="#contact">
                        Discuter de votre projet
                    </a>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="mt-1 text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div>
<h4 className="font-medium mb-2 text-white">Encadrement Certifié</h4>
<p className="text-sm leading-relaxed text-slate-400">
                                Tous nos moniteurs sont diplômés d'État (BPJEPS) et possèdent une expérience significative en compétition et raid.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium mb-2 text-white">Parc Véhicule</h4>
<p className="text-sm leading-relaxed text-slate-400">
                                Une flotte de 4x4 modernes et entretenus, équipés spécifiquement pour l'apprentissage et le franchissement.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium mb-2 text-white">Terrain Privé</h4>
<p className="text-sm leading-relaxed text-slate-400">
                                Accès exclusif à des zones d'évolution variées, du plateau technique au parcours naturel accidenté.
                            </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-badge" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M7.69 16.479l1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"></path><circle cx="6" cy="14" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium mb-2 text-white">Certification</h4>
<p className="text-sm leading-relaxed text-slate-400">
                                Délivrance d'attestations de stage reconnues par les employeurs pour les formations professionnelles.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t relative overflow-hidden bg-slate-950 border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-6 text-white">Prêt pour l'aventure ?</h2>
<p className="mb-8 max-w-md text-slate-400">
                        Que vous soyez une entreprise cherchant à former ses équipes ou un particulier en quête de sensations, contactez-nous.
                    </p>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-xl border hover:border-red-500/30 transition-all group bg-white/5 border-white/5 hover:bg-white/10" href="mailto:contact@leader-aventure.com">
<div className="p-2 rounded-lg group-hover:text-red-500 transition-colors bg-slate-900 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<span className="text-slate-200">contact@leader-aventure.com</span>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border hover:border-red-500/30 transition-all group bg-white/5 border-white/5 hover:bg-white/10" href="tel:0615044301">
<div className="p-2 rounded-lg group-hover:text-red-500 transition-colors bg-slate-900 text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-200">06 15 04 43 01</span>
</a>
</div>
</div>
<div className="p-6 rounded-2xl border bg-slate-900/50 border-white/5">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase">Prénom</label>
<input className="w-full border rounded px-3 py-2 focus:outline-none focus:border-red-500 transition-colors text-sm bg-slate-950 border-slate-800 text-white" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase">Nom</label>
<input className="w-full border rounded px-3 py-2 focus:outline-none focus:border-red-500 transition-colors text-sm bg-slate-950 border-slate-800 text-white" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase">Email</label>
<input className="w-full border rounded px-3 py-2 focus:outline-none focus:border-red-500 transition-colors text-sm bg-slate-950 border-slate-800 text-white" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase">Type de demande</label>
<div className="relative">
<select className="w-full border rounded px-3 py-2 focus:outline-none focus:border-red-500 transition-colors text-sm appearance-none bg-slate-950 border-slate-800 text-white">
<option>Formation Professionnelle</option>
<option>Stage de pilotage</option>
<option>Groupe / Séminaire</option>
<option>Autre</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full font-medium py-2.5 rounded transition-colors text-sm bg-white text-slate-950 hover:bg-slate-200">Envoyer</button>
</div>
</form>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-white/5 text-slate-600">
<div className="flex items-center gap-2">
<span className="font-bold text-slate-500 tracking-tighter">LEADER AVENTURE</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Mentions Légales</a>
<a className="hover:text-slate-400" href="#">CGV</a>
<a className="hover:text-slate-400" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
