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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">LUMINA.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Leistungen</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Praxis &amp; Team</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Notdienst</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="tel:+4930123456">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>030 123 456</span>
</a>
<a className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm ring-1 ring-slate-900/10" href="#">
<span>Termin buchen</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
<div className="absolute top-40 right-10 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Jetzt neue Patienten willkommen</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Zahnmedizin, <br/>
<span className="text-slate-400">die Sie verstehen.</span>
</h1>

<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg font-normal">
                    Erleben Sie moderne, schmerzfreie Behandlungen in einer Atmosphäre, die Ruhe ausstrahlt. Wir kümmern uns um Ihr Lächeln mit Präzision und Empathie.
                </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
<button className="group flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Online Termin vereinbaren
                    </button>
<button className="group flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Praxisrundgang ansehen
                    </button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 pt-8 border-t border-slate-200 w-full">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-teal-600" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-600">5 Jahre Garantie</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-teal-600" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Angstfreie Behandlung</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-teal-600" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Kurze Wartezeiten</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px]">

<div className="absolute right-0 top-0 w-4/5 aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">

<img alt="Moderne Praxis Interieur" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-12 left-0 bg-white/90 backdrop-blur-xl p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 w-64 animate-[bounce_4s_infinite]">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-900">"Hervorragende Praxis"</p>
<div className="flex items-center gap-1 mt-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-[10px] text-slate-400 ml-1">Google</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-16 -left-8 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100 w-72">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-slate-900 tracking-tight">Nächster freier Termin</span>
<span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Verfügbar</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
<div className="bg-white p-2 rounded-md shadow-sm border border-slate-100">
<iconify-icon className="text-slate-600" icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Morgen, 10:30 Uhr</div>
<div className="text-[10px] text-slate-500">Dr. Med. Weber</div>
</div>
</div>
<button className="w-full text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 py-2 rounded-lg transition-colors">
                        Jetzt reservieren
                    </button>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Partner &amp; Technologie</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40 hover:opacity-70 transition-opacity duration-500">

<span className="text-lg font-semibold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:infinity-linear"></iconify-icon> INVISALIGN</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:atom-linear"></iconify-icon> PHILIPS</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> STRAUMANN</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:shield-linear"></iconify-icon> DENTAGEN</span>
</div>
</div>
</section>

    </>
  );
}
