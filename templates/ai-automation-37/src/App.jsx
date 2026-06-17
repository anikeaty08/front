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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#050a14] to-black"></div>

<div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="absolute top-1/3 right-1/4 w-[50rem] h-[50rem] bg-blue-700/20 rounded-full blur-[130px] mix-blend-screen animate-pulse duration-[5000ms]"></div>

<div className="tunnel-container absolute inset-0 flex items-center justify-center">


<div className="tunnel-ring ring-anim ring-1 w-[80vw] h-[80vw] border-[1px] border-orange-500/30 border-t-transparent border-r-transparent"></div>

<div className="tunnel-ring ring-anim ring-2 w-[80vw] h-[80vw] border-[1px] border-blue-500/30 border-b-transparent border-l-transparent"></div>

<div className="tunnel-ring ring-anim ring-3 w-[80vw] h-[80vw] border-[1px] border-orange-400/20 border-dashed"></div>

<div className="tunnel-ring ring-anim ring-4 w-[80vw] h-[80vw] border-[2px] border-blue-400/20 border-t-transparent"></div>

<div className="tunnel-ring ring-anim ring-5 w-[80vw] h-[80vw] border-[1px] border-orange-600/20 border-dotted"></div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_150%)] z-10"></div>

<div className="noise-overlay absolute inset-0 z-20 mix-blend-overlay"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000000_100%)] z-20 opacity-80"></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<iconify-icon icon="lucide:aperture" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-widest text-sm text-slate-100 uppercase">KINETIK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#">Lösungen</a>
<a className="hover:text-white transition-colors duration-300" href="#">Plattform</a>
<a className="hover:text-white transition-colors duration-300" href="#">Ressourcen</a>
<a className="hover:text-white transition-colors duration-300" href="#">Preise</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-300 hover:text-white transition-colors">Login</button>
<button className="text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-full transition-all backdrop-blur-sm">
                Kontakt
            </button>
</div>
</nav>

<main className="relative z-40 flex-grow flex flex-col items-center justify-center text-center px-4">

<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-orange-200 tracking-wide uppercase">KI Automatisierung V 2.0</span>
</div>

<h1 className="animate-fade-up delay-100 max-w-5xl mx-auto text-5xl md:text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 tracking-tight leading-[1.1] mb-8 text-glow">
            Ihr Weg zur <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-white to-blue-200">KI-Transformation.</span>
</h1>

<p className="animate-fade-up delay-200 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10 tracking-tight">
            Beschleunigen Sie Prozesse mit intelligenter Automatisierung. Eine nahtlose Synthese aus menschlicher Kreativität und maschineller Präzision.
        </p>

<div className="animate-fade-up delay-200 flex flex-col sm:flex-row items-center gap-4">

<button className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] overflow-hidden">
<span className="relative z-10">Mehr erfahren</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>

<button className="group flex items-center gap-3 px-6 py-4 rounded-full font-medium text-sm text-slate-300 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
<div className="w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center group-hover:border-white transition-colors">
<iconify-icon className="ml-0.5" icon="lucide:play" strokeWidth="1.5" width="10"></iconify-icon>
</div>
<span>Demo ansehen</span>
</button>
</div>
</main>

<footer className="relative z-40 w-full py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-slate-500">Vertraut von führenden Innovatoren</p>
<div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-slate-400"></div>
<span className="text-sm font-semibold tracking-tight text-slate-300">ACME AI</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 bg-slate-400 rotate-45"></div>
<span className="text-sm font-semibold tracking-tight text-slate-300">NEXUS</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded bg-slate-400"></div>
<span className="text-sm font-semibold tracking-tight text-slate-300">ORBITAL</span>
</div>
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full border border-slate-400"></div>
<span className="text-sm font-semibold tracking-tight text-slate-300">SPHERE</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
