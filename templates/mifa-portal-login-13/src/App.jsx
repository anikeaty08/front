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
      

<div className="w-full max-w-[440px] fade-in-up">

<div className="flex flex-col mb-10 items-center">
<div className="shadow-slate-200/50 flex overflow-hidden group bg-center bg-white/0 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30845c3-1384-4f85-915e-4d783efc342b_320w.webp)] bg-cover border-slate-100/0 border rounded-2xl ring-slate-50/0 ring-1 mb-6 relative shadow-xl items-center justify-center">
<div className="bg-[#FF6A00] h-1.5 absolute right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[#FF6A00] text-4xl group-hover:scale-110 transition-transform duration-500" icon="solar:mountains-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-3xl font-bold tracking-tight text-slate-900 text-center">
                MIFA <span className="text-[#FF6A00]">CENTRO DE EJECUCIÓN</span>
</h1>
</div>

<div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden relative">

<div className="h-2 w-full bg-gradient-to-r from-[#FF6A00] to-orange-400"></div>
<div className="p-8 pt-10">

<div className="mb-9">
<div className="flex items-center gap-2.5 mb-2">
<iconify-icon className="text-[#FF6A00] text-2xl animate-bounce-subtle" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Bienvenido de vuelta</h2>
</div>
<p className="text-base text-slate-600 font-medium">Tu próxima tarea te espera.</p>
</div>

<div className="bg-slate-50 border-slate-200 border rounded-xl mb-9 pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-end mb-3">
<span className="uppercase text-xs font-bold text-slate-500 tracking-wider">Estás a un paso de continuar</span>
<span className="text-sm font-bold text-[#FF6A00]">70%</span>
</div>
<div className="h-2.5 overflow-hidden bg-slate-200 w-full rounded-full">
<div className="h-full bg-gradient-to-r from-[#FF6A00] to-orange-400 rounded-full progress-fill shadow-[0_0_10px_rgba(255,106,0,0.3)]">
</div>
</div>
<p className="text-sm text-slate-500 mt-3 leading-snug">Accede a tus módulos y continúa donde quedaste</p>
</div>

<form className="space-y-5" onsubmit="event.preventDefault();">

<div className="group relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500 group-focus-within:text-[#FF6A00] transition-colors duration-300" icon="solar:letter-linear" strokeWidth="1.5" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-500 outline-none focus:bg-white focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all duration-200 shadow-sm hover:border-slate-400" placeholder="Tu correo electrónico" required="" type="email"/>
</div>

<div className="group relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500 group-focus-within:text-[#FF6A00] transition-colors duration-300" icon="solar:lock-password-linear" strokeWidth="1.5" style={{fontSize: '1.4rem'}}></iconify-icon>
</div>
<input className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-base text-slate-900 placeholder-slate-500 outline-none focus:bg-white focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all duration-200 shadow-sm hover:border-slate-400" placeholder="Contraseña" required="" type="password"/>
</div>

<button className="w-full relative group overflow-hidden py-4 px-4 rounded-xl bg-[#FF6A00] text-white text-base font-semibold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300 mt-2" type="submit">
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative flex items-center justify-center gap-2">
                            Entrar al portal
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</span>
</button>

<div className="relative py-3">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="px-3 bg-white text-slate-500 font-medium uppercase tracking-wider text-xs">O también</span>
</div>
</div>

<button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-slate-300 rounded-xl text-slate-700 text-base font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-200 shadow-sm" type="button">
<iconify-icon icon="logos:google-icon" style={{fontSize: '1.25rem'}}></iconify-icon>
                        Continuar con Google
                    </button>
</form>
</div>

<div className="bg-slate-50 border-t border-slate-200 p-6 flex justify-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#FF6A00] transition-colors" href="#">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5" style={{fontSize: '1.125rem'}}></iconify-icon>
                    ¿Problemas de acceso?
                </a>
</div>
</div>

<p className="mt-8 text-center text-slate-500 text-sm font-medium tracking-tight opacity-90">
            "La ejecución es el único lenguaje que el mercado entiende."
        </p>
</div>

    </>
  );
}
