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



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0F0F0F',
primary: '#007DB8', // Bright Blue
text: '#EDEDED',
muted: '#999999',
surface: 'rgba(255, 255, 255, 0.05)',
surfaceHover: 'rgba(255, 255, 255, 0.08)',
border: 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
display: ['"Funnel Display"', 'sans-serif'],
body: ['"Inter"', 'sans-serif'],
},
backdropBlur: {
xs: '2px',
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-border bg-[#0F0F0F]/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="font-display font-semibold text-xl tracking-tight text-white">Ampera</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-muted transition-colors hover:text-white" href="#tjenester">Tjenester</a>
<a className="text-sm font-medium text-muted transition-colors hover:text-white" href="#om-oss">Om oss</a>
<a className="text-sm font-medium text-muted transition-colors hover:text-white" href="#">Nyheter</a>
<a className="text-sm font-medium text-muted transition-colors hover:text-white" href="#">Karriere</a>
</div>

<a className="hidden md:flex items-center gap-2 border text-sm font-medium px-4 py-2 rounded-lg transition-all group bg-white/5 hover:bg-white/10 border-white/10 text-white" href="#kontakt">
                Kontakt oss
                <i className="w-4 h-4 text-muted group-hover:text-primary transition-colors" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="min-h-[90vh] flex flex-col overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] primary-glow blur-[120px] pointer-events-none">
</div>

<svg className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none stroke-white/20" fill="none" viewbox="0 0 1440 800">
<path d="M-100 600 C 200 600, 400 200, 800 200 C 1200 200, 1400 500, 1600 500" stroke-dasharray="8 8" strokeWidth="1"></path>
<path d="M-100 650 C 200 650, 400 250, 800 250 C 1200 250, 1400 550, 1600 550" stroke-dasharray="8 8" strokeWidth="1"></path>
</svg>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Energientreprenør i Østfold/Viken
        </div>

<h1 className="text-5xl md:text-7xl lg:text-[84px] font-semibold leading-[1.05] tracking-tight mb-6 text-white">
            Trygg drift av <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Norges strømnett</span>
</h1>

<p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Vi bygger, drifter og vedlikeholder distribusjonsnett for nettselskaper.
            Prekvalifisert hos Elvia, Norgesnett og Glitre Energi Nett.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(0,125,184,0.5)] text-white" href="#kontakt">
                Få et uforpliktende tilbud
            </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border rounded-lg font-medium transition-all border-white/20 hover:border-white/40 text-white" href="#tjenester">
                Se våre tjenester
            </a>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/5">
<div className="flex items-center gap-2 text-muted/60 hover:text-muted transition-colors">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span className="text-xs font-medium uppercase tracking-wide">ISO 9001 Sertifisert</span>
</div>
<div className="flex items-center gap-2 text-muted/60 hover:text-muted transition-colors">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span className="text-xs font-medium uppercase tracking-wide">Sellihca Kvalifisert</span>
</div>
<div className="flex items-center gap-2 text-muted/60 hover:text-muted transition-colors">
<i className="w-4 h-4" data-lucide="zap"></i>
<span className="text-xs font-medium uppercase tracking-wide">AUS Godkjent</span>
</div>
<div className="flex items-center gap-2 text-muted/60 hover:text-muted transition-colors">
<i className="w-4 h-4" data-lucide="leaf"></i>
<span className="text-xs font-medium uppercase tracking-wide">Miljøfyrtårn</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="tjenester">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-primary font-medium tracking-wide text-sm uppercase block mb-2">Våre tjenester</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Alt innen distribusjonsnett</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<i className="w-6 h-6 text-primary" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors bg-white/5 border-white/10">
<i className="w-6 h-6 group-hover:text-primary text-white" data-lucide="cable"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Kabelarbeid</h3>
<p className="text-muted leading-relaxed mb-6">Legging, skjøting og terminering av høy- og lavspentkabel for sikker energidistribusjon.</p>
<span className="text-sm font-medium border-b border-primary/50 pb-0.5 inline-block text-white">Les mer</span>
</div>

<div className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<i className="w-6 h-6 text-primary" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors bg-white/5 border-white/10">
<i className="w-6 h-6 group-hover:text-primary text-white" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Linjearbeid</h3>
<p className="text-muted leading-relaxed mb-6">Bygging, riving og vedlikehold av luftlinjer. Vi utfører også arbeid under spenning (AUS).</p>
<span className="text-sm font-medium border-b border-primary/50 pb-0.5 inline-block text-white">Les mer</span>
</div>

<div className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
<i className="w-6 h-6 text-primary" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors bg-white/5 border-white/10">
<i className="w-6 h-6 group-hover:text-primary text-white" data-lucide="box"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Nettstasjoner</h3>
<p className="text-muted leading-relaxed mb-6">Totalleverandør på installasjon, service og oppgradering av transformatorstasjoner og kiosker.</p>
<span className="text-sm font-medium border-b border-primary/50 pb-0.5 inline-block text-white">Les mer</span>
</div>

<div className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden border-primary/20 bg-primary/5">
<div className="absolute top-6 right-6">
<span className="px-2.5 py-1 rounded-full bg-primary text-[10px] font-semibold uppercase tracking-wide text-white">Bestill Online</span>
</div>
<div className="w-12 h-12 rounded-lg border flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors bg-white/5 border-white/10">
<i className="w-6 h-6 text-primary" data-lucide="plug-zap"></i>
</div>
<h3 className="text-xl font-semibold mb-2 text-white">Byggestrøm</h3>
<p className="text-muted leading-relaxed mb-6">Midlertidig strøm til byggeplasser og arrangementer. Rask levering og enkel online bestilling.</p>
<span className="text-sm font-medium border-b border-primary/50 pb-0.5 inline-block text-white">Bestill nå</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-[#0F0F0F] border-white/5" id="om-oss">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-primary font-medium tracking-wide text-sm uppercase block mb-2">Hvorfor Ampera?</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Kvalitet i alle ledd</h2>
</div>
<p className="text-muted max-w-md text-right md:text-left text-lg">
                    Vi utfordrer de etablerte aktørene med moderne systemer og lokal tilstedeværelse.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
<i className="w-5 h-5 text-primary" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-semibold mb-3 text-white">HMS i verdensklasse</h3>
<p className="text-muted text-base leading-relaxed">
                        Sikkerhet er ikke et mål — det er en forutsetning. Vi jobber etter strenge HMS-standarder på hvert eneste oppdrag, sertifisert etter ISO 9001.
                    </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
<i className="w-5 h-5 text-primary" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-semibold mb-3 text-white">Rask respons</h3>
<p className="text-muted text-base leading-relaxed">
                        Kort vei fra forespørsel til handling. Som et smidig team tar vi raske beslutninger og er tilgjengelige når dere trenger oss, 24/7.
                    </p>
</div>

<div className="flex flex-col">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
<i className="w-5 h-5 text-primary" data-lucide="map-pin"></i>
</div>
<h3 className="text-lg font-semibold mb-3 text-white">Lokal ekspertise</h3>
<p className="text-muted text-base leading-relaxed">
                        Vi kjenner nettet, terrenget og aktørene i Østfold og Viken. Bygget på årelang erfaring fra feltet i regionen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y bg-white/[0.01] border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-muted uppercase tracking-wider mb-8">Prekvalifisert og betrodd av regionens største nettselskaper</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-2xl font-bold font-display tracking-tight flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded-full bg-white"></div> ELVIA
                </div>
<div className="text-2xl font-bold font-display italic text-white">Norgesnett</div>
<div className="text-xl font-bold font-display uppercase tracking-widest border-2 px-2 py-1 text-white border-white">Glitre Energi</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="kontakt">

<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="pt-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                        Klar for å starte <br/> prosjektet?
                    </h2>
<p className="text-xl text-muted font-light mb-12 max-w-md">
                        Vi leverer distribusjonsnett, byggestrøm og LFS med kort vei fra forespørsel til handling.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white/5">
<i className="w-5 h-5 text-primary" data-lucide="phone"></i>
</div>
<div>
<h3 className="font-medium text-lg text-white">Ring oss</h3>
<p className="text-muted mb-1">+47 90 00 00 00</p>
<p className="text-xs text-muted/60">Vi svarer innen 2 timer på hverdager</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white/5">
<i className="w-5 h-5 text-primary" data-lucide="mail"></i>
</div>
<div>
<h3 className="font-medium text-lg text-white">Send e-post</h3>
<p className="text-muted">post@ampera.no</p>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 md:p-10 rounded-2xl bg-black/40">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-muted" htmlFor="navn">Navn</label>
<input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-muted/30 bg-white/5 border-white/10 text-white" id="navn" placeholder="Ola Nordmann" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-muted" htmlFor="bedrift">Bedrift</label>
<input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-muted/30 bg-white/5 border-white/10 text-white" id="bedrift" placeholder="Bedrift AS" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-muted" htmlFor="email">E-post</label>
<input className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-muted/30 bg-white/5 border-white/10 text-white" id="email" placeholder="ola@bedrift.no" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-muted" htmlFor="melding">Kort om prosjektet</label>
<textarea className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-muted/30 resize-none bg-white/5 border-white/10 text-white" id="melding" placeholder="Hva trenger dere hjelp til?" rows="4"></textarea>
</div>
<button className="w-full bg-primary hover:bg-primary/90 font-medium py-3.5 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-white" type="submit">
                            Send forespørsel
                            <i className="w-4 h-4" data-lucide="send"></i>
</button>
<p className="text-center text-xs text-muted/50 mt-4">
                            Uforpliktende henvendelse. Vi tar kontakt samme dag.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t pt-20 pb-10 border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="font-display font-semibold text-lg text-white">Ampera</span>
</a>
<p className="text-muted text-sm leading-relaxed">
                        Moderne energientreprenør i Østfold og Viken. Vi bygger fremtidens strømnett.
                    </p>
<p className="text-muted/60 text-xs">Org.nr: 999 999 999 MVA</p>
</div>

<div>
<h4 className="font-medium mb-6 text-white">Tjenester</h4>
<ul className="space-y-3">
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Kabelarbeid</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Linjearbeid</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Nettstasjoner</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors flex items-center gap-2" href="#">Byggestrøm <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white">Online</span></a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Alle tjenester</a></li>
</ul>
</div>

<div>
<h4 className="font-medium mb-6 text-white">Selskapet</h4>
<ul className="space-y-3">
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Om oss</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Karriere</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Nyheter</a></li>
<li><a className="text-muted hover:text-primary text-sm transition-colors" href="#">Bærekraft</a></li>
</ul>
</div>

<div>
<h4 className="font-medium mb-6 text-white">Kontakt</h4>
<ul className="space-y-3">
<li className="text-muted text-sm flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-primary" data-lucide="map-pin"></i>
                            Industriveien 12,<br/>1700 Sarpsborg
                        </li>
<li className="text-muted text-sm flex items-center gap-2">
<i className="w-4 h-4 text-primary" data-lucide="phone"></i>
                            +47 90 00 00 00
                        </li>
<li className="text-muted text-sm flex items-center gap-2">
<i className="w-4 h-4 text-primary" data-lucide="mail"></i>
                            post@ampera.no
                        </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-muted/40 text-xs">© 2025 Ampera AS. Alle rettigheter reservert.</p>
<div className="flex gap-6">
<a className="text-muted/40 hover:text-muted text-xs transition-colors" href="#">Personvernerklæring</a>
<a className="text-muted/40 hover:text-muted text-xs transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
