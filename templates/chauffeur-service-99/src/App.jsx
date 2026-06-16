import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Logo swap (set body[data-logo] to your logo URL)
      const logoUrl = document.body.getAttribute('data-logo');
      if (logoUrl) {
        const headerLogo = document.getElementById('brandLogoHeader');
        const footerLogo = document.getElementById('brandLogoFooter');
        if (headerLogo) { headerLogo.src = logoUrl; headerLogo.classList.remove('hidden'); }
        if (footerLogo) { footerLogo.src = logoUrl; footerLogo.classList.remove('hidden'); }
      }

      // Estimation logic
      const vehicle = document.getElementById('vehicle');
      const passengers = document.getElementById('passengers');
      const datetime = document.getElementById('datetime');
      const distance = document.getElementById('distance');
      const distanceValue = document.getElementById('distanceValue');
      const estimatePrice = document.getElementById('estimatePrice');
      const fareDetails = document.getElementById('fareDetails');
      const estimateNote = document.getElementById('estimateNote');
      const miniEstimate = document.getElementById('miniEstimate');
      const optionMeet = document.getElementById('optionMeet');
      const optionBaby = document.getElementById('optionBaby');

      function isNight(dt) {
        if (!dt) return false;
        const d = new Date(dt);
        const h = d.getHours();
        return (h >= 22 || h < 6);
      }

      function toEuro(n) {
        return n.toFixed(0).toString().replace('.', ',') + ' €';
      }

      function updateDistanceLabel() {
        distanceValue.textContent = `${distance.value} km`;
      }

      function computeEstimate() {
        const km = Number(distance.value || 0);
        let rate = 1.4, minFare = 22, label = 'Berline';

        switch (vehicle.value) {
          case 'affaires': rate = 1.9; minFare = 30; label = 'Affaires'; break;
          case 'van': rate = 2.2; minFare = 40; label = 'Van'; break;
        }

        let price = Math.max(minFare, km * rate);

        let optionsTotal = 0;
        if (optionMeet && optionMeet.checked) optionsTotal += 8;
        if (optionBaby && optionBaby.checked) optionsTotal += 5;

        const night = isNight(datetime.value);
        let nightFee = 0;
        if (night) nightFee = price * 0.15;

        const pax = Number(passengers.value || 1);
        if (pax > 4 && vehicle.value !== 'van') {
          estimateNote.textContent = 'Conseil: choisissez un Van pour plus de confort.';
        } else {
          estimateNote.textContent = night ? 'Majoration de nuit appliquée (22:00–06:00).' : 'Selon conditions de circulation';
        }

        const total = price + nightFee + optionsTotal;

        estimatePrice.textContent = toEuro(total);
        fareDetails.textContent = `${label} • ${km} km × ${rate.toFixed(2)} € + options ${optionsTotal ? '(' + toEuro(optionsTotal) + ')' : ''}${night ? ' + nuit 15%' : ''}`;
        if (miniEstimate) miniEstimate.textContent = 'Estimation: ' + toEuro(total);
      }

      ['input', 'change'].forEach(evt => {
        distance.addEventListener(evt, () => { updateDistanceLabel(); computeEstimate(); });
        vehicle.addEventListener(evt, computeEstimate);
        passengers.addEventListener(evt, computeEstimate);
        datetime.addEventListener(evt, computeEstimate);
        if (optionMeet) optionMeet.addEventListener(evt, computeEstimate);
        if (optionBaby) optionBaby.addEventListener(evt, computeEstimate);
      });

      updateDistanceLabel();
      computeEstimate();

      // Booking form submit
      const form = document.getElementById('bookingForm');
      const toast = document.getElementById('toast');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
      });

      // Devis button mock
      document.getElementById('btnDevis').addEventListener('click', () => {
        toast.querySelector('div').innerHTML = `<i data-lucide="file-text"></i> Devis envoyé à votre e‑mail.`;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        toast.classList.remove('hidden');
        setTimeout(() => {
          toast.classList.add('hidden');
          toast.querySelector('div').innerHTML = `<i data-lucide="check-circle"></i> Demande envoyée. Nous revenons vers vous sous 5 minutes.`;
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }, 3500);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_50%_at_100%_0%,rgba(56,189,248,0.08),transparent)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.9))]"></div>
<div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)] bg-[url('https://images.unsplash.com/photo-1518558409810-6b0b0b3cfd8c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-[0.22]"></div>
<div className="absolute inset-0 border-t border-white/5"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="RB Chauffeur Lyon — Logo" className="h-8 w-auto hidden" id="brandLogoHeader" src=""/>
<span className="sm:text-lg text-base font-semibold text-slate-100 tracking-tight">RB Chauffeur Lyon</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-white transition-colors" href="#flotte">Flotte</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#tarifs">Tarifs</a>
<a className="hover:text-white transition-colors" href="#entreprises">Entreprises</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition text-sm text-slate-100 bg-white/5 border-white/15 border rounded-md pt-2 pr-3.5 pb-2 pl-3.5 gap-x-2 gap-y-2 items-center">24/7 | 07 85 80 48 00</button>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" href="#reservation">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Réserver
            </a>
</div>
<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-slate-200 hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="bg-center bg-[#000000] relative" id="accueil">
<div className="sm:px-6 lg:px-8 lg:pt-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-8 pl-4">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 xl:col-span-5">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Service noté 4.9/5 — 12k trajets
            </span>
<h1 className="sm:text-5xl lg:text-2xl text-2xl font-semibold text-white tracking-tight mt-4">Découvrez l'excellence de notre service de chauffeur privé à Lyon et au-delà, alliant confort et fiabilité.</h1>
<p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Transferts aéroports, rendez-vous d’affaires, soirées et événements. Ponctualité, discrétion et confort absolu.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
<svg className="lucide lucide-badge-check w-4 h-4 text-emerald-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                Chauffeurs certifiés
              </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
<svg className="lucide lucide-wifi w-4 h-4 text-indigo-400" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                Wi‑Fi &amp; eau à bord
              </div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">
<svg className="lucide lucide-shield w-4 h-4 text-sky-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                Paiement sécurisé
              </div>
</div>
</div>

<div className="lg:col-span-6 xl:col-span-7" id="reservation">
<div className="sm:p-6 lg:p-8 bg-slate-900/95 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 relative shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Estimation instantanée
              </div>
<form className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5" id="bookingForm">
<div className="lg:col-span-2">
<label className="text-sm text-slate-300">Départ</label>
<div className="mt-1.5 relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
<input className="w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 border border-white/10 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" placeholder="Adresse, lieu, hôtel..." required="" type="text"/>
</div>
</div>
<div className="lg:col-span-2">
<label className="text-sm text-slate-300">Destination</label>
<div className="mt-1.5 relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</span>
<input className="w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 border border-white/10 pl-10 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" placeholder="Adresse, terminal, salle..." required="" type="text"/>
</div>
</div>
<div className="">
<label className="text-sm text-slate-300">Date &amp; heure</label>
<div className="mt-1.5 relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<input className="placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40 text-slate-100 bg-slate-900/60 w-50 border-white/10 border rounded-md pt-2.5 pr-3 pb-2.5 pl-10" id="datetime" type="datetime-local"/>
</div>
</div>
<div className="">
<label className="text-sm text-slate-300">Véhicule</label>
<div className="mt-1.5 relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-car w-4 h-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</span>
<select className="w-full appearance-none rounded-md bg-slate-900/60 text-slate-100 border border-white/10 pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" id="vehicle">
<option value="berline">Berline</option>
<option value="affaires">Affaires</option>
<option value="van">Van (jusqu’à 7)</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</div>
</div>
<div className="">
<label className="text-sm text-slate-300">Passagers</label>
<div className="mt-1.5 relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
<select className="w-full appearance-none rounded-md bg-slate-900/60 text-slate-100 border border-white/10 pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" id="passengers">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</div>
</div>
<div className="lg:col-span-2">
<div className="flex items-center justify-between">
<label className="text-sm text-slate-300" htmlFor="distance">Distance estimée</label>
<span className="text-sm text-slate-200 font-medium" id="distanceValue">12 km</span>
</div>
<input className="mt-2 w-full appearance-none bg-transparent cursor-pointer" id="distance" max="120" min="1" style={{accentColor: 'rgb(99 102 241)'}} type="range" value="12"/>
<div className="mt-1 flex justify-between text-xs text-slate-400">
<span>1 km</span><span>60 km</span><span>120 km</span>
</div>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
<div className="flex items-center justify-between">
<div className="text-slate-300 text-sm">Estimation</div>
<div className="inline-flex items-center gap-1 text-emerald-300 text-xs">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Prix tout inclus
                      </div>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" id="estimatePrice">22 €</div>
<div className="text-xs text-slate-400 mt-1" id="estimateNote">Selon conditions de circulation</div>
</div>
<div className="text-right">
<div className="text-xs text-slate-400" id="fareDetails">Berline • 12 km × 1.40 € + options </div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
<div className="text-slate-300 text-sm">Options</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:border-white/20 cursor-pointer">
<input className="rounded border-white/20 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500/50" id="optionMeet" type="checkbox"/>
<span className="">Accueil pancarte</span>
</label>
<label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:border-white/20 cursor-pointer">
<input className="rounded border-white/20 bg-slate-900/60 text-indigo-500 focus:ring-indigo-500/50" id="optionBaby" type="checkbox"/>
<span>Siège bébé</span>
</label>
</div>
<p className="mt-2 text-xs text-slate-400">Ajoute de légers frais selon disponibilité.</p>
</div>
</div>
<div className="lg:col-span-2 flex flex-col sm:flex-row gap-3">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" type="submit">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    Réserver maintenant
                  </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition" id="btnDevis" type="button">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
                    Recevoir un devis
                  </button>
</div>
</form>
<div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-clock-6 w-4 h-4" data-lucide="clock-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v10"></path><circle cx="12" cy="12" r="10"></circle></svg> Annulation gratuite jusqu’à 1h avant</div>
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-receipt w-4 h-4" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg> Facture instantanée</div>
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> CB, Apple Pay, Pro</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 lg:py-20 bg-neutral-950 border-white/10 border-t py-14" id="flotte">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div className="">
<h2 className="sm:text-lg font-semibold text-white tracking-tight">Une flotte de véhicules qui répondra à tous vos besoins de transport.</h2>
<p className="text-xs text-slate-400 mt-1 mb-1">Que vous souhaitiez réserver une berline Mercedes ( ou équivalent) ou un van Mercedes-Benz Classe V, nous avons le véhicule parfait pour vous. </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
            Photos non contractuelles
          </div>
</div>
<div className="overflow-x-auto scroll-smooth mt-8">
<div className="grid grid-flow-col auto-cols-[75%] sm:auto-cols-[50%] lg:auto-cols-[33.33%] gap-5 pb-2 gap-x-5 gap-y-5">

<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="aspect-[16/9] bg-slate-800">
<img alt="Berline" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/98bd3391-1e48-4f56-9f5e-b541a50a5d45_800w.jpg"/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Berline</h3>
<span className="text-xs text-slate-400">1–3 pax</span>
</div>
<p className="mt-1 text-sm text-slate-300">Confort élégant pour vos trajets quotidiens et transferts.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-briefcase w-3.5 h-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>2 valises</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-coffee w-3.5 h-3.5" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>Eau</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>Wi‑Fi</span>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="aspect-[16/9] bg-slate-800">
<img alt="Affaires" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d2146128-443d-4bb1-893e-7918adf1baae_1600w.jpg" style={{}}/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">MERCEDES-BENZ CLASSE S</h3>
<span className="text-xs text-slate-400">1–3 pax</span>
</div>
<p className="text-sm text-slate-300 mt-1">Catégorie Berline ( ou équivalent )
  
    Haut de gamme, plus d’espace et finitions premium.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-briefcase w-3.5 h-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>2 valises</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-sun w-3.5 h-3.5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>Sièges cuir</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>Wi‑Fi</span>
</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="aspect-[16/9] bg-slate-800">
<img alt="Van" className="w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/264dc256-9916-49f8-a108-4541d934c20e_1600w.jpg"/>
</div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">MERCEDES-BENZ CLASSE V</h3>
<span className="text-xs text-slate-400">1–7 pax</span>
</div>
<p className="text-sm text-slate-300 mt-1">Catégorie VAN ( ou équivalent) 
  
  
  Groupes &amp; familles, grands coffres et configuration business.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-briefcase w-3.5 h-3.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>6 valises</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-sofa w-3.5 h-3.5" data-lucide="sofa" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M4 18v2"></path><path d="M20 18v2"></path><path d="M12 4v9"></path></svg>Face-à-face</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>Wi‑Fi</span>
</div>
</div>
</article>

</div>
</div>
</div>
</section>

<section className="sm:py-16 lg:py-20 bg-neutral-950 pt-14 pb-14" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Des services pensés pour vous</h2>
<p className="mt-2 text-slate-400">Adaptés aux particuliers, VIP, équipes et entreprises. Nous anticipons vos besoins pour une expérience fluide.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-plane w-5 h-5 text-sky-300" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<div className="">
<h3 className="font-medium tracking-tight text-white">Transferts aéroports &amp; gares</h3>
<p className="text-sm text-slate-300">Suivi de vol, accueil pancarte, 60 min d’attente inclus à l’aéroport.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-briefcase w-5 h-5 text-indigo-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<div className="">
<h3 className="font-medium tracking-tight text-white">Mise à disposition</h3>
<p className="text-sm text-slate-300">Chauffeur à l’heure pour vos tournées, salons et rendez-vous.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-sparkles w-5 h-5 text-rose-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="">
<h3 className="font-medium tracking-tight text-white">Événements &amp; soirées</h3>
<p className="text-sm text-slate-300">Coordination multi-véhicules, itinéraires optimisés, chauffeur bilingue.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-shield w-5 h-5 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                  Sécurité
                </div>
<p className="mt-2 text-sm text-slate-400">Assurance pro, conduite souple, protocole hygiène strict.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-clock w-5 h-5 text-amber-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Ponctualité
                </div>
<p className="mt-2 text-sm text-slate-400">Notifications, suivi en temps réel, marges horaires intelligentes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-headphones w-5 h-5 text-sky-300" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
                  Service client
                </div>
<p className="mt-2 text-sm text-slate-400">Support 24/7 par téléphone, e‑mail et WhatsApp.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-languages w-5 h-5 text-violet-300" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                  Chauffeurs bilingues
                </div>
<p className="mt-2 text-sm text-slate-400">Français / Anglais sur demande, autres langues selon dispo.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-leaf w-5 h-5 text-emerald-300" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                  Option hybride/électrique
                </div>
<p className="mt-2 text-sm text-slate-400">Réduisez votre empreinte, même sur longue distance.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-gift w-5 h-5 text-rose-300" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
                  Petites attentions
                </div>
<p className="mt-2 text-sm text-slate-400">Eau, chargeurs, mouchoirs, et plus sur demande.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 lg:py-20 bg-neutral-950 border-white/10 border-t py-14">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Ils nous recommandent</h2>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium">Camille R.</div>
<div className="text-xs text-slate-400">Paris</div>
</div>
<div className="ml-auto inline-flex items-center gap-1 text-amber-300 text-xs">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 5.0
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">Ponctuels et impeccables. Mon transfert vers CDG a été d’une fluidité parfaite.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-sm font-medium">Alexandre P.</div>
<div className="text-xs text-slate-400">Lyon</div>
</div>
<div className="ml-auto inline-flex items-center gap-1 text-amber-300 text-xs">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">Véhicule impeccable, chauffeur discret. Service premium comme on l’attend.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Nora B.</div>
<div className="text-xs text-slate-400">Bordeaux</div>
</div>
<div className="ml-auto inline-flex items-center gap-1 text-amber-300 text-xs">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 5.0
              </div>
</div>
<p className="mt-3 text-sm text-slate-300">Organisation d’un mariage avec plusieurs vans: timing parfait, communication top.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20" id="tarifs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Tarifs simples &amp; transparents</h2>
<p className="mt-2 text-slate-400">Prix fixes à la réservation, péages et TVA inclus.</p>
</div>
<div className="hidden sm:flex text-xs text-slate-400 items-center gap-2">
<svg className="lucide lucide-scale w-4 h-4" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
            Devis personnalisé sur demande
          </div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Berline</h3>
<span className="text-xs text-slate-400">1–3 pax</span>
</div>
<div className="text-3xl font-semibold tracking-tight mt-3" style={{}}>12,40 €<span className="text-base text-slate-400 font-normal">/ km</span></div>
<div className="text-sm text-slate-400" style={{}}>Minimum 22 €</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Eau &amp; Wi‑Fi</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 min d’attente</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Annulation 1h</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" href="#reservation">
              Choisir
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6 flex flex-col ring-1 ring-inset ring-indigo-400/20">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Affaires</h3>
<span className="text-xs text-slate-300">Meilleur choix</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight">1,90 € <span className="text-base text-slate-300 font-normal">/ km</span></div>
<div className="text-sm text-slate-300">Minimum 30 €</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Sièges cuir &amp; confort</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 min d’attente</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Accueil pancarte</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" href="#reservation">
              Choisir
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Van</h3>
<span className="text-xs text-slate-400">1–7 pax</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight">2,20 € <span className="text-base text-slate-400 font-normal">/ km</span></div>
<div className="text-sm text-slate-400">Minimum 40 €</div>
<ul className="mt-4 space-y-2 text-sm text-slate-300">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Configuration business</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 min d’attente</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Sièges bébé sur demande</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition" href="#reservation">
              Choisir
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20 border-t border-white/10" id="entreprises">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Compte entreprise</h2>
<p className="mt-2 text-slate-400">Centralisez vos déplacements, gérez les droits, et bénéficiez de conditions privilégiées.</p>
<ul className="mt-5 space-y-3 text-sm text-slate-300">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-building-2 w-4 h-4 text-indigo-300" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg> Facturation mensuelle</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-id-card w-4 h-4 text-indigo-300" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg> Comptes collaborateurs</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-chart-line w-4 h-4 text-indigo-300" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> Reporting &amp; budgets</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" href="#contact">
                Demander une offre
                <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition">
                Brochure PDF
                <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
<div className="lg:col-span-6">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="text-xs text-slate-400">Exemples clients</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="h-10 rounded-md bg-white/10 flex items-center justify-center text-xs font-semibold tracking-tight">AK</div>
<div className="h-10 rounded-md bg-white/10 flex items-center justify-center text-xs font-semibold tracking-tight">MN</div>
<div className="h-10 rounded-md bg-white/10 flex items-center justify-center text-xs font-semibold tracking-tight">VP</div>
</div>
<p className="mt-3 text-xs text-slate-400">Références disponibles sur demande.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="text-xs text-slate-400">Satisfaction</div>
<div className="mt-3 flex items-end gap-3">
<div className="text-4xl font-semibold tracking-tight">98%</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/10">
<div className="h-2 w-[98%] rounded-full bg-emerald-400/70"></div>
</div>
</div>
<div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300">Intégrations</div>
<svg className="lucide lucide-plug w-4 h-4 text-slate-400" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
<div className="rounded-md border border-white/10 bg-slate-900/40 px-3 py-2">Calendrier</div>
<div className="rounded-md border border-white/10 bg-slate-900/40 px-3 py-2">Notes de frais</div>
<div className="rounded-md border border-white/10 bg-slate-900/40 px-3 py-2">SSO</div>
<div className="rounded-md border border-white/10 bg-slate-900/40 px-3 py-2">ERP</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 lg:py-20 bg-zinc-950 py-14" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Contactez-nous</h3>
<p className="mt-2 text-slate-400">Nous répondons en quelques minutes, 24/7.</p>
<div className="text-sm text-slate-300 mt-5 space-y-3">
<div className="inline-flex gap-x-2 gap-y-2 items-center">+33 07 85 80 48 00</div>
<div className="inline-flex gap-x-2 gap-y-2 items-center">rb.chauffeurlyon@gmail.com</div>
<div className="inline-flex gap-x-2 gap-y-2 items-center">10, Avenue de l’Opéra, 69001 Lyon</div>
</div>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition text-sm text-slate-100 bg-white/5 border-white/10 border rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/wa.me/+33785804800';window.location.href='/wa.me/+33785804800'" role="button">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  WhatsApp
                </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  SMS
                </button>
</div>
</div>
<form className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="">
<label className="text-sm text-slate-300">Nom</label>
<input className="mt-1.5 w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" placeholder="Votre nom" type="text"/>
</div>
<div className="">
<label className="text-sm text-slate-300">E‑mail</label>
<input className="mt-1.5 w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" placeholder="vous@exemple.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-300">Message</label>
<textarea className="mt-1.5 w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 border border-white/10 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40" placeholder="Votre besoin, dates, volume..." rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition">
                  Envoyer
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-white/10 border-t">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-10 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">RB</span>
</div>
<img alt="RB Chauffeur Lyon — Logo" className="h-8 w-auto hidden" id="brandLogoFooter" src=""/>
<span className="text-slate-100 text-base font-semibold tracking-tight">RB Chauffeur Lyon</span>
</div>
<p className="mt-3 text-sm text-slate-400">Chauffeur privé premium en France. Transferts, mise à disposition, événements et comptes entreprises.</p>
</div>
<div className="">
<div className="text-sm font-medium text-white">Légal</div>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li className=""><a className="hover:text-white" href="#">CGV</a></li>
<li className=""><a className="hover:text-white" href="#">Confidentialité</a></li>
<li className=""><a className="hover:text-white" href="#">Mentions légales</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-medium text-white">Réseaux</div>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li className=""><a className="inline-flex items-center gap-2 hover:text-white" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> Instagram</a></li>
<li className=""><a className="inline-flex items-center gap-2 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a></li>
<li className=""><a className="inline-flex items-center gap-2 hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> X</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 text-xs text-slate-500 border-white/10 border-t pt-5 pb-5 gap-x-3 gap-y-3 items-center justify-between">
<div className="">© <span className="" id="year">2025</span> RB Chauffeur Lyon. Tous droits réservés.</div>
<div className="inline-flex items-center gap-4">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Paiement sécurisé</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-leaf w-3.5 h-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Neutralité carbone</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
<div className="mx-3 mb-3 rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur p-2 shadow-lg">
<div className="flex items-center justify-between">
<div className="text-sm">
<div className="text-slate-200 font-medium">Besoin d’un chauffeur ?</div>
<div className="text-xs text-slate-400" id="miniEstimate">Estimation: 22 €</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition" href="#reservation">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Réserver
          </a>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 hidden" id="toast">
<div className="inline-flex items-center gap-3 rounded-lg border border-emerald-300/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 shadow-lg">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
        Demande envoyée. Nous revenons vers vous sous 5 minutes.
      </div>
</div>


    </>
  );
}
