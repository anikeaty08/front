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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
navy: '#0f172a',
orange: '#ea580c',
gold: '#d97706',
dark: '#171717',
}
},
backgroundImage: {
'grid-slate': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
'grid-orange': "linear-gradient(to right, rgba(234, 88, 12, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(234, 88, 12, 0.05) 1px, transparent 1px)",
'grid-amber': "linear-gradient(to right, rgba(217, 119, 6, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 119, 6, 0.05) 1px, transparent 1px)",
}
}
}
}



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 dark:border-white/5 bg-white/70 dark:bg-[#020617]/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 flex items-center justify-center rounded">
<iconify-icon className="text-brand-gold text-xs transform rotate-[-90deg]" icon="solar:play-bold"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">ESTRATEGIA GLOBAL</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-brand-orange transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-brand-orange transition-colors" href="#metodologia">Metodología</a>
<a className="hover:text-brand-orange transition-colors" href="#trayectoria">Trayectoria</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-slate-300" id="theme-toggle">
<iconify-icon className="text-xl dark:hidden" icon="solar:moon-stars-linear"></iconify-icon>
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-2-linear"></iconify-icon>
</button>
<a className="hidden sm:flex items-center px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium rounded hover:opacity-90 transition-opacity" href="#contacto">
                    Consultar
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 dark:bg-[#020617]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#020617]"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 dark:border-white/10 bg-orange-50/50 dark:bg-white/5 text-orange-700 dark:text-slate-200 text-sm font-medium mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                Consultoría Intercontinental
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Elevando estándares corporativos a través de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">excelencia estratégica.</span>
</h1>
<p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-10">
                Auditoría, talento humano y seguridad corporativa unificados para el crecimiento global.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange text-white font-medium rounded hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group" href="#contacto">
                    Iniciar Transformación
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-slate-900 dark:text-white font-medium rounded hover:bg-slate-50 dark:hover:bg-white/10 transition-colors" href="#servicios">
                    Explorar Pilares
                </a>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-slate-200 dark:border-white/5 dark:bg-slate-950" id="metodologia">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6">
                        Una visión integral para desafíos complejos
                    </h2>
<p className="text-lg leading-relaxed mb-6">
                        En Estrategia Global, construimos arquitecturas de negocio resilientes. Nuestra metodología integra el rigor normativo internacional con la agilidad del mercado.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700 dark:text-slate-300">Diagnóstico profundo y personalizado</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700 dark:text-slate-300">Implementación escalable y medible</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl dark:opacity-20"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="p-6 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-3xl text-brand-navy dark:text-slate-300 mb-4" icon="solar:globe-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 dark:text-white mb-1">Alcance Global</h3>
<p className="text-sm">Estándares internacionales adaptados localmente.</p>
</div>
<div className="p-6 rounded-lg bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-sm mt-8">
<iconify-icon className="text-3xl text-brand-navy dark:text-slate-300 mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 dark:text-white mb-1">Seguridad</h3>
<p className="text-sm">Mitigación proactiva de riesgos operativos.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-slate-200 dark:border-white/5 dark:bg-[#0f0a05]" id="servicios">

<div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/10 via-[#0f0a05] to-[#0f0a05]"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="lg:w-1/2 mb-12">
<span className="text-brand-orange font-semibold tracking-wide text-xs uppercase border border-brand-orange/20 px-2 py-1 rounded bg-brand-orange/5">Pilar Estratégico I</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-orange-50 mt-4 mb-6">
                    Contabilidad y Auditoría
                </h2>
<p className="text-lg text-slate-600 dark:text-orange-100/60">
                    Garantizamos la transparencia financiera y el cumplimiento normativo mediante la aplicación rigurosa de normas NIIF y NIA.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-white/40 dark:bg-white/5 border border-orange-100 dark:border-orange-500/10 hover:border-orange-300 dark:hover:border-orange-500/30 transition-all backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Auditoría Financiera</h3>
<p className="text-base text-slate-600 dark:text-slate-400">Evaluación objetiva bajo estándares internacionales para asegurar la integridad.</p>
</div>

<div className="group p-8 rounded-xl bg-white/40 dark:bg-white/5 border border-orange-100 dark:border-orange-500/10 hover:border-orange-300 dark:hover:border-orange-500/30 transition-all backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:scale-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Fiscalidad</h3>
<p className="text-base text-slate-600 dark:text-slate-400">Gestión fiscal estratégica para optimizar la carga tributaria legalmente.</p>
</div>

<div className="group p-8 rounded-xl bg-white/40 dark:bg-white/5 border border-orange-100 dark:border-orange-500/10 hover:border-orange-300 dark:hover:border-orange-500/30 transition-all backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-50 dark:bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Consultoría NIIF</h3>
<p className="text-base text-slate-600 dark:text-slate-400">Implementación y actualización de Normas Internacionales.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-200 dark:border-white/5 dark:bg-[#0c0b05]">

<div className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-amber-900/10 to-transparent"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-white dark:from-[#1e1a10] dark:to-[#16140d] border border-amber-200 dark:border-amber-900/20 shadow-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
<iconify-icon className="text-xl text-amber-600 dark:text-amber-400" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 dark:text-amber-50">Headhunting Ejecutivo</h4>
</div>
<p className="text-sm dark:text-slate-400">Búsqueda de liderazgo estratégico para alta dirección.</p>
</div>
<div className="p-6 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
<iconify-icon className="text-2xl text-amber-500 mb-3" icon="solar:magnifer-linear"></iconify-icon>
<h4 className="font-medium text-slate-900 dark:text-white text-sm">Screening</h4>
</div>
<div className="p-6 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
<iconify-icon className="text-2xl text-amber-500 mb-3" icon="solar:user-check-linear"></iconify-icon>
<h4 className="font-medium text-slate-900 dark:text-white text-sm">Fit Cultural</h4>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-amber-600 dark:text-amber-500 font-semibold tracking-wide text-xs uppercase border border-amber-200 dark:border-amber-900/30 px-2 py-1 rounded bg-amber-50 dark:bg-amber-900/10">Pilar Estratégico II</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
                    Talento Humano y Selección
                </h2>
<p className="text-lg leading-relaxed mb-8 dark:text-slate-400">
                    Evaluamos la inteligencia emocional, el potencial de liderazgo y la alineación con la cultura corporativa de su empresa.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<iconify-icon className="text-2xl text-amber-500" icon="solar:target-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Perfiles Especializados</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Ingeniería, Finanzas, Tecnología.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
<iconify-icon className="text-2xl text-amber-500" icon="solar:stopwatch-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-slate-900 dark:text-white text-sm">Eficiencia</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">Reducción del tiempo de contratación.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 dark:bg-neutral-950 border-t border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wide text-xs uppercase border border-slate-200 dark:border-neutral-800 px-2 py-1 rounded">Pilar Estratégico III</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mt-4 mb-6">
                    Salud y Seguridad Ocupacional
                </h2>
<p className="text-lg text-slate-600 dark:text-slate-400">
                    Implementamos sistemas de gestión rigurosos que aseguran el cumplimiento legal y fomentan una cultura de prevención.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="flex flex-col items-start p-6 rounded-lg hover:bg-white/50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-neutral-800">
<iconify-icon className="text-4xl text-slate-900 dark:text-white mb-4" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Normativa Vigente</h3>
<p className="text-slate-600 dark:text-neutral-500 text-base">Alineación con las leyes locales e internacionales de seguridad.</p>
</div>
<div className="flex flex-col items-start p-6 rounded-lg hover:bg-white/50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-neutral-800">
<iconify-icon className="text-4xl text-slate-900 dark:text-white mb-4" icon="solar:heart-pulse-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Salud Ocupacional</h3>
<p className="text-slate-600 dark:text-neutral-500 text-base">Programas de vigilancia y prevención de riesgos psicosociales.</p>
</div>
<div className="flex flex-col items-start p-6 rounded-lg hover:bg-white/50 dark:hover:bg-neutral-900 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-neutral-800">
<iconify-icon className="text-4xl text-slate-900 dark:text-white mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Prevención de Riesgos</h3>
<p className="text-slate-600 dark:text-neutral-500 text-base">Identificación y control de peligros en el entorno.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 dark:bg-[#020617]">
<div className="max-w-7xl mx-auto bg-slate-900 dark:bg-white rounded-2xl overflow-hidden shadow-2xl dark:shadow-white/5">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white dark:text-slate-900 mb-6">
                        Mitigación de Riesgos y Cumplimiento Total
                    </h2>
<p className="text-lg text-slate-300 dark:text-slate-600 mb-8">
                        Ofrecemos un blindaje estratégico que va desde la seguridad de la información hasta la integridad física de las instalaciones.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-orange" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-slate-200 dark:text-slate-700 font-medium">Confidencialidad</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-orange" icon="solar:file-check-linear"></iconify-icon>
<span className="text-slate-200 dark:text-slate-700 font-medium">Compliance</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-orange" icon="solar:eye-linear"></iconify-icon>
<span className="text-slate-200 dark:text-slate-700 font-medium">Auditoría Interna</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-brand-orange" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-slate-200 dark:text-slate-700 font-medium">Continuidad</span>
</div>
</div>
</div>

<div className="relative bg-slate-800 dark:bg-slate-100 h-full min-h-[360px] flex items-center justify-center p-8 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] dark:bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="w-full max-w-sm bg-slate-900/80 dark:bg-white rounded-xl border border-slate-700 dark:border-slate-200 shadow-2xl backdrop-blur-md overflow-hidden relative z-10">

<div className="px-5 py-4 border-b border-slate-700 dark:border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:shield-check-bold"></iconify-icon>
<span className="text-sm font-semibold text-white dark:text-slate-900">Estado de Seguridad</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-medium text-emerald-400 dark:text-emerald-600 uppercase tracking-wide">Activo</span>
</div>
</div>

<div className="p-5 space-y-5">

<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-400 dark:text-slate-500">Cumplimiento ISO 27001</span>
<span className="text-white dark:text-slate-900">98%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 dark:bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-orange w-[98%] rounded-full"></div>
</div>
</div>

<div className="space-y-3 pt-1">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 dark:bg-slate-50 border border-slate-700 dark:border-slate-100">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400 dark:text-blue-600">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white dark:text-slate-900">Protección de Datos</span>
<span className="text-[10px] text-slate-500">GDPR &amp; LOPD</span>
</div>
</div>
<iconify-icon className="text-emerald-500 text-base" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 dark:bg-slate-50 border border-slate-700 dark:border-slate-100">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-purple-500/10 text-purple-400 dark:text-purple-600">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white dark:text-slate-900">Auditoría Interna</span>
<span className="text-[10px] text-slate-500">Reciente</span>
</div>
</div>
<span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">PASSED</span>
</div>
</div>
</div>

<div className="px-5 py-4 bg-slate-800/30 dark:bg-slate-50 border-t border-slate-700 dark:border-slate-100 flex items-center justify-between">
<span className="text-[10px] text-slate-500">Actualizado: Hoy 09:41 AM</span>
<div className="flex items-center gap-2 text-brand-orange text-xs font-medium cursor-pointer hover:underline">
                                Reporte
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-slate-200/50 dark:border-white/5 dark:bg-slate-950">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                    Valor Empresarial Tangible
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-14 h-14 mx-auto bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-blue-600 dark:text-blue-400" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2">Eficiencia</h3>
<p className="text-sm text-slate-500">Optimización de recursos y tiempos.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto bg-green-50 dark:bg-green-900/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-green-600 dark:text-green-400" icon="solar:graph-new-up-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2">Crecimiento</h3>
<p className="text-sm text-slate-500">Decisiones basadas en datos precisos.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto bg-purple-50 dark:bg-purple-900/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-purple-600 dark:text-purple-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2">Retención</h3>
<p className="text-sm text-slate-500">Equipos de alto rendimiento alineados.</p>
</div>
<div className="text-center">
<div className="w-14 h-14 mx-auto bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-600 dark:text-slate-300" icon="solar:shield-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 dark:text-white mb-2">Seguridad</h3>
<p className="text-sm text-slate-500">Tranquilidad ante regulaciones.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/40 dark:bg-white/5 backdrop-blur-sm border-b border-slate-200 dark:border-white/5" id="trayectoria">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10">
<div className="px-4 text-center lg:text-left">
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">+15</h3>
<p className="text-sm font-medium uppercase tracking-wider text-slate-500">Años de Experiencia</p>
</div>
<div className="px-4 pt-8 lg:pt-0 text-center lg:text-left">
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">+200</h3>
<p className="text-sm font-medium uppercase tracking-wider text-slate-500">Empresas Asesoradas</p>
</div>
<div className="px-4 pt-8 lg:pt-0 text-center lg:text-left">
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">3</h3>
<p className="text-sm font-medium uppercase tracking-wider text-slate-500">Continentes</p>
</div>
<div className="px-4 pt-8 lg:pt-0 text-center lg:text-left">
<h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">100%</h3>
<p className="text-sm font-medium uppercase tracking-wider text-slate-500">Cumplimiento</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 dark:bg-[#020617]" id="contacto">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
                    Inicie la Conversación
                </h2>
<p className="text-lg text-slate-600 dark:text-slate-400">
                    Dé el primer paso hacia la optimización integral de su empresa.
                </p>
</div>
<form className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-none">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">Nombre</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-slate-900 dark:text-white" id="name" placeholder="Juan Pérez" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="company">Empresa</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-slate-900 dark:text-white" id="company" placeholder="Su Empresa S.A." type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Correo Corporativo</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-slate-900 dark:text-white" id="email" placeholder="juan@empresa.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="interest">Interés</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all appearance-none text-slate-900 dark:text-white" id="interest">
<option>Contabilidad y Auditoría</option>
<option>Reclutamiento de Talento</option>
<option>Salud y Seguridad Ocupacional</option>
<option>Consultoría Integral</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">Mensaje</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all text-slate-900 dark:text-white" id="message" placeholder="Describa sus necesidades..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="button">
                    Enviar Solicitud
                    <iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#020617] backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 dark:bg-white flex items-center justify-center rounded-sm">
<iconify-icon className="text-brand-gold text-[10px] transform rotate-[-90deg]" icon="solar:play-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">ESTRATEGIA GLOBAL</span>
</div>
<div className="text-sm text-slate-500">
                © 2023 Estrategia Global. Todos los derechos reservados.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-orange transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
