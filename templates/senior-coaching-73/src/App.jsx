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
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-white/80 border-neutral-100">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="w-8 h-8 rounded-lg flex items-center justify-center transform rotate-3 bg-amber-400 text-neutral-900">
<span className="font-semibold text-lg leading-none">M</span>
</div>
<span className="font-semibold text-xl tracking-tight text-neutral-900">MOVA</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-normal transition-colors text-neutral-600 hover:text-neutral-900" href="#philosophie">Notre Philosophie</a>
<a className="text-base font-normal transition-colors text-neutral-600 hover:text-neutral-900" href="#services">Services</a>
<a className="text-base font-normal transition-colors text-neutral-600 hover:text-neutral-900" href="#temoignages">Témoignages</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-base font-medium hover:bg-amber-500 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-neutral-900 bg-amber-400" href="#contact">
                Prendre rendez-vous
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-8 bg-teal-50 border-teal-100 text-teal-800" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" style={{}}></span>
</span>
                        Spécialisé Seniors (50 ans et +)
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-neutral-900">
                        Investissez dans votre <span className="relative whitespace-nowrap"><span className="relative z-10">longévité</span><span className="absolute bottom-1 left-0 right-0 h-4 -rotate-1 -z-10 bg-amber-200/60"></span></span> dès aujourd'hui.
                    </h1>
<p className="text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-neutral-600">
                        Le coaching nutrition et sport pensé pour vous garder en bonne santé. Activez votre vitalité, renforcez votre corps et profitez pleinement de chaque instant.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" href="#contact">
                            Commencer maintenant
                            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 border rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-2 bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50" href="#instagram">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            Découvrir l'univers
                        </a>
</div>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none relative">

<div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl border bg-neutral-100 border-neutral-200">

<div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-teal-50" style={{}}></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="text-center space-y-4 p-8">
<div className="p-4 rounded-2xl shadow-sm inline-block mb-4 rotate-3 transform bg-white">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-green-100">
<svg aria-hidden="true" className="lucide lucide-activity w-6 h-6 text-green-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="text-left">
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Énergie</p>
<p className="text-lg font-semibold text-neutral-900">+40%</p>
</div>
</div>
</div>
<div className="block"></div>
<div className="p-4 rounded-2xl shadow-sm inline-block -rotate-2 transform bg-white">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-amber-100">
<svg aria-hidden="true" className="lucide lucide-smile w-6 h-6 text-amber-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="text-left">
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Bien-être</p>
<p className="text-lg font-semibold text-neutral-900">Optimal</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="philosophie">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6 text-neutral-900">Pourquoi se faire accompagner après 50 ans ?</h2>
<p className="text-xl leading-relaxed text-neutral-600">
                    Ce n'est pas une question d'âge, c'est une question de maintenance. Adopter les bons réflexes maintenant est la clé d'une longévité heureuse et autonome.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-amber-100 text-amber-600">
<svg aria-hidden="true" className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Prévention Santé</h3>
<p className="text-lg leading-relaxed text-neutral-600">
                        Réduisez les risques liés à l'âge. Une nutrition adaptée et du mouvement renforcent votre capital osseux et musculaire.
                    </p>
</div>

<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-teal-100 text-teal-700" style={{}}>
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Énergie &amp; Vitalité</h3>
<p className="text-lg leading-relaxed text-neutral-600">
                        Fini les coups de barre. Retrouvez un niveau d'énergie constant pour profiter de vos proches et de vos passions.
                    </p>
</div>

<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-neutral-900">Charge Mentale Allégée</h3>
<p className="text-lg leading-relaxed text-neutral-600">
                        Plus besoin de réfléchir à "quoi manger" ou "quel exercice faire". Je vous guide pas à pas avec une méthode claire.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-neutral-900">Mes offres de coaching</h2>
<p className="text-xl text-neutral-600">Des solutions adaptées à vos besoins, en solo ou en groupe.</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="group relative rounded-2xl border p-8 hover:border-teal-500 transition-colors duration-300 bg-white border-neutral-200" style={{}}>
<h3 className="text-2xl font-medium mb-2 text-neutral-900">Sport Semi-Privé</h3>
<p className="text-lg text-neutral-500 mb-6">La motivation du groupe, le suivi du coach.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-neutral-900">35€</span>
<span className="text-lg text-neutral-500">/séance</span>
</div>
<p className="text-sm mb-8 text-neutral-400">*Par personne, min. 3 personnes</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Dynamique collective
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Correction des mouvements
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Ambiance conviviale
                        </li>
</ul>
<a className="flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors bg-neutral-100 text-neutral-900 hover:bg-neutral-200" href="#contact">
                        Réserver une séance
                    </a>
</div>

<div className="group relative rounded-2xl border p-8 shadow-2xl transform lg:-translate-y-4 bg-neutral-900 border-neutral-800">
<div className="absolute top-0 right-0 text-sm font-semibold px-4 py-1 rounded-bl-xl rounded-tr-xl bg-amber-400 text-neutral-900">
                        Populaire
                    </div>
<h3 className="text-2xl font-medium mb-2 text-white">Suivi Global 3 Mois</h3>
<p className="text-lg mb-6 text-neutral-400">Nutrition &amp; Sport pour une transformation durable.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white">120€</span>
<span className="text-lg text-neutral-400">/mois</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-lg text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-amber-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Programme sportif personnalisé
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-amber-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Rééquilibrage alimentaire complet
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-300">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-amber-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Suivi hebdomadaire &amp; ajustements
                        </li>
</ul>
<a className="flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition-colors bg-amber-400 text-neutral-900" href="#contact">
                        Commencer ma transformation
                    </a>
</div>

<div className="group relative rounded-2xl border p-8 hover:border-teal-500 transition-colors duration-300 bg-white border-neutral-200" style={{}}>
<h3 className="text-2xl font-medium mb-2 text-neutral-900">Sport Privé</h3>
<p className="text-lg text-neutral-500 mb-6">Attention exclusive et progression accélérée.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-neutral-900">80€</span>
<span className="text-lg text-neutral-500">/séance</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            100% sur mesure
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            À domicile ou en extérieur
                        </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 mt-1 flex-shrink-0 text-teal-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Adaptation en temps réel
                        </li>
</ul>
<a className="flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors bg-neutral-100 text-neutral-900 hover:bg-neutral-200" href="#contact">
                        Réserver mon coach
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-teal-50 border-teal-100" id="temoignages" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-16 text-teal-900" style={{}}>Elles ont repris le pouvoir sur leur santé</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-xl shadow-sm border bg-white border-teal-100/50" style={{}}>
<div className="flex gap-1 mb-4 text-amber-400">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6 text-neutral-700">"Je pensais qu'à 58 ans, c'était trop tard pour se remuscler. Céline m'a prouvé le contraire. J'ai moins de douleurs au dos et une énergie folle."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold bg-teal-200 text-teal-800" style={{}}>M</div>
<div>
<p className="font-medium text-neutral-900">Martine D.</p>
<p className="text-sm text-neutral-500">Coaching Privé</p>
</div>
</div>
</div>
<div className="p-8 rounded-xl shadow-sm border bg-white border-teal-100/50" style={{}}>
<div className="flex gap-1 mb-4 text-amber-400">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6 text-neutral-700">"Le rééquilibrage alimentaire sans frustration ! J'ai perdu du poids sans avoir l'impression d'être au régime, et surtout, je mange mieux."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold bg-amber-200 text-amber-800">S</div>
<div>
<p className="font-medium text-neutral-900">Sophie L.</p>
<p className="text-sm text-neutral-500">Suivi 3 Mois</p>
</div>
</div>
</div>
<div className="p-8 rounded-xl shadow-sm border bg-white border-teal-100/50" style={{}}>
<div className="flex gap-1 mb-4 text-amber-400">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6 text-neutral-700">"Les séances en petit groupe sont super motivantes. On rit, on transpire, et Céline adapte toujours les exercices à nos capacités."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold bg-teal-200 text-teal-800" style={{}}>C</div>
<div>
<p className="font-medium text-neutral-900">Catherine B.</p>
<p className="text-sm text-neutral-500">Semi-Privé</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white" id="instagram">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col items-center justify-center text-center mb-12">
<svg aria-hidden="true" className="lucide lucide-instagram w-10 h-10 mb-4 text-neutral-900" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-neutral-900">Rejoignez le mouvement MOVA</h2>
<p className="text-xl mb-8 text-neutral-600">Des conseils quotidiens, des recettes et de la motivation.</p>
<a className="inline-flex items-center gap-2 text-lg font-medium border-b-2 transition-all pb-0.5 text-amber-600 hover:text-amber-700 border-amber-200 hover:border-amber-400" href="#">
                    @celine_mova.coaching <svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">

<div className="aspect-square rounded-lg flex items-center justify-center p-4 text-center relative overflow-hidden group bg-amber-200">
<div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity bg-amber-400"></div>
<p className="relative z-10 font-bold text-sm md:text-base uppercase text-neutral-900">6 semaines d'écart<br/>-11cm taille</p>
</div>

<div className="aspect-square rounded-lg overflow-hidden group bg-neutral-200">
<div className="w-full h-full flex items-center justify-center text-neutral-500 bg-neutral-300">
<svg aria-hidden="true" className="lucide lucide-image w-8 h-8" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>

<div className="aspect-square rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden group bg-amber-100">
<div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity bg-amber-300"></div>
<p className="relative z-10 font-bold text-xs md:text-sm text-center uppercase leading-tight text-neutral-900">Comment bien<br/>organiser sa<br/>semaine ?</p>
</div>

<div className="aspect-square rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden group bg-teal-100" style={{}}>
<div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity bg-teal-200" style={{}}></div>
<p className="relative z-10 font-bold text-sm md:text-base text-center text-teal-900" style={{}}>Propagandes<br/>à la poubelle</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900 text-white" id="contact" style={{}}>
<div className="max-w-4xl mx-auto px-6">
<div className="backdrop-blur-sm rounded-3xl p-8 lg:p-12 border shadow-2xl bg-teal-800/50 border-teal-700" style={{}}>
<div className="text-center mb-10">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Prêt(e) à commencer ?</h2>
<p className="text-xl text-teal-100" style={{}}>Remplissez ce formulaire pour un premier échange gratuit sur vos objectifs.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-teal-100" htmlFor="firstname" style={{}}>Prénom</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-teal-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-teal-900/50 border-teal-600 text-white" id="firstname" placeholder="Votre prénom" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-teal-100" htmlFor="lastname" style={{}}>Nom</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-teal-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-teal-900/50 border-teal-600 text-white" id="lastname" placeholder="Votre nom" style={{}} type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-teal-100" htmlFor="email" style={{}}>Email</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-teal-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-teal-900/50 border-teal-600 text-white" id="email" placeholder="vous@exemple.com" style={{}} type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-teal-100" htmlFor="interest" style={{}}>Je suis intéressé(e) par</label>
<div className="relative">
<select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent appearance-none transition-all bg-teal-900/50 border-teal-600 text-white" id="interest" style={{}}>
<option>Accompagnement 3 mois (Nutrition &amp; Sport)</option>
<option>Sport Privé</option>
<option>Sport Semi-Privé</option>
<option>Juste une question</option>
</select>
<svg aria-hidden="true" className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-teal-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-teal-100" htmlFor="message" style={{}}>Votre message</label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-teal-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-teal-900/50 border-teal-600 text-white" id="message" placeholder="Dites-moi en plus sur vos objectifs..." rows="4" style={{}}></textarea>
</div>
<button className="w-full font-semibold py-4 rounded-lg hover:bg-amber-500 transition-colors shadow-lg text-lg bg-amber-400 text-neutral-900 shadow-amber-900/20" type="button">
                        Envoyer ma demande
                    </button>
<p className="text-xs text-center mt-4 text-teal-400" style={{}}>Vos données restent confidentielles et ne seront jamais partagées.</p>
</form>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-neutral-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center transform rotate-3 bg-amber-400 text-neutral-900">
<span className="font-bold text-xs leading-none">M</span>
</div>
<span className="font-semibold text-lg tracking-tight text-neutral-900">MOVA</span>
</div>
<div className="text-neutral-500 text-base">
                © 2023 MOVA Coaching. Tous droits réservés.
            </div>
<div className="flex gap-6">
<a className="hover:text-amber-500 transition-colors text-neutral-400" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-amber-500 transition-colors text-neutral-400" href="#">
<svg aria-hidden="true" className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:text-amber-500 transition-colors text-neutral-400" href="#">
<svg aria-hidden="true" className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
