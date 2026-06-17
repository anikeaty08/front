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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-zinc-900 uppercase flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-zinc-900 rounded-sm"></div>
                Stororoll
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-zinc-900 transition-colors" href="#ablauf">Ablauf</a>
<a className="hover:text-zinc-900 transition-colors" href="#ueber-uns">Über uns</a>
<a className="hover:text-zinc-900 transition-colors" href="#referenzen">Referenzen</a>
</nav>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2.5 rounded-md hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm shadow-zinc-200" href="#kontakt">
<span>Offerte einholen</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 border-b border-zinc-200 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Reaktion innerhalb 24 Stunden
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-zinc-900 mb-6 leading-[1.1]">
                        Fachbetrieb für Rollladen &amp; Storen.
                        <span className="text-zinc-400 block mt-1">Reparatur, Service und Ersatz.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-lg font-light">
                        Seit über 30 Jahren Ihr technischer Partner in der Region Zürich. Wir reparieren Defekte, warten Anlagen und realisieren Modernisierungen. Pünktlich, sauber und transparent.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center gap-2 bg-zinc-900 text-white px-6 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-200" href="#kontakt">
<i className="w-4 h-4" data-lucide="wrench"></i>
                            Reparatur beauftragen
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-6 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-50 transition-all shadow-sm" href="tel:+41441234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                            044 123 45 67
                        </a>
</div>
<div className="flex gap-8 border-t border-zinc-100 pt-8">
<div>
<div className="text-sm font-semibold text-zinc-900">30+ Jahre</div>
<div className="text-xs text-zinc-500 mt-0.5">Erfahrung</div>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">24h</div>
<div className="text-xs text-zinc-500 mt-0.5">Reaktionszeit</div>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Zürich</div>
<div className="text-xs text-zinc-500 mt-0.5">Regional</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-zinc-200 shadow-xl bg-zinc-100 group">

<img alt="Hochwertige Lamellenstoren an Holzfassade im Sonnenlicht" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1615880480595-d5f84366c855?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs font-medium text-zinc-800 shadow-sm border border-white/50">
                        Exakte Lichtregulierung durch moderne Lamellensysteme
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-10">Unsere Kunden</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Immobilienverwaltungen</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Effiziente Abwicklung von Reparaturaufträgen mit direkter Mieterkommunikation und Kostendach-Vereinbarungen.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<i className="w-5 h-5" data-lucide="key"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Eigentümer (MFH)</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Werterhalt Ihrer Liegenschaft durch regelmässige Wartung und schnelle Instandsetzung bei Mieterwechsel.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Privateigentümer</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                        Persönliche Beratung für Ihr Eigenheim. Von der klemmenden Store bis zur vollständigen Modernisierung.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-zinc-200">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="opacity-75">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-zinc-500">Der Marktstandard</h2>
<p className="text-zinc-400 mb-8 font-light text-sm">Was Kunden in der Branche leider oft erleben.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-500">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
<span>Lange Wartezeiten auf Termine</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
<span>Keine Rückmeldung auf Anfragen</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-500">
<i className="w-5 h-5 text-red-400 shrink-0" data-lucide="x-circle"></i>
<span>Verschobene Termine &amp; unklare Kommunikation</span>
</li>
</ul>
</div>
<div className="bg-zinc-50/50 p-8 rounded-xl border border-zinc-200/60 shadow-sm">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-zinc-900">Der Stororoll Standard</h2>
<p className="text-zinc-500 mb-8 font-light text-sm">Unser Anspruch an einen Schweizer Fachbetrieb.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-zinc-900 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Rückmeldung innerhalb von 24 Stunden</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-900 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Verbindliche Terminvereinbarung</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-900 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2"></i>
<span>Direkter Ansprechpartner &amp; saubere Ausführung</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200" id="leistungen">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-2">Unsere Leistungen</h2>
<p className="text-zinc-500 font-light max-w-xl">Alles aus einer Hand. Von der kleinen Reparatur bis zum kompletten Ersatz.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 transition-colors" href="#kontakt">
                    Jetzt anfragen <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">

<div className="bg-white p-8 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow h-full group">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-6 border border-zinc-100 group-hover:border-zinc-200 transition-colors">
<i className="w-6 h-6 stroke-1" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-4">Reparatur &amp; Service</h3>
<p className="text-sm text-zinc-500 mb-8 font-light leading-relaxed">
                        Schnelle Hilfe bei Defekten. Wir reparieren bestehende Anlagen, wo immer möglich, um Kosten zu sparen.
                    </p>
<ul className="space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Instandsetzung defekter Anlagen</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Lösung bei blockierten Systemen</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Austausch von Motoren</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Ersatz von Gurten, Kurbeln oder Tüchern</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Wartung &amp; Unterhalt</li>
</ul>
</div>

<div className="bg-white p-8 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow h-full group">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-900 mb-6 border border-zinc-100 group-hover:border-zinc-200 transition-colors">
<i className="w-6 h-6 stroke-1" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-4">Ersatz &amp; Modernisierung</h3>
<p className="text-sm text-zinc-500 mb-8 font-light leading-relaxed">
                        Wenn eine Reparatur nicht mehr wirtschaftlich ist oder Komfort gewünscht wird.
                    </p>
<ul className="space-y-3 text-sm text-zinc-600">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Komplettersatz alter Anlagen</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Elektrifizierung &amp; Motorisierung</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Neue Beschattungssysteme</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Terrassen- &amp; Balkonmarkisen</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Speziallösungen (Denkmalschutz)</li>
</ul>
</div>
</div>

<div className="border-t border-zinc-200 pt-12">
<h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-6">Wir arbeiten mit folgenden Systemen</h4>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm font-medium text-zinc-700">
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="blinds"></i> Rollladen
                    </div>
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="sun"></i> Sonnenstoren
                    </div>
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="align-justify"></i> Lamellen
                    </div>
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="layout-grid"></i> Fensterläden
                    </div>
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="sofa"></i> Innenstoren
                    </div>
<div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-zinc-200 rounded-md shadow-sm">
<i className="w-4 h-4 text-zinc-400" data-lucide="bug"></i> Insektenschutz
                    </div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-zinc-200 bg-white">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs text-zinc-400 font-medium mb-8 uppercase tracking-wider">Qualität durch Markenpartner</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale select-none">
<span className="text-xl font-bold tracking-tight text-zinc-600">SOMFY</span>
<span className="text-xl font-bold tracking-tight text-zinc-600">GRIESSER</span>
<span className="text-xl font-bold tracking-tight text-zinc-600">STOBAG</span>
<span className="text-xl font-bold tracking-tight text-zinc-600">WAREMA</span>
<span className="text-xl font-bold tracking-tight text-zinc-600">ELERO</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200" id="referenzen">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-12">Auszug Referenzen</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
<div className="mb-4 pb-4 border-b border-zinc-100">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Universität Irchel</span>
</div>
<div className="space-y-4 mb-4 flex-grow">
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Problem</span>
<p className="text-xs text-zinc-700 mt-1">Diverse Defekte an Hörsaal-Verdunkelungen.</p>
</div>
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Lösung</span>
<p className="text-xs text-zinc-700 mt-1">Systematische Prüfung und Motor-Ersatz.</p>
</div>
</div>
<div className="pt-4 mt-auto">
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="check"></i> Volle Funktion
                        </span>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
<div className="mb-4 pb-4 border-b border-zinc-100">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Merbag</span>
</div>
<div className="space-y-4 mb-4 flex-grow">
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Problem</span>
<p className="text-xs text-zinc-700 mt-1">Ausfall der Tor-Steuerungen Werkstatt.</p>
</div>
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Lösung</span>
<p className="text-xs text-zinc-700 mt-1">Sofort-Einsatz und Steuerungstausch.</p>
</div>
</div>
<div className="pt-4 mt-auto">
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="check"></i> Ausfall minimiert
                        </span>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
<div className="mb-4 pb-4 border-b border-zinc-100">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Apleona</span>
</div>
<div className="space-y-4 mb-4 flex-grow">
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Problem</span>
<p className="text-xs text-zinc-700 mt-1">Laufender Unterhalt Wohnliegenschaften.</p>
</div>
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Lösung</span>
<p className="text-xs text-zinc-700 mt-1">Servicevertrag mit Kostendach.</p>
</div>
</div>
<div className="pt-4 mt-auto">
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="check"></i> Aufwand gesenkt
                        </span>
</div>
</div>

<div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm flex flex-col h-full hover:border-zinc-300 transition-colors">
<div className="mb-4 pb-4 border-b border-zinc-100">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Baloise</span>
</div>
<div className="space-y-4 mb-4 flex-grow">
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Problem</span>
<p className="text-xs text-zinc-700 mt-1">Modernisierung Bürogebäude.</p>
</div>
<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Lösung</span>
<p className="text-xs text-zinc-700 mt-1">Umrüstung auf smarte Lamellensteuerung.</p>
</div>
</div>
<div className="pt-4 mt-auto">
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="check"></i> Energieeffizienz
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-zinc-200" id="ablauf">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-16">Der Service-Ablauf</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-zinc-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="bg-white md:bg-transparent pr-4">
<div className="w-12 h-12 bg-white border border-zinc-200 text-zinc-900 rounded-full flex items-center justify-center text-sm font-semibold mb-4 shadow-sm relative z-10">1</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Anfrage</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Sie melden den Schaden online oder telefonisch. Sie erhalten sofort eine Eingangsbestätigung.</p>
</div>

<div className="bg-white md:bg-transparent pr-4">
<div className="w-12 h-12 bg-white border border-zinc-200 text-zinc-900 rounded-full flex items-center justify-center text-sm font-semibold mb-4 shadow-sm relative z-10">2</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Kontakt (24h)</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Wir melden uns innert einem Arbeitstag zur Terminabsprache oder Klärung.</p>
</div>

<div className="bg-white md:bg-transparent pr-4">
<div className="w-12 h-12 bg-white border border-zinc-200 text-zinc-900 rounded-full flex items-center justify-center text-sm font-semibold mb-4 shadow-sm relative z-10">3</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Vor Ort</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Besichtigung durch Fachpersonal. Kleinreparaturen können oft sofort erledigt werden.</p>
</div>

<div className="bg-white md:bg-transparent pr-4">
<div className="w-12 h-12 bg-white border border-zinc-200 text-zinc-900 rounded-full flex items-center justify-center text-sm font-semibold mb-4 shadow-sm relative z-10">4</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Umsetzung</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Fachgerechte Reparatur oder Installation. Bei Verwaltungen auf Wunsch mit Kostendach.</p>
</div>

<div className="bg-white md:bg-transparent pr-4">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-4 shadow-sm relative z-10">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<h4 className="text-sm font-semibold text-zinc-900 mb-2">Abschluss</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Funktionskontrolle, saubere Übergabe und transparente Abrechnung.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-b border-zinc-200" id="ueber-uns">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Kompetenz aus Erfahrung</h2>
<div className="text-sm text-zinc-500 font-light space-y-4 leading-relaxed">
<p>
                            Gutes Handwerk basiert auf Wissen und Beständigkeit. Nach meiner Ausbildung und über 10 Jahren Tätigkeit bei der Firma <strong className="text-zinc-700 font-medium">Morandi</strong>, sowie weiteren 7 Jahren als Service-Spezialist bei <strong className="text-zinc-700 font-medium">Grieser</strong>, kenne ich die technischen Anforderungen jedes Systems am Schweizer Markt im Detail.
                        </p>
<p>
                            Der Schritt in die Selbstständigkeit mit Stororoll entstand aus dem Qualitätsanspruch heraus, Kunden wieder direkter, persönlicher und flexibler zu betreuen.
                        </p>
<p>
                            Wir sind regional verankert mit einem zweiten Standort in Oberengstringen. Das garantiert kurze Anfahrtswege und eine schnelle Reaktionszeit in der Region Zürich und Limmattal.
                        </p>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-5 mb-8">
<div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 border border-zinc-200">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<div>
<div className="text-base font-semibold text-zinc-900">Ihr Ansprechpartner</div>
<div className="text-xs text-zinc-500">Geschäftsleitung Stororoll</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="map-pin"></i>
                            Standorte: Zürich &amp; Oberengstringen
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="award"></i>
                            30+ Jahre Praxiserfahrung
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="users"></i>
                            Persönliche Betreuung
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-zinc-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8">Häufige Fragen</h2>
<div className="space-y-3">
<details className="group bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-900 hover:bg-zinc-100/50 transition-colors">
<span>Wie schnell erhalte ich eine Rückmeldung?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 text-sm font-light p-4 pt-0 leading-relaxed border-t border-transparent group-open:border-zinc-100">
                        Wir garantieren eine Kontaktaufnahme innerhalb von 24 Stunden (werktags) nach Eingang Ihrer Anfrage.
                    </div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-900 hover:bg-zinc-100/50 transition-colors">
<span>Wird direkt vor Ort repariert?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 text-sm font-light p-4 pt-0 leading-relaxed border-t border-transparent group-open:border-zinc-100">
                        Ja, unsere Servicefahrzeuge sind mit den gängigsten Ersatzteilen ausgestattet. Kleinere Reparaturen erledigen wir oft sofort beim ersten Termin. Für grössere Arbeiten erstellen wir eine Offerte.
                    </div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-900 hover:bg-zinc-100/50 transition-colors">
<span>Arbeiten Sie auch für Verwaltungen?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 text-sm font-light p-4 pt-0 leading-relaxed border-t border-transparent group-open:border-zinc-100">
                        Ja, ein Grossteil unserer Kunden sind Liegenschaftsverwaltungen. Wir bieten vereinfachte Prozesse, Kostendächer und übernehmen die komplette Terminierung mit den Mietern.
                    </div>
</details>
<details className="group bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-zinc-900 hover:bg-zinc-100/50 transition-colors">
<span>Was kostet eine Reparatur?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-zinc-400">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-zinc-500 text-sm font-light p-4 pt-0 leading-relaxed border-t border-transparent group-open:border-zinc-100">
                        Wir verrechnen transparent nach Aufwand und Material. Fahrpauschalen sind regional gestaffelt. Gerne nennen wir Ihnen am Telefon unsere aktuellen Regieansätze.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="kontakt">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3">Serviceanfrage</h2>
<p className="text-zinc-500 font-light">
                    Bitte füllen Sie die Details zu Ihrer Anlage aus, damit wir uns vorbereiten können.
                </p>
</div>
<form className="space-y-8 bg-white p-8 md:p-10 rounded-xl border border-zinc-200 shadow-sm" onsubmit="event.preventDefault();">

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-900 uppercase tracking-wide block mb-3">1. Um welche Anlage geht es?</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer relative group">
<input className="radio-card sr-only peer" name="type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 transition-all h-full flex flex-col items-center justify-center gap-2 text-zinc-500">
<i className="w-5 h-5" data-lucide="blinds"></i>
<span className="text-xs font-medium">Rollladen</span>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="radio-card sr-only peer" name="type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 transition-all h-full flex flex-col items-center justify-center gap-2 text-zinc-500">
<i className="w-5 h-5" data-lucide="sun"></i>
<span className="text-xs font-medium">Sonnenstore</span>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="radio-card sr-only peer" name="type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 transition-all h-full flex flex-col items-center justify-center gap-2 text-zinc-500">
<i className="w-5 h-5" data-lucide="align-justify"></i>
<span className="text-xs font-medium">Lamellen</span>
</div>
</label>
<label className="cursor-pointer relative group">
<input className="radio-card sr-only peer" name="type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 transition-all h-full flex flex-col items-center justify-center gap-2 text-zinc-500">
<i className="w-5 h-5" data-lucide="help-circle"></i>
<span className="text-xs font-medium">Anderes / ?</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-900 uppercase tracking-wide block mb-3">2. Was ist das Problem?</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input className="radio-card sr-only peer" name="problem" type="radio"/>
<div className="border border-zinc-200 rounded-lg px-4 py-3 hover:bg-zinc-50 transition-all flex items-center gap-3 text-zinc-500 text-sm">
<i className="w-4 h-4" data-lucide="ban"></i>
<span>Bewegt sich nicht mehr</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="radio-card sr-only peer" name="problem" type="radio"/>
<div className="border border-zinc-200 rounded-lg px-4 py-3 hover:bg-zinc-50 transition-all flex items-center gap-3 text-zinc-500 text-sm">
<i className="w-4 h-4" data-lucide="zap"></i>
<span>Motor läuft, nichts passiert</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="radio-card sr-only peer" name="problem" type="radio"/>
<div className="border border-zinc-200 rounded-lg px-4 py-3 hover:bg-zinc-50 transition-all flex items-center gap-3 text-zinc-500 text-sm">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span>Beschädigt / Gerissen</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="radio-card sr-only peer" name="problem" type="radio"/>
<div className="border border-zinc-200 rounded-lg px-4 py-3 hover:bg-zinc-50 transition-all flex items-center gap-3 text-zinc-500 text-sm">
<i className="w-4 h-4" data-lucide="clipboard-check"></i>
<span>Allgemeine Wartung</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-900 uppercase tracking-wide block mb-3">3. Bedienung</label>
<div className="flex gap-6">
<label className="flex items-center gap-2.5 cursor-pointer text-sm text-zinc-600">
<input className="accent-zinc-900 w-4 h-4" name="operation" type="radio"/> Manuell (Kurbel/Gurt)
                        </label>
<label className="flex items-center gap-2.5 cursor-pointer text-sm text-zinc-600">
<input className="accent-zinc-900 w-4 h-4" name="operation" type="radio"/> Elektrisch
                        </label>
<label className="flex items-center gap-2.5 cursor-pointer text-sm text-zinc-600">
<input className="accent-zinc-900 w-4 h-4" name="operation" type="radio"/> Weiss nicht
                        </label>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<label className="text-xs font-semibold text-zinc-900 uppercase tracking-wide block mb-3">4. Ihre Kontaktdaten</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400" placeholder="Vorname Name" required="" type="text"/>
</div>
<div className="space-y-1">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400" placeholder="Telefonnummer" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400" placeholder="E-Mail Adresse" required="" type="email"/>
</div>
<div className="space-y-1">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400" placeholder="Strasse, Nr, Ort (Objektadresse)" type="text"/>
</div>
<div className="space-y-1">
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 resize-none" placeholder="Zusätzliche Bemerkungen..." rows="3"></textarea>
</div>
</div>
<button className="w-full bg-zinc-900 text-white font-medium text-sm py-4 rounded-md hover:bg-zinc-800 transition-all flex justify-center items-center gap-2 shadow-sm hover:shadow-md" type="submit">
                    Kostenpflichtig anfragen
                    <i className="w-4 h-4" data-lucide="send"></i>
</button>
<p className="text-[10px] text-zinc-400 text-center">Ihre Daten werden sicher übertragen und nur zur Auftragsbearbeitung genutzt.</p>
</form>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-16 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-base tracking-tighter font-semibold text-zinc-900 uppercase block mb-4 flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-900 rounded-sm"></div> Stororoll
                    </span>
<p className="text-xs text-zinc-500 leading-relaxed mb-4">
                        Ihr Fachbetrieb für Rollladen und Storen in der Region Zürich. Kompetent, zuverlässig, schweizerisch.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="tel:+41441234567">044 123 45 67</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="mailto:info@stororoll.ch">info@stororoll.ch</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Standorte</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li>Zürich</li>
<li>Oberengstringen</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Stororoll. Alle Rechte vorbehalten.</p>
<p>Designed for Performance.</p>
</div>
</div>
</footer>


    </>
  );
}
