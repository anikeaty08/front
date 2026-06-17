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



(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === "init") { cal.ns[ar[1]] = ar[2]; return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init",  {origin:"https://cal.com"});
Cal("ui", {"theme":"auto","styles":{"branding":{"brandColor":"#B05B3B"}},"hideEventTypeDetails":false,"layout":"month_view"});



tailwind.config = {
darkMode: 'media',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
primary: '#1A1C1E',
accent: '#B05B3B',
bg: '#F9F7F2',
textSecondary: '#4A5568',
border: '#D1D5DB'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<div className="fixed inset-0 pointer-events-none parallax-bg z-0 h-screen w-full"></div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center animate-clip-1">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center bg-white dark:bg-white/5 border border-brand-border dark:border-white/10 rounded-lg shadow-sm group-hover:border-[#B05B3B]/50 transition-colors duration-300">
<iconify-icon className="text-[#1A1C1E] dark:text-white group-hover:text-[#B05B3B] transition-colors" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="font-display font-semibold text-sm tracking-tighter text-[#1A1C1E] dark:text-white">
                Jorge Riveros V
            </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-tight text-[#4A5568] dark:text-gray-400">
<a className="hover:text-[#B05B3B] transition-colors" href="#">Manifiesto</a>
<a className="hover:text-[#B05B3B] transition-colors" href="#">Servicios</a>
<a className="hover:text-[#B05B3B] transition-colors" href="#">Testimonios</a>
</div>
<button className="md:hidden text-[#1A1C1E] dark:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<main className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center text-center">

<div className="animate-clip-1 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
<iconify-icon className="text-[#B05B3B]" icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-[#B05B3B] tracking-wide uppercase">Anticonsultoría / Sentido Común</span>
</div>
</div>

<div className="animate-clip-2 max-w-4xl mx-auto">
<h1 className="font-display font-semibold text-5xl md:text-7xl tracking-tight leading-[1.1] text-[#1A1C1E] dark:text-white mb-6">
                Estrategia humana para <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1C1E] to-[#4A5568] dark:from-white dark:to-gray-500">
                    decisiones de alto nivel.
                </span>
</h1>
<p className="font-sans font-normal text-base md:text-lg text-[#4A5568] dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Sin PowerPoints infinitos ni promesas vacías. Recupera la claridad de tu negocio con una sesión de diagnóstico directa de 60 minutos.
            </p>
</div>

<div className="animate-clip-3 mt-10 flex flex-col items-center gap-4 w-full">
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">

<a className="group relative inline-flex items-center justify-center p-[1px] rounded-lg overflow-hidden transition-transform active:scale-95" href="#booking">
<span className="absolute inset-0 bg-gradient-to-r from-[#1A1C1E] via-[#B05B3B] to-[#1A1C1E] opacity-20 group-hover:opacity-100 transition-opacity duration-500"></span>
<div className="relative px-6 py-3 bg-white dark:bg-[#151515] rounded-[7px] flex items-center gap-3 transition-colors group-hover:bg-opacity-95">
<span className="font-medium text-sm text-[#1A1C1E] dark:text-white tracking-tight">Agendar Diagnóstico ($100 USD)</span>
<iconify-icon className="text-[#B05B3B] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</a>

<button className="group px-6 py-3 rounded-lg border border-transparent hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-[#4A5568] dark:text-gray-400 text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-[#4A5568] dark:text-gray-400 group-hover:text-[#B05B3B] transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Ver Metodología
                </button>
</div>
</div>

<div className="animate-clip-4 mt-20 w-full max-w-4xl relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#B05B3B]/20 to-gray-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
<div className="relative gradient-border-mask bg-[#F9F7F2] dark:bg-[#0F0F0F] rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#B05B3B]/40"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
</div>
</div>
<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-[#111111]">
<div className="space-y-4 text-left">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#B05B3B]" icon="solar:chart-2-bold-duotone" width="20"></iconify-icon>
<span className="text-xs font-semibold text-[#1A1C1E] dark:text-white uppercase tracking-wider">Claridad Operativa</span>
</div>
<div className="p-4 rounded-lg border border-brand-border dark:border-white/5 bg-[#F9F7F2] dark:bg-white/5 flex flex-col gap-1">
<span className="text-[10px] text-[#4A5568] dark:text-gray-400">Eficiencia Actual</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-display font-semibold text-[#1A1C1E] dark:text-white">84%</span>
<span className="text-xs text-green-600 mb-1 flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +12%
                                </span>
</div>
<div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-[#B05B3B] rounded-full w-[84%]"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-brand-border dark:border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#B05B3B]/10 flex items-center justify-center text-[#B05B3B]">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-[#1A1C1E] dark:text-white">Alineación</span>
<span className="text-[10px] text-[#4A5568] dark:text-gray-500">3 pendientes</span>
</div>
</div>
<div className="w-8 h-4 bg-[#B05B3B] rounded-full relative cursor-pointer">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
<div className="space-y-4 text-left">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#4A5568] dark:text-gray-400" icon="solar:checklist-minimalistic-bold-duotone" width="20"></iconify-icon>
<span className="text-xs font-semibold text-[#1A1C1E] dark:text-white uppercase tracking-wider">Acciones Clave</span>
</div>
<div className="space-y-2">
<div className="group flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-4 h-4 rounded border border-[#D1D5DB] dark:border-gray-600 flex items-center justify-center group-hover:border-[#B05B3B] transition-colors">
<iconify-icon className="text-[#B05B3B] opacity-0 group-hover:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-[#4A5568] dark:text-gray-300">Auditoría de procesos</span>
</div>
<div className="group flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-4 h-4 rounded bg-[#B05B3B] border border-[#B05B3B] flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-[#1A1C1E] dark:text-white line-through decoration-gray-400">KPIs reales</span>
</div>
<div className="group flex items-center gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-4 h-4 rounded border border-[#D1D5DB] dark:border-gray-600 flex items-center justify-center group-hover:border-[#B05B3B] transition-colors">
<iconify-icon className="text-[#B05B3B] opacity-0 group-hover:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-[#4A5568] dark:text-gray-300">Eliminación burocracia</span>
</div>
</div>
<div className="mt-4 flex items-end gap-1 h-16 w-full opacity-60">
<div className="w-full bg-[#B05B3B]/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-[#B05B3B]/40 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-[#B05B3B]/30 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#B05B3B]/60 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-[#B05B3B] rounded-t-sm h-[90%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 md:mt-32 w-full animate-clip-4 border-t border-brand-border/40 dark:border-white/5 pt-12 mb-20">
<p className="text-xs font-semibold uppercase tracking-widest text-[#4A5568]/60 dark:text-gray-600 mb-8">
                Empresas que recuperaron el sentido
            </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="simple-icons:spacex" width="32"></iconify-icon>
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="simple-icons:nasa" width="40"></iconify-icon>
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="simple-icons:uber" width="40"></iconify-icon>
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="simple-icons:visa" width="48"></iconify-icon>
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="simple-icons:grab" width="48"></iconify-icon>
</div>
</div>

<div className="w-full animate-clip-5 border-t border-brand-border/40 dark:border-white/5 pt-20 pb-10 text-left" id="booking">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

<div className="flex flex-col gap-6 md:sticky md:top-24">
<div>
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#B05B3B] animate-pulse"></span>
<span className="text-xs font-medium text-[#B05B3B] uppercase tracking-wider">Disponibilidad Limitada</span>
</div>
<h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#1A1C1E] dark:text-white mb-4">
                            Reserva tu sesión estratégica.
                        </h2>
<p className="text-sm text-[#4A5568] dark:text-gray-400 leading-relaxed max-w-md">
                            Sin intermediarios. Selecciona el horario que mejor te convenga para tener una conversación honesta y directa sobre el futuro de tu empresa.
                        </p>
</div>
<div className="space-y-4 pt-4 border-t border-brand-border/40 dark:border-white/5">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="solar:videocamera-record-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-[#1A1C1E] dark:text-white">Videollamada 1:1</h3>
<p className="text-xs text-[#4A5568] dark:text-gray-500 mt-1">60 minutos vía Google Meet o Zoom.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-[#1A1C1E] dark:text-white">Diagnóstico Previo</h3>
<p className="text-xs text-[#4A5568] dark:text-gray-500 mt-1">Análisis breve de tu situación antes de la llamada.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#1A1C1E] dark:text-white" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-[#1A1C1E] dark:text-white">100% Confidencial</h3>
<p className="text-xs text-[#4A5568] dark:text-gray-500 mt-1">Lo que hablamos en la sesión, se queda en la sesión.</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#B05B3B]/10 to-transparent rounded-2xl blur-xl -z-10"></div>
<div className="relative w-full rounded-2xl border border-brand-border dark:border-white/10 bg-white dark:bg-[#111] shadow-2xl overflow-hidden min-h-[500px]">


<div className="w-full h-full p-1">
<button className="w-full h-[600px] flex items-center justify-center bg-[#F9F7F2] dark:bg-[#0F0F0F] rounded-xl group transition-all hover:bg-opacity-80" data-cal-config='{"layout":"month_view"}' data-cal-link="rick/get-rick-rolled">
<div className="text-center space-y-3">
<div className="w-12 h-12 mx-auto rounded-full bg-white dark:bg-white/5 border border-brand-border dark:border-white/10 flex items-center justify-center shadow-sm">
<iconify-icon className="text-[#B05B3B]" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<span className="block text-sm font-medium text-[#1A1C1E] dark:text-white">Cargar Calendario</span>
<span className="block text-xs text-[#4A5568] dark:text-gray-500">Click para seleccionar fecha</span>
</div>
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
