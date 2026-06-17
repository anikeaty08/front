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
      

<nav className="fixed transition-all duration-300 z-50 bg-zinc-900/80 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-12">

<a className="block hover:opacity-80 transition-opacity" href="/">
<img alt="Oma Ida Logo" className="filter opacity-90 mix-blend-screen w-auto h-16 object-cover invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76f1cea4-6358-4b8b-90f4-e2afc989943e_320w.png"/>
</a>
<div className="hidden md:flex gap-8 uppercase text-xs text-zinc-400 tracking-widest items-center">
<a className="hover:text-white transition-colors duration-300" href="/zimmer">Zimmer</a>
<a className="text-white transition-colors duration-300" href="/anfrage">Anfragen</a>
</div>
</div>
<div className="flex gap-x-6 gap-y-6 items-center">
<button className="uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full pt-2 pr-5 pb-2 pl-5" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'" role="button">
                    Reservieren
                </button>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 bg-zinc-900 border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 scale-105 blur-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/328abd23-6c89-49cb-8f0b-0d9f18aea036_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-black/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<span className="uppercase text-xs text-zinc-400 tracking-[0.3em] mb-4 block animate-[fadeIn_1s_ease-out]">Unverbindlich anfragen</span>
<h1 className="text-4xl md:text-6xl text-white font-medium tracking-tight text-glow mb-6">Buchungsanfrage</h1>
<p className="text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">Teilen Sie uns Ihre Reisewünsche mit. Wir erstellen Ihnen gerne ein individuelles Angebot für Ihren Aufenthalt im Harz.</p>
</div>
</header>

<section className="bg-zinc-900 py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 space-y-10">
<div>
<h3 className="text-white text-xl font-medium mb-6">Wir sind für Sie da</h3>
<p className="text-sm font-light leading-relaxed mb-8">
                            Haben Sie spezielle Wünsche oder Fragen zu unseren Zimmern? Zögern Sie nicht, uns direkt zu kontaktieren oder nutzen Sie das Formular.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center shrink-0 text-white">
<svg height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.05 12.05 0 0 0 .57 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.02 12.02 0 0 0 2.81.57a2 2 0 0 1 1.72 2"></path></g></svg>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Telefon</span>
<a className="text-white hover:text-zinc-300 transition-colors" href="tel:+49055209997979">+49 (0) 5520 999 79 79</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center shrink-0 text-white">
<svg height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">E-Mail</span>
<a className="text-white hover:text-zinc-300 transition-colors" href="mailto:marketing@strand-berg.de">marketing@strand-berg.de</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center shrink-0 text-white">
<svg height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Adresse</span>
<span className="text-zinc-300">Herzog Wilhelm Straße 10<br/>38700 Braunlage</span>
</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-800/30 border border-white/5 mt-10">
<h4 className="text-white font-medium mb-2 text-sm">Bestpreis-Garantie</h4>
<p className="text-xs font-light text-zinc-400">Bei direkter Anfrage oder Buchung über unsere Website erhalten Sie garantiert den besten Preis.</p>
</div>
</div>

<div className="lg:col-span-8">
<div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<form action="mailto:marketing@strand-berg.de" className="relative z-10 space-y-6" enctype="text/plain" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1" htmlFor="name">Name</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all font-light" id="name" name="Name" placeholder="Ihr vollständiger Name" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1" htmlFor="email">E-Mail</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all font-light" id="email" name="Email" placeholder="ihre@email.de" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1" htmlFor="phone">Telefon</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all font-light" id="phone" name="Telefon" placeholder="Für Rückfragen" required="" type="tel"/>
</div>

<div className="space-y-2 relative">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1" htmlFor="zimmer">Zimmerwahl</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all font-light cursor-pointer" id="zimmer" name="Zimmer" required="">
<option className="text-zinc-500" disabled="" selected="" value="">Bitte wählen Sie ein Zimmer</option>
<option className="bg-zinc-800 text-white" value="Doppelzimmer">Doppelzimmer</option>
<option className="bg-zinc-800 text-white" value="Komfort Doppelzimmer">Komfort Doppelzimmer</option>
<option className="bg-zinc-800 text-white" value="Superior Doppelzimmer">Superior Doppelzimmer</option>
<option className="bg-zinc-800 text-white" value="Keine Präferenz">Noch unentschlossen</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
<svg height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1" htmlFor="message">Ihre Nachricht</label>
<textarea className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-all font-light resize-none" id="message" name="Nachricht" placeholder="Wunschdatum, Personenanzahl oder sonstige Anmerkungen..." required="" rows="4"></textarea>
</div>

<div className="pt-4">
<button className="group w-full md:w-auto bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-full px-8 py-4 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="submit">
<span className="text-xs font-bold uppercase tracking-widest">Anfrage Absenden</span>
<svg className="group-hover:translate-x-1 transition-transform" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-[10px] text-zinc-500 mt-4 text-center md:text-left">
                                    Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten einverstanden.
                                </p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 border-white/5 border-t pt-20 pb-20 relative">
<div className="max-w-2xl mx-auto px-6 text-center z-10 relative">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Newsletter</span>
<h2 className="text-3xl text-white font-medium tracking-tight mb-4">Bleiben Sie informiert</h2>
<p className="text-sm text-zinc-400 font-light mb-8">Erhalten Sie saisonale Angebote und Neuigkeiten aus Braunlage.</p>
<form className="relative max-w-sm mx-auto">
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-full py-3.5 pl-6 pr-32 outline-none text-white placeholder-zinc-600 focus:border-zinc-500 transition-colors text-xs" placeholder="E-Mail Adresse" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black px-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors" type="submit">
                    Senden
                </button>
</form>
</div>
<div className="bg-center bg-gradient-to-b from-zinc-900/50 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
</section>

<footer className="text-sm font-light text-zinc-500 bg-zinc-900 border-white/5 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="col-span-1 md:col-span-1">
<h3 className="serif text-2xl text-white tracking-tighter mb-6">StrandBerg GmbH</h3>
<p className="leading-relaxed mb-6">Herzog Wilhelm Straße 10<br/> 38700 Braunlage, Deutschland</p>
<div className="flex flex-col gap-2">
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/tel:+49055209997979">+49 (0) 5520 999 79 79</a>
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/mailto:mail@strand-berg.de">mail@strand-berg.de</a>
</div>
</div>

<div>
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Entdecken</h4>
<ul className="space-y-3 text-xs tracking-wide">
<li><a className="hover:text-white transition-colors" href="#">Zimmer</a></li>
<li><a className="hover:text-white transition-colors" href="#">Frühstück</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sauna</a></li>
<li><a className="hover:text-white transition-colors" href="#">Umgebung</a></li>
</ul>
</div>

<div>
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Informationen</h4>
<ul className="space-y-3 text-xs tracking-wide">
<li><a className="hover:text-white transition-colors" href="#">Über Uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Anfahrt</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">Folgen Sie uns</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="#"><svg height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="#"><svg height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Oma Ida Bed &amp; Breakfast. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
