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
      

<div className="hidden md:block border-b bg-amber-950 text-amber-100 border-amber-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-[13px]">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="megaphone"></svg>
<span className="i18n en">Client Portal (Phase 2) — Secure access for reports, invoices, and updates.</span>
<span className="i18n fr hidden">Portail Client (Phase 2) — Accès sécurisé aux rapports, factures et suivis.</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="shield-check"></svg>
<span className="i18n en">SSL &amp; GDPR-ready</span>
<span className="i18n fr hidden">SSL &amp; RGPD prêts</span>
</div>
<a className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200" href="#contact">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="message-square"></svg>
<span className="i18n en underline underline-offset-2 decoration-emerald-700/60">Ask a question</span>
<span className="i18n fr hidden underline underline-offset-2 decoration-emerald-700/60">Poser une question</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-black/90 border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="flex items-center justify-center w-9 h-9 rounded-md border shadow-sm border-zinc-800 bg-black">
<span className="font-semibold tracking-tight text-zinc-100">CP</span>
</div>
<div className="leading-tight">
<div className="font-medium tracking-tight text-zinc-100">Cabinet PERFORMANCES</div>
<div className="text-[12px] text-zinc-500">Strategy. People. Growth.</div>
</div>
</a>

<nav className="hidden lg:flex items-center gap-7 text-[15px]">
<a className="text-zinc-300 hover:text-zinc-100" href="#home">Home</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#about">About</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#services">Services</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#sectors">Sectors</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#insights">Insights</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#training">Training &amp; Events</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#careers">Careers</a>
<a className="text-zinc-300 hover:text-zinc-100" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-3">

<div className="inline-flex items-center border rounded-md overflow-hidden border-zinc-800 bg-black">
<button className="px-2.5 py-1.5 text-[13px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 text-zinc-300 hover:bg-zinc-950" id="btn-en">EN</button>
<div className="w-px h-5 bg-zinc-800"></div>
<button className="px-2.5 py-1.5 text-[13px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 text-zinc-300 hover:bg-zinc-950" id="btn-fr">FR</button>
</div>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 bg-amber-400 text-black hover:bg-amber-300" href="#consult">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="calendar-check"></svg>
<span className="i18n en">Book a Consultation</span>
<span className="i18n fr hidden">Réserver une consultation</span>
</a>
</div>

<div className="lg:hidden flex items-center gap-2">
<div className="inline-flex items-center border rounded-md overflow-hidden border-zinc-800 bg-black">
<button className="px-2 py-1.5 text-[13px] font-medium text-zinc-300 hover:bg-zinc-950" id="m-btn-en">EN</button>
<div className="w-px h-5 bg-zinc-800"></div>
<button className="px-2 py-1.5 text-[13px] font-medium text-zinc-300 hover:bg-zinc-950" id="m-btn-fr">FR</button>
</div>
<input className="peer hidden" id="nav-toggle" type="checkbox"/>
<label className="p-2 rounded-md border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 border-zinc-800 bg-black hover:bg-zinc-950" htmlFor="nav-toggle">
<svg aria-hidden="true" className="w-5 h-5" data-lucide="menu"></svg>
<span className="sr-only">Menu</span>
</label>
</div>
</div>

<div className="lg:hidden peer-checked:block hidden" id="mobile-menu">
<div className="px-4 pb-4 border-t border-zinc-800 bg-black">
<nav className="grid py-2">
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#home">Home</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#about">About</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#services">Services</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#sectors">Sectors</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#insights">Insights</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#training">Training &amp; Events</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#careers">Careers</a>
<a className="py-2 text-zinc-300 hover:text-zinc-100" href="#contact">Contact</a>
</nav>
<a className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-400 text-black hover:bg-amber-300" href="#consult">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="calendar-check"></svg>
<span className="i18n en">Book a Consultation</span>
<span className="i18n fr hidden">Réserver une consultation</span>
</a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="relative h-[72vh] sm:h-[78vh] lg:h-[86vh] overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
<div className="max-w-2xl">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100">
<span className="i18n en">Empowering African Businesses Since 2002</span>
<span className="i18n fr hidden">Accompagner les entreprises africaines depuis 2002</span>
</h1>
<p className="mt-3 text-base sm:text-lg text-zinc-300">
<span className="i18n en">Strategy, People, and Systems for a Prosperous Future.</span>
<span className="i18n fr hidden">Stratégie, Talents et Systèmes pour un futur prospère.</span>
</p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 bg-amber-400 text-black hover:bg-amber-300" href="#services">
<svg aria-hidden="true" className="w-5 h-5" data-lucide="compass"></svg>
<span className="i18n en">Discover Our Services</span>
<span className="i18n fr hidden">Découvrir nos services</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 border-zinc-700 bg-black text-zinc-100 hover:border-zinc-600" href="#training">
<svg aria-hidden="true" className="w-5 h-5" data-lucide="graduation-cap"></svg>
<span className="i18n en">Join a Training</span>
<span className="i18n fr hidden">S’inscrire à une formation</span>
</a>
</div>
<div className="mt-8 grid grid-cols-3 max-w-md border rounded-lg divide-x bg-black/90 border-zinc-800 divide-zinc-800">
<div className="px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-zinc-100">20+</div>
<div className="text-[13px] i18n en text-zinc-400">Years of Impact</div>
<div className="text-[13px] i18n fr hidden text-zinc-400">Années d’impact</div>
</div>
<div className="px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-zinc-100">500+
<div className="text-[13px] i18n en text-zinc-400">Clients Served</div>
<div className="text-[13px] i18n fr hidden text-zinc-400">Clients accompagnés</div>
</div>
<div className="px-4 py-3">
<div className="text-2xl font-semibold tracking-tight text-zinc-100">Pan-African</div>
<div className="text-[13px] i18n en text-zinc-400">Expertise</div>
<div className="text-[13px] i18n fr hidden text-zinc-400">Expertise</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex items-center justify-between gap-6 overflow-x-auto">
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">ABJ CAPITAL</div>
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">KORHOGO AGRI</div>
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">CÔTE FINANCE</div>
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">SEN TOURISM</div>
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">OUA ENERGY</div>
<div className="shrink-0 px-3 py-2 rounded-md border tracking-tight border-zinc-800 text-zinc-400 bg-zinc-950">IV TECH</div>
</div>
</div>
</div>
</div></section>

<section className="py-16 sm:py-20" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
<span className="i18n en">Our Journey</span>
<span className="i18n fr hidden">Notre histoire</span>
</h2>
<p className="mt-2 max-w-3xl text-zinc-400">
<span className="i18n en">We partner with African businesses to unlock their full potential—aligning strategy, people, and systems since 2002.</span>
<span className="i18n fr hidden">Nous aidons les entreprises africaines à révéler leur plein potentiel—aligner stratégie, talents et systèmes depuis 2002.</span>
</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-zinc-700 bg-black hover:border-zinc-600" href="#consult">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="sparkle"></svg>
<span className="i18n en">Why Choose Us</span>
<span className="i18n fr hidden">Pourquoi nous choisir</span>
</a>
</div>

<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-lg border p-5 border-zinc-800 bg-black">
<div className="flex items-center gap-2 text-zinc-300">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="timeline"></svg>
<span className="text-sm font-medium">2002–2025</span>
</div>
<div className="mt-4 space-y-4">
<div className="flex gap-3">
<div className="w-20 text-zinc-500 text-sm">2002</div>
<div className="flex-1">
<div className="font-medium i18n en text-zinc-100">Founded in Abidjan</div>
<div className="font-medium i18n fr hidden text-zinc-100">Création à Abidjan</div>
<p className="text-sm i18n en text-zinc-400">First projects in organizational diagnostics and HR systems.</p>
<p className="text-sm i18n fr hidden text-zinc-400">Premiers projets en diagnostics organisationnels et systèmes RH.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-20 text-zinc-500 text-sm">2010</div>
<div className="flex-1">
<div className="font-medium i18n en text-zinc-100">Regional expansion</div>
<div className="font-medium i18n fr hidden text-zinc-100">Expansion régionale</div>
<p className="text-sm i18n en text-zinc-400">Scaling advisory and training across West Africa.</p>
<p className="text-sm i18n fr hidden text-zinc-400">Déploiement du conseil et de la formation en Afrique de l’Ouest.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-20 text-zinc-500 text-sm">2020</div>
<div className="flex-1">
<div className="font-medium i18n en text-zinc-100">Digital learning</div>
<div className="font-medium i18n fr hidden text-zinc-100">Apprentissage digital</div>
<p className="text-sm i18n en text-zinc-400">Launched blended programs and remote advisory.</p>
<p className="text-sm i18n fr hidden text-zinc-400">Lancement de programmes hybrides et conseil à distance.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-20 text-zinc-500 text-sm">2025</div>
<div className="flex-1">
<div className="font-medium i18n en text-zinc-100">Next chapter</div>
<div className="font-medium i18n fr hidden text-zinc-100">Nouvelle étape</div>
<p className="text-sm i18n en text-zinc-400">Client portal, deeper sector specialization, and data-driven insights.</p>
<p className="text-sm i18n fr hidden text-zinc-400">Portail client, spécialisation sectorielle et insights pilotés par la donnée.</p>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-amber-300" data-lucide="target"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Mission</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Mission</h3>
</div>
<p className="mt-2 text-sm i18n en text-zinc-400">We help leaders plan smarter, develop talent, and build resilient systems.</p>
<p className="mt-2 text-sm i18n fr hidden text-zinc-400">Nous aidons les dirigeants à mieux planifier, développer les talents et bâtir des systèmes résilients.</p>
</div>
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-emerald-300" data-lucide="sparkle"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Vision</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Vision</h3>
</div>
<p className="mt-2 text-sm i18n en text-zinc-400">A prosperous Africa powered by strong institutions and skilled people.</p>
<p className="mt-2 text-sm i18n fr hidden text-zinc-400">Une Afrique prospère portée par des institutions solides et des talents qualifiés.</p>
</div>
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-zinc-300" data-lucide="hexagon"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Values</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Valeurs</h3>
</div>
<ul className="mt-2 text-sm list-disc pl-5 space-y-1 text-zinc-400">
<li className="i18n en">Integrity</li>
<li className="i18n en">Excellence</li>
<li className="i18n en">African Perspective</li>
<li className="i18n fr hidden">Intégrité</li>
<li className="i18n fr hidden">Excellence</li>
<li className="i18n fr hidden">Perspective africaine</li>
</ul>
</div>
</div>
</div>

<div className="mt-10 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-lg border p-5 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-amber-300" data-lucide="star"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Why Choose Us</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Pourquoi nous choisir</h3>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-center gap-2 text-zinc-100">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="users"></svg>
<div className="text-sm font-medium i18n en">Senior team</div>
<div className="text-sm font-medium i18n fr hidden">Équipe senior</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Decades of advisory and training experience.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Des décennies d’expérience en conseil et formation.</p>
</div>
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-center gap-2 text-zinc-100">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="globe-2"></svg>
<div className="text-sm font-medium i18n en">African perspective</div>
<div className="text-sm font-medium i18n fr hidden">Perspective africaine</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Local insights with global standards.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Insights locaux, standards internationaux.</p>
</div>
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-center gap-2 text-zinc-100">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="bar-chart-3"></svg>
<div className="text-sm font-medium i18n en">Results you can measure</div>
<div className="text-sm font-medium i18n fr hidden">Des résultats mesurables</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Clear KPIs and sustainable outcomes.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Des KPI clairs et des résultats durables.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-emerald-300" data-lucide="quote"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Founder’s Message</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Message du Fondateur</h3>
</div>
<div className="mt-3 flex gap-3">
<img alt="Founder portrait" className="w-14 h-14 rounded-md object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm i18n en text-zinc-300">“Performance with purpose is our promise. We build leaders and systems that last.”</p>
<p className="text-sm i18n fr hidden text-zinc-300">« La performance utile est notre promesse. Nous formons des leaders et des systèmes durables. »</p>
<button className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-700 bg-black hover:border-zinc-600">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="play"></svg>
<span className="text-[13px] i18n en">Watch 45s</span>
<span className="text-[13px] i18n fr hidden">Voir 45s</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-b bg-black border-zinc-800" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Services</h2>
<p className="mt-2 i18n en text-zinc-400">Three pillars to drive sustainable performance.</p>
<p className="mt-2 i18n fr hidden text-zinc-400">Trois piliers pour une performance durable.</p>
</div>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-zinc-700 bg-black hover:border-zinc-600" href="/assets/cabinet-performances-brochure.pdf">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="download"></svg>
<span className="i18n en">Download Brochure (PDF)</span>
<span className="i18n fr hidden">Télécharger la brochure (PDF)</span>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-lg border p-5 hover:shadow-sm border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-5 h-5 text-amber-300" data-lucide="briefcase"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Advisory &amp; Consulting</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Conseil &amp; Advisory</h3>
</div>
<p className="mt-2 text-sm i18n en text-zinc-400">Strategy, Audits, HR, and organizational design.</p>
<p className="mt-2 text-sm i18n fr hidden text-zinc-400">Stratégie, Audits, RH et organisation.</p>
<div className="mt-4 space-y-3 text-sm">
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Challenge</div>
<div className="font-medium i18n fr hidden text-zinc-100">Challenge</div>
<p className="mt-1 i18n en text-zinc-400">Misaligned strategy and inefficient processes.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Stratégie mal alignée et processus inefficaces.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Our Approach</div>
<div className="font-medium i18n fr hidden text-zinc-100">Notre approche</div>
<p className="mt-1 i18n en text-zinc-400">Diagnostics, co-design, and pragmatic execution.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Diagnostics, co-conception et exécution pragmatique.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Results</div>
<div className="font-medium i18n fr hidden text-zinc-100">Résultats</div>
<p className="mt-1 i18n en text-zinc-400">Clear roadmaps, optimized costs, stronger culture.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Feuilles de route claires, coûts optimisés, culture renforcée.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 hover:shadow-sm border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-5 h-5 text-emerald-300" data-lucide="school"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Training &amp; Talent Development</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Formation &amp; Développement</h3>
</div>
<p className="mt-2 text-sm i18n en text-zinc-400">Leadership, management, and future skills.</p>
<p className="mt-2 text-sm i18n fr hidden text-zinc-400">Leadership, management et compétences d’avenir.</p>
<div className="mt-4 space-y-3 text-sm">
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Challenge</div>
<div className="font-medium i18n fr hidden text-zinc-100">Challenge</div>
<p className="mt-1 i18n en text-zinc-400">Skill gaps and low managerial effectiveness.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Écarts de compétences et efficacité managériale limitée.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Our Approach</div>
<div className="text-zinc- font-medium i18n fr hidden">Notre approche</div>
<p className="mt-1 i18n en text-zinc-400">Hands-on academies, coaching, and assessments.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Académies pratiques, coaching et assessments.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Results</div>
<div className="font-medium i18n fr hidden text-zinc-100">Résultats</div>
<p className="mt-1 i18n en text-zinc-400">Leaders who execute and teams that thrive.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Des leaders qui délivrent et des équipes engagées.</p>
</div>
</div>
</div>
<div className="rounded-lg border p-5 hover:shadow-sm border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-5 h-5 text-zinc-300" data-lucide="user-search"></svg>
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Recruitment &amp; Outsourcing</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Recrutement &amp; Externalisation</h3>
</div>
<p className="mt-2 text-sm i18n en text-zinc-400">From sourcing to onboarding and managed services.</p>
<p className="mt-2 text-sm i18n fr hidden text-zinc-400">Du sourcing à l’intégration et services managés.</p>
<div className="mt-4 space-y-3 text-sm">
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Challenge</div>
<div className="font-medium i18n fr hidden text-zinc-100">Challenge</div>
<p className="mt-1 i18n en text-zinc-400">Long hiring cycles and scarce talent.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Recrutements longs et talents rares.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Our Approach</div>
<div className="font-medium i18n fr hidden text-zinc-100">Notre approche</div>
<p className="mt-1 i18n en text-zinc-400">Curated pipelines, assessments, and SLA-backed delivery.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Pipelines ciblés, assessments et livraison sous SLA.</p>
</div>
<div className="rounded-md border p-3 border-zinc-800">
<div className="font-medium i18n en text-zinc-100">Results</div>
<div className="font-medium i18n fr hidden text-zinc-100">Résultats</div>
<p className="mt-1 i18n en text-zinc-400">Faster hiring and lower turnover.</p>
<p className="mt-1 i18n fr hidden text-zinc-400">Recrutements plus rapides et moindre turnover.</p>
</div>
</div>
</div>
</div>
<div className="mt-10 rounded-lg border p-6 border-zinc-800 bg-zinc-950" id="consult">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<h4 className="text-lg font-medium tracking-tight i18n en text-zinc-100">Let’s build your next performance story.</h4>
<h4 className="text-lg font-medium tracking-tight i18n fr hidden text-zinc-100">Construisons votre prochaine histoire de performance.</h4>
<p className="text-sm i18n en text-zinc-400">Tell us your challenge. We’ll respond within 24–48 hours.</p>
<p className="text-sm i18n fr hidden text-zinc-400">Parlez-nous de votre besoin. Réponse sous 24–48h.</p>
</div>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-emerald-400 text-black hover:bg-emerald-300" href="#contact">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="phone-call"></svg>
<span className="i18n en">Contact Us</span>
<span className="i18n fr hidden">Nous contacter</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="sectors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n en text-zinc-100">Sectors</h2>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n fr hidden text-zinc-100">Secteurs</h2>
<p className="mt-2 i18n en text-zinc-400">Where our expertise makes a difference.</p>
<p className="mt-2 i18n fr hidden text-zinc-400">Là où notre expertise fait la différence.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-emerald-300" data-lucide="sprout"></svg>
<div className="font-medium tracking-tight i18n en text-zinc-100">Agriculture</div>
<div className="font-medium tracking-tight i18n fr hidden text-zinc-100">Agriculture</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Supply chain audits and farmer training.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Audits de chaîne d’approvisionnement et formation des producteurs.</p>
<div className="mt-3 text-[13px] inline-flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="check-circle"></svg>
<span className="i18n en">Case study: 18% yield increase</span>
<span className="i18n fr hidden">Cas: +18% de rendement</span>
</div>
</div>
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-amber-300" data-lucide="luggage"></svg>
<div className="font-medium tracking-tight i18n en text-zinc-100">Tourism</div>
<div className="font-medium tracking-tight i18n fr hidden text-zinc-100">Tourisme</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Service design and leadership training.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Design de service et formation leadership.</p>
<div className="mt-3 text-[13px] inline-flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="check-circle"></svg>
<span className="i18n en">Case: 21% NPS lift</span>
<span className="i18n fr hidden">Cas: +21% de NPS</span>
</div>
</div>
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-zinc-300" data-lucide="landmark"></svg>
<div className="font-medium tracking-tight i18n en text-zinc-100">Public Sector</div>
<div className="font-medium tracking-tight i18n fr hidden text-zinc-100">Secteur public</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Policy execution and capacity building.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Exécution des politiques et renforcement de capacités.</p>
<div className="mt-3 text-[13px] inline-flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="check-circle"></svg>
<span className="i18n en">Case: faster service delivery</span>
<span className="i18n fr hidden">Cas: délais réduits</span>
</div>
</div>
<div className="rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-emerald-300" data-lucide="store"></svg>
<div className="font-medium tracking-tight i18n en text-zinc-100">SMEs</div>
<div className="font-medium tracking-tight i18n fr hidden text-zinc-100">PME</div>
</div>
<p className="mt-2 text-[13px] i18n en text-zinc-400">Growth strategy and HR systems.</p>
<p className="mt-2 text-[13px] i18n fr hidden text-zinc-400">Stratégie de croissance et systèmes RH.</p>
<div className="mt-3 text-[13px] inline-flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="check-circle"></svg>
<span className="i18n en">Case: 2x productivity</span>
<span className="i18n fr hidden">Cas: productivité x2</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-b bg-black border-zinc-800" id="insights">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n en text-zinc-100">Insights</h2>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n fr hidden text-zinc-100">Analyses</h2>
<p className="mt-2 i18n en text-zinc-400">Thought leadership from the field.</p>
<p className="mt-2 i18n fr hidden text-zinc-400">Retours d’expérience et perspectives.</p>
</div>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-zinc-700 bg-black hover:border-zinc-600" href="#">
<svg aria-hidden="true" className="w-4.5 h-4.5" data-lucide="rss"></svg>
<span className="i18n en">Visit the Blog</span>
<span className="i18n fr hidden">Voir le Blog</span>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<article className="rounded-lg border overflow-hidden hover:shadow-sm border-zinc-800 bg-black">
<img alt="Team workshop" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="text-[12px] font-medium text-emerald-300">Performance Tips</div>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n en text-zinc-100">Five daily rituals of effective managers</h3>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n fr hidden text-zinc-100">Cinq rituels quotidiens des managers efficaces</h3>
<p className="mt-1 text-sm i18n en text-zinc-400">Simple routines to drive clarity, focus, and momentum.</p>
<p className="mt-1 text-sm i18n fr hidden text-zinc-400">Des routines simples pour la clarté, le focus et l’élan.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
<span className="i18n en">Read more</span>
<span className="i18n fr hidden">Lire</span>
<svg aria-hidden="true" className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
</article>
<article className="rounded-lg border overflow-hidden hover:shadow-sm border-zinc-800 bg-black">
<img alt="Office planning" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[12px] font-medium text-amber-300">Interview</div>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n en text-zinc-100">Scaling HR in fast-growing SMEs</h3>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n fr hidden text-zinc-100">Scalabilité RH dans les PME en croissance</h3>
<p className="mt-1 text-sm i18n en text-zinc-400">A candid talk with a client on what really works.</p>
<p className="mt-1 text-sm i18n fr hidden text-zinc-400">Entretien client: ce qui fonctionne vraiment.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
<span className="i18n en">Read more</span>
<span className="i18n fr hidden">Lire</span>
<svg aria-hidden="true" className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
</article>
<article className="rounded-lg border overflow-hidden hover:shadow-sm border-zinc-800 bg-black">
<img alt="City skyline" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="text-[12px] font-medium text-zinc-300">Opinion</div>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n en text-zinc-100">Beyond buzzwords: real innovation in Africa</h3>
<h3 className="mt-1 text-lg font-medium tracking-tight i18n fr hidden text-zinc-100">Au-delà des buzzwords: l’innovation concrète en Afrique</h3>
<p className="mt-1 text-sm i18n en text-zinc-400">Where ideas meet execution and local realities.</p>
<p className="mt-1 text-sm i18n fr hidden text-zinc-400">Là où les idées rencontrent l’exécution et le terrain.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
<span className="i18n en">Read more</span>
<span className="i18n fr hidden">Lire</span>
<svg aria-hidden="true" className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="training">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n en text-zinc-100">Training &amp; Events</h2>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight i18n fr hidden text-zinc-100">Formations &amp; Événements</h2>
<p className="mt-2 i18n en text-zinc-400">Upcoming workshops and academies.</p>
<p className="mt-2 i18n fr hidden text-zinc-400">Ateliers et académies à venir.</p>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-lg border p-5 border-zinc-800 bg-black">
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-16 h-16 rounded-md border flex flex-col items-center justify-center border-zinc-800 bg-zinc-950">
<div className="font-medium text-zinc-100">Nov</div>
<div className="text-sm text-zinc-400">14</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight i18n en text-zinc-100">Manager Essentials (Abidjan)</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">Manager Essentials (Abidjan)</h3>
<div className="text-[13px] text-emerald-300">Seats: 8/20</div>
</div>
<p className="mt-1 text-sm i18n en text-zinc-400">A two-day intensive on planning, feedback, and execution.</p>
<p className="mt-1 text-sm i18n fr hidden text-zinc-400">Deux jours intensifs: planification, feedback et exécution.</p>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">Leadership</span>
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">In-person</span>
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">FR/EN</span>
</div>
</div>
</div>
<div className="flex gap-4">
<div className="w-16 h-16 rounded-md border flex flex-col items-center justify-center border-zinc-800 bg-zinc-950">
<div className="font-medium text-zinc-100">Dec</div>
<div className="text-sm text-zinc-400">05</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight i18n en text-zinc-100">HR for Growth (Online)</h3>
<h3 className="font-medium tracking-tight i18n fr hidden text-zinc-100">RH pour la Croissance (En ligne)</h3>
<div className="text-[13px] text-emerald-300">Seats: 15/40</div>
</div>
<p className="mt-1 text-sm i18n en text-zinc-400">Hiring, onboarding, and performance systems for SMEs.</p>
<p className="mt-1 text-sm i18n fr hidden text-zinc-400">Recrutement, intégration et performance pour PME.</p>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">HR</span>
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">Online</span>
<span className="px-2 py-1 text-[12px] rounded border border-zinc-800 bg-zinc-950">FR/EN</span>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-2">
<img alt="Training 1" className="h-28 w-full object-cover rounded-md border border-zinc-800" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Training 2" className="h-28 w-full object-cover rounded-md border border-zinc-800" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Training 3" className="h-28 w-full object-cover rounded-md border border-zinc-800" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-6 rounded-lg border p-4 border-zinc-800 bg-black">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="w-4.5 h-4.5 text-amber-300" data-lucide="award"></svg>
<h3 className="font-medium tracking-tight text-zinc-100">Certifications Catalogue</h3>
</div>
<div className="inline-flex items-center rounded-md border overflow-hidden border-zinc-800 bg-black">
<button className="px-3 py-1.5 text-[13px] text-zinc-300 hover:bg-zinc-950" data-semester-toggle="" data-target="H1" type="button">H1</button>
<div className="w-px h-5 bg-zinc-800"></div>
<button className="px-3 py-1.5 text-[13px] text-zinc-300 hover:bg-zinc-950" data-semester-toggle="" data-target="H2" type="button">H2</button>
</div>
</div>

<div className="mt-4 grid sm:grid-cols-2 gap-4" id="catalogue-H1">
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-start justify-between gap-2">
<div>
<div className="font-medium tracking-tight text-zinc-100">Certified HR Business Partner (CHRP)</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Jan</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Mar</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">May</span>
</div>
</div>
<div className="text-[13px] text-zinc-300">XOF 350,000</div>
</div>
<div className="mt-2 text-[13px] text-zinc-400">4 days • In-person • FR/EN</div>
<button className="mt-3 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-[13px] border-zinc-700 bg-black text-zinc-100 hover:border-zinc-600" data-event-code="chrp-abj-h1" data-event-label="CHRP — Abidjan (H1)" type="button">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="plus"></svg>
                    Select for registration
                  </button>
</div>
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-start justify-between gap-2">
<div>
<div className="font-medium tracking-tight text-zinc-100">Executive Leadership Certificate</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Feb</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Apr</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Jun</span>
</div>
</div>
<div className="text-[13px] text-zinc-300">XOF 400,000</div>
</div>
<div className="mt-2 text-[13px] text-zinc-400">3 days • Hybrid • FR/EN</div>
<button className="mt-3 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-[13px] border-zinc-700 bg-black text-zinc-100 hover:border-zinc-600" data-event-code="leadership-exec-h1" data-event-label="Executive Leadership — (H1)" type="button">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="plus"></svg>
                    Select for registration
                  </button>
</div>
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-start justify-between gap-2">
<div>
<div className="font-medium tracking-tight text-zinc-100">Project Management Pro (PMP Prep)</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Mar</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Jun</span>
</div>
</div>
<div className="text-[13px] text-zinc-300">XOF 300,000</div>
</div>
<div className="mt-2 text-[13px] text-zinc-400">5 evenings • Online • FR/EN</div>
<button className="mt-3 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-[13px] border-zinc-700 bg-black text-zinc-100 hover:border-zinc-600" data-event-code="project-pro-h1" data-event-label="Project Management Pro — (H1)" type="button">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="plus"></svg>
                    Select for registration
                  </button>
</div>
</div>

<div className="mt-4 grid sm:grid-cols-2 gap-4 hidden" id="catalogue-H2">
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-start justify-between gap-2">
<div>
<div className="font-medium tracking-tight text-zinc-100">Certified HR Business Partner (CHRP)</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Jul</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Sep</span>
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Nov</span>
</div>
</div>
<div className="text-[13px] text-zinc-300">XOF 360,000</div>
</div>
<div className="mt-2 text-[13px] text-zinc-400">4 days • In-person • FR/EN</div>
<button className="mt-3 inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-[13px] border-zinc-700 bg-black text-zinc-100 hover:border-zinc-600" data-event-code="chrp-lagos-h2" data-event-label="CHRP — Lagos (H2)" type="button">
<svg aria-hidden="true" className="w-4 h-4" data-lucide="plus"></svg>
                    Select for registration
                  </button>
</div>
<div className="rounded-md border p-4 border-zinc-800">
<div className="flex items-start justify-between gap-2">
<div>
<div className="font-medium tracking-tight text-zinc-100">Agile Leadership Certificate</div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="px-2 py-0.5 text-[12px] rounded border border-zinc-800 bg-zinc-950">Aug</span>
</div></div></div></div></div></div></div></div></div></section>
    </>
  );
}
