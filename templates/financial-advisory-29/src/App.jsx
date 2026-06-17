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
      

<div className="fixed inset-0 bg-white z-0">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-top"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm rounded-full px-6 py-2.5 flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">Magnus</span>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Servicios</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Nosotros</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#">Contacto</a>
</div>
</div>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">

<div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 border border-indigo-100/60 mb-8 shadow-sm ring-1 ring-white/50 backdrop-blur-sm cursor-default hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-indigo-500 text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-indigo-600 font-medium tracking-wide text-[11px] uppercase">Advisory de alto nivel</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Creando valor <br/>
<span className="text-shine font-semibold">estratégico real.</span>
</h1>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl mx-auto mb-10">
                Soluciones sofisticadas para momentos críticos. Acompañamos cada decisión financiera con rigor técnico, discreción absoluta y visión de largo plazo.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
                        Agendar consulta
                        <iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-6 py-3 bg-white text-slate-600 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                    Ver credenciales
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-32">

<div className="group relative bg-white rounded-2xl p-1 border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-white h-full rounded-xl overflow-hidden flex flex-col p-8 z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 font-semibold tracking-tight mb-3">Sell-Side Advisory</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                        Maximizamos el valor de salida mediante procesos competitivos estructurados, minimizando riesgos y asegurando el cierre.
                    </p>
<ul className="space-y-3 pt-6 border-t border-slate-100">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Valuación y modelado financiero</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Confección de Info Memo</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Gestión integral del Due Diligence</span>
</li>
</ul>
</div>
</div>

<div className="group relative rounded-2xl p-[1px] shadow-[0_20px_50px_-12px_rgba(15,23,42,0.5)] lg:-translate-y-4 hover:-translate-y-5 transition-transform duration-300 z-10">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-slate-700 to-slate-900 rounded-2xl"></div>
<div className="relative bg-slate-900 h-full rounded-2xl overflow-hidden flex flex-col p-8">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-white/10 border border-white/10 text-white flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-semibold uppercase tracking-wider text-indigo-300">Core</span>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Buy-Side Advisory</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                        Asociación estratégica para corporaciones e inversores en la búsqueda, análisis y ejecución de adquisiciones transformadoras.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/10">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Screening de mercado &amp; Targets</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Análisis de sinergias operativas</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Estructuración de la oferta</span>
</li>
</ul>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-1 border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-indigo-100 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative bg-white h-full rounded-xl overflow-hidden flex flex-col p-8 z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-slate-900 font-semibold tracking-tight mb-3">Corporate Services</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                        Consultoría financiera especializada para resolver situaciones corporativas complejas con agilidad y precisión.
                    </p>
<ul className="space-y-3 pt-6 border-t border-slate-100">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Fairness Opinions</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Reorganizaciones societarias</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Alianzas &amp; Joint Ventures</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-3 mt-16 pt-16 border-t border-slate-200/60">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
<span className="text-slate-600 font-medium tracking-wide text-[10px] uppercase">Diferenciales</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                            Socios estratégicos, <br/> no solo asesores.
                        </h2>
<p className="text-slate-500 leading-relaxed mb-10 font-light text-lg">
                            Nuestra propuesta de valor combina la sofisticación técnica de la banca de inversión global con la agilidad y atención personalizada de una firma boutique.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Seniority Involucrado</h4>
<p className="text-xs text-slate-500 leading-relaxed">Socios dedicados directamente a la ejecución del deal, sin delegación excesiva.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:globe-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Red Global</h4>
<p className="text-xs text-slate-500 leading-relaxed">Acceso a compradores e inversores estratégicos en LATAM, USA y Europa.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Confidencialidad</h4>
<p className="text-xs text-slate-500 leading-relaxed">Manejo discreto de la información para proteger el valor del negocio.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Rigor Técnico</h4>
<p className="text-xs text-slate-500 leading-relaxed">Modelado financiero complejo y defensa sólida de la valuación.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Sin Conflictos</h4>
<p className="text-xs text-slate-500 leading-relaxed">Independencia total para priorizar exclusivamente los intereses del cliente.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-600 text-sm" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Agilidad</h4>
<p className="text-xs text-slate-500 leading-relaxed">Procesos eficientes enfocados en el cierre (closing) exitoso.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200">

<div className="absolute inset-0 bg-grid-slate opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-white to-blue-50 opacity-80"></div>

<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute w-64 h-40 bg-white rounded-xl shadow-lg border border-slate-100 transform -translate-x-12 -translate-y-12 rotate-[-6deg] opacity-60 animate-float-delayed flex flex-col p-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="h-2 w-20 bg-slate-100 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-50 rounded-full"></div>
<div className="h-2 w-3/4 bg-slate-50 rounded-full"></div>
</div>
</div>

<div className="absolute w-56 h-32 bg-indigo-50 rounded-xl border border-indigo-100 transform translate-x-16 -translate-y-16 rotate-[3deg] opacity-80 animate-float"></div>

<div className="relative w-72 bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 p-6 z-10 animate-float">

<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:pie-chart-2-bold" width="20"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-slate-200 rounded-full mb-1.5"></div>
<div className="h-1.5 w-12 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>

<div className="flex items-end gap-2 h-24 mb-6 px-1">
<div className="w-full bg-indigo-50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-indigo-300 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[90%] shadow-lg shadow-indigo-500/20"></div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="h-2 w-16 bg-slate-100 rounded-full"></div>
<div className="px-2 py-1 bg-green-50 rounded text-[10px] font-medium text-green-600 border border-green-100">
                                        +24.5% Yield
                                    </div>
</div>
</div>

<div className="absolute bottom-16 -left-4 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20 animate-float-delayed">
<iconify-icon className="text-indigo-500" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Due Diligence</span>
</div>

<div className="absolute top-20 -right-6 bg-white px-4 py-2 rounded-lg shadow-md border border-slate-100 flex items-center gap-2 z-20 animate-float">
<iconify-icon className="text-blue-500" icon="solar:global-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Cross-Border</span>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-32 pt-10 border-t border-slate-200">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded text-[10px] font-bold">M</div>
<p className="text-sm text-slate-900 font-semibold tracking-tight">Magnus Advisors</p>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Aviso Legal</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacidad</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contacto</a>
</div>
<div className="flex items-center gap-2 opacity-60">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-xs text-slate-400">Buenos Aires · New York</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
