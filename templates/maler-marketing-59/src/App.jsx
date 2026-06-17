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
      

<nav className="fixed top-0 w-full z-50 bg-blue-50/80 backdrop-blur-md border-b border-blue-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white">
                    M
                </span>
                Maler Marketing
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">Über uns</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Leistungen</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Erfolge</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded hover:bg-slate-800 transition-all" href="#contact">
                Kontakt aufnehmen
            </a>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-slate-600 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Spezialisiert auf Malerbetriebe
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Der digitale Anstrich für <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600">Ihren Handwerksbetrieb.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Wir helfen Malermeister:innen dabei, online sichtbar zu werden, qualifizierte Mitarbeiter zu finden und lukrative Aufträge zu gewinnen.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10" href="#contact">
                    Kostenlose Analyse starten
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-blue-200 text-slate-700 rounded text-sm font-medium hover:bg-blue-50 transition-all" href="#services">
                    Was wir tun
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-blue-100" id="about">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Wir verstehen Ihr Handwerk.</h2>
<div className="space-y-6 text-slate-500 font-normal leading-relaxed">
<p>
                        Als Malerbetrieb stehen Sie täglich auf der Baustelle und sorgen für perfekte Ergebnisse. Wir sorgen dafür, dass diese Ergebnisse auch gesehen werden.
                    </p>
<p>
                        Die Zeiten von Branchenbucheinträgen sind vorbei. Ihre Kunden suchen heute bei Google nach "Maler in meiner Nähe". Wenn Sie dort nicht auftauchen, existieren Sie für diese Kunden nicht. Wir ändern das – mit Strategien, die speziell für das Malerhandwerk entwickelt wurden.
                    </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="p-4 bg-white rounded border border-blue-100 shadow-sm">
<div className="text-2xl font-semibold text-slate-900 mb-1">100%</div>
<div className="text-xs text-slate-500">Fokus auf Handwerk</div>
</div>
<div className="p-4 bg-white rounded border border-blue-100 shadow-sm">
<div className="text-2xl font-semibold text-slate-900 mb-1">24/7</div>
<div className="text-xs text-slate-500">Digitale Sichtbarkeit</div>
</div>
</div>
</div>
<div className="relative bg-white rounded-xl aspect-square overflow-hidden border border-blue-100 shadow-sm">

<div className="absolute inset-0 flex items-center justify-center text-blue-50">
<iconify-icon height="200" icon="solar:paint-roller-linear" width="200"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur border border-blue-100 rounded-lg shadow-lg shadow-blue-900/5">
<div className="flex items-start gap-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-full">
<iconify-icon height="24" icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Steigende Anfragen</p>
<p className="text-xs text-slate-500 mt-1">Durch gezielte lokale SEO Maßnahmen erreichen wir Kunden genau dann, wenn sie nach einem Maler suchen.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-blue-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Was wir tun.</h2>
<p className="text-slate-500">Maßgeschneiderte Lösungen, die Ihren Terminkalender füllen.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">SEO für Maler</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Wir optimieren Ihre Seite so, dass Sie bei Begriffen wie "Fassadensanierung" oder "Malerarbeiten" lokal auf Platz 1 stehen.
                    </p>
</div>

<div className="group p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:megaphone-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Online Marketing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Gezielte Werbeanzeigen auf Google und Social Media, um lukrative Privat- und Gewerbekunden zu erreichen.
                    </p>
</div>

<div className="group p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Webdesign</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Moderne Webseiten, die Vertrauen schaffen. Zeigen Sie Ihre Referenzobjekte in bestem Licht. Mobile-First und schnell.
                    </p>
</div>

<div className="group p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5 transition-all">
<div className="w-10 h-10 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-slate-700 mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Google MyBusiness</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Pflege und Optimierung Ihres Google Karten-Eintrags für maximale lokale Sichtbarkeit und positive Bewertungen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-blue-100" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Stimmen aus dem Handwerk.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-blue-100" height="32" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 mb-6 relative z-10 text-sm leading-loose">
                        "Endlich eine Agentur, die nicht nur 'Marketing-Sprech' draufhat, sondern versteht, dass wir Aufträge brauchen und keine Klicks. Unser Kalender ist voll."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xs">MK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Michael Klein</div>
<div className="text-xs text-slate-400">Malermeister aus Köln</div>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-blue-100" height="32" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 mb-6 relative z-10 text-sm leading-loose">
                        "Die neue Website ist der Wahnsinn. Kunden rufen an und beziehen sich direkt auf unsere Referenzbilder. Danke an das Team von Maler Marketing."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xs">TS</div>
<div>
<div className="text-sm font-semibold text-slate-900">Thomas Schmidt</div>
<div className="text-xs text-slate-400">Geschäftsführer Farbwerke</div>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-blue-100" height="32" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-slate-600 mb-6 relative z-10 text-sm leading-loose">
                        "Wir haben über die Google Ads Kampagne innerhalb von 4 Wochen zwei neue Gesellen eingestellt. Das Recruiting funktioniert super."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-xs">SW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sabine Weber</div>
<div className="text-xs text-slate-400">Malerbetrieb Weber</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-t border-slate-800" id="contact">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Bereit für mehr Aufträge?</h2>
<p className="text-slate-400 mb-8">
                Füllen Sie das Formular aus. Wir melden uns umgehend für eine kostenlose Erstberatung.
            </p>
<div className="bg-white rounded-2xl p-6 sm:p-8 text-left shadow-2xl shadow-black/50">

<form action="https://systeme.io/embedded/33801483/subscription" className="space-y-4" method="post">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1" htmlFor="first_name">Vorname</label>
<input className="w-full rounded-lg border border-slate-200 bg-blue-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" id="first_name" name="first_name" placeholder="Max" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1" htmlFor="email">E-Mail Adresse</label>
<input className="w-full rounded-lg border border-slate-200 bg-blue-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" id="email" name="email" placeholder="max@malerbetrieb.de" required="" type="text"/>
</div>
<div className="f-row pt-2">
<button className="btn w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2" type="submit">
                            Kostenlos Anfragen
                            <iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-slate-400 text-center mt-4">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Keine Werbung, nur relevante Infos.
                    </p>
</form>

</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-blue-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-900">Maler Marketing</span>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Impressum</a>
<a className="hover:text-slate-900" href="#">Datenschutz</a>
<a className="hover:text-slate-900" href="#">AGB</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 Maler Marketing. Alle Rechte vorbehalten.
            </div>
</div>
</footer>

    </>
  );
}
