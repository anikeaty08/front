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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#2c5aa0', // Approximate from logo
dark: '#1e3a68',
yellow: '#f4b400', // Approximate from logo
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(44, 90, 160, 0.15)',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">

<div className="relative w-8 h-8 flex items-center justify-center">
<span className="text-2xl font-bold text-brand-blue tracking-tighter">PA</span>
<svg className="absolute -top-1 -right-1 w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<line x1="7" x2="17" y1="17" y2="7"></line>
<polyline points="7 7 17 7 17 17"></polyline>
</svg>
</div>
<span className="text-xl font-semibold text-brand-blue tracking-tight">paconsultores</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-500">
<a className="hover:text-brand-blue transition-colors" href="#problema">Problema</a>
<a className="hover:text-brand-blue transition-colors" href="#servicios">Servicios</a>
<a className="hover:text-brand-blue transition-colors" href="#health-check">Health Check</a>
<a className="hover:text-brand-blue transition-colors" href="#casos">Casos</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-brand-blue rounded-full hover:bg-brand-dark transition-all shadow-sm hover:shadow-md" href="#contacto">
                Agendar diagnóstico
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-70"></div>
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-medium text-indigo-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Especialistas SAP Supply Chain
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-indigo-900 tracking-tight leading-[1.1] mb-6">
                    Haz que tu Supply Chain funcione sin fricción con SAP.
                </h1>
<p className="text-lg sm:text-xl text-indigo-500 leading-relaxed mb-8 max-w-lg">
                    Implementamos y optimizamos SAP Supply Chain para mejorar inventario, entregas y productividad con resultados medibles.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark transition-all shadow-lg shadow-blue-900/10" href="#contacto">
                        Agendar diagnóstico (15 min)
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-indigo-700 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all" href="#health-check">
                        Solicitar SAP Health Check
                    </a>
</div>
<div className="flex flex-wrap gap-4 text-xs font-medium text-indigo-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-brand-blue" data-lucide="check-circle"></i>
                        Especialistas en Supply Chain
                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-brand-blue" data-lucide="file-text"></i>
                        Metodología + entregables
                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-brand-blue" data-lucide="trending-up"></i>
                        Time-to-Value
                    </div>
</div>
</div>
<div className="relative hidden lg:block">

<div className="relative w-full aspect-square max-w-lg mx-auto bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 p-8 shadow-2xl shadow-indigo-200/50 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-[0.03]">

<div className="bg-indigo-900 w-full h-full col-span-1 row-span-1"></div>

</div>

<div className="relative z-10 w-64 h-64 bg-white rounded-xl shadow-xl border border-indigo-100 flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<p className="text-sm font-semibold text-indigo-900 mb-1">Stock Optimization</p>
<p className="text-xs text-green-600 font-medium">+24% Efficiency</p>

<div className="absolute -right-24 top-1/2 w-20 h-[1px] bg-indigo-300"></div>
<div className="absolute -left-24 top-1/2 w-20 h-[1px] bg-indigo-300"></div>
<div className="absolute -top-16 left-1/2 w-[1px] h-12 bg-indigo-300"></div>
</div>
<div className="absolute top-16 right-12 bg-white p-3 rounded-lg shadow-lg border border-indigo-100 animate-[bounce_3s_infinite]">
<i className="w-5 h-5 text-indigo-400" data-lucide="database"></i>
</div>
<div className="absolute bottom-20 left-12 bg-white p-3 rounded-lg shadow-lg border border-indigo-100 animate-[bounce_4s_infinite]">
<i className="w-5 h-5 text-indigo-400" data-lucide="truck"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50" id="problema">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight mb-4">
                    Si esto te suena familiar, estás perdiendo dinero cada semana
                </h2>
<p className="text-indigo-500">
                    Los cuellos de botella operativos terminan afectando el margen.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="search-x"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Baja trazabilidad</h3>
<p className="text-sm text-indigo-500 mt-1">Inventarios descuadrados y datos poco fiables.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="file-spreadsheet"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Dependencia de Excel</h3>
<p className="text-sm text-indigo-500 mt-1">Retrabajo y procesos manuales fuera de SAP.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="alert-triangle"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Quiebres &amp; Sobreinventario</h3>
<p className="text-sm text-indigo-500 mt-1">Falta de balance entre demanda y stock.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="sliders"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Configuración subóptima</h3>
<p className="text-sm text-indigo-500 mt-1">Baja adopción de SAP por complejidad.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-500" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-indigo-900">Proyectos atrasados</h3>
<p className="text-sm text-indigo-500 mt-1">Costos ocultos e implementaciones eternas.</p>
</div>
</div>
</div>
<div className="text-center pt-8 border-t border-indigo-200">
<p className="text-base font-medium text-indigo-900">
                    paconsultores aterriza el problema en un plan ejecutable en SAP, sin detener la operación.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight">De caos operativo a control en semanas</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 border border-indigo-200 rounded-2xl hover:border-blue-200 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="eye"></i>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-3">Control y visibilidad</h3>
<p className="text-indigo-500 leading-relaxed">
                        Datos confiables, trazabilidad punta a punta y monitoreo en tiempo real.
                    </p>
</div>

<div className="group p-8 border border-indigo-200 rounded-2xl hover:border-blue-200 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-3">Eficiencia operativa</h3>
<p className="text-indigo-500 leading-relaxed">
                        Menos errores manuales, reducción de retrabajo y mayor productividad por FTE.
                    </p>
</div>

<div className="group p-8 border border-indigo-200 rounded-2xl hover:border-blue-200 hover:shadow-glow transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-3">Entrega sin sorpresas</h3>
<p className="text-indigo-500 leading-relaxed">
                        Alcance definido, gestión de riesgos proactiva, documentación completa y handover claro.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50 border-t border-indigo-100" id="servicios">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight mb-16 text-center">Servicios</h2>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 lg:p-12 border border-indigo-200 flex flex-col h-full shadow-sm">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-indigo-900 mb-4">Implementación SAP Supply Chain</h3>
<p className="text-indigo-500">Diseñamos, configuramos y ponemos en marcha procesos críticos sin frenar tu operación.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> AS-IS / TO-BE &amp; Blueprint
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Parametrización experta
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Pruebas integrales / UAT
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Capacitación a usuarios
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Go-live + estabilización
                        </li>
</ul>
<a className="w-full text-center py-3 rounded-lg border border-indigo-300 text-indigo-700 font-medium hover:border-indigo-800 hover:text-indigo-900 transition-colors" href="#contacto">
                        Quiero implementar
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 lg:p-12 border border-indigo-200 flex flex-col h-full shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-brand-yellow/10 px-4 py-1 rounded-bl-xl text-xs font-bold text-yellow-700 uppercase tracking-wide">
                        High Value
                    </div>
<div className="mb-6">
<h3 className="text-2xl font-semibold text-indigo-900 mb-4">Optimización Operativa / AMS</h3>
<p className="text-indigo-500">Hacemos que SAP te dé valor real: mejora continua, quick wins y soporte experto.</p>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> SAP Health Check
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Optimización de flujos
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Reducción de errores y retrabajo
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> Estandarización de procesos
                        </li>
<li className="flex items-center gap-3 text-sm text-indigo-600">
<i className="w-4 h-4 text-brand-blue" data-lucide="check"></i> KPIs &amp; Reporting
                        </li>
</ul>
<a className="w-full text-center py-3 rounded-lg bg-brand-blue text-white font-medium hover:bg-brand-dark transition-colors shadow-md" href="#contacto">
                        Quiero optimizar
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-900 text-white relative overflow-hidden" id="health-check">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow rounded-full filter blur-[80px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Empieza con un Health Check (2 semanas)</h2>
<p className="text-indigo-400 mb-12">Diagnóstico + quick wins + roadmap para justificar inversión</p>
<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-left mb-10">
<div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-brand-blue" data-lucide="activity"></i>
</div>
<div>
<h4 className="font-medium text-white">Evaluación de operación</h4>
<p className="text-sm text-indigo-400">Análisis de procesos actuales y dolores operativos.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-brand-blue" data-lucide="server"></i>
</div>
<div>
<h4 className="font-medium text-white">Evaluación SAP</h4>
<p className="text-sm text-indigo-400">Revisión de capacidades técnicas y configuración.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-brand-blue" data-lucide="list-todo"></i>
</div>
<div>
<h4 className="font-medium text-white">Backlog priorizado</h4>
<p className="text-sm text-indigo-400">Lista de mejoras con estimación de esfuerzo/impacto.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-brand-blue" data-lucide="map"></i>
</div>
<div>
<h4 className="font-medium text-white">Plan de acción</h4>
<p className="text-sm text-indigo-400">Ruta clara para implementación u optimización.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-indigo-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#contacto">
                    Solicitar Health Check
                </a>
<p className="text-sm text-indigo-500">
<span className="text-indigo-300">Inversión según alcance.</span> Respuesta en 24–48 hrs.
                </p>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-indigo-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-indigo-900 tracking-tight mb-12 text-center">Resultados que importan (KPIs de Supply Chain)</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-indigo-100">
<div className="p-4">
<div className="text-4xl font-bold text-brand-blue mb-2 tracking-tight">↑</div>
<p className="text-sm font-medium text-indigo-600">Exactitud de inventario</p>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-brand-blue mb-2 tracking-tight">↓</div>
<p className="text-sm font-medium text-indigo-600">Quiebres de stock</p>
</div>
<div className="p-4 border-l-0 lg:border-l border-indigo-100"> 
<div className="text-4xl font-bold text-brand-blue mb-2 tracking-tight">↑</div>
<p className="text-sm font-medium text-indigo-600">OTIF / Nivel de servicio</p>
</div>
<div className="p-4">
<div className="text-4xl font-bold text-brand-blue mb-2 tracking-tight">↓</div>
<p className="text-sm font-medium text-indigo-600">Horas de retrabajo</p>
</div>
</div>
<p className="text-center text-xs text-indigo-400 mt-10 italic">Resultados varían según industria y madurez del proceso.</p>
</div>
</section>

<section className="py-24 bg-indigo-50" id="casos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight">Casos (resumen ejecutivo)</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm flex flex-col">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded uppercase tracking-wide">Manufactura</span>
</div>
<h4 className="font-medium text-indigo-900 mb-2">Descontrol en planta y almacenes</h4>
<p className="text-sm text-indigo-500 mb-4 flex-grow">Inventario en SAP difería del físico un 30%.</p>
<div className="border-t border-indigo-100 pt-4 mb-4">
<p className="text-xs font-semibold text-indigo-400 uppercase mb-1">Intervención</p>
<p className="text-sm text-indigo-700">Optimización SAP + rediseño de proceso</p>
</div>
<div className="bg-green-50 px-3 py-2 rounded text-xs font-medium text-green-700">
                        +visibilidad, -errores, +cumplimiento
                    </div>
</div>

<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm flex flex-col">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded uppercase tracking-wide">Retail</span>
</div>
<h4 className="font-medium text-indigo-900 mb-2">Quiebres de stock en temporada</h4>
<p className="text-sm text-indigo-500 mb-4 flex-grow">Pérdida de ventas por falta de planificación en SAP.</p>
<div className="border-t border-indigo-100 pt-4 mb-4">
<p className="text-xs font-semibold text-indigo-400 uppercase mb-1">Intervención</p>
<p className="text-sm text-indigo-700">MRP tuning + capacitación planner</p>
</div>
<div className="bg-green-50 px-3 py-2 rounded text-xs font-medium text-green-700">
                        +disponibilidad, -inventario obsoleto
                    </div>
</div>

<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm flex flex-col">
<div className="mb-4">
<span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded uppercase tracking-wide">Distribución</span>
</div>
<h4 className="font-medium text-indigo-900 mb-2">Costos logísticos elevados</h4>
<p className="text-sm text-indigo-500 mb-4 flex-grow">Rutas ineficientes y gastos de transporte ocultos.</p>
<div className="border-t border-indigo-100 pt-4 mb-4">
<p className="text-xs font-semibold text-indigo-400 uppercase mb-1">Intervención</p>
<p className="text-sm text-indigo-700">Implementación TM básica + control gastos</p>
</div>
<div className="bg-green-50 px-3 py-2 rounded text-xs font-medium text-green-700">
                        -costo flete, +trazabilidad entregas
                    </div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-dark" href="#contacto">
                    Quiero un caso similar <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight mb-16 text-center">Cómo trabajamos</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-indigo-100"></div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="text-center group">
<div className="relative z-10 w-24 h-24 mx-auto bg-white border border-indigo-200 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:shadow-md transition-all">
<span className="text-2xl font-bold text-indigo-300 group-hover:text-brand-blue transition-colors">01</span>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Diagnóstico</h3>
<p className="text-sm text-indigo-500">Entendemos el dolor y el proceso actual.</p>
</div>

<div className="text-center group">
<div className="relative z-10 w-24 h-24 mx-auto bg-white border border-indigo-200 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:shadow-md transition-all">
<span className="text-2xl font-bold text-indigo-300 group-hover:text-brand-blue transition-colors">02</span>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Diseño + Plan</h3>
<p className="text-sm text-indigo-500">Blueprint, alcance y cronograma.</p>
</div>

<div className="text-center group">
<div className="relative z-10 w-24 h-24 mx-auto bg-white border border-indigo-200 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:shadow-md transition-all">
<span className="text-2xl font-bold text-indigo-300 group-hover:text-brand-blue transition-colors">03</span>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Ejecución SAP</h3>
<p className="text-sm text-indigo-500">Configuración, desarrollo y pruebas.</p>
</div>

<div className="text-center group">
<div className="relative z-10 w-24 h-24 mx-auto bg-white border border-indigo-200 rounded-full flex items-center justify-center mb-6 group-hover:border-brand-blue group-hover:shadow-md transition-all">
<span className="text-2xl font-bold text-indigo-300 group-hover:text-brand-blue transition-colors">04</span>
</div>
<h3 className="text-lg font-semibold text-indigo-900 mb-2">Adopción</h3>
<p className="text-sm text-indigo-500">Go-live, hypercare y mejora continua.</p>
</div>
</div>
</div>
<p className="text-center text-sm text-indigo-400 mt-12">Entregables claros, documentación y handover en cada etapa.</p>
</div>
</section>

<section className="py-24 bg-indigo-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight mb-12 text-center">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Pueden trabajar con mi equipo interno/partner?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        Sí, nos integramos como equipo extendido o especialistas en nicho para apoyar a tu equipo de IT o Partner actual.
                    </p>
</details>
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Cuánto tarda un diagnóstico o implementación?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        Un diagnóstico (Health Check) toma aprox. 2 semanas. Las implementaciones varían de 3 a 6 meses según el alcance.
                    </p>
</details>
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Interrumpen la operación?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        No. Trabajamos en ambientes de Calidad/Pruebas y planificamos ventanas de mantenimiento para el paso a Productivo.
                    </p>
</details>
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Qué módulos cubren?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        Principalmente MM, WM/EWM, SD, PP y QM, enfocados en la cadena de suministro integrada.
                    </p>
</details>
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Ofrecen soporte post go-live (AMS)?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        Sí, contamos con bolsas de horas y esquemas de soporte dedicados con SLAs definidos para estabilización y mejora continua.
                    </p>
</details>
<details className="group bg-white rounded-lg border border-indigo-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-indigo-900 font-medium">
                        ¿Cómo definen alcance y evitan costos ocultos?
                        <i className="w-5 h-5 text-indigo-400 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 leading-relaxed text-indigo-500 text-sm">
                        Mediante un Blueprint detallado y firma de alcance antes de iniciar configuración. Cualquier cambio se gestiona vía Change Request formal.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contacto">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-indigo-900 tracking-tight mb-4">Agenda un diagnóstico</h2>
<p className="text-indigo-500">Hablemos de tus retos operativos y cómo SAP puede resolverlos.</p>
</div>
<form className="space-y-6 bg-white p-8 rounded-2xl border border-indigo-200 shadow-xl shadow-indigo-200/50">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Nombre y Apellido</label>
<input className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Email Corporativo</label>
<input className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm" placeholder="nombre@empresa.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Empresa</label>
<input className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm" placeholder="Nombre de tu empresa" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Cargo</label>
<select className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm bg-white">
<option disabled="" selected="" value="">Selecciona tu cargo</option>
<option>Director / C-Level</option>
<option>Gerente Supply Chain / Operaciones</option>
<option>Gerente IT / CIO</option>
<option>Consultor / PM</option>
<option>Otro</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Industria</label>
<select className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm bg-white">
<option disabled="" selected="" value="">Selecciona industria</option>
<option>Manufactura</option>
<option>Retail / Consumo Masivo</option>
<option>Logística / Distribución</option>
<option>Farmacéutica / Química</option>
<option>Automotriz</option>
<option>Otra</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">¿Qué necesitas?</label>
<select className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm bg-white">
<option disabled="" selected="" value="">Selecciona el servicio</option>
<option>Implementación SAP Supply Chain</option>
<option>Optimización Operativa / AMS</option>
<option>Health Check (Diagnóstico)</option>
<option>Otro / Consulta General</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Urgencia</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-brand-blue w-4 h-4" name="urgency" type="radio"/>
<span className="text-sm text-indigo-600">0-30 días</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-brand-blue w-4 h-4" name="urgency" type="radio"/>
<span className="text-sm text-indigo-600">30-90 días</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-brand-blue w-4 h-4" name="urgency" type="radio"/>
<span className="text-sm text-indigo-600">90+ días</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-indigo-700">Comentarios (Opcional)</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-indigo-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-sm" placeholder="Cuéntanos brevemente tu dolor principal..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-4 text-white bg-brand-blue rounded-lg font-semibold hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl" type="button">
                        Agendar diagnóstico
                    </button>
<div className="mt-4 flex items-start gap-2 justify-center">
<input className="mt-1 w-4 h-4 rounded border-indigo-300 accent-brand-blue" id="privacy" type="checkbox"/>
<label className="text-xs text-indigo-400" htmlFor="privacy">Acepto la política de privacidad. Sus datos están seguros.</label>
</div>
<p className="text-center text-xs text-indigo-400 mt-2">Respondemos en 24–48 hrs</p>
</div>
</form>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-green-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                    Hablar por WhatsApp
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-indigo-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="relative w-6 h-6 flex items-center justify-center">
<span className="text-lg font-bold text-indigo-400">PA</span>
</div>
<span className="text-sm font-semibold text-indigo-400">paconsultores</span>
</div>
<div className="flex gap-8 text-sm text-indigo-500">
<a className="hover:text-brand-blue" href="#servicios">Servicios</a>
<a className="hover:text-brand-blue" href="#casos">Casos</a>
<a className="hover:text-brand-blue" href="#">Privacidad</a>
</div>
<div className="text-xs text-indigo-400 text-center md:text-right">
<p>© 2024 paconsultores.</p>
<p>SAP Supply Chain Implementation &amp; Operational Optimization</p>
</div>
</div>
</footer>


    </>
  );
}
