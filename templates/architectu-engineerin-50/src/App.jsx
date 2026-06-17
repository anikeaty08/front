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
      

<div className="fixed top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-300/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 lg:px-12">
<div className="max-w-[1800px] mx-auto flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 border border-slate-900/10 bg-white/50 backdrop-blur-sm flex items-center justify-center rounded-sm group-hover:bg-white transition-colors duration-300">
<svg className="w-4 h-4 stroke-slate-900 stroke-[1.5] fill-none" viewbox="0 0 24 24">
<path d="M3 3h18v18H3z"></path>
<path d="M3 3l18 18"></path>
<path d="M21 3L3 21"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight opacity-0 lg:opacity-100 transition-opacity duration-300 -translate-x-2 lg:translate-x-0">Vormstelling</span>
</a>

<div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-full px-1.5 py-1.5 shadow-sm shadow-slate-200/20">
<ul className="flex items-center space-x-1 text-sm font-medium tracking-tight text-slate-600">
<li>
<a className="px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 block" href="#">Projecten</a>
</li>
<li>
<a className="px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 block" href="#">Bureau</a>
</li>
<li>
<a className="px-5 py-2 rounded-full bg-slate-900 text-white shadow-md hover:bg-slate-800 transition-all duration-200 block" href="#">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-32 lg:pt-40 px-6 lg:px-12 pb-20 w-full max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-full">

<div className="lg:col-span-5 flex flex-col justify-between h-full relative">

<div className="mt-8 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-900/10 bg-indigo-50/50 text-[10px] uppercase tracking-wider font-semibold text-indigo-900/70">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                        Beschikbaar voor nieuwe projecten
                    </div>
<h1 className="text-6xl lg:text-8xl font-semibold tracking-tighter text-slate-900 leading-[0.9]">
                        Vorm<br/>
<span className="text-slate-400 font-light">stelling</span>
</h1>
<div className="h-px w-24 bg-slate-900/20 my-8"></div>

<div className="space-y-6 max-w-md">
<p className="text-lg lg:text-xl font-medium leading-relaxed text-slate-700 text-balance">
                            Eindhovense coöperatie van architecten en bouwkundigen.
                        </p>
<p className="text-base text-slate-500 leading-relaxed text-balance">
                            Wij slaan een brug tussen esthetische ambitie en technische maakbaarheid. Van concept tot realisatie, wij ontwerpen processen die net zo doordacht zijn als onze gebouwen.
                        </p>
</div>

<div className="flex flex-wrap gap-2 pt-4">
<span className="px-3 py-1.5 bg-white/60 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 cursor-default transition-colors">Architectuur</span>
<span className="px-3 py-1.5 bg-white/60 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 cursor-default transition-colors">Engineering</span>
<span className="px-3 py-1.5 bg-white/60 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 cursor-default transition-colors">BIM Advies</span>
<span className="px-3 py-1.5 bg-white/60 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:border-slate-400 cursor-default transition-colors">Transformatie</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-3 mt-20 text-xs font-medium text-slate-400 uppercase tracking-widest">
<div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
<span>Scroll om te ontdekken</span>
</div>
</div>

<div className="lg:col-span-7 relative h-[600px] lg:h-auto">

<div className="absolute top-0 right-0 w-full h-full border border-slate-900/5 rounded-2xl bg-white/20 backdrop-blur-sm z-0 overflow-hidden">

<svg className="absolute inset-0 w-full h-full opacity-[0.03]" height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-8 left-8 right-8 bottom-24 lg:top-12 lg:left-12 lg:right-12 lg:bottom-12 z-10 group perspective">
<div className="relative w-full h-full bg-slate-100 rounded-lg overflow-hidden shadow-2xl shadow-indigo-900/10 transition-transform duration-700 group-hover:scale-[1.01] group-hover:-translate-y-2">

<img alt="Architectural Sketch" className="w-full h-full object-cover opacity-90 mix-blend-multiply filter contrast-125 grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
<div>
<p className="text-xs uppercase tracking-widest font-semibold text-white/70 mb-1">Uitgelicht Project</p>
<h3 className="text-xl font-medium tracking-tight">Strijp-S Loft Renovatie</h3>
</div>
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>

<div className="absolute -bottom-6 right-4 lg:right-[-20px] lg:bottom-20 z-20">
<div className="bg-white p-6 rounded-lg shadow-xl border border-slate-100/50 backdrop-blur-xl max-w-[240px]">
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-xs font-semibold text-slate-400">EST. 2018</span>
</div>
<h4 className="text-sm font-semibold text-slate-800 mb-1">Integraal Ontwerp</h4>
<p className="text-xs text-slate-500 leading-relaxed">
                            Optimalisatie van constructie en esthetiek in één model.
                        </p>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-slate-900/5 bg-white/30 backdrop-blur-sm mt-auto">
<div className="max-w-[1800px] mx-auto px-6 py-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-6 text-sm font-medium text-slate-500">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Eindhoven, NL
                </span>
<span className="hidden md:inline text-slate-300">|</span>
<a className="hover:text-slate-900 transition-colors" href="mailto:info@vormstelling.nl">info@vormstelling.nl</a>
</div>
<div className="flex items-center gap-2">
<a className="p-2 text-slate-400 hover:text-slate-900 hover:bg-white/50 rounded-full transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="p-2 text-slate-400 hover:text-slate-900 hover:bg-white/50 rounded-full transition-all" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="p-2 text-slate-400 hover:text-slate-900 hover:bg-white/50 rounded-full transition-all" href="#">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
<div className="text-xs text-slate-400 font-medium tracking-tight">
                © 2025 Vormstelling Coöperatie U.A.
            </div>
</div>
</footer>


    </>
  );
}
