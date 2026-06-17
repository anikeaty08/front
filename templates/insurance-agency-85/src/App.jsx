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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-slate-100 bg-white/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-95 transition-transform duration-300 bg-slate-900 text-white">
<span className="font-semibold text-sm">N</span>
</div>
<span className="font-medium tracking-tight text-slate-900">Nord &amp; Partner <span className="font-normal text-slate-400">Hude</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-slate-900" href="#leistungen">Leistungen</a>
<a className="transition-colors hover:text-slate-900" href="#ueber-uns">Über uns</a>
<a className="transition-colors hover:text-slate-900" href="#schaden">Schaden melden</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 hover:shadow-lg text-white bg-slate-900 hover:bg-slate-800 hover:shadow-slate-900/20" href="#kontakt">
                    Termin vereinbaren
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-blue-50 border-blue-100 text-blue-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Ihr lokaler Partner in Hude
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                    Versicherungen,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">klar und persönlich.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                    Wir schützen, was Ihnen wichtig ist. Ehrliche Beratung und maßgeschneiderte Konzepte für Privat- und Gewerbekunden direkt hier in Hude.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all hover:shadow-xl text-white bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/20" href="#kontakt">
                        Beratung anfordern
                        <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-lg transition-colors text-slate-600 bg-white border-slate-200 hover:bg-slate-50" href="tel:0440812345">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        04408 / 123 45
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-xs font-medium text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] text-slate-500 bg-slate-200 border-white">JP</div>
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] bg-slate-300 border-white text-slate-600">MK</div>
<div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] bg-slate-400 border-white text-white">AS</div>
</div>
<div>
<div className="text-slate-900">Über 1.500 zufriedene Kunden</div>
<div className="flex items-center gap-1 text-orange-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-slate-50/50 border-slate-200/60" id="leistungen">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">Rundum gut abgesichert</h2>
<p className="text-slate-500 max-w-lg">Unsere Lösungen passen sich Ihrem Leben an, nicht umgekehrt. Von der Haftpflicht bis zur komplexen Firmenpolice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group bg-white border-slate-200">
<div className="absolute right-0 top-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-blue-50"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900">Haus &amp; Wohnen</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-md">Ob Eigenheim in der Parkstraße oder Wohnung am Markt. Wir sichern Ihr Zuhause gegen Sturm, Feuer und Einbruch ab. Inklusive Elementarschäden für den Norden.</p>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-teal-50 text-teal-600">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900">Gesundheit &amp; Vorsorge</h3>
<p className="text-slate-500 text-sm leading-relaxed">Krankenzusatz, Pflege oder Berufsunfähigkeit. Sorgen Sie heute für morgen vor.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:case-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-slate-900">Gewerbe &amp; Profis</h3>
<p className="text-slate-500 text-sm leading-relaxed">Maßgeschneiderte Konzepte für Handwerk, Handel und Dienstleister in der Region.</p>
</div>

<div className="md:col-span-2 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative bg-slate-900">
<div className="relative z-10">
<h3 className="text-xl font-semibold mb-2 text-white">KFZ-Versicherung</h3>
<p className="text-sm max-w-sm text-slate-400">Schnelle Hilfe im Schadensfall und fairer Beitrag. Wechseln Sie jetzt unkompliziert zu uns.</p>
</div>
<div className="relative z-10">
<button className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors bg-white text-slate-900 hover:bg-slate-100">
                            Angebot berechnen
                        </button>
</div>

<div className="absolute -right-10 -bottom-20 opacity-20 rotate-12 text-slate-800">
<iconify-icon icon="solar:wheel-angle-linear" width="200"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 font-medium text-sm mb-4 text-blue-600">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                    Mitten in Hude
                </div>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-slate-900">Nicht irgendein Callcenter.<br/>Wir sind Ihre Nachbarn.</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                    Seit über 20 Jahren beraten wir Menschen in Hude und dem Landkreis Oldenburg. Wir kennen die lokalen Gegebenheiten und sind greifbar, wenn es darauf ankommt.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0 text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600">Persönliche Ansprechpartner statt Warteschleife</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0 text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600">Schnelle Regulierung direkt vor Ort</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0 text-blue-600" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600">Unabhängiger Vergleich der besten Tarife</span>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl border relative overflow-hidden flex items-center justify-center bg-slate-100 border-slate-200">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="relative p-6 rounded-xl shadow-xl border max-w-xs w-full bg-white border-slate-100">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<div className="font-semibold text-sm text-slate-900">Unser Büro</div>
<div className="text-slate-500 text-xs">Parkstraße 12, 27798 Hude</div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Mo - Fr</span>
<span className="font-medium text-slate-900">09:00 - 12:30</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Mo, Di, Do</span>
<span className="font-medium text-slate-900">14:00 - 17:00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-slate-50 border-slate-200" id="kontakt">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">Kontaktieren Sie uns</h2>
<p className="text-slate-500">Fragen zu einer Versicherung oder Schadensfall? Schreiben Sie uns.</p>
</div>
<form className="rounded-2xl shadow-sm border p-8 space-y-6 bg-white border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Vorname</label>
<input className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 bg-slate-50 border-slate-200 text-slate-900" placeholder="Max" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Nachname</label>
<input className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 bg-slate-50 border-slate-200 text-slate-900" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">E-Mail Adresse</label>
<input className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 bg-slate-50 border-slate-200 text-slate-900" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Thema</label>
<div className="relative">
<select className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer bg-slate-50 border-slate-200 text-slate-900">
<option>Allgemeine Anfrage</option>
<option>Terminwunsch</option>
<option>Schaden melden</option>
<option>KFZ-Versicherung</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Nachricht</label>
<textarea className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none bg-slate-50 border-slate-200 text-slate-900" placeholder="Wie können wir Ihnen helfen?" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 text-white bg-slate-900 hover:bg-slate-800 shadow-slate-900/10" type="button">
                        Nachricht absenden
                        <iconify-icon className="ml-2" icon="solar:plain-3-linear"></iconify-icon>
</button>
</div>
<p className="text-center text-xs mt-4 text-slate-400">Ihre Daten werden sicher und verschlüsselt übertragen.</p>
</form>
</div>
</section>

<footer className="pt-16 pb-12 border-t bg-white border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-900 text-white">
<span className="font-bold text-xs">N</span>
</div>
<span className="font-semibold tracking-tight text-slate-900">Nord &amp; Partner</span>
</a>
<p className="text-sm text-slate-500 max-w-sm mb-6">
                        Ihr zuverlässiger Versicherungsmakler in Hude. Unabhängig, kompetent und immer an Ihrer Seite, wenn es darauf ankommt.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-slate-400 hover:text-slate-900" href="#">
<iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon>
</a>
<a className="transition-colors text-slate-400 hover:text-slate-900" href="#">
<iconify-icon icon="brandico:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 text-slate-900">Rechtliches</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="transition-colors hover:text-blue-600" href="#">Impressum</a></li>
<li><a className="transition-colors hover:text-blue-600" href="#">Datenschutz</a></li>
<li><a className="transition-colors hover:text-blue-600" href="#">Erstinformation</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 text-slate-900">Kontakt</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>Parkstraße 12</li>
<li>27798 Hude</li>
<li className="pt-2"><a className="transition-colors hover:text-blue-600" href="mailto:info@nord-partner.de">info@nord-partner.de</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-slate-100 text-slate-400">
<p>© 2023 Versicherungsbüro Nord &amp; Partner. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span>System operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
