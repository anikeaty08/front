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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-[#007AFF] text-white flex items-center justify-center">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-[#007AFF] transition-colors">Dr. Weber</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#007AFF] transition-colors" href="#services">Leistungen</a>
<a className="hover:text-[#007AFF] transition-colors" href="#about">Über uns</a>
<a className="hover:text-[#007AFF] transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-red-500 text-sm font-medium md:hidden" href="tel:112">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    Notfall
                </a>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-white transition-colors bg-[#007AFF] rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="#appointment">
                    Termin buchen
                </a>
</div>
</div>
</nav>

<main className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 animate-fade-in">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007AFF] text-xs font-medium border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#007AFF]"></span>
</span>
                    Wir nehmen neue Patienten auf
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Ihre Gesundheit in <br className="hidden md:block"/>
<span className="text-[#007AFF]">besten Händen.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    Moderne Hausarztpraxis in Berlin. Wir verbinden medizinische Expertise mit menschlicher Nähe und modernster Technik für Ihr Wohlbefinden.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center h-12 px-6 text-base font-medium text-white transition-all bg-[#007AFF] rounded-full hover:bg-blue-600 shadow-lg shadow-blue-500/20" href="#appointment">
                        Termin online buchen
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 text-base font-medium text-slate-700 transition-colors bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300" href="#contact">
                        Kontakt aufnehmen
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-slate-100 rounded-[2rem] blur-2xl opacity-60 -z-10"></div>
<img alt="Arzt lächelt freundlich" className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl border border-white/50" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-start gap-3">
<div className="p-2 bg-green-50 text-green-600 rounded-lg">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900 tracking-tight">Top Bewertung</p>
<p className="text-sm text-slate-500">4.9/5 von über 500 Patienten auf Jameda.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="px-6 py-8">
<div className="max-w-6xl mx-auto">
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 grid md:grid-cols-2 gap-8 md:gap-16">

<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6 flex items-center gap-2">
<iconify-icon className="text-[#007AFF]" icon="solar:clock-circle-linear"></iconify-icon>
                        Sprechzeiten
                    </h3>
<ul className="space-y-3">
<li className="flex justify-between text-sm md:text-base border-b border-slate-200 pb-2 border-dashed">
<span className="font-medium text-slate-900">Montag - Donnerstag</span>
<span>08:00 - 13:00 &amp; 14:30 - 18:00</span>
</li>
<li className="flex justify-between text-sm md:text-base border-b border-slate-200 pb-2 border-dashed">
<span className="font-medium text-slate-900">Freitag</span>
<span>08:00 - 14:00</span>
</li>
<li className="flex justify-between text-sm md:text-base text-slate-400">
<span>Samstag &amp; Sonntag</span>
<span>Geschlossen</span>
</li>
</ul>
</div>

<div className="flex flex-col justify-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-red-500" icon="solar:shield-warning-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-semibold text-red-500 uppercase tracking-wide">Notfallkontakt</span>
</div>
<p className="text-slate-500 text-sm mb-6">Außerhalb der Sprechzeiten wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst.</p>
<a className="group flex items-center justify-between w-full p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors border border-red-100 animate-heartbeat" href="tel:116117">
<div>
<span className="block text-xs text-red-600 font-medium">Bereitschaftsdienst</span>
<span className="block text-xl font-bold text-red-600 tracking-tight">116 117</span>
</div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Unser Leistungsspektrum</h2>
<p className="text-slate-500">Umfassende medizinische Versorgung mit modernster Diagnostik, individuell auf Ihre Bedürfnisse abgestimmt.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-blue-100 text-[#007AFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Allgemeinmedizin</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Umfassende hausärztliche Betreuung, Diagnose und Therapie akuter und chronischer Erkrankungen.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Vorsorge</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Regelmäßige Check-ups, Krebsvorsorge und Gesundheitsberatung zur Prävention.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Impfungen</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Impfberatung, Reiseimpfungen und Durchführung aller Standardimpfungen.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:monitor-camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">EKG &amp; Diagnostik</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Ruhe- und Belastungs-EKG, Lungenfunktionstest und Ultraschalluntersuchungen.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50 border-y border-slate-100" id="about">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<img alt="Dr. Weber Portrait" className="w-full h-[400px] object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="flex items-center gap-2 text-[#007AFF] font-medium text-sm">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
                        Über Ihren Arzt
                    </div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Dr. med. Thomas Weber</h2>
<p className="text-slate-600 leading-relaxed">
                        "Medizin ist für mich mehr als nur die Behandlung von Symptomen. Es geht um das Verständnis des ganzen Menschen. In meiner Praxis lege ich größten Wert auf ein vertrauensvolles Verhältnis, ausreichend Zeit für jeden Patienten und eine Diagnose auf Augenhöhe."
                    </p>
<div className="space-y-3 pt-2">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#007AFF] mt-1" icon="solar:diploma-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600">Facharzt für Innere Medizin und Allgemeinmedizin</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#007AFF] mt-1" icon="solar:buildings-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600">Studium an der Charité Berlin, 15 Jahre Praxiserfahrung</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-10 text-center">Häufige Fragen</h2>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:ring-2 open:ring-[#007AFF] open:ring-opacity-50 open:border-transparent">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-medium text-slate-900">Nehmen Sie aktuell neue Patienten auf?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        Ja, wir nehmen derzeit neue Patienten auf. Bitte nutzen Sie unsere Online-Terminbuchung oder rufen Sie uns an, um einen Ersttermin zu vereinbaren. Bitte bringen Sie zum ersten Termin vorhandene Befunde und Ihren Impfpass mit.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:ring-2 open:ring-[#007AFF] open:ring-opacity-50 open:border-transparent">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-medium text-slate-900">Ist die Praxis barrierefrei erreichbar?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        Selbstverständlich. Unsere Praxis befindet sich im Erdgeschoss und verfügt über einen ebenerdigen Zugang sowie ein behindertengerechtes WC.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 open:ring-2 open:ring-[#007AFF] open:ring-opacity-50 open:border-transparent">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<span className="font-medium text-slate-900">Wie kann ich ein Folgerezept bestellen?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4">
                        Für Wiederholungsrezepte nutzen Sie bitte unser Online-Formular (unten im Footer verlinkt) oder sprechen Sie auf unseren Rezept-Anrufbeantworter. Das Rezept liegt am nächsten Werktag zur Abholung bereit (E-Rezept).
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-[#007AFF] text-white flex items-center justify-center">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Praxis Dr. Weber</span>
</a>
<p className="text-sm max-w-sm mb-6">Ihre Hausarztpraxis für eine moderne, vertrauensvolle und ganzheitliche medizinische Versorgung.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Schnellzugriff</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#007AFF] transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:document-add-linear"></iconify-icon> Rezept bestellen</a></li>
<li><a className="hover:text-[#007AFF] transition-colors flex items-center gap-2" href="#appointment"><iconify-icon icon="solar:calendar-add-linear"></iconify-icon> Termin buchen</a></li>
<li><a className="hover:text-[#007AFF] transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Anfahrt &amp; Parken</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Rechtliches</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutzerklärung</a></li>
<li><a className="hover:text-white transition-colors" href="#">Patienteninformation</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
<p>© 2023 Praxis Dr. Weber. Alle Rechte vorbehalten.</p>
<p className="mt-2 md:mt-0 text-slate-500">Design: Minimalist &amp; Accessible</p>
</div>
</footer>

    </>
  );
}
