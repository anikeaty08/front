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
      

<header className="w-full py-4 border-b border-slate-100 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
<div className="max-w-2xl mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-widest text-slate-500 uppercase">
                Exklusiv für Immobilienbesitzer mit Privatpool in der Schweiz
            </p>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-3xl mx-auto px-6 mb-24 text-center">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
                Die letzte Sanierung, <br className="hidden md:block"/>die Sie jemals bezahlen.
            </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto font-light">
                Verwandeln Sie Ihren Pool in ein dauerhaft dichtes, fugenloses Bauwerk. 
                Keine Folienwechsel alle 10 Jahre. Keine Risse. Kein Wertverlust.
            </p>
</section>

<section className="max-w-xl mx-auto px-6 mb-24">
<div className="bg-slate-50 rounded-lg p-8 md:p-10 border border-slate-100">
<p className="text-sm font-medium text-slate-900 uppercase tracking-wide mb-6">Warum konventionelle Methoden scheitern</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 mt-1 shrink-0" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-base text-slate-700">Warum 80% aller Fliesenfugen nach 7 Jahren undicht werden.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 mt-1 shrink-0" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-base text-slate-700">Weshalb "billige" Sanierungen Sie langfristig das Doppelte kosten.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 mt-1 shrink-0" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-base text-slate-700">Der Unterschied zwischen einem simplen Anstrich und einer technischen Beschichtung.</span>
</li>
</ul>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">Das unsichtbare Problem unter der Oberfläche</h2>
<div className="prose prose-slate prose-lg text-slate-600 font-light">
<p className="mb-4">
                    Ein undichter Pool ist mehr als ein Ärgernis. Es ist ein strukturelles Risiko für Ihre gesamte Immobilie.
                </p>
<p className="mb-4">
                    Wasser sucht sich seinen Weg. Durch mikroskopische Risse im Beton oder spröde Schweißnähte bei Folienbecken gelangt chlorhaltiges Wasser in das Erdreich oder die Bausubstanz.
                </p>
<p>
                    Das Resultat: Osmoseblasen, abplatzende Fliesen und ein massiver, schleichender Wertverlust Ihrer Anlage. Wer die Sanierung aufschiebt, riskiert, dass aus einer Oberflächenreparatur ein komplexer Rohbau-Eingriff wird.
                </p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32 text-center">
<div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-full mb-6">
<span className="iconify text-slate-900" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Die Systemlösung: Eine zweite Haut für Ihren Pool</h2>
<p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Wir tragen keine Farbe auf. Wir installieren ein technisches Verbundsystem. Eine flüssige, hochreaktive Kunststoffmatrix, die untrennbar mit dem Untergrund verschmilzt und eine nahtlose, elastische Wanne bildet.
            </p>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="grid md:grid-cols-2 gap-12 md:gap-8">

<div className="border-t border-slate-200 pt-8">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Szenario A</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Bestehende Pools (Sanierung)</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Ihr Pool verliert Wasser, die Farbe bleicht aus oder die Oberfläche wird rau. Herkömmliche Reparaturen halten oft nur 2-3 Saisons.
                    </p>
<ul className="space-y-2 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:arrow-right" data-width="14"></span>
                            Sanierung ohne Abriss des Beckenkörpers
                        </li>
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:arrow-right" data-width="14"></span>
                            Dauerhafte Abdichtung von Rissen
                        </li>
</ul>
</div>

<div className="border-t border-slate-200 pt-8">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Szenario B</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Neubau (Prävention)</h3>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        Sie bauen neu und wollen nicht in 10 Jahren sanieren müssen. Sie suchen eine Ästhetik jenseits der standardblauen Poolfolie.
                    </p>
<ul className="space-y-2 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:arrow-right" data-width="14"></span>
                            Moderner, fugenloser Sichtbeton-Look
                        </li>
<li className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:arrow-right" data-width="14"></span>
                            Maximaler Schutz des Betonkörpers ab Tag 1
                        </li>
</ul>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 mb-24 border-y border-slate-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl font-medium text-slate-900 mb-4">Warum dieses System funktioniert</h2>
<p className="text-slate-500">
                        Ingenieurskunst statt Handwerker-Lösung. Wir nutzen Polyurea- und Epoxidharz-Systeme aus dem Industriebau.
                    </p>
</div>
<div className="grid sm:grid-cols-3 gap-8 text-center">
<div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-slate-200 mb-4 text-slate-900">
<span className="iconify" data-icon="lucide:maximize" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="font-medium text-slate-900 mb-2">100% Fugenlos</h4>
<p className="text-sm text-slate-500">Keine Schwachstellen, keine Schmutzkanten. Eine homogene Fläche aus einem Guss.</p>
</div>
<div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-slate-200 mb-4 text-slate-900">
<span className="iconify" data-icon="lucide:thermometer-sun" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="font-medium text-slate-900 mb-2">Temperaturstabil</h4>
<p className="text-sm text-slate-500">Bleibt elastisch bei -20°C im Winter und +40°C im Sommer. Kein Reißen durch Spannung.</p>
</div>
<div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-slate-200 mb-4 text-slate-900">
<span className="iconify" data-icon="lucide:hourglass" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="font-medium text-slate-900 mb-2">Langlebigkeit</h4>
<p className="text-sm text-slate-500">Entwickelt für eine Nutzungsdauer von 15-20 Jahren ohne signifikante Wartung.</p>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-24">
<div className="flex flex-col md:flex-row items-center gap-8 justify-between border-b border-slate-100 pb-12">
<div className="text-left">
<p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Expertise</p>
<p className="text-lg text-slate-600 font-light">Spezialisiert auf komplexe Abdichtungen im Schweizer Premium-Segment. Wir verstehen die lokalen Klimabedingungen und Baunormen.</p>
</div>
<div className="shrink-0 flex gap-6 grayscale opacity-60">

<span className="text-sm font-medium border px-2 py-1 rounded text-slate-500">ISO Zertifiziert</span>
<span className="text-sm font-medium border px-2 py-1 rounded text-slate-500">Swiss Quality</span>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24">
<h2 className="text-2xl font-medium text-slate-900 mb-12 text-center tracking-tight">Was Sie eigentlich kaufen</h2>
<div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
<div className="flex gap-4">
<span className="iconify text-slate-900 shrink-0 mt-1" data-icon="lucide:check" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div>
<h4 className="font-medium text-slate-900">Absolute Ruhe</h4>
<p className="text-sm text-slate-500 mt-1">Das Thema "Poolsanierung" ist für die nächsten zwei Jahrzehnte von Ihrer Liste gestrichen.</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-slate-900 shrink-0 mt-1" data-icon="lucide:trending-up" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div>
<h4 className="font-medium text-slate-900">Werterhalt der Immobilie</h4>
<p className="text-sm text-slate-500 mt-1">Ein technisch einwandfreier Pool steigert den Wiederverkaufswert signifikant.</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-slate-900 shrink-0 mt-1" data-icon="lucide:droplets" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div>
<h4 className="font-medium text-slate-900">Hygiene &amp; Pflegeleichtigkeit</h4>
<p className="text-sm text-slate-500 mt-1">Die porenfreie Oberfläche bietet Algen und Bakterien keinen Halt. Chemieeinsatz sinkt.</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-slate-900 shrink-0 mt-1" data-icon="lucide:wallet" data-width="20" style={{strokeWidth: '1.5'}}></span>
<div>
<h4 className="font-medium text-slate-900">Planungssicherheit</h4>
<p className="text-sm text-slate-500 mt-1">Festpreis-Garantie für die Durchführung. Keine versteckten Kostenfallen.</p>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-32">
<div className="bg-white border-l-2 border-slate-200 pl-6 py-2">
<p className="text-slate-600 italic mb-4 font-light text-lg">
                    "Die Präzision in der Ausführung hat uns überzeugt. Endlich ist der Wasserverlust gestoppt und die Optik passt perfekt zu unserer modernen Architektur."
                </p>
<div className="text-sm text-slate-900 font-medium">Privatbauherr, Zürichsee</div>
<div className="text-xs text-slate-400">Komplettsanierung, 2023</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-16">
<div className="bg-slate-900 rounded-xl p-8 md:p-12 text-center shadow-xl shadow-slate-200">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">Kostenlose Zustandsprüfung</h2>
<p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                    Wir verkaufen Ihnen nichts am Telefon. Wir begutachten Ihren Pool (oder die Pläne), analysieren die Substanz und geben Ihnen eine ehrliche, fachtechnische Einschätzung.
                </p>

<div className="flex flex-col sm:flex-row justify-center gap-4 text-left max-w-lg mx-auto mb-10 text-sm text-slate-300">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:check-circle" data-width="16"></span>
<span>Substanz-Analyse</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:check-circle" data-width="16"></span>
<span>Machbarkeitsstudie</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:check-circle" data-width="16"></span>
<span>Festpreis-Angebot</span>
</div>
</div>

<p className="text-xs text-slate-400 mb-8 uppercase tracking-widest">
                    Begrenzte Kapazitäten für die Saison 2024
                </p>

<a className="inline-block w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 transition-colors font-medium py-4 px-8 rounded-lg text-center" href="#kontakt">
                    Zustandsprüfung anfragen
                </a>

<p className="text-xs text-slate-500 mt-6">
                    100% Unverbindlich. Sollte eine Beschichtung nicht die richtige Lösung sein, sagen wir Ihnen das.
                </p>
</div>
</section>

<section className="max-w-2xl mx-auto px-6 mb-24 text-center">
<div className="inline-block bg-orange-50 border border-orange-100 px-6 py-4 rounded-lg">
<p className="text-sm text-orange-900 font-medium flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="16"></span>
                    Hinweis
                </p>
<p className="text-sm text-orange-800/80 mt-1">
                    Wasserschäden pausieren nicht. Je länger Feuchtigkeit in den Beton eindringt, desto aufwendiger wird die Sanierung. Handeln Sie proaktiv.
                </p>
</div>
</section>

<footer className="border-t border-slate-100 pt-16 pb-12">
<div className="max-w-2xl mx-auto px-6 text-center">
<h5 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">Zusammenfassung</h5>
<p className="text-slate-500 mb-8 text-sm leading-relaxed">
                    Für qualitätsbewusste Poolbesitzer in der Schweiz. Wir lösen Dichtigkeitsprobleme dauerhaft durch industrielle Beschichtungssysteme statt kurzfristiger Reparaturen. Investitionssicherheit für 20+ Jahre.
                </p>
<a className="text-slate-900 font-medium border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5 text-sm" href="#kontakt">
                    Jetzt Analyse starten
                </a>
<div className="mt-16 text-xs text-slate-400 flex justify-center gap-6">
<span>© 2024 Premium Poolbeschichtung</span>
<span>Impressum</span>
<span>Datenschutz</span>
</div>
</div>
</footer>
</main>

    </>
  );
}
