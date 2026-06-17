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
      

<aside className="w-[250px] flex-shrink-0 border-r border-gray-200/60 bg-white hidden md:flex flex-col justify-between h-full relative z-20">
<div className="flex flex-col">

<div className="h-16 flex items-center px-5 gap-3 border-b border-gray-100/60">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F2652B] to-[#D94F16] flex items-center justify-center text-white shadow-sm ring-1 ring-black/5">
<iconify-icon className="text-lg" icon="solar:diploma-bold-duotone"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">Kuepa LMS</span>
</div>

<nav className="flex flex-col gap-0.5 p-3 mt-2">
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:home-2-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Inicio</span>
</a>

<div className="relative p-[1px] rounded-md bg-gradient-to-r from-orange-200/50 to-transparent mb-0.5 mt-0.5">
<a className="flex items-center gap-2.5 px-3 py-2 rounded-[5px] bg-[#FFF4F0] text-[#F2652B] relative" href="#">
<iconify-icon className="text-lg" icon="solar:diploma-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Matrícula</span>
</a>
</div>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:book-bookmark-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Mis Cursos</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:calendar-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Horario</span>
</a>
<div className="h-px bg-gray-100/60 my-2 mx-2"></div>
<a className="flex items-center gap-2.5 px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all group" href="#">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:settings-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Configuración</span>
</a>
</nav>
</div>

<div className="p-3 border-t border-gray-100/60">
<div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-[#FFF4F0] flex items-center justify-center text-[#F2652B] text-xs font-semibold ring-1 ring-orange-100/50">
                    JD
                </div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium leading-none text-gray-900">Juan Díaz</span>
<span className="text-[13px] font-normal text-gray-500 mt-1">Estudiante</span>
</div>
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-600" icon="solar:logout-2-bold-duotone"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden w-full">

<div className="absolute inset-0 pointer-events-none flex justify-evenly max-w-5xl mx-auto w-full z-0">
<div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200/40 to-transparent"></div>
<div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200/40 to-transparent hidden sm:block"></div>
<div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200/40 to-transparent"></div>
</div>

<div className="absolute top-16 right-16 text-[14rem] font-semibold text-gray-900/[0.02] pointer-events-none select-none tracking-tighter leading-none z-0 hidden lg:block">
            01
        </div>
<div className="flex flex-col max-w-4xl mx-auto w-full px-6 sm:px-10 py-12 sm:py-16 z-10 relative min-h-full">

<div className="flex flex-col gap-1.5">
<h1 className="text-[26px] sm:text-[28px] font-semibold tracking-tight text-gray-900">Finalización de Matrícula</h1>
<p className="text-sm sm:text-base text-gray-500 font-normal">Completa estos pasos para finalizar tu proceso de inscripción.</p>
</div>

<div className="relative w-full max-w-[640px] mt-12 mb-20 mx-auto">

<div className="absolute top-[17px] left-6 right-6 h-px bg-gray-200/80 z-0"></div>
<div className="flex justify-between items-center relative z-10 w-full">

<div className="flex flex-col items-center relative bg-[#FAFAFA] px-2 group">
<div className="w-9 h-9 rounded-full bg-[#F2652B] text-white flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-[#FAFAFA] transition-all">1</div>
<span className="text-[13px] font-medium text-gray-900 absolute top-12 whitespace-nowrap">Validar correo</span>
</div>

<div className="flex flex-col items-center relative bg-[#FAFAFA] px-2 group">
<div className="w-9 h-9 rounded-full bg-white border border-gray-200/80 text-gray-400 flex items-center justify-center text-sm font-medium shadow-sm ring-4 ring-[#FAFAFA] transition-all">2</div>
<span className="text-[13px] font-medium text-gray-500 absolute top-12 whitespace-nowrap">Validar programa</span>
</div>

<div className="flex flex-col items-center relative bg-[#FAFAFA] px-2 group">
<div className="w-9 h-9 rounded-full bg-white border border-gray-200/80 text-gray-400 flex items-center justify-center text-sm font-medium shadow-sm ring-4 ring-[#FAFAFA] transition-all">3</div>
<span className="text-[13px] font-medium text-gray-500 absolute top-12 whitespace-nowrap">Validar horario</span>
</div>

<div className="flex flex-col items-center relative bg-[#FAFAFA] px-2 group">
<div className="w-9 h-9 rounded-full bg-white border border-gray-200/80 text-gray-400 flex items-center justify-center text-sm font-medium shadow-sm ring-4 ring-[#FAFAFA] transition-all">4</div>
<span className="text-[13px] font-medium text-gray-500 absolute top-12 whitespace-nowrap right-0 translate-x-4 sm:translate-x-0 sm:right-auto">Crear credenciales</span>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center w-full mt-4 flex-1">

<div className="flex flex-col items-center text-center max-w-md mb-8">
<div className="w-14 h-14 rounded-2xl bg-[#FFF4F0] flex items-center justify-center text-[#F2652B] mb-5 ring-1 ring-orange-500/10 shadow-sm relative">
<iconify-icon className="text-[28px]" icon="solar:letter-bold-duotone"></iconify-icon>
</div>
<h2 className="text-[22px] font-semibold tracking-tight text-gray-900 mb-2">Valida tu correo electrónico</h2>
<p className="text-sm font-normal text-gray-500 leading-relaxed px-2">Necesitamos verificar tu correo para continuar con el proceso de matrícula de manera segura.</p>
</div>

<div className="w-full max-w-[420px] rounded-[18px] p-[1px] bg-gradient-to-b from-gray-200/80 to-gray-100/40 shadow-sm">
<div className="bg-white rounded-[17px] p-6 sm:p-7 flex flex-col gap-6 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
<div className="flex flex-col gap-1.5">
<label className="text-sm font-medium text-gray-700 ml-0.5">Correo electrónico</label>
<input className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200/80 bg-gray-50/30 text-sm font-normal text-gray-900 placeholder-gray-400 focus:bg-white focus:border-orange-400 focus:ring-[3px] focus:ring-orange-500/10 outline-none transition-all duration-200 shadow-sm" placeholder="tu@correo.com" type="email"/>
</div>

<div className="relative group w-full rounded-lg overflow-hidden p-[1px]">

<div className="absolute inset-0 bg-[#E0541C] rounded-lg pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_40%,#ffffff_60%,transparent_60%,transparent_100%)] animate-[spin_2.5s_linear_infinite] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

<button className="relative w-full h-full bg-[#F2652B] text-white rounded-[7px] py-2.5 px-4 text-sm font-semibold flex items-center justify-center transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] group-active:scale-[0.99]">
                                Enviar código de verificación
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
