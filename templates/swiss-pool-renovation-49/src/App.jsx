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
      

<header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight uppercase text-slate-900">
                SWISS POOL EXPERTS
            </div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-white transition-colors bg-slate-900 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#kontakt">
                Offerte anfragen
            </a>
</div>
</header>

<section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative overflow-hidden bg-white">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
<span className="w-2 h-2 rounded-full bg-cyan-600"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Seit 40 Jahren in der Schweiz</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                    Die dauerhafte <br/>
<span className="text-slate-500">Zweite Haut</span> für Ihren Pool.
                </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                    Wir sanieren bestehende Pools mit Hochleistungs-Beschichtungen. Fugenlos, osmosebeständig und präzise geprüft mittels Funkeninduktion.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-white transition-colors bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 shadow-lg shadow-cyan-900/10" href="#kontakt">
                        Kostenlose Einschätzung erhalten
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-slate-700 transition-colors bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="#systeme">
                        Systeme vergleichen
                    </a>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] shadow-sm ring-1 ring-slate-900/5">
<img alt="Hochwertig sanierter Pool" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-6xl mx-auto px-6">

<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Die unsichtbare Erosion: Warum Zögern bei der Pool-Sanierung die teuerste Entscheidung ist.
                </h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                    Kleine Risse sind oft nur Symptome tieferliegender Strukturprobleme. Wer sichtbare Mängel ignoriert, riskiert nicht nur die Bausubstanz, sondern sieht sich mit exponentiell steigenden Sanierungskosten konfrontiert.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-20">

<div className="relative bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 to-slate-100 rounded-t-xl"></div>
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-slate-600">
<i data-lucide="trending-down" height="24" width="24"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Substanzverlust</h3>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">Das schleichende Risiko</p>
</div>
</div>
<p className="text-slate-600 leading-relaxed mb-6">
                        Wasser sucht sich seinen Weg. Durch mikroskopische Haarrisse dringt Feuchtigkeit in den Betonkern ein. Die Folge: Korrosion der Armierungseisen (Betonkrebs) und Osmoseblasen. Was heute noch wie eine kosmetische Kleinigkeit aussieht, ist oft bereits der Beginn eines statischen Verfalls, der den Wert Ihrer Immobilie mindert.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="text-slate-400 w-4 h-4 shrink-0" data-lucide="alert-circle"></i>
                            Wertverlust der Gesamtanlage
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="text-slate-400 w-4 h-4 shrink-0" data-lucide="alert-circle"></i>
                            Irreparable Schäden am Rohbau
                        </li>
</ul>
</div>

<div className="relative bg-slate-900 p-8 md:p-10 rounded-xl border border-slate-800 shadow-xl shadow-slate-900/10">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-t-xl"></div>
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-cyan-400">
<i data-lucide="droplets" height="24" width="24"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight">Sanierungsstau</h3>
<p className="text-xs font-medium text-cyan-400 uppercase tracking-wide mt-1">Akute Kostenfalle</p>
</div>
</div>
<p className="text-slate-300 leading-relaxed mb-6">
                        Ein undichter Pool verliert nicht nur teures, chemisch aufbereitetes Wasser. Das austretende Wasser unterspült Fundamente und Terrassenplatten. Die Kosten verdoppeln sich nicht linear, sondern exponentiell: Aus einer einfachen Oberflächensanierung wird schnell eine komplexe bauliche Totalsanierung des gesamten Gartenbereichs.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="text-cyan-500 w-4 h-4 shrink-0" data-lucide="triangle-alert"></i>
                            Unterspülung von Fundamenten
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<i className="text-cyan-500 w-4 h-4 shrink-0" data-lucide="triangle-alert"></i>
                            Hoher Wasser- und Chemikalienverlust
                        </li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-12">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-8">
<div className="flex flex-col md:flex-row gap-8 md:items-center">
<div className="flex items-center gap-4">
<div className="text-4xl font-semibold text-slate-900 tracking-tighter">40</div>
<div className="text-sm text-slate-500 leading-tight">Jahre Erfahrung<br/>im Schweizer Poolbau</div>
</div>
<div className="hidden md:block w-px h-10 bg-slate-200"></div>
<div className="flex items-start gap-3">
<div className="p-2 bg-cyan-50 text-cyan-700 rounded-full">
<i data-lucide="zap" height="18" width="18"></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Hochvolt-Dichtigkeitsprüfung</p>
<p className="text-xs text-slate-500">Funkeninduktion deckt jede Schwachstelle auf.</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col items-start md:items-end">
<a className="group inline-flex items-center justify-center w-full md:w-auto h-12 px-6 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg shadow-slate-900/10 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#kontakt">
                            Jetzt Experten-Einschätzung anfordern
                            <i className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<p className="text-xs text-slate-500 mt-3 text-center md:text-right">
<i className="inline w-3 h-3 mr-1 align-text-bottom text-slate-400" data-lucide="shield-check"></i>
                            Unverbindlich &amp; Investitionssicher
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Die monolithische Hülle.</h2>
<div className="space-y-6 text-slate-600 text-base leading-relaxed">
<p>
                        Wir setzen nicht auf Kosmetik. Wir bauen eine komplett neue, statisch unabhängige Wanne in Ihren bestehenden Pool.
                    </p>
<p>
                        Unsere Beschichtungssysteme verbinden sich untrennbar mit dem Untergrund. Im Gegensatz zu Folien (die Falten werfen) oder Fliesen (deren Fugen brechen), erhalten Sie eine homogene, fugenlose Oberfläche.
                    </p>
<p className="font-medium text-slate-900">
                        Das Ergebnis: Absolute Hygiene, einfachste Pflege und Schutz für die nächsten zwei Jahrzehnte.
                    </p>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-2 gap-4">
<div className="space-y-4 pt-8">
<div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
<i className="text-cyan-600 mb-3" data-lucide="droplets" height="24" width="24"></i>
<h4 className="font-medium text-slate-900 mb-1">100% Dicht</h4>
<p className="text-xs text-slate-500">Keine Nähte, keine Schwachstellen.</p>
</div>
<div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
<i className="text-cyan-600 mb-3" data-lucide="sparkles" height="24" width="24"></i>
<h4 className="font-medium text-slate-900 mb-1">Hygienisch</h4>
<p className="text-xs text-slate-500">Antibakteriell und algenabweisend.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
<i className="text-cyan-600 mb-3" data-lucide="layers" height="24" width="24"></i>
<h4 className="font-medium text-slate-900 mb-1">Strukturfest</h4>
<p className="text-xs text-slate-500">Verstärkt die alte Bausubstanz.</p>
</div>
<div className="bg-slate-50 p-6 rounded-lg border border-slate-100 shadow-sm">
<i className="text-cyan-600 mb-3" data-lucide="sun" height="24" width="24"></i>
<h4 className="font-medium text-slate-900 mb-1">UV-Stabil</h4>
<p className="text-xs text-slate-500">Kein Ausbleichen, kein Verspröden.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white px-6" id="systeme">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Zwei Systeme. Ein Qualitätsanspruch.</h2>
<p className="text-slate-400">Wir beraten Sie neutral, welches System für Ihre Poolgeometrie und Ihr Budget die technisch sinnvollste Lösung ist.</p>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col h-full">
<div className="mb-6">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-700 text-slate-300 border border-slate-600">Der Klassiker</span>
</div>
<h3 className="text-2xl font-semibold mb-2">Polyester-Beschichtung</h3>
<p className="text-slate-400 text-sm mb-8 flex-grow">
                        Glasfaserverstärkter Kunststoff (GFK). Ein bewährtes, extrem widerstandsfähiges System, das manuell in mehreren Lagen laminiert wird.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-slate-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Sehr hohe mechanische Belastbarkeit
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-slate-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Wirtschaftlich attraktiver
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-slate-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Ideal für geometrisch einfache Formen
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-slate-800 border border-cyan-900/50 shadow-[0_0_40px_-10px_rgba(8,145,178,0.2)] flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<i className="text-cyan-500" data-lucide="star" height="20" width="20"></i>
</div>
<div className="mb-6">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-300 border border-cyan-800">Premium Empfehlung</span>
</div>
<h3 className="text-2xl font-semibold mb-2 text-white">Ecofinish</h3>
<p className="text-slate-400 text-sm mb-8 flex-grow">
                        Ein High-End Thermoplast-Pulverbeschichtungssystem, das im Flammspritzverfahren aufgebracht wird. Aushärtung in Sekunden.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-cyan-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Maximale Chemikalienbeständigkeit (pH/Chlor)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-cyan-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Große Auswahl an modernen Texturen &amp; Farben
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="text-cyan-500" data-lucide="check-circle-2" height="16" width="16"></i>
                            Flexibel &amp; Rissüberbrückend
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100 bg-white">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Wir glauben nicht.<br/>Wir messen.</h2>
<p className="text-slate-600 leading-relaxed">
                        Die Langlebigkeit einer Beschichtung hängt zu 80% von der Vorbereitung und den Applikationsbedingungen ab. Deshalb verlassen wir uns nicht auf das Augenmaß, sondern auf kalibrierte Messgeräte.
                    </p>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
<p className="text-sm font-medium text-slate-900 italic">
                        „Ein Pool ist nur so dicht wie seine schwächste Stelle. Wir finden sie, bevor Wasser eingefüllt wird.“
                    </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
<i data-lucide="zap" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Funkeninduktion</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Hochspannungsprüfung der fertigen Oberfläche. Selbst mikroskopisch kleine Poren werden durch einen sichtbaren Funkenüberschlag detektiert.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
<i data-lucide="thermometer" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Klimadaten-Log</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Permanente Überwachung von Taupunkt, Luftfeuchtigkeit und Untergrundtemperatur während der Arbeit.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
<i data-lucide="ruler" height="24" width="24"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Schichtdickenmessung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Protokollierte Messung der Materialstärke an verschiedenen Referenzpunkten. Damit Sie garantiert bekommen, wofür Sie bezahlen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Der Weg zum neuen Pool</h2>
<div className="relative">

<div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>
<div className="space-y-12">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-3 md:gap-12 items-baseline">
<div className="hidden md:block text-right">
<span className="text-sm font-medium text-slate-400">Schritt 01</span>
</div>
<div className="md:col-span-2">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-900 md:hidden">1</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Erstgespräch &amp; Grobanalyse</h3>
<p className="text-sm text-slate-600">Telefonische Klärung der Situation. Basierend auf Ihren Fotos und Massen erstellen wir eine erste Kostenschätzung.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-3 md:gap-12 items-baseline">
<div className="hidden md:block text-right">
<span className="text-sm font-medium text-slate-400">Schritt 02</span>
</div>
<div className="md:col-span-2">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-900 md:hidden">2</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vor-Ort-Termin &amp; Detailofferte</h3>
<p className="text-sm text-slate-600">Wir besichtigen den Pool, prüfen den Untergrund und die Technik. Sie erhalten eine verbindliche Pauschalofferte.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-3 md:gap-12 items-baseline">
<div className="hidden md:block text-right">
<span className="text-sm font-medium text-slate-400">Schritt 03</span>
</div>
<div className="md:col-span-2">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-900 md:hidden">3</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Umsetzung</h3>
<p className="text-sm text-slate-600">Vorbereitung, Strahltechnik, Beschichtung. Dauer je nach Witterung und System ca. 1-2 Wochen.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-3 md:gap-12 items-baseline">
<div className="hidden md:block text-right">
<span className="text-sm font-medium text-slate-400">Schritt 04</span>
</div>
<div className="md:col-span-2">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-900 md:hidden">4</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Abnahme &amp; Service</h3>
<p className="text-sm text-slate-600">Gemeinsame Qualitätskontrolle. Wir übergeben den Pool besenrein und stehen auch für zukünftigen Unterhalt zur Verfügung.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-100 bg-white">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Für wen wir arbeiten
                </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-slate-600">
<i className="text-emerald-500 shrink-0" data-lucide="check" height="18" width="18"></i>
                        Hauseigentümer, die eine langfristige Lösung suchen (15+ Jahre).
                    </li>
<li className="flex gap-3 text-sm text-slate-600">
<i className="text-emerald-500 shrink-0" data-lucide="check" height="18" width="18"></i>
                        Pools mit substanziellen Problemen (Undichtigkeit, Osmose).
                    </li>
<li className="flex gap-3 text-sm text-slate-600">
<i className="text-emerald-500 shrink-0" data-lucide="check" height="18" width="18"></i>
                        Menschen, die Wert auf zertifizierte Qualität und Messprotokolle legen.
                    </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Was wir nicht anbieten
                </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-slate-500">
<i className="text-slate-400 shrink-0" data-lucide="x" height="18" width="18"></i>
                        Kurzfristige Billig-Reparaturen oder einfache Anstriche.
                    </li>
<li className="flex gap-3 text-sm text-slate-500">
<i className="text-slate-400 shrink-0" data-lucide="x" height="18" width="18"></i>
                        Folienauskleidungen (wir setzen auf nahtlose Systeme).
                    </li>
<li className="flex gap-3 text-sm text-slate-500">
<i className="text-slate-400 shrink-0" data-lucide="x" height="18" width="18"></i>
                        Aufstellbecken oder temporäre Pools.
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6">
<div className="max-w-6xl mx-auto">
<div className="mb-12 flex justify-between items-end">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Ergebnisse, die bleiben.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
<div className="aspect-video bg-slate-200 relative overflow-hidden">
<img alt="Referenzpool" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">Ecofinish Blue Granite</div>
</div>
<div className="p-6">
<p className="text-sm text-slate-600 italic mb-4">„Nach zwei missglückten Versuchen mit anderen Firmen ist unser Pool nun endlich dicht. Die Messprotokolle haben uns Sicherheit gegeben.“</p>
<p className="text-xs font-semibold text-slate-900">Familie M. aus Zürich</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
<div className="aspect-video bg-slate-200 relative overflow-hidden">
<img alt="Referenzpool" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">Polyester Laminat</div>
</div>
<div className="p-6">
<p className="text-sm text-slate-600 italic mb-4">„Kompetente Beratung und extrem saubere Baustelle. Die Sanierung hat unserem 30 Jahre alten Pool ein zweites Leben geschenkt.“</p>
<p className="text-xs font-semibold text-slate-900">Herr K. aus Luzern</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="kontakt">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Kostenlose Einschätzung anfordern</h2>
<p className="text-slate-600">Senden Sie uns die Eckdaten Ihres Pools. Wir melden uns innerhalb von 24h für eine erste telefonische Beratung.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="name">Name</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" id="name" placeholder="Max Muster" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="ort">PLZ / Ort</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" id="ort" placeholder="8000 Zürich" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">E-Mail Adresse</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" id="email" placeholder="ihre@email.ch" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="pool">Aktueller Zustand / Poolgrösse</label>
<textarea className="w-full p-3 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" id="pool" placeholder="z.B. Betonpool, 8x4m, Risse in den Fliesen..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full h-11 bg-slate-900 text-white font-medium text-sm rounded-md hover:bg-slate-800 transition-colors shadow-sm" type="button">
                        Unverbindlich anfragen
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">Ihre Daten werden vertraulich behandelt. Keine Weitergabe an Dritte.</p>
</div>
</form>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 open:ring-1 open:ring-slate-900/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-900">
<span>Was kostet eine Poolsanierung?</span>
<span className="transition group-open:rotate-180">
<i data-lucide="chevron-down" height="16" width="16"></i>
</span>
</summary>
<div className="text-slate-600 text-sm px-4 pb-4 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        Für eine professionelle Sanierung inklusive Untergrundvorbereitung und hochwertiger Beschichtung sollten Sie mit einem Budgetrahmen zwischen 18’000 und 35’000 CHF rechnen, abhängig von Grösse, Zustand und gewähltem System.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:ring-1 open:ring-slate-900/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-900">
<span>Wann ist die beste Zeit für die Sanierung?</span>
<span className="transition group-open:rotate-180">
<i data-lucide="chevron-down" height="16" width="16"></i>
</span>
</summary>
<div className="text-slate-600 text-sm px-4 pb-4 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        Ideal sind Frühling und Herbst. Wir benötigen trockene Witterung und Temperaturen über 10°C (für Polyester) bzw. 5°C (für Ecofinish). Planen Sie idealerweise 2-3 Monate im Voraus.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:ring-1 open:ring-slate-900/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-900">
<span>Lohnt sich eine Sanierung oder lieber Neubau?</span>
<span className="transition group-open:rotate-180">
<i data-lucide="chevron-down" height="16" width="16"></i>
</span>
</summary>
<div className="text-slate-600 text-sm px-4 pb-4 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        In 90% der Fälle ist die Sanierung deutlich wirtschaftlicher, da der Rohbau (das Loch und der Beton) meist erhalten bleiben kann. Unsere Beschichtungssysteme machen den Pool wieder so langlebig wie einen Neubau.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 open:ring-1 open:ring-slate-900/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-slate-900">
<span>Wie lange hält die neue Beschichtung?</span>
<span className="transition group-open:rotate-180">
<i data-lucide="chevron-down" height="16" width="16"></i>
</span>
</summary>
<div className="text-slate-600 text-sm px-4 pb-4 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        Bei korrekter Pflege hält eine Polyester- oder Ecofinish-Beschichtung ca. 15 bis 20 Jahre. Danach kann sie oft mit geringem Aufwand aufgefrischt werden (Topcoat).
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-slate-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tight uppercase text-slate-900">
                SWISS POOL EXPERTS
            </div>
<div className="text-xs text-slate-500">
                © 2024 Alle Rechte vorbehalten. Schweizer Handwerk.
            </div>
</div>
</footer>


    </>
  );
}
