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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-slate-800 font-semibold tracking-tight text-sm uppercase">Haus des Malers</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-sky-600 transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-sky-600 transition-colors" href="#projekte">Referenzen</a>
<a className="hover:text-sky-600 transition-colors" href="#ueber-uns">Team</a>
<a className="hover:text-sky-600 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-xs font-medium text-slate-500 hover:text-sky-600 flex items-center gap-1.5" href="tel:0123456789">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                    0123 456 789
                </a>
<a className="bg-slate-900 hover:bg-sky-600 text-white text-xs font-medium py-2.5 px-5 rounded-full transition-all shadow-sm hover:shadow-sky-500/30 flex items-center gap-2" href="#kontakt">
                    Angebot anfordern
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
<div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 left-0 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    Termine für 2024 verfügbar
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Frische Farben für <br/> Ihr Zuhause.
                </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                    Ihr zuverlässiger Partner für Malerarbeiten, Renovierungen und Fassadengestaltung. Wir arbeiten sauber, pünktlich und mit einem Lächeln.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium h-12 px-8 rounded-lg transition-all flex items-center justify-center shadow-lg shadow-sky-500/20" href="#kontakt">
                        Kostenloses Angebot
                    </a>
<a className="w-full sm:w-auto bg-white border border-slate-200 hover:border-sky-200 hover:bg-sky-50/50 text-slate-700 text-sm font-medium h-12 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group" href="#projekte">
<iconify-icon className="group-hover:text-sky-500 transition-colors" icon="solar:gallery-linear" width="18"></iconify-icon>
                        Unsere Arbeiten
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<span className="text-slate-700 font-semibold block">500+ Glückliche Kunden</span>
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/10 border border-slate-100 aspect-[4/3] group">

<img alt="Maler bei der Arbeit" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-fade-in-up">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Meisterbetrieb</p>
<p className="text-[10px] text-slate-500">Qualität, auf die Sie bauen können.</p>
</div>
</div>
</div>

<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-sky-50 rounded-full -z-10"></div>
<div className="absolute -left-4 -top-4 w-16 h-16 bg-orange-50 rounded-full -z-10"></div>
</div>
</div>
</header>

<section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200/50" id="leistungen">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sky-600 font-medium text-xs tracking-wider uppercase mb-2 block">Was wir tun</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Unser Handwerk</h2>
<p className="text-slate-500 font-light">
                    Wir bieten umfassende Lösungen für Innen- und Außenbereiche. Mit hochwertigen Materialien und modernster Technik.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6">
<iconify-icon icon="solar:paint-roller-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Malerarbeiten Innen</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Präzise Anstriche, Lackierarbeiten und kreative Wandtechniken für Ihr Wohlfühlzuhause.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:home-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fassadengestaltung</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Schutz und Schönheit für Ihre Außenwände. Putz, Anstrich und Wärmedämmung.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
<iconify-icon icon="solar:wallpaper-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Tapezieren</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Muster-, Vlies- oder Fototapeten. Wir sorgen für perfekte Übergänge und glatte Wände.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-6">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Bodenbeläge</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Verlegung von Laminat, Vinyl, Teppich und Parkett inklusive fachgerechter Untergrundvorbereitung.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-6">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Lackierarbeiten</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Türen, Fenster, Heizkörper oder Möbel. Wir lassen altes in neuem Glanz erstrahlen.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-6">
<iconify-icon icon="solar:umbrella-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Wasserschaden</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Schnelle Hilfe bei Wasser- und Schimmelschäden. Trocknung, Sanierung und Renovierung.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-4">
<div className="text-4xl font-semibold text-sky-500 mb-2 tracking-tight">15+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Jahre Erfahrung</div>
</div>
<div className="p-4">
<div className="text-4xl font-semibold text-sky-500 mb-2 tracking-tight">800+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Räume Gestaltet</div>
</div>
<div className="p-4">
<div className="text-4xl font-semibold text-sky-500 mb-2 tracking-tight">100%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Termintreue</div>
</div>
<div className="p-4">
<div className="text-4xl font-semibold text-sky-500 mb-2 tracking-tight">5★</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Google Bewertung</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="projekte">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Aktuelle Projekte</h2>
<p className="text-slate-500 font-light">
                        Lassen Sie sich inspirieren. Hier sehen Sie eine Auswahl unserer kürzlich fertiggestellten Arbeiten.
                    </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors" href="#kontakt">
                    Projekt anfragen
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
<img alt="Bright Bedroom" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] text-white font-medium mb-2">Innenraum</span>
<p className="text-white font-medium text-lg">Wohnungssanierung Mitte</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
<img alt="Modern Interior" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2573&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] text-white font-medium mb-2">Neubau</span>
<p className="text-white font-medium text-lg">Einfamilienhaus Komplett</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
<img alt="Facade" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&amp;w=2569&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] text-white font-medium mb-2">Außenbereich</span>
<p className="text-white font-medium text-lg">Fassadenanstrich Weiß</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-sky-50 border border-sky-100 aspect-[4/3] flex flex-col items-center justify-center p-8 text-center">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-sky-500 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:paint-roller-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Ihr Projekt als nächstes?</h3>
<p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto">Kontaktieren Sie uns für eine unverbindliche Beratung vor Ort.</p>
<a className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium h-10 px-6 rounded-full transition-all flex items-center justify-center" href="#kontakt">
                        Jetzt anfragen
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex gap-1 text-orange-400 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-xl md:text-3xl font-medium text-slate-900 leading-tight mb-8">
                "Endlich ein Handwerker, der hält was er verspricht. Super sauber gearbeitet, freundliches Team und das Ergebnis ist perfekt."
            </blockquote>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">S</div>
<div className="text-left">
<div className="font-semibold text-slate-900 text-sm">Sandra Weiss</div>
<div className="text-slate-400 text-xs">Privatkundin, Hamburg</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<span className="text-sky-600 font-medium text-xs tracking-wider uppercase mb-2 block">Kontakt</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Wir freuen uns auf Sie</h2>
<p className="text-slate-500 mb-10 font-light leading-relaxed">
                        Egal ob kleiner Anstrich oder Großprojekt – wir beraten Sie gerne. Rufen Sie uns an oder nutzen Sie das Formular. Wir melden uns innerhalb von 24 Stunden.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-1">Rufen Sie uns an</div>
<a className="text-lg text-slate-600 hover:text-sky-600 font-medium block" href="tel:+49123456789">+49 (0) 123 456 789</a>
<span className="text-xs text-slate-400">Mo-Fr, 08:00 - 18:00 Uhr</span>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-1">Schreiben Sie uns</div>
<a className="text-lg text-slate-600 hover:text-sky-600 font-medium block" href="mailto:info@hausdesmalers.de">info@hausdesmalers.de</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-sky-500 group-hover:bg-sky-50 transition-colors shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-1">Besuchen Sie uns</div>
<span className="text-slate-600 block">Farbenstraße 1</span>
<span className="text-slate-600 block">10115 Berlin</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1" htmlFor="first-name">Vorname</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="first-name" placeholder="Max" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1" htmlFor="last-name">Nachname</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="last-name" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1" htmlFor="email">E-Mail</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="email" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1" htmlFor="service">Worum geht es?</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all appearance-none text-slate-600 cursor-pointer" id="service">
<option>Innenanstrich</option>
<option>Fassadenarbeiten</option>
<option>Lackieren</option>
<option>Boden verlegen</option>
<option>Sonstiges</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1" htmlFor="message">Nachricht</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 resize-none" id="message" placeholder="Wie können wir Ihnen helfen?" rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:bg-sky-500 checked:border-sky-500 transition-all" id="privacy" type="checkbox"/>
<span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</span>
</div>
<label className="text-xs text-slate-500 leading-tight select-none cursor-pointer" htmlFor="privacy">
                                Ich stimme der Datenschutzerklärung zu.
                            </label>
</div>
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-sky-500/20 mt-2 flex items-center justify-center gap-2" type="button">
                            Nachricht absenden
                            <iconify-icon icon="solar:plain-3-bold" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-sm uppercase">Haus des Malers</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-6">
                        Wir bringen Farbe in Ihr Leben. Qualität, Zuverlässigkeit und Sauberkeit stehen bei uns an erster Stelle.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="14"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-sm mb-5">Leistungen</h4>
<ul className="space-y-3 text-xs text-slate-500 font-medium">
<li><a className="hover:text-sky-600 transition-colors" href="#">Innenanstrich</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Fassadengestaltung</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Tapezierarbeiten</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Bodenbeläge</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Lackieren</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-sm mb-5">Über uns</h4>
<ul className="space-y-3 text-xs text-slate-500 font-medium">
<li><a className="hover:text-sky-600 transition-colors" href="#">Unser Team</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Karriere / Jobs</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Partner</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Referenzen</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-semibold text-sm mb-5">Rechtliches</h4>
<ul className="space-y-3 text-xs text-slate-500 font-medium">
<li><a className="hover:text-sky-600 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">AGB</a></li>
<li><a className="hover:text-sky-600 transition-colors" href="#">Cookie Einstellungen</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2024 Haus des Malers GmbH. Alle Rechte vorbehalten.
                </p>
<div className="flex gap-6">
<span className="flex items-center gap-2 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Status: Betriebsbereit
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
