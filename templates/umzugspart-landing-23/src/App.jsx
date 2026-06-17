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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg shadow-slate-900/20">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">UMZUG<span className="text-slate-400">VERGLEICH</span></span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-medium text-slate-900" href="#">Startseite</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#beiladung">Beiladungen</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#software">Software</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#preise">Partner</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-xs font-medium text-slate-600 hover:text-slate-900 sm:block" href="#">Anmelden</a>
<a className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200" href="#">
                    Für Firmen
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-0 -right-4 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="relative mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-12 lg:gap-16">
<div className="flex flex-col justify-center lg:col-span-6 mb-12 lg:mb-0">
<div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Jetzt neu: Beiladungs-Börse
                </div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                    Ihr Umzug, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">einfach &amp; günstig.</span>
</h1>
<p className="text-lg font-light leading-relaxed text-slate-500 mb-8 max-w-lg">
                    Vergleichen Sie geprüfte Umzugsunternehmen oder finden Sie kostengünstige Beiladungen. Sparen Sie bis zu 40% durch intelligente Routenplanung.
                </p>
<div className="flex flex-col sm:flex-row gap-6 mb-8">
<div className="flex items-start gap-3">
<div className="mt-1 rounded-full bg-indigo-50 p-1 text-indigo-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900">Geprüfte Partner</h4>
<p className="text-[10px] text-slate-500 leading-relaxed max-w-[140px]">Nur verifizierte Firmen mit Versicherungsschutz.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 rounded-full bg-indigo-50 p-1 text-indigo-600">
<span className="iconify" data-icon="lucide:banknote" data-width="14"></span>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900">Festpreis-Garantie</h4>
<p className="text-[10px] text-slate-500 leading-relaxed max-w-[140px]">Keine versteckten Kosten nach der Buchung.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/50 sm:p-8 backdrop-blur-sm">
<div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10 blur-2xl"></div>
<div className="mb-6 border-b border-slate-100 pb-4 flex justify-between items-center">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Kostenlos vergleichen</h3>
<p className="text-xs text-slate-400 mt-1">Dauert weniger als 2 Minuten.</p>
</div>
<div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:calculator" data-width="16"></span>
</div>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div className="group relative">
<label className="mb-1.5 block text-xs font-medium text-slate-500">Von</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" placeholder="PLZ oder Ort" type="text"/>
</div>
</div>
<div className="group relative">
<label className="mb-1.5 block text-xs font-medium text-slate-500">Nach</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="iconify" data-icon="lucide:navigation" data-width="16"></span>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" placeholder="PLZ oder Ort" type="text"/>
</div>
</div>
</div>
<div>
<label className="mb-1.5 block text-xs font-medium text-slate-500">Geplantes Datum</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</div>
<input className="block w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm" type="date"/>
</div>
</div>
<div className="pt-2">
<div className="flex justify-between items-center mb-3">
<label className="text-xs font-medium text-slate-500">Umzugsvolumen</label>
<div className="flex items-center gap-2">
<span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">ca. 45 m³</span>
</div>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="5" type="range" value="45"/>
<div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium tracking-tight">
<span>WG Zimmer (10m³)</span>
<span>Haus (100m³+)</span>
</div>
</div>
<button className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 active:scale-[0.98] transition-all" type="submit">
                            Angebote anzeigen
                            <span className="iconify transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-10">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-xs font-medium text-slate-400 mb-6 uppercase tracking-wider">Bekannt aus</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1.5"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span>HANDELSBLATT</div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1.5"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span>FOCUS</div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1.5"><span className="iconify" data-icon="lucide:circle" data-width="20"></span>WELT</div>
<div className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1.5"><span className="iconify" data-icon="lucide:square" data-width="20"></span>STERN</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Das smarte Anfrage-System</h2>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Wir digitalisieren den gesamten Prozess. Von der Volumenberechnung bis zur intelligenten Zuweisung in Ihrer Region.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-200 transition-colors">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">1. Geführter Umzugsrechner</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Intelligente Abfrage aller relevanten Daten für ein präzises Angebot.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:map" data-width="14"></span>
                            Adresse <span className="text-slate-400 mx-1">→</span> Adresse
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:box-select" data-width="14"></span>
                            Automatische m³ Berechnung
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-indigo-500" data-icon="lucide:layers" data-width="14"></span>
                            Extras (Einpacken, Lift, Montage)
                        </li>
</ul>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-200 transition-colors">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:git-merge" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">2. Regionales Matching</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Ihre Anfrage wird analysiert und automatisch dem passenden Experten-Pool zugewiesen.
                    </p>
<div className="rounded-lg bg-slate-50 p-4 border border-slate-100">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-medium text-slate-500">PLZ-Region 80xxx</span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-indigo-600 w-2/3 rounded-full"></div>
</div>
<div className="mt-2 text-[9px] text-slate-400 text-right">Matching läuft...</div>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-200 transition-colors">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">3. Faire Spielregeln</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Kein Spam. Wir limitieren die Anzahl der Angebote und sorgen für schnelle Antworten.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-2">
<div className="mt-0.5 rounded bg-slate-100 p-0.5 text-slate-600">
<span className="iconify" data-icon="lucide:users" data-width="12"></span>
</div>
<div className="text-xs text-slate-600">
<span className="font-medium text-slate-900">Maximal 5 Firmen</span>
<p className="text-[10px] text-slate-400">Sie werden nicht mit Anrufen überflutet.</p>
</div>
</li>
<li className="flex items-start gap-2">
<div className="mt-0.5 rounded bg-slate-100 p-0.5 text-slate-600">
<span className="iconify" data-icon="lucide:timer" data-width="12"></span>
</div>
<div className="text-xs text-slate-600">
<span className="font-medium text-slate-900">48h Countdown</span>
<p className="text-[10px] text-slate-400">Anfragen verfallen automatisch bei Inaktivität.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Kunden Dashboard</h2>
<p className="text-sm text-slate-500 mt-2">Ihr zentraler Ort für die Umzugsplanung.</p>
</div>

<div className="relative mx-auto max-w-5xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row h-[600px]">

<div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 flex flex-col p-4 shrink-0">

<div className="flex items-center gap-3 mb-8 px-2">
<div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="overflow-hidden">
<h4 className="text-sm font-semibold text-slate-900 truncate">Felix Muster</h4>
<p className="text-[10px] text-slate-500 truncate">Kunde seit 2023</p>
</div>
</div>

<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg bg-indigo-50 text-indigo-700" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="16"></span>
                            Buchungsmanager
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:book-user" data-width="16"></span>
                            Adressbuch
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<div className="relative">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500 border border-slate-50"></span>
</div>
                            Benachrichtigungen
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:message-square" data-width="16"></span>
                            Nachrichten Center
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:history" data-width="16"></span>
                            Anfrage Historie
                        </a>
</nav>

<div className="pt-4 border-t border-slate-200">
<a className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-900" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                            Einstellungen
                        </a>
</div>
</div>

<div className="flex-1 bg-white overflow-y-auto relative">

<div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
<div>
<h3 className="text-sm font-semibold text-slate-900">Aktive Anfrage #4829</h3>
<div className="flex items-center gap-2 mt-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] text-slate-500">Status: <span className="font-medium text-slate-700">Angebotsphase</span></span>
</div>
</div>

<div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
<span className="iconify text-amber-500" data-icon="lucide:timer" data-width="16"></span>
<div className="text-right">
<p className="text-[9px] text-slate-400 uppercase tracking-wide">Verbleibend</p>
<p className="text-xs font-mono font-medium text-slate-900">41:22:10</p>
</div>
</div>
</div>
<div className="p-6">

<div className="bg-indigo-50/50 rounded-xl border border-indigo-100 p-4 mb-8 flex flex-wrap gap-6">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-white rounded-md shadow-sm text-indigo-600"><span className="iconify" data-icon="lucide:map-pin" data-width="14"></span></div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Route</p>
<p className="text-xs font-semibold text-slate-900">Berlin <span className="text-slate-400">→</span> München</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1.5 bg-white rounded-md shadow-sm text-indigo-600"><span className="iconify" data-icon="lucide:calendar" data-width="14"></span></div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Datum</p>
<p className="text-xs font-semibold text-slate-900">15. Nov - 17. Nov</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1.5 bg-white rounded-md shadow-sm text-indigo-600"><span className="iconify" data-icon="lucide:box" data-width="14"></span></div>
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Volumen</p>
<p className="text-xs font-semibold text-slate-900">45 m³</p>
</div>
</div>
</div>

<div className="mb-4 flex justify-between items-end">
<h4 className="text-sm font-semibold text-slate-900">Ausgewählte Partner (3/5)</h4>
<span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-1 rounded">Noch 2 Plätze frei</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">MS</div>
<div>
<h5 className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Müller Spedition</h5>
<div className="flex items-center gap-2 mt-0.5">
<div className="flex text-amber-400 text-[10px]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="text-[10px] text-slate-400">• 124 Bewertungen</span>
</div>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 mb-1">
                                        Angebot erhalten
                                    </span>
<p className="text-sm font-bold text-slate-900">1.250 €</p>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-indigo-300 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">TL</div>
<div>
<h5 className="text-sm font-medium text-slate-900">TransLogistics GmbH</h5>
<div className="flex items-center gap-2 mt-0.5">
<div className="flex text-amber-400 text-[10px]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify text-slate-200" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
</div>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="animate-pulse mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                        Kalkuliert...
                                    </span>
</div>
</div>

<div className="flex items-center justify-center p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/50">
<p className="text-xs text-slate-400 flex items-center gap-2">
<span className="animate-spin" data-icon="lucide:loader-2" data-width="14"></span>
                                    Warten auf weitere Partner aus Ihrer Region...
                                </p>
</div>
</div>

<div className="mt-8 pt-6 border-t border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-width="14"></span>
                                Letzte Nachrichten
                            </h4>
<div className="space-y-2">
<div className="flex gap-3 items-start">
<div className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold mt-0.5">S</div>
<div className="bg-slate-50 rounded-lg rounded-tl-none p-2 text-[11px] text-slate-600 border border-slate-100 max-w-[80%]">
                                        Support: Hallo Felix, haben Sie noch Fragen zum Ablauf?
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-t border-slate-100" id="beiladung">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 to-slate-50 rounded-3xl transform -rotate-2"></div>
<div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl p-6 transform rotate-0 hover:scale-[1.01] transition-transform duration-500">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="iconify text-indigo-600" data-icon="lucide:truck" data-width="18"></span>
                                Beiladung erstellen
                            </h4>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-600 border border-amber-100">
<span className="iconify" data-icon="lucide:crown" data-width="10"></span>
                                Premium
                            </span>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-1/2 space-y-1">
<label className="text-[10px] uppercase font-medium text-slate-400 tracking-wider">Start</label>
<div className="h-9 w-full rounded bg-slate-50 border border-slate-100 flex items-center px-3 text-xs text-slate-700">Berlin, DE</div>
</div>
<div className="w-1/2 space-y-1">
<label className="text-[10px] uppercase font-medium text-slate-400 tracking-wider">Ziel</label>
<div className="h-9 w-full rounded bg-slate-50 border border-slate-100 flex items-center px-3 text-xs text-slate-700">München, DE</div>
</div>
</div>
<div className="flex gap-3">
<div className="w-1/3 space-y-1">
<label className="text-[10px] uppercase font-medium text-slate-400 tracking-wider">Datum</label>
<div className="h-9 w-full rounded bg-slate-50 border border-slate-100 flex items-center px-3 text-xs text-slate-700">15. Nov</div>
</div>
<div className="w-2/3 space-y-1">
<label className="text-[10px] uppercase font-medium text-slate-400 tracking-wider">Verfügbarer Platz</label>
<div className="h-9 w-full rounded bg-slate-50 border border-slate-100 flex items-center justify-between px-3">
<span className="text-xs text-slate-700">12 m³</span>
<div className="h-1.5 w-16 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500"></div>
</div>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
                                    Angebot auf Board veröffentlichen
                                    <span className="iconify" data-icon="lucide:upload-cloud" data-width="14"></span>
</button>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100">
<p className="text-[10px] text-slate-400 mb-2">Sichtbar auf dem öffentlichen Marktplatz:</p>
<div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-slate-100">
<div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:package" data-width="16"></span>
</div>
<div className="flex-1">
<div className="h-2 w-20 bg-slate-200 rounded mb-1.5"></div>
<div className="h-2 w-12 bg-slate-200 rounded"></div>
</div>
<div className="h-6 w-16 bg-indigo-100 rounded"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 mb-6 border border-amber-100">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                        Exklusiv für Premium-Partner
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Leeraum in Umsatz verwandeln.</h2>
<p className="text-base text-slate-500 font-light mb-8 leading-relaxed">
                        Nutzen Sie Restkapazitäten in Ihren Fahrzeugen optimal aus. Erstellen Sie Beiladungs-Angebote für definierte Routen, Daten und Kubikmeter.
                    </p>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="flex-none h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900">
<span className="iconify" data-icon="lucide:route" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Route &amp; Volumen definieren</h4>
<p className="text-xs text-slate-500 mt-1">Geben Sie exakt an, wo und wie viel Platz Sie noch haben.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-none h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900">
<span className="iconify" data-icon="lucide:eye" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Öffentliche Sichtbarkeit</h4>
<p className="text-xs text-slate-500 mt-1">Ihr Angebot erscheint sofort auf unserem öffentlichen Board für Kunden.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-none h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Sofort-Buchung</h4>
<p className="text-xs text-slate-500 mt-1">Kunden können Ihre Beiladung direkt reservieren.</p>
</div>
</li>
</ul>
<div className="mt-10">
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 group" href="#preise">
                            Premium-Abo entdecken 
                            <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="software">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl mb-12">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-indigo-600 shadow-sm mb-4">
<span className="iconify" data-icon="lucide:layout-grid" data-width="12"></span>
                    Für Speditionen
                </div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-4">Das Betriebssystem für <br/>Ihr Umzugsunternehmen.</h2>
<p className="text-base text-slate-500 font-light leading-relaxed">
                    Von der Anfrage bis zur Auslieferung. Managen Sie Ihr gesamtes Tagesgeschäft in einer zentralen Oberfläche.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col hover:border-indigo-200 transition-colors group">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:inbox" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900">Anfragen Eingang</h3>
</div>
<span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">12 Neu</span>
</div>
<div className="flex-1 space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<p className="text-xs font-semibold text-slate-900">John Doe</p>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<span>Berlin</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="8"></span>
<span>Hamburg</span>
</div>
</div>
</div>
<span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">2 Zimmer</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 opacity-60">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">MK</div>
<div>
<p className="text-xs font-semibold text-slate-900">Maria K.</p>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<span>München</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="8"></span>
<span>Köln</span>
</div>
</div>
</div>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">55 m³</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 opacity-60">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">TS</div>
<div>
<p className="text-xs font-semibold text-slate-900">Tim S.</p>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<span>Leipzig</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="8"></span>
<span>Dresden</span>
</div>
</div>
</div>
<span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Büro</span>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-2 row-span-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between overflow-hidden relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-50 -mr-10 -mt-10"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900">Direkt-Chat</h3>
</div>
</div>
<div className="space-y-3 relative z-10">
<div className="bg-slate-50 rounded-lg rounded-tl-none p-3 max-w-[85%] border border-slate-100">
<p className="text-[11px] text-slate-600">Guten Tag, ist im Angebot auch die Montage der Küche enthalten?</p>
</div>
<div className="bg-indigo-600 rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto shadow-sm">
<p className="text-[11px] text-white">Ja, die Küchenmontage haben wir zum Festpreis inkludiert.</p>
<div className="flex justify-end mt-1">
<span className="iconify text-indigo-200" data-icon="lucide:check-check" data-width="10"></span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 row-span-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col hover:border-indigo-200 transition-colors">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:banknote" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900">Angebot</h3>
</div>
<div className="space-y-3 mt-auto">
<div className="relative">
<span className="absolute left-3 top-2.5 text-xs text-slate-400">€</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-6 pr-3 text-xs font-semibold text-slate-900 focus:outline-none focus:border-indigo-500" type="text" value="1.250,00"/>
</div>
<button className="w-full bg-slate-900 text-white text-[10px] font-medium py-2 rounded-lg hover:bg-slate-800 transition-colors">Senden</button>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 row-span-1 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl border border-transparent p-6 shadow-md flex flex-col items-center justify-center text-center text-white">
<div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:calendar-check-2" data-width="20"></span>
</div>
<h3 className="text-sm font-semibold mb-1">Buchung bestätigt</h3>
<p className="text-[10px] text-indigo-100 mb-3">Auftrag #2901 wurde vom Kunden angenommen.</p>
<div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-medium backdrop-blur-sm">
<span className="iconify" data-icon="lucide:check" data-width="8"></span>
                        Rechnung erstellt
                    </div>
</div>

<div className="md:col-span-2 lg:col-span-2 row-span-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:map" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900">Tourenplanung</h3>
</div>
<span className="text-[10px] text-slate-400">Heute, 12. Nov</span>
</div>
<div className="relative flex items-center justify-between pt-4 pb-2 px-2">
<div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-2 group">
<div className="h-3 w-3 rounded-full bg-slate-300 border-2 border-white ring-1 ring-slate-200"></div>
<span className="text-[9px] font-medium text-slate-400">08:00</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="h-3 w-3 rounded-full bg-indigo-600 border-2 border-white ring-2 ring-indigo-100"></div>
<div className="absolute -top-8 bg-slate-900 text-white text-[9px] px-2 py-1 rounded shadow-sm whitespace-nowrap">
                                LKW 2: Beladung
                            </div>
<span className="text-[9px] font-bold text-slate-900">10:30</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="h-3 w-3 rounded-full bg-slate-300 border-2 border-white ring-1 ring-slate-200"></div>
<span className="text-[9px] font-medium text-slate-400">14:00</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="h-3 w-3 rounded-full bg-slate-300 border-2 border-white ring-1 ring-slate-200"></div>
<span className="text-[9px] font-medium text-slate-400">17:00</span>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 row-span-1 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:container" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold text-slate-900">Auslastung</h3>
</div>
<div className="mt-auto">
<div className="flex justify-between items-end mb-2">
<span className="text-2xl font-bold text-slate-900 tracking-tight">85%</span>
<span className="text-[10px] text-slate-400 mb-1">Flotte Gesamt</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
<p className="text-[9px] text-slate-400 mt-2">2 Fahrzeuge voll verfügbar</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="preise">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Partner-Modelle</h2>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Skalierbare Lösungen für Unternehmen jeder Größe. Wählen Sie den Plan, der zu Ihrer Flotte passt. Flexibel anpassbar.
                    </p>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-full border border-slate-100">
<button className="px-4 py-1.5 rounded-full bg-white shadow-sm text-xs font-semibold text-slate-900 border border-slate-100">Monatlich</button>
<button className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Jährlich (-15%)</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative flex flex-col p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="mb-6">
<h3 className="text-base font-semibold text-slate-900">Basis</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">0€</span>
<span className="text-sm text-slate-400">/ Monat</span>
</div>
<p className="mt-2 text-xs text-slate-400 font-light">Einstieg ohne Fixkosten. Ideal für Kleinunternehmen.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-600">Standard Anfrage-Details</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 shrink-0 mt-0.5" data-icon="lucide:alert-circle" data-width="14"></span>
<span className="text-xs text-slate-400">Limit: Max. 5 Leads / Tag</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 shrink-0 mt-0.5" data-icon="lucide:x" data-width="14"></span>
<span className="text-xs text-slate-400 line-through decoration-slate-300">Zugang zur Beiladungs-Börse</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-400 shrink-0 mt-0.5" data-icon="lucide:x" data-width="14"></span>
<span className="text-xs text-slate-400 line-through decoration-slate-300">Kein Ranking-Boost</span>
</li>
</ul>
<a className="block w-full py-3 px-4 rounded-lg bg-slate-50 text-slate-900 text-xs font-semibold text-center hover:bg-slate-100 transition-colors border border-slate-200" href="#">
                        Kostenlos starten
                    </a>
</div>

<div className="relative flex flex-col p-8 rounded-2xl bg-slate-900 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-lg">Beliebteste Wahl</span>
</div>
<div className="mb-6">
<h3 className="text-base font-semibold text-white">Professional</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white">89€</span>
<span className="text-sm text-slate-400">/ Monat</span>
</div>
<p className="mt-2 text-xs text-slate-400 font-light">Volle Kontrolle und Sichtbarkeit für Wachstumsziele.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-200">Vollständige Kundendaten</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-200">Unbegrenzte Lead-Anzahl</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-200"><strong className="text-white">Beiladungs-Börse</strong> inklusive</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-indigo-400 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-200">Geprüft-Badge &amp; Ranking Boost</span>
</li>
</ul>
<a className="block w-full py-3 px-4 rounded-lg bg-indigo-600 text-white text-xs font-semibold text-center hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30" href="#">
                        Pro-Partner werden
                    </a>
</div>

<div className="relative flex flex-col p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
<div className="mb-6">
<h3 className="text-base font-semibold text-slate-900">Scale</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">249€</span>
<span className="text-sm text-slate-400">/ Monat</span>
</div>
<p className="mt-2 text-xs text-slate-400 font-light">Für Großunternehmen mit mehreren Standorten.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-600">Alles aus Professional</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-600">API-Zugriff für CRM</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-600">Premium Priority Listing (Platz 1-3)</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-slate-900 shrink-0 mt-0.5" data-icon="lucide:check" data-width="14"></span>
<span className="text-xs text-slate-600">Dedizierter Account Manager</span>
</li>
</ul>
<a className="block w-full py-3 px-4 rounded-lg bg-white text-slate-900 text-xs font-semibold text-center hover:bg-slate-50 transition-colors border border-slate-200" href="#">
                        Vertrieb kontaktieren
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="reviews">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Das sagen unsere Kunden</h2>
<div className="flex gap-1 text-amber-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="ml-2 text-sm font-medium text-slate-600">4.9/5 Durchschnitt</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl bg-white p-6 border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Der Preisvergleich hat mir fast 400€ gespart. Die Spedition war super pünktlich und vorsichtig mit meinen Möbeln."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">MK</div>
<div>
<div className="text-xs font-semibold text-slate-900">Michael K.</div>
<div className="text-[10px] text-slate-400">Umzug Hamburg -&gt; Berlin</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-6 border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Habe eine Beiladung für ein Sofa gesucht. Ging super einfach über das neue Tool. Sehr zu empfehlen."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">SB</div>
<div>
<div className="text-xs font-semibold text-slate-900">Sandra B.</div>
<div className="text-[10px] text-slate-400">Beiladung Köln</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white p-6 border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex gap-1 text-amber-400 mb-4 text-xs">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify text-slate-300" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">"Sehr transparente Abwicklung. Keine Telefon-Terror wie bei anderen Anbietern, sondern konkrete Angebote per Mail."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">TR</div>
<div>
<div className="text-xs font-semibold text-slate-900">Thomas R.</div>
<div className="text-[10px] text-slate-400">Firmenumzug München</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-white">
<span className="iconify" data-icon="lucide:box" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">UMZUG<span className="text-slate-400">VERGLEICH</span></span>
</div>
<p className="text-xs leading-relaxed text-slate-500 font-light max-w-xs">
                        Die smarte Plattform für Umzüge und Beiladungen in Deutschland. TÜV-geprüfter Datenschutz.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Unternehmen</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Über uns</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Für Speditionen</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Presse</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Service</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Umzugsrechner</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Beiladungs-Börse</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Halteverbot</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4">Rechtliches</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Impressum</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="text-xs text-slate-500 hover:text-indigo-600 transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">© 2023 Umzugspreisvergleich GmbH. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
