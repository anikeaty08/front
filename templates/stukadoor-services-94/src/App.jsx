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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-medium group-hover:scale-105 transition-transform duration-300">
                    W
                </div>
<span>Van Der Werf<span className="text-slate-400 font-normal">.</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#diensten">Diensten</a>
<a className="hover:text-slate-900 transition-colors" href="#over-ons">Over ons</a>
<a className="hover:text-slate-900 transition-colors" href="#projecten">Projecten</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm hover:shadow-md" href="#contact">
                Offerte Aanvragen
            </a>

<button className="md:hidden text-slate-600">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Beschikbaar voor nieuwe projecten in 2024
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1] fade-in-up delay-100">
                Meesters in moderne <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">wandafwerking.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up delay-200">
                Van Der Werf Afbouw levert hoogwaardig stucwerk, spackspuitwerk en latex spuiten voor zowel nieuwbouw als renovatie. Strakke resultaten, gegarandeerd.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group" href="#contact">
                    Start uw project
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-height="18" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-600 border border-slate-200 text-sm font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center" href="#diensten">
                    Bekijk onze diensten
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 fade-in-up delay-300">

<div className="flex items-center gap-2 text-slate-800 font-semibold tracking-tight"><span className="iconify" data-icon="lucide:home" data-width="20"></span> Nieuwbouw</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold tracking-tight"><span className="iconify" data-icon="lucide:hammer" data-width="20"></span> Renovatie</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold tracking-tight"><span className="iconify" data-icon="lucide:brush" data-width="20"></span> Afwerking</div>
<div className="flex items-center gap-2 text-slate-800 font-semibold tracking-tight"><span className="iconify" data-icon="lucide:shield-check" data-width="20"></span> Garantie</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="diensten">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Onze expertise</h2>
<p className="text-slate-500 text-lg">Wij bieden een compleet pakket aan wand- en plafondafwerking. Van traditioneel stucwerk tot modern spuitwerk.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:layers" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Stucwerk</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Ambachtelijk glad pleisterwerk voor wanden en plafonds. De perfecte basis voor schilderwerk of behang, sausklaar opgeleverd.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Sausklaar of behangklaar
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Vochtregulerend
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:spray-can" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Latex Spuiten</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Airless latex spuiten zorgt voor een streeploos en egaal eindresultaat. Veel sneller en vaak voordeliger dan traditioneel rollen.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Streeploos resultaat
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Elke kleur mogelijk
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:paint-roller" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Dunpleister</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Ideaal voor nieuwbouwwoningen met behangklare wanden. Een dunne laag gips maakt de muren spiegelglad voor het spuiten.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Perfect voor nieuwbouw
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Snelle verwerking
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-height="24" data-icon="lucide:warehouse" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Spackspuitwerk</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Een kostenefficiënte afwerking met een korrelstructuur. Slijtvast en direct op kleur aan te brengen. Geschikt voor grote oppervlakken.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Kostenefficiënt
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span> Direct op kleur
                        </li>
</ul>
</div>

<div className="md:col-span-2 bg-slate-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-slate-700 rounded-full blur-3xl opacity-20"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white mb-4">Waarom Van Der Werf?</h3>
<p className="text-slate-400 mb-8 max-w-lg">
                            Met jarenlange ervaring in de afbouwsector garanderen wij niet alleen een strak resultaat, maar ook heldere communicatie en een schone oplevering. Wij behandelen uw woning met respect.
                        </p>
<a className="inline-flex items-center text-white font-medium hover:text-slate-300 transition-colors" href="#contact">
                            Vraag advies aan <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projecten">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Recente Projecten</h2>
<p className="text-slate-500">Bekijk de kwaliteit van onze afwerking.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-200 hover:border-slate-900 transition-colors pb-0.5" href="#">Volg ons op Instagram</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer">
<img alt="Strakke woonkamer muur" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Nieuwbouw Woonkamer</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer">
<img alt="Keuken plafond stucwerk" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Keuken Renovatie</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer">
<img alt="Slaapkamer glad pleisterwerk" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Dunpleister Project</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<div className="text-4xl font-semibold tracking-tight text-slate-900">10+</div>
<div className="text-sm font-medium text-slate-500">Jaren Ervaring</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold tracking-tight text-slate-900">500+</div>
<div className="text-sm font-medium text-slate-500">Projecten Afgerond</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold tracking-tight text-slate-900">100%</div>
<div className="text-sm font-medium text-slate-500">Tevredenheid</div>
</div>
<div className="space-y-2">
<div className="text-4xl font-semibold tracking-tight text-slate-900">M²</div>
<div className="text-sm font-medium text-slate-500">Onbeperkt</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Vraag vrijblijvend een offerte aan</h2>
<p className="text-slate-500">Vul het formulier in en wij nemen zo snel mogelijk contact met u op voor een prijsindicatie of afspraak.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="name">Naam</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-sm" id="name" placeholder="Uw naam" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-sm" id="email" placeholder="uw@email.nl" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Type Woning</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-center rounded-md border border-slate-200 text-sm text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:bg-slate-50 transition-all">
                                Nieuwbouw
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-center rounded-md border border-slate-200 text-sm text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:bg-slate-50 transition-all">
                                Bestaand
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-center rounded-md border border-slate-200 text-sm text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:bg-slate-50 transition-all">
                                Zakelijk
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-3 py-2 text-center rounded-md border border-slate-200 text-sm text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 hover:bg-slate-50 transition-all">
                                Anders
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="message">Bericht</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-sm resize-none" id="message" placeholder="Omschrijf uw project (aantal m², soort afwerking, etc.)" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group" type="submit">
<span className="iconify" data-icon="lucide:send" data-width="18"></span>
                    Verstuur aanvraag
                </button>
<p className="text-center text-xs text-slate-400 mt-4">Wij reageren doorgaans binnen 24 uur.</p>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center text-xs">W</div>
                        VDW.
                    </a>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Uw partner voor hoogwaardig stuc- en spuitwerk. Kwaliteit, betrouwbaarheid en vakmanschap.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Diensten</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Glad Stucwerk</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Spackspuitwerk</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Latex Spuiten</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Dunpleister</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Bedrijf</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Over ons</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Projecten</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Algemene Voorwaarden</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacybeleid</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            info@vdw-afbouw.com
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            +31 (0)6 1234 5678
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            Nederland
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Van Der Werf Afbouw. Alle rechten voorbehouden.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
