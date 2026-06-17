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
      

<div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply z-50" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center flex items-center justify-center gap-2 relative z-50 overflow-hidden">
<div className="absolute inset-0 bg-white/10 w-1/2 -skew-x-12 -translate-x-full animate-[scroll-left_3s_ease-in-out_infinite]"></div>
<span>Sturmschaden? Unser Notdienst ist 24/7 für dich da!</span>
<a className="underline hover:text-orange-100 transition-colors flex items-center gap-1" href="#kontakt">
            Jetzt anrufen <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-100 transition-all supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="flex h-20 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/20 relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="relative z-10" icon="solar:home-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-neutral-950 uppercase tracking-widest">Rooftop</span>
</a>

<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full" href="#ueber-uns">Über uns</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full" href="#prozess">Prozess</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full" href="#leistungen">Leistungen</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full" href="#projekte">Referenzen</a>
<div className="group relative">
<button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors">
                            Mehr <iconify-icon className="w-4 h-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute top-full right-0 mt-4 w-56 rounded-2xl bg-white border border-neutral-100 shadow-2xl shadow-neutral-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden before:absolute before:-top-2 before:right-6 before:w-4 before:h-4 before:bg-white before:rotate-45 before:border-l before:border-t before:border-neutral-100">
<div className="p-2 flex flex-col relative bg-white z-10">
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 rounded-xl transition-colors flex items-center gap-2" href="#bewertungen">
<iconify-icon className="text-orange-500" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Bewertungen
                                </a>
<a className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 rounded-xl transition-colors flex items-center gap-2" href="#faq">
<iconify-icon className="text-orange-500" icon="solar:question-circle-linear" strokeWidth="1.5"></iconify-icon> Häufige Fragen
                                </a>
</div>
</div>
</div>
</nav>

<div className="flex items-center gap-4">
<a className="group relative inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-2.5 text-sm font-medium text-white overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-neutral-900/20" href="#kontakt">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-orange-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
<span className="relative flex items-center gap-2">Beratung anfragen <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden bg-grid-pattern">

<div className="absolute top-0 -left-40 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
<div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-40 left-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-orange-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-orange-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2 mr-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                            Meisterbetrieb seit 1998
                        </div>
<h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-semibold tracking-tight text-neutral-950 mb-6 leading-[1.05]">
                            Wir bauen <br/>
<span className="relative inline-block">
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Architektur</span>
<svg className="absolute w-full h-4 -bottom-1 left-0 text-orange-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="4"></path></svg>
</span> <br/>
                            für ganz oben.
                        </h1>
<p className="text-lg sm:text-xl leading-relaxed text-neutral-600 mb-10 max-w-lg">
                            Moderne Dachsysteme, die Design und Funktionalität vereinen. Von der energetischen Sanierung bis zum architektonischen Neubau.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300" href="#leistungen">
                                Projekt starten
                            </a>
<a className="group inline-flex items-center justify-center rounded-full bg-white border border-neutral-200 px-8 py-4 text-sm font-medium text-neutral-900 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 gap-2 shadow-sm" href="tel:+49123456789">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
                                0123 456 789
                            </a>
</div>

<div className="flex flex-col gap-4">
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-[0.2em]">Verbaute Premium-Marken</p>
<div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-sm font-semibold tracking-widest text-neutral-800 uppercase">
<span>Braas</span>
<span>Velux</span>
<span>Rheinzink</span>
<span className="hidden sm:inline-block">Bauder</span>
</div>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:max-w-none">

<div className="absolute inset-0 border border-neutral-200 rounded-[2.5rem] rotate-3 scale-105 transition-transform duration-700 hover:rotate-0 hover:scale-100 -z-10"></div>
<div className="absolute inset-0 border border-orange-200 rounded-[2.5rem] -rotate-3 scale-105 transition-transform duration-700 hover:rotate-0 hover:scale-100 -z-10"></div>
<div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-neutral-900/10">

<img alt="Dachdecker Handwerk" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<div className="flex items-center gap-2 text-white mb-2">
<iconify-icon className="text-orange-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Geprüfte Qualität</span>
</div>
<p className="text-white font-medium">Meisterbetrieb seit 25 Jahren</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
<iconify-icon className="w-5 h-5 -rotate-45" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-10 -left-8 sm:-left-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-neutral-900/5 animate-float border border-neutral-100/50 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Energetisch</p>
<p className="text-xs text-neutral-500">KfW-Förderfähig</p>
</div>
</div>

<div className="absolute bottom-20 -right-8 sm:-right-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl shadow-neutral-900/5 animate-float-delayed border border-neutral-100/50 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">4.9/5 Sterne</p>
<p className="text-xs text-neutral-500">120+ Bewertungen</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-neutral-950 py-4 overflow-hidden flex whitespace-nowrap border-y border-neutral-800 relative z-20">
<div className="animate-scroll-left flex items-center gap-8">

<span className="text-sm font-medium tracking-widest text-neutral-400 uppercase flex items-center gap-8">
<span>Steildach</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Flachdach</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Fassade</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Zimmerei</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Spenglerei</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Photovoltaik</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
</span>
<span className="text-sm font-medium tracking-widest text-neutral-400 uppercase flex items-center gap-8">
<span>Steildach</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Flachdach</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Fassade</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Zimmerei</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Spenglerei</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
<span>Photovoltaik</span> <iconify-icon className="text-orange-500" icon="solar:asteroid-linear"></iconify-icon>
</span>
</div>
</div>

<section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="prozess">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-neutral-100 rounded-full -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-neutral-50 rounded-full -z-10"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Der Weg zum neuen Dach</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
                        Strukturiert. Transparent. Stressfrei.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent z-0"></div>

<div className="relative z-10 group">
<div className="text-[8rem] font-semibold text-neutral-50 absolute -top-16 -left-4 -z-10 transition-transform group-hover:-translate-y-2">01</div>
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-orange-200 transition-colors">
<div className="absolute inset-0 bg-orange-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="text-neutral-700 group-hover:text-orange-500 relative z-10 transition-colors" icon="solar:chat-round-call-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-neutral-900 mb-2">1. Beratung</h3>
<p className="text-sm text-center text-neutral-600 leading-relaxed">Kostenlose Vor-Ort-Besichtigung und Aufnahme deiner Wünsche.</p>
</div>

<div className="relative z-10 group mt-8 md:mt-0">
<div className="text-[8rem] font-semibold text-neutral-50 absolute -top-16 -left-4 -z-10 transition-transform group-hover:-translate-y-2">02</div>
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-orange-200 transition-colors">
<div className="absolute inset-0 bg-orange-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="text-neutral-700 group-hover:text-orange-500 relative z-10 transition-colors" icon="solar:pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-neutral-900 mb-2">2. Planung</h3>
<p className="text-sm text-center text-neutral-600 leading-relaxed">Detailliertes Festpreisangebot und Festlegung des Zeitplans.</p>
</div>

<div className="relative z-10 group mt-8 lg:mt-0">
<div className="text-[8rem] font-semibold text-neutral-50 absolute -top-16 -left-4 -z-10 transition-transform group-hover:-translate-y-2">03</div>
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-orange-200 transition-colors">
<div className="absolute inset-0 bg-orange-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="text-neutral-700 group-hover:text-orange-500 relative z-10 transition-colors" icon="solar:hammer-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-neutral-900 mb-2">3. Umsetzung</h3>
<p className="text-sm text-center text-neutral-600 leading-relaxed">Fachgerechte Ausführung durch unsere erfahrenen Meister.</p>
</div>

<div className="relative z-10 group mt-8 lg:mt-0">
<div className="text-[8rem] font-semibold text-neutral-50 absolute -top-16 -left-4 -z-10 transition-transform group-hover:-translate-y-2">04</div>
<div className="w-24 h-24 mx-auto bg-white border border-neutral-100 rounded-2xl shadow-sm flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-orange-200 transition-colors">
<div className="absolute inset-0 bg-orange-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<iconify-icon className="text-neutral-700 group-hover:text-orange-500 relative z-10 transition-colors" icon="solar:check-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-center text-neutral-900 mb-2">4. Abnahme</h3>
<p className="text-sm text-center text-neutral-600 leading-relaxed">Gemeinsame Kontrolle und Übergabe deines neuen Daches.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50 border-y border-neutral-200/50 relative overflow-hidden" id="ueber-uns">
<div className="absolute right-0 top-0 w-1/3 h-full bg-grid-pattern opacity-50 -z-10"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative px-4 sm:px-8 lg:px-0">

<div className="absolute -top-10 -left-10 w-32 h-32 border border-dashed border-orange-300 rounded-full animate-spin-slow -z-10"></div>
<div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay"></div>
</div>

<div className="absolute -bottom-10 -right-4 sm:-right-10 w-48 sm:w-64 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
<img alt="Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508872589572-885ecb121fb6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>

<div className="lg:pl-12 pt-10 lg:pt-0">
<span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Tradition trifft Innovation</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 mb-6 leading-tight">
                            Handwerk, auf das man <br/> bauen kann.
                        </h2>
<p className="text-base text-neutral-600 mb-6 leading-relaxed">
                            Wir verbinden klassische Handwerkstradition mit modernster Technik. Als Familienbetrieb in zweiter Generation wissen wir: Ein Dach muss nicht nur Stürmen trotzen, es prägt den Charakter eines Hauses.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm flex items-start gap-4 hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Meisterqualität</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Zertifizierte Fachkräfte für jedes Gewerk.</p>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm flex items-start gap-4 hover:border-orange-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Termintreue</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Verlässliche Planung ohne böse Überraschungen.</p>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<a className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors" href="#kontakt">
                                Team kennenlernen
                            </a>

<div className="opacity-40">
<svg fill="none" height="40" viewbox="0 0 120 40" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M10 25C15 20 25 10 30 15C35 20 20 35 40 30C60 25 70 10 80 15C90 20 85 35 100 25C110 18 115 15 120 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<span className="text-[10px] font-medium uppercase tracking-widest block text-center mt-1">Michael &amp; Thomas</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="leistungen">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Unsere Expertise</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
                            Rundum-Schutz für dein Gebäude
                        </h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-orange-500 transition-colors group shrink-0" href="#kontakt">
                        Alle Leistungen <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-50 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[320px] flex flex-col justify-end">

<div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 object-cover z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1605814578144-8d960f5451e0?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 group-hover:text-white transition-colors">Steildach &amp; Sanierung</h3>
<p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
                                Klassische Ziegeldeckungen, moderne Schieferarbeiten und energetische Aufsparrendämmung für maximalen Wohnkomfort.
                            </p>
</div>
</div>

<div className="group relative bg-neutral-50 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[320px] flex flex-col justify-end">
<div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 object-cover z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 group-hover:text-white transition-colors">Flachdach &amp; Abdichtung</h3>
<p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
                                Sichere Bitumen- und Kunststoffabdichtungen für Gewerbe und Privat. Inklusive Begrünung und Terrassenbau.
                            </p>
</div>
</div>

<div className="group relative bg-neutral-50 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 min-h-[320px] flex flex-col justify-end">
<div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 object-cover z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1628330756774-7e87b7a7019f?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-4">
<div className="w-14 h-14 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3 group-hover:text-white transition-colors">Bauklempnerei</h3>
<p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
                                Maßgeschneiderte Lösungen aus Zink, Kupfer oder Alu. Dachrinnen, Kaminverkleidungen und Gauben.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-950 text-white relative overflow-hidden" id="projekte">

<div className="absolute inset-0 bg-grid-pattern-white opacity-20"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Bento Grid Referenzen</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                        Ausgewählte Projekte
                    </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605814578144-8d960f5451e0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full mb-3">Komplettsanierung</span>
<h3 className="text-3xl font-semibold text-white mb-2">Stadtvilla Elbblick</h3>
<div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-12">
<p className="text-neutral-300 text-sm mt-2">Energetische Sanierung, Aufsparrendämmung und Eindeckung mit Glattziegeln.</p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer h-[250px] md:h-auto">
<img alt="Gewerbe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white">Gewerbepark Nord</h3>
<p className="text-neutral-400 text-xs mt-1">1.200m² Flachdachabdichtung</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden cursor-pointer h-[250px] md:h-auto">
<img alt="Kupfer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1628330756774-7e87b7a7019f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-semibold text-white">Kupferarbeiten</h3>
<p className="text-neutral-400 text-xs mt-1">Detailgetreue Turmsanierung</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 overflow-hidden" id="bewertungen">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 mb-8 justify-center">
<iconify-icon className="text-orange-500 w-5 h-5" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-orange-500 w-5 h-5" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-orange-500 w-5 h-5" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-orange-500 w-5 h-5" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon className="text-orange-500 w-5 h-5" icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-950 mb-16">
                    Was unsere Kunden sagen
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-neutral-100" icon="solar:quote-right-linear" width="40"></iconify-icon>
<p className="text-sm text-neutral-600 leading-relaxed mb-6 relative z-10">
                            "Sehr professionelle und saubere Arbeit. Das Team war pünktlich, freundlich und das neue Dach sieht fantastisch aus. Die Beratung zur Dämmung hat uns sehr geholfen."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-semibold">MS</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Michael Schmidt</p>
<p className="text-xs text-neutral-500">Dachsanierung, 2023</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-neutral-100" icon="solar:quote-right-linear" width="40"></iconify-icon>
<p className="text-sm text-neutral-600 leading-relaxed mb-6 relative z-10">
                            "Nach dem Sturm am Wochenende waren sie sofort da und haben das Dach provisorisch abgedichtet. Die endgültige Reparatur verlief absolut reibungslos. Spitzen Service!"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-semibold">AB</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Anna Bauer</p>
<p className="text-xs text-neutral-500">Sturmschaden, 2024</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm relative">
<iconify-icon className="absolute top-6 right-6 text-neutral-100" icon="solar:quote-right-linear" width="40"></iconify-icon>
<p className="text-sm text-neutral-600 leading-relaxed mb-6 relative z-10">
                            "Wir haben unser Flachdach neu abdichten und begrünen lassen. Transparente Kostenaufstellung und perfekte Umsetzung. Jederzeit wieder!"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-semibold">KL</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Klaus Lehmann</p>
<p className="text-xs text-neutral-500">Flachdach, 2023</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">Wissenkompass</span>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                        Häufige Fragen
                    </h2>
</div>
<div className="space-y-3">

<details className="group bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-5 text-base text-neutral-900 group-open:bg-white transition-colors hover:bg-neutral-100/50">
                            Was kostet eine Dachneueindeckung im Durchschnitt?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-orange-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-neutral-600 text-sm leading-relaxed bg-white">
                            Die Kosten variieren je nach Material, Dachform und Dämmstandard. Bei einem durchschnittlichen Einfamilienhaus (ca. 150qm Dachfläche) liegen die Kosten für Abdecken, Dämmen und Neueindecken oft zwischen 20.000€ und 40.000€. Wir erstellen nach einer Vor-Ort-Besichtigung ein verbindliches Festpreisangebot.
                        </div>
</details>

<details className="group bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-5 text-base text-neutral-900 group-open:bg-white transition-colors hover:bg-neutral-100/50">
                            Gibt es staatliche Förderungen für ein neues Dach?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-orange-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-neutral-600 text-sm leading-relaxed bg-white">
                            Ja, absolut. Wenn das Dach energetisch saniert wird (z.B. Aufsparrendämmung), können Zuschüsse oder zinsgünstige Kredite über die KfW oder BAFA beantragt werden (bis zu 20% Förderung sind möglich). Wir beraten dich gerne zu den Anforderungen.
                        </div>
</details>

<details className="group bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-5 text-base text-neutral-900 group-open:bg-white transition-colors hover:bg-neutral-100/50">
                            Macht ihr mein Dach auch "Solar-Ready"?
                            <span className="transition-transform duration-300 group-open:rotate-180 text-neutral-400 group-open:text-orange-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="p-5 pt-0 text-neutral-600 text-sm leading-relaxed bg-white">
                            Selbstverständlich. Bei Neubau oder Sanierung setzen wir auf Wunsch bereits die speziellen Dachhaken und Leerrohre für eine spätere Photovoltaikanlage. Das spart später Kosten und verhindert Beschädigungen am neuen Dach durch nachträglichen Einbau.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-orange-500">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full opacity-10 blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
                    Bereit für ein Dach, das bleibt?
                </h2>
<p className="text-base text-orange-100 mb-10 max-w-2xl mx-auto">
                    Lass uns über dein Projekt sprechen. Unverbindlich, ehrlich und mit der Kompetenz aus 25 Jahren Meisterhandwerk.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-orange-600 shadow-xl hover:scale-105 transition-all duration-300" href="mailto:info@rooftop.de">
                        Nachricht schreiben
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-orange-600 border border-orange-400 px-8 py-4 text-sm font-semibold text-white hover:bg-orange-700 transition-all duration-300 gap-2" href="tel:+49123456789">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon> 0123 456 789
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 pt-20 pb-10 text-neutral-400 border-t border-neutral-800" id="kontakt">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity" href="#">
<span className="text-xl font-semibold tracking-tight text-white uppercase tracking-widest">Rooftop</span>
</a>
<p className="text-xs leading-relaxed mb-6 max-w-xs">
                        Dein regionaler Meisterbetrieb. Präzise Handwerkskunst für Generationen.
                    </p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Unternehmen</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors text-xs" href="#ueber-uns">Über uns</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#prozess">Unser Prozess</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#projekte">Referenzen</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#">Karriere <span className="ml-2 inline-block px-1.5 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[10px]">Hiring</span></a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Leistungen</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors text-xs" href="#">Steildach &amp; Ziegel</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#">Flachdachabdichtung</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#">Wärmedämmung</a></li>
<li><a className="hover:text-white transition-colors text-xs" href="#">Notdienst 24/7</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6">Kontakt</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-xs">
<iconify-icon className="text-neutral-500 flex-shrink-0 mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Dachdeckerweg 12<br/>12345 Musterstadt</span>
</li>
<li className="flex items-center gap-3 text-xs">
<iconify-icon className="text-neutral-500 flex-shrink-0" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+49123456789">0123 456 789 0</a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-500 tracking-wider">
                    © 2024 ROOFTOP MEISTERBETRIEB.
                </p>
<div className="flex gap-6 text-[10px] tracking-wider uppercase">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
