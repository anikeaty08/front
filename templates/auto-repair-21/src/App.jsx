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



{
"@context":"https://schema.org",
"@type":"AutoRepair",
"name":"Schaerbeek Auto Serrurerie",
"alternateName":"SAS Dépannage 24/7",
"image":"https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1600&auto=format&fit=crop",
"address":{
"@type":"PostalAddress",
"streetAddress":"Chaussée de Haecht 123",
"addressLocality":"Schaerbeek",
"postalCode":"1030",
"addressCountry":"BE"
},
"geo":{"@type":"GeoCoordinates","latitude":"50.867","longitude":"4.377"},
"telephone":"+32 465 64 71 18",
"areaServed":"Schaerbeek et environs",
"openingHours":"Mo-Su 00:00-23:59",
"url":"https://example.com",
"sameAs":["https://facebook.com","https://instagram.com","https://linkedin.com"],
"description":"Déblocage, serrurerie automobile, clés, entretien, diagnostic électronique. Intervention rapide 24/7."
}



    (function(){ try { document.getElementById('year').textContent = new Date().getFullYear(); } catch(e) {} })();
  
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-white focus:text-black transition" href="#contenu">Aller au contenu</a>
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/[0.02] border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a aria-label="Accueil" className="flex items-center gap-3 group" href="#accueil">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 ring-white/15 bg-white/5 group-hover:bg-white/10 transition">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<span className="text-white text-base tracking-tight font-semibold">SAS</span>
<span className="text-white/60 text-sm">Schaerbeek Auto Serrurerie</span>
</a>

<nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
<a aria-current="page" className="text-sm text-white/80 hover:text-white transition" href="#accueil">Accueil</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#services">Services</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#a-propos">À propos</a>
<a className="text-sm text-white/80 hover:text-white transition" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a aria-label="Appeler le numéro +32 465 64 71 18" className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md ring-1 ring-white/15 hover:ring-white/25 bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-600 transition" href="tel:+32465647118">

<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.07a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="tracking-tight font-medium">+32 465 64 71 18</span>
</a>
<a className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-[#E60012] hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-600 hover:scale-[1.02] hover:animate-pulse transition will-change-transform" href="#contact">
<span className="tracking-tight font-semibold">Dépannage 24/7</span>

<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z"></path>
</svg>
</a>
</div>
</div>

<nav aria-label="Navigation mobile" className="md:hidden -mt-2 mb-3 overflow-x-auto no-scrollbar">
<div className="flex gap-4 py-2">
<a className="text-sm text-white/80 hover:text-white transition whitespace-nowrap" href="#accueil">Accueil</a>
<a className="text-sm text-white/80 hover:text-white transition whitespace-nowrap" href="#services">Services</a>
<a className="text-sm text-white/80 hover:text-white transition whitespace-nowrap" href="#a-propos">À propos</a>
<a className="text-sm text-white/80 hover:text-white transition whitespace-nowrap" href="#contact">Contact</a>
</div>
</nav>
</div>
</header>
<main id="contenu">

<section className="relative" id="accueil">
<div className="absolute inset-0">
<img alt="Atelier automobile moderne avec véhicule" className="h-full w-full object-cover" height="1200" src="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" width="2000"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/60"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur">

<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-xs text-white/80">Intervention rapide — Schaerbeek &amp; environs</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
            Déblocage — Serrurerie Automobile — Entretien
          </h1>
<p className="mt-4 text-base sm:text-lg text-white/80">
            Dépannage 24/7, clés et serrures auto, entretien de véhicules modernes et diagnostic électronique. +20 ans d’expérience, service fiable et garanti.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a aria-label="Demandez un dépannage 24/7" className="inline-flex items-center gap-2 text-base px-5 py-3 rounded-md bg-[#E60012] hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-600 hover:scale-105 hover:animate-pulse transition will-change-transform" href="#contact">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<path d="M4.93 4.93l4.24 4.24"></path>
<path d="M14.83 14.83l4.24 4.24"></path>
<path d="M14.83 9.17l4.24-4.24"></path>
<path d="M4.93 19.07l4.24-4.24"></path>
</svg>
<span className="tracking-tight font-semibold">Demandez un dépannage 24/7</span>
</a>
<a aria-label="Appeler maintenant le service d'urgence" className="inline-flex items-center gap-2 text-base px-5 py-3 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white transition" href="tel:+32465647118">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.05 7.95a5 5 0 0 1 2 2m1.5-4.5a9 9 0 0 1 3 3M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.07a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="tracking-tight font-medium">Appeler maintenant</span>
</a>
</div>
</div>
</div>

<div className="pointer-events-none absolute right-0 top-12 hidden lg:block">
<img alt="Clé et serrure automobile" className="rounded-l-xl ring-1 ring-white/10 shadow-2xl shadow-black/40 object-cover" decoding="async" height="640" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" width="520"/>
</div>
</section>

<section className="relative" id="services">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Nos services</h2>
<p className="mt-2 text-white/70">Solutions rapides et fiables pour votre véhicule et vos serrures.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition" href="#contact">
<span className="font-medium">Obtenir un devis</span>

<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition p-5">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md grid place-items-center bg-[#E60012]/15 ring-1 ring-[#E60012]/30">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4l1 2 3 1 2 5v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2H8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6l2-5 3-1 1-2z"></path>
<path d="M7 13h10"></path>
</svg>
</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Serrurerie automobile</h3>
<p className="mt-2 text-sm text-white/70">Ouverture de portes, anti-démarrage, déblocage sans dommages.</p>
</article>

<article className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition p-5">
<div className="h-10 w-10 rounded-md grid place-items-center bg-[#E60012]/15 ring-1 ring-[#E60012]/30">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="15.5" r="5.5"></circle>
<path d="M21 2l-9.6 9.6"></path>
<path d="M16 7l-3 3"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Clé perdue / réparation</h3>
<p className="mt-2 text-sm text-white/70">Reproduction, programmation, coques et lames, télécommandes.</p>
</article>

<article className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition p-5">
<div className="h-10 w-10 rounded-md grid place-items-center bg-[#E60012]/15 ring-1 ring-[#E60012]/30">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a4 4 0 1 0-5.66 5.66L2 19v3h3l7.04-7.04a4 4 0 0 0 2.66-8.66z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Entretien véhicule moderne</h3>
<p className="mt-2 text-sm text-white/70">Vidange, freins, suspensions, pneus — respect des préconisations.</p>
</article>

<article className="group rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition p-5">
<div className="h-10 w-10 rounded-md grid place-items-center bg-[#E60012]/15 ring-1 ring-[#E60012]/30">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="6" width="6" x="9" y="9"></rect>
<path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path>
</svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Diagnostic électronique</h3>
<p className="mt-2 text-sm text-white/70">Lecture OBD, pannes électriques, capteurs et recalibrages.</p>
</article>
</div>
</div>
</section>

<section className="relative" id="a-propos">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Pourquoi nous choisir</h2>
<p className="text-white/80">Expertise locale, transparence et interventions rapides. Notre atelier est équipé pour les véhicules modernes comme pour les solutions de serrurerie pointues.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E60012]/20 ring-1 ring-[#E60012]/40">

<svg className="h-3.5 w-3.5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div>
<p className="font-medium tracking-tight">+ 20 ans d’expérience</p>
<p className="text-sm text-white/70">Savoir-faire éprouvé, formation continue.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E60012]/20 ring-1 ring-[#E60012]/40">
<svg className="h-3.5 w-3.5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</span>
<div>
<p className="font-medium tracking-tight">Intervention rapide</p>
<p className="text-sm text-white/70">Dépannage 24/7 sur Schaerbeek et alentours.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E60012]/20 ring-1 ring-[#E60012]/40">

<svg className="h-3.5 w-3.5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 11l2 2 4-4"></path><path d="M21 12a9 9 0 1 1-9-9"></path></svg>
</span>
<div>
<p className="font-medium tracking-tight">Garantie satisfaction</p>
<p className="text-sm text-white/70">Travaux garantis, pièces de qualité.</p>
</div>
</li>
</ul>
<div className="pt-4 flex gap-3">
<a className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition" href="#services">
                Voir nos services
                <svg className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-[#E60012] hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-600 hover:scale-[1.02] hover:animate-pulse transition" href="#contact">
                Nous contacter
                <svg className="h-4 w-4" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H3"></path><path d="M7 6l-4 4 4 4"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Mécanicien au travail dans l’atelier" className="h-60 w-full object-cover rounded-lg ring-1 ring-white/10" decoding="async" height="600" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" width="900"/>
<img alt="Outils et équipement d’atelier automobile" className="h-60 w-full object-cover rounded-lg ring-1 ring-white/10" decoding="async" height="600" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" width="900"/>
<img alt="Diagnostic électronique sur véhicule" className="h-60 w-full object-cover rounded-lg ring-1 ring-white/10 col-span-2" decoding="async" height="600" loading="lazy" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=900&amp;auto=format&amp;fit=crop" width="900"/>
</div>
</div>
</div>
</section>

<section aria-labelledby="temoignages-heading" className="relative">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="rounded-2xl bg-white text-neutral-900 ring-1 ring-black/10 p-8 sm:p-10">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold" id="temoignages-heading">Témoignages clients</h2>
<p className="mt-2 text-neutral-600">Des interventions efficaces et un service attentionné.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<figure className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Photo client" className="h-10 w-10 rounded-full object-cover" decoding="async" height="80" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop" width="80"/>
<figcaption>
<p className="font-medium tracking-tight">Amina D.</p>
<p className="text-sm text-neutral-600">Schaerbeek</p>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-neutral-800">
<span className="sr-only">Citation:</span>
<span className="inline-block align-middle mr-1">

<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h5v10H3z"></path><path d="M16 7h5v10h-5z"></path></svg>
</span>
                Bloquée devant chez moi, porte ouverte en 10 minutes, sans aucun dégât. Merci !
              </blockquote>
</figure>

<figure className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Photo client" className="h-10 w-10 rounded-full object-cover" decoding="async" height="80" loading="lazy" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" width="80"/>
<figcaption>
<p className="font-medium tracking-tight">Louis P.</p>
<p className="text-sm text-neutral-600">Evere</p>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-neutral-800">
<span className="sr-only">Citation:</span>
                Clé perdue, nouvelle clé programmée le jour même. Tarifs honnêtes.
              </blockquote>
</figure>

<figure className="rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<img alt="Photo client" className="h-10 w-10 rounded-full object-cover" decoding="async" height="80" loading="lazy" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" width="80"/>
<figcaption>
<p className="font-medium tracking-tight">Sofia R.</p>
<p className="text-sm text-neutral-600">Bruxelles</p>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-neutral-800">
<span className="sr-only">Citation:</span>
                Entretien complet et diagnostic précis. Mon SUV roule nickel.
              </blockquote>
</figure>
</div>
</div>
</div>
</section>

<section className="relative" id="blog">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Actualités &amp; conseils</h2>
<p className="mt-2 text-white/70">Infos utiles pour l’entretien et la sécurité de votre véhicule.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition" href="#contact">Nous écrire</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition">
<img alt="Clé intelligente et démarreur" className="h-44 w-full object-cover" decoding="async" height="800" loading="lazy" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" width="1200"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Clés intelligentes: que faire en cas de panne ?</h3>
<p className="mt-2 text-sm text-white/70">Les gestes simples avant d’appeler, et comment éviter la perte totale.</p>
<div className="mt-4 flex items-center justify-between text-xs text-white/60">
<span>3 min de lecture</span>
<time datetime="2025-03-01">1 Mar 2025</time>
</div>
</div>
</article>

<article className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition">
<img alt="Entretien huile moteur" className="h-44 w-full object-cover" decoding="async" height="800" loading="lazy" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" width="1200"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Entretien: intervalle de vidange et types d’huiles</h3>
<p className="mt-2 text-sm text-white/70">Nos recommandations selon le kilométrage et le style de conduite.</p>
<div className="mt-4 flex items-center justify-between text-xs text-white/60">
<span>4 min de lecture</span>
<time datetime="2025-02-14">14 Fév 2025</time>
</div>
</div>
</article>

<article className="overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/20 transition">
<img alt="Diagnostic électronique OBD" className="h-44 w-full object-cover" decoding="async" height="800" loading="lazy" src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" width="1200"/>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Voyant moteur allumé: les 5 réflexes à avoir</h3>
<p className="mt-2 text-sm text-white/70">Comprendre l’alerte et limiter les risques avant la prise en charge.</p>
<div className="mt-4 flex items-center justify-between text-xs text-white/60">
<span>2 min de lecture</span>
<time datetime="2025-01-22">22 Jan 2025</time>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Vous avez une urgence ?</h2>
<p className="mt-2 text-white/70">Nous sommes disponibles 24/7. Donnez-nous quelques détails et nous vous rappelons rapidement.</p>
<form action="#" aria-label="Formulaire de contact" className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" method="post">
<div>
<label className="block text-sm text-white/80" htmlFor="nom">Nom</label>
<input className="mt-1 w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600" id="nom" name="nom" placeholder="Votre nom" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-white/80" htmlFor="tel">Téléphone</label>
<input className="mt-1 w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600" id="tel" inputmode="tel" name="tel" placeholder="+32 ..." required="" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-white/80" htmlFor="message">Message</label>
<textarea className="mt-1 w-full rounded-md bg-white/5 ring-1 ring-white/15 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-600" id="message" name="message" placeholder="Décrivez le problème (modèle véhicule, lieu, ...)" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#E60012] hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-red-600 hover:scale-[1.02] hover:animate-pulse transition" type="submit">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
<span className="tracking-tight font-semibold">Envoyer la demande</span>
</button>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition" href="tel:+32465647118">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.07a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg>
<span className="font-medium">Appeler</span>
</a>
</div>
</form>
</div>
<aside className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-8">
<h3 className="text-xl tracking-tight font-semibold">Coordonnées</h3>
<div className="mt-4 space-y-4">
<div className="flex items-start gap-3">

<svg aria-hidden="true" className="h-5 w-5 flex-none" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-white/80">Chaussée de Haecht 123, 1030 Schaerbeek</p>
</div>
<div className="flex items-start gap-3">

<svg aria-hidden="true" className="h-5 w-5 flex-none" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.07a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg>
<p><a aria-label="Téléphoner au +32 465 64 71 18" className="text-white hover:text-red-500 transition" href="tel:+32465647118">+32 465 64 71 18</a></p>
</div>
<div className="flex items-start gap-3">

<svg aria-hidden="true" className="h-5 w-5 flex-none" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
<p><a className="text-white hover:text-red-500 transition" href="mailto:contact@example.com">contact@example.com</a></p>
</div>
<div className="pt-4">
<p className="text-white/60 text-sm">Disponibles 24/7 — Déplacement rapide.</p>
</div>
<div className="pt-6 flex items-center gap-3">
<a aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div></aside>
</div>
</div>

</section>
</main>
<footer className="border-t border-white/10 bg-black/60">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md grid place-items-center ring-1 ring-white/15 bg-white/5">
<svg className="h-5 w-5" fill="none" stroke="#E60012" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<span className="text-white text-base tracking-tight font-semibold">SAS</span>
</div>
<p className="mt-3 text-sm text-white/70 max-w-md">Déblocage, serrurerie automobile, entretien et diagnostic. Intervention rapide sur Schaerbeek et environs.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Navigation</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-white/80 hover:text-white transition" href="#accueil">Accueil</a></li>
<li><a className="text-white/80 hover:text-white transition" href="#services">Services</a></li>
<li><a className="text-white/80 hover:text-white transition" href="#a-propos">À propos</a></li>
<li><a className="text-white/80 hover:text-white transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Contact</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 mt-0.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Chaussée de Haecht 123, 1030 Schaerbeek
            </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 mt-0.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.07a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg>
<a className="text-white/80 hover:text-white transition" href="tel:+32465647118">+32 465 64 71 18</a>
</li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 mt-0.5" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
<a className="text-white/80 hover:text-white transition" href="mailto:contact@example.com">contact@example.com</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pb-10">
<div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
<p>© <span id="year">2025</span> SAS — Tous droits réservés.</p>
<div className="flex items-center gap-3">
<a className="hover:text-white transition" href="#">Mentions légales</a>
<span aria-hidden="true">•</span>
<a className="hover:text-white transition" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
