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
      

<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="glass-nav border border-slate-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
<a className="group flex items-center gap-2 text-slate-900 hover:text-emerald-600 transition-colors" href="#">

<div className="flex items-center gap-1 font-heading font-black text-xl tracking-tighter">
<span className="text-slate-800">Fahrschule</span>
<span className="text-emerald-500 relative">
                        ISY
                        <svg className="absolute -top-1 -right-2 w-3 h-3 text-emerald-400" fill="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="12"></circle></svg>
</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-6 text-sm font-heading font-medium text-slate-500">
<a className="hover:text-emerald-600 transition-colors" href="#klassen">Führerscheine</a>
<a className="hover:text-emerald-600 transition-colors" href="#ablauf">Ablauf</a>
<a className="hover:text-emerald-600 transition-colors" href="#preise">Preise</a>
<a className="hover:text-emerald-600 transition-colors" href="#about">Über uns</a>
</div>
<div className="h-4 w-px bg-slate-200 hidden lg:block"></div>
<a className="group bg-emerald-600 text-white text-sm px-5 py-2.5 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 flex items-center gap-2 font-heading font-semibold" href="#kontakt">
                Probestunde buchen
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</div>

<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 pb-20">

<div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 shadow-sm border border-slate-100 relative overflow-hidden group transition-shadow duration-700">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center">

<div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-heading font-bold mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        FREIE PLÄTZE VERFÜGBAR
                    </div>

<h1 className="animate-fade-up delay-200 text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6 text-slate-900 font-bold">
                        Dein Führerschein.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Einfach. Sicher.</span><br/>
                        Mit Fahrschule ISY.
                    </h1>

<p className="animate-fade-up delay-300 text-lg text-slate-500 leading-relaxed max-w-lg mb-10 font-medium">
                        Moderne Fahrausbildung, geduldige Lehrer und flexible Zeiten in Mainz-Kastel. Wir bringen dich entspannt und sicher durch die Prüfung.
                    </p>

<div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-8 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Moderne Fahrzeuge
                        </div>
<div className="flex items-center gap-2">
<div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Intensivkurse
                        </div>
<div className="flex items-center gap-2">
<div className="bg-emerald-100 p-1 rounded-full text-emerald-600"><svg fill="none" height="12" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                            Individuelle Betreuung
                        </div>
</div>

<div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
<a className="bg-emerald-600 text-white pl-8 pr-6 py-4 rounded-full text-base hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/20 transition-all duration-300 flex items-center gap-3 font-heading font-semibold group/btn" href="#kontakt">
                            Kostenlose Probestunde
                            <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/30 transition-colors">
<svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
<a className="bg-white border border-slate-200 text-slate-600 px-6 py-4 rounded-full text-base hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 font-heading font-semibold flex items-center gap-2" href="#preise">
                            Preise ansehen
                        </a>
</div>
</div>

<div className="lg:col-span-5 relative h-[450px] lg:h-[600px] w-full animate-slide-in delay-300">
<div className="absolute top-10 right-10 w-full h-full bg-emerald-50 rounded-[2rem] -rotate-3 z-0"></div>
<div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 z-10 group/image">

<img alt="Glückliche Fahrschülerin im Auto" className="w-full h-full object-cover hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-slate-100/50">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold font-heading tracking-wide text-slate-400 uppercase">Erfolgsquote</span>
<div className="flex text-yellow-400 gap-0.5">
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div>
<p className="text-sm font-bold text-slate-900 font-heading">Hunderte Schüler</p>
<p className="text-xs text-slate-500 font-medium">erfolgreich ausgebildet.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full py-10 mt-4 overflow-hidden marquee-mask relative group">
<div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused]">

<div className="flex items-center justify-around w-1/2 gap-16 px-8 opacity-60">
<span className="text-xl font-heading font-bold text-slate-400 flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg> Golf 8</span>
<span className="text-xl font-heading font-bold text-slate-400">Audi A3</span>
<span className="text-xl font-heading font-bold text-slate-400">Tiguan</span>
<span className="text-xl font-heading font-bold text-slate-400">TÜV Hessen</span>
<span className="text-xl font-heading font-bold text-slate-400 flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Dekra</span>
<span className="text-xl font-heading font-bold text-slate-400">Mercedes A-Klasse</span>
</div>

<div className="flex items-center justify-around w-1/2 gap-16 px-8 opacity-60">
<span className="text-xl font-heading font-bold text-slate-400 flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg> Golf 8</span>
<span className="text-xl font-heading font-bold text-slate-400">Audi A3</span>
<span className="text-xl font-heading font-bold text-slate-400">Tiguan</span>
<span className="text-xl font-heading font-bold text-slate-400">TÜV Hessen</span>
<span className="text-xl font-heading font-bold text-slate-400 flex items-center gap-2"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Dekra</span>
<span className="text-xl font-heading font-bold text-slate-400">Mercedes A-Klasse</span>
</div>
</div>
</div>

<div className="py-24" id="klassen">
<h2 className="text-3xl md:text-5xl text-center mb-6 tracking-tight text-slate-900 font-heading font-bold">
                Welchen Führerschein brauchst du?
            </h2>
<p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">Wir bilden dich in allen gängigen PKW- und Motorradklassen aus.</p>
<div className="flex flex-col gap-6 max-w-5xl mx-auto relative">

<div className="group sticky top-24 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:border-emerald-300 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
<div>
<span className="inline-block font-heading font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs mb-4">
                                BELIEBT
                            </span>
<h3 className="text-3xl text-slate-900 leading-tight mb-4 font-heading font-bold group-hover:text-emerald-700 transition-colors">
                                Auto Führerschein (Klasse B / B197)
                            </h3>
<p className="text-slate-600 font-medium leading-relaxed max-w-xl">
                                Der Klassiker. Wähle zwischen manueller Schaltung oder der neuen <strong>B197 Regelung</strong>: Ausbildung auf Automatik, Prüfung auf Automatik, aber trotzdem auch Schaltwagen fahren dürfen!
                            </p>
</div>
<div className="bg-slate-50 p-4 rounded-full group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
</div>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<a className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#kontakt">
                            Beratung anfragen <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group sticky top-32 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:border-emerald-300 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
<div>
<span className="inline-block font-heading font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs mb-4">
                                SAISONSTART
                            </span>
<h3 className="text-3xl text-slate-900 leading-tight mb-4 font-heading font-bold group-hover:text-emerald-700 transition-colors">
                                Motorrad (A, A1, A2, AM)
                            </h3>
<p className="text-slate-600 font-medium leading-relaxed max-w-xl">
                                Freiheit auf zwei Rädern. Egal ob Einstieg mit 16 Jahren (A1) oder die offene Klasse A. Wir haben die passenden Maschinen für deine Größe und Erfahrung.
                            </p>
</div>
<div className="bg-slate-50 p-4 rounded-full group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3 2-5.3-3.8a1 1 0 0 1 1.3-1.6l1.9 1.3 1.3-2L11 7.2a1 1 0 0 1 1.3-.2l3.3 1.5a1 1 0 0 1 .4 1.3L15 14l-2 3.5"></path></svg>
</div>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<a className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#kontakt">
                            Beratung anfragen <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group sticky top-40 bg-white hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50 rounded-3xl p-8 md:p-12 border border-slate-100 hover:border-emerald-300 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-1">
<div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
<div>
<span className="inline-block font-heading font-bold bg-emerald-600 text-white px-3 py-1 rounded-full text-xs mb-4">
                                SCHNELLKURS
                            </span>
<h3 className="text-3xl text-slate-900 leading-tight mb-4 font-heading font-bold group-hover:text-emerald-700 transition-colors">
                                Intensivkurse (7-14 Tage)
                            </h3>
<p className="text-slate-600 font-medium leading-relaxed max-w-xl">
                                Du willst es schnell durchziehen? In unseren Intensivkursen lernst du Theorie und Praxis kompakt in kurzer Zeit. Ideal für Ferien oder Urlaub.
                            </p>
</div>
<div className="bg-slate-50 p-4 rounded-full group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
</div>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<a className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#kontakt">
                            Termine prüfen <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="py-24 border-t border-slate-200" id="ablauf">
<h2 className="text-3xl md:text-5xl text-center mb-16 tracking-tight text-slate-900 font-heading font-bold">
                So kommst du zum Schein
            </h2>
<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

<div className="text-center group">
<div className="w-20 h-20 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold text-slate-300 mb-6 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all shadow-sm">1</div>
<h3 className="text-lg font-bold mb-2">Anmeldung</h3>
<p className="text-slate-500 text-sm">Komm vorbei oder melde dich online an. Wir erledigen den Papierkram.</p>
</div>

<div className="text-center group">
<div className="w-20 h-20 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold text-slate-300 mb-6 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all shadow-sm">2</div>
<h3 className="text-lg font-bold mb-2">Theorie</h3>
<p className="text-slate-500 text-sm">Spannender Unterricht in modernen Räumen. Auch als Intensivblock.</p>
</div>

<div className="text-center group">
<div className="w-20 h-20 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold text-slate-300 mb-6 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all shadow-sm">3</div>
<h3 className="text-lg font-bold mb-2">Praxis</h3>
<p className="text-slate-500 text-sm">Fahrstunden im modernen Golf oder Audi. Entspannt und sicher.</p>
</div>

<div className="text-center group">
<div className="w-20 h-20 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-3xl font-heading font-bold text-slate-300 mb-6 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-all shadow-sm">4</div>
<h3 className="text-lg font-bold mb-2">Prüfung</h3>
<p className="text-slate-500 text-sm">Wir bereiten dich perfekt vor. Du holst dir deinen Führerschein!</p>
</div>
</div>
</div>

<div className="py-24 grid lg:grid-cols-2 gap-20 items-center" id="about">

<div>
<h2 className="text-3xl md:text-5xl mb-8 tracking-tight text-slate-900 font-heading font-bold">
                    Warum Fahrschule ISY?
                </h2>
<div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
<p>
                        Bei <span className="text-emerald-600 font-bold">Fahrschule ISY</span> glauben wir, dass Fahrenlernen Spaß machen muss. Keine Angst, kein Stress.
                    </p>
<p>
                        Unsere Fahrlehrer sind bekannt für ihre <span className="border-b-2 border-emerald-200">Geduld und Ruhe</span>. Wir schreien nicht, wir erklären. Wir setzen auf moderne Technik und Fahrzeuge, damit du dich von Anfang an wohlfühlst.
                    </p>
<ul className="space-y-3 mt-4 text-base">
<li className="flex items-center gap-3">
<div className="bg-emerald-100 rounded-full p-1"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Faire, transparente Preise ohne versteckte Kosten
                        </li>
<li className="flex items-center gap-3">
<div className="bg-emerald-100 rounded-full p-1"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Flexible Fahrzeiten für Schüler &amp; Berufstätige
                        </li>
<li className="flex items-center gap-3">
<div className="bg-emerald-100 rounded-full p-1"><svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            Zentrale Lage in Mainz-Kastel
                        </li>
</ul>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center group/polaroid">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-full filter blur-3xl opacity-50"></div>

<div className="absolute top-10 left-10 w-64 bg-white p-3 pb-10 shadow-lg rotate-[-3deg] z-10 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
<div className="w-full h-64 bg-slate-200 overflow-hidden relative">
<img alt="Theorieunterricht" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="absolute top-24 right-4 w-64 bg-white p-3 pb-10 shadow-lg rotate-[3deg] z-20 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
<div className="w-full h-64 bg-slate-200 overflow-hidden relative">
<img alt="Fahrstunde" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="py-24 border-t border-slate-100" id="preise">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tight text-slate-900 font-heading font-bold mb-4">
                    Transparente Kosten
                </h2>
<p className="text-slate-500">Keine Pauschalpreise, sondern faire Abrechnung nach Leistung. Hier eine Orientierung:</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
<h3 className="font-heading font-bold text-xl mb-2">Grundbetrag</h3>
<p className="text-sm text-slate-500 mb-6">Für Verwaltung &amp; Theorieunterricht</p>
<div className="text-3xl font-bold text-slate-900 mb-6">399€ <span className="text-sm font-medium text-slate-400">einmalig</span></div>
<ul className="text-sm space-y-3 text-slate-600 mb-8">
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Anmeldung &amp; Verwaltung</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Alle Theoriestunden</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Lern-App Zugang</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-emerald-600 hover:text-white transition-colors" href="#kontakt">Anfragen</a>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Am häufigsten</div>
<h3 className="font-heading font-bold text-xl mb-2 text-white">Fahrstunde</h3>
<p className="text-sm text-slate-400 mb-6">Übungsfahrt (45 Min)</p>
<div className="text-3xl font-bold text-white mb-6">65€ <span className="text-sm font-medium text-slate-500">pro Stunde</span></div>
<ul className="text-sm space-y-3 text-slate-300 mb-8">
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Moderner Golf 8 / Audi</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Individuelles Feedback</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Keine versteckten Gebühren</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors" href="#kontakt">Jetzt starten</a>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
<h3 className="font-heading font-bold text-xl mb-2">Sonderfahrten</h3>
<p className="text-sm text-slate-500 mb-6">Autobahn, Nacht, Überland</p>
<div className="text-3xl font-bold text-slate-900 mb-6">75€ <span className="text-sm font-medium text-slate-400">pro Stunde</span></div>
<ul className="text-sm space-y-3 text-slate-600 mb-8">
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Gesetzlich vorgeschrieben</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 12 Stunden Pflicht (Kl. B)</li>
<li className="flex gap-2"><svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Sicher durch die Nacht</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-slate-50 text-slate-900 font-bold hover:bg-emerald-600 hover:text-white transition-colors" href="#kontakt">Anfragen</a>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8">* Preise dienen als Orientierung. Endpreis abhängig von Lernfortschritt. Preise inkl. MwSt.</p>
</div>

<div className="py-16 max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl text-center mb-10 font-heading font-bold">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer">
<summary className="flex justify-between items-center font-bold list-none text-slate-900">
                        Wie lange dauert der Führerschein?
                        <span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Das hängt von deinem Zeitplan und Talent ab. Im Schnitt brauchen Schüler 3-5 Monate. Mit unserem Intensivkurs geht es auch in 2-3 Wochen.</p>
</details>
<details className="group bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer">
<summary className="flex justify-between items-center font-bold list-none text-slate-900">
                        Was kostet der Führerschein insgesamt?
                        <span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Das variiert je nach benötigten Übungsstunden. Grob solltest du mit 2000€ bis 3000€ rechnen. Wir bieten volle Transparenz.</p>
</details>
<details className="group bg-white border border-slate-100 rounded-2xl p-4 cursor-pointer">
<summary className="flex justify-between items-center font-bold list-none text-slate-900">
                        Automatik oder Schaltung?
                        <span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-slate-500 mt-3 text-sm leading-relaxed">Wir empfehlen B197: Du lernst und prüfst auf Automatik (leichter!), machst aber ein paar Schaltstunden. Danach darfst du beides fahren!</p>
</details>
</div>
</div>

<div className="py-16" id="kontakt">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b981,transparent_50%)] opacity-20"></div>
<h2 className="text-3xl md:text-5xl mb-6 tracking-tight text-white font-heading font-bold relative z-10">
                    Bereit durchzustarten?
                </h2>
<p className="text-slate-400 text-lg mb-10 font-medium max-w-xl mx-auto relative z-10">
                    Sichere dir jetzt deine unverbindliche Probestunde bei Fahrschule ISY. Wir freuen uns auf dich!
                </p>
<form className="max-w-md mx-auto relative z-10 space-y-4">
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm" placeholder="Dein Name" type="text"/>
<input className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur-sm" placeholder="Telefonnummer" type="tel"/>
<button className="w-full bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-900/50">
                        Kostenlos anfragen
                    </button>
</form>
<div className="mt-8 flex justify-center gap-6 text-slate-400 text-sm relative z-10">
<span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 06134 / 123456</span>
<span className="flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> info@fahrschule-isy.de</span>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="font-heading font-black text-xl tracking-tighter mb-4">
<span className="text-slate-800">Fahrschule</span> <span className="text-emerald-500">ISY.</span>
</div>
<p className="text-slate-400 text-sm">Deine moderne Fahrschule in Mainz-Kastel.</p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Führerscheine</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600" href="#">Klasse B (Auto)</a></li>
<li><a className="hover:text-emerald-600" href="#">Klasse A (Motorrad)</a></li>
<li><a className="hover:text-emerald-600" href="#">B197 Automatik</a></li>
<li><a className="hover:text-emerald-600" href="#">Intensivkurse</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600" href="#">Impressum</a></li>
<li><a className="hover:text-emerald-600" href="#">Datenschutz</a></li>
<li><a className="hover:text-emerald-600" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Öffnungszeiten</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>Mo - Fr: 10:00 - 18:00</li>
<li>Sa: nach Vereinbarung</li>
</ul>
</div>
</div>
<div className="text-center text-slate-400 text-sm font-medium pt-8 border-t border-slate-50">
            © 2024 Fahrschule ISY. All rights reserved.
        </div>
</footer>


    </>
  );
}
