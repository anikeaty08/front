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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg group-hover:bg-zinc-800 transition-colors">
<span className="font-semibold tracking-tighter text-sm">S</span>
</div>
<span className="font-semibold tracking-tight text-zinc-900">SALDO</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#tjenester">Tjenester</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#om-oss">Om oss</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#priser">Priser</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Logg inn</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200" href="#kontakt">
                    Bli kunde
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-grid mask-fade"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">Ledig kapasitet for nye oppdrag</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Fremtidens regnskap for <span className="text-zinc-400">ambisiøse bedrifter.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Vi kombinerer smart teknologi med personlig rådgivning for å gi deg full kontroll over økonomien. Mindre administrasjon, mer verdi.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200/50" href="#kontakt">
                    Start en samtale
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-lg border border-zinc-200 text-zinc-700 font-medium flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors bg-white" href="#tjenester">
                    Se tjenester
                </a>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Vi hjelper over 500 norske bedrifter</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">

<span className="text-xl font-bold tracking-tighter text-zinc-800">NORDIK</span>
<span className="text-xl font-semibold tracking-tight text-zinc-800 italic">Vekst</span>
<span className="text-xl font-bold tracking-tight text-zinc-800">APEX</span>
<span className="text-xl font-light tracking-widest text-zinc-800">STRUKTUR</span>
<span className="text-xl font-semibold tracking-tighter text-zinc-800">BASIS.</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tjenester">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Alt du trenger på ett sted</h2>
<p className="text-zinc-500 text-lg font-light max-w-xl">Fra daglig bokføring til komplekse årsoppgjør. Vi skreddersyr en løsning som passer din bedrift.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Løpende regnskap</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                        Automatisert bilagsføring og mva-rapportering. Vi sørger for at alt er korrekt og levert til rett tid, hver gang.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Lønn &amp; HR</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                        Trygg lønnskjøring, a-melding og feriepenger. Vi håndterer de ansattes goder og reiseregninger sømløst.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Rådgivning</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                        Strategisk økonomisk rådgivning for vekst. Vi hjelper deg med budsjettering, likviditetsstyring og selskapsstruktur.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Årsoppgjør</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                        Komplett ligningspapirer og årsregnskap til Brønnøysundregistrene. Vi sikrer optimal skattemessig behandling.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Systemintegrasjon</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm">
                        Vi er eksperter på Tripletex, Fiken og PowerOffice. Vi setter opp integrasjoner mot bank og kassesystemer.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-200 bg-zinc-50 flex flex-col justify-center items-center text-center">
<h3 className="text-xl font-medium tracking-tight mb-3">Usikker på behovet?</h3>
<p className="text-zinc-500 font-light leading-relaxed text-sm mb-6">
                        Ta en uforpliktende prat med en av våre statsautoriserte regnskapsførere.
                    </p>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 pb-0.5 transition-all" href="#kontakt">Kontakt oss</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900">500+</span>
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Klienter</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900">12</span>
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">År i bransjen</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900">100%</span>
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Digitalt</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900">24t</span>
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wide">Responstid</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="kontakt">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium mb-6">
                    Kontakt
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
                    Klar for en enklere økonomisk hverdag?
                </h2>
<p className="text-lg text-zinc-500 font-light mb-8">
                    Fyll ut skjemaet, så kontakter vi deg for en uforpliktende gjennomgang av dine behov. Vi svarer vanligvis innen én arbeidsdag.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
<iconify-icon height="20" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Telefon</p>
<p className="text-sm text-zinc-500">+47 22 33 44 55</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 shrink-0">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">E-post</p>
<p className="text-sm text-zinc-500">hei@saldo.no</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="firstname">Fornavn</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-300" id="firstname" placeholder="Ola" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="lastname">Etternavn</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-300" id="lastname" placeholder="Nordmann" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="company">Bedriftsnavn</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-300" id="company" placeholder="Din Bedrift AS" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="email">E-postadresse</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-300" id="email" placeholder="ola@bedrift.no" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide" htmlFor="message">Melding</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-300 resize-none" id="message" placeholder="Fortell kort om hva du trenger hjelp til..." rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer custom-checkbox group">
<div className="relative mt-0.5">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-zinc-400">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
<span className="text-sm text-zinc-500 leading-tight">Jeg samtykker til at Saldo kan lagre informasjonen min for å kontakte meg.</span>
</label>
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-lg hover:bg-zinc-800 transition-all hover:shadow-lg mt-2" type="button">
                        Send forespørsel
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded-md">
<span className="font-semibold tracking-tighter text-xs">S</span>
</div>
<span className="font-semibold tracking-tight text-zinc-900">SALDO</span>
</a>
<p className="text-sm text-zinc-500 max-w-xs font-light mb-6">
                        Moderne regnskapstjenester for små og mellomstore bedrifter i Norge. Vi gjør tallene forståelige.
                    </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:brand-facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon height="20" icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Tjenester</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Bokføring</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Lønn</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Årsoppgjør</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Rådgivning</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Selskap</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Om oss</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Karriere</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Blogg</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Personvern</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-1">Kontakt</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Support</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Salg</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Oslo Kontor</a>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400 font-light">© 2023 Saldo Regnskap AS. Alle rettigheter reservert.</p>
<div className="flex gap-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<p className="text-xs text-zinc-400 font-light">Systemstatus: Normal</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
