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
      

<div className="bg-zinc-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
<span className="opacity-80">[Angebot]: Zu jedem KI-Conversion-Video-System™ schenken wir dir 400€ ADS-Guthaben - für noch schnellere Ergebnisse!</span>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 uppercase" href="#">MAXIMUS</a>
</div>

<div className="hidden lg:flex space-x-8 items-center text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">First-Class-Partnership</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Speaker</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Events</a>
<a className="hover:text-zinc-900 transition-colors" href="#">YouTube</a>
<span className="text-zinc-300">|</span>
<a className="hover:text-zinc-900 transition-colors" href="tel:02519811567158">(0251) 981 156 7158</a>
</div>

<div className="hidden lg:flex">
<a className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm flex items-center gap-2" href="#contact">
                        Gespräch anfragen
                        <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="flex items-center lg:hidden">
<button className="text-zinc-900 p-2">
<span className="iconify w-6 h-6" data-icon="lucide:menu"></span>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-20 pb-24 overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="iconify" data-icon="lucide:sparkles"></span>
                Für Anbieter hochpreisiger Angebote
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                Bereit für deinen nächsten <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Wachstumssprung?</span>
</h1>
<p className="mt-4 text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
                Wir bauen dir ein KI-Conversion-Video-System™, das dein Fundament für 100k/Monat liefert. Egal, ob du ein Business starten, als etablierter Unternehmer skalieren oder einfach nach einer funktionierenden Agenturdienstleistung suchst.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white rounded-lg font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-zinc-800 transition-all flex justify-center items-center gap-2" href="#contact">
                    Jetzt Vision-Call anfragen
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-all flex justify-center items-center gap-2" href="#video">
<span className="iconify" data-icon="lucide:play-circle"></span>
                    Strategievideo ansehen (8 min)
                </a>
</div>
<div className="mt-12 text-sm text-zinc-400">
                Mehr Kunden. Mehr Umsatz. Mehr Unabhängigkeit.
            </div>

<div className="mt-16 text-left max-w-4xl mx-auto bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
<h3 className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Warum solltest du den unverbindlichen Vision-Call jetzt anfragen? <span className="text-zinc-500 font-normal">[limitiertes Angebot!]</span></h3>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<span className="iconify text-zinc-900 mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<p className="text-sm"><strong>Klarheit statt Verwirrung:</strong> Erkenne endlich, was es WIRKLICH braucht (und was Du Dir sparen kannst), um Deine Umsatzgrenze zu knacken.</p>
</li>
<li className="flex gap-3 items-start">
<span className="iconify text-zinc-900 mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<p className="text-sm"><strong>Individualität statt Massenabfertigung:</strong> Erfahre, woran es speziell bei Dir hängt, dass Deine Umsätze noch nicht dauerhaft in (hohen) fünfstelligen Bereichen liegen.</p>
</li>
<li className="flex gap-3 items-start">
<span className="iconify text-zinc-900 mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<p className="text-sm"><strong>Strategie statt Trial-and-Error:</strong> Erarbeite mit uns gemeinsam Deinen persönlichen strategischen Fahrplan.</p>
</li>
<li className="flex gap-3 items-start">
<span className="iconify text-zinc-900 mt-1 flex-shrink-0" data-icon="lucide:check-circle"></span>
<p className="text-sm"><strong>Das Geheimnis der Hochpreiskundengewinnung:</strong> Erfahre das simple Schritt-für-Schritt-System, mit dem Sebastian und seine Kunden seit Jahren planbar Hochpreiskunden gewinnen.</p>
</li>
</ul>
<div className="mt-6 pt-6 border-t border-zinc-200 text-sm text-zinc-500 flex items-center gap-2">
<span className="iconify" data-icon="lucide:youtube"></span>
<a className="underline hover:text-zinc-800" href="#">Playlist zum Ablauf des Termins ansehen</a>
</div>
</div>
</div>
</header>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-zinc-200/50">
<div className="p-2">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">302+</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500 mt-1">KI-Systeme</div>
</div>
<div className="p-2">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">2,9x</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500 mt-1">Mehr Umsatz</div>
</div>
<div className="p-2">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">7M+</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500 mt-1">Gesamtumsatz</div>
</div>
<div className="p-2">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">95%</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500 mt-1">Begeisterung</div>
</div>
<div className="p-2 col-span-2 md:col-span-1">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">3,3x</div>
<div className="text-xs font-medium uppercase tracking-wide text-zinc-500 mt-1">Mehr Anfragen</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<div className="sticky top-24">
<span className="text-sm font-semibold text-red-600 tracking-wide uppercase mb-2 block">Problem</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">
                            3 Gründe, aus denen Unternehmer scheitern
                        </h2>
<p className="text-zinc-500 mb-8">
                            Das Problem ist nicht dein Einsatz. Das Problem ist strukturell.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" href="#contact">
                            Jetzt Vision-Call Anfragen
                            <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
<div className="lg:col-span-8 space-y-8">

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:puzzle"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Grund 1: Du hast kein ganzheitliches System</h3>
<p className="text-zinc-600 leading-relaxed">
                            Du kaufst Teillösungen. Mal funktioniert dein Marketing, dann bricht der Vertrieb weg. Du optimierst Einzelteile – aber nie das Ganze. Und genau deshalb bleibst du am selben Umsatzplateau hängen.
                        </p>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:funnel"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Grund 2: Du hast keinen Funnel, der planbar Kunden liefert</h3>
<p className="text-zinc-600 leading-relaxed">
                            Ohne planbaren Funnel gibt es kein Wachstum. Selbst wenn du weißt, wie es theoretisch funktioniert, scheiterst du an Technik und Integration. Also kaufst du wieder eine Teillösung.
                        </p>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200 mb-4 shadow-sm">
<span className="iconify text-zinc-900" data-icon="lucide:users"></span>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Grund 3: Du hast keinen Partner, der mit dir umsetzt</h3>
<p className="text-zinc-600 leading-relaxed">
                            Du hast niemanden, der Verantwortung übernimmt. Keinen Entscheider auf Augenhöhe. Und genau deshalb bleibt Wachstum für dich anstrengend, unsicher und langsamer, als es sein müsste.
                        </p>
</div>
</div>
</div>

<div className="mt-20 text-center max-w-2xl mx-auto">
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4">Was wäre, wenn ein System all diese Probleme einfach lösen könnte?</h3>
<p className="text-zinc-500 mb-8">Mit unserem Maximus KI-Conversion-Video-System™ tust du genau das! Verliere keine weitere Zeit.</p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors" href="#contact">
                    Vision-Call buchen
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<span className="text-sm font-semibold text-zinc-400 tracking-wide uppercase mb-2 block">Solution</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Deine 7 Schritte zum Erfolg</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300">
<div className="text-zinc-500 font-mono text-sm mb-4">01</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Skalierende Business-Architektur</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Gemeinsam identifizieren wir den Engpass und designen eine holistische Architektur, die Grundlage für siebenstellige Jahresumsätze.</p>
</div>

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300">
<div className="text-zinc-500 font-mono text-sm mb-4">02</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Unwiderstehliches Angebot</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Mithilfe unseres KI-Prozesses erschaffen wir ein Produkt-Design, das Menschen Schlange stehen lässt statt überzeugt werden zu müssen.</p>
</div>

<div className="p-6 border border-zinc-700 rounded-xl bg-zinc-800 shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-2"><span className="iconify text-zinc-500" data-icon="lucide:cpu"></span></div>
<div className="text-zinc-400 font-mono text-sm mb-4">03 (Kern)</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-white">KI-Conversion-Video-System</h3>
<p className="text-zinc-300 text-sm leading-relaxed">Wir liefern 20-50 Anfragen pro Woche. Unser System generiert automatisch neue Anfragen - selbst wenn du schläfst. (Dauer: 14 Tage)</p>
</div>

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300">
<div className="text-zinc-500 font-mono text-sm mb-4">04</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Mit Leichtigkeit verkaufen</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Souverän. Klar. Ohne Druck. Du führst strukturierte Gespräche und triffst klare Entscheidungen. Verkauf wird zur Bestellannahme.</p>
</div>

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300">
<div className="text-zinc-500 font-mono text-sm mb-4">05</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">1Mio+ Systeme aufbauen</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Systematisierung aller Prozesse. Das Wissen wird unabhängig in deinem Business gespeichert. Nie wieder Abhängigkeit.</p>
</div>

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300">
<div className="text-zinc-500 font-mono text-sm mb-4">06</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Skalierung auf 100k+</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Strukturiert und datenbasiert. Team recruiting, Traffic erhöhen, AD-Budgets steigern. Mehr investieren, mehr erreichen.</p>
</div>

<div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 transition-colors duration-300 md:col-span-2 lg:col-span-3">
<div className="text-zinc-500 font-mono text-sm mb-4">07</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Unternehmer- &amp; Millionärsidentität</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">Wir arbeiten an Entscheidungsqualität, Leadership, Standards, Fokus und Energie. Du wirst zur Person, die Wachstum trägt. Das Ergebnis? Ein Business, das planbar hohes Einkommen liefert und dir Freiheit schenkt.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="bg-white text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-all inline-flex items-center gap-2" href="#contact">
                    Jetzt Vision-Call anfragen
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-sm font-semibold text-zinc-500 tracking-wide uppercase mb-2 block">Deliverables</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Das vollständige First-Class-Mentoring™</h2>
<p className="text-zinc-500">Kein Coaching-Programm, sondern ein operatives Wachstumssystem.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:layout-dashboard"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">Holistic Business System</h3>
<p className="text-sm text-zinc-600">Vollständiges Business-Mentoring inkl. Einzelmentoring. Keine Gruppenbeschallung. Klare Entscheidungen.</p>
</div>

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:library"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">Maximus First Class Academy</h3>
<p className="text-sm text-zinc-600">Alle Frameworks, Systeme und Trainings an einem Ort. Strukturiertes Wissen, abrufbar und skalierbar.</p>
</div>

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:megaphone"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">Komplette Marketing-Agenturleistung</h3>
<p className="text-sm text-zinc-600">Wir planen, bauen und implementieren deinen gesamten Funnel – von der Architektur bis zur Conversion.</p>
</div>

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:video"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">KI-Conversion-Video</h3>
<p className="text-sm text-zinc-600">Dein vollständig produziertes &amp; geschnittenes Video. Kein DIY. Ein einsatzbereites Conversion-Asset.</p>
</div>

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:settings"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">100 % Technik-Abnahme</h3>
<p className="text-sm text-zinc-600">Tracking, Automationen, Übergaben, Systeme – wir prüfen alles. Du musst dich um nichts kümmern.</p>
</div>

<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<span className="iconify text-zinc-900 w-6 h-6 mb-4" data-icon="lucide:heart-handshake"></span>
<h3 className="font-semibold text-zinc-900 mb-2 tracking-tight">VIP-Support &amp; Partnerschaft</h3>
<p className="text-sm text-zinc-600">Tägliche Begleitung, kurze Wege. Wir tragen Verantwortung mit dir und arbeiten als wäre es unser Business.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Das sagen unsere Teilnehmer</h2>
<p className="mt-4 text-zinc-500">Echte Ergebnisse aus verschiedenen Branchen.</p>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-8 lg:p-12 mb-12 shadow-sm">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="aspect-video bg-zinc-100 rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
<span className="iconify w-16 h-16 text-zinc-300 group-hover:text-zinc-900 transition-colors" data-icon="lucide:play-circle"></span>
<div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-medium">Alexandra &amp; Christian</div>
</div>
<div>
<div className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-4 font-medium">103.000€ in 12 Wochen</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-4 tracking-tight">Business-Transformation ohne Werbekosten</h3>
<div className="space-y-4 text-sm text-zinc-600">
<p><strong className="text-zinc-900">Problem:</strong> Stagnation bei Onlinekursen für 300-500€, keine signifikante Umsatzsteigerung.</p>
<p><strong className="text-zinc-900">Lösung:</strong> Entwicklung eines hochpreisigen Angebots, Mindset-Shift, optimale Nutzung vorhandener Ressourcen.</p>
<p><strong className="text-zinc-900">Ergebnis:</strong> 103k€ Umsatz in 12 Wochen. Selbstsicherheit gewonnen. Bereit für Ads.</p>
</div>
</div>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">A</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Angela</div>
<div className="text-xs text-zinc-500">Coach</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">45.000€ in 30 Tagen</h4>
<p className="text-sm text-zinc-600 mb-4">Wollte endlich durchbrechen zur siebenstelligen Marke. Durch radikale Ehrlichkeit und strategische Arbeit an Positionierung Klarheit gewonnen.</p>
<div className="text-xs text-zinc-400 border-t border-zinc-100 pt-3 mt-3">
                        Ergebnis: Siebenstellige Vision in greifbarer Nähe.
                    </div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">N</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Nicole</div>
<div className="text-xs text-zinc-500">Leadership-Trainerin</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Perfektes Setting kreiert</h4>
<p className="text-sm text-zinc-600 mb-4">Wollte als Expertin sichtbar werden. Maximus bot das perfekte Umfeld für Tiefe und Wirkung.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">K</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Kristina</div>
<div className="text-xs text-zinc-500">Unternehmerin</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Rekordumsatz in Monat 1</h4>
<p className="text-sm text-zinc-600 mb-4">Vorher oft an Ads gescheitert. Mit dem Maximus-Hochpreis-Evergreen-System neuen Umsatzrekord erzielt und stabilisiert.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">S</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Sebastian</div>
<div className="text-xs text-zinc-500">Coach</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">10 erste Kunden in 14 Tagen</h4>
<p className="text-sm text-zinc-600 mb-4">Hatte nur eine Idee. Produkt in &lt;14 Tagen kreiert, Webinar gehalten (50+ Teilnehmer) und direkt verkauft.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">F</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Frank Herzberg</div>
<div className="text-xs text-zinc-500">Musik-Coach</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Umsatz verdoppelt, 34% weniger Zeit</h4>
<p className="text-sm text-zinc-600 mb-4">Vom Online-Kurs zum Gruppencoaching. Gezielte Werbekampagnen und Optimierung.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 font-bold">S</div>
<div>
<div className="font-semibold text-zinc-900 text-sm">Susanne</div>
<div className="text-xs text-zinc-500">Expertin</div>
</div>
</div>
<h4 className="font-medium text-zinc-900 mb-2">Umsatz verdreifacht</h4>
<p className="text-sm text-zinc-600 mb-4">Hing am Plateau fest. Durch neue Strategie, die zur Persönlichkeit passt, Umsatz in 4 Wochen verdreifacht und ersten Mitarbeiter eingestellt.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 flex items-center justify-center gap-2 mx-auto">
<span className="iconify" data-icon="lucide:plus-circle"></span>
                    22+ weitere Erfolgsgeschichten ansehen
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<span className="text-sm font-semibold text-zinc-500 tracking-wide uppercase mb-2 block">Qualification</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">Erfüllst du die Voraussetzungen?</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-medium text-sm">1</span>
<p className="text-zinc-600 text-sm leading-relaxed">Du bist ambitioniert, handelst eigenverantwortlich und weißt, dass Du selbst Schöpfer Deiner Zukunft bist.</p>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-medium text-sm">2</span>
<p className="text-zinc-600 text-sm leading-relaxed">Du verkaufst Produkte/Dienstleistungen ab 1.500 € (oder bist bereit, ein solches Produkt zu entwickeln).</p>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-medium text-sm">3</span>
<p className="text-zinc-600 text-sm leading-relaxed">Du bist bereit, das System wirklich durchzuziehen.</p>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-medium text-sm">4</span>
<p className="text-zinc-600 text-sm leading-relaxed">Du suchst nach einem Sparringspartner, um dein volles Potenzial zu entfalten.</p>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-medium text-sm">5</span>
<p className="text-zinc-600 text-sm leading-relaxed">Du möchtest neue Umsatzrekorde erzielen.</p>
</li>
</ul>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-zinc-300 rounded-full flex-shrink-0 overflow-hidden">

<span className="iconify w-full h-full text-zinc-400" data-icon="lucide:user"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">Über Sebastian Skalski</h3>
<p className="text-sm text-zinc-500">Maximus Gründer &amp; Experte</p>
</div>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">
                        Als Unternehmensberater, Marketingexperte und Speaker liefert Sebastian Unternehmern schnelleres, messbares und nachhaltiges Wachstum. 
                        Durch die Hilfe seines Teams erhöhen Unternehmen nicht nur Sichtbarkeit und Gewinne, sondern sparen hunderte Stunden ihrer Zeit ein.
                    </p>
<a className="text-sm font-medium text-zinc-900 underline hover:text-zinc-700" href="#">Weiterlesen</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Gehe jetzt den nächsten Schritt</h2>
<p className="text-zinc-400">Starte ein neues Kapitel.</p>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
<div className="text-center">
<div className="text-5xl font-semibold text-zinc-800 tracking-tighter mb-4">01</div>
<h3 className="text-xl font-medium mb-3">Bewirb Dich Jetzt!</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Frage jetzt Dein exklusives Erstgespräch an. Entwickle mit einem Experten Deinen individuellen Erfolgsplan.</p>
</div>
<div className="text-center">
<div className="text-5xl font-semibold text-zinc-800 tracking-tighter mb-4">02</div>
<h3 className="text-xl font-medium mb-3">Erhalte Deine Einladung</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Wenn wir das Potenzial sehen, erhältst Du eine persönliche Einladung für eine unserer Begleitungen.</p>
</div>
<div className="text-center">
<div className="text-5xl font-semibold text-zinc-800 tracking-tighter mb-4">03</div>
<h3 className="text-xl font-medium mb-3">Feiere Deinen Erfolg</h3>
<p className="text-sm text-zinc-400 leading-relaxed">86% unserer Teilnehmer gewinnen mit der ersten Promotion in &lt;29 Tagen erste Anfragen. Werde auch Du zur Erfolgsgeschichte.</p>
</div>
</div>
<div className="mt-16 text-center space-x-4">
<a className="inline-block bg-white text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-all" href="#contact">Jetzt Expansion-Call buchen</a>
<a className="inline-block text-zinc-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all underline" href="#">Strategievideo ansehen</a>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Häufig gestellte Fragen</h2>
<div className="space-y-4">
<details className="group bg-zinc-50 rounded-lg border border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>Was ist das Maximus Profit&amp;Expansion-System™?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed">
                        Das System ist eine holistische Methode zur Skalierung von Hochpreis-Angeboten durch KI-gestützte Video-Sales-Letter und automatisierte Prozesse.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>Für wen funktioniert das System?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed">
                        Für Coaches, Berater, Agenturen und Dienstleister, die ein hochpreisiges Angebot (ab 1.500€) haben oder entwickeln wollen.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>Was bedeutet "Wir installieren das System für dich"?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed">
                        Wir übernehmen die technische Einrichtung, den Funnel-Bau, das Tracking und die Video-Produktion. Es ist ein "Done-With-You" und "Done-For-You" Hybrid.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>Brauche ich dafür Follower?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed">
                        Nein. Das System basiert auf Paid Traffic und Funnels, nicht auf organischer Reichweite oder Influencer-Status.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-zinc-900">
<span>Funktioniert das auch für B2B?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-zinc-600 p-5 pt-0 text-sm leading-relaxed">
                        Ja, absolut. Viele unserer erfolgreichsten Case Studies kommen aus dem B2B-Bereich.
                    </div>
</details>
</div>
<p className="text-center text-sm text-zinc-400 mt-8">Weitere Fragen klären wir gerne im persönlichen Gespräch.</p>
</div>
</section>

<footer className="bg-white pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 mb-24">

<div>
<h2 className="text-4xl font-semibold tracking-tighter text-zinc-900 mb-6">Lass uns Geschichte schreiben.</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        Bewirb Dich jetzt für Dein exklusives Erstgespräch, erhalte Deinen Wachstumsplan &amp; starte in ein Leben mit noch mehr Erfolg, Umsatz und Unabhängigkeit.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900">
<span className="iconify" data-icon="lucide:user"></span>
</div>
<div>
<div className="text-sm text-zinc-500">Maximus Gründer</div>
<div className="font-medium text-zinc-900">Sebastian Skalski</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900">
<span className="iconify" data-icon="lucide:phone"></span>
</div>
<div>
<div className="text-sm text-zinc-500">Telefon</div>
<div className="font-medium text-zinc-900">(0251) 981 156 7158</div>
</div>
</div>
</div>
<div className="mt-12 p-6 bg-zinc-50 rounded-xl border border-zinc-200 inline-block">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-green-600" data-icon="lucide:check-circle"></span>
<span className="text-sm font-semibold text-zinc-900">211+ erfolgreiche Teilnehmer</span>
</div>
<p className="text-xs text-zinc-500">Wir. Liefern. Ergebnisse.</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8">
<h3 className="text-xl font-semibold mb-6 tracking-tight">Jetzt Expansion-Call buchen</h3>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1">Dein Name</label>
<input className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1">Deine E-Mail</label>
<input className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-700 mb-1">Deine Telefonnummer</label>
<input className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" type="tel"/>
</div>
<div className="pt-2">
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-lg hover:bg-zinc-800 transition-all flex justify-center items-center gap-2" type="button">
                                Jetzt anfragen
                                <span className="iconify" data-icon="lucide:send"></span>
</button>
</div>
<p className="text-xs text-zinc-400 text-center mt-4">
                            Mit dem Abschicken meiner Daten erkläre ich meine Einwilligung zur Kontaktaufnahme durch Maximus.
                        </p>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8">
<p className="text-xs text-zinc-400 mb-8 leading-relaxed max-w-4xl">
                    Disclaimer: All case studies mentioned here are from real participants who share their genuine opinions. No one was compensated in any way for these videos! This is NOT a “get rich quick” program. We have been in the market for more than seven years and place great value on professionalism, excellence, and stability.
                </p>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
<div className="flex gap-6">
<a className="hover:text-zinc-900" href="#">Home</a>
<a className="hover:text-zinc-900" href="#">Impressum</a>
<a className="hover:text-zinc-900" href="#">Datenschutz</a>
<a className="hover:text-zinc-900" href="#">AGBs</a>
</div>
<div className="flex gap-4">
<a className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 text-zinc-900" href="#"><span className="iconify" data-icon="lucide:facebook"></span></a>
<a className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 text-zinc-900" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
<a className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 text-zinc-900" href="#"><span className="iconify" data-icon="lucide:youtube"></span></a>
<a className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 text-zinc-900" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
</div>
</div>
<div className="mt-8 text-center text-xs text-zinc-300">
                    © 2023 Maximus. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
