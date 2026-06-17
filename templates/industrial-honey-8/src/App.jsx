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
      

<header className="w-full flex items-center justify-between px-6 py-6 md:px-12 border-b border-neutral-900/50 backdrop-blur-md sticky top-0 z-50 bg-[#0A0A0A]/80">
<div className="flex flex-col items-start cursor-pointer group">
<span className="text-xl md:text-2xl font-semibold tracking-tighter uppercase text-white group-hover:text-[#FFB400] transition-colors duration-300">WET THERMPLATE GMBH</span>
<span className="text-xs text-neutral-500 tracking-widest uppercase mt-0.5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Engineering &amp; Innovation</span>
</div>
<nav className="hidden lg:flex items-center gap-10">
<a className="group flex items-center gap-2 hover:text-white transition-colors duration-300 text-neutral-400 text-sm tracking-wide" href="#ernte">
<span className="text-[#FFB400] text-xs opacity-70 group-hover:opacity-100 transition-opacity" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>01</span> Ernte
            </a>
<a className="group flex items-center gap-2 hover:text-white transition-colors duration-300 text-neutral-400 text-sm tracking-wide" href="#">
<span className="text-[#FFB400] text-xs opacity-70 group-hover:opacity-100 transition-opacity" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>02</span> Verarbeitung
            </a>
<a className="group flex items-center gap-2 hover:text-white transition-colors duration-300 text-neutral-400 text-sm tracking-wide" href="#">
<span className="text-[#FFB400] text-xs opacity-70 group-hover:opacity-100 transition-opacity" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>03</span> Abfüllung
            </a>
<div className="w-px h-4 bg-neutral-800"></div>
<a className="hover:text-white transition-colors duration-300 text-neutral-400 text-sm tracking-wide" href="#">
                Technologie
            </a>
</nav>
<div className="flex items-center gap-6">
<button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-[#FFB400] text-[#FFB400] text-xs uppercase tracking-widest font-medium hover:bg-[#FFB400] hover:text-black transition-all duration-300 rounded-sm">
                Anfrage stellen
            </button>
<button className="lg:hidden text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<main className="md:py-32 flex min-h-[85vh] w-full pt-12 pb-24 relative items-center">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-end">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '3vw 3vw'}}></div>

<div className="relative w-full max-w-3xl aspect-square translate-x-1/4 translate-y-12 md:translate-y-0 opacity-40 md:opacity-100">
<div className="absolute inset-8 border border-neutral-800 rounded-full"></div>
<div className="absolute inset-16 border border-neutral-800/60 rounded-full border-dashed"></div>
<div className="absolute inset-32 border border-[#FFB400]/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square bg-[#FFB400]/10 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#FFB400]/50 to-transparent -translate-y-1/2 rotate-45"></div>
<div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-neutral-700 to-transparent -translate-y-1/2 -rotate-45"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-700" height="48" icon="solar:target-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A] via-[#0A0A0A]/80"></div>
</div>
<div className="md:px-12 z-10 flex flex-col md:flex-row gap-12 w-full max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center justify-between">

<div className="lg:w-3/5 flex flex-col gap-8 md:gap-10 w-full gap-x-8 gap-y-8 items-start">

<div className="inline-flex items-center gap-3 border border-neutral-800 bg-neutral-900/30 px-4 py-2 rounded-sm backdrop-blur-sm">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB400] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB400]"></span>
</div>
<span className="text-xs text-neutral-300 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Imker bauen für Imker</span>
</div>

<h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.05]">
                    Engineering the <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB400] via-[#ffd666] to-[#b37e00]">Honey Flow.</span>
</h1>

<p className="md:text-lg lg:text-xl leading-relaxed text-base font-light text-neutral-400">Modulare Systemtechnik für die professionelle Imkerei. Entwickelt von Imkern für Imker, perfektioniert für höchste Ansprüche. <span className="font-medium text-neutral-200">Made in Germany.</span> </p>

<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-[#FFB400] text-black text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 rounded-sm">
                        Systeme entdecken
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 border border-neutral-700 bg-neutral-900/20 backdrop-blur-sm text-white text-sm uppercase tracking-widest hover:border-white hover:bg-neutral-800/50 transition-all duration-300 flex items-center justify-center gap-3 rounded-sm">
                        Technische Daten
                        <iconify-icon height="20" icon="solar:documents-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="mt-8 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 pt-10 border-t border-neutral-900 w-full">
<div className="flex flex-col gap-2">
<span className="text-[#FFB400] text-2xl md:text-3xl" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>0.1μ</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Spaltmaß</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-white text-2xl md:text-3xl" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>V4A</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Edelstahl</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-white text-2xl md:text-3xl" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Skalierbar</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-white text-2xl md:text-3xl" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>DIN</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Zertifiziert</span>
</div>
</div>
</div>
<div className="hidden lg:block w-2/5"></div>
</div>
</main>

<section className="relative w-full py-24 md:py-32 border-t border-neutral-900 overflow-hidden bg-[#0A0A0A]" id="ernte">

<div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-end md:justify-center opacity-[0.15]">

<div className="absolute inset-0 bg-blueprint-grid"></div>

<div className="relative w-[150vw] md:w-[800px] aspect-square border border-neutral-600 rounded-full flex items-center justify-center -translate-y-1/4 md:-translate-y-0 md:translate-x-1/4 lg:translate-x-1/3">
<div className="absolute inset-0 border border-neutral-500/50 rounded-full border-dashed m-8 md:m-16"></div>
<div className="absolute inset-0 border border-[#FFB400]/40 rounded-full m-16 md:m-32"></div>
<div className="absolute inset-0 border border-neutral-600/30 rounded-full m-24 md:m-48"></div>

<div className="absolute w-[120%] h-px bg-neutral-600/40"></div>
<div className="absolute h-[120%] w-px bg-neutral-600/40"></div>
<div className="absolute w-full h-px bg-neutral-600/20 rotate-45"></div>
<div className="absolute h-full w-px bg-neutral-600/20 rotate-45"></div>

<div className="absolute w-3 h-3 bg-neutral-800 border border-neutral-500 rounded-full top-0 -translate-y-1/2"></div>
<div className="absolute w-3 h-3 bg-neutral-800 border border-neutral-500 rounded-full bottom-0 translate-y-1/2"></div>
<div className="absolute w-3 h-3 bg-neutral-800 border border-neutral-500 rounded-full left-0 -translate-x-1/2"></div>
<div className="absolute w-3 h-3 bg-neutral-800 border border-neutral-500 rounded-full right-0 translate-x-1/2"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
</div>
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

<div className="flex flex-col items-start gap-4 mb-16 md:mb-24 relative">
<div className="flex items-center gap-3">
<span className="text-[#FFB400] text-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>01</span>
<span className="w-8 h-px bg-neutral-800"></span>
<span className="text-xs text-neutral-400 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Ernte</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white max-w-4xl">
                    Maximale Autonomie <br className="hidden md:block"/>am Erntepunkt.
                </h2>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed font-light mt-2">
                    Unsere modularen Schleuderstraßen der S-Serie (S400 bis S1300) bilden das Rückgrat für industrielle Honigernten. Von der vollautomatischen Zuführung bis zur präzisen Entdecklung.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group flex flex-col items-start p-8 md:p-10 bg-neutral-900/30 border border-neutral-800/60 backdrop-blur-sm hover:bg-neutral-900/60 hover:border-neutral-700/80 transition-all duration-500 rounded-sm">
<div className="w-14 h-14 rounded-full bg-[#FFB400]/10 flex items-center justify-center mb-8 border border-[#FFB400]/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-[#FFB400]" height="28" icon="solar:cpu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-white mb-4">DEE-Boxer &amp; Automatisierung</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Die vollautomatische Zargen-Entleerung und Zuführung. Reduziert Personalbindung und eliminiert manuelle Hebearbeit komplett aus dem Prozess.
                    </p>
</div>

<div className="group flex flex-col items-start p-8 md:p-10 bg-gradient-to-br from-neutral-900/40 to-[#FFB400]/5 border border-neutral-800/60 backdrop-blur-sm hover:border-[#FFB400]/40 transition-all duration-500 rounded-sm relative overflow-hidden">
<div className="absolute -top-12 -right-12 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
<iconify-icon className="text-[#FFB400]" height="240" icon="solar:layers-minimalistic-linear" strokeWidth="0.5" width="240"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-full bg-[#FFB400]/10 flex items-center justify-center mb-8 border border-[#FFB400]/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
<iconify-icon className="text-[#FFB400]" height="28" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-white mb-4 relative z-10">S-Serie Schleuderstraßen</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light relative z-10">
                        Modulare Bauweise. Skalierbar von 40 bis 120 Waben-Kapazität. Vollständige Integration der Thermplate®-Heizung für exakt fließoptimierte Prozesse.
                    </p>
</div>

<div className="group flex flex-col items-start p-8 md:p-10 bg-neutral-900/30 border border-neutral-800/60 backdrop-blur-sm hover:bg-neutral-900/60 hover:border-neutral-700/80 transition-all duration-500 rounded-sm">
<div className="w-14 h-14 rounded-full bg-[#FFB400]/10 flex items-center justify-center mb-8 border border-[#FFB400]/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-[#FFB400]" height="28" icon="solar:tachometer-fast-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium tracking-tight text-white mb-4">WT-3 High-Speed Entdeckler</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Präzisionsmesser-System mit 30mm Schräge zur optimalen Restentleerung. <span className="text-neutral-200 font-medium">100% Edelstahl V2A</span> für höchste Hygienestandards.
                    </p>
</div>
</div>

<div className="mt-12 md:mt-16 flex justify-start">
<button className="px-8 py-4 bg-transparent border border-neutral-700 text-white text-xs uppercase tracking-widest font-medium hover:border-[#FFB400] hover:text-[#FFB400] transition-all duration-300 flex items-center justify-center gap-3 rounded-sm group">
                    S-Serie Konfigurationen ansehen
                    <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</section>
<style>
        .bg-radial-gradient {
            background-image: radial-gradient(circle at right center, var(--tw-gradient-stops));
        }
        .bg-blueprint-grid {
            background-image: 
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
        }
    </style>

    </>
  );
}
