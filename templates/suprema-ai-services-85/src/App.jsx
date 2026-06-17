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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#050505',
surface: '#0F0F0F',
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
</div>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

<div className="hidden lg:block absolute top-[20%] left-[5%] xl:left-[10%] w-72 bg-surface/50 border border-white/10 rounded-xl backdrop-blur-sm -rotate-6 shadow-2xl opacity-40 hover:opacity-100 transition-opacity duration-700">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-400">Output</span>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+300%</span>
</div>
<div className="w-full h-24 bg-gradient-to-t from-white/5 to-transparent rounded-lg relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-full text-white/20" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,5" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="opacity-10" d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,5 V50 H0" fill="currentColor"></path>
</svg>
</div>
</div>
</div>

<div className="hidden lg:block absolute top-[25%] right-[5%] xl:right-[10%] w-64 bg-surface/50 border border-white/10 rounded-xl backdrop-blur-sm rotate-3 shadow-2xl opacity-40 hover:opacity-100 transition-opacity duration-700">
<div className="p-4 flex items-center gap-3 border-b border-white/5">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium">Automatisierung</span>
<span className="text-xs text-neutral-500">Läuft jetzt</span>
</div>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center"><i className="w-2 h-2" data-lucide="check"></i></div>
<span>Daten extrahiert</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center"><i className="w-2 h-2" data-lucide="check"></i></div>
<span>CRM Update</span>
</div>
<div className="flex items-center gap-3 text-xs text-white">
<div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center animate-pulse"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
<span>Generiere Antwort...</span>
</div>
</div>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-full pl-4 pr-2 py-2 flex items-center shadow-lg shadow-black/50">

<div className="flex items-center gap-3 mr-6 md:mr-10">
<div className="w-5 h-5 bg-gradient-to-br from-white to-neutral-500 rounded-full"></div>
<span className="text-base font-medium tracking-tight text-white/90 hidden sm:block">Suprema</span>
</div>

<div className="hidden md:flex items-center gap-1 text-sm text-neutral-400">
<a className="px-4 py-1.5 hover:text-white transition-colors" href="#">Home</a>
<a className="px-4 py-1.5 hover:text-white transition-colors" href="#">Lösungen</a>
<a className="px-4 py-1.5 hover:text-white transition-colors" href="#">Preise</a>
<a className="px-4 py-1.5 hover:text-white transition-colors" href="#">Über uns</a>
</div>

<button className="ml-4 md:ml-6 bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
                Kontakt
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-6 w-full max-w-7xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
<span className="text-xs uppercase tracking-wide font-medium text-neutral-300">Für Coaches, Berater &amp; Agenturen</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[1.05] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 max-w-5xl mx-auto mb-8 drop-shadow-2xl">
            Implementiere die etablierten Mechanismen der Marktführer.
        </h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            Wir sind die KI-, Prozess- und Automatisierungs-Agentur, die dir ein skalierfähiges Betriebssystem für dein Unternehmen aufsetzt. 
            <span className="hidden md:inline">So werden manuelle To-dos konsequent eliminiert, der Output pro Mitarbeiter steigt um das 3-Fache und dein Unternehmenswachstum wird steuerbar.</span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
<button className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-8 py-3.5 transition-all hover:bg-neutral-200">
<span className="relative z-10 flex items-center justify-center gap-2 text-black font-medium text-base">
                    Erstgespräch vereinbaren
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
<i className="w-5 h-5 text-neutral-400" data-lucide="play-circle"></i>
                Mehr erfahren
            </button>
</div>

<div className="flex flex-col items-center gap-6">
<div className="flex items-center gap-2 text-sm text-neutral-500 font-light">
<i className="w-4 h-4" data-lucide="lock"></i>
<span>Keine Kreditkarte erforderlich</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full mx-1"></span>
<span>Unverbindliche Analyse</span>
</div>

<div className="pt-12 border-t border-white/5 w-full max-w-4xl mx-auto">
<p className="text-sm text-neutral-600 mb-6 font-medium">VERTRAUT VON +50.000 UNTERNEHMEN</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">

<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 24"><path d="M10,12 L20,2 L30,12 L20,22 Z M35,6 H90 V18 H35 Z" fill="white"></path></svg>

<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 24"><circle cx="12" cy="12" fill="white" r="8"></circle> <rect fill="white" height="8" rx="4" width="60" x="25" y="8"></rect></svg>

<svg className="h-7 w-auto" fill="currentColor" viewbox="0 0 100 24"><path d="M10,2 L10,22 L25,22 L25,18 L14,18 L14,14 L24,14 L24,10 L14,10 L14,6 L25,6 L25,2 Z M35,2 L35,22 L45,22 L45,2 Z" fill="white"></path></svg>

<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 24"><path d="M10,12 L25,2 L40,12 L25,22 Z M50,12 L65,2 L80,12 L65,22 Z" fill="white"></path></svg>

<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 24"><rect fill="white" height="16" width="16" x="0" y="4"></rect> <rect fill="white" height="16" width="60" x="20" y="4"></rect></svg>
</div>
</div>
</div>
</main>

<div className="fixed bottom-4 right-4 z-50">
<div className="bg-white text-black px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-neutral-200 transition-colors">
<svg className="w-3 h-3" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 19h20L12 2zm0 3l6 11H6l6-11z"></path></svg>
            Made in Tailwind
        </div>
</div>


    </>
  );
}
