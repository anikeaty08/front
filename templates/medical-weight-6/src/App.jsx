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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
<a className="flex items-center space-x-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="self-center text-xl font-semibold tracking-tighter text-gray-900 group-hover:text-purple-700 transition-colors">ViaSlim</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all border border-transparent shadow-sm" href="#check">
                    App herunterladen
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors" href="#how">So funktioniert's</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors" href="#science">Wissenschaft</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 transition-colors" href="#pricing">Preise</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-grid">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
<div className="px-4 mx-auto max-w-7xl relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
</span>
                        Jetzt in der Schweiz verfügbar
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                        Medizinisches Abnehmen, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">neu programmiert.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 font-light leading-relaxed max-w-lg">
                        Kombiniere moderne GLP-1 Medikamente mit unserer intelligenten App. Schweizer Ärzte, datengestütztes Tracking und persönliche Begleitung – alles in deiner Tasche.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200" href="#">
                            Eignung prüfen
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all" href="#">
                            App entdecken
                        </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-gray-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<p>Vertraut von über 2.000 Patienten in CH</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/40 to-emerald-100/40 rounded-full blur-3xl"></div>

<div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl app-shadow border border-gray-800 rotate-[-6deg] lg:rotate-[-3deg] hover:rotate-0 transition-transform duration-700">

<div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="h-6 w-full flex justify-between items-center px-6 pt-2">
<span className="text-[10px] font-medium text-gray-900">9:41</span>
<div className="flex gap-1">
<div className="w-4 h-2.5 bg-gray-900 rounded-[2px]"></div>
</div>
</div>

<div className="p-6 flex-1 flex flex-col bg-gray-50/50">
<div className="flex justify-between items-center mb-6">
<div>
<p className="text-xs text-gray-500">Guten Morgen,</p>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Sarah</h3>
</div>
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Aktuelles Gewicht</span>
<span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-medium">-2.4 kg</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">74.2 <span className="text-sm font-normal text-gray-400">kg</span></div>

<div className="h-12 flex items-end justify-between gap-1">
<div className="w-full bg-purple-100 rounded-t h-[40%]"></div>
<div className="w-full bg-purple-100 rounded-t h-[50%]"></div>
<div className="w-full bg-purple-100 rounded-t h-[45%]"></div>
<div className="w-full bg-purple-100 rounded-t h-[60%]"></div>
<div className="w-full bg-purple-100 rounded-t h-[55%]"></div>
<div className="w-full bg-purple-600 rounded-t h-[70%]"></div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
<iconify-icon icon="lucide:pill" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Wöchentliche Dosis</h4>
<p className="text-xs text-gray-400">Heute fällig</p>
</div>
<div className="ml-auto w-6 h-6 rounded-full border-2 border-emerald-200 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-emerald-500"></div>
</div>
</div>
</div>

<div className="bg-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-200 text-white mt-auto">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="lucide:stethoscope" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Dr. Weber</span>
</div>
<p className="text-xs text-white/90 leading-relaxed">
                                        "Die Fortschritte sehen super aus, Sarah. Wir können die Dosis nächsten Monat anpassen."
                                    </p>
</div>
</div>

<div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
<iconify-icon className="text-purple-600" icon="lucide:home" width="24"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:bar-chart-2" width="24"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:message-square" width="24"></iconify-icon>
<iconify-icon className="text-gray-300" icon="lucide:user" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-20 right-0 md:-right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase">Erfolg</p>
<p className="text-sm font-semibold text-gray-900">-15% Körpergewicht</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white py-10">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-sm text-gray-400 font-medium mb-6">WISSENSCHAFTLICH BASIERT &amp; ZUGELASSEN</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="lucide:shield-check"></iconify-icon> SwissMedical</span>
<span className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="lucide:plus-circle"></iconify-icon> HealthGuard</span>
<span className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="lucide:award"></iconify-icon> Approved</span>
<span className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="lucide:flask-conical"></iconify-icon> ClinicalLab</span>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="how">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                    Technologie trifft Biologie.
                </h2>
<p className="text-gray-500 font-light text-lg">
                    Der alte Weg zum Abnehmen ist kaputt. ViaSlim nutzt Telemedizin und GLP-1 Wirkstoffe für nachhaltige Ergebnisse ohne Jo-Jo-Effekt.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smartphone-nfc" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Digitale Anamnese</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Fülle unseren medizinischen Fragebogen in der App aus. Unser Algorithmus prüft deine Eignung sofort, bevor ein Schweizer Arzt sie validiert.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:test-tube-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">GLP-1 Therapie</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Wir verschreiben moderne Medikamente (wie Wegovy® oder Ozempic®), die dein Sättigungsgefühl regulieren. Diskret per Post geliefert.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:line-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-3">Smartes Tracking</h3>
<p className="text-gray-500 text-sm leading-relaxed">
                        Dokumentiere Nebenwirkungen und Gewicht direkt in der App. Dein Arzt überwacht deine Daten in Echtzeit und passt die Dosis an.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-md">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                        ViaSlim App 2.0
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                        Dein Arzt in der Hosentasche.
                    </h2>
<p className="text-gray-400 text-lg font-light mb-8 max-w-md">
                        Keine Wartezimmer. Keine peinlichen Gespräche. Kommuniziere via Chat mit deinem Behandlungsteam und verfolge deinen biologischen Fortschritt.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 bg-purple-500/20 p-1 rounded text-purple-400">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-gray-300 text-sm">24/7 Chat-Support mit medizinischem Fachpersonal</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-purple-500/20 p-1 rounded text-purple-400">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-gray-300 text-sm">Erinnerungen für Injektionen und Refills</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-purple-500/20 p-1 rounded text-purple-400">
<iconify-icon icon="lucide:check" strokeWidth="3" width="14"></iconify-icon>
</div>
<span className="text-gray-300 text-sm">Integration mit Apple Health &amp; Google Fit</span>
</li>
</ul>
<button className="bg-white text-gray-900 hover:bg-gray-200 transition px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2">
<iconify-icon icon="lucide:apple" width="18"></iconify-icon>
                        Im App Store laden
                    </button>
</div>

<div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-2 shadow-2xl">
<div className="bg-[#0f1115] rounded-xl overflow-hidden border border-gray-800">

<div className="border-b border-gray-800 p-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono">viaslim_dashboard.exe</div>
</div>

<div className="p-6 grid grid-cols-2 gap-4">

<div className="col-span-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
<div className="flex justify-between items-center mb-4">
<h4 className="text-gray-300 text-sm">Gewichtsverlauf</h4>
<iconify-icon className="text-emerald-400" icon="lucide:trending-down"></iconify-icon>
</div>
<div className="flex items-end gap-1 h-24">
<div className="w-full bg-purple-500/20 rounded-t h-[80%]"></div>
<div className="w-full bg-purple-500/20 rounded-t h-[75%]"></div>
<div className="w-full bg-purple-500/20 rounded-t h-[70%]"></div>
<div className="w-full bg-purple-500/20 rounded-t h-[60%]"></div>
<div className="w-full bg-purple-500/20 rounded-t h-[55%]"></div>
<div className="w-full bg-purple-500/20 rounded-t h-[48%]"></div>
<div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t h-[40%]"></div>
</div>
</div>

<div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
<h4 className="text-gray-400 text-xs mb-1">Nächste Dosis</h4>
<div className="text-xl font-medium text-white">Do, 14. Okt</div>
<div className="text-xs text-purple-400 mt-2 flex items-center gap-1">
<iconify-icon icon="lucide:clock" width="10"></iconify-icon> 08:00 Uhr
                                </div>
</div>

<div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-900/50">
<h4 className="text-gray-400 text-xs mb-1">BMI Status</h4>
<div className="text-xl font-medium text-emerald-400">Verbessert</div>
<div className="text-xs text-emerald-600 mt-2">-2.1 Punkte</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white" id="pricing">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Transparente Preise</h2>
<p className="text-gray-500">Starte jetzt deine Reise. Keine versteckten Kosten.</p>
</div>
<div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Empfohlen</span>
</div>
<div className="p-8 md:p-10">
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold tracking-tighter text-gray-900">CHF 49</span>
<span className="text-gray-500">/ Monat</span>
</div>
<p className="text-sm text-gray-500 mb-8">+ Medikamentenkosten (werden oft von der Zusatzversicherung übernommen)</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Ärztliche Anamnese &amp; Rezeptausstellung</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Zugang zur ViaSlim App &amp; Tracking</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Laufende Dosisanpassung durch Ärzte</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700">Kostenloser Medikamentenversand</span>
</div>
</div>
<a className="block w-full text-center bg-purple-600 text-white font-medium py-4 rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-100" href="#">
                        Jetzt starten
                    </a>
<p className="text-center text-xs text-gray-400 mt-4">Jederzeit kündbar. 100% Geld-zurück-Garantie bei Nichteignung.</p>
</div>
<div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
<p className="text-xs text-gray-500 flex justify-center items-center gap-2">
<iconify-icon icon="lucide:lock" width="12"></iconify-icon>
                        Deine Daten sind verschlüsselt und sicher in der Schweiz gehostet.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-t border-gray-200">
<div className="max-w-2xl mx-auto px-4">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8 text-center">Häufige Fragen</h3>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-gray-200 p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-gray-900 font-medium text-sm">
                        Wie schnell sehe ich Ergebnisse?
                        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Die meisten Patienten verlieren bereits in den ersten 4 Wochen Gewicht. Klinische Studien zeigen einen Gewichtsverlust von ca. 15% innerhalb eines Jahres in Kombination mit Lifestyle-Changes.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-200 p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-gray-900 font-medium text-sm">
                        Ist das Medikament sicher?
                        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-gray-500 leading-relaxed">
                        GLP-1 Analoga werden seit über 10 Jahren eingesetzt. Wie jedes Medikament können Nebenwirkungen auftreten (z.B. Übelkeit zu Beginn), die aber meist nach kurzer Zeit abklingen. Unsere Ärzte klären dich genau auf.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-gray-200 p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between text-gray-900 font-medium text-sm">
                        Bezahlt die Krankenkasse?
                        <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Die Grundversicherung übernimmt die Kosten meist nur bei bestimmten Kriterien (BMI &gt; 35 oder &gt; 28 mit Begleiterkrankungen). Wir helfen dir bei der Abklärung mit deiner Versicherung.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:activity" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">ViaSlim</span>
</a>
<p className="text-xs text-gray-500 mb-4">
                        Zürich, Schweiz 🇨🇭<br/>
                        Medizinische Technologie für ein gesünderes Leben.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Produkt</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-purple-600 transition" href="#">Funktionsweise</a></li>
<li><a className="hover:text-purple-600 transition" href="#">Medikamente</a></li>
<li><a className="hover:text-purple-600 transition" href="#">Erfolgsgeschichten</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-purple-600 transition" href="#">Impressum</a></li>
<li><a className="hover:text-purple-600 transition" href="#">Datenschutz</a></li>
<li><a className="hover:text-purple-600 transition" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Kontakt</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-purple-600 transition" href="mailto:support@viaslim.ch">support@viaslim.ch</a></li>
<li className="flex gap-4 mt-4">
<a className="text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
<p>© 2024 ViaSlim Medical AG. Alle Rechte vorbehalten.</p>
<div className="mt-2 md:mt-0 flex gap-4">
<span>Swiss Made Software</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
