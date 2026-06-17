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
      

<nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
<span className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded text-xs font-bold">D</span>
                DORTMUND ENTRÜMPELUNG
            </div>
<a className="hidden md:inline-flex bg-neutral-900 text-neutral-50 hover:bg-neutral-800 transition-colors px-4 py-2 rounded-lg text-xs font-medium tracking-tight" href="#kontakt">
                Kostenlose Besichtigung
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Jetzt verfügbar in ganz Dortmund
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-8 leading-[1.1]">
<span className="animate-word delay-1">Entrümpelung</span>
<span className="animate-word delay-2">&amp;</span>
<span className="animate-word delay-3">Haushaltsauflösung</span>
<span className="animate-word delay-4">in</span>
<span className="animate-word delay-5">Dortmund</span>
<br className="hidden md:block"/>
<span className="text-neutral-400 animate-word delay-6">zuverlässig, diskret &amp; zum Festpreis</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                Unterstützung in ganz Dortmund – von Hörde über die Nordstadt bis nach Hombruch. 
                Jede Entrümpelung wird individuell an Ihre Situation angepasst. 
                Diskret, verlässlich und sorgfältig geplant.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<a className="w-full sm:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all text-sm shadow-sm hover:shadow-md flex items-center justify-center gap-2" href="#kontakt">
<span className="iconify" data-icon="lucide:calendar-check" data-strokeWidth="1.5" data-width="18"></span>
                    Kostenlose Besichtigung
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-700 font-medium rounded-lg transition-all text-sm flex items-center justify-center gap-2" href="#leistungen">
                    Unsere Leistungen
                    <span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-600 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="16"></span>
                    Feste Preise ohne Nachberechnung
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="16"></span>
                    Alles aus einer Hand
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="16"></span>
                    Diskret &amp; empathisch
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="16"></span>
                    Fester Ansprechpartner
                </div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start space-y-2">
<div className="flex text-blue-500">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<span className="text-sm font-semibold text-neutral-900">Exzellente Bewertungen</span>
<span className="text-xs text-neutral-500">Zufriedene Kunden in Dortmund</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-2">
<span className="iconify text-neutral-400" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-sm font-semibold text-neutral-900">Über 1.500 Aufträge/Jahr</span>
<span className="text-xs text-neutral-500">Erfahrung &amp; Routine</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-2">
<span className="iconify text-neutral-400" data-icon="lucide:file-check" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-sm font-semibold text-neutral-900">Nachweisbare Entsorgung</span>
<span className="text-xs text-neutral-500">Professionell dokumentiert</span>
</div>
<div className="flex flex-col items-center md:items-start space-y-2">
<span className="iconify text-neutral-400" data-icon="lucide:clock-4" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-sm font-semibold text-neutral-900">Seit über 10 Jahren</span>
<span className="text-xs text-neutral-500">Im Einsatz vor Ort</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto space-y-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Entrümpelung in Dortmund – klare Lösungen für Ihre aktuelle Situation</h2>
<div className="prose prose-neutral prose-lg text-neutral-600 leading-relaxed font-light">
<p>
                    Eine Entrümpelung ist häufig ein Schritt, den man nicht alltäglich geht. Viele Menschen in Dortmund stehen in Situationen wie einem Umzug, einer Haushaltsauflösung, einem Todesfall oder einer belastenden Wohnlage plötzlich vor der Aufgabe, Räume vollständig zu räumen. Oft bleibt wenig Zeit, manchmal kommt emotionale Belastung hinzu oder es besteht Unsicherheit, wie groß der tatsächliche Aufwand ist.
                </p>
<p>
                    Dortmund bringt zusätzlich Besonderheiten mit sich: enge Straßenzüge in der Nordstadt, große Wohnsiedlungen in Scharnhorst, charmante Altbauten im Kreuzviertel und moderne Neubauten rund um den Phoenix-See. Auch bekannte Bereiche wie der Dortmunder Hafen, das Klinikviertel oder Gewerbeareale wie der Technologiepark haben jeweils eigene Anforderungen.
                </p>
<p>
                    Auch die dienstleistungsrelevanten Entitäten spielen eine wichtige Rolle: lokale Wertstoffhöfe, der städtische Sperrmüllservice, Wohnungsbaugesellschaften sowie Pflegeeinrichtungen. Wenn Sie eine Entrümpelung in Dortmund planen, soll am Ende eines im Vordergrund stehen: ein sicheres Gefühl, ein klarer Ablauf und Räume, die wieder nutzbar sind.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200" id="leistungen">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Leistungsübersicht</h2>
<p className="text-neutral-500 max-w-2xl">Welche Aufgaben Sie in Dortmund ohne Aufwand gelöst bekommen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Wohnungen &amp; Häuser räumen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Ob Altbauwohnung im Kreuzviertel oder Reihenhaus in Aplerbeck – vollständige, strukturierte Räumung zum Festpreis.</p>
</div>

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:boxes" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Haushaltsauflösungen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Veränderung bedeutet oft Stress. Wir begleiten Sie bei Auszug oder Pflegeheim-Einzug mit Ruhe und Organisation.</p>
</div>

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:key" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Wohnungsauflösungen &amp; Übergabe</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Besenreine Übergabe für Vermieter und Verwalter. Wir stellen sicher, dass die Wohnung den Anforderungen entspricht.</p>
</div>

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Nachlassauflösung</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Wir kümmern uns respektvoll um die vollständige Räumung, damit Sie Raum für andere wichtige Dinge haben.</p>
</div>

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Messie-Situationen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Absolute Diskretion und klare Struktur. Unser Team arbeitet ruhig und professionell für neuen Wohnraum.</p>
</div>

<div className="p-8 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:shadow-lg hover:shadow-neutral-200/50 hover:border-blue-200 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-neutral-900" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">Gewerbe, Büros, Lager</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Ob Büro im Technologiepark oder Lagerhalle im Hafen. Wir räumen schnell, damit der Betrieb weiterläuft.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="text-xs text-neutral-500 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span>Keller &amp; Dachboden</div>
<div className="text-xs text-neutral-500 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span>Rückbau &amp; Entkernung</div>
<div className="text-xs text-neutral-500 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span>Reinigung &amp; Übergabe</div>
<div className="text-xs text-neutral-500 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500"></span>Wertanrechnung &amp; Spenden</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">5 Schritte zu vollständiger Entlastung</h2>
<div className="relative border-l border-neutral-200 ml-6 md:ml-12 space-y-12">
<div className="relative pl-12 md:pl-16">
<span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-white bg-blue-500"></span>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">1. Kostenlose Besichtigung</h3>
<p className="text-neutral-500 leading-relaxed">Wir besuchen Sie vor Ort in ganz Dortmund, um Ihre Wünsche zu verstehen und alle Fragen zu klären.</p>
</div>
<div className="relative pl-12 md:pl-16">
<span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-white bg-neutral-200"></span>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">2. Verbindlicher Festpreis</h3>
<p className="text-neutral-500 leading-relaxed">Schriftlich bestätigt, keine Nachberechnung. Sie wissen exakt, welche Leistungen enthalten sind.</p>
</div>
<div className="relative pl-12 md:pl-16">
<span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-white bg-neutral-200"></span>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">3. Termin nach Ihrem Bedarf</h3>
<p className="text-neutral-500 leading-relaxed">Kurzfristig oder langfristig geplant – flexibel nach Ihrem Zeitplan.</p>
</div>
<div className="relative pl-12 md:pl-16">
<span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-white bg-neutral-200"></span>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">4. Räumung &amp; Entsorgung</h3>
<p className="text-neutral-500 leading-relaxed">Sorgfältig, strukturiert, diskret. Fachgerechte Entsorgung über zugelassene Stellen in Dortmund.</p>
</div>
<div className="relative pl-12 md:pl-16">
<span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-2 border-white bg-neutral-900"></span>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">5. Besenreine Übergabe</h3>
<p className="text-neutral-500 leading-relaxed">Sofort nutzbare Räume ohne zusätzlichen Aufwand für Sie.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-neutral-900 text-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Täglich in ganz Dortmund unterwegs</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        Wir sind täglich in Stadtteilen wie Innenstadt-West, Innenstadt-Ost, Hörde, Aplerbeck, Hombruch, Mengede, Huckarde, Eving, Scharnhorst, Brackel und Lütgendortmund im Einsatz.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded bg-neutral-800 text-xs text-neutral-300 border border-neutral-700">Phoenix-See</span>
<span className="px-3 py-1 rounded bg-neutral-800 text-xs text-neutral-300 border border-neutral-700">Kreuzviertel</span>
<span className="px-3 py-1 rounded bg-neutral-800 text-xs text-neutral-300 border border-neutral-700">Westfalenhallen</span>
<span className="px-3 py-1 rounded bg-neutral-800 text-xs text-neutral-300 border border-neutral-700">Klinikviertel</span>
<span className="px-3 py-1 rounded bg-neutral-800 text-xs text-neutral-300 border border-neutral-700">Hafen</span>
</div>
</div>
<div className="flex-1 w-full bg-neutral-800 rounded-xl h-64 flex items-center justify-center border border-neutral-700">
<div className="text-center text-neutral-500">
<span className="iconify mx-auto mb-2 opacity-50" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="32"></span>
<span className="text-sm">Lokales Einsatzgebiet Dortmund</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-sm">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">Planbare Festpreise</h2>
<p className="text-neutral-500">Volle Sicherheit ohne versteckte Posten. Ein Festpreis entsteht immer nach der Besichtigung.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span>
                        Berücksichtigung des Umfangs
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span>
                        Zugänglichkeit der Räume
                    </li>
</ul>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span>
                        Besonderheiten des Objekts
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span>
                        Rückbau oder Reinigung inklusive
                    </li>
</ul>
</div>
<div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center text-sm text-blue-800 font-medium">
                Alles ist enthalten: Transport, Sortierung, Entsorgung und Arbeit vor Ort.
            </div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12">Wenn eine Entrümpelung besonders entlastet</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-3">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
<span className="iconify" data-icon="lucide:flower-2" data-width="18"></span>
</div>
<h3 className="font-medium text-neutral-900">Nachlass oder Todesfall</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Einfühlsame und strukturierte Unterstützung, die Aufgaben abnimmt und Klarheit schafft.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
<span className="iconify" data-icon="lucide:armchair" data-width="18"></span>
</div>
<h3 className="font-medium text-neutral-900">Einzug ins Pflegeheim</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Schnelle Haushaltsauflösung für Ruhe im Übergang, wenn wenig Zeit bleibt.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="18"></span>
</div>
<h3 className="font-medium text-neutral-900">Messie-Wohnung</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Wiederherstellung von Wohnraum – diskret, respektvoll und ohne Bewertung.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
<span className="iconify" data-icon="lucide:truck" data-width="18"></span>
</div>
<h3 className="font-medium text-neutral-900">Umzug &amp; Verkauf</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Sicherheit und Planbarkeit, wenn Termine drängen.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-900 mb-2">
<span className="iconify" data-icon="lucide:factory" data-width="18"></span>
</div>
<h3 className="font-medium text-neutral-900">Gewerbliche Anforderungen</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Kurzfristig freie Flächen für Büros, Lager und Werkstätten.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto border border-neutral-200 bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Für Verwalter, Makler &amp; Unternehmen</h2>
<div className="space-y-4">
<div className="flex gap-4">
<span className="iconify text-blue-500 mt-1" data-icon="lucide:briefcase" data-width="20"></span>
<div>
<span className="block font-medium text-sm text-neutral-900">Verwalter &amp; Makler</span>
<span className="text-sm text-neutral-500">Schnelle Bearbeitung, übergabefertige Wohnungen, Foto-Vorbereitung.</span>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-blue-500 mt-1" data-icon="lucide:building" data-width="20"></span>
<div>
<span className="block font-medium text-sm text-neutral-900">Unternehmen &amp; Bauträger</span>
<span className="text-sm text-neutral-500">Produktionsflächen nutzbar machen, Vorbereitung für Sanierungen.</span>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-blue-500 mt-1" data-icon="lucide:file-text" data-width="20"></span>
<div>
<span className="block font-medium text-sm text-neutral-900">Betreuer &amp; Behörden</span>
<span className="text-sm text-neutral-500">Dokumentierte Prozesse und klare Kommunikation.</span>
</div>
</div>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-64 h-48 bg-neutral-100 rounded-xl flex items-center justify-center border border-neutral-200 border-dashed">
<span className="text-neutral-400 font-medium text-sm">B2B Service Dortmund</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
<div>
<span className="block font-semibold text-neutral-900 mb-2">Verbindlicher Festpreis</span>
<p className="text-sm text-neutral-500 leading-relaxed">Schriftlich bestätigt. Ohne Nachberechnung und ohne spätere Ergänzungen.</p>
</div>
<div>
<span className="block font-semibold text-neutral-900 mb-2">Schnelle Terminverfügbarkeit</span>
<p className="text-sm text-neutral-500 leading-relaxed">Zuverlässige und kurzfristige Slots, wenn Fristen drängen.</p>
</div>
<div>
<span className="block font-semibold text-neutral-900 mb-2">Diskret &amp; Respektvoll</span>
<p className="text-sm text-neutral-500 leading-relaxed">Vertraulicher Umgang bei Nachlass oder Messie-Situationen.</p>
</div>
<div>
<span className="block font-semibold text-neutral-900 mb-2">Ein fester Ansprechpartner</span>
<p className="text-sm text-neutral-500 leading-relaxed">Eine Person, die Ihren Fall kennt und Sie sicher begleitet.</p>
</div>
<div>
<span className="block font-semibold text-neutral-900 mb-2">Nachhaltige Entsorgung</span>
<p className="text-sm text-neutral-500 leading-relaxed">Spenden für Verwertbares, korrekte Entsorgung für den Rest.</p>
</div>
<div>
<span className="block font-semibold text-neutral-900 mb-2">Service aus einer Hand</span>
<p className="text-sm text-neutral-500 leading-relaxed">Keine Koordination mehrerer Firmen nötig. Wir machen alles.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto">
<h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-8">Wichtige Partner in Dortmund</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-4 rounded border border-neutral-200 bg-white">
<span className="font-medium text-neutral-900 block">EDG Entsorgung Dortmund GmbH</span>
<span className="text-xs text-neutral-500">Städtischer Entsorger für Sperrmüll &amp; Recycling</span>
</div>
<div className="p-4 rounded border border-neutral-200 bg-white">
<span className="font-medium text-neutral-900 block">Wertstoffhöfe</span>
<span className="text-xs text-neutral-500">Pottgießerstraße, Eving, Hombruch, Hörde</span>
</div>
<div className="p-4 rounded border border-neutral-200 bg-white">
<span className="font-medium text-neutral-900 block">Ordnungsamt Dortmund</span>
<span className="text-xs text-neutral-500">Halteverbotszonen &amp; Sondergenehmigungen</span>
</div>
<div className="p-4 rounded border border-neutral-200 bg-white">
<span className="font-medium text-neutral-900 block">Wohnungsbaugesellschaften</span>
<span className="text-xs text-neutral-500">Abstimmung bei Übergaben</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-neutral-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12">Häufige Fragen</h2>
<div className="space-y-4">
<details className="group border border-neutral-200 rounded-lg open:bg-neutral-50 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-neutral-900">
                        Wie schnell kann ich in Dortmund einen Termin bekommen?
                        <span className="iconify text-neutral-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                        Oft innerhalb weniger Tage – bei dringenden Fällen auch kurzfristiger.
                    </div>
</details>
<details className="group border border-neutral-200 rounded-lg open:bg-neutral-50 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-neutral-900">
                        Ist der Preis wirklich fest?
                        <span className="iconify text-neutral-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                        Ja, nach der kostenlosen Besichtigung erhalten Sie ein Festpreis-Angebot, das verbindlich ist.
                    </div>
</details>
<details className="group border border-neutral-200 rounded-lg open:bg-neutral-50 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-neutral-900">
                        Muss ich während der Räumung anwesend sein?
                        <span className="iconify text-neutral-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                        Nein, Sie können anwesend sein, müssen aber nicht. Viele Kunden übergeben uns den Schlüssel und kommen zur Abnahme wieder.
                    </div>
</details>
<details className="group border border-neutral-200 rounded-lg open:bg-neutral-50 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-neutral-900">
                        Was passiert mit brauchbaren Gegenständen?
                        <span className="iconify text-neutral-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                        Verwertbares wird gespendet oder über eine Wertanrechnung direkt auf den Preis angerechnet.
                    </div>
</details>
<details className="group border border-neutral-200 rounded-lg open:bg-neutral-50 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-neutral-900">
                        Wie wird in Dortmund entsorgt?
                        <span className="iconify text-neutral-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
                        Wir entsorgen streng nach Vorschrift über zertifizierte Stellen wie die EDG und städtische Wertstoffhöfe.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 text-center" id="kontakt">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Kostenlose Besichtigung in Dortmund</h2>
<p className="text-xl text-neutral-500 mb-10 font-light">Klare Einschätzung, fester Preis, schnelle Unterstützung.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto h-12 px-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
                    Jetzt Besichtigung anfragen
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="18"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
                    Jetzt anrufen
                </button>
</div>
<p className="mt-6 text-xs text-neutral-400">Antwort innerhalb von 30 Minuten.</p>
</div>
</section>
<footer className="py-8 border-t border-neutral-200 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2023 Entrümpelung Dortmund. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-900" href="#">Impressum</a>
<a className="hover:text-neutral-900" href="#">Datenschutz</a>
</div>
</div>
</footer>

    </>
  );
}
