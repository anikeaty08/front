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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-1 group" href="#home">
<span className="text-2xl font-semibold tracking-tighter text-slate-900 group-hover:opacity-80 transition-opacity">
                    code<span className="text-[#008ba8]">artig.</span>
</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 hover:text-[#008ba8] transition-colors font-medium text-sm" href="#home">Home</a>
<a className="text-slate-600 hover:text-[#008ba8] transition-colors font-medium text-sm" href="#leistungen">Leistungen</a>
<a className="text-slate-600 hover:text-[#008ba8] transition-colors font-medium text-sm" href="#ueber-uns">Über uns</a>
<a className="text-slate-600 hover:text-[#008ba8] transition-colors font-medium text-sm" href="#kontakt">Kontakt</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-slate-600 hover:text-[#008ba8] font-medium text-sm transition-colors" href="#login-modal" onclick="document.getElementById('login-modal').classList.remove('hidden')">
<iconify-icon className="text-lg" icon="solar:login-2-linear"></iconify-icon>
                    Login
                </a>
<button className="md:hidden text-slate-600 hover:text-[#008ba8] transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4 shadow-lg absolute w-full" id="mobile-menu">
<a className="block text-slate-600 font-medium text-lg hover:text-[#008ba8]" href="#home" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Home</a>
<a className="block text-slate-600 font-medium text-lg hover:text-[#008ba8]" href="#leistungen" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Leistungen</a>
<a className="block text-slate-600 font-medium text-lg hover:text-[#008ba8]" href="#ueber-uns" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Über uns</a>
<a className="block text-slate-600 font-medium text-lg hover:text-[#008ba8]" href="#kontakt" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Kontakt</a>
<button className="w-full text-left text-[#008ba8] font-medium text-lg pt-4 border-t border-slate-100 flex items-center gap-2" onclick="document.getElementById('login-modal').classList.remove('hidden'); document.getElementById('mobile-menu').classList.add('hidden')">
<iconify-icon className="text-xl" icon="solar:login-2-linear"></iconify-icon>
                Login
            </button>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white" id="home">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#008ba8]/10 text-[#008ba8] font-medium text-xs mb-8 border border-[#008ba8]/20">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
                    Ihre externe Softwareabteilung
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
                    Wir entwickeln Ihre <br className="hidden md:block"/>
<span className="text-[#008ba8]">individuellen Web-Applikationen.</span>
</h1>
<p className="text-xl md:text-2xl font-medium tracking-tight text-slate-500 mb-10 max-w-3xl mx-auto">
                    Maßgeschneiderte Lösungen für Unternehmen, die über Standard-Software hinausgewachsen sind.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
<a className="bg-[#008ba8] text-white px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-[#007088] transition-all card-shadow inline-flex items-center justify-center gap-2 group" href="#kontakt">
                        Erstgespräch vereinbaren
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-slate-50 hover:text-slate-900 transition-all inline-flex items-center justify-center gap-2" href="#leistungen">
                        Unsere Leistungen
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60" id="leistungen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Software, die sich anpasst – <span className="text-[#008ba8]">nicht umgekehrt.</span>
</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                        Wir sind überzeugt: Software sollte Ihre Abläufe stützen und beschleunigen – nicht behindern. Wir kommen nicht mit einem 100-seitigen Lastenheft, sondern wir sind die externe Softwareabteilung, die einfach anpackt.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 card-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-xl bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center mb-6 border border-[#008ba8]/20">
<iconify-icon className="text-3xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Zentrale Datenverwaltung</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Wir führen verstreute Informationen (Excel-Wildwuchs) in einem sicheren System zusammen, auf das Ihr Team von überall zugreifen kann.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 card-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-xl bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center mb-6 border border-[#008ba8]/20">
<iconify-icon className="text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Kunden- &amp; Partnerportale</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Geben Sie Partnern über gesicherte Portale Zugriff auf relevante Daten. Das sorgt für einen professionellen Auftritt und entlastet Ihr Team.
                        </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 card-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-xl bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center mb-6 border border-[#008ba8]/20">
<iconify-icon className="text-3xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Individuelle Business-Logik</h3>
<p className="text-slate-600 leading-relaxed text-sm">
                            Wir gießen Ihre speziellen kaufmännischen Anforderungen in modernen Code – stabil, flexibel und jederzeit erweiterbar.
                        </p>
</div>
</div>

<div className="mt-20 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 card-shadow overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#008ba8]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                                Navision 2009 / Classic:<br/>
<span className="text-[#008ba8]">Expertise trifft Modernisierung.</span>
</h3>
<p className="text-slate-600 leading-relaxed mb-6">
                                Wir verfügen über tiefgehende Erfahrung mit Navision-Classic-Umgebungen. Wir sichern den Wert Ihrer Daten und machen sie für neue, webbasierte Lösungen nutzbar – ohne das Risiko eines kostspieligen Komplettumstiegs.
                            </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-[#008ba8] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Kein riskanter Komplettumstieg nötig</span>
</li>
<li className="flex items-start gap-3 text-slate-700">
<iconify-icon className="text-[#008ba8] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Sichere Anbindung an moderne Weboberflächen</span>
</li>
</ul>
</div>
<div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center border border-slate-100 h-full min-h-[250px]">
<iconify-icon className="text-7xl text-[#008ba8]/20" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#008ba8]/20 via-slate-900 to-slate-900 z-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-block px-3 py-1 bg-white/10 text-[#008ba8] rounded-full text-xs font-medium mb-6 border border-white/5">
                    Technologisches Fundament
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                    Framework <span className="text-[#008ba8]">rene.</span>
</h2>
<p className="text-lg md:text-xl font-medium tracking-tight text-slate-300 mb-10 leading-relaxed">
                    Das digitale Abbild Ihres Unternehmens auf einer gemeinsamen, sicheren Basis.
                </p>
<div className="grid sm:grid-cols-3 gap-6 text-left">
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#008ba8] mb-4" icon="solar:bolt-linear"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Schnellstart</h4>
<p className="text-slate-400 text-sm">Grundfunktionen sind sofort einsatzbereit. Wir konzentrieren uns auf Ihre individuelle Logik.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#008ba8] mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Hochsicher</h4>
<p className="text-slate-400 text-sm">Ein ausgeklügeltes Rechtesystem trennt öffentliche, interne und exklusive Datenbereiche sicher ab.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#008ba8] mb-4" icon="solar:layers-linear"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Ein System</h4>
<p className="text-slate-400 text-sm">Website, internes Tool und Kundenportal – alles greift auf dieselbe strukturierte Datenbasis zu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="ueber-uns">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                            Kaufmännisches Hirn trifft auf <span className="text-[#008ba8]">moderne Web-Technik.</span>
</h2>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>
                                Ich bin <strong>Michael Zeiler</strong>, Gründer der codeartig GmbH. 
                            </p>
<p>
                                Was uns von anderen unterscheidet, ist mein Hintergrund: Ich bin gelernter Buchhalter und habe viele Jahre komplexe ERP-Systeme implementiert, bevor ich mich selbstständig machte. Ich bin der Übersetzer zwischen Ihren Geschäftsprozessen und dem Bildschirm.
                            </p>
<p>
                                Wo andere nur "Datenfelder" sehen, sehe ich Warenflüsse, Abrechnungslogik und Kundenbeziehungen. Dadurch erkennen wir Stolpersteine in Ihren Abläufen, bevor diese überhaupt im Code landen.
                            </p>
<div className="bg-slate-50 border-l-4 border-[#008ba8] p-6 rounded-r-xl mt-8">
<p className="text-sm text-slate-700 italic">
                                    "Wir bringen Ordnung in Ihre Daten, ohne sie kompliziert aussehen zu lassen. Wir sind nicht nur ein Softwarehaus – wir sind codeartig: bodenständig, mit Handschlagqualität."
                                </p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 relative">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-[#008ba8] text-2xl" icon="solar:bookmark-circle-linear"></iconify-icon>
                            Erfahrung, auf die Sie bauen können
                        </h3>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 card-shadow">
<div className="w-10 h-10 rounded-lg bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Wiener Börse</h4>
<p className="text-xs text-slate-500 mt-1">Umprogrammierung Navision-Kern (Vorsteuerlogik).</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 card-shadow">
<div className="w-10 h-10 rounded-lg bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:health-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Rotes Kreuz Österreich</h4>
<p className="text-xs text-slate-500 mt-1">Webportal Einsatz-Erfassung &amp; Abrechnung.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 card-shadow">
<div className="w-10 h-10 rounded-lg bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Profibaustoffe &amp; Albertina</h4>
<p className="text-xs text-slate-500 mt-1">Gesamtes ERP, Produktionsmaschinen &amp; Planungs-Weblösungen.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="kontakt">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                        Reden wir über Ihr <span className="text-[#008ba8]">Projekt.</span>
</h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ein kurzes Telefonat klärt oft mehr als lange E-Mail-Ketten. Ich höre mir gerne an, wo Sie in Ihren Abläufen gerade stehen.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 card-shadow text-center md:text-left flex flex-col justify-center">
<div className="w-16 h-16 rounded-full bg-[#008ba8]/10 text-[#008ba8] flex items-center justify-center mb-6 mx-auto md:mx-0 border border-[#008ba8]/20">
<iconify-icon className="text-3xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Michael Zeiler</h3>
<p className="text-slate-500 text-sm mb-8">Inhaber &amp; Projektleitung</p>
<div className="space-y-4">
<a className="flex items-center justify-center md:justify-start gap-4 text-slate-700 hover:text-[#008ba8] transition-colors group p-3 rounded-xl hover:bg-slate-50" href="tel:+436769612771">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-[#008ba8]" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm font-medium">+43 676 / 961 27 71</span>
</a>
<a className="flex items-center justify-center md:justify-start gap-4 text-slate-700 hover:text-[#008ba8] transition-colors group p-3 rounded-xl hover:bg-slate-50" href="mailto:m.zeiler@codeartig.at">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-[#008ba8]" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm font-medium">m.zeiler@codeartig.at</span>
</a>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 card-shadow">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Rückruf anfordern</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Formular gesendet (Demo)');">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">Name / Firma</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008ba8]/20 focus:border-[#008ba8] transition-all text-sm bg-slate-50 focus:bg-white" id="name" placeholder="Max Mustermann" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Telefonnummer</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008ba8]/20 focus:border-[#008ba8] transition-all text-sm bg-slate-50 focus:bg-white" id="phone" placeholder="+43 ..." type="tel"/>
</div>
<button className="w-full bg-[#008ba8] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#007088] transition-colors mt-2 shadow-md shadow-[#008ba8]/20" type="submit">
                                Absenden
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-slate-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-slate-900">
                    code<span className="text-[#008ba8]">artig.</span>
</span>
<span className="text-slate-400 text-sm ml-4">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-[#008ba8] text-sm transition-colors" href="#">Impressum</a>
<a className="text-slate-500 hover:text-[#008ba8] text-sm transition-colors" href="#">Datenschutz</a>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4" id="login-modal">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="document.getElementById('login-modal').classList.add('hidden')"></div>

<div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-10 w-full max-w-md relative z-10 transform transition-all">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors" onclick="document.getElementById('login-modal').classList.add('hidden')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="text-center mb-8">
<span className="text-2xl font-semibold tracking-tighter text-slate-900 block mb-2">
                    code<span className="text-[#008ba8]">artig.</span>
</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Willkommen zurück</h2>
<p className="text-slate-500 text-sm mt-1">Melden Sie sich in Ihrem Arbeitsbereich an.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">E-Mail Adresse</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008ba8]/20 focus:border-[#008ba8] transition-all text-sm" id="email" placeholder="name@firma.at" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="password">Passwort</label>
<a className="text-xs text-[#008ba8] hover:underline" href="#">Vergessen?</a>
</div>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008ba8]/20 focus:border-[#008ba8] transition-all text-sm" id="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center pt-2">
<input className="h-4 w-4 rounded border-slate-300 text-[#008ba8] focus:ring-[#008ba8] accent-[#008ba8]" id="remember-me" type="checkbox"/>
<label className="ml-2 block text-xs text-slate-600" htmlFor="remember-me">
                        Angemeldet bleiben
                    </label>
</div>
<button className="w-full bg-[#008ba8] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#007088] transition-colors shadow-md shadow-[#008ba8]/20 flex justify-center items-center gap-2 mt-4" type="submit">
<iconify-icon className="text-lg" icon="solar:login-2-linear"></iconify-icon>
                    Anmelden
                </button>
</form>
</div>
</div>

    </>
  );
}
