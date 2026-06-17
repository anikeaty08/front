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
      

<nav className="fixed top-0 z-50 w-full border-b backdrop-blur-md border-zinc-900 bg-black/80">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-shield-check h-6 w-6 text-teal-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-medium tracking-tight">Thermic<span className="text-zinc-500">Pro</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="transition-colors hover:text-zinc-100" href="#solutions">Solutions</a>
<a className="transition-colors hover:text-zinc-100" href="#benefices">Bénéfices</a>
<a className="transition-colors hover:text-zinc-100" href="#expertise">Expertise</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all bg-zinc-100 text-black hover:bg-zinc-200" href="#contact">
                Demander un devis
            </a>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col text-center items-center">
<div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm border-teal-800 bg-teal-950 text-teal-300">
<span className="flex h-2 w-2 rounded-full mr-2 bg-teal-400"></span>
                    Innovation Groupe Durieu
                </div>
<h1 className="max-w-4xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl text-zinc-100">
                    L'isolation thermique<br className="hidden sm:block"/>
<span className="text-zinc-600">nouvelle génération.</span>
</h1>
<p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
                    Des revêtements réflectifs de pointe pour façades et toitures. Isolez, protégez et valorisez votre patrimoine avec la Gamme Thermique Pro.
                </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-12 items-center justify-center rounded-lg px-8 text-base font-medium shadow-sm hover:shadow-md transition-all bg-teal-400 text-black hover:bg-teal-300" href="#contact">
                        Obtenir une étude gratuite
                        <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border px-8 text-base font-medium transition-all border-zinc-800 bg-black text-zinc-100 hover:bg-zinc-950" href="#solutions">
                        Découvrir les produits
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent blur-3xl from-teal-900"></div>
</section>

<section className="py-20 border-t border-zinc-900" id="expertise">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="rounded-2xl p-8 lg:p-10 bg-zinc-950">
<div className="mb-6 h-10 w-10 flex items-center justify-center rounded-lg border shadow-sm bg-black border-zinc-800">
<svg aria-hidden="true" className="lucide lucide-alert-triangle h-5 w-5 text-zinc-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100">Le défi de la rénovation énergétique</h3>
<div className="space-y-4 text-lg leading-relaxed text-zinc-400">
<p className="">
                            Le changement climatique et un parc immobilier ancien imposent un défi majeur. Face à la hausse des coûts énergétiques et aux besoins croissants de confort (chauffage et climatisation), il devient impératif de sortir des schémas classiques.
                        </p>
<p className="">
                            Nous devons trouver des solutions innovantes, durables et économes pour garantir le bien-être de nos intérieurs.
                        </p>
</div>
</div>

<div className="pt-4 lg:pt-0">
<div className="mb-6 h-10 w-10 flex items-center justify-center rounded-lg border bg-teal-950 border-teal-900">
<svg aria-hidden="true" className="lucide lucide-award h-5 w-5 text-teal-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-100">100 ans d'expertise Groupe Durieu</h3>
<div className="space-y-4 text-lg leading-relaxed text-zinc-400">
<p>
                            Fort de son expertise séculaire dans la protection des matériaux, le Groupe Durieu a développé la <strong className="font-medium text-zinc-100">GAMME THERMIQUE PRO</strong>.
                        </p>
<p>
                            Ces revêtements réflectifs de pointe, conçus pour les plus hautes exigences, assurent une régulation thermique optimale, été comme hiver. <span className="font-medium text-teal-300">ThermicFaçade®</span>, <span className="font-medium text-teal-300">ThermicFlex</span> et <span className="font-medium text-teal-300">ThermicToit®</span> préservent l'esthétique et la longévité de vos bâtiments.
                        </p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-base text-zinc-500">Rejoignez les professionnels qui nous font confiance.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 text-black" id="benefices">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-4">Pourquoi choisir la Gamme Thermique Pro ?</h2>
<p className="text-xl text-zinc-600">Une solution complète pour la performance, l'économie et l'écologie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<svg aria-hidden="true" className="lucide lucide-trending-down h-8 w-8 mb-4 text-teal-600" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<h3 className="text-xl font-medium mb-2">Économies d'énergie</h3>
<p className="text-lg text-zinc-600">Réduction drastique de la consommation et des factures énergétiques.</p>
</div>

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<i className="h-8 w-8 mb-4 text-teal-600" data-lucide="sun-snowflake" strokeWidth="1.5"></i>
<h3 className="text-xl font-medium mb-2">Confort 4 Saisons</h3>
<p className="text-lg text-zinc-600">Amélioration significative du confort thermique, protégeant du chaud et du froid.</p>
</div>

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<svg aria-hidden="true" className="lucide lucide-droplets h-8 w-8 mb-4 text-teal-600" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<h3 className="text-xl font-medium mb-2">Contrôle de l'humidité</h3>
<p className="text-lg text-zinc-600">Limitation de la condensation et traitement de l'humidité structurelle.</p>
</div>

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<svg aria-hidden="true" className="lucide lucide-shield h-8 w-8 mb-4 text-teal-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h3 className="text-xl font-medium mb-2">Protection durable</h3>
<p className="text-lg text-zinc-600">Protection longue durée des bâtiments contre les intempéries.</p>
</div>

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<svg aria-hidden="true" className="lucide lucide-home h-8 w-8 mb-4 text-teal-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<h3 className="text-xl font-medium mb-2">Valorisation</h3>
<p className="text-lg text-zinc-600">Préservation du patrimoine et augmentation de la valeur immobilière.</p>
</div>

<div className="group p-6 rounded-xl border hover:border-teal-500/50 transition-colors bg-zinc-200/50 border-zinc-300">
<svg aria-hidden="true" className="lucide lucide-leaf h-8 w-8 mb-4 text-teal-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<h3 className="text-xl font-medium mb-2">Impact Positif</h3>
<p className="text-lg text-zinc-600">Une solution à impact environnemental positif et chantiers rapides.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="solutions">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16">
<span className="font-medium tracking-wide uppercase text-sm text-teal-400">Nos Solutions</span>
<h2 className="mt-2 text-4xl font-medium tracking-tight text-zinc-100">Une gamme complète pour l'enveloppe du bâtiment</h2>
</div>

<div className="mb-24">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 space-y-6">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-lg mb-4 bg-zinc-900">
<svg aria-hidden="true" className="lucide lucide-layout-grid h-6 w-6 text-zinc-100" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-100">ThermicFaçade®</h3>
<p className="text-xl leading-relaxed text-zinc-400">
                            Le revêtement idéal pour les murs extérieurs. Il offre une finition esthétique parfaite tout en créant une barrière thermique efficace. Idéal pour la rénovation de crépis, béton et maçonneries.
                        </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center text-lg text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check h-5 w-5 mr-3 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Finition mate élégante
                            </li>
<li className="flex items-center text-lg text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check h-5 w-5 mr-3 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Résistant aux UV et intempéries
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<img alt="Façade moderne blanche" className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Détail façade" className="rounded-2xl object-cover h-64 w-full shadow-lg translate-y-8" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="">
<div className="flex flex-col md:flex-row-reverse gap-12 items-center">
<div className="w-full md:w-1/2 space-y-6">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-lg mb-4 bg-zinc-900">
<svg aria-hidden="true" className="lucide lucide-arrow-up-from-line h-6 w-6 text-zinc-100" data-lucide="arrow-up-from-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 9-6-6-6 6"></path><path d="M12 3v14"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-100">ThermicFlex &amp; ThermicToit®</h3>
<p className="text-xl leading-relaxed text-zinc-400">
                            Solutions spécialisées pour les toitures inclinées et toits-terrasses. Ces revêtements réfléchissent jusqu'à 90% du rayonnement solaire, réduisant considérablement la température sous toiture en été.
                        </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center text-lg text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check h-5 w-5 mr-3 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Étanchéité renforcée
                            </li>
<li className="flex items-center text-lg text-zinc-300">
<svg aria-hidden="true" className="lucide lucide-check h-5 w-5 mr-3 text-teal-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Adapté aux tuiles, tôles et bitume
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<img alt="Toiture blanche" className="rounded-2xl object-cover h-64 w-full shadow-lg" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Toit terrasse" className="rounded-2xl object-cover h-64 w-full shadow-lg translate-y-8" src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-zinc-950 border-zinc-800" id="contact">
<div className="mx-auto max-w-4xl px-6">
<div className="rounded-3xl p-8 md:p-12 shadow-xl border bg-black border-zinc-900">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-zinc-100">Prêt à améliorer votre confort ?</h2>
<p className="text-xl text-zinc-500">
                        Particuliers ou professionnels, contactez-nous pour une étude personnalisée de votre projet d'isolation.
                    </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="name">Nom complet</label>
<input className="w-full rounded-lg px-4 py-3 text-base outline-none ring-1 focus:ring-2 focus:ring-teal-500 transition-all placeholder:text-zinc-400 border-zinc-800 bg-zinc-950 ring-zinc-800" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="email">Email professionnel</label>
<input className="w-full rounded-lg px-4 py-3 text-base outline-none ring-1 focus:ring-2 focus:ring-teal-500 transition-all placeholder:text-zinc-400 border-zinc-800 bg-zinc-950 ring-zinc-800" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="phone">Téléphone</label>
<input className="w-full rounded-lg px-4 py-3 text-base outline-none ring-1 focus:ring-2 focus:ring-teal-500 transition-all placeholder:text-zinc-400 border-zinc-800 bg-zinc-950 ring-zinc-800" id="phone" placeholder="06 12 34 56 78" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="type">Type de projet</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg px-4 py-3 text-base outline-none ring-1 focus:ring-2 focus:ring-teal-500 transition-all border-zinc-800 bg-zinc-950 ring-zinc-800 text-zinc-300" id="type">
<option>Rénovation Façade</option>
<option>Isolation Toiture</option>
<option>Projet complet</option>
<option>Demande d'informations</option>
</select>
<svg aria-hidden="true" className="lucide lucide-chevron-down absolute right-4 top-3.5 h-5 w-5 pointer-events-none text-zinc-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300" htmlFor="message">Message</label>
<textarea className="w-full rounded-lg px-4 py-3 text-base outline-none ring-1 focus:ring-2 focus:ring-teal-500 transition-all placeholder:text-zinc-400 border-zinc-800 bg-zinc-950 ring-zinc-800" id="message" placeholder="Décrivez brièvement votre besoin..." rows="4"></textarea>
</div>
<button className="w-full rounded-lg px-8 py-4 text-lg font-medium transition-colors shadow-lg bg-teal-400 text-black hover:bg-teal-300 shadow-teal-400/20" type="submit">
                        Envoyer ma demande
                    </button>
<p className="text-center text-sm mt-4 text-zinc-600">Vos données sont sécurisées. Réponse sous 24h ouvrées.</p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t bg-black border-zinc-900">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<svg aria-hidden="true" className="lucide lucide-shield-check h-5 w-5 text-zinc-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-base font-medium text-zinc-100">ThermicPro <span className="font-normal text-zinc-600">by Groupe Durieu</span></span>
</div>
<div className="flex gap-8 text-sm text-zinc-500">
<a className="hover:text-zinc-100" href="#">Mentions Légales</a>
<a className="hover:text-zinc-100" href="#">Politique de confidentialité</a>
<span>© 2023 Tous droits réservés</span>
</div>
</div>
</footer>


    </>
  );
}
