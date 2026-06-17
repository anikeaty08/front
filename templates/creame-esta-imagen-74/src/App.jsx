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
      

<div className="relative w-full max-w-xl aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8 md:p-12 border border-slate-100">

<div className="absolute -top-20 -right-20 w-[60%] h-[60%] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-[3rem] rotate-12 pointer-events-none z-0"></div>
<div className="absolute top-[-5%] right-[-10%] w-[40%] h-[40%] border border-blue-200/40 rounded-[2rem] rotate-12 pointer-events-none z-0"></div>
<div className="absolute top-[5%] right-[-5%] w-[30%] h-[30%] border border-blue-100/30 rounded-[2rem] rotate-12 pointer-events-none z-0"></div>

<div className="absolute -bottom-20 -left-20 w-[50%] h-[50%] bg-gradient-to-tr from-blue-400/20 to-transparent rounded-[3rem] rotate-12 pointer-events-none z-0"></div>
<div className="absolute bottom-[-5%] left-[-10%] w-[40%] h-[40%] border border-blue-200/40 rounded-[2rem] rotate-12 pointer-events-none z-0"></div>

<div className="relative z-10 flex flex-col h-full justify-between items-center text-center">

<div className="w-full flex justify-start mb-4">
<div className="flex items-center gap-2">

<div className="relative w-9 h-9">
<svg className="w-full h-full" fill="none" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24">
<defs>
<lineargradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2dd4bf"></stop> 
<stop offset="100%" stop-color="#2563eb"></stop> 
</lineargradient>
</defs>

<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" stroke="url(#logoGradient)" strokeWidth="2"></path>

<path d="M12 7.5v5M9.5 10h5" stroke="url(#logoGradient)" strokeWidth="3"></path>
</svg>
</div>

<span className="text-2xl tracking-tight font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-600">
                        IsapreFix
                    </span>
</div>
</div>

<div className="flex flex-col items-center gap-6 mt-2">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 shadow-sm">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm font-medium text-green-700 tracking-wide">Gestión 100% remota y online</span>
</div>

<h1 className="text-4xl md:text-5xl font-semibold text-blue-700 leading-[1.15] tracking-tight">
                    Tu Salud Mental <br/>
                    merece la cobertura <br/>
                    legal máxima.
                </h1>

<p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-md">
                    ¿Tu plan de Isapre es anterior a <span className="font-semibold text-slate-900">abril de 2022</span>?
                    Las Isapres no actualizan los beneficios automáticamente. Nosotros gestionamos el aumento de tu cobertura legalmente.
                </p>

<button className="mt-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-slate-200">
                    Evaluar mi caso gratis
                </button>
</div>

<div className="mt-auto pt-8">
<p className="text-sm text-slate-500 font-medium">
                    Sin letra chica. Tarifa única. Solo pagas si calificas.
                </p>
</div>
</div>
</div>


    </>
  );
}
