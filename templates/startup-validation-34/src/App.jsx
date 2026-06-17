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
      
<main className="max-w-4xl mx-auto px-6 py-24 md:py-32">

<header className="text-center mb-28">
<h1 className="text-4xl md:text-6xl font-normal tracking-tighter text-black leading-tight max-w-3xl mx-auto">
                Proceso de validación de Startup <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-medium">MIFA 5K 90D</span>
</h1>
</header>

<div className="md:space-y-20 relative space-y-16">

<div className="absolute left-[39px] top-8 bottom-12 w-[2px] bg-gradient-to-b from-orange-100 via-orange-200 to-orange-500 hidden md:block z-0"></div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:document-text-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 1</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Levantamiento de información del negocio</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 2</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Investigación de Mercado a Personas</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 3</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Investigación de mercado con IA</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:branching-paths-up-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 4</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Investigación de mercado con IA Hibrida</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 5</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Creación de Oferta</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:test-tube-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 6</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Testeo</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:chart-square-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 7</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Metricas</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:wallet-money-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 8</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Ventas</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:scale-[1.03] group-hover:border-orange-300 group-hover:shadow-orange-500/10 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:restart-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 9</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black leading-snug">Repetir</h2>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 group">
<div className="flex-shrink-0 w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl shadow-orange-500/20 flex items-center justify-center text-white border-none group-hover:scale-[1.03] group-hover:shadow-orange-500/40 transition-all duration-500 ease-out">
<iconify-icon height="36" icon="solar:rocket-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="pt-2 text-center md:text-left flex-1">
<span className="uppercase block text-2xl font-bold text-orange-600 tracking-wide mb-3">Paso 10</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-snug">Plan de acción estratégico de escalado o Levantamiento de Capital</h2>
</div>
</div>
</div>

<section className="mt-32 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 rounded-[2.5rem] -z-10 pointer-events-none"></div>
<div className="text-center bg-white rounded-[2.5rem] p-10 md:p-20 border border-gray-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none"></div>
<p className="text-2xl md:text-4xl font-normal text-black leading-relaxed mb-12 max-w-3xl mx-auto relative z-10 tracking-tight">
                    Si te hace sentido la metodología reúnetela con mi equipo comercial para coordinar tu acceso al programa
                </p>
<button className="relative z-10 inline-flex items-center justify-center gap-4 px-10 py-5 bg-black text-white rounded-full text-lg hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group font-bold tracking-wide">
                    Coordinar acceso
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</section>
</main>

    </>
  );
}
