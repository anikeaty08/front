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



      // Lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    
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
      

<div className="hidden md:block bg-neutral-900 text-neutral-100">
<div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between text-sm">
<div className="flex items-center gap-6">
<span className="inline-flex items-center gap-2 text-neutral-300">Nantes &amp; Nantes-sud<svg className="lucide lucide-map-pin w-4 h-4 text-zinc-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
<span className="inline-flex items-center gap-2 text-neutral-300">
<svg className="lucide lucide-badge-check w-4 h-4 text-zinc-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> RC Pro • CESU accepté
          </span>
</div>
<a className="inline-flex items-center gap-2 text-neutral-100" href="tel:+33600000000">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 06 00 00 00 00
        </a>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 border-neutral-200 border-b backdrop-blur">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-lg bg-indigo-600"></div>
<span className="text-xl font-semibold text-neutral-900 tracking-tight">Sandra</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-700 hover:text-neutral-900" href="#services">Services</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#apropos">À propos</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#process">Process</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="tel:+33600000000">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Appeler
          </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Demander un devis
          </a>
</div>
<button aria-label="Ouvrir le menu" className="md:hidden p-2 rounded-md border border-neutral-300 text-neutral-700" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="px-6 py-4 flex flex-col gap-4 text-sm">
<a className="text-neutral-700" href="#services">Services</a>
<a className="text-neutral-700" href="#apropos">À propos</a>
<a className="text-neutral-700" href="#process">Process</a>
<a className="text-neutral-700" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 text-neutral-900" href="tel:+33600000000">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 06 00 00 00 00
          </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-500 w-fit" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Devis rapide
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-neutral-950 text-white">
<div className="absolute inset-0">
<div className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full bg-indigo-600/20 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Entretien soigné • Ponctualité • Discrétion
          </div>
<h1 className="mt-5 text-4xl md:text-5xl tracking-tight font-semibold">
            Ménage impeccable, esprit tranquille.
          </h1>
<p className="mt-4 text-neutral-300 md:text-lg">
            Prestations d’entretien à domicile et en bureaux, au rythme qui vous convient. Matériel et produits fournis sur demande.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-500" href="#contact">
<svg className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg> Demander un devis
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-white hover:bg-white/10" href="tel:+33600000000">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 06 00 00 00 00
            </a>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-neutral-300">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span>Clients satisfaits • Avis vérifiés</span>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
<img alt="Menage à domicile Sandra" className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?q=80&amp;w=774&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
</div>
<div className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur rounded-xl shadow-xl ring-1 ring-black/10 p-4 flex items-center gap-3">
<svg className="lucide lucide-clock w-5 h-5 text-zinc-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="text-sm">
<p className="font-medium text-neutral-900">Intervention rapide</p>
<p className="text-neutral-600">Sous 48h selon disponibilité</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Services d’entretien</h2>
<p className="mt-3 text-neutral-600">Des formules claires pour particuliers et professionnels. Prestations ponctuelles ou récurrentes.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-home w-5 h-5 text-indigo-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Ménage à domicile</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Dépoussiérage, sols, sanitaires, cuisine. Fréquence au choix (hebdo, bi‑hebdo, mensuel).</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-building-2 w-5 h-5 text-indigo-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Bureaux &amp; locaux</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Espaces communs, postes de travail, vitres accessibles. Intervention hors horaires si besoin.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-5 h-5 text-indigo-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Remise en état</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Après déménagement ou travaux : dépoussiérage fin, dégraissage, finitions.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-bath w-5 h-5 text-indigo-600" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Sanitaires &amp; cuisine</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Détartrage, dégraissage, désinfection des points de contact.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-sofa w-5 h-5 text-indigo-600" data-lucide="sofa" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M4 18v2"></path><path d="M20 18v2"></path><path d="M12 4v9"></path></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Options</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Vitres, fours, frigos, repassage léger. Sur devis selon surface et accès.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-indigo-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="font-semibold text-neutral-900 tracking-tight">Contrats réguliers</h3>
</div>
<p className="mt-3 text-neutral-600 text-sm">Créneaux fixes et prix adaptés à la fréquence. Remplacement en cas d’imprévu.</p>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="inline-flex items-center gap-2 text-sm text-neutral-600">
<svg className="lucide lucide-info w-4 h-4 text-zinc-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            Produits écolabellisés sur demande. Facturation claire, sans surprises.
          </div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-sm text-neutral-700">Intervention: Nantes &amp; sud-loire<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Obtenir un tarif
            </a>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50" id="apropos">
<div className="grid md:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">À propos</h2>
<p className="text-neutral-700 mt-3">Je m’appelle Sandra, agente d’entretien indépendante depuis 6 ans. J’interviens pour des particuliers, des cabinets et de petites structures. Mon approche: écoute, respect des lieux et finitions soignées.</p>
<ul className="mt-6 space-y-3 text-neutral-700">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Assurance responsabilité civile professionnelle</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Déplacements flexibles, matériel possible sur demande</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-indigo-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Règlement par virement, CESU, ou facture entreprise</span>
</li>
</ul>
<div className="mt-8 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-medium hover:bg-indigo-500" href="#contact">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Me contacter
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 hover:bg-white" href="tel:+33600000000">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 06 00 00 00 00
            </a>
</div>
</div>
<div className="order-1 md:order-2">
<div className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
<img className="w-full h-[520px] object-cover" portrait="" professionnel"="" src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&amp;w=1740&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dalt="/>
</div>
</div>
</div></section>

<section className="bg-white" id="process">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Comment ça marche</h2>
<p className="mt-3 text-neutral-600">Un parcours simple pour une prestation sans friction.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-200 p-6">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-message-square w-5 h-5 text-indigo-600" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="mt-4 font-semibold tracking-tight text-neutral-900">1. Devis express</h3>
<p className="mt-2 text-sm text-neutral-600">Décrivez vos besoins, la surface et la fréquence souhaitée. Réponse sous 24h ouvrées.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-calendar-check w-5 h-5 text-indigo-600" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 font-semibold tracking-tight text-neutral-900">2. Planification</h3>
<p className="mt-2 text-sm text-neutral-600">Créneau réservé, rappel la veille et arrivée avec tout le nécessaire si demandé.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-6">
<div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-5 h-5 text-indigo-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="mt-4 font-semibold tracking-tight text-neutral-900">3. Résultat nickel</h3>
<p className="mt-2 text-sm text-neutral-600">Contrôle en fin de prestation, ajustements si besoin. Facturation transparente.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Ils recommandent</h2>
<p className="mt-3 text-neutral-600">Des retours de clients réguliers, particuliers et pros.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-2 text-blue-500">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-neutral-700">Service parfait, très ponctuelle et travail soigné. Nos bureaux n’ont jamais été aussi propres.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium text-neutral-900">Samira L.</p>
<p className="text-neutral-500">Bureau d’études</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-2 text-blue-500">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="mt-3 text-neutral-700">Très bonne communication et résultat impeccable après notre déménagement. Je recommande.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<p className="font-medium text-neutral-900">Hugo P.</p>
<p className="text-neutral-500">Particulier</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="grid lg:grid-cols-2 gap-10">
<div className="">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Demander un devis</h2>
<p className="mt-3 text-neutral-600">Réponse sous 24h ouvrées. Indiquez la surface, la fréquence et vos disponibilités.</p>
<form action="mailto:contact@clairetnet.fr" className="mt-8 space-y-4" enctype="text/plain" method="post">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-neutral-700">Nom</label>
<input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="Nom" placeholder="Votre nom" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm text-neutral-700">Email</label>
<input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="Email" placeholder="vous@exemple.fr" required="" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-neutral-700">Téléphone</label>
<input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="Téléphone" placeholder="06 00 00 00 00" type="tel"/>
</div>
<div className="">
<label className="block text-sm text-neutral-700">Type de lieu</label>
<select className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="Type">
<option>Appartement / Maison</option>
<option>Bureaux</option>
<option>Après travaux / déménagement</option>
<option>Autre</option>
</select>
</div>
</div>
<div className="">
<label className="block text-sm text-neutral-700">Message</label>
<textarea className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" name="Message" placeholder="Surface, fréquence, créneaux souhaités..." rows="5"></textarea>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-2.5 font-medium hover:bg-indigo-500" type="submit">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Envoyer la demande
                </button>
<div className="text-sm text-neutral-600 inline-flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-zinc-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Vos informations ne sont jamais partagées.
                </div>
</div>
</form>
<div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center gap-2 text-neutral-900 font-medium">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Téléphone
                </div>
<a className="mt-1 block text-neutral-700" href="tel:+33600000000">06 00 00 00 00</a>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center gap-2 text-neutral-900 font-medium">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Email
                </div>
<a className="mt-1 block text-neutral-700" href="mailto:contact@clairetnet.fr">contact@clairetnet.fr</a>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center gap-2 text-neutral-900 font-medium">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Horaires
                </div>
<p className="mt-1 text-neutral-700">Lun–Sam • 8h–19h</p>
</div>
</div>
</div>
<div className="lg:pl-6">
<div className="rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-neutral-100">
<img alt="Quartier de Paris vu de haut" className="w-full h-[480px] object-cover" src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-2 text-sm text-neutral-600 mt-4 items-center">Basée à Nantes — déplacements Sud-Loire<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-300">
<div className="max-w-7xl mr-auto ml-auto pt-14 pr-6 pb-14 pl-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-600"></div>
<div className="">
<p className="font-semibold text-white tracking-tight">Sandra</p>
<p className="text-sm text-neutral-400">Agente d’entretien — Nantes</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
<a className="hover:text-white" href="#services">Services</a>
<a className="hover:text-white" href="#apropos">À propos</a>
<a className="hover:text-white" href="#process">Process</a>
<a className="hover:text-white" href="#contact">Contact</a>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="">©  Sandra Tous droits réservés.<span className="" id="year">2025</span></p>
<p className="text-neutral-400">SIRET 000 000 000 00000 • Mentions légales sur demande</p>
</div>
</div>
</footer>


    </>
  );
}
