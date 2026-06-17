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
      

<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">BKW</a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#systems">BKW Systems</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#loesungen">Lösungen</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#technologien">Technologien</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#drohnen">Drohnen</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#kontakt">Anmelden</a>
<a className="inline-flex items-center justify-center bg-neutral-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors" href="#kontakt">
                    Projekt besprechen
                </a>
</div>
</div>
</header>

<section className="relative w-full bg-neutral-950 overflow-hidden min-h-[85vh] flex items-center">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex flex-col items-start justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-neutral-300 text-xs font-medium mb-8 backdrop-blur-sm tracking-wide">
<iconify-icon className="text-blue-400" icon="solar:settings-linear"></iconify-icon>
                Technischer Lösungspartner
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white max-w-4xl leading-[1.1]">
                Wenn technische Herausforderungen entstehen, rufen Unternehmen bei BKW an.
            </h1>
<p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed">
                Wir konzipieren und implementieren industrielle Systeme, Werkzeuge und Beschaffungslösungen für komplexe Produktionsumgebungen.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#kontakt">
                    Projekt besprechen
                </a>
<a className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-white/10 transition-colors backdrop-blur-sm" href="#loesungen">
                    Unsere Lösungen entdecken
                </a>
</div>
</div>
</section>

<section className="border-b border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
<div className="flex items-center gap-12 text-sm font-medium text-neutral-500 w-full md:w-auto justify-center md:justify-start flex-wrap">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:history-linear"></iconify-icon>
                        Seit 1984
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:shield-check-linear"></iconify-icon>
                        Zertifizierter Partner
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:buildings-linear"></iconify-icon>
                        Industrie | Bau | BOS
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 overflow-hidden" id="systems">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">Das Konzept</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">BKW Systems</h3>
<p className="text-lg text-neutral-600 leading-relaxed">
                    BKW Systems strukturiert technische Lösungen entlang der gesamten Wertschöpfungskette. Ein systematischer Ansatz, der Chaos in geordnete, effiziente Prozesse verwandelt.
                </p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-neutral-200 z-0"></div>
<div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 lg:gap-6 pb-8 z-10 relative">

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:pen-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">01</span>
<h4 className="text-base font-medium text-neutral-900">Planen</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:screencast-2-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">02</span>
<h4 className="text-base font-medium text-neutral-900">Fertigen</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">03</span>
<h4 className="text-base font-medium text-neutral-900">Organisieren</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">04</span>
<h4 className="text-base font-medium text-neutral-900">Automatisieren</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">05</span>
<h4 className="text-base font-medium text-neutral-900">Schützen &amp; Transportieren</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">06</span>
<h4 className="text-base font-medium text-neutral-900">Verbinden &amp; Integrieren</h4>
</div>

<div className="snap-start shrink-0 w-64 lg:w-48 group">
<div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-blue-500 group-hover:shadow-sm transition-all text-neutral-600 group-hover:text-blue-600">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 mb-1 block">07</span>
<h4 className="text-base font-medium text-neutral-900">Dokumentieren &amp; Schulen</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200" id="loesungen">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">Kernkompetenzen</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">Lösungsbereiche</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Fertigungsprozesse optimieren</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        Steigerung der Effizienz durch Analyse und Anpassung von Zerspanungs- und Fertigungstechnologien.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Werkzeugmanagement &amp; Logistik</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        Intelligente Systeme zur Verwaltung, Ausgabe und Nachverfolgung von industriellen Werkzeugen.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:smart-home-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Automatisierung von Prozessen</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        Integration von Robotik und automatisierten Systemen zur Reduzierung manueller Eingriffe.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:case-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Einsatz- &amp; Schutzsysteme</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        Hochrobuste Gehäuse und Transportlösungen für sensible Technik in extremen Umgebungen.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:radar-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Drohneninspektion &amp; Sicherheit</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        UAS-Technologie für industrielle Überwachung, Inspektion und Behördenlösungen.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-sm transition-all bg-neutral-50/50 flex flex-col h-full cursor-pointer">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-xl" icon="solar:widget-add-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Beschaffung &amp; Sonderlösungen</h4>
<p className="text-sm text-neutral-600 leading-relaxed mb-8 flex-grow">
                        Spezifische Bauteilbeschaffung und Custom-Engineering für individuelle Herausforderungen.
                    </p>
<div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                        Mehr erfahren <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="technologien">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div>
<h2 className="text-xs font-medium uppercase tracking-widest text-blue-600 mb-3">Expertise</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">Technologiefelder</h3>
</div>
<p className="text-sm text-neutral-500 max-w-sm">Unser Sortiment und Know-how umfasst spezialisierte Bereiche für höchste industrielle Anforderungen.</p>
</div>
<div className="flex flex-wrap gap-3">
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:settings-minimalistic-linear"></iconify-icon>
                    Zerspanungssysteme
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:box-minimalistic-linear"></iconify-icon>
                    Tool Management Systeme
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:cpu-bolt-linear"></iconify-icon>
                    Automatisierungs- &amp; Prozesslösungen
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:shield-linear"></iconify-icon>
                    Transport- &amp; Schutzsysteme
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:airbuds-case-linear"></iconify-icon> 
                    Drohnensysteme
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:ruler-linear"></iconify-icon>
                    Mess- &amp; Prüftechnik
                </div>
<div className="px-5 py-3 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700 flex items-center gap-3 hover:border-neutral-300 transition-colors cursor-default">
<iconify-icon className="text-neutral-400" icon="solar:plug-circle-linear"></iconify-icon>
                    Elektronik &amp; Verbindungstechnik
                </div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs font-medium uppercase tracking-widest text-center text-neutral-400 mb-8">Ausgewählte Systempartner</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60">

<span className="text-2xl font-semibold tracking-tighter text-neutral-800 hover:text-neutral-900 transition-colors">Tungaloy</span>
<span className="text-2xl font-medium tracking-tight text-neutral-800 hover:text-neutral-900 transition-colors">Sumitomo</span>
<span className="text-2xl font-semibold tracking-normal text-neutral-800 hover:text-neutral-900 transition-colors uppercase">Knipex</span>
<span className="text-3xl font-bold tracking-tighter text-neutral-800 hover:text-neutral-900 transition-colors">PELI</span>
<span className="text-2xl font-medium tracking-widest text-neutral-800 hover:text-neutral-900 transition-colors">ODU</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-white relative overflow-hidden" id="drohnen">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                    Neuer Geschäftsbereich
                </div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">UAS &amp; Drohnensysteme</h3>
<p className="text-neutral-400 max-w-2xl text-lg">Hochspezialisierte Luftunterstützung für Industrie, Behörden und Organisationen mit Sicherheitsaufgaben.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="solar:scanner-linear"></iconify-icon>
<h4 className="text-lg font-medium mb-2 tracking-tight">Inspektion</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Thermografische und visuelle Inspektion von Anlagen, Dächern und schwer zugänglicher Infrastruktur.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="solar:shield-user-linear"></iconify-icon>
<h4 className="text-lg font-medium mb-2 tracking-tight">Security &amp; BOS</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Systeme für Lageerkundung, Überwachung und taktische Unterstützung im Behördeneinsatz.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="solar:book-linear"></iconify-icon>
<h4 className="text-lg font-medium mb-2 tracking-tight">Training &amp; Schulung</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Zertifizierte Schulungen und Einweisung in komplexe Flugsysteme für operatives Personal.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Branchen im Fokus</h2>
<p className="text-neutral-500 max-w-2xl mx-auto">Spezifische Lösungen für Sektoren, die keine Kompromisse bei Qualität und Zuverlässigkeit eingehen können.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/3] bg-neutral-100 rounded-xl mb-6 overflow-hidden relative border border-neutral-200 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/50 to-transparent"></div>
<iconify-icon className="text-5xl text-neutral-300" icon="solar:factory-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">Industrie &amp; Fertigung</h4>
<p className="text-sm text-neutral-600">Zerspanung, Automatisierung und Werkzeuglogistik für maximale Maschinenlaufzeiten.</p>
</div>

<div className="group">
<div className="aspect-[4/3] bg-neutral-100 rounded-xl mb-6 overflow-hidden relative border border-neutral-200 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/50 to-transparent"></div>
<iconify-icon className="text-5xl text-neutral-300" icon="solar:city-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">Bau &amp; Handwerk</h4>
<p className="text-sm text-neutral-600">Robuste Transportlösungen, Vermessungstechnik und verschleißfeste Werkzeuge für den rauen Alltag.</p>
</div>

<div className="group">
<div className="aspect-[4/3] bg-neutral-100 rounded-xl mb-6 overflow-hidden relative border border-neutral-200 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/50 to-transparent"></div>
<iconify-icon className="text-5xl text-neutral-300" icon="solar:siren-rounded-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">BOS &amp; Sicherheit</h4>
<p className="text-sm text-neutral-600">Taktische Einsatzkoffer, Drohnensysteme und Spezialbeschaffung für Behörden.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 px-6" id="kontakt">
<div className="max-w-5xl mx-auto bg-neutral-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden border border-neutral-800 shadow-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 relative z-10">
                Bereit für Struktur in Ihren Prozessen?
            </h2>
<p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Lassen Sie uns über Ihre technischen Herausforderungen sprechen. Wir finden die passende Systemlösung.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors shadow-sm">
                    Projekt besprechen
                </button>
<button className="bg-neutral-800 border border-neutral-700 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-neutral-700 transition-colors">
                    Technische Anfrage stellen
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-neutral-900 mb-4 block">BKW</span>
<p className="text-sm text-neutral-500 mb-6 max-w-xs">
                        Technischer Lösungspartner für Industrie, Bau und Behörden. Strukturiert entlang der gesamten Wertschöpfungskette.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Lösungen</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">BKW Systems</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Werkzeugmanagement</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Automatisierung</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Drohnen &amp; UAS</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Unternehmen</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Partner</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Industriestraße 1<br/>12345 Musterstadt</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>+49 (0) 123 456 789</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>info@bkw-systems.de</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">
                    © 2023 BKW Systems. Alle Rechte vorbehalten.
                </p>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Impressum</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-neutral-900 transition-colors" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
