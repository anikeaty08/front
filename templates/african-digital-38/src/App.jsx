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



        // Simple script to toggle active state on map paths for the mockup demo
        document.querySelectorAll('.map-path').forEach(path => {
            path.addEventListener('click', function() {
                document.querySelectorAll('.map-path').forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                // In a real app, this would trigger an API call or update the React state to change the right panel data
            });
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-emerald-950 flex items-center justify-center text-amber-400">
<iconify-icon className="text-xl" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-xl text-slate-900">AFRICAN<span className="text-emerald-600">SKILLS</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#mission">Notre Mission</a>
<a className="hover:text-emerald-600 transition-colors" href="#formations">Formations</a>
<a className="hover:text-emerald-600 transition-colors" href="#impact">Impact &amp; Carte</a>
<a className="hover:text-emerald-600 transition-colors" href="#partenaires">Partenaires</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 border-r border-slate-200 pr-4">
<span className="text-emerald-600 cursor-pointer">FR</span>
<span className="cursor-pointer hover:text-slate-800 transition-colors">EN</span>
</div>
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                    Nous rejoindre
                </a>
<button className="md:hidden text-2xl text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">

<div className="absolute inset-0 opacity-20">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/50 to-transparent blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-900/20 to-transparent blur-3xl"></div>
<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                    Objectif 2030
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6 text-balance">
                    Former <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">1 million d'Africains</span> aux compétences numériques.
                </h1>
<p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                    Accélérez votre carrière ou la transformation de votre entreprise. Découvrez nos programmes intensifs en tech, IA et stratégie digitale conçus pour les leaders de demain en Afrique.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-amber-400 px-8 text-sm font-medium text-slate-900 transition-colors hover:bg-amber-300" href="#formations">
                        Découvrir le programme
                    </a>
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10" href="#impact">
<iconify-icon className="mr-2 text-lg" icon="solar:earth-africa-linear" strokeWidth="1.5"></iconify-icon>
                        Voir notre impact
                    </a>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative w-full aspect-square max-w-lg ml-auto">

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-slate-800/40 rounded-full blur-3xl"></div>
<div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-64 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between transform -rotate-6 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">En direct</span>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">124,592</div>
<div className="text-xs text-slate-400 mt-1">Talents formés ce mois-ci</div>
</div>
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-400 w-3/4 h-full rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-1/4 right-0 w-16 h-16 bg-slate-900/90 rounded-xl border border-white/10 shadow-xl flex flex-col items-center justify-center transform translate-x-1/2 rotate-12 animate-[bounce_3s_ease-in-out_infinite]">
<iconify-icon className="text-amber-400 text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-white mt-1 font-medium">IA</span>
</div>
<div className="absolute bottom-1/4 left-0 w-16 h-16 bg-slate-900/90 rounded-xl border border-white/10 shadow-xl flex flex-col items-center justify-center transform -translate-x-1/2 -rotate-12 animate-[bounce_4s_ease-in-out_infinite]">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-white mt-1 font-medium">Data</span>
</div>
</div>
</div>
</div>
</section>

<div className="relative z-20 max-w-7xl mx-auto px-6 -mt-10">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="flex flex-col px-4 text-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1">150k+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Personnes formées</span>
</div>
<div className="flex flex-col px-4 text-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1">24</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pays couverts</span>
</div>
<div className="flex flex-col px-4 text-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1">85%</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Taux d'insertion</span>
</div>
<div className="flex flex-col px-4 text-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-1">500+</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Entreprises Accompagnées</span>
</div>
</div>
</div>

<section className="py-24 bg-fafafa" id="mission">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-3">Notre Vision</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance mb-6">
                    Faire de l'Afrique le prochain vivier mondial des talents technologiques.
                </h3>
<p className="text-base text-slate-600 leading-relaxed">
                    African Skills n'est pas qu'un programme de formation. C'est un mouvement panafricain. Nous croyons que la maîtrise des outils numériques et de l'intelligence artificielle est le levier majeur pour le développement économique et social du continent.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mt-12">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Innovation</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        Des programmes à la pointe de la technologie, constamment mis à jour pour répondre aux besoins réels du marché mondial.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Impact Social</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        Nous favorisons l'inclusion numérique en offrant des bourses et en ciblant les populations éloignées des centres technologiques.
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">Transformation</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                        Accompagnement sur-mesure des PME et grandes entreprises africaines dans leur digitalisation pour une compétitivité accrue.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="formations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-sm font-semibold text-emerald-600 tracking-wider uppercase mb-3">Nos Formations</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        3 axes pour maîtriser le futur.
                    </h3>
</div>
<a className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors group" href="#">
                    Voir tout le catalogue
                    <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="p-8 flex-grow">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Fondamentaux Numériques</h4>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                            Maîtrisez les outils essentiels (Bureautique avancée, collaboration cloud, cybersécurité de base) pour être opérationnel immédiatement dans tout environnement de travail moderne.
                        </p>
<div className="space-y-3 mb-8">
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                                Public : Jeunes diplômés, reconversion
                            </div>
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Durée : 3 mois (Intensif)
                            </div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-white">
<a className="flex items-center justify-between w-full text-sm font-medium text-slate-900 group/btn" href="#">
                            En savoir plus
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
<div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                        Populaire
                    </div>
<div className="p-8 flex-grow">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Intelligence Artificielle</h4>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                            Initiez-vous aux outils d'IA générative (ChatGPT, Midjourney), au prompt engineering et à l'automatisation de tâches pour décupler votre productivité.
                        </p>
<div className="space-y-3 mb-8">
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                                Public : Professionnels, Créatifs
                            </div>
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Durée : 4 semaines (Temps partiel)
                            </div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-white">
<a className="flex items-center justify-between w-full text-sm font-medium text-slate-900 group/btn" href="#">
                            En savoir plus
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</div>

<div className="group flex flex-col bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="p-8 flex-grow">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Transformation Digitale</h4>
<p className="text-sm text-slate-600 mb-6 line-clamp-3">
                            Pour les décideurs. Apprenez à auditer, concevoir et piloter la stratégie numérique de votre organisation. Intégration CRM, ERP et culture data-driven.
                        </p>
<div className="space-y-3 mb-8">
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                                Public : Dirigeants, Managers
                            </div>
<div className="flex items-center text-xs text-slate-500">
<iconify-icon className="mr-2 text-slate-400 text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                                Durée : 6 mois (Executive)
                            </div>
</div>
</div>
<div className="p-4 border-t border-slate-200 bg-white">
<a className="flex items-center justify-between w-full text-sm font-medium text-slate-900 group/btn" href="#">
                            En savoir plus
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 overflow-hidden relative" id="impact">
<div className="glow-effect top-0 left-0"></div>
<div className="glow-effect bottom-0 right-0" style={{background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(255,255,255,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-12 text-center md:text-left">
<h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-3">Impact Continental</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Un réseau panafricain dynamique.
                </h3>
<p className="text-slate-400 mt-4 max-w-2xl text-sm">
                    Cliquez sur un pays pour découvrir en temps réel les statistiques de formation, nos partenaires locaux et l'impact généré par African Skills.
                </p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 relative min-h-[500px] flex items-center justify-center group">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 rounded-3xl"></div>
<div className="relative w-full max-w-md mx-auto aspect-square">

<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 400 450">

<path className="map-path active" d="M 50 150 Q 80 120 120 140 T 150 180 Q 120 200 80 220 Z" fill="#334155" stroke="#475569" strokeWidth="2"></path>

<path className="map-path" d="M 120 140 Q 180 80 250 100 T 300 150 Q 250 180 150 180 Z" fill="#1e293b" stroke="#334155" strokeWidth="2"></path>

<path className="map-path" d="M 300 150 Q 350 200 320 280 T 250 320 Q 220 250 250 180 Z" fill="#1e293b" stroke="#334155" strokeWidth="2"></path>

<path className="map-path" d="M 150 180 Q 250 180 250 250 T 180 320 Q 120 280 150 180 Z" fill="#1e293b" stroke="#334155" strokeWidth="2"></path>

<path className="map-path" d="M 180 320 Q 250 320 280 380 T 200 450 Q 150 380 180 320 Z" fill="#1e293b" stroke="#334155" strokeWidth="2"></path>

<circle className="animate-pulse" cx="100" cy="180" fill="#10b981" r="6"></circle>
<circle cx="220" cy="130" fill="#64748b" r="4"></circle>
<circle cx="280" cy="220" fill="#64748b" r="5"></circle>
<circle cx="200" cy="250" fill="#64748b" r="4"></circle>
<circle cx="220" cy="380" fill="#64748b" r="5"></circle>
</svg>

<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2 rounded-lg shadow-xl pointer-events-none transition-opacity">
                            Sénégal &amp; Afrique de l'Ouest
                        </div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full">
<div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex-grow flex flex-col">

<div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-6 rounded-sm overflow-hidden bg-slate-200 border border-slate-300 relative">

<div className="absolute inset-0 flex flex-col">
<div className="h-1/3 bg-green-500"></div>
<div className="h-1/3 bg-yellow-400"></div>
<div className="h-1/3 bg-red-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-[8px] text-green-900">★</div>
</div>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 tracking-tight">Sénégal</h4>
<p className="text-xs text-slate-500">Hub Régional Afrique de l'Ouest</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                                Actif
                            </span>
</div>

<div className="p-6 overflow-y-auto custom-scroll flex-grow max-h-[400px]">

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
<div className="text-slate-500 mb-1">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">12,450</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Bénéficiaires</div>
</div>
<div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
<div className="text-amber-500 mb-1">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">85</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Entreprises</div>
</div>
</div>

<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Programmes en cours</h5>
<div className="space-y-3 mb-8">
<div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Bootcamp IA &amp; Data (Cohorte 4)</div>
<div className="text-xs text-slate-500 mt-0.5">Dakar · 120 participants · Fini à 60%</div>
<div className="w-full bg-slate-200 h-1 rounded-full mt-2">
<div className="bg-emerald-500 w-[60%] h-full rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
<div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Initiation Code pour Tous</div>
<div className="text-xs text-slate-500 mt-0.5">Saint-Louis · 350 participants · Début: 12 Nov</div>
</div>
</div>
</div>

<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Partenaires Locaux</h5>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Ministère de l'Économie Numérique</span>
<span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">Sonatel Academy</span>
<span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm">DER/FJ</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100 overflow-hidden" id="partenaires">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest">Ils soutiennent la transformation</h2>
</div>

<div className="flex justify-center flex-wrap gap-8 md:gap-16 max-w-5xl mx-auto px-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-800">
<iconify-icon icon="solar:global-linear"></iconify-icon> TECH<span className="font-light">CORP</span>
</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-800">
<iconify-icon icon="solar:box-linear"></iconify-icon> FOUNDATION<span className="text-emerald-600">X</span>
</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-800">
<iconify-icon icon="solar:shield-network-linear"></iconify-icon> <span className="border-b-2 border-slate-800">AFRICA</span>FUND
            </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-800">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> INNO<span className="font-serif italic">Hub</span>
</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-800">
<iconify-icon icon="solar:leaf-linear"></iconify-icon> GREEN<span className="text-emerald-500 tracking-widest">DIGITAL</span>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-24 pb-12 relative overflow-hidden" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-20">

<div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">Prêt à façonner l'avenir ?</h3>
<p className="text-sm text-slate-400 mb-8 max-w-md">
                        Que vous souhaitiez vous former, inscrire vos collaborateurs ou devenir partenaire institutionnel, notre équipe est à votre écoute.
                    </p>
<form className="space-y-4 max-w-md">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only">Prénom</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Prénom" type="text"/>
</div>
<div>
<label className="sr-only">Nom</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Nom" type="text"/>
</div>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Adresse email professionnelle" type="email"/>
</div>
<div>
<label className="sr-only">Sujet</label>
<select className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none">
<option>Je souhaite me former</option>
<option>Formation pour mon entreprise</option>
<option>Devenir partenaire</option>
<option>Autre demande</option>
</select>
</div>
<button className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                            Envoyer la demande
                            <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<div className="mt-8 flex items-center gap-4">
<span className="text-xs text-slate-500">Ou contactez-nous via</span>
<a className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/20 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp
                        </a>
</div>
</div>

<div className="flex flex-col justify-between">
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<h4 className="text-white font-medium text-sm mb-4">Programme</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Fondamentaux</a></li>
<li><a className="hover:text-white transition-colors" href="#">Intelligence Artificielle</a></li>
<li><a className="hover:text-white transition-colors" href="#">Transformation Digitale</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bourses d'études</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">African Skills</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-white transition-colors" href="#">Espace Presse</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dashboard Partenaires</a></li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Restez informé</h4>
<p className="text-xs text-slate-400 mb-3">Recevez nos dernières actualités sur la tech en Afrique.</p>
<div className="flex gap-2">
<input className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500" placeholder="Votre email" type="email"/>
<button className="bg-white text-slate-900 px-3 py-2 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors">S'inscrire</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:programming-linear"></iconify-icon>
<span className="font-medium text-white">AFRICAN<span className="text-emerald-500">SKILLS</span></span>
<span>© 2024. Tous droits réservés.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
