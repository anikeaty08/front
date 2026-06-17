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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col" href="#">
<span className="tracking-tighter font-medium text-lg uppercase text-stone-900 leading-none">Michaela</span>
<span className="tracking-[0.2em] font-light text-xs text-stone-500 uppercase leading-none mt-1">Schneider</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#behandlungen">Behandlungen</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#philosophie">Philosophie</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#produkte">Produkte</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-full hover:bg-stone-50 transition-colors shadow-sm" href="#kontakt">
                    Kontakt
                </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors shadow-sm" href="#termin">
                    Termin buchen
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-stone-200/40 blur-[100px] rounded-full pointer-events-none" style={{zIndex: '-1'}}></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200/50 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 tracking-wide uppercase">Neue Behandlungen verfügbar</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.1] mb-6">
                    Natürliche <br className="hidden lg:block"/>
                    Ausstrahlung, <br/>
                    tiefe Pflege.
                </h1>
<p className="text-lg text-stone-500 font-light leading-relaxed mb-10 max-w-lg">
                    Entdecken Sie exklusive Kosmetikbehandlungen und maßgeschneiderte Hautpflege in einer entspannten Atmosphäre. Für Ihre ganz persönliche Auszeit.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all hover:gap-3" href="#behandlungen">
                        Behandlungen entdecken
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-200 relative shadow-2xl shadow-stone-900/5 border border-stone-200/50">
<img alt="Kosmetik Behandlung" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-100 max-w-xs backdrop-blur-xl bg-white/90">
<div className="flex items-center gap-4 mb-2">
<div className="flex text-stone-800">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-900">5.0</span>
</div>
<p className="text-sm text-stone-500 font-light">"Die beste Gesichtsbehandlung, die ich je hatte. Absolut empfehlenswert."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200/50" id="behandlungen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-stone-900 mb-4">Unsere Expertise</h2>
<p className="text-base text-stone-500 font-light leading-relaxed">
                        Von klassischer Gesichtsreinigung bis hin zu innovativen Anti-Aging Methoden. Wir stimmen jede Behandlung individuell auf die Bedürfnisse Ihrer Haut ab.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors group" href="#">
                    Alle Leistungen ansehen
                    <iconify-icon className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-[#FAFAFA] border border-stone-100 hover:bg-stone-50 hover:border-stone-200 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-stone-700" icon="solar:sparkles-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Klassische Kosmetik</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Tiefenreinigung, Peeling und Masken für ein klares, frisches Hautbild. Ideal für die regelmäßige Pflege.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-stone-900">ab 65 €</span>
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-stone-900 group-hover:border-stone-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-[#FAFAFA] border border-stone-100 hover:bg-stone-50 hover:border-stone-200 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-stone-700" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Anti-Aging &amp; Lifting</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Hochwirksame Spezialbehandlungen zur Straffung der Hautkonturen und Minderung von feinen Linien.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-stone-900">ab 95 €</span>
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-stone-900 group-hover:border-stone-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-[#FAFAFA] border border-stone-100 hover:bg-stone-50 hover:border-stone-200 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-stone-700" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Wellness &amp; Massage</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Entfliehen Sie dem Alltag. Wohltuende Massagen für Gesicht, Hals und Dekolleté zur absoluten Entspannung.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-stone-900">ab 55 €</span>
<div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-stone-900 group-hover:border-stone-300 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="philosophie">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tighter text-stone-900 mb-6">Ihre Haut in <br/>besten Händen.</h2>
<p className="text-base text-stone-500 font-light leading-relaxed mb-6">
                    Seit über 15 Jahren widme ich mich der professionellen Kosmetik. Mein Anspruch ist es, Ihre natürliche Schönheit zu unterstreichen und Ihnen einen Raum der Ruhe zu bieten.
                </p>
<p className="text-base text-stone-500 font-light leading-relaxed mb-8">
                    Ich verwende ausschließlich hochwertige, dermatologisch geprüfte Produkte, die nachhaltig wirken und Ihre Haut optimal versorgen. Jede Behandlung beginnt mit einer ausführlichen Analyse, um die perfekten Pflegeprodukte für Sie zu bestimmen.
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">

<div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 font-medium">MS</div>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Michaela Schneider</div>
<div className="text-xs text-stone-500">Inhaberin &amp; Kosmetikerin</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 aspect-square rounded-[2rem] overflow-hidden bg-stone-100 relative">
<img alt="Spa Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="py-16 border-t border-stone-200/50 bg-white" id="produkte">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-wide text-stone-400 uppercase mb-8">Wir arbeiten mit Premium-Partnern</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-medium tracking-widest uppercase">Babor</div>
<div className="text-xl font-medium tracking-widest uppercase">Dr. Spiller</div>
<div className="text-xl font-medium tracking-widest uppercase">Maria Galland</div>
<div className="text-xl font-medium tracking-widest uppercase">Reviderm</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tighter mb-6">Bereit für Ihren Verwöhnmoment?</h2>
<p className="text-lg text-stone-400 font-light mb-10 max-w-xl mx-auto">
                Buchen Sie jetzt Ihren Termin bequem online oder kontaktieren Sie uns für eine persönliche Beratung.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-colors" href="#termin">
                    Jetzt Termin vereinbaren
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-transparent border border-stone-700 rounded-full hover:bg-stone-800 transition-colors" href="tel:+49123456789">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    0123 / 456 789
                </a>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] pt-20 pb-10 border-t border-stone-200" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex flex-col mb-6" href="#">
<span className="tracking-tighter font-medium text-xl uppercase text-stone-900 leading-none">Michaela</span>
<span className="tracking-[0.2em] font-light text-xs text-stone-500 uppercase leading-none mt-1">Schneider</span>
</a>
<p className="text-sm text-stone-500 font-light max-w-xs leading-relaxed">
                        Premium Kosmetikstudio für Gesichtsbehandlungen, Anti-Aging und Wellness in ruhiger Wohlfühlatmosphäre.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Kontakt &amp; Ort</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 text-stone-400" icon="solar:map-point-linear"></iconify-icon>
<span>Musterstraße 123<br/>12345 Musterstadt</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-base text-stone-400" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-stone-900 transition-colors" href="tel:+49123456789">0123 / 456 789</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-base text-stone-400" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-stone-900 transition-colors" href="mailto:info@kosmetik-schneider.de">info@kosmetik-schneider.de</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Öffnungszeiten</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li className="flex justify-between">
<span>Mo - Fr</span>
<span>09:00 - 18:00</span>
</li>
<li className="flex justify-between">
<span>Samstag</span>
<span>Nach Vereinbarung</span>
</li>
<li className="flex justify-between">
<span>Sonntag</span>
<span>Geschlossen</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-stone-400 font-light">
                    © 2023 Kosmetik Michaela Schneider. Alle Rechte vorbehalten.
                </p>
<div className="flex items-center gap-6">
<a className="text-xs text-stone-400 hover:text-stone-900 transition-colors font-light" href="#">Impressum</a>
<a className="text-xs text-stone-400 hover:text-stone-900 transition-colors font-light" href="#">Datenschutz</a>
<a className="text-xs text-stone-400 hover:text-stone-900 transition-colors font-light" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
