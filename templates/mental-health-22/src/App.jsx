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
      

<main className="relative w-full max-w-[450px] h-[100dvh] bg-white overflow-hidden shadow-2xl flex flex-col items-center">

<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute -top-[10%] -right-[30%] w-[120%] h-[50%] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl opacity-60"></div>

<svg className="absolute top-0 right-0 w-full h-full opacity-30" fill="none" viewbox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
<path d="M800 -100 C 700 300, 900 600, 1200 800" stroke="#3b82f6" strokeWidth="2"></path>
<path d="M-100 1000 C 200 1200, 400 1600, 300 2000" stroke="#3b82f6" strokeWidth="2"></path>
<circle cx="900" cy="200" r="400" stroke="#e0f2fe" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="relative z-10 flex flex-col items-center justify-between w-full h-full px-8 py-16">

<div className="w-full flex justify-center pt-8">
<div className="flex items-center gap-2">
<div className="relative text-[#0ea5e9]">
<i className="w-10 h-10 fill-white stroke-[1.5]" data-lucide="heart"></i>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-4 h-4 stroke-[3]" data-lucide="plus"></i>
</div>
<span className="text-3xl font-semibold tracking-tight text-[#0ea5e9]">IsapreFix</span>
</div>
</div>

<div className="flex flex-col items-center text-center gap-8">

<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 border border-green-100 shadow-sm">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-green-700 font-medium text-sm tracking-wide">Gestión 100% remota y online</span>
</div>

<h1 className="text-6xl font-semibold text-blue-700 tracking-tight leading-[1.1]">
                    Tu Salud Mental merece la cobertura legal máxima.
                </h1>

<div className="space-y-4 max-w-sm">
<p className="text-xl text-slate-500 leading-relaxed font-normal">
                        ¿Tu plan de Isapre es anterior a <span className="text-slate-800 font-medium">abril de 2022</span>?
                    </p>
<p className="text-xl text-slate-500 leading-relaxed font-normal">
                        Las Isapres no actualizan los beneficios automáticamente. Nosotros gestionamos el aumento de tu cobertura legalmente.
                    </p>
</div>
</div>

<div className="w-full pb-8">
<button className="group w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-xl font-medium py-6 px-8 rounded-full shadow-xl shadow-blue-900/10 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3">
                    Evaluar mi caso gratis
                    <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</main>


    </>
  );
}
