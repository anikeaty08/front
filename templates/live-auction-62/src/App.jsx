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



        lucide.createIcons();
    
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
      

<div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#050505]/80 backdrop-blur-lg border-t border-white/10 md:hidden flex flex-col gap-2">
<a className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-medium py-3 px-4 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]" href="{{WHATNOT_REF_LINK}}">
<span>Jetzt 15€ sichern</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<nav className="fixed top-0 w-full z-40 bg-[#050505]/70 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="relative group">
<span className="text-xl tracking-tight font-bold italic bg-gradient-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent">
                        SCHNAPP!
                    </span>
<div className="absolute -inset-1 bg-orange-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#benefits">Vorteile</a>
<a className="hover:text-white transition-colors" href="#how-it-works">So funktioniert's</a>
<a className="text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all" href="{{WHATNOT_REF_LINK}}">
                    Early Access
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Über unseren Link anmelden &amp; 15€ geschenkt sichern
            </div>

<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6" style={{}}>Live-Auktionen. <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500">
                    Echtzeit-Deals.
                </span> Adrenalin inklusive.</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
                Komm zu SCHNAPP! auf Whatnot und erlebe Live-Shopping, das richtig Spaß macht – mit starken Produkten und echten Schnäppchen.
            </p>

<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
<a className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 transition-all py-3.5 px-8 rounded-full font-medium text-base flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="{{WHATNOT_REF_LINK}}">
                    Jetzt bei Whatnot anmelden (15€ sichern)
                </a>
<a className="w-full md:w-auto border border-neutral-700 hover:border-neutral-500 bg-neutral-900/30 text-white transition-all py-3.5 px-8 rounded-full font-medium text-base flex items-center justify-center gap-2" href="#newsletter">
                    Zu den Live-Shows
                </a>
</div>

<div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Schnell registriert. Sofort startklar.</span>
</div>
</div>
</section>

<section className="py-20 bg-neutral-950 relative" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Warum du dabei sein willst</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 hover:bg-neutral-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg className="lucide lucide-zap w-6 h-6 text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Live &amp; interaktiv</h3>
<p className="text-neutral-400 leading-relaxed font-light">
                        Mitbieten, mitfiebern, im Chat dabei sein – alles in Echtzeit. Keine langweiligen Shops, sondern echte Action.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 hover:bg-neutral-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg className="lucide lucide-flame w-6 h-6 text-orange-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Spannung pur</h3>
<p className="text-neutral-400 leading-relaxed font-light">
                        Du siehst sofort, wie der Preis fällt oder steigt – und schnappst im richtigen Moment zu. Adrenalinkick garantiert.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-orange-500/30 hover:bg-neutral-900/60 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-orange-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Top-Produkte</h3>
<p className="text-neutral-400 leading-relaxed font-light">
                        Auktionen sind ehrlich: Der Preis entscheidet sich live – oft deutlich unter Shop-Preis. Neuware, Refurbished &amp; B-Ware.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative overflow-hidden" id="how-it-works">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">So funktioniert’s</h2>
<div className="text-orange-400 text-sm font-medium bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 self-start md:self-auto">
                    In weniger als 2 Minuten
                </div>
</div>
<div className="space-y-4">

<div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">1</div>
<div>
<h3 className="text-lg font-medium text-white">Über unseren Link bei Whatnot anmelden</h3>
</div>
</div>

<div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"></div>
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-lg relative z-10">2</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white">15€ Startguthaben automatisch bekommen</h3>
</div>
</div>

<div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-900/20 border border-neutral-800">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">3</div>
<div>
<h3 className="text-lg font-medium text-white">In die Live-Auktion rein &amp; losschnappen</h3>
</div>
</div>
</div>
<p className="mt-8 text-sm text-neutral-500 flex items-start gap-2">
<svg className="lucide lucide-info w-4 h-4 mt-0.5 text-neutral-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                Tipp: Früh reinschauen lohnt sich – die besten Deals gehen schnell weg.
            </p>
</div>
</section>

<section className="py-24" id="newsletter">
<div className="max-w-2xl mx-auto px-6">
<div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 text-center relative overflow-hidden">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">Nichts mehr verpassen</h2>
<p className="text-neutral-400 mb-8 font-light">
                    Hol dir die Termine unserer nächsten Live-Auktionen, Highlights und exklusive Deal-Hinweise direkt in dein Postfach.
                </p>
<form className="flex flex-col gap-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-neutral-600" placeholder="Name" type="text"/>
<input className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all placeholder:text-neutral-600" placeholder="E-Mail-Adresse" type="email"/>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-neutral-200 transition-colors" type="button">
                        Updates sichern
                    </button>
</form>
<p className="text-xs text-neutral-600 mt-6">
                    Du kannst dich jederzeit abmelden. Kein Spam, versprochen.
                </p>
</div>
</div>
</section>

<section className="py-12 pb-32">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden px-6 py-16 md:py-20 text-center border border-orange-500/30">

<div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-neutral-900 to-black -z-10"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">
                    Bereit für deinen ersten Deal?
                </h2>
<div className="flex justify-center">
<a className="group bg-orange-500 hover:bg-orange-400 text-black font-semibold text-lg py-4 px-10 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20" href="{{WHATNOT_REF_LINK}}">
                        Jetzt anmelden &amp; 15€ sichern
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                    SCHNAPP!
                </span>
<p className="text-sm text-neutral-500 mt-2">Live-Auktionen mit echten Schnäppchen.</p>
</div>
<div className="flex items-center gap-6">

<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-8 text-center md:text-left">
<p className="text-xs text-neutral-700">© 2024 SCHNAPP! All rights reserved. <a className="hover:text-neutral-500" href="#">Impressum</a> • <a className="hover:text-neutral-500" href="#">Datenschutz</a></p>
</div>
</footer>


    </>
  );
}
