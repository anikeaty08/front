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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border border-white/40 shadow-sm px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/70">

<a className="flex items-center gap-2.5 group" href="#">
<div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-1.5 rounded-lg group-hover:scale-105 transition-transform text-white shadow-lg shadow-emerald-500/20">
<iconify-icon height="24" icon="solar:tooth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Dentoglobal<span className="text-slate-400 font-normal">.career</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-emerald-600" href="#">Über uns</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-emerald-600" href="#benefits">Benefits</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-emerald-600" href="#culture">Kultur</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-emerald-600" href="#openings">Offene Stellen</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 bg-slate-900 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-slate-800 text-white border border-transparent" href="#apply">
                    Jetzt bewerben
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 p-1">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium tracking-wide uppercase">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Wir stellen ein
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900">
                        Der nächste Schritt <br/> für Ihre 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Karriere.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Arbeiten Sie in einer der modernsten Zahnkliniken Deutschlands. High-Tech Ausstattung, überdurchschnittliches Gehalt und ein Team, das zusammenhält.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-600 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-1 hover:bg-emerald-700 text-white" href="#apply">
                            Initiativbewerbung
                            <iconify-icon height="18" icon="solar:file-send-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:border-emerald-200 hover:text-emerald-700" href="#benefits">
                            Benefits ansehen
                            <iconify-icon height="18" icon="solar:round-alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-6">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Werden Sie Teil des Teams</p>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500">
<iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon>
<span>4.9 Kununu Bewertung</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl group shadow-slate-200 border border-white">
<img alt="Dental Office" className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105 saturate-[0.9] group-hover:saturate-100" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-950/70"></div>

<div className="absolute top-8 right-8 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg bg-white/10 text-white flex items-center gap-2">
<iconify-icon className="text-emerald-300" icon="solar:medal-ribbon-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-wide">Top Arbeitgeber 2024</span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95 border border-white/50">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-emerald-600">Technologie</p>
<p className="font-semibold text-slate-900 text-sm">Digitale Workflows &amp; DVT</p>
</div>
<div className="p-3 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
<iconify-icon height="24" icon="solar:scanner-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center md:text-left">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">5</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Standorte</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">120+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Mitarbeiter</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">32</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Behandlungsräume</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-1">100%</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Digitalisiert</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Warum <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Dentoglobal?</span>
</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Wir bieten mehr als nur einen Arbeitsplatz. Wir bieten eine Umgebung, in der Exzellenz gefördert und Leistung wertgeschätzt wird.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Top Vergütung</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        Attraktives Festgehalt kombiniert mit einem transparenten Umsatzbeteiligungsmodell ohne Deckelung.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Flexible Arbeitszeiten</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        4-Tage-Woche möglich. Schichtmodelle, die sich Ihrem Leben anpassen, nicht umgekehrt.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Weiterbildung</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        Jährliches Budget von 2.500€ für externe Fortbildungen sowie interne Curricula und Masterclasses.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:monitor-camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">High-Tech Ausstattung</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        Arbeiten Sie mit Intraoralscannern, DVT, Mikroskopen und modernster Lasertechnologie.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Starkes Backoffice</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        Konzentrieren Sie sich zu 100% auf Ihre Patienten. Wir übernehmen Verwaltung, Abrechnung und Marketing.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-slate-900">Gesundheit &amp; Events</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        Urban Sports Club Mitgliedschaft, E-Bike Leasing und legendäre Team-Events im Sommer und Winter.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative overflow-hidden" id="culture">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">Unsere Kultur</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Lernen Sie Ihre neuen <span className="text-emerald-600">Kollegen</span> kennen
                    </h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Wir glauben an Mentoring und Austausch auf Augenhöhe. Hier sind einige Köpfe hinter Dentoglobal.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[4/5] bg-slate-200 relative">
<img alt="Dr. Alex Chen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-white font-medium text-lg leading-relaxed mb-6">"Die Möglichkeit, komplexe Fälle im Team zu besprechen und modernste Technik zu nutzen, hat meine Entwicklung enorm beschleunigt."</p>
<div>
<h4 className="text-lg font-semibold text-white">Dr. Alex Chen</h4>
<p className="text-sm font-medium text-slate-300">Zahnarzt, seit 4 Jahren dabei</p>
</div>
</div>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden cursor-pointer lg:-mt-8">
<div className="aspect-[4/5] bg-emerald-900 relative">
<img alt="Dr. Sofia Rodriguez" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<iconify-icon className="text-white mb-4" height="32" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-white font-medium text-lg leading-relaxed mb-6">"Endlich kann ich mich voll auf die Medizin konzentrieren. Keine Bürokratie, keine Ablenkung. Einfach gute Zahnmedizin."</p>
<div>
<h4 className="text-lg font-semibold text-white">Dr. Sofia Rodriguez</h4>
<p className="text-sm font-medium text-emerald-200">Leitende Zahnärztin</p>
</div>
</div>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[4/5] bg-slate-200 relative">
<img alt="Dr. James Carter" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<iconify-icon className="text-emerald-400 mb-4" height="32" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-white font-medium text-lg leading-relaxed mb-6">"Die Work-Life-Balance ist hier nicht nur ein Schlagwort. Flexible Schichten ermöglichen mir Zeit für meine Familie."</p>
<div>
<h4 className="text-lg font-semibold text-white">Dr. James Carter</h4>
<p className="text-sm font-medium text-slate-300">Kieferchirurg</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Häufig gestellte <span className="text-emerald-600">Fragen</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Alles was Sie über den Bewerbungsprozess wissen müssen.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Wie läuft der Bewerbungsprozess ab?</h2>
<div className="rounded-full p-1.5 text-emerald-600 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Nach Eingang Ihrer Unterlagen melden wir uns innerhalb von 48 Stunden. Es folgt ein kurzes Kennenlerngespräch (online oder telefonisch) und anschließend ein persönliches Treffen inklusive Hospitation in einer unserer Kliniken.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Welche Fachrichtungen werden gesucht?</h2>
<div className="rounded-full p-1.5 text-emerald-600 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Wir suchen aktuell Verstärkung in der Allgemeinen Zahnheilkunde, Endodontie, Kinderzahnheilkunde sowie Oralchirurgie. Auch Vorbereitungsassistenten sind herzlich willkommen.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Bietet Dentoglobal Unterstützung beim Umzug?</h2>
<div className="rounded-full p-1.5 text-emerald-600 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Ja, für Bewerber, die für die Stelle umziehen, bieten wir ein Relocation-Paket an, das Unterstützung bei der Wohnungssuche und einen Umzugskostenzuschuss beinhaltet.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-slate-900 text-white" id="apply">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                        Schnellbewerbung
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        Bereit für den nächsten Schritt?
                    </h2>
<p className="font-medium mb-10 text-lg text-slate-400 leading-relaxed">
                        Kein Anschreiben nötig. Hinterlassen Sie einfach Ihre Kontaktdaten oder laden Sie Ihren CV hoch. Wir melden uns diskret bei Ihnen.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">100% Diskret</h4>
<p className="text-sm text-slate-400 mt-1">Ihre Bewerbung wird streng vertraulich behandelt.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<iconify-icon className="text-emerald-400" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">Schnelle Rückmeldung</h4>
<p className="text-sm text-slate-400 mt-1">Feedback innerhalb von 48 Stunden.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 shadow-2xl">
<form className="space-y-5">
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Vollständiger Name</label>
<div className="relative">
<input className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Dr. Max Mustermann" type="text"/>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
<div className="relative">
<input className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="max@beispiel.de" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
<div className="relative">
<input className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="0176 ..." type="tel"/>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">Spezialisierung</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer">
<option className="text-slate-900">Bitte wählen...</option>
<option className="text-slate-900">Allgemeine Zahnheilkunde</option>
<option className="text-slate-900">Kieferorthopädie</option>
<option className="text-slate-900">Oralchirurgie</option>
<option className="text-slate-900">Assistenzarzt</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-2">CV / LinkedIn (Optional)</label>
<input className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Link zum Profil oder Datei hochladen" type="text"/>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-600 bg-slate-900/50 transition-all checked:border-emerald-500 checked:bg-emerald-500 custom-checkbox" type="checkbox"/>
<div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
</label>
</div>
<button className="w-full bg-emerald-600 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-emerald-500 text-white group" type="button">
                            Bewerbung absenden
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-slate-900 p-1.5 rounded-lg text-white">
<iconify-icon height="20" icon="solar:tooth-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Dentoglobal<span className="text-slate-400 font-normal">.career</span></span>
</a>
<p className="text-slate-500 font-medium leading-relaxed text-sm">
                        Gemeinsam schaffen wir das Lächeln von morgen. Werden Sie Teil unseres Netzwerks aus Exzellenz und Innovation.
                    </p>
<div className="flex gap-4">
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6 text-slate-900">Kontakt Recruiting</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Hauptquartier<br/>Musterstraße 42, 10117 Berlin</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>+49 (0) 30 1234 5678</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0" icon="solar:mailbox-linear" width="18"></iconify-icon>
<span>karriere@dentoglobal.de</span>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-6 text-slate-900">Karriere</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Offene Stellen</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Für Studenten</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Veranstaltungen</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Referenzen</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-6 text-slate-900">Rechtliches</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Cookie Einstellungen</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-400 font-medium text-xs">© 2024 Dentoglobal Zahnärzte GmbH. Alle Rechte vorbehalten.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-500">Systeme operativ</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
