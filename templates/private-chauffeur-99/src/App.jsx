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
      

<div className="fixed inset-0 z-0">

<img alt="Paris Night" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60"></div>

<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-500/10 blur-[100px] rounded-full"></div>
</div>

<nav className="relative z-50 w-full px-6 py-8 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-white text-slate-950 p-1.5 rounded-lg">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white uppercase">Vitesse<span className="text-slate-500">.paris</span></span>
</div>

<div className="hidden md:flex items-center gap-1 glass-panel rounded-full px-2 py-1.5">
<a className="px-5 py-2 text-sm text-white hover:bg-white/10 rounded-full transition-colors duration-300" href="#">Accueil</a>
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300" href="#">Flotte</a>
<a className="px-5 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors duration-300" href="#">Entreprises</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="px-6 py-2.5 rounded-full border border-slate-700 text-sm text-white hover:bg-white/5 transition-colors">
                Connexion
            </button>
<button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                Commander
                <div className="bg-slate-950 rounded-full p-1 -mr-2">
<i className="w-3 h-3 text-yellow-400" data-lucide="arrow-right"></i>
</div>
</button>
</div>

<button className="md:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</nav>

<main className="relative z-40 flex flex-col items-center lg:items-start pt-12 lg:pt-24 px-6 lg:px-16 min-h-[90vh]">

<div className="w-full lg:max-w-3xl relative z-20 mt-10 lg:mt-0">

<p className="font-script text-yellow-400 text-4xl lg:text-6xl -rotate-2 mb-4 lg:-ml-4 opacity-90">
                Service Premium 24/7
            </p>

<h1 className="font-display text-7xl lg:text-9xl uppercase text-white leading-[0.85] tracking-tighter mb-8">
                L'Élégance <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">En Mouvement</span>
</h1>

<div className="flex flex-col sm:flex-row items-center gap-8 mt-12">
<button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-base lg:text-lg px-8 py-5 rounded-full font-semibold tracking-tight transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(250,204,21,0.5)]">
                    RÉSERVER UN CHAUFFEUR
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="flex items-center gap-4 border-l border-white/10 pl-6 lg:pl-8">
<div className="text-right">
<div className="flex text-yellow-400 mb-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Basé sur 23k avis</p>
</div>
<span className="text-4xl text-white font-display font-medium">4.98</span>
</div>
</div>
</div>

<div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[45vw] lg:h-[85vh] flex items-end justify-center pointer-events-none z-10 mt-12 lg:mt-0">

<img alt="Chauffeur" className="h-full object-cover object-top mask-image-b filter brightness-90 contrast-110 drop-shadow-2xl" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>

<div className="relative lg:absolute lg:bottom-12 lg:left-16 w-full lg:w-auto mt-20 lg:mt-0 z-30">
<div className="glass-panel rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12 shadow-2xl">
<div className="text-center md:text-left">
<h3 className="text-white text-xl font-medium tracking-tight mb-1">Estimation immédiate</h3>
<p className="text-slate-400 text-sm">Chauffeurs disponibles à proximité</p>
</div>

<div className="hidden md:block w-px h-12 bg-white/10"></div>

<div className="flex items-center gap-8">
<div className="text-center">
<span className="block text-4xl font-display text-white">03</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Min</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-center">
<span className="block text-4xl font-display text-white">12</span>
<span className="text-xs text-slate-500 uppercase tracking-widest">Sec</span>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex absolute bottom-12 right-12 z-40 bg-white text-slate-900 rounded-2xl p-4 items-center gap-4 shadow-xl max-w-sm transform hover:-translate-y-1 transition-transform cursor-pointer">
<div className="relative">
<img alt="Driver Profile" className="w-14 h-14 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white w-4 h-4 rounded-full"></div>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 leading-tight">Antoine Mercier</h4>
<p className="text-sm text-slate-500 mt-0.5">Chauffeur Élite • Paris</p>
<div className="flex items-center gap-1 mt-1">
<i className="w-3 h-3 text-blue-600" data-lucide="shield-check"></i>
<span className="text-xs font-medium text-blue-600">Vérifié &amp; Certifié</span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-evenly opacity-10">
<div className="w-px h-full bg-slate-500"></div>
<div className="w-px h-full bg-slate-500"></div>
<div className="w-px h-full bg-slate-500"></div>
</div>


    </>
  );
}
