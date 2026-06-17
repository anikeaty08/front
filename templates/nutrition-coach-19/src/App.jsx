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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<span className="bg-emerald-50 text-emerald-600 p-1 rounded-md">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
                WEBER.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#philosophie">Philosophie</a>
<a className="hover:text-zinc-900 transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-zinc-900 transition-colors" href="#erfolge">Erfolge</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-900 hidden sm:block hover:text-emerald-600 transition-colors" href="#">Login</a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2" href="#kontakt">
                    Erstgespräch buchen
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 hero-gradient overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Jetzt neue Plätze für Juni verfügbar
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-8">
                Ernährung, die sich <br/>
<span className="text-zinc-400">deinem Leben anpasst.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Wissenschaftlich fundiertes Ernährungscoaching für mehr Energie, Fokus und langfristige Gesundheit. Kein Verzicht, sondern Balance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200" href="#kontakt">
                    Kostenloses Erstgespräch
                    <iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium text-sm hover:bg-zinc-50 transition-all flex items-center justify-center" href="#leistungen">
                    Mehr erfahren
                </a>
</div>

<div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-400 grayscale opacity-70">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">ZERTIFIZIERT</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">500+ KLIENTEN</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide">4.9/5 BEWERTUNG</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
</section>

<section className="py-24 px-6 bg-white" id="philosophie">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-4">Ein ganzheitlicher Ansatz</h2>
<p className="text-zinc-500">
                    Gesundheit ist mehr als nur Kalorien zählen. Meine Methode basiert auf drei Säulen, die Körper und Geist in Einklang bringen.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 transition-all duration-300 card-hover group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dna-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Datenbasiert</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Keine Mythen, sondern Fakten. Wir analysieren deine Blutwerte, deinen Stoffwechsel und deinen Energiebedarf für präzise Empfehlungen.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 transition-all duration-300 card-hover group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Individuell</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Dein Alltag diktiert den Plan, nicht umgekehrt. Ob Business-Lunch oder Familienessen – wir finden Lösungen, die funktionieren.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-zinc-200 transition-all duration-300 card-hover group">
<div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">Nachhaltig</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Keine Jo-Jo-Effekte durch Crash-Diäten. Wir etablieren Routinen, die du ein Leben lang beibehalten kannst und willst.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl bg-zinc-900 p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md mb-6 border border-white/10">
                            App Coaching
                        </div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Dein Coach in der Hosentasche.</h3>
<p className="text-zinc-400 max-w-md">
                            Mit meiner exklusiven App hast du Zugriff auf Ernährungspläne, Rezepte und direkten Chat-Support. Tracke deine Fortschritte in Echtzeit.
                        </p>
</div>
<div className="relative z-10 mt-8">
<div className="flex items-center gap-4">
<div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
<iconify-icon className="text-emerald-400" icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
<iconify-icon className="text-emerald-400" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
<iconify-icon className="text-emerald-400" icon="solar:clipboard-list-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-2/5 h-3/5 bg-zinc-800 rounded-tl-2xl border-t border-l border-zinc-700 p-4 translate-y-4 translate-x-4 transition-transform group-hover:translate-y-2 group-hover:translate-x-2 hidden md:block">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-zinc-600"></div>
<div className="h-2 w-20 bg-zinc-700 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-16 w-full bg-zinc-700/50 rounded-lg"></div>
<div className="h-16 w-full bg-zinc-700/50 rounded-lg"></div>
</div>
</div>
</div>

<div className="rounded-3xl bg-emerald-50 border border-emerald-100 p-8 flex flex-col justify-center">
<iconify-icon className="text-emerald-600 mb-4" icon="solar:chef-hat-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 mb-2">500+ Rezepte</h3>
<p className="text-sm text-zinc-600">Schnell, gesund und lecker. Filterbar nach Vorlieben und Unverträglichkeiten.</p>
</div>

<div className="rounded-3xl bg-white border border-zinc-200 p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-zinc-50 opacity-50">
<iconify-icon icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Tracking</h3>
<p className="text-sm text-zinc-500">Visualisiere deine Erfolge. Gewicht, Maße und Wohlbefinden auf einen Blick.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="leistungen">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-4">Angebote &amp; Preise</h2>
<p className="text-zinc-500 max-w-md">Transparente Pakete für jedes Ziel. Starte heute mit deiner Transformation.</p>
</div>
<div className="flex items-center p-1 bg-white border border-zinc-200 rounded-lg">
<button className="px-4 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md shadow-sm">Privatpersonen</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900">Unternehmen</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-zinc-900">Kickstart</h3>
<p className="text-sm text-zinc-500 mt-2 min-h-[40px]">Für den perfekten Einstieg und eine Status-Quo Analyse.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-zinc-900">149€</span>
<span className="text-zinc-400 text-sm">/ einmalig</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            60 Min. Anamnese-Gespräch
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Auswertung Ernährungstagebuch
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Handlungsempfehlungen PDF
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-zinc-900 transition-colors" href="#">Auswählen</a>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col relative shadow-2xl shadow-emerald-900/20">
<div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl tracking-wider uppercase">Beliebt</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Transformation</h3>
<p className="text-sm text-zinc-400 mt-2 min-h-[40px]">12 Wochen intensive Begleitung für sichtbare Ergebnisse.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">199€</span>
<span className="text-zinc-500 text-sm">/ Monat</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Individueller Ernährungsplan
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            Wöchentliche Check-ins (Video)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            24/7 WhatsApp Support
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
                            App Zugang inkl. Rezepte
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors" href="#">Jetzt starten</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-zinc-900">Lifestyle</h3>
<p className="text-sm text-zinc-500 mt-2 min-h-[40px]">Langfristige Betreuung zur Festigung der Routinen.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-zinc-900">89€</span>
<span className="text-zinc-400 text-sm">/ Monat</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Monatlicher Deep-Dive Call
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Plananpassung bei Bedarf
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-emerald-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Community Zugang
                        </li>
</ul>
<a className="w-full block text-center py-2.5 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:border-zinc-900 transition-colors" href="#">Auswählen</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="kontakt">
<div className="max-w-4xl mx-auto">
<div className="bg-emerald-50 rounded-3xl p-8 md:p-16 text-center border border-emerald-100">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-6">Bereit für dein gesünderes Ich?</h2>
<p className="text-zinc-600 mb-8 max-w-xl mx-auto">
                    Lass uns in einem unverbindlichen Kennenlerngespräch herausfinden, wie ich dich unterstützen kann.
                </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm" id="email" placeholder="deine@email.com" type="email"/>
</div>
<button className="w-full py-3 bg-zinc-900 text-white rounded-xl font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" type="submit">
                        Kostenlos anfragen
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-center text-zinc-400 mt-4">Kein Spam. 100% vertraulich.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-zinc-900 flex items-center gap-2 mb-4" href="#">
<span className="text-emerald-600">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</span>
                        WEBER.
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Moderne Ernährungsberatung für High-Performer und Gesundheitsbewusste.
                    </p>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Navigation</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Startseite</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Über mich</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Leistungen</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Rechtliches</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 text-sm mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-emerald-600 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2023 Elias Weber Ernährungsberatung. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-[10px] text-zinc-500 font-medium">System operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
