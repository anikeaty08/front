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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter uppercase text-slate-900">
                POOL EXPERTEN SCHWEIZ
            </div>

<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Kapazität verfügbar
            </div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-2xl mx-auto px-6 mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<i className="w-3 h-3" data-lucide="map-pin"></i> Deutschschweiz &amp; Liechtenstein
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Für Hauseigentümer, die eine dauerhafte Lösung für ihren Pool suchen.
            </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                Spezialisiert auf fugenlose Beschichtungen für Sanierung und Neubau. 
                Präzision aus 40 Jahren Erfahrung. Kein flüchtiges Flickwerk.
            </p>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24">
<div className="pl-6 border-l-2 border-slate-200 space-y-6">
<p className="text-slate-900 font-medium">Kennen Sie diese Gedanken?</p>
<ul className="space-y-4">
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="help-circle"></i>
<span>"Lohnt sich eine Sanierung des alten Betonbeckens überhaupt noch?"</span>
</li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="help-circle"></i>
<span>"Ich sehe Risse und Osmoseblasen – wird das Becken bald undicht?"</span>
</li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="help-circle"></i>
<span>"Halten Folien oder einfache Anstriche wirklich, was sie versprechen?"</span>
</li>
<li className="flex gap-3 text-slate-600 text-sm">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="help-circle"></i>
<span>"Wie verhindere ich eine Dauerbaustelle im Garten?"</span>
</li>
</ul>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Das Problem mit konventionellen Lösungen</h2>
<div className="prose prose-slate prose-p:text-slate-600 prose-p:text-sm prose-p:leading-7">
<p>
                    Ein Pool ist eine Investition in Lebensqualität. Doch Wasser ist gnadenlos. Es findet jeden Weg.
                    Viele Eigentümer versuchen zunächst kosmetische Korrekturen: Ein neuer Anstrich hier, eine geflickte Fliese dort.
                </p>
<p>
                    Das Resultat ist oft ernüchternd. Farbe blättert nach zwei Wintern ab. Folien werfen Falten und werden spröde. 
                    Fugen in Fliesenbecken werden zu Hygienerisiken und lassen Wasser in die Betonstruktur sickern.
                    Die Substanz Ihres Beckens leidet still und unsichtbar – bis der Schaden massiv ist.
                </p>
<p className="font-medium text-slate-900">
                    Wer billig saniert, saniert oft zweimal.
                </p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24 bg-slate-50 rounded-lg p-8 border border-slate-100">
<div className="flex items-start gap-4 mb-6">
<div className="p-2 bg-white rounded-md border border-slate-200 shadow-sm">
<i className="w-6 h-6 text-slate-900" data-lucide="layers"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Die Lösung: Eine fugenlose zweite Haut</h3>
<p className="text-sm text-slate-500 mt-1">System Polyester oder Ecofinish</p>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                Wir setzen auf hochmoderne Beschichtungssysteme, die sich wie eine zweite Haut in Ihr Becken legen. 
                Ob Polyester (bewährt und robust) oder Ecofinish (maximale Flexibilität und Ästhetik) – das Ziel ist identisch:
            </p>
<ul className="grid sm:grid-cols-2 gap-4">
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 100% Wasserdicht
                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Fugenlose Hygiene
                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Temperaturresistent
                </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Reparierbar
                </li>
</ul>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24">
<h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Unsere Kompetenz</h2>
<div className="grid gap-8 sm:grid-cols-3">
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">40</div>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide mb-2">Jahre Erfahrung</div>
<p className="text-xs text-slate-500 leading-5">Spezialisiert auf Poolbau und Poolsanierung in der Schweiz.</p>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">0%</div>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide mb-2">Kompromisse</div>
<p className="text-xs text-slate-500 leading-5">Messung von Untergrundtemperatur &amp; Luftfeuchtigkeit vor jedem Schritt.</p>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">100%</div>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide mb-2">Prüfung</div>
<p className="text-xs text-slate-500 leading-5">Einsatz von Funkeninduktoren zur finalen Dichtigkeitskontrolle.</p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">Was das für Sie bedeutet</h2>
<div className="space-y-6">
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-800 mt-1" data-lucide="shield-check"></i>
<div>
<h4 className="text-base font-medium text-slate-900">Schutz der Bausubstanz</h4>
<p className="text-sm text-slate-600 leading-relaxed mt-1">Gerade bei Betonbecken stoppen wir den Zerfall. Die Beschichtung isoliert den Untergrund vollständig vom Wasser.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-800 mt-1" data-lucide="sparkles"></i>
<div>
<h4 className="text-base font-medium text-slate-900">Minimale Pflege</h4>
<p className="text-sm text-slate-600 leading-relaxed mt-1">Die glatte, porenfreie Oberfläche bietet Algen kaum Halt. Die Reinigung wird drastisch einfacher.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-800 mt-1" data-lucide="clock"></i>
<div>
<h4 className="text-base font-medium text-slate-900">Ruhe für Jahrzehnte</h4>
<p className="text-sm text-slate-600 leading-relaxed mt-1">Rechnen Sie mit einer Haltbarkeit von 15 bis 20 Jahren. Wir bieten zudem Service und Unterhalt aus einer Hand.</p>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24 border-y border-slate-100 py-12 bg-slate-50/50">
<div className="text-center space-y-4">
<p className="text-sm text-slate-900 font-medium">Schweizer Qualitätsstandard</p>
<p className="text-sm text-slate-500 max-w-md mx-auto">
                    Wir arbeiten täglich für anspruchsvolle Privatkunden und Architekten in Zürich, Basel, Bern und der Zentralschweiz. Jedes Projekt wird detailliert protokolliert.
                </p>
<div className="flexjustify-center gap-4 text-slate-400 pt-2">

<div className="flex items-center justify-center gap-6">
<div className="flex flex-col items-center gap-1">
<i className="w-5 h-5" data-lucide="clipboard-check"></i>
<span className="text-[10px] uppercase tracking-wider">Klimaprotokoll</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-5 h-5" data-lucide="ruler"></i>
<span className="text-[10px] uppercase tracking-wider">Schichtdicke</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-5 h-5" data-lucide="file-check"></i>
<span className="text-[10px] uppercase tracking-wider">Garantie</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-12">
<div className="bg-slate-900 text-white rounded-lg p-8 shadow-xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
<h2 className="text-2xl font-semibold tracking-tight mb-2 relative z-10">Der Sanierungs-Check</h2>
<p className="text-slate-400 text-sm mb-8 relative z-10">Lassen Sie uns Klarheit schaffen. Unverbindlich und fundiert.</p>
<div className="space-y-4 mb-8 relative z-10">
<div className="flex items-start gap-3">
<div className="bg-emerald-500/10 p-1 rounded text-emerald-400">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-200">Kostenlose Potenzial-Analyse</span>
<span className="block text-xs text-slate-500">Ist Ihr Becken für eine Beschichtung geeignet?</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-emerald-500/10 p-1 rounded text-emerald-400">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-200">Grob-Angebot (Richtofferte)</span>
<span className="block text-xs text-slate-500">Erhalten Sie innerhalb von 2-3 Tagen eine realistische Kosteneinschätzung.</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-emerald-500/10 p-1 rounded text-emerald-400">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<span className="block text-sm font-medium text-slate-200">Experten-Rückruf</span>
<span className="block text-xs text-slate-500">Kein Callcenter. Sie sprechen direkt mit einem Techniker.</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-12 text-center">
<div className="inline-block bg-slate-100 rounded px-4 py-2">
<p className="text-xs text-slate-500 font-medium">
                    Transparenz vorab: Eine professionelle Beschichtungslösung bewegt sich in der Regel 
                    zwischen <span className="text-slate-900">CHF 18’000 und CHF 35’000</span>, 
                    abhängig von Grösse, Zustand und gewähltem System.
                </p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-12">
<div className="flex gap-4 items-start text-xs text-slate-500 border border-slate-200 rounded p-4">
<i className="w-4 h-4 shrink-0 mt-0.5" data-lucide="info"></i>
<p>
<strong>Hinweis zur Planung:</strong> Unsere Kapazitäten für die kommende Saison füllen sich. 
                    Wir nehmen uns für jedes Projekt die notwendige Zeit für Trocknung und Klimamessung. 
                    Sichern Sie sich jetzt Ihren Slot für eine Beratung.
                </p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24" id="contact">
<div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Kostenlosen Check anfragen</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Vorname</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="Max" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Nachname</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="Muster" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">E-Mail</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="max@beispiel.ch" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Telefon</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="079 123 45 67" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">PLZ (Projektort)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="8000" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Poolgrösse (ca. m²)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" placeholder="z.B. 40" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Beckenart</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 focus:bg-white transition-colors appearance-none">
<option>Bitte wählen...</option>
<option>Betonbecken</option>
<option>Fertigbecken / Polyester</option>
<option>Brunnen</option>
<option>Whirlpool</option>
</select>
<i className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-medium text-slate-700 block">Art des Projekts</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-900 checked:bg-slate-900 transition-all" name="project_type" type="radio"/>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Sanierung</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-900 checked:bg-slate-900 transition-all" name="project_type" type="radio"/>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Neubau</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Aktueller Zustand / Problem (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:bg-white transition-colors h-20 resize-none" placeholder="Beschreiben Sie kurz Risse, Alter oder Wünsche..."></textarea>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Bilder hochladen (Optional)</label>
<div className="border border-dashed border-slate-300 rounded px-4 py-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
<i className="w-5 h-5 text-slate-400 mx-auto mb-2" data-lucide="image-plus"></i>
<span className="text-xs text-slate-500">Hier klicken oder Bilder ablegen</span>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded text-sm transition-all shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2" type="button">
                        Kostenlosen Check anfordern
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[10px] text-slate-400 text-center mt-3">
                        Ihre Daten werden vertraulich behandelt. Rückruf erfolgt in 1-2 Werktagen.
                    </p>
</form>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 text-center pb-12">
<p className="text-sm text-slate-600">
<span className="font-semibold text-slate-900">P.S.</span> 
                Wasser wartet nicht. Jeder Winter setzt ungeschützter Bausubstanz weiter zu. 
                Sorgen Sie jetzt für Werterhalt.
            </p>
<a className="inline-block mt-4 text-xs font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-slate-700 hover:border-slate-700 transition-colors" href="#contact">
                Zur Anfrage scrollen
            </a>
</section>
</main>


    </>
  );
}
