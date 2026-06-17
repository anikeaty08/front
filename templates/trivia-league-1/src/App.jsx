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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="glow-bg top-[-200px] left-1/2 transform -translate-x-1/2"></div>
<div className="glow-bg top-[40%] right-[-200px] bg-rose-500/5"></div>
<div className="glow-bg bottom-[-100px] left-[-200px] bg-indigo-500/5"></div>

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-8 gap-x-8 gap-y-8 items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-md shadow-amber-500/20">
<span className="text-xs font-semibold tracking-tighter text-white">KQ</span>
</div>
<span className="group-hover:text-amber-600 transition-colors text-sm font-medium text-slate-900 tracking-tight">ÖSTERREICH-LIGA</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="/#leaderboard">Tabelle</a>
<a className="hover:text-slate-900 transition-colors" href="#locations">Austragungsorte</a>
<a className="hover:text-slate-900 transition-colors" href="#rules">Regelwerk</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Anmelden</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md" href="#">
                    Team registrieren
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="flex flex-col z-10 text-center max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex gap-2 text-xs font-medium text-amber-600 bg-amber-50 border-amber-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Anmeldung für Saison 4 geöffnet
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6 max-w-4xl text-slate-900">
                Die Königsklasse des <br className="hidden md:block"/>
<span className="text-gradient">kompetitiven Kneipenquiz.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-600 max-w-2xl mb-10">
                Kämpfe in den besten Lokalen Wiens, Graz' und Linzs. Beweise deinen Intellekt, erklimme die nationale Rangliste und hol dir den Meistertitel.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-amber-500 to-red-600 text-white text-sm font-medium hover:from-amber-400 hover:to-red-500 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)]" href="#">
                    Tritt der Arena bei
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-12 px-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50 transition-all shadow-sm" href="#leaderboard">
                    Aktuelle Rangliste ansehen
                </a>
</div>

<div className="w-full max-w-3xl mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-slate-900">124</span>
<span className="text-xs text-slate-500 font-normal mt-1">Aktive Teams</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-slate-900">15</span>
<span className="text-xs text-slate-500 font-normal mt-1">Offizielle Lokale</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-slate-900">€25k</span>
<span className="text-xs text-slate-500 font-normal mt-1">Preispool</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium tracking-tight text-slate-900">8.5k</span>
<span className="text-xs text-slate-500 font-normal mt-1">Gestellte Fragen</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32" id="leaderboard">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-8 gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Nationale Rangliste</h2>
<p className="text-sm text-slate-500 font-light">Die besten 10 Teams qualifizieren sich für das Finale in Wien.</p>
</div>

<div className="segmented-control bg-slate-100 p-1 rounded-lg inline-flex border border-slate-200">
<input checked="" id="reg-all" name="region" type="radio"/>
<label className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-600 border border-transparent" htmlFor="reg-all">Gesamt</label>
<input id="reg-vie" name="region" type="radio"/>
<label className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-600 border border-transparent" htmlFor="reg-vie">Wien</label>
<input id="reg-grz" name="region" type="radio"/>
<label className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-600 border border-transparent" htmlFor="reg-grz">Graz</label>
</div>
</div>
<div className="glass-card rounded-xl overflow-hidden bg-white">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="border-b border-slate-200 bg-slate-50/50">
<th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider w-16">Plz</th>
<th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider">Team</th>
<th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider hidden sm:table-cell">Heimlokal</th>
<th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Pkt</th>
<th className="py-4 px-6 text-xs font-medium text-slate-500 uppercase tracking-wider text-right w-24">Form</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<td className="py-4 px-6 text-amber-500 font-medium">01</td>
<td className="py-4 px-6 font-medium text-slate-900 flex items-center gap-2">
                                    Schrödinger's Cat
                                    <iconify-icon className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:crown-star-linear" width="16"></iconify-icon>
</td>
<td className="py-4 px-6 text-slate-500 hidden sm:table-cell">The Highlander, VIE</td>
<td className="py-4 px-6 text-right font-medium font-mono text-slate-900">4.250</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1 text-emerald-600">
<span className="text-xs">+2</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</td>
</tr>

<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<td className="py-4 px-6 text-slate-400 font-medium">02</td>
<td className="py-4 px-6 font-medium text-slate-900">Quiztina Aguilera</td>
<td className="py-4 px-6 text-slate-500 hidden sm:table-cell">O'Carolan's, GRZ</td>
<td className="py-4 px-6 text-right font-medium font-mono text-slate-900">4.120</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1 text-slate-400">
<span className="text-xs">-</span>
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</div>
</td>
</tr>

<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<td className="py-4 px-6 text-amber-700 font-medium">03</td>
<td className="py-4 px-6 font-medium text-slate-900">Les Quizerables</td>
<td className="py-4 px-6 text-slate-500 hidden sm:table-cell">Chelsea, VIE</td>
<td className="py-4 px-6 text-right font-medium font-mono text-slate-900">3.980</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1 text-rose-500">
<span className="text-xs">-1</span>
<iconify-icon icon="solar:arrow-right-down-linear" width="16"></iconify-icon>
</div>
</td>
</tr>

<tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<td className="py-4 px-6 text-slate-400 font-normal">04</td>
<td className="py-4 px-6 text-slate-700">Beer Necessities</td>
<td className="py-4 px-6 text-slate-500 hidden sm:table-cell">Isaac's, LNZ</td>
<td className="py-4 px-6 text-right font-mono text-slate-700">3.750</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1 text-emerald-600">
<span className="text-xs">+4</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors group">
<td className="py-4 px-6 text-slate-400 font-normal">05</td>
<td className="py-4 px-6 text-slate-700">Let's Get Quizzical</td>
<td className="py-4 px-6 text-slate-500 hidden sm:table-cell">The Tube, VIE</td>
<td className="py-4 px-6 text-right font-mono text-slate-700">3.600</td>
<td className="py-4 px-6 text-right">
<div className="flex items-center justify-end gap-1 text-slate-400">
<span className="text-xs">-</span>
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-center">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 transition-colors" href="#">
                        Komplette Rangliste ansehen <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="locations">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Offizielle Austragungsorte</h2>
<p className="text-sm text-slate-600 font-light max-w-xl mx-auto">Die Matches finden gleichzeitig in zertifizierten Lokalen statt. Verbinde dich mit dem nationalen Netzwerk und tritt lokal an.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="glass-card rounded-2xl p-1 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-white rounded-xl p-6 h-full border border-slate-100 relative z-10 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Wien</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">The Highlander</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Premium Craft-Bier und eine intensive Wettbewerbsatmosphäre. Kapazität für 20 Teams.</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Nächstes Match</span>
<span className="text-sm text-slate-700 font-medium">Di, 20:00</span>
</div>
<button className="text-xs font-medium text-amber-600 hover:text-amber-500 transition-colors">Tisch reservieren</button>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-white rounded-xl p-6 h-full border border-slate-100 relative z-10 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Graz</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">O'Carolan's Irish Pub</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Klassisches Pub-Ambiente mit eigenem Quizbereich und hochwertigem Audiosystem.</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Nächstes Match</span>
<span className="text-sm text-slate-700 font-medium">Mi, 19:30</span>
</div>
<button className="text-xs font-medium text-amber-600 hover:text-amber-500 transition-colors">Tisch reservieren</button>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-1 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="bg-white rounded-xl p-6 h-full border border-slate-100 relative z-10 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600 border border-slate-200">Linz</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1">Chelsea Pub</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Die Hochburg der oberösterreichischen Quiz-Elite. Bekannt für brutale Stechen.</p>
<div className="pt-4 border-t border-slate-100 flex justify-between items-center">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Nächstes Match</span>
<span className="text-sm text-slate-700 font-medium">Do, 20:00</span>
</div>
<span className="text-xs font-medium text-slate-400">Ausgebucht</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-100/50 pt-32 pb-20 relative" id="rules">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Liga-Mechanik</h2>
<p className="text-sm text-slate-600 font-light mb-8">Ein standardisiertes Format über alle Austragungsorte hinweg sorgt für fairen Wettbewerb und eine präzise nationale Rangliste.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-500 transition-colors" href="#">
                            Offizielles Regelwerk herunterladen <iconify-icon icon="solar:document-text-linear"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-600 shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Teambildung</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">Bilde einen Kader mit bis zu 6 Mitgliedern. Registriere deine Aufstellung online, um individuelle Statistiken und die Team-Elo-Wertung zu verfolgen.</p>
</div>
<div className="">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-600 shadow-sm">
<iconify-icon icon="solar:question-square-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">6 Runden, 60 Fragen</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">Standardisierte Fragenkataloge, kuratiert von unserer zentralen Redaktion, die gleichzeitig an alle Lokale verteilt werden, um Leaks zu vermeiden.</p>
</div>
<div className="">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-600 shadow-sm">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Das Joker-System</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">Setze deinen einzigen Joker taktisch vor Beginn einer Runde ein, um die in dieser Kategorie erzielten Punkte zu verdoppeln.</p>
</div>
<div className="">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-600 shadow-sm">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-2">Nationales Finale</h4>
<p className="text-sm text-slate-600 font-light leading-relaxed">Die 10 besten Teams der Rangliste am Ende der 12-wöchigen Saison erhalten eine Einladung zum Live-Finale in Wien.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 text-center my-32">
<div className="glass-card rounded-3xl p-12 relative overflow-hidden bg-white">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 relative z-10">Versammle dein Team.</h2>
<p className="text-slate-600 text-sm md:text-base font-light mb-8 max-w-lg mx-auto relative z-10">Tritt dem größten kompetitiven Quiz-Netzwerk Österreichs bei. Die Anmeldung für Saison 4 schließt in Kürze.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
<input className="flex-1 h-11 px-4 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all shadow-sm" placeholder="E-Mail-Adresse des Kapitäns" type="email"/>
<button className="h-11 px-6 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm" type="button">
                        Registrierung starten
                    </button>
</form>
<p className="text-[10px] text-slate-400 mt-4 relative z-10">Mit der Registrierung akzeptierst du die Spielbedingungen der Liga.</p>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-sm">
<span className="text-[10px] font-semibold tracking-tighter text-white">KQ</span>
</div>
<span className="font-medium tracking-tight text-xs text-slate-900">KNEIPENQUIZ</span>
</a>
<p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs">
                        Die maßgebliche professionelle Kneipenquiz-Liga in ganz Österreich. Wir erheben Quizzen zum Wettkampfsport.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Liga</h4>
<ul className="space-y-2 text-sm font-light text-slate-600">
<li><a className="hover:text-amber-600 transition-colors" href="#">Tabelle</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Austragungsorte</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Regelwerk</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Ruhmeshalle</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Ressourcen</h4>
<ul className="space-y-2 text-sm font-light text-slate-600">
<li><a className="hover:text-amber-600 transition-colors" href="#">Für Wirte</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Redakteur werden</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-slate-900 mb-4 uppercase tracking-wider">Rechtliches</h4>
<ul className="space-y-2 text-sm font-light text-slate-600">
<li><a className="hover:text-slate-900 transition-colors" href="#">Datenschutzerklärung</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Nutzungsbedingungen</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Impressum</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-xs text-slate-500 font-light">
<p>© 2023 Kneipenquiz Österreich. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
