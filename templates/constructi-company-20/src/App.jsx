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



    document.getElementById('jaar').textContent = new Date().getFullYear();
  
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/95 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">

<div className="flex items-center gap-3">
<a className="inline-flex items-center" href="#home">
<img alt="Bouwwerken De Winter logo" className="h-8 sm:h-9 w-auto" src="https://bouwwerkendewinter.be/bouwwerken-de-winter.png"/>
</a>
<div className="hidden sm:flex items-baseline gap-2">
<div className="h-5 w-px bg-slate-200"></div>
<div className="text-xs sm:text-sm tracking-tight text-slate-700">
              Bouwwerken De Winter
            </div>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-[#1f2937] transition-colors" href="#home">Home</a>
<a className="text-slate-600 hover:text-[#1f2937] transition-colors" href="#over">Over ons</a>
<a className="text-slate-600 hover:text-[#1f2937] transition-colors" href="#projecten">Projecten</a>
<a className="text-slate-600 hover:text-[#1f2937] transition-colors" href="#vacatures">Vacatures</a>
<a className="text-[#1f2937] hover:text-black transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#b49a84]/30 bg-white hover:bg-[#b49a84]/10 text-xs sm:text-sm text-[#1f2937] px-4 py-2 transition-colors" href="#contact">
<span>Vraag een gesprek aan</span>
</a>

<button aria-label="Open navigatie" className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-[#1f2937] h-9 w-9">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-slate-200 bg-slate-50" id="home">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 text-xs tracking-tight text-slate-500">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#1f2937]"></span>
                Vakmanschap sinds 1998
              </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-[#1f2937]">
                Bouwwerken De Winter<br/>
<span className="text-slate-600 font-normal">Betrouwbaar bouwpartner voor elk project.</span>
</h1>
<p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                Met 27 jaar ervaring realiseert Bouwwerken De Winter hoogwaardige ruwbouw, renovaties en totaalprojecten met oog voor detail en duurzame kwaliteit.
              </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-[#1f2937] text-slate-50 text-xs sm:text-sm font-medium tracking-tight px-5 py-2.5 hover:bg-[#111827] transition-colors" href="#projecten">
<span>Bekijk recente projecten</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-[#b49a84]/40 bg-white text-xs sm:text-sm text-[#1f2937] px-5 py-2.5 hover:bg-[#b49a84]/10 transition-colors" href="#contact">
<span>Plan een kennismaking</span>
</a>
</div>

<div className="mt-4 grid grid-cols-3 gap-4 max-w-sm text-xs sm:text-sm text-slate-700">
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">27+</div>
<div className="text-slate-500">Jaar ervaring</div>
</div>
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">180+</div>
<div className="text-slate-500">Projecten</div>
</div>
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">15</div>
<div className="text-slate-500">Vaste medewerkers</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="relative">
<div className="aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl shadow-slate-900/10">
<img alt="Modern bouwproject Bouwwerken De Winter" className="h-full w-full object-cover" src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>

<div className="hidden sm:flex absolute bottom-4 left-4 right-auto">
<div className="backdrop-blur bg-white/80 border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md shadow-slate-900/5">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-slate-300 border border-white"></div>
<div className="h-7 w-7 rounded-full bg-slate-400 border border-white"></div>
<div className="h-7 w-7 rounded-full bg-slate-500 border border-white"></div>
</div>
<div className="text-xs text-slate-800">
<div className="font-medium tracking-tight">Recente villabouw</div>
<div className="text-slate-500">Turnhout · Oplevering 2024</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
<div className="border border-slate-200 rounded-2xl bg-white p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Nieuwbouw</div>
<p className="text-slate-600 leading-relaxed">Strakke ruwbouw en sleutel-op-de-deur woningen met focus op structuur en afwerking.</p>
</div>
<div className="border border-slate-200 rounded-2xl bg-white p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Renovatie</div>
<p className="text-slate-600 leading-relaxed">Respect voor bestaande architectuur gecombineerd met hedendaags comfort.</p>
</div>
<div className="border border-slate-200 rounded-2xl bg-white p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Bedrijfspanden</div>
<p className="text-slate-600 leading-relaxed">Functionele bedrijfsgebouwen met duurzame materialen en efficiënte planning.</p>
</div>
</div>
</div>
</div>

<div className="mt-14">
<div className="flex items-end justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#1f2937]">Recente realisaties</h2>
<p className="text-base text-slate-700 mt-1 max-w-xl">
                  Een selectie van recente projecten met professionele fotografie. Meer realisaties volgen binnenkort.
                </p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 hover:text-[#1f2937] transition-colors" href="#projecten">
<span>Alle projecten</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-5">

<article className="group border border-slate-200 rounded-3xl overflow-hidden bg-white">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Moderne gezinswoning" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Nieuwbouw</span>
<span className="text-slate-400">Schilde · 2023</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                    Strakke gezinswoning met warme materialen
                  </h3>
<p className="text-sm text-slate-700 leading-relaxed line-clamp-2">
                    Heldere lijnen, grote glaspartijen en een tijdloos materiaalgebruik zorgen voor een rustige, duurzame leefomgeving.
                  </p>
<button className="mt-1 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors">
<span>Bekijk project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>

<article className="group border border-slate-200 rounded-3xl overflow-hidden bg-white">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Renovatie herenhuis" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Renovatie</span>
<span className="text-slate-400">Antwerpen · 2022</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                    Grondige renovatie van stedelijk herenhuis
                  </h3>
<p className="text-sm text-slate-700 leading-relaxed line-clamp-2">
                    Versteviging van de bestaande structuur gecombineerd met een hedendaagse indeling en hoogwaardige afwerking.
                  </p>
<button className="mt-1 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors">
<span>Bekijk project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>

<article className="group border border-slate-200 rounded-3xl overflow-hidden bg-white">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Bedrijfshal in staalbouw" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Bedrijfspand</span>
<span className="text-slate-400">Geel · 2021</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                    Functionele productiehal met kantoorgedeelte
                  </h3>
<p className="text-sm text-slate-700 leading-relaxed line-clamp-2">
                    Efficiënte staalstructuur, duurzame materialen en een strakke planning voor een minimale stilstand.
                  </p>
<button className="mt-1 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors">
<span>Bekijk project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="over">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

<div className="lg:col-span-6 flex flex-col gap-6">
<div className="text-xs uppercase tracking-tight text-slate-500">
                Over ons
              </div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#1f2937]">
                Een familiebedrijf gebouwd op vertrouwen en precisie.
              </h2>
<p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Bouwwerken De Winter is een gevestigde waarde in de streek, met meer dan 27 jaar ervaring in ruwbouw, renovatie en totaalprojecten. We combineren ambachtelijk vakmanschap met een hedendaagse aanpak en een transparante communicatie.
              </p>
<p className="text-base text-slate-700 leading-relaxed">
                Elke werf wordt opgevolgd door een vaste contactpersoon. We werken nauw samen met architecten en bouwheren om esthetiek, budget en planning in balans te houden.
              </p>

<div className="grid sm:grid-cols-3 gap-4 mt-4 text-xs sm:text-sm">
<div className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Betrouwbaar</div>
<p className="text-slate-600 leading-relaxed">Duidelijke afspraken, correcte opvolging en transparantie.</p>
</div>
<div className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Vakmanschap</div>
<p className="text-slate-600 leading-relaxed">Ervaren ploeg met oog voor detail en afwerking.</p>
</div>
<div className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Kwaliteit</div>
<p className="text-slate-600 leading-relaxed">Duurzame materialen en een solide structuur voor de toekomst.</p>
</div>
</div>

<div className="mt-6 border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4 sm:p-5 flex flex-wrap gap-6 text-xs sm:text-sm">
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">27</div>
<div className="text-slate-500">Jaar actief</div>
</div>
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">180+</div>
<div className="text-slate-500">Opgeleverde werven</div>
</div>
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">15</div>
<div className="text-slate-500">Medewerkers</div>
</div>
<div>
<div className="text-xl sm:text-2xl tracking-tight font-semibold text-[#1f2937]">98%</div>
<div className="text-slate-500">Projecten op planning</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
<div className="sm:translate-y-6">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="Team Bouwwerken De Winter op de werf" className="h-full w-full object-cover" src="https://images.pexels.com/photos/5854194/pexels-photo-5854194.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="Persoonlijk contact met de bouwheer" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Een vast aanspreekpunt</div>
<p>
                      Van eerste gesprek tot oplevering blijft u in contact met dezelfde projectleider. Dat schept vertrouwen en duidelijkheid.
                    </p>
</div>
</div>
</div>

<div className="mt-6 border border-dashed border-slate-200 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
                Ruimte voorzien voor toekomstige uitbreidingen zoals referenties, nieuws of partners.
              </div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="projecten">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<div className="text-xs uppercase tracking-tight text-slate-500">
                Projecten
              </div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#1f2937]">
                Een selectie van recente werven.
              </h2>
<p className="text-base text-slate-700 leading-relaxed mt-1 max-w-xl">
                De focus ligt op projecten met professionele fotografie. Naarmate de beeldbank groeit, wordt dit overzicht aangevuld.
              </p>
</div>

<div className="flex flex-wrap gap-2 text-xs sm:text-sm">
<button className="rounded-full bg-[#1f2937] text-slate-50 px-3 py-1.5 font-medium tracking-tight">
                Alle
              </button>
<button className="rounded-full border border-[#b49a84]/40 bg-white text-slate-700 px-3 py-1.5 hover:bg-[#b49a84]/10">
                Nieuwbouw
              </button>
<button className="rounded-full border border-[#b49a84]/40 bg-white text-slate-700 px-3 py-1.5 hover:bg-[#b49a84]/10">
                Renovatie
              </button>
<button className="rounded-full border border-[#b49a84]/40 bg-white text-slate-700 px-3 py-1.5 hover:bg-[#b49a84]/10">
                Bedrijfspanden
              </button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<article className="md:col-span-2 group border border-slate-200 rounded-3xl overflow-hidden bg-white flex flex-col sm:flex-row">
<div className="sm:w-2/3">
<div className="aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Villa met grote glaspartijen" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
</div>
<div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Nieuwbouw</span>
<span className="text-slate-400">Brasschaat · 2024</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                    Lijnenspel in beton en baksteen met ruimtelijke leefkeuken
                  </h3>
<p className="text-sm text-slate-700 leading-relaxed">
                    Deze villa werd in nauw overleg met de architect opgebouwd rond zichtlijnen en lichtinval. De ruwbouw, stabiliteit en coördinatie werden volledig door Bouwwerken De Winter verzorgd.
                  </p>
<dl className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
<div>
<dt className="text-slate-500">Bouwtype</dt>
<dd>Ruwbouw + winddicht</dd>
</div>
<div>
<dt className="text-slate-500">Architect</dt>
<dd>In samenspraak met externe partner</dd>
</div>
</dl>
</div>
<button className="mt-3 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors self-start">
<span>Bekijk projectdetails</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>

<article className="group border border-slate-200 rounded-3xl overflow-hidden bg-white flex flex-col">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Loft renovatie" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Renovatie</span>
<span className="text-slate-400">Mechelen · 2023</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                  Industriële loft met behoud van bestaande structuur
                </h3>
<p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                  De bestaande betonstructuur werd hersteld en gecombineerd met nieuwe technieken en isolatie, zonder de originele uitstraling te verliezen.
                </p>
<button className="mt-1 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors self-start">
<span>Bekijk project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>
<article className="group border border-slate-200 rounded-3xl overflow-hidden bg-white flex flex-col">
<div className="aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Kantoorrenovatie" className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" src="https://images.pexels.com/photos/8980983/pexels-photo-8980983.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="uppercase tracking-tight">Bedrijfspand</span>
<span className="text-slate-400">Herentals · 2022</span>
</div>
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                  Uitbreiding en modernisering van kantoorgebouw
                </h3>
<p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                  Een nieuwe vleugel in zichtbeton en glas sluit naadloos aan op de bestaande structuur en creëert extra licht en ruimte.
                </p>
<button className="mt-1 inline-flex items-center gap-1 text-xs text-[#1f2937] hover:text-[#111827] transition-colors self-start">
<span>Bekijk project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>

<article className="border border-dashed border-slate-200 rounded-3xl bg-slate-50 p-5 sm:p-6 flex flex-col justify-between text-xs sm:text-sm text-slate-600">
<div>
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Toekomstige projecten</div>
<p className="leading-relaxed">
                  Hier is ruimte voorzien voor bijkomende professionele foto’s en referenties naarmate het portfolio groeit.
                </p>
</div>
<div className="mt-4 flex items-center gap-2 text-slate-500">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 15.5L8 10.5L13 15.5L17 11.5L21 15.5"></path>
<circle cx="8.5" cy="8.5" r="1"></circle>
</svg>
<span>Extra fotoreeksen kunnen hier eenvoudig worden toegevoegd.</span>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="vacatures">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
<div className="lg:col-span-5 flex flex-col gap-6">
<div className="text-xs uppercase tracking-tight text-slate-500">
                Vacatures
              </div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#1f2937]">
                Bouw mee aan sterke structuren en een hecht team.
              </h2>
<p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Bouwwerken De Winter is altijd op zoek naar gemotiveerde vakmensen die fier zijn op hun werk. We bieden stabiele werven, correct materiaal en een collegiale sfeer.
              </p>
<p className="text-base text-slate-700 leading-relaxed">
                Solliciteren kan eenvoudig via het formulier, telefonisch of per e-mail. Ook spontane sollicitaties zijn welkom.
              </p>
<a className="inline-flex items-center gap-2 rounded-full border border-[#b49a84]/40 bg-white text-xs sm:text-sm text-[#1f2937] px-5 py-2.5 hover:bg-[#b49a84]/10 transition-colors w-max" href="#contact">
<span>Stel je vraag over werken bij ons</span>
</a>
</div>

<div className="lg:col-span-7 space-y-4">

<article className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                      Ervaren ruwbouw metser
                    </h3>
<span className="text-xs text-slate-500">Voltijds · Onbepaalde duur</span>
</div>
<p className="mt-1 text-sm text-slate-700 leading-relaxed">
                    Voor onze werven in de regio Antwerpen en Kempen zoeken we een metser met ervaring in nieuwbouw en verbouwingen, die zelfstandig en in ploeg kan werken.
                  </p>
<div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
<span className="rounded-full border border-[#b49a84]/40 px-2 py-0.5">Nieuwbouw</span>
<span className="rounded-full border border-[#b49a84]/40 px-2 py-0.5">Renovatie</span>
<span className="rounded-full border border-[#b49a84]/40 px-2 py-0.5">Min. 3 jaar ervaring</span>
</div>
</div>
<div className="sm:self-stretch flex items-end">
<button className="inline-flex items-center gap-2 rounded-full bg-[#1f2937] text-slate-50 text-xs sm:text-sm font-medium tracking-tight px-4 py-2 hover:bg-[#111827] transition-colors">
<span>Solliciteer</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</button>
</div>
</article>

<article className="border border-[#b49a84]/40 rounded-2xl bg-[#f9f6f3] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937]">
                      Werfleider / projectleider
                    </h3>
<span className="text-xs text-slate-500">Voltijds · Onbepaalde duur</span>
</div>
<p className="mt-1 text-sm text-slate-700 leading-relaxed">
                    Je staat in voor de dagelijkse opvolging van meerdere werven, planning van ploegen en communicatie met architect en bouwheer.
                  </p>
<div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
<span className="rounded-full border border-[#b49a84]/40 px-2 py-0.5">Ervaring vereist</span>
<span className="rounded-full border border-[#b49a84]/40 px-2 py-0.5">Rijbewijs B</span>
</div>
</div>
<div className="sm:self-stretch flex items-end">
<button className="inline-flex items-center gap-2 rounded-full border border-[#b49a84]/40 bg-white text-xs sm:text-sm text-[#1f2937] px-4 py-2 hover:bg-[#b49a84]/10 transition-colors">
<span>Meer info</span>
</button>
</div>
</article>

<article className="border border-dashed border-slate-200 rounded-2xl bg-slate-50 p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
<div className="font-medium tracking-tight text-[#1f2937] mb-1.5">Geen vacature die bij je past?</div>
<p>
                  Stuur ons gerust een spontane sollicitatie met korte toelichting van je ervaring en interesses. We bekijken graag samen de mogelijkheden op korte of langere termijn.
                </p>
</article>
</div>
</div>
</div>
</section>

<section className="bg-slate-50" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="text-xs uppercase tracking-tight text-slate-500">
                Contact
              </div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#1f2937]">
                Bespreek uw bouwplannen in alle rust.
              </h2>
<p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Heeft u concrete plannen, een schets van de architect of staat u nog aan het begin van het traject? We denken graag met u mee.
              </p>
<div className="space-y-3 text-sm text-slate-700">
<div>
<div className="text-xs text-slate-500 uppercase tracking-tight mb-0.5">Telefoon</div>
<a className="hover:text-[#1f2937] transition-colors" href="tel:+3212345678">
                    +32 (0)12 34 56 78
                  </a>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-tight mb-0.5">E-mail</div>
<a className="hover:text-[#1f2937] transition-colors" href="mailto:info@bouwwerkendewinter.be">
                    info@bouwwerkendewinter.be
                  </a>
</div>
<div>
<div className="text-xs text-slate-500 uppercase tracking-tight mb-0.5">Adres</div>
<p>
                    Bouwwerken De Winter<br/>
                    Industrieweg 12<br/>
                    2400 Mol
                  </p>
</div>
</div>

<div className="mt-4 border border-slate-200 rounded-2xl overflow-hidden bg-slate-100">
<div className="aspect-[4/3] w-full bg-slate-100 flex items-center justify-center text-xs text-slate-500">
<span>Google Maps integratie kan hier worden toegevoegd.</span>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="border border-slate-200 rounded-3xl bg-white p-4 sm:p-6 lg:p-7">
<h3 className="text-sm sm:text-base tracking-tight font-medium text-[#1f2937] mb-4">
                  Stuur ons uw vraag of maak een afspraak.
                </h3>
<form className="space-y-4 text-sm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-500 uppercase tracking-tight mb-1" htmlFor="naam">
                        Naam
                      </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b49a84] focus:border-[#b49a84] px-3 py-2" id="naam" name="naam" placeholder="Uw naam" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-500 uppercase tracking-tight mb-1" htmlFor="telefoon">
                        Telefoon
                      </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b49a84] focus:border-[#b49a84] px-3 py-2" id="telefoon" name="telefoon" placeholder="+32 ..." type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-500 uppercase tracking-tight mb-1" htmlFor="email">
                        E-mail
                      </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b49a84] focus:border-[#b49a84] px-3 py-2" id="email" name="email" placeholder="u@voorbeeld.be" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-500 uppercase tracking-tight mb-1" htmlFor="onderwerp">
                        Onderwerp
                      </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b49a84] focus:border-[#b49a84] px-3 py-2" id="onderwerp" name="onderwerp" placeholder="Nieuwbouw, renovatie, offerte..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-slate-500 uppercase tracking-tight mb-1" htmlFor="bericht">
                      Bericht
                    </label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#b49a84] focus:border-[#b49a84] px-3 py-2" id="bericht" name="bericht" placeholder="Beschrijf kort uw bouwproject, timing en eventuele plannen van de architect." rows="5"></textarea>
</div>

<div className="text-xs text-slate-500 leading-relaxed">
                    Door dit formulier te versturen gaat u ermee akkoord dat we uw gegevens gebruiken om contact met u op te nemen in functie van uw vraag.
                  </div>
<div className="flex flex-wrap items-center gap-3 pt-2">
<button className="inline-flex items-center gap-2 rounded-full bg-[#1f2937] text-slate-50 text-xs sm:text-sm font-medium tracking-tight px-5 py-2.5 hover:bg-[#111827] transition-colors" type="submit">
<span>Verzend bericht</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</button>
<span className="text-xs text-slate-500">
                      We reageren meestal binnen 2 à 3 werkdagen.
                    </span>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-slate-500">
<div className="flex items-center gap-2">
<img alt="Bouwwerken De Winter logo" className="h-5 w-auto" src="https://bouwwerkendewinter.be/bouwwerken-de-winter.png"/>
<span className="h-3 w-px bg-slate-200"></span>
<span>Bouwwerken De Winter · Vakmanschap sinds 1998</span>
</div>
<div className="flex flex-wrap gap-3 items-center">
<span>© <span id="jaar"></span> Bouwwerken De Winter</span>
<span className="hidden sm:inline-block text-slate-300">·</span>
<a className="hover:text-[#1f2937]" href="#">Privacy</a>
<a className="hover:text-[#1f2937]" href="#">Cookies</a>
<span className="hidden sm:inline-block text-slate-300">·</span>
<span>
            Website door
            <a className="hover:text-[#1f2937] underline underline-offset-2" href="https://hugarro.be/?utm_source=bouwwerkendewinter.be">
              Hugarro
            </a>
</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
