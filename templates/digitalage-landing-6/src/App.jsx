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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white uppercase z-50" href="#">Dreilaut</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#services">Leistungen</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Arbeiten</a>
<a className="hover:text-white transition-colors duration-200" href="#about">Agentur</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Kontakt</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors duration-200" href="#contact">
                Projekt starten
            </a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-bg">

<div className="absolute inset-0 grid-overlay pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
<div className="space-y-8 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Kapazitäten ab November</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-gradient">
                    Digitale Exzellenz <br className="hidden md:block"/> für Visionäre.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl leading-relaxed">
                    Wir verbinden strategische Intelligenz, puristisches Design und technische Präzision zu digitalen Produkten, die Märkte führen.
                </p>
<div className="flex flex-col md:flex-row items-center gap-6 pt-4">
<a className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all" href="#contact">
                        Zusammenarbeit anfragen
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white text-sm font-medium transition-colors" href="#work">
                        Case Studies ansehen
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30 text-white">
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 border-t border-neutral-900 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
<div className="space-y-4">
<iconify-icon className="text-neutral-500 mb-2" icon="lucide:target" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Strategische Tiefe</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Wir beginnen nicht mit Design, sondern mit Verstehen. Wir analysieren Geschäftsmodelle und Nutzerbedürfnisse.
                    </p>
</div>
<div className="space-y-4">
<iconify-icon className="text-neutral-500 mb-2" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Ästhetische Präzision</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Design ist für uns kein Dekor, sondern Funktion. Reduziert auf das Wesentliche, typografisch exzellent.
                    </p>
</div>
<div className="space-y-4">
<iconify-icon className="text-neutral-500 mb-2" icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Technische Perfektion</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Skalierbarer Code, moderne Stacks und nahtlose Performance. Produkte, die heute funktionieren und morgen wachsen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950/50" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<span className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-12">Kompetenzen</span>
<div className="space-y-0 divide-y divide-neutral-900">

<div className="group py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-neutral-900/30 transition-colors duration-500">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:pl-4 transition-all duration-300">Digital Strategy</h3>
</div>
<div className="md:w-1/3">
<p className="text-neutral-400 text-sm leading-relaxed">
                            Markenpositionierung, UX-Research, Produktstrategie und digitale Transformationsberatung.
                        </p>
</div>
<div className="md:w-1/6 flex justify-end items-start pt-2">
<iconify-icon className="text-neutral-700 group-hover:text-white transition-colors" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-neutral-900/30 transition-colors duration-500">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:pl-4 transition-all duration-300">UX &amp; UI Design</h3>
</div>
<div className="md:w-1/3">
<p className="text-neutral-400 text-sm leading-relaxed">
                            Interface Design, Design Systeme, Prototyping und User Experience Design mit Fokus auf Konversion.
                        </p>
</div>
<div className="md:w-1/6 flex justify-end items-start pt-2">
<iconify-icon className="text-neutral-700 group-hover:text-white transition-colors" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-neutral-900/30 transition-colors duration-500">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-white tracking-tight group-hover:pl-4 transition-all duration-300">Development</h3>
</div>
<div className="md:w-1/3">
<p className="text-neutral-400 text-sm leading-relaxed">
                            Full-Stack Webentwicklung, Headless CMS Integrationen, E-Commerce Lösungen und Web Apps.
                        </p>
</div>
<div className="md:w-1/6 flex justify-end items-start pt-2">
<iconify-icon className="text-neutral-700 group-hover:text-white transition-colors" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="work">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
<div>
<span className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Ausgewählte Projekte</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Impact durch Design</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors" href="#">
                    Alle Projekte ansehen
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden relative mb-6 border border-white/5">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Fintech Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-white/80 transition-colors">FinTech Evolution</h3>
<p className="text-neutral-500 text-xs">Rebranding &amp; Platform UI</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="w-full aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden relative mb-6 border border-white/5">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Architecture Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-white/80 transition-colors">Architecture Press</h3>
<p className="text-neutral-500 text-xs">Headless CMS &amp; Web Design</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2023</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden relative mb-6 border border-white/5">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Logistics Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-white/80 transition-colors">Nova Logistics</h3>
<p className="text-neutral-500 text-xs">Digital Product Strategy</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2022</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="w-full aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden relative mb-6 border border-white/5">
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="E-Commerce Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1523726491078-80d1604b3bb3?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-white/80 transition-colors">Studio Blanc</h3>
<p className="text-neutral-500 text-xs">E-Commerce Experience</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2022</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-900/20 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Unser Ansatz</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Denken vor Handeln.</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
                        Kein Zufall, keine vorgefertigten Templates. Wir arbeiten iterativ, transparent und partnerschaftlich, um Ergebnisse zu liefern, die messbaren Mehrwert schaffen.
                    </p>
</div>
<div className="space-y-12">
<div className="flex gap-6">
<span className="text-neutral-700 font-mono text-sm pt-1">01</span>
<div>
<h4 className="text-lg font-medium text-white mb-2">Entdeckung &amp; Audit</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Status-Quo Analyse, Zieldefinition und Identifikation von Wachstumspotenzialen.</p>
</div>
</div>
<div className="flex gap-6">
<span className="text-neutral-700 font-mono text-sm pt-1">02</span>
<div>
<h4 className="text-lg font-medium text-white mb-2">Strategie &amp; Konzept</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Entwicklung der Informationsarchitektur, Wireframing und strategische Ausrichtung.</p>
</div>
</div>
<div className="flex gap-6">
<span className="text-neutral-700 font-mono text-sm pt-1">03</span>
<div>
<h4 className="text-lg font-medium text-white mb-2">Design &amp; Development</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Visuelle Ausarbeitung und agile Entwicklung mit modernsten Technologien.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">DREILAUT ist Partner für Wachstum.</h2>
<p className="text-neutral-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                Wir sind ein Team aus Strategen, Designern und Entwicklern. Uns eint der Anspruch an Qualität und die Leidenschaft für digitale Produkte, die funktionieren.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale">
<div className="text-xl font-bold font-sans tracking-tight">VANGUARD</div>
<div className="text-lg font-serif italic">Lumière</div>
<div className="text-xl font-bold tracking-widest uppercase">Apex</div>
<div className="text-xl font-semibold tracking-tighter">monolith.</div>
<div className="text-lg font-mono">CODE/LAB</div>
<div className="text-xl font-bold tracking-tight">STRCT</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#080808] border-t border-neutral-900" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<span className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Kontakt</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Projekt starten</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4 space-y-8">
<div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
<div className="flex items-center gap-4 mb-6">
<img alt="Ansprechpartner" className="w-16 h-16 rounded-full object-cover border border-neutral-700 grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div>
<h3 className="text-white font-medium text-lg tracking-tight">Sarah Weber</h3>
<p className="text-neutral-500 text-sm">Head of Strategy</p>
</div>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            "Lassen Sie uns darüber sprechen, wie wir Ihre Vision in ein funktionierendes digitales Produkt übersetzen können. Ich berate Sie gerne zum ersten Schritt."
                        </p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-sm text-white hover:text-neutral-300 transition-colors" href="mailto:sarah@dreilaut.agency">
<iconify-icon className="text-neutral-500" icon="lucide:mail"></iconify-icon>
                                sarah@dreilaut.agency
                            </a>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-500" icon="lucide:phone"></iconify-icon>
                                +49 (0) 30 123 456 78
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-8">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide" htmlFor="name">Name</label>
<input className="input-dark w-full rounded-md p-3 text-white placeholder-neutral-700 text-sm" id="name" placeholder="Ihr Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="input-dark w-full rounded-md p-3 text-white placeholder-neutral-700 text-sm" id="email" placeholder="name@firma.de" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide" htmlFor="company">Unternehmen</label>
<input className="input-dark w-full rounded-md p-3 text-white placeholder-neutral-700 text-sm" id="company" placeholder="Firma GmbH" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide mb-2 block">Interesse an</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-400 bg-neutral-900/50 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all select-none">Strategy</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-400 bg-neutral-900/50 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all select-none">Web Design</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-400 bg-neutral-900/50 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all select-none">Development</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 rounded-full border border-neutral-800 text-sm text-neutral-400 bg-neutral-900/50 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all select-none">Rebranding</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide" htmlFor="message">Nachricht</label>
<textarea className="input-dark w-full rounded-md p-3 text-white placeholder-neutral-700 text-sm resize-none" id="message" placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..." rows="4"></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<p className="text-xs text-neutral-600 max-w-xs">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer Datenschutzrichtlinie zu.</p>
<button className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all duration-200 hover:scale-105" type="button">
                                Anfrage senden
                                <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-t border-neutral-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-tighter text-white uppercase mb-6 inline-block" href="#">Dreilaut</a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Digitalagentur für Strategie, Design und Technologie. <br/>
                        Berlin &amp; Remote.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-4">Sitemap</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#services">Leistungen</a></li>
<li><a className="hover:text-white transition-colors" href="#work">Arbeiten</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-widest mb-4">Social</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900">
<p className="text-xs text-neutral-600">© 2023 DREILAUT Digitalagentur. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Impressum</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
