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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
<svg className="lucide lucide-network h-5 w-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Next2i</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Expertise</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">À propos</a>
</div>
<button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
                Contactez-nous
            </button>
</div>
</nav>
<main className="relative isolate overflow-hidden">

<div aria-hidden="true" className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
</div>

<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<div className="mb-6 flex justify-center">
<div className="rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-500/10">
                        Integration Informatique
                    </div>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                    Ingénierie &amp; Projets <br className="hidden sm:block"/> d'Infrastructure
                </h1>
<p className="mt-6 text-xl leading-8 text-slate-600">
                    Nous accompagnons votre transformation numérique en alignant technologie et stratégie business pour une performance durable.
                </p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200" href="#">
                        Discuter de votre projet
                    </a>
<a className="text-base font-medium leading-6 text-slate-900 flex items-center group" href="#services">
                        Découvrir nos services <svg className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="lg:px-8 sm:pb-32 max-w-7xl mr-auto ml-auto pr-6 pb-24 pl-6" id="services">
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 ring-1 ring-inset ring-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
<svg className="lucide lucide-brain-circuit h-6 w-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Consulting IT &amp; Stratégie</h3>
<p className="text-lg leading-relaxed text-slate-500 mb-8">
                        Nos consultants experts vous accompagnent pour aligner votre Système d'Information (SI) avec vos enjeux de croissance et définir votre feuille de route technologique.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-search h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div className="">
<strong className="font-medium text-slate-900">Audit et Diagnostic IT</strong>
<p className="text-base text-slate-500 mt-1">Analyse 360° de la performance et de la dette technique.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-map h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<div>
<strong className="font-medium text-slate-900">Schéma Directeur</strong>
<p className="text-base text-slate-500 mt-1">Planification stratégique des investissements numériques.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-piggy-bank h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="piggy-bank" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path><path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">FinOps &amp; Rationalisation</strong>
<p className="text-base text-slate-500 mt-1">Optimisation des coûts de licensing et d'infrastructure.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check-square h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Sourcing</strong>
<p className="text-base text-slate-500 mt-1">Aide au choix agnostique des solutions technologiques.</p>
</div>
</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 ring-1 ring-inset ring-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
<svg className="lucide lucide-router h-6 w-6" data-lucide="router" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6.01 18H6"></path><path d="M10.01 18H10"></path><path d="M15 10v4"></path><path d="M17.84 7.17a4 4 0 0 0-5.66 0"></path><path d="M20.66 4.34a8 8 0 0 0-11.31 0"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Infrastructures &amp; Connectivité</h3>
<p className="text-lg leading-relaxed text-slate-500 mb-8">
                        Avant de virtualiser, il faut connecter. Nous déployons le socle physique indispensable à la performance de votre entreprise pour un réseau robuste et sécurisé.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-wifi h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div>
<strong className="font-medium text-slate-900">Ingénierie Réseaux &amp; Télécoms</strong>
<p className="text-base text-slate-500 mt-1">Opérateur (AS-203547) : fibre optique, cœurs de réseau et Wi-Fi haute densité.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-server h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div>
<strong className="font-medium text-slate-900">Installation Physique</strong>
<p className="text-base text-slate-500 mt-1">Urbanisation de baies, câblage et installation d'équipements actifs.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-shield-check h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<strong className="font-medium text-slate-900">Sécurité Périmétrique</strong>
<p className="text-base text-slate-500 mt-1">Mise en place de firewalls physiques et sécurisation des accès.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-monitor h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<div>
<strong className="font-medium text-slate-900">Postes de Travail</strong>
<p className="text-base text-slate-500 mt-1">Déploiement et gestion du cycle de vie de votre parc matériel.</p>
</div>
</li>
</ul>
</div>

<div className="group overflow-hidden transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 ring-1 ring-inset ring-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
<svg className="lucide lucide-layers h-6 w-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3" style={{}}>Virtualisation</h3>
<p className="leading-relaxed text-lg text-slate-500 mb-8">La virtualisation est une technologie qui permet à des millions d’utilisateurs du monde entier d’économiser en temps, en argent et en énergie, et d’exécuter simultanément plusieurs systèmes d’exploitation et applications sur le même ordinateur, ce qui accroît l’utilisation et la flexibilité du matériel.

</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-box h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Architectures Virtuelles</strong>
<p className="text-base text-slate-500 mt-1">Conversion d’un serveur physique vers un serveur virtuel (PtoV ou VtoV) sous VMWare / Hyper-V / Proxomox</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-users h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="">
<strong className="font-medium text-slate-900">Conteneurisation</strong>
<p className="text-base text-slate-500 mt-1">Conversion d’un serveur virtuel vers container Kubernetes/Docker</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-cloud-cog h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="cloud-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 19.772-.383.924"></path><path d="m13.148 14.228.383-.923"></path><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 15.852.923-.383"></path><path d="m14.772 18.148.923.383"></path><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path><path d="m9.228 15.852-.923-.383"></path><path d="m9.228 18.148-.923.383"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Upgrade vSphere</strong>
<p className="text-base text-slate-500 mt-1">Migration VMWare vSphere 6.5 vers 7/8</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-refresh-cw h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Déploiement</strong>
<p className="text-base text-slate-500 mt-1">Installation cluster vSphere 7+ vSAN + NSX</p>
</div>
</li>
</ul>
</div>

<div className="group overflow-hidden transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 ring-1 ring-inset ring-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors">
<svg className="lucide lucide-kanban-square h-6 w-6" data-lucide="kanban-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Pilotage de Projet &amp; AMOA</h3>
<p className="text-lg leading-relaxed text-slate-500 mb-8">
                        La réussite technique ne suffit pas. Nous coordonnons vos projets pour garantir le respect du triptyque : Coût, Qualité, Délai.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-gantt-chart-square h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="gantt-chart-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 8h7"></path><path d="M8 12h6"></path><path d="M11 16h5"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Coordination Globale</strong>
<p className="text-base text-slate-500 mt-1">Pilotage unique des plannings et des équipes.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-file-text h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Cahier des Charges</strong>
<p className="text-base text-slate-500 mt-1">Traduction des besoins métiers en spécifications techniques.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-graduation-cap h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<div className="">
<strong className="font-medium text-slate-900">Conduite du Changement</strong>
<p className="text-base text-slate-500 mt-1">Formation et accompagnement humain des utilisateurs.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-clipboard-check h-5 w-5 flex-none text-indigo-600 mt-1" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<div>
<strong className="font-medium text-slate-900">Recette</strong>
<p className="text-base text-slate-500 mt-1">Validation rigoureuse avant la mise en production.</p>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
<div className="max-w-xl lg:max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Prêt à moderniser votre infrastructure ?</h2>
<p className="mt-4 text-lg leading-8 text-slate-300">
                            Discutez avec nos experts pour un audit rapide de votre situation actuelle et découvrez comment Next2i peut accélérer votre performance.
                        </p>
</div>
<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
<div className="flex flex-col items-start">
<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
<svg className="lucide lucide-message-square h-6 w-6 text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<dt className="mt-4 font-medium text-white text-lg">Support Réactif</dt>
<dd className="mt-2 leading-7 text-slate-400 text-base">Une équipe dédiée pour répondre à vos besoins techniques.</dd>
</div>
<div className="flex flex-col items-start">
<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
<svg className="lucide lucide-shield h-6 w-6 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<dt className="mt-4 font-medium text-white text-lg">Sécurité Garantie</dt>
<dd className="mt-2 leading-7 text-slate-400 text-base">Protection optimale de vos données et infrastructures.</dd>
</div>
</dl>
</div>
</div>
</div>

<footer className="bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
<div className="flex justify-center space-x-6 md:order-2">
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="sr-only">LinkedIn</span>
<svg className="lucide lucide-linkedin h-6 w-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="sr-only">Twitter</span>
<svg className="lucide lucide-twitter h-6 w-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0">
<p className="text-center text-sm leading-5 text-slate-500">© 2024 Next2i. Tous droits réservés.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
