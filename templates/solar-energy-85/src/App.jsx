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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="2" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900">LUMINA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Lösungen</a>
<a className="hover:text-slate-900 transition-colors" href="#calculator">Rechner</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Ablauf</a>
<a className="hover:text-slate-900 transition-colors" href="#business">Gewerbe</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Login</a>
<a className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-emerald-900/10 active:scale-95" href="#contact">
                    Angebot anfordern
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Neu: Batteriespeicher 2.0 verfügbar
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Energie, die Ihnen <br/>
<span className="text-emerald-600">gehört.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                    Machen Sie sich unabhängig von steigenden Strompreisen. Wir planen und installieren Ihre schlüsselfertige Solaranlage innerhalb von 30 Tagen.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">
                        Kostenlos berechnen
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
                        Wie es funktioniert
                    </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Bereits über 2.500 zufriedene Hausbesitzer.</p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-sky-100 rounded-2xl blur-2xl opacity-50"></div>
<div className="relative bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 overflow-hidden">

<div className="border-b border-slate-100 p-4 flex items-center justify-between bg-slate-50/50">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
<span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs font-mono text-slate-400">live-monitor.js</div>
</div>

<div className="p-6">
<div className="flex items-end justify-between mb-8">
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Aktuelle Produktion</p>
<h3 className="text-3xl font-medium tracking-tight text-slate-900">4.2 <span className="text-lg text-slate-400 font-normal">kW</span></h3>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                                    +12% vs. gestern
                                </div>
</div>
</div>

<div className="h-32 w-full flex items-end gap-1 mb-6">
<div className="w-full bg-emerald-50 rounded-sm h-[20%]"></div>
<div className="w-full bg-emerald-100 rounded-sm h-[35%]"></div>
<div className="w-full bg-emerald-100 rounded-sm h-[50%]"></div>
<div className="w-full bg-emerald-200 rounded-sm h-[75%]"></div>
<div className="w-full bg-emerald-500 rounded-sm h-[90%] shadow-lg shadow-emerald-200"></div>
<div className="w-full bg-emerald-200 rounded-sm h-[65%]"></div>
<div className="w-full bg-emerald-100 rounded-sm h-[40%]"></div>
<div className="w-full bg-emerald-50 rounded-sm h-[25%]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-2 text-slate-500 mb-1">
<span className="iconify" data-icon="lucide:battery-charging" data-width="14"></span>
<span className="text-xs font-medium">Speicher</span>
</div>
<p className="text-lg font-medium text-slate-900">92%</p>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<div className="flex items-center gap-2 text-slate-500 mb-1">
<span className="iconify" data-icon="lucide:piggy-bank" data-width="14"></span>
<span className="text-xs font-medium">Ersparnis/Mo</span>
</div>
<p className="text-lg font-medium text-slate-900">145 €</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Technologie, die sich auszahlt</h2>
<p className="text-slate-500">
                    Unsere Systeme kombinieren Hochleistungsmodule mit intelligenter Software, um Ihren Ertrag zu maximieren.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6">
<span className="iconify text-slate-900" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Maximaler Wirkungsgrad</h3>
<p className="text-sm text-slate-500 max-w-sm">Unsere Full-Black-Module sehen nicht nur ästhetisch aus, sondern bieten auch bei diffusem Licht höchste Leistung. 25 Jahre Leistungsgarantie inklusive.</p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-emerald-50 to-transparent rounded-tl-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
</div>

<div className="col-span-1 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-sm text-white relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center mb-6">
<span className="iconify text-emerald-400" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Home Ready</h3>
<p className="text-sm text-slate-400">Steuern Sie Ihre Energieflüsse per App. Laden Sie Ihr E-Auto automatisch dann, wenn die Sonne scheint.</p>
</div>
</div>

<div className="col-span-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6">
<span className="iconify text-slate-900" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Alles aus einer Hand</h3>
<p className="text-sm text-slate-500">Keine Subunternehmer. Von der Planung über die Gerüststellung bis zur Anmeldung beim Netzbetreiber.</p>
</div>

<div className="col-span-1 md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-2">0% Finanzierung möglich</h3>
<p className="text-sm text-slate-500">Investieren Sie ohne Eigenkapital. Die Anlage zahlt sich durch die Ersparnis selbst ab.</p>
</div>
<div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:percent" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="calculator">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-10 md:p-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">Ihr Sparpotenzial</h2>

<div className="mb-10">
<div className="flex justify-between items-center mb-4">
<label className="text-sm font-medium text-slate-700">Monatliche Stromkosten</label>
<span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">250 €</span>
</div>
<input className="w-full" max="800" min="50" type="range" value="250"/>
<div className="flex justify-between text-xs text-slate-400 mt-2">
<span>50 €</span>
<span>800 €</span>
</div>
</div>

<div className="space-y-3">
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-slate-300 rounded checked:bg-emerald-600 checked:border-emerald-600 transition-all" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[2px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Batteriespeicher hinzufügen</span>
</label>
<label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors group">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 appearance-none border border-slate-300 rounded checked:bg-emerald-600 checked:border-emerald-600 transition-all" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[2px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">E-Auto Ladestation (Wallbox)</span>
</label>
</div>
</div>

<div className="bg-slate-50 p-10 md:p-12 border-l border-slate-100 flex flex-col justify-center">
<p className="text-sm text-slate-500 mb-2">Geschätzte Ersparnis über 20 Jahre</p>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                            48.500 €
                        </h3>
<p className="text-xs text-slate-400 mb-8 leading-relaxed">
                            *Dies ist eine unverbindliche Schätzung basierend auf einer Strompreissteigerung von 3% p.a.
                        </p>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                            Detailliertes Angebot erhalten
                            <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-12 text-center">In 4 Schritten zur Unabhängigkeit</h2>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-200 -z-0"></div>

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm mx-auto md:mx-0">1</div>
<h4 className="text-base font-medium text-slate-900 mb-2 text-center md:text-left">Anfrage &amp; Check</h4>
<p className="text-sm text-slate-500 text-center md:text-left">Online Daten eingeben. Wir prüfen Ihr Dach per Satellit.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm mx-auto md:mx-0">2</div>
<h4 className="text-base font-medium text-slate-900 mb-2 text-center md:text-left">Planung</h4>
<p className="text-sm text-slate-500 text-center md:text-left">Individuelles 3D-Modell und Wirtschaftlichkeitsberechnung.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center font-semibold mb-4 shadow-sm mx-auto md:mx-0">3</div>
<h4 className="text-base font-medium text-slate-900 mb-2 text-center md:text-left">Installation</h4>
<p className="text-sm text-slate-500 text-center md:text-left">Montage durch zertifizierte Meisterteams in 1-2 Tagen.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 bg-emerald-600 border border-emerald-600 text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-lg shadow-emerald-200 mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:check" data-width="20"></span>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2 text-center md:text-left">Inbetriebnahme</h4>
<p className="text-sm text-slate-500 text-center md:text-left">Anmeldung, Zählertausch und App-Einrichtung.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Bereit für die Energiewende?</h2>
<p className="text-lg text-slate-500 mb-10">Sichern Sie sich jetzt Ihren Installationstermin für den kommenden Monat.</p>
<form className="max-w-sm mx-auto space-y-4">
<div className="relative">
<span className="absolute left-4 top-3.5 text-slate-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</span>
<input className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400 text-slate-900" placeholder="Ihre Postleitzahl" type="text"/>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]" type="submit">
                    Verfügbarkeit prüfen
                </button>
</form>
<p className="text-xs text-slate-400 mt-6">Kostenlos &amp; unverbindlich. Ihre Daten sind sicher.</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900">LUMINA</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Wir bauen die Infrastruktur für eine nachhaltige Zukunft. Premium Photovoltaik für anspruchsvolle Hausbesitzer.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Produkt</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Solarmodule</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Stromspeicher</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Wallbox</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Energiemanager</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Unternehmen</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Karriere</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Lumina Solar Energy GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
