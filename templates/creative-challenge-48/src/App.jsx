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
      

<div className="grain-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-[#0c0a09]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
<span className="tracking-tighter font-semibold text-sm text-stone-100">CREATE OR DIE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-stone-400">
<a className="hover:text-orange-200 transition-colors" href="#">Manifesto</a>
<a className="hover:text-orange-200 transition-colors" href="#">Challenges</a>
<a className="hover:text-orange-200 transition-colors" href="#">Talents</a>
<a className="text-stone-100 border border-white/10 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-all" href="#">S'inscrire</a>
</div>
<button className="md:hidden text-stone-300">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

<div className="lg:col-span-5 flex flex-col justify-center space-y-8 animate-reveal">

<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-950/10 text-orange-200/90 text-[10px] uppercase tracking-widest font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Challenge Officiel
                    </div>
<span className="text-stone-500 text-xs font-medium tracking-wide">Saison 04</span>
</div>

<div className="space-y-1">
<h2 className="text-stone-400 text-sm sm:text-base uppercase tracking-[0.2em] font-medium pl-1">Un Mannequin à la Capitale</h2>
<h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-stone-100 leading-[0.9] tracking-tight">
                        Porto<span className="text-orange-500/80">-</span>Novo
                    </h1>
</div>
<p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed max-w-md border-l border-white/10 pl-4">
                    Une ode à l'élégance africaine au cœur de la capitale historique. Entre héritage colonial et modernité vibrante, capturez l'essence de la fierté culturelle.
                </p>

<div className="grid grid-cols-2 gap-4 py-4">
<div className="glass-panel p-4 rounded-xl">
<div className="flex items-center gap-2 text-stone-500 mb-2">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Lancement</span>
</div>
<p className="text-stone-200 font-medium text-sm">Lundi Prochain</p>
<p className="text-stone-500 text-xs">09:00 GMT+1</p>
</div>
<div className="glass-panel p-4 rounded-xl">
<div className="flex items-center gap-2 text-stone-500 mb-2">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Lieu</span>
</div>
<p className="text-stone-200 font-medium text-sm">Quartier Historique</p>
<p className="text-stone-500 text-xs">Bénin</p>
</div>
</div>

<div className="flex items-center gap-6 pt-2">
<button className="group relative px-6 py-3 bg-stone-100 text-stone-950 text-sm font-semibold tracking-tight rounded-lg overflow-hidden transition-all hover:bg-white">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                            Rejoindre le Challenge
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="text-sm font-medium text-stone-400 hover:text-orange-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="18"></iconify-icon>
                        Voir le teaser
                    </button>
</div>
</div>

<div className="lg:col-span-7 relative animate-reveal delay-200 mt-12 lg:mt-0">

<div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-white/5 rounded-tr-[3rem] hidden lg:block"></div>

<div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/50 group border border-white/5 bg-stone-900">

<img alt="Pamela Gandonou, Mannequin à Porto-Novo" className="w-full h-full object-cover object-top opacity-90 transition-transform duration-[2s] ease-in-out group-hover:scale-105 filter grayscale-[20%] contrast-[110%] sepia-[15%]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none"></div>

<div className="absolute top-6 right-6 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-medium tracking-wide text-stone-200">LIVE NOW</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col sm:flex-row justify-between items-end gap-6">
<div>
<p className="text-orange-200/80 text-xs font-medium tracking-widest uppercase mb-1">Challengeuse</p>
<h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight leading-none">Pamela<br/>Gandonou</h3>
</div>

<div className="hidden sm:flex flex-col items-end gap-1 text-[10px] text-stone-400 font-mono tracking-tight opacity-70">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:camera" width="10"></iconify-icon> RAW 14-BIT</span>
<span className="flex items-center gap-1"><iconify-icon icon="lucide:aperture" width="10"></iconify-icon> f/1.8</span>
<span>ISO 200</span>
</div>
</div>
</div>

<div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border border-orange-500/10 rounded-2xl"></div>
<div className="absolute -z-20 top-1/2 -right-12 text-[120px] leading-none font-serif text-white/0 opacity-20 hidden xl:block rotate-90" style={{WebkitTextStroke: '1px rgba(255,255,255,0.1)'}}>
                    ART
                </div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-reveal delay-300 opacity-50">
<span className="text-[10px] tracking-widest uppercase text-stone-500">Explorer</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-500 to-transparent"></div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#0c0a09] py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2024 CREATE OR DIE. Tous droits réservés.</p>
<div className="flex items-center gap-6">
<a className="hover:text-stone-400 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-stone-400 transition-colors" href="#">Discord</a>
</div>
</div>
</footer>

    </>
  );
}
