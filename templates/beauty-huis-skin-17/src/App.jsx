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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-500/90 flex items-center justify-center shadow-lg shadow-emerald-500/40">
<span className="text-slate-950 text-lg font-semibold tracking-tight">BH</span>
</div>
<div className="hidden sm:block">
<div className="text-sm font-medium text-emerald-400 tracking-tight">Beauty Huis</div>
<div className="text-xs text-slate-400">Instituut voor Huidverbetering</div>
</div>
</div>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-100 hover:text-emerald-400 transition-colors" href="#home">HOME</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#algemene-voorwaarden">Algemene Voorwaarden</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#privacy-verklaring">Privacy Verklaring</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#diensten">DIENSTEN</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#tarieven">TARIEVEN</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#webshop">WEBSHOP CENZAA</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#blog">BLOG</a>
<a className="text-slate-300 hover:text-emerald-400 transition-colors" href="#contact">CONTACT</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/10 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="log-in"></i>
                            Inloggen
                        </button>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/40" href="#boek-nu">
                            Boek nu
                            <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>

<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition-colors">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="overflow-hidden relative" id="home">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-slate-950 to-slate-950 pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 gap-x-10 gap-y-10 items-center">

<div className="lg:col-span-6 space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] font-medium text-emerald-200 tracking-tight">Laserkliniek Sittard – Laser Ontharen | Skin Rejuvenation</span>
</div>
<div className="space-y-3">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                                    Ga voor resultaatgerichte
                                    <span className="block italic text-emerald-300">huidverbetering</span>
</h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                                    Boost je zelfvertrouwen en de gezondheid van je huid met Clean Science huidverzorging. 
                                    We combineren de beste ingrediënten uit de natuur met vernieuwende technologieën, 
                                    supercharged met een maximale dosering aan actieve werkstoffen.
                                </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors shadow-md shadow-emerald-500/40" href="#contact" id="boek-nu">
                                    Maak een afspraak
                                    <i className="w-4 h-4" data-lucide="calendar-plus"></i>
</a>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-slate-700 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition-colors">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                                    Ontdek onze diensten
                                </button>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
                                    Dierproefvrij · Vrij van parabenen · Clean Science
                                </div>
</div>

<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="map-pin"></i>
<h2 className="text-sm font-semibold tracking-tight text-slate-100">Welkom</h2>
</div>
<p className="text-xs text-slate-300">
                                        Beauty Huis is gelegen aan de Rijksweg Zuid 38 in Sittard en heeft voor haar bezoekers parkeermogelijkheid op eigen terrein.
                                    </p>
<p className="mt-2 text-xs text-slate-400">
                                        Indien het parkeerterrein vol is, kunt u tegen betaling parkeren op de Rijksweg Zuid of op het nabijgelegen parkeerterrein Mgr. Claessenstraat.
                                    </p>
</div>
<div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="stethoscope"></i>
<h2 className="text-sm font-semibold tracking-tight text-slate-100">Cosmetisch arts</h2>
</div>
<p className="text-xs text-slate-200">
                                        Drs. Roger Kroll donderdag 13 november
                                        18.00 – 20.00 uur.
                                    </p>
<p className="mt-2 text-xs text-slate-300">
                                        Reserveren per Whatsapp <span className="font-medium text-emerald-300">046-426 45 80</span>
                                        of per e-mail <span className="font-medium text-emerald-300">info@beauty-huis.nl</span>
</p>
</div>
</div>
</div>

<div className="lg:col-span-6 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-5 gap-4">

<div className="sm:col-span-3">
<div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
<img alt="Gezichtsbehandeling bij Beauty Huis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
<div>
<div className="text-[11px] font-medium uppercase tracking-tight text-emerald-300">Instituut voor huidverbetering</div>
<div className="text-sm text-slate-100">De perfecte synergie tussen huidverzorging en real results.</div>
</div>
<div className="flex items-center gap-2 bg-slate-950/70 px-3 py-2 rounded-full border border-slate-800/80">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-slate-950 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="" className="w-6 h-6 rounded-full border border-slate-950 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<div className="text-[11px]">
<div className="flex items-center gap-1">
<span className="text-amber-300">★★★★★</span>
</div>
<div className="text-slate-300">Google reviews</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:col-span-2 space-y-4">
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="flask-conical"></i>
<span className="text-xs font-semibold tracking-tight text-slate-100">Clean Science</span>
</div>
<p className="text-xs text-slate-300">
                                            Dierproefvrij, vrij van synthetische kleur- en geurstoffen, parabenen en andere huidbelastende ingrediënten.
                                        </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-4">
<p className="text-[11px] font-medium text-emerald-200 tracking-tight mb-1">
                                            Dagelijkse huidverzorgingsroutine
                                        </p>
<p className="text-xs text-slate-100">
                                            Door de juiste ingrediënten te combineren werkt de huid doelgericht aan verbetering van binnenuit.
                                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950/80" id="diensten">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">Diensten</h2>
<p className="mt-2 text-sm text-slate-400 max-w-xl">
                                Resultaatgerichte huidverbeterende behandelingen, volledig afgestemd op de behoeften van jouw huid.
                            </p>
</div>
<div className="flex items-center gap-3 text-xs text-slate-400">
<i className="w-4 h-4 text-emerald-300" data-lucide="check-circle-2"></i>
                            Persoonlijk behandelplan op basis van professionele huidanalyse.
                        </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="sparkles"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Huidverbetering</h3>
</div>
<p className="text-xs text-slate-300 mb-4">
                                Intensieve behandelingen voor het verbeteren van textuur, glow en algehele huidconditie.
                            </p>
<div className="space-y-2 text-xs text-slate-200">
<div className="font-medium text-emerald-200">Acne Therapie</div>
<div>Dermapen4 Micro-needling</div>
<div>Diamond Touch Microdermabrasie</div>
<div>PRX-T33 Collageen stimulator</div>
<div>WishPro Magnetic Infusion</div>
<div>Dermaplaning</div>
<div>Global Peel</div>
<div>Bio Peel &amp; Bio Pulse</div>
<div>Cosmetisch arts</div>
<div>Medifacials Synergie Skin</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 space-y-4">
<div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="eye"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Brows &amp; Wimpers</h3>
</div>
<p className="text-xs text-slate-300">
                                    Perfect gevormde wenkbrauwen en wimpers voor een frisse, open blik.
                                </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="scissors"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Harsen</h3>
</div>
<p className="text-xs text-slate-300">
                                    Glad en verzorgd met professionele harsbehandelingen voor lichaam en gezicht.
                                </p>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 flex flex-col gap-4">
<div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="euro"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50" id="tarieven">Tarieven</h3>
</div>
<p className="text-xs text-slate-300">
                                    Transparante prijzen voor alle behandelingen. Vraag in de salon naar het volledige overzicht.
                                </p>
</div>
<div id="webshop">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="shopping-bag"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Webshop Cenzaa</h3>
</div>
<p className="text-xs text-slate-300">
                                    Bestel jouw favoriete Cenzaa producten online en verleng het salonsresultaat thuis.
                                </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="file-text"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50" id="algemene-voorwaarden">Algemene Voorwaarden</h3>
</div>
<p className="text-xs text-slate-300">
                                    De algemene voorwaarden zijn op aanvraag beschikbaar in de salon en gelden voor alle behandelingen en aankopen.
                                </p>
</div>
<div>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield"></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-50" id="privacy-verklaring">Privacy Verklaring</h3>
</div>
<p className="text-xs text-slate-300">
                                    Beauty Huis gaat zorgvuldig om met jouw persoonsgegevens conform de geldende wet- en regelgeving.
                                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-900 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                                De gezondheid van jouw huid verbeteren
                            </h2>
<p className="text-sm text-slate-300">
                                De gezondheid van jouw huid verbeteren met krachtige formules die doen wat ze beloven. 
                                Ondersteund door Clean Science, is ons assortiment vakkundig ontwikkeld met resultaatgerichte 
                                huidverzorging voor alle huidtypes.
                            </p>
<p className="text-sm text-slate-300">
                                We gebruiken de meest actieve en schone ingrediënten om onze formules te ontwikkelen, 
                                met een maximale dosering van actieve ingrediënten. Onze producten zijn dierproefvrij, vrij van 
                                synthetische kleur- en geurstoffen, parabenen en andere huidbelastende ingrediënten.
                            </p>
<p className="text-sm text-slate-300">
                                Door de juiste ingrediënten te combineren in een dagelijkse huidverzorgingsroutine, werkt de huid 
                                doelgericht aan verbetering van binnenuit.
                            </p>
<p className="text-sm text-slate-200 font-medium">
                                De perfecte synergie tussen huidverzorging en real results.
                            </p>
</div>
<div className="space-y-4">
<div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 flex gap-4 items-center">
<div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
<img alt="Serum flesje" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="space-y-1">
<p className="text-[11px] font-medium text-emerald-200 tracking-tight uppercase">Refillable glass</p>
<p className="text-sm text-slate-100">Ontworpen voor de lange termijn, met volledig recyclebare verpakkingen.</p>
<p className="text-xs text-slate-400">Minder afval · Meer resultaat · Milde formuleringen voor de huid.</p>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 flex gap-4 items-center">
<div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
</div></div></div></div></div></section></main></div>
    </>
  );
}
