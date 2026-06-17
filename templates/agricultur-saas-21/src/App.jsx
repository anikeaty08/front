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



        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.add('bg-white/95');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.remove('bg-white/95');
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
      

<header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#158E79] flex items-center justify-center text-white shadow-lg shadow-[#158E79]/20 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="sprout" strokeWidth="2"></i>
</div>
<span className="font-heading font-bold text-lg tracking-tight text-gray-900">Smart Crop Adviser</span>
</a>

<nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
<a className="hover:text-[#158E79] transition-colors" href="#home">Accueil</a>
<a className="hover:text-[#158E79] transition-colors" href="#features">L’application</a>
<a className="hover:text-[#158E79] transition-colors" href="#about">Qui sommes-nous</a>
<a className="hover:text-[#158E79] transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">

<div className="relative group hidden md:block mr-2">
<button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#158E79] transition-colors py-2 px-3 rounded-full border border-gray-200 hover:border-[#158E79]/30">
<span>FR</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>

<div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden hidden group-hover:block animate-fade-up z-50">
<a className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-[#158E79] bg-emerald-50/50" href="#">
<span>Français</span>
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</a>
<a className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<span>English</span>
</a>
</div>
</div>
<a className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded-full text-sm font-medium items-center gap-2" href="#demo">
                    Demander une démo
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<div className="flex items-center gap-4 md:hidden">
<button className="text-gray-600 text-sm font-bold">FR</button>
<button className="p-2 text-gray-600 hover:text-[#158E79]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative" id="home">
<div className="absolute inset-0 bg-grid-pattern -z-10"></div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#158E79]/5 to-transparent -z-10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#158E79]/10 text-[#158E79] text-xs font-semibold uppercase tracking-wide mb-6 border border-[#158E79]/20">
<span className="w-2 h-2 rounded-full bg-[#158E79] animate-pulse"></span>
                    Pensé pour l’arboriculture
                </div>
<h1 className="text-5xl lg:text-6xl font-bold font-heading tracking-tight text-gray-900 leading-[1.1] mb-6">
                    Le copilote digital du <span className="text-[#158E79]">conseil arboricole.</span>
</h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                    Centralisez vos parcelles, vos observations et vos décisions. Un outil mobile &amp; web pensé pour les producteurs de fruits et les conseillers terrain.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="btn-primary px-8 py-4 rounded-full text-base font-semibold text-center shadow-xl shadow-[#158E79]/10" href="#demo">
                        Demander une démo
                    </a>
<a className="px-8 py-4 rounded-full text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-center flex items-center justify-center gap-2" href="#features">
<i className="w-4 h-4" data-lucide="smartphone"></i>
                        Voir l’application
                    </a>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-gray-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#158E79]" data-lucide="check-circle-2"></i>
                        Mobile &amp; Web
                    </div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#158E79]" data-lucide="check-circle-2"></i>
                        Données structurées
                    </div>
</div>
</div>

<div className="lg:h-[600px] flex animate-float hidden lg:flex relative items-center justify-center">

<div className="absolute -right-12 top-12 w-64 h-64 bg-[#158E79]/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute -left-12 bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

<div className="absolute right-0 top-10 w-[550px] bg-white rounded-xl shadow-2xl border border-gray-200/60 overflow-hidden z-10 opacity-60 scale-95 origin-bottom-right blur-[1px]">
<div className="flex h-[400px]">

<div className="w-16 bg-gray-50 border-r border-gray-100 flex flex-col items-center py-6 gap-6">
<div className="w-8 h-8 rounded bg-[#158E79] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sprout" strokeWidth="2"></i>
</div>
<div className="w-8 h-8 rounded text-gray-400 flex items-center justify-center"><svg aria-hidden="true" className="lucide lucide-layout-grid w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg></div>
</div>

<div className="flex-1 p-8 bg-white">
<div className="h-4 bg-gray-100 rounded w-1/3 mb-8"></div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="h-20 bg-green-50 rounded border border-green-100"></div>
<div className="h-20 bg-gray-50 rounded border border-gray-100"></div>
<div className="h-20 bg-gray-50 rounded border border-gray-100"></div>
</div>
<div className="h-40 bg-gray-50 rounded border border-gray-100 w-full relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 pb-0 h-24 gap-4">
<div className="bg-gray-200 w-full h-[40%] rounded-t"></div>
<div className="bg-[#158E79]/30 w-full h-[70%] rounded-t"></div>
<div className="bg-gray-200 w-full h-[50%] rounded-t"></div>
<div className="bg-[#158E79] w-full h-[85%] rounded-t"></div>
<div className="bg-gray-200 w-full h-[60%] rounded-t"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-4 bottom-0 w-[300px] bg-[#111827] rounded-[3rem] p-3 shadow-2xl z-20 border-[6px] border-[#1f2937] ring-1 ring-white/10">
<div className="bg-gray-50 rounded-[2.2rem] overflow-hidden h-[580px] w-full relative flex flex-col font-sans">

<div className="h-12 bg-white flex justify-between items-center px-6 pt-3 z-10">
<span className="text-[10px] font-bold text-gray-900">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-2.5 bg-gray-900 rounded-[2px]"></div>
</div>
</div>

<div className="bg-white px-5 pb-4 border-b border-gray-100 z-10 shadow-sm">
<div className="flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 font-medium mb-0.5">Bonjour, Marc 👋</p>
<h2 className="text-lg font-bold text-gray-900 tracking-tight">Ma Ferme</h2>
</div>
<button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 relative">
<svg aria-hidden="true" className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>

<div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
<span className="px-3 py-1.5 bg-[#158E79] text-white text-xs font-semibold rounded-full whitespace-nowrap">Vue Carte</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Liste</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Alertes (2)</span>
</div>
</div>

<div className="flex-1 relative bg-emerald-50/50 overflow-hidden">

<svg className="absolute inset-0 w-full h-full text-[#158E79]/10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path d="M-20 100 Q 50 150 120 120 T 320 180" fill="none" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="2"></path>
<path d="M50 300 Q 150 250 250 320" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>

<div className="absolute top-12 left-8 w-24 h-20 bg-[#158E79]/10 border-2 border-[#158E79]/40 rounded-lg transform rotate-6 backdrop-blur-sm"></div>
<div className="absolute top-24 right-6 w-32 h-24 bg-white/60 border-2 border-gray-300 rounded-lg transform -rotate-3 backdrop-blur-sm"></div>
<div className="absolute bottom-32 left-12 w-20 h-28 bg-[#158E79]/5 border-2 border-[#158E79]/20 rounded-lg transform rotate-12 backdrop-blur-sm"></div>

<div className="absolute top-[80px] left-[70px]">
<div className="relative group cursor-pointer animate-fade-up">
<div className="w-8 h-8 bg-[#158E79] rounded-full flex items-center justify-center shadow-lg shadow-[#158E79]/30 text-white z-10 relative ring-4 ring-white">
<svg aria-hidden="true" className="lucide lucide-sprout w-4 h-4" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 bg-white px-2.5 py-1.5 rounded-lg shadow-md text-[10px] font-bold whitespace-nowrap text-gray-700">
                           Parcelle Nord
                           <span className="block text-[9px] text-green-600 font-normal">Sain</span>
</div>
</div>
</div>

<div className="absolute bottom-[160px] right-[60px]">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-orange-500 border-2 border-orange-100 animate-bounce">
<svg aria-hidden="true" className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
</div>

<div className="absolute bottom-6 right-5 z-20">
<button className="w-14 h-14 bg-[#158E79] rounded-full shadow-xl shadow-[#158E79]/40 flex items-center justify-center text-white hover:scale-105 transition-transform">
<svg aria-hidden="true" className="lucide lucide-plus w-7 h-7" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="bg-white rounded-t-3xl p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-10 relative">
<div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
<div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl mb-1">
<div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-bold text-gray-900 truncate">Stress hydrique détecté</p>
<p className="text-[10px] text-gray-500 truncate">Parcelle Sud • Aujourd'hui 09:12</p>
</div>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-2 pb-1">
<div className="p-2 text-[#158E79] flex flex-col items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-bold">Accueil</span>
</div>
<div className="p-2 text-gray-400 flex flex-col items-center gap-1">
<i className="w-6 h-6" data-lucide="map"></i>
<span className="text-[10px] font-medium">Carte</span>
</div>
<div className="p-2 text-gray-400 flex flex-col items-center gap-1">
<svg aria-hidden="true" className="lucide lucide-file-bar-chart w-5 h-5" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<span className="text-[10px] font-medium">Bilans</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-100 border-t pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">

<div className="space-y-6">
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-red-50 text-red-600">
<i className="w-6 h-6" data-lucide="x-circle"></i>
</span>
<h3 className="text-xl font-bold font-heading text-gray-900">Le quotidien chaotique</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-4 text-gray-600">
<i className="w-5 h-5 text-red-400 shrink-0 mt-1" data-lucide="file-warning"></i>
                            Notes dispersées (carnets, WhatsApp, fichiers Excel isolés).
                        </li>
<li className="flex gap-4 text-gray-600">
<i className="w-5 h-5 text-red-400 shrink-0 mt-1" data-lucide="history"></i>
                            Difficulté à retracer l'historique complet d'une parcelle.
                        </li>
<li className="flex gap-4 text-gray-600">
<i className="w-5 h-5 text-red-400 shrink-0 mt-1" data-lucide="clock"></i>
                            Temps précieux perdu à consolider et partager l'information.
                        </li>
</ul>
</div>

<div className="relative space-y-6">

<div className="hidden md:block absolute left-[-1.5rem] top-0 bottom-0 w-px bg-gray-100"></div>
<div className="flex items-center gap-3 mb-4">
<span className="p-2 rounded-lg bg-[#158E79]/10 text-[#158E79]">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</span>
<h3 className="text-xl font-bold font-heading text-gray-900">L'approche Smart Crop</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-4 text-gray-800 font-medium">
<i className="w-5 h-5 text-[#158E79] shrink-0 mt-1" data-lucide="check"></i>
                            Une fiche parcelle unique, centrale et toujours à jour.
                        </li>
<li className="flex gap-4 text-gray-800 font-medium">
<i className="w-5 h-5 text-[#158E79] shrink-0 mt-1" data-lucide="check"></i>
                            Observations terrain et photos géolocalisées &amp; structurées.
                        </li>
<li className="flex gap-4 text-gray-800 font-medium">
<i className="w-5 h-5 text-[#158E79] shrink-0 mt-1" data-lucide="check"></i>
                            Génération de rapports et partage en 1 clic.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 tracking-tight mb-4">Optimisez chaque hectare</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">Une suite d'outils conçus spécifiquement pour la réalité du terrain arboricole.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Suivi parcellaire clair</h3>
<p className="text-gray-600 leading-relaxed">Cartographie interactive de vos vergers. Accédez aux données vitales en tapant sur une parcelle.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="clipboard-list"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Historique complet</h3>
<p className="text-gray-600 leading-relaxed">Traçabilité totale des interventions, maladies et rendements, saison après saison.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Observations + Photos</h3>
<p className="text-gray-600 leading-relaxed">Capturez les symptômes sur le terrain. Les photos sont automatiquement liées à la parcelle.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Recommandations</h3>
<p className="text-gray-600 leading-relaxed">Transformez les observations en plans d'actions concrets pour les équipes techniques.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Collaboration équipe</h3>
<p className="text-gray-600 leading-relaxed">Synchronisation instantanée entre le conseiller, le chef de culture et le producteur.</p>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#158E79]/30 transition-all hover:shadow-lg hover:shadow-[#158E79]/5">
<div className="w-12 h-12 rounded-xl bg-[#158E79]/10 text-[#158E79] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Export &amp; Reporting</h3>
<p className="text-gray-600 leading-relaxed">Générez des rapports PDF professionnels ou exportez vos données brutes pour analyse.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#111827] pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute -right-20 -top-20 w-96 h-96 bg-[#158E79]/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#158E79] font-semibold tracking-wider text-sm uppercase">Workflow</span>
<h2 className="text-3xl lg:text-5xl font-bold font-heading mt-2 mb-6">Une expérience simple,<br/>du verger au bureau.</h2>
</div>
<div className="space-y-24">

<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 order-2 lg:order-1 relative">

<div className="bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl p-1 border border-white/10 shadow-2xl">
<div className="rounded-xl overflow-hidden relative aspect-video bg-gray-900 flex items-center justify-center ring-1 ring-white/10 shadow-2xl group">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#158E79]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

<div className="relative z-10 w-[260px] md:w-[280px] aspect-[9/19] bg-[#111827] rounded-[2.5rem] border-[6px] border-[#1f2937] shadow-2xl overflow-hidden ring-1 ring-white/20 transform scale-90 md:scale-95 origin-center transition-transform duration-500 group-hover:scale-100">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#1f2937] rounded-b-xl z-20 flex justify-center items-center shadow-lg">
<div className="w-12 h-1.5 bg-black/40 rounded-full"></div>
</div>

<div className="bg-gray-50 w-full h-full flex flex-col font-sans overflow-hidden relative">

<div className="bg-white pt-10 pb-4 px-5 border-b border-gray-100 shadow-sm z-10 sticky top-0">
<div className="flex items-center justify-between mb-4">
<button className="text-gray-400 hover:text-gray-600 transition-colors"><svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<h3 className="font-semibold text-gray-900 text-sm tracking-tight">Nouvelle observation</h3>
<button className="text-[#158E79] text-xs font-semibold hover:text-[#117060] transition-colors">Enregistrer</button>
</div>

<div className="flex gap-1.5">
<div className="h-1 flex-1 bg-[#158E79] rounded-full"></div>
<div className="h-1 flex-1 bg-[#158E79] rounded-full"></div>
<div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide pb-20">

<div className="space-y-1.5 animate-fade-up" style={{animationDelay: '0.1s'}}>
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Localisation</label>
<div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-[#158E79]/50 transition-colors cursor-pointer group/item">
<div className="w-8 h-8 rounded-lg bg-green-50 text-[#158E79] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
<svg className="lucide lucide-map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-gray-900">Verger Nord - Rang 4</p>
<p className="text-[10px] text-gray-500 truncate">GPS: 44.8231, 0.5422 • Précision 3m</p>
</div>
<svg className="lucide lucide-chevron-right text-gray-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>

<div className="space-y-1.5 animate-fade-up" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-end px-1">
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Preuve visuelle</label>
<span className="text-[9px] text-gray-400">1/3 photos</span>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100 shadow-sm group/photo cursor-pointer">
<img alt="Feuille malade" className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=400&amp;q=80"/>
<div className="group-hover/photo:bg-black/10 transition-colors bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-2 right-2 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-medium backdrop-blur-md border border-white/10">IMG_2492</div>
</div>
<div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-gray-400 hover:border-[#158E79] hover:text-[#158E79] hover:bg-green-50/50 transition-all cursor-pointer">
<svg className="lucide lucide-camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-[9px] font-semibold mt-1">Ajouter</span>
</div>
</div>
</div>

<div className="space-y-1.5 animate-fade-up" style={{animationDelay: '0.3s'}}>
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Note Vocale</label>
<div className="bg-[#158E79] rounded-xl p-3 flex items-center gap-3 text-white shadow-lg shadow-[#158E79]/20 cursor-pointer hover:bg-[#117060] transition-colors group/audio">
<button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
<svg className="lucide lucide-play fill-current" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</button>

<div className="flex-1 flex items-center justify-center gap-[2px] h-6 opacity-80 group-hover/audio:opacity-100 transition-opacity">
<div className="w-0.5 h-2 bg-white/50 rounded-full"></div>
<div className="w-0.5 h-3 bg-white/70 rounded-full"></div>
<div className="w-0.5 h-5 bg-white rounded-full animate-pulse"></div>
<div className="w-0.5 h-4 bg-white/80 rounded-full"></div>
<div className="w-0.5 h-3 bg-white/60 rounded-full"></div>
<div className="w-0.5 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-0.5 h-3 bg-white/70 rounded-full"></div>
<div className="w-0.5 h-2 bg-white/50 rounded-full"></div>
<div className="w-0.5 h-3 bg-white/60 rounded-full"></div>
<div className="w-0.5 h-2 bg-white/40 rounded-full"></div>
<div className="w-0.5 h-4 bg-white/80 rounded-full"></div>
<div className="w-0.5 h-2 bg-white/40 rounded-full"></div>
</div>
<span className="text-[10px] font-mono font-medium opacity-90">0:14</span>
</div>
</div>

<div className="flex flex-wrap gap-2 animate-fade-up" style={{animationDelay: '0.4s'}}>
<span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-md border border-red-100 uppercase tracking-wide">Priorité Haute</span>
<span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-md border border-gray-200 uppercase tracking-wide">Fongique</span>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 z-30 transform translate-y-0 transition-transform">
<div className="bg-gray-900/90 backdrop-blur-md text-white px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between shadow-xl border border-white/10">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="font-medium tracking-tight">Mode Offline</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<span className="text-[9px] uppercase tracking-wider font-bold">Sauvegardé</span>
<svg className="lucide lucide-check-circle-2 text-green-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 order-1 lg:order-2">
<div className="w-12 h-12 rounded-full border border-[#158E79] text-[#158E79] flex items-center justify-center font-bold text-xl mb-6">1</div>
<h3 className="text-2xl font-bold font-heading mb-4">Sur le terrain</h3>
<p className="text-gray-400 text-lg leading-relaxed mb-6">Saisie rapide, même avec des gants ou sous le soleil. L'application fonctionne hors connexion et synchronise dès le retour du réseau.</p>
<ul className="space-y-3 text-gray-300">
<li className="flex gap-3"><i className="text-[#158E79] w-5 h-5" data-lucide="zap"></i> Interface contrastée haute visibilité</li>
<li className="flex gap-3"><i className="text-[#158E79] w-5 h-5" data-lucide="zap"></i> Dictée vocale des observations</li>
</ul>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<div className="w-12 h-12 rounded-full border border-[#158E79] text-[#158E79] flex items-center justify-center font-bold text-xl mb-6">2</div>
<h3 className="text-2xl font-bold font-heading mb-4">Au bureau</h3>
<p className="text-gray-400 text-lg leading-relaxed mb-6">Retrouvez une vue globale sur grand écran. Analysez les tendances, planifiez les interventions prioritaires et gérez vos équipes.</p>
<ul className="space-y-3 text-gray-300">
<li className="flex gap-3"><i className="text-[#158E79] w-5 h-5" data-lucide="monitor"></i> Dashboard de synthèse</li>
<li className="flex gap-3"><i className="text-[#158E79] w-5 h-5" data-lucide="monitor"></i> Gestion des droits utilisateurs</li>
</ul>
</div>
<div className="lg:w-1/2 relative">
<div className="bg-gradient-to-bl from-gray-800 to-gray-900 rounded-2xl p-1 border border-white/10 shadow-2xl">
<div className="rounded-xl overflow-hidden relative aspect-video bg-gray-900 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 w-3/4 opacity-50">
<div className="h-20 bg-gray-700 rounded-lg"></div>
<div className="h-20 bg-gray-700 rounded-lg"></div>
<div className="col-span-2 h-32 bg-gray-700 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2" href="#demo">
                    Voir toutes les fonctionnalités
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold font-heading text-gray-900">Pour qui ?</h2>
<p className="text-gray-500 mt-2">SCA s’adapte à votre organisation et à vos méthodes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
<div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center text-[#158E79] mb-6">
<i className="w-8 h-8" data-lucide="tractor"></i>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Producteurs</h3>
<p className="text-sm text-gray-600">Pilotez votre exploitation avec précision. Gardez une trace de chaque décision.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#158E79] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Cœur de cible</div>
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
<i className="w-8 h-8" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Conseillers</h3>
<p className="text-sm text-gray-600">Gagnez du temps sur vos rapports. Apportez plus de valeur à vos clients.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
<div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6">
<i className="w-8 h-8" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Coopératives</h3>
<p className="text-sm text-gray-600">Standardisez les données techniques à l'échelle de votre organisation.</p>
</div>
</div>
</div>
</section>

<div className="bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-[#158E79]" data-lucide="shield-check"></i>
<span className="font-medium text-sm text-gray-900">Sécurité des données</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-[#158E79]" data-lucide="headphones"></i>
<span className="font-medium text-sm text-gray-900">Support &amp; Accompagnement</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-[#158E79]" data-lucide="rocket"></i>
<span className="font-medium text-sm text-gray-900">Déploiement progressif</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-[#158E79]" data-lucide="refresh-cw"></i>
<span className="font-medium text-sm text-gray-900">Roadmap évolutive</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold font-heading text-center mb-12 text-gray-900">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800">
<span>Est-ce adapté aux petites exploitations ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-600 mt-0 px-5 pb-5 text-sm leading-relaxed">
                        Absolument. SCA est conçu pour être modulaire. Vous pouvez commencer avec une seule parcelle et quelques fonctionnalités, puis évoluer selon vos besoins.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800">
<span>Peut-on l’utiliser sur mobile et PC ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-600 mt-0 px-5 pb-5 text-sm leading-relaxed">
                        Oui, votre abonnement inclut l'accès à l'application mobile (iOS/Android) pour le terrain et l'accès web pour le bureau. Les données se synchronisent en temps réel.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800">
<span>Peut-on ajouter des utilisateurs ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-600 mt-0 px-5 pb-5 text-sm leading-relaxed">
                        Tout à fait. L'offre "Équipe" permet d'inviter vos collaborateurs (chefs de culture, ouvriers, conseillers externes) avec des droits d'accès différenciés.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800">
<span>Vos données sont-elles sécurisées ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-600 mt-0 px-5 pb-5 text-sm leading-relaxed">
                        La sécurité est notre priorité. Vos données sont hébergées sur des serveurs sécurisés en Europe, cryptées, et vous restez seul propriétaire de vos informations agronomiques.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-gray-50 open:bg-white transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-gray-800">
<span>Comment se passe la mise en place ?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-gray-600 mt-0 px-5 pb-5 text-sm leading-relaxed">
                        Nous importons vos données parcellaires existantes (fichiers CVI/PAC) pour vous faire gagner du temps. Une formation visio de 1h est incluse au démarrage.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#158E79] relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-bold font-heading text-white mb-6">Prêt à simplifier votre conseil arboricole ?</h2>
<p className="text-green-50 text-lg mb-10 max-w-2xl mx-auto">Demandez une démo et découvrez comment SCA structure vos observations et accélère vos décisions.</p>
<form className="bg-white p-2 rounded-2xl max-w-lg mx-auto shadow-2xl flex flex-col sm:flex-row gap-2">
<input className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#158E79]/50 border-none" placeholder="votre@email.com" type="email"/>
<button className="bg-[#111827] text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition-colors whitespace-nowrap" type="submit">
                    Demander une démo
                </button>
</form>
<p className="text-green-100 text-xs mt-4">Réponse sous 24–48h ouvrées.</p>
</div>
</section>

<footer className="bg-[#111827] text-white py-16 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#158E79] flex items-center justify-center text-white text-xs">
<i className="w-3 h-3" data-lucide="sprout"></i>
</div>
<span className="font-bold text-lg">SCA</span>
</div>
<p className="text-gray-400 text-sm">Smart Crop Adviser — Digitaliser le conseil arboricole.</p>
</div>
<div>
<h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Navigation</h4>
<ul className="space-y-2 text-sm text-gray-300">
<li><a className="hover:text-[#158E79]" href="#home">Accueil</a></li>
<li><a className="hover:text-[#158E79]" href="#features">L'application</a></li>
<li><a className="hover:text-[#158E79]" href="#about">Qui sommes-nous</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Légal</h4>
<ul className="space-y-2 text-sm text-gray-300">
<li><a className="hover:text-[#158E79]" href="#">Mentions légales</a></li>
<li><a className="hover:text-[#158E79]" href="#">Confidentialité</a></li>
<li><a className="hover:text-[#158E79]" href="#">CGU</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Contact</h4>
<ul className="space-y-2 text-sm text-gray-300">
<li className="flex gap-2 items-center"><i className="w-4 h-4 text-[#158E79]" data-lucide="mail"></i> contact@smartcrop.com</li>
<li className="flex gap-2 items-center"><i className="w-4 h-4 text-[#158E79]" data-lucide="linkedin"></i> LinkedIn</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
<p>© 2024 Smart Crop Adviser. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span>Fait avec passion en France 🇫🇷</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
