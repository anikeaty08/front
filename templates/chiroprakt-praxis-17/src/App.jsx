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



        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });

        // Mobile Menu Toggle
        const btn = document.querySelector('[data-collapse-toggle]');
        const menu = document.getElementById('navbar-sticky');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-teal-900 text-white p-1.5 rounded-lg group-hover:bg-teal-700 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<span className="self-center text-lg font-medium tracking-tight text-slate-900">MITTE</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-300 transform hover:scale-[1.02]" type="button">
                    Termin buchen
                </button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Menü öffnen</span>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-sm">
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 transition-colors" href="#philosophie">Philosophie</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 transition-colors" href="#behandlungen">Behandlungen</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 transition-colors" href="#stimmen">Patientenstimmen</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0 transition-colors" href="#kontakt">Kontakt</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 mesh-gradient overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600 mb-8 fade-in-up shadow-sm">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Neue Patienten willkommen
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1] fade-in-up delay-100">
                Wiederherstellung Ihrer <br/>
<span className="text-teal-800/90">natürlichen Balance.</span>
</h1>
<p className="text-slate-500 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up delay-200">
                Ganzheitliche Chiropraktik im Herzen der Stadt. Wir kombinieren moderne Wissenschaft mit sanfter Justierung für ein schmerzfreies Leben.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-300">
<a className="px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5" href="#">
                    Erstuntersuchung vereinbaren
                </a>
<a className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-50 transition-all hover:border-slate-300" href="#philosophie">
                    Mehr erfahren
                </a>
</div>
</div>

<div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block opacity-20">
<i className="w-64 h-64 text-teal-200 stroke-[0.5]" data-lucide="spine"></i>
</div>
<div className="absolute top-1/3 right-10 -translate-y-1/2 hidden lg:block opacity-20">
<i className="w-48 h-48 text-slate-300 stroke-[0.5]" data-lucide="flower-2"></i>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="philosophie">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-teal-100 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1"></div>
<div className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">

<div className="absolute inset-0 flex items-center justify-center bg-slate-50">
<i className="w-24 h-24 text-teal-900/10 stroke-1" data-lucide="heart-pulse"></i>
</div>

<img alt="Behandlungsraum" className="object-cover w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-teal-700 font-medium text-xs uppercase tracking-widest">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                        Unsere Philosophie
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
                        Nicht nur Symptome behandeln.<br/>Ursachen lösen.
                    </h2>
<p className="text-slate-600 leading-relaxed font-light">
                        Der menschliche Körper besitzt eine angeborene Fähigkeit zur Selbstheilung. Unsere Aufgabe ist es, Blockaden im Nervensystem zu entfernen, damit diese Intelligenz wieder frei fließen kann. Wir betrachten Sie als Ganzes – nicht als Summe Ihrer Beschwerden.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="flex flex-col gap-2">
<div className="p-2 w-fit rounded-lg bg-teal-50 text-teal-700">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="font-medium text-slate-900">Nervensystem</h3>
<p className="text-sm text-slate-500">Optimierung der Kommunikation zwischen Gehirn und Körper.</p>
</div>
<div className="flex flex-col gap-2">
<div className="p-2 w-fit rounded-lg bg-teal-50 text-teal-700">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="font-medium text-slate-900">Mobilität</h3>
<p className="text-sm text-slate-500">Wiederherstellung der schmerzfreien Beweglichkeit.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="behandlungen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Unser Leistungsspektrum</h2>
<p className="text-slate-500 font-light">
                    Individuell angepasste Therapien für Säuglinge, Schwangere, Sportler und Senioren. Sanft, sicher und effektiv.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
<i className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" data-lucide="bone"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Chiropraktische Justierung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Spezifische Impulse zur Korrektur von Fehlstellungen der Wirbelsäule, um den Druck auf das Nervensystem zu lösen.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
<i className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" data-lucide="baby"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Pädiatrische Chiropraktik</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Sanfte Methoden speziell für Neugeborene und Kinder zur Unterstützung der Entwicklung und Behandlung von Asymmetrien.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
<i className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-lucide="move"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Sport &amp; Rehabilitation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Leistungssteigerung und Verletzungsprävention durch Optimierung der Biomechanik und muskulären Balance.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-teal-900 text-teal-50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white">15+</div>
<div className="text-xs md:text-sm text-teal-200/80 uppercase tracking-wider">Jahre Erfahrung</div>
</div>
<div className="space-y-2">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white">5k+</div>
<div className="text-xs md:text-sm text-teal-200/80 uppercase tracking-wider">Patienten</div>
</div>
<div className="space-y-2">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white">100%</div>
<div className="text-xs md:text-sm text-teal-200/80 uppercase tracking-wider">Natürlich</div>
</div>
<div className="space-y-2">
<div className="text-3xl md:text-4xl font-medium tracking-tight text-white">4.9</div>
<div className="text-xs md:text-sm text-teal-200/80 uppercase tracking-wider">Sterne Bewertung</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="stimmen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Patientenstimmen</h2>
<p className="text-slate-500 text-sm">Echte Erfahrungen aus unserer Praxis.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl relative">
<i className="w-8 h-8 text-teal-900/10 absolute top-8 right-8" data-lucide="quote"></i>
<div className="flex items-center gap-1 text-teal-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-sm">
                        "Nach Jahren mit chronischen Rückenschmerzen bin ich endlich beschwerdefrei. Die Atmosphäre in der Praxis ist unglaublich beruhigend und professionell. Absolute Empfehlung!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">MK</div>
<div>
<div className="text-sm font-medium text-slate-900">Michael K.</div>
<div className="text-xs text-slate-500">Patient seit 2021</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl relative hidden md:block">
<i className="w-8 h-8 text-teal-900/10 absolute top-8 right-8" data-lucide="quote"></i>
<div className="flex items-center gap-1 text-teal-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed text-sm">
                        "Ich kam wegen Migräne und blieb wegen des gesteigerten Wohlbefindens. Die ganzheitliche Betrachtung hat mir die Augen geöffnet. Vielen Dank an das gesamte Team."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">SB</div>
<div>
<div className="text-sm font-medium text-slate-900">Sabine B.</div>
<div className="text-xs text-slate-500">Patientin seit 2023</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="kontakt">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-slate-200">
<i className="w-12 h-12 text-teal-400 mx-auto mb-6" data-lucide="calendar-check"></i>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Bereit für einen gesunden Rücken?</h2>
<p className="text-slate-300 font-light mb-8 max-w-lg mx-auto">
                    Vereinbaren Sie noch heute Ihren Termin zur Erstuntersuchung. Wir nehmen uns Zeit für Sie und Ihre Gesundheit.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3.5 bg-white text-slate-900 text-sm font-medium rounded-full hover:bg-slate-100 transition-colors">
                        Online Buchen
                    </button>
<button className="px-8 py-3.5 bg-transparent border border-slate-700 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i>
                        030 123 456 78
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-teal-900 text-white p-1 rounded">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">MITTE</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Ihre Spezialisten für moderne, amerikanische Chiropraktik.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Praxis</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-teal-700 transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-teal-700 transition-colors" href="#">Unser Team</a></li>
<li><a className="hover:text-teal-700 transition-colors" href="#">Karriere</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Rechtliches</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-teal-700 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-teal-700 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-teal-700 transition-colors" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Öffnungszeiten</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex justify-between"><span>Mo - Fr</span> <span>08:00 - 18:00</span></li>
<li className="flex justify-between"><span>Sa</span> <span>09:00 - 13:00</span></li>
<li className="flex justify-between"><span>So</span> <span>Geschlossen</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Praxis Mitte. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
