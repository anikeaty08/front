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



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
},
},
fontSize: {
xxs: '0.65rem',
}
}
}
}

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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">
                POOL<span className="text-slate-400">TEC</span> SWISS
            </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#vorteile">Vorteile</a>
<a className="hover:text-slate-900 transition-colors" href="#ablauf">Ablauf</a>
<a className="hover:text-slate-900 transition-colors" href="#kompetenz">Kompetenz</a>
<a className="hover:text-slate-900 transition-colors" href="#referenzen">Referenzen</a>
</div>
<a className="hidden md:block text-xs font-semibold tracking-wide uppercase bg-slate-900 text-white px-5 py-2.5 hover:bg-slate-800 transition-colors" href="#kontakt">
                Anfrage starten
            </a>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="iconify text-slate-500" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">40 Jahre Erfahrung · Langlebige Systeme (15–20 Jahre)</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Sanierung oder präventiver <br className="hidden md:block"/> Schutz bei Neubau.
                </h1>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed mb-10 max-w-2xl">
                    Langfristige Lösung statt kurzfristiger Reparaturen. Investieren Sie in den Werterhalt Ihrer Anlage durch technisch führende Beschichtungssysteme.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors" href="#kontakt">
                        Kostenlose Einschätzung
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium tracking-wide hover:bg-slate-50 transition-colors" href="#zielgruppe">
                        Mehr erfahren
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-slate-50/50 hidden lg:block border-l border-slate-100"></div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50" id="zielgruppe">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-3">Ausgangslage</h2>
<p className="text-2xl text-slate-900 font-medium tracking-tight leading-snug">
                    Ob bestehender Pool oder Neubau: Entscheidend ist der Schutz der Substanz. Eine hochwertige Beschichtung verhindert Folgeschäden und sichert den Wert über viele Jahre.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-white p-8 md:p-12 border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-900" data-icon="lucide:refresh-cw" data-width="24"></span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Für bestehende Pools</h3>
</div>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Wenn Ihr Pool Anzeichen von Alterung zeigt</h4>
<p className="text-slate-600 leading-relaxed text-sm">
                                Risse, Wasserverluste oder eine raue, gealterte Oberfläche sind Warnsignale. Werden sie ignoriert, dringt Feuchtigkeit in die Substanz ein – Reparaturen werden aufwendig und teuer.
                            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Was eine Beschichtung leistet</h4>
<p className="text-slate-600 leading-relaxed text-sm">
                                Eine fugenlose, dauerhafte Beschichtung dichtet ab, stabilisiert die Oberfläche und stellt die Nutzbarkeit wieder her. Statt kosmetischer Lösungen erhalten Sie eine Sanierung mit einer Lebensdauer von 15–20 Jahren.
                            </p>
</div>
<div className="bg-slate-50 p-4 border-l-2 border-slate-300">
<p className="text-xs font-medium text-slate-800">
<span className="block uppercase text-xs text-slate-400 mb-1">Konsequenz bei Nicht-Handeln</span>
                                Kleine Schäden entwickeln sich zu strukturellen Problemen – mit hohen Folgekosten und Wertverlust.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 border border-slate-200">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-slate-900" data-icon="lucide:plus-square" data-width="24"></span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Für neue Pools</h3>
</div>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Langfristiger Schutz von Anfang an</h4>
<p className="text-slate-600 leading-relaxed text-sm">
                                Beim Neubau entscheidet sich, wie wartungsarm und wertstabil Ihr Pool bleibt. Eine hochwertige Beschichtung schützt die Substanz präventiv vor Feuchtigkeit, Spannungsrissen und Materialermüdung.
                            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Was Sie gewinnen</h4>
<p className="text-slate-600 leading-relaxed text-sm">
                                Ein dauerhaft dichtes, pflegeleichtes System mit klar kalkulierbarer Haltbarkeit von 15–20 Jahren. Weniger Unterhalt, mehr Sicherheit, langfristiger Werterhalt.
                            </p>
</div>
<div className="bg-slate-50 p-4 border-l-2 border-slate-300">
<p className="text-xs font-medium text-slate-800">
<span className="block uppercase text-xs text-slate-400 mb-1">Konsequenz bei Verzicht</span>
                                Ohne präventiven Schutz entstehen Schäden oft schleichend – Sanierungen werden später unvermeidlich und kostenintensiv.
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center border-t border-slate-200 pt-8">
<p className="text-slate-500 italic">Im nächsten Schritt zeigen wir, wie die Zustandsprüfung abläuft und welches Beschichtungssystem für Ihre Situation sinnvoll ist.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white" id="vorteile">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-16">

<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Beschichtungssysteme &amp; Vorteile</h2>
<p className="text-slate-600 leading-relaxed mb-8">
                        Wir setzen auf zwei bewährte Systeme, die sich durch ihre technische Überlegenheit gegenüber Folien oder Fliesen auszeichnen:
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 mt-1" data-icon="lucide:check" data-width="16"></span>
<div>
<strong className="text-slate-900 text-sm block">Polyesterbeschichtung</strong>
<span className="text-slate-500 text-sm">Der klassische Verbundwerkstoff.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 mt-1" data-icon="lucide:check" data-width="16"></span>
<div>
<strong className="text-slate-900 text-sm block">Ecofinish-Beschichtung</strong>
<span className="text-slate-500 text-sm">Mehr Farben, höhere Beständigkeit, moderne Optik.</span>
</div>
</li>
</ul>
<a className="text-sm font-semibold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-slate-700 hover:border-slate-700 transition-colors" href="#kontakt">Beratung anfordern</a>
</div>

<div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10">
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:layers" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Fugenlos („zweite Haut“)</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Keine Schweissnähte oder Fugen, in denen sich Schmutz sammeln kann. Das Becken wird homogen abgedichtet.
                        </p>
</div>
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:sparkles" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Hygienisch &amp; reinigungsfreundlich</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Die glatte Oberfläche minimiert Algenwachstum und reduziert den Bedarf an chemischen Reinigungsmitteln.
                        </p>
</div>
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:wrench" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Reparierbar</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Im Gegensatz zu Folien können Beschädigungen lokal und unsichtbar behoben werden, ohne das gesamte System zu tauschen.
                        </p>
</div>
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:thermometer" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Temperaturbeständig</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Hält extremen Temperaturschwankungen stand (bis 60°C Wassertemperatur), ideal für den Schweizer Aussenbereich.
                        </p>
</div>
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:shield" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Schutz der Bausubstanz</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Besonders bei Betonbecken wird das Eindringen von Wasser in die Armierung effektiv verhindert (Karbonatisierungsschutz).
                        </p>
</div>
<div>
<span className="iconify text-slate-400 mb-4" data-icon="lucide:hourglass" data-width="24"></span>
<h4 className="text-base font-semibold text-slate-900 mb-2">Lebensdauer 15–20 Jahre</h4>
<p className="text-sm text-slate-600 leading-relaxed">
                            Eine Investition, die sich amortisiert. Langlebigkeit durch hochwertige Materialien und fachgerechte Applikation.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50" id="ablauf">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-16 text-center">Der Weg zu Ihrem sanierten Pool</h2>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">1</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Anfrage &amp; Kurzcheck</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Übermittlung Ihrer Basisdaten via Formular.</p>
</div>

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">2</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Rückruf Projektleiter</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Klärung von Details innerhalb von 1–2 Tagen.</p>
</div>

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">3</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Grobofferte</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Erste Kostenschätzung nach 2–3 Tagen.</p>
</div>

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">4</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Vor-Ort-Termin</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Exakte Analyse der Bausubstanz.</p>
</div>

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">5</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Finale Pauschalofferte</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Verbindlicher Preis, keine Nachkosten.</p>
</div>

<div className="bg-white p-6 border border-slate-200 lg:border-none lg:bg-transparent lg:p-0">
<div className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-xs font-semibold mb-4 mx-auto lg:mx-0">6</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2 text-center lg:text-left">Fachgerechte Ausführung</h4>
<p className="text-xs text-slate-500 text-center lg:text-left">Durch unsere zertifizierten Teams.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white" id="kompetenz">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-3">Qualitätssicherung</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Warum wir der richtige Partner für Ihr Investment sind</h3>
<div className="space-y-8">
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">40 Jahre Erfahrung im Poolbau &amp; in der Sanierung</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                                Unser Hintergrund ist der klassische Poolbau. Wir verstehen nicht nur die Oberfläche, sondern die gesamte Statik, Hydraulik und Bauphysik Ihres Schwimmbads.
                            </p>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Eigener Poolbau → System-Know-how</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                                Wir sanieren nicht nur, wir bauen auch. Dieses vollständige Systemverständnis garantiert, dass die Sanierungslösung technisch zur Substanz passt.
                            </p>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Service, Unterhalt &amp; Reparaturen aus einer Hand</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                                Nach der Sanierung sind wir weiter für Sie da. Ein Ansprechpartner für die gesamte Lebensdauer Ihres Pools.
                            </p>
</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 p-8 md:p-12">
<h4 className="text-lg font-medium text-slate-900 mb-6">Technische Messverfahren</h4>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 text-slate-900">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<strong className="text-sm font-semibold text-slate-900 block">Funkeninduktor</strong>
<span className="text-xs text-slate-500 block mt-1">Prüfung auf mikroskopische Poren und Dichtigkeit.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 text-slate-900">
<span className="iconify" data-icon="lucide:thermometer-sun" data-width="20"></span>
</div>
<div>
<strong className="text-sm font-semibold text-slate-900 block">Klima- &amp; Untergrundmessung</strong>
<span className="text-xs text-slate-500 block mt-1">Sicherstellung optimaler Haftungsbedingungen (Taupunkt, Feuchte).</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 text-slate-900">
<span className="iconify" data-icon="lucide:ruler" data-width="20"></span>
</div>
<div>
<strong className="text-sm font-semibold text-slate-900 block">Schichtdickenmessung</strong>
<span className="text-xs text-slate-500 block mt-1">Protokollierung der vertraglich vereinbarten Materialstärke.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50" id="referenzen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Referenzen &amp; Beweise</h2>
<p className="text-slate-500">Ausgewählte Projekte aus der ganzen Schweiz.</p>
</div>
<div className="hidden md:flex gap-4">
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-sm">
<span className="iconify text-yellow-500" data-icon="lucide:award" data-width="16"></span>
<span className="text-xs font-medium text-slate-700">Aqua Suisse Award</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-sm">
<span className="iconify text-slate-700" data-icon="lucide:check-circle" data-width="16"></span>
<span className="text-xs font-medium text-slate-700">Partner: Ecofinish</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-slate-200 w-full mb-4 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
<span className="text-sm font-medium tracking-wide">Bild: Referenzanlage Zürich (Vorher/Nachher)</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Privatbad Betonbecken, Zürich</h3>
<p className="text-sm text-slate-500">Totalsanierung mit Ecofinish, Baujahr 1985</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-slate-200 w-full mb-4 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-200">
<span className="text-sm font-medium tracking-wide">Bild: Referenzanlage Tessin (Neubau)</span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900">Neubau Infinity-Pool, Tessin</h3>
<p className="text-sm text-slate-500">Präventivbeschichtung Polyester</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group border border-slate-200 bg-white open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Wie lange hält eine Poolbeschichtung?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-600 text-sm p-5 pt-0 leading-relaxed">
                        Bei fachgerechter Ausführung und normaler Nutzung können Sie von einer Lebensdauer zwischen 15 und 20 Jahren ausgehen. Die Systeme sind auf Langlebigkeit ausgelegt.
                    </div>
</details>
<details className="group border border-slate-200 bg-white open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Für welche Becken ist sie geeignet?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-600 text-sm p-5 pt-0 leading-relaxed">
                        Unsere Beschichtungen eignen sich hervorragend für Betonbecken, aber auch für die Sanierung von älteren GFK-Becken oder gefliesten Pools.
                    </div>
</details>
<details className="group border border-slate-200 bg-white open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Neubau oder nur Sanierung möglich?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-600 text-sm p-5 pt-0 leading-relaxed">
                        Beides. Bei Sanierungen stellen wir die Dichtigkeit wieder her, bei Neubauten sorgen wir für einen präventiven Schutz der Bausubstanz von Anfang an.
                    </div>
</details>
<details className="group border border-slate-200 bg-white open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Kostenrahmen?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-600 text-sm p-5 pt-0 leading-relaxed">
                        Die Investition bewegt sich typischerweise im Rahmen von 18’000–35’000 CHF, abhängig von Grösse, Geometrie und gewähltem System. Wir erstellen Ihnen gerne eine pauschale Offerte.
                    </div>
</details>
<details className="group border border-slate-200 bg-white open:bg-slate-50 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900">
<span>Ablauf der Zustandsprüfung?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-600 text-sm p-5 pt-0 leading-relaxed">
                        Nach einer ersten Einschätzung am Telefon vereinbaren wir einen Vor-Ort-Termin, um die Bausubstanz zu prüfen und Mass zu nehmen. Dieser Termin ist Basis für unser Festpreisangebot.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Kostenloser Check des Sanierungspotenzials</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Erhalten Sie eine unverbindliche Einschätzung von einem Experten. Füllen Sie das Formular aus, wir melden uns innerhalb von 1–2 Werktagen.
                    </p>
<div className="space-y-6 text-sm text-slate-300">
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
<span>Keine versteckten Kosten</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
<span>Technische Expertise statt Verkauf</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
<span>Datenschutz garantiert</span>
</div>
</div>
</div>
<div className="bg-white rounded-sm p-8 text-slate-900">
<form action="#" className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="name">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all rounded-sm" id="name" placeholder="Ihr Vor- und Nachname" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="phone">Telefon</label>
<input className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all rounded-sm" id="phone" placeholder="+41 xx xxx xx xx" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="email">E-Mail</label>
<input className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all rounded-sm" id="email" placeholder="ihre@email.ch" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="plz">PLZ / Ort</label>
<input className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all rounded-sm" id="plz" placeholder="PLZ" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="size">Poolgrösse (ca.)</label>
<input className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all rounded-sm" id="size" placeholder="z.B. 4x8m" type="text"/>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-semibold text-slate-700 uppercase tracking-wide block">Art des Projekts</span>
<div className="flex gap-6">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition-colors" name="type" type="radio"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Sanierung</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded-full checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition-colors" name="type" type="radio"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Neubau</span>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Bilder (Optional)</label>
<div className="relative">
<input className="w-full text-sm text-slate-500 border border-slate-200 bg-slate-50 py-2.5 px-4 cursor-pointer focus:outline-none rounded-sm file:mr-4 file:py-0 file:px-0 file:border-0 file:text-sm file:font-medium file:text-slate-700 hover:file:text-slate-900" id="images" type="file"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<span className="iconify text-slate-400" data-icon="lucide:image-plus" data-width="18"></span>
</div>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 px-4 mt-2 hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" type="button">
                            Unverbindliche Einschätzung anfordern
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2023 PoolTec Swiss. Qualität und Werterhalt.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Impressum</a>
<a className="hover:text-slate-600" href="#">Datenschutz</a>
</div>
</div>
</footer>

    </>
  );
}
